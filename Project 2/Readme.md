# Mint And Burn
This Solidity program made to mint and burn tokens in the Solidity programming language. The purpose of this program is to demonstrate the minting and burning of tokens. After minting the tokens are added to the balance of the Sender;
and bruning does the opposite i.e it reduces the balance of the sender.

## Description
This is a contract written in Solidity, which is used to create smart contracts on the Ethereum blockchain. The contract contains two functions, one to mint the tokens, and another to burn the tokens. We also use mapping to associate an unsigned integer to an address(here the uint is the balance associated with the address).

### Getting Started
#### Executing program
To run this program, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at https://remix.ethereum.org/.

Once you are on the Remix website, create a new file by clicking on the "+" icon in the left-hand sidebar. Save the file with a .sol extension (e.g., Project2.sol). Copy and paste the following code into the file:

``` // SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

// Priyanshu Suryawanshi 
// CU UID :- 21CBS1049
// MetaCrafters Name :- Priyanshu955


contract MyToken {

    // public variables here
    string public tokenName = "META"; 
    string public tokenAbbrv = "MTA"; 
    uint public totalSupply = 0; 

    // mapping variable here
    mapping(address=> uint) public balances;

    // mint function
    function mint(address _address,uint _value) public 
    {
        totalSupply += _value;
        balances[_address] += _value;
    }

    // burn function
    function burn(address _address,uint _value) public 
    {
        if (balances[_address]>=_value) {
            totalSupply -= _value;
            balances[_address] -= _value;
        }
    }

}
```
# About Variables :- 
```
// public variables here
    string public tokenName = "META"; 
    string public tokenAbbrv = "MTA"; 
    uint public totalSupply = 0;
// mapping variable here
mapping(address=> uint) public balances;
```
Firstly we have created two publicly accessible string variables which store the name and abbreviation of the token.
Then we have created an unsigned integer to store the total supply of the tokens.
After which we have created a mapping to associate an uint with the address so as to save the balance of the particular account.

# About Functions :-
Mint Function -
```
 // mint function
    function mint(address _address,uint _value) public 
    {
        totalSupply += _value;
        balances[_address] += _value;
    }
```
This function takes an address and an unsigned integer as input.
This function increases the totalSupply and the balance of the passed address as per the passed unsigned integer.

Burn Function -
```
// burn function
    function burn(address _address,uint _value) public 
    {
        if (balances[_address]>=_value) {
            totalSupply -= _value;
            balances[_address] -= _value;
        }
    }
```
This function also takes an address and an unsigned integer as input.
But this function decreases the totalSupply and the balance of the passed address as per the passed unsigned integer.
Additionally this function uses an if statement, so that the function runs only when the balance of the address is more or equal to the passed unit, so as to avoid any error.

# Compilation
To compile the code, click on the "Solidity Compiler" tab in the left-hand sidebar. Make sure the "Compiler" option is set to "0.8.18" (or another compatible version), and then click on the "Compile Project2.sol" button.
Once the code is compiled, you can deploy the contract by clicking on the "Deploy & Run Transactions" tab in the left-hand sidebar. Select the "Project2.sol" contract from the dropdown menu, and then click on the "Deploy" button.

# interacting with the Code
Once the contract is deployed, you can interact with it:-
First, you can copy an demo account's address from the accounts tab.
In deployed contracts, you can paste the address in textbox of balance and check it's balance, which would show zero as we havent minted any tokens yet.Also the total supply would be shown zero due to same reason.


Now to test the mint function, paste the address in address textbox and set the amount of tokens you want to mint,And click mint button. After successful transaction you can check the balance of the address and also the total supply to see that the balance has increased by the amount you have entered to be minted. 

Now to test the burn function, paste the address in address textbox and set the amount of tokens you want to burn,And click burn button. After successful transaction you can check the balance of the address and also the total supply to see that the balance has reduced by the amount you have entered to be burnt.
But, you will no change if you have entered the amount to be burnt greater that the balance of that address. This is because of the if statement, due to which the burn function only runs if the amount to be burnt if less than or equal to the balance of that address.

## Authors
Priyanshu Suryawanshi, Chandigarh university.  

# License
This project is licensed under the [Priyanshu Suryawanshi] License
