// Type definitions for @webpack-blocks/core 2.0
// Project: https://github.com/andywer/webpack-blocks
// Definitions by: Max Boguslavskiy <https://github.com/maxbogus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

import { Block } from 'webpack-blocks';

interface babel {
    cacheDirectory?: boolean;
    plugins?: string[];
    presets?: string[];
}

declare function babel(options?: babel): Block;

export = babel;
