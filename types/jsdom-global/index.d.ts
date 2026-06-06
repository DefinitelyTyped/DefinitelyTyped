import { ConstructorOptions } from "jsdom";

export = jsdomGlobal;

declare function jsdomGlobal(html?: string | Buffer, options?: ConstructorOptions): () => void;
