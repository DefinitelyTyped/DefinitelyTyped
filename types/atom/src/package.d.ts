import { Disposable } from '../index';

/**
 *  Loads and activates a package's main module and resources such as stylesheets,
 *  keymaps, grammar, editor properties, and menus.
 */
export interface Package {
    /** The name of the Package. */
    readonly name: string;

    /** The path to the Package on disk. */
    readonly path: string;

    // Event Subscription
    /** Invoke the given callback when all packages have been activated. */
    onDidDeactivate(callback: () => void): Disposable;

    // Native Module Compatibility
    /**
     *  Are all native modules depended on by this package correctly compiled
     *  against the current version of Atom?
     */
    isCompatible(): boolean;

    /**
     *  Rebuild native modules in this package's dependencies for the current
     *  version of Atom.
     */
    rebuild(): Promise<{ code: number; stdout: string; stderr: string }>;

    /** If a previous rebuild failed, get the contents of stderr. */
    getBuildFailureOutput(): string | null;
}
