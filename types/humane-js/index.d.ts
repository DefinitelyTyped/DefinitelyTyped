interface HumaneMessageOptions {
    addnCls?: string | undefined;
    timeout?: number | undefined;
    waitForMove?: boolean | undefined;
    clickToClose?: boolean | undefined;
}

interface HumaneOptions extends HumaneMessageOptions {
    baseCls?: string | undefined;
    container?: Element | undefined;
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
    info?: SpawnLogFunction | undefined;
    error?: SpawnLogFunction | undefined;
    spawn(options: HumaneMessageOptions): SpawnLogFunction;
    remove(cb?: completionCallback): void;
    log(message: logMessage, options?: HumaneMessageOptions): Humane;
    log(message: logMessage, callback?: completionCallback, options?: HumaneMessageOptions): Humane;
}

declare var humane: Humane;

export = humane;
