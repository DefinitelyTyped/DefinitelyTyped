import "karma";

// A plugin for karma-jasmine which helps to filter tests (specs) by tags.

declare module "karma" {
    /**
     * Default values can be configured using client map in Karma configuration
     */
    interface ClientOptions {
        /**
         * defines a prefix for a tag name
         * @default '#'
         */
        tagPrefix?: string | undefined;
        /**
         * defines a comma-separated list of tag names:
         * * if `names` is defined then specs which match to tags will be executed.
         * * If `names` is not defined then all specs with a tag will be executed.
         */
        tags?: string | string[] | boolean | undefined;
        /**
         * defines a comma-separated list of tag names
         * * If `names` is defined then specs which match to tags will be skipped.
         * * If `names` is not defined then all specs with a tag will be skipped.
         */
        skipTags?: string | string[] | boolean | undefined;
    }
}
