import { AbstractOptions, ErrorCallback } from "abstract-leveldown";

import EncodingDown from "encoding-down";

import levelup = require("levelup");

declare namespace Level {
    interface LevelDB<K = any, V = any> extends levelup.LevelUp<EncodingDown<K, V>> {
        errors: typeof levelup.errors;
    }
    interface Constructor {
        (location: string, options?: AbstractOptions, callback?: ErrorCallback): LevelDB;
    }
}

declare const Level: Level.Constructor;

export = Level;
