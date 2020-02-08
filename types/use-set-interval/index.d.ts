// Type definitions for use-set-interval 1.0
// Project: https://reacthooks.org/use-set-interval
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/**
 * A React Hook (using useEffect) which uses window.setInterval().
 * @param fn a function to execute
 * @param delay the delay between executions in milliseconds
 */
export default function useSetInterval(fn: () => void, delay: number): void;
