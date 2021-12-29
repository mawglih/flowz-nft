import React, { useEffect, useMemo, useState, createContext, useContext } from 'react';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import { setupHooks } from './hooks/setupHooks';

const Web3Context = createContext(null);

export default function Web3Provider({children}) {

    const [web3Api, setWeb3Api] = useState({
        provider: null,
        web3: null,
        contract: null,
        isLoading: true,
    });
    const loadProvider =  async () => {
        const provider = await detectEthereumProvider();
        if(provider) {
            console.log('ether wallet connected');
            console.log('provider', provider);
            const web3 = new Web3(provider);
            setWeb3Api({
                provider,
                web3,
                contract: null,
                isLoading: false,
            });
            console.log('web3', web3);
        } else {
            setWeb3Api( api => ({...api, isInitialized: true}))
            console.log('no ethereum detected');
        }
    }

    const _web3Api = useMemo(() => {
        const { web3, provider } = web3Api;
        return {
            ...web3Api,
            isWeb3Loaded: web3 != null,
            gethooks:() => setupHooks(web3),
            connect: provider ?
                async () => {
                    try {
                        await provider.request({ method: "eth_requestAccounts" });
                        console.log('clicked')
                    } catch {
                        console.error("cannot retrieve account");
                        window.location.reload();
                    }
                } :
                () => console.error("cannot connect to metamask, try to reload your browser")
        }
    }, [web3Api]);

    useEffect(() => {
        loadProvider();
    }, []);

    return (
        <Web3Context.Provider value={_web3Api}>
            {children}
        </Web3Context.Provider>
    )
}

export function useWeb3() {
    return useContext(Web3Context);
}

export function useHooks(cb) {
    const { getHooks } = useWeb3();
    return cb(getHooks());
}