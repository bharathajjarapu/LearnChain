const CertificateRegistry = artifacts.require("CertificateRegistry");

module.exports = function(deployer) {
  deployer.deploy(CertificateRegistry)
    .then(() => {
      console.log('Contract deployed to:', CertificateRegistry.address);
    });
}; 