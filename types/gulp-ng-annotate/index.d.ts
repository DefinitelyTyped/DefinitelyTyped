// Type definitions for gulp-ng-annotate
// Project: https://github.com/Kagami/gulp-ng-annotate
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />



declare namespace ngAnnotate {
    interface NgAnnotate {
        (option?: Option): NodeJS.ReadWriteStream;
    }

    //TODO: Should be on ng-annotate module
    interface Option {
        /**
         * Add annotations where non-existing
         */
        add?: boolean;
        /**
         * Remove all existing annotations
         */
        remove?: boolean;
        /**
         * List optional matchers
         */
        list?: boolean;
        /**
         * Restrict matching further or to expand matching
         */
        regexp?: string;
        /**
         * Enable optional matcher
         */
        enable?: boolean;
        /**
         * Output '$scope' instead of "$scope".
         */
        single_quotes?: boolean;
        /**
         * Rename providers (services, factories, controllers, etc.) with a new name when declared and referenced through annotation
         */
        rename?: RenameOption[];
        /**
         * Load a user plugin with the provided path
         */
        plugin?: any[];
    }

    interface RenameOption {
        from: string;
        to: string;
    }
}

declare var ngAnnotate: ngAnnotate.NgAnnotate;

export = ngAnnotate;
