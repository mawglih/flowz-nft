// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC721Connector.sol";

contract KryptoFlow is ERC721Connector {
    string[] public KryptoFlowz;
    mapping(string => bool) _kryptoFlowzExists;

    constructor() ERC721Connector("KryptoFlow", "KPFLWS") {}

    function mint(string memory _kryptoFlow) public {
        require(
            !_kryptoFlowzExists[_kryptoFlow],
            "Error! - KryptoBird already exist!"
        );
        KryptoFlowz.push(_kryptoFlow);
        uint256 _id = KryptoFlowz.length - 1;
        _mint(msg.sender, _id);
        _kryptoFlowzExists[_kryptoFlow] = true;
    }
}
