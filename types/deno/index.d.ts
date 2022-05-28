// Type definitions for Deno v1.22.1
// Project: https://github.com/denoland/deno
// Definitions by: denoland <https://github.com/denoland>
//                andre4ik3 <https://github.com/andre4ik3>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Original authors: https://github.com/denoland/deno/contributors
// From: https://github.com/denoland/deno/releases/tag/v1.22.1 lib.deno.d.ts

// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.

/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
// /// <reference lib="deno.net" /> This file is already included at line 6531.

/** Deno provides extra properties on `import.meta`.  These are included here
 * to ensure that these are still available when using the Deno namespace in
 * conjunction with other type libs, like `dom`. */
declare interface ImportMeta {
  /** A string representation of the fully qualified module URL. */
  url: string;

  /** A flag that indicates if the current module is the main module that was
   * called when starting the program under Deno.
   *
   * ```ts
   * if (import.meta.main) {
   *   // this was loaded as the main module, maybe do some bootstrapping
   * }
   * ```
   */
  main: boolean;
}

/** Deno supports user timing Level 3 (see: https://w3c.github.io/user-timing)
 * which is not widely supported yet in other runtimes.  These types are here
 * so that these features are still available when using the Deno namespace
 * in conjunction with other type libs, like `dom`. */
declare interface Performance {
  /** Stores a timestamp with the associated name (a "mark"). */
  mark(markName: string, options?: PerformanceMarkOptions): PerformanceMark;

  /** Stores the `DOMHighResTimeStamp` duration between two marks along with the
   * associated name (a "measure"). */
  measure(
    measureName: string,
    options?: PerformanceMeasureOptions,
  ): PerformanceMeasure;
}

declare interface PerformanceMarkOptions {
  /** Metadata to be included in the mark. */
  // deno-lint-ignore no-explicit-any
  detail?: any;

  /** Timestamp to be used as the mark time. */
  startTime?: number;
}

declare interface PerformanceMeasureOptions {
  /** Metadata to be included in the measure. */
  // deno-lint-ignore no-explicit-any
  detail?: any;

  /** Timestamp to be used as the start time or string to be used as start
   * mark. */
  start?: string | number;

  /** Duration between the start and end times. */
  duration?: number;

  /** Timestamp to be used as the end time or string to be used as end mark. */
  end?: string | number;
}

declare namespace Deno {
  /** A set of error constructors that are raised by Deno APIs. */
  export namespace errors {
    export class NotFound extends Error {}
    export class PermissionDenied extends Error {}
    export class ConnectionRefused extends Error {}
    export class ConnectionReset extends Error {}
    export class ConnectionAborted extends Error {}
    export class NotConnected extends Error {}
    export class AddrInUse extends Error {}
    export class AddrNotAvailable extends Error {}
    export class BrokenPipe extends Error {}
    export class AlreadyExists extends Error {}
    export class InvalidData extends Error {}
    export class TimedOut extends Error {}
    export class Interrupted extends Error {}
    export class WriteZero extends Error {}
    export class UnexpectedEof extends Error {}
    export class BadResource extends Error {}
    export class Http extends Error {}
    export class Busy extends Error {}
    export class NotSupported extends Error {}
  }

  /** The current process id of the runtime. */
  export const pid: number;

  /**
   * The pid of the current process's parent.
   */
  export const ppid: number;

  export interface MemoryUsage {
    rss: number;
    heapTotal: number;
    heapUsed: number;
    external: number;
  }

  /**
   * Returns an object describing the memory usage of the Deno process measured
   * in bytes.
   */
  export function memoryUsage(): MemoryUsage;

  /** Reflects the `NO_COLOR` environment variable at program start.
   *
   * See: https://no-color.org/ */
  export const noColor: boolean;

  export type PermissionOptions = "inherit" | "none" | PermissionOptionsObject;

  export interface PermissionOptionsObject {
    /** Specifies if the `env` permission should be requested or revoked.
     * If set to `"inherit"`, the current `env` permission will be inherited.
     * If set to `true`, the global `env` permission will be requested.
     * If set to `false`, the global `env` permission will be revoked.
     *
     * Defaults to `false`.
     */
    env?: "inherit" | boolean | string[];

    /** Specifies if the `hrtime` permission should be requested or revoked.
     * If set to `"inherit"`, the current `hrtime` permission will be inherited.
     * If set to `true`, the global `hrtime` permission will be requested.
     * If set to `false`, the global `hrtime` permission will be revoked.
     *
     * Defaults to `false`.
     */
    hrtime?: "inherit" | boolean;

    /** Specifies if the `net` permission should be requested or revoked.
     * if set to `"inherit"`, the current `net` permission will be inherited.
     * if set to `true`, the global `net` permission will be requested.
     * if set to `false`, the global `net` permission will be revoked.
     * if set to `string[]`, the `net` permission will be requested with the
     * specified host strings with the format `"<host>[:<port>]`.
     *
     * Defaults to `false`.
     *
     * Examples:
     *
     * ```ts
     * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
     *
     * Deno.test({
     *   name: "inherit",
     *   permissions: {
     *     net: "inherit",
     *   },
     *   async fn() {
     *     const status = await Deno.permissions.query({ name: "net" })
     *     assertEquals(status.state, "granted");
     *   },
     * });
     * ```
     *
     * ```ts
     * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
     *
     * Deno.test({
     *   name: "true",
     *   permissions: {
     *     net: true,
     *   },
     *   async fn() {
     *     const status = await Deno.permissions.query({ name: "net" });
     *     assertEquals(status.state, "granted");
     *   },
     * });
     * ```
     *
     * ```ts
     * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
     *
     * Deno.test({
     *   name: "false",
     *   permissions: {
     *     net: false,
     *   },
     *   async fn() {
     *     const status = await Deno.permissions.query({ name: "net" });
     *     assertEquals(status.state, "denied");
     *   },
     * });
     * ```
     *
     * ```ts
     * import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
     *
     * Deno.test({
     *   name: "localhost:8080",
     *   permissions: {
     *     net: ["localhost:8080"],
     *   },
     *   async fn() {
     *     const status = await Deno.permissions.query({ name: "net", host: "localhost:8080" });
     *     assertEquals(status.state, "granted");
     *   },
     * });
     * ```
     */
    net?: "inherit" | boolean | string[];

    /** Specifies if the `ffi` permission should be requested or revoked.
     * If set to `"inherit"`, the current `ffi` permission will be inherited.
     * If set to `true`, the global `ffi` permission will be requested.
     * If set to `false`, the global `ffi` permission will be revoked.
     *
     * Defaults to `false`.
     */
    ffi?: "inherit" | boolean | Array<string | URL>;

    /** Specifies if the `read` permission should be requested or revoked.
     * If set to `"inherit"`, the current `read` permission will be inherited.
     * If set to `true`, the global `read` permission will be requested.
     * If set to `false`, the global `read` permission will be revoked.
     * If set to `Array<string | URL>`, the `read` permission will be requested with the
     * specified file paths.
     *
     * Defaults to `false`.
     */
    read?: "inherit" | boolean | Array<string | URL>;

    /** Specifies if the `run` permission should be requested or revoked.
     * If set to `"inherit"`, the current `run` permission will be inherited.
     * If set to `true`, the global `run` permission will be requested.
     * If set to `false`, the global `run` permission will be revoked.
     *
     * Defaults to `false`.
     */
    run?: "inherit" | boolean | Array<string | URL>;

    /** Specifies if the `write` permission should be requested or revoked.
     * If set to `"inherit"`, the current `write` permission will be inherited.
     * If set to `true`, the global `write` permission will be requested.
     * If set to `false`, the global `write` permission will be revoked.
     * If set to `Array<string | URL>`, the `write` permission will be requested with the
     * specified file paths.
     *
     * Defaults to `false`.
     */
    write?: "inherit" | boolean | Array<string | URL>;
  }

  export interface TestContext {
    /**
     * The current test name.
     */
    name: string;
    /**
     * File Uri of the current test code.
     */
    origin: string;
    /**
     * Parent test context.
     */
    parent?: TestContext;

    /** Run a sub step of the parent test or step. Returns a promise
     * that resolves to a boolean signifying if the step completed successfully.
     * The returned promise never rejects unless the arguments are invalid.
     * If the test was ignored the promise returns `false`.
     */
    step(t: TestStepDefinition): Promise<boolean>;

    /** Run a sub step of the parent test or step. Returns a promise
     * that resolves to a boolean signifying if the step completed successfully.
     * The returned promise never rejects unless the arguments are invalid.
     * If the test was ignored the promise returns `false`.
     */
    step(
      name: string,
      fn: (t: TestContext) => void | Promise<void>,
    ): Promise<boolean>;
  }

  export interface TestStepDefinition {
    fn: (t: TestContext) => void | Promise<void>;
    /**
     * The current test name.
     */
    name: string;
    ignore?: boolean;
    /** Check that the number of async completed ops after the test step is the same
     * as number of dispatched ops. Defaults to the parent test or step's value. */
    sanitizeOps?: boolean;
    /** Ensure the test step does not "leak" resources - ie. the resource table
     * after the test has exactly the same contents as before the test. Defaults
     * to the parent test or step's value. */
    sanitizeResources?: boolean;
    /** Ensure the test step does not prematurely cause the process to exit,
     * for example via a call to `Deno.exit`. Defaults to the parent test or
     * step's value. */
    sanitizeExit?: boolean;
  }

  export interface TestDefinition {
    fn: (t: TestContext) => void | Promise<void>;
    /**
     * The current test name.
     */
    name: string;
    ignore?: boolean;
    /** If at least one test has `only` set to true, only run tests that have
     * `only` set to true and fail the test suite. */
    only?: boolean;
    /** Check that the number of async completed ops after the test is the same
     * as number of dispatched ops. Defaults to true. */
    sanitizeOps?: boolean;
    /** Ensure the test case does not "leak" resources - ie. the resource table
     * after the test has exactly the same contents as before the test. Defaults
     * to true. */
    sanitizeResources?: boolean;
    /** Ensure the test case does not prematurely cause the process to exit,
     * for example via a call to `Deno.exit`. Defaults to true. */
    sanitizeExit?: boolean;

    /** Specifies the permissions that should be used to run the test.
     * Set this to "inherit" to keep the calling thread's permissions.
     * Set this to "none" to revoke all permissions.
     *
     * Defaults to "inherit".
     */
    permissions?: PermissionOptions;
  }

  /** Register a test which will be run when `deno test` is used on the command
   * line and the containing module looks like a test module.
   * `fn` can be async if required.
   * ```ts
   * import {assert, fail, assertEquals} from "https://deno.land/std/testing/asserts.ts";
   *
   * Deno.test({
   *   name: "example test",
   *   fn(): void {
   *     assertEquals("world", "world");
   *   },
   * });
   *
   * Deno.test({
   *   name: "example ignored test",
   *   ignore: Deno.build.os === "windows",
   *   fn(): void {
   *     // This test is ignored only on Windows machines
   *   },
   * });
   *
   * Deno.test({
   *   name: "example async test",
   *   async fn() {
   *     const decoder = new TextDecoder("utf-8");
   *     const data = await Deno.readFile("hello_world.txt");
   *     assertEquals(decoder.decode(data), "Hello world");
   *   }
   * });
   * ```
   */
  export function test(t: TestDefinition): void;

  /** Register a test which will be run when `deno test` is used on the command
   * line and the containing module looks like a test module.
   * `fn` can be async if required.
   *
   * ```ts
   * import {assert, fail, assertEquals} from "https://deno.land/std/testing/asserts.ts";
   *
   * Deno.test("My test description", (): void => {
   *   assertEquals("hello", "hello");
   * });
   *
   * Deno.test("My async test description", async (): Promise<void> => {
   *   const decoder = new TextDecoder("utf-8");
   *   const data = await Deno.readFile("hello_world.txt");
   *   assertEquals(decoder.decode(data), "Hello world");
   * });
   * ```
   */
  export function test(
    name: string,
    fn: (t: TestContext) => void | Promise<void>,
  ): void;

  /** Register a test which will be run when `deno test` is used on the command
   * line and the containing module looks like a test module.
   * `fn` can be async if required. Declared function must have a name.
   *
   * ```ts
   * import {assert, fail, assertEquals} from "https://deno.land/std/testing/asserts.ts";
   *
   * Deno.test(function myTestName(): void {
   *   assertEquals("hello", "hello");
   * });
   *
   * Deno.test(async function myOtherTestName(): Promise<void> {
   *   const decoder = new TextDecoder("utf-8");
   *   const data = await Deno.readFile("hello_world.txt");
   *   assertEquals(decoder.decode(data), "Hello world");
   * });
   * ```
   */
  export function test(fn: (t: TestContext) => void | Promise<void>): void;

  /** Register a test which will be run when `deno test` is used on the command
   * line and the containing module looks like a test module.
   * `fn` can be async if required.
   *
   * ```ts
   * import {assert, fail, assertEquals} from "https://deno.land/std/testing/asserts.ts";
   *
   * Deno.test("My test description", { permissions: { read: true } }, (): void => {
   *   assertEquals("hello", "hello");
   * });
   *
   * Deno.test("My async test description", { permissions: { read: false } }, async (): Promise<void> => {
   *   const decoder = new TextDecoder("utf-8");
   *   const data = await Deno.readFile("hello_world.txt");
   *   assertEquals(decoder.decode(data), "Hello world");
   * });
   * ```
   */
  export function test(
    name: string,
    options: Omit<TestDefinition, "fn" | "name">,
    fn: (t: TestContext) => void | Promise<void>,
  ): void;

  /** Register a test which will be run when `deno test` is used on the command
   * line and the containing module looks like a test module.
   * `fn` can be async if required.
   *
   * ```ts
   * import {assert, fail, assertEquals} from "https://deno.land/std/testing/asserts.ts";
   *
   * Deno.test({ name: "My test description", permissions: { read: true } }, (): void => {
   *   assertEquals("hello", "hello");
   * });
   *
   * Deno.test({ name: "My async test description", permissions: { read: false } }, async (): Promise<void> => {
   *   const decoder = new TextDecoder("utf-8");
   *   const data = await Deno.readFile("hello_world.txt");
   *   assertEquals(decoder.decode(data), "Hello world");
   * });
   * ```
   */
  export function test(
    options: Omit<TestDefinition, "fn">,
    fn: (t: TestContext) => void | Promise<void>,
  ): void;

  /** Register a test which will be run when `deno test` is used on the command
   * line and the containing module looks like a test module.
   * `fn` can be async if required. Declared function must have a name.
   *
   * ```ts
   * import {assert, fail, assertEquals} from "https://deno.land/std/testing/asserts.ts";
   *
   * Deno.test({ permissions: { read: true } }, function myTestName(): void {
   *   assertEquals("hello", "hello");
   * });
   *
   * Deno.test({ permissions: { read: false } }, async function myOtherTestName(): Promise<void> {
   *   const decoder = new TextDecoder("utf-8");
   *   const data = await Deno.readFile("hello_world.txt");
   *   assertEquals(decoder.decode(data), "Hello world");
   * });
   * ```
   */
  export function test(
    options: Omit<TestDefinition, "fn" | "name">,
    fn: (t: TestContext) => void | Promise<void>,
  ): void;

  /** Exit the Deno process with optional exit code. If no exit code is supplied
   * then Deno will exit with return code of 0.
   *
   * ```ts
   * Deno.exit(5);
   * ```
   */
  export function exit(code?: number): never;

  export const env: {
    /** Retrieve the value of an environment variable. Returns `undefined` if that
     * key doesn't exist.
     *
     * ```ts
     * console.log(Deno.env.get("HOME"));  // e.g. outputs "/home/alice"
     * console.log(Deno.env.get("MADE_UP_VAR"));  // outputs "undefined"
     * ```
     * Requires `allow-env` permission. */
    get(key: string): string | undefined;

    /** Set the value of an environment variable.
     *
     * ```ts
     * Deno.env.set("SOME_VAR", "Value");
     * Deno.env.get("SOME_VAR");  // outputs "Value"
     * ```
     *
     * Requires `allow-env` permission. */
    set(key: string, value: string): void;

    /** Delete the value of an environment variable.
     *
     * ```ts
     * Deno.env.set("SOME_VAR", "Value");
     * Deno.env.delete("SOME_VAR");  // outputs "undefined"
     * ```
     *
     * Requires `allow-env` permission. */
    delete(key: string): void;

    /** Returns a snapshot of the environment variables at invocation.
     *
     * ```ts
     * Deno.env.set("TEST_VAR", "A");
     * const myEnv = Deno.env.toObject();
     * console.log(myEnv.SHELL);
     * Deno.env.set("TEST_VAR", "B");
     * console.log(myEnv.TEST_VAR);  // outputs "A"
     * ```
     *
     * Requires `allow-env` permission. */
    toObject(): { [index: string]: string };
  };

  /**
   * Returns the path to the current deno executable.
   *
   * ```ts
   * console.log(Deno.execPath());  // e.g. "/home/alice/.local/bin/deno"
   * ```
   *
   * Requires `allow-read` permission.
   */
  export function execPath(): string;

  /**
   * Change the current working directory to the specified path.
   *
   * ```ts
   * Deno.chdir("/home/userA");
   * Deno.chdir("../userB");
   * Deno.chdir("C:\\Program Files (x86)\\Java");
   * ```
   *
   * Throws `Deno.errors.NotFound` if directory not found.
   * Throws `Deno.errors.PermissionDenied` if the user does not have access
   * rights
   *
   * Requires --allow-read.
   */
  export function chdir(directory: string | URL): void;

  /**
   * Return a string representing the current working directory.
   *
   * If the current directory can be reached via multiple paths (due to symbolic
   * links), `cwd()` may return any one of them.
   *
   * ```ts
   * const currentWorkingDirectory = Deno.cwd();
   * ```
   *
   * Throws `Deno.errors.NotFound` if directory not available.
   *
   * Requires --allow-read
   */
  export function cwd(): string;

  /**
   * Synchronously creates `newpath` as a hard link to `oldpath`.
   *
   * ```ts
   * Deno.linkSync("old/name", "new/name");
   * ```
   *
   * Requires `allow-read` and `allow-write` permissions. */
  export function linkSync(oldpath: string, newpath: string): void;

  /**
   * Creates `newpath` as a hard link to `oldpath`.
   *
   * ```ts
   * await Deno.link("old/name", "new/name");
   * ```
   *
   * Requires `allow-read` and `allow-write` permissions. */
  export function link(oldpath: string, newpath: string): Promise<void>;

  export enum SeekMode {
    Start = 0,
    Current = 1,
    End = 2,
  }

  export interface Reader {
    /** Reads up to `p.byteLength` bytes into `p`. It resolves to the number of
     * bytes read (`0` < `n` <= `p.byteLength`) and rejects if any error
     * encountered. Even if `read()` resolves to `n` < `p.byteLength`, it may
     * use all of `p` as scratch space during the call. If some data is
     * available but not `p.byteLength` bytes, `read()` conventionally resolves
     * to what is available instead of waiting for more.
     *
     * When `read()` encounters end-of-file condition, it resolves to EOF
     * (`null`).
     *
     * When `read()` encounters an error, it rejects with an error.
     *
     * Callers should always process the `n` > `0` bytes returned before
     * considering the EOF (`null`). Doing so correctly handles I/O errors that
     * happen after reading some bytes and also both of the allowed EOF
     * behaviors.
     *
     * Implementations should not retain a reference to `p`.
     *
     * Use iter() from https://deno.land/std/io/util.ts to turn a Reader into an
     * AsyncIterator.
     */
    read(p: Uint8Array): Promise<number | null>;
  }

  export interface ReaderSync {
    /** Reads up to `p.byteLength` bytes into `p`. It resolves to the number
     * of bytes read (`0` < `n` <= `p.byteLength`) and rejects if any error
     * encountered. Even if `readSync()` returns `n` < `p.byteLength`, it may use
     * all of `p` as scratch space during the call. If some data is available
     * but not `p.byteLength` bytes, `readSync()` conventionally returns what is
     * available instead of waiting for more.
     *
     * When `readSync()` encounters end-of-file condition, it returns EOF
     * (`null`).
     *
     * When `readSync()` encounters an error, it throws with an error.
     *
     * Callers should always process the `n` > `0` bytes returned before
     * considering the EOF (`null`). Doing so correctly handles I/O errors that happen
     * after reading some bytes and also both of the allowed EOF behaviors.
     *
     * Implementations should not retain a reference to `p`.
     *
     * Use iterSync() from https://deno.land/std/io/util.ts to turn a ReaderSync
     * into an Iterator.
     */
    readSync(p: Uint8Array): number | null;
  }

  export interface Writer {
    /** Writes `p.byteLength` bytes from `p` to the underlying data stream. It
     * resolves to the number of bytes written from `p` (`0` <= `n` <=
     * `p.byteLength`) or reject with the error encountered that caused the
     * write to stop early. `write()` must reject with a non-null error if
     * would resolve to `n` < `p.byteLength`. `write()` must not modify the
     * slice data, even temporarily.
     *
     * Implementations should not retain a reference to `p`.
     */
    write(p: Uint8Array): Promise<number>;
  }

  export interface WriterSync {
    /** Writes `p.byteLength` bytes from `p` to the underlying data
     * stream. It returns the number of bytes written from `p` (`0` <= `n`
     * <= `p.byteLength`) and any error encountered that caused the write to
     * stop early. `writeSync()` must throw a non-null error if it returns `n` <
     * `p.byteLength`. `writeSync()` must not modify the slice data, even
     * temporarily.
     *
     * Implementations should not retain a reference to `p`.
     */
    writeSync(p: Uint8Array): number;
  }

  export interface Closer {
    close(): void;
  }

  export interface Seeker {
    /** Seek sets the offset for the next `read()` or `write()` to offset,
     * interpreted according to `whence`: `Start` means relative to the
     * start of the file, `Current` means relative to the current offset,
     * and `End` means relative to the end. Seek resolves to the new offset
     * relative to the start of the file.
     *
     * Seeking to an offset before the start of the file is an error. Seeking to
     * any positive offset is legal, but the behavior of subsequent I/O
     * operations on the underlying object is implementation-dependent.
     * It returns the number of cursor position.
     */
    seek(offset: number, whence: SeekMode): Promise<number>;
  }

  export interface SeekerSync {
    /** Seek sets the offset for the next `readSync()` or `writeSync()` to
     * offset, interpreted according to `whence`: `Start` means relative
     * to the start of the file, `Current` means relative to the current
     * offset, and `End` means relative to the end.
     *
     * Seeking to an offset before the start of the file is an error. Seeking to
     * any positive offset is legal, but the behavior of subsequent I/O
     * operations on the underlying object is implementation-dependent.
     */
    seekSync(offset: number, whence: SeekMode): number;
  }

  /**
   * Copies from `src` to `dst` until either EOF (`null`) is read from `src` or
   * an error occurs. It resolves to the number of bytes copied or rejects with
   * the first error encountered while copying.
   *
   * ```ts
   * const source = await Deno.open("my_file.txt");
   * const bytesCopied1 = await Deno.copy(source, Deno.stdout);
   * const destination = await Deno.create("my_file_2.txt");
   * const bytesCopied2 = await Deno.copy(source, destination);
   * ```
   *
   * @deprecated Use `copy` from https://deno.land/std/streams/conversion.ts
   * instead. `Deno.copy` will be removed in Deno 2.0.
   *
   * @param src The source to copy from
   * @param dst The destination to copy to
   * @param options Can be used to tune size of the buffer. Default size is 32kB
   */
  export function copy(
    src: Reader,
    dst: Writer,
    options?: {
      bufSize?: number;
    },
  ): Promise<number>;

  /**
   * Turns a Reader, `r`, into an async iterator.
   *
   * ```ts
   * let f = await Deno.open("/etc/passwd");
   * for await (const chunk of Deno.iter(f)) {
   *   console.log(chunk);
   * }
   * f.close();
   * ```
   *
   * Second argument can be used to tune size of a buffer.
   * Default size of the buffer is 32kB.
   *
   * ```ts
   * let f = await Deno.open("/etc/passwd");
   * const iter = Deno.iter(f, {
   *   bufSize: 1024 * 1024
   * });
   * for await (const chunk of iter) {
   *   console.log(chunk);
   * }
   * f.close();
   * ```
   *
   * Iterator uses an internal buffer of fixed size for efficiency; it returns
   * a view on that buffer on each iteration. It is therefore caller's
   * responsibility to copy contents of the buffer if needed; otherwise the
   * next iteration will overwrite contents of previously returned chunk.
   *
   * @deprecated Use `iterateReader` from
   * https://deno.land/std/streams/conversion.ts instead. `Deno.iter` will be
   * removed in Deno 2.0.
   */
  export function iter(
    r: Reader,
    options?: {
      bufSize?: number;
    },
  ): AsyncIterableIterator<Uint8Array>;

  /**
   * Turns a ReaderSync, `r`, into an iterator.
   *
   * ```ts
   * let f = Deno.openSync("/etc/passwd");
   * for (const chunk of Deno.iterSync(f)) {
   *   console.log(chunk);
   * }
   * f.close();
   * ```
   *
   * Second argument can be used to tune size of a buffer.
   * Default size of the buffer is 32kB.
   *
   * ```ts
   * let f = await Deno.open("/etc/passwd");
   * const iter = Deno.iterSync(f, {
   *   bufSize: 1024 * 1024
   * });
   * for (const chunk of iter) {
   *   console.log(chunk);
   * }
   * f.close();
   * ```
   *
   * Iterator uses an internal buffer of fixed size for efficiency; it returns
   * a view on that buffer on each iteration. It is therefore caller's
   * responsibility to copy contents of the buffer if needed; otherwise the
   * next iteration will overwrite contents of previously returned chunk.
   *
   * @deprecated Use `iterateReaderSync` from
   * https://deno.land/std/streams/conversion.ts instead. `Deno.iterSync` will
   * be removed in Deno 2.0.
   */
  export function iterSync(
    r: ReaderSync,
    options?: {
      bufSize?: number;
    },
  ): IterableIterator<Uint8Array>;

  /** Synchronously open a file and return an instance of `Deno.FsFile`.  The
   * file does not need to previously exist if using the `create` or `createNew`
   * open options.  It is the callers responsibility to close the file when finished
   * with it.
   *
   * ```ts
   * const file = Deno.openSync("/foo/bar.txt", { read: true, write: true });
   * // Do work with file
   * Deno.close(file.rid);
   * ```
   *
   * Requires `allow-read` and/or `allow-write` permissions depending on options.
   */
  export function openSync(path: string | URL, options?: OpenOptions): FsFile;

  /** Open a file and resolve to an instance of `Deno.FsFile`.  The
   * file does not need to previously exist if using the `create` or `createNew`
   * open options.  It is the callers responsibility to close the file when finished
   * with it.
   *
   * ```ts
   * const file = await Deno.open("/foo/bar.txt", { read: true, write: true });
   * // Do work with file
   * Deno.close(file.rid);
   * ```
   *
   * Requires `allow-read` and/or `allow-write` permissions depending on options.
   */
  export function open(
    path: string | URL,
    options?: OpenOptions,
  ): Promise<FsFile>;

  /** Creates a file if none exists or truncates an existing file and returns
   *  an instance of `Deno.FsFile`.
   *
   * ```ts
   * const file = Deno.createSync("/foo/bar.txt");
   * ```
   *
   * Requires `allow-read` and `allow-write` permissions.
   */
  export function createSync(path: string | URL): FsFile;

  /** Creates a file if none exists or truncates an existing file and resolves to
   *  an instance of `Deno.FsFile`.
   *
   * ```ts
   * const file = await Deno.create("/foo/bar.txt");
   * ```
   *
   * Requires `allow-read` and `allow-write` permissions.
   */
  export function create(path: string | URL): Promise<FsFile>;

  /** Synchronously read from a resource ID (`rid`) into an array buffer (`buffer`).
   *
   * Returns either the number of bytes read during the operation or EOF
   * (`null`) if there was nothing more to read.
   *
   * It is possible for a read to successfully return with `0` bytes. This does
   * not indicate EOF.
   *
   * This function is one of the lowest level APIs and most users should not
   * work with this directly, but rather use Deno.readAllSync() instead.
   *
   * **It is not guaranteed that the full buffer will be read in a single call.**
   *
   * ```ts
   * // if "/foo/bar.txt" contains the text "hello world":
   * const file = Deno.openSync("/foo/bar.txt");
   * const buf = new Uint8Array(100);
   * const numberOfBytesRead = Deno.readSync(file.rid, buf); // 11 bytes
   * const text = new TextDecoder().decode(buf);  // "hello world"
   * Deno.close(file.rid);
   * ```
   */
  export function readSync(rid: number, buffer: Uint8Array): number | null;

