// Type definitions for metro-resolver 0.76
// Project: https://github.com/facebook/metro
// Definitions by: Adam Foxman <https://github.com/afoxman>
//                 Tommy Nguyen <https://github.com/tido64>
//                 Alex Hunt <https://github.com/huntie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export * from './types';

import { ResolutionContext, Resolution } from './types';

export function resolve(context: ResolutionContext, moduleName: string, platform: string | null): Resolution;
