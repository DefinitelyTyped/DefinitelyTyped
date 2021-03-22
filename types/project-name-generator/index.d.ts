// Type definitions for project-name-generator 2.1
// Project: https://github.com/aceakash/project-name-generator#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Generate quirky names like spiffy-waterfall, sassy-bread, mature-dew-8239 to use wherever you need a random but memorable name.
 */
declare function generate(options?: generate.Options): generate.Project;

declare namespace generate {
    interface Options {
        /**
         * Number of words generated (excluding number).
         * All words will be adjectives, except the last one which will be a noun
         * @default 2
         */
        words?: number;
        /**
         * Whether a numeric suffix is generated or not. The number is between 1 - 9999, both inclusive.
         * @default false
         */
        number?: boolean;
        /**
         * Whether to output words beginning with the same letter or not
         * @default false
         */
        alliterative?: boolean;
    }
    interface Project {
        raw: Array<string | number>;
        dashed: string;
        spaced: string;
    }
}

export = generate;
