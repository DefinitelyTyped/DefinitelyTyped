declare namespace mp {
    type LogLevel = "fatal" | "error" | "warn" | "info" | "v" | "debug" | "trace";

    /** @see https://mpv.io/manual/stable/#list-of-events */
    type EventName =
        | "start-file"
        | "end-file"
        | "file-loaded"
        | "seek"
        | "playback-restart"
        | "shutdown"
        | "log-message"
        | "hook"
        | `${"get" | "set"}-property-reply`
        | "command-reply"
        | "client-message"
        | `${"video" | "audio"}-reconfig`
        | "property-change";

    /** @see https://mpv.io/manual/stable/#hooks */
    type HookName =
        | "on_load"
        | "on_load_fail"
        | "on_preloaded"
        | "on_unload"
        | "on_before_start_file"
        | "on_after_end_file";

    /**
     * @see https://mpv.io/manual/stable/#list-of-input-commands
     * run `mpv --input-cmdlist` to get full list of input commands
     */
    type CommandName =
        // Playback Control
        | "seek"
        | "revert-seek"
        | "sub-seek"
        | "frame-step"
        | "frame-back-step"
        | "stop"
        // Property Manipulation
        | "set"
        | "del"
        | "add"
        | "multiply"
        | "cycle"
        | "cycle-values"
        | "change-list"
        // Playlist Manipulation
        | `playlist-${"next" | "prev"}`
        | `playlist-${"next" | "prev"}-playlist`
        | "playlist-play-index"
        | "loadfile"
        | "loadlist"
        | `playlist-${"clear" | "remove" | "move" | "shuffle" | "unshuffle"}`
        // Track Manipulation
        | `sub-${"add" | "remove" | "reload" | "step"}`
        | `audio-${"add" | "remove" | "reload"}`
        | `video-${"add" | "remove" | "reload"}`
        | "rescan-external-files"
        // Text Manipulation
        | "print-text"
        | `expand-${"text" | "path"}`
        | "normalize-path"
        | "escape-ass"
        // Configuration Commands
        | "apply-profile"
        | "load-config-file"
        | "write-watch-later-config"
        | "delete-watch-later-config"
        // OSD Commands
        | `show-${"text" | "progress"}`
        | `overlay-${"add" | "remove"}`
        | "osd-overlay"
        // Input and Keybind Commands
        | "mouse"
        | "keypress"
        | `key${"down" | "up"}`
        | "keybind"
        | `${"enable" | "disable" | "define"}-section`
        | "load-input-conf"
        // Execution Commands
        | "run"
        | "subprocess"
        | "quit"
        | "quit-watch-later"
        // Scripting Commands
        | "script-message"
        | "script-message-to"
        | "script-binding"
        | "load-script"
        // Screenshot Commands
        | "screenshot"
        | "screenshot-to-file"
        | "screenshot-raw"
        // Filter Commands
        | "af"
        | "vf"
        | `${"af" | "vf"}-command`
        // Miscellaneous Commands
        | "ignore"
        | "drop-buffers"
        | "dump-cache"
        | "ab-loop"
        | `ab-loop-${"dump" | "align"}-cache`
        | "begin-vo-dragging"
        | "context-menu";

    /** @see https://mpv.io/manual/stable/#properties */
    type WriteablePropertyName =
        | "percent-pos"
        | "time-pos"
        | "time-pos/full"
        | "playback-time"
        | "playback-time/full"
        | "chapter"
        | "edition"
        | "ao-volume"
        | "ao-mute"
        | "hwdec"
        | "current-window-scale"
        | "playlist-pos"
        | "playlist-pos-1"
        | "playlist-current-pos"
        | "chapter-list"
        | "chapter-list/count"
        | `chapter-list/${number}/${"title" | "time"}`
        | "af"
        | "vf"
        | "cursor-autohide"
        | "audio-device"
        | "user-data"
        | "user-data/osc/margins"
        | `user-data/mpv/ytdl/${"path" | "json-subprocess-result"}`
        | "user-data/mpv/console/open"
        | "menu-data"
        | `options/${string}`
        | `file-local-options/${string}`
        | `clipboard/${"text" | "text-primary"}`
        // es5 doesn't support string interpolation so Template Literal Types became pointless here.
        // it was awkward to only realized it after added all these.
        // now it only provides partial completeions from literal unions and allows any other arbitrary string
        | (string & {});

    /** @see https://mpv.io/manual/stable/#properties */
    type ReadonlyPropertyName =
        | `${"audio" | "video"}-speed-correction`
        | "display-sync-active"
        | "filename"
        | "filename/no-ext"
        | "file-size"
        | `estimated-frame-${"count" | "number"}`
        | "pid"
        | "path"
        | "stream-open-filename"
        | "media-title"
        | "file-format"
        | "current-demuxer"
        | `stream-${"path" | "pos" | "end"}`
        | "duration"
        | "avsync"
        | "total-avsync-change"
        | "decoder-frame-drop-count"
        | "frame-drop-count"
        | "mistimed-frame-count"
        | "vsync-ratio"
        | "vo-delayed-frame-count"
        | "time-start"
        | "time-remaining"
        | "time-remaining/full"
        | "audio-pts"
        | "audio-pts/full"
        | "playtime-remaining"
        | "playtime-remaining/full"
        | "remaining-file-loops"
        | "remaining-ab-loops"
        | "current-edition"
        | "chapters"
        | "editions"
        | "edition-list"
        | "edition-list/count"
        | `edition-list/${number}/${"id" | "default" | "title"}`
        | "metadata"
        | `metadata/by-key/${string}`
        | "metadata/list/count"
        | `metadata/list/${number}/${"key" | "value"}`
        | `metadata/${string}`
        | "filtered-metadata"
        | "chapter-metadata"
        | `${"vf" | "af"}-metadata/${string}`
        | "deinterlace-active"
        | "idle-active"
        | "core-idle"
        | "cache-speed"
        | `demuxer-cache-${"duration" | "time" | "idle" | "state"}`
        | "demuxer-via-network"
        | "demuxer-start-time"
        | "paused-for-cache"
        | "cache-buffering-state"
        | "eof-reached"
        | "seeking"
        | "mixer-active"
        | "audio-params"
        | `audio-params-${"format" | "samplerate" | "channels" | "hr-channels" | "channel-count"}`
        | "audio-out-params"
        | "colormatrix"
        | "colormatrix-input-range"
        | "colormatrix-primaries"
        | `hwdec-${"current" | "interop"}`
        | "width"
        | "height"
        | "video-params"
        | `video-params/${__VideoParamSub}`
        | "dwidth"
        | "dheight"
        | `video-${"dec" | "out" | "target"}-params`
        | "video-frame-info"
        | `video-frame-info/${
            | "picture-type"
            | "interlaced"
            | "tff"
            | "repeat"
            | "gop-timecode"
            | "smpte-timecode"
            | "estimated-smpte-timecode"}`
        | "container-fps"
        | "estimated-vf-fps"
        | "focused"
        | "ambient-light"
        | "display-names"
        | "display-fps"
        | "estimated-display-fps"
        | "vsync-jitter"
        | `display-${"width" | "height"}`
        | "display-hidpi-scale"
        | `osd-${"width" | "height"}`
        | "osd-par"
        | "osd-dimensions"
        | `osd-dimensions/${"w" | "h" | "par" | "aspect" | "mt" | "mb" | "ml" | "mr"}`
        | "term-size"
        | `term-size/${"w" | "h"}`
        | "window-id"
        | "display-swapchain"
        | "mouse-pos"
        | `mouse-pos/${"x" | "y" | "hover"}`
        | "touch-pos"
        | "touch-pos/count"
        | `touch-pos/${number}/${"x" | "y" | "id"}`
        | "tablet-pos"
        | `tablet-pos/${
            | "x"
            | "y"
            | "tool-in-proximity"
            | "tool-tip"
            | `tool-stylus-btn${"1" | "2" | "3"}`
            | "pad-focus"}`
        | `tablet-pos/pad-btns/${number}`
        | "sub-ass-extradata"
        | "sub-text"
        | `sub-text/${"ass" | "ass-full"}`
        | "secondary-sub-text"
        | "sub-start"
        | "sub-start/full"
        | "secondary-sub-start"
        | "sub-end"
        | "sub-end/full"
        | "secondary-sub-end"
        | "playlist-playing-pos"
        | "playlist-count"
        | "playlist-path"
        | "playlist"
        | "playlist/count"
        | `playlist/${number}/${"filename" | "playing" | "current" | "title" | "id" | "playlist-path"}`
        | "track-list"
        | `track-list/${"count" | "video" | "audio" | "sub"}`
        | `track-list/${number}/${__TrackListSub}` // note: current-track/... is not typed here as the doc is confusing
        | "seekable"
        | "partially-seekable"
        | "playback-abort"
        | "term-clip-cc"
        | "osd-sym-cc"
        | "osd-ass-cc"
        | "vo-configured"
        | "vo-passes"
        | `vo-passes/${"fresh" | "redraw"}/count`
        | `vo-passes/${"fresh" | "redraw"}/${number}/${
            | "desc"
            | "last"
            | "avg"
            | "peak"
            | "count"
            | `samples/${number}`}`
        | "perf-info"
        | `${"video" | "audio" | "sub"}-bitrate`
        | "audio-device-list"
        | "current-vo"
        | "current-gpu-context"
        | "current-ao"
        | "working-directory"
        | "current-watch-later-dir"
        | "protocol-list"
        | "decoder-list"
        | "encoder-list"
        | "demuxer-lavf-list"
        | "input-key-list"
        | "mpv-version"
        | "mpv-configuration"
        | "ffmpeg-version"
        | "libass-version"
        | "platform"
        | `option-info/${string}`
        | `option-info/${string}/${
            | "name"
            | "type"
            | "set-from-commandline"
            | "set-locally"
            | "expects-file"
            | "default-value"
            | "min"
            | "max"
            | "choices"}`
        | "property-list"
        | "profile-list"
        | "command-list"
        | "input-bindings"
        | "clipboard"
        | "current-clipboard-backend"
        | "clock"
        // es5 doesn't support string interpolation so Template Literal Types became pointless here.
        // it was awkward to only realized it after added all these.
        // now it only provides partial completeions from literal unions and allows any other arbitrary string
        | (string & {});

    /**
     * sub property names of track-list/N/
     * @see https://mpv.io/manual/stable/#command-interface-track-list
     */
    type __TrackListSub =
        | "id"
        | "type"
        | "src-id"
        | "title"
        | "lang"
        | "image"
        | "albumart"
        | "default"
        | "forced"
        | "dependent"
        | "visual-impaired"
        | "hearing-impaired"
        | "hls-bitrate"
        | "program-id"
        | "codec"
        | "codec-desc"
        | "codec-profile"
        | "external"
        | "external-filename"
        | "selected"
        | "main-selection"
        | "ff-index"
        | "decoder"
        | "decoder-desc"
        | `demux-${"w" | "h"}`
        | `demux-crop-${"x" | "y" | "w" | "h"}`
        | "demux-channel-count"
        | `demux-${"channels" | "samplerate" | "fps" | "bitrate" | "rotation" | "par"}`
        | "format-name"
        | `replaygain-${"track" | "album"}-${"peak" | "gain"}`
        | `dolby-vision-${"profile" | "level"}`
        | "metadata";

    /**
     * sub property names of video-params/N/
     * @see https://mpv.io/manual/stable/#command-interface-video-params
     */
    type __VideoParamSub =
        | "pixelformat"
        | "hw-pixelformat"
        | "average-bpp"
        | "w"
        | "h"
        | "dw"
        | "dh"
        | "crop-x"
        | "crop-y"
        | "crop-w"
        | "crop-h"
        | "aspect"
        | "aspect-name"
        | "par"
        | "sar"
        | "sar-name"
        | "colormatrix"
        | "colorlevels"
        | "primaries"
        | "gamma"
        | "sig-peak"
        | "light"
        | "chroma-location"
        | "rotate"
        | "stereo-in"
        | "min-luma"
        | "max-luma"
        | "max-cll"
        | "max-fall"
        | `scene-max-${"r" | "g" | "b"}`
        | `${"max" | "avg"}-pq-y`
        | `prim-${"red" | "green" | "blue" | "white"}-${"x" | "y"}`;

    /**
     * Options can be set like properties as well
     * this is a not completed list of writeable options that can be set/get by `mp.set_property` etc
     *
     * see: https://github.com/mpv-player/mpv/blob/33111f3212ee272ac4a79fe284a7b55c9b5be997/DOCS/man/input.rst#property-list
     *
     * see also: https://github.com/mpv-player/mpv/blob/33111f3212ee272ac4a79fe284a7b55c9b5be997/DOCS/man/input.rst#inconsistencies-between-options-and-properties
     */
    type WriteableOptionName = "fullscreen" | "pause";

    type GetPropertyName = ReadonlyPropertyName | WriteablePropertyName | WriteableOptionName;
    type SetPropertyName = WriteablePropertyName | WriteableOptionName;

    interface OSDOverlay {
        data: string;
        res_x: number;
        res_y: number;
        z: number;
        update(): void;
        remove(): void;
    }

    interface OSDSize {
        width?: number | undefined;
        height?: number | undefined;
        aspect?: number | undefined;
    }

    interface FileInfo {
        /**
         * protection bits (on Windows, always 755 (octal) for directories and 644 (octal) for files)
         */
        mode: number;
        /**
         * size in bytes
         */
        size: number;
        /**
         * time of last access
         */
        atime: number;
        /**
         * time of last modification
         */
        mtime: number;
        /**
         * time of last metadata change
         */
        ctime: number;
        /**
         * Whether path is a regular file
         */
        is_file: boolean;
        /**
         * Whether path is a directory
         */
        is_dir: boolean;
    }

    interface BaseCommandOpts {
        args: string[];
        playback_only?: boolean;
        capture_size?: number;
        detach?: boolean;
        env?: string[];
        stdin_data?: string;
        passthrough_stdin?: boolean;
    }

    interface UnnamedCommandOpts extends BaseCommandOpts {
        capture_stdout?: boolean;
        capture_stderr?: boolean;
    }

    interface UncapturedNamedCommandOpts extends BaseCommandOpts {
        name: string;
        capture_stdout?: false;
        capture_stderr?: false;
    }

    interface NamedCommandOptsWithStdout extends BaseCommandOpts {
        name: string;
        capture_stdout: true;
        capture_stderr?: false;
    }

    interface NamedCommandOptsWithStderr extends BaseCommandOpts {
        name: string;
        capture_stderr: true;
        capture_stdout?: false;
    }

    interface CapturedNamedOptsCommand extends BaseCommandOpts {
        name: string;
        capture_stdout: true;
        capture_stderr: true;
    }

    interface UncapturedProcess {
        status: number;
        error_string: "" | "killed" | "init";
        killed_by_us: boolean;
    }

    interface ProcessWithStdout extends UncapturedProcess {
        stdout: string;
    }

    interface ProcessWithStderr extends UncapturedProcess {
        stderr: string;
    }

    interface CapturedProcess extends UncapturedProcess {
        stdout: string;
        stderr: string;
    }

    interface UncomplexKeyBindingFlags {
        repeatable?: boolean;
        complex?: false;
    }

    interface ComplexKeyBindingFlags {
        // Setting `repeatable` to `true` when `complex` is `true` doesn't make sense
        // See also: https://github.com/mpv-player/mpv/pull/13452
        repeatable?: false;
        complex: true;
    }

    interface UserInputCommand {
        event: "down" | "repeat" | "up" | "press";
        is_mouse: boolean;
        key_name?: string | undefined;
        key_text?: string | undefined;
    }

    function command(command: string): true | undefined;

    /**
     * Similar to `mp.command`, but pass each command argument as separate parameter.
     * This has the advantage that you don't have to care about quoting and escaping in some cases.
     * @example
     * ```js
     * mp.command("loadfile " .. filename .. " append")
     * mp.commandv("loadfile", filename, "append")
     * ```
     */
    function commandv(...args: readonly [CommandName, ...unknown[]]): true | undefined;

    function command_native(table: [CommandName | (string & {}), ...unknown[]]): null | undefined; // `undefined` on error

    function command_native<T>(table: [CommandName | (string & {}), ...unknown[]], def: T): null | T; // `T` on error

    function command_native(table: UnnamedCommandOpts): undefined;

    function command_native<T>(table: UnnamedCommandOpts, def: T): T;

    function command_native(table: UncapturedNamedCommandOpts, def?: unknown): UncapturedProcess;

    function command_native(table: NamedCommandOptsWithStdout, def?: unknown): ProcessWithStdout;

    function command_native(table: NamedCommandOptsWithStderr, def?: unknown): ProcessWithStderr;

    function command_native(table: CapturedNamedOptsCommand, def?: unknown): CapturedProcess;

    /**
     * Nominal brand for return type of `mp.command_native_async`.
     * Just in case a random unknown is accidentally passed to `mp.abort_async_command`
     */
    type __AsyncCommandReturn = unknown & { __brand: "command_native_async" };

    /**
   * @see https://mpv.io/manual/stable/#command-interface-subprocess
   *
   * Like `mp.command_native()`, but the command is ran asynchronously (as far as possible), and upon completion, `fn` is called.
   *
   *  `fn` has three arguments: `fn(success, result, error)`:
        1. `success`
          - Always a Boolean and is `true` if the command was successful, otherwise `false`.
        2. `result`
          - The result value (can be `undefined`) in case of success, `undefined` otherwise (as returned by `mp.command_native()`).
        3. `error`
          - The error string in case of an error, `undefined` otherwise.
   *
   * Returns an object with undefined contents, which can be used as argument for `mp.abort_async_command`.
   *
   * If starting the command failed for some reason, `undefined` returned, and `fn` is called indicating failure, using the same error value.
   * `fn` is always called asynchronously, even if the command failed to start.
   */
    function command_native_async(
        table: unknown,
        fn?: (success: boolean, result: unknown, error: string | undefined) => void,
    ): __AsyncCommandReturn;

    /**
     * Abort a `mp.command_native_async` call.
     *
     * The argument is the return value of that command (which starts asynchronous execution of the command).
     * Whether this works and how long it takes depends on the command and the situation.
     *
     * The abort call itself is asynchronous.
     *
     * Does not return anything.
     */
    function abort_async_command(t: __AsyncCommandReturn): void;

    /**
     * Delete the given property.
     *
     *  See `mp.get_property` and Properties for more information about properties.
     *
     * Most properties cannot be deleted.
     *
     * Returns `true` on success, or `undefined` on error.
     */
    function del_property(name: string): true | undefined;

    /**
     * Return the value of the given property as string.
     *
     * These are the same properties as used in `input.conf`. See Properties for a list of properties.
     *
     * The returned string is formatted similar to `${=name}` (see Property Expansion).
     *
     * Returns the string on success, or `def` on error. `def` is the second parameter provided to the function, and is `undefined` if it's missing.
     */
    function get_property(name: GetPropertyName, def: string): string;

    /**
     * Return the value of the given property as string.
     *
     * These are the same properties as used in `input.conf`. See Properties for a list of properties.
     *
     * The returned string is formatted similar to `${=name}` (see Property Expansion).
     *
     * Returns the string on success, or `undefined` on error.
     */
    function get_property(name: GetPropertyName): string | undefined;

    /**
     * Similar to mp.get_property, but return the property value formatted for OSD.
     *
     * This is the same string as printed with `${name}` when used in `input.conf`.
     *
     * Returns the string on success, or `def` on error. `def` is the second parameter provided to the function, and is an empty string if it's missing.
     * Unlike `get_property()`, assigning the return value to a variable will always result in a string.
     */
    function get_property_osd(name: GetPropertyName, def?: string): string;

    /**
     * Similar to `mp.get_property`, but return the property value as Boolean.
     * Returns a Boolean on success, or `def`
     */
    function get_property_bool(name: GetPropertyName, def: boolean): boolean;

    /**
     * Similar to `mp.get_property`, but return the property value as Boolean.
     * Returns a Boolean on success, `undefined` on error
     */
    function get_property_bool(name: GetPropertyName): boolean | undefined;

    /**
     * Similar to `mp.get_property`, but return the property value as number.
     *
     * Note that while js does not distinguish between integers and floats, mpv internals do.
     * This function simply request a double float from mpv, and mpv will usually convert integer property values to float.
     * Returns a number on success, or `def`
     */
    function get_property_number(name: GetPropertyName, def: number): number;

    /**
     * Similar to `mp.get_property`, but return the property value as number.
     *
     * Note that while js does not distinguish between integers and floats, mpv internals do.
     * This function simply request a double float from mpv, and mpv will usually convert integer property values to float.
     * Returns a number on success, `undefined` on error
     */
    function get_property_number(name: GetPropertyName): number | undefined;

    /**
     * Similar to `mp.get_property`, but return the property value using the best Lua type for the property.
     *
     * Most time, this will return a `string`, `boolean`, or `number`.
     * Some properties (for example `chapter-list`) are returned as list.
     * Returns a value on success, or `def`, error on error. Note that `undefined` might be a possible, valid value too in some corner cases.
     */
    function get_property_native(name: GetPropertyName, def?: unknown): unknown;

    function get_property_native(name: GetPropertyName): unknown;

    /**
     * Set the given property to the given string value.
     *
     * See `mp.get_property` and Properties for more information about properties.
     * Returns `true` on success, or `undefined` on error.
     */
    function set_property(name: SetPropertyName, value: string): true | undefined;

    /**
     * Similar to `mp.set_property`, but set the given property to the given Boolean value.
     */
    function set_property_bool(name: SetPropertyName, value: boolean): true | undefined;

    /**
     * Similar to `mp.set_property`, but set the given property to the given numeric value.
     *
     * Note that while Lua does not distinguish between integers and floats, mpv internals do.
     * This function will test whether the number can be represented as integer, and if so, it will pass an integer value to mpv, otherwise a double float.
     */
    function set_property_number(name: SetPropertyName, value: number): true | undefined;

    /**
     * Similar to `mp.set_property`, but set the given property using its native type.
     *
     * Since there are several data types which cannot represented natively in Lua, this might not always work as expected.
     *
     * For example, while the Lua wrapper can do some guesswork to decide whether a Lua table is an array or a map, this would fail with empty tables.
     *
     * Also, there are not many properties for which it makes sense to use this, instead of `set_property`, `set_property_bool`, `set_property_number`.
     *
     * For these reasons, this function **should probably be avoided for now**, except for properties that use tables natively.
     */
    function set_property_native(name: SetPropertyName, value: unknown): true | undefined;

    /**
     * Return the current mpv internal time in seconds as a number.
     * This is basically the system time, with an arbitrary offset.
     */
    function get_time(): number;

    /**
     * @deprecated Passing the `fn` argument in place of the `name` is not recommended and is handled for compatibility only
     */
    function add_key_binding(
        key: string | undefined,
        fn: () => void,
        flags?: UncomplexKeyBindingFlags,
    ): void;

    /**
     * @deprecated Passing the `fn` argument in place of the `name` is not recommended and is handled for compatibility only
     */
    function add_key_binding(
        key: string | undefined,
        fn: (table: UserInputCommand) => void,
        flags: ComplexKeyBindingFlags,
    ): void;

    function add_key_binding(
        key: string | undefined,
        name: string | undefined,
        fn: () => void,
        flags?: UncomplexKeyBindingFlags,
    ): void;

    function add_key_binding(
        key: string | undefined,
        name: string | undefined,
        fn: (table: UserInputCommand) => void,
        flags: ComplexKeyBindingFlags,
    ): void;

    /**
     * @deprecated Passing the `fn` argument in place of the `name` is not recommended and is handled for compatibility only
     */
    function add_forced_key_binding(
        key: string | undefined,
        fn: () => void,
        flags?: UncomplexKeyBindingFlags,
    ): void;

    /**
     * @deprecated Passing the `fn` argument in place of the `name` is not recommended and is handled for compatibility only
     */
    function add_forced_key_binding(
        key: string | undefined,
        fn: (table: UserInputCommand) => void,
        flags: ComplexKeyBindingFlags,
    ): void;

    /**
     * This works almost the same as `mp.add_key_binding`, but registers the key binding in a way that will overwrite the user's custom bindings in their `input.conf`.
     * (`mp.add_key_binding` overwrites default key bindings only, but not those by the user's `input.conf`.)
     */
    function add_forced_key_binding(
        key: string | undefined,
        name: string | undefined,
        fn: () => void,
        flags?: UncomplexKeyBindingFlags,
    ): void;

    function add_forced_key_binding(
        key: string | undefined,
        name: string | undefined,
        fn: (table: UserInputCommand) => void,
        flags: ComplexKeyBindingFlags,
    ): void;

    /**
     * Remove a key binding added with `mp.add_key_binding` or `mp.add_forced_key_binding`.
     *
     * Use the same name as you used when adding the bindings. It's not possible to remove bindings for which you omitted the name.
     */
    function remove_key_binding(name: string): void;

    interface EventArgs<TEvent extends EventName> {
        /**
         * Name as the event (as returned by mpv_event_name()).
         */
        event: TEvent;
        /**
         * The `reply_userdata` field (opaque user value). If `reply_userdata` is 0, the field is not added.
         */
        id?: number;
        /**
         * Set to an error string (as returned by `mpv_error_string()`).
         * This field is missing if no error happened, or the event type does not report error. Most events leave this unset.
         */
        error?: string;
    }

    /**
     * Each event might contain special properties
     * @see https://mpv.io/manual/stable/#list-of-events
     * @template TEvent to fallback when its literal type is not mapped here
     */
    type EventArgsTypeMap<TEvent extends EventName> = {
        "start-file": EventArgs<"start-file"> & {
            /**
             * Playlist entry ID of the file being loaded now.
             */
            playlist_entry_id: number;
        };

        "end-file": EventArgs<"end-file"> & {
            /**
             * @see https://mpv.io/manual/stable/#command-interface-reason
             */
            reason: "eof" | "stop" | "quit" | "error" | "redirect" | "unknown";
            /**
             * Playlist entry ID of the file being loaded now.
             */
            playlist_entry_id: number;
            /**
             * @deprecated since 0.33.0
             */
            file_error?: string;
            /**
             * @see https://mpv.io/manual/stable/#command-interface-playlist-insert-id
             */
            playlist_insert_id?: number;
            /**
             * See `playlist_insert_id`. Only present if `playlist_insert_id` is present.
             */
            playlist_insert_num_entries?: number;
        };

        "log-message": EventArgs<"log-message"> & {
            /**
             * The module prefix, identifies the sender of the message.
             * This is what the terminal player puts in front of the message text when using the `--v` option, and is also what is used for `--msg-level`.
             */
            prefix: string;
            /**
             * The log level as string.
             * See `msg.log` for possible log level names. Note that later versions of mpv might add new levels or remove (undocumented) existing ones.
             */
            level: LogLevel;
            /**
             * The log message. The text will end with a newline character. Sometimes it can contain multiple lines.
             */
            text: string;
        };

        hook: EventArgs<"hook"> & {
            hook_id: number; // WARN: type not confirmed
        };

        "command-reply": EventArgs<"command-reply"> & {
            /**
             * The result (on success) of any mpv_node type, if any.
             */
            result?: string;
        };

        "client-message": EventArgs<"client-message"> & {
            /**
             * Array of strings with the message data.
             */
            args: string[];
        };

        "property-change": EventArgs<"property-change"> & {
            /**
             * The name of the property
             */
            name: string;
            /**
             * The new value of the property.
             */
            data: unknown;
        };
    } & Record<string, EventArgs<TEvent>>; // fallback to default event args if not matched

    /**
     * Call a specific function when an event happens.
     *
     * The event name is a string, and the function fn is a Lua function value.
     * Some events have associated data. This is put into a Lua table and passed as argument to `fn`.
     * The Lua table by default contains a `event` field, which is a string containing the event name.
     *
     * If the event has an error associated, the `error` field is set to a string describing the error, on success it's not set.
     *
     * If multiple functions are registered for the same event, they are run in registration order, which the first registered function running before all the other ones.
     *
     * Returns `true` if such an event exists, `false` otherwise.
     */
    function register_event<TEvent extends EventName>(
        name: TEvent,
        fn: (event: EventArgsTypeMap<TEvent>[TEvent]) => void,
    ): boolean;

    /**
     * Undo `mp.register_event(..., fn)`.
     * This removes all event handlers that are equal to the `fn` parameter.
     * This uses normal Lua == comparison, so be careful when dealing with closures.
     */
    function unregister_event(fn: (...args: unknown[]) => void): void;

    interface __ObservablePropertyTypeMap {
        bool: boolean;
        number: number;
        string: string;
        native: unknown;
    }

    /**
     * Watch a property for changes.
     *
     * If the property name is changed, then the function `fn(name)` will be called.
     *
     * `type` can be `undefined`, or be set to one of "none", "native", "bool", "string", or "number". "none" is the same as `undefined`.
     * For all other values, the new value of the property will be passed as second argument to `fn`, using `mp.get_property_<type>` to retrieve it.
     * This means if `type` is for example "string", `fn` is roughly called as in `fn(name, mp.get_property(name))`.
     *
     * If possible, change events are coalesced. If a property is changed a bunch of times in a row, only the last change triggers the change function. (The exact behavior depends on timing and other things.)
     *
     * If a property is unavailable, or on error, the value argument to `fn` is `undefined`. (The `observe_property()` call always succeeds, even if a property does not exist.)
     *
     * In some cases the function is not called even if the property changes. This depends on the property, and it's a valid feature request to ask for better update handling of a specific property.
     *
     * If the type is "none" or `undefined`, the change function `fn` will be called sporadically even if the property doesn't actually change. You should therefore avoid using these types.
     *
     * You always get an initial change notification. This is meant to initialize the user's state to the current value of the property.
     */
    function observe_property<TType extends keyof __ObservablePropertyTypeMap>(
        name: WriteablePropertyName | ReadonlyPropertyName | WriteableOptionName,
        type: TType,
        fn: (name: string, value: __ObservablePropertyTypeMap[TType] | undefined) => void,
    ): void;

    function observe_property(
        name: WriteablePropertyName | ReadonlyPropertyName | WriteableOptionName,
        type: "none" | undefined,
        fn: (name: string) => void,
    ): void;

    /**
     * Undo `mp.observe_property(..., fn)`.
     * This removes all property handlers that are equal to the `fn` parameter.
     * This uses normal Lua == comparison, so be careful when dealing with closures.
     */
    function unobserve_property(fn: (...args: unknown[]) => void): void;

    /**
     * Return a setting from the `--script-opts` option.
     * It's up to the user and the script how this mechanism is used.
     * Currently, all scripts can access this equally, so you **should be careful about collisions.**
     */
    function get_opt(key: string): string;

    /**
     * Return the name of the current script.
     * The name is usually made of the filename of the script, with directory and file extension removed.
     * If there are several scripts which would have the same name, it's made unique by appending a number.
     * Any nonalphanumeric characters are replaced with `_`.
     */
    function get_script_name(): string;

    /**
     * Return the directory if this is a script packaged as directory (see Script location for a description).
     * Return `undefined` if this is a single file script.
     */
    function get_script_directory(): string | undefined;

    /**
     * Show an OSD message on the screen. duration is in seconds, and is optional (uses `--osd-duration` by default).
     */
    function osd_message(text: string, duration?: number): void;

    /**
     * Register an event loop idle handler.
     * Idle handlers are called before the script goes to sleep after handling all new events.
     * This can be used for example to delay processing of property change events:
     * if you're observing multiple properties at once, you might not want to act on each property change, but only when all change notifications have been received.
     */
    function register_idle(fn: () => void): void;

    /**
     * Undo `mp.register_idle(fn)`.
     * This removes all idle handlers that are equal to the fn parameter.
     * This uses normal Lua == comparison, so be careful when dealing with closures.
     */
    function unregister_idle(fn: () => void): void;

    /**
     * Set the minimum log level of which mpv message output to receive.
     * These messages are normally printed to the terminal.
     * By calling this function, you can set the minimum log level of messages which should be received with the log-message event.
     * See the description of this event for details. The level is a string, see `mp.msg.log` for allowed log levels.
     */
    function enable_messages(level: LogLevel): void;

    /**
     * This is a helper to dispatch `script-message` or `script-message-to` invocations to js functions.
     * `fn` is called if `script-message` or `script-message-to` (with this script as destination) is run with name as first parameter.
     * The other parameters are passed to `fn`. If a message with the given name is already registered, it's overwritten.
     * Used by `mp.add_key_binding`, so **be careful about name collisions**.
     */
    function register_script_message(name: string, fn: (...args: unknown[]) => void): void;

    /**
     * Undo a previous registration with `mp.register_script_message`. Does nothing if the name wasn't registered.
     */
    function unregister_script_message(name: string): void;

    /**
   * Create an OSD overlay.
   *
   * This is a very thin wrapper around the osd-overlay command.
   * The function returns a table, which mostly contains fields that will be passed to osd-overlay.
   * The format parameter is used to initialize the format field. The data field contains the text to be used as overlay.
   * For details, see the `osd-overlay` command.
     In addition, it provides the following methods:
      1. `update()`
          Commit the OSD overlay to the screen, or in other words, run the osd-overlay command with the current fields of the overlay table. Returns the result of the osd-overlay command itself.
      2. `remove()`
          Remove the overlay from the screen. A update() call will add it again.
   */
    function create_osd_overlay(format: "ass-events"): OSDOverlay;

    /**
     * Returns a tuple of osd_width, osd_height, osd_par. The first two give the size of the OSD in pixels (for video outputs like `--vo=xv`, this may be "scaled" pixels). The third is the display pixel aspect ratio.
     * May return invalid/nonsense values if OSD is not initialized yet.
     */
    function get_osd_size(): OSDSize | undefined;

    interface HookState {
        defer(): void;
        cont(): void;
    }

    /**
     * Add a hook callback for type (a string identifying a certain kind of hook).
     *
     * These hooks allow the player to call script functions and wait for their result (normally, the js scripting interface is asynchronous from the point of view of the player core).
     * priority is an arbitrary integer that allows ordering among hooks of the same kind. Using the value 50 is recommended as neutral default value.
     * `fn(hook)` is the function that will be called during execution of the hook.
     * The parameter passed to it `(hook)` is an object that can control further aspects about the currently invoked hook. It provides the following methods:
     *    1. `defer()`
     *      - Returning from the hook function should not automatically continue the hook. Instead, the API user wants to call hook:cont() on its own at a later point in time (before or after the function has returned).
     *    2. `cont()`
     *     - Continue the hook. Doesn't need to be called unless defer() was called.
     */
    function add_hook(name: HookName, priority: number, fn: (hook: HookState) => void): void;

    /**
     * If used after an API call which updates last error, returns an empty string if the API call succeeded, or a non-empty error reason string otherwise.
     */
    function last_error(): string;

    /**
     * Same as mp.get_time() but in ms instead of seconds.
     */
    function get_time_ms(): number;

    /**
     * Returns the file path of the current script.
     */
    function get_script_file(): string;

    /**
     * Global modules search paths array for the require function
     */
    let module_paths: string[];

    namespace msg {
        function log(level: LogLevel, ...msg: unknown[]): void;

        function fatal(...msg: unknown[]): void;

        function error(...msg: unknown[]): void;

        function warn(...msg: unknown[]): void;

        function info(...msg: unknown[]): void;

        function verbose(...msg: unknown[]): void;

        function debug(...msg: unknown[]): void;

        function trace(...msg: unknown[]): void;
    }

    namespace options {
        /**
         * @param table A table with key-value pairs. The type of the default values is important for converting the values read from the config file or command-line back. Do not use `undefined` as a default value!
         * @param identifier Used to identify the config-file and the command-line options. These needs to unique to avoid collisions with other scripts. Defaults to `mp.get_script_name()` if the parameter is `undefined` or missing.
         * @param on_update Enables run-time updates of all matching option values via the `script-opts` option/property.
         * If any of the matching options changes, the values in the table (which was originally passed to the function) are changed, and `on_update(list)` is called.
         * `list` is a table where each updated option has a `list[option_name] = true` entry.
         * There is no initial `on_update()` call. This never re-reads the config file. `script-opts` is always applied on the original config file, ignoring previous `script-opts` values
         * (for example, if an option is removed from `script-opts` at runtime, the option will have the value in the config file).
         * table entries are only written for option values whose values effectively change (this is important if the script changes table entries independently).
         */
        function read_options<T extends Record<string, string | boolean | number>>(
            table: T,
            identifier?: string,
            on_update?: (list: Record<keyof T, true | undefined>) => void,
        ): void;
    }

    namespace utils {
        /**
         * Returns the C environment as a list of strings. (Do not confuse this with the Lua "environment", which is an unrelated concept.)
         */
        function get_env_list(): string;

        /**
         * Returns the directory that mpv was launched from.
         */
        function getcwd(): string | undefined;

        /**
         * Enumerate all entries at the given path on the filesystem, and return them as array.
         * Each entry is a directory entry (without the path). The list is unsorted (in whatever order the operating system returns it).
         * If the `filter` argument is given, it must be one of the following strings:
          1. "files"
            - List regular files only. This excludes directories, special files (like UNIX device files or FIFOs), and dead symlinks. It includes UNIX symlinks to regular files.
          2. "dirs"
            - List directories only, or symlinks to directories. . and .. are not included.
          3. "normal"
            - Include the results of both files and dirs. (This is the default.)
          4. "all"
            - List all entries, even device files, dead symlinks, FIFOs, and the . and .. entries.
        */
        function readdir(
            path: string,
            filter?: "files" | "dirs" | "normal" | "all",
        ): string[] | undefined;

        /**
         * Stats the given path for information and returns a table
         */
        function file_info(path: string): FileInfo | undefined;

        /**
         * Split a path into directory component and filename component, and return them. The first return value is always the directory. The second return value is the trailing part of the path, the directory entry.
         */
        function split_path(path: string): [string, string];

        /**
         * Return the concatenation of the 2 paths. Tries to be clever. For example, if `p2` is an absolute path, `p2` is returned without change.
         */
        function join_path(p1: string, p2: string): string;

        /**
         * Returns the process ID of the running mpv process. This can be used to identify the calling mpv when launching (detached) subprocesses.
         */
        function getpid(): number;

        /**
         * Returns the value of the host environment variable name, or undefined if the variable is not defined.
         */
        function getenv(name: string): string | undefined;

        /**
         * Trivial wrapper of the expand-path mpv command, returns a string. read_file, write_file, append_file and require already expand the path internally and accept mpv meta-paths like `~~desktop/foo`.
         */
        function get_user_path(path: string): string;

        /**
         * Returns the content of file fname as string. If max is provided and not negative, limit the read to max bytes.
         */
        function read_file(fname: string, max?: number): string;

        /**
         * (Over)write file fname with text content str.
         * `fname` must be prefixed with `file://` as simple protection against accidental arguments switch.
         * @example mp.utils.write_file("file://~/abc.txt", "hello world").
         */
        function write_file(fname: string, str: string): void;

        /**
         * Same as `mp.utils.write_file` if the file fname does not exist. If it does exist then append instead of overwrite.
         */
        function append_file(fname: string, str: string): void;

        /**
         * Compiles the JS code content_str as file name fname (without loading anything from the filesystem), and returns it as a function. Very similar to a Function constructor, but shows at stack traces as fname.
         */
        function compile_js(fname: string, content_str: string): (...args: unknown[]) => unknown;
    }
}

