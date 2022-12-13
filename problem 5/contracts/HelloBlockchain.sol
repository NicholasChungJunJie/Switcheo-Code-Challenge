// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.9.0;
import "../../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract HelloBlockchain {
    enum StateType { Request, Respond }

    StateType public  State;
    address public  Requestor;
    address public  Responder;

    string public RequestMessage;
    string public ResponseMessage;

    constructor(string memory message) {
        Requestor = msg.sender;
        RequestMessage = message;
        State = StateType.Request;
        
    }
    struct ADD {
        address token;
        uint256 balance;
    }

    function getBalances (address contractAddress ,address[] memory tokensAddress) public view returns (ADD[] memory){
        
        ADD[] memory balance = new ADD[](tokensAddress.length); // array of struct
        for(uint256 i = 0; i<tokensAddress.length; i++) {
            uint256 tempBalance= IERC20(contractAddress).balanceOf(tokensAddress[i]); // get token blance of wallet from contract address
            balance[i].balance = tempBalance;
            balance[i].token = tokensAddress[i];
        }

        return balance;
    }
   

    // call this function to send a request
    function SendRequest(string memory requestMessage) public {

        if (Requestor != msg.sender) {
            revert();
        }

        RequestMessage = requestMessage;
        State = StateType.Request;
    }

    // call this function to send a response
    function SendResponse(string memory responseMessage) public {

        Responder = msg.sender;
        ResponseMessage = responseMessage;
        State = StateType.Respond;
    }

    
}
