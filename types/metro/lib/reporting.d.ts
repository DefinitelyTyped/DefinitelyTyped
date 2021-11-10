export type GlobalCacheDisabledReason = 'too_many_errors' | 'too_many_misses';

export interface BundleDetails {
    bundleType: string;
    dev: boolean;
    entryFile: string;
    minify: boolean;
    platform?: string;
    runtimeBytecodeVersion?: number;
}

/**
 * A tagged union of all the actions that may happen and we may want to
 * report to the tool user.
 */
export type ReportableEvent =
    | {
          port: number;
          hasReducedPerformance: boolean;
          type: 'initialize_started';
      }
    | {
          type: 'initialize_failed';
          port: number;
          error: Error;
      }
    | {
          buildID: string;
          type: 'bundle_build_done';
      }
    | {
          buildID: string;
          type: 'bundle_build_failed';
      }
    | {
          buildID: string;
          bundleDetails: BundleDetails;
          type: 'bundle_build_started';
      }
    | {
          error: Error;
          type: 'bundling_error';
      }
    | {
          type: 'dep_graph_loading';
          hasReducedPerformance: boolean;
      }
    | { type: 'dep_graph_loaded' }
    | {
          buildID: string;
          type: 'bundle_transform_progressed';
          transformedFileCount: number;
          totalFileCount: number;
      }
    | {
          type: 'global_cache_error';
          error: Error;
      }
    | {
          type: 'global_cache_disabled';
          reason: GlobalCacheDisabledReason;
      }
    | { type: 'transform_cache_reset' }
    | {
          type: 'worker_stdout_chunk';
          chunk: string;
      }
    | {
          type: 'worker_stderr_chunk';
          chunk: string;
      }
    | {
          type: 'hmr_client_error';
          error: Error;
      }
    | {
          type: 'client_log';
          level: 'trace' | 'info' | 'warn' | 'log' | 'group' | 'groupCollapsed' | 'groupEnd' | 'debug';
          data: unknown[];
      };

/**
 * Code across the application takes a reporter as an option and calls the
 * update whenever one of the ReportableEvent happens. Code does not directly
 * write to the standard output, because a build would be:
 *
 *   1. ad-hoc, embedded into another tool, in which case we do not want to
 *   pollute that tool's own output. The tool is free to present the
 *   warnings/progress we generate any way they want, by specifing a custom
 *   reporter.
 *   2. run as a background process from another tool, in which case we want
 *   to expose updates in a way that is easily machine-readable, for example
 *   a JSON-stream. We don't want to pollute it with textual messages.
 *
 * We centralize terminal reporting into a single place because we want the
 * output to be robust and consistent. The most common reporter is
 * TerminalReporter, that should be the only place in the application should
 * access the `terminal` module (nor the `console`).
 */
export interface Reporter {
    update: (event: ReportableEvent) => void;
}
