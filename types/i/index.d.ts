// Type definitions for i 0.3
// Project: https://github.com/pksunkara/inflect
// Definitions by: Konrad Perlicki <https://github.com/KonradPerlicki>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Inflections {
    readonly plurals: Array<[RegExp | string, string]>;
    readonly singulars: Array<[RegExp | string, string]>;
    readonly uncountables: string[];
    readonly humans: Array<[RegExp | string, string]> | [];

    /**
     * Specifies a new pluralization rule and its replacement. The rule can either be a string or a regular expression.
     * The replacement should always be a string that may include references to the matched data from the rule.
     */
    plural(rule: RegExp | string, replacement: string): void;

    /**
     * Specifies a new singularization rule and its replacement. The rule can either be a string or a regular expression.
     * The replacement should always be a string that may include references to the matched data from the rule.
     */
    singular(rule: RegExp | string, replacement: string): void;

    /**
     * Specifies a new irregular that applies to both pluralization and singularization at the same time. This can only be used
     * for strings, not regular expressions. You simply pass the irregular in singular and plural form.
     *
     *     irregular 'octopus', 'octopi'
     *     irregular 'person', 'people'
     */
    irregular(singular: string, plural: string, fullMatchRequired?: boolean): void;

    /**
     * Specifies a humanized form of a string by a regular expression rule or by a string mapping.
     * When using a regular expression based replacement, the normal humanize formatting is called after the replacement.
     * When a string is used, the human form should be specified as desired (example: 'The name', not 'the_name')
     *
     *     human /(.*)_cnt$/i, '$1_count'
     *     human "legacy_col_person_name", "Name"
     */
    human(rule: RegExp | string, replacement: string): void;

    /**
     * Add uncountable words that shouldn't be attempted inflected.
     *
     *     uncountable "money"
     *     uncountable ["money", "information"]
     */
    uncountable(words: string | string[]): void;

    /**
     * Clears the loaded inflections within a given scope (default is _'all'_).
     * Give the scope as a symbol of the inflection type, the options are: _'plurals'_,
     * _'singulars'_, _'uncountables'_, _'humans'_.
     *
     *     clear 'all'
     *     clear 'plurals'
     */
    clear(scope?: 'all' | 'plurals' | 'singulars' | 'uncountables' | 'humans'): void;

    /**
     * Clears the loaded inflections and initializes them to [default](../inflections.html)
     */
    default(): Inflections;
}

interface Iinterface {
    readonly inflections: Inflections;

    /**
     * By default, _camelize_ converts strings to UpperCamelCase. If the argument to _camelize_
     * is set to _false_ then _camelize_ produces lowerCamelCase.
     *
     * _camelize_ will also convert '/' to '.' which is useful for converting paths to namespaces.
     *
     *     "bullet_record".camelize()             // => "BulletRecord"
     *     "bullet_record".camelize(false)        // => "bulletRecord"
     *     "bullet_record/errors".camelize()      // => "BulletRecord.Errors"
     *     "bullet_record/errors".camelize(false) // => "bulletRecord.Errors"
     *
     * As a rule of thumb you can think of _camelize_ as the inverse of _underscore_,
     * though there are cases where that does not hold:
     *
     *     "SSLError".underscore.camelize // => "SslError"
     */
    camelize(lower_case_and_underscored_word: string, first_letter_in_uppercase?: boolean): string;

    /**
     * Makes an underscored, lowercase form from the expression in the string.
     *
     * Changes '.' to '/' to convert namespaces to paths.
     *
     *     "BulletRecord".underscore()         // => "bullet_record"
     *     "BulletRecord.Errors".underscore()  // => "bullet_record/errors"
     *
     * As a rule of thumb you can think of +underscore+ as the inverse of +camelize+,
     * though there are cases where that does not hold:
     *
     *     "SSLError".underscore().camelize() // => "SslError"
     */
    underscore(camel_cased_word: string): string;

    /**
     * Replaces underscores with dashes in the string.
     *
     *     "puni_puni".dasherize()   // => "puni-puni"
     */
    dasherize(underscored_word: string): string;

    /**
     * Removes the module part from the expression in the string.
     *
     *     "BulletRecord.String.Inflections".demodulize() // => "Inflections"
     *     "Inflections".demodulize()                     // => "Inflections"
     */
    demodulize(class_name_in_module: string): string;

