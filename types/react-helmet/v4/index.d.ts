// Type definitions for react-helmet 4.0
// Project: https://github.com/nfl/react-helmet
// Definitions by: Evan Bremer <https://github.com/evanbb>, Isman Usoh <https://github.com/isman-usoh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="react" />

import * as React from "react";

declare class ReactHelmet extends React.Component<ReactHelmet.HelmetProps> {}

declare namespace ReactHelmet {
    function peek(): ReactHelmet.HelmetData;
    function rewind(): ReactHelmet.HelmetData;

    interface HelmetProps {
        base?: any;
        defaultTitle?: string | undefined;
        htmlAttributes?: any;
        link?: Array<any> | undefined;
        meta?: Array<any> | undefined;
        script?: Array<any> | undefined;
        style?: Array<any> | undefined;
        title?: string | undefined;
        titleTemplate?: string | undefined;
        onChangeClientState?: ((newState: any) => void) | undefined;
    }

    interface HelmetData {
        base: HelmetDatum;
        htmlAttributes: HelmetDatum;
        link: HelmetDatum;
        meta: HelmetDatum;
        script: HelmetDatum;
        style: HelmetDatum;
        title: HelmetDatum;
    }

    interface HelmetDatum {
        toString(): string;
        toComponent(): React.ReactElement;
    }
}

export = ReactHelmet;