/**
 * A convenient alias to `mp.msg.info`.
 */
declare function print(...msg: unknown[]): void;

/**
 * Like `print` but also expands objects and arrays recursively.
 */
declare function dump(...msg: unknown[]): void;

/**
 * Make the script exit at the end of the current event loop iteration. This does not terminate mpv itself or other scripts.
 * This can be polyfilled to support mpv versions older than 0.40 with:
 */
declare function exit(): void;

// nominal brand for setTimeout returns, in case a random number is passed to clearTimeout
type __TimeoutId = number & { __brand: "setTimeout" };
type __IntervalId = number & { __brand: "setInterval" };

/**
 * @param fn callback for each interval
 * @param delay delay in millisecond
 * @param args args for `fn`
 * @returns id
 */
declare function setTimeout<TArgs extends any[]>(
    fn: (...args: TArgs) => void,
    delay?: number,
    ...args: TArgs
): __TimeoutId;

/**
 * @param codeString javascript code
 * @param delay delay in millisecond
 * @returns id
 */
declare function setTimeout(codeString: string, delay?: number): __TimeoutId;

/**
 * Cancels a scheduled timeout
 */
declare function clearTimeout(id: __TimeoutId): void;

/**
 * @param fn callback for each interval
 * @param delay delay to first start and interval(millisecond)
 * @param args args for `fn`
 * @returns id
 */
declare function setInterval<TArgs extends any[]>(
    fn: (...args: TArgs) => void,
    delay?: number,
    ...args: TArgs
): __IntervalId;

/**
 * @param codeString javascript code
 * @param delay delay in millisecond
 * @returns id
 */
declare function setInterval(codeString: string, delay?: number): __IntervalId;

/**
 * Stop a recurring timer
 */
declare function clearInterval(id: __IntervalId): void;

/**
 * note: compilerOptions.module in tsconfig/jsconfig should be set properly otherwise it might not resolve shape of the exports
 */
declare function require(mod: string): any;
