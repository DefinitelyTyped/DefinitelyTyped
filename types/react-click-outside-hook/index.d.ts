// Type definitions for react-click-outside-hook 1.0
// Project: https://github.com/bdeloeste/react-click-outside-hook#readme
// Definitions by: Bryan Deloeste <https://github.com/bdeloeste>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export type HookReturnTuple = [((node?: Element | null) => void), boolean];

export function useClickOutside(): HookReturnTuple;
