/**
 * A React Hook (using useEffect) which uses window.setTimeout().
 * @param fn a function to execute
 * @param delay the delay in milliseconds
 */
export default function useSetTimeout(fn: () => void, delay: number): void;
