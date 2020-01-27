// Type definitions for Humane 3.2
// Project: http://wavded.github.com/humane-js/
// Definitions by: jmvrbanac <https://github.com/jmvrbanac>, stof <https://github.com/stof>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface HumaneMessageOptions {
    addnCls?: string;
    timeout?: number;
    waitForMove?: boolean;
    clickToClose?: boolean;
}

interface HumaneOptions extends HumaneMessageOptions {
    baseCls?: string;
    container?: Element;
}

type completionCallback = () => void;
type logMessage = string | ReadonlyArray<string>;

interface SpawnLogFunction {
    (message: logMessage, options?: HumaneMessageOptions): Humane;
    (message: logMessage, callback?: completionCallback, options?: HumaneMessageOptions): Humane;
}

interface Humane {
    queue: string[];
    baseCls: string;
    container: Element;
    addnCls: string;
    timeout: number;
    waitForMove: boolean;
    clickToClose: boolean;

    create(options?: HumaneOptions): Humane;
    info?: SpawnLogFunction;
    error?: SpawnLogFunction;
    spawn(options: HumaneMessageOptions): SpawnLogFunction;
    remove(cb?: completionCallback): void;
    log(message: logMessage, options?: HumaneMessageOptions): Humane;
    log(message: logMessage, callback?: completionCallback, options?: HumaneMessageOptions): Humane;
}

declare var humane: Humane;

export = humane;
