// Type definitions for react-helmet 4.0
// Project: https://github.com/nfl/react-helmet
// Definitions by: Evan Bremer <https://github.com/evanbb>, Isman Usoh <https://github.com/isman-usoh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="react" />

import * as React from "react";

declare function ReactHelmet(): ReactHelmet.HelmetComponent;

declare namespace ReactHelmet {
    function peek(): ReactHelmet.HelmetData;
    function rewind(): ReactHelmet.HelmetData;

    interface HelmetProps {
        base?: any;
        defaultTitle?: string;
        htmlAttributes?: any;
        link?: Array<any>;
        meta?: Array<any>;
        script?: Array<any>;
        style?: Array<any>;
        title?: string;
        titleTemplate?: string;
        onChangeClientState?: (newState: any) => void;
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
        toComponent(): React.Component<any>;
    }

    class HelmetComponent extends React.Component<HelmetProps> {}
}

export = ReactHelmet;
