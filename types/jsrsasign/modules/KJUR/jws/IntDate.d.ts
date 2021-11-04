declare namespace jsrsasign.KJUR.jws {
    /**
     * IntDate class for time representation for JSON Web Token(JWT)
     * @description
     * Utility class for IntDate which is integer representation of UNIX origin time
     * used in JSON Web Token(JWT).
     */
    namespace IntDate {
        /**
         * get UNIX origin time from by string
         * @param s string of time representation
         * @return UNIX origin time in seconds for argument 's'
         * @throws "unsupported format: s" when malformed format
         * @description
         * This method will accept following representation of time.
         *
         * - now - current time
         * - now + 1hour - after 1 hour from now
         * - now + 1day - after 1 day from now
         * - now + 1month - after 30 days from now
         * - now + 1year - after 365 days from now
         * - YYYYmmDDHHMMSSZ - UTC time (ex. 20130828235959Z)
         * - number - UNIX origin time (seconds from 1970-01-01 00:00:00) (ex. 1377714748)
         *
         */
        function get(s: string): number;

        /**
         * get UNIX origin time from Zulu time representation string
         * @param s string of Zulu time representation (ex. 20151012125959Z)
         * @return UNIX origin time in seconds for argument 's'
         * @throws "unsupported format: s" when malformed format
         * @description
         * This method provides UNIX origin time from Zulu time.
         * Following representations are supported:
         *
         * - YYYYMMDDHHmmSSZ - GeneralizedTime format
         * - YYMMDDHHmmSSZ - UTCTime format. If YY is greater or equal to
         * 50 then it represents 19YY otherwise 20YY.
         *
         * @example
         * KJUR.jws.IntDate.getZulu("20151012125959Z") => 1478...
         * KJUR.jws.IntDate.getZulu("151012125959Z") => 1478...
         */
        function getZulu(s: string): number;
        /**
         * get UNIX origin time of current time
         * @return UNIX origin time for current time
         * @description
         * This method provides UNIX origin time for current time
         * @example
         * KJUR.jws.IntDate.getNow() => 1478...
         */
        function getNow(): number;

        /**
         * get UTC time string from UNIX origin time value
         * @param intDate UNIX origin time value (ex. 1478...)
         * @return UTC time string
         * @description
         * This method provides UTC time string for UNIX origin time value.
         * @example
         * KJUR.jws.IntDate.intDate2UTCString(1478...) => "2015 Oct ..."
         */
        function intDate2UTCString(intDate: number): string;

        /**
         * get UTC time string from UNIX origin time value
         * @param intDate UNIX origin time value (ex. 1478...)
         * @return Zulu time string
         * @description
         * This method provides Zulu time string for UNIX origin time value.
         * @example
         * KJUR.jws.IntDate.intDate2UTCString(1478...) => "20151012...Z"
         */
        function intDate2Zulu(intDate: number): string;
    }
}
