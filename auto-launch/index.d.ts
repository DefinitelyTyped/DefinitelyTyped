// Type definitions for auto-launch 0.1.18
// Project: https://github.com/Teamwork/node-auto-launch
// Definitions by: rhysd <https://github.com/rhysd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface AutoLaunchOption {
	/**
	 * Application name.
	 */
	name: string;
	/**
	 * Hidden on launch or not.  Default is false.
	 */
	isHidden?: boolean;
	/**
	 * Path to application directory.
	 * Default is process.execPath.
	 */
	path?: string;
}

declare class AutoLaunch {
	constructor(opts: AutoLaunchOption);
	/**
	 * Enables to launch at start up
	 */
	enable(callback?: (err: Error) => void): void;
	/**
	 * Disables to launch at start up
	 */
	disable(callback?: (err: Error) => void): void;
	/**
	 * Returns if auto start up is enabled
	 */
	isEnabled(callback: (enabled: boolean) => void): void;
}

declare module "auto-launch" {
	var al: typeof AutoLaunch;
	export = al;
}
