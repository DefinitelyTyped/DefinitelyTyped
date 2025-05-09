/**
Copyright (c) 2025, 2025, Oracle and/or its affiliates.

The Universal Permissive License (UPL), Version 1.0

Subject to the condition set forth below, permission is hereby granted to any
person obtaining a copy of this software, associated documentation and/or data
(collectively the "Software"), free of charge and under any and all copyright
rights in the Software, and any and all patent rights owned or freely
licensable by each licensor hereunder covering either (i) the unmodified
Software as contributed to or provided by such licensor, or (ii) the Larger
Works (as defined below), to deal in both

(a) the Software, and
(b) any piece of software and/or hardware listed in the lrgrwrks.txt file if
one is included with the Software (each a "Larger Work" to which the Software
is contributed by such licensors),

without restriction, including without limitation the rights to copy, create
derivative works of, display, perform, and distribute the Software and make,
use, sell, offer for sale, import, export, have made, and have sold the
Software and the Larger Work(s), and to sublicense the foregoing rights on
either these or other terms.

This license is subject to the following condition:
The above copyright notice and either this complete permission notice or at
a minimum a reference to the UPL must be included in all copies or
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

declare module "mle-js-bindings" {
    enum JSTypes {
        /** Type String */
        STRING = 0,
        /** Type Number */
        NUMBER = 1,
        /** Type Date */
        DATE = 2,
        /** Type Boolean */
        BOOLEAN = 3,
        /**
         * In 21c, indices 4 and 5 had been used for BLOB and CLOB which do, however,
         * not make sense for mle-js-oracledb and have therefore been removed in 23ai.
         */
        /** Type Object */
        OBJECT = 6,
        /** UINT8ARRAY */
        UINT8ARRAY = 7,
        /** Type OracleNumber */
        ORACLE_NUMBER = 8,
        /** Type OracleDate */
        ORACLE_DATE = 9,
        /** Type OracleTimeStamp */
        ORACLE_TIMESTAMP = 10,
        /** Type OracleTimeStampTZ */
        ORACLE_TIMESTAMP_TZ = 11,
        /** Type OracleIntervalYearToMonth */
        ORACLE_INTERVAL_YM = 12,
        /** Type OracleIntervalDayToSecond */
        ORACLE_INTERVAL_DS = 13,
        /** Type OracleCLOB */
        ORACLE_CLOB = 14,
        /** Type OracleBLOB */
        ORACLE_BLOB = 15,
        /** Type DbTypeJson */
        DB_TYPE_JSON = 16,
        /**
         * Type Int8Array
         *
         * @since Oracle 23.4
         */
        INT8ARRAY = 17,
        /**
         * Type Float32Array
         *
         * @since Oracle 23.4
         */
        FLOAT32ARRAY = 18,
        /**
         * Type Float64Array
         *
         * @since Oracle 23.4
         */
        FLOAT64ARRAY = 19,
    }

    /**
     * Import a value exported from PL/SQL into the current context
     *
     * Import the value, identified by the given name, that was previously exported
     * from PL/SQL.
     * The desired result type can be specified explicitly with the jstype parameter.
     * If no result type is specified, the default PL/SQL-to-JavaScript mapping is
     * used to determine the result type implicitly.
     *
     * @param name Name of the property to be retrieved. Cannot be null, undefined or empty.
     * @param jstype JavaScript type of the result.
     * @return a JavaScript value of the desired type. Returns undefined if the
     * property does not exist.
     * @throws an exception (Invalid property name) if name is null, undefined or empty.
     */
    function importValue(name: string, jstype?: JSTypes): any;

    /**
     * a value to PL/SQL
     *
     * the given value to PL/SQL.
     * The exported value can be imported into PL/SQL using the given name.
     *
     * @param name Name of the property to be exported. Cannot be null, undefined or empty.
     * @param value Value of the property to be exported.
     * @throws an exception (Invalid property name) if name is null, undefined or empty.
     */
    function exportValue(name: string, value: any): void;
}

/**
 * CAUTION: This namespace is used for TYPE DECLARATIONS ONLY and does not have
 * an equivalent in the actual implementation in MLE. Please either use the
 * corresponding module or global symbols instead.
 */
declare namespace __mle_js_plsqltypes {
    /**
     * Class which implements infix operators for Oracle Number
     * arithmetics: +, -, /, *, etc.
     *
     * @since Oracle 23.5
     */
    const OracleNumberOperators: any;

    /**
     * JavaScript API for Oracle type NUMBER. Since Oracle 23.5, this class also
     * supports infix operator arithmetics: +, -, /, *, etc.
     */
    class OracleNumber extends OracleNumberOperators {
        #private;
        /**
         * Construct an OracleNumber from a JavaScript number or a string.
         *
         * @param n
         */
        constructor(n: number | string);
        /**
         * Construct an OracleNumber from a JavaScript number.
         * @param from - number used to create the OracleNumber
         * @returns a new OracleNumber object
         */
        static fromNumber(n: number): OracleNumber;
        /**
         * Parse a string into an OracleNumber, with an optional number format
         * and NLS parameters. If no format string and NLS parameters are provided,
         * the default values for the session are used.
         * @param s the number string
         * @param format optional number format
         * @param nlsParam optional NLS parameters
         * @returns OracleNumber value from parsing the input string
         */
        static fromString(s: string, format?: string, nlsParam?: string): OracleNumber;
        /**
         * The pi constant.
         */
        static pi: OracleNumber;
        /**
         * The zero constant.
         */
        static zero: OracleNumber;
        /**
         * The e constant.
         */
        static e: OracleNumber;
        /**
         * The ln10 constant.
         */
        static ln10: OracleNumber;
        /**
         * Computes the absolute value of the Oracle number
         * @returns the absolute value of the Oracle number
         */
        abs(): OracleNumber;
        /**
         * Adds an Oracle number to another Oracle number
         * @param other - the other Oracle number
         * @returns returns the sum of the two Oracle NUMBERs
         *
         * Note: since Oracle 23.5, `this + other` can be used instead.
         */
        add(other: OracleNumber): OracleNumber;
        /**
         * Subtracts an Oracle number from the Oracle number and returns the resulting Oracle number
         * @param other - the other number to be subtracted from the OracleNumber
         * @returns the result of the subtraction as OracleNumber
         *
         * Note: since Oracle 23.5, `this - other` can be used instead.
         */
        sub(other: OracleNumber): OracleNumber;
        /**
         * Multiplies the Oracle number with another Oracle number
         * @param other - the other Oracle number
         * @returns the result of the multiplication as Oracle number
         *
         * Note: since Oracle 23.5, `this * other` can be used instead.
         */
        mul(other: OracleNumber): OracleNumber;
        /**
         * Divides two Oracle numbers
         * @param other - divisor
         * @returns the result of the division as Oracle number
         *
         * Note: since Oracle 23.5, `this / other` can be used instead.
         */
        div(other: OracleNumber): OracleNumber;
        /**
         * Computes the modulus of two Oracle numbers.
         * @param other - the other Oracle number
         * @returns this number modulo the other number
         *
         * Note: since Oracle 23.5, `this % other` can be used instead.
         */
        mod(other: OracleNumber): OracleNumber;
        /**
         * Computes the sine of the Oracle number
         * @returns the sine of the Oracle number
         */
        sin(): OracleNumber;
        /**
         * Computes the cosine of the Oracle number
         * @returns the cosine
         */
        cos(): OracleNumber;
        /**
         * Computes the tangent of the Oracle number
         * @returns the tangent of the Oracle number
         */
        tan(): OracleNumber;
        /**
         * Computes the arc sine in radians of the Oracle number
         * @returns the arc sine in radians of the Oracle number
         */
        arcSin(): OracleNumber;
        /**
         * Computes the arc cosine in radians of the Oracle number
         * @returns the arc cosine in radians of the Oracle number
         */
        arcCos(): OracleNumber;
        /**
         * Computes the arc tangent in radians of the Oracle number
         * @returns the arc tangent in radians of the Oracle number
         */
        arcTan(): OracleNumber;
        /**
         * Computes the arc tangent of two Oracle numbers
         * @param other Oracle number used for the calculation
         * @returns the arc tangent of two Oracle numbers
         */
        arcTan2(other: OracleNumber): OracleNumber;
        /**
         * Computes the hyperbolic sine of the Oracle number
         * @returns the hyperbolic sine of the Oracle number
         */
        hypSin(): OracleNumber;
        /**
         * Computes the hyperbolic cosine of the Oracle number
         * @returns the hyperbolic cosine of the Oracle number
         */
        hypCos(): OracleNumber;
        /**
         * Computes the hyperbolic tangent of the Oracle number
         * @returns the hyperbolic tangent of the Oracle number
         */
        hypTan(): OracleNumber;
        /**
         * Compares two Oracle numbers.
         * Returns -1 if this < other, 0 if they are equal, and 1 if this > other.
         * @returns the result of the comparison as a number between -1 and +1.
         *
         * Note: since Oracle 23.5, `<, <=, >=, >` can be used instead.
         */
        compare(other: OracleNumber): number;
        /**
         * Checks if the Oracle number is equal to another Oracle number
         * @param other - the other Oracle number
         * @returns true if both Oracle numbers are equal, otherwise false
         *
         * Note: since Oracle 23.5, `==` or `!=` can be used instead.
         */
        equals(other: OracleNumber): boolean;
        /**
         * Raises e to the power of this Oracle number
         * @returns the result of the exponentiation as Oracle number
         */
        exp(): OracleNumber;
        /**
         * Raises this Oracle number to the given exponent
         * @returns the result of the exponentiation
         *
         * Note: since Oracle 23.5, `this ** other` can be used instead.
         */
        power(exp: OracleNumber | number): OracleNumber;
        /**
         * Computes the natural logarithm of the Oracle number
         * @returns the natural logarithm of the Oracle number
         */
        ln(): OracleNumber;
        /**
         * Computes the logarithm to an arbitrary base
         * @param base the base of the logarithm
         * @returns the logarithm to an arbitrary base
         */
        log(base: OracleNumber | number): OracleNumber;
        /**
         * Computes the square root of the Oracle number
         * @returns the square root of the Oracle number
         */
        sqrt(): OracleNumber;
        /**
         * Tests if the number is an integer
         * @returns true if the Oracle number is an integer, otherwise false
         */
        isInt(): boolean;
        /**
         * Tests if the number is zero
         * @returns true if the Oracle number is zero, otherwise false
         */
        isZero(): boolean;
        /**
         * Returns -1 if the sign of the number is negative, 0 if the number is 0, and > 0 if the number is positive.
         * @returns a number indicating the sign of the Oracle number
         */
        sign(): number;
        /**
         * Negates the number
         * @returns the negated Oracle number
         *
         * Note: since Oracle 23.5, `-this` can be used instead.
         */
        neg(): OracleNumber;
        /**
         * Computes the ceiling of the Oracle number
         * @returns the ceiling of the Oracle number
         */
        ceil(): OracleNumber;
        /**
         * Computes the floor of the number
         * @returns the floor value of the Oracle number
         */
        floor(): OracleNumber;
        /**
         * Rounds the number to a specified number of digits
         * @param ndigs - the number of digits
         * @returns the rounded Oracle number
         */
        roundDigits(ndigs: OracleNumber | number): OracleNumber;
        /**
         * Rounds the Oracle number to a specified number of decimal places
         * @param decplace - the decimal place
         * @returns the rounded Oracle number
         */
        roundPlaces(decplace: OracleNumber | number): OracleNumber;
        /**
         * Shifts the number by the specified number of decimal places
         * @param digits - number of decimal places to shift. It can be negative. Positive values shift the decimal place to the right and negative values to the left. For example, if NUMBER corresponds to 1234.5 and digits == -1, the new NUMBER object will correspond to 123.45.
         * @returns an Oracle number containing the shifted result
         *
         * Note: since Oracle 23.5, `this >> other` or `this << -other` can be used instead.
         */
        shift(digits: OracleNumber | number): OracleNumber;
        /**
         * Truncates the number to the specified number of decimal places.
         * @param decplace - Number of decimal digits to the right of the decimal point at which to truncate. Negative values are allowed.
         * @returns a truncated Oracle number
         */
        trunc(decplace: OracleNumber | number): OracleNumber;
        /**
         * Scales the digits to the left and right of the decimal point.
         * @param left maximum number of decimal digits to the left of the decimal point. It will not effect the number, but throw an exception if this value is exceeded.
         * @param right maximum number of decimal digits to the right of the decimal point. The number is rounded at this point. Negative values are allowed.
         * @returns a new scaled Oracle number scaled according to the arguments
         * @throws throws an exception if the number of left-hand-side digits is exceeded
         */
        scale(left: number, right: number): OracleNumber;
        /**
         * Converts an Oracle NUMBER to type number
         * @returns the converted number
         */
        toNumber(): number;
        /**
         * Converts an Oracle NUMBER to a string, with an optional number format
         * and NLS parameters. If no format string and NLS parameters are provided,
         * the default values for the session are used.
         * @param format optional number format
         * @param nlsParam optional NLS parameters
         * @returns the converted string
         */
        toString(format?: string, nlsParam?: string): string;
        isOracleNumber(): boolean;
        asPackedDecimalNumber(): any;
    }

    /**
     * JavaScript API for Oracle type INTERVAL DAY TO SECOND.
     */
    class IOracleIntervalDayToSecond {
        /**
         * Constructor for IOracleIntervalDayToSecond using day, hour, minute,
         * second, and fraction of a second. All arguments must be integral numbers.
         *
         * @param dy - number of days
         * @param hr - number of hours
         * @param mm - number of minutes
         * @param ss - number of seconds
         * @param fs - fractional seconds
         * @returns new IOracleIntervalDayToSecond
         */
        constructor(dy: number, hr: number, mm: number, ss: number, fs: number);
        /**
     * Parses an interval string into IOracleIntervalDayToSecond. This method
     * accepts the same input formats as the Oracle SQL function TO_DSINTERVAL:

     * - SQL interval format compatible with the SQL standard (ISO/IEC 9075)
     * - ISO duration format compatible with the ISO 8601:2004 standard
     *
     * @param interval string to parse.
     * @returns new IOracleIntervalDayToSecond
     */
        static fromString(interval: string): IOracleIntervalDayToSecond;
        /**
         * Returns an IOracleIntervalDayToSecond for a given timezone offset or
         * timezone name. The input string must be of the form [+/-]TZH:TZM or
         * 'TZR'.
         *
         * @param tz - timezone offset or timezone name as string
         * @returns new IOracleIntervalDayToSecond that contains the current absolute offset
         */
        static fromTimeZone(tz: string): IOracleIntervalDayToSecond;
        /**
         * Returns an IOracleIntervalDayToSecond for the given number of days. If the
         * number of days contains a fractional part, the number of hours, minutes
         * and seconds will be set accordingly.
         *
         * @param days - number of days
         * @returns new IOracleIntervalDayToSecond for the given number of days.
         */
        static fromNumber(days: number | OracleNumber): IOracleIntervalDayToSecond;
        /**
         * Compares two intervals.
         * Returns -1 if i1 < i2, 0 if they are equal, and 1 if i1 > i2.
         * @param i1 - first interval to use for the comparison
         * @param i2 - second interval to use for the comparison
         * @returns the result of the comparison as a number between -1 and +1.
         */
        static compare(i1: IOracleIntervalDayToSecond, i2: IOracleIntervalDayToSecond): number;
        /**
         * Returns the number of days from the interval
         *
         * @returns the number of days from the interval
         */
        getDays(): number;
        /**
         * Returns the number of hours from the interval
         *
         * @returns the number of hours from the interval
         */
        getHours(): number;
        /**
         * Returns the number of minutes from the interval
         *
         * @returns the number of minutes from the interval
         */
        getMinutes(): number;
        /**
         * Returns the number of seconds including fractional seconds from the
         * interval
         *
         * @returns the number of seconds including fractional seconds from the
         *          interval
         */
        getSeconds(): number;
        /**
         * Adds the interval to another interval and returns the resulting interval
         *
         * @param summand - the other interval
         * @returns the resulting interval as IOracleIntervalDayToSecond
         */
        add(summand: IOracleIntervalDayToSecond): IOracleIntervalDayToSecond;
        /**
         * Subtracts another interval from the interval and returns the resulting
         * interval
         *
         * @param subtrahend - the other interval
         * @returns the resulting interval as IOracleIntervalDayToSecond
         */
        subtract(subtrahend: IOracleIntervalDayToSecond): IOracleIntervalDayToSecond;
        /**
         * Divides the interval by an Oracle number or JavaScript number and returns
         * the resulting interval
         *
         * @param divisor - the divisor used in the division
         * @returns the resulting interval
         */
        divide(divisor: OracleNumber | number): IOracleIntervalDayToSecond;
        /**
         * Multiplies the interval with an Oracle number or a JavaScript number and
         * returns the resulting interval
         *
         * @param factor - the factor used in the multiplication
         * @returns the resulting interval
         */
        multiply(factor: OracleNumber | number): IOracleIntervalDayToSecond;
        /**
         * Produces a string representing the interval. The string is formatted with
         * 2 digits for the number of days and 6 digits for the fractional seconds
         * of the interval.
         *
         * @returns a string representing the interval
         */
        toString(): string;
        /**
         * Produces a string representing the interval. The string is formatted
         * according to the specified precision for days and fractional seconds.
         *
         * @param daysPrecision - The number of digits used to represent days in the interval string.
         * @param fractionalSecondsPrecision - Fractional second precision of the interval string (the number of digits used to represent the fractional seconds).
         * @returns a string representing the interval
         */
        toStringWithPrecision(daysPrecision: number, fractionalSecondsPrecision: number): string;
    }

