// Type definitions for semantic-release 15.13
// Project: https://github.com/semantic-release/semantic-release#readme
// Definitions by: Leonardo Gatica <https://github.com/lgaticaq>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * The semantic release configuration itself.
 */
export interface GlobalConfig {
	/** The full prepare step configuration. */
	prepare?: any;
	/** The branch on which releases should happen. */
	branch: string;
	/** The Git repository URL, in any supported format. */
	repositoryUrl: string;
	/** The Git tag format used by semantic-release to identify releases. */
	tagFormat: string;
	/** Specifies the list of plugins to use. Plugins will run in series, in
	 * the order specified.
	 * 
	 * If this option is not specified, then semantic-release will use a
	 * default list of plugins.
	 * 
	 * Configuration options for each plugin can be defined by wrapping the
	 * name and an options object in an array. */
	plugins: ReadonlyArray<PluginSpec>;
	/** Dry-run mode, skip publishing, print next version and release notes. */
	dryRun?: boolean;
	/** Set to false to skip Continuous Integration environment verifications.
	 * This allows for making releases from a local machine. */
	ci?: boolean;
}

/** Specifies a plugin to use.
 * 
 * The plugin is specified by its module name.
 * 
 * To pass options to a plugin, specify an array containing the plugin module
 * name and an options object. */
export type PluginSpec = string | [string, any];

export interface LastRelease {
	/** The version name of the release */
	version: string;
	/** The Git tag of the release. */
	gitTag: string;
	/** The Git checksum of the last commit of the release. */
	gitHead: string;
}

export interface NextRelease extends LastRelease {
	/** The release notes of the next release. */
	notes: string;
}

export interface Context {
	/** The semantic release configuration itself. */
	options?: GlobalConfig;
	/** The previous release details. */
	lastRelease?: LastRelease;
	/** The next release details. */
	nextRelease?: NextRelease;
	/** The shared logger instance of semantic release. */
	logger: {
		log: (message: string, ...vars: any[]) => void,
		error: (message: string, ...vars: any[]) => void,
	};
	/** Environment variables. */
	env: {
		[key: string]: string;
	};
}
