// Type definitions for jsdom-global 3.0
// Project: https://www.npmjs.com/package/jsdom-global
// Definitions by: Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.5

import { ConstructorOptions } from 'jsdom';

export = jsdomGlobal;

declare function jsdomGlobal(html?: string | Buffer, options?: ConstructorOptions): () => void;
