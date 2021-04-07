// Type definitions for level 6.0
// Project: https://github.com/Level/level
// Definitions by: danielfx90 <https://github.com/danielfx90>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { AbstractOptions, ErrorCallback } from "abstract-leveldown";

import EncodingDown from "encoding-down";

import { LevelUp } from "levelup";

declare namespace Level {
    interface LevelDB<K = any, V = any> extends LevelUp<EncodingDown<K, V>> {
        errors: /* typeof levelerrors */ any; // ? level-errors is not in DT
    }
    interface Constructor {
        // tslint:disable-next-line:no-unnecessary-generics
        <K = any, V = any>(location: string, options?: AbstractOptions, callback?: ErrorCallback): LevelDB<K, V>;
    }
}

declare const Level: Level.Constructor;

export = Level;
