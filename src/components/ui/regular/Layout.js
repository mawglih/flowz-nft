import React from 'react';
import { Web3Provider } from '../../providers';
import NavBar from './NavBar';
import Footer from './Footer';

export default({ children}) => (
    <Web3Provider>
        <div>
            <NavBar title="Flowers NFT"/>
            <div>
                {children}
            </div>
        </div>
        <Footer/>
    </Web3Provider>
)
