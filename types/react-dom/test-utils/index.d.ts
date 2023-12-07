export {};

// NOTES
// - the order of these signatures matters - typescript will check the signatures in source order.
//   If the `() => VoidOrUndefinedOnly` signature is first, it'll erroneously match a Promise returning function for users with
//   `strictNullChecks: false`.
// - VoidOrUndefinedOnly is there to forbid any non-void return values for users with `strictNullChecks: true`
declare const UNDEFINED_VOID_ONLY: unique symbol;
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
type VoidOrUndefinedOnly = void | { [UNDEFINED_VOID_ONLY]: never };
/**
 * Wrap any code rendering and triggering updates to your components into `act()` calls.
 *
 * Ensures that the behavior in your tests matches what happens in the browser
 * more closely by executing pending `useEffect`s before returning. This also
 * reduces the amount of re-renders done.
 *
 * @param callback A synchronous, void callback that will execute as a single, complete React commit.
 *
 * @see https://reactjs.org/blog/2019/02/06/react-v16.8.0.html#testing-hooks
 *
 * @deprecated https://react.dev/warnings/react-dom-test-utils
 */
// While act does always return Thenable, if a void function is passed, we pretend the return value is also void to not trigger dangling Promise lint rules.
export function act(callback: () => VoidOrUndefinedOnly): void;
/**
 * @deprecated https://react.dev/warnings/react-dom-test-utils
 */
export function act<T>(callback: () => T | Promise<T>): Promise<T>;