    /**
     * JavaScript API for Oracle type INTERVAL YEAR TO MONTH.
     */
    class IOracleIntervalYearToMonth {
        /**
         * Constructor for IOracleIntervalYearToMonth using year and month. All
         * arguments must be integral numbers.
         *
         * @param yr year value
         * @param mnth month value
         * @returns new IOracleIntervalYearToMonth
         */
        constructor(yr: number, mnth: number);
        /**
         * Parse an interval string into IOracleIntervalYearToMonth. fromString
         * accepts the same input formats as the Oracle SQL function TO_YMINTERVAL:
         *
         * - SQL interval format compatible with the SQL standard (ISO/IEC 9075)
         * - ISO duration format compatible with the ISO 8601:2004 standard
         *
         * @param interval string to parse
         * @returns new IOracleIntervalYearToMonth
         */
        static fromString(interval: string): IOracleIntervalYearToMonth;
        /**
         * Returns an IOracleIntervalYearToMonth for the given number of years. If
         * the number of years contains a fractional part, the number of months will
         * be set accordingly.
         *
         * @param years - number of years
         * @returns new IOracleIntervalYearToMonth for the given number of years.
         */
        static fromNumber(years: number | OracleNumber): IOracleIntervalYearToMonth;
        /**
         * Compares two intervals.
         * Returns -1 if i1 < i2, 0 if they are equal, and 1 if i1 > i2.
         * @param i1 - first interval to use for the comparison
         * @param i2 - second interval to use for the comparison
         * @returns the result of the comparison as a number between -1 and +1.
         */
        static compare(i1: IOracleIntervalYearToMonth, i2: IOracleIntervalYearToMonth): number;
        /**
         * Returns the number of years from the interval
         *
         * @returns the number of years from the interval
         */
        getYears(): number;
        /**
         * Returns the total number of months from the interval
         *
         * @returns the total number of months from the interval
         */
        getMonths(): number;
        /**
         * Adds the interval to another interval and returns the resulting interval
         *
         * @param other - the other interval
         * @returns the resulting interval as IOracleIntervalYearToMonth
         */
        add(other: IOracleIntervalYearToMonth): IOracleIntervalYearToMonth;
        /**
         * Subtracts another interval from the interval and returns the resulting
         * interval
         *
         * @param other - the other interval
         * @returns the resulting interval as IOracleIntervalYearToMonth
         */
        subtract(other: IOracleIntervalYearToMonth): IOracleIntervalYearToMonth;
        /**
         * Divides the interval by an OracleNumber or JavaScript number and returns
         * the resulting interval
         *
         * @param dividend - the dividend used in the division
         * @returns the resulting interval
         */
        divide(dividend: OracleNumber | number): IOracleIntervalYearToMonth;
        /**
         * Multiplies the interval with an OracleNumber or a JavaScript number and
         * returns the resulting interval
         *
         * @param nfactor - the factor used in the multiplication
         * @returns the resulting interval
         */
        multiply(nfactor: OracleNumber | number): IOracleIntervalYearToMonth;
        /**
         * Given an interval, produces a string representing the interval. The
         * string is formatted with at least 2 digits for the number of years.
         *
         * @returns a string representing the year-to-month interval
         */
        toString(): string;
        /**
         * Produces a string representing the interval. The string is formatted
         * according to the specified precision for days and fractional seconds.
         *
         * @param yearsPrecision - The number of digits used to represent years in the interval string.
         * @returns a string representing the interval
         */
        toStringWithPrecision(yearsPrecision: number): string;
    }

    /**
     * Optional arguments for the compare method of OracleBlob and OracleClob.
     */
    interface CompareOptionalArguments {
        /**
         * Number of bytes/characters to compare.
         */
        amount?: number;
        /**
         * Offset (bytes/characters) into the first LOB. Defaults to 1.
         */
        offset1?: number;
        /**
         * Offset (bytes/characters) into the second LOB. Defaults to 1.
         */
        offset2?: number;
    }

    /**
     * JavaScript API for Oracle type Binary Large Object (BLOB).
     */
    class OracleBlob {
        #private;
        /**
         * Constant for read-only mode.
         */
        static LOB_READONLY: number;
        /**
         * Constant for read/write mode.
         */
        static LOB_READWRITE: number;
        /**
         * This constructor creates a temporary BLOB and its corresponding index in
         * your default temporary tablespace. The temporary BLOB is created with
         * SESSION duration.
         *
         * @param cache Specifies if BLOB should be read into buffer cache or not.
         */
        static createTemporary(cache: boolean): OracleBlob;
        constructor(delegate: any);
        /**
         * This method compares two entire BLOBs or parts of two BLOBs.
         *
         * @param lob1 First target for comparison.
         * @param lob2 Second target for comparison.
         * @param optArgs Optional arguments that specify amount and offsets.
         * @returns 0 if the compared portions are equal, non-zero if not
         * @throws Error if offset1 or offset2 is not a valid BLOB offset value.
         */
        static compare(lob1: OracleBlob, lob2: OracleBlob, optArgs?: CompareOptionalArguments): number;
        /**
         * When creating the table, you can specify the chunking factor, a multiple
         * of tablespace blocks in bytes. This corresponds to the chunk size used
         * by the BLOB data layer when accessing or modifying the BLOB value. Part of
         * the chunk is used to store system-related information, and the rest
         * stores the BLOB value. This method returns the amount of space used in
         * the BLOB chunk to store the BLOB value.
         */
        getChunkSize(...args: any[]): number;
        /**
         * This method gets the length of the specified BLOB. The length in bytes
         * is returned.
         */
        length(...args: any[]): number;
        /**
         * This method checks to see if the BLOB was already opened using the
         * input locator.
         */
        isOpen(...args: any[]): boolean;
        /**
         * This method determines whether a BLOB instance is temporary.
         */
        isTemporary(...args: any[]): boolean;
        /**
         * This method opens a BLOB in the indicated mode. Valid modes include
         * read-only and read/write.
         *
         * @param mode
         */
        open(mode: number): void;
        /**
         * This method closes a previously opened BLOB.
         */
        close(...args: any[]): void;
        /**
         * This method frees the temporary BLOB in the default temporary
         * tablespace.
         */
        freeTemporary(...args: any[]): void;
        /**
         * Returns all the BLOB data as Uint8Array.
         *
         * For queries returning LOB columns, it can be more efficient to use
         * fetchAsUint8Array, or fetchInfo instead of lob.getData().
         *
         * @throws Error if blob is too large.
         */
        getData(): Uint8Array;
        /**
         * This method reads a piece of a BLOB, and returns the specified amount
         * into the buffer parameter, starting from an absolute offset from the
         * beginning of the BLOB. If the input offset points past the End of BLOB, a
         * NO_DATA_FOUND exception is raised.
         *
         * @param amount Number of bytes to read.
         * @param offset Offset in bytes from the start of the BLOB (origin: 1).
         * @returns a Uint8Array that contains the bytes actually read.
         */
        read(amount: number, offset: number): Uint8Array;
        /**
         * This method writes data into an internal BLOB, starting from an absolute
         * offset from the beginning of the BLOB. The data is written from the buffer
         * parameter. WRITE replaces (overwrites) any data that already exists in
         * the BLOB at the offset.
         *
         * @param offset Offset in bytes from the start of the BLOB (origin: 1) for the write operation.
         * @param buffer Data to write.
         */
        write(offset: number, buffer: Uint8Array): void;
        getDelegate(): any;
        isOracleBlob(): boolean;
    }

    /**
     * JavaScript API for Oracle type Character Large Object (CLOB).
     */
    class IOracleClob {
        /**
         * Constant for read-only mode.
         */
        static LOB_READONLY: number;
        /**
         * Constant for read/write mode.
         */
        static LOB_READWRITE: number;
        /**
         * createTemporary creates a temporary CLOB and its corresponding index in
         * your default temporary tablespace. The temporary CLOB is created with
         * SESSION duration.
         *
         * @param cache Specifies if CLOB should be read into buffer cache or not.
         * @param isNClob If set to true will create a temporary NCLOB instead of regular CLOB.
         */
        static createTemporary(cache: boolean, isNClob?: boolean): any;
        /**
         * This method compares two entire CLOBs or parts of two CLOBs.
         *
         * @param lob1 First target for comparison.
         * @param lob2 Second target for comparison.
         * @param optArgs Optional arguments that specify amount and offsets.
         * @returns 0 if the compared portions are equal, non-zero if not
         * @throws Error if offset1 or offset2 is not a valid CLOB offset value.
         */
        static compare(lob1: IOracleClob, lob2: IOracleClob, optArgs?: CompareOptionalArguments): number;
        /**
         * When creating the table, you can specify the chunking factor, a multiple
         * of tablespace blocks in characters. This corresponds to the chunk size used
         * by the CLOB data layer when accessing or modifying the CLOB value. Part of
         * the chunk is used to store system-related information, and the rest
         * stores the CLOB value. This method returns the amount of space used in
         * the CLOB chunk to store the CLOB value.
         */
        getChunkSize(): number;
        /**
         * This method gets the length of the specified CLOB. The length in
         * characters is returned.
         */
        length(): number;
        /**
         * This method checks to see if the CLOB was already opened using the
         * input locator.
         */
        isOpen(): boolean;
        /**
         * This method determines whether a CLOB instance is temporary.
         */
        isTemporary(): boolean;
        /**
         * This method opens a CLOB in the indicated mode. Valid modes include
         * read-only and read/write.
         *
         * @param mode
         */
        open(mode: number): any;
        /**
         * This method closes a previously opened CLOB.
         */
        close(): any;
        /**
         * This method frees the temporary CLOB in the default temporary
         * tablespace.
         */
        freeTemporary(): any;
        /**
         * This method reads a piece of a CLOB and returns the specified amount
         * into the buffer parameter, starting from an absolute offset from the
         * beginning of the CLOB. If the input offset points past the End of CLOB, a
         * NO_DATA_FOUND exception is raised.
         *
         * @param amount Number of characters to read.
         * @param offset Offset in characters from the start of the CLOB (origin: 1).
         * @returns a string that contains the characters actually read.
         */
        read(amount: number, offset: number): string;
        /**
         * This method writes data into an internal CLOB, starting from an absolute
         * offset from the beginning of the CLOB. The data is written from the buffer
         * parameter. WRITE replaces (overwrites) any data that already exists in
         * the CLOB at the offset.
         *
         * @param offset Offset in characters from the start of the CLOB (origin: 1) for the write operation.
         * @param buffer Data to write.
         */
        write(offset: number, buffer: string): any;
        /**
     * Returns all the CLOB/NCLOB data as string.

     * For queries returning LOB columns, it can be more efficient to use
     * fetchAsString, or fetchInfo instead of lob.getData().
     */
        getData(): string;
    }

    /**
     * JavaScript API for Oracle type TIMESTAMP WITH TIME ZONE.
     */
    class IOracleTimestampTZ {
        /**
     * Parse a string into an IOracleTimestampTZ. An optional datetime format
     * model and an optional NLS parameter string can be provided. If no format
     * model is specified, the string must be in the default format for the
     * Oracle TIMESTAMP WITH TIME ZONE data type, which is determined by the
     * NLS_TIMESTAMP_TZ_FORMAT parameter.
     *
     * If an NLS parameter string is specified, it has the effect of temporarily
     * altering the session's NLS settings for the duration of the call to this
     * method. The NLS parameter string may set the NLS_DATE_LANGUAGE
     * parameter.
     *
     * If a datetime format model is specified, it overrides the datetime format
     * determined by NLS settings (i.e. the setting of the NLS_TIMESTAMP_TZ
     * parameter).

     * The function returns an error if the specified date lies in a DST
     * transition period and if the Oracle Database parameter
     * ERROR_ON_OVERLAP_TIME is true for the current session.
     *
     * @param date date represented as a string
     * @param format optional datetime format model
     * @param nlsParam optional NLS parameter string. Must have the same format
     * as the NLS argument to the TO_TIMESTAMP_TZ SQL function.
     * @returns an IOracleTimestampTZ object
     */
        static fromString(date: string, format?: string, nlsParam?: string): IOracleTimestampTZ;
        /**
         * Convert to an OracleTimestamp that contains the local date/time of the
         * IOracleTimestampTZ.
         */
        asLocalDateTime(): IOracleTimestamp;
        /**
         * Convert this IOracleTimestampTZ to an IOracleTimestampTZ in the specified
         * time zone. The time zone string has to contain either a time zone offset
         * of the form '(+|-)HH:MM' or a time zone region name.
         *
         * The function returns an error if the date lies in a DST transition period
         * in the specified time zone and if the Oracle Database parameter
         * ERROR_ON_OVERLAP_TIME is true for the current session.
         *
         * @param timezone The time zone string.
         */
        atTimeZone(timezone: string): IOracleTimestampTZ;
        /**
         * Compares two datetime values.
         * Returns -1 if date1 < date2, 0 if they are equal, and 1 if date1 > date2.
         *
         * @param other - second timestamp to be compared
         * @returns the result of the comparison as a number between -1 and +1.
         */
        static compare(date1: IOracleTimestampTZ, date2: IOracleTimestampTZ): number;
        /**
         * Gets the year component in the Gregorian calendar.
         *
         * @returns year component as number
         */
        getYear(): number;
        /**
         * Gets the month component in the Gregorian calendar.
         *
         * @returns month component as number
         */
        getMonth(): number;
        /**
         * Gets the day component in the Gregorian calendar.
         *
         * @returns day component as number
         */
        getDay(): number;
        /**
         * Gets the hour component.
         *
         * @returns hour component as number
         */
        getHour(): number;
        /**
         * Gets the minute component.
         *
         * @returns minute component as number
         */
        getMinute(): number;
        /**
         * Gets the second component.
         *
         * @returns second component as number
         */
        getSecond(): number;
        /**
         * Gets the fractional second component.
         *
         * @returns fractional second component as number
         */
        getFractionalSecond(): number;
        /**
         * Gets the time zone of an IOracleTimestampTZ.
         *
         * @returns the time zone name as string
         */
        getTimeZone(): string;
        /**
         * Adds an interval to the timestamp to obtain a new timestamp
         * @param interval - the interval used to obtain the new timestamp
         * @returns resulting timestamp
         */
        addInterval(interval: IOracleIntervalDayToSecond | IOracleIntervalYearToMonth): IOracleTimestampTZ;
        /**
         * Subtracts an interval from the timestamp to obtain a new timestamp
         * @param interval - the interval used to obtain the new timestamp
         * @returns resulting timestamp
         */
        subtractInterval(interval: IOracleIntervalDayToSecond | IOracleIntervalYearToMonth): IOracleTimestampTZ;
        /**
         * Subtracts another timestamp from the timestamp to obtain a year-to-month interval
         * @param other - the other timestamp used as subtrahend
         * @returns year-to-month interval defined by the two timestamps
         */
        subtractIntoYearToMonth(other: IOracleTimestampTZ): IOracleIntervalYearToMonth;
        /**
         * Subtracts another timestamp from the timestamp to obtain a day-to-second
         * interval.
         *
         * @param other - the other timestamp used as subtrahend
         * @returns year-to-month interval defined by the two timestamps
         */
        subtractIntoDayToSecond(other: IOracleTimestampTZ): IOracleIntervalDayToSecond;
        /**
         * Converts the given datetime to a string in a given format. An optional
         * datetime format model and an optional NLS parameter string can be
         * provided. If no format model and/or no NLS parameter string is provided,
         * the respective default values for the session are used.
         *
         * If an NLS parameter string is specified, it has the effect of temporarily
         * altering the session's NLS settings for the duration of the call to this
         * method. The NLS parameter string may set the NLS_DATE_LANGUAGE
         * parameter.
         *
         * If a datetime format model is specified, it overrides the datetime format
         * determined by NLS settings.
         *
         * @param format datetime format model
         * @param nlsParam optional NLS parameter string
         * @returns a string of the timestamp
         */
        toString(format?: string, nlsParam?: string): string;
    }

