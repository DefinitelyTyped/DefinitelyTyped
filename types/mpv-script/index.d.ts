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

    // NOTE: this isn't ready to change to __CommandInfoUnion['name']
    // because __CommandInfoUnion doesn't include commands without named arguments support
    // type __NotHandledCommandName = Exclude<CommandName, __CommandInfoUnion['name']>
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

    // reserved as it requires template literal
    // TODO: it can be added to __PropertyInfoUnion but I'm lazy now
    // maybe only add it only when we decide to get rid of plain es5 support otherwise it's just pointless
    type __UnhandledWriteablePropertyName =
        | `chapter-list/${number}/${"title" | "time"}`
        | `options/${string}`
        | `file-local-options/${string}`;

    // reserved as it requires template literal
    // TODO: it can be added to __PropertyInfoUnion but I'm lazy now
    // maybe add it only when we decide to get rid of plain es5 support otherwise it's just pointless
    type __UnhandledReadonlyPropertyName =
        | `edition-list/${number}/${"id" | "default" | "title"}`
        | `metadata/by-key/${string}`
        | `metadata/list/${number}/${"key" | "value"}`
        | `metadata/${string}`
        | `${"vf" | "af"}-metadata/${string}`
        | `touch-pos/${number}/${"x" | "y" | "id"}`
        | `tablet-pos/pad-btns/${number}`
        | `playlist/${number}/${"filename" | "playing" | "current" | "title" | "id" | "playlist-path"}`
        | `track-list/${number}/${keyof TrackInfo}`
        | `vo-passes/${"fresh" | "redraw"}/${number}/${
            | "desc"
            | "last"
            | "avg"
            | "peak"
            | "count"
            | `samples/${number}`}`
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
            | "choices"}`;

    /**
     * @see https://mpv.io/manual/stable/#input-command-prefixes
     */
    type CommandPrefix =
        | "osd-auto"
        | "no-osd"
        | "osd-bar"
        | "osd-msg"
        | "osd-msg-bar"
        | "raw"
        | "expand-properties"
        | "repeatable"
        | "nonrepeatable"
        | "nonscalable"
        | "async"
        | "sync";

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

    interface CommandOptsBase {
        /**
         * The special entry `_flags` is optional, and if present, must be an array of Input Command Prefixes to apply.
         */
        _flags?: CommandPrefix[];
    }

    /**
     * NOTE:
     * Commands have their own dedicated arguments as object properties(namely Named Arguments in the doc)
     * `__return` field is a helper field to represent exceptional return type of the command, it has nothing to do with mpv
     */
    /**
     * @see https://mpv.io/manual/stable/#list-of-input-commands
     * run `mpv --input-cmdlist` to get full list of input commands
     */
    // TODO: change `name` to `_name`
    // TODO: move current shape to dedicated `opts` field for command opts, add other properties like `type`, `invocableBy`(to indicate if it support named arguments etc)
    type __CommandInfoUnion =
        | {
            name: "seek";
            /**
             * certain unit(depending on `flags` property) of number to seek
             */
            target: number;
            /**
             * Multiple flags can be combined, e.g.: `absolute+keyframes`.
             *
             * By default, `keyframes` is used for `relative`, `relative-percent`, and `absolute-percent` seeks, while `exact` is used for `absolute` seeks.
             *
             * Before mpv 0.9, the `keyframes` and `exact` flags had to be passed as 3rd parameter (essentially using a space instead of `+`).
             * The 3rd parameter is still parsed, but is considered deprecated.
             */
            flags?:
                | "relative"
                | "absolute"
                | "absolute-percent"
                | "relative-percent"
                | "keyframes"
                | "exact"
                | (string & {});
        }
        | {
            name: "revert-seek";
            flags?: "mark" | "mark-permanent";
        }
        | {
            name: "sub-seek";
            /**
             * For example `1` skips to the next subtitle, `-1` skips to the previous subtitles, and `0` seeks to the beginning of the current subtitle.
             */
            skip: number;
            flags?: "primary" | "secondary";
        }
        | {
            name: "frame-step";
            /**
             *  If `frames` is omitted, the value is assumed to be 1.
             */
            frames?: number;
            flags?: "play" | "seek" | "mute";
        }
        | { name: "frame-back-step" }
        | {
            name: "stop";
            flags?: "keep-playlist";
        }
        | {
            name: "set";
            // <name> conflicts with default base opt `name`, `_name` will be added it future version of mpv to replace `name`
            // TODO: uncomment when `_name` is released
            // name: SetPropertyName
            value: unknown;
        }
        | {
            name: "del";
            // TODO: uncomment when `_name` is released
            // name: string
        }
        | {
            name: "add";
            // TODO: uncomment when `_name` is released
            // name: SetPropertyName
            value?: number;
        }
        | {
            name: "multiply";
            // TODO: uncomment when `_name` is released
            // name: SetPropertyName
            value: number;
        }
        | {
            name: "cycle";
            // TODO: uncomment when `_name` is released
            // name: SetPropertyName
            value?: "up" | "down";
        }
        | {
            name: "change-list";
            // TODO: uncomment when `_name` is released
            // name: string // TODO: not sure about the names of list options
            /**
             * different type of list option may support different set of operations
             *
             * this ts target type is only for the convenience of getting code completions
             *
             * see https://mpv.io/manual/stable/#list-options before appling
             */
            operation:
                | "set"
                | "append"
                | "add"
                | "pre"
                | "clr"
                | "del"
                | "remove"
                | "toggle"
                | "help"
                | (string & {});
            value: string;
        }
        | {
            name: "playlist-next";
            flags?: "weak" | "force";
        }
        | {
            name: "playlist-prev";
            flags?: "weak" | "force";
        }
        | { name: "playlist-next-playlist" }
        | { name: "playlist-prev-playlist" }
        | {
            name: "playlist-play-index";
            /** @see https://mpv.io/manual/stable/#command-interface-playlist-play-index */
            index: number | "current" | "none";
        }
        | {
            name: "loadfile";
            /**
             * file url to load
             */
            url: string;
            flags?:
                | "replace"
                | "append"
                | "append-play"
                | "insert-next"
                | "insert-next-play"
                | "insert-at"
                | "insert-at-play";
            /**
             * insertion index, used only by the `insert-at` and `insert-at-play` actions.
             */
            index?: number;
            /**
             * A list of options and values which should be set while the file is playing.
             *
             * It is of the form `opt1=value1,opt2=value2,...`
             *
             * When using the client API, this can be a `MPV_FORMAT_NODE_MAP` (or a Lua table), however the values themselves must be strings currently.
             */
            options?: string;
        }
        | {
            name: "loadlist";
            /**
             * playlist url to load
             */
            url: string;
            flags?:
                | "replace"
                | "append"
                | "append-play"
                | "insert-next"
                | "insert-next-play"
                | "insert-at"
                | "insert-at-play";

            /**
             *  An insertion index, used only by the `insert-at` and `insert-at-play` actions.
             *
             *  When used with those actions, the new playlist will be inserted at the index position in the internal playlist,
             *  or appended to the end if index is less than 0 or greater than the size of the internal playlist.
             */
            index?: number;
        }
        | {
            name: "playlist-remove";
            index: number;
        }
        | { name: "playlist-clear" }
        | {
            name: "playlist-move";
            /**
             * index move playlist from
             */
            index1: number;
            /**
             * index move playlist to
             */
            index2: number;
        }
        | { name: "playlist-shuffle" }
        | { name: "playlist-unshuffle" }
        | {
            name: "sub-add";
            // url of subtitle
            url: string;
            /**
             * @see https://mpv.io/manual/stable/#command-interface-sub-add[<lang>]]%5d
             */
            flags?: "select" | "auto" | "cached" | (string & {});
            /**
             * track language
             */
            lang?: string;
        }
        | {
            name: "sub-remove";
            id?: number;
        }
        | {
            name: "sub-reload";
            id?: number;
        }
        | {
            name: "sub-step";
            skip: number;
            flags?: "primary" | "secondary";
        }
        | {
            name: "audio-add";
            /**
             * url of audio
             */
            url: string;
            /**
             * see flags for `sub-add`
             */
            flags?: "select" | "auto" | "cached" | (string & {});
            title?: string;
            lang?: string;
        }
        | {
            name: "audio-remove";
            id?: number;
        }
        | {
            name: "audio-reload";
            id?: number;
        }
        | {
            name: "video-add";
            /**
             * url of video
             */
            url: string;
            /**
             * see flags for `sub-add`
             */
            flags?: "select" | "auto" | "cached" | (string & {});
            title?: string;
            lang?: string;
            /**
             * If enabled, mpv will load the given video as album art.
             */
            albumart?: boolean;
        }
        | {
            name: "video-remove";
            id?: number;
        }
        | {
            name: "video-reload";
            id?: number;
        }
        | {
            name: "rescan-external-files";
            mode?: "reselect" | "keep-selection";
        }
        | {
            name: "print-text";
            text: string;
        }
        | {
            name: "expand-text";
            text: string;
            __return: string;
        }
        | {
            name: "expand-path";
            text: string;
            __return: string;
        }
        | {
            name: "normalize-path";
            filename: string;
            __return: string;
        }
        | {
            name: "escape-ass";
            text: string;
            __return: string;
        }
        | {
            name: "apply-profile";
            // TODO: uncomment when `_name` is released
            // name: string
            mode?: "apply" | "restore";
        }
        | {
            name: "load-config-file";
            filename: string;
        }
        | { name: "write-watch-later-config" }
        | {
            name: "delete-watch-later-config";
            filename?: string;
        }
        | {
            name: "show-text";
            text: string;
            /**
             * The time in ms to show the message for. By default, it uses the same value as `--osd-duration`.
             */
            duration?: number;
            /**
             * The minimum OSD level to show the text at (see `--osd-level`).
             * @see https://mpv.io/manual/stable/#options-osd-level
             */
            level?: 0 | 1 | 2 | 3;
        }
        | { name: "show-progress" }
        | {
            name: "overlay-add";
            /**
             * an integer between 0 and 63 identifying the overlay element
             * The ID can be used to add multiple overlay parts, update a part by using this command with an already existing ID,
             * or to remove a part with overlay-remove. Using a previously unused ID will add a new overlay, while reusing an ID will update it.
             */
            id: number;
            x: number;
            y: number;
            /**
             * specifies the file the raw image data is read from.
             *
             * It can be either a numeric UNIX file descriptor prefixed with @ (e.g. @4), or a filename.
             * The file will be mapped into memory with mmap(), copied, and unmapped before the command returns (changed in mpv 0.18.1).
             */
            file: string;
            /**
             * the byte offset of the first pixel in the source file.
             *
             * (The current implementation always mmap's the whole file from position 0 to the end of the image, so large offsets should be avoided. Before mpv 0.8.0, the offset was actually passed directly to mmap, but it was changed to make using it easier.)
             */
            offset: number;
            /**
             * a string identifying the image format. Currently, only bgra is defined.
             */
            fmt: "bgra" | (string & {});
            /**
             * visible width of overlay
             */
            w: number;
            /**
             * visible height of overlay
             */
            h: number;
            /**
             * the width in bytes in memory
             */
            stride: number;
            dw?: number;
            dh?: number;
        }
        | {
            name: "overlay-remove";
            id: number;
        }
        | {
            name: "osd-overlay";
            /**
             * Arbitrary integer that identifies the overlay.
             * Multiple overlays can be added by calling this command with different `id` parameters.
             * Calling this command with the same id replaces the previously set overlay.
             *
             * There is a separate namespace for each libmpv client (i.e. IPC connection, script),
             * so IDs can be made up and assigned by the API user without conflicting with other API users.
             *
             * If the libmpv client is destroyed, all overlays associated with it are also deleted.
             * In particular, connecting via `--input-ipc-server`, adding an overlay, and disconnecting will remove the overlay immediately again.
             */
            id: number;

            /**
             * String that gives the type of the overlay.
             * @see https://mpv.io/manual/stable/#command-interface-format
             */
            format: "ass-events" | "none";
            /**
             * String defining the overlay contents according to the `format` parameter.
             */
            data: string;
            /**
             * Used if `format` is set to `ass-events` (see description there). Optional, defaults to 0
             */
            res_x?: number;
            /**
             * Used if `format` is set to `ass-events` (see description there). Optional, defaults to 720
             */
            res_y?: number;
            /**
             * The Z order of the overlay. Optional, defaults to 0.
             */
            z?: number;
            /**
             * If set to true, do not display this (default: false).
             */
            hidden?: boolean;
            /**
             * If set to true, attempt to determine bounds and write them to the command's result value as x0, x1, y0, y1 rectangle
             */
            compute_bounds?: boolean;
        }
        | {
            name: "mouse";
            x: number;
            y: number;
            /**
             * The button number of clicked mouse button. This should be one of 0-19. If `button` is omitted, only the position will be updated.
             */
            button?: number;
            /**
             * default: single
             */
            mode?: "single" | "double";
        }
        | {
            name: "keypress";
            // TODO: uncomment when `_name` is released
            // name: string
            scale?: number;
        }
        | {
            name: "keydown";
            // TODO: uncomment when `_name` is released
            // name: string
        }
        | {
            name: "keyup";
            // TODO: uncomment when `_name` is released
            // name?: string
        }
        | {
            name: "keybind";
            // TODO: uncomment when `_name` is released
            // name: string
            cmd: string;
            comment?: string;
        }
        | {
            name: "load-input-conf";
            filename: string;
        }
        | {
            name: "quit";
            /**
             * Exit the player. If an argument is given, it's used as process exit code.
             */
            code?: number;
        }
        | {
            name: "quit-watch-later";
            /**
             * Exit player, and store current playback position.
             *
             * Playing that file later will seek to the previous position on start.
             *
             * The (optional) argument is exactly as in the `quit` command.
             */
            code?: number;
        }
        | {
            name: "script-binding";
            // TODO: uncomment when `_name` is released
            // name: string
            arg: string;
        }
        | {
            name: "load-script";
            filename: string;
        }
        | {
            name: "screenshot";
            /**
             * can be combined with `+`, such as `video+each-frame`
             * @see https://mpv.io/manual/stable/#command-interface-screenshot-[<flags>%5d
             */
            flags?: "video" | "scaled" | "subtitles" | "osd" | "window" | "each-frame" | (string & {});
        }
        | {
            name: "screenshot-to-file";
            /**
             * Take a screenshot and save it to a given file.
             * The format of the file will be guessed by the extension (and `--screenshot-format` is ignored - the behavior when the extension is missing or unknown is arbitrary).
             * If the file already exists, it's overwritten.
             */
            filename: string;
            /**
             * can be combined with `+`, such as `video+each-frame`
             * @see https://mpv.io/manual/stable/#command-interface-screenshot-[<flags>%5d
             */
            flags?: "video" | "scaled" | "subtitles" | "osd" | "window" | "each-frame" | (string & {});
        }
        | {
            name: "screenshot-raw";
            /**
             * can be combined with `+`, such as `video+each-frame`
             * @see https://mpv.io/manual/stable/#command-interface-screenshot-[<flags>%5d
             */
            flags?: "video" | "scaled" | "subtitles" | "osd" | "window" | "each-frame" | (string & {});
            format?: "bgr0" | "bgra" | "rgba" | "rgba64";
        }
        | {
            name: "vf";
            /**
             * @see https://mpv.io/manual/stable/#command-interface-vf-<operation>-<value%3e
             * @see https://mpv.io/manual/stable/#video-filters
             */
            operation: "set" | "add" | "toggle" | "remove" | "clr" | (string & {});
            value: unknown;
        }
        | {
            name: "af";
            /** @see https://mpv.io/manual/stable/#command-interface-vf-<operation>-<value%3e */
            operation: "set" | "add" | "toggle";
            value: unknown;
        }
        | {
            name: "vf-command";
            lable: string;
            command: string;
            argument: string;
            target?: string;
        }
        | {
            name: "af-command";
            lable: string;
            command: string;
            argument: string;
            target?: string;
        }
        | { name: "ignore" }
        | { name: "drop-buffers" }
        | {
            name: "dump-cache";
            start: number;
            end: number;
            filename: string;
        }
        | { name: "ab-loop" }
        | {
            name: "ab-loop-dump-cache";
            filename: string;
        }
        | { name: "ab-loop-align-cache" }
        | { name: "begin-vo-dragging" }
        | { name: "context-menu" }
        | {
            name: "subprocess";
            /**
             * Array of strings with the command as first argument, and subsequent command line arguments following.
             *
             * This is just like the `run` command argument list.
             *
             * The first array entry is either an absolute path to the executable, or a filename with no path components, in which case the executable is searched in the directories in the PATH environment variable.
             *
             * On Unix, this is equivalent to posix_spawnp and execvp behavior.
             */
            args: string[];

            /**
             * Boolean indicating whether the process should be killed when playback of the current playlist entry terminates (optional, default: true).
             *
             * If enabled, stopping playback will automatically kill the process, and you can't start it outside of playback.
             */
            playback_only?: boolean;

            /**
             * Integer setting the **maximum number of stdout plus stderr bytes** that can be captured (optional, default: 64MB).
             * If the **number of bytes** exceeds this, capturing is stopped. The limit is per captured stream.
             */
            capture_size?: number;

            /**
             * Capture all data the process outputs to stdout and return it once the process ends (optional, default: no).
             */
            capture_stdout?: boolean;
            /**
             * Capture all data the process outputs to stderr and return it once the process ends (optional, default: no).
             */
            capture_stderr?: boolean;
            /**
             * Whether to run the process in detached mode (optional, default: no).
             *
             * In this mode, the process is run in a new process session, and the command does not wait for the process to terminate.
             *
             * If neither `capture_stdout` nor `capture_stderr` have been set to true, the command returns immediately after the new process has been started, otherwise the command will read as long as the pipes are open.
             */
            detach?: boolean;
            /**
             * Set a list of environment variables for the new process (default: empty).
             *
             * If an empty list is passed, the environment of the mpv process is used instead. (Unlike the underlying OS mechanisms, the mpv command cannot start a process with empty environment. Fortunately, that is completely useless.)
             * The format of the list is as in the `execle()` syscall. Each string item defines an environment variable as in `NAME=VALUE`.
             */
            env?: `${string}=${string}`[];
            /**
             * Feed the given string to the new process' stdin. Since this is a string, you cannot pass arbitrary binary data.
             *
             * If the process terminates or closes the pipe before all data is written, the remaining data is silently discarded.
             *
             * Probably does not work on win32.
             */
            stdin_data?: string;
            /**
             * If enabled, wire the new process' stdin to mpv's stdin (default: no).
             */
            passthrough_stdin?: boolean;
        };
    // *-section commands are deprecated, so not types for them
    // run: { } // `run` command requires variable number of arguments, doesn't support named arguments
    // `subprocess` is a special command that could return variants of result shape so it was handled separately instead

    /**
     * @see https://mpv.io/manual/stable/#command-interface-playlist
     */
    interface PlaylistItem {
        /**
         * Path of the file
         */
        filename: string;

        /**
         * Indicating whether it's the current item
         */
        current?: boolean;

        /**
         * Indicating whether it's playing
         */
        playing?: boolean;

        /**
         * 1-based index of playlist item
         */
        id: number;

        /**
         * Name of the entry.
         * Available if the playlist file contains such fields and mpv's parser supports it for the given playlist format,
         * or if the playlist entry has been opened before and a media-title other than filename has been acquired.
         */
        title?: string;

        /**
         * The original path of the playlist for this entry before mpv expanded it.
         * Unavailable if the file was not originally associated with a playlist in some way.
         */
        "playlist-path"?: "-" | (string & {});
    }

    /**
     * @see https://mpv.io/manual/stable/#command-interface-chapter-list
     */
    interface ChapterListItem {
        /**
         * time-pos in seconds
         */
        time: number;
        /**
         * Title of the chapter
         */
        title: string;
    }

    /**
     * @see https://mpv.io/manual/stable/#command-interface-menu-data
     */
    interface MenuItem {
        type: "separator" | "submenu" | "";
        /**
         * Required if `type` is not "separator"
         */
        title?: string;
        /**
         * mpv command to execute when the menu item is clicked.
         */
        cmd?: string;
        /**
         * Menu item shortcut key which appears to the right of the menu item.
         * A shortcut key does not have to be functional; it's just a visual hint.
         */
        shortcut?: string;
        /**
         * Menu item state. Can be: checked, disabled, hidden, or empty.
         */
        state?: "checked" | "disabled" | "hidden" | "";
        /**
         * Submenu items, which is required if type is "submenu".
         */
        submenu?: MenuItem[];
    }

    /**
     * @see https://mpv.io/manual/stable/#command-interface-edition-list
     */
    interface EditionListItem {
        id: number;
        title: string;
        /**
         * Indicates if this is the default edition for the file
         */
        default: boolean;
    }

    /**
     * @see https://mpv.io/manual/stable/#command-interface-demuxer-cache-state
     */
    interface DemuxerCacheState {
        /**
         * Each entry in seekable-ranges represents a region in the demuxer cache that can be seeked to, with a `start` and `end` fields containing the respective timestamps.
         */
        "seekable-ranges": { start: number; end: number }[];
        /**
         * Indicates whether the seek range with the lowest timestamp points to the beginning of the stream (BOF).
         * This implies you cannot seek before this position at all.
         */
        "bof-cached": boolean;
        /**
         * Indicates whether the seek range with the highest timestamp points to the end of the stream (EOF).
         */
        "eof-cached": boolean;
        /**
         * The number of bytes of packets buffered in the range starting from the current decoding position.
         * This is a rough estimate (may not account correctly for various overhead), and stops at the demuxer position (it ignores seek ranges after it).
         */
        "fw-bytes": number;
        /**
         * The number of bytes stored in the file cache.
         * This includes all overhead, and possibly unused data (like pruned data).
         * This member is missing if the file cache wasn't enabled with `--cache-on-disk=yes`.
         */
        "file-cache-bytes"?: number;
        /**
         * Equivalent to `demuxer-cache-time` property
         */
        "cache-end"?: number;
        /**
         * The approximate timestamp of the start of the buffered range.
         */
        "reader-pts"?: number;
        /**
         * The estimated input rate of the network layer (or any other byte-oriented input layer) in bytes per second.
         * May be inaccurate or missing.
         */
        "raw-input-rate"?: number;
        "ts-per-stream": {
            type: "audio" | "video" | "subtitle";
            "reader-pts"?: number;
            "cache-end"?: number;
            "cache-duration"?: number;
        };
        /**
         * Whether the reader thread has hit the end of the file.
         */
        eof: boolean;
        /**
         * Whether the reader thread could not satisfy a decoder's request for a new packet.
         */
        underrun: boolean;
        /**
         * Whether the thread is currently not reading.
         */
        idle: boolean;
        /**
         * Sum of packet bytes (plus some overhead estimation) of the entire packet queue, including cached seekable ranges.
         */
        "total-bytes": number;
    }

    /**
     * @see https://mpv.io/manual/stable/#command-interface-audio-params
     */
    interface AudioParam {
        /**
         * Number of audio channels.
         * This is redundant to the `channels` field.
         */
        "channel-count": number;
        /**
         * The channel layout as a string.
         * This is similar to what the `--audio-channels` accepts.
         */
        channels: string;
        /**
         * The sample format as string.
         * This uses the same names as used in other places of mpv.
         */
        format: string;
        /**
         * As channels, but instead of the possibly cryptic actual layout sent to the audio device
         */
        "hr-channels": string;
        samplerate: number;
    }

    /**
     * @see https://mpv.io/manual/stable/#command-interface-video-params
     */
    interface VideoParam {
        /**
         * The pixel format as string. This uses the same names as used in other places of mpv.
         */
        pixelformat: string;
        /**
         * The underlying pixel format as string. This is relevant for some cases of hardware decoding and unavailable otherwise.
         */
        "hw-pixelformat": string;
        /**
         * Video width as integers, with no aspect correction applied.
         */
        w: number;
        /**
         * Video height as integers, with no aspect correction applied.
         */
        h: number;
        /**
         * Video width as integers, scaled for correct aspect ratio.
         */
        dw: number;
        /**
         * Video height as integers, scaled for correct aspect ratio.
         */
        dh: number;
        /**
         * Crop offset of the source video frame.
         */
        "crop-x": number;
        /**
         * Crop offset of the source video frame.
         */
        "crop-y": number;
        /**
         * Video size after cropping.
         */
        "crop-w": number;
        /**
         * Video size after cropping.
         */
        "crop-h": number;
        /**
         * Display aspect ratio as double.
         */
        aspect: number;
        /**
         * Display aspect ratio name as string.
         * The name corresponds to motion picture film format that introduced given aspect ratio in film.
         */
        "aspect-name"?: string;
        /**
         * Pixel aspect ratio.
         */
        par: number;
        /**
         * Storage aspect ratio.
         */
        sar: number;
        /**
         * Storage aspect ratio name as string.
         */
        "sar-name"?: string;
        /**
         * The colormatrix in use as string. (Exact values subject to change.)
         */
        colormatrix: string;
        /**
         * The colorlevels as string. (Exact values subject to change.)
         */
        colorlevels: string;
        /**
         * The primaries in use as string. (Exact values subject to change.)
         */
        primaries: string;
        /**
         * The gamma function in use as string. (Exact values subject to change.)
         */
        gamma: string;
        /**
         * The video file's tagged signal peak as float.
         */
        "sig-peak": number;
        /**
         * The light type in use as a string. (Exact values subject to change.)
         */
        light: string;
        /**
         * Chroma location as string. (Exact values subject to change.)
         */
        "chroma-location": string;
        /**
         * Intended display rotation in degrees (clockwise).
         */
        "rotate": number;
        /**
         * Source file stereo 3D mode. (See the format video filter's stereo-in option.)
         */
        "stereo-in": string;
        /**
         * Average bits-per-pixel as integer.
         * Subsampled planar formats use a different resolution, which is the reason this value can sometimes be odd or confusing. Can be unavailable with some formats.
         */
        "average-bpp": number;
        /**
         * Alpha type. If the format has no alpha channel, this will be unavailable (but in future releases, it could change to no).
         * If alpha is present, this is set to straight or premul.
         */
        alpha: string;
        /**
         * Minimum luminance, as reported by HDR10 metadata (in cd/m²)
         */
        "min-luma": number;
        /**
         * Maximum luminance, as reported by HDR10 metadata (in cd/m²)
         */
        "max-luma": number;
        /**
         * Maximum content light level, as reported by HDR10 metadata (in cd/m²)
         */
        "max-cll": number;
        /**
         * Maximum frame average light level, as reported by HDR10 metadata (in cd/m²)
         */
        "max-fall": number;
        /**
         * MaxRGB of a scene for R component, as reported by HDR10+ metadata (in cd/m²)
         */
        "scene-max-r": number;
        /**
         * MaxRGB of a scene for G component, as reported by HDR10+ metadata (in cd/m²)
         */
        "scene-max-g": number;
        /**
         * MaxRGB of a scene for B component, as reported by HDR10+ metadata (in cd/m²)
         */
        "scene-max-b": number;
        /**
         * Maximum PQ luminance of a frame, as reported by peak detection (in PQ, 0-1)
         */
        "max-pq-y": number;
        /**
         * Average PQ luminance of a frame, as reported by peak detection (in PQ, 0-1)
         */
        "avg-pq-y": number;
        /**
         * Red primary chromaticity coordinates, available only if differs from `video-params/primaries`
         */
        "prim-red-x": number;
        /**
         * Red primary chromaticity coordinates, available only if differs from `video-params/primaries`
         */
        "prim-red-y": number;
        /**
         * Green primary chromaticity coordinates, available only if differs from `video-params/primaries`
         */
        "prim-green-x": number;
        /**
         * Green primary chromaticity coordinates, available only if differs from `video-params/primaries`
         */
        "prim-green-y": number;
        /**
         * Blue primary chromaticity coordinates, available only if differs from `video-params/primaries`
         */
        "prim-blue-x": number;
        /**
         * Blue primary chromaticity coordinates, available only if differs from `video-params/primaries`
         */
        "prim-blue-y": number;
        /**
         * White primary chromaticity coordinates, available only if differs from `video-params/primaries`
         */
        "prim-white-x": number;
        /**
         * White primary chromaticity coordinates, available only if differs from `video-params/primaries`
         */
        "prim-white-y": number;
    }

    /**
     * @see https://mpv.io/manual/stable/#command-interface-video-frame-info
     */
    interface VideoFrameInfo {
        /**
         * The type of the picture. It can be "I" (intra), "P" (predicted), "B" (bi-dir predicted) or unavailable.
         */
        "picture-type"?: "I" | "P" | "B";
        /**
         * Whether the content of the frame is interlaced.
         */
        interlaced: boolean;
        /**
         * If the content is interlaced, whether the top field is displayed first.
         */
        tff: boolean;
        /**
         * Whether the frame must be delayed when decoding.
         */
        repeat: boolean;
        /**
         * String with the GOP timecode encoded in the frame.
         */
        "gop-timecode"?: string;
        /**
         * String with the SMPTE timecode encoded in the frame.
         */
        "smpte-timecode"?: string;
        /**
         * Estimated timecode based on the current playback position and frame count.
         */
        "estimated-smpte-timecode": string;
    }

    /**
     * @see https://mpv.io/manual/stable/#command-interface-osd-dimensions
     */
    interface OSDDimensions {
        /**
         * Size of the VO window in OSD render units (usually pixels, but may be scaled pixels with VOs like xv).
         */
        w: number;
        /**
         * Size of the VO window in OSD render units
         */
        h: number;
        /**
         * Pixel aspect ratio of the OSD (usually 1).
         */
        par: number;
        /**
         * Display aspect ratio of the VO window. (Computing from the properties above.)
         */
        aspect: number;
        /**
         * OSD to video margins top. This describes the area into which the video is rendered.
         */
        mt: number;
        /**
         * OSD to video margins bottom. This describes the area into which the video is rendered.
         */
        mb: number;
        /**
         * OSD to video margins left. This describes the area into which the video is rendered.
         */
        ml: number;
        /**
         * OSD to video margins right. This describes the area into which the video is rendered.
         */
        mr: number;
    }

    /**
     * @see https://mpv.io/manual/stable/#command-interface-tablet-pos
     */
    interface TabletPosInfo {
        /**
         * Last known coordinates of the tablet tool.
         */
        x: number;
        /**
         * Last known coordinates of the tablet tool.
         */
        y: number;
        /**
         * Whether a tablet tool is currently in proximity of the tablet surface/hovers above the tablet surface.
         */
        "tool-in-proximity": boolean;
        /**
         * The state of the tablet tool tip, "up" or "down".
         */
        "tool-tip": "up" | "down";
        /**
         * The state of tablet tool side buttons, "pressed" or "released".
         */
        "tool-stylus-btn1": "pressed" | "released";
        /**
         * The state of tablet tool side buttons, "pressed" or "released".
         */
        "tool-stylus-btn2": "pressed" | "released";
        /**
         * The state of tablet tool side buttons, "pressed" or "released".
         */
        "tool-stylus-btn3": "pressed" | "released";
        /**
         *  Whether a tablet pad is currently focused.
         */
        "pad-focus": boolean;
        "pad-btns": {};
    }

    /**
     * @see https://mpv.io/manual/stable/#command-interface-track-list
     */
    interface TrackInfo {
        /**
         * The ID as it's used for --sid/--aid/--vid.
         * This is unique within tracks of the same type (sub/audio/video), but otherwise not.
         */
        id: number;
        /**
         * String describing the media type. One of "audio", "video", "sub".
         */
        type: "audio" | "video" | "sub";
        /**
         * Track ID as used in the source file.
         * It is missing if the format has no native ID, if the track is a pseudo-track that does not exist in this way in the actual file,
         * or if the format is handled by "libavformat", and the format was not whitelisted as having track IDs.
         */
        "src-id"?: number;
        /**
         * Track title as it is stored in the file. Not always available.
         */
        title?: string;
        /**
         * Track language as identified by the file. Not always available.
         */
        lang?: string;
        /**
         * True if this is a video track that consists of a single picture, false or unavailable otherwise.
         * The heuristic used to determine if a stream is an image doesn't attempt to detect images in codecs normally used for videos.
         * Otherwise, it is reliable.
         */
        image?: boolean;
        /**
         * True if this is an image embedded in an audio file or external cover art, false or unavailable otherwise.
         */
        albumart?: boolean;
        /**
         * True if the track has the default flag set in the file, false or unavailable otherwise.
         */
        default?: boolean;
        /**
         * True if the track has the forced flag set in the file, false or unavailable otherwise.
         */
        forced: boolean;
        /**
         * True if the track has the dependent flag set in the file, false or unavailable otherwise.
         */
        dependent?: boolean;
        /**
         * True if the track has the visual impaired flag set in the file, false or unavailable otherwise.
         */
        "visual-impaired"?: boolean;
        /**
         * True if the track has the hearing impaired flag set in the file, false or unavailable otherwise.
         */
        "hearing-impaired"?: boolean;
        /**
         * The bitrate of the HLS stream, if available.
         */
        "hls-bitrate"?: number;
        /**
         * The program ID of the HLS stream, if available.
         */
        "program-id"?: number;
        /**
         * True if the track is currently decoded, false or unavailable otherwise.
         */
        selected?: boolean;
        /**
         * It indicates the selection order of tracks for the same type.
         * If a track is not selected, or is selected by the `--lavfi-complex`, it is not available.
         * For subtitle tracks, 0 represents the sid, and 1 represents the secondary-sid.
         */
        "main-selection"?: number;
        /**
         * True if the track is an external file, false or unavailable otherwise. This is set for separate subtitle files.
         */
        external?: boolean;
        /**
         * The filename if the track is from an external file, unavailable otherwise.
         */
        "external-filename"?: string;
        /**
         * The codec name used by this track, for example h264. Unavailable in some rare cases.
         */
        codec: string;
        /**
         * The codec descriptive name used by this track.
         */
        "codec-desc": string;
        /**
         * The codec profile used by this track.
         * Available only if the track has been already decoded.
         */
        "codec-profile"?: string;
        /**
         * The stream index as usually used by the FFmpeg utilities.
         * Note that this can be potentially wrong if a demuxer other than "libavformat" (`--demuxer=lavf`) is used.
         * For mkv files, the index will usually match even if the default (builtin) demuxer is used, but there is no hard guarantee.
         */
        "ff-index": number;
        /**
         * If this track is being decoded, the short decoder name,
         */
        "decoder"?: string;
        /**
         * If this track is being decoded, the human-readable decoder name,
         */
        "decoder-desc"?: string;
        /**
         * Video width hint as indicated by the container. (Not always accurate.)
         */
        "demux-w": number;
        /**
         * Video height hint as indicated by the container. (Not always accurate.)
         */
        "demux-h": number;
        /**
         * Crop offset x of the source video frame.
         */
        "demux-crop-x": number;
        /**
         * Crop offset y of the source video frame.
         */
        "demux-crop-y": number;
        /**
         * Video width after cropping.
         */
        "demux-crop-w": number;
        /**
         * Video height after cropping.
         */
        "demux-crop-h": number;
        /**
         * Number of audio channels as indicated by the container.
         * (Not always accurate - in particular, the track could be decoded as a different number of channels.)
         */
        "demux-channel-count": number;
        /**
         * Channel layout as indicated by the container. (Not always accurate.)
         */
        "demux-channels": string;
        /**
         * Audio sample rate as indicated by the container. (Not always accurate.)
         */
        "demux-samplerate": number;
        /**
         * Video FPS as indicated by the container. (Not always accurate.)
         */
        "demux-fps": number;
        /**
         * Audio average bitrate, in bits per second. (Not always accurate.)
         */
        "demux-bitrate": number;
        /**
         * Video clockwise rotation metadata, in degrees.
         */
        "demux-rotation": number;
        /**
         * Pixel aspect ratio.
         */
        "demux-par": number;
        /**
         * Short name for format from ffmpeg.
         * If the track is audio, this will be the name of the sample format. If the track is video, this will be the name of the pixel format.
         */
        "format-name": string;
        /**
         * @deprecated Deprecated alias for `demux-channel-count`.
         */
        "audio-channels": number;
        /**
         * Per-track replaygain values.
         * Only available for audio tracks with corresponding information stored in the source file.
         */
        "replaygain-track-peak"?: number;
        /**
         * Per-track replaygain values.
         * Only available for audio tracks with corresponding information stored in the source file.
         */
        "replaygain-track-gain"?: number;
        /**
         * Per-album replaygain values.
         * If the file has per-track but no per-album information, the per-album values will be copied from the per-track values currently.
         * It's possible that future mpv versions will make these properties unavailable instead in this case.
         */
        "replaygain-album-peak"?: number;
        /**
         * Per-album replaygain values.
         * If the file has per-track but no per-album information, the per-album values will be copied from the per-track values currently.
         * It's possible that future mpv versions will make these properties unavailable instead in this case.
         */
        "replaygain-album-gain"?: number;
        /**
         * Dolby Vision profile.
         * May not be available if the container does not provide this information.
         */
        "dolby-vision-profile"?: number;
        /**
         * Dolby Vision level.
         * May not be available if the container does not provide this information.
         */
        "dolby-vision-level": number;
        /**
         * Works like the metadata property, but it accesses metadata that is set per track/stream instead of global values for the entire file.
         */
        metadata: Record<string, string>;
    }

    interface VOPass {
        /**
         * Human-friendy description of the pass.
         */
        desc: string;
        /**
         * Last measured execution time, in nanoseconds.
         */
        last: number;
        /**
         * Average execution time of this pass, in nanoseconds. The exact timeframe varies, but it should generally be a handful of seconds.
         */
        avg: number;
        /**
         * The peak execution time (highest value) within this averaging range, in nanoseconds.
         */
        peak: number;
        /**
         * The number of samples for this pass.
         */
        count: number;
        /**
         * The raw execution time of a specific sample for this pass, in nanoseconds.
         */
        samples: number[];
    }

    interface CommandInfo {
        /**
         * The name of the command.
         */
        name: string;
        /**
         * Whether the command accepts a variable number of arguments.
         */
        vararg: boolean;
        args: {
            name: CommandName | (string & {});
            /**
             * The name of the argument type, like "String" or "Integer".
             */
            type: // values observed from mp.get_property_native('command-list')
                | "Time"
                | "Flags"
                | "Choice"
                | "Integer"
                | "String"
                | "Flag"
                | "Key/value list"
                | "String list"
                | "ByteSize"
                | "Double"
                | "up|down"
                | "Integer64"
                | (string & {});
            /**
             * Whether the argument is optional.
             */
            optional: boolean;
        }[];
    }

    interface InputBindingInfo {
        /**
         * The key name. This is normalized and may look slightly different from how it was specified in the source (e.g. in input.conf).
         */
        key: string;
        /**
         * The command mapped to the key.
         * (Currently, this is exactly the same string as specified in the source, other than stripping whitespace and comments.
         * It's possible that it will be normalized in the future.)
         */
        cmd: string;
        /**
         * If set to true, any existing and active user bindings will take priority.
         */
        is_weak: boolean;
        /**
         * If this entry exists, the name of the script (or similar) which added this binding.
         */
        owner?: string;
        /**
         * A number. Bindings with a higher value are preferred over bindings with a lower value.
         * If the value is negative, this binding is inactive and will not be triggered by input.
         * Note that mpv does not use this value internally, and matching of bindings may work slightly differently in some cases.
         * In addition, this value is dynamic and can change around at runtime.
         */
        priority: number;
        /**
         * Name of the section this binding is part of. This is a rarely used mechanism.
         * This entry may be removed or change meaning in the future.
         */
        section: string;
        /**
         * If available, the comment following the command on the same line.
         * For example, the input.conf entry `f cycle bla # toggle bla` would result in an entry with `comment = "toggle bla", cmd = "cycle bla"`.
         */
        comment?: string;
    }

    // use property `name` as discriminator
    type __PropertyInfoUnion =
        | {
            name: "time-pos";
            type: number | undefined;
            osd_type: `${number}:${number}:${number}` | undefined;
            readonly: false;
        }
        | {
            name: "time-pos/full";
            type: number | undefined;
            osd_type: `${number}:${number}:${number}.${number}` | undefined;
            readonly: false;
        }
        | {
            name: "percent-pos";
            type: number | undefined;
            readonly: false;
        }
        | {
            name: "playback-time";
            type: number | undefined;
            osd_type: `${number}:${number}:${number}` | undefined;
            readonly: false;
        }
        | {
            name: "playback-time/full";
            type: number | undefined;
            osd_type: `${number}:${number}:${number}.${number}` | undefined;
            readonly: false;
        }
        | {
            name: "chapter";
            type: number | undefined;
            osd_type: `(${number}) ${string}` | undefined;
            readonly: false;
        }
        | {
            name: "edition";
            type: number | undefined;
            readonly: false;
        }
        | {
            name: "ao-volume";
            type: number | undefined;
            readonly: false;
        }
        | {
            name: "ao-mute";
            type: boolean | undefined;
            readonly: false;
        }
        | {
            name: "hwdec";
            type: boolean;
            readonly: false;
        }
        | {
            name: "current-window-scale";
            type: number | undefined; // undefined when video stream is absent
            readonly: false;
        }
        | {
            name: "playlist-pos";
            type: number;
            readonly: false;
        }
        | {
            name: "playlist-pos-1";
            type: number;
            readonly: false;
        }
        | {
            name: "playlist-current-pos";
            type: number;
            readonly: false;
        }
        | {
            name: "chapter-list";
            type: ChapterListItem[];
            readonly: false;
        }
        | {
            name: "chapter-list/count";
            type: number;
            readonly: false;
        }
        | {
            name: "af";
            type: string[];
            readonly: false;
        }
        | {
            name: "vf";
            type: string[];
            readonly: false;
        }
        | {
            name: "cursor-autohide"; // see --cursor-autohide
            type: "no" | "always" | number;
            readonly: false;
        }
        | {
            name: "audio-device";
            type: string;
            readonly: false;
        }
        | {
            name: "user-data";
            type: unknown;
            readonly: false;
        }
        | {
            name: "user-data/osc/margins";
            type: { l: number; r: number; t: number; b: number };
            readonly: false;
        }
        | {
            name: "user-data/mpv/ytdl/path";
            type: string | undefined;
            readonly: false;
        }
        | {
            name: "user-data/mpv/ytdl/json-subprocess-result";
            type: SubprocessResultWithStd | undefined;
            readonly: false;
        }
        | {
            name: "user-data/mpv/console/open";
            type: boolean | undefined;
            readonly: false;
        }
        | {
            name: "menu-data";
            type: MenuItem[];
            readonly: false;
        }
        | {
            name: "audio-speed-correction";
            type: number;
            readonly: true;
        }
        | {
            name: "video-speed-correction";
            type: number;
            readonly: true;
        }
        | {
            name: "display-sync-active";
            type: boolean;
            readonly: true;
        }
        | {
            name: "filename";
            type: string | undefined;
            readonly: true;
        }
        | {
            name: "filename/no-ext";
            type: string | undefined;
            readonly: true;
        }
        | {
            name: "file-size";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "estimated-frame-count";
            type: number | undefined; // undefined if video stream is absent
            readonly: true;
        }
        | {
            name: "estimated-frame-number";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "pid";
            type: number;
            readonly: true;
        }
        | {
            name: "path";
            type: string | undefined;
            readonly: true;
        }
        | {
            name: "stream-open-filename";
            type: string | number;
            readonly: true;
        }
        | {
            name: "media-title";
            type: string | undefined;
            readonly: true;
        }
        | {
            name: "file-format";
            type: string | undefined;
            readonly: true;
        }
        | {
            name: "current-demuxer";
            type: string;
            readonly: true;
        }
        | {
            name: "stream-path";
            type: string | undefined;
            readonly: true;
        }
        | {
            name: "stream-pos";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "stream-end";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "duration";
            type: number | undefined;
            osd_type: `${number}:${number}:${number}` | undefined;
            readonly: true;
        }
        | {
            name: "duration/full";
            type: number | undefined;
            osd_type: `${number}:${number}:${number}.${number}` | undefined;
            readonly: true;
        }
        | {
            name: "avsync";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "total-avsync-change";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "decoder-frame-drop-count";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "frame-drop-count";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "mistimed-frame-count";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "vsync-ratio";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "vo-delayed-frame-count";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "time-start";
            type: 0;
            osd_type: "00:00:00";
            readonly: true;
        }
        | {
            name: "time-remaining";
            type: number | undefined;
            osd_type: `${number}:${number}:${number}` | undefined;
            readonly: true;
        }
        | {
            name: "time-remaining/full";
            type: number | undefined;
            osd_type: `${number}:${number}:${number}.${number}` | undefined;
            readonly: true;
        }
        | {
            name: "audio-pts";
            type: number | undefined;
            osd_type: `${number}:${number}:${number}` | undefined;
            readonly: true;
        }
        | {
            name: "audio-pts/full";
            type: number | undefined;
            osd_type: `${number}:${number}:${number}.${number}` | undefined;
            readonly: true;
        }
        | {
            name: "playtime-remaining";
            type: number | undefined;
            osd_type: `${number}:${number}:${number}` | undefined;
            readonly: true;
        }
        | {
            name: "playtime-remaining/full";
            type: number | undefined;
            osd_type: `${number}:${number}:${number}.${number}` | undefined;
            readonly: true;
        }
        | {
            name: "current-edition";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "chapters";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "editions";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "edition-list";
            type: EditionListItem[] | undefined;
            readonly: true;
        }
        | {
            name: "edition-list/count";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "metadata";
            type: Record<string, string> | undefined;
            readonly: true;
        }
        | {
            name: "metadata/list/count";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "filtered-metadata";
            type: Record<string, string> | undefined;
            readonly: true;
        }
        | {
            name: "chapter-metadata";
            type: Record<"title" | (string & {}), string> | undefined;
            readonly: true;
        }
        | {
            name: "deinterlace-active";
            type: boolean | undefined;
            readonly: true;
        }
        | {
            name: "idle-active";
            type: boolean;
            readonly: true;
        }
        | {
            name: "core-idle";
            type: boolean;
            readonly: true;
        }
        | {
            name: "cache-speed";
            type: number;
            readonly: true;
        }
        | {
            name: "demuxer-cache-duration";
            type: number;
            readonly: true;
        }
        | {
            name: "demuxer-cache-time";
            type: number;
            readonly: true;
        }
        | {
            name: "demuxer-cache-idle";
            type: boolean;
            readonly: true;
        }
        | {
            name: "demuxer-cache-state";
            type: DemuxerCacheState | undefined;
            readonly: true;
        }
        | {
            name: "demuxer-via-network";
            type: boolean;
            readonly: true;
        }
        | {
            name: "demuxer-start-time";
            type: number;
            readonly: true;
        }
        | {
            name: "paused-for-cache";
            type: boolean;
            readonly: true;
        }
        | {
            name: "cache-buffering-state";
            type: number;
            readonly: true;
        }
        | {
            name: "eof-reached";
            type: boolean;
            readonly: true;
        }
        | {
            name: "seeking";
            type: boolean;
            readonly: true;
        }
        | {
            name: "mixer-active";
            type: boolean;
            readonly: true;
        }
        | {
            name: "audio-params";
            type: AudioParam | undefined;
            readonly: true;
        }
        | __PropertyInfoFromType<"audio-params", AudioParam>
        | {
            name: "audio-out-params";
            type: AudioParam | undefined;
            readonly: true;
        }
        | {
            name: "colormatrix";
            type: string | undefined;
            readonly: true;
        }
        | {
            name: "colormatrix-input-range";
            type: string | undefined;
            readonly: true;
        }
        | {
            name: "colormatrix-primaries";
            type: string | undefined;
            readonly: true;
        }
        | {
            name: "hwdec-current";
            type: string | undefined;
            readonly: true;
        }
        | {
            name: "hwdec-interop";
            type: string | undefined;
            readonly: true;
        }
        | {
            name: "width";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "height";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "video-params";
            type: VideoParam | undefined;
            readonly: true;
        }
        | __PropertyInfoFromType<"video-params", VideoParam>
        | {
            name: "dwidth";
            type: number;
            readonly: true;
        }
        | {
            name: "dheight";
            type: number;
            readonly: true;
        }
        | {
            name: "video-dec-params";
            type: VideoParam | undefined;
            readonly: true;
        }
        | __PropertyInfoFromType<"video-dec-params", VideoParam>
        | {
            name: "video-out-params";
            type: VideoParam | undefined;
            readonly: true;
        }
        | __PropertyInfoFromType<"video-out-params", VideoParam>
        | {
            name: "video-target-params";
            type: VideoParam | undefined;
            readonly: true;
        }
        | __PropertyInfoFromType<"video-target-params", VideoParam>
        | {
            name: "video-frame-info";
            type: VideoFrameInfo | undefined;
            readonly: true;
        }
        | __PropertyInfoFromType<"video-frame-info", VideoFrameInfo>
        | {
            name: "container-fps";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "estimated-vf-fps";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "focused";
            type: boolean;
            readonly: true;
        }
        | {
            name: "ambient-light";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "display-names";
            type: string[];
            readonly: true;
        }
        | {
            name: "display-fps";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "estimated-display-fps";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "vsync-jitter";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "display-width";
            type: number;
            readonly: true;
        }
        | {
            name: "display-height";
            type: number;
            readonly: true;
        }
        | {
            name: "display-hidpi-scale";
            type: number;
            readonly: true;
        }
        | {
            name: "osd-width";
            type: number;
            readonly: true;
        }
        | {
            name: "osd-height";
            type: number;
            readonly: true;
        }
        | {
            name: "osd-par";
            type: number;
            readonly: true;
        }
        | {
            name: "osd-dimensions";
            type: OSDDimensions;
            readonly: true;
        }
        | __PropertyInfoFromType<"osd-dimensions", OSDDimensions>
        | {
            name: "term-size";
            type: { w: number; h: number };
            readonly: true;
        }
        | __PropertyInfoFromType<"term-size", { w: number; h: number }>
        | {
            name: "window-id";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "display-swapchain";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "mouse-pos";
            type: { x: number; y: number; hover: boolean };
            readonly: true;
        }
        | __PropertyInfoFromType<"mouse-pos", { x: number; y: number; hover: boolean }>
        | {
            name: "touch-pos";
            type: { id: number; x: number; y: number }[];
            readonly: true;
        }
        | {
            name: "touch-pos/count";
            type: number;
            readonly: true;
        }
        | {
            name: "tablet-pos";
            type: TabletPosInfo;
            readonly: true;
        }
        | __PropertyInfoFromType<"tablet-pos", TabletPosInfo>
        | {
            name: "sub-ass-extradata";
            type: string | undefined;
            readonly: true;
        }
        | {
            name: "sub-text";
            type: string | undefined;
            readonly: true;
        }
        | {
            name: "sub-text/ass";
            type: string | undefined;
            readonly: true;
        }
        | {
            name: "sub-text/ass-full";
            type: string | undefined;
            readonly: true;
        }
        | {
            name: "secondary-sub-text";
            type: string | undefined;
            readonly: true;
        }
        | {
            name: "sub-start";
            type: number | undefined;
            osd_type: `${number}:${number}:${number}` | undefined;
            readonly: true;
        }
        | {
            name: "sub-start/full";
            type: number | undefined;
            osd_type: `${number}:${number}:${number}.${number}` | undefined;
            readonly: true;
        }
        | {
            name: "secondary-sub-start";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "sub-end";
            type: number | undefined;
            osd_type: `${number}:${number}:${number}` | undefined;
            readonly: true;
        }
        | {
            name: "sub-end/full";
            type: number | undefined;
            osd_type: `${number}:${number}:${number}.${number}` | undefined;
            readonly: true;
        }
        | {
            name: "secondary-sub-end";
            type: number | undefined;
            osd_type: `${number}:${number}:${number}` | undefined;
            readonly: true;
        }
        | {
            name: "playlist-playing-pos";
            type: number;
            readonly: true;
        }
        | {
            name: "playlist-count";
            type: number;
            readonly: true;
        }
        | {
            name: "playlist-path";
            type: "-" | (string & {}) | undefined;
            readonly: true;
        }
        | {
            name: "playlist";
            type: PlaylistItem[];
            readonly: true;
        }
        | {
            name: "playlist/count";
            type: number;
            readonly: true;
        }
        | {
            name: "track-list";
            type: TrackInfo[];
            readonly: true;
        }
        | {
            name: "track-list/count";
            type: number;
            readonly: true;
        }
        | {
            name: "current-tracks/video";
            type: TrackInfo | undefined;
            readonly: true;
        }
        | __PropertyInfoFromType<"current-tracks/video", TrackInfo>
        | {
            name: "current-tracks/audio";
            type: TrackInfo | undefined;
            readonly: true;
        }
        | __PropertyInfoFromType<"current-tracks/audio", TrackInfo>
        | {
            name: "current-tracks/sub";
            type: TrackInfo | undefined;
            readonly: true;
        }
        | __PropertyInfoFromType<"current-tracks/sub", TrackInfo>
        | {
            name: "current-tracks/sub2";
            type: TrackInfo | undefined;
            readonly: true;
        }
        | __PropertyInfoFromType<"current-tracks/sub2", TrackInfo>
        | {
            name: "seekable";
            type: boolean | undefined;
            readonly: true;
        }
        | {
            name: "partially-seekable";
            type: boolean | undefined;
            readonly: true;
        }
        | {
            name: "playback-abort";
            type: boolean;
            readonly: true;
        }
        | {
            name: "term-clip-cc";
            type: string;
            readonly: true;
        }
        | {
            name: "osd-sym-cc";
            type: string;
            readonly: true;
        }
        | {
            name: "osd-ass-cc";
            type: string;
            readonly: true;
        }
        | {
            name: "vo-configured";
            type: boolean;
            readonly: true;
        }
        | {
            name: "vo-passes";
            type: { redraw: VOPass[]; fresh: VOPass[] };
            readonly: true;
        }
        | {
            name: "vo-passes/redraw";
            type: VOPass[];
            readonly: true;
        }
        | {
            name: "vo-passes/redraw/count";
            type: number;
            readonly: true;
        }
        | {
            name: "vo-passes/fresh";
            type: VOPass[];
            readonly: true;
        }
        | {
            name: "vo-passes/fresh/count";
            type: number;
            readonly: true;
        }
        | {
            name: "video-bitrate";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "audio-bitrate";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "sub-bitrate";
            type: number | undefined;
            readonly: true;
        }
        | {
            name: "audio-device-list";
            type: { name: "auto" | (string & {}); description: string }[];
            readonly: true;
        }
        | {
            name: "current-vo";
            type: string;
            readonly: true;
        }
        | {
            name: "current-gpu-context";
            type: string;
            readonly: true;
        }
        | {
            name: "current-ao";
            type: string;
            readonly: true;
        }
        | {
            name: "working-directory";
            type: string;
            readonly: true;
        }
        | {
            name: "current-watch-later-dir";
            type: string;
            readonly: true;
        }
        | {
            name: "protocol-list";
            type: string[];
            readonly: true;
        }
        | {
            name: "decoder-list";
            type: { codec: string; driver: string; description: string }[];
            readonly: true;
        }
        | {
            name: "encoder-list";
            type: { codec: string; driver: string; description: string }[];
            readonly: true;
        }
        | {
            name: "demuxer-lavf-list";
            type: string[];
            readonly: true;
        }
        | {
            name: "input-key-list";
            type: string[];
            readonly: true;
        }
        | {
            name: "mpv-version";
            type: string;
            readonly: true;
        }
        | {
            name: "mpv-configuration";
            type: string;
            readonly: true;
        }
        | {
            name: "ffmpeg-version";
            type: string | undefined;
            readonly: true;
        }
        | {
            name: "libass-version";
            type: string;
            readonly: true;
        }
        | {
            name: "platform";
            type: "windows" | "linux" | "darwin" | "android" | "freebsd" | (string & {});
            readonly: true;
        }
        | {
            name: "property-list";
            type: string[];
            readonly: true;
        }
        | {
            name: "profile-list";
            type: { name: string; options: { key: string; value: string }[] }[];
            readonly: true;
        }
        | {
            name: "command-list";
            type: CommandInfo[];
            readonly: true;
        }
        | {
            name: "input-bindings";
            type: InputBindingInfo[];
            readonly: true;
        }
        | {
            name: "clipboard";
            type: { text: string; "text-primary": string };
            readonly: false;
        }
        | __PropertyInfoFromType<"clipboard", { text: string; "text-primary": string }, false, false>
        | {
            name: "current-clipboard-backend";
            type: "win32" | "mac" | "x11" | "wayland" | "vo";
            readonly: true;
        }
        | {
            name: "clock";
            type: string;
            readonly: true;
        };

    /**
     * @template TPrefix Name of super property
     * @template TSuper The type of the super property
     * @template TReadonly Whether the super property is readonly
     * @template TOptional Whether the super property is possibly undefined
     */
    // some sub-properties are just properties of its main-property type
    type __PropertyInfoFromType<
        TPrefix extends string, // super property name e.g. "video-params"
        TSuper extends {}, // the super property type e.g. mp.VideoParam for "video-params/" property
        TReadonly extends boolean = true, // if the super property is readonly its sub-properties should be readonly as well
        TOptional extends boolean = true, // if the super property is optional its sub-properties should be optional as well
    > = {
        // exclude non-string key here, not possible to constraint this on TSuper
        [K in string & keyof TSuper]: {
            name: `${TPrefix}/${K}`; // e.g. "video-params/aspect"
            type: TSuper[K] | (TOptional extends true ? undefined : never);
            readonly: TReadonly;
        };
    }[string & keyof TSuper];

    /**
     * Options can be set like properties as well
     * this is a not completed list of writeable options that can be set/get by `mp.set_property` etc
     *
     * see: https://github.com/mpv-player/mpv/blob/33111f3212ee272ac4a79fe284a7b55c9b5be997/DOCS/man/input.rst#property-list
     *
     * see also: https://github.com/mpv-player/mpv/blob/33111f3212ee272ac4a79fe284a7b55c9b5be997/DOCS/man/input.rst#inconsistencies-between-options-and-properties
     */
    type __OptionInfoUnion = {
        name: "fullscreen";
        type: boolean;
        readonly: false;
    } | {
        name: "pause";
        type: boolean;
        readonly: false;
    };

    /**
     * Base result when only `opts.name = 'subprocess'` and `opts.args` is specified
     */
    interface SubprocessResultBase {
        /**
         * Typically this is the process exit code (0 or positive) if the process terminates normally, or negative for other errors (failed to start, terminated by mpv, and others).
         *
         * The meaning of negative values is undefined, other than meaning error (and does not correspond to OS low level exit status values).
         */
        status: number;
        /**
         *  - Empty string if the process terminated normally.
         *  - The string `killed` if the process was terminated in an unusual way.
         *  - The string `init` if the process could not be started.
         *
         * On Windows, `killed` is only returned when the process has been killed by mpv as a result of `playback_only` being set to true.
         */
        error_string: "" | "killed" | "init";
        /**
         * Whether the process has been killed by mpv, for example as a result of `playback_only` being set to true, aborting the command
         * (e.g. by `mp.abort_async_command()`), or if the player is about to exit.
         */
        killed_by_us: boolean;
    }

    interface SubprocessResultWithStdout extends SubprocessResultBase {
        /**
         * Captured stdout stream, limited to `capture_size`.
         */
        stdout: string;
    }

    interface SubprocessResultWithStderr extends SubprocessResultBase {
        /**
         * Captured stderr stream, limited to `capture_size`.
         */
        stderr: string;
    }

    type SubprocessResultWithStd = SubprocessResultWithStdout & SubprocessResultWithStderr;

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

    /**
     * Commands that can only be invoked by Named Arguments
     */
    type NamedArgumentsOnlyCommand = "subprocess"; // TODO: add helper property in __CommandInfoUnion instead, don't do explicit listing
    /**
     * Commands that can only be invoked by mpv command syntax
     */
    type SyntaxOnlyCommand = "run" | "script-message" | "script-message-to" | "cycle-values"; // TODO: add helper property in __CommandInfoUnion instead, don't do explicit listing

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
    function commandv(
        ...args: readonly [Exclude<CommandName, NamedArgumentsOnlyCommand>, ...unknown[]]
    ): true | undefined;

    // Notes from observation:
    //   1. command_native returns `null | undefined` for most commands, including `run`
    //   1. some commands can only be invoked by array-like overload `command_native(array)` such as `run`
    //   1. some commands can only be invoked by `command_native(opts)` overload(namely named arguments) such as `subprocess`

    // dprint-ignore
    type CommandOptsUnion = __CommandInfoUnion extends infer U
      ? U extends { __return: any }
        ? Omit<U, "__return">
        : U
      : never;

    // dprint-ignore
    type GetCommonCommandResult<TOpts extends { name: string }> =
      Extract<__CommandInfoUnion, { name: TOpts["name"] }> extends {
        __return: infer R;
      }
        ? R
        : null | undefined; // null on success, undefined on error

    /**
     * Gets the shape of `subprocess` command result based on whether `capture_stderr` and `capture_stdout` are specified
     */
    // dprint-ignore
    type GetSubprocessResult<TOpts> = TOpts extends {
       capture_stderr: true;
       capture_stdout: true;
     }
       ? SubprocessResultWithStd
       : TOpts extends { capture_stderr: true }
         ? SubprocessResultWithStderr
         : TOpts extends { capture_stdout: true }
           ? SubprocessResultWithStdout
           : SubprocessResultBase;

    // dprint-ignore
    type GetCommandResult<TOpts extends { name: string }> =
       TOpts["name"] extends "subprocess"
         ? GetSubprocessResult<TOpts>
         : GetCommonCommandResult<TOpts>;

    // TODO: change `name` to `_name` if `_name` is released officially
    /**
     * Returns `null` on success, `undefined` on error
     */
    function command_native<TOpts extends CommandOptsUnion>(
        opts: TOpts & CommandOptsBase,
    ): GetCommandResult<TOpts>;

    function command_native<TDefault>(
        opts: CommandOptsUnion & CommandOptsBase,
        def: TDefault,
    ): null | TDefault; // null if success, TDefault on error

    // NOTE: currently when named argument overload has mismatched shape it would fallback to array overload, producing confusing error message
    // NOTE: editor completion for the first element(command name) is broken, no idea why,
    // and this won't be fixed as TypeScript6(the last version supporting es5) has been deprecated anyway.
    /**
     * Returns `null` on success, `undefined` on error
     */
    function command_native<
        TArgs extends [Exclude<CommandName, NamedArgumentsOnlyCommand>, ...unknown[]],
    >(
        list: TArgs,
    ): GetCommandResult<{ name: TArgs[0] }>;

    /**
     * Returns `null` on success, `T` on error
     */
    function command_native<T>(
        list: [Exclude<CommandName, NamedArgumentsOnlyCommand> | (string & {}), ...unknown[]],
        def: T,
    ): null | T;

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
    // TODO: change `name` to `_name` if `_name` is released officially
    function command_native_async<TOpts extends CommandOptsUnion>(
        opts: TOpts & CommandOptsBase,
        fn?: (success: boolean, result: GetCommandResult<TOpts>, error: string) => void, // result is null on success, undefined on error
    ): __AsyncCommandReturn | undefined;

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

    type WriteablePropertyName = Extract<__PropertyInfoUnion | __OptionInfoUnion, { readonly: false }>["name"];
    type PropertyName = __PropertyInfoUnion["name"] | __OptionInfoUnion["name"];

    /**
     * Find the property names with possible type
     * @template U The possible type
     */
    // dprint-ignore
    type __PropertyInfoWithPossibleType<U> =
      | __PropertyInfoUnion
      | __OptionInfoUnion extends infer P
      ? P extends { type: infer T }
        ? Extract<T, U> extends never ? never : P // count if any case of the property type is of U
        : never
      : never;

    type BooleanPropertyName = __PropertyInfoWithPossibleType<boolean>["name"];
    type NumberPropertyName = __PropertyInfoWithPossibleType<number>["name"];

    type WriteableBooleanPropertyName = Extract<
        __PropertyInfoWithPossibleType<boolean>,
        { readonly: false }
    >["name"];

    type WriteableNumberPropertyName = Extract<
        __PropertyInfoWithPossibleType<number>,
        { readonly: false }
    >["name"];

    /**
     * Returns `undefined` only if T is possibly `undefined` and `TUndefinable` is true
     */
    // dprint-ignore
    type __UndefinedIf<T, TUndefinable extends boolean> = TUndefinable extends true
      ? undefined extends T
        ? undefined
        : never
      : never;

    /**
     * Convert boolean to "yes" | "no", number to `${number}`, object to string
     * @template TWiden Whether to widen to any string and preserve completions when possible
     */
    // dprint-ignore
    type ToStringType<T, TWiden extends boolean = false> =
      | (GetBooleanString<T> & {}) // to expand the type
      | GetNumberString<T>
      | GetLiteralString<T> extends infer L
      ? [L] extends [never]
        ? string // if it has no string/number/boolean literal, anything else is string
        : // if it has literal strings
            | L
            | (string extends T
                ? TWiden extends true
                  ? string & {} // reserve completions when widen string case exists
                  : string // should still contain string because the original type has it!
                : never)
            | (Extract<T, object> extends never
                ? never
                : TWiden extends true
                  ? string & {}  // reserve completions when object case exists
                  : never)
      : never;

    // mp.get_property can basically accept every property name so we should handle every case
    // NOTE: `TUndefinable` is for explicit control on whether it could include undefined case
    // this is needed because I want to preserve completions for string cases of mp.set_property value
    // but external `NonNullable<GetStringPropertyType<>>` loose everything into any string if it contains `(string & {})`
    // so I have to handle the conditional undefined case internally using a dedicated type parameter TUndefinable
    /**
     * @template N Property name
     * @template TWiden Whether to widen to any string and preserve completions when possible
     * @template TUndefinable Whether to include undefined case
     */
    // dprint-ignore
    type GetStringPropertyType<
      N extends string,
      TWiden extends boolean = false, // whether to reserve completion when possible
      TUndefinable extends boolean = true, // whether to exclude undefined case in the result
    > =
      Extract<__PropertyInfoUnion | __OptionInfoUnion, { name: N }> extends infer P
        ? [P] extends [never]
          ? string | __UndefinedIf<undefined, TUndefinable> // if property not found
          : P extends { type: infer T }
            ? ToStringType<T, TWiden> | __UndefinedIf<T, TUndefinable>
            : never
        : never;

    /**
     * Get return type from `mp.get_property`
     * This is a helper type based on `GetStringPropertyType<>` as `TWiden` should always be false for the return type
     * @template N Property name
     * @template TUndefinable Whether to include undefined case
     */
    type GetStringPropertyReturnType<
        N extends string,
        TUndefinable extends boolean,
    > = GetStringPropertyType<N, false, TUndefinable>;

    /**
     * Get property types from `mp.get_property_osd`
     * @template N Property name
     * @template TWiden Whether to widen to any string and preserve completions when possible
     * @template TUndefinable Whether to include undefined case
     */
    // dprint-ignore
    type GetOSDPropertyType<
      N extends string,
      TWiden extends boolean = false,
      TUndefinable extends boolean = true,
    > =
      Extract<__PropertyInfoUnion | __OptionInfoUnion, { name: N }> extends infer P
        ? [P] extends [never]
          ? string | __UndefinedIf<undefined, TUndefinable> // if property not found
          : P extends { osd_type: infer O }
            ? O
            : P extends { type: infer T } // if it doesn't have osd type, fallback to regular string type
              ? ToStringType<T, TWiden> | __UndefinedIf<T, TUndefinable>
              : never
        : never;

    /**
     * Get literal string cases
     */
    // dprint-ignore
    type GetLiteralString<T> = T extends infer S
      ? string extends S
        ? never
        : S extends string
          ? S
          : never
      : never;

    /**
     * Get boolean cases and convert them to "yes" | "no"
     */
    // dprint-ignore
    type GetBooleanString<T> =
      | (true extends T ? "yes" : never)
      | (false extends T ? "no" : never);

    /**
     * Get number cases and convert them to `${number}` or literal string
     */
    // dprint-ignore
    type GetNumberString<T> = T extends infer N
      ? N extends number
        ? `${N}`
        : never
      : never;

    /**
     * Get the type of property, fallback to `TElse` if not found.
     * @template P Property name
     * @template TElse as the return type when property with name `P` isn't found.
     */
    // dprint-ignore
    type GetPropertyTypeOrElse<N extends string, TElse> =
      Extract<__PropertyInfoUnion | __OptionInfoUnion, { name: N }> extends infer P
        ? [P] extends [never]
          ? TElse
          : P extends { type: infer T }
            ? T
            : never
        : never;

    /**
     * Get types assignable to `U` from a property type.
     * If there's any case not assignable to `U`, include `undefined` in the result.
     *
     * This helper type is particularly for `mp.get_property_number/bool`, as the property
     * might contain non-number/boolean case that would be returned as `undefined`.
     *
     * For example, `mp.get_property_number('cursor-autohide')` might return `undefined`
     * if the current value is `"no"` or `"always"`, meaning it can't be coerced to `number`.
     * @template N property name
     * @template U type to coerce to
     * @template TElse fallback if property with name `N` is not found
     * @example
     * ```ts
     * // "cursor-autohide" has property type "no" | "always" | number
     * // it should return `number | undefined` as it contains types not assignable to `number`
     * type foo = GetCoercedPropertyTypeOrElse<'cursor-autohide', number> // number | undefined
     * ```
     */
    // NOTE: we don't include string coercion here as it's complicated
    // even though every property value can be coerced to string,
    // just use GetStringPropertyType<> instead.
    // dprint-ignore
    type GetCoercedPropertyTypeOrElse<N extends string, C, TElse = C | undefined> =
      Extract<__PropertyInfoUnion | __OptionInfoUnion, { name: N }> extends infer P
        ? [P] extends [never]
          ? TElse
          : P extends { type: infer T }
            ? Extract<T, C> | (Exclude<T, C> extends never ? never : undefined)
            : never
        : never;

    // TODO: for get_property_* functions with def fallback, when the property is always non-null(meaning it never fail to get a valid value)
    // it should not include the D case(fail case), just write a helper conditional type for this(name it like FallbackOnNullable<P, D>)

    /**
     * Return the value of the given property as string.
     *
     * These are the same properties as used in `input.conf`. See Properties for a list of properties.
     *
     * The returned string is formatted similar to `${=name}` (see Property Expansion).
     *
     * Returns the string on success, or `undefined` on error.
     */
    function get_property<P extends PropertyName | (string & {})>(
        name: P,
    ): GetStringPropertyReturnType<P, true>;

    function get_property<P extends PropertyName | (string & {}), D>(
        name: P,
        def: D | GetStringPropertyType<P, true, true>, // def can be any type, this union helps to get completions for expected property type
    ): GetStringPropertyReturnType<P, false> | D; // success | fail

    /**
     * Similar to `mp.get_property`, but return the property value formatted for OSD.
     *
     * This is the same string as printed with `${name}` when used in `input.conf`.
     *
     * Returns the string on success, or `undefined` on error.
     * Unlike `get_property()`, assigning the return value to a variable will always result in a string.
     */
    function get_property_osd<P extends PropertyName | (string & {})>(
        name: P,
    ): GetOSDPropertyType<P>;

    /**
     * Similar to `mp.get_property`, but return the property value formatted for OSD.
     *
     * This is the same string as printed with `${name}` when used in `input.conf`.
     *
     * Returns the string on success, or `def` on error. `def` is the second parameter provided to the function, and is an empty string if it's missing.
     * Unlike `get_property()`, assigning the return value to a variable will always result in a string.
     */
    function get_property_osd<P extends PropertyName | (string & {}), D>(
        name: P,
        def: D | GetOSDPropertyType<P, true>,
    ): GetOSDPropertyType<P> | D; // success | fail

    /**
     * Similar to `mp.get_property`, but return the property value as Boolean.
     * Returns a Boolean on success, `undefined` on error
     */
    function get_property_bool<P extends BooleanPropertyName | (string & {})>(
        name: P,
    ): GetCoercedPropertyTypeOrElse<P, boolean, boolean | undefined>;

    /**
     * Similar to `mp.get_property`, but return the property value as Boolean.
     * Returns a Boolean on success, or `def`
     */
    function get_property_bool<P extends BooleanPropertyName | (string & {}), D>(
        name: P,
        def: D | GetCoercedPropertyTypeOrElse<P, boolean, D>, // def can be any type, this union helps to get completions for expected property type
    ): NonNullable<GetCoercedPropertyTypeOrElse<P, boolean>> & {} | D; // success | fail
    // NOTE: added & {} to expand NonNullable for testing, because $ExpectType doesn't expand type but compare literally
    // it's safe to add & {} here as it's NonNullable anyway

    /**
     * Similar to `mp.get_property`, but return the property value as number.
     *
     * Note that while js does not distinguish between integers and floats, mpv internals do.
     * This function simply request a double float from mpv, and mpv will usually convert integer property values to float.
     * Returns a number on success, `undefined` on error
     */
    function get_property_number<P extends NumberPropertyName | (string & {})>(
        name: P,
    ): GetCoercedPropertyTypeOrElse<P, number, number | undefined>; // if property type has any case other than number, it should include undefined

    /**
     * Similar to `mp.get_property`, but return the property value as number.
     *
     * Note that while js does not distinguish between integers and floats, mpv internals do.
     * This function simply request a double float from mpv, and mpv will usually convert integer property values to float.
     * Returns a number on success, or `def`
     */
    function get_property_number<P extends NumberPropertyName | (string & {}), D>(
        name: P,
        def: D | GetCoercedPropertyTypeOrElse<P, number, D>, // def can be any type, this union helps to get completions for expected property type
    ): NonNullable<GetCoercedPropertyTypeOrElse<P, number>> | D; // success | fail

    /**
     * Similar to `mp.get_property`, but return the property value using the best type for the property.
     *
     * Most time, this will return a `string`, `boolean`, or `number`.
     * Some properties (for example `chapter-list`) are returned as list.
     * Returns a value on success, or `undefined`, error on error. Note that `undefined` might be a possible, valid value too in some corner cases.
     */
    function get_property_native<P extends PropertyName | (string & {})>(
        name: P,
    ): GetPropertyTypeOrElse<P, unknown>;

    /**
     * Similar to `mp.get_property`, but return the property value using the best type for the property.
     *
     * Most time, this will return a `string`, `boolean`, or `number`.
     * Some properties (for example `chapter-list`) are returned as list.
     * Returns a value on success, or `def`, error on error. Note that `undefined` might be a possible, valid value too in some corner cases.
     */
    function get_property_native<P extends PropertyName | (string & {}), D>(
        name: P,
        def: D | GetPropertyTypeOrElse<P, D>, // def can be any type, this union helps to get completions for expected property type
    ): NonNullable<GetPropertyTypeOrElse<P, unknown>> | D; // success | fail

    // NOTE: mp.set_property can handle most of properties, except those with non-primitive type such as `chapter-list`
    /**
     * Set the given property to the given string value.
     *
     * See `mp.get_property` and Properties for more information about properties.
     * Returns `true` on success, or `undefined` on error.
     */
    function set_property<
        P extends
            | Extract<
                __PropertyInfoUnion | __OptionInfoUnion,
                { readonly: false; type: string | number | boolean | undefined } // it can only handle properties with primitive value
            >["name"]
            | (string & {}),
    >(name: P, value: GetStringPropertyType<P, false>): true | undefined;

    /**
     * Similar to `mp.set_property`, but set the given property to the given Boolean value.
     */
    function set_property_bool<P extends WriteableBooleanPropertyName | (string & {})>(
        name: P,
        value: NonNullable<GetCoercedPropertyTypeOrElse<P, boolean>>,
    ): true | undefined;

    /**
     * Similar to `mp.set_property`, but set the given property to the given numeric value.
     *
     * Note that while Lua does not distinguish between integers and floats, mpv internals do.
     * This function will test whether the number can be represented as integer, and if so, it will pass an integer value to mpv, otherwise a double float.
     */
    function set_property_number<P extends WriteableNumberPropertyName | (string & {})>(
        name: P,
        value: NonNullable<GetCoercedPropertyTypeOrElse<P, number>>,
    ): true | undefined;

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
    function set_property_native<P extends WriteablePropertyName | (string & {})>(
        name: P,
        value: NonNullable<GetPropertyTypeOrElse<P, unknown>>,
    ): true | undefined;

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

    // dprint-ignore
    type GetObservedValueType<
      T extends "bool" | "number" | "string" | "native",
      P extends string,
    > = T extends "bool"
      ? GetPropertyTypeOrElse<P, boolean | undefined>
      : T extends "number"
        ? GetPropertyTypeOrElse<P, number | undefined>
        : T extends "string"
          ? GetStringPropertyReturnType<P, true>
          : T extends "native"
            ? GetPropertyTypeOrElse<P, unknown>
            : never;

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
    function observe_property<
        P extends PropertyName | (string & {}), // TODO: include only specific names depending on T
        T extends "bool" | "number" | "string" | "native",
    >(
        name: P,
        type: T,
        fn: (name: NoInfer<P>, value: GetObservedValueType<T, P>) => void,
    ): void;

    function observe_property<P extends PropertyName | (string & {})>(
        name: P,
        type: "none" | undefined,
        fn: (name: NoInfer<P>) => void,
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
     * Format time number into readable string.
     *  Valid formats:
        `%H`, `%h`: hour (`%H` is padded with 0 to two digits)
        `%M`: minutes from 00-59 (hours are subtracted)
        `%m`: total minutes (includes hours, unlike `%M`)
        `%S`: seconds from 00-59 (minutes and hours are subtracted)
        `%s`: total seconds (includes hours and minutes)
        `%f`: like `%s`, but as float
        `%T`: milliseconds (000-999)
     * @param time time in seconds
     * @param format defaults to `%H:%M:%S`
     * @see https://github.com/mpv-player/mpv/blob/48e6c35c0e056d9e4ff04b98e012416697736d8a/common/common.c#L45
     * @see https://github.com/mpv-player/mpv/blob/48e6c35c0e056d9e4ff04b98e012416697736d8a/player/javascript.c#L829
     */
    function format_time(time: number, format?: string): string;

    /**
     * Global modules search paths array for the require function
     */
    let module_paths: string[];

    let keep_running: boolean;

    /**
     * @param seconds wait in secs (infinite if negative) if mpv doesn't send events earlier.
     * @see https://github.com/mpv-player/mpv/blob/1d15686142fd5d53c954aab7526cedab05ef9dc3/player/javascript.c#L1151
     */
    function wait_event(timeout: number): { event: "none" | EventName; args?: string[] };

    /**
     * Calls back the handlers registered for `e.event`, if there are such (event handlers, property observers, script messages, etc).
     */
    function dispatch_event(e: { event: "none" | EventName; args?: string[] }): void;

    /**
     * calls back the idle observers, which we do when we're about to sleep, but the observers may add timers or take non-negligible duration to complete, so we re-calculate wait afterwards.
     */
    function notify_idle_observers(): void;

    /**
     * Calls back the already-added, non-canceled due timers, and returns the duration in ms till the next due timer (possibly 0), or -1 if there are no pending timers. Must not be called recursively.
     */
    function process_timers(): number;

    /**
     * Returns the same values as `mp.process_timers()` but without doing anything. Invalid result if called from a timer callback.
     * @returns -1: no timers, 0: due, positive: ms to wait
     * @see https://github.com/mpv-player/mpv/blob/1d15686142fd5d53c954aab7526cedab05ef9dc3/player/javascript/defaults.js#L406
     */
    function peek_timers_wait(): number;

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

    namespace input {
        interface GetOpts {
            /**
             * The string to be displayed before the input field.
             */
            prompt?: string;

            /**
             * A callback invoked when the user presses Enter. The first argument is the text in the console.
             */
            submit?: (inputText: string) => void;

            /**
             * Whether to keep the console open on submit. Defaults to false.
             */
            keep_open?: boolean;

            /**
             * A callback invoked when the console is shown. This can be used to present a list of options with `input.set_log()`.
             */
            opened?: () => void;

            /**
             * A callback invoked when the text changes. The first argument is the text in the console.
             */
            edited?: (inputText: string) => void;

            /**
             * A callback invoked when the user edits the text or moves the cursor.
             * The first argument is the text before the cursor.
             * The callback should return a table of the string candidate completion values and the 1-based cursor position from which the completion starts.
             * console will show the completions that fuzzily match the text between this position and the cursor and allow selecting them.
             * The third and optional return value is a string that will be appended to the input line without displaying it in the completions.
             */
            complete?: (textBeforeCursor: string) => void;

            /** Whether to automatically select the first completion on submit if one wasn't already manually selected. Defaults to false. */
            autoselect_completion?: boolean;

            /**
             * A callback invoked when the console is hidden, either because `input.terminate()` was invoked from the other callbacks, or because the user closed it with a key binding.
             * The first argument is the text in the console, and the second argument is the cursor position.
             */
            closed?: (inputText: string, cursorPosition: number) => void;

            /**
             * A string to pre-fill the input field with.
             */
            default_text?: string;

            /**
             * The initial cursor position, starting from 1.
             */
            cursor_position?: number;

            /**
             * If specified, the path to save and load the history of the entered lines.
             */
            history_path?: string;

            /**
             * An identifier that determines which input history and log buffer to use among the ones stored for `input.get()` calls.
             * Defaults to the calling script name with prompt appended.
             */
            id?: string;
        }

        /**
         * Show the console to let the user enter text.
         */
        function get(opts: GetOpts): void;

        /**
         * Close the console.
         */
        function terminate(): void;

        /**
         * Add a line to the log buffer.
         * `style` can contain additional ASS tags to apply to message,
         * and `terminalStyle` can contain escape sequences that are used when the console is displayed in the terminal.
         */
        function log(message: string, style?: string, terminalStyle?: string): void;

        /**
         * Helper to add a line to the log buffer with the same color as the one used for commands that error. Useful when the user submits invalid input.
         */
        function log_error(message: string): void;

        type Log = string | { text: string; style?: string; terminal_style?: string };

        /**
         * Replace the entire log buffer.
         * `log` is a list of strings, or list with text, style and terminal_style keys.
         */
        function set_log(log: Log[]): void;

        interface SelectOpts {
            /**
             * The string to be displayed before the input field.
             */
            prompt?: string;
            /**
             * The list of the entries to choose from.
             */
            items: string[];
            /**
             * The 1-based integer index of the preselected item.
             */
            default_item?: number;
            /**
             * The callback invoked when the user presses Enter. The first argument is the **1-based index** of the selected item.
             */
            submit?: (idx: number) => void;
            /**
             * Whether to keep the console open on submit. Defaults to false.
             */
            keep_open?: boolean;
        }

        /**
         * Specify a list of items that are presented to the user for selection.
         */
        function select(opts: SelectOpts): void;
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
