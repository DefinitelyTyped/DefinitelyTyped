export default class AssertionError extends Error {
    constructor(code: number);
    /**
     * Error code. The meaning of the code can be found on
     * https://openlayers.org/en/latest/doc/errors/ (replace latest with
     * the version found in the OpenLayers script's header comment if a version
     * other than the latest is used).
     */
    code: number;
}
