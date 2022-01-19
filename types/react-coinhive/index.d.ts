// Type definitions for react-coinhive 1.0
// Project: https://github.com/dragma/react-coinhive
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface CoinHiveProps {
    autoThreads?: boolean | undefined;

    run?: boolean | undefined;

    siteKey: string;

    src?: string | undefined;

    threads?: number | undefined;

    throttle?: number | undefined;

    userName?: string | undefined;

    onInit?: ((callback: any) => void) | undefined;

    onStart?: ((callback: any) => void) | undefined;

    onStop?: ((callback: any) => void) | undefined;
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
