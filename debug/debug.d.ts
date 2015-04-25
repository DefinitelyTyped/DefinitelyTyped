// Type definitions for debug
// Project: https://github.com/visionmedia/debug
// Definitions by: Seon-Wook Park <https://github.com/swook>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "debug" {

    function d(namespace: string): d.Debugger;

    module d {
        export var log: Function;

        function enable(namespaces: string): void;
        function disable(): void;

        function enabled(namespace: string): boolean;

        export interface Debugger {
            (formatter: any, ...args: any[]): void;

            enabled:   boolean;
            log:       Function;
            namespace: string;
        }
    }

    export = d;

}

