// Type definitions for react-coinhive 1.0
// Project: https://github.com/dragma/react-coinhive
// Definitions by: sktbcbbs <https://github.com/sktbcbbs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface CoinHiveProps {
    autoThreads?: boolean;

    run?: boolean;

    siteKey: string;

    src?: string;

    threads?: number;

    throttle?: number;

    userName?: string;

    onInit?: (callback: any) => void;

    onStart?: (callback: any) => void;

    onStop?: (callback: any) => void;
}

export default class CoinHive extends React.Component<CoinHiveProps, any> {
    static getMinerData(miner: any): any;

    static src: {
        authedmine: string;
        coinhive: string;
    };

    onInit(miner: any): any;

    onStart(miner: any): any;

    onStop(miner: any): any;
}
