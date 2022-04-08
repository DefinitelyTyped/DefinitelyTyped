// Type definitions for @carbon/elements 0.1
// Project: https://github.com/carbon-design-system/carbon/tree/master/packages/feature-flags
// Definitions by: Eric Liu <https://github.com/metonym>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.0

export function add(name: string, enabled: boolean): void;
export function enable(name: string): void;
export function disable(name: string): void;
export function merge(flags: object): void;
export function enabled(name: string): boolean;

import { featureFlagInfo } from './generated/feature-flags';
export { featureFlagInfo as unstable_featureFlagInfo };
