// Type definitions for Humane 3.0
// Project: http://wavded.github.com/humane-js/
// Definitions by: https://github.com/jmvrbanac 
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped


interface HumaneOptions {
    queue?: string[];
    baseCls?: string;
    addnCls?: string;
    timeout?: number;
    waitForMove?: bool;
    clickToClose?: bool;
    forceNew?: bool;
}

interface Humane {
    queue: string[];
    baseCls: string;
    addnCls: string;
    timeout: number;
    waitForMove: bool;
    clickToClose: bool;
    forceNew: bool;

    create(options?: HumaneOptions): Humane;
    info: Function;
    error: Function;
    spawn(options: HumaneOptions): Function;
    remove(any): void;
    log(message: string): Humane;
    log(message: string, callback: Function): Humane;
    log(message: string, options: HumaneOptions): Humane;
    log(message: string, callback: Function, options: HumaneOptions): Humane;

    log(listOfMessages: Array): Humane;
}

declare var humane: Humane;
