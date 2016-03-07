declare module goog {
    function require(name: 'goog.net.tmpnetwork'): typeof goog.net.tmpnetwork;
}

declare module goog.net.tmpnetwork {

    /**
     * Default timeout to allow for google.com pings.
     * @type {number}
     */
    var GOOGLECOM_TIMEOUT: number;

    /**
     * Pings the network to check if an error is a server error or user's network
     * error.
     *
     * @param {Function} callback The function to call back with results.
     * @param {goog.Uri?=} opt_imageUri The URI of an image to use for the network
     *     test. You *must* provide an image URI; the default behavior is provided
     *     for compatibility with existing code, but the search team does not want
     *     people using images served off of google.com for this purpose. The
     *     default will go away when all usages have been changed.
     */
    function testGoogleCom(callback: Function, opt_imageUri?: goog.Uri): void;

    /**
     * Test loading the given image, retrying if necessary.
     * @param {string} url URL to the iamge.
     * @param {number} timeout Milliseconds before giving up.
     * @param {Function} callback Function to call with results.
     * @param {number} retries The number of times to retry.
     * @param {number=} opt_pauseBetweenRetriesMS Optional number of milliseconds
     *     between retries - defaults to 0.
     */
    function testLoadImageWithRetries(url: string, timeout: number, callback: Function, retries: number, opt_pauseBetweenRetriesMS?: number): void;

    /**
     * Test loading the given image.
     * @param {string} url URL to the iamge.
     * @param {number} timeout Milliseconds before giving up.
     * @param {Function} callback Function to call with results.
     */
    function testLoadImage(url: string, timeout: number, callback: Function): void;
}
