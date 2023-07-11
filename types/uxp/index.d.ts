// Type definitions for Unified Extensibility Platform (UXP) 7.1
// Project: https://adobe.io/photoshop/uxp/2022/uxp-api/
// Definitions by: Adobe UXP <https://github.com/adobe-uxp>
//                 Apoorva Sharma <https://github.com/Apoorva2405>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'uxp' {
    namespace storage {
        /**
         * Common locations that we can use when displaying a file picker.
         */
        namespace domains {
            /**
             * The user's desktop folder
             */
            var userDesktop: symbol;
            /**
             * The user's documents folder
             */
            var userDocuments: symbol;
            /**
             * The user's pictures folder or library
             */
            var userPictures: symbol;
            /**
             * The user's videos / movies folder or library
             */
            var userVideos: symbol;
            /**
             * The user's music folder or library
             */
            var userMusic: symbol;
            /**
             * Local application data
             */
            var appLocalData: symbol;
            /**
             * Local application library
             */
            var appLocalLibrary: symbol;
            /**
             * Local application cache directory (persistence not guaranteed)
             */
            var appLocalCache: symbol;
            /**
             * Local application shared data folder
             */
            var appLocalShared: symbol;
            /**
             * Local temporary directory
             */
            var appLocalTemporary: symbol;
            /**
             * Roaming application data
             */
            var appRoamingData: symbol;
            /**
             * Roaming application library data
             */
            var appRoamingLibrary: symbol;
        }
        /**
         * This namespace describes the various file type extensions that can used be used in some FS file open methods.
         */
        namespace fileTypes {
            /**
             * Text file extensions
             */
            var text: string[];
            /**
             * Image file extensions
             */
            var images: string[];
            /**
             * All file types
             */
            var all: string[];
        }
        /**
         * This namespace describes the file content formats supported in FS methods like read and write.
         */
        namespace formats {
            /**
             * UTF8 File encoding
             */
            var utf8: symbol;
            /**
             * Binary file encoding
             */
            var binary: symbol;
        }
        /**
         * This namespace describes the file open modes. for eg: open file in read-only or both read-write
         */
        namespace modes {
            /**
             * The file is read-only; attempts to write will fail.
             */
            var readOnly: symbol;
            /**
             * The file is read-write.
             */
            var readWrite: symbol;
        }
        /**
         * This namespace describes the type of the entry. Whether file or folder etc.
         */
        namespace types {
            /**
             * A file; used when creating an entity
             */
            var file: symbol;
            /**
             * A folder; used when creating an entity
             */
            var folder: symbol;
        }
        /**
         * An `Entry` is the base class for `File` and `Folder`.
         * You can get an instance of Entry via the `localFileSystem` by fetching an instance of a File or Folder
         *
         * <b>Example</b>
         * ```js
         * // Since Entry cannot be called directly we can use a File or Folder object to invoke Entry as shown below
         * const fs =  require('uxp').storage.localFileSystem;
         * const folder = await fs.getPluginFolder(); // returns a Folder instance
         * const folderEntry = await folder.getEntry("entryName.txt");
         *
         * // Now we can use folderEntry to invoke the APIs provided by Entry
         * console.log(folderEntry.isEntry); // isEntry is an API of Entry, in this example it will return true
         * ```
         */
        class Entry {
            /**
             * Indicates that this instance is an `Entry`. Useful for type-checking.
             * @example
             * if (something.isEntry) {
             *     return something.getMetadata();
             * }
             */
            isEntry: boolean;
            /**
             * Indicates that this instance is **not** a `File`. Useful for type-
             * checking.
             * @example
             * if (!anEntry.isFile) {
             *     return "This entry is not a file.";
             * }
             */
            readonly isFile: boolean;
            /**
             * Indicates that this instance is **not** a folder. Useful for type-
             * checking.
             * @example
             * if (!anEntry.isFolder) {
             *     return "This entry is not a folder.";
             * }
             */
            readonly isFolder: boolean;
            /**
             * The name of this entry. Read-only.
             * @example
             * console.log(anEntry.name);
             */
            readonly name: string;
            /**
             * The associated provider that services this entry. Read-only.
             * @example
             * if (entryOne.provider !== entryTwo.provider) {
             *     throw new Error("Providers are not the same");
             * }
             */
            readonly provider: FileSystemProvider;
            /**
             * The url of this entry. You can use this url as input to other entities of the extension system like for eg: set as src attribute of a Image widget in UI. Read-only.
             * @example
             * console.log(anEntry.url);
             */
            readonly url: string;
            /**
             * Returns the details of the given entry like name, type and native path in a readable string format.
             */
            toString(): string;
            /**
             * The platform native file-system path of this entry. Read-only
             * @example
             * console.log(anEntry.nativePath);
             */
            readonly nativePath: string;
            /**
             * Copies this entry to the specified `folder`.
             * @example
             * await someFile.copyTo(someFolder);
             * @example
             * await someFile.copyTo(someFolder, {overwrite: true});
             * @example
             * await someFolder.copyTo(anotherFolder, {overwrite: true, allowFolderCopy: true});
             * @param folder - the folder to which to copy this entry
             * @param [options.overwrite = false] - if `true`, allows overwriting existing entries
             * @param [options.allowFolderCopy = false] - if `true`, allows copying the folder
             * @returns `Promise<File | Folder>`
             */
            copyTo(
                folder: Folder,
                options: {
                    overwrite?: boolean;
                    allowFolderCopy?: boolean;
                },
            ): any;
            /**
             * Moves this entry to the target folder, optionally specifying a new name.
             * @example
             * await someFile.moveTo(someFolder);
             * @example
             * await someFile.moveTo(someFolder, {overwrite: true});
             * @example
             * await someFolder.moveTo(anotherFolder, {overwrite: true});
             * @example
             * await someFile.moveTo(someFolder, {newName: 'masterpiece.txt'})
             * @example
             * await someFile.moveTo(someFolder, {newName: 'novel.txt', {overwrite: true})
             * @param folder - the folder to which to move this entry
             * @param [options.overwrite = false] - If `true` allows the move to overwrite existing files
             * @param [options.newName] - If specified, the entry is renamed to this name
             * @returns `Promise<void>`
             */
            moveTo(
                folder: Folder,
                options: {
                    overwrite?: boolean;
                    newName?: string;
                },
            ): any;
            /**
             * Removes this entry from the file system. If the entry is a folder, it must be empty before deletion.
             * Note: Currently when using this method, a permission denied error will occur if attempting to delete
             * a folder that was selected from a storage picker or added via drag-and-drop.
             * @example
             * await aFile.delete();
             * @returns `Promise<number>` - the number is 0 if succeeded, otherwise throws an Error
             */
            delete(): any;
            /**
             * Returns this entry's metadata.
             * @example
             * const metadata = aFile.getMetadata();
             * @returns `Promise<EntryMetadata>`
             */
            getMetadata(): any;
        }
        /**
         * Metadata for an `Entry`. It includes useful information such as:
         *
         * * size of the file (if a file)
         * * date created
         * * date modified
         * * name
         *
         * Instantiate `EntryMetadata` by using {@link Entry.md#getmetadata|Entry's - getMetadata()}.
         * In order to instantiate `Entry`, you will need to first invoke the `localFileSystem` and then fetch an instance of a File or Folder.
         *
         * <b>Example</b>
         * ```js
         * const fs = require('uxp').storage.localFileSystem;
         * const folder = await fs.getPluginFolder(); // Gets an instance of Folder (or Entry)
         * const entryMetaData = await folder.getMetadata();
         * console.log(entryMetaData.name);
         * ```
         */
        class EntryMetadata {
            /**
             * The name of the entry.
             */
            name: string;
            /**
             * The size of the entry, if a file. Zero if a folder.
             */
            size: number;
            /**
             * The date this entry was created.
             */
            dateCreated: Date;
            /**
             * The date this entry was modified.
             */
            dateModified: Date;
            /**
             * Indicates if the entry is a file
             */
            isFile: boolean;
            /**
             * Indicates if the entry is a folder
             */
            isFolder: boolean;
        }
        /**
         * Represents a file on a file system. Provides methods for reading from and
         * writing to the file. You'll never instantiate a `File` directly; instead
         * you'll get access via a [storage.FileSystemProvider]{@link ./FileSystemProvider}.
         * Keep in mind that `File` as such doesn't need a `require()` statement, however a `localFileSystem` will need it.
         *
         * <b>Example</b>
         * ```js
         * // Get the object of a File instance
         * const fs = require('uxp').storage.localFileSystem;
         * const file = await fs.createEntryWithUrl("file:/Users/user/Documents/tmp"); // Gets a File instance
         * console.log(file.isFile); // returns true
         * ```
         */
        class File {
            /**
             * Indicates that this instance is a file.
             * @example
             * if (anEntry.isFile) {
             *     await anEntry.read();
             * }
             */
            isFile: any;
            /**
             * Indicates whether this file is read-only or read-write. See [readOnly]{@link ./modes#readonly--symbol} and [readWrite]{@link ./modes#readwrite--symbol}.
             * @example
             * if (aFile.mode === modes.readOnly) {
             *     throw new Error("Can't write to a file opened as read-only.");
             * }
             */
            mode: symbol;
            /**
             * Reads data from the file and returns it. The file format can be specified
             * with the `format` option. If a format is not supplied, the file is assumed
             * to be a text file using UTF8 encoding.
             * @example
             * const text = await myNovel.read();
             * @example
             * const data = await myNovel.read({format: formats.binary});
             * @param [options.format = formats.utf8] - The format of the file; see [utf8]{@link ./formats#utf8--symbol} and [binary]{@link ./formats#binary--symbol}.
             * @returns `Promise<string|ArrayBuffer>` the contents of the file
             */
            read(options: { format?: symbol }): any;
            /**
             * Writes data to a file, appending if desired. The format of the file
             * is controlled via the `format` option, and defaults to UTF8.
             * @example
             * await myNovel.write("It was a dark and stormy night.\n");
             * await myNovel.write("Cliches and tropes aside, it really was.", {append: true});
             * @example
             * const data = new ArrayBuffer();
             * await aDataFile.write(data, {format: formats.binary});
             * @param data - the data to write to the file
             * @param [options.format = formats.utf8] - the format of the file; see [utf8]{@link ./formats#utf8--symbol} and [binary]{@link ./formats#binary--symbol}.
             * @param [options.append = false] - if `true`, the data is written to the end of the file
             * @returns `Promise<number>` -  the length of the contents written to the file
             */
            write(
                data: string | ArrayBuffer,
                options: {
                    format?: symbol;
                    append?: boolean;
                },
            ): any;
            /**
             * Determines if the entry is a file or not. This is safe to use even if the
             * entry is `null` or `undefined`.
             * @param entry - the entry to check
             * @returns if `true`, the entry is a file.
             */
            static isFile(entry: any): boolean;
        }
        /**
         * Provides access to files and folders on a file system. You'll typically not
         * instantiate this directly; instead you'll use an instance of one that has
         * already been created for you by UXP.
         * @example
         * const fs = uxp.fs.localFileSystem;
         */
        class FileSystemProvider {
            /**
             * Indicates that this is a `FileSystemProvider`. Useful for type-checking.
             */
            isFileSystemProvider: boolean;
            /**
             * An array of the domains this file system supports. If the file system can
             * open a file picker to the user's `documents` folder, for example, then [userDocuments]{@link ./domains#module-storage-domains-userdocuments} will be in this list.
             * @example
             * if (fs.supportedDomains.contains(domains.userDocuments)) {
             *     console.log("We can open a picker to the user's documents.")
             * }
             */
            supportedDomains: symbol[];
            /**
             * Gets a file (or files) from the file system provider for the purpose of
             * opening them. Files are read-only.
             *
             * Multiple files can be returned if the `allowMultiple` option` is `true`.
             * @example
             * const folder = await fs.getFolder({initialDomain: domains.userDocuments});
             * const file = await fs.getFileForOpening({initialLocation: folder});
             * if (!file) {
             *     // no file selected
             *     return;
             * }
             * const text = await file.read();
             * @example
             * const files = await fs.getFileForOpening({allowMultiple: true, types: fileTypes.images});
             * if (files.length === 0) {
             *     // no files selected
             * }
             * @param [options.initialDomain] - the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead.
             * @param [options.types = [".*"]] - array of file types that the file open picker displays.
             * @param [options.initialLocation] - the initial location of the file picker.
             * You can pass an existing file or folder entry to suggest the picker to start at this location.
             * If this is a file entry then the method will pick its parent folder as initial location. This will override initialDomain option.
             * @param [options.allowMultiple = false] - if true, multiple files can be selected
             * @returns `Promise<File|Array<File>>` based on `allowMultiple`. Return empty if no file was selected.
             */
            getFileForOpening(options: {
                initialDomain?: symbol;
                types?: string[];
                initialLocation?: File | Folder;
                allowMultiple?: boolean;
            }): any;
            /**
             * Gets a file reference suitable for read-write. Displays a file picker to select a location to "Save" the file.
             *
             * If the act of writing to the file would overwrite it, the file picker
             * will prompt the user to confirm before returning a result to you.
             * @example
             * const file = await fs.getFileForSaving("output.txt", { types: [ "txt" ]});
             * if (!file) {
             *     // file picker was cancelled
             *     return;
             * }
             * await file.write("It was a dark and stormy night");
             * @param suggestedName - Required when `options.types` is not defined.
             * @param [options.initialDomain] - The preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead.
             * @param [options.types] - Allowed file extensions, with no "." prefix.
             * @returns `Promise<File>` - returns the selected file, or `null` if no file were selected.
             */
            getFileForSaving(
                suggestedName: string,
                options: {
                    initialDomain?: symbol;
                    types?: string[];
                },
            ): any;
            /**
             * Gets a folder from the file system via a folder picker dialog. The files
             * and folders within can be accessed via [Folder#getEntries]{@link ./Folder#getentries}. Any
             * files within are read-write.
             *
             * If the user dismisses the picker, `null` is returned instead.
             * @example
             * const folder = await fs.getFolder();
             * const myNovel = (await fs.getEntries()).filter(entry => entry.name.indexOf('novel') > 0);
             * const text = await myNovel.read();
             * @param [options.initialDomain] - the preferred initial location of the file picker. If not defined, the most recently used domain from a file picker is used instead.
             * @returns `Promise<Folder | null>` - the selected folder or `null` if no folder is selected.
             */
            getFolder(options: { initialDomain?: symbol }): any;
            /**
             * Returns a temporary folder. The contents of the folder will be removed when
             * the extension is disposed.
             * @example
             * const temp = await fs.getTemporaryFolder();
             * @returns `Promise<Folder>`
             */
            getTemporaryFolder(): any;
            /**
             * Returns a folder that can be used for extension's data storage without user interaction.
             * It is persistent across host-app version upgrades.
             * @returns `Promise<Folder>`
             */
            getDataFolder(): any;
            /**
             * Returns an plugin's folder – this folder and everything within it are read only.
             * This contains all the Plugin related packaged assets.
             * @returns `Promise<Folder>`
             */
            getPluginFolder(): any;
            /**
             * Creates an entry for the given url and returns the appropriate instance.
             * @example
             * const newImgFolder = await fs.createEntryWithUrl("plugin-temp:/img", { type: types.folder });
             * const newTmpFolder = await fs.createEntryWithUrl("file:/Users/user/Documents/tmp", { type: types.folder });
             * @example
             * const newDatFile = await fs.createEntryWithUrl("plugin-temp:/tmp/test.dat", { overwrite: true });
             * const newTxtFile = await fs.createEntryWithUrl("file:/Users/user/Documents/test.txt", { overwrite: true });
             * @param url - the url to create an Entry object.
             * Note that file: scheme has limited support in UWP due to the strict [File access permissions]{@link https://learn.microsoft.com/en-us/windows/uwp/files/file-access-permissions}
             * @param [options.type = types.file] - indicates which kind of entry to create. Pass types.folder to create a new folder.
             * Note that if the type is file then this method just create"s" a file entry object and not the actual file on the disk.
             * File on the storage is created when data is written into the file. eg: call write method on the file entry object.
             * @param [options.overwrite = false] - if true, the create attempt can overwrite an existing file
             * @returns `Promise<File|Folder>` the File or Folder object which is created for the given url
             */
            public createEntryWithUrl(
                url: string,
                options: {
                    type?: symbol;
                    overwrite?: boolean;
                },
            ): any;
            /**
             * Gets an entry of the given url and returns the appropriate instance.
             * @example
             * const tmpFolder = await fs.getEntryWithUrl("plugin-temp:/tmp");
             * const docFolder = await fs.getEntryWithUrl("file:/Users/user/Documents");
             * @example
             * const tmpFile = await fs.getEntryWithUrl("plugin-temp:/tmp/test.dat");
             * const docFile = await fs.getEntryWithUrl("file:/Users/user/Documents/test.txt");
             * @param url - the url to get an Entry object
             * Note that file: scheme has limited support in UWP due to the strict [File access permissions]{@link https://learn.microsoft.com/en-us/windows/uwp/files/file-access-permissions}
             * @returns `Promise<File|Folder>` the File or Folder object for the given url
             */
            public getEntryWithUrl(url: string): any;
            /**
             * Returns the fs url of given entry.
             * @returns `string`
             */
            public getFsUrl(entry: Entry): any;
            /**
             * Returns the platform native file system path of given entry.
             * @returns `string`
             */
            public getNativePath(entry: Entry): any;
            /**
             * Returns a token suitable for use with certain host-specific APIs (such as Photoshop). This token is valid only for the current plugin session. As such, it is of no use if you serialize the token to persistent storage, as the token will be invalid in the future.
             *
             * Note: When using the Photoshop DOM API, pass the instance of the file instead of a session token -- Photoshop will convert the entry into a session token automatically on your behalf.
             * @example
             * const fs = require('uxp').storage.localFileSystem;
             * let entry = await fs.getFileForOpening();
             * let token = fs.createSessionToken(entry);
             * let result = await require('photoshop').action.batchPlay([{
             *     _obj: "open",
             *     "target": {
             *        _path: token, // Rather than a system path, this expects a session token
             *         _kind: "local",
             *     }
             * }], {});
             * @returns the session token for the given entry
             */
            createSessionToken(entry: Entry): string;
            /**
             * Returns the file system Entry that corresponds to the session token obtained from `createSessionToken`. If an entry cannot be found that matches the token, then a `Reference Error: token is not defined` error is thrown.
             * @returns the corresponding entry for the session token
             */
            getEntryForSessionToken(token: string): Entry;
            /**
             * Returns a token suitable for use with host-specific APIs (such as Photoshop), or for storing a persistent reference to an entry (useful if you want to only ask for permission to access a file or folder once). A persistent token is not guaranteed to last forever -- certain scenarios can cause the token to longer work (including moving files, changing permissions, or OS-specific limitations). If a persistent token cannot be reused, you'll get an error at the time of use.
             * @example
             * const fs = require('uxp').storage.localFileSystem;
             * let entry = await fs.getFileForOpening();
             * let token = await fs.createPersistentToken(entry);
             * localStorage.setItem("persistent-file", token);
             * @returns `Promise<string>` - the persistent token for the given entry
             */
            createPersistentToken(entry: Entry): any;
            /**
             * Returns the file system Entry that corresponds to the persistent token obtained from `createPersistentToken`. If an entry cannot be found that matches the token, then a `Reference Error: token is not defined` error is thrown.
             *
             * Note: retrieving an entry for a persistent token does _not_ guarantee that the entry is valid for use. You'll need to properly handle the case where the entry no longer exists on the disk, or the permissions have changed by catching the appropriate errors. If that occurs, the suggested practice is to prompt the user for the entry again and store the new token.
             * @example
             * const fs = require('uxp').storage.localFileSystem;
             * let entry, contents, tries = 3, success = false;
             * while (tries > 0) {
             *     try {
             *         entry = await fs.getEntryForPersistentToken(localStorage.getItem("persistent-file"));
             *         contents = await entry.read();
             *         tries = 0;
             *         success = true;
             *     } catch (err) {
             *         entry = await fs.getFileForOpening();
             *         localStorage.setItem("persistent-token", await fs.createPersistentToken(entry));
             *         tries--;
             *     }
             * }
             * if (!success) {
             *     // fail gracefully somehow
             * }
             * @returns `Promise<Entry>` - the corresponding entry for the persistent token
             */
            getEntryForPersistentToken(token: string): any;
            /**
             * Checks if the supplied object is a `FileSystemProvider`. It's safe to use even
             * if the object is `null` or `undefined`. Useful for type checking.
             * @param fs - the object to check
             * @returns If `true`, the object is a file system provider
             */
            static isFileSystemProvider(fs: any): boolean;
        }
        /**
         * Represents a folder on a file system. You'll never instantiate this directly,
         * but will get it by calling [FileSystemProvider.getTemporaryFolder]{@link ./storage#gettemporaryfolder},
         * [FileSystemProvider.getFolder]{@link ./storage#getfolderoptions}, or via [Folder.getEntries]{@link ./Folder#getentries}.
         *
         * <b>Example</b>
         * ```js
         * // Get the Folder instance via localFileSystem
         * const fs = require('uxp').storage.localFileSystem;
         * const folder = await fs.getTemporaryFolder(); // Gets the Folder instance
         * console.log(folder.isFolder); // returns true
         * ```
         */
        class Folder extends Entry {
            /**
             * Indicates that this instance is a folder. Useful for type checking.
             */
            isFolder: any;
            /**
             * Returns an array of entries contained within this folder.
             * @example
             * const entries = await aFolder.getEntries();
             * const allFiles = entries.filter(entry => entry.isFile);
             * @returns `Promise<Array<Entry>>` - The entries within the folder.
             */
            getEntries(): any;
            /**
             * Creates an entry within this folder and returns the appropriate instance.
             * @example
             * const myNovel = await aFolder.createEntry("mynovel.txt");
             * @example
             * const catImageCollection = await aFolder.createEntry("cats", {type: types.folder});
             * @param name - the name of the entry to create
             * @param [options.type = types.file] - Indicates which kind of entry to create. Pass `Folder` to create a new folder.
             * Note that if the type is file then this method just create a file entry object and not the actual file on the disk.
             * The file actually gets created when you call for eg: write method on the file entry object.
             * @param [options.overwrite = false] - If `true`, the create attempt can overwrite an existing file
             * @returns `Promise<File | Folder>` the created entry
             */
            createEntry(
                name: string,
                options: {
                    type?: symbol;
                    overwrite?: boolean;
                },
            ): any;
            /**
             * Creates a File Entry object within this folder and returns the appropriate instance.
             * Note that this method just create a file entry object and not the actual file on the disk.
             * The file actually gets created when you call for eg: write method on the file entry object.
             * @example
             * const myNovelTxtFile = await aFolder.createFile("mynovel.txt");
             * @param name - the name of the file to create.
             * @param [options.overwrite = false] - If `true`, the create attempt can overwrite an existing file
             * @returns `Promise<File>` - the created file entry
             */
            createFile(
                name: string,
                options: {
                    overwrite?: boolean;
                },
            ): any;
            /**
             * Creates a Folder within this folder and returns the appropriate instance.
             * @example
             * const myCollectionsFolder = await aFolder.createFolder("collections");
             * @param name - the name of the folder to create.
             * @returns `Promise<Folder>` - the created folder entry object
             */
            createFolder(name: string): any;
            /**
             * Gets an entry from within this folder and returns the appropriate instance.
             * @example
             * const myNovel = await aFolder.getEntry("mynovel.txt");
             * @param filePath - the name/path of the entry to fetch
             * @returns `Promise<File | Folder>` the fetched entry.
             */
            getEntry(filePath: string): any;
            /**
             * Renames an entry to a new name.
             * @example
             * await myNovels.rename(myNovel, "myFantasticNovel.txt");
             * @param entry - the entry to rename
             * @param newName - the new name to assign
             * @param [options.overwrite = false] - if `true`, renaming can overwrite an existing entry
             * @returns `Promise<void>`
             */
            renameEntry(
                entry: Entry,
                newName: string,
                options: {
                    overwrite?: boolean;
                },
            ): any;
            /**
             * Checks if an entry is a folder. Safe to use if entry might be `null` or
             * `undefined`. Useful for type checking.
             */
            static isFolder: boolean;
        }
    }
}
/**
 * Provides a local key-value store useful for setting preferences and other kinds of data.
 * This data is technically persistent, but can be cleared in a variety of ways,
 * so you should not store data using localStorage that you cannot otherwise reconstruct.
 * <InlineAlert variant="warning" slots="text"/>
 *
 * Do not store passwords or other secure forms of data using `localStorage`. Instead, use [storage.secureStorage]{@link /uxp-api/reference-js/Modules/uxp/Key-Value%20Storage/SecureStorage/}
 */
declare class LocalStorage {
    /**
     * Returns number of items stored in the local storage.
     */
    readonly length: any;
    /**
     * Returns key which is stored at the given index
     * @returns Returns key which is stored at the given index.
     */
    key(): number;
    /**
     * Get value from the local storage for the key.
     * @param key - A key to get value.
     * @returns returns value corresponding to the key as string. If key doesn't exist, this function returns null.
     */
    getItem(key: string): string;
    /**
     * Set key and value to the local storage.
     * If the key is newly set or value is different from old value, an update event will be fired later.
     * @param key - A key to set value
     * @param value - A value for the key
     */
    setItem(key: string, value: string): void;
    /**
     * Remove a key/value pair from the local storage.
     * If the key exists in the local storage, an update event will be fired later.
     * @param key - A key to set value
     */
    removeItem(key: string): void;
    /**
     * Remove all key/value pairs from the local storage.
     * An update event will be fired later.
     */
    clear(): void;
}
declare type TypedArray = any;
/**
 * SessionStorage is available as `window.sessionStorage`
 * Provides a local key/value store useful for storing data that persists only for the plugin's current session.
 * For more information about the API itself, see the [localStorage]{@link ./LocalStorage} API
 */
declare class SessionStorage {}
/**
 * Creates a new CountQueuingStrategy object with the provided high water mark.
 * @param init - Object with high water mark property.
 * @param init.highWaterMark - The total number of chunks that can be contained in the internal queue before backpressure is applied.
 */
declare class CountQueuingStrategy {
    constructor(init: { highWaterMark: number });
    /**
     * The high water mark.
     */
    highWaterMark: number;
    /**
     * The size of chunk, always 1.
     */
    size(): void;
}
declare class ReadableStreamDefaultController {
    /**
     * Returns the desired size to fill the controlled stream’s internal queue.
     * It can be negative, if the queue is over-full.
     */
    desiredSize: number;
    /**
     * Closes the controlled readable stream.
     * Consumers will still be able to read any previously-enqueued chunks from the stream,
     * but once those are read, the stream will become closed.
     */
    close(): void;
    /**
     * Enqueues the given chunk in the controlled readable stream.
     */
    enqueue(chunk: any): void;
    /**
     * Errors the controlled readable stream, making all future interactions with it fail with the given error.
     */
    error(error: any): void;
}
/**
 * Create a new ReadableStreamDefaultReader object and locks the stream to the new reader.
 */
declare class ReadableStreamDefaultReader {
    constructor(stream: ReadableStream);
    /**
     * Returns a promise that will be fulfilled when the stream becomes closed,
     * or rejected if the stream ever errors or the reader’s lock is released before the stream finishes closing.
     */
    closed: any;
    /**
     * Cancels the stream, signaling a loss of interest in the stream by a consumer.
     * The supplied reason argument will be given to the underlying source’s cancel() method.
     * The returned promise will fulfill if the stream shuts down successfully,
     * or reject if the underlying source signaled that there was an error doing so.
     * It will reject with a TypeError (without attempting to cancel the stream) if the stream is currently locked.
     * @returns `Promise<string>`
     */
    cancel(reason: string): any;
    /**
     * Returns a promise that allows access to the next chunk from the stream’s internal queue, if available.
     * @returns <br></br>&emsp;If a chunk is available, the promise will be fulfilled with an object of the form
     *          { value: theChunk, done: false }.
     *      <br></br>&emsp;If the stream becomes closed, the promise will be fulfilled with an object of the form
     *          { value: undefined, done: true }.
     *      <br></br>&emsp;If the stream becomes errored, the promise will be rejected with the relevant error.
     */
    read(): Promise<object>;
    /**
     * Releases the reader’s lock on the corresponding stream.
     * After the lock is released, the reader is no longer active.
     * If the associated stream is errored when the lock is released,
     * the reader will appear errored in the same way from now on; otherwise, the reader will appear closed.
     * If the reader’s lock is released while it still has pending read requests,
     * then the promises returned by the reader’s read() method are immediately rejected with a TypeError.
     * Any unread chunks remain in the stream’s internal queue and can be read later by acquiring a new reader.
     */
    releaseLock(): void;
}
/**
 * Creates a ReadableStream object from the given handlers.
 * <br></br>Note that `underlyingSource.type` and `underlyingSource.autoAllocateChunkSize` are not supported.
 * @param underlyingSource - Define how the constructed stream instance will behave.
 * @param underlyingSource.start(controller) - Called immediately when the object is constructed.
 *          This method needs to do anything else required to set up the stream functionality.
 *          If this process is to be done asynchronously, it can return a promise to signal success or failure.
 *          The controller parameter passed to this method is a ReadableStreamDefaultController.
 * @param underlyingSource.pull(controller) - Called repeatedly when the stream's internal queue of chunks is not full,
 *          up until it reaches its high water mark.
 *          If pull() returns a promise, then it won't be called again until that promise fulfills.
 *          If the promise rejects, the stream will become errored.
 *          The controller parameter passed to this method is a ReadableStreamDefaultController.
 * @param underlyingSource.cancel(reason) - Called if the app signals that the stream is to be cancelled.
 *          The contents should do whatever is necessary to release access to the stream source.
 *          If this process is asynchronous, it can return a promise to signal success or failure.
 *          The reason parameter contains a string describing why the stream was cancelled.
 * @param strategy - Defines a queuing strategy for the stream.
 * @param strategy.highWaterMark - Defines the total number of chunks that can be contained in the internal queue
 *          before backpressure is applied.
 * @param strategy.size(chunk) - Indicates the size to use for each chunk, in bytes.
 */
