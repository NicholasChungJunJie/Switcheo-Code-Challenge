```
For each address, get the total balance of each coin
```
WITH balance_of_each_coin_for_each_address AS (
    SELECT b.address AS address, b.denom AS denom, SUM(b.amount) AS amount
    FROM balances b
    GROUP BY b.address, b.denom;

), 
```
For each address, get the value of the total balance of each coin
```
value_of_each_coin_for_each_address AS (
    SELECT b.address AS address, b.denom AS denom, CASE
                                                    WHEN b.denom = 'usdc' THEN b.amount*0.000001
                                                    WHEN b.denom = 'swth' THEN b.amount*0.00000005
                                                    WHEN b.denom = 'tmz' THEN b.amount*0.003
                                                    END AS val -- account for other denoms using ELSE and setting them as 0
    FROM balance_of_each_coin_for_each_address b;
),
```
For each address, get its total value 
```
total_balance_for_each_address(
    SELECT v.address AS address, SUM(v.val) AS total_balance
    FROM value_of_each_coin_for_each_address v
    GROUP BY v.address
)

-- get all addresses with total balance of >= 500
(SELECT DISTINCT tb.address
FROM total_balance_for_each_address tb
WHERE tb.total_balance >= 500)

INTERSECT

-- get all addresses that recently made a trade
(SELECT DISTINCT t.address
FROM trades t
WHERE t.block_height > 730000)
;
