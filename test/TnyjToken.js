var TnyjToken = artifacts.require('./TnyjToken.sol')

contract('TnyjToken', accounts => {

  var tokenInstance

  it('initialises the contract with the correct values', () => {
    return TnyjToken.deployed().then(instance => {
      tokenInstance = instance
      return tokenInstance.name()
    }).then(name => {
      assert.equal(name, 'Tnyj Token', 'has the correct name')
      return tokenInstance.symbol()
    }).then(symbol => {
      assert.equal(symbol, 'TNYJ', 'has the correct symbol')
      return tokenInstance.standard()
    }).then(standard => {
      assert.equal(standard, 'Tnyj Token v1.0', 'has the correct standard')
    })
  })

  it('allocates the initial supply upon deployment', () => {
    return TnyjToken.deployed().then(instance => {
      tokenInstance = instance
      return tokenInstance.totalSupply()
    }).then(totalSupply => {
      assert.equal(totalSupply.toNumber(), 1000000, 'sets total supply to 1,000,000')
      return tokenInstance.balanceOf(accounts[0])
    }).then(adminBalance => {
      assert.equal(adminBalance.toNumber(), 1000000, 'it allocates the initial supply to the admin account')
    })
  })
})