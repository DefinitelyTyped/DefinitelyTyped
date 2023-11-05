declare namespace Porty {
    /**
     * The host to run on
     * @default "0.0.0.0"
     */
    export let HOST: string;
    /**
     * Minimum port
     * @default 8000
     */
    export let MIN: number;
    /**
     * Maximum port
     * @default 10000
     */
    export let MAX: number;

    export interface FindOptions {
        /** Ports to avoid */
        avoids?: readonly number[] | undefined;
        /**
         * The host to run on.
         * Defaults to {@link HOST}
         */
        host?: string | undefined;
        /**
         * Minimum port.
         * Defaults to {@link MIN}
         */
        min?: number | undefined;
        /**
         * Maximum port.
         * Defaults to {@link MAX}
         */
        max?: number | undefined;
        /**
         * The current port to check.
         * This parameter is incremented while {@link find} is run,
         * and starts at {@link min} if unspecified
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
     * @param min The minimum port
     * @param max The maximum port
     * @param avoids Ports to avoid
     */
    export function find(min?: number, max?: number, avoids?: readonly number[]): Promise<number>;

    export { find as get };
}

export = Porty;
