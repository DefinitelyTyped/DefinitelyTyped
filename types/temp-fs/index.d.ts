/**
 * A temporary file and directory creator.
 */
export = tempfs;

declare namespace tempfs {
    /**
     * A tempdir.
     */
    interface dir {
        /**
         * The absolute path to the tempdir.
         */
        path: String;

        /**
         * Whether {@link dir#unlink} will remove the tempdir recursively.
         */
        recursive: Boolean;

        /**
         * A special function for you to remove the directory.
         *
         * If the directory is not tracked, it may throw when an error occurs or
         * the first argument of the callback function will be an Error object.
         *
         * @param callback makes it asynchronous.
         */
        unlink(callback?: (error: Error) => any): any;
    }

    /**
     * A tempfile.
     */
    interface file {
        /**
         * The absolute path to the tempfile.
         */
        path: String;

        /**
         * An integer file descriptor.
         */
        fd: Number;

        /**
         * A special function for you to delete the file.
         *
         * If the file is not tracked, it may throw when an error occurs or the
         * first argument of the callback function will be an Error object.
         *
         * @param callback makes it asynchronous.
         */
        unlink(callback?: (error: Error) => any): any;
    }

    /**
     * Options.
     */
    interface options {
        /**
         * Where to put the generated tempfile or tempdir.
         *
         * Also see {@link options#name}. Default: <code>tempfs.dir()</code>
         */
        dir?: String | undefined;

        /**
         * The maximum number of chance to retry before throwing an error.
         *
         * It should be a finite number. Default: 5
         */
        limit?: Number | undefined;

        /**
         * File mode (default: 0600) or directory mode (default: 0700) to use.
         */
        mode?: Number | undefined;

        /**
         * If set, join the two paths <code>{@link options#dir} ||
         * tempfs.dir()</code> and {@link options#name} together and use the
         * result as the customized filename/pathname.
         */
        name?: String | undefined;

        /**
         * The prefix for the generated random name.
         *
         * Default: "tmp-"
         */
        prefix?: String | undefined;

        /**
         * Whether {@link dir#unlink} should remove a directory recursively.
         *
         * Default: false
         */
        recursive?: Boolean | undefined;

        /**
         * The suffix for the generated random name.
         *
         * Default: ""
         */
        suffix?: String | undefined;

        /**
         * A string containing some capital letters Xs for substitution with
         * random characters.
         *
         * Then it is used as part of the filename/dirname. Just like what you
         * do with the <code>mktemp(3)</code> function in the C library.
         */
        template?: String | undefined;

        /**
         * If set to true, let temp-fs manage the the current file/directory for
         * you even if the global tracking is off. If set to false, don't let
         * temp-fs manage it even if the global tracking is on. Otherwise, use
         * the current global setting.
         */
        track?: Boolean | undefined;
    }

    /**
     * Remove all tracked files and directories asynchronously.
     */
    function clear(callback?: () => any): any;

    /**
     * Remove all tracked files and directories synchronously.
     */
    function clearSync(): any;

    /**
     * Return the path of a system-provided tempdir as
     * <code>require('os').tmpdir()</code> does.
     *
     * You should not make any assumption about whether the path contains a
     * trailing path separator, or it is a real path. On most system it is not a
     * fixed path, and it can be changed by the user environment. When in doubt,
     * check it first.
     */
    function dir(): string;

    /**
     * Try to create a new tempdir asynchronously.
     *
     * @param callback function receives two arguments <code>error</code> and
     *                 <code>dir</code>. If <code>error</code> is
     *                 <code>null</code>, <code>dir</code> has the properties of
     *                 {@link dir}.
     */
    function mkdir(options?: options, callback?: (err: any, dir: dir) => any): any;

    /**
     * The synchronous version of {@link mkdir}.
     *
     * @throws when an error happens.
     */
    function mkdirSync(options?: options): dir;

    /**
     * Return a customized/random filename/dirname.
     */
    function name(options?: options): string;

    /**
     * Try to open a unique tempfile asynchronously.
     *
     * @param callback function receives two arguments <code>error</code> and
     *                 <code>file</code>. If <code>error</code> is
     *                 <code>null</code>, <code>file</code> has the properties
     *                 of {@link file}.
     */
    function open(callback?: (err: any, file: file) => any): any;
    function open(options?: options, callback?: (err: any, file: file) => any): any;

    /**
     * The synchronous version of {@link open}.
     *
     * @throws when an error happens.
     */
    function openSync(options?: options): file;

    /**
     * Use it to switch global files/directories tracking on or off.
     *
     * Turn it on if you don't want to manually delete everything. When it is
     * turned off, all recorded files and directories will not be removed but
     * still kept in case it is turned on again before the program exits.
     *
     * This switch does not affect manually tracked files through
     * {@link options#track}. They will be removed automatically on exit.
     *
     * <b>Note: When an uncaught exception occurs, all tracked temporary files
     * and directories will be removed no matter it is on or off.</b>
     */
    function track(on?: Boolean): void;
}