  /** Read from a resource ID (`rid`) into an array buffer (`buffer`).
   *
   * Resolves to either the number of bytes read during the operation or EOF
   * (`null`) if there was nothing more to read.
   *
   * It is possible for a read to successfully return with `0` bytes. This does
   * not indicate EOF.
   *
   * This function is one of the lowest level APIs and most users should not
   * work with this directly, but rather use Deno.readAll() instead.
   *
   * **It is not guaranteed that the full buffer will be read in a single call.**
   *
   * ```ts
   * // if "/foo/bar.txt" contains the text "hello world":
   * const file = await Deno.open("/foo/bar.txt");
   * const buf = new Uint8Array(100);
   * const numberOfBytesRead = await Deno.read(file.rid, buf); // 11 bytes
   * const text = new TextDecoder().decode(buf);  // "hello world"
   * Deno.close(file.rid);
   * ```
   */
  export function read(rid: number, buffer: Uint8Array): Promise<number | null>;

  /** Synchronously write to the resource ID (`rid`) the contents of the array
   * buffer (`data`).
   *
   * Returns the number of bytes written.  This function is one of the lowest
   * level APIs and most users should not work with this directly, but rather use
   * `writeAllSync()` from https://deno.land/std/streams/conversion.ts instead.
   *
   * **It is not guaranteed that the full buffer will be written in a single
   * call.**
   *
   * ```ts
   * const encoder = new TextEncoder();
   * const data = encoder.encode("Hello world");
   * const file = Deno.openSync("/foo/bar.txt", {write: true});
   * const bytesWritten = Deno.writeSync(file.rid, data); // 11
   * Deno.close(file.rid);
   * ```
   */
  export function writeSync(rid: number, data: Uint8Array): number;

  /** Write to the resource ID (`rid`) the contents of the array buffer (`data`).
   *
   * Resolves to the number of bytes written.  This function is one of the lowest
   * level APIs and most users should not work with this directly, but rather use
   * Deno.writeAll() instead.
   *
   * **It is not guaranteed that the full buffer will be written in a single
   * call.**
   *
   * ```ts
   * const encoder = new TextEncoder();
   * const data = encoder.encode("Hello world");
   * const file = await Deno.open("/foo/bar.txt", { write: true });
   * const bytesWritten = await Deno.write(file.rid, data); // 11
   * Deno.close(file.rid);
   * ```
   */
  export function write(rid: number, data: Uint8Array): Promise<number>;

  /** Synchronously seek a resource ID (`rid`) to the given `offset` under mode
   * given by `whence`.  The new position within the resource (bytes from the
   * start) is returned.
   *
   * ```ts
   * const file = Deno.openSync('hello.txt', {read: true, write: true, truncate: true, create: true});
   * Deno.writeSync(file.rid, new TextEncoder().encode("Hello world"));
   *
   * // advance cursor 6 bytes
   * const cursorPosition = Deno.seekSync(file.rid, 6, Deno.SeekMode.Start);
   * console.log(cursorPosition);  // 6
   * const buf = new Uint8Array(100);
   * file.readSync(buf);
   * console.log(new TextDecoder().decode(buf)); // "world"
   * ```
   *
   * The seek modes work as follows:
   *
   * ```ts
   * // Given file.rid pointing to file with "Hello world", which is 11 bytes long:
   * const file = Deno.openSync('hello.txt', {read: true, write: true, truncate: true, create: true});
   * Deno.writeSync(file.rid, new TextEncoder().encode("Hello world"));
   *
   * // Seek 6 bytes from the start of the file
   * console.log(Deno.seekSync(file.rid, 6, Deno.SeekMode.Start)); // "6"
   * // Seek 2 more bytes from the current position
   * console.log(Deno.seekSync(file.rid, 2, Deno.SeekMode.Current)); // "8"
   * // Seek backwards 2 bytes from the end of the file
   * console.log(Deno.seekSync(file.rid, -2, Deno.SeekMode.End)); // "9" (e.g. 11-2)
   * ```
   */
  export function seekSync(
    rid: number,
    offset: number,
    whence: SeekMode,
  ): number;

  /** Seek a resource ID (`rid`) to the given `offset` under mode given by `whence`.
   * The call resolves to the new position within the resource (bytes from the start).
   *
   * ```ts
   * // Given file.rid pointing to file with "Hello world", which is 11 bytes long:
   * const file = await Deno.open('hello.txt', {read: true, write: true, truncate: true, create: true});
   * await Deno.write(file.rid, new TextEncoder().encode("Hello world"));
   *
   * // advance cursor 6 bytes
   * const cursorPosition = await Deno.seek(file.rid, 6, Deno.SeekMode.Start);
   * console.log(cursorPosition);  // 6
   * const buf = new Uint8Array(100);
   * await file.read(buf);
   * console.log(new TextDecoder().decode(buf)); // "world"
   * ```
   *
   * The seek modes work as follows:
   *
   * ```ts
   * // Given file.rid pointing to file with "Hello world", which is 11 bytes long:
   * const file = await Deno.open('hello.txt', {read: true, write: true, truncate: true, create: true});
   * await Deno.write(file.rid, new TextEncoder().encode("Hello world"));
   *
   * // Seek 6 bytes from the start of the file
   * console.log(await Deno.seek(file.rid, 6, Deno.SeekMode.Start)); // "6"
   * // Seek 2 more bytes from the current position
   * console.log(await Deno.seek(file.rid, 2, Deno.SeekMode.Current)); // "8"
   * // Seek backwards 2 bytes from the end of the file
   * console.log(await Deno.seek(file.rid, -2, Deno.SeekMode.End)); // "9" (e.g. 11-2)
   * ```
   */
  export function seek(
    rid: number,
    offset: number,
    whence: SeekMode,
  ): Promise<number>;

  /**
   * Synchronously flushes any pending data and metadata operations of the given file stream to disk.
   *  ```ts
   * const file = Deno.openSync("my_file.txt", { read: true, write: true, create: true });
   * Deno.writeSync(file.rid, new TextEncoder().encode("Hello World"));
   * Deno.ftruncateSync(file.rid, 1);
   * Deno.fsyncSync(file.rid);
   * console.log(new TextDecoder().decode(Deno.readFileSync("my_file.txt"))); // H
   * ```
   */
  export function fsyncSync(rid: number): void;

  /**
   * Flushes any pending data and metadata operations of the given file stream to disk.
   *  ```ts
   * const file = await Deno.open("my_file.txt", { read: true, write: true, create: true });
   * await Deno.write(file.rid, new TextEncoder().encode("Hello World"));
   * await Deno.ftruncate(file.rid, 1);
   * await Deno.fsync(file.rid);
   * console.log(new TextDecoder().decode(await Deno.readFile("my_file.txt"))); // H
   * ```
   */
  export function fsync(rid: number): Promise<void>;

  /*
   * Synchronously flushes any pending data operations of the given file stream to disk.
   *  ```ts
   * const file = Deno.openSync("my_file.txt", { read: true, write: true, create: true });
   * Deno.writeSync(file.rid, new TextEncoder().encode("Hello World"));
   * Deno.fdatasyncSync(file.rid);
   * console.log(new TextDecoder().decode(Deno.readFileSync("my_file.txt"))); // Hello World
   * ```
   */
  export function fdatasyncSync(rid: number): void;

  /**
   * Flushes any pending data operations of the given file stream to disk.
   *  ```ts
   * const file = await Deno.open("my_file.txt", { read: true, write: true, create: true });
   * await Deno.write(file.rid, new TextEncoder().encode("Hello World"));
   * await Deno.fdatasync(file.rid);
   * console.log(new TextDecoder().decode(await Deno.readFile("my_file.txt"))); // Hello World
   * ```
   */
  export function fdatasync(rid: number): Promise<void>;

  /** Close the given resource ID (rid) which has been previously opened, such
   * as via opening or creating a file.  Closing a file when you are finished
   * with it is important to avoid leaking resources.
   *
   * ```ts
   * const file = await Deno.open("my_file.txt");
   * // do work with "file" object
   * Deno.close(file.rid);
   * ````
   */
  export function close(rid: number): void;

  /** The Deno abstraction for reading and writing files. */
  export class FsFile
    implements
      Reader,
      ReaderSync,
      Writer,
      WriterSync,
      Seeker,
      SeekerSync,
      Closer {
    readonly rid: number;
    constructor(rid: number);
    write(p: Uint8Array): Promise<number>;
    writeSync(p: Uint8Array): number;
    truncate(len?: number): Promise<void>;
    truncateSync(len?: number): void;
    read(p: Uint8Array): Promise<number | null>;
    readSync(p: Uint8Array): number | null;
    seek(offset: number, whence: SeekMode): Promise<number>;
    seekSync(offset: number, whence: SeekMode): number;
    stat(): Promise<FileInfo>;
    statSync(): FileInfo;
    close(): void;

    readonly readable: ReadableStream<Uint8Array>;
    readonly writable: WritableStream<Uint8Array>;
  }

  /**
   * @deprecated Use `Deno.FsFile` instead. `Deno.File` will be removed in Deno 2.0.
   *
   * The Deno abstraction for reading and writing files.
   */
  export class File
    implements
      Reader,
      ReaderSync,
      Writer,
      WriterSync,
      Seeker,
      SeekerSync,
      Closer {
    readonly rid: number;
    constructor(rid: number);
    write(p: Uint8Array): Promise<number>;
    writeSync(p: Uint8Array): number;
    truncate(len?: number): Promise<void>;
    truncateSync(len?: number): void;
    read(p: Uint8Array): Promise<number | null>;
    readSync(p: Uint8Array): number | null;
    seek(offset: number, whence: SeekMode): Promise<number>;
    seekSync(offset: number, whence: SeekMode): number;
    stat(): Promise<FileInfo>;
    statSync(): FileInfo;
    close(): void;

    readonly readable: ReadableStream<Uint8Array>;
    readonly writable: WritableStream<Uint8Array>;
  }

  /** A handle for `stdin`. */
  export const stdin: Reader & ReaderSync & Closer & {
    readonly rid: number;
    readonly readable: ReadableStream<Uint8Array>;
  };
  /** A handle for `stdout`. */
  export const stdout: Writer & WriterSync & Closer & {
    readonly rid: number;
    readonly writable: WritableStream<Uint8Array>;
  };
  /** A handle for `stderr`. */
  export const stderr: Writer & WriterSync & Closer & {
    readonly rid: number;
    readonly writable: WritableStream<Uint8Array>;
  };

  export interface OpenOptions {
    /** Sets the option for read access. This option, when `true`, means that the
     * file should be read-able if opened. */
    read?: boolean;
    /** Sets the option for write access. This option, when `true`, means that
     * the file should be write-able if opened. If the file already exists,
     * any write calls on it will overwrite its contents, by default without
     * truncating it. */
    write?: boolean;
    /** Sets the option for the append mode. This option, when `true`, means that
     * writes will append to a file instead of overwriting previous contents.
     * Note that setting `{ write: true, append: true }` has the same effect as
     * setting only `{ append: true }`. */
    append?: boolean;
    /** Sets the option for truncating a previous file. If a file is
     * successfully opened with this option set it will truncate the file to `0`
     * size if it already exists. The file must be opened with write access
     * for truncate to work. */
    truncate?: boolean;
    /** Sets the option to allow creating a new file, if one doesn't already
     * exist at the specified path. Requires write or append access to be
     * used. */
    create?: boolean;
    /** Defaults to `false`. If set to `true`, no file, directory, or symlink is
     * allowed to exist at the target location. Requires write or append
     * access to be used. When createNew is set to `true`, create and truncate
     * are ignored. */
    createNew?: boolean;
    /** Permissions to use if creating the file (defaults to `0o666`, before
     * the process's umask).
     * Ignored on Windows. */
    mode?: number;
  }

  export interface ReadFileOptions {
    /**
     * An abort signal to allow cancellation of the file read operation.
     * If the signal becomes aborted the readFile operation will be stopped
     * and the promise returned will be rejected with an AbortError.
     */
    signal?: AbortSignal;
  }

  /**
   *  Check if a given resource id (`rid`) is a TTY.
   *
   * ```ts
   * // This example is system and context specific
   * const nonTTYRid = Deno.openSync("my_file.txt").rid;
   * const ttyRid = Deno.openSync("/dev/tty6").rid;
   * console.log(Deno.isatty(nonTTYRid)); // false
   * console.log(Deno.isatty(ttyRid)); // true
   * Deno.close(nonTTYRid);
   * Deno.close(ttyRid);
   * ```
   */
  export function isatty(rid: number): boolean;

  /**
   * @deprecated Use Buffer from https://deno.land/std/io/buffer.ts instead. Deno.Buffer will be removed in Deno 2.0.
   *
   * A variable-sized buffer of bytes with `read()` and `write()` methods.
   *
   * Deno.Buffer is almost always used with some I/O like files and sockets. It
   * allows one to buffer up a download from a socket. Buffer grows and shrinks
   * as necessary.
   *
   * Deno.Buffer is NOT the same thing as Node's Buffer. Node's Buffer was
   * created in 2009 before JavaScript had the concept of ArrayBuffers. It's
   * simply a non-standard ArrayBuffer.
   *
   * ArrayBuffer is a fixed memory allocation. Deno.Buffer is implemented on top
   * of ArrayBuffer.
   *
   * Based on [Go Buffer](https://golang.org/pkg/bytes/#Buffer). */
  export class Buffer implements Reader, ReaderSync, Writer, WriterSync {
    constructor(ab?: ArrayBuffer);
    /** Returns a slice holding the unread portion of the buffer.
     *
     * The slice is valid for use only until the next buffer modification (that
     * is, only until the next call to a method like `read()`, `write()`,
     * `reset()`, or `truncate()`). If `options.copy` is false the slice aliases the buffer content at
     * least until the next buffer modification, so immediate changes to the
     * slice will affect the result of future reads.
     * @param options Defaults to `{ copy: true }`
     */
    bytes(options?: { copy?: boolean }): Uint8Array;
    /** Returns whether the unread portion of the buffer is empty. */
    empty(): boolean;
    /** A read only number of bytes of the unread portion of the buffer. */
    readonly length: number;
    /** The read only capacity of the buffer's underlying byte slice, that is,
     * the total space allocated for the buffer's data. */
    readonly capacity: number;
    /** Discards all but the first `n` unread bytes from the buffer but
     * continues to use the same allocated storage. It throws if `n` is
     * negative or greater than the length of the buffer. */
    truncate(n: number): void;
    /** Resets the buffer to be empty, but it retains the underlying storage for
     * use by future writes. `.reset()` is the same as `.truncate(0)`. */
    reset(): void;
    /** Reads the next `p.length` bytes from the buffer or until the buffer is
     * drained. Returns the number of bytes read. If the buffer has no data to
     * return, the return is EOF (`null`). */
    readSync(p: Uint8Array): number | null;
    /** Reads the next `p.length` bytes from the buffer or until the buffer is
     * drained. Resolves to the number of bytes read. If the buffer has no
     * data to return, resolves to EOF (`null`).
     *
     * NOTE: This methods reads bytes synchronously; it's provided for
     * compatibility with `Reader` interfaces.
     */
    read(p: Uint8Array): Promise<number | null>;
    writeSync(p: Uint8Array): number;
    /** NOTE: This methods writes bytes synchronously; it's provided for
     * compatibility with `Writer` interface. */
    write(p: Uint8Array): Promise<number>;
    /** Grows the buffer's capacity, if necessary, to guarantee space for
     * another `n` bytes. After `.grow(n)`, at least `n` bytes can be written to
     * the buffer without another allocation. If `n` is negative, `.grow()` will
     * throw. If the buffer can't grow it will throw an error.
     *
     * Based on Go Lang's
     * [Buffer.Grow](https://golang.org/pkg/bytes/#Buffer.Grow). */
    grow(n: number): void;
    /** Reads data from `r` until EOF (`null`) and appends it to the buffer,
     * growing the buffer as needed. It resolves to the number of bytes read.
     * If the buffer becomes too large, `.readFrom()` will reject with an error.
     *
     * Based on Go Lang's
     * [Buffer.ReadFrom](https://golang.org/pkg/bytes/#Buffer.ReadFrom). */
    readFrom(r: Reader): Promise<number>;
    /** Reads data from `r` until EOF (`null`) and appends it to the buffer,
     * growing the buffer as needed. It returns the number of bytes read. If the
     * buffer becomes too large, `.readFromSync()` will throw an error.
     *
     * Based on Go Lang's
     * [Buffer.ReadFrom](https://golang.org/pkg/bytes/#Buffer.ReadFrom). */
    readFromSync(r: ReaderSync): number;
  }

  /**
   * Read Reader `r` until EOF (`null`) and resolve to the content as
   * Uint8Array`.
   *
   * ```ts
   * // Example from stdin
   * const stdinContent = await Deno.readAll(Deno.stdin);
   *
   * // Example from file
   * const file = await Deno.open("my_file.txt", {read: true});
   * const myFileContent = await Deno.readAll(file);
   * Deno.close(file.rid);
   *
   * // Example from buffer
   * const myData = new Uint8Array(100);
   * // ... fill myData array with data
   * const reader = new Deno.Buffer(myData.buffer as ArrayBuffer);
   * const bufferContent = await Deno.readAll(reader);
   * ```
   *
   * @deprecated Use `readAll` from https://deno.land/std/streams/conversion.ts
   * instead. `Deno.readAll` will be removed in Deno 2.0.
   */
  export function readAll(r: Reader): Promise<Uint8Array>;

  /**
   * Synchronously reads Reader `r` until EOF (`null`) and returns the content
   * as `Uint8Array`.
   *
   * ```ts
   * // Example from stdin
   * const stdinContent = Deno.readAllSync(Deno.stdin);
   *
   * // Example from file
   * const file = Deno.openSync("my_file.txt", {read: true});
   * const myFileContent = Deno.readAllSync(file);
   * Deno.close(file.rid);
   *
   * // Example from buffer
   * const myData = new Uint8Array(100);
   * // ... fill myData array with data
   * const reader = new Deno.Buffer(myData.buffer as ArrayBuffer);
   * const bufferContent = Deno.readAllSync(reader);
   * ```
   *
   * @deprecated Use `readAllSync` from
   * https://deno.land/std/streams/conversion.ts instead. `Deno.readAllSync`
   * will be removed in Deno 2.0.
   */
  export function readAllSync(r: ReaderSync): Uint8Array;

  /**
   * Write all the content of the array buffer (`arr`) to the writer (`w`).
   *
   * ```ts
   * // Example writing to stdout
   * const contentBytes = new TextEncoder().encode("Hello World");
   * await Deno.writeAll(Deno.stdout, contentBytes);
   * ```
   *
   * ```ts
   * // Example writing to file
   * const contentBytes = new TextEncoder().encode("Hello World");
   * const file = await Deno.open('test.file', {write: true});
   * await Deno.writeAll(file, contentBytes);
   * Deno.close(file.rid);
   * ```
   *
   * ```ts
   * // Example writing to buffer
   * const contentBytes = new TextEncoder().encode("Hello World");
   * const writer = new Deno.Buffer();
   * await Deno.writeAll(writer, contentBytes);
   * console.log(writer.bytes().length);  // 11
   * ```
   *
   * @deprecated Use `writeAll` from https://deno.land/std/streams/conversion.ts
   * instead. `Deno.writeAll` will be removed in Deno 2.0.
   */
  export function writeAll(w: Writer, arr: Uint8Array): Promise<void>;

  /**
   * Synchronously write all the content of the array buffer (`arr`) to the
   * writer (`w`).
   *
   * ```ts
   * // Example writing to stdout
   * const contentBytes = new TextEncoder().encode("Hello World");
   * Deno.writeAllSync(Deno.stdout, contentBytes);
   * ```
   *
   * ```ts
   * // Example writing to file
   * const contentBytes = new TextEncoder().encode("Hello World");
   * const file = Deno.openSync('test.file', {write: true});
   * Deno.writeAllSync(file, contentBytes);
   * Deno.close(file.rid);
   * ```
   *
   * ```ts
   * // Example writing to buffer
   * const contentBytes = new TextEncoder().encode("Hello World");
   * const writer = new Deno.Buffer();
   * Deno.writeAllSync(writer, contentBytes);
   * console.log(writer.bytes().length);  // 11
   * ```
   *
   * @deprecated Use `writeAllSync` from
   * https://deno.land/std/streams/conversion.ts instead. `Deno.writeAllSync`
   * will be removed in Deno 2.0.
   */
  export function writeAllSync(w: WriterSync, arr: Uint8Array): void;

  export interface MkdirOptions {
    /** Defaults to `false`. If set to `true`, means that any intermediate
     * directories will also be created (as with the shell command `mkdir -p`).
     * Intermediate directories are created with the same permissions.
     * When recursive is set to `true`, succeeds silently (without changing any
     * permissions) if a directory already exists at the path, or if the path
     * is a symlink to an existing directory. */
    recursive?: boolean;
    /** Permissions to use when creating the directory (defaults to `0o777`,
     * before the process's umask).
     * Ignored on Windows. */
    mode?: number;
  }

  /** Synchronously creates a new directory with the specified path.
   *
   * ```ts
   * Deno.mkdirSync("new_dir");
   * Deno.mkdirSync("nested/directories", { recursive: true });
   * Deno.mkdirSync("restricted_access_dir", { mode: 0o700 });
   * ```
   *
   * Defaults to throwing error if the directory already exists.
   *
   * Requires `allow-write` permission. */
  export function mkdirSync(path: string | URL, options?: MkdirOptions): void;

  /** Creates a new directory with the specified path.
   *
   * ```ts
   * await Deno.mkdir("new_dir");
   * await Deno.mkdir("nested/directories", { recursive: true });
   * await Deno.mkdir("restricted_access_dir", { mode: 0o700 });
   * ```
   *
   * Defaults to throwing error if the directory already exists.
   *
   * Requires `allow-write` permission. */
  export function mkdir(
    path: string | URL,
    options?: MkdirOptions,
  ): Promise<void>;

  export interface MakeTempOptions {
    /** Directory where the temporary directory should be created (defaults to
     * the env variable TMPDIR, or the system's default, usually /tmp).
     *
     * Note that if the passed `dir` is relative, the path returned by
     * makeTempFile() and makeTempDir() will also be relative. Be mindful of
     * this when changing working directory. */
    dir?: string;
    /** String that should precede the random portion of the temporary
     * directory's name. */
    prefix?: string;
    /** String that should follow the random portion of the temporary
     * directory's name. */
    suffix?: string;
  }

  /** Synchronously creates a new temporary directory in the default directory
   * for temporary files, unless `dir` is specified. Other optional options
   * include prefixing and suffixing the directory name with `prefix` and
   * `suffix` respectively.
   *
   * The full path to the newly created directory is returned.
   *
   * Multiple programs calling this function simultaneously will create different
   * directories. It is the caller's responsibility to remove the directory when
   * no longer needed.
   *
   * ```ts
   * const tempDirName0 = Deno.makeTempDirSync();  // e.g. /tmp/2894ea76
   * const tempDirName1 = Deno.makeTempDirSync({ prefix: 'my_temp' });  // e.g. /tmp/my_temp339c944d
   * ```
   *
   * Requires `allow-write` permission. */
  // TODO(ry) Doesn't check permissions.
  export function makeTempDirSync(options?: MakeTempOptions): string;

  /** Creates a new temporary directory in the default directory for temporary
   * files, unless `dir` is specified. Other optional options include
   * prefixing and suffixing the directory name with `prefix` and `suffix`
   * respectively.
   *
   * This call resolves to the full path to the newly created directory.
   *
   * Multiple programs calling this function simultaneously will create different
   * directories. It is the caller's responsibility to remove the directory when
   * no longer needed.
   *
   * ```ts
   * const tempDirName0 = await Deno.makeTempDir();  // e.g. /tmp/2894ea76
   * const tempDirName1 = await Deno.makeTempDir({ prefix: 'my_temp' }); // e.g. /tmp/my_temp339c944d
   * ```
   *
   * Requires `allow-write` permission. */
  // TODO(ry) Doesn't check permissions.
  export function makeTempDir(options?: MakeTempOptions): Promise<string>;

  /** Synchronously creates a new temporary file in the default directory for
   * temporary files, unless `dir` is specified.
   * Other optional options include prefixing and suffixing the directory name
   * with `prefix` and `suffix` respectively.
   *
   * The full path to the newly created file is returned.
   *
   * Multiple programs calling this function simultaneously will create different
   * files. It is the caller's responsibility to remove the file when no longer
   * needed.
   *
   * ```ts
   * const tempFileName0 = Deno.makeTempFileSync(); // e.g. /tmp/419e0bf2
   * const tempFileName1 = Deno.makeTempFileSync({ prefix: 'my_temp' });  // e.g. /tmp/my_temp754d3098
   * ```
   *
   * Requires `allow-write` permission. */
  export function makeTempFileSync(options?: MakeTempOptions): string;

  /** Creates a new temporary file in the default directory for temporary
   * files, unless `dir` is specified.  Other
   * optional options include prefixing and suffixing the directory name with
   * `prefix` and `suffix` respectively.
   *
   * This call resolves to the full path to the newly created file.
   *
   * Multiple programs calling this function simultaneously will create different
   * files. It is the caller's responsibility to remove the file when no longer
   * needed.
   *
   * ```ts
   * const tmpFileName0 = await Deno.makeTempFile();  // e.g. /tmp/419e0bf2
   * const tmpFileName1 = await Deno.makeTempFile({ prefix: 'my_temp' });  // e.g. /tmp/my_temp754d3098
   * ```
   *
   * Requires `allow-write` permission. */
  export function makeTempFile(options?: MakeTempOptions): Promise<string>;

  /** Synchronously changes the permission of a specific file/directory of
   * specified path.  Ignores the process's umask.
   *
   * ```ts
   * Deno.chmodSync("/path/to/file", 0o666);
   * ```
   *
   * For a full description, see [chmod](#Deno.chmod)
   *
   * NOTE: This API currently throws on Windows
   *
   * Requires `allow-write` permission. */
  export function chmodSync(path: string | URL, mode: number): void;

  /** Changes the permission of a specific file/directory of specified path.
   * Ignores the process's umask.
   *
   * ```ts
   * await Deno.chmod("/path/to/file", 0o666);
   * ```
   *
   * The mode is a sequence of 3 octal numbers.  The first/left-most number
   * specifies the permissions for the owner.  The second number specifies the
   * permissions for the group. The last/right-most number specifies the
   * permissions for others.  For example, with a mode of 0o764, the owner (7) can
   * read/write/execute, the group (6) can read/write and everyone else (4) can
   * read only.
   *
   * | Number | Description |
   * | ------ | ----------- |
   * | 7      | read, write, and execute |
   * | 6      | read and write |
   * | 5      | read and execute |
   * | 4      | read only |
   * | 3      | write and execute |
   * | 2      | write only |
   * | 1      | execute only |
   * | 0      | no permission |
   *
   * NOTE: This API currently throws on Windows
   *
   * Requires `allow-write` permission. */
  export function chmod(path: string | URL, mode: number): Promise<void>;

  /** Synchronously change owner of a regular file or directory. This functionality
   * is not available on Windows.
   *
   * ```ts
   * Deno.chownSync("myFile.txt", 1000, 1002);
   * ```
   *
   * Requires `allow-write` permission.
   *
   * Throws Error (not implemented) if executed on Windows
   *
   * @param path path to the file
   * @param uid user id (UID) of the new owner, or `null` for no change
   * @param gid group id (GID) of the new owner, or `null` for no change
   */
  export function chownSync(
    path: string | URL,
    uid: number | null,
    gid: number | null,
  ): void;

  /** Change owner of a regular file or directory. This functionality
   * is not available on Windows.
   *
   * ```ts
   * await Deno.chown("myFile.txt", 1000, 1002);
   * ```
   *
   * Requires `allow-write` permission.
   *
   * Throws Error (not implemented) if executed on Windows
   *
   * @param path path to the file
   * @param uid user id (UID) of the new owner, or `null` for no change
   * @param gid group id (GID) of the new owner, or `null` for no change
   */
  export function chown(
    path: string | URL,
    uid: number | null,
    gid: number | null,
  ): Promise<void>;

  export interface RemoveOptions {
    /** Defaults to `false`. If set to `true`, path will be removed even if
     * it's a non-empty directory. */
    recursive?: boolean;
  }

  /** Synchronously removes the named file or directory.
   *
   * ```ts
   * Deno.removeSync("/path/to/empty_dir/or/file");
   * Deno.removeSync("/path/to/populated_dir/or/file", { recursive: true });
   * ```
   *
   * Throws error if permission denied, path not found, or path is a non-empty
   * directory and the `recursive` option isn't set to `true`.
   *
   * Requires `allow-write` permission. */
  export function removeSync(path: string | URL, options?: RemoveOptions): void;

  /** Removes the named file or directory.
   *
   * ```ts
   * await Deno.remove("/path/to/empty_dir/or/file");
   * await Deno.remove("/path/to/populated_dir/or/file", { recursive: true });
   * ```
   *
   * Throws error if permission denied, path not found, or path is a non-empty
   * directory and the `recursive` option isn't set to `true`.
   *
   * Requires `allow-write` permission. */
  export function remove(
    path: string | URL,
    options?: RemoveOptions,
  ): Promise<void>;

