// Type definitions for react-global-configuration 1.3
// Project: https://github.com/morenofa/react-global-configuration#readme
// Definitions by: Ryo Kikuchi <https://github.com/ryokik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface Options {
    freeze: boolean;
    assign: boolean;
}

declare namespace ReactGlobalConfiguration {
    function set(newConfiguration: any, newOptions?: Options): void;
    function get(key?: string): any;
    function get<Value = any>(key: string, fallbackValue: Value): Value;
    function serialize(): string;
}

export default ReactGlobalConfiguration;
