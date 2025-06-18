export interface FindOptions {
    /** Ports to avoid */
    avoids?: readonly number[] | undefined;
    /**
     * Minimum port.
     * @default 8000
     */
    min?: number | undefined;
    /**
     * Maximum port.
     * @default 10000
     */
    max?: number | undefined;
    /**
     * @internal
     * The current port to check.
     * This is an internal value, initialized and incremented
     * while {@link find} is run, and starts at {@link min} if unspecified.
     * It is unlikely that this needs to be set manually
     */
    port?: number | undefined;
}

/**
 * Test if a port on the system is free
 * @param port The port to test
 */
export function test(port: number): Promise<boolean>;

/**
 * Find an available port on the system in a range
 * @param options Optional config options
 * @returns The port found, if available
 */
export function find(options?: FindOptions): Promise<number>;
/**
 * Find an available port on the system in a range
 * @param min The minimum port. Defaults to 8000
 * @param max The maximum port. Defaults to 10000
 * @param avoids Ports to avoid
 */
export function find(min?: number, max?: number, avoids?: readonly number[]): Promise<number>;

export { find as get };
