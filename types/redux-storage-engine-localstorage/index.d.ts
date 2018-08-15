// Type definitions for redux-storage-engine-localstorage 1.1
// Project: https://github.com/react-stack/redux-storage-engine-localstorage
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { StorageEngine } from "redux-storage";

export type Replacer = (key: string, value: any) => any;

export type Reviver = Replacer;

export default function createEngine(key: string, replacer?: Replacer, reviver?: Reviver): StorageEngine;