    /**
     * JavaScript API for Oracle type TIMESTAMP.
     */
    class IOracleTimestamp {
        /**
         * Parse a string into an IOracleTimestamp. An optional datetime format model
         * and an optional NLS parameter string can be provided. If no format model
         * is specified, the string must be in the default format for the Oracle
         * TIMESTAMP data type, which is determined by the NLS_TIMESTAMP_FORMAT
         * parameter.
         *
         * If an NLS parameter string is specified, it has the effect of temporarily
         * altering the session's NLS settings for the duration of the call to this
         * method. The NLS parameter string may set the NLS_DATE_LANGUAGE
         * parameter.
         *
         * If a datetime format model is specified, it overrides the datetime format
         * determined by NLS settings (i.e. the setting of the NLS_TIMESTAMP FORMAT
         * parameter).
         *
         * @param date date represented as a string
         * @param format optional datetime format model
         * @param nlsParam optional NLS parameter string. Must have the same format
         * as the NLS argument to the TO_TIMESTAMP SQL function.
         * @returns an IOracleTimestamp object
         */
        static fromString(date: string, format?: string, nlsParam?: string): IOracleTimestamp;
        /**
         * Converts to an IOracleTimestampTZ using the session time zone.
         */
        atSessionTimeZone(): IOracleTimestampTZ;
        /**
         * Converts to an IOracleTimestampTZ in the specified time zone. The time zone
         * string has to contain either a time zone offset of the form '(+|-)HH:MM'
         * or a time zone region name.
         *
         * @param timezone The time zone string.
         */
        atTimeZone(timezone: string): IOracleTimestampTZ;
        /**
         * Compares two IOracleTimestamp values.
         * Returns -1 if date1 < date2, 0 if they are equal, and 1 if date1 > date2.
         *
         * @param other - second timestamp to be compared
         * @returns the result of the comparison as a number between -1 and +1.
         */
        static compare(date1: IOracleTimestamp, date2: IOracleTimestamp): number;
        /**
         * Gets the year component in the Gregorian calendar.
         *
         * @returns year component as number
         */
        getYear(): number;
        /**
         * Gets the month component in the Gregorian calendar.
         *
         * @returns month component as number
         */
        getMonth(): number;
        /**
         * Gets the day component in the Gregorian calendar.
         *
         * @returns day component as number
         */
        getDay(): number;
        /**
         * Gets the hour component.
         *
         * @returns hour component as number
         */
        getHour(): number;
        /**
         * Gets the minute component.
         *
         * @returns minute component as number
         */
        getMinute(): number;
        /**
         * Gets the second component, including the fractional part.
         *
         * @returns second component as number
         */
        getSecond(): number;
        /**
         * Adds an interval to the timestamp to obtain a new timestamp
         * @param interval - the interval used to obtain the new timestamp
         * @returns resulting timestamp
         */
        addInterval(interval: IOracleIntervalDayToSecond | IOracleIntervalYearToMonth): IOracleTimestamp;
        /**
         * Subtracts an interval from the timestamp to obtain a new timestamp
         * @param interval - the interval used to obtain the new timestamp
         * @returns resulting timestamp
         */
        subtractInterval(interval: IOracleIntervalDayToSecond | IOracleIntervalYearToMonth): IOracleTimestamp;
        /**
         * Subtracts another timestamp from the timestamp to obtain a year-to-month interval
         * @param other - the other timestamp used as subtrahend
         * @returns year-to-month interval defined by the two timestamps
         */
        subtractIntoYearToMonth(other: IOracleTimestamp): IOracleIntervalYearToMonth;
        /**
         * Subtracts another timestamp from the timestamp to obtain a day-to-second
         * interval.
         *
         * @param other - the other timestamp used as subtrahend
         * @returns year-to-month interval defined by the two timestamps
         */
        subtractIntoDayToSecond(other: IOracleTimestamp): IOracleIntervalDayToSecond;
        /**
         * Converts the given datetime to a string in a certain format. An optional
         * datetime format model and an optional NLS parameter string can be
         * provided. If no format model and/or no NLS parameter string is provided,
         * the respective default values for the session are used.
         *
         * If an NLS parameter string is specified, it has the effect of temporarily
         * altering the session's NLS settings for the duration of the call to this
         * method. The NLS parameter string may set the NLS_DATE_LANGUAGE
         * parameter.
         *
         * If a datetime format model is specified, it overrides the datetime format
         * determined by NLS settings.
         *
         * @param format datetime format model
         * @param nlsParam optional NLS parameter string
         * @returns a string of the timestamp
         */
        toString(format?: string, nlsParam?: string): string;
    }

    /**
     * JavaScript API for Oracle type DATE.
     */
    class IOracleDate {
        /**
         * Construct a new IOracleDate object from date and time components
         * (Gregorian calendar).
         *
         * @param year year component (-4712 <= y <= 9999)
         * @param month month component (1 <= m <= 12)
         * @param day day component (1 <= d <= 31)
         * @param hour hour component (0 <= h <= 23)
         * @param minute minute component (0 <= m <= 59)
         * @param second second component (0 <= s <= 59)
         */
        constructor(year: number, month: number, day: number, hour: number, minute: number, second: number);
        /**
         * Construct a new IOracleDate object from date components (Gregorian
         * calendar).
         *
         * @param year year component (-4712 <= y <= 9999)
         * @param month month component (1 <= m <= 12)
         * @param day day component (1 <= d <= 31)
         */
        constructor(year: number, month: number, day: number);
        /**
         * Parse a date string into an IOracleDate. An optional datetime format
         * model and an optional NLS parameter string can be provided. If no format
         * model and/or no NLS parameter string is provided, the respective default
         * values for the session are used.
         *
         * If an NLS parameter string is specified, it has the effect of temporarily
         * altering the session's NLS settings for the duration of the call to this
         * method. The NLS parameter string may only set the NLS_DATE_LANGUAGE
         * parameter.
         *
         * If a datetime format model is specified, it overrides the date format
         * determined by NLS settings.
         *
         * @param date date represented as a string
         * @param fmt optional datetime format model
         * @param nlsParam optional NLS parameter string. Must have the same format
         * as the NLS argument to the TO_DATE SQL function.
         * @returns the new date as IOracleDate object
         */
        static fromString(date: string, fmt?: string, nlsParam?: string): IOracleDate;
        /**
         * Gets the current system date and time as an IOracleDate.
         * @returns the system date and time as IOracleDate
         */
        static sysDate(): IOracleDate;
        /**
         * Converts an IOracleDate to a string and returns it. An optional datetime
         * format model and an optional NLS parameter string can be provided. If no
         * format model and/or no NLS parameter string is provided, the respective
         * default values for the session are used.
         *
         * If an NLS parameter string is specified, it has the effect of temporarily
         * altering the session's NLS settings for the duration of the call to this
         * method. The NLS parameter string may only set the NLS_DATE_LANGUAGE
         * parameter.
         *
         * If a datetime format model is specified, it overrides the date format
         * determined by NLS settings.
         *
         * @param fmt optional datetime format model
         * @param nlsParam optional NLS parameter string. Must have the same format
         * as the NLS argument to the TO_DATE SQL function.
         * @returns the date as string
         */
        toString(fmt?: string, nlsParam?: string): string;
        /**
         * Construct a new IOracleDate object by adding number of months to this
         * date. The result of this function is sensitive to the setting for the
         * NLS_CALENDAR parameter in the current session.
         *
         * @param numberOfMonths number of months to add
         * @returns the new date as IOracleDate object
         */
        addMonths(numberOfMonths: number): IOracleDate;
        /**
         * Construct a new IOracleDate object by adding number of days to this date.
         * The result of this function is sensitive to the setting for the
         * NLS_CALENDAR parameter in the current session.
         *
         * @param numberOfDays - number of days to add
         * @returns the new date as IOracleDate object
         */
        addDays(numberOfDays: number): IOracleDate;
        /**
         * Compares two dates.
         * Returns -1 if d1 < d2, 0 if they are equal, and 1 if d1 > d2.
         *
         * @param d1 - first date value
         * @param d2 - second date value
         * @returns the result of the comparison as a number between -1 and +1.
         */
        static compare(d1: IOracleDate, d2: IOracleDate): number;
        /**
         * Gets the number of days between two dates. The result of this function
         * is sensitive to the setting for the NLS_CALENDAR parameter in the
         * current session.
         *
         * @param d1 - first date value
         * @param d2 - date value to compare with
         * @returns number of days between d1 and d2
         */
        static daysBetween(d1: IOracleDate, d2: IOracleDate): number;
        /**
         * Gets the date of the last day of the month specified by this date. The
         * result of this function is sensitive to the setting for the NLS_CALENDAR
         * parameter of the current session.
         *
         * @returns a new date set set to the last day of the month
         */
        lastDayOfMonth(): IOracleDate;
        /**
         * Gets the date of the first weekday named by dayOfTheWeek that is later
         * than this date. The result of this method is sensitive to the
         * NLS_DATE_LANGUAGE parameter of the current session.
         *
         * @returns a new date set to the first weekday name by dayOfTheWeek that
         * is later than this date.
         */
        nextDay(dayOfTheWeek: string): IOracleDate;
        /**
         * Gets the year component according to the Gregorian calendar.
         *
         * @returns year component (-4712 <= y <= 9999)
         */
        getYear(): number;
        /**
         * Gets the month component according to the Gregorian calendar.
         * @returns month component (1 <= m <= 12)
         */
        getMonth(): number;
        /**
         * Gets the day component according to the Gregorian calendar.
         * @returns day component (1 <= d <= 31)
         */
        getDay(): number;
        /**
         * Gets the hour component.
         * @returns our component (0 <= h <= 23)
         */
        getHour(): number;
        /**
         * Gets the minute component.
         * @returns minute component (0 <= m <= 59)
         */
        getMinute(): number;
        /**
         * Gets the second component.
         * @returns second component (0 <= s <= 59)
         */
        getSecond(): number;
        /**
         * Checks if this has a valid date.
         * @returns true iff the date is valid
         */
        isValid(): boolean;
    }

    /**
     * JsonId class is used to represent "_id" field in soda document
     *
     * @since Oracle 23.5
     */
    class JsonId extends Uint8Array {
        toJSON(): string;
    }
}

declare module "mle-js-plsqltypes" {
    const OracleNumberOperators: typeof __mle_js_plsqltypes.OracleNumberOperators;
    type OracleNumberOperators = typeof __mle_js_plsqltypes.OracleNumberOperators;

    /**
     * JavaScript API for Oracle type TIMESTAMP.
     */
    const OracleTimestamp: IOracleTimestamp;

    /**
     * JavaScript API for Oracle type TIMESTAMP WITH TIMEZONE.
     */
    const OracleTimestampTZ: IOracleTimestampTZ;

    /**
     * JavaScript API for Oracle type INTERVAL DAY TO SECOND.
     */
    const OracleIntervalDayToSecond: IOracleIntervalDayToSecond;

    /**
     * JavaScript API for Oracle type INTERVAL YEAR TO MONTH.
     */
    const OracleIntervalYearToMonth: IOracleIntervalYearToMonth;

    /**
     * JavaScript API for Oracle type CLOB.
     */
    const OracleClob: IOracleClob;

    /**
     * JavaScript API for Oracle type DATE.
     */
    const OracleDate: IOracleDate;
    const OracleNumber: __mle_js_plsqltypes.OracleNumber;
    type OracleNumber = __mle_js_plsqltypes.OracleNumber;
    const IOracleIntervalDayToSecond: __mle_js_plsqltypes.IOracleIntervalDayToSecond;
    type IOracleIntervalDayToSecond = __mle_js_plsqltypes.IOracleIntervalDayToSecond;
    const IOracleIntervalYearToMonth: __mle_js_plsqltypes.IOracleIntervalYearToMonth;
    type IOracleIntervalYearToMonth = __mle_js_plsqltypes.IOracleIntervalYearToMonth;
    const CompareOptionalArguments: __mle_js_plsqltypes.CompareOptionalArguments;
    type CompareOptionalArguments = __mle_js_plsqltypes.CompareOptionalArguments;
    const OracleBlob: __mle_js_plsqltypes.OracleBlob;
    type OracleBlob = __mle_js_plsqltypes.OracleBlob;
    const IOracleClob: __mle_js_plsqltypes.IOracleClob;
    type IOracleClob = __mle_js_plsqltypes.IOracleClob;
    const IOracleTimestampTZ: __mle_js_plsqltypes.IOracleTimestampTZ;
    type IOracleTimestampTZ = __mle_js_plsqltypes.IOracleTimestampTZ;
    const IOracleTimestamp: __mle_js_plsqltypes.IOracleTimestamp;
    type IOracleTimestamp = __mle_js_plsqltypes.IOracleTimestamp;
    const IOracleDate: __mle_js_plsqltypes.IOracleDate;
    type IOracleDate = __mle_js_plsqltypes.IOracleDate;
    const JsonId: __mle_js_plsqltypes.JsonId;
    type JsonId = __mle_js_plsqltypes.JsonId;
}

/**
 * CAUTION: This namespace is used for TYPE DECLARATIONS ONLY and does not have
 * an equivalent in the actual implementation in MLE. Please either use the
 * corresponding module or global symbols instead.
 */
declare namespace __mle_js_oracledb {
    /**
     * SODA API for MLE. This is compatible with node-oracledb 5.0.0.
     */
    /**
     * SodaDatabase.createCollection() options. The metadata must conform to the
     * JSON object layout specified in the Oracle Database
     * "SODA Collection Metadata Components (Reference)" documentation.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadbcreatecollectionoptions
     * @see https://docs.oracle.com/en/database/oracle/simple-oracle-document-access/adsdi/soda-collection-metadata-components-reference.html
     */
    interface CreateCollectionOptions {
        metaData?: Record<string, any>;
        mode?: number;
    }

    /**
     * SodaDatabase.createDocument() options.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadbcreatedocumentoptions
     */
    interface CreateDocumentOptions {
        key?: string;
        mediaType?: string;
    }

    /**
     * SodaDatabase.getCollectionNames() options.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadbgetcollectionnamesoptions
     */
    interface GetCollectionNameOptions {
        limit?: number;
        startsWith?: string;
    }

    /**
     * SodaCollection.dropIndex() options.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacolldropindexoptions
     */
    interface DropIndexOptions {
        force?: boolean;
    }

    /**
     * SodaCollection.drop() return value.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacolldropcallback
     */
    interface DropResult {
        dropped: boolean;
    }

    /**
     * SodaCollection.dropIndex() result.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacolldropindexcb
     */
    interface DropIndexResult {
        dropped: boolean;
    }

    /**
     * SodaOperation.count() result.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclasscount
     */
    interface CountResult {
        count: number;
    }

    /**
     * SodaOperation.remove() result.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclassremove
     */
    interface RemoveResult {
        count: number;
    }

    /**
     * SodaOperation.replace() result.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclassreplaceone
     */
    interface ReplaceResult {
        replaced: boolean;
    }

    /**
     * SODA database access class. SodaDatabase is the top level object for
     * SODA operations. A 'SODA database' is an abstraction, allowing access to SODA
     * collections in that 'SODA database', which then allow access to documents in
     * those collections.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadatabaseclass
     */
    abstract class ISodaDatabase {
        /**
         * Creates a SODA collection of the given name.
         * If a collection with the same name already exists,
         * then that existing collection is opened without error.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadbcreatecollection
         * @param collectionName name of the collection to be created.
         * @param options the options that specify the collection, see
         *        CreateCollectionOptions.
         * @return a new SodaCollection object.
         */
        abstract createCollection(collectionName: string, options?: CreateCollectionOptions): ISodaCollection;
        /**
         * Constructs a proto SodaDocument object usable for SODA insert and replace
         * methods. SodaDocument attributes like createdOn will not be defined, and
         * neither will attributes valid in options but not specified. The document
         * will not be stored in the database until an insert or replace method is
         * called.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadbcreatedocument
         * @param content the document content.
         * @param options the options that specify the document, see
         *                CreateDocumentOptions.
         * @return a new SodaDocument object.
         */
        abstract createDocument(
            content: string | Uint8Array | Record<string, any>,
            options?: CreateDocumentOptions,
        ): ISodaDocument;
        /**
         * Gets an array of collection names in alphabetical order.
         * Returns names that start with the given string, and all subsequent names,
         * in alphabetic order.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadbgetcollectionnames
         * @param options see GetCollectionNameOptions.
         * @return an array of matching collection names.
         */
        abstract getCollectionNames(options?: GetCollectionNameOptions): Array<string>;
        /**
         * Opens an existing SodaCollection of the given name.
         * The collection can then be used to access documents.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadbopencollection
         * @param collectionName the name of the collection to open.
         * @return a new SodaCollection object if the collection exists.
         *         If the requested collection does not exist undefined will be
         *         returned.
         */
        abstract openCollection(collectionName: string): ISodaCollection;
    }

