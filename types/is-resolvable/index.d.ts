/**
 * Options for module resolution.
 */
interface ResolveOptions {
    /**
     * Paths to resolve module from.
     */
    paths?: string[];
}

/**
 * Check if a module ID is resolvable from the current working directory.
 *
 * @param moduleId - A valid Node.js module identifier (e.g., 'eslint', './index.js')
 * @param options - Optional resolution options
 * @returns true if the module can be resolved, false otherwise
 *
 * @example
 * ```javascript
 * const isResolvable = require('is-resolvable');
 *
 * isResolvable('fs'); // => true (Node.js built-in)
 * isResolvable('eslint'); // => true or false depending on installation
 * isResolvable('./index.js'); // => true if file exists
 * isResolvable('non-existent-module'); // => false
 * ```
 */
declare function isResolvable(moduleId: string, options?: ResolveOptions): boolean;

export = isResolvable;
