type RouteSegment = string | Record<string, any>;

/**
 * Common Utilities
 * Documentation: {@link https://docs.frappe.io/framework/user/en/api/js-utils}
 */
declare global {
    namespace frappe {
        /**
         * Returns the current route as an array of strings.
         */
        function get_route(): string[];

        /**
         * Changes the current route.
         * Accepts route as string(s), array, or array with options.
         */
        function set_route(first: RouteSegment, ...route: RouteSegment[]): void;
        function set_route(route: string | string[], options?: { [key: string]: any }): void;

        /**
         * Format a raw value into user presentable format.
         * @param value The raw value to format.
         * @param df Field definition object (should have at least fieldtype).
         * @param options Optional formatting options.
         * @param doc Optional doc context.
         */
        function format(
            value: any,
            df: { fieldtype: string; [key: string]: any },
            options?: { [key: string]: any },
            doc?: any,
        ): string;

        /**
         * Creates a namespace attached to the window object if it doesn't exist.
         */
        function provide(namespace: string): void;

        /**
         * Load a JS or CSS asset asynchronously.
         * @param asset_path Path or array of paths to JS/CSS assets.
         * @param callback Callback to run after loading.
         */
        function require(asset_path: string | string[], callback?: () => void): void;
    }
}

export {};