    /**
     * SODA collection class. A SODA collection is a set of SodaDocuments.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacollectionclass
     */
    abstract class ISodaCollection {
        /**
         * Name of the collection.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacollectionproperties
         */
        abstract get name(): string;
        /**
         * Metadata for the collection. The metadata will conform to the JSON object
         * layout specified in the Oracle Database
         * "SODA Collection Metadata Components (Reference)" documentation.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacollectionproperties
         * @see https://docs.oracle.com/en/database/oracle/simple-oracle-document-access/adsdi/soda-collection-metadata-components-reference.html
         */
        abstract get metaData(): Record<string, any>;
        /**
         * Creates an index on a SODA collection to improve the performance of SODA
         * query-by-examples (QBE) or to enable text searches. Different index types
         * can be created as long as the indexSpec parameter conforms to the
         * JSON object layout specified in the Oracle Database "SODA Index
         * Specifications (Reference)" documentation.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacollcreateindex
         * @see https://docs.oracle.com/en/database/oracle/simple-oracle-document-access/adsdi/soda-index-specifications-reference.html
         * @param indexSpec index specification,
         *        see "SODA Index Specifications (Reference)"
         * @throws an exception if the index creation fails.
         */
        abstract createIndex(indexSpec: Record<string, any>): void;
        /**
         * Drops the current collection.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacolldrop
         * @return a DropResult containing a dropped value of true if the drop
         * operation succeeded or false if the collection does not exist.
         * @throws an exception if the collection drop fails.
         */
        abstract drop(): DropResult;
        /**
         * Drops the specified index.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacolldropindex
         * @param indexName the name of the index to drop
         * @param options an optional force flag may be specified
         * @return a DropIndexResult containing a dropped value of true if the
         * drop index operation succeeded or false if the index doesn't exist.
         * @throws an exception if the index drop fails.
         */
        abstract dropIndex(indexName: string, options?: DropIndexOptions): DropIndexResult;
        /**
         * Locates and orders a set of SODA documents for retrieval, replacement, or
         * removal with non-terminal and terminal methods, see SodaOperation for
         * details.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacollfind
         * @return a SodaOperation object which is used via method chaining
         */
        abstract find(): ISodaOperation;
        /**
         * Infers the schema of a collection of JSON documents.
         * The data guide is represented as JSON content in a SodaDocument.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacollgetdataguide
         * @return a new SodaDocument containing the inferred schema.
         * @throws an exception if the schema inference fails.
         */
        abstract getDataGuide(): ISodaDocument;
        /**
         * Inserts an array of Objects or SodaDocuments into the collection.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacollinsertmany
         * @param docs an array of Objects or SodaDocuments to be inserted into the
         *             collection.
         * @throws an exception if a document insertion fails. The offset attribute on
         * the Error object will contain the number of documents that were
         * successfully inserted. Subsequent documents in the input array will not be
         * inserted.
         */
        abstract insertMany(docs: Array<Record<string, any> | ISodaDocument>): void;
        /**
         * Inserts an array of Objects or SodaDocuuments into the collection and
         * returns the documents which contain all SodaDocument components except for
         * content, for performance reasons.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacollinsertmanyandget
         * @param docs an array of Objects or SodaDocuments to be inserted into the
         *             collection.
         * @return an array of inserted SodaDocuments.
         * @throws an exception if a document insertion fails. The offset attribute on
         * the Error object will contain the number of documents that were
         * successfully inserted. Subsequent documents in the input array will not be
         * inserted.
         */
        abstract insertManyAndGet(docs: Array<Record<string, any> | ISodaDocument>): Array<ISodaDocument>;
        /**
         * Inserts a given document to the collection. The input document can be
         * either a JavaScript object representing the data content, or it can be an
         * existing SodaDocument.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacollinsertone
         * @param doc an Object or SodaDocument to insert into the collection.
         * @throws an exception if insertion fails.
         */
        abstract insertOne(doc: Record<string, any> | ISodaDocument): void;
        /**
         * Inserts a document in a collection and returns the result document that
         * contains all SodaDocument components except for content, for performance
         * reasons.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodacollinsertoneandget
         * @param doc the Object or SodaDoc to insert into the collection.
         * @return the inserted SodaDocument.
         * @throws an exception if insertion fails.
         */
        abstract insertOneAndGet(doc: Record<string, any> | ISodaDocument): ISodaDocument;
        /**
         * This method behaves like sodaCollection.insertOne() with the exception that
         * if a document with the same key already exists, then it is updated instead.
         * The collection must use client-assigned keys, which is why save()
         * accepts only a SodaDocument, unlike insertOne(). If the collection is not
         * configured with client-assigned keys, then the behavior is exactly the
         * same as sodaCollection.insertOne().
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#user-content-sodacollsave
         * @param doc the document to save.
         */
        abstract save(doc: ISodaDocument): void;
        /**
         * This method behaves like sodaCollection.insertOneAndGet() with the
         * exception that if a document with the same key already exists, then it is
         * updated instead. The collection must use client-assigned keys, which
         * is why saveAndGet() accepts only a SodaDocument, unlike insertOneAndGet().
         * If the collection is not configured with client-assigned keys, then the
         * behavior is exactly the same as sodaCollection.insertOneAndGet().
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#user-content-sodacollsaveandget
         * @param doc the document to save.
         * @return the saved document.
         */
        abstract saveAndGet(doc: ISodaDocument): ISodaDocument;
        /**
         * This method truncates a collection, removing all documents. The collection
         * will not be deleted.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#user-content-sodacolltruncate
         * @throws an exception if truncation fails.
         */
        abstract truncate(): any;
    }

    /**
     * SODA find operation class. This class is used to search and retrieve SODA
     * documents from a SodaCollection. It provides non-terminal search condition
     * operations and terminal SodaDocument retrieval operations.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclass
     */
    abstract class ISodaOperation {
        /**
         * Non-terminals.
         */
        /**
         * Sets the size of an internal buffer used for fetching documents from a
         * collection with the terminal SodaOperation methods getCursor() and
         * getDocuments().
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclassfetcharraysize
         * @param size the buffer size to use.
         * @return the SodaOperation object.
         */
        abstract fetchArraySize(size: number): ISodaOperation;
        /**
         * Sets a filter specification for the operation, allowing for complex
         * document queries and ordering of JSON documents.
         * @see https://docs.oracle.com/en/database/oracle/simple-oracle-document-access/adsdi/overview-soda-filter-specifications-qbes.html
         * @see https://docs.oracle.com/en/database/oracle/simple-oracle-document-access/adsdi/soda-filter-specifications-reference.html
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclassfilter
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaqbesearches
         * @param filter the filter specification to use.
         * @return the SodaOperation object.
         */
        abstract filter(filter: Record<string, any>): ISodaOperation;
        /**
         * Sets the key value to be used to match a document for the operation.
         * Any previous calls made to this method or keys() will be ignored.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclasskey
         * @param key the search key to use.
         * @return the SodaOperation object.
         */
        abstract key(key: string): ISodaOperation;
        /**
         * Sets the keys to be used to match multiple documents for the operation.
         * Any previous calls made to this method or key() will be ignored.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclasskeys
         * @param keys the search keys to use.
         * @return the SodaOperation object.
         */
        abstract keys(keys: Array<string>): ISodaOperation;
        /**
         * Sets the maximum number of documents that a terminal method will apply to.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclasslimit
         * @param n the maximum number of documents to return. Must be greater than 0.
         * @return the SodaOperation object.
         */
        abstract limit(n: number): ISodaOperation;
        /**
         * Sets the number of documents that will be skipped before the terminal
         * method is applied. n must be greater than or equal to 0.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationskip
         * @param n the number of documents to skip.
         * @return the SodaOperation object.
         */
        abstract skip(n: number): ISodaOperation;
        /**
         * Sets the document version that retrieved documents must have.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclassversion
         * @param value the version of retrieved documents.
         * @return the SodaOperation object.
         */
        abstract version(value: string): ISodaOperation;
        /**
         * Terminals.
         */
        /**
         * Returns the number of documents matching the given SodaOperation query
         * criteria. If skip() or limit() are set, then an exception will be thrown.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclasscount
         * @return a result object with a count field containing the number of
         * matching documents.
         * @throws an exception if skip() or limit() are set.
         */
        abstract count(): CountResult;
        /**
         * Returns a SodaDocumentCursor for documents that match the SodaOperation
         * query criteria.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclassgetcursor
         * @return a cursor that can be used to iterate over the matched documents.
         */
        abstract getCursor(): ISodaDocumentCursor;
        /**
         * Gets an array of SodaDocuments matching the SodaOperation query criteria.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#-824123-sodaoperationgetdocuments
         * @return an array of documents, empty if none match.
         */
        abstract getDocuments(): Array<ISodaDocument>;
        /**
         * Obtains one document matching the SodaOperation query criteria.
         * If more than one document is matched, then only the first is returned.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclassgetone
         * @return the first matching document, or undefined if none match.
         */
        abstract getOne(): ISodaDocument;
        /**
         * Removes a set of documents matching the SodaOperation query criteria.
         * If skip() or limit() are set they are ignored.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclassremove
         * @return a result object with a count field containing the number of
         * removed documents.
         */
        abstract remove(): RemoveResult;
        /**
         * Replaces a document in a collection. The input document can be either a
         * JavaScript object representing the data content, or it can be an existing
         * SodaDocument. The key() non-terminal must be used when using replaceOne().
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclassreplaceone
         * @param newDoc the new content or SodaDocument.
         * @return a result object with a boolean replaced field which will be
         * true if the document was replaced successfully and false otherwise.
         */
        abstract replaceOne(newDoc: Record<string, any> | ISodaDocument): ReplaceResult;
        /**
         * Replaces a document in a collection and return the result document which
         * contains all SodaDocument components except for the content.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodaoperationclassreplaceoneandget
         * @param newDoc the new content or SodaDocument.
         * @return The updated SodaDocument if replacement was successful, otherwise
         *         undefined.
         */
        abstract replaceOneAndGet(newDoc: Record<string, any> | ISodaDocument): ISodaDocument;
    }

    /**
     * SODA document cursor class.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadocumentcursorclass
     * A SodaDocumentCursor is used to walk through a set of SODA documents returned
     * from a find() or getCursor() method.
     */
    abstract class ISodaDocumentCursor {
        /**
         * Close the cursor.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadoccursorclose
         */
        abstract close(): void;
        /**
         * Returns the next SodaDocument in the cursor returned by a find().
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadoccursorgetnext
         * @return the next document, or undefined when there are no further
         * documents.
         */
        abstract getNext(): ISodaDocument;
    }

    /**
     * SODA document class. SodaDocuments represents the document for SODA read and
     * write operations.
     * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadocumentclass
     */
    abstract class ISodaDocument {
        /**
         * SODA document properties.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadocumentproperties
         */
        /**
         * The creation time of the document as a string in the UTC time zone using an
         * ISO8601 format. By default, SODA sets this automatically.
         */
        readonly createdOn: string;
        /**
         * A unique key value for this document. By default, SODA automatically
         * generates the key.
         */
        readonly key: string;
        /**
         * Last modified time of the document as a string in the UTC time zone using
         * an ISO8601 format. By default, SODA sets this automatically.
         */
        readonly lastModified: string;
        /**
         * An arbitrary string value designating the content media type. The
         * recommendation when creating documents is to use a MIME type for the media
         * type. By default this property will be 'application/json'.
         */
        readonly mediaType: string;
        /**
         * Version of the document. By default, SODA automatically updates the version
         * each time the document is changed.
         */
        readonly version: string;
        /**
         * Return the document content as an object.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadocgetcontent
         * @return the document content as an object.
         * @throws an exception if the document content is not JSON and cannot be
         * converted to an object.
         */
        abstract getContent(): Record<string, any>;
        /**
         * Return JSON document content as a string. If the document encoding is
         * unknown, UTF-8 will be used.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#sodadocgetcontentasstring
         * @return the document content as a string.
         */
        abstract getContentAsString(): string;
    }

    /**
     * Interface for representing entries in {@link FetchInfo}.  See
     * https://github.com/oracle/node-oracledb/blob/v3.1.0/doc/api.md#propexecfetchinfo
     * for further information.
     */
    interface FetchInfoColumnSpec {
        /**
         * The JavaScript data type to be fetched. One of the mle-js-oracledb JS
         * Type Constants.
         */
        type: JsType;
    }

    /**
     * Interface for representing {@link fetchInfo} in {@link execute}().
     */
    interface FetchInfo {
        [columnName: string]: FetchInfoColumnSpec;
    }

    /**
     * Interface for options used in {@link execute}().
     */
    interface ExecuteOptions {
        /**
         * Overrides parameters.{@link extendedMetaData}.
         */
        extendedMetaData?: boolean;
        /**
         * Overrides parameters.{@link fetchArraySize}.
         */
        fetchArraySize?: number;
        /**
         * Object defining how query column data should be represented in
         * JavaScript. It can be used in conjunction with, or instead of, the global
         * settings parameters.{@link fetchAsString}, parameters.{@link
         * fetchAsPlsqlWrapper}, and parameters.{@link fetchAsUint8Array}.  See
         * https://github.com/oracle/node-oracledb/blob/v3.1.0/doc/api.md#--42634-fetchinfo
         * for further information.
         */
        fetchInfo?: FetchInfo;
        /**
         * Overrides parameters.{@link maxRows}.
         */
        maxRows?: number;
        /**
         * Overrides parameters.{@link outFormat}.
         */
        outFormat?: OutFormatType;
        /**
         * Determines whether query results should be returned as a {@link
         * IResultSet} object or directly. The default is false.
         */
        resultSet?: boolean;
        /**
         * When keepInStmtCache is true, and statement caching is enabled,
         * then the statement will be added to the cache if it is not already present.
         * This helps the performance of re-executed statements.
         *
         * The default value is true.
         *
         * @since Oracle 23.4
         */
        keepInStmtCache?: boolean;
        /**
         * Overrides parameters.{@link fetchTypeHandler}.
         *
         * @since Oracle 23.7
         */
        fetchTypeHandler?: FetchTypeHandler;
    }

    /**
     * Interface for representing an entry in {@link ObjectBindDefs} or {@link ArrayBindDefs}.
     */
    interface BindDef {
        /**
         * The direction of the bind. One of the Execute Bind Direction Constants
         * {@link BIND_IN}, {@link BIND_INOUT}, or {@link BIND_OUT}. The default is
         * {@link BIND_IN}.
         */
        dir: number;
        /**
         * The maximum number of bytes that an OUT or INOUT bind variable of type
         * {@link STRING} or {@link UINT8ARRAY} can use to get data. The default
         * value is 200. The maximum limit depends on the database type. When
         * binding INOUT, maxSize refers to the size of the returned value.
         * The input value can be smaller or bigger. For IN binds, maxSize is
         * ignored. When data is being returned from the database, maxSize must be
         * at least the size of the longest value. If maxSize is too small, an error
         * gets thrown.
         */
        maxSize?: number;
        /**
         * The JavaScript data type to be bound. One of the mle-js-oracledb JS
         * Constants; when binding ADTs, a type descriptor or the fully-qualified
         * name (FQN) of the type is also accepted.
         * With IN or INOUT binds the type can be explicitly set with
         * type or it will default to the type of the input data value. With OUT
         * binds, the type defaults to {@link STRING} whenever type is not
         * specified.
         */
        type: JsType | string | IDbObjectClass;
    }

    /**
     * Interface for Object BindDefs.
     */
    interface ObjectBindDefs {
        [bindName: string]: BindDef;
    }

    /**
     * Interface for Array BindDefs.
     */
    type ArrayBindDefs = BindDef[];

    /**
     * Interface for BindDefs which are either Array- or Object BindDefs.
     */
    type ExecuteManyBindDefs = ObjectBindDefs | ArrayBindDefs;

    /**
     * Interface for the options used in {@link executeMany}().
     */
    interface ExecuteManyOptions {
        /**
         * The bindDefs object defines the bind variable types, sizes and
         * directions.  This object is optional, but makes execution more efficient
         * if set explicitly.
         *
         * It must be an array (see {@link ArrayBindDefs}) or an object (see
         * {@link ObjectBindDefs}), depending on the structure of the binds
         * parameter.
         *
         * Each value in the bindDefs array or object must be an object containing
         * the keys dir, maxSize, and type for each bind variable, similar to how
         * {@link execute} bind parameters are defined (see {@link BindDef}).
         */
        bindDefs?: ExecuteManyBindDefs;
        dmlRowCounts?: boolean;
        /**
         * When keepInStmtCache is true, and statement caching is enabled,
         * then the statement will be added to the cache if it is not already present.
         * This helps the performance of re-executed statements.
         *
         * The default value is true.
         *
         * @since Oracle 23.4
         */
        keepInStmtCache?: boolean;
    }

    /**
     * Interface representing metadata as used in {@link IResultSet}s and statement info.
     */
    interface MetaData {
        /**
         * The column name follows Oracle’s standard name-casing rules. It will commonly be uppercase
         * since most applications create tables using unquoted, case-insensitive names.
         */
        name: string;
        /**
         * One of the mle-js-oracledb JS Type Constants.
         */
        fetchType?: JsType;
        /**
         * One of the mle-js-oracledb Database Type Constants, see {@link DbType}.
         */
        dbType?: number;
        /**
         * The class associated with the database type.
         * This is only set if the database type is an object type.
         *
         * @since Oracle 23.7
         */
        dbTypeClass?: IDbObjectClass;
        /**
         * Database byte size. This is only set for {@link DB_TYPE_VARCHAR}, {@link
         * DB_TYPE_CHAR} and {@link DB_TYPE_RAW} column types.
         */
        byteSize?: number;
        /**
         * Set only for {@link DB_TYPE_NUMBER}, {@link DB_TYPE_TIMESTAMP}, {@link
         * DB_TYPE_TIMESTAMP_TZ} and {@link DB_TYPE_TIMESTAMP_LTZ} columns.
         */
        precision?: number;
        /**
         * Set only for {@link DB_TYPE_NUMBER} columns.
         */
        scale?: number;
        /**
         * Indicates whether NULL values are permitted for this column.
         */
        nullable?: boolean;
        /**
         * Name of the database type, such as “NUMBER” or “VARCHAR2”.
         */
        dbTypeName?: string;
        /**
         * Number of Dimensions in vector.
         *
         * @since Oracle 23.4
         */
        vectorDimensions?: number;
        /**
         * Storage type of elements in vector.
         *
         * @since Oracle 23.4
         */
        vectorFormat?: number;
    }

