import { HostComponent } from "../../public/ReactNativeTypes";

/**
 * Creates values that can be used like React components which represent native
 * view managers. You should create JavaScript modules that wrap these values so
 * that the results are memoized. Example:
 *
 *   const View = requireNativeComponent('RCTView');
 *
 * The concrete return type of `requireNativeComponent` is a string, but the declared type is
 * `HostComponent` because TypeScript assumes anonymous JSX intrinsics (e.g. a `string`) not
 * to have any props.
 */
export function requireNativeComponent<T>(viewName: string): HostComponent<T>;
