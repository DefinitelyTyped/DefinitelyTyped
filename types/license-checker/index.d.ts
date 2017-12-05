// Type definitions for license-checker 11.0
// Project: https://github.com/davglass/license-checker
// Definitions by: Rogier Schouten <https://github.com/rogierschouten>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * Options struct for the init() function
 */
export interface InitOpts {
	/**
	 * Path to start checking dependencies from
	 */
	start: string;
	/**
	 * only show production dependencies
	 */
	production?: boolean;
	/**
	 * only show development dependencies
	 */
	development?: boolean;
	/**
	 * report guessed licenses as unknown licenses
	 */
	unknown?: boolean;
	/**
	 * only list packages with unknown or guessed licenses
	 */
	onlyunknown?: boolean;
	/**
	 * to add a custom Format file in JSON
	 */
	customPath?: string;
	/**
	 * exclude modules which licenses are in the comma-separated list from the output
	 */
	exclude?: string[];
	/**
	 * Use chalk to colorize the licenses member of each returned module info. Unknown licenses become red.
	 */
	color?: boolean;
	/**
	 * output the location of the license files as relative paths
	 */
	relativeLicensePath?: boolean;
}

/**
 * Information about one dependency
 */
export interface ModuleInfo {
	/**
	 * licenses, either one string or an array of multiple licenses
	 */
	licenses: string | string[];
	/**
	 * Repository URL
	 */
	repository: string;
	/**
	 * Publisher name
	 */
	publisher?: string;
	/**
	 * Publisher e-mail
	 */
	email?: string;
	/**
	 * Publisher URL
	 */
	url?: string;
	/**
	 * Path to license file, if available
	 */
	licenseFile?: string;
}

export interface ModuleInfos {
	[packageName: string]: ModuleInfo;
}

/**
 * Run the license check
 * @param opts specifies the path to the module to check dependencies of
 */
export function init(opts: InitOpts, callback: (err: Error, ret: ModuleInfos) => void): void;