  /** Synchronously renames (moves) `oldpath` to `newpath`. Paths may be files or
   * directories.  If `newpath` already exists and is not a directory,
   * `renameSync()` replaces it. OS-specific restrictions may apply when
   * `oldpath` and `newpath` are in different directories.
   *
   * ```ts
   * Deno.renameSync("old/path", "new/path");
   * ```
   *
   * On Unix, this operation does not follow symlinks at either path.
   *
   * It varies between platforms when the operation throws errors, and if so what
   * they are. It's always an error to rename anything to a non-empty directory.
   *
   * Requires `allow-read` and `allow-write` permissions. */
  export function renameSync(
    oldpath: string | URL,
    newpath: string | URL,
  ): void;

  /** Renames (moves) `oldpath` to `newpath`.  Paths may be files or directories.
   * If `newpath` already exists and is not a directory, `rename()` replaces it.
   * OS-specific restrictions may apply when `oldpath` and `newpath` are in
   * different directories.
   *
   * ```ts
   * await Deno.rename("old/path", "new/path");
   * ```
   *
   * On Unix, this operation does not follow symlinks at either path.
   *
   * It varies between platforms when the operation throws errors, and if so what
   * they are. It's always an error to rename anything to a non-empty directory.
   *
   * Requires `allow-read` and `allow-write` permission. */
  export function rename(
    oldpath: string | URL,
    newpath: string | URL,
  ): Promise<void>;

  /** Synchronously reads and returns the entire contents of a file as utf8
   *  encoded string. Reading a directory throws an error.
   *
   * ```ts
   * const data = Deno.readTextFileSync("hello.txt");
   * console.log(data);
   * ```
   *
   * Requires `allow-read` permission. */
  export function readTextFileSync(path: string | URL): string;

  /** Asynchronously reads and returns the entire contents of a file as utf8
   *  encoded string. Reading a directory throws an error.
   *
   * ```ts
   * const data = await Deno.readTextFile("hello.txt");
   * console.log(data);
   * ```
   *
   * Requires `allow-read` permission. */
  export function readTextFile(
    path: string | URL,
    options?: ReadFileOptions,
  ): Promise<string>;

  /** Synchronously reads and returns the entire contents of a file as an array
   * of bytes. `TextDecoder` can be used to transform the bytes to string if
   * required.  Reading a directory returns an empty data array.
   *
   * ```ts
   * const decoder = new TextDecoder("utf-8");
   * const data = Deno.readFileSync("hello.txt");
   * console.log(decoder.decode(data));
   * ```
   *
   * Requires `allow-read` permission. */
  export function readFileSync(path: string | URL): Uint8Array;

  /** Reads and resolves to the entire contents of a file as an array of bytes.
   * `TextDecoder` can be used to transform the bytes to string if required.
   * Reading a directory returns an empty data array.
   *
   * ```ts
   * const decoder = new TextDecoder("utf-8");
   * const data = await Deno.readFile("hello.txt");
   * console.log(decoder.decode(data));
   * ```
   *
   * Requires `allow-read` permission. */
  export function readFile(
    path: string | URL,
    options?: ReadFileOptions,
  ): Promise<Uint8Array>;

  /** A FileInfo describes a file and is returned by `stat`, `lstat`,
   * `statSync`, `lstatSync`. */
  export interface FileInfo {
    /** True if this is info for a regular file. Mutually exclusive to
     * `FileInfo.isDirectory` and `FileInfo.isSymlink`. */
    isFile: boolean;
    /** True if this is info for a regular directory. Mutually exclusive to
     * `FileInfo.isFile` and `FileInfo.isSymlink`. */
    isDirectory: boolean;
    /** True if this is info for a symlink. Mutually exclusive to
     * `FileInfo.isFile` and `FileInfo.isDirectory`. */
    isSymlink: boolean;
    /** The size of the file, in bytes. */
    size: number;
    /** The last modification time of the file. This corresponds to the `mtime`
     * field from `stat` on Linux/Mac OS and `ftLastWriteTime` on Windows. This
     * may not be available on all platforms. */
    mtime: Date | null;
    /** The last access time of the file. This corresponds to the `atime`
     * field from `stat` on Unix and `ftLastAccessTime` on Windows. This may not
     * be available on all platforms. */
    atime: Date | null;
    /** The creation time of the file. This corresponds to the `birthtime`
     * field from `stat` on Mac/BSD and `ftCreationTime` on Windows. This may
     * not be available on all platforms. */
    birthtime: Date | null;
    /** ID of the device containing the file.
     *
     * _Linux/Mac OS only._ */
    dev: number | null;
    /** Inode number.
     *
     * _Linux/Mac OS only._ */
    ino: number | null;
    /** **UNSTABLE**: Match behavior with Go on Windows for `mode`.
     *
     * The underlying raw `st_mode` bits that contain the standard Unix
     * permissions for this file/directory. */
    mode: number | null;
    /** Number of hard links pointing to this file.
     *
     * _Linux/Mac OS only._ */
    nlink: number | null;
    /** User ID of the owner of this file.
     *
     * _Linux/Mac OS only._ */
    uid: number | null;
    /** Group ID of the owner of this file.
     *
     * _Linux/Mac OS only._ */
    gid: number | null;
    /** Device ID of this file.
     *
     * _Linux/Mac OS only._ */
    rdev: number | null;
    /** Blocksize for filesystem I/O.
     *
     * _Linux/Mac OS only._ */
    blksize: number | null;
    /** Number of blocks allocated to the file, in 512-byte units.
     *
     * _Linux/Mac OS only._ */
    blocks: number | null;
  }

  /** Returns absolute normalized path, with symbolic links resolved.
   *
   * ```ts
   * // e.g. given /home/alice/file.txt and current directory /home/alice
   * Deno.symlinkSync("file.txt", "symlink_file.txt");
   * const realPath = Deno.realPathSync("./file.txt");
   * const realSymLinkPath = Deno.realPathSync("./symlink_file.txt");
   * console.log(realPath);  // outputs "/home/alice/file.txt"
   * console.log(realSymLinkPath);  // outputs "/home/alice/file.txt"
   * ```
   *
   * Requires `allow-read` permission for the target path.
   * Also requires `allow-read` permission for the CWD if the target path is
   * relative. */
  export function realPathSync(path: string | URL): string;

  /** Resolves to the absolute normalized path, with symbolic links resolved.
   *
   * ```ts
   * // e.g. given /home/alice/file.txt and current directory /home/alice
   * await Deno.symlink("file.txt", "symlink_file.txt");
   * const realPath = await Deno.realPath("./file.txt");
   * const realSymLinkPath = await Deno.realPath("./symlink_file.txt");
   * console.log(realPath);  // outputs "/home/alice/file.txt"
   * console.log(realSymLinkPath);  // outputs "/home/alice/file.txt"
   * ```
   *
   * Requires `allow-read` permission for the target path.
   * Also requires `allow-read` permission for the CWD if the target path is
   * relative. */
  export function realPath(path: string | URL): Promise<string>;

  export interface DirEntry {
    name: string;
    isFile: boolean;
    isDirectory: boolean;
    isSymlink: boolean;
  }

  /** Synchronously reads the directory given by `path` and returns an iterable
   * of `Deno.DirEntry`.
   *
   * ```ts
   * for (const dirEntry of Deno.readDirSync("/")) {
   *   console.log(dirEntry.name);
   * }
   * ```
   *
   * Throws error if `path` is not a directory.
   *
   * Requires `allow-read` permission. */
  export function readDirSync(path: string | URL): Iterable<DirEntry>;

  /** Reads the directory given by `path` and returns an async iterable of
   * `Deno.DirEntry`.
   *
   * ```ts
   * for await (const dirEntry of Deno.readDir("/")) {
   *   console.log(dirEntry.name);
   * }
   * ```
   *
   * Throws error if `path` is not a directory.
   *
   * Requires `allow-read` permission. */
  export function readDir(path: string | URL): AsyncIterable<DirEntry>;

  /** Synchronously copies the contents and permissions of one file to another
   * specified path, by default creating a new file if needed, else overwriting.
   * Fails if target path is a directory or is unwritable.
   *
   * ```ts
   * Deno.copyFileSync("from.txt", "to.txt");
   * ```
   *
   * Requires `allow-read` permission on fromPath.
   * Requires `allow-write` permission on toPath. */
  export function copyFileSync(
    fromPath: string | URL,
    toPath: string | URL,
  ): void;

  /** Copies the contents and permissions of one file to another specified path,
   * by default creating a new file if needed, else overwriting. Fails if target
   * path is a directory or is unwritable.
   *
   * ```ts
   * await Deno.copyFile("from.txt", "to.txt");
   * ```
   *
   * Requires `allow-read` permission on fromPath.
   * Requires `allow-write` permission on toPath. */
  export function copyFile(
    fromPath: string | URL,
    toPath: string | URL,
  ): Promise<void>;

  /** Returns the full path destination of the named symbolic link.
   *
   * ```ts
   * Deno.symlinkSync("./test.txt", "./test_link.txt");
   * const target = Deno.readLinkSync("./test_link.txt"); // full path of ./test.txt
   * ```
   *
   * Throws TypeError if called with a hard link
   *
   * Requires `allow-read` permission. */
  export function readLinkSync(path: string | URL): string;

  /** Resolves to the full path destination of the named symbolic link.
   *
   * ```ts
   * await Deno.symlink("./test.txt", "./test_link.txt");
   * const target = await Deno.readLink("./test_link.txt"); // full path of ./test.txt
   * ```
   *
   * Throws TypeError if called with a hard link
   *
   * Requires `allow-read` permission. */
  export function readLink(path: string | URL): Promise<string>;

  /** Resolves to a `Deno.FileInfo` for the specified `path`. If `path` is a
   * symlink, information for the symlink will be returned instead of what it
   * points to.
   *
   * ```ts
   * import { assert } from "https://deno.land/std/testing/asserts.ts";
   * const fileInfo = await Deno.lstat("hello.txt");
   * assert(fileInfo.isFile);
   * ```
   *
   * Requires `allow-read` permission. */
  export function lstat(path: string | URL): Promise<FileInfo>;

  /** Synchronously returns a `Deno.FileInfo` for the specified `path`. If
   * `path` is a symlink, information for the symlink will be returned instead of
   * what it points to..
   *
   * ```ts
   * import { assert } from "https://deno.land/std/testing/asserts.ts";
   * const fileInfo = Deno.lstatSync("hello.txt");
   * assert(fileInfo.isFile);
   * ```
   *
   * Requires `allow-read` permission. */
  export function lstatSync(path: string | URL): FileInfo;

  /** Resolves to a `Deno.FileInfo` for the specified `path`. Will always
   * follow symlinks.
   *
   * ```ts
   * import { assert } from "https://deno.land/std/testing/asserts.ts";
   * const fileInfo = await Deno.stat("hello.txt");
   * assert(fileInfo.isFile);
   * ```
   *
   * Requires `allow-read` permission. */
  export function stat(path: string | URL): Promise<FileInfo>;

  /** Synchronously returns a `Deno.FileInfo` for the specified `path`. Will
   * always follow symlinks.
   *
   * ```ts
   * import { assert } from "https://deno.land/std/testing/asserts.ts";
   * const fileInfo = Deno.statSync("hello.txt");
   * assert(fileInfo.isFile);
   * ```
   *
   * Requires `allow-read` permission. */
  export function statSync(path: string | URL): FileInfo;

  /** Options for writing to a file. */
  export interface WriteFileOptions {
    /** Defaults to `false`. If set to `true`, will append to a file instead of
     * overwriting previous contents. */
    append?: boolean;
    /** Sets the option to allow creating a new file, if one doesn't already
     * exist at the specified path (defaults to `true`). */
    create?: boolean;
    /** Permissions always applied to file. */
    mode?: number;
    /**
     * An abort signal to allow cancellation of the file write operation.
     * If the signal becomes aborted the writeFile operation will be stopped
     * and the promise returned will be rejected with an AbortError.
     */
    signal?: AbortSignal;
  }

  /** Synchronously write `data` to the given `path`, by default creating a new
   * file if needed, else overwriting.
   *
   * ```ts
   * const encoder = new TextEncoder();
   * const data = encoder.encode("Hello world\n");
   * Deno.writeFileSync("hello1.txt", data);  // overwrite "hello1.txt" or create it
   * Deno.writeFileSync("hello2.txt", data, {create: false});  // only works if "hello2.txt" exists
   * Deno.writeFileSync("hello3.txt", data, {mode: 0o777});  // set permissions on new file
   * Deno.writeFileSync("hello4.txt", data, {append: true});  // add data to the end of the file
   * ```
   *
   * Requires `allow-write` permission, and `allow-read` if `options.create` is
   * `false`.
   */
  export function writeFileSync(
    path: string | URL,
    data: Uint8Array,
    options?: WriteFileOptions,
  ): void;

  /** Write `data` to the given `path`, by default creating a new file if needed,
   * else overwriting.
   *
   * ```ts
   * const encoder = new TextEncoder();
   * const data = encoder.encode("Hello world\n");
   * await Deno.writeFile("hello1.txt", data);  // overwrite "hello1.txt" or create it
   * await Deno.writeFile("hello2.txt", data, {create: false});  // only works if "hello2.txt" exists
   * await Deno.writeFile("hello3.txt", data, {mode: 0o777});  // set permissions on new file
   * await Deno.writeFile("hello4.txt", data, {append: true});  // add data to the end of the file
   * ```
   *
   * Requires `allow-write` permission, and `allow-read` if `options.create` is `false`.
   */
  export function writeFile(
    path: string | URL,
    data: Uint8Array,
    options?: WriteFileOptions,
  ): Promise<void>;

  /** Synchronously write string `data` to the given `path`, by default creating a new file if needed,
   * else overwriting.
   *
   * ```ts
   * Deno.writeTextFileSync("hello1.txt", "Hello world\n");  // overwrite "hello1.txt" or create it
   * ```
   *
   * Requires `allow-write` permission, and `allow-read` if `options.create` is `false`.
   */
  export function writeTextFileSync(
    path: string | URL,
    data: string,
    options?: WriteFileOptions,
  ): void;

  /** Asynchronously write string `data` to the given `path`, by default creating a new file if needed,
   * else overwriting.
   *
   * ```ts
   * await Deno.writeTextFile("hello1.txt", "Hello world\n");  // overwrite "hello1.txt" or create it
   * ```
   *
   * Requires `allow-write` permission, and `allow-read` if `options.create` is `false`.
   */
  export function writeTextFile(
    path: string | URL,
    data: string,
    options?: WriteFileOptions,
  ): Promise<void>;

  /** Synchronously truncates or extends the specified file, to reach the
   * specified `len`.  If `len` is not specified then the entire file contents
   * are truncated.
   *
   * ```ts
   * // truncate the entire file
   * Deno.truncateSync("my_file.txt");
   *
   * // truncate part of the file
   * const file = Deno.makeTempFileSync();
   * Deno.writeFileSync(file, new TextEncoder().encode("Hello World"));
   * Deno.truncateSync(file, 7);
   * const data = Deno.readFileSync(file);
   * console.log(new TextDecoder().decode(data));
   * ```
   *
   * Requires `allow-write` permission. */
  export function truncateSync(name: string, len?: number): void;

  /** Truncates or extends the specified file, to reach the specified `len`. If
   * `len` is not specified then the entire file contents are truncated.
   *
   * ```ts
   * // truncate the entire file
   * await Deno.truncate("my_file.txt");
   *
   * // truncate part of the file
   * const file = await Deno.makeTempFile();
   * await Deno.writeFile(file, new TextEncoder().encode("Hello World"));
   * await Deno.truncate(file, 7);
   * const data = await Deno.readFile(file);
   * console.log(new TextDecoder().decode(data));  // "Hello W"
   * ```
   *
   * Requires `allow-write` permission. */
  export function truncate(name: string, len?: number): Promise<void>;

  export interface OpMetrics {
    opsDispatched: number;
    opsDispatchedSync: number;
    opsDispatchedAsync: number;
    opsDispatchedAsyncUnref: number;
    opsCompleted: number;
    opsCompletedSync: number;
    opsCompletedAsync: number;
    opsCompletedAsyncUnref: number;
    bytesSentControl: number;
    bytesSentData: number;
    bytesReceived: number;
  }

  export interface Metrics extends OpMetrics {
    ops: Record<string, OpMetrics>;
  }

  /** Receive metrics from the privileged side of Deno. This is primarily used
   * in the development of Deno. 'Ops', also called 'bindings', are the go-between
   * between Deno JavaScript and Deno Rust.
   *
   *      > console.table(Deno.metrics())
   *      ┌─────────────────────────┬────────┐
   *      │         (index)         │ Values │
   *      ├─────────────────────────┼────────┤
   *      │      opsDispatched      │   3    │
   *      │    opsDispatchedSync    │   2    │
   *      │   opsDispatchedAsync    │   1    │
   *      │ opsDispatchedAsyncUnref │   0    │
   *      │      opsCompleted       │   3    │
   *      │    opsCompletedSync     │   2    │
   *      │    opsCompletedAsync    │   1    │
   *      │ opsCompletedAsyncUnref  │   0    │
   *      │    bytesSentControl     │   73   │
   *      │      bytesSentData      │   0    │
   *      │      bytesReceived      │  375   │
   *      └─────────────────────────┴────────┘
   */
  export function metrics(): Metrics;

  interface ResourceMap {
    // deno-lint-ignore no-explicit-any
    [rid: number]: any;
  }

  /** Returns a map of open resource ids (rid) along with their string
   * representations. This is an internal API and as such resource
   * representation has `any` type; that means it can change any time.
   *
   * ```ts
   * console.log(Deno.resources());
   * // { 0: "stdin", 1: "stdout", 2: "stderr" }
   * Deno.openSync('../test.file');
   * console.log(Deno.resources());
   * // { 0: "stdin", 1: "stdout", 2: "stderr", 3: "fsFile" }
   * ```
   */
  export function resources(): ResourceMap;

  /**
   * Additional information for FsEvent objects with the "other" kind.
   *
   * - "rescan": rescan notices indicate either a lapse in the events or a
   *    change in the filesystem such that events received so far can no longer
   *    be relied on to represent the state of the filesystem now. An
   *    application that simply reacts to file changes may not care about this.
   *    An application that keeps an in-memory representation of the filesystem
   *    will need to care, and will need to refresh that representation directly
   *    from the filesystem.
   */
  export type FsEventFlag = "rescan";

  export interface FsEvent {
    kind: "any" | "access" | "create" | "modify" | "remove" | "other";
    paths: string[];
    flag?: FsEventFlag;
  }

  /**
   * FsWatcher is returned by `Deno.watchFs` function when you start watching
   * the file system. You can iterate over this interface to get the file
   * system events, and also you can stop watching the file system by calling
   * `.close()` method.
   */
  export interface FsWatcher extends AsyncIterable<FsEvent> {
    /** The resource id of the `FsWatcher`. */
    readonly rid: number;
    /** Stops watching the file system and closes the watcher resource. */
    close(): void;
    /**
     * Stops watching the file system and closes the watcher resource.
     *
     * @deprecated Will be removed at 2.0.
     */
    return?(value?: any): Promise<IteratorResult<FsEvent>>;
    [Symbol.asyncIterator](): AsyncIterableIterator<FsEvent>;
  }

  /** Watch for file system events against one or more `paths`, which can be files
   * or directories.  These paths must exist already.  One user action (e.g.
   * `touch test.file`) can  generate multiple file system events.  Likewise,
   * one user action can result in multiple file paths in one event (e.g. `mv
   * old_name.txt new_name.txt`).  Recursive option is `true` by default and,
   * for directories, will watch the specified directory and all sub directories.
   * Note that the exact ordering of the events can vary between operating systems.
   *
   * ```ts
   * const watcher = Deno.watchFs("/");
   * for await (const event of watcher) {
   *    console.log(">>>> event", event);
   *    // { kind: "create", paths: [ "/foo.txt" ] }
   * }
   * ```
   *
   * Requires `allow-read` permission.
   *
   * Call `watcher.close()` to stop watching.
   *
   * ```ts
   * const watcher = Deno.watchFs("/");
   *
   * setTimeout(() => {
   *   watcher.close();
   * }, 5000);
   *
   * for await (const event of watcher) {
   *    console.log(">>>> event", event);
   * }
   * ```
   */
  export function watchFs(
    paths: string | string[],
    options?: { recursive: boolean },
  ): FsWatcher;

  export class Process<T extends RunOptions = RunOptions> {
    readonly rid: number;
    readonly pid: number;
    readonly stdin: T["stdin"] extends "piped" ? Writer & Closer & {
      writable: WritableStream<Uint8Array>;
    }
      : (Writer & Closer & { writable: WritableStream<Uint8Array> }) | null;
    readonly stdout: T["stdout"] extends "piped" ? Reader & Closer & {
      readable: ReadableStream<Uint8Array>;
    }
      : (Reader & Closer & { readable: ReadableStream<Uint8Array> }) | null;
    readonly stderr: T["stderr"] extends "piped" ? Reader & Closer & {
      readable: ReadableStream<Uint8Array>;
    }
      : (Reader & Closer & { readable: ReadableStream<Uint8Array> }) | null;
    /** Wait for the process to exit and return its exit status.
     *
     * Calling this function multiple times will return the same status.
     *
     * Stdin handle to the process will be closed before waiting to avoid
     * a deadlock.
     *
     * If `stdout` and/or `stderr` were set to `"piped"`, they must be closed
     * manually before the process can exit.
     *
     * To run process to completion and collect output from both `stdout` and
     * `stderr` use:
     *
     * ```ts
     * const p = Deno.run({ cmd: [ "echo", "hello world" ], stderr: 'piped', stdout: 'piped' });
     * const [status, stdout, stderr] = await Promise.all([
     *   p.status(),
     *   p.output(),
     *   p.stderrOutput()
     * ]);
     * p.close();
     * ```
     */
    status(): Promise<ProcessStatus>;
    /** Buffer the stdout until EOF and return it as `Uint8Array`.
     *
     * You must set stdout to `"piped"` when creating the process.
     *
     * This calls `close()` on stdout after its done. */
    output(): Promise<Uint8Array>;
    /** Buffer the stderr until EOF and return it as `Uint8Array`.
     *
     * You must set stderr to `"piped"` when creating the process.
     *
     * This calls `close()` on stderr after its done. */
    stderrOutput(): Promise<Uint8Array>;
    close(): void;

    /** Send a signal to process.
     *
     * ```ts
     * const p = Deno.run({ cmd: [ "sleep", "20" ]});
     * p.kill("SIGTERM");
     * p.close();
     * ```
     */
    kill(signo: Signal): void;
  }

  export type Signal =
    | "SIGABRT"
    | "SIGALRM"
    | "SIGBUS"
    | "SIGCHLD"
    | "SIGCONT"
    | "SIGEMT"
    | "SIGFPE"
    | "SIGHUP"
    | "SIGILL"
    | "SIGINFO"
    | "SIGINT"
    | "SIGIO"
    | "SIGKILL"
    | "SIGPIPE"
    | "SIGPROF"
    | "SIGPWR"
    | "SIGQUIT"
    | "SIGSEGV"
    | "SIGSTKFLT"
    | "SIGSTOP"
    | "SIGSYS"
    | "SIGTERM"
    | "SIGTRAP"
    | "SIGTSTP"
    | "SIGTTIN"
    | "SIGTTOU"
    | "SIGURG"
    | "SIGUSR1"
    | "SIGUSR2"
    | "SIGVTALRM"
    | "SIGWINCH"
    | "SIGXCPU"
    | "SIGXFSZ";

  /** Registers the given function as a listener of the given signal event.
   *
   * ```ts
   * Deno.addSignalListener("SIGTERM", () => {
   *   console.log("SIGTERM!")
   * });
   * ```
   *
   * NOTE: This functionality is not yet implemented on Windows.
   */
  export function addSignalListener(signal: Signal, handler: () => void): void;

  /** Removes the given signal listener that has been registered with
   * Deno.addSignalListener.
   *
   * ```ts
   * const listener = () => {
   *   console.log("SIGTERM!")
   * };
   * Deno.addSignalListener("SIGTERM", listener);
   * Deno.removeSignalListener("SIGTERM", listener);
   * ```
   *
   * NOTE: This functionality is not yet implemented on Windows.
   */
  export function removeSignalListener(
    signal: Signal,
    handler: () => void,
  ): void;

  export type ProcessStatus =
    | {
      success: true;
      code: 0;
      signal?: undefined;
    }
    | {
      success: false;
      code: number;
      signal?: number;
    };

  export interface RunOptions {
    /** Arguments to pass. Note, the first element needs to be a path to the
     * binary */
    cmd: readonly string[] | [URL, ...string[]];
    cwd?: string;
    env?: {
      [key: string]: string;
    };
    stdout?: "inherit" | "piped" | "null" | number;
    stderr?: "inherit" | "piped" | "null" | number;
    stdin?: "inherit" | "piped" | "null" | number;
  }

  /** Spawns new subprocess.  RunOptions must contain at a minimum the `opt.cmd`,
   * an array of program arguments, the first of which is the binary.
   *
   * ```ts
   * const p = Deno.run({
   *   cmd: ["echo", "hello"],
   * });
   * ```
   *
   * Subprocess uses same working directory as parent process unless `opt.cwd`
   * is specified.
   *
   * Environmental variables from parent process can be cleared using `opt.clearEnv`.
   * Doesn't guarantee that only `opt.env` variables are present,
   * as the OS may set environmental variables for processes.
   *
   * Environmental variables for subprocess can be specified using `opt.env`
   * mapping.
   *
   * `opt.uid` sets the child process’s user ID. This translates to a setuid call
   * in the child process. Failure in the setuid call will cause the spawn to fail.
   *
   * `opt.gid` is similar to `opt.uid`, but sets the group ID of the child process.
   * This has the same semantics as the uid field.
   *
   * By default subprocess inherits stdio of parent process. To change that
   * `opt.stdout`, `opt.stderr` and `opt.stdin` can be specified independently -
   * they can be set to either an rid of open file or set to "inherit" "piped"
   * or "null":
   *
   * `"inherit"` The default if unspecified. The child inherits from the
   * corresponding parent descriptor.
   *
   * `"piped"` A new pipe should be arranged to connect the parent and child
   * sub-processes.
   *
   * `"null"` This stream will be ignored. This is the equivalent of attaching
   * the stream to `/dev/null`.
   *
   * Details of the spawned process are returned.
   *
   * Requires `allow-run` permission. */
  export function run<T extends RunOptions = RunOptions>(opt: T): Process<T>;

  export interface InspectOptions {
    /** Stylize output with ANSI colors. Defaults to false. */
    colors?: boolean;
    /** Try to fit more than one entry of a collection on the same line.
     * Defaults to true. */
    compact?: boolean;
    /** Traversal depth for nested objects. Defaults to 4. */
    depth?: number;
    /** The maximum number of iterable entries to print. Defaults to 100. */
    iterableLimit?: number;
    /** Show a Proxy's target and handler. Defaults to false. */
    showProxy?: boolean;
    /** Sort Object, Set and Map entries by key. Defaults to false. */
    sorted?: boolean;
    /** Add a trailing comma for multiline collections. Defaults to false. */
    trailingComma?: boolean;
    /*** Evaluate the result of calling getters. Defaults to false. */
    getters?: boolean;
    /** Show an object's non-enumerable properties. Defaults to false. */
    showHidden?: boolean;
    /** The maximum length of a string before it is truncated with an ellipsis */
    strAbbreviateSize?: number;
  }

  /** Converts the input into a string that has the same format as printed by
   * `console.log()`.
   *
   * ```ts
   * const obj = {
   *   a: 10,
   *   b: "hello",
   * };
   * const objAsString = Deno.inspect(obj); // { a: 10, b: "hello" }
   * console.log(obj);  // prints same value as objAsString, e.g. { a: 10, b: "hello" }
   * ```
   *
   * You can also register custom inspect functions, via the symbol `Symbol.for("Deno.customInspect")`,
   * on objects, to control and customize the output.
   *
   * ```ts
   * class A {
   *   x = 10;
   *   y = "hello";
   *   [Symbol.for("Deno.customInspect")](): string {
   *     return "x=" + this.x + ", y=" + this.y;
   *   }
   * }
   *
   * const inStringFormat = Deno.inspect(new A()); // "x=10, y=hello"
   * console.log(inStringFormat);  // prints "x=10, y=hello"
   * ```
   *
   * Finally, you can also specify the depth to which it will format.
   *
   * ```ts
   * Deno.inspect({a: {b: {c: {d: 'hello'}}}}, {depth: 2}); // { a: { b: [Object] } }
   * ```
   */
  export function inspect(value: unknown, options?: InspectOptions): string;

