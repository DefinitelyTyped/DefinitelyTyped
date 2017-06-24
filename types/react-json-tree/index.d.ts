// Type definitions for react-json-tree v0.6.5
// Project: https://github.com/alexkuz/react-json-tree/
// Definitions by: Grant Nestor <https://github.com/gnestor/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import {
    Component,
    Props
} from "react";

export interface JSONTreeProps extends Props<JSONTreeComponent> {
    data: [any] | {};
    hideRoot?: boolean;
    theme?: {} | string;
    invertTheme?: boolean;
    keyPath?: [string | number];
    sortObjectKeys?: Function | boolean;
    shouldExpandNode?: (keyPath: (string | number)[], data: [any] | {}, level: number) => boolean;
    getItemString?: (type: string, data: [any] | {}, itemType: string, itemString: string) => JSX.Element;
    labelRenderer?: (raw: [string, string]) => JSX.Element;
    valueRenderer?: (raw: string) => JSX.Element;
    postprocessValue?: (raw: string) => JSX.Element;
    isCustomNode?: () => boolean;
    collectionLimit?: number;
}

export default class JSONTreeComponent extends Component<JSONTreeProps> { }
