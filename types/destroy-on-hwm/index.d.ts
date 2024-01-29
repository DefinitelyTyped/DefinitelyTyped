/// <reference types="node" />
import { Writable } from "stream";

export = destroyOnHwm;

declare function destroyOnHwm<T extends Writable>(stream: T, callback?: (this: T, stream: T) => void): T;
