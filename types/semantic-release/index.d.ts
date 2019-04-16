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
}

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
}
