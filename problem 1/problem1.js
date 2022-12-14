var sum_to_n_a = function(n) {
    // your code here   

    // assume n is always non negative
    var sum = 0;
    for(let i = 1; i<=n; i++) {
        sum+=i;
    }
    return sum;
};

var sum_to_n_b = function(n) {
    // your code here

    // assume n is always non negative
    var sum = (n*(n+1))/2;
    return sum;
};

var recurse = function (sum , n) {
    if( n == 0) {
        return sum;
    }
    return recurse(sum + n, n-1);
}

var sum_to_n_c = function(n) {
    // your code here

    // assume n is always non negative
    var nums = Array.from(Array(n), (_,i) => i+1);
    const sum = nums.reduce((accumulator, curr_value) => accumulator + curr_value, 0);

    return sum;
};

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));