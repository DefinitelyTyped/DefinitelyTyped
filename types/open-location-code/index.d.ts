declare namespace OpenLocationCode {
    /**
     * Coordinates of a decoded Open Location Code.
     *
     * The coordinates include the latitude and longitude of the lower left and
     * upper right corners and the center of the bounding box for the area the
     * code represents.
     *
     * {@label CodeArea}
     */
    interface CodeArea {
        /**
         * The latitude of the SW corner.
         */
        latitudeLo: number;

        /**
         * The longitude of the SW corner in degrees.
         */
        longitudeLo: number;

        /**
         * The latitude of the NE corner in degrees.
         */
        latitudeHi: number;

        /**
         * The longitude of the NE corner in degrees.
         */
        longitudeHi: number;

        /**
         * The number of digits in the code.
         */
        codeLength: number;

        /**
         * The latitude of the center in degrees.
         */
        latitudeCenter: number;

        /**
         * The longitude of the center in degrees.
         */
        longitudeCenter: number;
    }
}

declare class OpenLocationCode {
    /**
     * Provides a normal precision code, approximately 14x14 meters.
     */
    static readonly CODE_PRECISION_NORMAL: number;

    /**
     * Provides an extra precision code, approximately 2x3 meters.
     */
    static readonly CODE_PRECISION_EXTRA: number;

    /**
     * @returns Returns the OLC alphabet.
     */
    static getAlphabet(): string;

    /**
     * Determines if a code is valid.
     *
     * To be valid, all characters must be from the Open Location Code character
     * set with at most one separator. The separator can be in any even-numbered
     * position up to the eighth digit.
     *
     * @param code - The string to check.
     * @returns True if the string is a valid code.
     */
    static isValid(code: string): boolean;

    /**
     * Determines if a code is a valid short code.
     *
     * @param code - The string to check.
     * @returns True if the string can be produced by removing four or
     *     more characters from the start of a valid code.
     */
    static isShort(code: string): boolean;

    /**
     * Determines if a code is a valid full Open Location Code.
     *
     * @param code - The string to check.
     * @returns True if the code represents a valid latitude and longitude combination.
     */
    static isFull(code: string): boolean;

    /**
     * Encode a location into an Open Location Code.
     *
     * @param latitude - The latitude in signed decimal degrees. It will
     *     be clipped to the range -90 to 90.
     * @param longitude - The longitude in signed decimal degrees. Will be
     *     normalised to the range -180 to 180.
     * @param codeLength - The length of the code to generate. If
     *     omitted, the value OpenLocationCode.CODE_PRECISION_NORMAL will be used.
     *     For a more precise result, OpenLocationCode.CODE_PRECISION_EXTRA is
     *     recommended.
     * @returns The code.
     * @throws {@link Exception} if any of the input values are not numbers.
     */
    static encode(latitude: number, longitude: number, codeLength?: number): string;

    /**
     * Decodes an Open Location Code into its location coordinates.
     *
     * Returns a CodeArea object that includes the coordinates of the bounding
     * box - the lower left, center and upper right.
     *
     * @param code - The code to decode.
     * @returns An object with the coordinates of the
     *     area of the code.
     * @throws {@link Exception} If the code is not valid.
     */
    static decode(code: string): OpenLocationCode.CodeArea;

    /**
     * Recover the nearest matching code to a specified location.
     *
     * Given a valid short Open Location Code this recovers the nearest matching
     * full code to the specified location.
     *
     * @param shortCode - A valid short code.
     * @param latitude - The latitude to use for the reference
     *     location.
     * @param longitude - The longitude to use for the reference
     *     location.
     * @returns The nearest matching full code to the reference location.
     * @throws {@link Exception} if the short code is not valid, or the reference
     *     position values are not numbers.
     */
    static recoverNearest(shortCode: string, latitude: number, longitude: number): string;

    /**
     * Remove characters from the start of an OLC code.
     *
     * This uses a reference location to determine how many initial characters
     * can be removed from the OLC code. The number of characters that can be
     * removed depends on the distance between the code center and the reference
     * location.
     *
     * @param code - The full code to shorten.
     * @param latitude - The latitude to use for the reference location.
     * @param longitude - The longitude to use for the reference location.
     * @returns The code, shortened as much as possible that it is still
     *     the closest matching code to the reference location.
     * @throws {@link Exception} if the passed code is not a valid full code or the
     *     reference location values are not numbers.
     */
    static shorten(code: string, latitude: number, longitude: number): string;
}

export = OpenLocationCode;