declare class ReadableStream {
    constructor(
        underlyingSource: {
            start(controller: ReadableStreamDefaultController): (...params: any[]) => any;
            pull(controller: ReadableStreamDefaultController): (...params: any[]) => any;
            cancel(reason: string): (...params: any[]) => any;
        },
        strategy: {
            highWaterMark: number;
            size(chunk: number): (...params: any[]) => any;
        },
    );
    /**
     * Indicate whether the readable stream is locked.
     */
    readonly locked: boolean;
    /**
     * Cancel the readable stream.
     * @param reason - reason for the cancellation.
     * @returns `Promise<void>`
     */
    cancel(reason: string): any;
    /**
     * Create a reader and lock the stream to it.
     * <br></br>Note that currently ReadableStreamDefaultReader object is returned as options.mode <b>"byob" is not supported.</b>
     * @param options - Object with mode property.
     * @param options.mode - ReadableStreamDefaultReader being created, defaults to `undefined` and `byob` is not yet supported.
     */
    getReader(options: { mode: any }): ReadableStreamDefaultReader;
    /**
     * Provides a chainable way of piping the current stream through a transform stream.
     * @param transform - TransformStream or an object with the structure {writable, readable}
     * @param options.preventClose - If true, the source ReadableStream closing will no loger cause the destination WritableStream
     *          to be closed.
     * @param options.preventAbort - If true, errors in the source ReadableStream will no longer abort the destination WritableStream.
     * @param options.preventCancel - If true, errors in the destination WritableStream will no longer cancel the source ReadableStream.
     * @param options.signal - If aborted, ongoing pipe operations can be aborted.
     * @returns ReadableStream of the input transform stream.
     */
    pipeThrough(
        transform: TransformStream | WritableAndReadable,
        options: {
            preventClose: boolean;
            preventAbort: boolean;
            preventCancel: boolean;
            signal: AbortSignal;
        },
    ): ReadableStream;
    /**
     * Pipes this readable stream to a given writable stream destination.
     * @param destination - Final destination for the ReadableStream.
     * @param options - (Optional) Used when piping to the writable stream.
     * @param options.preventClose - If true, the source ReadableStream closing will no loger cause the destination WritableStream to be closed.
     * @param options.preventAbort - If true, errors in the source ReadableStream will no longer abort the destination WritableStream.
     * @param options.preventCancel - If true, errors in the destination WritableStream will no longer cancel the source ReadableStream.
     * @param options.signal - If aborted, ongoing pipe operations can be aborted.
     * @returns `Promise<void>` resolves when the piping process has completed.
     */
    pipeTo(
        destination: WritableStream,
        options: {
            preventClose: boolean;
            preventAbort: boolean;
            preventCancel: boolean;
            signal: AbortSignal;
        },
    ): any;
    /**
     * Tees the current ReadableStream, returning a two-element array
     * containing the two resulting branches as new ReadableStream instances.
     * @returns an array containing two ReadableStream instances.
     */
    tee(): any[];
}
/**
 * Object with the structure {writable, readable}
 */
declare type WritableAndReadable = any;
declare class TransformStreamDefaultController {
    /**
     * Returns the desired size to fill the readable side’s internal queue.
     * It can be negative, if the queue is over-full.
     */
    desiredSize: number;
    /**
     * Enqueues the given chunk chunk in the readable side of the controlled transform stream.
     * @param chunk - The chunk being queued. A chunk is a single piece of data.
     */
    enqueue(chunk: any): void;
    /**
     * Errors both the readable side and the writable side of the controlled transform stream,
     * making all future interactions with it fail with the given error.
     * Any chunks queued for transformation will be discarded.
     */
    error(reason: string): void;
    /**
     * Closes the readable side and errors the writable side of the controlled transform stream.
     * This is useful when the transformer only needs to consume a portion of the chunks written to the writable side.
     */
    terminate(): void;
}
/**
 * Cretes a new TransformStream object wrapping the provided transformer.
 * If no transformer argument is supplied, then the result will be an identity transform stream.
 * @param transformer - Defines algorithms for the specific transformation to be performed.
 * @param transformer.start - Called when the TransfromStream is constructed.
 * @param transformer.transform - Called when a chunk written to the writable is ready to be transformed.
 *          If no transform method is supplied, the identity transform is used.
 * @param transformer.flush - Called after all chunks written to the writable have been successfully transformed,
 *          and the writable is about to be closed.
 * @param writableStrategy - Queuing strategy for the stream.
 * @param writableStrategy.highWaterMark - A non-negative number.
 *          The total number of chunks that can be contained in the internal queue before backpressure is applied
 * @param writableStrategy.size - The size to use for each chunk, in bytes.
 * @param readableStrategy - Queuing strategy for the stream.
 * @param readableStrategy.highWaterMark - A non-negative number.
 *          The total number of chunks that can be contained in the internal queue before backpressure is applied
 * @param readableStrategy.size - The size to use for each chunk, in bytes.
 */
declare class TransformStream {
    constructor(
        transformer: {
            start: (...params: any[]) => any;
            transform: (...params: any[]) => any;
            flush: (...params: any[]) => any;
        },
        writableStrategy: {
            highWaterMark: number;
            size: (...params: any[]) => any;
        },
        readableStrategy: {
            highWaterMark: number;
            size: (...params: any[]) => any;
        },
    );
    /**
     * ReadableStream representing the readable of this TransformStream.
     */
    readable: ReadableStream;
    /**
     * WritableStream representing the writable of this TransformStream.
     */
    writable: WritableStream;
}
declare class WritableStreamDefaultController {
    /**
     * Returns AbortSignal that can be used to abort the pending write or close operation when the stream is aborted.
     */
    signal: AbortSignal;
    /**
     * Closes the controlled writable stream, making all future interactions with it fails with the given error.
     */
    error(message: string): void;
}
/**
 * Creates a new WritableStreamDefaultWriter object.
 */
declare class WritableStreamDefaultWriter {
    constructor(stream: WritableStream);
    /**
     * Returns a Promise that fullfils if the stream becomes closed,
     * or rejects if the stream errors or the writer's lock is released.
     */
    closed: Promise<void>;
    /**
     * The desired size required to fill the stream's internal queue.
     * It will return null if the stream cannot be successfully written to.
     * It will return zero if the stream is closed.
     */
    desiredSize: number;
    /**
     * Returns a Promise that resolves when the desired size of the stream's internal queue transitions
     * from non-positive to positive, signaling that it is no longer applying backpressure.
     * Once the desired size dips back to zero or below, the getter will return a new promise that stays pending until the next transition.
     * If the stream becomes errored or aborted, or the writer’s lock is released, the returned promise will become rejected.
     */
    ready: Promise<void>;
    /**
     * Aborts the stream, signaling that the producer can no longer successfully write to the stream
     * and it is to be immediately moved to an errored state, with any queued-up writes discarded.
     * The returned promise will fulfill if the stream shuts down successfully, or reject if the underlying sink signaled that there was an error doing so.
     * It will reject with a TypeError if the stream is curretly locked.
     * @returns `Promise<void>`
     */
    abort(reason: string): any;
    /**
     * Closes the stream and returns a Promise that will fulfill if all remaining chunks are successfully written
     * and the stream successfully closes, or rejects if an error is encountered during this process.
     * It will reject with a TypeError (without attempting to cancel the stream) if the stream is currently locked.
     * @returns `Promise<void>`
     */
    close(): any;
    /**
     * Releases the writer’s lock on the corresponding stream. After the lock is released, the writer is no longer active.
     * If the associated stream is errored when the lock is released, the writer will appear errored in the same way from now on;
     * otherwise, the writer will appear closed.
     */
    releaseLock(): void;
    /**
     * Writes the given chunk to the writable stream and its underlying sink,
     * then returns a Promise that resolves to indicate the success or failure of the write operation.
     * @returns `Promise<void>`
     */
    write(chunk: any): any;
}
/**
 * Creates a new WritableStream object wrapping the provided underlying sink.
 * @param underlyingSink - Defines how the constructred stream object will behave.
 * @param underlyingSink.start(contorller) - Called immediately when the object is constructed.
 *              If this process is to be done asynchronously, it can return a promise to signal success or failure.
 *              The controller parameter passed to this method is a WritableStreamDefaultController.
 *              This can be used by the developer to control the stream during set up.
 * @param underlyingSink.write(chunk,controller) - Called when a new chunk of data is ready to be written to the underlying sink.
 *              It can return a promise to signal success or failure of the write operation.
 *              The controller parameter passed to this method is a WritableStreamDefaultController.
 *              This method will be called only after previous writes have succeeded,
 *              and never after the stream is closed or aborted.
 * @param underlyingSink.close(controller) - Called if the app signals that it has finished writing chunks to the stream.
 *              If this process is asynchronous, it can return a promise to signal success or failure.
 *              This method will be called only after all queued-up writes have succeeded.
 *              The controller parameter passed to this method is a WritableStreamDefaultController.
 * @param strategy - Defines a queuing strategy for the stream.
 * @param strategy.highWaterMark - The total number of chunks that can be contained
 *              in the internal queue before backpressure is applied.
 * @param strategy.size(chunk) - Indicates the size to use for each chunk, in bytes.
 */
declare class WritableStream {
    constructor(
        underlyingSink: {
            start(controller: WritableStreamDefaultController): (...params: any[]) => any;
            write(chunk: number, controller: WritableStreamDefaultController): (...params: any[]) => any;
            close(controller: WritableStreamDefaultController): (...params: any[]) => any;
        },
        strategy: {
            highWaterMark: number;
            size(chunk: number): (...params: any[]) => any;
        },
    );
    /**
     * Indicate whether the WritableStream is locked.
     */
    locked: boolean;
    /**
     * Aborts the stream, signalling that the producer can no longer successfully write to the stream and
     * it's to be immediately moved to an error state, with any queued writes discarded.
     * @returns `Promise<void>`
     */
    abort(reason: any): any;
    /**
     * Closes the stream.
     * @returns `Promise<void>`
     */
    close(): any;
    /**
     * Returns a new WritableStreamDefaultWriter object and locks the stream to that object.
     * While the stream is locked, no other writer can be acquired until this one is released.
     */
    getWriter(): WritableStreamDefaultWriter;
}
declare class Crypto {
    /**
     * Generates cryptographically strong random values
     * @param array - An integer-based TypedArray, that is one of Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, BigInt64Array, BigUint64Array but not Float32Array nor Float64Array
     * @returns The same array passed as 'array' but with its contents replaced with the newly generated random numbers
     */
    getRandomValues(array: any): any;
    /**
     * Generates a new version 4 UUID
     * @returns A string containing a randomly generated, 36 character long v4 UUID
     */
    randomUUID(): string;
}
/**
 * The Blob object represents a blob, which is a file-like object of immutable, raw data;
 * they can be read as text or binary data, or converted into a [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream)
 * so its methods can be used for processing the data.
 * @param array - An iterable object such as an Array, having ArrayBuffers, TypedArrays, DataViews, Blobs, strings, or a mix of any of such elements,
 * that will be put inside the Blob. Note that strings here are encoded as UTF-8, unlike the usual JavaScript UTF-16 strings.
 * @param options - `(optional)` - An object which may specify any of the following properties:
 * @param options.type - `(optional)` - The MIME type of the data that will be stored into the blob. The default value is the empty string, ("").
 * @param options.endings - `(optional)` - How to interpret newline characters (\n) within the contents, if the data is text. The default value, transparent,
 * copies newline characters into the blob without changing them. To convert newlines to the host system's native convention, specify the value native.
 */
declare class Blob {
    constructor(
        array: any[],
        options: {
            type: string;
            endings: string;
        },
    );
    /**
     * Size of the Blob in bytes
     */
    readonly size: number;
    /**
     * MIME type of the Blob
     */
    readonly type: string;
    /**
     * Get the contents of the Blob in the form of an ArrayBuffer
     * @returns `Promise<ArrayBuffer>`
     */
    arrayBuffer(): any;
    /**
     * Get a portion of the Blob's data selected from start to end (end not included).
     * @param start - `(Optional)`- Index into the Blob indicating the first byte to include in the new Blob
     * @param end - `(Optional)`- Index into the Blob indicating the first byte that will NOT be included in the new Blob
     * @param contentType - `(Optional)`- A string containing the file's {@link https://developer.mozilla.org/en-US/docs/Glossary/MIME_type|MIME type},
     * or an empty string if the type could not be determined. Refer {@link https://developer.mozilla.org/en-US/docs/Web/API/Blob/type#value|Blob.type}
     */
    slice(start: number, end: number, contentType: string): Blob;
    /**
     * Get the data contained within the Blob as a ReadableStream
     */
    stream(): ReadableStream;
    /**
     * Get contents of the Blob as a string in UTF-8 format.
     * @returns `Promise<String>`
     */
    text(): any;
}
/**
 * Blobs are used to create URLs, which can be used as `src` in `HTMLImageElement`. It can be created using image data in the standard compression formats such as PNG, JPG, JPEG ,etc.
 * ImageBlob is a custom type that extends the support to use uncompressed image data. <br></br>
 * e.g. ImageBlob can be created by passing arrayBuffer containing the RGB values for each pixel and options containing metadata to interpret the data in arraybuffer.
 *
 * ImageBlob can be created in the following ways
 * - standard image compression formats: pass ArrayBuffer of the `standard compression formats` and mimeType of the compression in the options.type.
 * - uncompressed image: pass ArrayBuffer of the uncompressed image data i.e. raw data of each pixel and options to interpret the data, option.type should be passed as "image/uncompressed".<br></br>
 *
 * [PhotoshopImageData](/ps_reference/media/imaging/#photoshopimagedata-1) is compatible with ImageBlob,
 * `PhotoshopImageData` object can be directly passed in for options.
 *
 * <b>Note: `ImageBlob support is subject to enablement by HostApp. Currently supported by Photoshop.`</b>
 * @example
 * // Updating HTML with ImageBlob
 * <!DOCTYPE html>
 * <html>
 *
 * <head>
 * <script src="index.js"></script>
 * </head>
 * <style>
 * body {
 *   background-color: whitesmoke;
 *   padding: 0 16px;
 * }
 *
 * #image,
 *
 * container {
 *    margin: 8px;
 *    display: flex;
 *    flex-direction: row;
 *    justify-content: flex-start
 * }
 * </style>
 *
 *  <body>
 * <div class="container">
 *    <sp-button id="pixel-btn" variant="secondary" quiet>Paint image</sp-button>
 *    <img id="image"></img>
 * </div>
 *
 * </body>
 * </html>
 *
 * //Creating ImageBlob by creating the options Object seperatly and then pass the Object as argument
 * function getPixel() {
 *  const imageMetaData = {
 *     width : 8,
 *     height : 8,
 *     colorSpace : "RGB",
 *     colorProfile : "",
 *     pixelFormat : "RGB",
 *     components : 3,
 *     componentSize : 8,
 *     hasAlpha : false, // Alpha is set to false
 *     type : "image/uncompressed",
 *  }
 *
 *  let buffer = new ArrayBuffer(imageMetaData.width * imageMetaData.height * 3);
 *  let colorArrayView = new Uint8Array(buffer);
 *  for(let i = 0; i < colorArrayView.length / 4; i++) {
 *     // here we are creating a red image, update values to see the variations
 *     colorArrayView[i * 3] = 255; // Red Component
 *     colorArrayView[i * 3 + 1] = 0; // Green Component
 *     colorArrayView[i * 3 + 2] = 0; // Blue Component
 *  }
 *  let imageBlob = new ImageBlob(colorArrayView, imageMetaData);
 *  // Generate url which can be used as src on HTMLImageElement
 *  const url = URL.createObjectURL(imageBlob);
 *  // ensure that there is a HTMLImageElement in the Document with id `image`.
 *  const imageElement = document.getElementById("image");
 *  imageElement.src = url;
 *
 *  // revoke(destroy image from the memory) when url is no more required.
 *  URL.revokeObjectURL(url);
 * }
 * document.addEventListener("DOMContentLoaded", () => {
 * document.getElementById("pixel-btn").addEventListener("click", getPixel);
 * });
 * @example
 * // Creating ImageBlob using PhotoshopImageData object(more details about PhotoshopImageData in description).
 * const photoshopImageObject; // get image object using Photoshp's imaging apis.
 * let colorArrayView = await photoshopImageObject.getData();
 *
 * let imageBlob = new ImageBlob(colorArrayView, photoshopImageObject);
 * // Generate url which can be used as src on HTMLImageElement
 * const url = URL.createObjectURL(imageBlob);
 * // ensure that there is a HTMLImageElement in the Document with id `image`.
 * const imageElement = document.getElementById("image");
 * imageElement.src = url;
 *
 * // revoke(destroy image from the memory) when url is no more required.
 * URL.revokeObjectURL(url);
 * @param arrayBuffer - ArrayBuffer containing the image data
 * @param options - Meta data to interpret ArrayBuffer passed. For standard compression options.type is mandatory, for uncompressed image data all the values are mandatory unless mentioned optional
 * @param options.type - mimeType of the imageData passed. Could be standard formats "image/png", "image/jpg" and for uncompressed data "image/uncompressed"
 * @param options.width - The width in pixels of the image data
 * @param options.height - The height in pixels of the image data
 * @param options.colorSpace - The color space (or mode) for the image data. This can be "RGB" or "Grayscale"
 * @param options.hasAlpha - True if the image includes an alpha channel
 * @param options.components - Number of components per pixel. This is 3 for RGB, 4 for RGBA and so forth
 * @param options.componentSize - Number of bits per component. This can be 8 or 16
 * @param options.pixelFormat - Memory layout (order) of components in a pixel. Could be "RGB", "RGBA", or "Gray"
 * @param options.colorProfile - `[Optional]` - The color profile (or mode) for the image data. This could be be "Adobe RGB (1998)"
 */
declare class ImageBlob extends Blob {
    constructor(
        arrayBuffer: ArrayBuffer,
        options: {
            type: string;
            width: number;
            height: number;
            colorSpace: string;
            hasAlpha: boolean;
            components: number;
            componentSize: number;
            pixelFormat: string;
            colorProfile: string;
        },
    );
    /**
     * Size of the Blob in bytes
     */
    readonly size: number;
    /**
     * MIME type of the Blob
     */
    readonly type: string;
    /**
     * Get the contents of the Blob in the form of an ArrayBuffer
     * @returns `Promise<ArrayBuffer>`
     */
    arrayBuffer(): any;
    /**
     * Get a portion of the Blob's data selected from start to end (end not included).
     * @param start - `(Optional)`- Index into the Blob indicating the first byte to include in the new Blob
     * @param end - `(Optional)`- Index into the Blob indicating the first byte that will NOT be included in the new Blob
     * @param contentType - `(Optional)`- A string containing the file's {@link https://developer.mozilla.org/en-US/docs/Glossary/MIME_type|MIME type},
     * or an empty string if the type could not be determined. Refer {@link https://developer.mozilla.org/en-US/docs/Web/API/Blob/type#value|Blob.type}
     */
    slice(start: number, end: number, contentType: string): Blob;
    /**
     * Get the data contained within the Blob as a ReadableStream
     */
    stream(): ReadableStream;
    /**
     * Get contents of the Blob as a string in UTF-8 format.
     * @returns `Promise<String>`
     */
    text(): any;
}
/**
 * The `path` module provides utilities for working with file and directory paths.
 * This module accepts string and Entry object as path parameters.
 * However, local file schemes, such as `plugin-data:` or `plugin-temp:`, will not be resolved to a native path in string paths.
 * The `path` module is registered in the global scope and can be used without declaration.
 */
declare class Path {
    /**
     * Normalize a string path, reducing '..' and '.' parts.
     * When multiple slashes are found, they're replaced by a single one; when the path contains a trailing slash, it is preserved. On Windows backslashes are used.
     * @param path - path to normalize
     * @returns normalized string path
     */
    normalize(path: string | Entry): string;
    /**
     * Join all arguments together and normalize the resulting path.
     * @param paths - paths to join
     * @returns joined string path
     */
    join(paths: (string | Entry)[]): string;
    /**
     * The right-most parameter is considered {to}. Other parameters are considered an array of {from}.
     *
     * Starting from leftmost {from} parameter, resolves {to} to an absolute path.
     *
     * If {to} isn't already absolute, {from} arguments are prepended in right to left order,
     * until an absolute path is found. If after using all {from} paths still no absolute path is found,
     * the current working directory is used as well. The resulting path is normalized,
     * and trailing slashes are removed unless the path gets resolved to the root directory.
     * @param paths - a sequence of paths or path segments
     * @returns resolved string path
     */
    resolve(paths: (string | Entry)[]): string;
    /**
     * Determines whether {path} is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.
     *
     * If the given {path} is a zero-length string, `false` will be returned.
     * @param path - path to test
     * @returns if the path is an absolute path or not
     */
    isAbsolute(path: string | Entry): boolean;
    /**
     * Solve the relative path from {from} to {to} based on the current working directory.
     * At times we have two absolute paths, and we need to derive the relative path from one to the other. This is actually the reverse transform of path.resolve.
     * @param from - base path to find from
     * @param to - relative path to find to
     * @returns relative string path
     */
    relative(from: string, to: string): string;
    /**
     * Return the directory name of a path. Similar to the Unix dirname command.
     * @param path - the path to evaluate
     * @returns the directory name of a path
     */
    dirname(path: string | Entry): string;
    /**
     * Return the last portion of a path. Similar to the Unix basename command.
     * Often used to extract the file name from a fully qualified path.
     * @param path - the path to evaluate
     * @param [ext] - an extension to remove from the result
     * @returns the last portion of a path
     */
    basename(path: string | Entry, ext?: string): string;
    /**
     * Return the extension of the path, from the last '.' to end of string in the last portion of the path.
     * If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string.
     * @param path - the path to evaluate
     * @returns the extension of the path
     */
    extname(path: string | Entry): string;
    /**
     * The platform-specific file separator. '\\' or '/'.
     */
    sep: string;
    /**
     * The platform-specific file delimiter. ';' or ':'.
     */
    delimiter: string;
    /**
     * Returns an object from a path string - the opposite of format().
     * @param path - path to evaluate
     * @returns { dir: `string`, root: `string`, base: `string`, name: `string`, ext: `string` }
     */
    parse(path: string | Entry): any;
    /**
     * Returns a path string from an object - the opposite of parse().
     * @param pathObject - { dir: `string`, root: `string`, base: `string`, name: `string`, ext: `string` } path to evaluate
     * @returns a path string from an object
     */
    format(pathObject: any): string;
    /**
     * It provides access to POSIX specific implementations of the path methods.
     * Same as parent object on posix.
     */
    posix: any;
    /**
     * It provides access to Windows-specific implementations of the path methods.
     * Same as parent object on Windows
     */
    win32: any;
}
declare type Entry = any;
declare type Request = any;
/**
 * @param input - either the URL string to connect with or a Request object having the URL and the init option in the below.
 * @param [init] - custom options for a HTTP request.
 * @param [init.method = "GET"] - the HTTP request method.
 * @param [init.headers] - the HTTP request headers to add.
 * @param [init.body] - the body that is included in the HTTP request body.
 * There is a caveat for sending a FormData object. see [XMLHttpRequest.send]{@link ./XMLHttpRequest.md#module:global.xmlhttprequest.send}.
 * @param [init.credentials = "omit"] - indicates whether to send cookies. Possible values and functions are as follows:
 * "omit" : cookies are NOT sent, "same-origin" and "include" : cookies are sent.
 * @returns see [Response]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response}
 */
declare function fetch(
    input: string | Request,
    init?: {
        method?: any;
        headers?: Headers; // tslint:disable-line
        body?: string | ArrayBuffer | TypedArray | FormData; // tslint:disable-line
        credentials?: string;
    },
): Promise<Response>; // tslint:disable-line
/**
 * @example
 * var ws = new WebSocket("ws://demos.kaazing.com/echo","xmpp");
 * @param url - The URL to which to connect; this should be the URL to which the WebSocket server will respond.
 * @param protocols - Either a single protocol string or an array of protocol strings.
 */
declare class WebSocket {
    constructor(url: string, protocols: string | string[]);
    protocol: any;
    bufferedAmount: any;
    /**
     * Enqueues the specified data to be transmitted to the other end over the WebSocket connection,
     * increasing the value of bufferedAmount by the number of bytes needed to contain the data.
     * If the data can't be sent (for example, because it needs to be buffered but the buffer is full), the socket is closed automatically.
     * @example
     * ws.send(new Float32Array([ 5, 2, 1, 3, 6, -1 ]))
     * @example
     * ws.send(new Int32Array([5,-1]).buffer)
     * @param data - Data to be sent
     */
    send(data: string | ArrayBuffer | ArrayBufferView): void;
    /**
     * Closes the websocket connection
     * @param [code = 1000] - A integer value as per https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#close().
     * @param [reason = ""] - A human-readable string explaining why the connection is closing.
     */
    close(code?: number, reason?: string): void;
    binaryType: any;
    static CONNECTING: any;
    static OPEN: any;
    static CLOSING: any;
    static CLOSED: any;
}
/**
 * The constructor initializes an XMLHttpRequest. It must be called before any other method calls.
 */
declare class XMLHttpRequest {
    /**
     * It's the final URL obtained after any redirects.
     */
    readonly responseURL: any;
    /**
     * Returns an unsigned short, the state of the request.
     */
    readonly readyState: any;
    /**
     * Returns a DOMString that contains the response to the request as text, or null if the request was unsuccessful or has not yet been sent.
     */
    readonly responseText: any;
    /**
     * Returns the XML document that supports W3C DOM level2 specification.
     * The XML document is constructed with received bytes using XMLHttpRequest.
     */
    readonly responseXML: any;
    /**
     * Returns the response from the server in the type specified by responseType.
     * Only valid after the load event fires.
     */
    readonly response: any;
    readonly status: any;
    readonly statusText: any;
    /**
     * The number of milliseconds a request can take before automatically being terminated.
     * The default value is 0, which means there is no timeout.
     */
    timeout: any;
    responseType: any;
    /**
     * Get the value of withCredentials. It indicates whether to send cookies on a HTTP request.
     * When the value is set to true, XMLHttpRequest sends cookies. Otherwise, cookies are not sent.
     */
    withCredentials: any;
    /**
     * If XMLHttpRequest has data in the body to upload, upload related event will be notified via XMLHttpRequest.upload.
     */
    readonly upload: any;
    /**
     * Aborts the request if it has already been sent.
     */
    abort(): void;
    /**
     * Returns sorted and combined response’s header list.
     * Each header field is defined by a group of [lower cased name]": "[value]"\r\n". Combined value is separated by ", ".
     * @returns returns response’s header list.
     */
    getAllResponseHeaders(): string;
    /**
     * Returns the matching value of the given field name in response's header.
     * The search key value is case-insensitive
     * @param name - The name to search in response's header list.
     * @returns returns the value of the given name in response's header list.
     */
    getResponseHeader(name: string): string;
    /**
     * Initializes a request. This method is to be used from JavaScript code; to initialize a request from native code, use openRequest() instead.
     * Self-signed certificates are not currently supported for HTTPS connections.
     * @param method - The HTTP request method to use, such as "GET", "POST", "PUT", "DELETE", etc. Ignored for non-HTTP(S) URLs.
     * @param url - A DOMString representing the URL to send the request to.
     * @param [async = true] - An optional Boolean parameter, defaulting to true, indicating whether or not to perform the operation asynchronously.
     *                               If this value is false, the send() method does not return until the response is received.
     *                               If true, notification of a completed transaction is provided using event listeners.
     *                               This must be true if the multipart attribute is true, or an exception will be thrown.
     * @param [user = null] - The optional user name to use for authentication purposes; by default, this is the null value.
     * @param [password = null] - The optional password to use for authentication purposes; by default, this is the null value.
     */
    open(method: string, url: string, async?: boolean, user?: string, password?: string): void;
    /**
     * Use a MIME type other than the one provided by the server when interpreting the data being transferred in a request.
     * If parsing the MIME type fails, "application/octet-stream" will be used to interpret the data.
     * @param mimetype - MIME type
     * Since Only UTF-8 is supported for charset of text encoding, MIME type’s parameters "charset" with other values than 'UTF-8' is not valid.
     */
    overrideMimeType(mimetype: string): void;
    /**
     * Sets the value of an HTTP request header. You must call setRequestHeader()after open(), but before send().
     * @param header - The name of the header whose value is to be set.
     * @param data - The value to set as the body of the header.
     */
    setRequestHeader(header: string, data: string): void;
    /**
     * Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent.
     * @param [data = \null] - A body of data to be sent in the XHR request.
     * This can be:
     * A Document, in which case it is serialized before being sent.
     * A BodyInit, which as per the Fetch spec can be a Blob, BufferSource, FormData, URLSearchParams, ReadableStream, or USVString object.
     * If no value is specified for the body, a default value of null is used.
     * The best way to send binary content (e.g. in file uploads) is by using an ArrayBufferView or Blob in conjunction with the send() method.
     *
     * There is a caveat for sending a FormData object. The files in the FormData object are being read after calling this method.
     * To ensure uploading files as-is, the file contents or files shouldn't be changed until uploading files to the server is done. see [XMLHttpRequest.upload]{@link #module:global.xmlhttprequest.upload}.
     * If there is a problem during reading files, the XMLHttpRequest transaction initiated by this method can be aborted with an error event fired.
     */
    send(data?: any): void;
    static UNSENT: any;
    static OPENED: any;
    static HEADERS_RECEIVED: any;
    static LOADING: any;
    static DONE: any;
}
declare class AbortController {
    /**
     * AbortSignal object, which can be used to abort a request
     */
    signal: AbortSignal;
    /**
     * Aborts a request before it has completed.
     * If the reason is not specified, the reason is set to "AbortError" DomException
     * @param reason - the reason why the operation was aborted
     */
    abort(reason: any): void;
}
declare class AbortSignal {
    /**
     * Creates an AbortSignal object that is already set as aborted.
     * @returns AbortSignal object with the AbortSignal.aborted property is set to true
     *      and AbortSignal.reason set to the specified or default reason
     */
    static abort(reason: any): AbortSignal;
    /**
     * Whether the request that the signal is communicating with is aborted or not
     */
    aborted: boolean;
    /**
     * The abort reason, once the signal has aborted.
     * `Undefined` when the signal has not been aborted.
     */
    reason: any;
    /**
     * Throws the signal's abort reason if the signal has been aborted.
     * Otherwise, it does nothing.
     */
    throwIfAborted(): void;
}
/**
 * Creates an instance of ClassList.
 */
