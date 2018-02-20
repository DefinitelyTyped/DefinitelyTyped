// Type definitions for Vega 3.0
// Project: https://vega.github.io/vega/
// Definitions by: Tom Crockett <https://github.com/pelotom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { AutoSize } from './autosize';
import { Background } from './background';
import { Padding } from './padding';
import { Scope } from './scope';
import { EncodeEntry, Encode } from './encode';
export interface Spec extends Scope, Encode<EncodeEntry> {
    '$schema': string;
    width?: number;
    height?: number;
    config?: any;
    description?: string;
    padding?: Padding;
    autosize?: AutoSize;
    background?: Background;
}
