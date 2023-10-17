import { EnzymeSelector, ReactWrapper } from "enzyme";

export function waitForState(
    wrapper: ReactWrapper,
    stateValidationFn: (state: object) => boolean,
    config?: Config,
): Promise<void>;

export function waitForElement(
    wrapper: ReactWrapper,
    elementSelector: EnzymeSelector,
    config?: Config,
): Promise<void>;

export function waitForProps(
    wrapper: ReactWrapper,
    propsValidationFn: (props: object) => boolean,
    config?: Config,
): Promise<void>;

export interface Config {
    interval?: number | undefined; // Default: 50, how often to check for validity
    timeout?: number | undefined; // Default: 2000 (2 seconds), how long to wait before timing out
    timeoutMessage?: string | undefined;
    logStructureOnTimeout?: boolean | undefined; // Default: true, logs the wrapper's rendered structure when the wait times out. An attempt to help out in finding what's wrong.
    logStructureOnSuccess?: boolean | undefined; // Default: false, logs the wrapper's rendered structure on success.
}
