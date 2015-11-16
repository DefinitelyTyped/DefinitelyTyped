// Type definitions for karma-coverage v0.5.3
// Project: https://github.com/karma-runner/karma-coverage
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../karma/karma.d.ts" />

declare module 'karma' {
  namespace karma {
    interface ConfigOptions {
      /**
       * See https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md
       */
      coverageReporter?: (Reporter|Reporter[]);
    }

    interface Reporter {
      type?: string;
      dir?: string;
      subdir?: string | ((browser: string) => string);
      check?: any;
      watermarks?: any;
      includeAllSources?: boolean;
      sourceStore?: any; // Should be istanbul.Store
      instrumenter?: any;
    }
  }
}
