declare module goog {
    function require(name: 'goog.net.FileDownloader'): typeof goog.net.FileDownloader;
    function require(name: 'goog.net.FileDownloader.Error'): typeof goog.net.FileDownloader.Error;
}

declare module goog.net {

    /**
     * A class for downloading remote files and storing them locally using the
     * HTML5 filesystem API.
     *
     * @param {!goog.fs.DirectoryEntry} dir The directory in which the downloaded
     *     files are stored. This directory should be solely managed by
     *     FileDownloader.
     * @param {goog.net.XhrIoPool=} opt_pool The pool of XhrIo objects to use for
     *     downloading files.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class FileDownloader extends goog.Disposable {
        constructor(dir: goog.fs.DirectoryEntry, opt_pool?: goog.net.XhrIoPool);
        
        /**
         * Download a remote file and save its contents to the filesystem. A given file
         * is uniquely identified by its URL string; this means that the relative and
         * absolute URLs for a single file are considered different for the purposes of
         * the FileDownloader.
         *
         * Returns a Deferred that will contain the downloaded blob. If there's an error
         * while downloading the URL, this Deferred will be passed the
         * {@link goog.net.FileDownloader.Error} object as an errback.
         *
         * If a download is already in progress for the given URL, this will return the
         * deferred blob for that download. If the URL has already been downloaded, this
         * will fail once it tries to save the downloaded blob.
         *
         * When a download is in progress, all Deferreds returned for that download will
         * be branches of a single parent. If all such branches are cancelled, or if one
         * is cancelled with opt_deepCancel set, then the download will be cancelled as
         * well.
         *
         * @param {string} url The URL of the file to download.
         * @return {!goog.async.Deferred} The deferred result blob.
         */
        download(url: string): goog.async.Deferred<any>;
        
        /**
         * Return a Deferred that will fire once no download is active for a given URL.
         * If there's no download active for that URL when this is called, the deferred
         * will fire immediately; otherwise, it will fire once the download is complete,
         * whether or not it succeeds.
         *
         * @param {string} url The URL of the download to wait for.
         * @return {!goog.async.Deferred} The Deferred that will fire when the download
         *     is complete.
         */
        waitForDownload(url: string): goog.async.Deferred<any>;
        
        /**
         * Returns whether or not there is an active download for a given URL.
         *
         * @param {string} url The URL of the download to check.
         * @return {boolean} Whether or not there is an active download for the URL.
         */
        isDownloading(url: string): boolean;
        
        /**
         * Load a downloaded blob from the filesystem. Will fire a deferred error if the
         * given URL has not yet been downloaded.
         *
         * @param {string} url The URL of the blob to load.
         * @return {!goog.async.Deferred} The deferred Blob object. The callback will be
         *     passed the blob. If a file API error occurs while loading the blob, that
         *     error will be passed to the errback.
         */
        getDownloadedBlob(url: string): goog.async.Deferred<any>;
        
        /**
         * Get the local filesystem: URL for a downloaded file. This is different from
         * the blob: URL that's available from getDownloadedBlob(). If the end user
         * accesses the filesystem: URL, the resulting file's name will be determined by
         * the download filename as opposed to an arbitrary GUID. In addition, the
         * filesystem: URL is connected to a filesystem location, so if the download is
         * removed then that URL will become invalid.
         *
         * Warning: in Chrome 12, some filesystem: URLs are opened inline. This means
         * that e.g. HTML pages given to the user via filesystem: URLs will be opened
         * and processed by the browser.
         *
         * @param {string} url The URL of the file to get the URL of.
         * @return {!goog.async.Deferred} The deferred filesystem: URL. The callback
         *     will be passed the URL. If a file API error occurs while loading the
         *     blob, that error will be passed to the errback.
         */
        getLocalUrl(url: string): goog.async.Deferred<any>;
        
        /**
         * Return (deferred) whether or not a URL has been downloaded. Will fire a
         * deferred error if something goes wrong when determining this.
         *
         * @param {string} url The URL to check.
         * @return {!goog.async.Deferred} The deferred boolean. The callback will be
         *     passed the boolean. If a file API error occurs while checking the
         *     existence of the downloaded URL, that error will be passed to the
         *     errback.
         */
        isDownloaded(url: string): goog.async.Deferred<any>;
        
        /**
         * Remove a URL from the FileDownloader.
         *
         * This returns a Deferred. If the removal is completed successfully, its
         * callback will be called without any value. If the removal fails, its errback
         * will be called with the {@link goog.fs.Error}.
         *
         * @param {string} url The URL to remove.
         * @return {!goog.async.Deferred} The deferred used for registering callbacks on
         *     success or on error.
         */
        remove(url: string): goog.async.Deferred<any>;
        
        /**
         * Save a blob for a given URL. This works just as through the blob were
         * downloaded form that URL, except you specify the blob and no HTTP request is
         * made.
         *
         * If the URL is currently being downloaded, it's indeterminate whether the blob
         * being set or the blob being downloaded will end up in the filesystem.
         * Whichever one doesn't get saved will have an error. To ensure that one or the
         * other takes precedence, use {@link #waitForDownload} to allow the download to
         * complete before setting the blob.
         *
         * @param {string} url The URL at which to set the blob.
         * @param {!Blob} blob The blob to set.
         * @param {string=} opt_name The name of the file. If this isn't given, it's
         *     determined from the URL.
         * @return {!goog.async.Deferred} The deferred used for registering callbacks on
         *     success or on error. This can be cancelled just like a {@link #download}
         *     Deferred. The objects passed to the errback will be
         *     {@link goog.net.FileDownloader.Error}s.
         */
        setBlob(url: string, blob: Blob, opt_name?: string): goog.async.Deferred<any>;
    }
}

declare module goog.net.FileDownloader {

    /**
     * The error object for FileDownloader download errors.
     *
     * @param {!goog.net.FileDownloader.Download_} download The download object for
     *     the download in question.
     * @param {goog.fs.Error=} opt_fsErr The file error object, if this was a file
     *     error.
     *
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     */
    class Error extends goog.debug.Error {
        constructor(download: goog.net.FileDownloader.Download_, opt_fsErr?: goog.fs.Error);
        
        /**
         * The status of the XHR. Only set if the error was caused by an XHR failure.
         * @type {number|undefined}
         */
        xhrStatus: number|void;
        
        /**
         * The error code of the XHR. Only set if the error was caused by an XHR
         * failure.
         * @type {goog.net.ErrorCode|undefined}
         */
        xhrErrorCode: goog.net.ErrorCode|void;
        
        /**
         * The file API error. Only set if the error was caused by the file API.
         * @type {goog.fs.Error|undefined}
         */
        fileError: goog.fs.Error|void;
    }

    /**
     * A struct containing the data for a single download.
     *
     * @param {string} url The URL for the file being downloaded.
     * @param {!goog.net.FileDownloader} downloader The parent FileDownloader.
     * @extends {goog.Disposable}
     * @constructor
     * @private
     */
    interface Download_ extends goog.Disposable {
    }
}
