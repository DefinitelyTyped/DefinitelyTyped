// Type definitions for use-set-timeout 1.0
// Project: https://reacthooks.org/use-set-timeout
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/**
 * A React Hook (using useEffect) which uses window.setTimeout().
 * @param fn a function to execute
 * @param delay the delay in milliseconds
 */
export default function useSetTimeout(fn: () => void, delay: number): void;
