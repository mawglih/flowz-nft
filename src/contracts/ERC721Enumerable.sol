// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ERC721.sol";
import "./interfaces/IERC721Enumerable.sol";

contract ERC721Enumerable is ERC721, IERC721Enumerable {
    mapping(uint256 => uint256) private _allTokenIndex;
    mapping(address => uint256[]) private _allTokensByOwner;
    mapping(uint256 => uint256) private _ownedTokenIndex;
    uint256[] private _allTokens;

    constructor() {
        _registerInterface(
            bytes4(
                keccak256("totalSupply(bytes4)") ^
                    keccak256("tokenByIndex(bytes4)") ^
                    keccak256("tokenOfOwnerByIndex(bytes4)")
            )
        );
    }

    function tokenByIndex(uint256 index)
        public
        view
        override
        returns (uint256)
    {
        require(index < totalSupply(), "global index out of bounds");
        return _allTokens[index];
    }

    function tokenOfOwnerByIndex(address owner, uint256 index)
        public
        view
        override
        returns (uint256)
    {
        require(index < balanceOf(owner), "owner out of bounds");
        return _allTokensByOwner[owner][index];
    }

    // function tokenByIndex(uint256 _index) external view returns (uint256);
    function totalSupply() public view override returns (uint256) {
        return _allTokens.length;
    }

    function _addTokensToAllTokenEnumeration(uint256 tokenId) private {
        _allTokenIndex[tokenId] = _allTokens.length;
        _allTokens.push(tokenId);
    }

    function _addTokensToOwnerEnumeration(uint256 tokenId, address to) private {
        _allTokenIndex[tokenId] = _allTokensByOwner[to].length;
        _allTokensByOwner[to].push(tokenId);
    }

    function _addTokensToTotalSupply(uint256 tokenId) private {
        _allTokens.push(tokenId);
    }

    function _mint(address to, uint256 tokenId) internal override(ERC721) {
        super._mint(to, tokenId);
        _addTokensToAllTokenEnumeration(tokenId);
        _addTokensToOwnerEnumeration(tokenId, to);
    }
}
