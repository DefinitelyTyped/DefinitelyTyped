// Type definitions for semantic-release 15.13
// Project: https://github.com/semantic-release/semantic-release#readme
// Definitions by: Leonardo Gatica <https://github.com/lgaticaq>
//                 Daniel Cassidy <https://github.com/djcsdy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace SemanticRelease {
	/**
	 * semantic-release options.
	 *
	 * Can be used to set any core option or plugin options.
	 * Each option will take precedence over options configured in the
	 * configuration file and shareable configurations.
	 */
	interface Options {
		/**
		 * The branch on which releases should happen.
		 */
		branch?: string;

		/**
		 * The Git repository URL, in any supported format.
		 */
		repositoryUrl?: string;

		/**
		 * The Git tag format used by semantic-release to identify releases.
		 */
		tagFormat?: string;

		/**
		 * Specifies the list of plugins to use. Plugins will run in series, in
		 * the order specified.
		 *
		 * If this option is not specified, then semantic-release will use a
		 * default list of plugins.
		 *
		 * Configuration options for each plugin can be defined by wrapping the
		 * name and an options object in an array.
		 */
		plugins?: ReadonlyArray<PluginSpec>;

		/**
		 * Dry-run mode, skip publishing, print next version and release notes.
		 */
		dryRun?: boolean;

		/**
		 * Set to false to skip Continuous Integration environment verifications.
		 * This allows for making releases from a local machine.
		 */
		ci?: boolean;

		/**
		 * Any other options supported by plugins.
		 */
		[name: string]: any;
	}

	/**
	 * semantic-release options, after normalization and defaults have been
	 * applied.
	 */
	interface GlobalConfig extends Options {
		/**
		 * The branch on which releases should happen.
		 */
		branch: string;

		/**
		 * The Git repository URL, in any supported format.
		 */
		repositoryUrl: string;

		/**
		 * The Git tag format used by semantic-release to identify releases.
		 */
		tagFormat: string;

		/**
		 * Specifies the list of plugins to use. Plugins will run in series, in
		 * the order specified.
		 *
		 * If this option is not specified, then semantic-release will use a
		 * default list of plugins.
		 *
		 * Configuration options for each plugin can be defined by wrapping the
		 * name and an options object in an array.
		 */
		plugins: ReadonlyArray<PluginSpec>;
	}

	/**
	 * Specifies a plugin to use.
	 *
	 * The plugin is specified by its module name.
	 *
	 * To pass options to a plugin, specify an array containing the plugin module
	 * name and an options object.
	 */
	type PluginSpec = string | [string, any];

	/** semantic-release configuration specific for API usage. */
	interface Config {
		/**
		 * The current working directory to use. It should be configured to
		 * the root of the Git repository to release from.
		 *
		 * It allows to run semantic-release from a specific path without
		 * having to change the local process cwd with process.chdir().
		 *
		 * @default process.cwd
		 */
		cwd?: string;

		/**
		 * The environment variables to use.
		 *
		 * It allows to run semantic-release with specific environment
		 * variables without having to modify the local process.env.
		 *
		 * @default process.env
		 */
		env?: { [name: string]: string };

		/**
		 * The writable stream used to log information.
		 *
		 * It allows to configure semantic-release to write logs to a specific
		 * stream rather than the local process.stdout.
		 *
		 * @default process.stdout
		 */
		stdout?: NodeJS.WriteStream;

		/**
		 * The writable stream used to log errors.
		 *
		 * It allows to configure semantic-release to write errors to a
		 * specific stream rather than the local process.stderr.
		 *
		 * @default process.stderr
		 */
		stderr?: NodeJS.WriteStream;
	}

	interface LastRelease {
		/**
		 * The version name of the release.
		 */
		version: string;

		/**
		 * The Git tag of the release.
		 */
		gitTag: string;

		/**
		 * The Git checksum of the last commit of the release.
		 */
		gitHead: string;
	}

	interface NextRelease extends LastRelease {
		/**
		 * The semver type of the release.
		 */
		type: "patch" | "minor" | "major";

		/**
		 * The release notes of the next release.
		 */
		notes: string;
	}

	interface Context {
		/**
		 * The semantic release configuration itself.
		 */
		options?: GlobalConfig;

		/**
		 * The previous release details.
		 */
		lastRelease?: LastRelease;

		/**
		 * The next release details.
		 */
		nextRelease?: NextRelease;

		/**
		 * The shared logger instance of semantic release.
		 */
		logger: {
			log: (message: string, ...vars: any[]) => void,
			error: (message: string, ...vars: any[]) => void,
		};

		/**
		 * Environment variables.
		 */
		env: {
			[key: string]: string;
		};
	}

	interface Commit {
		/**
		 * The commit abbreviated and full hash.
		 */
		commit: {
			/**
			 * The commit hash.
			 */
			long: string;

			/**
			 * The commit abbreviated hash.
			 */
			short: string;
		};

		/**
		 * The commit abbreviated and full tree hash.
		 */
		tree: {
			/**
			 * The commit tree hash.
			 */
			long: string;

			/**
			 * The commit abbreviated tree hash.
			 */
			short: string;
		};

		/**
		 * The commit author information.
		 */
		author: {
			/**
			 * The commit author name.
			 */
			name: string;

			/**
			 * The commit author email.
			 */
			email: string;

			/**
			 * The commit author date.
			 */
			short: string;
		};

		/**
		 * The committer information.
		 */
		committer: {
			/**
			 * The committer name.
			 */
			name: string;

			/**
			 * The committer email.
			 */
			email: string;

			/**
			 * The committer date.
			 */
			short: string;
		};

		/**
		 * The commit subject.
		 */
		subject: string;

		/**
		 * The commit body.
		 */
		body: string;

		/**
		 * The commit full message (subject and body).
		 */
		message: string;

		/**
		 * The commit hash.
		 */
		hash: string;

		/**
		 * The committer date.
		 */
		committerDate: string;
	}

	/**
	 * Details of a release published by a publish plugin.
	 */
	interface Release {
		/**
		 * The release name, only if set by the corresponding publish plugin.
		 */
		name?: string;

		/**
		 * The release URL, only if set by the corresponding publish plugin.
		 */
		url?: string;

		/**
		 * The semver type of the release.
		 */
		type: "patch" | "minor" | "major";

		/**
		 * The version of the release.
		 */
		version: string;

		/**
		 * The sha of the last commit being part of the release.
		 */
		gitHead: string;

		/**
		 * The Git tag associated with the release.
		 */
		gitTag: string;

		/**
		 * The release notes for the release.
		 */
		notes: string;

		/**
		 * The name of the plugin that published the release.
		 */
		pluginName: string;
	}

	/**
	 * An object with details of the release if a release was published, or
	 * false if no release was published.
	 */
	type Result = false | {
		/**
		 * Information related to the last release found.
		 */
		lastRelease: LastRelease;

		/**
		 * The list of commits included in the new release.
		 */
		commits: Commit[];

		/**
		 * Information related to the newly published release.
		 */
		nextRelease: NextRelease;

		/**
		 * The list of releases published, one release per publish plugin.
		 */
		releases: Release[];
	};
}

/**
 * Run semantic-release and returns a Promise that resolves to a Result
 * object.
 */
declare function SemanticRelease(options: SemanticRelease.Options,
	environment?: SemanticRelease.Config): Promise<SemanticRelease.Result>;

export = SemanticRelease;
