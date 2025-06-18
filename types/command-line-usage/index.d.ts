/**
 * Generates a usage guide suitable for a command-line app.
 * @param sections One or more Section objects
 * @alias module:command-line-usage
 */
declare function commandLineUsage(sections: commandLineUsage.Section | commandLineUsage.Section[]): string;
export = commandLineUsage;

declare namespace commandLineUsage {
    /** Section object. */
    type Section = Content | OptionList;

    /** A Content section comprises a header and one or more lines of content. */
    interface Content {
        /** The section header, always bold and underlined. */
        header?: string | undefined;
        /**
         * Overloaded property, accepting data in one of four formats.
         *  1. A single string (one line of text).
         *  2. An array of strings (multiple lines of text).
         *  3. An array of objects (recordset-style data). In this case, the data will be rendered in table format. The property names of each object are not important, so long as they are
         *     consistent throughout the array.
         *  4. An object with two properties - data and options. In this case, the data and options will be passed directly to the underlying table layout module for rendering.
         */
        content?: string | string[] | any[] | { data: any; options: any } | undefined;
        /** Set to true to avoid indentation and wrapping. Useful for banners. */
        raw?: boolean | undefined;
    }

    /** Describes a command-line option. Additionally, if generating a usage guide with command-line-usage you could optionally add description and typeLabel properties to each definition. */
    interface OptionDefinition {
        name: string;
        /**
         * The type value is a setter function (you receive the output from this), enabling you to be specific about the type and value received.
         *
         * The most common values used are String (the default), Number and Boolean but you can use a custom function.
         */
        type?: any;
        /** getopt-style short option names. Can be any single character (unicode included) except a digit or hyphen. */
        alias?: string | undefined;
        /** Set this flag if the option takes a list of values. You will receive an array of values, each passed through the type function (if specified). */
        multiple?: boolean | undefined;
        /** Identical to multiple but with greedy parsing disabled. */
        lazyMultiple?: boolean | undefined;
        /** Any values unaccounted for by an option definition will be set on the defaultOption. This flag is typically set on the most commonly-used option to make for more concise usage. */
        defaultOption?: boolean | undefined;
        /** An initial value for the option. */
        defaultValue?: any;
        /**
         * When your app has a large amount of options it makes sense to organise them in groups.
         *
         * There are two automatic groups: _all (contains all options) and _none (contains options without a group specified in their definition).
         */
        group?: string | string[] | undefined;
        /** A string describing the option. */
        description?: string | undefined;
        /** A string to replace the default type string (e.g. <string>). It's often more useful to set a more descriptive type label, like <ms>, <files>, <command>, etc.. */
        typeLabel?: string | undefined;
    }

    /** A OptionList section adds a table displaying details of the available options. */
    interface OptionList {
        header?: string | undefined;
        /** An array of option definition objects. */
        optionList?: OptionDefinition[] | undefined;
        /** If specified, only options from this particular group will be printed.  */
        group?: string | string[] | undefined;
        /** The names of one of more option definitions to hide from the option list.  */
        hide?: string | string[] | undefined;
        /** If true, the option alias will be displayed after the name, i.e. --verbose, -v instead of -v, --verbose). */
        reverseNameOrder?: boolean | undefined;
        /** An options object suitable for passing into table-layout. */
        tableOptions?: any;
    }
}