    /**
     * Creates a foreign key name from a class name.
     * _separate_class_name_and_id_with_underscore_ sets whether
     * the method should put '_' between the name and 'id'.
     *
     *     "Message".foreign_key()      // => "message_id"
     *     "Message".foreign_key(false) // => "messageid"
     *     "Admin::Post".foreign_key()  // => "post_id"
     */
    foreign_key(class_name: string, separate_class_name_and_id_with_underscore?: boolean): string;

    /**
     * Turns a number into an ordinal string used to denote the position in an
     * ordered sequence such as 1st, 2nd, 3rd, 4th.
     *
     *     ordinalize(1)     // => "1st"
     *     ordinalize(2)     // => "2nd"
     *     ordinalize(1002)  // => "1002nd"
     *     ordinalize(1003)  // => "1003rd"
     *     ordinalize(-11)   // => "-11th"
     *     ordinalize(-1021) // => "-1021st"
     */
    ordinalize(number: number): string;

    /**
     * Checks a given word for uncountability
     *
     *     "money".uncountability()     // => true
     *     "my money".uncountability()  // => true
     */
    uncountability(word: string): boolean;

    /**
     * Returns the plural form of the word in the string.
     *
     *     "post".pluralize()             // => "posts"
     *     "octopus".pluralize()          // => "octopi"
     *     "sheep".pluralize()            // => "sheep"
     *     "words".pluralize()            // => "words"
     *     "CamelOctopus".pluralize()     // => "CamelOctopi"
     */
    pluralize(word: string): string;

    /**
     * The reverse of _pluralize_, returns the singular form of a word in a string.
     *
     *     "posts".singularize()            // => "post"
     *     "octopi".singularize()           // => "octopus"
     *     "sheep".singularize()            // => "sheep"
     *     "word".singularize()             // => "word"
     *     "CamelOctopi".singularize()      // => "CamelOctopus"
     */
    singularize(word: string): string;

    /**
     * Capitalizes the first word and turns underscores into spaces and strips a
     * trailing "_id", if any. Like _titleize_, this is meant for creating pretty output.
     *
     *     "employee_salary".humanize()   // => "Employee salary"
     *     "author_id".humanize()         // => "Author"
     */
    humanize(lower_case_and_underscored_word: string): string;

    /**
     * Capitalizes all the words and replaces some characters in the string to create
     * a nicer looking title. _titleize_ is meant for creating pretty output. It is not
     * used in the Bullet internals.
     *
     *
     *     "man from the boondocks".titleize()   // => "Man From The Boondocks"
     *     "x-men: the last stand".titleize()    // => "X Men: The Last Stand"
     */
    titleize(word: string): string;

    /**
     * Create the name of a table like Bullet does for models to table names. This method
     * uses the _pluralize_ method on the last word in the string.
     *
     *     "RawScaledScorer".tableize()   // => "raw_scaled_scorers"
     *    "egg_and_ham".tableize()       // => "egg_and_hams"
     *     "fancyCategory".tableize()     // => "fancy_categories"
     */
    tableize(class_name: string): string;

    /**
     * Create a class name from a plural table name like Bullet does for table names to models.
     * Note that this returns a string and not a Class.
     *
     *     "egg_and_hams".classify()   // => "EggAndHam"
     *     "posts".classify()          // => "Post"
     *
     * Singular names are not handled correctly:
     *
     *     "business".classify()       // => "Busines"
     */
    classify(table_name: string): string;

    /**
     * Gives easy access to add inflections to this class
     */
    inflect(fn: (inflections: Inflections) => void): void;
}

/**
 * @param attach if set to true all function can be called directly on a string otherwise they will return undefined
 */
declare function I(attach?: boolean): Iinterface;

export = I;

