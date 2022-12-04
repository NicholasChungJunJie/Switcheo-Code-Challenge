// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.9.0;

contract HelloBlockchain {
    enum StateType { Request, Respond }

    StateType public  State;
    address public  Requestor;
    address public  Responder;

    string public RequestMessage;
    string public ResponseMessage;

    constructor(string memory message) {
        // Requestor = msg.sender;
        // RequestMessage = message;
        // State = StateType.Request;
        
    }
    struct ADD {
        address token;
        uint256 balance;
    }
    
    


    function getBalances (address[] memory tokens_add) public view returns (ADD[] memory){
    
        ADD[] memory balance = new ADD[](tokens_add.length);
        for(uint256 i = 0; i<tokens_add.length; i++) {
            // TO DO
            balance[i].token = tokens_add[i];
            balance[i].balance = tokens_add[i].balance;
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
