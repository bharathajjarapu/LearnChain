// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateRegistry {
    struct Certificate {
        string name;
        string achievement;
        uint256 timestamp;
        bool isValid;
    }
    
    mapping(uint256 => Certificate) public certificates;
    mapping(uint256 => address) public certificateOwners;
    
    event CertificateRegistered(
        uint256 indexed id,
        string name,
        string achievement,
        uint256 timestamp
    );
    
    event CertificateVerified(
        uint256 indexed id,
        bool isValid,
        string name,
        string achievement,
        uint256 timestamp
    );
    
    function registerCertificate(
        uint256 _id,
        string memory _name,
        string memory _achievement
    ) public {
        require(!certificates[_id].isValid, "Certificate ID already exists");
        
        certificates[_id] = Certificate({
            name: _name,
            achievement: _achievement,
            timestamp: block.timestamp,
            isValid: true
        });
        
        certificateOwners[_id] = msg.sender;
        
        emit CertificateRegistered(_id, _name, _achievement, block.timestamp);
    }
    
    function verifyCertificate(uint256 _id) public view returns (
        bool,
        string memory,
        string memory,
        uint256
    ) {
        Certificate memory cert = certificates[_id];
        return (
            cert.isValid,
            cert.name,
            cert.achievement,
            cert.timestamp
        );
    }
    
    function invalidateCertificate(uint256 _id) public {
        require(
            msg.sender == certificateOwners[_id],
            "Only certificate owner can invalidate"
        );
        require(
            certificates[_id].isValid,
            "Certificate already invalidated"
        );
        
        certificates[_id].isValid = false;
    }
}