declare global {
    interface String {
        /**
         * By default, _camelize_ converts strings to UpperCamelCase. If the argument to _camelize_
         * is set to _false_ then _camelize_ produces lowerCamelCase.
         *
         * _camelize_ will also convert '/' to '.' which is useful for converting paths to namespaces.
         *
         *     "bullet_record".camelize()             // => "BulletRecord"
         *     "bullet_record".camelize(false)        // => "bulletRecord"
         *     "bullet_record/errors".camelize()      // => "BulletRecord.Errors"
         *     "bullet_record/errors".camelize(false) // => "bulletRecord.Errors"
         *
         * As a rule of thumb you can think of _camelize_ as the inverse of _underscore_,
         * though there are cases where that does not hold:
         *
         *     "SSLError".underscore.camelize // => "SslError"
         */
        readonly camelize?: string;

        /**
         * Makes an underscored, lowercase form from the expression in the string.
         *
         * Changes '.' to '/' to convert namespaces to paths.
         *
         *     "BulletRecord".underscore()         // => "bullet_record"
         *     "BulletRecord.Errors".underscore()  // => "bullet_record/errors"
         *
         * As a rule of thumb you can think of +underscore+ as the inverse of +camelize+,
         * though there are cases where that does not hold:
         *
         *     "SSLError".underscore().camelize() // => "SslError"
         */
        readonly underscore?: string;

        /**
         * Replaces underscores with dashes in the string.
         *
         *     "puni_puni".dasherize()   // => "puni-puni"
         */
        readonly dasherize?: string;

        /**
         * Removes the module part from the expression in the string.
         *
         *     "BulletRecord.String.Inflections".demodulize() // => "Inflections"
         *     "Inflections".demodulize()                     // => "Inflections"
         */
        readonly demodulize?: string;

        /**
         * Creates a foreign key name from a class name.
         * _separate_class_name_and_id_with_underscore_ sets whether
         * the method should put '_' between the name and 'id'.
         *
         *     "Message".foreign_key()      // => "message_id"
         *     "Message".foreign_key(false) // => "messageid"
         *     "Admin::Post".foreign_key()  // => "post_id"
         */
        readonly foreign_key?: string;

        /**
         * Turns a number into an ordinal string used to denote the position in an
         * ordered sequence such as 1st, 2nd, 3rd, 4th.
         *
         *     ordinalize(1)     // => "1st"
         *     ordinalize(2)     // => "2nd"
         *     ordinalize(1002)  // => "1002nd"
         *     ordinalize(1003)  // => "1003rd"
         *     ordinalize(-11)   // => "-11th"
         *     ordinalize(-1021) // => "-1021st"
         */
        readonly ordinalize?: string;

        /**
         * Checks a given word for uncountability
         *
         *     "money".uncountability()     // => true
         *     "my money".uncountability()  // => true
         */
        readonly uncountability?: boolean;

        /**
         * Returns the plural form of the word in the string.
         *
         *     "post".pluralize()             // => "posts"
         *     "octopus".pluralize()          // => "octopi"
         *     "sheep".pluralize()            // => "sheep"
         *     "words".pluralize()            // => "words"
         *     "CamelOctopus".pluralize()     // => "CamelOctopi"
         */
        readonly pluralize?: string;

        /**
         * The reverse of _pluralize_, returns the singular form of a word in a string.
         *
         *     "posts".singularize()            // => "post"
         *     "octopi".singularize()           // => "octopus"
         *     "sheep".singularize()            // => "sheep"
         *     "word".singularize()             // => "word"
         *     "CamelOctopi".singularize()      // => "CamelOctopus"
         */
        readonly singularize?: string;

        /**
         * Capitalizes the first word and turns underscores into spaces and strips a
         * trailing "_id", if any. Like _titleize_, this is meant for creating pretty output.
         *
         *     "employee_salary".humanize()   // => "Employee salary"
         *     "author_id".humanize()         // => "Author"
         */
        readonly humanize?: string;

        /**
         * Capitalizes all the words and replaces some characters in the string to create
         * a nicer looking title. _titleize_ is meant for creating pretty output. It is not
         * used in the Bullet internals.
         *
         *
         *     "man from the boondocks".titleize()   // => "Man From The Boondocks"
         *     "x-men: the last stand".titleize()    // => "X Men: The Last Stand"
         */
        readonly titleize?: string;

        /**
         * Create the name of a table like Bullet does for models to table names. This method
         * uses the _pluralize_ method on the last word in the string.
         *
         *     "RawScaledScorer".tableize()   // => "raw_scaled_scorers"
         *    "egg_and_ham".tableize()       // => "egg_and_hams"
         *     "fancyCategory".tableize()     // => "fancy_categories"
         */
        readonly tableize?: string;

        /**
         * Create a class name from a plural table name like Bullet does for table names to models.
         * Note that this returns a string and not a Class.
         *
         *     "egg_and_hams".classify()   // => "EggAndHam"
         *     "posts".classify()          // => "Post"
         *
         * Singular names are not handled correctly:
         *
         *     "business".classify()       // => "Busines"
         */
        readonly classify?: string;
    }
}