    /**
     * Interface for representing result sets as returned by {@link execute}().
     */
    abstract class IResultSet {
        /**
         * Contains an array of objects with metadata about the query.
         *
         * Each column's name is always given. If {@link extendedMetaData} is true,
         * additional information is included.
         */
        readonly metaData: MetaData[];
        /**
         * Closes a result set.
         *
         * Applications must always call this at the end of fetch or when no more rows are needed.
         *
         * It must also be called if no rows will ever be fetched from the result set.
         */
        abstract close(): any;
        /**
         * This call fetches one row of the result set as an object or an array of
         * column values, depending on the value of outFormat.
         *
         * At the end of fetching, the result set must be freed by calling {@link close}().
         *
         * Performance of getRow() can be tuned by adjusting the value of
         * {@link fetchArraySize}.
         */
        abstract getRow(): any;
        /**
         * This call fetches numRows rows of the result set as an object or an array of
         * column values, depending on the value of outFormat.
         *
         * @param numRows specifies the number of rows to be returned.
         * the default value of numRows is 0 and it returns all rows.
         *
         * At the end of fetching, the result set must be freed by calling {@link close}().
         *
         * Performance of getRows() can be tuned by adjusting the value of
         * {@link fetchArraySize}.
         */
        abstract getRows(numRows: number): any[];
        /**
         * Convenience function for getting an iterator of this IResultSet.
         *
         * This is equivalent to calling rs[Symbol.iterator]().
         *
         * @returns an iterator over the rows of this IResultSet.
         *
         * @throws {@link IError} if the result set has already been closed
         * @throws {@link IError} if the result set is already being iterated over
         */
        abstract iterator(): IterableIterator<any>;
        /**
         * This function defines the default iterator for a result set that can be
         * used to iterate over its rows. Using the default iterator, a result set
         * can be iterated over using the for..of construct.
         *
         * @throws {@link IError} if the result set has already been closed
         * @throws {@link IError} if the result set is already being iterated over
         */
        abstract [Symbol.iterator](): IterableIterator<any>;
    }

    /**
     * Interface for the result of {@link execute}().
     */
    interface ExecuteReturn {
        /**
         * For SELECT statements, this contains an array of objects describing
         * details of columns for the select list. For non queries, this property is
         * undefined.
         */
        metaData?: MetaData[];
        /**
         * This contains the output values of OUT and IN OUT binds. If bindParams is
         * passed as an array, then outBinds is returned as an array. If bindParams
         * is passed as an object, then outBinds is returned as an object. If there
         * are no OUT or IN OUT binds, the value is undefined.
         */
        outBinds?: Record<string, any> | any[];
        /**
         * For SELECT statements when the {@link resultSet} option is true, use the
         * resultSet object to fetch rows. See {@link IResultSet}.
         *
         * When using this option, resultSet.{@link close}() must be called when the
         * result set is no longer needed. This is true whether or not rows have
         * been fetched.
         */
        resultSet?: IResultSet;
        /**
         * For SELECT statements using direct fetches, rows contains an array of
         * fetched rows. It will be NULL if there is an error or the SQL statement
         * was not a SELECT statement. By default, the rows are in an array of
         * objects, but this can be changed to arrays of column value arrays by
         * setting outFormat to oracledb.{@link OUT_FORMAT_ARRAY}. If a single row
         * is fetched, then rows is an array that contains one single object.
         *
         * The number of rows returned is limited by parameters.{@link maxRows} or
         * the {@link maxRows} option in an {@link execute}() call. If maxRows is 0,
         * then the number of rows is limited by memory constraints.
         */
        rows?: any[];
        /**
         * For DML statements (including SELECT FOR UPDATE) this contains the number
         * of rows affected, for example the number of rows inserted. For non-DML
         * statements such as queries and PL/SQL statements, rowsAffected is
         * undefined.
         */
        rowsAffected?: number;
    }

    /**
     * Interface for the result of {@link executeMany}().
     */
    interface ExecuteManyReturn {
        /**
         * This contains the value of any returned IN OUT or OUT binds. It is an
         * array of arrays, or an array of objects, depending on the {@link binds}
         * parameters structure. The length of the array will correspond to the
         * length of the array passed as the binds parameter. It will be present
         * only if there is at least one OUT bind variable identified.
         */
        outBinds?: (Record<string, any> | any[])[];
        /**
         * This is an integer identifying the total number of database rows affected
         * by the processing of all records of the binds parameter. It is only
         * present if a DML statement was executed.
         */
        rowsAffected?: number;
    }

    /**
     * Interface for object binds in {@link execute}().
     */
    interface BindObjectValue extends BindDef {
        /**
         * The number of array elements to be allocated for a PL/SQL Collection
         * INDEX BY associative array OUT or IN OUT array bind variable. For IN
         * binds, the value of maxArraySize is ignored.
         *
         * @since Oracle 23.4
         */
        maxArraySize?: number;
        /**
         * The input value or variable to be used for an IN or INOUT bind variable.
         */
        val: any;
    }

    /**
     * Interface for a single bind parameter as used in {@link execute}(). Can
     * either be a bind object or a scalar value.
     */
    type BindValue = BindObjectValue | object | number | string | boolean | null | undefined;

    /**
     * Interface for object binds (also called "named binds").
     */
    interface NamedBinds {
        [bindName: string]: BindValue;
    }

    /**
     * Interface for array binds.
     */
    type PosBinds = BindValue[];

    /**
     * Interface for the collection of bind parameters in {@link execute}(). Can
     * either be an object ({@link NamedBinds}) or an array ({@link PosBinds}) of
     * values.
     */
    type BindParameters = NamedBinds | PosBinds;

    /**
     * Interface for the result of {@link getStatementInfo}().
     */
    interface StatementInfo {
        /**
         * Array of strings corresponding to the unique names of the bind variables
         * used in the SQL statement.
         */
        bindNames: string[];
        /**
         * Array containing properties equivalent to those in {@link
         * extendedMetaData} on {@link execute}(). This property exists only for
         * queries.
         */
        metaData?: MetaData[];
        /**
         * Integer corresponding to one of the mle-js-oracledb SQL Statement Type
         * Constants, e.g.  {@link STMT_TYPE_SELECT}.
         */
        statementType: number;
    }

    /**
     * Interface for the connection object obtained by {@link defaultConnection}.
     */
    abstract class IConnection {
        /**
         * This read-only property gives a numeric representation of the Oracle
         * database version which is useful in comparisons. For version a.b.c.d.e,
         * this property gives the number:
         * (100000000 * a) + (1000000 * b) + (10000 * c) + (100 * d) + e
         */
        readonly oracleServerVersion: number;
        /**
         * This read-only property gives a string representation of the Oracle
         * database version which is useful for display.
         */
        readonly oracleServerVersionString: string;
        /**
         * This read-only property always returns 0 and exists for consistency with
         * node-oracledb.
         */
        readonly stmtCacheSize: number;
        /**
         * This call commits the current transaction in progress.
         */
        abstract commit(): void;
        /**
         * This call executes a single SQL or PL/SQL statement.
         *
         * The statement to be executed may contain IN binds, OUT or IN OUT bind
         * values or variables, which are bound using either an object or an array.
         *
         * The function returns a result object, containing any fetched rows, the
         * values of any OUT and IN OUT bind variables, and the number of rows
         * affected by the execution of DML statements, see {@link ExecuteReturn}.
         *
         * See
         * https://node-oracledb.readthedocs.io/en/v6.4.0/api_manual/connection.html#connection.execute
         * for more details.
         *
         * @param sql This parameter can either be a string or an object.
         * If the parameter is a string, then it is the SQL statement to be executed.
         * The statement may contain bind parameters.
         *
         * If the parameter is an object (possible since Oracle 23.5),
         * it conforms to the {@link ExecuteArgs} interface
         * and contains the SQL statement to be executed and the bind values.
         *
         * @param bindParams needed if there are bind parameters in the SQL
         * statement, see {@link BindParameters}.
         * @param options an optional parameter to execute() that may be used to
         * control statement execution.
         */
        abstract execute(sql: string): ExecuteReturn;
        /**
         * @since Oracle 23.5
         */
        abstract execute(sql: ExecuteArgs, options?: ExecuteOptions): ExecuteReturn;
        abstract execute(sql: string, bindParams: BindParameters, options?: ExecuteOptions): ExecuteReturn;
        /**
         * This method allows sets of data values to be bound to one DML or PL/SQL
         * statement for execution. It is like calling {@link execute}() multiple
         * times but requires fewer context switches. This is an efficient way to
         * handle batch changes, for example when inserting or updating multiple
         * rows. The method cannot be used for queries.
         *
         * The executeMany() method supports IN, IN OUT and OUT binds for most data
         * types.
         *
         * The version of this function that accepts a number of iterations must
         * be used when no bind parameters are required or when all bind parameters
         * are OUT binds.
         *
         * See
         * https://github.com/oracle/node-oracledb/blob/v3.1.0/doc/api.md#-427-connectionexecutemany
         * for more details.
         *
         * @param sql SQL or PL/SQL statement that executeMany() executes.
         * @param binds contains the values or variables to be bound to the executed
         * statement. It must be an array of arrays ({@link ArrayBindDefs}) or an
         * array of objects whose keys match the bind variable names in the SQL
         * statement ({@link ObjectBindDefs}). Each sub-array or sub-object must
         * contain values for the bind variables used in the SQL statement. At least
         * one such record must be specified.
         *
         * If a record contains fewer values than expected, NULL values will be
         * used. For bind by position, empty values can be specified using syntax
         * like [a,,c,d].
         *
         * By default, the direction of binds is {@link BIND_IN}. The first data
         * record determines the number of bind variables, each bind variable's data
         * type, and its name (when binding by name). If a variable in the first
         * record contains a null, this value is ignored and a subsequent record is
         * used to determine that variable's characteristics. If all values in all
         * records for a particular bind variable are null, the type of that bind is
         * {@link STRING} with a maximum size of 1.
         *
         * The maximum sizes of strings and Uint8Arrays are determined by scanning
         * all records in the bind data.
         *
         * If a {@link bindDefs} property is used in options, no data scanning
         * occurs. This property explicitly specifies the characteristics of each
         * bind variable.
         * @param numIterations number of times the SQL statement should be
         * executed. It can be used instead of the binds parameter.
         * @param options The options parameter is optional. It can contain the
         * properties specified in {@link ExecuteManyOptions}.
         */
        abstract executeMany(sql: string, binds: BindParameters[], options?: ExecuteManyOptions): ExecuteManyReturn;
        abstract executeMany(sql: string, numIterations: number, options?: ExecuteManyOptions): ExecuteManyReturn;
        /**
         * Parses a SQL statement and returns information about it. This is most
         * useful for finding column names of queries, and for finding the names of
         * bind variables used.
         *
         * This method performs a call to the SQL layer of the database, so
         * unnecessary calls should be avoided for performance reasons.
         *
         * The information is provided by lower-level APIs that have some
         * limitations. Some uncommon statements will return the statement type as
         * {@link STMT_TYPE_UNKNOWN}. DDL statements are not parsed, so the syntax
         * errors in them will not be reported. The direction and types of bind
         * variables cannot be determined.
         *
         * @param sql SQL statement to parse.
         */
        abstract getStatementInfo(sql: string): StatementInfo;
        /**
         * This call rolls back the current transaction in progress.
         */
        abstract rollback(): void;
        /**
         * Returns a parent SodaDatabase object.
         * @see https://github.com/oracle/node-oracledb/blob/v5.0.0/doc/api.md#getsodadatabase
         * @return a new SodaDatabase object.
         */
        abstract getSodaDatabase(): ISodaDatabase;
        /**
         * Returns a DbObject prototype object representing the named Oracle Database object or collection.
         * @param className The name of the Oracle object or collection.
         *
         * @since Oracle 23.3
         */
        abstract getDbObjectClass(className: string): IDbObjectClass;
    }

    /**
     * Interface for representing {@link execute} 's argument.
     *
     * @since Oracle 23.5
     */
    interface ExecuteArgs {
        /**
         * The sql text of the statement to be executed.
         */
        statement: string;
        /**
         * An array that contains bind values.
         */
        values: [];
    }

    /**
     * Interface for representing a DbObject attribute.
     *
     * @since Oracle 23.3
     */
    interface DbObjectAttributes {
        /**
         * the value of one of the Oracle Database Type Constants,
         * such as 2010 for oracledb.DB_TYPE_NUMBER and 2023 for oracledb.DB_TYPE_OBJECT.
         */
        type: number;
        /**
         * a string corresponding to the type, such as “VARCHAR2” or “NUMBER”.
         * When the attribute is a DbObject, it will contain the name of the object.
         */
        typeName: string;
        /**
         * set if the value of type is a DbObject. It is the DbObject class for the attribute.
         */
        typeClass?: IDbObjectClass;
    }

    /**
     * Interface for representing the named Oracle Database object or collection.
     *
     * @since Oracle 23.3
     */
    abstract class IDbObjectClass {
        /**
         * List of attributes corresponding to the Oracle Database object attributes.
         * The name of each attribute follows normal Oracle casing semantics.
         */
        attributes?: Record<string, DbObjectAttributes>;
        /**
         * When dbObject.isCollection is true, this will have a value corresponding
         * to one of the Oracle Database Type Constants.
         */
        readonly elementType?: number;
        /**
         * When dbObject.isCollection is true and the elements in the collection
         * refer to database objects, this property provides the type class
         * information of the elements.
         *
         * @since Oracle 23.4
         */
        readonly elementTypeClass?: IDbObjectClass;
        /**
         * When dbObject.isCollection is true, this will have the name of the
         * element type, such as “VARCHAR2” or “NUMBER”.
         */
        readonly elementTypeName?: string;
        /**
         * Fully qualified name of the Oracle Database object or collection.
         */
        readonly fqn?: string;
        /**
         * True if the Oracle object is a collection, false otherwise.
         */
        readonly isCollection?: boolean;
        /**
         * Name of the Oracle Database object or collection.
         */
        readonly name?: string;
        /**
         * Schema owning the Oracle Database object or collection.
         */
        readonly schema?: string;
        /**
         * String which identifies the name of the package, if the type refers to a
         * PL/SQL type. Otherwise, it returns undefined.
         *
         * @since Oracle 23.4
         */
        readonly packageName?: string;
        /**
         * When dbObject.isCollection is true, this will have the number
         * of elements in the collection. It is undefined for non-collections.
         */
        readonly length?: number;
        /**
         * These methods can be used on Oracle Database collections, identifiable
         * when dbObject.isCollection is true. When collections are fetched from the database,
         * altered, and then passed back to the database, it may be more efficient to use these methods
         * directly on the retrieved DbObject than it is to convert that DbObject to and from a JavaScript object.
         */
        /**
         * Adds the given value to the end of the collection.
         */
        abstract append?(value: any): void;
        /**
         * Deletes the value from the collection at the given index.
         */
        abstract deleteElement?(index: number): void;
        /**
         * Returns the value associated with the given index.
         */
        abstract getElement?(index: number): any;
        /**
         * Returns the first index for later use to obtain the value.
         */
        abstract getFirstIndex?(): number;
        /**
         * Returns a JavaScript array containing the ‘index’ keys.
         */
        abstract getKeys?(): number[];
        /**
         * Obtains the last index for later use to obtain a value.
         */
        abstract getLastIndex?(): number;
        /**
         * Returns the next index value for later use to obtain a value.
         */
        abstract getNextIndex?(index: number): any;
        /**
         * Returns the previous index for later use to obtain the value.
         */
        abstract getPrevIndex?(index: number): any;
        /**
         * Returns true if an element exists in the collection at the given index.
         * Returns false otherwise.
         */
        abstract hasElement?(index: number): boolean;
        /**
         * To set the given value at the position of the given index.
         */
        abstract setElement?(index: number, value: any): void;
        /**
         * Returns an array of element values as a JavaScript array in key order.
         */
        abstract getValues?(): any[];
        /**
         * @param count : Trims the specified number of elements from the end of the collection.
         */
        abstract trim?(count: number): IDbObjectClass;
    }

    /**
     * Type for mle-js-oracledb Query OutFormat Constants.
     */
    type OutFormatType = number;

    /**
     * Type for mle-js-oracledb JavaScript Type Constants. Such constants can be
     * used in OUT binds as well as fetchInfo to specify what JavaScript type a
     * database value should be converted to. Some of those types can also be used
     * in {@link fetchAsString}, {@link fetchAsUint8Array}, and
     * {@link fetchAsPlsqlWrapper}.
     *
     * In addition to the standard JavaScript types that node-oracledb offers,
     * mle-js-oracledb also offers a number of so-called PL/SQL wrapper types which
     * are JavaScript types with the exact same semantics as the corresponding
     * Oracle SQL or PL/SQL types (see mle-js-plsqltypes). The JavaScript constants
     * for those types all start with ORACLE_, e.g.  ORACLE_NUMBER is the constant
     * to be used if a database value should be retrieved as OracleNumber rather
     * than a native JavaScript number.
     */
    type JsType = number;

    /**
     * Type for converter
     *
     * @since Oracle 23.7
     */
    type Converter = (v: any) => object | string | number | boolean;

    /**
     * Type for fetch type handler
     *
     * @since Oracle 23.7
     */
    type FetchTypeHandler = (metaData: object) => null | {
        type: number;
        converter: Converter;
    } | {
        type: number;
    } | {
        converter: Converter;
    };

