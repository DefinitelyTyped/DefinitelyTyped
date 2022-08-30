// Type definitions for metro-resolver 0.66
// Project: https://github.com/facebook/metro
// Definitions by: Adam Foxman <https://github.com/afoxman>
//                 Tommy Nguyen <https://github.com/tido64>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export * from './types';

import { ResolutionContext, Resolution } from './types';

export function resolve(context: ResolutionContext, moduleName: string, platform: string | null): Resolution;
