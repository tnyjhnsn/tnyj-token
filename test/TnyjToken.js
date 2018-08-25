var TnyjToken = artifacts.require('./TnyjToken.sol')

contract('TnyjToken', accounts => {
  it('sets the total supply upon deployment', () => {
    return TnyjToken.deployed().then(instance => {
      tokenInstance = instance
      return tokenInstance.totalSupply()
    }).then(totalSupply => {
      assert.equal(totalSupply.toNumber(), 1000000, 'sets total supply to 1,000,000')
    })
  })
})