declare class ClassList extends DOMTokenList {
    constructor(node: any);
    value: string;
    /**
     * Returns the number of tokens in the list
     */
    readonly length: any;
    /**
     * Adds the specified tokens to the token list. If the token is already present, no error is thrown.
     */
    add(...tokens: string[]): void;
    /**
     * Removes the specified items from the token list. If the token is not present, no error is thrown.
     */
    remove(...tokens: string[]): void;
    /**
     * Replaces an old token with a new token. If the old token doesn't exist,
     * no action occurs, and `false` is returned.
     */
    replace(oldToken: any, newToken: any): void;
    /**
     * Toggles a token within the list. If `force` is not present, then the following
     * rules are applied:
     *
     * * if the token is present, it is removed, and `false` is returned
     * * if the token isn't present, it is added, and `true` is returned
     *
     * If `force` is supplied, then:
     *
     * * if `true`, the token is added
     * * if `false`, the token is removed
     * @returns if the token exists in the last after the operation
     */
    toggle(token: string, force: boolean): boolean;
    /**
     * Return the item at the specified index, or `null` if the index is out-of-range
     * @returns the item at the index, or null if index is out of range
     */
    item(index: number): string;
    /**
     * Returns whether the token is in the list or not.
     * @returns if `true`, the token is in the list, otherwise it isn't
     */
    contains(token: any): boolean;
    /**
     * Returns `true` if the token is acceptable to the list; otherwise returns `false`.
     * If `false` is returned, passing the token would throw an error when calling
     * any other method.
     * @returns if `true`, the token is acceptable when calling other methods
     */
    supports(token: string): boolean;
}
declare class CanvasGradient {
    /**
     * Adds a new color stop, defined by an `offset` and a `color value`, to a given canvas gradient.
     * @param offset - A number between 0 and 1, inclusive, representing the position
     * of the color stop. 0 represents the start of the gradient and 1 represents the end.
     * @param colorValue - A CSS `<color>` value representing the color of the stop.
     */
    addColorStop(offset: number, colorValue: string): void;
}
/**
 * Creates an instance of CanvasRenderingContext2D.
 */
declare class CanvasRenderingContext2D {
    /**
     * Get the thickness of lines.
     */
    lineWidth: number;
    /**
     * Get the shape used to join two line segments where they meet.
     */
    lineJoin: string;
    /**
     * Get the shape used to draw the end points of lines.
     */
    lineCap: string;
    /**
     * Creates a gradient along the line connecting two given coordinates.
     * @param x0 - The x-axis coordinate of the start point.
     * @param y0 - The y-axis coordinate of the start point.
     * @param x1 - The x-axis coordinate of the end point.
     * @param y1 - The y-axis coordinate of the end point.
     * @returns A linear CanvasGradient object initialized with the specified line.
     */
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
    /**
     * Creates a radial gradient using the size and coordinates of two circles.
     * @param x0 - The x-axis coordinate of the start circle.
     * @param y0 - The y-axis coordinate of the start circle.
     * @param r0 - The radius of the start circle. Must be non-negative and finite.
     * @param x1 - The x-axis coordinate of the end circle.
     * @param y1 - The y-axis coordinate of the end circle.
     * @param r1 - The radius of the end circle. Must be non-negative and finite.
     * @returns A radial CanvasGradient object initialized with the two specified circles.
     */
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
    /**
     * Get the global alpha(transparency) value.
     */
    globalAlpha: number;
    /**
     * Get the fill style used inside shapes.
     */
    fillStyle: string | CanvasGradient;
    /**
     * Get the color to use for the strokes (outlines) around shapes.
     */
    strokeStyle: string;
    /**
     * Creates a new path.
     */
    beginPath(): void;
    /**
     * Add a straight line from the current point to the start of the current sub-path.
     */
    closePath(): void;
    /**
     * Begins a new sub-path at the point specified by the given (x, y) coordinates.
     * @param x - The x-axis (horizontal) coordinate of the point.
     * @param y - The y-axis (vertical) coordinate of the point.
     */
    moveTo(x: number, y: number): void;
    /**
     * Adds a straight line to the current sub-path by connecting the sub-path's
     * last point to the specified (x, y) coordinates.
     * @param x - The x-axis coordinate of the line's end point.
     * @param y - The y-axis coordinate of the line's end point.
     */
    lineTo(x: number, y: number): void;
    /**
     * Adds a circular arc to the current sub-path.
     * @param x - The horizontal coordinate of the arc's center.
     * @param y - The vertical coordinate of the arc's center.
     * @param radius - The arc's radius. Must be positive.
     * @param startAngle - The angle at which the arc starts in radians,
     * measured from the positive x-axis.
     * @param endAngle - The angle at which the arc ends in radians,
     * measured from the positive x-axis.
     * @param counterclockwise - An optional boolean value. If true,
     * draws the arc counter-clockwise between the start and end angles.
     * The default is false (clockwise).
     */
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise: boolean): void;
    /**
     * Adds a circular arc to the current sub-path, using the given control points and radius.
     * @param x1 - The x-axis coordinate of the first control point.
     * @param y1 - The y-axis coordinate of the first control point.
     * @param x2 - The x-axis coordinate of the second control point.
     * @param y2 - The y-axis coordinate of the second control point.
     * @param radius - The arc's radius. Must be non-negative.
     */
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    /**
     * Adds a cubic Bézier curve to the current sub-path.
     * @param cp1x - The x-axis coordinate of the first control point.
     * @param cp1y - The y-axis coordinate of the first control point.
     * @param cp2x - The x-axis coordinate of the second control point.
     * @param cp2y - The y-axis coordinate of the second control point.
     * @param x - The x-axis coordinate of the end point.
     * @param y - The y-axis coordinate of the end point.
     */
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    /**
     * Adds a quadratic Bézier curve to the current sub-path.
     * @param cpx - The x-axis coordinate of the control point.
     * @param cpy - The y-axis coordinate of the control point.
     * @param x - The x-axis coordinate of the end point.
     * @param y - The y-axis coordinate of the end point.
     */
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    /**
     * Adds a rectangle to the current path.
     * @param x - The x-axis coordinate of the rectangle's starting point.
     * @param y - The y-axis coordinate of the rectangle's starting point.
     * @param width - The rectangle's width.
     * @param height - The rectangle's height.
     */
    rect(x: number, y: number, width: number, height: number): void;
    /**
     * Strokes (outlines) the current or given path with the current stroke style.
     * @param path - An optional Path2D object to stroke.
     */
    stroke(path: Path2D): void;
    /**
     * Fills the current or given path with the current fillStyle.<br></br>
     * @param pathOrFillRule - An optional Path2D object to fill or
     * String which defines an algorithm to determine if a point is inside or
     * outside the filling region.
     */
    fill(pathOrFillRule: Path2D | string): void;
    /**
     * Draws a rectangle that is filled according to the current fillStyle.
     * @param x - The x-axis coordinate of the rectangle's starting point.
     * @param y - The y-axis coordinate of the rectangle's starting point.
     * @param width - The rectangle's width.
     * @param height - The rectangle's height.
     */
    fillRect(x: number, y: number, width: number, height: number): void;
    /**
     * Draws a rectangle that is stroked (outlined) according to the current strokeStyle
     * @param x - The x-axis coordinate of the rectangle's starting point.
     * @param y - The y-axis coordinate of the rectangle's starting point.
     * @param width - The rectangle's width.
     * @param height - The rectangle's height.
     */
    strokeRect(x: number, y: number, width: number, height: number): void;
    /**
     * Erases the pixels in a rectangular area by setting them to transparent black.
     * @param x - The x-axis coordinate of the rectangle's starting point.
     * @param y - The y-axis coordinate of the rectangle's starting point.
     * @param width - The rectangle's width.
     * @param height - The rectangle's height.
     */
    clearRect(x: number, y: number, width: number, height: number): void;
}
/**
 * Creates an instance of Path2D.
 * @param path - `Optional` Path2D Object from another Path2D Instance
 */
declare class Path2D {
    constructor(path: Path2D);
    /**
     * Adds one Path2D object to another Path2D object.<br></br>
     * @param path - A Path2D object to add.
     */
    addPath(path: Path2D): void;
    /**
     * Add a straight line from the current point to the start of the current sub-path.
     */
    closePath(): void;
    /**
     * Begins a new sub-path at the point specified by the given (x, y) coordinates.
     * @param x - The x-axis (horizontal) coordinate of the point.
     * @param y - The y-axis (vertical) coordinate of the point.
     */
    moveTo(x: number, y: number): void;
    /**
     * Adds a straight line to the current sub-path by connecting the sub-path's
     * last point to the specified (x, y) coordinates.
     * @param x - The x-axis coordinate of the line's end point.
     * @param y - The y-axis coordinate of the line's end point.
     */
    lineTo(x: number, y: number): void;
    /**
     * Adds a cubic Bézier curve to the current sub-path.
     * @param cp1x - The x-axis coordinate of the first control point.
     * @param cp1y - The y-axis coordinate of the first control point.
     * @param cp2x - The x-axis coordinate of the second control point.
     * @param cp2y - The y-axis coordinate of the second control point.
     * @param x - The x-axis coordinate of the end point.
     * @param y - The y-axis coordinate of the end point.
     */
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
    /**
     * Adds a quadratic Bézier curve to the current sub-path.
     * @param cpx - The x-axis coordinate of the control point.
     * @param cpy - The y-axis coordinate of the control point.
     * @param x - The x-axis coordinate of the end point.
     * @param y - The y-axis coordinate of the end point.
     */
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
    /**
     * Adds a circular arc to the current sub-path.
     * @param x - The horizontal coordinate of the arc's center.
     * @param y - The vertical coordinate of the arc's center.
     * @param radius - The arc's radius. Must be positive.
     * @param startAngle - The angle at which the arc starts in radians,
     * measured from the positive x-axis.
     * @param endAngle - The angle at which the arc ends in radians,
     * measured from the positive x-axis.
     * @param counterclockwise - An optional boolean value. If true,
     * draws the arc counter-clockwise between the start and end angles.
     * The default is false (clockwise).
     */
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, counterclockwise: boolean): void;
    /**
     * Adds a circular arc to the current sub-path, using the given control points and radius.
     * @param x1 - The x-axis coordinate of the first control point.
     * @param y1 - The y-axis coordinate of the first control point.
     * @param x2 - The x-axis coordinate of the second control point.
     * @param y2 - The y-axis coordinate of the second control point.
     * @param radius - The arc's radius. Must be non-negative.
     */
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
    /**
     * Adds a rectangle to the current path.
     * @param x - The x-axis coordinate of the rectangle's starting point.
     * @param y - The y-axis coordinate of the rectangle's starting point.
     * @param width - The rectangle's width.
     * @param height - The rectangle's height.
     */
    rect(x: number, y: number, width: number, height: number): void;
}
/**
 * @example
 * alert("This is alert message");
 * @param message - A message you want to display in the alert dialog<br></br>
 */
declare function alert(message: string): void;
/**
 * @example
 * confirm("This is confirmation message");
 * @param message - A string you want to display in the confirmation dialog.
 * @returns true If OK button is pressed and false when Cancel button is pressed.
 *
 * The following are additional simple alerts supported by UXP
 * 1. {@link ./alert.md|alert()}
 * 2. {@link ./prompt.md|prompt()}
 */
declare function confirm(message: string): boolean;
/**
 * @example
 * // Below prompt function has 2 params
 * // "Enter your name: " - Message to display
 * // "Adobe" - Default value that will be present in the Prompt pop-up at launch
 * prompt("Enter your name: ","Adobe");
 * @param message - A string of text to display to the user.
 * @param prompt - Default value for the field.
 * @returns message entered by the user in the prompt field or default value if nothing entered.
 *
 * The following are additional simple alerts supported by UXP
 * 1. {@link ./confirm.md|confirm()}
 * 2. {@link ./alert.md|alert()}
 */
