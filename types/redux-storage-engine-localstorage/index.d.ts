import { StorageEngine } from "redux-storage";

export type Replacer = (key: string, value: any) => any;

export type Reviver = Replacer;

export default function createEngine(key: string, replacer?: Replacer, reviver?: Reviver): StorageEngine;
