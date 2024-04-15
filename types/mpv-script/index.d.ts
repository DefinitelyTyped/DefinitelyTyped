declare namespace mp {
    type LogLevel = "fatal" | "error" | "warn" | "info" | "v" | "debug" | "trace";

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
        mode: number;
        size: number;
        atime: number;
        mtime: number;
        ctime: number;
        is_file: boolean;
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

    function commandv(...args: readonly string[]): true | undefined;

    function command_native(table: [string, ...unknown[]]): null | undefined; // `undefined` on error

    function command_native<T>(table: [string, ...unknown[]], def: T): null | T; // `T` on error

    function command_native(table: UnnamedCommandOpts): undefined;

    function command_native<T>(table: UnnamedCommandOpts, def: T): T;

    function command_native(table: UncapturedNamedCommandOpts, def?: unknown): UncapturedProcess;

    function command_native(table: NamedCommandOptsWithStdout, def?: unknown): ProcessWithStdout;

    function command_native(table: NamedCommandOptsWithStderr, def?: unknown): ProcessWithStderr;

    function command_native(table: CapturedNamedOptsCommand, def?: unknown): CapturedProcess;

    function command_native_async(
        table: unknown,
        fn?: (success: boolean, result: unknown, error: string | undefined) => void,
    ): unknown;

    function abort_async_command(t: unknown): void;

    function get_property(name: string, def: string): string;
    function get_property(name: string, def?: string): string | undefined;

    function get_property_osd(name: string, def?: string): string;

    function get_property_bool(name: string, def: boolean): boolean;
    function get_property_bool(name: string, def?: boolean): boolean | undefined;

    function get_property_number(name: string, def: number): number;
    function get_property_number(name: string, def?: number): number | undefined;

    function get_property_native(name: string, def?: unknown): unknown;

    function set_property(name: string, value: string): true | undefined;

    function set_property_bool(name: string, value: boolean): true | undefined;

    function set_property_number(name: string, value: number): true | undefined;

    function set_property_native(name: string, value: unknown): true | undefined;

    function get_time(): number;

    /**
     * @deprecated Passing the `fn` argument in place of the `name` is not recommended and is handled for compatibility only
     */
    function add_key_binding(key: string | undefined, fn: () => void, flags?: UncomplexKeyBindingFlags): void;

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
    function add_forced_key_binding(key: string | undefined, fn: () => void, flags?: UncomplexKeyBindingFlags): void;

    /**
     * @deprecated Passing the `fn` argument in place of the `name` is not recommended and is handled for compatibility only
     */
    function add_forced_key_binding(
        key: string | undefined,
        fn: (table: UserInputCommand) => void,
        flags: ComplexKeyBindingFlags,
    ): void;

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

    function remove_key_binding(name: string): void;

    function register_event(name: string, fn: (event: Record<string, unknown>) => void): void;

    function unregister_event(fn: (...args: unknown[]) => void): void;

    function observe_property(name: string, type: "native", fn: (name: string, value: unknown) => void): void;
    function observe_property(name: string, type: "bool", fn: (name: string, value: boolean | undefined) => void): void;
    function observe_property(
        name: string,
        type: "string",
        fn: (name: string, value: string | undefined) => void,
    ): void;
    function observe_property(
        name: string,
        type: "number",
        fn: (name: string, value: number | undefined) => void,
    ): void;
    function observe_property(name: string, type: "none" | undefined, fn: (name: string) => void): void;

    function unobserve_property(fn: (...args: unknown[]) => void): void;

    function get_opt(key: string): string;

    function get_script_name(): string;

    function osd_message(text: string, duration?: number): void;

    function register_idle(fn: () => void): void;

    function unregister_idle(fn: () => void): void;

    function enable_messages(level: LogLevel): void;

    function register_script_message(name: string, fn: (...args: unknown[]) => void): void;

    function unregister_script_message(name: string): void;

    function create_osd_overlay(format: "ass-events"): OSDOverlay;

    function get_osd_size(): OSDSize | undefined;

    function add_hook(name: string, priority: number, fn: () => void): void;

    function last_error(): string;

    function get_time_ms(): number;

    function get_script_file(): string;

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
        function read_options(
            table: Record<string, string | boolean | number>,
            identifier?: string,
            on_update?: (list: Record<string, boolean | undefined>) => void,
        ): void;
    }

    namespace utils {
        function getcwd(): string | undefined;

        function readdir(path: string, filter?: "files" | "dirs" | "normal" | "all"): string[] | undefined;

        function file_info(path: string): FileInfo | undefined;

        function split_path(path: string): [string, string];

        function join_path(p1: string, p2: string): string;

        function getpid(): number;

        function getenv(name: string): string | undefined;

        function get_user_path(path: string): string;

        function read_file(fname: string, max?: number): string;

        function write_file(fname: string, str: string): void;

        function compile_js(fname: string, content_str: string): (...args: unknown[]) => unknown;
    }
}

declare function print(...msg: unknown[]): void;

declare function dump(...msg: unknown[]): void;

declare function exit(): void;