  /** The name of a "powerful feature" which needs permission. */
  export type PermissionName =
    | "run"
    | "read"
    | "write"
    | "net"
    | "env"
    | "ffi"
    | "hrtime";

  /** The current status of the permission. */
  export type PermissionState = "granted" | "denied" | "prompt";

  export interface RunPermissionDescriptor {
    name: "run";
    command?: string | URL;
  }

  export interface ReadPermissionDescriptor {
    name: "read";
    path?: string | URL;
  }

  export interface WritePermissionDescriptor {
    name: "write";
    path?: string | URL;
  }

  export interface NetPermissionDescriptor {
    name: "net";
    /** Optional host string of the form `"<hostname>[:<port>]"`. Examples:
     *
     *      "github.com"
     *      "deno.land:8080"
     */
    host?: string;
  }

  export interface EnvPermissionDescriptor {
    name: "env";
    variable?: string;
  }

  export interface FfiPermissionDescriptor {
    name: "ffi";
    path?: string | URL;
  }

  export interface HrtimePermissionDescriptor {
    name: "hrtime";
  }

  /** Permission descriptors which define a permission and can be queried,
   * requested, or revoked. */
  export type PermissionDescriptor =
    | RunPermissionDescriptor
    | ReadPermissionDescriptor
    | WritePermissionDescriptor
    | NetPermissionDescriptor
    | EnvPermissionDescriptor
    | FfiPermissionDescriptor
    | HrtimePermissionDescriptor;

  export interface PermissionStatusEventMap {
    "change": Event;
  }

  export class PermissionStatus extends EventTarget {
    // deno-lint-ignore no-explicit-any
    onchange: ((this: PermissionStatus, ev: Event) => any) | null;
    readonly state: PermissionState;
    addEventListener<K extends keyof PermissionStatusEventMap>(
      type: K,
      listener: (
        this: PermissionStatus,
        ev: PermissionStatusEventMap[K],
      ) => any,
      options?: boolean | AddEventListenerOptions,
    ): void;
    addEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | AddEventListenerOptions,
    ): void;
    removeEventListener<K extends keyof PermissionStatusEventMap>(
      type: K,
      listener: (
        this: PermissionStatus,
        ev: PermissionStatusEventMap[K],
      ) => any,
      options?: boolean | EventListenerOptions,
    ): void;
    removeEventListener(
      type: string,
      listener: EventListenerOrEventListenerObject,
      options?: boolean | EventListenerOptions,
    ): void;
  }

  export class Permissions {
    /** Resolves to the current status of a permission.
     *
     * ```ts
     * const status = await Deno.permissions.query({ name: "read", path: "/etc" });
     * console.log(status.state);
     * ```
     */
    query(desc: PermissionDescriptor): Promise<PermissionStatus>;

    /** Revokes a permission, and resolves to the state of the permission.
     *
     * ```ts
     * import { assert } from "https://deno.land/std/testing/asserts.ts";
     *
     * const status = await Deno.permissions.revoke({ name: "run" });
     * assert(status.state !== "granted")
     * ```
     */
    revoke(desc: PermissionDescriptor): Promise<PermissionStatus>;

    /** Requests the permission, and resolves to the state of the permission.
     *
     * ```ts
     * const status = await Deno.permissions.request({ name: "env" });
     * if (status.state === "granted") {
     *   console.log("'env' permission is granted.");
     * } else {
     *   console.log("'env' permission is denied.");
     * }
     * ```
     */
    request(desc: PermissionDescriptor): Promise<PermissionStatus>;
  }

  /** Deno's permission management API. */
  export const permissions: Permissions;

  /** Build related information. */
  export const build: {
    /** The LLVM target triple */
    target: string;
    /** Instruction set architecture */
    arch: "x86_64" | "aarch64";
    /** Operating system */
    os: "darwin" | "linux" | "windows";
    /** Computer vendor */
    vendor: string;
    /** Optional environment */
    env?: string;
  };

  /** Version related information. */
  export const version: {
    /** Deno's version. For example: `"1.0.0"` */
    deno: string;
    /** The V8 version used by Deno. For example: `"8.0.0.0"` */
    v8: string;
    /** The TypeScript version used by Deno. For example: `"4.0.0"` */
    typescript: string;
  };

  /** Returns the script arguments to the program. If for example we run a
   * program:
   *
   * deno run --allow-read https://deno.land/std/examples/cat.ts /etc/passwd
   *
   * Then `Deno.args` will contain:
   *
   * [ "/etc/passwd" ]
   */
  export const args: string[];

  /**
   * A symbol which can be used as a key for a custom method which will be
   * called when `Deno.inspect()` is called, or when the object is logged to
   * the console.
   *
   * @deprecated This symbol is deprecated since 1.9. Use
   * `Symbol.for("Deno.customInspect")` instead.
   */
  export const customInspect: unique symbol;

  /** The URL of the entrypoint module entered from the command-line. */
  export const mainModule: string;

  export type SymlinkOptions = {
    type: "file" | "dir";
  };

  /**
   * Creates `newpath` as a symbolic link to `oldpath`.
   *
   * The options.type parameter can be set to `file` or `dir`. This argument is only
   * available on Windows and ignored on other platforms.
   *
   * ```ts
   * Deno.symlinkSync("old/name", "new/name");
   * ```
   *
   * Requires full `allow-read` and `allow-write` permissions. */
  export function symlinkSync(
    oldpath: string | URL,
    newpath: string | URL,
    options?: SymlinkOptions,
  ): void;

  /**
   * Creates `newpath` as a symbolic link to `oldpath`.
   *
   * The options.type parameter can be set to `file` or `dir`. This argument is only
   * available on Windows and ignored on other platforms.
   *
   * ```ts
   * await Deno.symlink("old/name", "new/name");
   * ```
   *
   * Requires full `allow-read` and `allow-write` permissions. */
  export function symlink(
    oldpath: string | URL,
    newpath: string | URL,
    options?: SymlinkOptions,
  ): Promise<void>;

  /**
   * Synchronously truncates or extends the specified file stream, to reach the
   * specified `len`.
   *
   * If `len` is not specified then the entire file contents are truncated as if len was set to 0.
   *
   * if the file previously was larger than this new length, the extra  data  is  lost.
   *
   * if  the  file  previously  was shorter, it is extended, and the extended part reads as null bytes ('\0').
   *
   * ```ts
   * // truncate the entire file
   * const file = Deno.openSync("my_file.txt", { read: true, write: true, truncate: true, create: true });
   * Deno.ftruncateSync(file.rid);
   * ```
   *
   * ```ts
   * // truncate part of the file
   * const file = Deno.openSync("my_file.txt", { read: true, write: true, create: true });
   * Deno.writeSync(file.rid, new TextEncoder().encode("Hello World"));
   * Deno.ftruncateSync(file.rid, 7);
   * Deno.seekSync(file.rid, 0, Deno.SeekMode.Start);
   * const data = new Uint8Array(32);
   * Deno.readSync(file.rid, data);
   * console.log(new TextDecoder().decode(data)); // Hello W
   * ```
   */
  export function ftruncateSync(rid: number, len?: number): void;

  /**
   * Truncates or extends the specified file stream, to reach the specified `len`.
   *
   * If `len` is not specified then the entire file contents are truncated as if len was set to 0.
   *
   * If the file previously was larger than this new length, the extra  data  is  lost.
   *
   * If  the  file  previously  was shorter, it is extended, and the extended part reads as null bytes ('\0').
   *
   * ```ts
   * // truncate the entire file
   * const file = await Deno.open("my_file.txt", { read: true, write: true, create: true });
   * await Deno.ftruncate(file.rid);
   * ```
   *
   * ```ts
   * // truncate part of the file
   * const file = await Deno.open("my_file.txt", { read: true, write: true, create: true });
   * await Deno.write(file.rid, new TextEncoder().encode("Hello World"));
   * await Deno.ftruncate(file.rid, 7);
   * const data = new Uint8Array(32);
   * await Deno.read(file.rid, data);
   * console.log(new TextDecoder().decode(data)); // Hello W
   * ```
   */
  export function ftruncate(rid: number, len?: number): Promise<void>;

  /**
   * Synchronously returns a `Deno.FileInfo` for the given file stream.
   *
   * ```ts
   * import { assert } from "https://deno.land/std/testing/asserts.ts";
   * const file = Deno.openSync("file.txt", { read: true });
   * const fileInfo = Deno.fstatSync(file.rid);
   * assert(fileInfo.isFile);
   * ```
   */
  export function fstatSync(rid: number): FileInfo;

  /**
   * Returns a `Deno.FileInfo` for the given file stream.
   *
   * ```ts
   * import { assert } from "https://deno.land/std/testing/asserts.ts";
   * const file = await Deno.open("file.txt", { read: true });
   * const fileInfo = await Deno.fstat(file.rid);
   * assert(fileInfo.isFile);
   * ```
   */
  export function fstat(rid: number): Promise<FileInfo>;

  export interface RequestEvent {
    readonly request: Request;
    respondWith(r: Response | Promise<Response>): Promise<void>;
  }

  export interface HttpConn extends AsyncIterable<RequestEvent> {
    readonly rid: number;

    nextRequest(): Promise<RequestEvent | null>;
    close(): void;
  }

  /**
   * Services HTTP requests given a TCP or TLS socket.
   *
   * ```ts
   * const conn = await Deno.listen({ port: 80 });
   * const httpConn = Deno.serveHttp(await conn.accept());
   * const e = await httpConn.nextRequest();
   * if (e) {
   *   e.respondWith(new Response("Hello World"));
   * }
   * ```
   *
   * If `httpConn.nextRequest()` encounters an error or returns `null`
   * then the underlying HttpConn resource is closed automatically.
   *
   * Alternatively, you can also use the Async Iterator approach:
   *
   * ```ts
   * async function handleHttp(conn: Deno.Conn) {
   *   for await (const e of Deno.serveHttp(conn)) {
   *     e.respondWith(new Response("Hello World"));
   *   }
   * }
   *
   * for await (const conn of Deno.listen({ port: 80 })) {
   *   handleHttp(conn);
   * }
   * ```
   */
  export function serveHttp(conn: Conn): HttpConn;

  export interface WebSocketUpgrade {
    response: Response;
    socket: WebSocket;
  }

  export interface UpgradeWebSocketOptions {
    protocol?: string;
    /**
     * If the client does not respond to this frame with a
     * `pong` within the timeout specified, the connection is deemed
     * unhealthy and is closed. The `close` and `error` event will be emitted.
     *
     * The default is 120 seconds. Set to 0 to disable timeouts.
     */
    idleTimeout?: number;
  }

  /**
   * Used to upgrade an incoming HTTP request to a WebSocket.
   *
   * Given a request, returns a pair of WebSocket and Response. The original
   * request must be responded to with the returned response for the websocket
   * upgrade to be successful.
   *
   * ```ts
   * const conn = await Deno.listen({ port: 80 });
   * const httpConn = Deno.serveHttp(await conn.accept());
   * const e = await httpConn.nextRequest();
   * if (e) {
   *   const { socket, response } = Deno.upgradeWebSocket(e.request);
   *   socket.onopen = () => {
   *     socket.send("Hello World!");
   *   };
   *   socket.onmessage = (e) => {
   *     console.log(e.data);
   *     socket.close();
   *   };
   *   socket.onclose = () => console.log("WebSocket has been closed.");
   *   socket.onerror = (e) => console.error("WebSocket error:", e);
   *   e.respondWith(response);
   * }
   * ```
   *
   * If the request body is disturbed (read from) before the upgrade is
   * completed, upgrading fails.
   *
   * This operation does not yet consume the request or open the websocket. This
   * only happens once the returned response has been passed to `respondWith`.
   */
  export function upgradeWebSocket(
    request: Request,
    options?: UpgradeWebSocketOptions,
  ): WebSocketUpgrade;

  /** Send a signal to process under given `pid`.
   *
   * If `pid` is negative, the signal will be sent to the process group
   * identified by `pid`.
   *
   * ```ts
   * const p = Deno.run({
   *   cmd: ["sleep", "10000"]
   * });
   *
   * Deno.kill(p.pid, "SIGINT");
   * ```
   *
   * Requires `allow-run` permission. */
  export function kill(pid: number, signo: Signal): void;

  /** The type of the resource record.
   * Only the listed types are supported currently. */
  export type RecordType =
    | "A"
    | "AAAA"
    | "ANAME"
    | "CAA"
    | "CNAME"
    | "MX"
    | "NAPTR"
    | "NS"
    | "PTR"
    | "SOA"
    | "SRV"
    | "TXT";

  export interface ResolveDnsOptions {
    /** The name server to be used for lookups.
     * If not specified, defaults to the system configuration e.g. `/etc/resolv.conf` on Unix. */
    nameServer?: {
      /** The IP address of the name server */
      ipAddr: string;
      /** The port number the query will be sent to.
       * If not specified, defaults to 53. */
      port?: number;
    };
  }

  /** If `resolveDns` is called with "CAA" record type specified, it will return an array of this interface. */
  export interface CAARecord {
    critical: boolean;
    tag: string;
    value: string;
  }

  /** If `resolveDns` is called with "MX" record type specified, it will return an array of this interface. */
  export interface MXRecord {
    preference: number;
    exchange: string;
  }

  /** If `resolveDns` is called with "NAPTR" record type specified, it will return an array of this interface. */
  export interface NAPTRRecord {
    order: number;
    preference: number;
    flags: string;
    services: string;
    regexp: string;
    replacement: string;
  }

  /** If `resolveDns` is called with "SOA" record type specified, it will return an array of this interface. */
  export interface SOARecord {
    mname: string;
    rname: string;
    serial: number;
    refresh: number;
    retry: number;
    expire: number;
    minimum: number;
  }

  /** If `resolveDns` is called with "SRV" record type specified, it will return an array of this interface. */
  export interface SRVRecord {
    priority: number;
    weight: number;
    port: number;
    target: string;
  }

  export function resolveDns(
    query: string,
    recordType: "A" | "AAAA" | "ANAME" | "CNAME" | "NS" | "PTR",
    options?: ResolveDnsOptions,
  ): Promise<string[]>;

  export function resolveDns(
    query: string,
    recordType: "CAA",
    options?: ResolveDnsOptions,
  ): Promise<CAARecord[]>;

  export function resolveDns(
    query: string,
    recordType: "MX",
    options?: ResolveDnsOptions,
  ): Promise<MXRecord[]>;

  export function resolveDns(
    query: string,
    recordType: "NAPTR",
    options?: ResolveDnsOptions,
  ): Promise<NAPTRRecord[]>;

  export function resolveDns(
    query: string,
    recordType: "SOA",
    options?: ResolveDnsOptions,
  ): Promise<SOARecord[]>;

  export function resolveDns(
    query: string,
    recordType: "SRV",
    options?: ResolveDnsOptions,
  ): Promise<SRVRecord[]>;

  export function resolveDns(
    query: string,
    recordType: "TXT",
    options?: ResolveDnsOptions,
  ): Promise<string[][]>;

  /**
   * Performs DNS resolution against the given query, returning resolved records.
   * Fails in the cases such as:
   * - the query is in invalid format
   * - the options have an invalid parameter, e.g. `nameServer.port` is beyond the range of 16-bit unsigned integer
   * - timed out
   *
   * ```ts
   * const a = await Deno.resolveDns("example.com", "A");
   *
   * const aaaa = await Deno.resolveDns("example.com", "AAAA", {
   *   nameServer: { ipAddr: "8.8.8.8", port: 53 },
   * });
   * ```
   *
   * Requires `allow-net` permission.
   */
  export function resolveDns(
    query: string,
    recordType: RecordType,
    options?: ResolveDnsOptions,
  ): Promise<
    | string[]
    | CAARecord[]
    | MXRecord[]
    | NAPTRRecord[]
    | SOARecord[]
    | SRVRecord[]
    | string[][]
  >;
}

// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.

// deno-lint-ignore-file no-explicit-any

/// <reference no-default-lib="true" />
/// <reference lib="esnext" />

declare interface Console {
  assert(condition?: boolean, ...data: any[]): void;
  clear(): void;
  count(label?: string): void;
  countReset(label?: string): void;
  debug(...data: any[]): void;
  dir(item?: any, options?: any): void;
  dirxml(...data: any[]): void;
  error(...data: any[]): void;
  group(...data: any[]): void;
  groupCollapsed(...data: any[]): void;
  groupEnd(): void;
  info(...data: any[]): void;
  log(...data: any[]): void;
  table(tabularData?: any, properties?: string[]): void;
  time(label?: string): void;
  timeEnd(label?: string): void;
  timeLog(label?: string, ...data: any[]): void;
  trace(...data: any[]): void;
  warn(...data: any[]): void;
}

// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.

// deno-lint-ignore-file no-explicit-any

/// <reference no-default-lib="true" />
/// <reference lib="esnext" />

declare class URLSearchParams {
  constructor(
    init?: string[][] | Record<string, string> | string | URLSearchParams,
  );
  static toString(): string;

  /** Appends a specified key/value pair as a new search parameter.
   *
   * ```ts
   * let searchParams = new URLSearchParams();
   * searchParams.append('name', 'first');
   * searchParams.append('name', 'second');
   * ```
   */
  append(name: string, value: string): void;

  /** Deletes the given search parameter and its associated value,
   * from the list of all search parameters.
   *
   * ```ts
   * let searchParams = new URLSearchParams([['name', 'value']]);
   * searchParams.delete('name');
   * ```
   */
  delete(name: string): void;

  /** Returns all the values associated with a given search parameter
   * as an array.
   *
   * ```ts
   * searchParams.getAll('name');
   * ```
   */
  getAll(name: string): string[];

  /** Returns the first value associated to the given search parameter.
   *
   * ```ts
   * searchParams.get('name');
   * ```
   */
  get(name: string): string | null;

  /** Returns a Boolean that indicates whether a parameter with the
   * specified name exists.
   *
   * ```ts
   * searchParams.has('name');
   * ```
   */
  has(name: string): boolean;

  /** Sets the value associated with a given search parameter to the
   * given value. If there were several matching values, this method
   * deletes the others. If the search parameter doesn't exist, this
   * method creates it.
   *
   * ```ts
   * searchParams.set('name', 'value');
   * ```
   */
  set(name: string, value: string): void;

  /** Sort all key/value pairs contained in this object in place and
   * return undefined. The sort order is according to Unicode code
   * points of the keys.
   *
   * ```ts
   * searchParams.sort();
   * ```
   */
  sort(): void;

  /** Calls a function for each element contained in this object in
   * place and return undefined. Optionally accepts an object to use
   * as this when executing callback as second argument.
   *
   * ```ts
   * const params = new URLSearchParams([["a", "b"], ["c", "d"]]);
   * params.forEach((value, key, parent) => {
   *   console.log(value, key, parent);
   * });
   * ```
   */
  forEach(
    callbackfn: (value: string, key: string, parent: this) => void,
    thisArg?: any,
  ): void;

  /** Returns an iterator allowing to go through all keys contained
   * in this object.
   *
   * ```ts
   * const params = new URLSearchParams([["a", "b"], ["c", "d"]]);
   * for (const key of params.keys()) {
   *   console.log(key);
   * }
   * ```
   */
  keys(): IterableIterator<string>;

  /** Returns an iterator allowing to go through all values contained
   * in this object.
   *
   * ```ts
   * const params = new URLSearchParams([["a", "b"], ["c", "d"]]);
   * for (const value of params.values()) {
   *   console.log(value);
   * }
   * ```
   */
  values(): IterableIterator<string>;

  /** Returns an iterator allowing to go through all key/value
   * pairs contained in this object.
   *
   * ```ts
   * const params = new URLSearchParams([["a", "b"], ["c", "d"]]);
   * for (const [key, value] of params.entries()) {
   *   console.log(key, value);
   * }
   * ```
   */
  entries(): IterableIterator<[string, string]>;

  /** Returns an iterator allowing to go through all key/value
   * pairs contained in this object.
   *
   * ```ts
   * const params = new URLSearchParams([["a", "b"], ["c", "d"]]);
   * for (const [key, value] of params) {
   *   console.log(key, value);
   * }
   * ```
   */
  [Symbol.iterator](): IterableIterator<[string, string]>;

  /** Returns a query string suitable for use in a URL.
   *
   * ```ts
   * searchParams.toString();
   * ```
   */
  toString(): string;
}

/** The URL interface represents an object providing static methods used for creating object URLs. */
declare class URL {
  constructor(url: string, base?: string | URL);
  static createObjectURL(blob: Blob): string;
  static revokeObjectURL(url: string): void;

  hash: string;
  host: string;
  hostname: string;
  href: string;
  toString(): string;
  readonly origin: string;
  password: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  readonly searchParams: URLSearchParams;
  username: string;
  toJSON(): string;
}

declare interface URLPatternInit {
  protocol?: string;
  username?: string;
  password?: string;
  hostname?: string;
  port?: string;
  pathname?: string;
  search?: string;
  hash?: string;
  baseURL?: string;
}

declare type URLPatternInput = string | URLPatternInit;

declare interface URLPatternComponentResult {
  input: string;
  groups: Record<string, string>;
}

/** `URLPatternResult` is the object returned from `URLPattern.exec`. */
declare interface URLPatternResult {
  /** The inputs provided when matching. */
  inputs: [URLPatternInit] | [URLPatternInit, string];

  /** The matched result for the `protocol` matcher. */
  protocol: URLPatternComponentResult;
  /** The matched result for the `username` matcher. */
  username: URLPatternComponentResult;
  /** The matched result for the `password` matcher. */
  password: URLPatternComponentResult;
  /** The matched result for the `hostname` matcher. */
  hostname: URLPatternComponentResult;
  /** The matched result for the `port` matcher. */
  port: URLPatternComponentResult;
  /** The matched result for the `pathname` matcher. */
  pathname: URLPatternComponentResult;
  /** The matched result for the `search` matcher. */
  search: URLPatternComponentResult;
  /** The matched result for the `hash` matcher. */
  hash: URLPatternComponentResult;
}

/**
 * The URLPattern API provides a web platform primitive for matching URLs based
 * on a convenient pattern syntax.
 *
 * The syntax is based on path-to-regexp. Wildcards, named capture groups,
 * regular groups, and group modifiers are all supported.
 *
 * ```ts
 * // Specify the pattern as structured data.
 * const pattern = new URLPattern({ pathname: "/users/:user" });
 * const match = pattern.exec("/users/joe");
 * console.log(match.pathname.groups.user); // joe
 * ```
 *
 * ```ts
 * // Specify a fully qualified string pattern.
 * const pattern = new URLPattern("https://example.com/books/:id");
 * console.log(pattern.test("https://example.com/books/123")); // true
 * console.log(pattern.test("https://deno.land/books/123")); // false
 * ```
 *
 * ```ts
 * // Specify a relative string pattern with a base URL.
 * const pattern = new URLPattern("/:article", "https://blog.example.com");
 * console.log(pattern.test("https://blog.example.com/article")); // true
 * console.log(pattern.test("https://blog.example.com/article/123")); // false
 * ```
 */
declare class URLPattern {
  constructor(input: URLPatternInput, baseURL?: string);

  /**
   * Test if the given input matches the stored pattern.
   *
   * The input can either be provided as a url string (with an optional base),
   * or as individual components in the form of an object.
   *
   * ```ts
   * const pattern = new URLPattern("https://example.com/books/:id");
   *
   * // Test a url string.
   * console.log(pattern.test("https://example.com/books/123")); // true
   *
   * // Test a relative url with a base.
   * console.log(pattern.test("/books/123", "https://example.com")); // true
   *
   * // Test an object of url components.
   * console.log(pattern.test({ pathname: "/books/123" })); // true
   * ```
   */
  test(input: URLPatternInput, baseURL?: string): boolean;

  /**
   * Match the given input against the stored pattern.
   *
   * The input can either be provided as a url string (with an optional base),
   * or as individual components in the form of an object.
   *
   * ```ts
   * const pattern = new URLPattern("https://example.com/books/:id");
   *
   * // Match a url string.
   * let match = pattern.exec("https://example.com/books/123");
   * console.log(match.pathname.groups.id); // 123
   *
   * // Match a relative url with a base.
   * match = pattern.exec("/books/123", "https://example.com");
   * console.log(match.pathname.groups.id); // 123
   *
   * // Match an object of url components.
   * match = pattern.exec({ pathname: "/books/123" });
   * console.log(match.pathname.groups.id); // 123
   * ```
   */
  exec(input: URLPatternInput, baseURL?: string): URLPatternResult | null;

  /** The pattern string for the `protocol`. */
  readonly protocol: string;
  /** The pattern string for the `username`. */
  readonly username: string;
  /** The pattern string for the `password`. */
  readonly password: string;
  /** The pattern string for the `hostname`. */
  readonly hostname: string;
  /** The pattern string for the `port`. */
  readonly port: string;
  /** The pattern string for the `pathname`. */
  readonly pathname: string;
  /** The pattern string for the `search`. */
  readonly search: string;
  /** The pattern string for the `hash`. */
  readonly hash: string;
}

// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.

// deno-lint-ignore-file no-explicit-any no-var

/// <reference no-default-lib="true" />
/// <reference lib="esnext" />

declare class DOMException extends Error {
  constructor(message?: string, name?: string);
  readonly name: string;
  readonly message: string;
  readonly code: number;
}

interface EventInit {
  bubbles?: boolean;
  cancelable?: boolean;
  composed?: boolean;
}

/** An event which takes place in the DOM. */
declare class Event {
  constructor(type: string, eventInitDict?: EventInit);
  /** Returns true or false depending on how event was initialized. True if
   * event goes through its target's ancestors in reverse tree order, and
   * false otherwise. */
  readonly bubbles: boolean;
  cancelBubble: boolean;
  /** Returns true or false depending on how event was initialized. Its return
   * value does not always carry meaning, but true can indicate that part of the
   * operation during which event was dispatched, can be canceled by invoking
   * the preventDefault() method. */
  readonly cancelable: boolean;
  /** Returns true or false depending on how event was initialized. True if
   * event invokes listeners past a ShadowRoot node that is the root of its
   * target, and false otherwise. */
  readonly composed: boolean;
  /** Returns the object whose event listener's callback is currently being
   * invoked. */
  readonly currentTarget: EventTarget | null;
  /** Returns true if preventDefault() was invoked successfully to indicate
   * cancellation, and false otherwise. */
  readonly defaultPrevented: boolean;
  /** Returns the event's phase, which is one of NONE, CAPTURING_PHASE,
   * AT_TARGET, and BUBBLING_PHASE. */
  readonly eventPhase: number;
  /** Returns true if event was dispatched by the user agent, and false
   * otherwise. */
  readonly isTrusted: boolean;
  /** Returns the object to which event is dispatched (its target). */
  readonly target: EventTarget | null;
  /** Returns the event's timestamp as the number of milliseconds measured
   * relative to the time origin. */
  readonly timeStamp: number;
  /** Returns the type of event, e.g. "click", "hashchange", or "submit". */
  readonly type: string;
  /** Returns the invocation target objects of event's path (objects on which
   * listeners will be invoked), except for any nodes in shadow trees of which
   * the shadow root's mode is "closed" that are not reachable from event's
   * currentTarget. */
  composedPath(): EventTarget[];
  /** If invoked when the cancelable attribute value is true, and while
   * executing a listener for the event with passive set to false, signals to
   * the operation that caused event to be dispatched that it needs to be
   * canceled. */
  preventDefault(): void;
  /** Invoking this method prevents event from reaching any registered event
   * listeners after the current one finishes running and, when dispatched in a
   * tree, also prevents event from reaching any other objects. */
  stopImmediatePropagation(): void;
  /** When dispatched in a tree, invoking this method prevents event from
   * reaching any objects other than the current object. */
  stopPropagation(): void;
  readonly AT_TARGET: number;
  readonly BUBBLING_PHASE: number;
  readonly CAPTURING_PHASE: number;
  readonly NONE: number;
  static readonly AT_TARGET: number;
  static readonly BUBBLING_PHASE: number;
  static readonly CAPTURING_PHASE: number;
  static readonly NONE: number;
}

/**
 * EventTarget is a DOM interface implemented by objects that can receive events
 * and may have listeners for them.
 */
declare class EventTarget {
  /** Appends an event listener for events whose type attribute value is type.
   * The callback argument sets the callback that will be invoked when the event
   * is dispatched.
   *
   * The options argument sets listener-specific options. For compatibility this
   * can be a boolean, in which case the method behaves exactly as if the value
   * was specified as options's capture.
   *
   * When set to true, options's capture prevents callback from being invoked
   * when the event's eventPhase attribute value is BUBBLING_PHASE. When false
   * (or not present), callback will not be invoked when event's eventPhase
   * attribute value is CAPTURING_PHASE. Either way, callback will be invoked if
   * event's eventPhase attribute value is AT_TARGET.
   *
   * When set to true, options's passive indicates that the callback will not
   * cancel the event by invoking preventDefault(). This is used to enable
   * performance optimizations described in § 2.8 Observing event listeners.
   *
   * When set to true, options's once indicates that the callback will only be
   * invoked once after which the event listener will be removed.
   *
   * The event listener is appended to target's event listener list and is not
   * appended if it has the same type, callback, and capture. */
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options?: boolean | AddEventListenerOptions,
  ): void;
  /** Dispatches a synthetic event event to target and returns true if either
   * event's cancelable attribute value is false or its preventDefault() method
   * was not invoked, and false otherwise. */
  dispatchEvent(event: Event): boolean;
  /** Removes the event listener in target's event listener list with the same
   * type, callback, and options. */
  removeEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: EventListenerOptions | boolean,
  ): void;
}

