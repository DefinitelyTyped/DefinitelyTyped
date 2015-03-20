// Type definitions for Hasher.js
// Project: https://github.com/millermedeiros/hasher/
// Definitions by: Christophe Camicas <https://github.com/chriscamicas>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../js-signals/js-signals.d.ts" />

declare module HasherJs {
    export interface HasherStatic {
        /**
         * String that should always be added to the end of Hash value.
         * default value: '';
         * will be automatically removed from `hasher.getHash()`
         * avoid conflicts with elements that contain ID equal to hash value;
         */
        appendHash: string;

        /**
         * Signal dispatched when hash value changes.- pass current hash as 1st parameter to listeners and previous hash value as 2nd parameter.
         */
        changed: Signal;

        /**
         * Signal dispatched when hasher is initialized.- pass current hash as first parameter to listeners.
         */
        initialized: Signal;

        /**
         * String that should always be added to the beginning of Hash value.
         * default value: '/';
         * will be automatically removed from `hasher.getHash()`
         * avoid conflicts with elements that contain ID equal to hash value;
         */
        prependHash: string;

        /**
         * String used to split hash paths; used by hasher.getHashAsArray() to split paths.
         * default value: '/';
         */
        separator: string;

        /**
         * Signal dispatched when hasher is stopped.- pass current hash as first parameter to listeners
         */
        stopped: Signal;

        /**
         * hasher Version Number
         */
        VERSION: string;


        /**
         * Removes all event listeners, stops hasher and destroy hasher object.
         * - IMPORTANT: hasher won't work after calling this method, hasher Object will be deleted.
         */
        dispose(): void;

        /**
         * Retrieve URL without query string and hash.
         */
        getBaseURL(): string;

        /**
         * Returns hash value without '#', `hasher.appendHash` and `hasher.prependHash`.
         */
        getHash(): string;

        /**
         * Hash value split into an Array.
         */
        getHashAsArray(): Array<string>;

        /**
         * Returns full URL.
         */
        getURL(): string;

        /**
         * Start listening / dispatching changes in the hash / history.
         * hasher won't dispatch CHANGE events by manually typing a new value or pressing the back/forward buttons before calling this method.
         */
        init(): void;
    
        /**
         * Returns true if hasher is listening to changes on the browser history and / or hash value.
         */
        isActive(): boolean;

        /**
         * Set Hash value without keeping previous hash on the history record.Similar to calling window.location.replace("#/hash") but will also work on IE6 - 7.
         * hasher.replaceHash('lorem', 'ipsum', 'dolor') - > '#/lorem/ipsum/dolor'
         * @param path Hash value without '#'.Hasher will join path segments using `hasher.separator` and prepend / append hash value with `hasher.appendHash` and `hasher.prependHash`
         */
        replaceHash(...path: string[]): void;

        /*
         * Set Hash value, generating a new history record.
         * hasher.setHash('lorem', 'ipsum', 'dolor') - > '#/lorem/ipsum/dolor'
         * @param path Hash value without '#'.Hasher will join path segments using `hasher.separator` and prepend / append hash value with `hasher.appendHash` and `hasher.prependHash`
         */
        setHash(...path: string[]): void;

        /**
         * Stop listening / dispatching changes in the hash / history.
         * hasher won't dispatch CHANGE events by manually typing a new value or pressing the back/forward buttons after calling this method, unless you call hasher.init() again.
         * hasher will still dispatch changes made programatically by calling hasher.setHash();
         */
        stop(): void;

        /**
         * Returns a string representation of the object.
         */
        toString(): string;
    }
}
declare var hasher: HasherJs.HasherStatic;
