// Type definitions for react-helmet 4.0
// Project: https://github.com/nfl/react-helmet
// Definitions by: Evan Bremer <https://github.com/evanbb>, Isman Usoh <https://github.com/isman-usoh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="react" />

import * as React from "react";

declare class ReactHelmet extends React.Component<ReactHelmet.HelmetProps> {}

declare namespace ReactHelmet {
    function peek(): ReactHelmet.HelmetData;
    function rewind(): ReactHelmet.HelmetData;

    interface HelmetProps extends React.Props {
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
        htmlAttributes: HelmetHtmlAttributesDatum;
        link: HelmetDatum;
        meta: HelmetDatum;
        script: HelmetDatum;
        style: HelmetDatum;
        title: HelmetDatum;
    }

    interface HelmetDatum {
        toString(): string;
        // misnamer -- this actually returns an element
        // title returns a 1-tuple instead for some reason
        toComponent(): React.ReactElement<any> | [React.ReactElement<any>];
    }

    interface HelmetHtmlAttributesDatum {
        toString(): string;
        // this is not a react element at all
        toComponent(): object;
    }
}

export = ReactHelmet;
