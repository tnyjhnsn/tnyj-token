var TnyjToken = artifacts.require("./TnyjToken.sol");

module.exports = function (deployer) {
  deployer.deploy(TnyjToken);
};
