// Type definitions for @mertasan/tailwindcss-variables 2.6
// Project: https://github.com/mertasan/tailwindcss-variables#readme
// Definitions by: Liam Martens <https://github.com/LiamMartens>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Config, PluginCreator } from 'tailwindcss/types/config';
import type { PluginOptions } from './internal/PluginOptions';

declare const plugin: {
    (options: PluginOptions): { handler: PluginCreator; config?: Config };
    __isOptionsFunction: true;
};

export = plugin;
