/// <reference types="node" />

declare namespace ngAnnotate {
    interface NgAnnotate {
        (option?: Option): NodeJS.ReadWriteStream;
    }

    // TODO: Should be on ng-annotate module
    interface Option {
        /**
         * Add annotations where non-existing
         */
        add?: boolean | undefined;
        /**
         * Remove all existing annotations
         */
        remove?: boolean | undefined;
        /**
         * List optional matchers
         */
        list?: boolean | undefined;
        /**
         * Restrict matching further or to expand matching
         */
        regexp?: string | undefined;
        /**
         * Enable optional matcher
         */
        enable?: boolean | undefined;
        /**
         * Output '$scope' instead of "$scope".
         */
        single_quotes?: boolean | undefined;
        /**
         * Rename providers (services, factories, controllers, etc.) with a new name when declared and referenced through annotation
         */
        rename?: RenameOption[] | undefined;
        /**
         * Load a user plugin with the provided path
         */
        plugin?: any[] | undefined;
    }

    interface RenameOption {
        from: string;
        to: string;
    }
}

declare var ngAnnotate: ngAnnotate.NgAnnotate;

export = ngAnnotate;