    /**
     * Class for representing global mle-js-oracledb properties.
     */
    class Parameters {
        #private;
        get maxRows(): number;
        /**
         * The maximum number of rows that are fetched by a query with
         * connection.{@link execute}() when not using an {@link IResultSet}. Rows
         * beyond this limit are not fetched from the database. A value of 0 means
         * there is no limit.
         *
         * The default value is 0, meaning unlimited.
         *
         * This property may be overridden in an {@link execute}() call.
         *
         * To improve database efficiency, SQL queries should use a row limiting clause
         * like OFFSET / FETCH or equivalent. The maxRows property can be used to stop
         * badly coded queries from returning unexpectedly large numbers of rows.
         *
         * When the number of query rows is relatively big, or cannot be predicted, it
         * is recommended to use an {@link IResultSet}. This allows applications to
         * process rows in smaller chunks or individually, preventing the PGA limits
         * from being exceeded or query results being unexpectedly truncated by a
         * maxRows limit.
         */
        set maxRows(value: number);
        get outFormat(): OutFormatType;
        /**
         * The format of query rows fetched when using connection.{@link execute}().
         * It affects both IResultSet and non-IResultSet queries. This can be either
         * of the constants {@link OUT_FORMAT_ARRAY} or {@link OUT_FORMAT_OBJECT}. The
         * default value is {@link OUT_FORMAT_ARRAY} when requiring the module
         * "mle-js-oracledb" (in Oracle 21c). Oracle 23ai introduces and encourages the
         * use of ECMAScript imports (import oracledb from "mle-js-oracledb") and if
         * those are used, the default value is {@link OUT_FORMAT_OBJECT}.
         *
         * If specified as {@link OUT_FORMAT_ARRAY}, each row is fetched as an array of column
         * values.
         *
         * If specified as {@link OUT_FORMAT_OBJECT}, each row is fetched as a JavaScript object.
         * The object has a property for each column name, with the property value set
         * to the respective column value. The property name follows Oracle's standard
         * name-casing rules. It will commonly be uppercase since most applications
         * create tables using unquoted, case-insensitive names.
         *
         * This property may be overridden in an {@link execute}() call.
         */
        set outFormat(value: OutFormatType);
        get fetchArraySize(): number;
        /**
         * This property sets the size of an internal buffer used for fetching query
         * rows from Oracle Database. Changing it may affect query performance but
         * does not affect how many rows are returned to the application.
         *
         * The default value is 10. The maximum allowed value is 1000, any value
         * greater than that will silently be limited to 1000.
         *
         * The property is used during the default direct fetches and during
         * {@link IResultSet}.{@link getRow}() and {@link getRows}() calls.
         *
         * Increasing this value reduces the number of context switches, but increases
         * memory usage for each data fetch. For queries that return a large number of
         * rows, higher values of fetchArraySize may give better performance. For
         * queries that only return a few rows, reduce the value of fetchArraySize to
         * minimize the amount of memory management during data fetches. Note that as
         * mle-js-oracledb is co-located with the database, large values are unlikely
         * to yield significant benefit.
         *
         * For direct fetches (those using {@link resultSet}: false), the
         * internal buffer size will be based on the lesser of maxRows and
         * fetchArraySize.
         */
        set fetchArraySize(value: number);
        get extendedMetaData(): boolean;
        /**
         * Determines whether additional metadata is available for queries.
         *
         * The default value is false. With this value, the result.{@link metaData}
         * and result.{@link resultSet}.{@link metaData} objects only include column
         * names.
         *
         * This property may be overridden in an execute() call.
         */
        set extendedMetaData(value: boolean);
        get fetchAsString(): JsType[];
        /**
         * An array of mle-js-oracledb JS Type values. The valid types are {@link
         * DATE}, {@link NUMBER}, {@link UINT8ARRAY}, {@link ORACLE_CLOB}, and
         * {@link DB_TYPE_JSON}. When any column having one of the specified types
         * is queried with {@link execute}(), the column data is returned as a
         * string instead of the default representation.
         *
         * By default in mle-js-oracledb, all columns are returned as native types
         * or as OracleClob/OracleBlob wrapper types, in the case of CLOB and BLOB
         * types.
         *
         * This property helps avoid situations where using JavaScript types can lead
         * to numeric precision loss, or where date conversion is unwanted. See
         * https://github.com/oracle/node-oracledb/blob/v3.1.0/doc/api.md#-1316-query-result-type-mapping
         * for more discussion.
         *
         * For raw data returned as a string, Oracle returns the data as a
         * hex-encoded string. For dates and numbers returned as a string, the
         * maximum length of a string created by this mapping is 200 bytes. Strings
         * created for CLOB columns will generally be limited by memory restrictions.
         *
         * Individual query columns in {@link execute}() calls can override the
         * fetchAsString global property by using {@link fetchInfo}.
         */
        set fetchAsString(value: JsType[]);
        get fetchAsUint8Array(): JsType[];
        /**
         * An array of mle-js-oracledb JS Type values. Currently, the only valid type
         * is {@link ORACLE_BLOB}. When a BLOB column is queried with {@link
         * execute}(), the column data is returned as a Uint8Array instead of the
         * default representation.
         *
         * By default in mle-js-oracledb, all columns are returned as native types
         * or as OracleClob/OracleBlob wrapper types, in the case of CLOB and BLOB
         * types.
         *
         * Individual query columns in {@link execute}() calls can override the
         * fetchAsUint8Array global property by using {@link fetchInfo}.
         */
        set fetchAsUint8Array(value: JsType[]);
        get fetchAsPlsqlWrapper(): JsType[];
        /**
         * An array of mle-js-oracledb JS Type values. The valid types are {@link
         * DATE}, {@link NUMBER}, and {@link STRING}. When any column having one of
         * the specified types is queried with {@link execute}(), the column data is
         * returned as a PL/SQL wrapper type instead of the default representation.
         *
         * By default in mle-js-oracledb, all columns are returned as native types
         * or as OracleClob/OracleBlob wrapper types, in the case of CLOB and BLOB
         * types.
         *
         * For types that are set in both properties ({@link fetchAsString} and
         * fetchAsPlsqlWrapper), i.e. {@link DATE} and {@link NUMBER}, the {@link
         * fetchAsString} property has precedence over the fetchAsPlsqlWrapper
         * property.
         *
         * Individual query columns in {@link execute}() calls can override the
         * fetchAsPlsqlWrapper global property by using {@link fetchInfo}.
         */
        set fetchAsPlsqlWrapper(value: JsType[]);
        get fetchTypeHandler(): FetchTypeHandler;
        /**
         * This property is a function that allows applications to examine and modify queried column data
         * before it is returned to the user. This function is called once for each column that is being
         * fetched with a single object argument containing the following attributes:
         *
         * annotations: The object representing the annotations.
         * maxSize: The maximum size in bytes. This is only set if dbType is oracledb.DB_TYPE_VARCHAR, oracledb.DB_TYPE_CHAR, or oracledb.DB_TYPE_RAW.
         * dbType: The database type, that is, one of the Oracle Database Type Objects.
         * dbTypeName: The name of the database type, such as "NUMBER" or "VARCHAR2".
         * dbTypeClass: The class associated with the database type. This is only set if dbType is oracledb.DB_TYPE_OBJECT.
         * name: The name of the column.
         * nullable: Indicates whether NULL values are permitted for this column.
         * precision: Set only when the dbType is oracledb.DB_TYPE_NUMBER.
         * scale: Set only when the dbType is oracledb.DB_TYPE_NUMBER.
         *
         * By default, this property is "undefined", that is, it is not set.
         * The function is expected to return either nothing or an object containing:
         * the type attribute
         * or the converter attribute
         * or both the type and converter attributes.
         * The converter function is a function which can be used with fetch type handlers to change the returned data.
         * This function accepts the value that will be returned by connection.execute() for a particular row and column
         * and returns the value that will actually be returned by connection.execute().
         * This property can be overridden by the fetchTypeHandler option in execute().
         *
         * @since Oracle 23.7
         */
        set fetchTypeHandler(value: FetchTypeHandler);
    }

    class OracleDb {
        #private;
        OUT_FORMAT_ARRAY: number;
        ARRAY: number;
        OUT_FORMAT_OBJECT: number;
        OBJECT: number;
        DEFAULT: number;
        STRING: number;
        NUMBER: number;
        DATE: number;
        ORACLE_NUMBER: number;
        ORACLE_DATE: number;
        ORACLE_BLOB: number;
        ORACLE_CLOB: number;
        ORACLE_INTERVAL_DS: number;
        ORACLE_INTERVAL_YM: number;
        ORACLE_TIMESTAMP: number;
        ORACLE_TIMESTAMP_TZ: number;
        UINT8ARRAY: number;
        /**
         * @since Oracle 23.4
         */
        INT8ARRAY: number;
        /**
         * @since Oracle 23.4
         */
        FLOAT32ARRAY: number;
        /**
         * @since Oracle 23.4
         */
        FLOAT64ARRAY: number;
        DB_TYPE_VARCHAR: number;
        DB_TYPE_NUMBER: number;
        DB_TYPE_LONG: number;
        DB_TYPE_DATE: number;
        DB_TYPE_RAW: number;
        DB_TYPE_LONG_RAW: number;
        DB_TYPE_CHAR: number;
        DB_TYPE_BINARY_FLOAT: number;
        DB_TYPE_BINARY_DOUBLE: number;
        DB_TYPE_BINARY_INTEGER: number;
        DB_TYPE_ROWID: number;
        DB_TYPE_UROWID: number;
        DB_TYPE_BOOLEAN: number;
        DB_TYPE_CLOB: number;
        DB_TYPE_BLOB: number;
        DB_TYPE_TIMESTAMP: number;
        DB_TYPE_TIMESTAMP_TZ: number;
        DB_TYPE_TIMESTAMP_LTZ: number;
        DB_TYPE_NVARCHAR: number;
        DB_TYPE_NCHAR: number;
        DB_TYPE_NCLOB: number;
        DB_TYPE_JSON: number;
        /**
         * @since Oracle 23.3
         */
        DB_TYPE_OBJECT: number;
        /**
         * @since Oracle 23.4
         */
        DB_TYPE_VECTOR: number;
        DB_TYPE_INTERVAL_YM: number;
        DB_TYPE_INTERVAL_DS: number;
        BIND_IN: number;
        BIND_INOUT: number;
        BIND_OUT: number;
        STMT_TYPE_UNKNOWN: number;
        STMT_TYPE_SELECT: number;
        STMT_TYPE_UPDATE: number;
        STMT_TYPE_DELETE: number;
        STMT_TYPE_INSERT: number;
        STMT_TYPE_CREATE: number;
        STMT_TYPE_DROP: number;
        STMT_TYPE_ALTER: number;
        STMT_TYPE_BEGIN: number;
        STMT_TYPE_DECLARE: number;
        STMT_TYPE_CALL: number;
        STMT_TYPE_EXPLAIN_PLAN: number;
        STMT_TYPE_MERGE: number;
        STMT_TYPE_ROLLBACK: number;
        STMT_TYPE_COMMIT: number;
        SODA_COLL_MAP_MODE: number;
        parameters: Parameters;
        SodaCollection: typeof ISodaCollection;
        SodaDatabase: typeof ISodaDatabase;
        SodaDocument: typeof ISodaDocument;
        SodaDocumentCursor: typeof ISodaDocumentCursor;
        SodaOperation: typeof ISodaOperation;
        OracleDb: typeof OracleDb;
        Connection: typeof IConnection;
        ResultSet: typeof IResultSet;
        /**
         * Construct a new OracleDb object for connecting and querying Oracle Database.
         *
         * @param useArrayFormat if set to true, {@link OUT_FORMAT_ARRAY} will be
         * used as the default out format for SQL results, otherwise
         * {@link OUT_FORMAT_OBJECT} will be used.
         */
        constructor(useArrayFormat?: boolean);
        get outFormat(): OutFormatType;
        set outFormat(value: OutFormatType);
        get extendedMetaData(): boolean;
        set extendedMetaData(value: boolean);
        get fetchArraySize(): number;
        set fetchArraySize(value: number);
        get fetchAsPlsqlWrapper(): JsType[];
        set fetchAsPlsqlWrapper(value: JsType[]);
        get fetchAsString(): JsType[];
        set fetchAsString(value: JsType[]);
        get maxRows(): number;
        set maxRows(value: number);
        /**
         * @since Oracle 23.7
         */
        get fetchTypeHandler(): FetchTypeHandler;
        /**
         * @since Oracle 23.7
         */
        set fetchTypeHandler(value: FetchTypeHandler);
        /**
         * Returns the default connection object for executing SQL queries in the Oracle
         * Database using mle-js-oracledb. Note that with MLE, because JavaScript is
         * executed directly in the database, there is no need to establish a specific
         * connection, which is why the default connection object should be used.
         *
         * @returns default connection object for executing SQL queries with mle-js-oracledb.
         */
        defaultConnection(): IConnection;
    }
}

declare module "mle-js-oracledb" {
    type ICreateCollectionOptions = __mle_js_oracledb.CreateCollectionOptions;
    type ICreateDocumentOptions = __mle_js_oracledb.CreateDocumentOptions;
    type IGetCollectionNameOptions = __mle_js_oracledb.GetCollectionNameOptions;
    type IDropIndexOptions = __mle_js_oracledb.DropIndexOptions;
    type IDropResult = __mle_js_oracledb.DropResult;
    type IDropIndexResult = __mle_js_oracledb.DropIndexResult;
    type ICountResult = __mle_js_oracledb.CountResult;
    type IRemoveResult = __mle_js_oracledb.RemoveResult;
    type IReplaceResult = __mle_js_oracledb.ReplaceResult;
    type ISodaDatabase = __mle_js_oracledb.ISodaDatabase;
    type ISodaCollection = __mle_js_oracledb.ISodaCollection;
    type ISodaOperation = __mle_js_oracledb.ISodaOperation;
    type ISodaDocumentCursor = __mle_js_oracledb.ISodaDocumentCursor;
    type ISodaDocument = __mle_js_oracledb.ISodaDocument;

    /**
     * Custom class for errors thrown by {@link execute}() or {@link executeMany}().
     */
    interface OracleDbError extends Error {
        /**
         * The Oracle error number. This value is undefined for non-Oracle errors.
         */
        errorNum?: number;
        /**
         * The character offset into the SQL text that resulted in the Oracle
         * error. The value may be 0 in non-SQL contexts. This value is undefined
         * for non-Oracle errors.
         */
        offset?: number;
    }
    type IFetchInfoColumnSpec = __mle_js_oracledb.FetchInfoColumnSpec;
    type IFetchInfo = __mle_js_oracledb.FetchInfo;
    type IExecuteOptions = __mle_js_oracledb.ExecuteOptions;
    type IBindDef = __mle_js_oracledb.BindDef;
    type IObjectBindDefs = __mle_js_oracledb.ObjectBindDefs;
    type ArrayBindDefs = __mle_js_oracledb.ArrayBindDefs;
    type ExecuteManyBindDefs = __mle_js_oracledb.ExecuteManyBindDefs;
    type IExecuteManyOptions = __mle_js_oracledb.ExecuteManyOptions;
    type IMetaData = __mle_js_oracledb.MetaData;
    type IResultSet = __mle_js_oracledb.IResultSet;
    type IExecuteReturn = __mle_js_oracledb.ExecuteReturn;
    type IExecuteManyReturn = __mle_js_oracledb.ExecuteManyReturn;
    type IBindObjectValue = __mle_js_oracledb.BindObjectValue;
    type BindValue = __mle_js_oracledb.BindValue;
    type INamedBinds = __mle_js_oracledb.NamedBinds;
    type PosBinds = __mle_js_oracledb.PosBinds;
    type BindParameters = __mle_js_oracledb.BindParameters;
    type IStatementInfo = __mle_js_oracledb.StatementInfo;
    type IConnection = __mle_js_oracledb.IConnection;
    type IExecuteArgs = __mle_js_oracledb.ExecuteArgs;
    type IDbObjectAttributes = __mle_js_oracledb.DbObjectAttributes;
    type IDbObjectClass = __mle_js_oracledb.IDbObjectClass;
    type OutFormatType = __mle_js_oracledb.OutFormatType;

    /**
     * Fetch each row as array of column values
     * This constant is deprecated. Use OUT_FORMAT_ARRAY instead.
     */
    const ARRAY: OutFormatType;

    /**
     * Fetch each row as array of column values.
     */
    const OUT_FORMAT_ARRAY: OutFormatType;

    /**
     * Fetch each row as an object
     * This constant is deprecated. Use OUT_FORMAT_OBJECT instead.
     */
    const OBJECT: OutFormatType;

    /**
     * Fetch each row as an object of column values.
     */
    const OUT_FORMAT_OBJECT: OutFormatType;
    type JsType = __mle_js_oracledb.JsType;

    /**
     * Used with fetchInfo to reset the fetch type to the database type
     */
    const DEFAULT: JsType;

    /**
     * Bind as JavaScript String type.
     */
    const STRING: JsType;

    /**
     * Bind as JavaScript number type.
     */
    const NUMBER: JsType;

    /**
     * Bind as JavaScript date type.
     */
    const DATE: JsType;

    /**
     * Bind a NUMBER to an OracleNumber object.
     */
    const ORACLE_NUMBER: JsType;

    /**
     * Bind a DATE to an OracleDate object.
     */
    const ORACLE_DATE: JsType;

    /**
     * Bind a BLOB to an OracleBLOB object.
     */
    const ORACLE_BLOB: JsType;

