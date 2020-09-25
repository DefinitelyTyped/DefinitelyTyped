import type { Contract, Web3 } from './CommonTypes';
import BN = require("bn.js");

export namespace EthereumHelpers {
    function isMainnet(web3: Web3): Promise<boolean>;
    interface ContractCallOptions {
        from?: string;
        gasPrice?: string;
        gas?: number;
        value?: number | string | BN;
    }
    interface ContractCall {
        send(options: ContractCallOptions, callback?: (err: Error, transactionHash: string) => void): Promise<any>;
        estimateGas(options: ContractCallOptions, callback?: (err: Error, gas: number) => void): Promise<number>;
        call(params: any): any;
    }
    function readEventFromTransaction(web3: Web3, transaction: any, sourceContract: Contract, eventName: string): {
        [key: string]: string;
    };
    function getEvent(sourceContract: Contract, eventName: string, filter?: any): Promise<any>;
    function getExistingEvent(source: Contract, eventName: string, filter?: any): Promise<any>;
    function bytesToRaw(bytesString: string): string;
    function sendSafely(boundContractMethod: ContractCall, sendParams?: ContractCallOptions, forceSend?: boolean): Promise<any>;
    interface Artifact {
        contractName: string;
        abi: any;
        networks: {
            [netId: string]: {
                address: string;
            };
        };
    }
    function sendSafelyRetryable(boundContractMethod: ContractCall, sendParams: ContractCallOptions, forceSend: boolean, totalAttempts: number): Promise<any>;
    function getDeployedContract(artifact: Artifact, web3: Web3, networkId: string): Contract;
}
