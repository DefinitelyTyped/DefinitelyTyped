// Type definitions for non-npm package plv8 3.1
// Project: https://github.com/plv8/plv8
// Definitions by: Constantine Peresypkin <https://github.com/pkit>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var DEBUG1: LoggingLevel.DEBUG1;
declare var DEBUG2: LoggingLevel.DEBUG2;
declare var DEBUG3: LoggingLevel.DEBUG3;
declare var DEBUG4: LoggingLevel.DEBUG4;
declare var DEBUG5: LoggingLevel.DEBUG5;
declare var LOG: LoggingLevel.LOG;
declare var NOTICE: LoggingLevel.NOTICE;
declare var INFO: LoggingLevel.INFO;
declare var WARNING: LoggingLevel.WARNING;
declare var ERROR: LoggingLevel.ERROR;

declare enum LoggingLevel {
    DEBUG5 = 10,
    DEBUG4 = 11,
    DEBUG3 = 12,
    DEBUG2 = 13,
    DEBUG1 = 14,
    LOG = 15,
    INFO = 17,
    NOTICE = 18,
    WARNING = 19,
    ERROR = 21,
}

interface HeapStatistics {
    total_heap_size: number;
    total_physical_size: number;
    used_heap_size: number;
    heap_size_limit: number;
    external_memory: number;
    number_of_native_contexts: number;
}

interface SQLRow {
    [key: string]: any;
}

declare namespace plv8 {
    const version: string;
    function quote_literal(literal: string | number | boolean | object): string;
    function quote_ident(ident: string): string;
    function quote_nullable(nullable: any): string | null;
    function execute(sql: string, ...args: any[]): SQLRow[];
    function elog(level: LoggingLevel, message: string, ...messages: string[]): void;
    function find_function(name: string): (...args: any[]) => SQLRow[];
    function memory_usage(): HeapStatistics;
    function run_script(source: string, name?: string): void;
    function prepare(sql: string, types?: string[]): PreparedPlan;
    function subtransaction(func: () => void): void;
    function get_window_object(): WindowObject;
    function return_next(tuple: SQLRow): void;
    function commit(): void;
    function rollback(): void;
}

interface PreparedPlan {
    execute(args?: any[]): SQLRow[];
    cursor(args?: any[]): Cursor;
    free(): void;
}

interface Cursor {
    fetch(count?: number): SQLRow | SQLRow[];
    move(count: number): void;
    close(): void;
}

declare enum SeekType {
    WINDOW_SEEK_CURRENT = 0,
    WINDOW_SEEK_HEAD = 1,
    WINDOW_SEEK_TAIL = 2,
}

interface WindowObject {
    SEEK_CURRENT: SeekType.WINDOW_SEEK_CURRENT;
    SEEK_HEAD: SeekType.WINDOW_SEEK_HEAD;
    SEEK_TAIL: SeekType.WINDOW_SEEK_TAIL;
    get_current_position(): number;
    get_partition_row_count(): number;
    set_mark_position(position: number): void;
    rows_are_peers(pos1: number, pos2: number): boolean;
    get_func_arg_in_partition(arg: number, position: number, seekType: SeekType, mark: boolean): any;
    get_func_arg_in_frame(arg: number, position: number, seekType: SeekType, mark: boolean): any;
    get_func_arg_current(arg: number): any;
    get_partition_local(size?: number): any;
    set_partition_local(obj: any): void;
}
