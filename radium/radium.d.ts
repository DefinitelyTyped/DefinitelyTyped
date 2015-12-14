// Type definitions for radium
// Project: https://github.com/FormidableLabs/radium
// Definitions by: Basarat <https://github.com/basarat/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

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
