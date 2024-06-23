/**
 * A React Hook (using useEffect) which uses window.setInterval().
 * @param fn a function to execute
 * @param delay the delay between executions in milliseconds
 */
export default function useSetInterval(fn: () => void, delay: number): void;
