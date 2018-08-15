/// <reference types="node" />

import { Dispatcher, DispatcherInterface, DispatcherContext, Store } from '../index';
import { EventEmitter } from 'events';

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
