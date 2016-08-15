// Type definitions for react-helmet
// Project: https://github.com/nfl/react-helmet
// Definitions by: Evan Bremer <https://github.com/evanbb>, Isman Usoh <https://github.com/isman-usoh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts" />

declare namespace ReactHelmet {
    import React = __React;
    
    interface HelmetProps {
        base?: any;
        htmlAttributes?: any;
        link?: Array<any>;
        meta?: Array<any>;
        script?: Array<any>;
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
        title: HelmetDatum;
    }
    
    interface HelmetDatum {
        toString(): string;
        toComponent(): React.Component<any, any>;
    }

    class HelmetComponent extends React.Component<HelmetProps, any> {}
}

declare module "react-helmet" {
    var Helmet: {
        (): ReactHelmet.HelmetComponent
        rewind(): ReactHelmet.HelmetData
    }
    
    export = Helmet;
}
