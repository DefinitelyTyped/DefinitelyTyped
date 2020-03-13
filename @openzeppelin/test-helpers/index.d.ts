// Type definitions for test-helpers 0.1
// Project: https://github.com/OpenZeppelin/openzeppelin-test-helpers
// Definitions by: John Kim <https://github.com/johnplutusds/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///// <reference types="truffle-typings"/>

/*
BN,
    get balance () { return require('./src/balance'); },
get constants () { return require('./src/constants'); },
get ether () { return require('./src/ether'); },
get expectEvent () { return require('./src/expectEvent'); },
get makeInterfaceId () { return require('./src/makeInterfaceId'); },
get send () { return require('./src/send'); },
get expectRevert () { return require('./src/expectRevert'); },
get singletons () { return require('./src/singletons'); },
get time () { return require('./src/time'); },
*/


/**
 * @author: john@plutusds.com
 * @version: 0.1, 03/12/2020
 */
declare module "@openzeppelin/test-helpers" {

    import Web3 from "web3";
    import {TruffleContract} from 'truffle-typings';
    //import {Account, BlockNumber, Transaction, TransactionReceipt, Log, EventLog} from "web3-core";
    //import {Account, BlockNumber, Transaction, TransactionReceipt, Log, EventLog} from "web3-core";
    //import {PromiEvent} from 'web3';



    import BN from 'bn.js';
    import {AbiItem} from "web3-utils";


    namespace time {

        /**
         * I found this from the tests only.
         * @param endBlock
         */
        function advanceBlockTo(endBlock: BN): Promise<any>;

        function advanceBlock(): Promise<any>;

        function latest(): Promise<BN>;

        function latestBlock(): Promise<BN>;

        function increase (duration: string|number|BN): Promise<any>;

        /**
         * Beware that due to the need of calling two separate ganache methods and rpc calls overhead
         * it's hard to increase time precisely to a target point so design your test to tolerate
         * small fluctuations from time to time.
         *
         * @param target time in seconds
         */
        function increaseTo (target: string|BN): Promise<any>;

        const duration: Duration;
    }

    interface Duration {
        seconds: (val: string|number) => BN;
        minutes: (val: string|number) => BN;
        hours: (val: string|number) => BN;
        days: (val: string|number) => BN;
        weeks: (val: string|number) => BN;
        years: (val: string|number) => BN;
    }

    namespace singletons {

        function ERC1820Registry(funder: string): Promise<any>; //TruffleContract

    }

    namespace expectRevert {

        function assertion(promise: Promise<any>, expectedError?: string): void;
        function outOfGas(promise: Promise<any>, expectedError?: string): void;
        function unspecified(promise: Promise<any>, expectedError?: string): void;

    }

    function expectRevert(promise: Promise<any>, expectedError?: string): void


    namespace send {

        //await assertFailure(send.transaction(this.acknowledger, 'foo', 'uint256, uint256', [3, 5]), opts);

        //jsonInterface: AbiItem[] | AbiItem
        //function transaction(target: AbiItem[] | AbiItem, name: string, argsTypes: any, argsValues: any, opts: any): Promise<TransactionReceipt>;
        function transaction(target: any, name: string, argsTypes: any, argsValues: any, opts?: any): Promise<TransactionReceipt>;

        function ether(from: string, to: string, value: number|BN): Promise<TransactionReceipt>;

    }

    interface TransactionReceipt {
        status: boolean;
        transactionHash: string;
        transactionIndex: number;
        blockHash: string;
        blockNumber: number;
        from: string;
        to: string;
        contractAddress?: string;
        cumulativeGasUsed: number;
        gasUsed: number;
        logs: Log[];
        logsBloom: string;
        events?: {
            [eventName: string]: EventLog;
        };
    }

    export interface Log {
        address: string;
        data: string;
        topics: string[];
        logIndex: number;
        transactionIndex: number;
        transactionHash: string;
        blockHash: string;
        blockNumber: number;
    }

    export interface EventLog {
        event: string;
        address: string;
        returnValues: any;
        logIndex: number;
        transactionIndex: number;
        transactionHash: string;
        blockHash: string;
        blockNumber: number;
        raw?: {data: string; topics: any[]};
    }


    namespace makeInterfaceId {

        function ERC165(functionSignatures: any[]): string;

        function ERC1820(interfaceName: string): string|null;
    }

    /**
     * TODO: events
     */
    namespace expectEvent {

        namespace not {
            function inConstruction(account: string, unit: 'Nonexistant'|'WillNeverBeEmitted'|'String'|'Boolean'|'ShortUint'|'UnemittedEvent', eventArgs?: any): Promise<BN>;

            function inTransaction(txHash: string, emitter: any, eventName: string, eventArgs?: any): Promise<Tracker>;
        }

        //async function inConstruction (contract, eventName, eventArgs = {}) {
        //function expectEvent => inConstruction;
        //function expectEvent(account: string, unit: 'String'|'Boolean'|'ShortUint'|'UnemittedEvent'): Promise<BN>;

        //function(receipt: any, eventName: string, eventArgs?: any) => any;
        //function(receipt: any, eventName: string, eventArgs?: any): any;
        //import construct = Reflect.construct;


        function inConstruction(account: string, unit: 'WillNeverBeEmitted'|'String'|'Boolean'|'ShortUint'|'UnemittedEvent', eventArgs?: any): Promise<BN>;

        //async function inTransaction (txHash, emitter, eventName, eventArgs = {}) {

        function inTransaction(txHash: string, emitter: any, eventName: string, eventArgs?: any): Promise<Tracker>;
    }

    function expectEvent(account: string, unit: 'LongInt'|'Argumentless'|'IndirectString'|'LongUintBooleanString'|'Bytes'|'Address'|'LongUint'|'String'|'Boolean'|'ShortUint'|'ShortInt'|'UnemittedEvent', eventArgs?: any): any;



    function ether(n: string|BN): BN;

    namespace constants {
        const ZERO_ADDRESS: string;
        const MAX_UINT256: BN;
        const MAX_INT256: BN;
        const MIN_INT256: BN;
    }

    namespace balance {
        function current(account: string, unit?: 'wei'|'ether'|'gwei'): Promise<BN>;
        function tracker(owner: string, unit?: 'wei'|'ether'|'gwei'): Promise<Tracker>;
    }

    class Tracker {
        /* Ex)
                Tracker {
                account: '0x5F62053E8a412B14b6108C0c918f5e132fCc0C33',
                unit: 'wei',
                prev: BN {
                negative: 0,
                words: [ 6625280, 26891233, 21523 ],
                length: 3,
                red: null
            }
        }
        */
        constructor(account: string, unit: 'wei|ether');

        account: string;
        unit: 'wei';
        prev: BN;

        delta(unit?: 'wei'|'ether'): Promise<BN>;

        get(unit?: 'wei'|'ether'): Promise<BN>;
    }

}

