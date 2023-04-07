// Type definitions for metro-config 0.76
// Project: https://github.com/facebook/metro
// Definitions by: Adam Foxman <https://github.com/afoxman>
//                 Tommy Nguyen <https://github.com/tido64>
//                 Alex Hunt <https://github.com/huntie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import getDefaultConfig from './defaults';
import { loadConfig, mergeConfig, resolveConfig } from './loadConfig';

export * from './configTypes';
export { loadConfig, mergeConfig, resolveConfig, getDefaultConfig };
