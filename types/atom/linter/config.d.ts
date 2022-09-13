import '../index';

declare module 'atom' {
    interface ConfigValues {
        /** Lint tabs while they are still in preview status. */
        'linter.lintPreviewTabs': boolean;

        /** Lint files automatically when they are opened. */
        'linter.lintOnOpen': boolean;

        /**
         *  Lint files while typing, without the need to save (only for supported
         *  providers).
         */
        'linter.lintOnChange': boolean;

        /** Interval at which linting is done as you type (in ms). */
        'linter.lintOnChangeInterval': number;

        /** Ignore files matching this Glob. */
        'linter.ignoreGlob': string;

        /** Disabled providers. */
        'linter.disabledProviders': string[];
    }
}
