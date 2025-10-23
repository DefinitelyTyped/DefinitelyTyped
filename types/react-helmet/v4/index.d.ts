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
        link?: any[] | undefined;
        meta?: any[] | undefined;
        script?: any[] | undefined;
        style?: any[] | undefined;
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
