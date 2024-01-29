/// <reference types="node" />
import { Stream } from "stream";

export = destroy;

declare function destroy<T extends Stream>(stream: T): T;
