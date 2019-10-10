// Type definitions for enzyme-async-helpers 0.9
// Project: https://github.com/zth/enzyme-async-helpers
// Definitions by: Kim Ehrenpohl <https://github.com/kimehrenpohl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { ReactWrapper, EnzymeSelector } from 'enzyme';

export function waitForState(
    wrapper: ReactWrapper,
    stateValidationFn: (state: object) => boolean,
    config?: Config
): Promise<void>;

export function waitForElement(
    wrapper: ReactWrapper,
    elementSelector: EnzymeSelector,
    config?: Config
): Promise<void>;

export function waitForProps(
    wrapper: ReactWrapper,
    propsValidationFn: (props: object) => boolean,
    config?: Config
): Promise<void>;

export interface Config {
    interval?: number; // Default: 50, how often to check for validity
    timeout?: number; // Default: 2000 (2 seconds), how long to wait before timing out
    timeoutMessage?: string;
    logStructureOnTimeout?: boolean; // Default: true, logs the wrapper's rendered structure when the wait times out. An attempt to help out in finding what's wrong.
    logStructureOnSuccess?: boolean; // Default: false, logs the wrapper's rendered structure on success.
}
