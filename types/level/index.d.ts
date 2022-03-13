// Type definitions for level 6.0
// Project: https://github.com/Level/level
// Definitions by: danielfx90 <https://github.com/danielfx90>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { AbstractOptions, ErrorCallback } from "abstract-leveldown";

import EncodingDown from "encoding-down";

import { LevelUp, Errors } from "levelup";

declare namespace Level {
    interface LevelDB<K = any, V = any> extends LevelUp<EncodingDown<K, V>> {
        errors: Errors;
    }
    interface Constructor {
        (location: string, options?: AbstractOptions, callback?: ErrorCallback): LevelDB;
    }
}

declare const Level: Level.Constructor;

export = Level;
