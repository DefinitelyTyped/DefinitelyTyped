declare namespace pc {

    /**
     * @name pc.guid
     * @namespace
     * @description Basically a very large random number (128-bit) which means the probability of creating two that clash is vanishingly small.
     * GUIDs are used as the unique identifiers for Entities.
     */
    namespace guid {

        /**
         * @function
         * @name pc.guid.create
         * @description Create an RFC4122 version 4 compliant GUID
         * @return {String} A new GUID
         */
        function create(): string;
    }
}