    /**
     * Bind a CLOB to an OracleCLOB object.
     */
    const ORACLE_CLOB: JsType;

    /**
     * Bind an INTERVAL DAY TO SECOND to an OracleIntervalDayToSecond object.
     */
    const ORACLE_INTERVAL_DS: JsType;

    /**
     * Bind an INTERVAL YEAR TO MONTH to an OracleIntervalYearToMonth object.
     */
    const ORACLE_INTERVAL_YM: JsType;

    /**
     * Bind an NCLOB to an OracleNCLOB object.
     */
    const ORACLE_NCLOB: JsType;

    /**
     * Bind a RAW, LONG RAW or BLOB to a Uint8Array typed array.
     */
    const UINT8ARRAY: JsType;

    /**
     * Bind a TIMESTAMP to an OracleTimestamp object.
     */
    const ORACLE_TIMESTAMP: JsType;

    /**
     * Bind a TIMESTAMP WITH TIME ZONE or TIMESTAMP WITH LOCAL TIME ZONE to an OracleTimestampTZ object.
     */
    const ORACLE_TIMESTAMP_TZ: JsType;

    /**
     * Bind a VECTOR(*, int8) to Int8Array
     * @since Oracle 23.4
     */
    const INT8ARRAY: JsType;

    /**
     * Bind a VECTOR(*, float32) to Float32Array
     * @since Oracle 23.4
     */
    const FLOAT32ARRAY: JsType;

    /**
     * Bind a VECTOR(*, float64) to Float64Array
     * @since Oracle 23.4
     */
    const FLOAT64ARRAY: JsType;

    /**
     * Type for mle-js-oracledb Database Type Constants. Such constants can be used
     * in IN binds to specify what database type a JavaScript value should be
     * converted to and are also what is used in query metadata. In addition, some
     * of these types can also be used in OUT binds if a corresponding
     * {@link JsType} does not exist, e.g. {@link DB_TYPE_BOOLEAN},
     * {@link DB_TYPE_JSON}, {@link DB_TYPE_NCLOB}.
     */
    type DbType = number;

    /**
     * VARCHAR2
     */
    const DB_TYPE_VARCHAR: DbType;

    /**
     * NUMBER or FLOAT
     */
    const DB_TYPE_NUMBER: DbType;

    /**
     * LONG
     */
    const DB_TYPE_LONG: DbType;

    /**
     * DATE
     */
    const DB_TYPE_DATE: DbType;

    /**
     * RAW
     */
    const DB_TYPE_RAW: DbType;

    /**
     * LONG RAW
     */
    const DB_TYPE_LONG_RAW: DbType;

    /**
     * CHAR
     */
    const DB_TYPE_CHAR: DbType;

    /**
     * BINARY_FLOAT
     */
    const DB_TYPE_BINARY_FLOAT: DbType;

    /**
     * BINARY_DOUBLE
     */
    const DB_TYPE_BINARY_DOUBLE: DbType;

    /**
     * BINARY_INTEGER
     */
    const DB_TYPE_BINARY_INTEGER: DbType;

    /**
     * ROWID
     */
    const DB_TYPE_ROWID: DbType;

    /**
     * CLOB
     */
    const DB_TYPE_CLOB: DbType;

    /**
     * BLOB
     */
    const DB_TYPE_BLOB: DbType;

    /**
     * TIMESTAMP
     */
    const DB_TYPE_TIMESTAMP: DbType;

    /**
     * TIMESTAMP WITH TIME ZONE
     */
    const DB_TYPE_TIMESTAMP_TZ: DbType;

    /**
     * INTERVAL YEAR TO MONTH
     */
    const DB_TYPE_INTERVAL_YM: DbType;

    /**
     * INTERVAL DAY TO SECOND
     */
    const DB_TYPE_INTERVAL_DS: DbType;

    /**
     * UROWID
     */
    const DB_TYPE_UROWID: DbType;

    /**
     * BOOLEAN
     */
    const DB_TYPE_BOOLEAN: DbType;

    /**
     * TIMESTAMP WITH LOCAL TIME ZONE
     */
    const DB_TYPE_TIMESTAMP_LTZ: DbType;

    /**
     * NVARCHAR
     */
    const DB_TYPE_NVARCHAR: DbType;

    /**
     * NCHAR
     */
    const DB_TYPE_NCHAR: DbType;

    /**
     * NCLOB
     */
    const DB_TYPE_NCLOB: DbType;

    /**
     * Bind as JSON. This constant can also be used in {@link fetchAsString} to
     * express that JSON column values should be fetched as JS string rather than JS
     * object.
     */
    const DB_TYPE_JSON: DbType;

    /**
     * ADT
     *
     * @since Oracle 23.3
     */
    const DB_TYPE_OBJECT: DbType;

    /**
     * VECTOR
     * @since Oracle 23.4
     */
    const DB_TYPE_VECTOR: DbType;

    /**
     * Direction for IN binds
     */
    const BIND_IN = 3001;

    /**
     * Direction for INOUT binds
     */
    const BIND_INOUT = 3002;

    /**
     * Direction for OUT binds
     */
    const BIND_OUT = 3003;

    /**
     * Unknown statement type
     */
    const STMT_TYPE_UNKNOWN = 0;

    /**
     * SELECT
     */
    const STMT_TYPE_SELECT = 1;

    /**
     * UPDATE
     */
    const STMT_TYPE_UPDATE = 2;

    /**
     * DELETE
     */
    const STMT_TYPE_DELETE = 3;

    /**
     * INSERT
     */
    const STMT_TYPE_INSERT = 4;

    /**
     * CREATE
     */
    const STMT_TYPE_CREATE = 5;

    /**
     * DROP
     */
    const STMT_TYPE_DROP = 6;

    /**
     * ALTER
     */
    const STMT_TYPE_ALTER = 7;

    /**
     * BEGIN
     */
    const STMT_TYPE_BEGIN = 8;

    /**
     * DECLARE
     */
    const STMT_TYPE_DECLARE = 9;

    /**
     * CALL
     */
    const STMT_TYPE_CALL = 10;

    /**
     * EXPLAIN PLAN
     */
    const STMT_TYPE_EXPLAIN_PLAN = 15;

    /**
     * MERGE
     */
    const STMT_TYPE_MERGE = 16;

    /**
     * ROLLBACK
     */
    const STMT_TYPE_ROLLBACK = 17;

    /**
     * COMMIT
     */
    const STMT_TYPE_COMMIT = 21;

    /**
     * SODA_COLL_MAP_MODE
     */
    const SODA_COLL_MAP_MODE = 5001;
    type Converter = __mle_js_oracledb.Converter;
    type FetchTypeHandler = __mle_js_oracledb.FetchTypeHandler;
    type Parameters = __mle_js_oracledb.Parameters;

    type OracleDb = __mle_js_oracledb.OracleDb;

    const oracledb: OracleDb;

    export default oracledb;
}

/**
 * CAUTION: This namespace is used for TYPE DECLARATIONS ONLY and does not have
 * an equivalent in the actual implementation in MLE. Please either use the
 * corresponding module or global symbols instead.
 */
declare namespace __mle_js_fetch {
    /**
     * Interface to represent types that provide a view into an ArrayBuffer e.g. DataView
     *
     * @since Oracle 23.3
     */
    interface BufferWrapper {
        buffer: ArrayBuffer;
    }

    /**
     * Type alias for the types the body can be
     *
     * @since Oracle 23.3
     */
    type BodyType = BufferWrapper | ArrayBuffer | string | null;

    class Body {
        #private;
        /**
         * Check if the contents of the body have been consumed.
         */
        get bodyUsed(): boolean;
        /**
         * Retrieve the contents of the body.
         */
        get body(): BodyType;
        constructor(body?: BodyType | Body);
        /**
         * Consume the contents of the body as JSON.
         */
        json(): Promise<any>;
        /**
         * Consume the contents of the body as text.
         */
        text(): Promise<string>;
        arrayBuffer(): Promise<ArrayBuffer>;
        /**
         * Unsupported operation (keep protected until implemented)
         */
        protected blob(): void;
        /**
         * Unsupported operation (keep protected until implemented)
         */
        protected formData(): void;
        protected _cloneBodyContent(): BodyType;
    }

    type HeadersInit = string[][] | Record<string, string> | Headers;

    class Headers {
        #private;
        /**
         * Create a new instance given initial header values.
         * @param init initial header values
         */
        constructor(init?: HeadersInit);
        /**
         * Retrieve a list of header values
         * @param key the name of the header
         * @returns a comma-separated list of values
         */
        get(key: string): string | null;
        /**
         * Set or override the header value
         * Both the key and the value have a limit of 32767 bytes
         * @param key the name of the header
         * @param value the new value
         */
        set(key: string, value: string): void;
        /**
         * Add a value to the list corresponding to a header
         * @param key the name of the header
         * @param value the value to add
         */
        append(key: string, value: string): void;
        /**
         * Check if a value of a header has been set
         * @param name the name of the header
         * @returns true if the header has been set, false otherwise
         */
        has(name: string): boolean;
        /**
         * Remove all values for a header
         * @param name the name of the header
         */
        delete(name: string): void;
        keys(): Generator<string>;
        values(): Generator<string | null>;
        entries(): Generator<[string, string | null]>;
        forEach(func: (value: unknown, key: unknown, object: unknown) => void, thisValue?: unknown): void;
    }

    type RequestInfo = Request | string;

    interface RequestInit {
        method?: string;
        body?: BodyType;
        headers?: HeadersInit;
        credentials?: string;
    }

    /**
     * Configures the way a resource is retrieved.
     */
    class Request extends Body {
        readonly method: string;
        readonly url: string | null;
        readonly headers: Headers;
        credentials: string;
        /**
         * Create a new retrieval request.
         *
         * @param input a path to the resource to retrieve or a {@link Request} object to copy
         * @param init additional configuration of the retrieval
         */
        constructor(input: RequestInfo, init?: RequestInit);
        /**
         * Create a deep copy of this request.
         */
        clone(): Request;
    }

    type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect";

    interface ResponseInit {
        status?: number;
        statusText?: string;
        headers?: Headers;
    }

    /**
     * The result of a resource retrieval.
     */
    class Response extends Body {
        #private;
        readonly url: string | null;
        readonly statusText: string;
        readonly headers: Headers;
        /**
         * Create a new retrieval result
         *
         * @param body the body of the result
         * @param init additional metadata on the result of the retrieval
         */
        constructor(body?: BodyType, init?: ResponseInit);
        /**
         * Create a new response that represents a network error.
         */
        static error(): Response;
        /**
         * Create a new response, whose body is JSON-encoded data
         * @param data JSON-encoded body of the response
         * @param init additional response metadata
         */
        static json(data: any, init?: ResponseInit): Response;
        /**
         * Get the {@link ResponseType} type of the response.
         */
        get type(): ResponseType;
        /**
         * Get the HTTP status code, e.g. 200
         */
        get status(): number;
        /**
         * Check if this response is a result of a successful request.
         */
        get ok(): boolean;
        /**
         * Create a deep copy of this response.
         */
        clone(): Response;
    }

    /**
     * Make a request to the specified resource.
     *
     * If there is a field line that is longer than 8192 bytes in the response
     * received, a TypeError is thrown.
     *
     * @param input a path to the resource or a {@link Request} object that configures the retrieval
     * @param init additional configuration for the retrieval
     * @returns a {@link Response} that contains the result of resource retrieval
     */
    function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
}

declare module "mle-js-fetch" {
    const IBufferWrapper: __mle_js_fetch.BufferWrapper;
    type IBufferWrapper = __mle_js_fetch.BufferWrapper;

    const BodyType: __mle_js_fetch.BodyType;
    type BodyType = __mle_js_fetch.BodyType;
    const Body: __mle_js_fetch.Body;
    type Body = __mle_js_fetch.Body;

    const HeadersInit: __mle_js_fetch.HeadersInit;
    type HeadersInit = __mle_js_fetch.HeadersInit;
    const Headers: __mle_js_fetch.Headers;
    type Headers = __mle_js_fetch.Headers;

    const RequestInfo: __mle_js_fetch.RequestInfo;
    type RequestInfo = __mle_js_fetch.RequestInfo;
    const RequestInit: __mle_js_fetch.RequestInit;
    type RequestInit = __mle_js_fetch.RequestInit;
    const Request: __mle_js_fetch.Request;
    type Request = __mle_js_fetch.Request;

    const ResponseType: __mle_js_fetch.ResponseType;
    type ResponseType = __mle_js_fetch.ResponseType;
    const ResponseInit: __mle_js_fetch.ResponseInit;
    type ResponseInit = __mle_js_fetch.ResponseInit;
    const Response: __mle_js_fetch.Response;
    type Response = __mle_js_fetch.Response;

    const fetch: typeof __mle_js_fetch.fetch;
    type fetch = typeof __mle_js_fetch.fetch;
}
declare module "mle-encode-base64" {
    /**
 * Encode a string or a byte buffer into base64.

 * The function converts the characters to bytes as if they were ASCII encoded.
 * Convert the data to an ArrayBuffer first if you need to convert strings with
 * characters outside the ASCII alphabet.
 *
 * @throws Error if the input string contains a character outside of ASCII
 * @return a string with base64-encoded data
 *
 * @since Oracle 23.3
 */
    function encode(input: string | ArrayBuffer | Uint8Array): string;

    /**
     * Decode a base64 encoded string.
     *
     * @throws Error if the input contains characters outside base64 alphabet or is otherwise invalid.
     * @return a byte array with the decoded data.
     *
     * @since Oracle 23.3
     */
    function decode(input: string): ArrayBuffer;
}

/**
 * CAUTION: This namespace is used for TYPE DECLARATIONS ONLY and does not have
 * an equivalent in the actual implementation in MLE. Please either use the
 * corresponding module or global symbols instead.
 */
declare namespace __mle_js_encodings {
    interface TextEncoderCommon {
        readonly encoding: string;
    }

    /**
     * The object returned by encodeInto.
     * It reports on the progress of the encoder.
     */
    interface TextEncoderEncodeIntoResult {
        /** The number of UTF-16 *code points* that were read. */
        read: number;
        /** The number of bytes written to the given buffer. */
        written: number;
    }

    /**
     * TextEncoder takes code points and returns UTF-8 bytes.
     */
    class TextEncoder implements TextEncoderCommon {
        /**
         * Always returns 'utf-8'.
         */
        readonly encoding = "utf-8";
        /**
         * Create a new instance of TextEncoder.
         */
        constructor();
        /**
         * Encode the given string into a byte array.
         *
         * @param input the string to encode.
         */
        encode(input?: string): Uint8Array;
        /**
         * Encode the given string and store the results in the given buffer.
         *
         * @param input the string to encode.
         * @param destination the buffer where the encoded string should be stored.
         * @returns an object describing the progress made in this call (code points read and bytes written).
         */
        encodeInto(input: string, destination: Uint8Array): TextEncoderEncodeIntoResult;
    }

    interface TextDecoderCommon {
        readonly encoding: string;
        readonly fatal: boolean;
        readonly ignoreBOM: boolean;
    }

    /**
     * Options given to the constructor of TextDecoder.
     */
    interface TextDecoderOptions {
        /**
         * Controls the error mode of the decoder.
         * If set to true an exception is thrown on invalid byte sequences.
         * Otherwise, the replacement code point will be used.
         * Default: false.
         */
        fatal?: boolean;
        /**
         * Controls whether the BOM (Byte Order Mark) should be checked.
         * If set to true the BOM will not be checked/removed.
         * Default: false.
         */
        ignoreBOM?: boolean;
    }

    /**
     * Options given to decode.
     */
    interface TextDecodeOptions {
        /**
         * Controls whether the IO queue should be flushed between calls.
         * If set to true the corresponding TextDecoder instance may retain state from the previous call.
         * Used for decoding text in chunks.
         * Default: false.
         */
        stream?: boolean;
    }

    type AllowSharedBufferSource = ArrayBuffer | SharedArrayBuffer | ArrayBufferView;

    /**
     * TextDecoder represents a decoder for specific text encoding, such UTF-8, UTF-16, etc.
     * A decoder takes as input bytes and returns as output code points.
     */
    class TextDecoder implements TextDecoderCommon {
        #private;
        /**
         * The name of the decoder that will be used.
         */
        readonly encoding: string;
        /**
         * Error mode can be either be 'replacement' (replace code point) or 'fatal' (throw exception),
         */
        readonly fatal: boolean;
        /**
         * Whether the byte order mark will be ignored.
         */
        readonly ignoreBOM: boolean;
        /**
         * Create a new TextDecoder instance.
         * Currently, the following encodings are supported: utf-8, utf-16be,
         * utf-16le, utf-16 (alias to utf-16le).
         * @param label the name of the encoding to be used when decoding. Default: 'utf-8'.
         * @param options the decoder options (an object with properties fatal and ignoreBOM).
         */
        constructor(label?: string, options?: TextDecoderOptions);
        /**
         * Decodes the given bytes with the method given in encoding.
         * @param input the bytes to decode, given as an ArrayBuffer or ArrayBufferView.
         * @param options object with the stream property. stream specifies whether data will follow in subsequent calls.
         *                Should be set to true if processing data in chunks.
         */
        decode(input?: AllowSharedBufferSource, options?: TextDecodeOptions): string;
    }
}

