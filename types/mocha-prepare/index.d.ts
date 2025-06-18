/// <reference types="mocha"/>

declare function prepare(onPrepare: (fn: Mocha.Done) => void, onUnprepare?: (fn: Mocha.Done) => void): void;
export = prepare;
