/// <reference types="node" />

import { EventEmitter } from "events";
import { Dispatcher, DispatcherContext, DispatcherInterface, Store } from "../index";

declare class BaseStore<S = {}> extends EventEmitter implements Store<S> {
    constructor(dispatcher: DispatcherInterface);
    initialize?(): void;
    getContext(): DispatcherContext;
    addChangeListener(callback: () => void): void;
    removeChangeListener(callback: () => void): void;
    shouldDehydrate(): boolean;
    emitChange(): void;
}

export = BaseStore;