declare module "mle-js-encodings" {
    const TextEncoderCommon: __mle_js_encodings.TextEncoderCommon;
    type TextEncoderCommon = __mle_js_encodings.TextEncoderCommon;
    const TextEncoderEncodeIntoResult: __mle_js_encodings.TextEncoderEncodeIntoResult;
    type TextEncoderEncodeIntoResult = __mle_js_encodings.TextEncoderEncodeIntoResult;
    const TextEncoder: __mle_js_encodings.TextEncoder;
    type TextEncoder = __mle_js_encodings.TextEncoder;

    const TextDecoderCommon: __mle_js_encodings.TextDecoderCommon;
    type TextDecoderCommon = __mle_js_encodings.TextDecoderCommon;
    const TextDecoderOptions: __mle_js_encodings.TextDecoderOptions;
    type TextDecoderOptions = __mle_js_encodings.TextDecoderOptions;
    const TextDecodeOptions: __mle_js_encodings.TextDecodeOptions;
    type TextDecodeOptions = __mle_js_encodings.TextDecodeOptions;
    const AllowSharedBufferSource: __mle_js_encodings.AllowSharedBufferSource;
    type AllowSharedBufferSource = __mle_js_encodings.AllowSharedBufferSource;
    const TextDecoder: __mle_js_encodings.TextDecoder;
    type TextDecoder = __mle_js_encodings.TextDecoder;
}

/**
 * CAUTION: This namespace is used for TYPE DECLARATIONS ONLY and does not have
 * an equivalent in the actual implementation in MLE. Please either use the
 * corresponding module or global symbols instead.
 */
declare namespace __mle_js_plsql_ffi {
    /**
     * Return type override options.
     */
    interface ReturnInfo {
        /**
         * The same as {@link ArgInfo.maxSize}.
         */
        maxSize?: number;
        /**
         * The same as {@link ArgInfo.type}.
         */
        type?: number | string;
        /**
         * The same as {@link ArgInfo.maxArraySize}.
         */
        maxArraySize?: number;
    }

    /**
     * JavaScript representation of a PL/SQL subprogram.
     */
    interface DBSubprogram {
        (...arg: any[]): any;
        /**
         * Override the return type of the subprogram.
         * If the subprogram being represented is a procedure this has no effect.
         * @param dbType the database type. This needs to be either an oracledb
         * type constant or a string containing the name of a user defined database
         * type (only for named types like records and objects).
         * If more info needs to be specified {@link ReturnInfo} can be used.
         * @remarks
         * Type names are case-sensitive.
         */
        overrideReturnType(dbType: number | string | ReturnInfo): DBSubprogram;
    }

    /**
     * Resolve a PL/SQL package by name.
     *
     * @returns a representation of the given package that can be used to interact
     *          with the PL/SQL package.
     *
     * @category Resolve Functions
     *
     * @example
     * ```ts
     * // Get the JS represenation.
     * const dbmsRandom = resolvePackage('DBMS_RANDOM');
     *
     * // Use the representation.
     * dbmsRandom.seed(42);
     * console.log(dbmsRandom.normal());
     * ```
     */
    function resolvePackage(name: string): any;

    /**
     * Resolve a PL/SQL top-level function by name.
     *
     * @returns a JavaScript function that will execute the PL/SQL function when
     * called and returns the PL/SQL return value.
     *
     * @category Resolve Functions
     *
     * @remarks
     * Similarly to the SQL driver this package has to deal with translating types
     * between PL/SQL and JavaScript. Some PL/SQL types can be translated into
     * multiple JavaScript types, so the return type can be overridden.
     *
     * @example
     * ```ts
     * // Resolve top-level function.
     * const exampleFunc = resolveFunction('my_func');
     * // Execute the PL/SQL function simply by calling the JS function.
     * const numberResult = exampleFunc(42);
     * // Override the return type of the function.
     * const oracleNumberResult = exampleFunc.returns(oracledb.ORACLE_NUMBER)(42);
     * ```
     */
    function resolveFunction(name: string): DBSubprogram;

    /**
     * Resolve a PL/SQL top-level procedure.
     *
     * @returns a JavaScript function that will execute the given PL/SQL procedure
     * when called.
     *
     * @category Resolve Functions
     *
     * @example
     * ```ts
     * // Resolve the procedure
     * const exampleProcedure = resolveProcedure('my_procedure');
     * exampleProcedure(42, 23);
     * ```
     */
    function resolveProcedure(name: string): DBSubprogram;

    /**
     * Argument description.
     */
    interface ArgInfo {
        /**
         * The value of the argument.
         */
        val?: any;
        /**
         * The maximum number of bytes an argument with OUT values can take up.
         * Default: 200.
         */
        maxSize?: number;
        /**
         * The argument direction. In almost all cases this is not necessary and the
         * direction chosen by the FFI should be used.
         * Accepted values:
         *  - oracledb.BIND_IN
         *  - oracledb.BIND_OUT
         *  - oracledb.BIND_INOUT.
         */
        dir?: number;
        /**
         * If the type chosen by FFI needs to be changed this property can be used.
         * This property needs to be set to either an oracledb type constant or to
         * the name of the database type in case of a user defined named type (e.g.
         * record or object).
         * This can be useful to ensure no precision loss when e.g. retrieving
         * a number (by specifying the oracledb.ORACLE_NUMBER override).
         * It can also be useful to specify the correct overload if the FFI cannot
         * determine the correct subprogram to use in a package.
         * @remarks
         * Named types are case sensitive.
         */
        type?: number | string;
        /**
         * The number of array elements to be allocated for a PL/SQL INDEX BY associative array.
         * @remarks
         * Needed for all OUT associative array arguments.
         * INDEX BY VARCHAR2 associative arrays are **not** supported.
         */
        maxArraySize?: number;
    }

    /**
     * This interface represents an argument for a PL/SQL call.
     * It can act as a value holder for arguments that have an OUT value.
     * It can also act as an extra information store about the given values.
     * This could be the type, maxSize, direction or maxArraySize.
     */
    interface DBArgument {
        /**
         * The JavaScript value of the PL/SQL argument.
         */
        val: any;
    }

    /**
     * Create a new argument, to be used in a subsequent PL/SQL call.
     * @param info optional argument description.
     * @returns the JavaScript representation of a PL/SQL argument.
     */
    function arg(info?: ArgInfo): DBArgument;

    /**
     * Create a new argument with the given value.
     * @param value the value of the argument.
     * @param info optional argument description.
     * @returns the JavaScript representation of a PL/SQL argument.
     * @remarks
     * If info contains a val property it will be ignored.
     */
    function argOf(value: any, info?: ArgInfo): DBArgument;

    /**
     * This class represents a PL/SQL exception that occurred during the execution
     * of a PL/SQL subprogram.
     */
    class CallError extends Error {
        #private;
        /**
         * Returns true if this CallError is the given PL/SQL exception.
         * @param errorCode the Oracle error code of the exception.
         * @returns whether this instance represents the given PL/SQL exception.
         */
        is(errorCode: number): boolean;
    }
}

declare module "mle-js-plsql-ffi" {
    const ReturnInfo: __mle_js_plsql_ffi.ReturnInfo;
    type ReturnInfo = __mle_js_plsql_ffi.ReturnInfo;
    const DBSubprogram: __mle_js_plsql_ffi.DBSubprogram;
    type DBSubprogram = __mle_js_plsql_ffi.DBSubprogram;

    const resolvePackage: typeof __mle_js_plsql_ffi.resolvePackage;
    type resolvePackage = typeof __mle_js_plsql_ffi.resolvePackage;
    const resolveFunction: typeof __mle_js_plsql_ffi.resolveFunction;
    type resolveFunction = typeof __mle_js_plsql_ffi.resolveFunction;
    const resolveProcedure: typeof __mle_js_plsql_ffi.resolveProcedure;
    type resolveProcedure = typeof __mle_js_plsql_ffi.resolveProcedure;

    const ArgInfo: __mle_js_plsql_ffi.ArgInfo;
    type ArgInfo = __mle_js_plsql_ffi.ArgInfo;
    const DBArgument: __mle_js_plsql_ffi.DBArgument;
    type DBArgument = __mle_js_plsql_ffi.DBArgument;
    const arg: typeof __mle_js_plsql_ffi.arg;
    type arg = typeof __mle_js_plsql_ffi.arg;
    const argOf: typeof __mle_js_plsql_ffi.argOf;
    type argOf = typeof __mle_js_plsql_ffi.argOf;

    const CallError: __mle_js_plsql_ffi.CallError;
    type CallError = __mle_js_plsql_ffi.CallError;
}

/*
 * TypeScript declarations for JavaScript builtins in Oracle Database
 * Multilingual Engine, see the following links for more information:
 * - https://www.graalvm.org/latest/reference-manual/js/JavaScriptCompatibility
 * - https://oracle-samples.github.io/mle-modules
 */

/**
 * Type for programming languages that can be evaluated. Currently, it's
 * JavaScript only.
 */
type Language = "js";

/**
 * Interface for Polyglot object. The functions of the Polyglot object allow you
 * to interact with values from other polyglot languages.
 */
interface PolyglotInterface {
    /**
     * Exports the JavaScript value under the given key to the polyglot bindings.
     * If the polyglot bindings already had a value identified by key, it is
     * overwritten with the new value. The value may be any valid Polyglot
     * value.
     *
     * @param key identifier of polyglot binding that should be written.
     * @param value content of polyglot binding that should be written.
     * @throws TypeError if key is not a String.
     */
    export(key: string, value: any): undefined;

    /**
     * Imports the value identified by key from the polyglot bindings and
     * returns it. If no language has exported a value identified by key,
     * undefined is returned.
     *
     * @param key identifier of polyglot binding that should be read.
     * @returns the value of the polyglot binding or undefined if it does not
     * exist.
     * @throws TypeError if key is not a String.
     */
    import(key: string): any;

    /**
     * Parses and evaluates sourceCode with the interpreter identified by
     * languageId. The value of sourceCode is expected to be a String (or
     * convertible to one). Returns the evaluation result.
     *
     * @param languageId identifies the language.
     * @param sourceCode contains the source code to be evaluated.
     * @returns the evaluation result, depending on the sourceCode and/or the
     * semantics of the language evaluated.
     * @throws Exceptions can occur when an invalid languageId is passed, when
     * sourceCode cannot be evaluated by the language, or when the executed
     * program throws an exception itself.
     */
    eval(languageId: Language, sourceCode: string): any;
}
declare const Polyglot: PolyglotInterface;

/**
 * Interface for console object.
 */
interface Console {
    /**
     * Prints the arguments to stdout, providing a best-effort human readable
     * output. By default, stdout is redirected to DBMS_OUTPUT and can be
     * redirected using the appropriate procedures in DBMS_MLE.
     *
     * @param args  arguments to be printed to stdout.
     */
    log(...args: any[]): undefined;

    /**
     * Alias of {@link log}:
     * Prints the arguments to stdout, providing a best-effort human readable
     * output. By default, stdout is redirected to DBMS_OUTPUT and can be
     * redirected using the appropriate procedures in DBMS_MLE.
     *
     * @param args  arguments to be printed to stdout.
     */
    info(...args: any[]): undefined;

    /**
     * Alias of {@link log}:
     * Prints the arguments to stdout, providing a best-effort human readable
     * output. By default, stdout is redirected to DBMS_OUTPUT and can be
     * redirected using the appropriate procedures in DBMS_MLE.
     *
     * @param args  arguments to be printed to stdout.
     */
    debug(...args: any[]): undefined;

    /**
     * Prints the arguments to stderr, providing a best-effort human readable
     * output. By default, stderr is redirected to DBMS_OUTPUT and can be
     * redirected using the appropriate procedures in DBMS_MLE.
     *
     * @param args  arguments to be printed to stderr.
     */
    error(...args: any[]): undefined;

    /**
     * Alias of {@link error}:
     * Prints the arguments to stderr, providing a best-effort human readable
     * output. By default, stderr is redirected to DBMS_OUTPUT and can be
     * redirected using the appropriate procedures in DBMS_MLE.
     *
     * @param args  arguments to be printed to stderr.
     */
    warn(...args: any[]): undefined;

    /**
     * Prints message when check is falsy.
     *
     * @param check boolean condition that should be checked.
     * @param message message that should be printed if check fails.
     */
    asserts(check: boolean, message: string): undefined;

    /**
     * Clears the console window if possible. In Oracle Database, this function
     * does not do anything useful, but prints some additional special
     * characters.
     */
    clear(): undefined;

    /**
     * Increases the given counter and prints how many times it has been called.
     * The counter is identified by its label.
     *
     * @param label name of the counter to be increased. If no name is
     * provided, the default counter is used.
     */
    count(label?: string): undefined;

    /**
     * Resets the given counter to 0. The counter is identified by its label.
     *
     * @param label name of the counter to be reset. If no name is
     * provided, the default counter is used.
     */
    countReset(label?: string): undefined;

    /**
     * Increases the indentation for succeeding outputs to the console until
     * {@link groupEnd} is called.
     *
     * @param labels if provided, the labels get printed before the indentation
     * is increased.
     */
    group(...labels: string[]): undefined;

    /**
     * Decreases the indentation for succeeding outputs to the console that was
     * previously increased with {@link group}. If indentation is already at the
     * lowest (outermost) level, this has no effect.
     */
    groupEnd(): undefined;

    /**
     * Starts a timer. The timer is identified by its label.
     *
     * @param label name of the timer to be started. If no name is
     * provided, the default timer is used.
     */
    time(label?: string): undefined;

    /**
     * Logs, i.e. prints the duration of a timer (in milliseconds). The timer is
     * identified by its label. If the timer has already been stopped, this has
     * no effect.
     *
     * @param label name of the timer to be logged. If no name is
     * provided, the default timer is used.
     */
    timeLog(label?: string): undefined;

    /**
     * Stops the timer and prints its duration (in milliseconds). The timer is
     * identified by its label. After this call, further calls to this function
     * or to {@link timeLog} have no effect.
     *
     * @param label name of the timer to be stopped. If no name is
     * provided, the default timer is used.
     */
    timeEnd(label?: string): undefined;
}
declare const console: Console;

/*
 * TypeScript declarations for JavaScript globals in Oracle Database
 * Multilingual Engine, see the following links for more information:
 * - https://oracle-samples.github.io/mle-modules
 */

declare const oracledb: __mle_js_oracledb.OracleDb;
declare const session: __mle_js_oracledb.IConnection;
declare const soda: __mle_js_oracledb.ISodaDatabase;
declare const OracleNumber: typeof __mle_js_plsqltypes.OracleNumber;
type OracleNumber = __mle_js_plsqltypes.OracleNumber;
declare const OracleBlob: typeof __mle_js_plsqltypes.OracleBlob;
type OracleBlob = __mle_js_plsqltypes.OracleBlob;
declare const OracleClob: typeof __mle_js_plsqltypes.IOracleClob;
type OracleClob = __mle_js_plsqltypes.IOracleClob;
declare const OracleDate: typeof __mle_js_plsqltypes.IOracleDate;
type OracleDate = __mle_js_plsqltypes.IOracleDate;
declare const OracleTimestampTZ: typeof __mle_js_plsqltypes.IOracleTimestampTZ;
type OracleTimestampTZ = __mle_js_plsqltypes.IOracleTimestampTZ;
declare const OracleTimestamp: typeof __mle_js_plsqltypes.IOracleTimestamp;
type OracleTimestamp = __mle_js_plsqltypes.IOracleTimestamp;

/* only after importing "mle-js-fetch" */
declare const Headers: typeof __mle_js_fetch.Headers;
type Headers = __mle_js_fetch.Headers;
declare const Request: typeof __mle_js_fetch.Request;
type Request = __mle_js_fetch.Request;
declare const Response: typeof __mle_js_fetch.Response;
type Response = __mle_js_fetch.Response;
declare const fetch: typeof __mle_js_fetch.fetch;

/* @since Oracle 23.3 */
declare const OracleIntervalDayToSecond: typeof __mle_js_plsqltypes.IOracleIntervalDayToSecond;
type OracleIntervalDayToSecond = __mle_js_plsqltypes.IOracleIntervalDayToSecond;
declare const OracleIntervalYearToMonth: typeof __mle_js_plsqltypes.IOracleIntervalYearToMonth;
type OracleIntervalYearToMonth = __mle_js_plsqltypes.IOracleIntervalYearToMonth;

/* @since Oracle 23.4 */
declare const TextEncoder: typeof __mle_js_encodings.TextEncoder;
type TextEncoder = __mle_js_encodings.TextEncoder;
declare const TextDecoder: typeof __mle_js_encodings.TextDecoder;
type TextDecoder = __mle_js_encodings.TextDecoder;

/* @since Oracle 23.5 */
declare const JsonId: typeof __mle_js_plsqltypes.JsonId;
type JsonId = __mle_js_plsqltypes.JsonId;

/* @since Oracle 23.7 */
declare const plsffi: {
    arg: typeof __mle_js_plsql_ffi.arg;
    argOf: typeof __mle_js_plsql_ffi.argOf;
    CallError: typeof __mle_js_plsql_ffi.CallError;
    resolvePackage: typeof __mle_js_plsql_ffi.resolvePackage;
    resolveFunction: typeof __mle_js_plsql_ffi.resolveFunction;
    resolveProcedure: typeof __mle_js_plsql_ffi.resolveProcedure;
};
