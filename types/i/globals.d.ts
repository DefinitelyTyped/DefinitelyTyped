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
        readonly camelize: string;

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
        readonly underscore: string;

        /**
         * Replaces underscores with dashes in the string.
         *
         *     "puni_puni".dasherize()   // => "puni-puni"
         */
        readonly dasherize: string;

        /**
         * Removes the module part from the expression in the string.
         *
         *     "BulletRecord.String.Inflections".demodulize() // => "Inflections"
         *     "Inflections".demodulize()                     // => "Inflections"
         */
        readonly demodulize: string;

        /**
         * Creates a foreign key name from a class name.
         * _separate_class_name_and_id_with_underscore_ sets whether
         * the method should put '_' between the name and 'id'.
         *
         *     "Message".foreign_key()      // => "message_id"
         *     "Message".foreign_key(false) // => "messageid"
         *     "Admin::Post".foreign_key()  // => "post_id"
         */
        readonly foreign_key: string;

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
        readonly ordinalize: string;

        /**
         * Checks a given word for uncountability
         *
         *     "money".uncountability()     // => true
         *     "my money".uncountability()  // => true
         */
        readonly uncountability: boolean;

        /**
         * Returns the plural form of the word in the string.
         *
         *     "post".pluralize()             // => "posts"
         *     "octopus".pluralize()          // => "octopi"
         *     "sheep".pluralize()            // => "sheep"
         *     "words".pluralize()            // => "words"
         *     "CamelOctopus".pluralize()     // => "CamelOctopi"
         */
        readonly pluralize: string;

        /**
         * The reverse of _pluralize_, returns the singular form of a word in a string.
         *
         *     "posts".singularize()            // => "post"
         *     "octopi".singularize()           // => "octopus"
         *     "sheep".singularize()            // => "sheep"
         *     "word".singularize()             // => "word"
         *     "CamelOctopi".singularize()      // => "CamelOctopus"
         */
        readonly singularize: string;

        /**
         * Capitalizes the first word and turns underscores into spaces and strips a
         * trailing "_id", if any. Like _titleize_, this is meant for creating pretty output.
         *
         *     "employee_salary".humanize()   // => "Employee salary"
         *     "author_id".humanize()         // => "Author"
         */
        readonly humanize: string;

        /**
         * Capitalizes all the words and replaces some characters in the string to create
         * a nicer looking title. _titleize_ is meant for creating pretty output. It is not
         * used in the Bullet internals.
         *
         *
         *     "man from the boondocks".titleize()   // => "Man From The Boondocks"
         *     "x-men: the last stand".titleize()    // => "X Men: The Last Stand"
         */
        readonly titleize: string;

        /**
         * Create the name of a table like Bullet does for models to table names. This method
         * uses the _pluralize_ method on the last word in the string.
         *
         *     "RawScaledScorer".tableize()   // => "raw_scaled_scorers"
         *    "egg_and_ham".tableize()       // => "egg_and_hams"
         *     "fancyCategory".tableize()     // => "fancy_categories"
         */
        readonly tableize: string;

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
        readonly classify: string;
    }
}
export {};
