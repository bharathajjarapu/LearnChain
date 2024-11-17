pragma solidity ^0.8.0;

contract CertificateRegistry {
    struct Certificate {
        string name;
        string achievement;
        uint256 timestamp;
        bool isValid;
    }
    
    mapping(uint256 => Certificate) public certificates;
    
    event CertificateRegistered(uint256 indexed id, string name, string achievement);
    event CertificateVerified(uint256 indexed id, bool isValid);
    
    function registerCertificate(uint256 _id, string memory _name, string memory _achievement) public {
        require(!certificates[_id].isValid, "Certificate ID already exists");
        
        certificates[_id] = Certificate({
            name: _name,
            achievement: _achievement,
            timestamp: block.timestamp,
            isValid: true
        });
        
        emit CertificateRegistered(_id, _name, _achievement);
    }
}