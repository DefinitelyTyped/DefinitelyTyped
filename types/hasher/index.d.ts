// Type definitions for Hasher.js
// Project: https://github.com/millermedeiros/hasher/
// Definitions by: flyfishMT <https://github.com/flyfishMT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="signals" />

import * as signal from 'signals';

declare namespace HasherJs {

    export interface HasherStatic {

        // {string} hasher.appendHash
        // String that should always be added to the end of Hash value.
        appendHash: string;

        // default value: '';
        // will be automatically removed from `hasher.getHash()`
        // avoid conflicts with elements that contain ID equal to hash value;
        // <static> {signals.Signal} hasher.changed
        // Signal dispatched when hash value changes. - pass current hash as 1st parameter to listeners and previous hash value as 2nd parameter.
        changed: signal.Signal;

        // <static> {signals.Signal} hasher.initialized
        // Signal dispatched when hasher is initialized. - pass current hash as first parameter to listeners.
        initialized: signal.Signal;

        // <static> {string} hasher.prependHash
        // String that should always be added to the beginning of Hash value.
        prependHash: string;

        // default value: '/';
        // will be automatically removed from `hasher.getHash()`
        // avoid conflicts with elements that contain ID equal to hash value;
        // <static> {string} hasher.separator
        // String used to split hash paths; used by hasher.getHashAsArray() to split paths.
        separator: string;

        // default value: '/';
        // <static> {signals.Signal} hasher.stopped
        // Signal dispatched when hasher is stopped. - pass current hash as first parameter to listeners
        stopped: signal.Signal;

        // <static> <constant> {string} hasher.VERSION
        // hasher Version Number
        VERSION: string;

        // Method Detail
        // <static> hasher.dispose()
        // Removes all event listeners, stops hasher and destroy hasher object. - IMPORTANT: hasher won't work after calling this method, hasher Object will be deleted.
        dispose(): void;

        // <static> {string} hasher.getBaseURL()
        // Returns:
        // {string} Retrieve URL without query string and hash.
        getBaseURL(): string;

        // <static> {string} hasher.getHash()
        // Returns:
        // {string} Hash value without '#', `hasher.appendHash` and `hasher.prependHash`.
        getHash(): string;

        // <static> {Array.} hasher.getHashAsArray()
        // Returns:
        // {Array.} Hash value split into an Array.
        getHashAsArray(): string[];

        // <static> {string} hasher.getURL()
        // Returns:
        // {string} Full URL.
        getURL(): string;

        // <static> hasher.init()
        // Start listening/dispatching changes in the hash/history.
        init(): void;

        // hasher won't dispatch CHANGE events by manually typing a new value or pressing the back/forward buttons before calling this method.
        // <static> {boolean} hasher.isActive()
        // Returns:
        // {boolean} If hasher is listening to changes on the browser history and/or hash value.
        isActive(): boolean;

        // <static> hasher.replaceHash(path)
        // Set Hash value without keeping previous hash on the history record. Similar to calling window.location.replace("#/hash") but will also work on IE6-7.
        // hasher.replaceHash('lorem', 'ipsum', 'dolor') -> '#/lorem/ipsum/dolor'
        // Parameters:
        // {...string} path
        // Hash value without '#'. Hasher will join path segments using `hasher.separator` and prepend/append hash value with `hasher.appendHash` and `hasher.prependHash`
        replaceHash(...path: string[]): void;

        // <static> hasher.setHash(path)
        // Set Hash value, generating a new history record.
        // hasher.setHash('lorem', 'ipsum', 'dolor') -> '#/lorem/ipsum/dolor'
        // Parameters:
        // {...string} path
        // Hash value without '#'. Hasher will join path segments using `hasher.separator` and prepend/append hash value with `hasher.appendHash` and `hasher.prependHash`
        setHash(...path: string[]): void;

        // <static> hasher.stop()
        // Stop listening/dispatching changes in the hash/history.
        // hasher won't dispatch CHANGE events by manually typing a new value or pressing the back/forward buttons after calling this method, unless you call hasher.init() again.
        // hasher will still dispatch changes made programatically by calling hasher.setHash();
        stop(): void;

        // <static> {string} hasher.toString()
        // Returns:
        // {string} A string representation of the object.
        toString(): string;
    }
}

declare var hasher: HasherJs.HasherStatic;

export = hasher;
export as namespace hasher;
