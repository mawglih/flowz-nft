// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC721Connector.sol";

contract CryptoBird is ERC721Connector {
    string[] public CryptoBirdz;
    mapping(string => bool) _cryptoBirdzExists;

    constructor() ERC721Connector("CryptoBird", "CBIRDZ") {}

    function mint(string memory _cryptoBird) public {
        require(
            !_cryptoBirdzExists[_cryptoBird],
            "Error! - CryptoBird already exist!"
        );
        CryptoBirdz.push(_cryptoBird);
        uint256 _id = CryptoBirdz.length - 1;
        _mint(msg.sender, _id);
        _cryptoBirdzExists[_cryptoBird] = true;
    }
}
