import React, { useEffect, useMemo, useState } from 'react';
import KryptoFlow from '../abis/KryptoFlow.json';
import Layout from './ui/regular/Layout';


const App = () => {
    
    let web3;
    // const [account, setAccount] = useState('');
    const [contract, setContract] = useState(null);
    const [totalSupply, setTotalSupply] = useState(0);
    const [kryptoFlow, setKryptoFlow] = useState([]);
    const [value, setValue] = useState('');


    // const loadProvider =  async () => {
    //     const provider = await detectEthereumProvider();
    //     if(provider) {
    //         console.log('ether wallet connected');
    //         console.log('provider', provider);
    //         const web3 = new Web3(provider);
    //         setWeb3Api({
    //             provider,
    //             web3,
    //             contract: null,
    //             isInitialized: true
    //         });
    //         console.log('web3', web3);
    //     } else {
    //         setWeb3Api( api => ({...api, isInitialized: true}))
    //         console.log('no ethereum detected');
    //     }
    // }

    // const _web3Api = useMemo(() => {
    //     return {
    //         ...web3Api,
    //         hooks: setupHooks(web3Api.provider),
    //         connect: web3Api.provider ?
    //             async () => {
    //                 try {
    //                     await web3Api.provider.request({ method: "eth_requestAccounts" });
    //                     console.log('clicked')
    //                 } catch {
    //                     console.error("cannot retrieve account");
    //                     window.location.reload();
    //                 }
    //             } :
    //             () => console.error("cannot connect to metamask, try to reload your browser")
    //     }
    // }, [web3Api]);


    // const loadBlockchainData = async () => {
    //     const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    //     setAccount(accounts);
    //     const netId = await web3.eth.net.getId();
    //     const networkData = KryptoFlow.networks[netId];
    //     if(networkData) {
    //         const abi = KryptoFlow.abi;
    //         const address = networkData.address;
    //         // Web3EthContract.setProvider('ws://localhost:8546');
    //         // const contract = new Web3EthContract(abi, address);
     
    //         setContract({ contract });
    //         const totalSupply = await contract.methods.totalSupply().call();
    //         setTotalSupply({ totalSupply });
    //         for(let i = 1; i <= totalSupply; i++) {
    //             let KryptoFlow =  await contract.methods.KryptoFlowz(i - 1).call();
    //             setKryptoFlow([...kryptoFlow, KryptoFlow]);
    //         }
    //     } else {
    //         window.alert('Smart contract is not deployed');
    //     }

    // }

    // const mint = (kriptoFlower) => {
    //     console.log('account', account[0]);
    //     console.log('contract', contract);
    //     contract.methods.mint(kriptoFlower).send({ from: account[0]})
    //     .once('receipt', () => {
    //         setKryptoFlow([...kryptoFlow, KryptoFlow]);
    //     });
    // }

    const onFormSubmit = e => {
        e.preventDefault();
        console.log('value is', value);
        // mint(value);
    }


    return (

        <Layout>
            <div className="form-container">
                <form className="form-mint" onSubmit={e => onFormSubmit(e)}>
                    <label>
                        <span>Input text for minting</span>
                        <input 
                            value={value}
                            onChange={e =>setValue(e.target.value)}
                            type="text"
                            name="kryptoText"                        />
                    </label>
                    <button className="form-button" type='submit'>Submit</button>
                </form>
            </div>
        </Layout>
    );
}

export default App;