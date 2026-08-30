declare module "node:vfs" {
    /**
     * Convenience factory equivalent to `new VirtualFileSystem(provider, options)`.
     *
     * ```js
     * const vfs = require('node:vfs');
     *
     * // Default in-memory provider
     * const memoryVfs = vfs.create();
     *
     * // Explicit provider
     * const realVfs = vfs.create(new vfs.RealFSProvider('/tmp/sandbox'));
     * ```
     * @since v26.4.0
     * @param provider The provider to use. **Default:** `new MemoryProvider()`.
     */
    function create(provider?: VirtualProvider, options?: VirtualFileSystemOptions): VirtualFileSystem;
    function create(options: VirtualFileSystemOptions): VirtualFileSystem;
    interface VirtualFileSystemOptions {
        /**
         * Whether to emit the experimental warning. **Default:** `true`.
         */
        emitExperimentalWarning?: boolean | undefined;
    }
    /**
     * A `VirtualFileSystem` wraps a {@link VirtualProvider} and exposes a
     * `node:fs`-like API. Each instance maintains its own file tree.
     * @since v26.4.0
     */
    class VirtualFileSystem {
        /**
         * @param provider The provider to use. **Default:** `new MemoryProvider()`.
         */
        constructor(provider?: VirtualProvider, options?: VirtualFileSystemOptions);
        constructor(options: VirtualFileSystemOptions);
        /**
         * The provider backing this VFS instance.
         * @since v26.4.0
         */
        readonly provider: VirtualProvider;
        /**
         * `true` when the underlying provider is read-only.
         * @since v26.4.0
         */
        readonly readonly: boolean;
    }
    interface VirtualFileSystem extends
        // Synchronous API
        Pick<
            typeof import("node:fs"),
            | "existsSync"
            | "statSync"
            | "lstatSync"
            | "readFileSync"
            | "writeFileSync"
            | "appendFileSync"
            | "readdirSync"
            | "mkdirSync"
            | "rmdirSync"
            | "unlinkSync"
            | "renameSync"
            | "copyFileSync"
            | "realpathSync"
            | "readlinkSync"
            | "symlinkSync"
            | "accessSync"
            | "rmSync"
            | "truncateSync"
            | "ftruncateSync"
            | "linkSync"
            | "chmodSync"
            | "chownSync"
            | "utimesSync"
            | "lutimesSync"
            | "mkdtempSync"
            | "opendirSync"
            | "openAsBlob"
            | "openSync"
            | "closeSync"
            | "readSync"
            | "writeSync"
            | "fstatSync"
            | "createReadStream"
            | "createWriteStream"
            | "watch"
            | "watchFile"
            | "unwatchFile"
        >,
        // Callback API
        Pick<
            typeof import("node:fs"),
            | "readFile"
            | "writeFile"
            | "stat"
            | "lstat"
            | "readdir"
            | "realpath"
            | "readlink"
            | "access"
            | "open"
            | "close"
            | "read"
            | "write"
            | "rm"
            | "fstat"
            | "truncate"
            | "ftruncate"
            | "link"
            | "mkdtemp"
            | "opendir"
        >
    {
        // Promise API
        readonly promises: Pick<
            typeof import("node:fs/promises"),
            | "readFile"
            | "writeFile"
            | "appendFile"
            | "stat"
            | "lstat"
            | "readdir"
            | "mkdir"
            | "rmdir"
            | "unlink"
            | "rename"
            | "copyFile"
            | "realpath"
            | "readlink"
            | "symlink"
            | "access"
            | "rm"
            | "truncate"
            | "link"
            | "mkdtemp"
            | "chmod"
            | "chown"
            | "lchown"
            | "utimes"
            | "lutimes"
            | "open"
            | "lchmod"
            | "watch"
        >;
    }
    /**
     * The base class for all VFS providers. Subclasses implement the essential
     * primitives (such as `open`, `stat`, `readdir`, `mkdir`, `rmdir`, `unlink`,
     * `rename`, etc.) and inherit default implementations of the derived
     * methods (such as `readFile`, `writeFile`, `exists`, `copyFile`, `access`, etc.).
     * @since v26.4.0
     */
    abstract class VirtualProvider {
        get readonly(): boolean;
        get supportsSymlinks(): boolean;
        get supportsWatch(): boolean;
    }
    /**
     * The default in-memory provider. Stores files, directories, and symbolic
     * links in a `Map`-backed tree, supports symlinks (`supportsSymlinks ===
     * true`), and supports watching (`supportsWatch === true`).
     * @since v26.4.0
     */
    class MemoryProvider extends VirtualProvider {
        /**
         * Locks the provider into read-only mode. Subsequent writes through any
         * `VirtualFileSystem` using this provider throw `EROFS`. There is no
         * way to revert the provider to writable.
         *
         * ```js
         * const vfs = require('node:vfs');
         *
         * const provider = new vfs.MemoryProvider();
         * const myVfs = vfs.create(provider);
         * myVfs.writeFileSync('/seed.txt', 'initial');
         *
         * provider.setReadOnly();
         *
         * myVfs.writeFileSync('/x.txt', 'fail'); // throws EROFS
         * ```
         * @since v26.4.0
         */
        setReadOnly(): void;
    }
    /**
     * A provider that wraps a directory (i.e. one on the actual file system) and exposes its
     * contents through the VFS API. All VFS paths are resolved relative to
     * the root and verified to stay inside it; symbolic links resolving
     * outside the root are rejected.
     * @since v26.4.0
     */
    class RealFSProvider extends VirtualProvider {
        /**
         * ```js
         * const vfs = require('node:vfs');
         *
         * const realVfs = vfs.create(new vfs.RealFSProvider('/tmp/sandbox'));
         * realVfs.writeFileSync('/file.txt', 'hello'); // writes /tmp/sandbox/file.txt
         * ```
         * @since v26.4.0
         * @param rootPath The absolute file-system path to use as the root.
         * Must be a non-empty string.
         */
        constructor(rootPath: string);
        /**
         * The resolved absolute path used as the root.
         * @since v26.4.0
         */
        readonly rootPath: string;
    }
}
