import { EventEmitter } from "events";
import { RenderCallback, RenderOptions } from "..";
import stylus = require("..");

// TODO: rewrite this to proper import in futures
declare type Node = typeof stylus["nodes"]["Node"];

declare class Renderer extends EventEmitter {
    options: RenderOptions;
    str: string;
    events: any;

    constructor(str: string);
    constructor(str: string, options: RenderOptions);

    /**
     * Parse and evaluate AST, then callback `fn(err, css, js)`.
     */
    render(callback: RenderCallback): void;

    /**
     * Parse and evaluate AST and return the result.
     */
    render(): string;

    /**
     * Get dependencies of the compiled file.
     */
    deps(filename?: string): string[];

    /**
     * Set option `key` to `val`.
     */
    set(key: string, val: any): this;

    /**
     * Get option `key`.
     */
    get(key: string): any;

    /**
     * Include the given `path` to the lookup paths array.
     */
    include(path: string): this;

    /**
     * Use the given `fn`.
     *
     * This allows for plugins to alter the renderer in
     * any way they wish, exposing paths etc.
     */
    use(fn: (renderer: Renderer) => any): this;

    /**
     * Define function or global var with the given `name`. Optionally
     * the function may accept full expressions, by setting `raw`
     * to `true`.
     */
    define(name: string, fn: (...args: any[]) => any): this;
    define(name: string, node: Node): this;
    define(name: string, val: any): this;
    define(name: string, fn: (...args: any[]) => any, raw: boolean): this;
    define(name: string, node: Node, raw: boolean): this;
    define(name: string, val: any, raw: boolean): this;

    /**
     * Import the given `file`.
     */
    import(file: string): this;

    // #region EventEmitter Members
    addListener(event: string, listener: (...args: any[]) => any): this;
    on(event: string, listener: (...args: any[]) => any): this;
    once(event: string, listener: (...args: any[]) => any): this;
    removeListener(event: string, listener: (...args: any[]) => any): this;
    removeAllListeners(event?: string): this;
    setMaxListeners(n: number): this;
    getMaxListeners(): number;
    listeners(event: string): Array<(...args: any[]) => any>;
    emit(event: string, ...args: any[]): boolean;
    listenerCount(type: string): number;
}

export = Renderer;