declare function prompt(message: string, prompt: string): string;
declare class CustomElementRegistry {
    /**
     * Defines a new custom element.
     * @param name - Name for the new custom element
     * @param constructor - Constructor for the new custom element
     * @param options - Object that controls how the element is defined
     * @param options.extends - The name of a built-in element to extend
     */
    define(
        name: string,
        constructor: CustomElement,
        options: {
            extends: string;
        },
    ): void;
    /**
     * Returns the constructor for the named custom element
     * @param name - The name of the custom element
     */
    get(name: string): void;
    /**
     * Upgrade all potential custom elements under tree rooted at 'root'.
     *
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     * @param root - Node instance with shadow-containing descendant elements to upgrade
     */
    upgrade(root: any): void;
    /**
     * Returns a Promise that resolves when the named custom-element is defined.
     *
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     * @param name - The name of the custom element
     */
    whenDefined(name: string): void;
}
declare type CustomElement = any;
declare class HTMLAnchorElement extends HTMLElement {
    /**
     * The `href` value for the anchor
     */
    href: string;
    /**
     * The path portion of the anchor's `href`
     */
    readonly pathname: string;
    /**
     * The protocol portion of the anchor's `href`.
     */
    readonly protocol: string;
    /**
     * Access to all the custom data attributes (data-*) set.
     */
    dataset: any;
    innerText: string;
    /**
     * Base language of an element's attribute values and text content.
     */
    lang: string;
    /**
     * The text writing directionality of the content of the current element limited to only known values.
     */
    dir: string;
    readonly nodeName: string;
    /**
     * A string representing the local part of the qualified name of the element
     */
    readonly localName: string;
    /**
     * A string indicating the element's tag name
     */
    readonly tagName: string;
    readonly nodeType: number;
    /**
     * Returns the namespace URI of the element, or null if the element is not in a namespace.
     */
    readonly namespaceURI: string;
    /**
     * Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.
     */
    id: string;
    tabIndex: number;
    className: string;
    readonly attributes: NamedNodeMap;
    readonly style: Style;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetParent: Element;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    /**
     * Indicates if the element will focus automatically when it is loaded
     */
    autofocus: boolean;
    readonly uxpContainer: number;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
     */
    readonly shadowRoot: ShadowRoot;
    /**
     * Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.
     * @param xOrOptions - either the new scrollLeft position or an options object.
     * @param y - the optional new scrollTop position.
     */
    scrollTo(xOrOptions: any, y: any): void;
    scrollIntoView(alignToTop: boolean): void;
    scrollIntoViewIfNeeded(): void;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
     * @param init - An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment
     */
    attachShadow(init: any): ShadowRoot;
    focus(): void;
    blur(): void;
    disabled: boolean;
    /**
     * @param name - Name of the attribute whose value you want to get.
     */
    getAttribute(name: string): string;
    /**
     * @param name - Name of the attribute whose value is to be set
     * @param value - Value to assign to the attribute
     */
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the current element has any attributes or not.
     */
    hasAttributes(): boolean;
    /**
     * Returns the attribute names of the element as an Array of strings
     */
    getAttributeNames(): any[];
    getAttributeNode(name: string): any;
    setAttributeNode(newAttr: any): void;
    removeAttributeNode(oldAttr: any): void;
    click(): void;
    getElementsByClassName(name: string): NodeList;
    getElementsByTagName(name: string): NodeList;
    querySelector(selector: string): Element;
    querySelectorAll(selector: string): NodeList;
    /**
     * Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.
     * @example
     * // HTML
     * <style>
     *     div {
     *         width: 140px;
     *         height: 50px;
     *         display: flex;
     *         align-items: center;
     *         justify-content: center;
     *         background: #fbe;
     *         position: absolute;
     *     }
     * </style>
     * <div id="slider">SLIDE ME</div>
     *
     * // JS
     * function beginSliding(e) {
     *      slider.setPointerCapture(e.pointerId);
     *      slider.addEventListener("pointermove", slide);
     *  }
     *
     *  function stopSliding(e) {
     *      slider.releasePointerCapture(e.pointerId);
     *      slider.removeEventListener("pointermove", slide);
     *  }
     *
     *  function slide(e) {
     *      slider.style.left = e.clientX;
     *  }
     *
     *  const slider = document.getElementById("slider");
     *
     *  slider.addEventListener("pointerdown", beginSliding);
     *  slider.addEventListener("pointerup", stopSliding);
     * @param pointerId - The unique identifier of the pointer to be captured.
     */
    setPointerCapture(pointerId: number): void;
    /**
     * Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.
     * @param pointerId - The unique identifier of the pointer to be released.
     */
    releasePointerCapture(pointerId: number): void;
    /**
     * Checks if the element has pointer capture for the specified pointer.
     * @param pointerId - The unique identifier of the pointer to check.
     * @returns True if the element has pointer capture for the specified pointer, false otherwise.
     */
    hasPointerCapture(pointerId: number): boolean;
    getBoundingClientRect(): any;
    closest(selectorString: string): Element;
    matches(selectorString: string): boolean;
    innerHTML: any;
    outerHTML: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    slot: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    readonly assignedSlot: HTMLSlotElement;
    insertAdjacentHTML(position: any, value: string): void;
    insertAdjacentElement(position: any, node: any): Node;
    insertAdjacentText(position: any, text: any): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
declare class HTMLBodyElement extends HTMLElement {
    /**
     * Access to all the custom data attributes (data-*) set.
     */
    dataset: any;
    innerText: string;
    /**
     * Base language of an element's attribute values and text content.
     */
    lang: string;
    /**
     * The text writing directionality of the content of the current element limited to only known values.
     */
    dir: string;
    readonly nodeName: string;
    /**
     * A string representing the local part of the qualified name of the element
     */
    readonly localName: string;
    /**
     * A string indicating the element's tag name
     */
    readonly tagName: string;
    readonly nodeType: number;
    /**
     * Returns the namespace URI of the element, or null if the element is not in a namespace.
     */
    readonly namespaceURI: string;
    /**
     * Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.
     */
    id: string;
    tabIndex: number;
    className: string;
    readonly attributes: NamedNodeMap;
    readonly style: Style;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetParent: Element;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    /**
     * Indicates if the element will focus automatically when it is loaded
     */
    autofocus: boolean;
    readonly uxpContainer: number;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
     */
    readonly shadowRoot: ShadowRoot;
    /**
     * Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.
     * @param xOrOptions - either the new scrollLeft position or an options object.
     * @param y - the optional new scrollTop position.
     */
    scrollTo(xOrOptions: any, y: any): void;
    scrollIntoView(alignToTop: boolean): void;
    scrollIntoViewIfNeeded(): void;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
     * @param init - An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment
     */
    attachShadow(init: any): ShadowRoot;
    focus(): void;
    blur(): void;
    disabled: boolean;
    /**
     * @param name - Name of the attribute whose value you want to get.
     */
    getAttribute(name: string): string;
    /**
     * @param name - Name of the attribute whose value is to be set
     * @param value - Value to assign to the attribute
     */
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the current element has any attributes or not.
     */
    hasAttributes(): boolean;
    /**
     * Returns the attribute names of the element as an Array of strings
     */
    getAttributeNames(): any[];
    getAttributeNode(name: string): any;
    setAttributeNode(newAttr: any): void;
    removeAttributeNode(oldAttr: any): void;
    click(): void;
    getElementsByClassName(name: string): NodeList;
    getElementsByTagName(name: string): NodeList;
    querySelector(selector: string): Element;
    querySelectorAll(selector: string): NodeList;
    /**
     * Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.
     * @example
     * // HTML
     * <style>
     *     div {
     *         width: 140px;
     *         height: 50px;
     *         display: flex;
     *         align-items: center;
     *         justify-content: center;
     *         background: #fbe;
     *         position: absolute;
     *     }
     * </style>
     * <div id="slider">SLIDE ME</div>
     *
     * // JS
     * function beginSliding(e) {
     *      slider.setPointerCapture(e.pointerId);
     *      slider.addEventListener("pointermove", slide);
     *  }
     *
     *  function stopSliding(e) {
     *      slider.releasePointerCapture(e.pointerId);
     *      slider.removeEventListener("pointermove", slide);
     *  }
     *
     *  function slide(e) {
     *      slider.style.left = e.clientX;
     *  }
     *
     *  const slider = document.getElementById("slider");
     *
     *  slider.addEventListener("pointerdown", beginSliding);
     *  slider.addEventListener("pointerup", stopSliding);
     * @param pointerId - The unique identifier of the pointer to be captured.
     */
    setPointerCapture(pointerId: number): void;
    /**
     * Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.
     * @param pointerId - The unique identifier of the pointer to be released.
     */
    releasePointerCapture(pointerId: number): void;
    /**
     * Checks if the element has pointer capture for the specified pointer.
     * @param pointerId - The unique identifier of the pointer to check.
     * @returns True if the element has pointer capture for the specified pointer, false otherwise.
     */
    hasPointerCapture(pointerId: number): boolean;
    getBoundingClientRect(): any;
    closest(selectorString: string): Element;
    matches(selectorString: string): boolean;
    innerHTML: any;
    outerHTML: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    slot: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    readonly assignedSlot: HTMLSlotElement;
    insertAdjacentHTML(position: any, value: string): void;
    insertAdjacentElement(position: any, node: any): Node;
    insertAdjacentText(position: any, text: any): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
declare class HTMLButtonElement extends HTMLElement {
    /**
     * Access to all the custom data attributes (data-*) set.
     */
    dataset: any;
    innerText: string;
    /**
     * Base language of an element's attribute values and text content.
     */
    lang: string;
    /**
     * The text writing directionality of the content of the current element limited to only known values.
     */
    dir: string;
    readonly nodeName: string;
    /**
     * A string representing the local part of the qualified name of the element
     */
    readonly localName: string;
    /**
     * A string indicating the element's tag name
     */
    readonly tagName: string;
    readonly nodeType: number;
    /**
     * Returns the namespace URI of the element, or null if the element is not in a namespace.
     */
    readonly namespaceURI: string;
    /**
     * Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.
     */
    id: string;
    tabIndex: number;
    className: string;
    readonly attributes: NamedNodeMap;
    readonly style: Style;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetParent: Element;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    /**
     * Indicates if the element will focus automatically when it is loaded
     */
    autofocus: boolean;
    readonly uxpContainer: number;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
     */
    readonly shadowRoot: ShadowRoot;
    /**
     * Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.
     * @param xOrOptions - either the new scrollLeft position or an options object.
     * @param y - the optional new scrollTop position.
     */
    scrollTo(xOrOptions: any, y: any): void;
    scrollIntoView(alignToTop: boolean): void;
    scrollIntoViewIfNeeded(): void;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
     * @param init - An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment
     */
    attachShadow(init: any): ShadowRoot;
    focus(): void;
    blur(): void;
    disabled: boolean;
    /**
     * @param name - Name of the attribute whose value you want to get.
     */
    getAttribute(name: string): string;
    /**
     * @param name - Name of the attribute whose value is to be set
     * @param value - Value to assign to the attribute
     */
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the current element has any attributes or not.
     */
    hasAttributes(): boolean;
    /**
     * Returns the attribute names of the element as an Array of strings
     */
    getAttributeNames(): any[];
    getAttributeNode(name: string): any;
    setAttributeNode(newAttr: any): void;
    removeAttributeNode(oldAttr: any): void;
    click(): void;
    getElementsByClassName(name: string): NodeList;
    getElementsByTagName(name: string): NodeList;
    querySelector(selector: string): Element;
    querySelectorAll(selector: string): NodeList;
    /**
     * Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.
     * @example
     * // HTML
     * <style>
     *     div {
     *         width: 140px;
     *         height: 50px;
     *         display: flex;
     *         align-items: center;
     *         justify-content: center;
     *         background: #fbe;
     *         position: absolute;
     *     }
     * </style>
     * <div id="slider">SLIDE ME</div>
     *
     * // JS
     * function beginSliding(e) {
     *      slider.setPointerCapture(e.pointerId);
     *      slider.addEventListener("pointermove", slide);
     *  }
     *
     *  function stopSliding(e) {
     *      slider.releasePointerCapture(e.pointerId);
     *      slider.removeEventListener("pointermove", slide);
     *  }
     *
     *  function slide(e) {
     *      slider.style.left = e.clientX;
     *  }
     *
     *  const slider = document.getElementById("slider");
     *
     *  slider.addEventListener("pointerdown", beginSliding);
     *  slider.addEventListener("pointerup", stopSliding);
     * @param pointerId - The unique identifier of the pointer to be captured.
     */
    setPointerCapture(pointerId: number): void;
    /**
     * Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.
     * @param pointerId - The unique identifier of the pointer to be released.
     */
    releasePointerCapture(pointerId: number): void;
    /**
     * Checks if the element has pointer capture for the specified pointer.
     * @param pointerId - The unique identifier of the pointer to check.
     * @returns True if the element has pointer capture for the specified pointer, false otherwise.
     */
    hasPointerCapture(pointerId: number): boolean;
    getBoundingClientRect(): any;
    closest(selectorString: string): Element;
    matches(selectorString: string): boolean;
    innerHTML: any;
    outerHTML: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    slot: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    readonly assignedSlot: HTMLSlotElement;
    insertAdjacentHTML(position: any, value: string): void;
    insertAdjacentElement(position: any, node: any): Node;
    insertAdjacentText(position: any, text: any): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
declare class HTMLCanvasElement {
    /**
     * Creates a 2D drawing context on the canvas.
     * <br></br> Note: Only '2d' context is supported.
     * @example
     * // 1. Provide the canvas tag in your HTML document.
     *   <sp-body id="layers">
     *     <canvas id="canvas" height="230" width="1500"></canvas>
     *   </sp-body>
     *   <footer>
     *   <!-- Button Events to invoke height, width and context of canvas -->
     *     <sp-button id="btnPopulateLoadScript" onclick="show_height()">Canvas Height</sp-button>
     *     <sp-button id="btnPopulateLoadScript" onclick="show_width()">Canvas Width</sp-button>
     *     <sp-button id="btnPopulateLoadScript" onclick="getContext()">Get Context</sp-button>
     *   </footer>
     * // 2. You can now get the width, height and context using JavaScript under <script> tag, as shown below.
     * <script>
     *   const canvas = document.getElementById("canvas");
     *
     *   function show_height() {
     *     console.log("Canvas Height: "+ canvas.height);
     *   }
     *
     *   function show_width() {
     *     console.log("Canvas Width: "+ canvas.width);
     *   }
     *
     *   // Function to get the canvas context and draw a triangle using lines
     *   function getContext() {
     *      let context = canvas.getContext("2d"); // get's the canvas context
     *
     *      // Draw a triangle. For more details on the below apis refer to interfaces such as CanvasRenderingContext2D, CanvasGradient. The details of the interfaces are shared as a link at the top of this documentation
     *      context.beginPath();
     *      context.moveTo(50,50);
     *      context.lineTo(100, 50);
     *      context.lineTo(100, 100);
     *      context.lineTo(50,50)
     *      context.closePath();
     *      context.stroke();
     *   }
     * </script>
     * @param contextType - A string containing the context identifier defining the drawing context associated to the canvas. Supports only '2d'.
     * @returns A 2D rendering context (CanvasRenderingContext2D) object.
     */
    getContext(contextType: string): CanvasRenderingContext2D;
    /**
     * Get the height of the canvas element.
     */
    height: number;
    /**
     * Get the width of the canvas element.
     */
    width: number;
}
declare class HTMLDialogElement extends HTMLElement {
    /**
     * Show the non modal dialog.
     * @param [options = {}] - Options for the show.
     * @param [options.anchorOffset] - Offset from the anchor for the initial positioning of the dialog.
     * @param [options.anchorOffset.top] - Top offset from the anchor for the initial positioning of the dialog.
     * @param [options.anchorOffset.left] - Left offset from the anchor for the initial positioning of the dialog.
     */
    show(options?: {
        anchorOffset?: {
            top?: number;
            left?: number;
        };
    }): void;
    readonly open: boolean;
    readonly isMinimized: boolean;
    returnValue: any;
    /**
     * Show the modal dialog.
     * @returns A promise that resolves when the dialog is closed (**NSC**)
     *                    after calling the close() method or clicking the "submit" button.
     *                    The promise will be resolved with returnValue as a parameter.
     *                    The promise can be rejected if the dialog was closed for other reasons
     *                    e.g. the user hit escape or closed the window, or if the application
     *                    does not allow showing the dialog. The error parameter will give more details.
     *                    error.code will be one of the values from HTMLDialogElement.rejectionReasons.
     */
    showModal(): Promise<any>;
    /**
     * Closes the dialog; setting the return value (optional)
     */
    close(returnValue?: any): void;
    /**
     * When the promise returned from openDialog() is rejected, error.code can be equal to this value,
     * which means that the application does not allow showing dialogs (e.g. only one dialog is allowed).
     */
    REJECTION_REASON_NOT_ALLOWED: any;
    /**
     * When the promise returned from openDialog() is rejected, error.code can be equal to this value,
     * which means that the node has been detached from DOM tree.
     */
    REJECTION_REASON_DETACHED: any;
    /**
     * Access to all the custom data attributes (data-*) set.
     */
    dataset: any;
    innerText: string;
    /**
     * Base language of an element's attribute values and text content.
     */
    lang: string;
    /**
     * The text writing directionality of the content of the current element limited to only known values.
     */
    dir: string;
    readonly nodeName: string;
    /**
     * A string representing the local part of the qualified name of the element
     */
    readonly localName: string;
    /**
     * A string indicating the element's tag name
     */
    readonly tagName: string;
    readonly nodeType: number;
    /**
     * Returns the namespace URI of the element, or null if the element is not in a namespace.
     */
    readonly namespaceURI: string;
    /**
     * Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.
     */
    id: string;
    tabIndex: number;
    className: string;
    readonly attributes: NamedNodeMap;
    readonly style: Style;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetParent: Element;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    /**
     * Indicates if the element will focus automatically when it is loaded
     */
    autofocus: boolean;
    readonly uxpContainer: number;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
     */
    readonly shadowRoot: ShadowRoot;
    /**
     * Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.
     * @param xOrOptions - either the new scrollLeft position or an options object.
     * @param y - the optional new scrollTop position.
     */
    scrollTo(xOrOptions: any, y: any): void;
    scrollIntoView(alignToTop: boolean): void;
    scrollIntoViewIfNeeded(): void;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
     * @param init - An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment
     */
    attachShadow(init: any): ShadowRoot;
    focus(): void;
    blur(): void;
    disabled: boolean;
    /**
     * @param name - Name of the attribute whose value you want to get.
     */
    getAttribute(name: string): string;
    /**
     * @param name - Name of the attribute whose value is to be set
     * @param value - Value to assign to the attribute
     */
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the current element has any attributes or not.
     */
    hasAttributes(): boolean;
    /**
     * Returns the attribute names of the element as an Array of strings
     */
    getAttributeNames(): any[];
    getAttributeNode(name: string): any;
    setAttributeNode(newAttr: any): void;
    removeAttributeNode(oldAttr: any): void;
    click(): void;
    getElementsByClassName(name: string): NodeList;
    getElementsByTagName(name: string): NodeList;
    querySelector(selector: string): Element;
    querySelectorAll(selector: string): NodeList;
    /**
     * Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.
     * @example
     * // HTML
     * <style>
     *     div {
     *         width: 140px;
     *         height: 50px;
     *         display: flex;
     *         align-items: center;
     *         justify-content: center;
     *         background: #fbe;
     *         position: absolute;
     *     }
     * </style>
     * <div id="slider">SLIDE ME</div>
     *
     * // JS
     * function beginSliding(e) {
     *      slider.setPointerCapture(e.pointerId);
     *      slider.addEventListener("pointermove", slide);
     *  }
     *
     *  function stopSliding(e) {
     *      slider.releasePointerCapture(e.pointerId);
     *      slider.removeEventListener("pointermove", slide);
     *  }
     *
     *  function slide(e) {
     *      slider.style.left = e.clientX;
     *  }
     *
     *  const slider = document.getElementById("slider");
     *
     *  slider.addEventListener("pointerdown", beginSliding);
     *  slider.addEventListener("pointerup", stopSliding);
     * @param pointerId - The unique identifier of the pointer to be captured.
     */
    setPointerCapture(pointerId: number): void;
    /**
     * Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.
     * @param pointerId - The unique identifier of the pointer to be released.
     */
    releasePointerCapture(pointerId: number): void;
    /**
     * Checks if the element has pointer capture for the specified pointer.
     * @param pointerId - The unique identifier of the pointer to check.
     * @returns True if the element has pointer capture for the specified pointer, false otherwise.
     */
    hasPointerCapture(pointerId: number): boolean;
    getBoundingClientRect(): any;
    closest(selectorString: string): Element;
    matches(selectorString: string): boolean;
    innerHTML: any;
    outerHTML: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    slot: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    readonly assignedSlot: HTMLSlotElement;
    insertAdjacentHTML(position: any, value: string): void;
    insertAdjacentElement(position: any, node: any): Node;
    insertAdjacentText(position: any, text: any): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
declare class HTMLElement extends Element {
    /**
     * Access to all the custom data attributes (data-*) set.
     */
    dataset: any;
    innerText: string;
    /**
     * Base language of an element's attribute values and text content.
     */
    lang: string;
    /**
     * The text writing directionality of the content of the current element limited to only known values.
     */
    dir: string;
    readonly nodeName: string;
    /**
     * A string representing the local part of the qualified name of the element
     */
    readonly localName: string;
    /**
     * A string indicating the element's tag name
     */
    readonly tagName: string;
    readonly nodeType: number;
    /**
     * Returns the namespace URI of the element, or null if the element is not in a namespace.
     */
    readonly namespaceURI: string;
    /**
     * Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.
     */
    id: string;
    tabIndex: number;
    className: string;
    readonly attributes: NamedNodeMap;
    readonly style: Style;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetParent: Element;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    /**
     * Indicates if the element will focus automatically when it is loaded
     */
    autofocus: boolean;
    readonly uxpContainer: number;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
     */
    readonly shadowRoot: ShadowRoot;
    /**
     * Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.
     * @param xOrOptions - either the new scrollLeft position or an options object.
     * @param y - the optional new scrollTop position.
     */
    scrollTo(xOrOptions: any, y: any): void;
    scrollIntoView(alignToTop: boolean): void;
    scrollIntoViewIfNeeded(): void;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
     * @param init - An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment
     */
    attachShadow(init: any): ShadowRoot;
    focus(): void;
    blur(): void;
    disabled: boolean;
    /**
     * @param name - Name of the attribute whose value you want to get.
     */
    getAttribute(name: string): string;
    /**
     * @param name - Name of the attribute whose value is to be set
     * @param value - Value to assign to the attribute
     */
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the current element has any attributes or not.
     */
    hasAttributes(): boolean;
    /**
     * Returns the attribute names of the element as an Array of strings
     */
    getAttributeNames(): any[];
    getAttributeNode(name: string): any;
    setAttributeNode(newAttr: any): void;
    removeAttributeNode(oldAttr: any): void;
    click(): void;
    getElementsByClassName(name: string): NodeList;
    getElementsByTagName(name: string): NodeList;
    querySelector(selector: string): Element;
    querySelectorAll(selector: string): NodeList;
    /**
     * Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.
     * @example
     * // HTML
     * <style>
     *     div {
     *         width: 140px;
     *         height: 50px;
     *         display: flex;
     *         align-items: center;
     *         justify-content: center;
     *         background: #fbe;
     *         position: absolute;
     *     }
     * </style>
     * <div id="slider">SLIDE ME</div>
     *
     * // JS
     * function beginSliding(e) {
     *      slider.setPointerCapture(e.pointerId);
     *      slider.addEventListener("pointermove", slide);
     *  }
     *
     *  function stopSliding(e) {
     *      slider.releasePointerCapture(e.pointerId);
     *      slider.removeEventListener("pointermove", slide);
     *  }
     *
     *  function slide(e) {
     *      slider.style.left = e.clientX;
     *  }
     *
     *  const slider = document.getElementById("slider");
     *
     *  slider.addEventListener("pointerdown", beginSliding);
     *  slider.addEventListener("pointerup", stopSliding);
     * @param pointerId - The unique identifier of the pointer to be captured.
     */
    setPointerCapture(pointerId: number): void;
    /**
     * Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.
     * @param pointerId - The unique identifier of the pointer to be released.
     */
    releasePointerCapture(pointerId: number): void;
    /**
     * Checks if the element has pointer capture for the specified pointer.
     * @param pointerId - The unique identifier of the pointer to check.
     * @returns True if the element has pointer capture for the specified pointer, false otherwise.
     */
    hasPointerCapture(pointerId: number): boolean;
    getBoundingClientRect(): any;
    closest(selectorString: string): Element;
    matches(selectorString: string): boolean;
    innerHTML: any;
    outerHTML: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    slot: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    readonly assignedSlot: HTMLSlotElement;
    insertAdjacentHTML(position: any, value: string): void;
    insertAdjacentElement(position: any, node: any): Node;
    insertAdjacentText(position: any, text: any): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
declare class HTMLHeadElement extends HTMLElement {
    /**
     * Access to all the custom data attributes (data-*) set.
     */
    dataset: any;
    innerText: string;
    /**
     * Base language of an element's attribute values and text content.
     */
    lang: string;
    /**
     * The text writing directionality of the content of the current element limited to only known values.
     */
    dir: string;
    readonly nodeName: string;
    /**
     * A string representing the local part of the qualified name of the element
     */
    readonly localName: string;
    /**
     * A string indicating the element's tag name
     */
    readonly tagName: string;
    readonly nodeType: number;
    /**
     * Returns the namespace URI of the element, or null if the element is not in a namespace.
     */
    readonly namespaceURI: string;
    /**
     * Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.
     */
    id: string;
    tabIndex: number;
    className: string;
    readonly attributes: NamedNodeMap;
    readonly style: Style;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetParent: Element;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    /**
     * Indicates if the element will focus automatically when it is loaded
     */
    autofocus: boolean;
    readonly uxpContainer: number;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
     */
    readonly shadowRoot: ShadowRoot;
    /**
     * Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.
     * @param xOrOptions - either the new scrollLeft position or an options object.
     * @param y - the optional new scrollTop position.
     */
    scrollTo(xOrOptions: any, y: any): void;
    scrollIntoView(alignToTop: boolean): void;
    scrollIntoViewIfNeeded(): void;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
     * @param init - An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment
     */
    attachShadow(init: any): ShadowRoot;
    focus(): void;
    blur(): void;
    disabled: boolean;
    /**
     * @param name - Name of the attribute whose value you want to get.
     */
    getAttribute(name: string): string;
    /**
     * @param name - Name of the attribute whose value is to be set
     * @param value - Value to assign to the attribute
     */
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the current element has any attributes or not.
     */
    hasAttributes(): boolean;
    /**
     * Returns the attribute names of the element as an Array of strings
     */
    getAttributeNames(): any[];
    getAttributeNode(name: string): any;
    setAttributeNode(newAttr: any): void;
    removeAttributeNode(oldAttr: any): void;
    click(): void;
    getElementsByClassName(name: string): NodeList;
    getElementsByTagName(name: string): NodeList;
    querySelector(selector: string): Element;
    querySelectorAll(selector: string): NodeList;
    /**
     * Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.
     * @example
     * // HTML
     * <style>
     *     div {
     *         width: 140px;
     *         height: 50px;
     *         display: flex;
     *         align-items: center;
     *         justify-content: center;
     *         background: #fbe;
     *         position: absolute;
     *     }
     * </style>
     * <div id="slider">SLIDE ME</div>
     *
     * // JS
     * function beginSliding(e) {
     *      slider.setPointerCapture(e.pointerId);
     *      slider.addEventListener("pointermove", slide);
     *  }
     *
     *  function stopSliding(e) {
     *      slider.releasePointerCapture(e.pointerId);
     *      slider.removeEventListener("pointermove", slide);
     *  }
     *
     *  function slide(e) {
     *      slider.style.left = e.clientX;
     *  }
     *
     *  const slider = document.getElementById("slider");
     *
     *  slider.addEventListener("pointerdown", beginSliding);
     *  slider.addEventListener("pointerup", stopSliding);
     * @param pointerId - The unique identifier of the pointer to be captured.
     */
    setPointerCapture(pointerId: number): void;
    /**
     * Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.
     * @param pointerId - The unique identifier of the pointer to be released.
     */
    releasePointerCapture(pointerId: number): void;
    /**
     * Checks if the element has pointer capture for the specified pointer.
     * @param pointerId - The unique identifier of the pointer to check.
     * @returns True if the element has pointer capture for the specified pointer, false otherwise.
     */
    hasPointerCapture(pointerId: number): boolean;
    getBoundingClientRect(): any;
    closest(selectorString: string): Element;
    matches(selectorString: string): boolean;
    innerHTML: any;
    outerHTML: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    slot: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    readonly assignedSlot: HTMLSlotElement;
    insertAdjacentHTML(position: any, value: string): void;
    insertAdjacentElement(position: any, node: any): Node;
    insertAdjacentText(position: any, text: any): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
declare class HTMLHtmlElement extends HTMLElement {
    /**
     * Access to all the custom data attributes (data-*) set.
     */
    dataset: any;
    innerText: string;
    /**
     * Base language of an element's attribute values and text content.
     */
    lang: string;
    /**
     * The text writing directionality of the content of the current element limited to only known values.
     */
    dir: string;
    readonly nodeName: string;
    /**
     * A string representing the local part of the qualified name of the element
     */
    readonly localName: string;
    /**
     * A string indicating the element's tag name
     */
    readonly tagName: string;
    readonly nodeType: number;
    /**
     * Returns the namespace URI of the element, or null if the element is not in a namespace.
     */
    readonly namespaceURI: string;
    /**
     * Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.
     */
    id: string;
    tabIndex: number;
    className: string;
    readonly attributes: NamedNodeMap;
    readonly style: Style;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetParent: Element;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    /**
     * Indicates if the element will focus automatically when it is loaded
     */
    autofocus: boolean;
    readonly uxpContainer: number;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
     */
    readonly shadowRoot: ShadowRoot;
    /**
     * Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.
     * @param xOrOptions - either the new scrollLeft position or an options object.
     * @param y - the optional new scrollTop position.
     */
    scrollTo(xOrOptions: any, y: any): void;
    scrollIntoView(alignToTop: boolean): void;
    scrollIntoViewIfNeeded(): void;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
     * @param init - An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment
     */
    attachShadow(init: any): ShadowRoot;
    focus(): void;
    blur(): void;
    disabled: boolean;
    /**
     * @param name - Name of the attribute whose value you want to get.
     */
    getAttribute(name: string): string;
    /**
     * @param name - Name of the attribute whose value is to be set
     * @param value - Value to assign to the attribute
     */
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the current element has any attributes or not.
     */
    hasAttributes(): boolean;
    /**
     * Returns the attribute names of the element as an Array of strings
     */
    getAttributeNames(): any[];
    getAttributeNode(name: string): any;
    setAttributeNode(newAttr: any): void;
    removeAttributeNode(oldAttr: any): void;
    click(): void;
    getElementsByClassName(name: string): NodeList;
    getElementsByTagName(name: string): NodeList;
    querySelector(selector: string): Element;
    querySelectorAll(selector: string): NodeList;
    /**
     * Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.
     * @example
     * // HTML
     * <style>
     *     div {
     *         width: 140px;
     *         height: 50px;
     *         display: flex;
     *         align-items: center;
     *         justify-content: center;
     *         background: #fbe;
     *         position: absolute;
     *     }
     * </style>
     * <div id="slider">SLIDE ME</div>
     *
     * // JS
     * function beginSliding(e) {
     *      slider.setPointerCapture(e.pointerId);
     *      slider.addEventListener("pointermove", slide);
     *  }
     *
     *  function stopSliding(e) {
     *      slider.releasePointerCapture(e.pointerId);
     *      slider.removeEventListener("pointermove", slide);
     *  }
     *
     *  function slide(e) {
     *      slider.style.left = e.clientX;
     *  }
     *
     *  const slider = document.getElementById("slider");
     *
     *  slider.addEventListener("pointerdown", beginSliding);
     *  slider.addEventListener("pointerup", stopSliding);
     * @param pointerId - The unique identifier of the pointer to be captured.
     */
    setPointerCapture(pointerId: number): void;
    /**
     * Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.
     * @param pointerId - The unique identifier of the pointer to be released.
     */
    releasePointerCapture(pointerId: number): void;
    /**
     * Checks if the element has pointer capture for the specified pointer.
     * @param pointerId - The unique identifier of the pointer to check.
     * @returns True if the element has pointer capture for the specified pointer, false otherwise.
     */
    hasPointerCapture(pointerId: number): boolean;
    getBoundingClientRect(): any;
    closest(selectorString: string): Element;
    matches(selectorString: string): boolean;
    innerHTML: any;
    outerHTML: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    slot: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    readonly assignedSlot: HTMLSlotElement;
    insertAdjacentHTML(position: any, value: string): void;
    insertAdjacentElement(position: any, node: any): Node;
    insertAdjacentText(position: any, text: any): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
declare class HTMLImageElement extends HTMLElement {
    /**
     * The source of the image
     */
    src: string | File;
    /**
     * Access to all the custom data attributes (data-*) set.
     */
    dataset: any;
    innerText: string;
    /**
     * Base language of an element's attribute values and text content.
     */
    lang: string;
    /**
     * The text writing directionality of the content of the current element limited to only known values.
     */
    dir: string;
    readonly nodeName: string;
    /**
     * A string representing the local part of the qualified name of the element
     */
    readonly localName: string;
    /**
     * A string indicating the element's tag name
     */
    readonly tagName: string;
    readonly nodeType: number;
    /**
     * Returns the namespace URI of the element, or null if the element is not in a namespace.
     */
    readonly namespaceURI: string;
    /**
     * Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.
     */
    id: string;
    tabIndex: number;
    className: string;
    readonly attributes: NamedNodeMap;
    readonly style: Style;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetParent: Element;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    /**
     * Indicates if the element will focus automatically when it is loaded
     */
    autofocus: boolean;
    readonly uxpContainer: number;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
     */
    readonly shadowRoot: ShadowRoot;
    /**
     * Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.
     * @param xOrOptions - either the new scrollLeft position or an options object.
     * @param y - the optional new scrollTop position.
     */
    scrollTo(xOrOptions: any, y: any): void;
    scrollIntoView(alignToTop: boolean): void;
    scrollIntoViewIfNeeded(): void;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
     * @param init - An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment
     */
    attachShadow(init: any): ShadowRoot;
    focus(): void;
    blur(): void;
    disabled: boolean;
    /**
     * @param name - Name of the attribute whose value you want to get.
     */
    getAttribute(name: string): string;
    /**
     * @param name - Name of the attribute whose value is to be set
     * @param value - Value to assign to the attribute
     */
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the current element has any attributes or not.
     */
    hasAttributes(): boolean;
    /**
     * Returns the attribute names of the element as an Array of strings
     */
    getAttributeNames(): any[];
    getAttributeNode(name: string): any;
    setAttributeNode(newAttr: any): void;
    removeAttributeNode(oldAttr: any): void;
    click(): void;
    getElementsByClassName(name: string): NodeList;
    getElementsByTagName(name: string): NodeList;
    querySelector(selector: string): Element;
    querySelectorAll(selector: string): NodeList;
    /**
     * Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.
     * @example
     * // HTML
     * <style>
     *     div {
     *         width: 140px;
     *         height: 50px;
     *         display: flex;
     *         align-items: center;
     *         justify-content: center;
     *         background: #fbe;
     *         position: absolute;
     *     }
     * </style>
     * <div id="slider">SLIDE ME</div>
     *
     * // JS
     * function beginSliding(e) {
     *      slider.setPointerCapture(e.pointerId);
     *      slider.addEventListener("pointermove", slide);
     *  }
     *
     *  function stopSliding(e) {
     *      slider.releasePointerCapture(e.pointerId);
     *      slider.removeEventListener("pointermove", slide);
     *  }
     *
     *  function slide(e) {
     *      slider.style.left = e.clientX;
     *  }
     *
     *  const slider = document.getElementById("slider");
     *
     *  slider.addEventListener("pointerdown", beginSliding);
     *  slider.addEventListener("pointerup", stopSliding);
     * @param pointerId - The unique identifier of the pointer to be captured.
     */
    setPointerCapture(pointerId: number): void;
    /**
     * Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.
     * @param pointerId - The unique identifier of the pointer to be released.
     */
    releasePointerCapture(pointerId: number): void;
    /**
     * Checks if the element has pointer capture for the specified pointer.
     * @param pointerId - The unique identifier of the pointer to check.
     * @returns True if the element has pointer capture for the specified pointer, false otherwise.
     */
    hasPointerCapture(pointerId: number): boolean;
    getBoundingClientRect(): any;
    closest(selectorString: string): Element;
    matches(selectorString: string): boolean;
    innerHTML: any;
    outerHTML: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    slot: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    readonly assignedSlot: HTMLSlotElement;
    insertAdjacentHTML(position: any, value: string): void;
    insertAdjacentElement(position: any, node: any): Node;
    insertAdjacentText(position: any, text: any): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
declare type File = any;
declare class HTMLInputElement extends HTMLElement {
    /**
     * Returns the value of the input element.
     */
    value: any;
    /**
     * The defaultValue for the input element (if applicable to the input element's type)
     */
    defaultValue: string;
    /**
     * Indicates if the checkbox is checked.
     */
    checked: boolean;
    /**
     * Indicates if the element is indeterminate
     */
    indeterminate: boolean;
    /**
     * Specifies the name of this input element.
     */
    name: string;
    /**
     * Specifies the type of input control
     */
    type: string;
    /**
     * The placeholder for the input element (if applicable to the input element's type)
     */
    placeholder: string;
    /**
     * Determines if the element's content is read only.
     */
    readOnly: boolean;
    /**
     * Minimum value allowed (used for `input type="range"`)
     */
    min: string;
    /**
     * Maximum value allowed (used for `input type="range"`)
     */
    max: string;
    /**
     * the size of each movement of the slder control (used for `input type="range"`)
     */
    step: string;
    /**
     * Controls the type of native widget.
     */
    uxpVariant: string;
    /**
     * Determines if a control is rendered in "quiet" mode
     */
    uxpQuiet: string;
    /**
     * Returns/Sets the beginning index of the selected text. When nothing is selected,
     * this returns the position of the text input cursor (caret) inside of the `<input>` element.
     * Apply only to elements with type text/password/search/tel/url/week/month
     */
    selectionStart: number;
    /**
     * Returns/Sets the end index of the selected text. When there's no selection,
     * this returns the offset of the character immediately following the current text input cursor position.
     * Apply only to elements with type text/password/search/tel/url/week/month
     */
    selectionEnd: number;
    /**
     * Access to all the custom data attributes (data-*) set.
     */
    dataset: any;
    innerText: string;
    /**
     * Base language of an element's attribute values and text content.
     */
    lang: string;
    /**
     * The text writing directionality of the content of the current element limited to only known values.
     */
    dir: string;
    readonly nodeName: string;
    /**
     * A string representing the local part of the qualified name of the element
     */
    readonly localName: string;
    /**
     * A string indicating the element's tag name
     */
    readonly tagName: string;
    readonly nodeType: number;
    /**
     * Returns the namespace URI of the element, or null if the element is not in a namespace.
     */
    readonly namespaceURI: string;
    /**
     * Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.
     */
    id: string;
    tabIndex: number;
    className: string;
    readonly attributes: NamedNodeMap;
    readonly style: Style;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetParent: Element;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    /**
     * Indicates if the element will focus automatically when it is loaded
     */
    autofocus: boolean;
    readonly uxpContainer: number;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
     */
    readonly shadowRoot: ShadowRoot;
    /**
     * Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.
     * @param xOrOptions - either the new scrollLeft position or an options object.
     * @param y - the optional new scrollTop position.
     */
    scrollTo(xOrOptions: any, y: any): void;
    scrollIntoView(alignToTop: boolean): void;
    scrollIntoViewIfNeeded(): void;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
     * @param init - An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment
     */
    attachShadow(init: any): ShadowRoot;
    focus(): void;
    blur(): void;
    disabled: boolean;
    /**
     * @param name - Name of the attribute whose value you want to get.
     */
    getAttribute(name: string): string;
    /**
     * @param name - Name of the attribute whose value is to be set
     * @param value - Value to assign to the attribute
     */
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the current element has any attributes or not.
     */
    hasAttributes(): boolean;
    /**
     * Returns the attribute names of the element as an Array of strings
     */
    getAttributeNames(): any[];
    getAttributeNode(name: string): any;
    setAttributeNode(newAttr: any): void;
    removeAttributeNode(oldAttr: any): void;
    click(): void;
    getElementsByClassName(name: string): NodeList;
    getElementsByTagName(name: string): NodeList;
    querySelector(selector: string): Element;
    querySelectorAll(selector: string): NodeList;
    /**
     * Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.
     * @example
     * // HTML
     * <style>
     *     div {
     *         width: 140px;
     *         height: 50px;
     *         display: flex;
     *         align-items: center;
     *         justify-content: center;
     *         background: #fbe;
     *         position: absolute;
     *     }
     * </style>
     * <div id="slider">SLIDE ME</div>
     *
     * // JS
     * function beginSliding(e) {
     *      slider.setPointerCapture(e.pointerId);
     *      slider.addEventListener("pointermove", slide);
     *  }
     *
     *  function stopSliding(e) {
     *      slider.releasePointerCapture(e.pointerId);
     *      slider.removeEventListener("pointermove", slide);
     *  }
     *
     *  function slide(e) {
     *      slider.style.left = e.clientX;
     *  }
     *
     *  const slider = document.getElementById("slider");
     *
     *  slider.addEventListener("pointerdown", beginSliding);
     *  slider.addEventListener("pointerup", stopSliding);
     * @param pointerId - The unique identifier of the pointer to be captured.
     */
    setPointerCapture(pointerId: number): void;
    /**
     * Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.
     * @param pointerId - The unique identifier of the pointer to be released.
     */
    releasePointerCapture(pointerId: number): void;
    /**
     * Checks if the element has pointer capture for the specified pointer.
     * @param pointerId - The unique identifier of the pointer to check.
     * @returns True if the element has pointer capture for the specified pointer, false otherwise.
     */
    hasPointerCapture(pointerId: number): boolean;
    getBoundingClientRect(): any;
    closest(selectorString: string): Element;
    matches(selectorString: string): boolean;
    innerHTML: any;
    outerHTML: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    slot: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    readonly assignedSlot: HTMLSlotElement;
    insertAdjacentHTML(position: any, value: string): void;
    insertAdjacentElement(position: any, node: any): Node;
    insertAdjacentText(position: any, text: any): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
declare class HTMLLabelElement extends HTMLElement {
    readonly control: HTMLElement;
    /**
     * Access to all the custom data attributes (data-*) set.
     */
    dataset: any;
    innerText: string;
    /**
     * Base language of an element's attribute values and text content.
     */
    lang: string;
    /**
     * The text writing directionality of the content of the current element limited to only known values.
     */
    dir: string;
    readonly nodeName: string;
    /**
     * A string representing the local part of the qualified name of the element
     */
    readonly localName: string;
    /**
     * A string indicating the element's tag name
     */
    readonly tagName: string;
    readonly nodeType: number;
    /**
     * Returns the namespace URI of the element, or null if the element is not in a namespace.
     */
    readonly namespaceURI: string;
    /**
     * Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.
     */
    id: string;
    tabIndex: number;
    className: string;
    readonly attributes: NamedNodeMap;
    readonly style: Style;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetParent: Element;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    /**
     * Indicates if the element will focus automatically when it is loaded
     */
    autofocus: boolean;
    readonly uxpContainer: number;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
     */
    readonly shadowRoot: ShadowRoot;
    /**
     * Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.
     * @param xOrOptions - either the new scrollLeft position or an options object.
     * @param y - the optional new scrollTop position.
     */
    scrollTo(xOrOptions: any, y: any): void;
    scrollIntoView(alignToTop: boolean): void;
    scrollIntoViewIfNeeded(): void;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
     * @param init - An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment
     */
    attachShadow(init: any): ShadowRoot;
    focus(): void;
    blur(): void;
    disabled: boolean;
    /**
     * @param name - Name of the attribute whose value you want to get.
     */
    getAttribute(name: string): string;
    /**
     * @param name - Name of the attribute whose value is to be set
     * @param value - Value to assign to the attribute
     */
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the current element has any attributes or not.
     */
    hasAttributes(): boolean;
    /**
     * Returns the attribute names of the element as an Array of strings
     */
    getAttributeNames(): any[];
    getAttributeNode(name: string): any;
    setAttributeNode(newAttr: any): void;
    removeAttributeNode(oldAttr: any): void;
    click(): void;
    getElementsByClassName(name: string): NodeList;
    getElementsByTagName(name: string): NodeList;
    querySelector(selector: string): Element;
    querySelectorAll(selector: string): NodeList;
    /**
     * Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.
     * @example
     * // HTML
     * <style>
     *     div {
     *         width: 140px;
     *         height: 50px;
     *         display: flex;
     *         align-items: center;
     *         justify-content: center;
     *         background: #fbe;
     *         position: absolute;
     *     }
     * </style>
     * <div id="slider">SLIDE ME</div>
     *
     * // JS
     * function beginSliding(e) {
     *      slider.setPointerCapture(e.pointerId);
     *      slider.addEventListener("pointermove", slide);
     *  }
     *
     *  function stopSliding(e) {
     *      slider.releasePointerCapture(e.pointerId);
     *      slider.removeEventListener("pointermove", slide);
     *  }
     *
     *  function slide(e) {
     *      slider.style.left = e.clientX;
     *  }
     *
     *  const slider = document.getElementById("slider");
     *
     *  slider.addEventListener("pointerdown", beginSliding);
     *  slider.addEventListener("pointerup", stopSliding);
     * @param pointerId - The unique identifier of the pointer to be captured.
     */
    setPointerCapture(pointerId: number): void;
    /**
     * Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.
     * @param pointerId - The unique identifier of the pointer to be released.
     */
    releasePointerCapture(pointerId: number): void;
    /**
     * Checks if the element has pointer capture for the specified pointer.
     * @param pointerId - The unique identifier of the pointer to check.
     * @returns True if the element has pointer capture for the specified pointer, false otherwise.
     */
    hasPointerCapture(pointerId: number): boolean;
    getBoundingClientRect(): any;
    closest(selectorString: string): Element;
    matches(selectorString: string): boolean;
    innerHTML: any;
    outerHTML: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    slot: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    readonly assignedSlot: HTMLSlotElement;
    insertAdjacentHTML(position: any, value: string): void;
    insertAdjacentElement(position: any, node: any): Node;
    insertAdjacentText(position: any, text: any): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
declare class HTMLLinkElement extends HTMLElement {
    /**
     * Access to all the custom data attributes (data-*) set.
     */
    dataset: any;
    innerText: string;
    /**
     * Base language of an element's attribute values and text content.
     */
    lang: string;
    /**
     * The text writing directionality of the content of the current element limited to only known values.
     */
    dir: string;
    readonly nodeName: string;
    /**
     * A string representing the local part of the qualified name of the element
     */
    readonly localName: string;
    /**
     * A string indicating the element's tag name
     */
    readonly tagName: string;
    readonly nodeType: number;
    /**
     * Returns the namespace URI of the element, or null if the element is not in a namespace.
     */
    readonly namespaceURI: string;
    /**
     * Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.
     */
    id: string;
    tabIndex: number;
    className: string;
    readonly attributes: NamedNodeMap;
    readonly style: Style;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetParent: Element;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    /**
     * Indicates if the element will focus automatically when it is loaded
     */
    autofocus: boolean;
    readonly uxpContainer: number;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
     */
    readonly shadowRoot: ShadowRoot;
    /**
     * Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.
     * @param xOrOptions - either the new scrollLeft position or an options object.
     * @param y - the optional new scrollTop position.
     */
    scrollTo(xOrOptions: any, y: any): void;
    scrollIntoView(alignToTop: boolean): void;
    scrollIntoViewIfNeeded(): void;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
     * @param init - An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment
     */
    attachShadow(init: any): ShadowRoot;
    focus(): void;
    blur(): void;
    disabled: boolean;
    /**
     * @param name - Name of the attribute whose value you want to get.
     */
    getAttribute(name: string): string;
    /**
     * @param name - Name of the attribute whose value is to be set
     * @param value - Value to assign to the attribute
     */
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the current element has any attributes or not.
     */
    hasAttributes(): boolean;
    /**
     * Returns the attribute names of the element as an Array of strings
     */
    getAttributeNames(): any[];
    getAttributeNode(name: string): any;
    setAttributeNode(newAttr: any): void;
    removeAttributeNode(oldAttr: any): void;
    click(): void;
    getElementsByClassName(name: string): NodeList;
    getElementsByTagName(name: string): NodeList;
    querySelector(selector: string): Element;
    querySelectorAll(selector: string): NodeList;
    /**
     * Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.
     * @example
     * // HTML
     * <style>
     *     div {
     *         width: 140px;
     *         height: 50px;
     *         display: flex;
     *         align-items: center;
     *         justify-content: center;
     *         background: #fbe;
     *         position: absolute;
     *     }
     * </style>
     * <div id="slider">SLIDE ME</div>
     *
     * // JS
     * function beginSliding(e) {
     *      slider.setPointerCapture(e.pointerId);
     *      slider.addEventListener("pointermove", slide);
     *  }
     *
     *  function stopSliding(e) {
     *      slider.releasePointerCapture(e.pointerId);
     *      slider.removeEventListener("pointermove", slide);
     *  }
     *
     *  function slide(e) {
     *      slider.style.left = e.clientX;
     *  }
     *
     *  const slider = document.getElementById("slider");
     *
     *  slider.addEventListener("pointerdown", beginSliding);
     *  slider.addEventListener("pointerup", stopSliding);
     * @param pointerId - The unique identifier of the pointer to be captured.
     */
    setPointerCapture(pointerId: number): void;
    /**
     * Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.
     * @param pointerId - The unique identifier of the pointer to be released.
     */
    releasePointerCapture(pointerId: number): void;
    /**
     * Checks if the element has pointer capture for the specified pointer.
     * @param pointerId - The unique identifier of the pointer to check.
     * @returns True if the element has pointer capture for the specified pointer, false otherwise.
     */
    hasPointerCapture(pointerId: number): boolean;
    getBoundingClientRect(): any;
    closest(selectorString: string): Element;
    matches(selectorString: string): boolean;
    innerHTML: any;
    outerHTML: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    slot: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    readonly assignedSlot: HTMLSlotElement;
    insertAdjacentHTML(position: any, value: string): void;
    insertAdjacentElement(position: any, node: any): Node;
    insertAdjacentText(position: any, text: any): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
declare class HTMLMenuElement extends HTMLElement {
    /**
     * Render the menu at the `x`,`y` coordinates
     */
    popupAt(x: number, y: number): void;
    /**
     * Access to all the custom data attributes (data-*) set.
     */
    dataset: any;
    innerText: string;
    /**
     * Base language of an element's attribute values and text content.
     */
    lang: string;
    /**
     * The text writing directionality of the content of the current element limited to only known values.
     */
    dir: string;
    readonly nodeName: string;
    /**
     * A string representing the local part of the qualified name of the element
     */
    readonly localName: string;
    /**
     * A string indicating the element's tag name
     */
    readonly tagName: string;
    readonly nodeType: number;
    /**
     * Returns the namespace URI of the element, or null if the element is not in a namespace.
     */
    readonly namespaceURI: string;
    /**
     * Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.
     */
    id: string;
    tabIndex: number;
    className: string;
    readonly attributes: NamedNodeMap;
    readonly style: Style;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetParent: Element;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    /**
     * Indicates if the element will focus automatically when it is loaded
     */
    autofocus: boolean;
    readonly uxpContainer: number;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
     */
    readonly shadowRoot: ShadowRoot;
    /**
     * Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.
     * @param xOrOptions - either the new scrollLeft position or an options object.
     * @param y - the optional new scrollTop position.
     */
    scrollTo(xOrOptions: any, y: any): void;
    scrollIntoView(alignToTop: boolean): void;
    scrollIntoViewIfNeeded(): void;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
     * @param init - An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment
     */
    attachShadow(init: any): ShadowRoot;
    focus(): void;
    blur(): void;
    disabled: boolean;
    /**
     * @param name - Name of the attribute whose value you want to get.
     */
    getAttribute(name: string): string;
    /**
     * @param name - Name of the attribute whose value is to be set
     * @param value - Value to assign to the attribute
     */
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the current element has any attributes or not.
     */
    hasAttributes(): boolean;
    /**
     * Returns the attribute names of the element as an Array of strings
     */
    getAttributeNames(): any[];
    getAttributeNode(name: string): any;
    setAttributeNode(newAttr: any): void;
    removeAttributeNode(oldAttr: any): void;
    click(): void;
    getElementsByClassName(name: string): NodeList;
    getElementsByTagName(name: string): NodeList;
    querySelector(selector: string): Element;
    querySelectorAll(selector: string): NodeList;
    /**
     * Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.
     * @example
     * // HTML
     * <style>
     *     div {
     *         width: 140px;
     *         height: 50px;
     *         display: flex;
     *         align-items: center;
     *         justify-content: center;
     *         background: #fbe;
     *         position: absolute;
     *     }
     * </style>
     * <div id="slider">SLIDE ME</div>
     *
     * // JS
     * function beginSliding(e) {
     *      slider.setPointerCapture(e.pointerId);
     *      slider.addEventListener("pointermove", slide);
     *  }
     *
     *  function stopSliding(e) {
     *      slider.releasePointerCapture(e.pointerId);
     *      slider.removeEventListener("pointermove", slide);
     *  }
     *
     *  function slide(e) {
     *      slider.style.left = e.clientX;
     *  }
     *
     *  const slider = document.getElementById("slider");
     *
     *  slider.addEventListener("pointerdown", beginSliding);
     *  slider.addEventListener("pointerup", stopSliding);
     * @param pointerId - The unique identifier of the pointer to be captured.
     */
    setPointerCapture(pointerId: number): void;
    /**
     * Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.
     * @param pointerId - The unique identifier of the pointer to be released.
     */
    releasePointerCapture(pointerId: number): void;
    /**
     * Checks if the element has pointer capture for the specified pointer.
     * @param pointerId - The unique identifier of the pointer to check.
     * @returns True if the element has pointer capture for the specified pointer, false otherwise.
     */
    hasPointerCapture(pointerId: number): boolean;
    getBoundingClientRect(): any;
    closest(selectorString: string): Element;
    matches(selectorString: string): boolean;
    innerHTML: any;
    outerHTML: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    slot: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    readonly assignedSlot: HTMLSlotElement;
    insertAdjacentHTML(position: any, value: string): void;
    insertAdjacentElement(position: any, node: any): Node;
    insertAdjacentText(position: any, text: any): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
declare class HTMLMenuItemElement extends HTMLElement {
    /**
     * Indicates if the menu item is checked.
     */
    checked: boolean;
    /**
     * Access to all the custom data attributes (data-*) set.
     */
    dataset: any;
    innerText: string;
    /**
     * Base language of an element's attribute values and text content.
     */
    lang: string;
    /**
     * The text writing directionality of the content of the current element limited to only known values.
     */
    dir: string;
    readonly nodeName: string;
    /**
     * A string representing the local part of the qualified name of the element
     */
    readonly localName: string;
    /**
     * A string indicating the element's tag name
     */
    readonly tagName: string;
    readonly nodeType: number;
    /**
     * Returns the namespace URI of the element, or null if the element is not in a namespace.
     */
    readonly namespaceURI: string;
    /**
     * Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.
     */
    id: string;
    tabIndex: number;
    className: string;
    readonly attributes: NamedNodeMap;
    readonly style: Style;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetParent: Element;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    /**
     * Indicates if the element will focus automatically when it is loaded
     */
    autofocus: boolean;
    readonly uxpContainer: number;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
     */
    readonly shadowRoot: ShadowRoot;
    /**
     * Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.
     * @param xOrOptions - either the new scrollLeft position or an options object.
     * @param y - the optional new scrollTop position.
     */
    scrollTo(xOrOptions: any, y: any): void;
    scrollIntoView(alignToTop: boolean): void;
    scrollIntoViewIfNeeded(): void;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
     * @param init - An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment
     */
    attachShadow(init: any): ShadowRoot;
    focus(): void;
    blur(): void;
    disabled: boolean;
    /**
     * @param name - Name of the attribute whose value you want to get.
     */
    getAttribute(name: string): string;
    /**
     * @param name - Name of the attribute whose value is to be set
     * @param value - Value to assign to the attribute
     */
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the current element has any attributes or not.
     */
    hasAttributes(): boolean;
    /**
     * Returns the attribute names of the element as an Array of strings
     */
    getAttributeNames(): any[];
    getAttributeNode(name: string): any;
    setAttributeNode(newAttr: any): void;
    removeAttributeNode(oldAttr: any): void;
    click(): void;
    getElementsByClassName(name: string): NodeList;
    getElementsByTagName(name: string): NodeList;
    querySelector(selector: string): Element;
    querySelectorAll(selector: string): NodeList;
    /**
     * Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.
     * @example
     * // HTML
     * <style>
     *     div {
     *         width: 140px;
     *         height: 50px;
     *         display: flex;
     *         align-items: center;
     *         justify-content: center;
     *         background: #fbe;
     *         position: absolute;
     *     }
     * </style>
     * <div id="slider">SLIDE ME</div>
     *
     * // JS
     * function beginSliding(e) {
     *      slider.setPointerCapture(e.pointerId);
     *      slider.addEventListener("pointermove", slide);
     *  }
     *
     *  function stopSliding(e) {
     *      slider.releasePointerCapture(e.pointerId);
     *      slider.removeEventListener("pointermove", slide);
     *  }
     *
     *  function slide(e) {
     *      slider.style.left = e.clientX;
     *  }
     *
     *  const slider = document.getElementById("slider");
     *
     *  slider.addEventListener("pointerdown", beginSliding);
     *  slider.addEventListener("pointerup", stopSliding);
     * @param pointerId - The unique identifier of the pointer to be captured.
     */
    setPointerCapture(pointerId: number): void;
    /**
     * Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.
     * @param pointerId - The unique identifier of the pointer to be released.
     */
    releasePointerCapture(pointerId: number): void;
    /**
     * Checks if the element has pointer capture for the specified pointer.
     * @param pointerId - The unique identifier of the pointer to check.
     * @returns True if the element has pointer capture for the specified pointer, false otherwise.
     */
    hasPointerCapture(pointerId: number): boolean;
    getBoundingClientRect(): any;
    closest(selectorString: string): Element;
    matches(selectorString: string): boolean;
    innerHTML: any;
    outerHTML: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    slot: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    readonly assignedSlot: HTMLSlotElement;
    insertAdjacentHTML(position: any, value: string): void;
    insertAdjacentElement(position: any, node: any): Node;
    insertAdjacentText(position: any, text: any): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
declare class HTMLOptionElement extends HTMLElement {
    value: string;
    /**
     * Access to all the custom data attributes (data-*) set.
     */
    dataset: any;
    innerText: string;
    /**
     * Base language of an element's attribute values and text content.
     */
    lang: string;
    /**
     * The text writing directionality of the content of the current element limited to only known values.
     */
    dir: string;
    readonly nodeName: string;
    /**
     * A string representing the local part of the qualified name of the element
     */
    readonly localName: string;
    /**
     * A string indicating the element's tag name
     */
    readonly tagName: string;
    readonly nodeType: number;
    /**
     * Returns the namespace URI of the element, or null if the element is not in a namespace.
     */
    readonly namespaceURI: string;
    /**
     * Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.
     */
    id: string;
    tabIndex: number;
    className: string;
    readonly attributes: NamedNodeMap;
    readonly style: Style;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetParent: Element;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    /**
     * Indicates if the element will focus automatically when it is loaded
     */
    autofocus: boolean;
    readonly uxpContainer: number;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
     */
    readonly shadowRoot: ShadowRoot;
    /**
     * Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.
     * @param xOrOptions - either the new scrollLeft position or an options object.
     * @param y - the optional new scrollTop position.
     */
    scrollTo(xOrOptions: any, y: any): void;
    scrollIntoView(alignToTop: boolean): void;
    scrollIntoViewIfNeeded(): void;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
     * @param init - An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment
     */
    attachShadow(init: any): ShadowRoot;
    focus(): void;
    blur(): void;
    disabled: boolean;
    /**
     * @param name - Name of the attribute whose value you want to get.
     */
    getAttribute(name: string): string;
    /**
     * @param name - Name of the attribute whose value is to be set
     * @param value - Value to assign to the attribute
     */
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the current element has any attributes or not.
     */
    hasAttributes(): boolean;
    /**
     * Returns the attribute names of the element as an Array of strings
     */
    getAttributeNames(): any[];
    getAttributeNode(name: string): any;
    setAttributeNode(newAttr: any): void;
    removeAttributeNode(oldAttr: any): void;
    click(): void;
    getElementsByClassName(name: string): NodeList;
    getElementsByTagName(name: string): NodeList;
    querySelector(selector: string): Element;
    querySelectorAll(selector: string): NodeList;
    /**
     * Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.
     * @example
     * // HTML
     * <style>
     *     div {
     *         width: 140px;
     *         height: 50px;
     *         display: flex;
     *         align-items: center;
     *         justify-content: center;
     *         background: #fbe;
     *         position: absolute;
     *     }
     * </style>
     * <div id="slider">SLIDE ME</div>
     *
     * // JS
     * function beginSliding(e) {
     *      slider.setPointerCapture(e.pointerId);
     *      slider.addEventListener("pointermove", slide);
     *  }
     *
     *  function stopSliding(e) {
     *      slider.releasePointerCapture(e.pointerId);
     *      slider.removeEventListener("pointermove", slide);
     *  }
     *
     *  function slide(e) {
     *      slider.style.left = e.clientX;
     *  }
     *
     *  const slider = document.getElementById("slider");
     *
     *  slider.addEventListener("pointerdown", beginSliding);
     *  slider.addEventListener("pointerup", stopSliding);
     * @param pointerId - The unique identifier of the pointer to be captured.
     */
    setPointerCapture(pointerId: number): void;
    /**
     * Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.
     * @param pointerId - The unique identifier of the pointer to be released.
     */
    releasePointerCapture(pointerId: number): void;
    /**
     * Checks if the element has pointer capture for the specified pointer.
     * @param pointerId - The unique identifier of the pointer to check.
     * @returns True if the element has pointer capture for the specified pointer, false otherwise.
     */
    hasPointerCapture(pointerId: number): boolean;
    getBoundingClientRect(): any;
    closest(selectorString: string): Element;
    matches(selectorString: string): boolean;
    innerHTML: any;
    outerHTML: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    slot: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    readonly assignedSlot: HTMLSlotElement;
    insertAdjacentHTML(position: any, value: string): void;
    insertAdjacentElement(position: any, node: any): Node;
    insertAdjacentText(position: any, text: any): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
declare class HTMLProgressElement extends HTMLElement {
    /**
     * Maximum value for the progress bar
     */
    max: number;
    /**
     * Value of the progress bar
     */
    value: number;
    /**
     * Completion value of the progress bar
     */
    readonly position: number;
    /**
     * Access to all the custom data attributes (data-*) set.
     */
    dataset: any;
    innerText: string;
    /**
     * Base language of an element's attribute values and text content.
     */
    lang: string;
    /**
     * The text writing directionality of the content of the current element limited to only known values.
     */
    dir: string;
    readonly nodeName: string;
    /**
     * A string representing the local part of the qualified name of the element
     */
    readonly localName: string;
    /**
     * A string indicating the element's tag name
     */
    readonly tagName: string;
    readonly nodeType: number;
    /**
     * Returns the namespace URI of the element, or null if the element is not in a namespace.
     */
    readonly namespaceURI: string;
    /**
     * Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.
     */
    id: string;
    tabIndex: number;
    className: string;
    readonly attributes: NamedNodeMap;
    readonly style: Style;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetParent: Element;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    /**
     * Indicates if the element will focus automatically when it is loaded
     */
    autofocus: boolean;
    readonly uxpContainer: number;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
     */
    readonly shadowRoot: ShadowRoot;
    /**
     * Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.
     * @param xOrOptions - either the new scrollLeft position or an options object.
     * @param y - the optional new scrollTop position.
     */
    scrollTo(xOrOptions: any, y: any): void;
    scrollIntoView(alignToTop: boolean): void;
    scrollIntoViewIfNeeded(): void;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
     * @param init - An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment
     */
    attachShadow(init: any): ShadowRoot;
    focus(): void;
    blur(): void;
    disabled: boolean;
    /**
     * @param name - Name of the attribute whose value you want to get.
     */
    getAttribute(name: string): string;
    /**
     * @param name - Name of the attribute whose value is to be set
     * @param value - Value to assign to the attribute
     */
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the current element has any attributes or not.
     */
    hasAttributes(): boolean;
    /**
     * Returns the attribute names of the element as an Array of strings
     */
    getAttributeNames(): any[];
    getAttributeNode(name: string): any;
    setAttributeNode(newAttr: any): void;
    removeAttributeNode(oldAttr: any): void;
    click(): void;
    getElementsByClassName(name: string): NodeList;
    getElementsByTagName(name: string): NodeList;
    querySelector(selector: string): Element;
    querySelectorAll(selector: string): NodeList;
    /**
     * Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.
     * @example
     * // HTML
     * <style>
     *     div {
     *         width: 140px;
     *         height: 50px;
     *         display: flex;
     *         align-items: center;
     *         justify-content: center;
     *         background: #fbe;
     *         position: absolute;
     *     }
     * </style>
     * <div id="slider">SLIDE ME</div>
     *
     * // JS
     * function beginSliding(e) {
     *      slider.setPointerCapture(e.pointerId);
     *      slider.addEventListener("pointermove", slide);
     *  }
     *
     *  function stopSliding(e) {
     *      slider.releasePointerCapture(e.pointerId);
     *      slider.removeEventListener("pointermove", slide);
     *  }
     *
     *  function slide(e) {
     *      slider.style.left = e.clientX;
     *  }
     *
     *  const slider = document.getElementById("slider");
     *
     *  slider.addEventListener("pointerdown", beginSliding);
     *  slider.addEventListener("pointerup", stopSliding);
     * @param pointerId - The unique identifier of the pointer to be captured.
     */
    setPointerCapture(pointerId: number): void;
    /**
     * Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.
     * @param pointerId - The unique identifier of the pointer to be released.
     */
    releasePointerCapture(pointerId: number): void;
    /**
     * Checks if the element has pointer capture for the specified pointer.
     * @param pointerId - The unique identifier of the pointer to check.
     * @returns True if the element has pointer capture for the specified pointer, false otherwise.
     */
    hasPointerCapture(pointerId: number): boolean;
    getBoundingClientRect(): any;
    closest(selectorString: string): Element;
    matches(selectorString: string): boolean;
    innerHTML: any;
    outerHTML: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    slot: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    readonly assignedSlot: HTMLSlotElement;
    insertAdjacentHTML(position: any, value: string): void;
    insertAdjacentElement(position: any, node: any): Node;
    insertAdjacentText(position: any, text: any): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
declare class HTMLScriptElement extends HTMLElement {
    type: string;
    src: string;
    charset: string;
    text: string;
    /**
     * Access to all the custom data attributes (data-*) set.
     */
    dataset: any;
    innerText: string;
    /**
     * Base language of an element's attribute values and text content.
     */
    lang: string;
    /**
     * The text writing directionality of the content of the current element limited to only known values.
     */
    dir: string;
    readonly nodeName: string;
    /**
     * A string representing the local part of the qualified name of the element
     */
    readonly localName: string;
    /**
     * A string indicating the element's tag name
     */
    readonly tagName: string;
    readonly nodeType: number;
    /**
     * Returns the namespace URI of the element, or null if the element is not in a namespace.
     */
    readonly namespaceURI: string;
    /**
     * Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.
     */
    id: string;
    tabIndex: number;
    className: string;
    readonly attributes: NamedNodeMap;
    readonly style: Style;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetParent: Element;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    /**
     * Indicates if the element will focus automatically when it is loaded
     */
    autofocus: boolean;
    readonly uxpContainer: number;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
     */
    readonly shadowRoot: ShadowRoot;
    /**
     * Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.
     * @param xOrOptions - either the new scrollLeft position or an options object.
     * @param y - the optional new scrollTop position.
     */
    scrollTo(xOrOptions: any, y: any): void;
    scrollIntoView(alignToTop: boolean): void;
    scrollIntoViewIfNeeded(): void;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
     * @param init - An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment
     */
    attachShadow(init: any): ShadowRoot;
    focus(): void;
    blur(): void;
    disabled: boolean;
    /**
     * @param name - Name of the attribute whose value you want to get.
     */
    getAttribute(name: string): string;
    /**
     * @param name - Name of the attribute whose value is to be set
     * @param value - Value to assign to the attribute
     */
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the current element has any attributes or not.
     */
    hasAttributes(): boolean;
    /**
     * Returns the attribute names of the element as an Array of strings
     */
    getAttributeNames(): any[];
    getAttributeNode(name: string): any;
    setAttributeNode(newAttr: any): void;
    removeAttributeNode(oldAttr: any): void;
    click(): void;
    getElementsByClassName(name: string): NodeList;
    getElementsByTagName(name: string): NodeList;
    querySelector(selector: string): Element;
    querySelectorAll(selector: string): NodeList;
    /**
     * Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.
     * @example
     * // HTML
     * <style>
     *     div {
     *         width: 140px;
     *         height: 50px;
     *         display: flex;
     *         align-items: center;
     *         justify-content: center;
     *         background: #fbe;
     *         position: absolute;
     *     }
     * </style>
     * <div id="slider">SLIDE ME</div>
     *
     * // JS
     * function beginSliding(e) {
     *      slider.setPointerCapture(e.pointerId);
     *      slider.addEventListener("pointermove", slide);
     *  }
     *
     *  function stopSliding(e) {
     *      slider.releasePointerCapture(e.pointerId);
     *      slider.removeEventListener("pointermove", slide);
     *  }
     *
     *  function slide(e) {
     *      slider.style.left = e.clientX;
     *  }
     *
     *  const slider = document.getElementById("slider");
     *
     *  slider.addEventListener("pointerdown", beginSliding);
     *  slider.addEventListener("pointerup", stopSliding);
     * @param pointerId - The unique identifier of the pointer to be captured.
     */
    setPointerCapture(pointerId: number): void;
    /**
     * Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.
     * @param pointerId - The unique identifier of the pointer to be released.
     */
    releasePointerCapture(pointerId: number): void;
    /**
     * Checks if the element has pointer capture for the specified pointer.
     * @param pointerId - The unique identifier of the pointer to check.
     * @returns True if the element has pointer capture for the specified pointer, false otherwise.
     */
    hasPointerCapture(pointerId: number): boolean;
    getBoundingClientRect(): any;
    closest(selectorString: string): Element;
    matches(selectorString: string): boolean;
    innerHTML: any;
    outerHTML: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    slot: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    readonly assignedSlot: HTMLSlotElement;
    insertAdjacentHTML(position: any, value: string): void;
    insertAdjacentElement(position: any, node: any): Node;
    insertAdjacentText(position: any, text: any): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
declare class HTMLSelectElement extends HTMLElement {
    value: string;
    selectedIndex: number;
    selectedOptions: Node[];
    /**
     * Variant
     */
    uxpVariant: string;
    /**
     * Determines if control renders quietly
     */
    uxpQuiet: string;
    readonly options: NodeList;
    /**
     * Access to all the custom data attributes (data-*) set.
     */
    dataset: any;
    innerText: string;
    /**
     * Base language of an element's attribute values and text content.
     */
    lang: string;
    /**
     * The text writing directionality of the content of the current element limited to only known values.
     */
    dir: string;
    readonly nodeName: string;
    /**
     * A string representing the local part of the qualified name of the element
     */
    readonly localName: string;
    /**
     * A string indicating the element's tag name
     */
    readonly tagName: string;
    readonly nodeType: number;
    /**
     * Returns the namespace URI of the element, or null if the element is not in a namespace.
     */
    readonly namespaceURI: string;
    /**
     * Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.
     */
    id: string;
    tabIndex: number;
    className: string;
    readonly attributes: NamedNodeMap;
    readonly style: Style;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetParent: Element;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    /**
     * Indicates if the element will focus automatically when it is loaded
     */
    autofocus: boolean;
    readonly uxpContainer: number;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
     */
    readonly shadowRoot: ShadowRoot;
    /**
     * Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.
     * @param xOrOptions - either the new scrollLeft position or an options object.
     * @param y - the optional new scrollTop position.
     */
    scrollTo(xOrOptions: any, y: any): void;
    scrollIntoView(alignToTop: boolean): void;
    scrollIntoViewIfNeeded(): void;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
     * @param init - An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment
     */
    attachShadow(init: any): ShadowRoot;
    focus(): void;
    blur(): void;
    disabled: boolean;
    /**
     * @param name - Name of the attribute whose value you want to get.
     */
    getAttribute(name: string): string;
    /**
     * @param name - Name of the attribute whose value is to be set
     * @param value - Value to assign to the attribute
     */
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the current element has any attributes or not.
     */
    hasAttributes(): boolean;
    /**
     * Returns the attribute names of the element as an Array of strings
     */
    getAttributeNames(): any[];
    getAttributeNode(name: string): any;
    setAttributeNode(newAttr: any): void;
    removeAttributeNode(oldAttr: any): void;
    click(): void;
    getElementsByClassName(name: string): NodeList;
    getElementsByTagName(name: string): NodeList;
    querySelector(selector: string): Element;
    querySelectorAll(selector: string): NodeList;
    /**
     * Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.
     * @example
     * // HTML
     * <style>
     *     div {
     *         width: 140px;
     *         height: 50px;
     *         display: flex;
     *         align-items: center;
     *         justify-content: center;
     *         background: #fbe;
     *         position: absolute;
     *     }
     * </style>
     * <div id="slider">SLIDE ME</div>
     *
     * // JS
     * function beginSliding(e) {
     *      slider.setPointerCapture(e.pointerId);
     *      slider.addEventListener("pointermove", slide);
     *  }
     *
     *  function stopSliding(e) {
     *      slider.releasePointerCapture(e.pointerId);
     *      slider.removeEventListener("pointermove", slide);
     *  }
     *
     *  function slide(e) {
     *      slider.style.left = e.clientX;
     *  }
     *
     *  const slider = document.getElementById("slider");
     *
     *  slider.addEventListener("pointerdown", beginSliding);
     *  slider.addEventListener("pointerup", stopSliding);
     * @param pointerId - The unique identifier of the pointer to be captured.
     */
    setPointerCapture(pointerId: number): void;
    /**
     * Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.
     * @param pointerId - The unique identifier of the pointer to be released.
     */
    releasePointerCapture(pointerId: number): void;
    /**
     * Checks if the element has pointer capture for the specified pointer.
     * @param pointerId - The unique identifier of the pointer to check.
     * @returns True if the element has pointer capture for the specified pointer, false otherwise.
     */
    hasPointerCapture(pointerId: number): boolean;
    getBoundingClientRect(): any;
    closest(selectorString: string): Element;
    matches(selectorString: string): boolean;
    innerHTML: any;
    outerHTML: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    slot: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    readonly assignedSlot: HTMLSlotElement;
    insertAdjacentHTML(position: any, value: string): void;
    insertAdjacentElement(position: any, node: any): Node;
    insertAdjacentText(position: any, text: any): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
declare class HTMLSlotElement {
    /**
     * A string used to get and set slot's name.
     */
    name: string;
    /**
     * returns a sequence of the nodes assigned to this slot. If options object is used with flatten: "true",
     * If slottables is the empty list, then append each slottable child of slot, in tree order, to slottables.<br></br>
     * Refer [find-flattened-slotables](https://dom.spec.whatwg.org/#find-flattened-slotables)
     * @property options.flatten - A boolean value indicating whether to return the assigned nodes of any available child `slot` elements (true) or not (false). Defaults to false.
     * @param options - An object that sets options for the nodes to be returned
     * @returns An array of nodes
     */
    assignedNodes(options: any): any[];
    /**
     * returns a sequence of the elements assigned to this slot. If options object is used with flatten: "true",
     * If slottables is the empty list, then append each slottable child of slot, in tree order, to slottables.<br></br>
     * Refer [find-flattened-slotables](https://dom.spec.whatwg.org/#find-flattened-slotables)
     * @property options.flatten - A boolean value indicating whether to return the assigned elements of any available child `<slot>` elements (true) or not (false). Defaults to false
     * @param options - An object that sets options for the elements to be returned
     * @returns An array of elements
     */
    assignedElements(options: any): any[];
}
declare class HTMLStyleElement extends HTMLElement {
    /**
     * Access to all the custom data attributes (data-*) set.
     */
    dataset: any;
    innerText: string;
    /**
     * Base language of an element's attribute values and text content.
     */
    lang: string;
    /**
     * The text writing directionality of the content of the current element limited to only known values.
     */
    dir: string;
    readonly nodeName: string;
    /**
     * A string representing the local part of the qualified name of the element
     */
    readonly localName: string;
    /**
     * A string indicating the element's tag name
     */
    readonly tagName: string;
    readonly nodeType: number;
    /**
     * Returns the namespace URI of the element, or null if the element is not in a namespace.
     */
    readonly namespaceURI: string;
    /**
     * Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.
     */
    id: string;
    tabIndex: number;
    className: string;
    readonly attributes: NamedNodeMap;
    readonly style: Style;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetParent: Element;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    /**
     * Indicates if the element will focus automatically when it is loaded
     */
    autofocus: boolean;
    readonly uxpContainer: number;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
     */
    readonly shadowRoot: ShadowRoot;
    /**
     * Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.
     * @param xOrOptions - either the new scrollLeft position or an options object.
     * @param y - the optional new scrollTop position.
     */
    scrollTo(xOrOptions: any, y: any): void;
    scrollIntoView(alignToTop: boolean): void;
    scrollIntoViewIfNeeded(): void;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
     * @param init - An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment
     */
    attachShadow(init: any): ShadowRoot;
    focus(): void;
    blur(): void;
    disabled: boolean;
    /**
     * @param name - Name of the attribute whose value you want to get.
     */
    getAttribute(name: string): string;
    /**
     * @param name - Name of the attribute whose value is to be set
     * @param value - Value to assign to the attribute
     */
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the current element has any attributes or not.
     */
    hasAttributes(): boolean;
    /**
     * Returns the attribute names of the element as an Array of strings
     */
    getAttributeNames(): any[];
    getAttributeNode(name: string): any;
    setAttributeNode(newAttr: any): void;
    removeAttributeNode(oldAttr: any): void;
    click(): void;
    getElementsByClassName(name: string): NodeList;
    getElementsByTagName(name: string): NodeList;
    querySelector(selector: string): Element;
    querySelectorAll(selector: string): NodeList;
    /**
     * Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.
     * @example
     * // HTML
     * <style>
     *     div {
     *         width: 140px;
     *         height: 50px;
     *         display: flex;
     *         align-items: center;
     *         justify-content: center;
     *         background: #fbe;
     *         position: absolute;
     *     }
     * </style>
     * <div id="slider">SLIDE ME</div>
     *
     * // JS
     * function beginSliding(e) {
     *      slider.setPointerCapture(e.pointerId);
     *      slider.addEventListener("pointermove", slide);
     *  }
     *
     *  function stopSliding(e) {
     *      slider.releasePointerCapture(e.pointerId);
     *      slider.removeEventListener("pointermove", slide);
     *  }
     *
     *  function slide(e) {
     *      slider.style.left = e.clientX;
     *  }
     *
     *  const slider = document.getElementById("slider");
     *
     *  slider.addEventListener("pointerdown", beginSliding);
     *  slider.addEventListener("pointerup", stopSliding);
     * @param pointerId - The unique identifier of the pointer to be captured.
     */
    setPointerCapture(pointerId: number): void;
    /**
     * Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.
     * @param pointerId - The unique identifier of the pointer to be released.
     */
    releasePointerCapture(pointerId: number): void;
    /**
     * Checks if the element has pointer capture for the specified pointer.
     * @param pointerId - The unique identifier of the pointer to check.
     * @returns True if the element has pointer capture for the specified pointer, false otherwise.
     */
    hasPointerCapture(pointerId: number): boolean;
    getBoundingClientRect(): any;
    closest(selectorString: string): Element;
    matches(selectorString: string): boolean;
    innerHTML: any;
    outerHTML: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    slot: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    readonly assignedSlot: HTMLSlotElement;
    insertAdjacentHTML(position: any, value: string): void;
    insertAdjacentElement(position: any, node: any): Node;
    insertAdjacentText(position: any, text: any): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
/**
 * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
 */
declare class HTMLTemplateElement extends HTMLElement {
    /**
     * Returns a template element's template content. return type is DocumentFragment object.
     */
    readonly content: DocumentFragment;
    /**
     * Access to all the custom data attributes (data-*) set.
     */
    dataset: any;
    innerText: string;
    /**
     * Base language of an element's attribute values and text content.
     */
    lang: string;
    /**
     * The text writing directionality of the content of the current element limited to only known values.
     */
    dir: string;
    readonly nodeName: string;
    /**
     * A string representing the local part of the qualified name of the element
     */
    readonly localName: string;
    /**
     * A string indicating the element's tag name
     */
    readonly tagName: string;
    readonly nodeType: number;
    /**
     * Returns the namespace URI of the element, or null if the element is not in a namespace.
     */
    readonly namespaceURI: string;
    /**
     * Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.
     */
    id: string;
    tabIndex: number;
    className: string;
    readonly attributes: NamedNodeMap;
    readonly style: Style;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetParent: Element;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    /**
     * Indicates if the element will focus automatically when it is loaded
     */
    autofocus: boolean;
    readonly uxpContainer: number;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
     */
    readonly shadowRoot: ShadowRoot;
    /**
     * Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.
     * @param xOrOptions - either the new scrollLeft position or an options object.
     * @param y - the optional new scrollTop position.
     */
    scrollTo(xOrOptions: any, y: any): void;
    scrollIntoView(alignToTop: boolean): void;
    scrollIntoViewIfNeeded(): void;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
     * @param init - An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment
     */
    attachShadow(init: any): ShadowRoot;
    focus(): void;
    blur(): void;
    disabled: boolean;
    /**
     * @param name - Name of the attribute whose value you want to get.
     */
    getAttribute(name: string): string;
    /**
     * @param name - Name of the attribute whose value is to be set
     * @param value - Value to assign to the attribute
     */
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the current element has any attributes or not.
     */
    hasAttributes(): boolean;
    /**
     * Returns the attribute names of the element as an Array of strings
     */
    getAttributeNames(): any[];
    getAttributeNode(name: string): any;
    setAttributeNode(newAttr: any): void;
    removeAttributeNode(oldAttr: any): void;
    click(): void;
    getElementsByClassName(name: string): NodeList;
    getElementsByTagName(name: string): NodeList;
    querySelector(selector: string): Element;
    querySelectorAll(selector: string): NodeList;
    /**
     * Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.
     * @example
     * // HTML
     * <style>
     *     div {
     *         width: 140px;
     *         height: 50px;
     *         display: flex;
     *         align-items: center;
     *         justify-content: center;
     *         background: #fbe;
     *         position: absolute;
     *     }
     * </style>
     * <div id="slider">SLIDE ME</div>
     *
     * // JS
     * function beginSliding(e) {
     *      slider.setPointerCapture(e.pointerId);
     *      slider.addEventListener("pointermove", slide);
     *  }
     *
     *  function stopSliding(e) {
     *      slider.releasePointerCapture(e.pointerId);
     *      slider.removeEventListener("pointermove", slide);
     *  }
     *
     *  function slide(e) {
     *      slider.style.left = e.clientX;
     *  }
     *
     *  const slider = document.getElementById("slider");
     *
     *  slider.addEventListener("pointerdown", beginSliding);
     *  slider.addEventListener("pointerup", stopSliding);
     * @param pointerId - The unique identifier of the pointer to be captured.
     */
    setPointerCapture(pointerId: number): void;
    /**
     * Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.
     * @param pointerId - The unique identifier of the pointer to be released.
     */
    releasePointerCapture(pointerId: number): void;
    /**
     * Checks if the element has pointer capture for the specified pointer.
     * @param pointerId - The unique identifier of the pointer to check.
     * @returns True if the element has pointer capture for the specified pointer, false otherwise.
     */
    hasPointerCapture(pointerId: number): boolean;
    getBoundingClientRect(): any;
    closest(selectorString: string): Element;
    matches(selectorString: string): boolean;
    innerHTML: any;
    outerHTML: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    slot: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    readonly assignedSlot: HTMLSlotElement;
    insertAdjacentHTML(position: any, value: string): void;
    insertAdjacentElement(position: any, node: any): Node;
    insertAdjacentText(position: any, text: any): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
declare class HTMLTextAreaElement extends HTMLElement {
    value: string;
    /**
     * Override implementation in base class Element
     */
    innerHTML: string;
    /**
     * The defaultValue for the textarea element
     */
    defaultValue: string;
    placeholder: string;
    readOnly: boolean;
    /**
     * Returns/Sets the beginning index of the selected text. When nothing is selected,
     * this returns the position of the text input cursor (caret) inside of the `<textarea>` element.
     */
    selectionStart: number;
    /**
     * Returns/Sets the end index of the selected text. When there's no selection,
     * this returns the offset of the character immediately following the current text input cursor position.
     */
    selectionEnd: number;
    /**
     * Access to all the custom data attributes (data-*) set.
     */
    dataset: any;
    innerText: string;
    /**
     * Base language of an element's attribute values and text content.
     */
    lang: string;
    /**
     * The text writing directionality of the content of the current element limited to only known values.
     */
    dir: string;
    readonly nodeName: string;
    /**
     * A string representing the local part of the qualified name of the element
     */
    readonly localName: string;
    /**
     * A string indicating the element's tag name
     */
    readonly tagName: string;
    readonly nodeType: number;
    /**
     * Returns the namespace URI of the element, or null if the element is not in a namespace.
     */
    readonly namespaceURI: string;
    /**
     * Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.
     */
    id: string;
    tabIndex: number;
    className: string;
    readonly attributes: NamedNodeMap;
    readonly style: Style;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetParent: Element;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    /**
     * Indicates if the element will focus automatically when it is loaded
     */
    autofocus: boolean;
    readonly uxpContainer: number;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
     */
    readonly shadowRoot: ShadowRoot;
    /**
     * Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.
     * @param xOrOptions - either the new scrollLeft position or an options object.
     * @param y - the optional new scrollTop position.
     */
    scrollTo(xOrOptions: any, y: any): void;
    scrollIntoView(alignToTop: boolean): void;
    scrollIntoViewIfNeeded(): void;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
     * @param init - An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment
     */
    attachShadow(init: any): ShadowRoot;
    focus(): void;
    blur(): void;
    disabled: boolean;
    /**
     * @param name - Name of the attribute whose value you want to get.
     */
    getAttribute(name: string): string;
    /**
     * @param name - Name of the attribute whose value is to be set
     * @param value - Value to assign to the attribute
     */
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the current element has any attributes or not.
     */
    hasAttributes(): boolean;
    /**
     * Returns the attribute names of the element as an Array of strings
     */
    getAttributeNames(): any[];
    getAttributeNode(name: string): any;
    setAttributeNode(newAttr: any): void;
    removeAttributeNode(oldAttr: any): void;
    click(): void;
    getElementsByClassName(name: string): NodeList;
    getElementsByTagName(name: string): NodeList;
    querySelector(selector: string): Element;
    querySelectorAll(selector: string): NodeList;
    /**
     * Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.
     * @example
     * // HTML
     * <style>
     *     div {
     *         width: 140px;
     *         height: 50px;
     *         display: flex;
     *         align-items: center;
     *         justify-content: center;
     *         background: #fbe;
     *         position: absolute;
     *     }
     * </style>
     * <div id="slider">SLIDE ME</div>
     *
     * // JS
     * function beginSliding(e) {
     *      slider.setPointerCapture(e.pointerId);
     *      slider.addEventListener("pointermove", slide);
     *  }
     *
     *  function stopSliding(e) {
     *      slider.releasePointerCapture(e.pointerId);
     *      slider.removeEventListener("pointermove", slide);
     *  }
     *
     *  function slide(e) {
     *      slider.style.left = e.clientX;
     *  }
     *
     *  const slider = document.getElementById("slider");
     *
     *  slider.addEventListener("pointerdown", beginSliding);
     *  slider.addEventListener("pointerup", stopSliding);
     * @param pointerId - The unique identifier of the pointer to be captured.
     */
    setPointerCapture(pointerId: number): void;
    /**
     * Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.
     * @param pointerId - The unique identifier of the pointer to be released.
     */
    releasePointerCapture(pointerId: number): void;
    /**
     * Checks if the element has pointer capture for the specified pointer.
     * @param pointerId - The unique identifier of the pointer to check.
     * @returns True if the element has pointer capture for the specified pointer, false otherwise.
     */
    hasPointerCapture(pointerId: number): boolean;
    getBoundingClientRect(): any;
    closest(selectorString: string): Element;
    matches(selectorString: string): boolean;
    outerHTML: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    slot: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    readonly assignedSlot: HTMLSlotElement;
    insertAdjacentHTML(position: any, value: string): void;
    insertAdjacentElement(position: any, node: any): Node;
    insertAdjacentText(position: any, text: any): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
/**
 * @property preload - Determines how much the media data be loaded when the plugin loads.
 *      This can be one of the followings. Default is "metadata".
 *      <ul>
 *          <li>'none': Video should not be loaded</li>
 *          <li>'metadata': Only video metadata is fetched</li>
 *          <li>'auto': The whole video file can be downloaded</li>
 *          <li>''(empty string): Synonym of the 'auto' value</li>
 *      </ul>
 *      example: <br></br>`<video src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" preload="metadata"></video>`
 * @property autoplay - Video automatically begins to play back as soon as loading the data.
 *      example: <br></br>`<video src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoplay></video>`
 */
declare class HTMLVideoElement extends HTMLElement {
    /**
     * URL of a media resource.
     */
    src: string;
    /**
     * Current playback time in seconds.
     */
    currentTime: number;
    /**
     * Length of the media in seconds.
     */
    duration: number;
    /**
     * Whether the media element is muted.
     */
    muted: boolean;
    /**
     * The volume at which the media will be played.
     * Values must fall between 0 and 1, where 0 is effectively muted and 1 is the loudest possible value.
     */
    volume: number;
    /**
     * Range of the media source.
     */
    played: TimeRanges;
    /**
     * Whether the media element is paused.
     */
    paused: boolean;
    /**
     * Whether the media element has ended playback.
     */
    ended: boolean;
    /**
     * MediaError for the most recent error, or null if there has not been an error.
     */
    error: MediaError;
    /**
     * Whether the media element should start over when it reaches the end.
     */
    loop: boolean;
    /**
     * AudioTrackList object listing all of the AudioTrack objects representing the media's audio tracks.
     */
    audioTracks: AudioTrackList;
    /**
     * VideoTrackList object listing all of the VideoTrack objects representing the media's video tracks.
     */
    videoTracks: VideoTrackList;
    /**
     * TextTrackList object listing all of the TextTrack objects representing the media's text tracks
     */
    textTracks: TextTrackList;
    /**
     * The rate at which the media is being played back.
     * 1.0 is normal speed, values lower than 1.0 make the media play slower than normal,
     * higher values make it play faster. Default is 1.0.
     */
    playbackRate: number;
    /**
     * How likely it is that UXP's media player will be able to play media of a given MIME type.
     * @param mimeType - MIME type of the media.
     * @returns How likely it is that the media can be played. One of the followings.
     *      <ul>
     *          <li>''(empty string): Media cannot be played on the current device.</li>
     *          <li>'probably': Media is probably playable on the current device.</li>
     *          <li>'maybe': There is not enough information to determine whether the media can play.</li>
     *      </ul>
     */
    canPlayType(mimeType: string): string;
    /**
     * Resets the media to its initial state and begins the process of selecting a media source
     * and loading the media in preparation for playback.
     * The amount of media data that is prefetched is determined by the value of 'preload' attribute.
     */
    load(): void;
    /**
     * Attempts to begin playback of the media.
     * <br></br>Note that it returns a resolved Promise regardless of the actual result.
     * It notifies an error over the error event.
     * @returns `Promise<void>` Resolved when playback has been started, or rejected if playback cannot be started.
     */
    play(): any;
    /**
     * Pause the playback of the media. If the media is already in a paused state, no effect.
     */
    pause(): void;
    /**
     * Pause the playback of the media and set the current playback time to the beginning.
     */
    stop(): void;
    /**
     * Access to all the custom data attributes (data-*) set.
     */
    dataset: any;
    innerText: string;
    /**
     * Base language of an element's attribute values and text content.
     */
    lang: string;
    /**
     * The text writing directionality of the content of the current element limited to only known values.
     */
    dir: string;
    readonly nodeName: string;
    /**
     * A string representing the local part of the qualified name of the element
     */
    readonly localName: string;
    /**
     * A string indicating the element's tag name
     */
    readonly tagName: string;
    readonly nodeType: number;
    /**
     * Returns the namespace URI of the element, or null if the element is not in a namespace.
     */
    readonly namespaceURI: string;
    /**
     * Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.
     */
    id: string;
    tabIndex: number;
    className: string;
    readonly attributes: NamedNodeMap;
    readonly style: Style;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetParent: Element;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    /**
     * Indicates if the element will focus automatically when it is loaded
     */
    autofocus: boolean;
    readonly uxpContainer: number;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
     */
    readonly shadowRoot: ShadowRoot;
    /**
     * Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.
     * @param xOrOptions - either the new scrollLeft position or an options object.
     * @param y - the optional new scrollTop position.
     */
    scrollTo(xOrOptions: any, y: any): void;
    scrollIntoView(alignToTop: boolean): void;
    scrollIntoViewIfNeeded(): void;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
     * @param init - An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment
     */
    attachShadow(init: any): ShadowRoot;
    focus(): void;
    blur(): void;
    disabled: boolean;
    /**
     * @param name - Name of the attribute whose value you want to get.
     */
    getAttribute(name: string): string;
    /**
     * @param name - Name of the attribute whose value is to be set
     * @param value - Value to assign to the attribute
     */
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the current element has any attributes or not.
     */
    hasAttributes(): boolean;
    /**
     * Returns the attribute names of the element as an Array of strings
     */
    getAttributeNames(): any[];
    getAttributeNode(name: string): any;
    setAttributeNode(newAttr: any): void;
    removeAttributeNode(oldAttr: any): void;
    click(): void;
    getElementsByClassName(name: string): NodeList;
    getElementsByTagName(name: string): NodeList;
    querySelector(selector: string): Element;
    querySelectorAll(selector: string): NodeList;
    /**
     * Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.
     * @example
     * // HTML
     * <style>
     *     div {
     *         width: 140px;
     *         height: 50px;
     *         display: flex;
     *         align-items: center;
     *         justify-content: center;
     *         background: #fbe;
     *         position: absolute;
     *     }
     * </style>
     * <div id="slider">SLIDE ME</div>
     *
     * // JS
     * function beginSliding(e) {
     *      slider.setPointerCapture(e.pointerId);
     *      slider.addEventListener("pointermove", slide);
     *  }
     *
     *  function stopSliding(e) {
     *      slider.releasePointerCapture(e.pointerId);
     *      slider.removeEventListener("pointermove", slide);
     *  }
     *
     *  function slide(e) {
     *      slider.style.left = e.clientX;
     *  }
     *
     *  const slider = document.getElementById("slider");
     *
     *  slider.addEventListener("pointerdown", beginSliding);
     *  slider.addEventListener("pointerup", stopSliding);
     * @param pointerId - The unique identifier of the pointer to be captured.
     */
    setPointerCapture(pointerId: number): void;
    /**
     * Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.
     * @param pointerId - The unique identifier of the pointer to be released.
     */
    releasePointerCapture(pointerId: number): void;
    /**
     * Checks if the element has pointer capture for the specified pointer.
     * @param pointerId - The unique identifier of the pointer to check.
     * @returns True if the element has pointer capture for the specified pointer, false otherwise.
     */
    hasPointerCapture(pointerId: number): boolean;
    getBoundingClientRect(): any;
    closest(selectorString: string): Element;
    matches(selectorString: string): boolean;
    innerHTML: any;
    outerHTML: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    slot: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    readonly assignedSlot: HTMLSlotElement;
    insertAdjacentHTML(position: any, value: string): void;
    insertAdjacentElement(position: any, node: any): Node;
    insertAdjacentText(position: any, text: any): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
    /**
   * Determines how much the media data be loaded when the plugin loads.
       This can be one of the followings. Default is "metadata".
       <ul>
           <li>'none': Video should not be loaded</li>
           <li>'metadata': Only video metadata is fetched</li>
           <li>'auto': The whole video file can be downloaded</li>
           <li>''(empty string): Synonym of the 'auto' value</li>
       </ul>
       example: <br></br>`<video src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" preload="metadata"></video>`
  */
    preload: string;
    /**
   * Video automatically begins to play back as soon as loading the data.
       example: <br></br>`<video src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoplay></video>`
  */
    autoplay: boolean;
}
declare type TimeRanges = any;
declare type MediaError = any;
declare type AudioTrackList = any;
declare type VideoTrackList = any;
declare type TextTrackList = any;
/**
 * WebViews in Adobe UXP is a component that allows you to embed web content in your plugins.
 * They are essentially a browser window that is displayed inside the plugin, allowing you to load web pages,
 * and interact with them using JavaScript.
 * WebViews can be used to display complex web pages inside the plugin.
 * WebViews can be controlled by the plugin using the JavaScript API provided by UXP.
 * They can also communicate with the plugin using `postMessage`,
 * allowing the plugin to interact with WebView and vice versa.
 * WebViews can be used to access external web services, to create custom UI
 * and to isolate the web content from the rest of the plugin.<br></br>
 *
 * <InlineAlert variant="warning" slots="text"/>
 *
 * WebViews are resource intensive since it launches multiple processes per plugin
 * and therefore should be used only in cases where you cannot create the plugin using UXP features.<br></br>
 *
 * **Note:**<br></br>
 * 1. WebViews support was introduced in UXP v6.0 to be used only in **Dialogs**. The reasoning here was to limit WebViews usage in persistent panels. Later due to overwhelming requests, WebView support was added for `Panels` with UXP v6.4.
 * 2. WebViews will need manifest version v5 or above.
 * 3. Checkout the template available in `UXP Developer Tool` for a quick getting starter plugin for WebView in UXP.
 * 4. `requiredPermissions.webview.enableMessageBridge=“localAndRemote”` is required for Plugin & WebView communication via postMessage.
 *
 * **Limitations:**<br></br>
 * 1. Only remote content (including localhost) is allowed at present. This means you will not be able to load local html files from plugin folders in UXP WebView. This behaviour is due to limitations on WindowsOS and **<i>may</i>** be enabled in later releases.
 * 2. Any links in a UXP WebView will not open in a new window.
 * e.g., In a browser, clicking `<a href="https://www.adobe.com" target="_blank">` would create a new Window
 * and open `https://www.adobe.com` from the new Window or JavaScript alert() pops up a new Window. UXP WebView doesn't permit this.
 *
 * In your plugin's code, add a WebView element in the desired location.
 * The element can take attributes such as id , height , and src to specify the WebView's properties<br></br>
 *
 * ```js
 * <webview id="webviewsample" width="100%" height="360px" src="https://www.adobe.com" uxpAllowInspector="true" ></webview>
 * ```
 *
 * <br></br>
 * <h3>Manifest requirements for UXP WebView</h3>
 * In order to use UXP WebView, the plugin should have the following manifest v5 permissions.<br></br>
 *
 * <table>
 *  <tr>
 *      <th>Key</th>
 *      <th>Value</th>
 *      <th>Description</th>
 *      <th>Mandatory/Optional</th>
 * </tr>
 * <tr>
 *      <td>.domains</td>
 *      <td>string[]</td>
 *      <td>Allows access to the specified domains. Wildcards (except top-level) are supported. e.g "https://*.adobe.com". <br></br> Recommended</td>
 *      <td>Mandatory</td>
 * </tr>
 * <tr>
 *      <td>.domains</td>
 *      <td>"all"</td>
 *      <td>Allows access to all domains.<br></br>Not recommended, may affect performance, security and privacy. Plugin may be blocked by enterprises.</td>
 *      <td>Mandatory</td>
 * </tr>
 * <tr>
 *      <td>.allow</td>
 *      <td>"yes"</td>
 *      <td>Enables WebView access to the plugin</td>
 *      <td>Mandatory</td>
 * </tr>
 * <tr>
 *      <td>.enableMessageBridge</td>
 *      <td>"localAndRemote"</td>
 *      <td>Allows Plugin & the content loaded on WebView to communicate regardless of where the content is loaded from **locally or remotely.**<br></br>
 *          **Note: ** At this stage only remote content is allowed. Refer **Limitations** section for more details</td>
 *      <td>Optional</td>
 * </tr>
 * <tr>
 *      <td>.enableMessageBridge</td>
 *      <td>"no"</td>
 *      <td>Not allow WebView & the content loaded on WebView to communicate</td>
 *      <td>Optional</td>
 * </tr>
 * </table><br></br>
 * @example
 * // In your `manifest.json` update the following
 * {
 * "manifestVersion": 5,
 * "requiredPermissions": {
 *     "webview": {
 *        "allow": "yes",
 *         // domains --> string[] | "all"
 *         "domains": [ "https://*.adobe.com", "https://*.google.com"],
 *         // enableMessageBridge can use either of these data "localAndRemote" | "localOnly" | "no"
 *         "enableMessageBridge": "localAndRemote"
 *      }
 *   }
 * }
 * @property uxpallowinspector - Enable Developer tools for debugging in UXP WebView<br></br>
 *                                       **Note:** Not supported in UWP platform<br></br>
 *                                       eg: `<webview id="webviewsample" width="100%" height="360px" src="https://www.adobe.com" uxpAllowInspector="true" ></webview>`
 * @property width - Width of the WebView
 * @property height - Height of the WebView
 */
declare class HTMLWebViewElement {
    /**
     * The url to load in the WebView. Only remote content (including `localhost`) is allowed at present.
     */
    src: string;
    /**
     * The plugin and the content within the WebView can communicate with each other using `postMessage` and listening to the 'message' event.
     *
     * [Plugin]
     * - send messages to the content in the WebView `HTMLWebViewElement.postMessage(msg)`
     * - receive messages from the content in the WebView `window.addEventListener("message", (e) => {...})` where `e: Event { origin: url of the content, source: window.HTMLWebViewElement, data: message }`
     *
     * [Content in the WebView]
     * - send messages to plugin `window.uxpHost.postMessage(msg)`
     * - receive messages from plugin `window.addEventListener("message", (e) => { ... })` where `e: Event { origin: plugin id, source: window.uxpHost, data: message }`
     * @example
     * // Send message from plugin to WebView
     * let webViewDisplay = document.getElementById("webviewSample");
     * webViewDisplay.postMessage("PluginMessage1");
     *
     * // Plugin receives message from WebView via "message" event.
     * window.addEventListener("message", (e) => {
     *   console.log(`Message from WebView(Origin:${e.origin}): ${e.data}\n`);
     *
     *   if (e.data === "webviewmessage1") {
     *     webViewDisplay.postMessage("Thanks, Message1 recieved successfully");
     *   }
     * });
     * @example
     * // WebView sends message to Plugin
     * window.uxpHost.postMessage("webviewmessage1");
     *
     * // WebView receives messages from Plugin
     * window.addEventListener("message", (e) => {
     *   // (e) from Plugin
     *   // e.origin would be 'plugin id'
     *   // e.source would be 'window.uxpHost'
     *   // e.data is 'JSON.parse(JSON.stringify("PluginMessage1"))' which is "PluginMessage1"
     *   if (e.data === "PluginMessage1") {
     *     console.log(e.data);
     *   }
     * });
     * @param message - A message sent to the WebView. Please note that the message is stringified & parsed by JSON
     * @param targetOrigin - `[Optional]` - The origin of WebView for the event to be dispatched. The literal string "*" indicates no preference
     * @param transfer - `Optional` and `not functional yet`. Will be enabled in future release.
     */
    postMessage(message: any, targetOrigin: string, transfer: any): void;
    /**
   * Enable Developer tools for debugging in UXP WebView<br></br>
                                        **Note:** Not supported in UWP platform<br></br>
                                        eg: `<webview id="webviewsample" width="100%" height="360px" src="https://www.adobe.com" uxpAllowInspector="true" ></webview>`
  */
    uxpallowinspector: boolean;
    /**
     * Width of the WebView
     */
    width: string;
    /**
     * Height of the WebView
     */
    height: string;
}
/**
 * Creates an instance of BaseUIEvent.
 */
declare class BaseUIEvent extends Event {
    constructor(type: any, eventInit: any);
    readonly pointerId: any;
    readonly width: number;
    readonly height: number;
    readonly pressure: number;
    readonly tangentialPressure: number;
    readonly tiltX: number;
    readonly tiltY: number;
    readonly twist: number;
    readonly clientX: number;
    readonly clientY: number;
    readonly offsetX: number;
    readonly offsetY: number;
    readonly pageX: number;
    readonly pageY: number;
    readonly screenX: number;
    readonly screenY: number;
    readonly movementX: number;
    readonly movementY: number;
    readonly button: number;
    readonly buttons: any;
    readonly detail: any;
    readonly pointerType: any;
    readonly altKey: any;
    readonly shiftKey: any;
    readonly metaKey: any;
    readonly ctrlKey: any;
    readonly isPrimary: any;
    readonly which: any;
    initEvent(typeArg: string, bubblesArg: boolean, cancelableArg: boolean): void;
    readonly type: any;
    readonly isTrusted: boolean;
    readonly target: Node;
    readonly currentTarget: Node;
    readonly bubbles: boolean;
    readonly cancelable: boolean;
    readonly composed: boolean;
    readonly eventPhase: any;
    readonly defaultPrevented: boolean;
    /**
     * Returns the event's path
     */
    composedPath(): void;
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
    returnValue: any;
}
/**
 * Creates an instance of CloseEvent.
 */
declare class CloseEvent extends Event {
    constructor(code: any, reason: any, wasClean: any);
    code: any;
    reason: any;
    wasClean: any;
    initEvent(typeArg: string, bubblesArg: boolean, cancelableArg: boolean): void;
    readonly type: any;
    readonly isTrusted: boolean;
    readonly target: Node;
    readonly currentTarget: Node;
    readonly bubbles: boolean;
    readonly cancelable: boolean;
    readonly composed: boolean;
    readonly eventPhase: any;
    readonly defaultPrevented: boolean;
    /**
     * Returns the event's path
     */
    composedPath(): void;
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
    returnValue: any;
}
/**
 * Creates an instance of DragEvent.
 */
declare class DragEvent extends MouseEvent {
    constructor(type: any, eventInit: any);
    readonly dataTransfer: any;
    readonly pointerId: any;
    readonly width: number;
    readonly height: number;
    readonly pressure: number;
    readonly tangentialPressure: number;
    readonly tiltX: number;
    readonly tiltY: number;
    readonly twist: number;
    readonly clientX: number;
    readonly clientY: number;
    readonly offsetX: number;
    readonly offsetY: number;
    readonly pageX: number;
    readonly pageY: number;
    readonly screenX: number;
    readonly screenY: number;
    readonly movementX: number;
    readonly movementY: number;
    readonly button: number;
    readonly buttons: any;
    readonly detail: any;
    readonly pointerType: any;
    readonly altKey: any;
    readonly shiftKey: any;
    readonly metaKey: any;
    readonly ctrlKey: any;
    readonly isPrimary: any;
    readonly which: any;
    initEvent(typeArg: string, bubblesArg: boolean, cancelableArg: boolean): void;
    readonly type: any;
    readonly isTrusted: boolean;
    readonly target: Node;
    readonly currentTarget: Node;
    readonly bubbles: boolean;
    readonly cancelable: boolean;
    readonly composed: boolean;
    readonly eventPhase: any;
    readonly defaultPrevented: boolean;
    /**
     * Returns the event's path
     */
    composedPath(): void;
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
    returnValue: any;
}
/**
 * Creates an instance of ErrorEvent.
 */
declare class ErrorEvent extends Event {
    constructor(typeArg: any, eventInit?: any);
    readonly message: any;
    readonly filename: any;
    readonly lineno: any;
    readonly colno: any;
    readonly error: any;
    initEvent(typeArg: string, bubblesArg: boolean, cancelableArg: boolean): void;
    readonly type: any;
    readonly isTrusted: boolean;
    readonly target: Node;
    readonly currentTarget: Node;
    readonly bubbles: boolean;
    readonly cancelable: boolean;
    readonly composed: boolean;
    readonly eventPhase: any;
    readonly defaultPrevented: boolean;
    /**
     * Returns the event's path
     */
    composedPath(): void;
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
    returnValue: any;
}
/**
 * Creates an instance of Event.
 */
declare class Event {
    constructor(eventType: any, eventInit: any);
    initEvent(typeArg: string, bubblesArg: boolean, cancelableArg: boolean): void;
    readonly type: any;
    readonly isTrusted: boolean;
    readonly target: Node;
    readonly currentTarget: Node;
    readonly bubbles: boolean;
    readonly cancelable: boolean;
    readonly composed: boolean;
    readonly eventPhase: any;
    readonly defaultPrevented: boolean;
    /**
     * Returns the event's path
     */
    composedPath(): void;
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
    returnValue: any;
    static NONE: any;
    static CAPTURING_PHASE: any;
    static AT_TARGET: any;
    static BUBBLING_PHASE: any;
}
declare class EventTarget {
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
/**
 * Creates an instance of GestureEvent.
 */
declare class GestureEvent extends BaseUIEvent {
    constructor(type: any, eventInit: any);
    readonly expansion: number;
    readonly rotation: number;
    readonly scale: number;
    readonly translationX: number;
    readonly translationY: number;
    readonly velocityAngular: number;
    readonly velocityExpansion: number;
    readonly velocityX: number;
    readonly velocityY: number;
    readonly pointerId: any;
    readonly width: number;
    readonly height: number;
    readonly pressure: number;
    readonly tangentialPressure: number;
    readonly tiltX: number;
    readonly tiltY: number;
    readonly twist: number;
    readonly clientX: number;
    readonly clientY: number;
    readonly offsetX: number;
    readonly offsetY: number;
    readonly pageX: number;
    readonly pageY: number;
    readonly screenX: number;
    readonly screenY: number;
    readonly movementX: number;
    readonly movementY: number;
    readonly button: number;
    readonly buttons: any;
    readonly detail: any;
    readonly pointerType: any;
    readonly altKey: any;
    readonly shiftKey: any;
    readonly metaKey: any;
    readonly ctrlKey: any;
    readonly isPrimary: any;
    readonly which: any;
    initEvent(typeArg: string, bubblesArg: boolean, cancelableArg: boolean): void;
    readonly type: any;
    readonly isTrusted: boolean;
    readonly target: Node;
    readonly currentTarget: Node;
    readonly bubbles: boolean;
    readonly cancelable: boolean;
    readonly composed: boolean;
    readonly eventPhase: any;
    readonly defaultPrevented: boolean;
    /**
     * Returns the event's path
     */
    composedPath(): void;
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
    returnValue: any;
}
/**
 * Creates an instance of KeyboardEvent.
 */
declare class KeyboardEvent extends Event {
    constructor(type: any, eventInit: any);
    getModifierState(keyArgs: string): boolean;
    readonly altKey: any;
    readonly ctrlKey: any;
    readonly metaKey: any;
    readonly shiftKey: any;
    readonly code: any;
    readonly keyCode: any;
    readonly key: any;
    readonly location: any;
    readonly repeat: any;
    initEvent(typeArg: string, bubblesArg: boolean, cancelableArg: boolean): void;
    readonly type: any;
    readonly isTrusted: boolean;
    readonly target: Node;
    readonly currentTarget: Node;
    readonly bubbles: boolean;
    readonly cancelable: boolean;
    readonly composed: boolean;
    readonly eventPhase: any;
    readonly defaultPrevented: boolean;
    /**
     * Returns the event's path
     */
    composedPath(): void;
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
    returnValue: any;
}
/**
 * Creates an instance of MessageEvent.
 */
declare class MessageEvent extends Event {
    constructor(data: any, origin: any, source: any, eventInit: any);
    data: any;
    origin: any;
    source: any;
    initEvent(typeArg: string, bubblesArg: boolean, cancelableArg: boolean): void;
    readonly type: any;
    readonly isTrusted: boolean;
    readonly target: Node;
    readonly currentTarget: Node;
    readonly bubbles: boolean;
    readonly cancelable: boolean;
    readonly composed: boolean;
    readonly eventPhase: any;
    readonly defaultPrevented: boolean;
    /**
     * Returns the event's path
     */
    composedPath(): void;
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
    returnValue: any;
}
/**
 * Creates an instance of MouseEvent.
 */
declare class MouseEvent extends BaseUIEvent {
    constructor(type: any, eventInit: any);
    readonly pointerId: any;
    readonly width: number;
    readonly height: number;
    readonly pressure: number;
    readonly tangentialPressure: number;
    readonly tiltX: number;
    readonly tiltY: number;
    readonly twist: number;
    readonly clientX: number;
    readonly clientY: number;
    readonly offsetX: number;
    readonly offsetY: number;
    readonly pageX: number;
    readonly pageY: number;
    readonly screenX: number;
    readonly screenY: number;
    readonly movementX: number;
    readonly movementY: number;
    readonly button: number;
    readonly buttons: any;
    readonly detail: any;
    readonly pointerType: any;
    readonly altKey: any;
    readonly shiftKey: any;
    readonly metaKey: any;
    readonly ctrlKey: any;
    readonly isPrimary: any;
    readonly which: any;
    initEvent(typeArg: string, bubblesArg: boolean, cancelableArg: boolean): void;
    readonly type: any;
    readonly isTrusted: boolean;
    readonly target: Node;
    readonly currentTarget: Node;
    readonly bubbles: boolean;
    readonly cancelable: boolean;
    readonly composed: boolean;
    readonly eventPhase: any;
    readonly defaultPrevented: boolean;
    /**
     * Returns the event's path
     */
    composedPath(): void;
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
    returnValue: any;
}
/**
 * Creates an instance of PointerEvent.
 */
declare class PointerEvent extends BaseUIEvent {
    constructor(type: any, eventInit: any);
    readonly pointerId: any;
    readonly width: number;
    readonly height: number;
    readonly pressure: number;
    readonly tangentialPressure: number;
    readonly tiltX: number;
    readonly tiltY: number;
    readonly twist: number;
    readonly clientX: number;
    readonly clientY: number;
    readonly offsetX: number;
    readonly offsetY: number;
    readonly pageX: number;
    readonly pageY: number;
    readonly screenX: number;
    readonly screenY: number;
    readonly movementX: number;
    readonly movementY: number;
    readonly button: number;
    readonly buttons: any;
    readonly detail: any;
    readonly pointerType: any;
    readonly altKey: any;
    readonly shiftKey: any;
    readonly metaKey: any;
    readonly ctrlKey: any;
    readonly isPrimary: any;
    readonly which: any;
    initEvent(typeArg: string, bubblesArg: boolean, cancelableArg: boolean): void;
    readonly type: any;
    readonly isTrusted: boolean;
    readonly target: Node;
    readonly currentTarget: Node;
    readonly bubbles: boolean;
    readonly cancelable: boolean;
    readonly composed: boolean;
    readonly eventPhase: any;
    readonly defaultPrevented: boolean;
    /**
     * Returns the event's path
     */
    composedPath(): void;
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
    returnValue: any;
}
/**
 * Creates an instance of ProgressEvent.
 */
declare class ProgressEvent extends Event {
    constructor(typeArg: any, eventInit?: any);
    readonly lengthComputable: any;
    readonly loaded: any;
    readonly total: any;
    initEvent(typeArg: string, bubblesArg: boolean, cancelableArg: boolean): void;
    readonly type: any;
    readonly isTrusted: boolean;
    readonly target: Node;
    readonly currentTarget: Node;
    readonly bubbles: boolean;
    readonly cancelable: boolean;
    readonly composed: boolean;
    readonly eventPhase: any;
    readonly defaultPrevented: boolean;
    /**
     * Returns the event's path
     */
    composedPath(): void;
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
    returnValue: any;
}
/**
 * Creates an instance of Clipboard.
 *
 * Note: Clipboard access is not supported for 3P plugins with manifest version upto 4. Valid manifest entry required from manifest version 5.;
 */
declare class Clipboard {
    /**
     * Set data to clipboard.
     * Note: This is a non-standard API.
     * @example
     * navigator.clipboard.setContent({"text/plain": "Hello!"});
     * @param data - The data to store in the clipboard. The object keys are the mime types, so for text, use `text/plain` as a key.
     */
    setContent(data: any): Promise<any>;
    /**
     * Get data from clipboard.
     * Note: This is a non-standard API.
     * @example
     * navigator.clipboard.getContent();
     */
    getContent(): Promise<any>;
    /**
     * Write data to clipboard.This can be used to implement cut and copy functionality.
     * @example
     * navigator.clipboard.write({"text/plain": "Hello!"});
     * @param text - The text to set.
     */
    write(text: any): Promise<any>;
    /**
     * Write text to clipboard.This can be used to implement cut and copy text functionality.
     * @example
     * navigator.clipboard.writeText({"text/plain": "Hello!"});
     * @param text - The text to set. Note, currently this will fail unless this is an object of the form {"text/plain": "text to set"}. This will be fixed in a future release.
     */
    writeText(text: any): Promise<any>;
    /**
     * Read data from clipboard.
     * @example
     * navigator.clipboard.read();
     */
    read(): Promise<any>;
    /**
     * Read text from clipboard.
     * @example
     * navigator.clipboard.readText();
     */
    readText(): Promise<any>;
    /**
     * Clear clipboard content.
     * Note: Nonstandard: This method is non-standard.
     * @example
     * navigator.clipboard.clearContent();
     */
    clearContent(): Promise<any>;
}
/**
 * DOMTokenList supports the ClassList and other token list functionality
 */
declare class DOMTokenList {
    /**
     * Returns the number of tokens in the list
     */
    readonly length: any;
    /**
     * The serialized string value of the token list
     */
    readonly value: any;
    /**
     * Adds the specified tokens to the token list. If the token is already present, no error is thrown.
     */
    add(...tokens: string[]): void;
    /**
     * Removes the specified items from the token list. If the token is not present, no error is thrown.
     */
    remove(...tokens: string[]): void;
    /**
     * Replaces an old token with a new token. If the old token doesn't exist,
     * no action occurs, and `false` is returned.
     */
    replace(oldToken: any, newToken: any): void;
    /**
     * Toggles a token within the list. If `force` is not present, then the following
     * rules are applied:
     *
     * * if the token is present, it is removed, and `false` is returned
     * * if the token isn't present, it is added, and `true` is returned
     *
     * If `force` is supplied, then:
     *
     * * if `true`, the token is added
     * * if `false`, the token is removed
     * @returns if the token exists in the last after the operation
     */
    toggle(token: string, force: boolean): boolean;
    /**
     * Return the item at the specified index, or `null` if the index is out-of-range
     * @returns the item at the index, or null if index is out of range
     */
    item(index: number): string;
    /**
     * Returns whether the token is in the list or not.
     * @returns if `true`, the token is in the list, otherwise it isn't
     */
    contains(token: any): boolean;
    /**
     * Returns `true` if the token is acceptable to the list; otherwise returns `false`.
     * If `false` is returned, passing the token would throw an error when calling
     * any other method.
     * @returns if `true`, the token is acceptable when calling other methods
     */
    supports(token: string): boolean;
}
/**
 * Guards against invalid tokens in the token list. The spec indicates that tokens matching
 * the empty string should throw a SyntaxError and tokens containing whitespace should
 * throw InvalidCharacterError exceptions.
 * @returns If true, the token is valid
 */
declare function guard(token: any): boolean;
/**
 * Creates an instance of Attr.
 */
declare class Attr extends Node {
    constructor(document: Document, nodeName: string);
    readonly nodeName: string;
    readonly localName: string;
    readonly name: string;
    readonly specified: boolean;
    value: any;
    readonly nodeType: number;
    nodeValue: any;
    readonly ownerElement: Element;
    remove(): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    readonly attributes: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
declare class CharacterData extends Node {
    data: string;
    textContent: string;
    nodeValue: string;
    readonly length: number;
    substringData(offset: any, count: any): string;
    appendData(arg: string): void;
    insertData(offset: number, arg: string): void;
    deleteData(offset: number, count: number): void;
    replaceData(offset: number, count: number, arg: string): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    readonly attributes: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
/**
 * Creates an instance of Comment.
 */
declare class Comment extends CharacterData {
    constructor(document: Document, comment: string);
    readonly nodeName: string;
    readonly nodeType: number;
    data: string;
    textContent: string;
    nodeValue: string;
    readonly length: number;
    substringData(offset: any, count: any): string;
    appendData(arg: string): void;
    insertData(offset: number, arg: string): void;
    deleteData(offset: number, count: number): void;
    replaceData(offset: number, count: number, arg: string): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    readonly attributes: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
/**
 * Creates an instance of Document.
 */
declare class Document extends Node {
    /**
     * Indicates if the computer is online
     */
    readonly onLine: boolean;
    readonly nodeName: string;
    readonly nodeType: number;
    createElement(name: string): Element;
    createElementNS(ns: string, name: string): Element;
    createEvent(eventType: string): void;
    createAttribute(nodeName: string): Attr;
    createTextNode(text?: string): Text;
    createComment(comment?: string): Comment;
    createDocumentFragment(): DocumentFragment;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * This represents the nodes of a document subtree and a position within them
     * @param root - A Node representing the root node as specified when the TreeWalker was created
     * @param whatToShow - An unsigned long being a bitmask made of constants describing the types of Node that must be presented
     * @param filter - NodeFilter used to select the relevant nodes
     */
    createTreeWalker(root: Node, whatToShow: number, filter: NodeFilter): TreeWalker;
    readonly uxpContainer: UXPContainer;
    cloneNode(deep: boolean): Document;
    adoptNode(externalNode: Node, deep: boolean): Node;
    importNode(externalNode: Node, deep: boolean): Node;
    readonly activeElement: Node;
    readonly documentElement: Document;
    readonly head: HTMLHeadElement;
    readonly body: HTMLBodyElement;
    readonly clipboard: Clipboard;
    readonly styleSheets: StyleSheetList;
    querySelector(selector: string): Node;
    querySelectorAll(selector: string): NodeList;
    getElementsByClassName(name: string): NodeList;
    getElementsByTagName(name: string): NodeList;
    getElementById(id: string): Element;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    readonly attributes: any;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
declare type UXPContainer = any;
declare type StyleSheetList = any;
declare class DocumentFragment {
    /**
     * A number representing the number of children of the element.
     */
    readonly childElementCount: number;
    /**
     * Returns the first Element node within the DocumentFragment matching the selector string
     * @param selector - A string containing one or more CSS selectors separated by commas
     */
    querySelector(selector: string): Element;
    /**
     * Returns the list of nodes within the DocumentFragment matcthing the selectors
     * @param selector - A string containing one or more CSS selectors separated by commas
     */
    querySelectorAll(selector: string): NodeList;
    /**
     * inserts a set of Node objects or string objects after the last child of the document fragment
     * @param args - A set of Node or string objects to insert.
     */
    append(...args: any[]): void;
}
declare class Element extends Node {
    readonly nodeName: string;
    /**
     * A string representing the local part of the qualified name of the element
     */
    readonly localName: string;
    /**
     * A string indicating the element's tag name
     */
    readonly tagName: string;
    readonly nodeType: number;
    /**
     * Returns the namespace URI of the element, or null if the element is not in a namespace.
     */
    readonly namespaceURI: string;
    /**
     * Returns the property of the `Element` interface represents the element's identifier, reflecting the id global attribute.
     */
    id: string;
    tabIndex: number;
    className: string;
    readonly attributes: NamedNodeMap;
    readonly style: Style;
    readonly clientLeft: number;
    readonly clientTop: number;
    readonly clientWidth: number;
    readonly clientHeight: number;
    readonly offsetParent: Element;
    readonly offsetLeft: number;
    readonly offsetTop: number;
    readonly offsetWidth: number;
    readonly offsetHeight: number;
    scrollLeft: number;
    scrollTop: number;
    readonly scrollWidth: number;
    readonly scrollHeight: number;
    /**
     * Indicates if the element will focus automatically when it is loaded
     */
    autofocus: boolean;
    readonly uxpContainer: number;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Returns the open shadow root that is hosted by the element, or null if no open shadow root is present.
     */
    readonly shadowRoot: ShadowRoot;
    /**
     * Scrolls the element to the new x and y positions. If options object is used with behavior: "smooth" then the element is smoothly scrolled.
     * @param xOrOptions - either the new scrollLeft position or an options object.
     * @param y - the optional new scrollTop position.
     */
    scrollTo(xOrOptions: any, y: any): void;
    scrollIntoView(alignToTop: boolean): void;
    scrollIntoViewIfNeeded(): void;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     *
     * Attaches a shadow DOM tree to the specified element and returns a reference to its ShadowRoot.
     * @param init - An object which contains the fields : mode(open/closed) , delegatesFocus ,slotAssignment
     */
    attachShadow(init: any): ShadowRoot;
    focus(): void;
    blur(): void;
    disabled: boolean;
    /**
     * @param name - Name of the attribute whose value you want to get.
     */
    getAttribute(name: string): string;
    /**
     * @param name - Name of the attribute whose value is to be set
     * @param value - Value to assign to the attribute
     */
    setAttribute(name: string, value: string): void;
    removeAttribute(name: string): void;
    hasAttribute(name: string): boolean;
    /**
     * Returns a boolean value indicating whether the current element has any attributes or not.
     */
    hasAttributes(): boolean;
    /**
     * Returns the attribute names of the element as an Array of strings
     */
    getAttributeNames(): any[];
    getAttributeNode(name: string): any;
    setAttributeNode(newAttr: any): void;
    removeAttributeNode(oldAttr: any): void;
    click(): void;
    getElementsByClassName(name: string): NodeList;
    getElementsByTagName(name: string): NodeList;
    querySelector(selector: string): Element;
    querySelectorAll(selector: string): NodeList;
    /**
     * Sets pointer capture for the element. This implementation does not dispatch the `gotpointercapture` event on the element.
     * @example
     * // HTML
     * <style>
     *     div {
     *         width: 140px;
     *         height: 50px;
     *         display: flex;
     *         align-items: center;
     *         justify-content: center;
     *         background: #fbe;
     *         position: absolute;
     *     }
     * </style>
     * <div id="slider">SLIDE ME</div>
     *
     * // JS
     * function beginSliding(e) {
     *      slider.setPointerCapture(e.pointerId);
     *      slider.addEventListener("pointermove", slide);
     *  }
     *
     *  function stopSliding(e) {
     *      slider.releasePointerCapture(e.pointerId);
     *      slider.removeEventListener("pointermove", slide);
     *  }
     *
     *  function slide(e) {
     *      slider.style.left = e.clientX;
     *  }
     *
     *  const slider = document.getElementById("slider");
     *
     *  slider.addEventListener("pointerdown", beginSliding);
     *  slider.addEventListener("pointerup", stopSliding);
     * @param pointerId - The unique identifier of the pointer to be captured.
     */
    setPointerCapture(pointerId: number): void;
    /**
     * Releases pointer capture for the element. This implementation does not dispatch the `lostpointercapture` event on the element.
     * @param pointerId - The unique identifier of the pointer to be released.
     */
    releasePointerCapture(pointerId: number): void;
    /**
     * Checks if the element has pointer capture for the specified pointer.
     * @param pointerId - The unique identifier of the pointer to check.
     * @returns True if the element has pointer capture for the specified pointer, false otherwise.
     */
    hasPointerCapture(pointerId: number): boolean;
    getBoundingClientRect(): any;
    closest(selectorString: string): Element;
    matches(selectorString: string): boolean;
    innerHTML: any;
    outerHTML: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    slot: string;
    /**
     * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
     */
    readonly assignedSlot: HTMLSlotElement;
    insertAdjacentHTML(position: any, value: string): void;
    insertAdjacentElement(position: any, node: any): Node;
    insertAdjacentText(position: any, text: any): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
declare type Style = any;
declare class HTMLCollection extends NodeList {
    item(index: number): Node;
    readonly length: number;
    keys(): void;
    values(): void;
    entries(): void;
    forEach(callback: any): void;
}
/**
 * Creates an instance of NamedNodeMap.
 */
declare class NamedNodeMap {
    constructor(node: Node);
    getNamedItem(name: any): any;
    setNamedItem(attr: any): void;
    removeNamedItem(name: any): void;
    item(index: any): any;
    readonly length: number;
}
declare class Node extends EventTarget {
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    textContent: string;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    readonly attributes: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    static ELEMENT_NODE: any;
    static ATTRIBUTE_NODE: any;
    static TEXT_NODE: any;
    static DOCUMENT_NODE: any;
    static DOCUMENT_FRAGMENT_NODE: any;
    static COMMENT_NODE: any;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
declare class NodeFilter {}
/**
 * Creates an instance of NodeList.
 */
declare class NodeList {
    constructor(staticList: any, updater: any);
    item(index: number): Node;
    readonly length: number;
    keys(): void;
    values(): void;
    entries(): void;
    forEach(callback: any): void;
}
/**
 * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
 */
declare class ShadowRoot {
    /**
     * Returns the mode of the ShadowRoot — either open or closed. This defines whether or not the shadow root's internal features are accessible from JavaScript.
     */
    readonly mode: Element;
    /**
     * Returns a reference to the DOM element the ShadowRoot is attached to.
     */
    readonly host: Element;
    /**
     * Returns a reference to the DOM tree inside the ShadowRoot
     */
    innerHTML: string;
    /**
     * Returns the element within the shadow tree that has focus
     */
    readonly activeElement: Element;
    /**
     * Duplicate of the node on which this method was called. Its parameter controls if the subtree contained in a node is also cloned or not
     * @param deep - Optional param to clone whole sub tree(True) or only node (False)
     */
    cloneNode(deep: boolean): void;
}
/**
 * Creates an instance of Text.
 */
declare class Text extends CharacterData {
    constructor(document: any, textContent: any);
    readonly nodeName: string;
    readonly nodeType: number;
    nodeValue: string;
    data: string;
    textContent: string;
    readonly length: number;
    substringData(offset: any, count: any): string;
    appendData(arg: string): void;
    insertData(offset: number, arg: string): void;
    deleteData(offset: number, count: number): void;
    replaceData(offset: number, count: number, arg: string): void;
    readonly contentEditable: any;
    readonly isConnected: boolean;
    readonly parentNode: Node;
    readonly parentElement: Element;
    readonly firstChild: Node;
    readonly lastChild: Node;
    readonly previousSibling: Node;
    readonly nextSibling: Node;
    readonly firstElementChild: Node;
    readonly lastElementChild: Node;
    readonly previousElementSibling: Node;
    readonly nextElementSibling: Node;
    hasChildNodes(): boolean;
    readonly childNodes: NodeList;
    readonly children: HTMLCollection;
    readonly ownerDocument: any;
    readonly attributes: any;
    cloneNode(deep: boolean): Node;
    appendChild(child: Node): Node;
    insertBefore(child: Node, before: Node): Node;
    replaceChild(newChild: Node, oldChild: Node): Node;
    removeChild(child: Node): Node;
    remove(): void;
    before(...nodes: Node[][]): void;
    after(...nodes: Node[][]): void;
    replaceWith(...nodes: Node[][]): void;
    contains(node: Node): void;
    /**
     * @returns root node
     */
    getRootNode(options: any): Node;
    addEventListener(eventName: any, callback: any, capture?: boolean): void;
    removeEventListener(eventName: any, callback: any, capture?: boolean): void;
    dispatchEvent(event: any): void;
}
/**
 * [ This feature is behind a feature flag. You must turn on `enableSWCSupport` in the featureFlags section of plugin manifest to use the same ]
 */
declare class TreeWalker {
    readonly root: Node;
    readonly whatToShow: number;
    readonly filter: NodeFilter;
    parentNode(): Node | null;
    firstChild(): Node | null;
    lastChild(): Node | null;
    previousSibling(): Node | null;
    nextSibling(): Node | null;
    previousNode(): Node | null;
    nextNode(): Node | null;
}
/**
 * @returns user opt-in information for logging analytics data
 */
declare function get(): boolean;
/**
 * Plugin object received in the PluginManager.getPlugins list,
 * used for IPC(Inter Plugin Communication)
 */
declare class Plugin {
    /**
     * Get plugin id
     */
    readonly id: string;
    /**
     * Get plugin version
     */
    readonly version: string;
    /**
     * Get plugin name
     */
    name: string;
    /**
     * Get plugin manifest
     */
    readonly manifest: any;
    /**
     * Get plugin enabled/disabled state
     */
    readonly enabled: boolean;
    /**
     * Show panel with the given ID. This api may be routed to the host app which can chose to disallow it.
     * Used for commmunicating with other plugins (IPC : Inter Plugin Communication)
     * Note: Currently there is no API to hide a panel, panels can be shown but can not be hidden.
     * @param panelId - id of the panel to be shown
     * @returns `Promise<void>|string` Resolves with a void if success else returns a rejection message
     */
    showPanel(panelId: string): any;
    /**
     * Invoke command with given ID. This api may be routed to the host app which can chose to disallow it.
     * Used for commmunicating with other plugins (IPC : Inter Plugin Communication)
     * @param commandId - id of the command to be invoked
     * @param params - arguments to be passed to the command entrypoint as defined in the plugin
     * @returns `Promise<void>`
     */
    invokeCommand(commandId: string, ...params: any[]): any;
}
/**
 * Thrown whenever a call to `entrypoints.setup` fails or is executed more than once.
 */
declare class EntryPointsError {}
declare class UxpCommandInfo {
    /**
     * Get command id
     */
    id: any;
    /**
     * Get command label, localized string
     */
    label: any;
    /**
     * Get command description, localized string
     */
    description: any;
    /**
     * Get command shortcut
     */
    shortcut: any;
    /**
     * Get isManifestCommand
     */
    isManifestCommand: any;
    /**
     * Get command options parameter
     */
    commandOptions: any;
}
/**
 * Class describing a single menu item of a panel
 */
declare class UxpMenuItem {
    /**
     * Get menu item id
     */
    readonly id: string;
    /**
     * Get menu item label, localized string
     */
    label: any;
    /**
     * Get menu item enable state
     */
    enabled: any;
    /**
     * Get menu item checked state
     */
    checked: any;
    /**
     * Get menu submenu
     */
    submenu: any;
    /**
     * Get menu parent.
     */
    parent: any;
    /**
     * Remove the menu item
     */
    remove(): void;
}
/**
 * Class describing the menu of a panel.
 */
declare class UxpMenuItems {
    /**
     * Get number of menu items
     */
    readonly size: number;
    /**
     * Get menu item with specified id
     */
    getItem(id: string): UxpMenuItem;
    /**
     * Get menu item at specified index
     */
    getItemAt(index: number): UxpMenuItem;
    /**
     * Inserts/replaces the menu item at the specified index with the new menu item.
     * index < size of menuItems array : replaces the existing menu item
     * index = size of menuItems array : Inserts menu item at end
     * index > size of menuItems array : throws invalid index exception
     * @param newItem - see 'entrypoints.setup' api for menu item description.
     */
    insertAt(index: number, newItem: any): void;
    /**
     * Removes menu item from specified index.
     */
    removeAt(index: number): void;
}
/**
 * Class describing a panel of the plugin.
 */
declare class UxpPanelInfo {
    /**
     * Get panel id
     */
    readonly id: string;
    /**
     * Get panel label, localized string
     */
    readonly label: string;
    /**
     * Get panel description, localized string
     */
    readonly description: string;
    /**
     * Get panel shortcut
     */
    readonly shortcut: any;
    /**
     * Get panel title, localized string
     */
    readonly title: string;
    /**
     * Get panel icons
     */
    readonly icons: any;
    /**
     * Get panel minimum size
     */
    readonly minimumSize: any;
    /**
     * Get panel maximum size
     */
    readonly maximumSize: any;
    /**
     * Get panel preferred docked size
     */
    readonly preferredDockedSize: any;
    /**
     * Get panel preferred floating size
     */
    readonly preferredFloatingSize: any;
    /**
     * Get panel menu items
     */
    readonly menuItems: UxpMenuItems;
}
declare class UxpPluginInfo {
    /**
     * Get plugin id
     */
    id: any;
    /**
     * Get plugin version
     */
    version: any;
    /**
     * Get plugin name
     */
    name: any;
    /**
     * Get plugin manifest
     */
    manifest: any;
    /**
     * Check if the plugin is First Party Plugin
     */
    isFirstParty(): boolean;
}
declare type ExecutionContext = any;
/**
 * Host defines the contract on what can be returned from scripts and its format.
 */
declare type HostDefinition = any;
declare var crypto: Crypto;
declare var localStorage: LocalStorage;
declare var sessionStorage: SessionStorage;
declare var path: Path;
declare module 'fs' {
    /**
     * UXP Provides Node.js style file system API, FSAPI.
     * Unlike [Entry]{@link ./uxp/Persistent%20File%20Storage/Entry/} based [File]{@link ./uxp/Persistent%20File%20Storage/File/} or [Folder]{@link ./uxp/Persistent%20File%20Storage/Folder/} classes,
     * these methods can directly access a local file or folder with path or file descriptor.
     * The starting point of a path in the native filesystem depends on the scheme.
     * UXP supports plugin-specific storage schemes, such as "plugin:", "plugin-data:",
     * and "plugin-temp:", as well as a native "file:" scheme for the path parameter.<br></br>
     * Note:<br></br>
     * 1. If there are no schemes defined for the path parameter of FSAPI methods, it considers to have "file:" scheme for the path.<br></br>
     * 2. [UWP]{@link https://learn.microsoft.com/en-us/windows/uwp/get-started/universal-application-platform-guide}(Universal Windows Platform)
     * has the strict [File access permissions]{@link https://learn.microsoft.com/en-us/windows/uwp/files/file-access-permissions},
     * and UXP FSAPI may have access issues with anonymous filepaths. So, XD does not support this feature for compatibility across platforms.<br></br>
     * 3. The native layer of UXP FSAPI is based on [libUV]{@link https://libuv.org/} except UWP powered features, such as FilePicker and Drag&Drop on Win10 XD.<br></br>
     */
    class fs {
        /**
         * Reads data from the path asynchronously.
         * The file format can be specified with the encoding options.
         * If an encoding is not supplied, the file is assumed to be a binary format.
         * @example
         * const data = await fs.readFile("plugin-data:/binaryFile.obj");
         * @example
         * const text = await fs.readFile("plugin-data:/textFile.txt", {encoding: "utf-8"});
         * @param path - path where the file to read is located
         * @param [options.encoding] - the encoding of the file can be "utf-8", "utf-16be" or "utf-16le"
         * @param callback - if not provided, this function will return Promise object
         * @returns `Promise<string|ArrayBuffer>` - the contents of the file
         */
        readFile(
            path: string,
            options: {
                encoding?: string;
            },
            callback: (...params: any[]) => any,
        ): any;
        /**
         * Reads data from the path synchronously.
         * The file format can be specified with the encoding options.
         * If an encoding is not supplied, the file is assumed to be a binary format.
         * @example
         * const data = fs.readFileSync("plugin-data:/binaryFile.obj");
         * @example
         * const text = fs.readFileSync("plugin-data:/textFile.txt", {encoding: "utf-8"});
         * @param path - path where the file to read is located
         * @param [options.encoding] - the encoding of the file can be "utf-8", "utf-16be" or "utf-16le"
         * @returns the contents of the file
         */
        readFileSync(
            path: string,
            options: {
                encoding?: string;
            },
        ): string | ArrayBuffer;
        /**
         * Writes data to the path asynchronously, appending if desired.
         * The format of the file is controlled via the encoding option, and defaults to a binary format.
         * @example
         * const bufLen = await fs.writeFile("plugin-data:/binaryFile.obj", new Uint8Array([1, 2, 3]));
         * @example
         * const strLen = await fs.writeFile("plugin-data:/textFile.txt", "It was a dark and stormy night.\n", {encoding: "utf-8"});
         * @param path - path where the file to write is located
         * @param data - the data to write to the file
         * @param [options.flag = w] - see [file-system-flags]{@link https://nodejs.org/api/fs.html#file-system-flags} in Node.js
         * @param [options.mode = 0o666] - see [File modes]{@link https://nodejs.org/api/fs.html#file-modes} in Node.js
         * @param [options.encoding] - the encoding of the file can be "utf-8", "utf-16be" or "utf-16le"
         * @param callback - if not provided, this function will return Promise object
         * @returns `Promise<number>` - the length of contents written to the file
         */
        writeFile(
            path: string,
            data: string | ArrayBuffer | ArrayBufferView,
            options: {
                flag?: number | string;
                mode?: number | string;
                encoding?: string;
            },
            callback: (...params: any[]) => any,
        ): any;
        /**
         * Writes data to a path synchronously, appending if desired.
         * The format of the file is controlled via the encoding option, and defaults to a binary format.
         * @example
         * const bufLen = fs.writeFileSync("plugin-data:/binaryFile.obj", new Uint8Array([1, 2, 3]));
         * @example
         * const strLen = fs.writeFileSync("plugin-data:/textFile.txt", "It was a dark and stormy night.\n", {encoding: "utf-8"});
         * @param path - path where the file to write is located
         * @param data - the data to write to the file
         * @param [options.flag = w] - see [file-system-flags]{@link https://nodejs.org/api/fs.html#file-system-flags} in Node.js
         * @param [options.mode = 0o666] - see [File modes]{@link https://nodejs.org/api/fs.html#file-modes} in Node.js
         * @param [options.encoding] - the encoding of the file can be "utf-8", "utf-16be" or "utf-16le"
         * @returns the length of contents written to the file
         */
        writeFileSync(
            path: string,
            data: string | ArrayBuffer | ArrayBufferView,
            options: {
                flag?: number | string;
                mode?: number | string;
                encoding?: string;
            },
        ): number;
        /**
         * Opens or a creates a file asynchronously
         * @example
         * const fd = await fs.open("plugin-data:/fileToRead.txt", "r");
         * @param path - path where to open a file
         * @param [flag = r] - see [file-system-flags]{@link https://nodejs.org/api/fs.html#file-system-flags} in Node.js
         * @param [mode = 0o666] - see [File modes]{@link https://nodejs.org/api/fs.html#file-modes} in Node.js
         * @param [callback] - if not provided, this function will return Promise object
         * @returns `Promise<number>` - fd(file descriptor)
         */
        open(path: string, flag?: number | string, mode?: number | string, callback?: (...params: any[]) => any): any;
        /**
         * Closes a file descriptor asynchronously
         * @example
         * await fs.close(fd);
         * @param fd - file descriptor of the file to close
         * @param callback - if not provided, this function will return Promise object
         * @returns 0 if succeeded, otherwise throws an Error
         */
        close(fd: number, callback: (...params: any[]) => any): number;
        /**
         * Reads data in chunks from the file it refers to the file descriptor
         * @example
         * const fileSize = 1024;
         * const buffer = new ArrayBuffer(fileSize);
         * const fd = await fs.open("plugin-data:/fileToRead.txt", "r");
         * let bytesReadInTotal = 0;
         * while (bytesReadInTotal < fileSize) {
         *     const { bytesRead } = await fs.read(fd, buffer, bytesReadInTotal, 128, -1);
         *     if (!bytesRead) {
         *         break;
         *     }
         *     bytesReadInTotal += bytesRead;
         * }
         * await fs.close(fd);
         * @param fd - a file descriptor obtained from fs.open
         * @param buffer - the buffer where read bytes are written to
         * @param offset - the offset to the buffer where read bytes are written from
         * @param length - the length to read
         * @param position - the position of the file to read from.
         * if -1, the current file position to read from.
         * when the bytes are read, the current file position advances by size of the read bytes.
         * if the value is greater than or equal to 0, it specifies a file position to read from.
         * after the bytes are read, a current file position stayed the same
         * @param callback - if not provided, this function will return Promise object
         * @returns { bytesRead: number, buffer: ArrayBuffer }
         */
        read(
            fd: number,
            buffer: ArrayBuffer,
            offset: number,
            length: number,
            position: number,
            callback: (...params: any[]) => any,
        ): Promise<object>;
        /**
         * Writes data in chunks to the file it refers to the file descriptor
         * @example
         * const fd = await fs.open("plugin-data:/fileToWrite.txt", "w+");
         * const data = "It was a dark and stormy night.\n";
         * const srcBuffer = new TextEncoder().encode(data).buffer;
         * const { bytesWritten } = await fs.write(fd, srcBuffer, 0, data.length, 0);
         * await fs.close(fd);
         * @param fd - the file descriptor obtained from fs.open
         * @param buffer - the buffer where the data to write with
         * @param offset - the offset of the buffer where write bytes start from
         * @param length - the length to write
         * @param position - the position of the file to write from.
         * if -1,writing will start from the current file position.
         * when the bytes are written, the current file position advances by size of the written bytes.
         * if the value is greater than or equal to 0, it specifies a file position to write from.
         * After writing, it will not change the file position
         * @param callback - if not provided, this function will return Promise object
         * @returns { bytesWritten, buffer }
         */
        write(
            fd: number,
            buffer: ArrayBuffer,
            offset: number,
            length: number,
            position: number,
            callback: (...params: any[]) => any,
        ): Promise<object>;
        /**
         * Gets information asynchronously from a file or a folder of the path
         * @example
         * const stats = await fs.lstat("plugin-data:/textFile.txt");
         * const isFile = stats.isFile();
         * @param path - path where the file to get its information is located
         * @param callback - if not provided, this function will return Promise object
         * @returns `Promise<Object>` - see [Stats]{@link https://nodejs.org/api/fs.html#class-fsstats} class in Node.js
         * Note: Some methods or properties may not be supportive for the return object due to the platform limitation
         */
        lstat(path: string, callback: (...params: any[]) => any): any;
        /**
         * Gets information synchronously from a file or a folder of the path
         * @example
         * const stats = fs.lstatSync("plugin-data:/textFile.txt");
         * const birthTime = stats.birthtime;
         * @param path - path where the file to get its information is located
         * @returns see [Stats]{@link https://nodejs.org/api/fs.html#class-fsstats} class in Node.js
         * Note: Some methods or properties may not be supportive for the return object due to the platform limitation
         */
        lstatSync(path: string): any;
        /**
         * Renames or moves, if required, the file from the oldPath to the newPath
         * @example
         * fs.rename("plugin-data:/oldName.txt", "plugin-temp:/newName.txt");
         * @param oldPath - path where the old file name to change is located
         * @param newPath - path where the new file name will be
         * @param callback - if not provided, this function will return Promise object
         * @returns `Promise<number>` - 0 if succeeded, otherwise throws an Error
         */
        rename(oldPath: string, newPath: string, callback: (...params: any[]) => any): any;
        /**
         * Copies a file or a folder from the source path to the destination path
         * @example
         * const data = fs.copyFile("plugin-data:/copyFrom.txt", "plugin-temp:/copyTo.txt");
         * @param srcPath - path where the source file to copy is located
         * @param destPath - path where the source file will be copied to
         * @param flags - see flags in [uv_fs_copyfile]{@link https://docs.libuv.org/en/v1.x/fs.html}
         * @param callback - if not provided, this function will return Promise object
         * @returns `Promise<number>` - 0 if succeeded, otherwise throws an Error
         */
        copyFile(srcPath: string, destPath: string, flags: number, callback: (...params: any[]) => any): any;
        /**
         * Deletes a name with the file it refers to asynchronously
         * @example
         * await fs.unlink("plugin-data:/fileToDelete.txt");
         * @param path - path where the file to delete is located
         * @param callback - if not provided, this function will return Promise object
         * @returns `Promise<number>` - 0 if succeeded, otherwise throws an Error
         */
        unlink(path: string, callback: (...params: any[]) => any): any;
        /**
         * Creates a directory of the path asynchronously
         * @example
         * await fs.mkdir("plugin-data:/newDir");
         * @param path - path where to create the directory
         * @param [options.recursive = false] - whether parents folders should be created
         * @param callback - if not provided, this function will return Promise object
         * @returns `Promise<number>` - 0 if succeeded, otherwise throws an Error
         */
        mkdir(
            path: string,
            options: {
                recursive?: boolean;
            },
            callback: (...params: any[]) => any,
        ): any;
        /**
         * Removes a directory asynchronously
         * @example
         * await fs.rmdir("plugin-data:/dirToRemove");
         * @param path - path where to remove the directory
         * @param callback - if not provided, this function will return Promise object
         * @returns `Promise<number>` - 0 if succeeded, otherwise throws an Error
         */
        rmdir(path: string, callback: (...params: any[]) => any): any;
        /**
         * Reads a directory to list the containing files and directories asynchronously
         * @example
         * const paths = await fs.readdir("plugin-data:/dirToRead");
         * @param path - path where to read the directory
         * @param callback - if not provided, this function will return Promise object
         * @returns `Promise<Array<string>>` - string array of containing files and directories in the path
         */
        readdir(path: string, callback: (...params: any[]) => any): any;
        /**
         * Reads a directory to list the containing files and directories synchronously
         * @example
         * const paths = fs.readdirSync("plugin-data:/dirToRead");
         * @param path - path where to read the directory
         * @returns string array of containing files and directories in the path
         */
        readdirSync(path: string): string[];
    }
    /* tslint:disable-next-line */
    export = new fs();
}
declare module 'os' {
    class OS {
        /**
         * Gets the platform we are running on (eg. "win32", "win10", "darwin")
         * @returns the string representing the platform
         */
        public platform(): string;
        /**
         * Gets the release number of the os (eg. "10.0.1.1032")
         * @returns the string representing the release
         */
        public release(): string;
        /**
         * Gets the platform architecture we are running on (eg. "x32, x64, x86_64 etc")
         * @returns the string representing the architecture
         */
        public arch(): string;
        /**
         * Gets the platform cpu information we are running on (eg. "{'Intel(R) Core(TM) i9-8950HK CPU @ 2.90GHz', 2900}")
         * @returns the array of objects containing information about each logical CPU core
         * Currently only model and speed properties are supported. times property is not supported.
         * Access to CPU information, such as model string and frequency, is limited on UWP.
         * "ARM based architecture" or "X86 based architecture" is returned as a 'model' value on UWP.
         * 0 is returned as a 'speed' value on UWP.
         */
        public cpus(): any[];
        /**
         * Gets the total amount of system memory in bytes
         * @returns the total amount of system memory in bytes as an integer
         */
        public totalmem(): number;
        /**
         * Gets the total amount of free system memory in bytes
         * @returns the total amount of free system memory in bytes as an integer
         */
        public freemem(): number;
        /**
         * Gets the home directory path of the user
         * @returns the home directory path of the user
         */
        public homedir(): string;
    }
    /* tslint:disable-next-line */
    export = new OS();
}
declare module 'uxp' {
    /**
     * To get an instance: `require("uxp").shell`<br/>
     * These APIs require UXP Manifest v5 configurations. see [Launch Process]{@link https://developer.adobe.com/photoshop/uxp/2022/guides/uxp_guide/uxp-misc/manifest-v5/#launch-process}
     */
    class Shell {
        /**
         * Opens the given file or folder path in the system default application.<br/>
         * NOTE: UWP can access only files in the UWP App sandbox. see [File access permissions in UWP]{@link https://docs.microsoft.com/en-us/windows/uwp/files/file-access-permissions}
         * @example
         * // for MacOS
         * shell.openPath("/Users/[username]/Downloads");
         * shell.openPath("/Users/[username]/sample.txt");
         *
         * // for Windows
         * shell.openPath("C:\Users\[username]\Downloads");
         * shell.openPath("C:\Users\[username]\AppData\Local\...\sample.txt");
         * @param path - c
         * @param developerText - Information from the plugin developer to be displayed on the user consent dialog. Message should be localised in current host UI locale.
         * @returns A promise that resolves with "" if succeeded or a string containing the error message if failed.
         */
        openPath(path: string, developerText: string): Promise<string>;
        /**
         * Opens the url in the dedicated system applications for the scheme.<br/>
         * NOTE: file scheme is not allowed for openExternal. Use openPath for those cases.
         * @example
         * shell.openExternal("https://www.adobe.com/");
         * shell.openExternal("https://www.adobe.com/", "develop message for the user consent dialog");
         * @example
         * shell.openExternal("maps://?address=345+Park+Ave+San+Jose"); // for MacOS
         * shell.openExternal("bingmaps:?q=345+Park+Ave+San+Jose, +95110"); // for Windows
         * @param developerText - Information from the plugin developer to be dispayed on the user consent dialog. Message should be localised in current host UI locale.
         * @returns A promise that resolves with "" if succeeded or a string containing the error message if failed.
         */
        openExternal(url: string, developerText: string): Promise<string>;
    }
    export const shell: Shell;
}
declare module 'uxp' {
    /**
     * To get an instance: `require("uxp").entrypoints`
     */
    class EntryPoints {
        /**
         * API for plugin to add handlers and menu items for entrypoints defined in manifest.
         * This API can only be called once and there after other apis can be used to modify menu items.
         * The function throws in case of any error in entrypoints data or if its called more than once.
         * @example
         * const { entrypoints } = require("uxp");
         *  entrypoints.setup({
         *      plugin: {
         *          create() {..},
         *          destroy() {..}
         *      },
         *      panels: {
         *          "panel1": {
         *              create() {..},
         *              show() {..},
         *              hide() {..},
         *              destroy() {..},
         *              invokeMenu() {..},
         *              update() {..}, // customEntrypoint example
         *              validatNode() {..} // customEntrypoint example
         *               menuItems: [
         *                   {
         *                       id: "signIn",
         *                       label: "Sign In...",
         *                       enabled: false,
         *                       checked: false
         *                       submenu: [
         *                           { id: "submenu1", label: "submenu1", enabled: false, checked: false},
         *                           { "submenu2" }
         *                       ]
         *                   },
         *                   "-",  // separator.
         *                   "Sign out",  // by default enabled, and the id will be same with the label.
         *               ]
         *           },
         *           "panel2": {..}
         *       },
         *       commands: {
         *           "command1": {
         *               run() {..},
         *               cancel() {..}
         *           },
         *           "command2": function(){..}
         *       }
         *   });
         * @param entrypoints - it consists of mainly three objects - 'plugin', 'panels' and 'commands'.
         * @param entrypoints.plugin - This can be an object or a function. If this is a function, it is
         *                                           assumed as the 'create' handler (described below).
         * @param entrypoints.plugin.create - This is called after plugin is loaded. 'this' can be used to access
         *                                         UxpPluginInfo object. If 'plugin' object is defined, 'create' must be defined.
         *                                         To signal failure, throw an exception.
         * @param entrypoints.plugin.destroy - This is called before plugin is unloaded. 'this' can be used to access
         *                                          UxpPluginInfo object.
         * @param entrypoints.panels - This contains a list of key-value pairs where each key is a panel id (string) and
         *                               value is the data for the panel whose type can be object/function.
         *                               If a function, it is assumed to be the 'show' method (described below).
         *                               If an object, it can contain following properties but it is must to
         *                               define either of 'create' or 'show'.
         * @param entrypoints.panels.create - This is called when a panel is created. 'this' can be used to access
         *                                         UxpPanelInfo object. This function can return a promise.
         *                                         To signal failure, throw an exception or return a rejected promise.
         *                                         This has a default Timeout of 300 MSec from manifest v5 onwards.
         *                              Parameters :
         *                                          create(event) {}, till Manifest Version V4
         *                                          create(rootNode) {}, from v5 onwards
         * @param entrypoints.panels.show - This is called when a panel is shown. 'this' can be used to access
         *                                         UxpPanelInfo object. This function can return a promise.
         *                                         To signal failure, throw an exception or return a rejected promise.
         *                                         This has a default Timeout of 300 MSec from manifest v5 onwards.
         *                              Parameters :
         *                                          show(event) {}, till Manifest Version V4
         *                                          show(rootNode, data) {}, from v5 onwards
         * @param entrypoints.panels.hide - This is called when a panel is hidden. 'this' can be used to access
         *                                       UxpPanelInfo object. This function can return a promise.
         *                                       To signal failure, throw an exception or return a rejected promise.
         *                                       This has a default Timeout of 300 MSec from manifest v5 onwards.
         *                              Parameters :
         *                                          hide(event) {}, till Manifest Version V4
         *                                          hide(rootNode, data) {}, from v5 onwards
         * @param entrypoints.panels.destroy - This is called when a panel is going to be destroyed. 'this' can be
         *                                          used to access UxpPanelInfo object. To signal failure, throw an exception.
         *                              Parameters :
         *                                          destroy(event) {}, till Manifest Version V4
         *                                          destroy(rootNode) {}, from v5 onwards
         * @param entrypoints.panels.invokeMenu - This is called when a panel menu item is invoked.
         *                                             Menu id is passed as the first argument to this function. 'this' can be
         *                                             used to access UxpPanelInfo object. This function can return a promise.
         *                                             To signal failure, throw an exception or return a rejected promise.
         * @param entrypoints.panels.customEntrypoint - Apart from the above default uxp panel entrypoints, Host Apps can define
         *                                                   additional entrypoints to support custon lifecycle events. Details of the entrypoint like
         *                                                   name, parameters passed, return type, etc. are defined by the host app.
         *
         *                                                   Currently, Photoshop hasn't defined any custom entrypoints.
         *                                                   Xd has defined one custom entrypoint `update`.
         *                                                        update entrypoint in XD is called whenever panel UI content should be updated.
         *                                                        Parameters : update(scenegraph.selection, scenegraph.update)
         *                                                        https://developer.adobe.com/xd/uxp/develop/reference/ui/panels/update/
         * @param entrypoints.panels.menuItems - array of menu items. Each menu item can be a string or an object with
         *                                         properties defined below. Menu items are displayed in the
         *                                         same order as specified in this array. For specifying a separator,
         *                                         a value of "-" or menu item with label "-" can be used at required place in the array.
         * @param entrypoints.panels.menuItems.id - identifier of the menu item.
         * @param entrypoints.panels.menuItems.label - display text for the menu item. Should be localized. If label is not
         *                                              specified, id is used as label.
         * @param entrypoints.panels.menuItems.enabled - enabled/disabled state for the menu item. Default - true.
         * @param entrypoints.panels.menuItems.checked - checked state for the menu item. Default - false.
         * @param entrypoints.panels.menuItems.submenu - submenu for this menu item again as an array of 'menuItems'.
         *                                               'id' of submenus should still be unique across panel.
         * @param entrypoints.commands - This object contains a list of key-value pairs where each key is the command id and
         *                                 value is command's data whose type can be an object or function.
         *                                 If a function, it is assumed to be 'run' method (described below).
         *                                 If an objet, it can contain following properties but 'run' is must to specify.
         * @param entrypoints.commands.run - This is called when the command is invoked via menu entry. 'this' can be used
         *                                      to access UxpCommandInfo object. This function can return a promise.
         *                                      To signal failure, throw an exception or return a rejected promise.
         *                              Parameters :
         *                                          run(event) {}, till Manifest Version V4
         *                                          run(executionContext, ...arguments) {}, from v5 onwards
         * @param entrypoints.commands.cancel - For future use.
         */
        setup(entrypoints: {
            plugin: {
                create: (...params: any[]) => any;
                destroy: (...params: any[]) => any;
            };
            panels: {
                create: (...params: any[]) => any;
                show: (...params: any[]) => any;
                hide: (...params: any[]) => any;
                destroy: (...params: any[]) => any;
                invokeMenu: (...params: any[]) => any;
                customEntrypoint: (...params: any[]) => any;
                menuItems: {
                    id: string;
                    label: string;
                    enabled: boolean;
                    checked: boolean;
                    submenu: any[];
                };
            }[];
            commands: {
                run: (...params: any[]) => any;
                cancel: (...params: any[]) => any;
            }[];
        }): void;
        /**
         * Get panel with specified id
         * @param id - panel id
         * @returns - panel object for a valid id
         *                           null for an invalid id
         */
        getPanel(id: string): UxpPanelInfo;
        /**
         * Get command with specified id
         * @param id - command id
         * @returns - command object for a valid id
         *                             null for an invalid id
         */
        getCommand(id: string): UxpCommandInfo;
    }
    export const entrypoints: EntryPoints;
}
declare module 'uxp' {
    /**
     * To get the list of plugins in the host, used during IPC(Inter Plugin Communication)
     * To get an instance: `require("uxp").pluginManager`
     */
    class PluginManager {
        /**
         * To get the current list of plugins in Plugin Manager.
         */
        plugins: any;
    }
    export const pluginManager: PluginManager;
}
declare module 'uxp' {
    /**
     * Script module, which contains essential properties and methods while writing scripts.
     */
    class Script {
        /**
         * To get the arguments(if any) passed by host app, while invoking the script.
         */
        readonly args: any[];
        /**
         * ExecutionContext passed by the host app, while invoking the script.
         */
        readonly executionContext: ExecutionContext;
        /**
         * To send the execution result back to the host (if required).
         * @param result - Host defines the contract on what can be returned from scripts and its format.
         */
        setResult(result: HostDefinition): void;
    }
    export const script: Script;
}
declare module 'uxp' {
    /**
     * SecureStorage provides a protected storage which can be used to store sensitive data
     * per plugin. SecureStorage takes a key-value pair and encrypts the value before being
     * stored. After encryption, it stores the key and the encrypted value pair. When the value
     * is requested with an associated key, it's retrieved after being decrypted. Please note
     * that the key is not encrypted thus it's not protected by the cryptographic operation.
     *
     * Caveats for SecureStorage are as follows:
     * 1. SecureStorage is not an appropriate storage for sensitive data which wants to keep
     * secret from the current user. SecureStorage is protected under the current user's
     * account credential. It means the encrypted data can be at risk of being decrypted
     * with the current user's privilege.
     * 2. Data in SecureStorage can be lost for various reasons. For an example, the user
     * could uninstall the host application and delete the secure storage. Or, the cryptographic
     * information used by the secure storage could be damaged by the user accidentally, and
     * it will result in loss of data without the secure storage being removed. SecureStorage
     * should be regarded as a cache rather than a persistent storage. Data in SecureStorage
     * should be able to be regenerated from plugins after the time of loss.
     */
    class SecureStorage {
        /**
         * Store a key and value pair after the value is encrypted in a secure storage
         * @param key - : a key to set value
         * @param value - : a value for a key.
         * @returns : resolved when the value is stored. rejected when the value is empty or not stored.
         */
        setItem(key: string, value: string | ArrayBuffer | TypedArray): Promise<void>;
        /**
         * Retrieve a value associated with a provided key after the value is being decrypted from a secure storage.
         * @param key - : a key to get value
         * @returns : a value as buffer
         */
        getItem(key: string): Promise<Uint8Array>;
        /**
         * Remove a value associated with a provided key
         * @param key - : a key to remove value
         * @returns : resolved when the value associated with the key is removed. rejected when the value is neither removed nor found.
         */
        removeItem(key: string): Promise<void>;
        /**
         * Returns a key which is stored at the given index
         * @returns Returns the key which is stored at the given index.
         */
        key(): number;
        /**
         * Returns number of items stored in the secure storage.
         */
        readonly length: any;
        /**
         * Clear all values in a secure storage.
         * @returns : resolved when all the items are cleared. rejected when there is no item to clear or clear failed.
         */
        clear(): Promise<void>;
    }
    export const secureStorage: SecureStorage;
}
declare module 'uxp' {
    /**
     * Version information. To get an instance: require("uxp").versions
     */
    class Versions {
        /**
         * Returns the version of UXP. For example, uxp-6.0.0
         */
        uxp: any;
        /**
         * Returns the version of the plugin. This matches the version as specified in your plugin's manifest.
         */
        plugin: any;
    }
    export const versions: Versions;
}
declare module 'uxp' {
    /**
     * Includes useful information about the operating environment the plugin finds itself executing in.
     * `require("uxp").host`
     */
    class Host {
        name: any;
        version: any;
        uiLocale: any;
    }
    export const host: Host;
}