interface EventListener {
  (evt: Event): void | Promise<void>;
}

interface EventListenerObject {
  handleEvent(evt: Event): void | Promise<void>;
}

declare type EventListenerOrEventListenerObject =
  | EventListener
  | EventListenerObject;

interface AddEventListenerOptions extends EventListenerOptions {
  once?: boolean;
  passive?: boolean;
}

interface EventListenerOptions {
  capture?: boolean;
}

interface ProgressEventInit extends EventInit {
  lengthComputable?: boolean;
  loaded?: number;
  total?: number;
}

/** Events measuring progress of an underlying process, like an HTTP request
 * (for an XMLHttpRequest, or the loading of the underlying resource of an
 * <img>, <audio>, <video>, <style> or <link>). */
declare class ProgressEvent<T extends EventTarget = EventTarget> extends Event {
  constructor(type: string, eventInitDict?: ProgressEventInit);
  readonly lengthComputable: boolean;
  readonly loaded: number;
  readonly target: T | null;
  readonly total: number;
}

/** Decodes a string of data which has been encoded using base-64 encoding.
 *
 * ```
 * console.log(atob("aGVsbG8gd29ybGQ=")); // outputs 'hello world'
 * ```
 */
declare function atob(s: string): string;

/** Creates a base-64 ASCII encoded string from the input string.
 *
 * ```
 * console.log(btoa("hello world"));  // outputs "aGVsbG8gd29ybGQ="
 * ```
 */
declare function btoa(s: string): string;

declare interface TextDecoderOptions {
  fatal?: boolean;
  ignoreBOM?: boolean;
}

declare interface TextDecodeOptions {
  stream?: boolean;
}

interface TextDecoder {
  /** Returns encoding's name, lowercased. */
  readonly encoding: string;
  /** Returns `true` if error mode is "fatal", and `false` otherwise. */
  readonly fatal: boolean;
  /** Returns `true` if ignore BOM flag is set, and `false` otherwise. */
  readonly ignoreBOM: boolean;

  /** Returns the result of running encoding's decoder. */
  decode(input?: BufferSource, options?: TextDecodeOptions): string;
}

declare var TextDecoder: {
  prototype: TextDecoder;
  new (label?: string, options?: TextDecoderOptions): TextDecoder;
};

declare interface TextEncoderEncodeIntoResult {
  read: number;
  written: number;
}

interface TextEncoder {
  /** Returns "utf-8". */
  readonly encoding: "utf-8";
  /** Returns the result of running UTF-8's encoder. */
  encode(input?: string): Uint8Array;
  encodeInto(input: string, dest: Uint8Array): TextEncoderEncodeIntoResult;
}

declare var TextEncoder: {
  prototype: TextEncoder;
  new (): TextEncoder;
};

interface TextDecoderStream {
  /** Returns encoding's name, lowercased. */
  readonly encoding: string;
  /** Returns `true` if error mode is "fatal", and `false` otherwise. */
  readonly fatal: boolean;
  /** Returns `true` if ignore BOM flag is set, and `false` otherwise. */
  readonly ignoreBOM: boolean;
  readonly readable: ReadableStream<string>;
  readonly writable: WritableStream<BufferSource>;
  readonly [Symbol.toStringTag]: string;
}

declare var TextDecoderStream: {
  prototype: TextDecoderStream;
  new (label?: string, options?: TextDecoderOptions): TextDecoderStream;
};

interface TextEncoderStream {
  /** Returns "utf-8". */
  readonly encoding: "utf-8";
  readonly readable: ReadableStream<Uint8Array>;
  readonly writable: WritableStream<string>;
  readonly [Symbol.toStringTag]: string;
}

declare var TextEncoderStream: {
  prototype: TextEncoderStream;
  new (): TextEncoderStream;
};

/** A controller object that allows you to abort one or more DOM requests as and
 * when desired. */
declare class AbortController {
  /** Returns the AbortSignal object associated with this object. */
  readonly signal: AbortSignal;
  /** Invoking this method will set this object's AbortSignal's aborted flag and
   * signal to any observers that the associated activity is to be aborted. */
  abort(reason?: any): void;
}

interface AbortSignalEventMap {
  abort: Event;
}

/** A signal object that allows you to communicate with a DOM request (such as a
 * Fetch) and abort it if required via an AbortController object. */
