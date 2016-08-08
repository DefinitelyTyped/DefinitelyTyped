// Type definitions for radium 0.17.1
// Project: https://github.com/formidablelabs/radium
// Definitions by: Alex Gorbatchev <https://github.com/alexgorbatchev/>, Philipp Holzer <https://github.com/nupplaphil/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/react.d.ts"/>

declare module 'radium' {
    import React = require('react');

    interface ReactComponent<P, S> {
        new (p: P): React.Component<P, S>;
    }

    var Radium: {
        <T extends ReactComponent<any, any>>(comp: T): T;
    };

    export = Radium;
}
