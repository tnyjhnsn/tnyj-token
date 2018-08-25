pragma solidity ^0.4.2;

contract TnyjToken {
  
  // Constructor
  // Set tot number of tokens
  // Read tot number of tokens
  
  uint256 public totalSupply;

  constructor() public {
    totalSupply = 1000000;
  }
}