declare namespace pc {

    /**
     * @namespace pc.path
     * @description File path API
     */
    namespace path {

        /**
         * The character that separates path segments
         * @name pc.path.delimiter
         */
        const delimiter = "/",
        /**
         * Join two sections of file path together, insert a delimiter if needed.
         * @param {String} one First part of path to join
         * @param {String} two Second part of path to join
         * @function
         * @name pc.path.join
         */
        /*
        join: function(one, two) {
            if(two[0] === pc.path.delimiter) {
                return two;
            }

            if(one && two && one[one.length - 1] !== pc.path.delimiter && two[0] !== pc.path.delimiter) {
                return one + pc.path.delimiter + two;
            }
            else {
                return one + two;
            }
        },
        */
        function join(one: string, two: string): string;

        /**
        * @function
        * @name pc.path.split
        * @description Split the pathname path into a pair [head, tail] where tail is the final part of the path
        * after the last delimiter and head is everything leading up to that. tail will never contain a slash
        */
        function split(path: string): [string, string];

        /**
        * @function
        * @name pc.path.getBasename
        * @description Return the basename of the path. That is the second element of the pair returned by
        * passing path into {@link pc.path.split}.
        * @example
        * pc.path.getBasename("/path/to/file.txt"); // returns "path.txt"
        * pc.path.getBasename("/path/to/dir"); // returns "dir"
        * @returns {String} The basename
        */
        function getBasename(path: string): string;

        /**
         * Get the directory name from the path. This is everything up to the final instance of pc.path.delimiter
         * @param {String} path The path to get the directory from
         * @function
         * @name pc.path.getDirectory
         */
        function getDirectory(path: string): string;
    }
}