interface AbortSignal extends EventTarget {
  /** Returns true if this AbortSignal's AbortController has signaled to abort,
   * and false otherwise. */
  readonly aborted: boolean;
  readonly reason?: unknown;
  onabort: ((this: AbortSignal, ev: Event) => any) | null;
  addEventListener<K extends keyof AbortSignalEventMap>(
    type: K,
    listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener<K extends keyof AbortSignalEventMap>(
    type: K,
    listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;

  /** Throws this AbortSignal's abort reason, if its AbortController has
   * signaled to abort; otherwise, does nothing. */
  throwIfAborted(): void;
}

declare var AbortSignal: {
  prototype: AbortSignal;
  new (): AbortSignal;
  abort(reason?: any): AbortSignal;
  timeout(milliseconds: number): AbortSignal;
};

interface FileReaderEventMap {
  "abort": ProgressEvent<FileReader>;
  "error": ProgressEvent<FileReader>;
  "load": ProgressEvent<FileReader>;
  "loadend": ProgressEvent<FileReader>;
  "loadstart": ProgressEvent<FileReader>;
  "progress": ProgressEvent<FileReader>;
}

/** Lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read. */
interface FileReader extends EventTarget {
  readonly error: DOMException | null;
  onabort: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
  onerror: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
  onload: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
  onloadend: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
  onloadstart:
    | ((this: FileReader, ev: ProgressEvent<FileReader>) => any)
    | null;
  onprogress: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null;
  readonly readyState: number;
  readonly result: string | ArrayBuffer | null;
  abort(): void;
  readAsArrayBuffer(blob: Blob): void;
  readAsBinaryString(blob: Blob): void;
  readAsDataURL(blob: Blob): void;
  readAsText(blob: Blob, encoding?: string): void;
  readonly DONE: number;
  readonly EMPTY: number;
  readonly LOADING: number;
  addEventListener<K extends keyof FileReaderEventMap>(
    type: K,
    listener: (this: FileReader, ev: FileReaderEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener<K extends keyof FileReaderEventMap>(
    type: K,
    listener: (this: FileReader, ev: FileReaderEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;
}

declare var FileReader: {
  prototype: FileReader;
  new (): FileReader;
  readonly DONE: number;
  readonly EMPTY: number;
  readonly LOADING: number;
};

type BlobPart = BufferSource | Blob | string;

interface BlobPropertyBag {
  type?: string;
  endings?: "transparent" | "native";
}

/** A file-like object of immutable, raw data. Blobs represent data that isn't necessarily in a JavaScript-native format. The File interface is based on Blob, inheriting blob functionality and expanding it to support files on the user's system. */
declare class Blob {
  constructor(blobParts?: BlobPart[], options?: BlobPropertyBag);

  readonly size: number;
  readonly type: string;
  arrayBuffer(): Promise<ArrayBuffer>;
  slice(start?: number, end?: number, contentType?: string): Blob;
  stream(): ReadableStream<Uint8Array>;
  text(): Promise<string>;
}

interface FilePropertyBag extends BlobPropertyBag {
  lastModified?: number;
}

/** Provides information about files and allows JavaScript in a web page to
 * access their content. */
declare class File extends Blob {
  constructor(
    fileBits: BlobPart[],
    fileName: string,
    options?: FilePropertyBag,
  );

  readonly lastModified: number;
  readonly name: string;
}

interface ReadableStreamReadDoneResult<T> {
  done: true;
  value?: T;
}

interface ReadableStreamReadValueResult<T> {
  done: false;
  value: T;
}

type ReadableStreamReadResult<T> =
  | ReadableStreamReadValueResult<T>
  | ReadableStreamReadDoneResult<T>;

interface ReadableStreamDefaultReader<R = any> {
  readonly closed: Promise<void>;
  cancel(reason?: any): Promise<void>;
  read(): Promise<ReadableStreamReadResult<R>>;
  releaseLock(): void;
}

interface ReadableStreamBYOBReadDoneResult<V extends ArrayBufferView> {
  done: true;
  value?: V;
}

interface ReadableStreamBYOBReadValueResult<V extends ArrayBufferView> {
  done: false;
  value: V;
}

type ReadableStreamBYOBReadResult<V extends ArrayBufferView> =
  | ReadableStreamBYOBReadDoneResult<V>
  | ReadableStreamBYOBReadValueResult<V>;

interface ReadableStreamBYOBReader {
  readonly closed: Promise<void>;
  cancel(reason?: any): Promise<void>;
  read<V extends ArrayBufferView>(
    view: V,
  ): Promise<ReadableStreamBYOBReadResult<V>>;
  releaseLock(): void;
}

interface ReadableStreamBYOBRequest {
  readonly view: ArrayBufferView | null;
  respond(bytesWritten: number): void;
  respondWithNewView(view: ArrayBufferView): void;
}

declare var ReadableStreamDefaultReader: {
  prototype: ReadableStreamDefaultReader;
  new <R>(stream: ReadableStream<R>): ReadableStreamDefaultReader<R>;
};

interface ReadableStreamReader<R = any> {
  cancel(): Promise<void>;
  read(): Promise<ReadableStreamReadResult<R>>;
  releaseLock(): void;
}

declare var ReadableStreamReader: {
  prototype: ReadableStreamReader;
  new (): ReadableStreamReader;
};

interface ReadableByteStreamControllerCallback {
  (controller: ReadableByteStreamController): void | PromiseLike<void>;
}

interface UnderlyingByteSource {
  autoAllocateChunkSize?: number;
  cancel?: ReadableStreamErrorCallback;
  pull?: ReadableByteStreamControllerCallback;
  start?: ReadableByteStreamControllerCallback;
  type: "bytes";
}

interface UnderlyingSink<W = any> {
  abort?: WritableStreamErrorCallback;
  close?: WritableStreamDefaultControllerCloseCallback;
  start?: WritableStreamDefaultControllerStartCallback;
  type?: undefined;
  write?: WritableStreamDefaultControllerWriteCallback<W>;
}

interface UnderlyingSource<R = any> {
  cancel?: ReadableStreamErrorCallback;
  pull?: ReadableStreamDefaultControllerCallback<R>;
  start?: ReadableStreamDefaultControllerCallback<R>;
  type?: undefined;
}

interface ReadableStreamErrorCallback {
  (reason: any): void | PromiseLike<void>;
}

interface ReadableStreamDefaultControllerCallback<R> {
  (controller: ReadableStreamDefaultController<R>): void | PromiseLike<void>;
}

interface ReadableStreamDefaultController<R = any> {
  readonly desiredSize: number | null;
  close(): void;
  enqueue(chunk: R): void;
  error(error?: any): void;
}

declare var ReadableStreamDefaultController: {
  prototype: ReadableStreamDefaultController;
  new (): ReadableStreamDefaultController;
};

interface ReadableByteStreamController {
  readonly byobRequest: ReadableStreamBYOBRequest | null;
  readonly desiredSize: number | null;
  close(): void;
  enqueue(chunk: ArrayBufferView): void;
  error(error?: any): void;
}

declare var ReadableByteStreamController: {
  prototype: ReadableByteStreamController;
  new (): ReadableByteStreamController;
};

interface PipeOptions {
  preventAbort?: boolean;
  preventCancel?: boolean;
  preventClose?: boolean;
  signal?: AbortSignal;
}

interface QueuingStrategySizeCallback<T = any> {
  (chunk: T): number;
}

interface QueuingStrategy<T = any> {
  highWaterMark?: number;
  size?: QueuingStrategySizeCallback<T>;
}

/** This Streams API interface provides a built-in byte length queuing strategy
 * that can be used when constructing streams. */
interface CountQueuingStrategy extends QueuingStrategy {
  highWaterMark: number;
  size(chunk: any): 1;
}

declare var CountQueuingStrategy: {
  prototype: CountQueuingStrategy;
  new (options: { highWaterMark: number }): CountQueuingStrategy;
};

interface ByteLengthQueuingStrategy extends QueuingStrategy<ArrayBufferView> {
  highWaterMark: number;
  size(chunk: ArrayBufferView): number;
}

declare var ByteLengthQueuingStrategy: {
  prototype: ByteLengthQueuingStrategy;
  new (options: { highWaterMark: number }): ByteLengthQueuingStrategy;
};

/** This Streams API interface represents a readable stream of byte data. The
 * Fetch API offers a concrete instance of a ReadableStream through the body
 * property of a Response object. */
interface ReadableStream<R = any> {
  readonly locked: boolean;
  cancel(reason?: any): Promise<void>;
  getReader(options: { mode: "byob" }): ReadableStreamBYOBReader;
  getReader(options?: { mode?: undefined }): ReadableStreamDefaultReader<R>;
  pipeThrough<T>(
    { writable, readable }: {
      writable: WritableStream<R>;
      readable: ReadableStream<T>;
    },
    options?: PipeOptions,
  ): ReadableStream<T>;
  pipeTo(dest: WritableStream<R>, options?: PipeOptions): Promise<void>;
  tee(): [ReadableStream<R>, ReadableStream<R>];
  [Symbol.asyncIterator](options?: {
    preventCancel?: boolean;
  }): AsyncIterableIterator<R>;
}

declare var ReadableStream: {
  prototype: ReadableStream;
  new (
    underlyingSource: UnderlyingByteSource,
    strategy?: { highWaterMark?: number; size?: undefined },
  ): ReadableStream<Uint8Array>;
  new <R = any>(
    underlyingSource?: UnderlyingSource<R>,
    strategy?: QueuingStrategy<R>,
  ): ReadableStream<R>;
};

interface WritableStreamDefaultControllerCloseCallback {
  (): void | PromiseLike<void>;
}

interface WritableStreamDefaultControllerStartCallback {
  (controller: WritableStreamDefaultController): void | PromiseLike<void>;
}

interface WritableStreamDefaultControllerWriteCallback<W> {
  (chunk: W, controller: WritableStreamDefaultController):
    | void
    | PromiseLike<
      void
    >;
}

interface WritableStreamErrorCallback {
  (reason: any): void | PromiseLike<void>;
}

/** This Streams API interface provides a standard abstraction for writing
 * streaming data to a destination, known as a sink. This object comes with
 * built-in backpressure and queuing. */
interface WritableStream<W = any> {
  readonly locked: boolean;
  abort(reason?: any): Promise<void>;
  close(): Promise<void>;
  getWriter(): WritableStreamDefaultWriter<W>;
}

declare var WritableStream: {
  prototype: WritableStream;
  new <W = any>(
    underlyingSink?: UnderlyingSink<W>,
    strategy?: QueuingStrategy<W>,
  ): WritableStream<W>;
};

/** This Streams API interface represents a controller allowing control of a
 * WritableStream's state. When constructing a WritableStream, the underlying
 * sink is given a corresponding WritableStreamDefaultController instance to
 * manipulate. */
interface WritableStreamDefaultController {
  signal: AbortSignal;
  error(error?: any): void;
}

declare var WritableStreamDefaultController: WritableStreamDefaultController;

/** This Streams API interface is the object returned by
 * WritableStream.getWriter() and once created locks the < writer to the
 * WritableStream ensuring that no other streams can write to the underlying
 * sink. */
interface WritableStreamDefaultWriter<W = any> {
  readonly closed: Promise<void>;
  readonly desiredSize: number | null;
  readonly ready: Promise<void>;
  abort(reason?: any): Promise<void>;
  close(): Promise<void>;
  releaseLock(): void;
  write(chunk: W): Promise<void>;
}

declare var WritableStreamDefaultWriter: {
  prototype: WritableStreamDefaultWriter;
  new (): WritableStreamDefaultWriter;
};

interface TransformStream<I = any, O = any> {
  readonly readable: ReadableStream<O>;
  readonly writable: WritableStream<I>;
}

declare var TransformStream: {
  prototype: TransformStream;
  new <I = any, O = any>(
    transformer?: Transformer<I, O>,
    writableStrategy?: QueuingStrategy<I>,
    readableStrategy?: QueuingStrategy<O>,
  ): TransformStream<I, O>;
};

interface TransformStreamDefaultController<O = any> {
  readonly desiredSize: number | null;
  enqueue(chunk: O): void;
  error(reason?: any): void;
  terminate(): void;
}

declare var TransformStreamDefaultController: TransformStreamDefaultController;

interface Transformer<I = any, O = any> {
  flush?: TransformStreamDefaultControllerCallback<O>;
  readableType?: undefined;
  start?: TransformStreamDefaultControllerCallback<O>;
  transform?: TransformStreamDefaultControllerTransformCallback<I, O>;
  writableType?: undefined;
}

interface TransformStreamDefaultControllerCallback<O> {
  (controller: TransformStreamDefaultController<O>): void | PromiseLike<void>;
}

interface TransformStreamDefaultControllerTransformCallback<I, O> {
  (
    chunk: I,
    controller: TransformStreamDefaultController<O>,
  ): void | PromiseLike<void>;
}

interface MessageEventInit<T = any> extends EventInit {
  data?: T;
  origin?: string;
  lastEventId?: string;
}

declare class MessageEvent<T = any> extends Event {
  /**
   * Returns the data of the message.
   */
  readonly data: T;
  /**
   * Returns the last event ID string, for server-sent events.
   */
  readonly lastEventId: string;
  /**
   * Returns transfered ports.
   */
  readonly ports: ReadonlyArray<MessagePort>;
  constructor(type: string, eventInitDict?: MessageEventInit);
}

type Transferable = ArrayBuffer | MessagePort;

/**
 * @deprecated
 *
 * This type has been renamed to StructuredSerializeOptions. Use that type for
 * new code.
 */
type PostMessageOptions = StructuredSerializeOptions;

interface StructuredSerializeOptions {
  transfer?: Transferable[];
}

/** The MessageChannel interface of the Channel Messaging API allows us to
 * create a new message channel and send data through it via its two MessagePort
 * properties. */
declare class MessageChannel {
  constructor();
  readonly port1: MessagePort;
  readonly port2: MessagePort;
}

interface MessagePortEventMap {
  "message": MessageEvent;
  "messageerror": MessageEvent;
}

/** The MessagePort interface of the Channel Messaging API represents one of the
 * two ports of a MessageChannel, allowing messages to be sent from one port and
 * listening out for them arriving at the other. */
declare class MessagePort extends EventTarget {
  onmessage: ((this: MessagePort, ev: MessageEvent) => any) | null;
  onmessageerror: ((this: MessagePort, ev: MessageEvent) => any) | null;
  /**
   * Disconnects the port, so that it is no longer active.
   */
  close(): void;
  /**
   * Posts a message through the channel. Objects listed in transfer are
   * transferred, not just cloned, meaning that they are no longer usable on the
   * sending side.
   *
   * Throws a "DataCloneError" DOMException if transfer contains duplicate
   * objects or port, or if message could not be cloned.
   */
  postMessage(message: any, transfer: Transferable[]): void;
  postMessage(message: any, options?: StructuredSerializeOptions): void;
  /**
   * Begins dispatching messages received on the port. This is implictly called
   * when assiging a value to `this.onmessage`.
   */
  start(): void;
  addEventListener<K extends keyof MessagePortEventMap>(
    type: K,
    listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener<K extends keyof MessagePortEventMap>(
    type: K,
    listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;
}

/**
 * Creates a deep copy of a given value using the structured clone algorithm.
 *
 * Unlike a shallow copy, a deep copy does not hold the same references as the
 * source object, meaning its properties can be changed without affecting the
 * source. For more details, see
 * [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy).
 *
 * Throws a `DataCloneError` if any part of the input value is not
 * serializable.
 *
 * @example
 * ```ts
 * const object = { x: 0, y: 1 };
 *
 * const deepCopy = structuredClone(object);
 * deepCopy.x = 1;
 * console.log(deepCopy.x, object.x); // 1 0
 *
 * const shallowCopy = object;
 * shallowCopy.x = 1;
 * // shallowCopy.x is pointing to the same location in memory as object.x
 * console.log(shallowCopy.x, object.x); // 1 1
 * ```
 */
declare function structuredClone(
  value: any,
  options?: StructuredSerializeOptions,
): any;

/**
 * An API for compressing a stream of data.
 *
 * @example
 * ```ts
 * await Deno.stdin.readable
 *   .pipeThrough(new CompressionStream("gzip"))
 *   .pipeTo(Deno.stdout.writable);
 * ```
 */
declare class CompressionStream {
  /**
   * Creates a new `CompressionStream` object which compresses a stream of
   * data.
   *
   * Throws a `TypeError` if the format passed to the constructor is not
   * supported.
   */
  constructor(format: string);

  readonly readable: ReadableStream<Uint8Array>;
  readonly writable: WritableStream<Uint8Array>;
}

/**
 * An API for decompressing a stream of data.
 *
 * @example
 * ```ts
 * const input = await Deno.open("./file.txt.gz");
 * const output = await Deno.create("./file.txt");
 *
 * await input.readable
 *   .pipeThrough(new DecompressionStream("gzip"))
 *   .pipeTo(output.writable);
 * ```
 */
declare class DecompressionStream {
  /**
   * Creates a new `DecompressionStream` object which decompresses a stream of
   * data.
   *
   * Throws a `TypeError` if the format passed to the constructor is not
   * supported.
   */
  constructor(format: string);

  readonly readable: ReadableStream<Uint8Array>;
  readonly writable: WritableStream<Uint8Array>;
}

/** Dispatch an uncaught exception. Similar to a synchronous version of:
 * ```ts
 * setTimeout(() => { throw error; }, 0);
 * ```
 * The error can not be caught with a `try/catch` block. An error event will
 * be dispatched to the global scope. You can prevent the error from being
 * reported to the console with `Event.prototype.preventDefault()`:
 * ```ts
 * addEventListener("error", (event) => {
 *   event.preventDefault();
 * });
 * reportError(new Error("foo")); // Will not be reported.
 * ```
 * In Deno, this error will terminate the process if not intercepted like above.
 */
declare function reportError(
  error: any,
): void;

// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.

// deno-lint-ignore-file no-explicit-any no-var

/// <reference no-default-lib="true" />
/// <reference lib="esnext" />

interface DomIterable<K, V> {
  keys(): IterableIterator<K>;
  values(): IterableIterator<V>;
  entries(): IterableIterator<[K, V]>;
  [Symbol.iterator](): IterableIterator<[K, V]>;
  forEach(
    callback: (value: V, key: K, parent: this) => void,
    thisArg?: any,
  ): void;
}

type FormDataEntryValue = File | string;

/** Provides a way to easily construct a set of key/value pairs representing
 * form fields and their values, which can then be easily sent using the
 * XMLHttpRequest.send() method. It uses the same format a form would use if the
 * encoding type were set to "multipart/form-data". */
interface FormData {
  append(name: string, value: string | Blob, fileName?: string): void;
  delete(name: string): void;
  get(name: string): FormDataEntryValue | null;
  getAll(name: string): FormDataEntryValue[];
  has(name: string): boolean;
  set(name: string, value: string | Blob, fileName?: string): void;
  keys(): IterableIterator<string>;
  values(): IterableIterator<string>;
  entries(): IterableIterator<[string, FormDataEntryValue]>;
  [Symbol.iterator](): IterableIterator<[string, FormDataEntryValue]>;
  forEach(
    callback: (value: FormDataEntryValue, key: string, parent: this) => void,
    thisArg?: any,
  ): void;
}

declare var FormData: {
  prototype: FormData;
  new (): FormData;
};

interface Body {
  /** A simple getter used to expose a `ReadableStream` of the body contents. */
  readonly body: ReadableStream<Uint8Array> | null;
  /** Stores a `Boolean` that declares whether the body has been used in a
   * response yet.
   */
  readonly bodyUsed: boolean;
  /** Takes a `Response` stream and reads it to completion. It returns a promise
   * that resolves with an `ArrayBuffer`.
   */
  arrayBuffer(): Promise<ArrayBuffer>;
  /** Takes a `Response` stream and reads it to completion. It returns a promise
   * that resolves with a `Blob`.
   */
  blob(): Promise<Blob>;
  /** Takes a `Response` stream and reads it to completion. It returns a promise
   * that resolves with a `FormData` object.
   */
  formData(): Promise<FormData>;
  /** Takes a `Response` stream and reads it to completion. It returns a promise
   * that resolves with the result of parsing the body text as JSON.
   */
  json(): Promise<any>;
  /** Takes a `Response` stream and reads it to completion. It returns a promise
   * that resolves with a `USVString` (text).
   */
  text(): Promise<string>;
}

type HeadersInit = Headers | string[][] | Record<string, string>;

/** This Fetch API interface allows you to perform various actions on HTTP
 * request and response headers. These actions include retrieving, setting,
 * adding to, and removing. A Headers object has an associated header list,
 * which is initially empty and consists of zero or more name and value pairs.
 * You can add to this using methods like append() (see Examples). In all
 * methods of this interface, header names are matched by case-insensitive byte
 * sequence. */
interface Headers {
  append(name: string, value: string): void;
  delete(name: string): void;
  get(name: string): string | null;
  has(name: string): boolean;
  set(name: string, value: string): void;
  forEach(
    callbackfn: (value: string, key: string, parent: Headers) => void,
    thisArg?: any,
  ): void;
}

declare class Headers implements DomIterable<string, string> {
  constructor(init?: HeadersInit);

  /** Appends a new value onto an existing header inside a `Headers` object, or
   * adds the header if it does not already exist.
   */
  append(name: string, value: string): void;
  /** Deletes a header from a `Headers` object. */
  delete(name: string): void;
  /** Returns an iterator allowing to go through all key/value pairs
   * contained in this Headers object. The both the key and value of each pairs
   * are ByteString objects.
   */
  entries(): IterableIterator<[string, string]>;
  /** Returns a `ByteString` sequence of all the values of a header within a
   * `Headers` object with a given name.
   */
  get(name: string): string | null;
  /** Returns a boolean stating whether a `Headers` object contains a certain
   * header.
   */
  has(name: string): boolean;
  /** Returns an iterator allowing to go through all keys contained in
   * this Headers object. The keys are ByteString objects.
   */
  keys(): IterableIterator<string>;
  /** Sets a new value for an existing header inside a Headers object, or adds
   * the header if it does not already exist.
   */
  set(name: string, value: string): void;
  /** Returns an iterator allowing to go through all values contained in
   * this Headers object. The values are ByteString objects.
   */
  values(): IterableIterator<string>;
  forEach(
    callbackfn: (value: string, key: string, parent: this) => void,
    thisArg?: any,
  ): void;
  /** The Symbol.iterator well-known symbol specifies the default
   * iterator for this Headers object
   */
  [Symbol.iterator](): IterableIterator<[string, string]>;
}

type RequestInfo = Request | string;
type RequestCache =
  | "default"
  | "force-cache"
  | "no-cache"
  | "no-store"
  | "only-if-cached"
  | "reload";
type RequestCredentials = "include" | "omit" | "same-origin";
type RequestMode = "cors" | "navigate" | "no-cors" | "same-origin";
type RequestRedirect = "error" | "follow" | "manual";
type ReferrerPolicy =
  | ""
  | "no-referrer"
  | "no-referrer-when-downgrade"
  | "origin"
  | "origin-when-cross-origin"
  | "same-origin"
  | "strict-origin"
  | "strict-origin-when-cross-origin"
  | "unsafe-url";
type BodyInit =
  | Blob
  | BufferSource
  | FormData
  | URLSearchParams
  | ReadableStream<Uint8Array>
  | string;
type RequestDestination =
  | ""
  | "audio"
  | "audioworklet"
  | "document"
  | "embed"
  | "font"
  | "image"
  | "manifest"
  | "object"
  | "paintworklet"
  | "report"
  | "script"
  | "sharedworker"
  | "style"
  | "track"
  | "video"
  | "worker"
  | "xslt";

interface RequestInit {
  /**
   * A BodyInit object or null to set request's body.
   */
  body?: BodyInit | null;
  /**
   * A string indicating how the request will interact with the browser's cache
   * to set request's cache.
   */
  cache?: RequestCache;
  /**
   * A string indicating whether credentials will be sent with the request
   * always, never, or only when sent to a same-origin URL. Sets request's
   * credentials.
   */
  credentials?: RequestCredentials;
  /**
   * A Headers object, an object literal, or an array of two-item arrays to set
   * request's headers.
   */
  headers?: HeadersInit;
  /**
   * A cryptographic hash of the resource to be fetched by request. Sets
   * request's integrity.
   */
  integrity?: string;
  /**
   * A boolean to set request's keepalive.
   */
  keepalive?: boolean;
  /**
   * A string to set request's method.
   */
  method?: string;
  /**
   * A string to indicate whether the request will use CORS, or will be
   * restricted to same-origin URLs. Sets request's mode.
   */
  mode?: RequestMode;
  /**
   * A string indicating whether request follows redirects, results in an error
   * upon encountering a redirect, or returns the redirect (in an opaque
   * fashion). Sets request's redirect.
   */
  redirect?: RequestRedirect;
  /**
   * A string whose value is a same-origin URL, "about:client", or the empty
   * string, to set request's referrer.
   */
  referrer?: string;
  /**
   * A referrer policy to set request's referrerPolicy.
   */
  referrerPolicy?: ReferrerPolicy;
  /**
   * An AbortSignal to set request's signal.
   */
  signal?: AbortSignal | null;
  /**
   * Can only be null. Used to disassociate request from any Window.
   */
  window?: any;
}

/** This Fetch API interface represents a resource request. */
declare class Request implements Body {
  constructor(input: RequestInfo, init?: RequestInit);

  /**
   * Returns the cache mode associated with request, which is a string
   * indicating how the request will interact with the browser's cache when
   * fetching.
   */
  readonly cache: RequestCache;
  /**
   * Returns the credentials mode associated with request, which is a string
   * indicating whether credentials will be sent with the request always, never,
   * or only when sent to a same-origin URL.
   */
  readonly credentials: RequestCredentials;
  /**
   * Returns the kind of resource requested by request, e.g., "document" or "script".
   */
  readonly destination: RequestDestination;
  /**
   * Returns a Headers object consisting of the headers associated with request.
   * Note that headers added in the network layer by the user agent will not be
   * accounted for in this object, e.g., the "Host" header.
   */
  readonly headers: Headers;
  /**
   * Returns request's subresource integrity metadata, which is a cryptographic
   * hash of the resource being fetched. Its value consists of multiple hashes
   * separated by whitespace. [SRI]
   */
  readonly integrity: string;
  /**
   * Returns a boolean indicating whether or not request is for a history
   * navigation (a.k.a. back-forward navigation).
   */
  readonly isHistoryNavigation: boolean;
  /**
   * Returns a boolean indicating whether or not request is for a reload
   * navigation.
   */
  readonly isReloadNavigation: boolean;
  /**
   * Returns a boolean indicating whether or not request can outlive the global
   * in which it was created.
   */
  readonly keepalive: boolean;
  /**
   * Returns request's HTTP method, which is "GET" by default.
   */
  readonly method: string;
  /**
   * Returns the mode associated with request, which is a string indicating
   * whether the request will use CORS, or will be restricted to same-origin
   * URLs.
   */
  readonly mode: RequestMode;
  /**
   * Returns the redirect mode associated with request, which is a string
   * indicating how redirects for the request will be handled during fetching. A
   * request will follow redirects by default.
   */
  readonly redirect: RequestRedirect;
  /**
   * Returns the referrer of request. Its value can be a same-origin URL if
   * explicitly set in init, the empty string to indicate no referrer, and
   * "about:client" when defaulting to the global's default. This is used during
   * fetching to determine the value of the `Referer` header of the request
   * being made.
   */
  readonly referrer: string;
  /**
   * Returns the referrer policy associated with request. This is used during
   * fetching to compute the value of the request's referrer.
   */
  readonly referrerPolicy: ReferrerPolicy;
  /**
   * Returns the signal associated with request, which is an AbortSignal object
   * indicating whether or not request has been aborted, and its abort event
   * handler.
   */
  readonly signal: AbortSignal;
  /**
   * Returns the URL of request as a string.
   */
  readonly url: string;
  clone(): Request;

  /** A simple getter used to expose a `ReadableStream` of the body contents. */
  readonly body: ReadableStream<Uint8Array> | null;
  /** Stores a `Boolean` that declares whether the body has been used in a
   * request yet.
   */
  readonly bodyUsed: boolean;
  /** Takes a `Request` stream and reads it to completion. It returns a promise
   * that resolves with an `ArrayBuffer`.
   */
  arrayBuffer(): Promise<ArrayBuffer>;
  /** Takes a `Request` stream and reads it to completion. It returns a promise
   * that resolves with a `Blob`.
   */
  blob(): Promise<Blob>;
  /** Takes a `Request` stream and reads it to completion. It returns a promise
   * that resolves with a `FormData` object.
   */
  formData(): Promise<FormData>;
  /** Takes a `Request` stream and reads it to completion. It returns a promise
   * that resolves with the result of parsing the body text as JSON.
   */
  json(): Promise<any>;
  /** Takes a `Request` stream and reads it to completion. It returns a promise
   * that resolves with a `USVString` (text).
   */
  text(): Promise<string>;
}

interface ResponseInit {
  headers?: HeadersInit;
  status?: number;
  statusText?: string;
}

type ResponseType =
  | "basic"
  | "cors"
  | "default"
  | "error"
  | "opaque"
  | "opaqueredirect";

/** This Fetch API interface represents the response to a request. */
declare class Response implements Body {
  constructor(body?: BodyInit | null, init?: ResponseInit);
  static json(data: unknown, init?: ResponseInit): Response;
  static error(): Response;
  static redirect(url: string, status?: number): Response;

  readonly headers: Headers;
  readonly ok: boolean;
  readonly redirected: boolean;
  readonly status: number;
  readonly statusText: string;
  readonly trailer: Promise<Headers>;
  readonly type: ResponseType;
  readonly url: string;
  clone(): Response;

  /** A simple getter used to expose a `ReadableStream` of the body contents. */
  readonly body: ReadableStream<Uint8Array> | null;
  /** Stores a `Boolean` that declares whether the body has been used in a
   * response yet.
   */
  readonly bodyUsed: boolean;
  /** Takes a `Response` stream and reads it to completion. It returns a promise
   * that resolves with an `ArrayBuffer`.
   */
  arrayBuffer(): Promise<ArrayBuffer>;
  /** Takes a `Response` stream and reads it to completion. It returns a promise
   * that resolves with a `Blob`.
   */
  blob(): Promise<Blob>;
  /** Takes a `Response` stream and reads it to completion. It returns a promise
   * that resolves with a `FormData` object.
   */
  formData(): Promise<FormData>;
  /** Takes a `Response` stream and reads it to completion. It returns a promise
   * that resolves with the result of parsing the body text as JSON.
   */
  json(): Promise<any>;
  /** Takes a `Response` stream and reads it to completion. It returns a promise
   * that resolves with a `USVString` (text).
   */
  text(): Promise<string>;
}

/** Fetch a resource from the network. It returns a `Promise` that resolves to the
 * `Response` to that `Request`, whether it is successful or not.
 *
 * ```ts
 * const response = await fetch("http://my.json.host/data.json");
 * console.log(response.status);  // e.g. 200
 * console.log(response.statusText); // e.g. "OK"
 * const jsonData = await response.json();
 * ```
 */
declare function fetch(
  input: Request | string,
  init?: RequestInit,
): Promise<Response>;
// TODO(kt3k): Remove the following overloaded declaration for 2.0.
/** @deprecated URL is deprecated as the first argument. Use string or Request object instead.
 *
 * Fetch a resource from the network. It returns a `Promise` that resolves to the
 * `Response` to that `Request`, whether it is successful or not.
 */
declare function fetch(
  input: URL | Request | string,
  init?: RequestInit,
): Promise<Response>;

// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.

// deno-lint-ignore-file no-explicit-any no-empty-interface

/// <reference no-default-lib="true" />
/// <reference lib="esnext" />

// 8cc98b6f10b7f354473a08c3773bb1de839845b9

interface GPUObjectBase {
  label: string | null;
}

declare interface GPUObjectDescriptorBase {
  label?: string;
}

declare class GPUSupportedLimits {
  maxTextureDimension1D?: number;
  maxTextureDimension2D?: number;
  maxTextureDimension3D?: number;
  maxTextureArrayLayers?: number;
  maxBindGroups?: number;
  maxDynamicUniformBuffersPerPipelineLayout?: number;
  maxDynamicStorageBuffersPerPipelineLayout?: number;
  maxSampledTexturesPerShaderStage?: number;
  maxSamplersPerShaderStage?: number;
  maxStorageBuffersPerShaderStage?: number;
  maxStorageTexturesPerShaderStage?: number;
  maxUniformBuffersPerShaderStage?: number;
  maxUniformBufferBindingSize?: number;
  maxStorageBufferBindingSize?: number;
  minUniformBufferOffsetAlignment?: number;
  minStorageBufferOffsetAlignment?: number;
  maxVertexBuffers?: number;
  maxVertexAttributes?: number;
  maxVertexBufferArrayStride?: number;
  maxInterStageShaderComponents?: number;
  maxComputeWorkgroupStorageSize?: number;
  maxComputeInvocationsPerWorkgroup?: number;
  maxComputeWorkgroupSizeX?: number;
  maxComputeWorkgroupSizeY?: number;
  maxComputeWorkgroupSizeZ?: number;
  maxComputeWorkgroupsPerDimension?: number;
}

declare class GPUSupportedFeatures {
  forEach(
    callbackfn: (
      value: GPUFeatureName,
      value2: GPUFeatureName,
      set: Set<GPUFeatureName>,
    ) => void,
    thisArg?: any,
  ): void;
  has(value: GPUFeatureName): boolean;
  size: number;
  [
    Symbol
      .iterator
  ](): IterableIterator<GPUFeatureName>;
  entries(): IterableIterator<[GPUFeatureName, GPUFeatureName]>;
  keys(): IterableIterator<GPUFeatureName>;
  values(): IterableIterator<GPUFeatureName>;
}

declare class GPU {
  requestAdapter(
    options?: GPURequestAdapterOptions,
  ): Promise<GPUAdapter | null>;
}

declare interface GPURequestAdapterOptions {
  powerPreference?: GPUPowerPreference;
  forceFallbackAdapter?: boolean;
}

declare type GPUPowerPreference = "low-power" | "high-performance";

declare class GPUAdapter {
  readonly name: string;
  readonly features: GPUSupportedFeatures;
  readonly limits: GPUSupportedLimits;
  readonly isFallbackAdapter: boolean;

  requestDevice(descriptor?: GPUDeviceDescriptor): Promise<GPUDevice>;
}

declare interface GPUDeviceDescriptor extends GPUObjectDescriptorBase {
  requiredFeatures?: GPUFeatureName[];
  requiredLimits?: Record<string, number>;
}

declare type GPUFeatureName =
  | "depth-clip-control"
  | "depth24unorm-stencil8"
  | "depth32float-stencil8"
  | "pipeline-statistics-query"
  | "texture-compression-bc"
  | "texture-compression-etc2"
  | "texture-compression-astc"
  | "timestamp-query"
  | "indirect-first-instance"
  // extended from spec
  | "mappable-primary-buffers"
  | "sampled-texture-binding-array"
  | "sampled-texture-array-dynamic-indexing"
  | "sampled-texture-array-non-uniform-indexing"
  | "unsized-binding-array"
  | "multi-draw-indirect"
  | "multi-draw-indirect-count"
  | "push-constants"
  | "address-mode-clamp-to-border"
  | "texture-adapter-specific-format-features"
  | "shader-float64"
  | "vertex-attribute-64bit";

declare class GPUDevice extends EventTarget implements GPUObjectBase {
  label: string | null;

  readonly lost: Promise<GPUDeviceLostInfo>;
  pushErrorScope(filter: GPUErrorFilter): undefined;
  popErrorScope(): Promise<GPUError | null>;
  onuncapturederror:
    | ((this: GPUDevice, ev: GPUUncapturedErrorEvent) => any)
    | null;

  readonly features: ReadonlyArray<GPUFeatureName>;
  readonly limits: Record<string, number>;
  readonly queue: GPUQueue;

  destroy(): undefined;

  createBuffer(descriptor: GPUBufferDescriptor): GPUBuffer;
  createTexture(descriptor: GPUTextureDescriptor): GPUTexture;
  createSampler(descriptor?: GPUSamplerDescriptor): GPUSampler;

  createBindGroupLayout(
    descriptor: GPUBindGroupLayoutDescriptor,
  ): GPUBindGroupLayout;
  createPipelineLayout(
    descriptor: GPUPipelineLayoutDescriptor,
  ): GPUPipelineLayout;
  createBindGroup(descriptor: GPUBindGroupDescriptor): GPUBindGroup;

  createShaderModule(descriptor: GPUShaderModuleDescriptor): GPUShaderModule;
  createComputePipeline(
    descriptor: GPUComputePipelineDescriptor,
  ): GPUComputePipeline;
  createRenderPipeline(
    descriptor: GPURenderPipelineDescriptor,
  ): GPURenderPipeline;
  createComputePipelineAsync(
    descriptor: GPUComputePipelineDescriptor,
  ): Promise<GPUComputePipeline>;
  createRenderPipelineAsync(
    descriptor: GPURenderPipelineDescriptor,
  ): Promise<GPURenderPipeline>;

  createCommandEncoder(
    descriptor?: GPUCommandEncoderDescriptor,
  ): GPUCommandEncoder;
  createRenderBundleEncoder(
    descriptor: GPURenderBundleEncoderDescriptor,
  ): GPURenderBundleEncoder;

  createQuerySet(descriptor: GPUQuerySetDescriptor): GPUQuerySet;
}

declare class GPUBuffer implements GPUObjectBase {
  label: string | null;

  mapAsync(
    mode: GPUMapModeFlags,
    offset?: number,
    size?: number,
  ): Promise<undefined>;
  getMappedRange(offset?: number, size?: number): ArrayBuffer;
  unmap(): undefined;

  destroy(): undefined;
}

declare interface GPUBufferDescriptor extends GPUObjectDescriptorBase {
  size: number;
  usage: GPUBufferUsageFlags;
  mappedAtCreation?: boolean;
}

declare type GPUBufferUsageFlags = number;
declare class GPUBufferUsage {
  static MAP_READ: 0x0001;
  static MAP_WRITE: 0x0002;
  static COPY_SRC: 0x0004;
  static COPY_DST: 0x0008;
  static INDEX: 0x0010;
  static VERTEX: 0x0020;
  static UNIFORM: 0x0040;
  static STORAGE: 0x0080;
  static INDIRECT: 0x0100;
  static QUERY_RESOLVE: 0x0200;
}

declare type GPUMapModeFlags = number;
declare class GPUMapMode {
  static READ: 0x0001;
  static WRITE: 0x0002;
}

declare class GPUTexture implements GPUObjectBase {
  label: string | null;

  createView(descriptor?: GPUTextureViewDescriptor): GPUTextureView;
  destroy(): undefined;
}

declare interface GPUTextureDescriptor extends GPUObjectDescriptorBase {
  size: GPUExtent3D;
  mipLevelCount?: number;
  sampleCount?: number;
  dimension?: GPUTextureDimension;
  format: GPUTextureFormat;
  usage: GPUTextureUsageFlags;
}

declare type GPUTextureDimension = "1d" | "2d" | "3d";

declare type GPUTextureUsageFlags = number;
declare class GPUTextureUsage {
  static COPY_SRC: 0x01;
  static COPY_DST: 0x02;
  static TEXTURE_BINDING: 0x04;
  static STORAGE_BINDING: 0x08;
  static RENDER_ATTACHMENT: 0x10;
}

declare class GPUTextureView implements GPUObjectBase {
  label: string | null;
}

declare interface GPUTextureViewDescriptor extends GPUObjectDescriptorBase {
  format?: GPUTextureFormat;
  dimension?: GPUTextureViewDimension;
  aspect?: GPUTextureAspect;
  baseMipLevel?: number;
  mipLevelCount?: number;
  baseArrayLayer?: number;
  arrayLayerCount?: number;
}

declare type GPUTextureViewDimension =
  | "1d"
  | "2d"
  | "2d-array"
  | "cube"
  | "cube-array"
  | "3d";

declare type GPUTextureAspect = "all" | "stencil-only" | "depth-only";

declare type GPUTextureFormat =
  | "r8unorm"
  | "r8snorm"
  | "r8uint"
  | "r8sint"
  | "r16uint"
  | "r16sint"
  | "r16float"
  | "rg8unorm"
  | "rg8snorm"
  | "rg8uint"
  | "rg8sint"
  | "r32uint"
  | "r32sint"
  | "r32float"
  | "rg16uint"
  | "rg16sint"
  | "rg16float"
  | "rgba8unorm"
  | "rgba8unorm-srgb"
  | "rgba8snorm"
  | "rgba8uint"
  | "rgba8sint"
  | "bgra8unorm"
  | "bgra8unorm-srgb"
  | "rgb9e5ufloat"
  | "rgb10a2unorm"
  | "rg11b10ufloat"
  | "rg32uint"
  | "rg32sint"
  | "rg32float"
  | "rgba16uint"
  | "rgba16sint"
  | "rgba16float"
  | "rgba32uint"
  | "rgba32sint"
  | "rgba32float"
  | "stencil8"
  | "depth16unorm"
  | "depth24plus"
  | "depth24plus-stencil8"
  | "depth32float"
  | "bc1-rgba-unorm"
  | "bc1-rgba-unorm-srgb"
  | "bc2-rgba-unorm"
  | "bc2-rgba-unorm-srgb"
  | "bc3-rgba-unorm"
  | "bc3-rgba-unorm-srgb"
  | "bc4-r-unorm"
  | "bc4-r-snorm"
  | "bc5-rg-unorm"
  | "bc5-rg-snorm"
  | "bc6h-rgb-ufloat"
  | "bc6h-rgb-float"
  | "bc7-rgba-unorm"
  | "bc7-rgba-unorm-srgb"
  | "etc2-rgb8unorm"
  | "etc2-rgb8unorm-srgb"
  | "etc2-rgb8a1unorm"
  | "etc2-rgb8a1unorm-srgb"
  | "etc2-rgba8unorm"
  | "etc2-rgba8unorm-srgb"
  | "eac-r11unorm"
  | "eac-r11snorm"
  | "eac-rg11unorm"
  | "eac-rg11snorm"
  | "astc-4x4-unorm"
  | "astc-4x4-unorm-srgb"
  | "astc-5x4-unorm"
  | "astc-5x4-unorm-srgb"
  | "astc-5x5-unorm"
  | "astc-5x5-unorm-srgb"
  | "astc-6x5-unorm"
  | "astc-6x5-unorm-srgb"
  | "astc-6x6-unorm"
  | "astc-6x6-unorm-srgb"
  | "astc-8x5-unorm"
  | "astc-8x5-unorm-srgb"
  | "astc-8x6-unorm"
  | "astc-8x6-unorm-srgb"
  | "astc-8x8-unorm"
  | "astc-8x8-unorm-srgb"
  | "astc-10x5-unorm"
  | "astc-10x5-unorm-srgb"
  | "astc-10x6-unorm"
  | "astc-10x6-unorm-srgb"
  | "astc-10x8-unorm"
  | "astc-10x8-unorm-srgb"
  | "astc-10x10-unorm"
  | "astc-10x10-unorm-srgb"
  | "astc-12x10-unorm"
  | "astc-12x10-unorm-srgb"
  | "astc-12x12-unorm"
  | "astc-12x12-unorm-srgb"
  | "depth24unorm-stencil8"
  | "depth32float-stencil8";

declare class GPUSampler implements GPUObjectBase {
  label: string | null;
}

declare interface GPUSamplerDescriptor extends GPUObjectDescriptorBase {
  addressModeU?: GPUAddressMode;
  addressModeV?: GPUAddressMode;
  addressModeW?: GPUAddressMode;
  magFilter?: GPUFilterMode;
  minFilter?: GPUFilterMode;
  mipmapFilter?: GPUFilterMode;
  lodMinClamp?: number;
  lodMaxClamp?: number;
  compare?: GPUCompareFunction;
  maxAnisotropy?: number;
}

declare type GPUAddressMode = "clamp-to-edge" | "repeat" | "mirror-repeat";

declare type GPUFilterMode = "nearest" | "linear";

declare type GPUCompareFunction =
  | "never"
  | "less"
  | "equal"
  | "less-equal"
  | "greater"
  | "not-equal"
  | "greater-equal"
  | "always";

declare class GPUBindGroupLayout implements GPUObjectBase {
  label: string | null;
}

declare interface GPUBindGroupLayoutDescriptor extends GPUObjectDescriptorBase {
  entries: GPUBindGroupLayoutEntry[];
}

declare interface GPUBindGroupLayoutEntry {
  binding: number;
  visibility: GPUShaderStageFlags;

  buffer?: GPUBufferBindingLayout;
  sampler?: GPUSamplerBindingLayout;
  texture?: GPUTextureBindingLayout;
  storageTexture?: GPUStorageTextureBindingLayout;
}

declare type GPUShaderStageFlags = number;
declare class GPUShaderStage {
  static VERTEX: 0x1;
  static FRAGMENT: 0x2;
  static COMPUTE: 0x4;
}

declare interface GPUBufferBindingLayout {
  type?: GPUBufferBindingType;
  hasDynamicOffset?: boolean;
  minBindingSize?: number;
}

declare type GPUBufferBindingType = "uniform" | "storage" | "read-only-storage";

declare interface GPUSamplerBindingLayout {
  type?: GPUSamplerBindingType;
}

declare type GPUSamplerBindingType =
  | "filtering"
  | "non-filtering"
  | "comparison";

declare interface GPUTextureBindingLayout {
  sampleType?: GPUTextureSampleType;
  viewDimension?: GPUTextureViewDimension;
  multisampled?: boolean;
}

declare type GPUTextureSampleType =
  | "float"
  | "unfilterable-float"
  | "depth"
  | "sint"
  | "uint";

declare type GPUStorageTextureAccess = "write-only";

declare interface GPUStorageTextureBindingLayout {
  access: GPUStorageTextureAccess;
  format: GPUTextureFormat;
  viewDimension?: GPUTextureViewDimension;
}

declare class GPUBindGroup implements GPUObjectBase {
  label: string | null;
}

declare interface GPUBindGroupDescriptor extends GPUObjectDescriptorBase {
  layout: GPUBindGroupLayout;
  entries: GPUBindGroupEntry[];
}

declare type GPUBindingResource =
  | GPUSampler
  | GPUTextureView
  | GPUBufferBinding;

declare interface GPUBindGroupEntry {
  binding: number;
  resource: GPUBindingResource;
}

declare interface GPUBufferBinding {
  buffer: GPUBuffer;
  offset?: number;
  size?: number;
}

declare class GPUPipelineLayout implements GPUObjectBase {
  label: string | null;
}

declare interface GPUPipelineLayoutDescriptor extends GPUObjectDescriptorBase {
  bindGroupLayouts: GPUBindGroupLayout[];
}

declare type GPUCompilationMessageType = "error" | "warning" | "info";

declare interface GPUCompilationMessage {
  readonly message: string;
  readonly type: GPUCompilationMessageType;
  readonly lineNum: number;
  readonly linePos: number;
}

declare interface GPUCompilationInfo {
  readonly messages: ReadonlyArray<GPUCompilationMessage>;
}

declare class GPUShaderModule implements GPUObjectBase {
  label: string | null;

  compilationInfo(): Promise<GPUCompilationInfo>;
}

declare interface GPUShaderModuleDescriptor extends GPUObjectDescriptorBase {
  code: string;
  sourceMap?: any;
}

declare interface GPUPipelineDescriptorBase extends GPUObjectDescriptorBase {
  layout?: GPUPipelineLayout;
}

declare interface GPUPipelineBase {
  getBindGroupLayout(index: number): GPUBindGroupLayout;
}

declare interface GPUProgrammableStage {
  module: GPUShaderModule;
  entryPoint: string;
}

declare class GPUComputePipeline implements GPUObjectBase, GPUPipelineBase {
  label: string | null;

  getBindGroupLayout(index: number): GPUBindGroupLayout;
}

declare interface GPUComputePipelineDescriptor
  extends GPUPipelineDescriptorBase {
  compute: GPUProgrammableStage;
}

declare class GPURenderPipeline implements GPUObjectBase, GPUPipelineBase {
  label: string | null;

  getBindGroupLayout(index: number): GPUBindGroupLayout;
}

declare interface GPURenderPipelineDescriptor
  extends GPUPipelineDescriptorBase {
  vertex: GPUVertexState;
  primitive?: GPUPrimitiveState;
  depthStencil?: GPUDepthStencilState;
  multisample?: GPUMultisampleState;
  fragment?: GPUFragmentState;
}

declare type GPUPrimitiveTopology =
  | "point-list"
  | "line-list"
  | "line-strip"
  | "triangle-list"
  | "triangle-strip";

declare interface GPUPrimitiveState {
  topology?: GPUPrimitiveTopology;
  stripIndexFormat?: GPUIndexFormat;
  frontFace?: GPUFrontFace;
  cullMode?: GPUCullMode;
  unclippedDepth?: boolean;
}

declare type GPUFrontFace = "ccw" | "cw";

declare type GPUCullMode = "none" | "front" | "back";

declare interface GPUMultisampleState {
  count?: number;
  mask?: number;
  alphaToCoverageEnabled?: boolean;
}

declare interface GPUFragmentState extends GPUProgrammableStage {
  targets: GPUColorTargetState[];
}

declare interface GPUColorTargetState {
  format: GPUTextureFormat;

  blend?: GPUBlendState;
  writeMask?: GPUColorWriteFlags;
}

declare interface GPUBlendState {
  color: GPUBlendComponent;
  alpha: GPUBlendComponent;
}

declare type GPUColorWriteFlags = number;
declare class GPUColorWrite {
  static RED: 0x1;
  static GREEN: 0x2;
  static BLUE: 0x4;
  static ALPHA: 0x8;
  static ALL: 0xF;
}

declare interface GPUBlendComponent {
  operation?: GPUBlendOperation;
  srcFactor?: GPUBlendFactor;
  dstFactor?: GPUBlendFactor;
}

declare type GPUBlendFactor =
  | "zero"
  | "one"
  | "src"
  | "one-minus-src"
  | "src-alpha"
  | "one-minus-src-alpha"
  | "dst"
  | "one-minus-dst"
  | "dst-alpha"
  | "one-minus-dst-alpha"
  | "src-alpha-saturated"
  | "constant"
  | "one-minus-constant";

declare type GPUBlendOperation =
  | "add"
  | "subtract"
  | "reverse-subtract"
  | "min"
  | "max";

declare interface GPUDepthStencilState {
  format: GPUTextureFormat;

  depthWriteEnabled?: boolean;
  depthCompare?: GPUCompareFunction;

  stencilFront?: GPUStencilFaceState;
  stencilBack?: GPUStencilFaceState;

  stencilReadMask?: number;
  stencilWriteMask?: number;

  depthBias?: number;
  depthBiasSlopeScale?: number;
  depthBiasClamp?: number;
}

declare interface GPUStencilFaceState {
  compare?: GPUCompareFunction;
  failOp?: GPUStencilOperation;
  depthFailOp?: GPUStencilOperation;
  passOp?: GPUStencilOperation;
}

declare type GPUStencilOperation =
  | "keep"
  | "zero"
  | "replace"
  | "invert"
  | "increment-clamp"
  | "decrement-clamp"
  | "increment-wrap"
  | "decrement-wrap";

declare type GPUIndexFormat = "uint16" | "uint32";

declare type GPUVertexFormat =
  | "uint8x2"
  | "uint8x4"
  | "sint8x2"
  | "sint8x4"
  | "unorm8x2"
  | "unorm8x4"
  | "snorm8x2"
  | "snorm8x4"
  | "uint16x2"
  | "uint16x4"
  | "sint16x2"
  | "sint16x4"
  | "unorm16x2"
  | "unorm16x4"
  | "snorm16x2"
  | "snorm16x4"
  | "float16x2"
  | "float16x4"
  | "float32"
  | "float32x2"
  | "float32x3"
  | "float32x4"
  | "uint32"
  | "uint32x2"
  | "uint32x3"
  | "uint32x4"
  | "sint32"
  | "sint32x2"
  | "sint32x3"
  | "sint32x4";
declare type GPUVertexStepMode = "vertex" | "instance";

declare interface GPUVertexState extends GPUProgrammableStage {
  buffers?: (GPUVertexBufferLayout | null)[];
}

declare interface GPUVertexBufferLayout {
  arrayStride: number;
  stepMode?: GPUVertexStepMode;
  attributes: GPUVertexAttribute[];
}

declare interface GPUVertexAttribute {
  format: GPUVertexFormat;
  offset: number;

  shaderLocation: number;
}

declare class GPUCommandBuffer implements GPUObjectBase {
  label: string | null;
}

declare interface GPUCommandBufferDescriptor extends GPUObjectDescriptorBase {}

declare class GPUCommandEncoder implements GPUObjectBase {
  label: string | null;

  beginRenderPass(descriptor: GPURenderPassDescriptor): GPURenderPassEncoder;
  beginComputePass(
    descriptor?: GPUComputePassDescriptor,
  ): GPUComputePassEncoder;

  copyBufferToBuffer(
    source: GPUBuffer,
    sourceOffset: number,
    destination: GPUBuffer,
    destinationOffset: number,
    size: number,
  ): undefined;

  copyBufferToTexture(
    source: GPUImageCopyBuffer,
    destination: GPUImageCopyTexture,
    copySize: GPUExtent3D,
  ): undefined;

  copyTextureToBuffer(
    source: GPUImageCopyTexture,
    destination: GPUImageCopyBuffer,
    copySize: GPUExtent3D,
  ): undefined;

  copyTextureToTexture(
    source: GPUImageCopyTexture,
    destination: GPUImageCopyTexture,
    copySize: GPUExtent3D,
  ): undefined;

  clearBuffer(
    destination: GPUBuffer,
    destinationOffset: number,
    size: number,
  ): undefined;

  pushDebugGroup(groupLabel: string): undefined;
  popDebugGroup(): undefined;
  insertDebugMarker(markerLabel: string): undefined;

  writeTimestamp(querySet: GPUQuerySet, queryIndex: number): undefined;

  resolveQuerySet(
    querySet: GPUQuerySet,
    firstQuery: number,
    queryCount: number,
    destination: GPUBuffer,
    destinationOffset: number,
  ): undefined;

  finish(descriptor?: GPUCommandBufferDescriptor): GPUCommandBuffer;
}

declare interface GPUCommandEncoderDescriptor extends GPUObjectDescriptorBase {}

declare interface GPUImageDataLayout {
  offset?: number;
  bytesPerRow?: number;
  rowsPerImage?: number;
}

declare interface GPUImageCopyBuffer extends GPUImageDataLayout {
  buffer: GPUBuffer;
}

declare interface GPUImageCopyTexture {
  texture: GPUTexture;
  mipLevel?: number;
  origin?: GPUOrigin3D;
  aspect?: GPUTextureAspect;
}

interface GPUProgrammablePassEncoder {
  setBindGroup(
    index: number,
    bindGroup: GPUBindGroup,
    dynamicOffsets?: number[],
  ): undefined;

  setBindGroup(
    index: number,
    bindGroup: GPUBindGroup,
    dynamicOffsetsData: Uint32Array,
    dynamicOffsetsDataStart: number,
    dynamicOffsetsDataLength: number,
  ): undefined;

  pushDebugGroup(groupLabel: string): undefined;
  popDebugGroup(): undefined;
  insertDebugMarker(markerLabel: string): undefined;
}

declare class GPUComputePassEncoder
  implements GPUObjectBase, GPUProgrammablePassEncoder {
  label: string | null;
  setBindGroup(
    index: number,
    bindGroup: GPUBindGroup,
    dynamicOffsets?: number[],
  ): undefined;
  setBindGroup(
    index: number,
    bindGroup: GPUBindGroup,
    dynamicOffsetsData: Uint32Array,
    dynamicOffsetsDataStart: number,
    dynamicOffsetsDataLength: number,
  ): undefined;
  pushDebugGroup(groupLabel: string): undefined;
  popDebugGroup(): undefined;
  insertDebugMarker(markerLabel: string): undefined;
  setPipeline(pipeline: GPUComputePipeline): undefined;
  dispatch(x: number, y?: number, z?: number): undefined;
  dispatchIndirect(
    indirectBuffer: GPUBuffer,
    indirectOffset: number,
  ): undefined;

  beginPipelineStatisticsQuery(
    querySet: GPUQuerySet,
    queryIndex: number,
  ): undefined;
  endPipelineStatisticsQuery(): undefined;

  writeTimestamp(querySet: GPUQuerySet, queryIndex: number): undefined;

  endPass(): undefined;
}

declare interface GPUComputePassDescriptor extends GPUObjectDescriptorBase {}

interface GPURenderEncoderBase {
  setPipeline(pipeline: GPURenderPipeline): undefined;

  setIndexBuffer(
    buffer: GPUBuffer,
    indexFormat: GPUIndexFormat,
    offset?: number,
    size?: number,
  ): undefined;
  setVertexBuffer(
    slot: number,
    buffer: GPUBuffer,
    offset?: number,
    size?: number,
  ): undefined;

  draw(
    vertexCount: number,
    instanceCount?: number,
    firstVertex?: number,
    firstInstance?: number,
  ): undefined;
  drawIndexed(
    indexCount: number,
    instanceCount?: number,
    firstIndex?: number,
    baseVertex?: number,
    firstInstance?: number,
  ): undefined;

  drawIndirect(indirectBuffer: GPUBuffer, indirectOffset: number): undefined;
  drawIndexedIndirect(
    indirectBuffer: GPUBuffer,
    indirectOffset: number,
  ): undefined;
}

declare class GPURenderPassEncoder
  implements GPUObjectBase, GPUProgrammablePassEncoder, GPURenderEncoderBase {
  label: string | null;
  setBindGroup(
    index: number,
    bindGroup: GPUBindGroup,
    dynamicOffsets?: number[],
  ): undefined;
  setBindGroup(
    index: number,
    bindGroup: GPUBindGroup,
    dynamicOffsetsData: Uint32Array,
    dynamicOffsetsDataStart: number,
    dynamicOffsetsDataLength: number,
  ): undefined;
  pushDebugGroup(groupLabel: string): undefined;
  popDebugGroup(): undefined;
  insertDebugMarker(markerLabel: string): undefined;
  setPipeline(pipeline: GPURenderPipeline): undefined;
  setIndexBuffer(
    buffer: GPUBuffer,
    indexFormat: GPUIndexFormat,
    offset?: number,
    size?: number,
  ): undefined;
  setVertexBuffer(
    slot: number,
    buffer: GPUBuffer,
    offset?: number,
    size?: number,
  ): undefined;
  draw(
    vertexCount: number,
    instanceCount?: number,
    firstVertex?: number,
    firstInstance?: number,
  ): undefined;
  drawIndexed(
    indexCount: number,
    instanceCount?: number,
    firstIndex?: number,
    baseVertex?: number,
    firstInstance?: number,
  ): undefined;
  drawIndirect(indirectBuffer: GPUBuffer, indirectOffset: number): undefined;
  drawIndexedIndirect(
    indirectBuffer: GPUBuffer,
    indirectOffset: number,
  ): undefined;

  setViewport(
    x: number,
    y: number,
    width: number,
    height: number,
    minDepth: number,
    maxDepth: number,
  ): undefined;

  setScissorRect(
    x: number,
    y: number,
    width: number,
    height: number,
  ): undefined;

  setBlendConstant(color: GPUColor): undefined;
  setStencilReference(reference: number): undefined;

  beginOcclusionQuery(queryIndex: number): undefined;
  endOcclusionQuery(): undefined;

  beginPipelineStatisticsQuery(
    querySet: GPUQuerySet,
    queryIndex: number,
  ): undefined;
  endPipelineStatisticsQuery(): undefined;

  writeTimestamp(querySet: GPUQuerySet, queryIndex: number): undefined;

  executeBundles(bundles: GPURenderBundle[]): undefined;
  endPass(): undefined;
}

declare interface GPURenderPassDescriptor extends GPUObjectDescriptorBase {
  colorAttachments: GPURenderPassColorAttachment[];
  depthStencilAttachment?: GPURenderPassDepthStencilAttachment;
  occlusionQuerySet?: GPUQuerySet;
}

declare interface GPURenderPassColorAttachment {
  view: GPUTextureView;
  resolveTarget?: GPUTextureView;

  loadValue: GPULoadOp | GPUColor;
  storeOp?: GPUStoreOp;
}

declare interface GPURenderPassDepthStencilAttachment {
  view: GPUTextureView;

  depthLoadValue: GPULoadOp | number;
  depthStoreOp: GPUStoreOp;
  depthReadOnly?: boolean;

  stencilLoadValue: GPULoadOp | number;
  stencilStoreOp: GPUStoreOp;
  stencilReadOnly?: boolean;
}

declare type GPULoadOp = "load";

declare type GPUStoreOp = "store" | "discard";

declare class GPURenderBundle implements GPUObjectBase {
  label: string | null;
}

declare interface GPURenderBundleDescriptor extends GPUObjectDescriptorBase {}

declare class GPURenderBundleEncoder
  implements GPUObjectBase, GPUProgrammablePassEncoder, GPURenderEncoderBase {
  label: string | null;
  draw(
    vertexCount: number,
    instanceCount?: number,
    firstVertex?: number,
    firstInstance?: number,
  ): undefined;
  drawIndexed(
    indexCount: number,
    instanceCount?: number,
    firstIndex?: number,
    baseVertex?: number,
    firstInstance?: number,
  ): undefined;
  drawIndexedIndirect(
    indirectBuffer: GPUBuffer,
    indirectOffset: number,
  ): undefined;
  drawIndirect(indirectBuffer: GPUBuffer, indirectOffset: number): undefined;
  insertDebugMarker(markerLabel: string): undefined;
  popDebugGroup(): undefined;
  pushDebugGroup(groupLabel: string): undefined;
  setBindGroup(
    index: number,
    bindGroup: GPUBindGroup,
    dynamicOffsets?: number[],
  ): undefined;
  setBindGroup(
    index: number,
    bindGroup: GPUBindGroup,
    dynamicOffsetsData: Uint32Array,
    dynamicOffsetsDataStart: number,
    dynamicOffsetsDataLength: number,
  ): undefined;
  setIndexBuffer(
    buffer: GPUBuffer,
    indexFormat: GPUIndexFormat,
    offset?: number,
    size?: number,
  ): undefined;
  setPipeline(pipeline: GPURenderPipeline): undefined;
  setVertexBuffer(
    slot: number,
    buffer: GPUBuffer,
    offset?: number,
    size?: number,
  ): undefined;

  finish(descriptor?: GPURenderBundleDescriptor): GPURenderBundle;
}

declare interface GPURenderPassLayout extends GPUObjectDescriptorBase {
  colorFormats: GPUTextureFormat[];
  depthStencilFormat?: GPUTextureFormat;
  sampleCount?: number;
}

declare interface GPURenderBundleEncoderDescriptor extends GPURenderPassLayout {
  depthReadOnly?: boolean;
  stencilReadOnly?: boolean;
}

declare class GPUQueue implements GPUObjectBase {
  label: string | null;

  submit(commandBuffers: GPUCommandBuffer[]): undefined;

  onSubmittedWorkDone(): Promise<undefined>;

  writeBuffer(
    buffer: GPUBuffer,
    bufferOffset: number,
    data: BufferSource,
    dataOffset?: number,
    size?: number,
  ): undefined;

  writeTexture(
    destination: GPUImageCopyTexture,
    data: BufferSource,
    dataLayout: GPUImageDataLayout,
    size: GPUExtent3D,
  ): undefined;
}

declare class GPUQuerySet implements GPUObjectBase {
  label: string | null;

  destroy(): undefined;
}

declare interface GPUQuerySetDescriptor extends GPUObjectDescriptorBase {
  type: GPUQueryType;
  count: number;
  pipelineStatistics?: GPUPipelineStatisticName[];
}

declare type GPUQueryType = "occlusion" | "pipeline-statistics" | "timestamp";

declare type GPUPipelineStatisticName =
  | "vertex-shader-invocations"
  | "clipper-invocations"
  | "clipper-primitives-out"
  | "fragment-shader-invocations"
  | "compute-shader-invocations";

declare type GPUDeviceLostReason = "destroyed";

declare interface GPUDeviceLostInfo {
  readonly reason: GPUDeviceLostReason | undefined;
  readonly message: string;
}

declare type GPUErrorFilter = "out-of-memory" | "validation";

declare class GPUOutOfMemoryError {
  constructor();
}

declare class GPUValidationError {
  constructor(message: string);
  readonly message: string;
}

declare type GPUError = GPUOutOfMemoryError | GPUValidationError;

declare class GPUUncapturedErrorEvent extends Event {
  constructor(
    type: string,
    gpuUncapturedErrorEventInitDict: GPUUncapturedErrorEventInit,
  );
  readonly error: GPUError;
}

declare interface GPUUncapturedErrorEventInit extends EventInit {
  error?: GPUError;
}

declare interface GPUColorDict {
  r: number;
  g: number;
  b: number;
  a: number;
}

declare type GPUColor = number[] | GPUColorDict;

declare interface GPUOrigin3DDict {
  x?: number;
  y?: number;
  z?: number;
}

declare type GPUOrigin3D = number[] | GPUOrigin3DDict;

declare interface GPUExtent3DDict {
  width: number;
  height?: number;
  depthOrArrayLayers?: number;
}

declare type GPUExtent3D = number[] | GPUExtent3DDict;

// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.

// deno-lint-ignore-file no-explicit-any

/// <reference no-default-lib="true" />
/// <reference lib="esnext" />

interface CloseEventInit extends EventInit {
  code?: number;
  reason?: string;
  wasClean?: boolean;
}

declare class CloseEvent extends Event {
  constructor(type: string, eventInitDict?: CloseEventInit);
  /**
   * Returns the WebSocket connection close code provided by the server.
   */
  readonly code: number;
  /**
   * Returns the WebSocket connection close reason provided by the server.
   */
  readonly reason: string;
  /**
   * Returns true if the connection closed cleanly; false otherwise.
   */
  readonly wasClean: boolean;
}

interface WebSocketEventMap {
  close: CloseEvent;
  error: Event;
  message: MessageEvent;
  open: Event;
}

/**
 * Provides the API for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection.
 *
 * If you are looking to create a WebSocket server, please take a look at `Deno.upgradeWebSocket()`.
 */
declare class WebSocket extends EventTarget {
  constructor(url: string, protocols?: string | string[]);

  static readonly CLOSED: number;
  static readonly CLOSING: number;
  static readonly CONNECTING: number;
  static readonly OPEN: number;

  /**
   * Returns a string that indicates how binary data from the WebSocket object is exposed to scripts:
   *
   * Can be set, to change how binary data is returned. The default is "blob".
   */
  binaryType: BinaryType;
  /**
   * Returns the number of bytes of application data (UTF-8 text and binary data) that have been queued using send() but not yet been transmitted to the network.
   *
   * If the WebSocket connection is closed, this attribute's value will only increase with each call to the send() method. (The number does not reset to zero once the connection closes.)
   */
  readonly bufferedAmount: number;
  /**
   * Returns the extensions selected by the server, if any.
   */
  readonly extensions: string;
  onclose: ((this: WebSocket, ev: CloseEvent) => any) | null;
  onerror: ((this: WebSocket, ev: Event | ErrorEvent) => any) | null;
  onmessage: ((this: WebSocket, ev: MessageEvent) => any) | null;
  onopen: ((this: WebSocket, ev: Event) => any) | null;
  /**
   * Returns the subprotocol selected by the server, if any. It can be used in conjunction with the array form of the constructor's second argument to perform subprotocol negotiation.
   */
  readonly protocol: string;
  /**
   * Returns the state of the WebSocket object's connection. It can have the values described below.
   */
  readonly readyState: number;
  /**
   * Returns the URL that was used to establish the WebSocket connection.
   */
  readonly url: string;
  /**
   * Closes the WebSocket connection, optionally using code as the the WebSocket connection close code and reason as the the WebSocket connection close reason.
   */
  close(code?: number, reason?: string): void;
  /**
   * Transmits data using the WebSocket connection. data can be a string, a Blob, an ArrayBuffer, or an ArrayBufferView.
   */
  send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void;
  readonly CLOSED: number;
  readonly CLOSING: number;
  readonly CONNECTING: number;
  readonly OPEN: number;
  addEventListener<K extends keyof WebSocketEventMap>(
    type: K,
    listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener<K extends keyof WebSocketEventMap>(
    type: K,
    listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;
}

type BinaryType = "arraybuffer" | "blob";

// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.

// deno-lint-ignore-file no-explicit-any no-var

/// <reference no-default-lib="true" />
/// <reference lib="esnext" />

/** This Web Storage API interface provides access to a particular domain's session or local storage. It allows, for example, the addition, modification, or deletion of stored data items. */
interface Storage {
  /**
   * Returns the number of key/value pairs currently present in the list associated with the object.
   */
  readonly length: number;
  /**
   * Empties the list associated with the object of all key/value pairs, if there are any.
   */
  clear(): void;
  /**
   * Returns the current value associated with the given key, or null if the given key does not exist in the list associated with the object.
   */
  getItem(key: string): string | null;
  /**
   * Returns the name of the nth key in the list, or null if n is greater than or equal to the number of key/value pairs in the object.
   */
  key(index: number): string | null;
  /**
   * Removes the key/value pair with the given key from the list associated with the object, if a key/value pair with the given key exists.
   */
  removeItem(key: string): void;
  /**
   * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
   *
   * Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)
   */
  setItem(key: string, value: string): void;
  [name: string]: any;
}

declare var Storage: {
  prototype: Storage;
  new (): Storage;
};

// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.

// deno-lint-ignore-file no-var

/// <reference no-default-lib="true" />
/// <reference lib="esnext" />

declare var crypto: Crypto;

interface Algorithm {
  name: string;
}

interface KeyAlgorithm {
  name: string;
}

type AlgorithmIdentifier = string | Algorithm;
type HashAlgorithmIdentifier = AlgorithmIdentifier;
type KeyType = "private" | "public" | "secret";
type KeyUsage =
  | "decrypt"
  | "deriveBits"
  | "deriveKey"
  | "encrypt"
  | "sign"
  | "unwrapKey"
  | "verify"
  | "wrapKey";
type KeyFormat = "jwk" | "pkcs8" | "raw" | "spki";
type NamedCurve = string;

interface RsaOtherPrimesInfo {
  d?: string;
  r?: string;
  t?: string;
}

interface JsonWebKey {
  alg?: string;
  crv?: string;
  d?: string;
  dp?: string;
  dq?: string;
  e?: string;
  ext?: boolean;
  k?: string;
  // deno-lint-ignore camelcase
  key_ops?: string[];
  kty?: string;
  n?: string;
  oth?: RsaOtherPrimesInfo[];
  p?: string;
  q?: string;
  qi?: string;
  use?: string;
  x?: string;
  y?: string;
}

interface AesCbcParams extends Algorithm {
  iv: BufferSource;
}

interface AesGcmParams extends Algorithm {
  iv: BufferSource;
  additionalData?: BufferSource;
  tagLength?: number;
}

interface AesCtrParams extends Algorithm {
  counter: BufferSource;
  length: number;
}

interface HmacKeyGenParams extends Algorithm {
  hash: HashAlgorithmIdentifier;
  length?: number;
}

interface EcKeyGenParams extends Algorithm {
  namedCurve: NamedCurve;
}

interface EcKeyImportParams extends Algorithm {
  namedCurve: NamedCurve;
}

interface EcdsaParams extends Algorithm {
  hash: HashAlgorithmIdentifier;
}

interface RsaHashedImportParams extends Algorithm {
  hash: HashAlgorithmIdentifier;
}

interface RsaHashedKeyGenParams extends RsaKeyGenParams {
  hash: HashAlgorithmIdentifier;
}

interface RsaKeyGenParams extends Algorithm {
  modulusLength: number;
  publicExponent: Uint8Array;
}

interface RsaPssParams extends Algorithm {
  saltLength: number;
}

interface RsaOaepParams extends Algorithm {
  label?: Uint8Array;
}

interface HmacImportParams extends Algorithm {
  hash: HashAlgorithmIdentifier;
  length?: number;
}

interface EcKeyAlgorithm extends KeyAlgorithm {
  namedCurve: NamedCurve;
}

interface HmacKeyAlgorithm extends KeyAlgorithm {
  hash: KeyAlgorithm;
  length: number;
}

interface RsaHashedKeyAlgorithm extends RsaKeyAlgorithm {
  hash: KeyAlgorithm;
}

interface RsaKeyAlgorithm extends KeyAlgorithm {
  modulusLength: number;
  publicExponent: Uint8Array;
}

interface HkdfParams extends Algorithm {
  hash: HashAlgorithmIdentifier;
  info: BufferSource;
  salt: BufferSource;
}

interface Pbkdf2Params extends Algorithm {
  hash: HashAlgorithmIdentifier;
  iterations: number;
  salt: BufferSource;
}

interface AesDerivedKeyParams extends Algorithm {
  length: number;
}

interface EcdhKeyDeriveParams extends Algorithm {
  public: CryptoKey;
}

interface AesKeyGenParams extends Algorithm {
  length: number;
}

interface AesKeyAlgorithm extends KeyAlgorithm {
  length: number;
}

/** The CryptoKey dictionary of the Web Crypto API represents a cryptographic key. */
interface CryptoKey {
  readonly algorithm: KeyAlgorithm;
  readonly extractable: boolean;
  readonly type: KeyType;
  readonly usages: KeyUsage[];
}

declare var CryptoKey: {
  prototype: CryptoKey;
  new (): CryptoKey;
};

/** The CryptoKeyPair dictionary of the Web Crypto API represents a key pair for an asymmetric cryptography algorithm, also known as a public-key algorithm. */
interface CryptoKeyPair {
  privateKey: CryptoKey;
  publicKey: CryptoKey;
}

declare var CryptoKeyPair: {
  prototype: CryptoKeyPair;
  new (): CryptoKeyPair;
};

/** This Web Crypto API interface provides a number of low-level cryptographic functions. It is accessed via the Crypto.subtle properties available in a window context (via Window.crypto). */
interface SubtleCrypto {
  generateKey(
    algorithm: RsaHashedKeyGenParams | EcKeyGenParams,
    extractable: boolean,
    keyUsages: KeyUsage[],
  ): Promise<CryptoKeyPair>;
  generateKey(
    algorithm: AesKeyGenParams | HmacKeyGenParams,
    extractable: boolean,
    keyUsages: KeyUsage[],
  ): Promise<CryptoKey>;
  generateKey(
    algorithm: AlgorithmIdentifier,
    extractable: boolean,
    keyUsages: KeyUsage[],
  ): Promise<CryptoKeyPair | CryptoKey>;
  importKey(
    format: "jwk",
    keyData: JsonWebKey,
    algorithm:
      | AlgorithmIdentifier
      | HmacImportParams
      | RsaHashedImportParams
      | EcKeyImportParams,
    extractable: boolean,
    keyUsages: KeyUsage[],
  ): Promise<CryptoKey>;
  importKey(
    format: Exclude<KeyFormat, "jwk">,
    keyData: BufferSource,
    algorithm:
      | AlgorithmIdentifier
      | HmacImportParams
      | RsaHashedImportParams
      | EcKeyImportParams,
    extractable: boolean,
    keyUsages: KeyUsage[],
  ): Promise<CryptoKey>;
  exportKey(format: "jwk", key: CryptoKey): Promise<JsonWebKey>;
  exportKey(
    format: Exclude<KeyFormat, "jwk">,
    key: CryptoKey,
  ): Promise<ArrayBuffer>;
  sign(
    algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams,
    key: CryptoKey,
    data: BufferSource,
  ): Promise<ArrayBuffer>;
  verify(
    algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams,
    key: CryptoKey,
    signature: BufferSource,
    data: BufferSource,
  ): Promise<boolean>;
  digest(
    algorithm: AlgorithmIdentifier,
    data: BufferSource,
  ): Promise<ArrayBuffer>;
  encrypt(
    algorithm:
      | AlgorithmIdentifier
      | RsaOaepParams
      | AesCbcParams
      | AesGcmParams
      | AesCtrParams,
    key: CryptoKey,
    data: BufferSource,
  ): Promise<ArrayBuffer>;
  decrypt(
    algorithm:
      | AlgorithmIdentifier
      | RsaOaepParams
      | AesCbcParams
      | AesGcmParams
      | AesCtrParams,
    key: CryptoKey,
    data: BufferSource,
  ): Promise<ArrayBuffer>;
  deriveBits(
    algorithm:
      | AlgorithmIdentifier
      | HkdfParams
      | Pbkdf2Params
      | EcdhKeyDeriveParams,
    baseKey: CryptoKey,
    length: number,
  ): Promise<ArrayBuffer>;
  deriveKey(
    algorithm: AlgorithmIdentifier | HkdfParams | Pbkdf2Params,
    baseKey: CryptoKey,
    derivedKeyType:
      | AlgorithmIdentifier
      | AesDerivedKeyParams
      | HmacImportParams
      | HkdfParams
      | Pbkdf2Params,
    extractable: boolean,
    keyUsages: KeyUsage[],
  ): Promise<CryptoKey>;
  wrapKey(
    format: KeyFormat,
    key: CryptoKey,
    wrappingKey: CryptoKey,
    wrapAlgorithm:
      | AlgorithmIdentifier
      | RsaOaepParams
      | AesCbcParams
      | AesCtrParams,
  ): Promise<ArrayBuffer>;
  unwrapKey(
    format: KeyFormat,
    wrappedKey: BufferSource,
    unwrappingKey: CryptoKey,
    unwrapAlgorithm:
      | AlgorithmIdentifier
      | RsaOaepParams
      | AesCbcParams
      | AesCtrParams,
    unwrappedKeyAlgorithm:
      | AlgorithmIdentifier
      | HmacImportParams
      | RsaHashedImportParams
      | EcKeyImportParams,
    extractable: boolean,
    keyUsages: KeyUsage[],
  ): Promise<CryptoKey>;
}

declare interface Crypto {
  readonly subtle: SubtleCrypto;
  getRandomValues<
    T extends
      | Int8Array
      | Int16Array
      | Int32Array
      | Uint8Array
      | Uint16Array
      | Uint32Array
      | Uint8ClampedArray
      | Float32Array
      | Float64Array
      | DataView
      | null,
  >(
    array: T,
  ): T;
  randomUUID(): string;
}

declare var SubtleCrypto: {
  prototype: SubtleCrypto;
  new (): SubtleCrypto;
};

// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.

// deno-lint-ignore-file no-explicit-any no-var

/// <reference no-default-lib="true" />
/// <reference lib="esnext" />

interface BroadcastChannelEventMap {
  "message": MessageEvent;
  "messageerror": MessageEvent;
}

interface BroadcastChannel extends EventTarget {
  /**
   * Returns the channel name (as passed to the constructor).
   */
  readonly name: string;
  onmessage: ((this: BroadcastChannel, ev: MessageEvent) => any) | null;
  onmessageerror: ((this: BroadcastChannel, ev: MessageEvent) => any) | null;
  /**
   * Closes the BroadcastChannel object, opening it up to garbage collection.
   */
  close(): void;
  /**
   * Sends the given message to other BroadcastChannel objects set up for
   * this channel. Messages can be structured objects, e.g. nested objects
   * and arrays.
   */
  postMessage(message: any): void;
  addEventListener<K extends keyof BroadcastChannelEventMap>(
    type: K,
    listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener<K extends keyof BroadcastChannelEventMap>(
    type: K,
    listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;
}

declare var BroadcastChannel: {
  prototype: BroadcastChannel;
  new (name: string): BroadcastChannel;
};

// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.

/// <reference no-default-lib="true" />
/// <reference lib="esnext" />

declare namespace Deno {
  export interface NetAddr {
    transport: "tcp" | "udp";
    hostname: string;
    port: number;
  }

  export interface UnixAddr {
    transport: "unix" | "unixpacket";
    path: string;
  }

  export type Addr = NetAddr | UnixAddr;

  /** A generic network listener for stream-oriented protocols. */
  export interface Listener extends AsyncIterable<Conn> {
    /** Waits for and resolves to the next connection to the `Listener`. */
    accept(): Promise<Conn>;
    /** Close closes the listener. Any pending accept promises will be rejected
     * with errors. */
    close(): void;
    /** Return the address of the `Listener`. */
    readonly addr: Addr;

    /** Return the rid of the `Listener`. */
    readonly rid: number;

    [Symbol.asyncIterator](): AsyncIterableIterator<Conn>;
  }

  /** Specialized listener that accepts TLS connections. */
  export interface TlsListener extends Listener, AsyncIterable<TlsConn> {
    /** Waits for a TLS client to connect and accepts the connection. */
    accept(): Promise<TlsConn>;
    [Symbol.asyncIterator](): AsyncIterableIterator<TlsConn>;
  }

  export interface Conn extends Reader, Writer, Closer {
    /** The local address of the connection. */
    readonly localAddr: Addr;
    /** The remote address of the connection. */
    readonly remoteAddr: Addr;
    /** The resource ID of the connection. */
    readonly rid: number;
    /** Shuts down (`shutdown(2)`) the write side of the connection. Most
     * callers should just use `close()`. */
    closeWrite(): Promise<void>;

    readonly readable: ReadableStream<Uint8Array>;
    readonly writable: WritableStream<Uint8Array>;
  }

  // deno-lint-ignore no-empty-interface
  export interface TlsHandshakeInfo {}

  export interface TlsConn extends Conn {
    /** Runs the client or server handshake protocol to completion if that has
     * not happened yet. Calling this method is optional; the TLS handshake
     * will be completed automatically as soon as data is sent or received. */
    handshake(): Promise<TlsHandshakeInfo>;
  }

  export interface ListenOptions {
    /** The port to listen on. */
    port: number;
    /** A literal IP address or host name that can be resolved to an IP address.
     * If not specified, defaults to `0.0.0.0`.
     *
     * __Note about `0.0.0.0`__ While listening `0.0.0.0` works on all platforms,
     * the browsers on Windows don't work with the address `0.0.0.0`.
     * You should show the message like `server running on localhost:8080` instead of
     * `server running on 0.0.0.0:8080` if your program supports Windows. */
    hostname?: string;
  }

  /** Listen announces on the local transport address.
   *
   * ```ts
   * const listener1 = Deno.listen({ port: 80 })
   * const listener2 = Deno.listen({ hostname: "192.0.2.1", port: 80 })
   * const listener3 = Deno.listen({ hostname: "[2001:db8::1]", port: 80 });
   * const listener4 = Deno.listen({ hostname: "golang.org", port: 80, transport: "tcp" });
   * ```
   *
   * Requires `allow-net` permission. */
  export function listen(
    options: ListenOptions & { transport?: "tcp" },
  ): Listener;

  export interface ListenTlsOptions extends ListenOptions {
    /** Server private key in PEM format */
    key?: string;
    /** Cert chain in PEM format */
    cert?: string;
    /** Path to a file containing a PEM formatted CA certificate. Requires
     * `--allow-read`.
     *
     * @deprecated This option is deprecated and will be removed in Deno 2.0.
     */
    certFile?: string;
    /** Server private key file. Requires `--allow-read`.
     *
     * @deprecated This option is deprecated and will be removed in Deno 2.0.
     */
    keyFile?: string;

    transport?: "tcp";
  }

  /** Listen announces on the local transport address over TLS (transport layer
   * security).
   *
   * ```ts
   * const lstnr = Deno.listenTls({ port: 443, certFile: "./server.crt", keyFile: "./server.key" });
   * ```
   *
   * Requires `allow-net` permission. */
  export function listenTls(options: ListenTlsOptions): TlsListener;

  export interface ConnectOptions {
    /** The port to connect to. */
    port: number;
    /** A literal IP address or host name that can be resolved to an IP address.
     * If not specified, defaults to `127.0.0.1`. */
    hostname?: string;
    transport?: "tcp";
  }

  /**
   * Connects to the hostname (default is "127.0.0.1") and port on the named
   * transport (default is "tcp"), and resolves to the connection (`Conn`).
   *
   * ```ts
   * const conn1 = await Deno.connect({ port: 80 });
   * const conn2 = await Deno.connect({ hostname: "192.0.2.1", port: 80 });
   * const conn3 = await Deno.connect({ hostname: "[2001:db8::1]", port: 80 });
   * const conn4 = await Deno.connect({ hostname: "golang.org", port: 80, transport: "tcp" });
   * ```
   *
   * Requires `allow-net` permission for "tcp". */
  export function connect(options: ConnectOptions): Promise<TcpConn>;

  export interface TcpConn extends Conn {
    /**
     * **UNSTABLE**: new API, see https://github.com/denoland/deno/issues/13617.
     *
     * Enable/disable the use of Nagle's algorithm. Defaults to true.
     */
    setNoDelay(nodelay?: boolean): void;
    /**
     * **UNSTABLE**: new API, see https://github.com/denoland/deno/issues/13617.
     *
     * Enable/disable keep-alive functionality.
     */
    setKeepAlive(keepalive?: boolean): void;
  }

  // deno-lint-ignore no-empty-interface
  export interface UnixConn extends Conn {}

  export interface ConnectTlsOptions {
    /** The port to connect to. */
    port: number;
    /** A literal IP address or host name that can be resolved to an IP address.
     * If not specified, defaults to `127.0.0.1`. */
    hostname?: string;
    /**
     * Server certificate file.
     *
     * @deprecated This option is deprecated and will be removed in a future
     * release.
     */
    certFile?: string;
    /** A list of root certificates that will be used in addition to the
     * default root certificates to verify the peer's certificate.
     *
     * Must be in PEM format. */
    caCerts?: string[];
  }

  /** Establishes a secure connection over TLS (transport layer security) using
   * an optional cert file, hostname (default is "127.0.0.1") and port.  The
   * cert file is optional and if not included Mozilla's root certificates will
   * be used (see also https://github.com/ctz/webpki-roots for specifics)
   *
   * ```ts
   * const caCert = await Deno.readTextFile("./certs/my_custom_root_CA.pem");
   * const conn1 = await Deno.connectTls({ port: 80 });
   * const conn2 = await Deno.connectTls({ caCerts: [caCert], hostname: "192.0.2.1", port: 80 });
   * const conn3 = await Deno.connectTls({ hostname: "[2001:db8::1]", port: 80 });
   * const conn4 = await Deno.connectTls({ caCerts: [caCert], hostname: "golang.org", port: 80});
   * ```
   *
   * Requires `allow-net` permission.
   */
  export function connectTls(options: ConnectTlsOptions): Promise<TlsConn>;

  export interface StartTlsOptions {
    /** A literal IP address or host name that can be resolved to an IP address.
     * If not specified, defaults to `127.0.0.1`. */
    hostname?: string;
    /** A list of root certificates that will be used in addition to the
     * default root certificates to verify the peer's certificate.
     *
     * Must be in PEM format. */
    caCerts?: string[];
  }

  /** Start TLS handshake from an existing connection using an optional list of
   * CA certificates, and hostname (default is "127.0.0.1"). Specifying CA certs
   * is optional. By default the configured root certificates are used. Using
   * this function requires that the other end of the connection is prepared for
   * a TLS handshake.
   *
   * ```ts
   * const conn = await Deno.connect({ port: 80, hostname: "127.0.0.1" });
   * const caCert = await Deno.readTextFile("./certs/my_custom_root_CA.pem");
   * const tlsConn = await Deno.startTls(conn, { caCerts: [caCert], hostname: "localhost" });
   * ```
   *
   * Requires `allow-net` permission.
   */
  export function startTls(
    conn: Conn,
    options?: StartTlsOptions,
  ): Promise<TlsConn>;

  /** Shutdown socket send operations.
   *
   * Matches behavior of POSIX shutdown(3).
   *
   * ```ts
   * const listener = Deno.listen({ port: 80 });
   * const conn = await listener.accept();
   * Deno.shutdown(conn.rid);
   * ```
   */
  export function shutdown(rid: number): Promise<void>;
}

// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.

// Documentation partially adapted from [MDN](https://developer.mozilla.org/),
// by Mozilla Contributors, which is licensed under CC-BY-SA 2.5.

/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="deno.console" />
/// <reference lib="deno.url" />
/// <reference lib="deno.web" />
/// <reference lib="deno.fetch" />
/// <reference lib="deno.websocket" />
/// <reference lib="deno.crypto" />
/// <reference lib="deno.broadcast_channel" />

declare namespace WebAssembly {
  /**
   * The `WebAssembly.CompileError` object indicates an error during WebAssembly decoding or validation.
   *
   * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/CompileError)
   */
  export class CompileError extends Error {
    /** Creates a new `WebAssembly.CompileError` object. */
    constructor();
  }

  /**
   * A `WebAssembly.Global` object represents a global variable instance, accessible from
   * both JavaScript and importable/exportable across one or more `WebAssembly.Module`
   * instances. This allows dynamic linking of multiple modules.
   *
   * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Global)
   */
  export class Global {
    /** Creates a new `Global` object. */
    constructor(descriptor: GlobalDescriptor, v?: any);

    /**
     * The value contained inside the global variable — this can be used to directly set
     * and get the global's value.
     */
    value: any;

    /** Old-style method that returns the value contained inside the global variable. */
    valueOf(): any;
  }

  /**
   * A `WebAssembly.Instance` object is a stateful, executable instance of a `WebAssembly.Module`.
   * Instance objects contain all the Exported WebAssembly functions that allow calling into
   * WebAssembly code from JavaScript.
   *
   * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance)
   */
  export class Instance {
    /** Creates a new Instance object. */
    constructor(module: Module, importObject?: Imports);

    /**
     * Returns an object containing as its members all the functions exported from the
     * WebAssembly module instance, to allow them to be accessed and used by JavaScript.
     * Read-only.
     */
    readonly exports: Exports;
  }

  /**
   * The `WebAssembly.LinkError` object indicates an error during module instantiation
   * (besides traps from the start function).
   *
   * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/LinkError)
   */
  export class LinkError extends Error {
    /** Creates a new WebAssembly.LinkError object. */
    constructor();
  }

  /**
   * The `WebAssembly.Memory` object is a resizable `ArrayBuffer` or `SharedArrayBuffer` that
   * holds the raw bytes of memory accessed by a WebAssembly Instance.
   *
   * A memory created by JavaScript or in WebAssembly code will be accessible and mutable
   * from both JavaScript and WebAssembly.
   *
   * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory)
   */
  export class Memory {
    /** Creates a new `Memory` object. */
    constructor(descriptor: MemoryDescriptor);

    /** An accessor property that returns the buffer contained in the memory. */
    readonly buffer: ArrayBuffer | SharedArrayBuffer;

    /**
     * Increases the size of the memory instance by a specified number of WebAssembly
     * pages (each one is 64KB in size).
     */
    grow(delta: number): number;
  }

  /**
   * A `WebAssembly.Module` object contains stateless WebAssembly code that has already been compiled
   * by the browser — this can be efficiently shared with Workers, and instantiated multiple times.
   *
   * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module)
   */
  export class Module {
    /** Creates a new `Module` object. */
    constructor(bytes: BufferSource);

    /**
     * Given a `Module` and string, returns a copy of the contents of all custom sections in the
     * module with the given string name.
     */
    static customSections(
      moduleObject: Module,
      sectionName: string,
    ): ArrayBuffer[];

    /** Given a `Module`, returns an array containing descriptions of all the declared exports. */
    static exports(moduleObject: Module): ModuleExportDescriptor[];

    /** Given a `Module`, returns an array containing descriptions of all the declared imports. */
    static imports(moduleObject: Module): ModuleImportDescriptor[];
  }

  /**
   * The `WebAssembly.RuntimeError` object is the error type that is thrown whenever WebAssembly
   * specifies a trap.
   *
   * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/RuntimeError)
   */
  export class RuntimeError extends Error {
    /** Creates a new `WebAssembly.RuntimeError` object. */
    constructor();
  }

  /**
   * The `WebAssembly.Table()` object is a JavaScript wrapper object — an array-like structure
   * representing a WebAssembly Table, which stores function references. A table created by
   * JavaScript or in WebAssembly code will be accessible and mutable from both JavaScript
   * and WebAssembly.
   *
   * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table)
   */
  export class Table {
    /** Creates a new `Table` object. */
    constructor(descriptor: TableDescriptor);

    /** Returns the length of the table, i.e. the number of elements. */
    readonly length: number;

    /** Accessor function — gets the element stored at a given index. */
    get(index: number): Function | null;

    /** Increases the size of the `Table` instance by a specified number of elements. */
    grow(delta: number): number;

    /** Sets an element stored at a given index to a given value. */
    set(index: number, value: Function | null): void;
  }

  /** The `GlobalDescriptor` describes the options you can pass to `new WebAssembly.Global()`. */
  export interface GlobalDescriptor {
    mutable?: boolean;
    value: ValueType;
  }

  /** The `MemoryDescriptor` describes the options you can pass to `new WebAssembly.Memory()`. */
  export interface MemoryDescriptor {
    initial: number;
    maximum?: number;
    shared?: boolean;
  }

  /** A `ModuleExportDescriptor` is the description of a declared export in a `WebAssembly.Module`. */
  export interface ModuleExportDescriptor {
    kind: ImportExportKind;
    name: string;
  }

  /** A `ModuleImportDescriptor` is the description of a declared import in a `WebAssembly.Module`. */
  export interface ModuleImportDescriptor {
    kind: ImportExportKind;
    module: string;
    name: string;
  }

  /** The `TableDescriptor` describes the options you can pass to `new WebAssembly.Table()`. */
  export interface TableDescriptor {
    element: TableKind;
    initial: number;
    maximum?: number;
  }

  /** The value returned from `WebAssembly.instantiate`. */
  export interface WebAssemblyInstantiatedSource {
    /* A `WebAssembly.Instance` object that contains all the exported WebAssembly functions. */
    instance: Instance;

    /**
     * A `WebAssembly.Module` object representing the compiled WebAssembly module.
     * This `Module` can be instantiated again, or shared via postMessage().
     */
    module: Module;
  }

  export type ImportExportKind = "function" | "global" | "memory" | "table";
  export type TableKind = "anyfunc";
  export type ValueType = "f32" | "f64" | "i32" | "i64";
  export type ExportValue = Function | Global | Memory | Table;
  export type Exports = Record<string, ExportValue>;
  export type ImportValue = ExportValue | number;
  export type ModuleImports = Record<string, ImportValue>;
  export type Imports = Record<string, ModuleImports>;

  /**
   * The `WebAssembly.compile()` function compiles WebAssembly binary code into a
   * `WebAssembly.Module` object. This function is useful if it is necessary to compile
   * a module before it can be instantiated (otherwise, the `WebAssembly.instantiate()`
   * function should be used).
   *
   * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/compile)
   */
  export function compile(bytes: BufferSource): Promise<Module>;

  /**
   * The `WebAssembly.compileStreaming()` function compiles a `WebAssembly.Module`
   * directly from a streamed underlying source. This function is useful if it is
   * necessary to a compile a module before it can be instantiated (otherwise, the
   * `WebAssembly.instantiateStreaming()` function should be used).
   *
   * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/compileStreaming)
   */
  export function compileStreaming(
    source: Response | Promise<Response>,
  ): Promise<Module>;

  /**
   * The WebAssembly.instantiate() function allows you to compile and instantiate
   * WebAssembly code.
   *
   * This overload takes the WebAssembly binary code, in the form of a typed
   * array or ArrayBuffer, and performs both compilation and instantiation in one step.
   * The returned Promise resolves to both a compiled WebAssembly.Module and its first
   * WebAssembly.Instance.
   *
   * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate)
   */
  export function instantiate(
    bytes: BufferSource,
    importObject?: Imports,
  ): Promise<WebAssemblyInstantiatedSource>;

  /**
   * The WebAssembly.instantiate() function allows you to compile and instantiate
   * WebAssembly code.
   *
   * This overload takes an already-compiled WebAssembly.Module and returns
   * a Promise that resolves to an Instance of that Module. This overload is useful
   * if the Module has already been compiled.
   *
   * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate)
   */
  export function instantiate(
    moduleObject: Module,
    importObject?: Imports,
  ): Promise<Instance>;

  /**
   * The `WebAssembly.instantiateStreaming()` function compiles and instantiates a
   * WebAssembly module directly from a streamed underlying source. This is the most
   * efficient, optimized way to load wasm code.
   *
   * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiateStreaming)
   */
  export function instantiateStreaming(
    response: Response | PromiseLike<Response>,
    importObject?: Imports,
  ): Promise<WebAssemblyInstantiatedSource>;

  /**
   * The `WebAssembly.validate()` function validates a given typed array of
   * WebAssembly binary code, returning whether the bytes form a valid wasm
   * module (`true`) or not (`false`).
   *
   * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/validate)
   */
  export function validate(bytes: BufferSource): boolean;
}

/** Sets a timer which executes a function once after the timer expires. Returns
 * an id which may be used to cancel the timeout.
 *
 * ```ts
 * setTimeout(() => { console.log('hello'); }, 500);
 * ```
 */
declare function setTimeout(
  /** callback function to execute when timer expires */
  cb: (...args: any[]) => void,
  /** delay in ms */
  delay?: number,
  /** arguments passed to callback function */
  ...args: any[]
): number;

/** Repeatedly calls a function , with a fixed time delay between each call.
 *
 * ```ts
 * // Outputs 'hello' to the console every 500ms
 * setInterval(() => { console.log('hello'); }, 500);
 * ```
 */
declare function setInterval(
  /** callback function to execute when timer expires */
  cb: (...args: any[]) => void,
  /** delay in ms */
  delay?: number,
  /** arguments passed to callback function */
  ...args: any[]
): number;

/** Cancels a timed, repeating action which was previously started by a call
 * to `setInterval()`
 *
 * ```ts
 * const id = setInterval(() => {console.log('hello');}, 500);
 * // ...
 * clearInterval(id);
 * ```
 */
declare function clearInterval(id?: number): void;

/** Cancels a scheduled action initiated by `setTimeout()`
 *
 * ```ts
 * const id = setTimeout(() => {console.log('hello');}, 500);
 * // ...
 * clearTimeout(id);
 * ```
 */
declare function clearTimeout(id?: number): void;

interface VoidFunction {
  (): void;
}

/** A microtask is a short function which is executed after the function or
 * module which created it exits and only if the JavaScript execution stack is
 * empty, but before returning control to the event loop being used to drive the
 * script's execution environment. This event loop may be either the main event
 * loop or the event loop driving a web worker.
 *
 * ```ts
 * queueMicrotask(() => { console.log('This event loop stack is complete'); });
 * ```
 */
declare function queueMicrotask(func: VoidFunction): void;

/** Dispatches an event in the global scope, synchronously invoking any
 * registered event listeners for this event in the appropriate order. Returns
 * false if event is cancelable and at least one of the event handlers which
 * handled this event called Event.preventDefault(). Otherwise it returns true.
 *
 * ```ts
 * dispatchEvent(new Event('unload'));
 * ```
 */
declare function dispatchEvent(event: Event): boolean;

interface DOMStringList {
  /** Returns the number of strings in strings. */
  readonly length: number;
  /** Returns true if strings contains string, and false otherwise. */
  contains(string: string): boolean;
  /** Returns the string with index index from strings. */
  item(index: number): string | null;
  [index: number]: string;
}

type BufferSource = ArrayBufferView | ArrayBuffer;

declare var console: Console;

interface ErrorEventInit extends EventInit {
  message?: string;
  filename?: string;
  lineno?: number;
  colno?: number;
  error?: any;
}

declare class ErrorEvent extends Event {
  readonly message: string;
  readonly filename: string;
  readonly lineno: number;
  readonly colno: number;
  readonly error: any;
  constructor(type: string, eventInitDict?: ErrorEventInit);
}

interface AbstractWorkerEventMap {
  "error": ErrorEvent;
}

interface WorkerEventMap extends AbstractWorkerEventMap {
  "message": MessageEvent;
  "messageerror": MessageEvent;
}

interface WorkerOptions {
  type?: "classic" | "module";
  name?: string;
}

declare class Worker extends EventTarget {
  onerror?: (e: ErrorEvent) => void;
  onmessage?: (e: MessageEvent) => void;
  onmessageerror?: (e: MessageEvent) => void;
  constructor(
    specifier: string | URL,
    options?: WorkerOptions,
  );
  postMessage(message: any, transfer: Transferable[]): void;
  postMessage(message: any, options?: StructuredSerializeOptions): void;
  addEventListener<K extends keyof WorkerEventMap>(
    type: K,
    listener: (this: Worker, ev: WorkerEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener<K extends keyof WorkerEventMap>(
    type: K,
    listener: (this: Worker, ev: WorkerEventMap[K]) => any,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;
  terminate(): void;
}

declare type PerformanceEntryList = PerformanceEntry[];

declare class Performance {
  /** Returns a timestamp representing the start of the performance measurement. */
  readonly timeOrigin: number;
  constructor();

  /** Removes the stored timestamp with the associated name. */
  clearMarks(markName?: string): void;

  /** Removes stored timestamp with the associated name. */
  clearMeasures(measureName?: string): void;

  getEntries(): PerformanceEntryList;
  getEntriesByName(name: string, type?: string): PerformanceEntryList;
  getEntriesByType(type: string): PerformanceEntryList;

  /** Stores a timestamp with the associated name (a "mark"). */
  mark(markName: string, options?: PerformanceMarkOptions): PerformanceMark;

  /** Stores the `DOMHighResTimeStamp` duration between two marks along with the
   * associated name (a "measure"). */
  measure(
    measureName: string,
    options?: PerformanceMeasureOptions,
  ): PerformanceMeasure;
  /** Stores the `DOMHighResTimeStamp` duration between two marks along with the
   * associated name (a "measure"). */
  measure(
    measureName: string,
    startMark?: string,
    endMark?: string,
  ): PerformanceMeasure;

  /** Returns a current time from Deno's start in milliseconds.
   *
   * Use the permission flag `--allow-hrtime` return a precise value.
   *
   * ```ts
   * const t = performance.now();
   * console.log(`${t} ms since start!`);
   * ```
   */
  now(): number;

  /** Returns a JSON representation of the performance object. */
  toJSON(): any;
}

declare var performance: Performance;

declare interface PerformanceMarkOptions {
  /** Metadata to be included in the mark. */
  detail?: any;

  /** Timestamp to be used as the mark time. */
  startTime?: number;
}

declare interface PerformanceMeasureOptions {
  /** Metadata to be included in the measure. */
  detail?: any;

  /** Timestamp to be used as the start time or string to be used as start
   * mark. */
  start?: string | number;

  /** Duration between the start and end times. */
  duration?: number;

  /** Timestamp to be used as the end time or string to be used as end mark. */
  end?: string | number;
}

/** Encapsulates a single performance metric that is part of the performance
 * timeline. A performance entry can be directly created by making a performance
 * mark or measure (for example by calling the `.mark()` method) at an explicit
 * point in an application. */
declare class PerformanceEntry {
  readonly duration: number;
  readonly entryType: string;
  readonly name: string;
  readonly startTime: number;
  toJSON(): any;
}

/** `PerformanceMark` is an abstract interface for `PerformanceEntry` objects
 * with an entryType of `"mark"`. Entries of this type are created by calling
 * `performance.mark()` to add a named `DOMHighResTimeStamp` (the mark) to the
 * performance timeline. */
declare class PerformanceMark extends PerformanceEntry {
  readonly detail: any;
  readonly entryType: "mark";
  constructor(name: string, options?: PerformanceMarkOptions);
}

/** `PerformanceMeasure` is an abstract interface for `PerformanceEntry` objects
 * with an entryType of `"measure"`. Entries of this type are created by calling
 * `performance.measure()` to add a named `DOMHighResTimeStamp` (the measure)
 * between two marks to the performance timeline. */
declare class PerformanceMeasure extends PerformanceEntry {
  readonly detail: any;
  readonly entryType: "measure";
}

declare interface CustomEventInit<T = any> extends EventInit {
  detail?: T;
}

declare class CustomEvent<T = any> extends Event {
  constructor(typeArg: string, eventInitDict?: CustomEventInit<T>);
  /** Returns any custom data event was created with. Typically used for
   * synthetic events. */
  readonly detail: T;
}

interface ErrorConstructor {
  /** See https://v8.dev/docs/stack-trace-api#stack-trace-collection-for-custom-exceptions. */
  captureStackTrace(error: Object, constructor?: Function): void;
  // TODO(nayeemrmn): Support `Error.prepareStackTrace()`. We currently use this
  // internally in a way that makes it unavailable for users.
}

// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.

/// <reference no-default-lib="true" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.shared_globals" />
/// <reference lib="deno.webgpu" />
/// <reference lib="deno.webstorage" />
/// <reference lib="esnext" />

interface WindowEventMap {
  "error": ErrorEvent;
}

declare class Window extends EventTarget {
  new(): Window;
  readonly window: Window & typeof globalThis;
  readonly self: Window & typeof globalThis;
  onerror: ((this: Window, ev: ErrorEvent) => any) | null;
  onload: ((this: Window, ev: Event) => any) | null;
  onunload: ((this: Window, ev: Event) => any) | null;
  close: () => void;
  readonly closed: boolean;
  alert: (message?: string) => void;
  confirm: (message?: string) => boolean;
  prompt: (message?: string, defaultValue?: string) => string | null;
  Deno: typeof Deno;
  Navigator: typeof Navigator;
  navigator: Navigator;
  Location: typeof Location;
  location: Location;
  localStorage: Storage;
  sessionStorage: Storage;

  addEventListener<K extends keyof WindowEventMap>(
    type: K,
    listener: (
      this: Window,
      ev: WindowEventMap[K],
    ) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener<K extends keyof WindowEventMap>(
    type: K,
    listener: (
      this: Window,
      ev: WindowEventMap[K],
    ) => any,
    options?: boolean | EventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;
}

declare var window: Window & typeof globalThis;
declare var self: Window & typeof globalThis;
declare var onerror: ((this: Window, ev: ErrorEvent) => any) | null;
declare var onload: ((this: Window, ev: Event) => any) | null;
declare var onunload: ((this: Window, ev: Event) => any) | null;
declare var localStorage: Storage;
declare var sessionStorage: Storage;

declare class Navigator {
  constructor();
  readonly gpu: GPU;
  readonly hardwareConcurrency: number;
  readonly userAgent: string;
}

declare var navigator: Navigator;

/**
 * Shows the given message and waits for the enter key pressed.
 * If the stdin is not interactive, it does nothing.
 * @param message
 */
declare function alert(message?: string): void;

/**
 * Shows the given message and waits for the answer. Returns the user's answer as boolean.
 * Only `y` and `Y` are considered as true.
 * If the stdin is not interactive, it returns false.
 * @param message
 */
declare function confirm(message?: string): boolean;

/**
 * Shows the given message and waits for the user's input. Returns the user's input as string.
 * If the default value is given and the user inputs the empty string, then it returns the given
 * default value.
 * If the default value is not given and the user inputs the empty string, it returns null.
 * If the stdin is not interactive, it returns null.
 * @param message
 * @param defaultValue
 */
declare function prompt(message?: string, defaultValue?: string): string | null;

/** Registers an event listener in the global scope, which will be called
 * synchronously whenever the event `type` is dispatched.
 *
 * ```ts
 * addEventListener('unload', () => { console.log('All finished!'); });
 * ...
 * dispatchEvent(new Event('unload'));
 * ```
 */
declare function addEventListener<
  K extends keyof WindowEventMap,
>(
  type: K,
  listener: (this: Window, ev: WindowEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions,
): void;
declare function addEventListener(
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions,
): void;

/** Remove a previously registered event listener from the global scope
 *
 * ```ts
 * const listener = () => { console.log('hello'); };
 * addEventListener('load', listener);
 * removeEventListener('load', listener);
 * ```
 */
declare function removeEventListener<
  K extends keyof WindowEventMap,
>(
  type: K,
  listener: (this: Window, ev: WindowEventMap[K]) => any,
  options?: boolean | EventListenerOptions,
): void;
declare function removeEventListener(
  type: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | EventListenerOptions,
): void;

// TODO(nayeemrmn): Move this to `extensions/web` where its implementation is.
// The types there must first be split into window, worker and global types.
/** The location (URL) of the object it is linked to. Changes done on it are
 * reflected on the object it relates to. Accessible via
 * `globalThis.location`. */
declare class Location {
  constructor();
  /** Returns a DOMStringList object listing the origins of the ancestor
   * browsing contexts, from the parent browsing context to the top-level
   * browsing context.
   *
   * Always empty in Deno. */
  readonly ancestorOrigins: DOMStringList;
  /** Returns the Location object's URL's fragment (includes leading "#" if
   * non-empty).
   *
   * Cannot be set in Deno. */
  hash: string;
  /** Returns the Location object's URL's host and port (if different from the
   * default port for the scheme).
   *
   * Cannot be set in Deno. */
  host: string;
  /** Returns the Location object's URL's host.
   *
   * Cannot be set in Deno. */
  hostname: string;
  /** Returns the Location object's URL.
   *
   * Cannot be set in Deno. */
  href: string;
  toString(): string;
  /** Returns the Location object's URL's origin. */
  readonly origin: string;
  /** Returns the Location object's URL's path.
   *
   * Cannot be set in Deno. */
  pathname: string;
  /** Returns the Location object's URL's port.
   *
   * Cannot be set in Deno. */
  port: string;
  /** Returns the Location object's URL's scheme.
   *
   * Cannot be set in Deno. */
  protocol: string;
  /** Returns the Location object's URL's query (includes leading "?" if
   * non-empty).
   *
   * Cannot be set in Deno. */
  search: string;
  /** Navigates to the given URL.
   *
   * Cannot be set in Deno. */
  assign(url: string): void;
  /** Reloads the current page.
   *
   * Disabled in Deno. */
  reload(): void;
  /** @deprecated */
  reload(forcedReload: boolean): void;
  /** Removes the current page from the session history and navigates to the
   * given URL.
   *
   * Disabled in Deno. */
  replace(url: string): void;
}

// TODO(nayeemrmn): Move this to `extensions/web` where its implementation is.
// The types there must first be split into window, worker and global types.
declare var location: Location;
