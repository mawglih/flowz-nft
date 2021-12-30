import React from 'react';
import { useWeb3 } from '../../providers/web3/index.js';
import { useAccount } from '../../providers/web3/hooks/useAccount';
import '../../App.css';

const NavBar = ({
    title,
}) => {
    const { connect, isLoading, isWeb3Loaded} = useWeb3();
    const { account } = useAccount();
    console.log(account)
    return (
        <div className="navbar-container">
            <div className="navbar-title">{title}</div>
            <div className="navbar-account">{account}</div>
            <div className='navbar-btn'>
                { isLoading ?
                    <button 
                        type="button" 
                        className=''
                        disabled={true}
                        onClick={connect}
                    >
                        Loading...
                    </button> :
                    isWeb3Loaded ?
                    <button 
                        type="button" 
                        className=''
                        onClick={connect}>
                        Connect
                    </button> :
                    <button 
                        type="button" 
                        className=''
                        onClick={() => window.open("https://metamask.io/download.html", "_blank")}
                    >
                    Install Metamask
                    </button>
                }
            </div>
        </div>
    )
}

export default NavBar;
