// Type definitions for find-java-home 0.2
// Project: https://github.com/jsdevel/node-find-java-home
// Definitions by: sjx233 <https://github.com/sjx233>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare function findJavaHome(callback: (err: Error | undefined, home: string) => void): void;
declare function findJavaHome(options: { allowJre?: boolean }, callback: (err: Error | undefined, home: string) => void): void;

declare namespace findJavaHome {
    function __promisify__(options?: { allowJre?: boolean }): Promise<string>;
}

export = findJavaHome;
