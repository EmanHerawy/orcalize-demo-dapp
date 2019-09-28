const Migrations = artifacts.require('ExampleContract');

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
