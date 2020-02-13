// Type definitions for jsdom-global 3.0
// Project: https://www.npmjs.com/package/jsdom-global
// Definitions by: Vladimir Grenaderov <https://github.com/VladimirGrenaderov>,
//                 Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { ConstructorOptions } from 'jsdom';

export = jsdomGlobal;

declare function jsdomGlobal(html?: string | Buffer, options?: ConstructorOptions): () => void;
