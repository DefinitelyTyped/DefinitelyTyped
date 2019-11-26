// Type definitions for promised-temp 0.1
// Project: https://www.npmjs.com/package/promised-temp, https://github.com/mikaturunen/promised-temp
// Definitions by: Saqib Rokadia <https://github.com/rokadias>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as fs from 'fs';
import { AffixOptions, AffixOptions as _A,
         OpenFile, OpenFile as _O,
         Stats, Stats as _S } from "temp";

interface TempStatic {
    dir: string;
    track(value?: boolean): TempStatic;

    path(affixes?: string | AffixOptions, defaultPrefix?: string): string;
    mkdir(affixes?: string | AffixOptions): Promise<string>;
    open(affixes?: string | AffixOptions): Promise<OpenFile>;
    cleanup(): Promise<boolean | Stats>;
    createWriteStream(affixes?: string | AffixOptions): Promise<fs.WriteStream>;
}
declare namespace PromisedTemp {
    type AffixOptions = _A;
    type OpenFile = _O;
    type Stats = _S;
}

declare var PromisedTemp: TempStatic;
export = PromisedTemp;
