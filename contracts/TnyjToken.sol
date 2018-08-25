pragma solidity ^0.4.2;

contract TnyjToken {

  string public name = "Tnyj Token";
  string public symbol = "TNYJ";
  string public standard = "Tnyj Token v1.0";
  
  uint256 public totalSupply;
  mapping(address => uint) public balanceOf;

  constructor(uint256 _initialSupply) public {
    balanceOf[msg.sender] = _initialSupply;
    totalSupply = _initialSupply;
  }
}