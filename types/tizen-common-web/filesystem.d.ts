import { ErrorCallback, SuccessCallback } from './tizen';
/**
 * String, which points to file or directory.
 * In methods available since Tizen 5.0, checking or accessing files or directories may be granted only through a valid path.
 * Paths may contain one of the supported virtual roots. The valid path pattern is explained on the top of the page.
 * @since 5.0
 */
export type Path = string;
/**
 * The dictionary that defines attributes to filter the items returned by the `listDirectory()` method (or deprecated `listFiles()`).
 * When this dictionary is passed to a method, the result-set of the method will only contain file item entries that match
 * the attribute values of the filter.
 * A file item only matches the `FileFilter` object if all of the defined filter's attribute values match all of the file item's attributes
 * (only matching values other than ***undefined*** or ***null***). This is similar to a SQL's "AND" operation.
 * An attribute of the file entry matches the `FileFilter` attribute value in accordance with the
 * following rules:
 *
 *   - For `FileFilter` attributes of type DOMString, an entry matches this value only if its corresponding attribute is an exact match. If the filter contains U+0025 "PERCENT SIGN" it is interpreted as a wildcard character and "%" matches any string of any length, including no length. If wildcards are used, the behavior is similar to the LIKE condition in SQL. To specify that a "PERCENT SIGN" character is to be considered literally instead of interpreting it as a wildcard, developers can escape it with the backslash character (\\). Please, remember that the backslash character has to be escaped itself, to not to be removed from the string - proper escaping of the "PERCENT SIGN" in JavaScript string requires preceding it with double backslash ("\\\\%").
 * The matching is not case sensitive, such as "FOO" matches a "foo" or an "f%" filter.
 *   - For File entry attributes of type Date, attributes start and end are included to allow filtering of File entries between two supplied dates. If either or both of these attributes are specified, the following rules apply:
 * A) If both start and end dates are specified (that is, other than ***null***), a File entry matches the filter if its corresponding attribute is the same as either start or end or between the two supplied dates (that is, after start and before end).
 * B) If only the start attribute contains a value (other than ***null***), a File entry matches the filter if its corresponding attribute is later than or equal to the start one.
 * C) If only the end date contains a value (other than ***null***), a file matches the filter if its corresponding attribute is earlier than or equal to the end date.
 *
 */
export type FileFilter = {
    /**
     * The File name attribute filter.
     * Files that have a name that corresponds with this attribute (either exactly or with the specified wildcards) match this filtering criteria.
     */
    name: string;
    /**
     * If true match only files. If false do not match files.
     * May be undefined.
     * @since 5.0
     */
    isFile: boolean;
    /**
     * If true match only directories, If false do not match directories.
     * May be undefined.
     * @since 5.0
     */
    isDirectory: boolean;
    /**
     * The File modified attribute filter.
     * Files with modified date later than this attribute or equal to it match the filtering criteria.
     */
    startModified: Date;
    /**
     * The File modified attribute filter.
     * Files with modified date earlier than this attribute or equal to it match the filtering criteria.
     */
    endModified: Date;
    /**
     * The File created attribute filter.
     * Files with created date later than this attribute or equal to it match the filtering criteria.
     */
    startCreated: Date;
    /**
     * The File created attribute filter.
     * Files with created date earlier than this attribute or equal to it match the filtering criteria.
     */
    endCreated: Date;
};

/**
 * Specifies the file mode when it is opened.
 * - `a` append access.
 * - `r` read-only access.
 * - `rw` read and write access.
 * - `rwo` read and write access. Original file content are deleted.
 * - `w` write access.
 * @remark rwo mode is supported since Tizen 5.0. It will not be recognized by deprecated functions.
 */
export enum FileMode {
    a = 'a',
    r = 'r',
    rw = 'rw',
    rwo = 'rwo',
    w = 'w',
}

/**
 * Specifies the type of storage.
 * - `INTERNAL` Internal storage is a storage that cannot be removed, such as a flash memory.
 * - `EXTERNAL` External storage is removable storage, such as a USB drive or a memory card.
 */
export enum FileSystemStorageType {
    INTERNAL = 'INTERNAL',
    EXTERNAL = 'EXTERNAL',
}

/**
 * Specifies the state of the storage.
 * - `MOUNTED` - The device is mounted and can be browsed.
 * - `REMOVED` - The device has been removed. This states applies only to external drives.
 * - `UNMOUNTABLE` - The device cannot be mounted due to an error.
 */
export enum FileSystemStorageState {
    MOUNTED = 'MOUNTED',
    REMOVED = 'REMOVED',
    UNMOUNTABLE = 'UNMOUNTABLE',
}

/**
 * Specifies starting point for seek operation.
 * - `BEGIN` - Beginning of the file.1
 * - `CURRENT` - Current position of file indicator.
 * - `END` - End of the file.
 */
export enum BaseSeekPosition {
    BEGIN = 'BEGIN',
    CURRENT = 'CURRENT',
    END = 'END',
}

/**
 * The FileSystemManagerObject interface defines what is instantiated by the Tizen object.
 * There is a `tizen.filesystem` object that allows accessing the functionality of the Filesystem API.
 */
export interface FilesystemManager {
    /**
     * The maximum file or directory name length for the current platform.
     * @returns The maximum name length is 255
     */
    readonly maxNameLength: number;

    /**
     * The maximum path length limit for the current platform.
     * @returns The maximum path length is 4096
     */
    readonly maxPathLength: number;

    /**
     * Opens a file or creates a file pointed by `path`.
     * If the operation succeeds, a file handle to the newly created or opened file is returned, otherwise an exception is thrown.
     * Following file open modes are supported:
     *
     *   - `a` - append mode. File position indicator is always set to the first position after the last character of the file and cannot be modified with seek operations. Write operations always append content to the end of the file. Original file content are not modified. Read operations cannot be performed. If the file does not exist, it is created.
     *   - `r` - read mode. File position indicator is initially set to the beginning of the file and may be changed with seek operations. Write operations cannot be performed. Original file content may be read in this mode. If the file does not exist, NotFoundError is thrown.
     *   - `rw` - read and write mode. File position indicator is initially set to the beginning of the file and may be changed with seek operations. Original file content may be read or modified in this mode. If the file does not exist, NotFoundError will be thrown.
     *   - `rwo` - read and write mode, overwriting existing file content. File position indicator is initially set to the beginning of the file. Read and write operations may be performed. Original file content are deleted before opening the file. If the file does not exist, it is created.
     *   - `w` - write mode. File position indicator is initially set to the beginning of the file and may be changed with seek operations. Read operations cannot be performed. Original file content are deleted before opening the file. If the file does not exist, it is created.
     *
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     * @privilegeName http://tizen.org/privilege/filesystem.write
     * @remark Write permission is needed, when file is opened in modes: ***a***, ***rw***, ***rwo*** and ***w***. Read permission is needed, when file is opened in modes: ***r***, ***rw*** and ***rwo***.
     * @param path Path to the file.
     * @param openMode Mode in which the file is to be opened.
     * @param makeParents Flag indicating whether lacking directories should be created.
     * For instance, if method is invoked with parameter `path` equal to ***documents/path/to/dir/file.ext*** and
     * there is no directory "path" in "documents" virtual root, directories "path", "to" and "dir" will be created, as well as the new file "file.ext".
     * By default, `makeParents` is equal to ***true***. Its value is ignored, when `openMode` is ***r*** or ***rw***.
     * @returns Object representing open file.
     * @throw WebAPIException IOError, NotFoundError, SecurityError, TypeMismatchError
     */
    openFile: (path: Path, openMode: FileMode | 'a' | 'r' | 'rw' | 'rwo' | 'w', makeParents?: boolean) => FileHandle;

    /**
     * Creates directory pointed by `path`.
     * Successful directory creation invokes `successCallback` function, if specified. In case of failure `errorCallback` function is invoked, if specified.
     * The `ErrorCallback` is launched with these error types:
     *
     *   - IOError, if any of the input/output error occurs.
     *   - NotFoundError, if directory given in `path` does not exist and `makeParents` is set to false.
     *
     * @since 5.0
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.write
     * @param path Path to directory to create.
     * @param makeParents Flag indicating whether lacking directories should be created.
     * For instance, if method is invoked with parameter `path` equal to ***documents/path/to/dir*** and
     * there is no directory "path" in "documents" virtual root, directories "path", "to" and "dir" will be created.
     * By default, `makeParents` is equal to ***true***.
     * @param successCallback Callback function to be invoked on success.
     * @param errorCallback Callback function to be invoked when an error occurs.
     * @throw WebAPIException InvalidValuesError,SecurityError, TypeMismatchError
     *
     */
    createDirectory: (
        path: Path,
        makeParents?: boolean,
        successCallback?: PathSuccessCallback,
        errorCallback?: ErrorCallback,
    ) => void;

    /**
     * Deletes file pointed by `path`.
     * Successful file deletion invokes `successCallback` function, if specified. In case of failure `errorCallback` function is invoked, if specified.
     * The `ErrorCallback` is launched with these error types:
     *
     *   - IOError, if any of the input/output error occurs.
     *   - NotFoundError, if the `path` does not point to an existing file.
     *
     * @since 5.0
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.write
     * @param path Path to file.
     * @param successCallback Callback function to be invoked on success.
     * @param errorCallback Callback function to be invoked when an error occurs.
     * @throw WebAPIException with error type InvalidValuesError, SecurityError, TypeMismatchError
     */
    deleteFile: (path: Path, successCallback?: PathSuccessCallback, errorCallback?: ErrorCallback) => void;

    /**
     * Deletes directory or directory tree under the current directory pointed by `path`.
     * Successful directory deletion invokes `successCallback` function, if specified. In case of failure `errorCallback` function is invoked, if specified.
     * The `ErrorCallback` is launched with these error types:
     *
     *   - IOError, if a directory is not empty and `recursive` is equal to ***false***.
     *   - NotFoundError, if the `path` does not point to an existing directory.
     *
     * @since 5.0
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.write
     * @param path A path to directory.
     * @param recursive Flag indicating whether the deletion is recursive or not. If `recursive` is set to ***true*** the method will delete content of a given directory recursively.
     * Otherwise, the method succeeds only if the directory is empty, on other cases `errorCallback` is called.
     * By default, `recursive` is equal to ***true***.
     * @param successCallback Callback function to be invoked on success.
     * @param errorCallback Callback function to be invoked when an error occurs.
     * @throw WebAPIException InvalidValuesError, SecurityError, TypeMismatchError
     */
    deleteDirectory: (
        path: Path,
        recursive?: boolean,
        successCallback?: PathSuccessCallback,
        errorCallback?: ErrorCallback,
    ) => void;

    /**
     * Copies file from location pointed by `sourcePath` to `destinationPath`.
     * Successful file copying invokes `successCallback` function, if specified. In case of failure `errorCallback` function is invoked, if specified.
     * The `ErrorCallback` is launched with these error types:
     *
     *   - IOError, if any of the input/output error occurs.
     *   - NotFoundError, if the `sourcePath` does not point to an existing file.
     *
     * @since 5.0
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     * @privilegeName http://tizen.org/privilege/filesystem.write
     * @param sourcePath Path to file.
     * @param destinationPath Path for copied file. The path must consist of path to an existing directory concatenated with '/' and the name of new file.
     * @param overwrite Flag indicating whether to overwrite an existing file. If `overwrite` is set to ***true*** and file pointed by `destinationPath` already exists, the method will overwrite the file.
     * Otherwise, if a file with conflicting name already exists `errorCallback` is called.
     * By default, `overwrite` is equal to ***false***.
     * @param successCallback Callback function to be invoked on success.
     * @param errorCallback Callback function to be invoked when an error occurs.
     * @throw WebAPIException InvalidValuesError, SecurityError, TypeMismatchError
     */
    copyFile: (
        sourcePath: Path,
        destinationPath: Path,
        overwrite?: boolean,
        successCallback?: PathSuccessCallback,
        errorCallback?: ErrorCallback,
    ) => void;

    /**
     * Recursively copies directory pointed by `sourcePath` to `destinationPath`.
     * The method merges content of the directory pointed by `sourcePath` with content of the directory pointed by `destinationPath`, if exists.
     * If the directory pointed by `destinationPath` does not exist, it is created.
     * Successful directory copying invokes `successCallback` function, if specified. In case of failure `errorCallback` function is invoked, if specified.
     * The `ErrorCallback` is launched with these error types:
     *
     *   - IOError, if a directory with conflicting name already exists and `overwrite` is equal to ***false*** or any of the input/output error occurs.
     *   - NotFoundError, if the `sourcePath` does not point to an existing directory.
     *
     * @since 5.0
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     * @privilegeName http://tizen.org/privilege/filesystem.write
     * @param sourcePath Path to directory.
     * @param destinationPath Path for copied directory. The path must consist of path to an existing directory concatenated with '/' and the name of destination directory.
     * @param overwrite Flag indicating whether to overwrite existing content. If `overwrite` is equal to ***true***, the file or directory with conflicting name will be overwritten.
     * Otherwise, `errorCallback` will be called with `IOError`.
     * By default, `overwrite` is equal to ***false***.
     * @param successCallback Callback function to be invoked on success.
     * @param errorCallback Callback function to be invoked when an error occurs.
     * @throw WebAPIException InvalidValuesError, SecurityError, TypeMismatchError
     */
    copyDirectory: (
        sourcePath: Path,
        destinationPath: Path,
        overwrite?: boolean,
        successCallback?: PathSuccessCallback,
        errorCallback?: ErrorCallback,
    ) => void;

    /**
     * Moves file pointed by `sourcePath` to `destinationPath`.
     * Successful file moving invokes `successCallback` function, if specified. In case of failure `errorCallback` function is invoked, if specified.
     * The `ErrorCallback` is launched with these error types:
     *
     *   - IOError, if a file with conflicting name already exists and `overwrite` is equal to ***false*** or any of the input/output error occurs.
     *   - NotFoundError, if the `sourcePath` or `destinationPath` does not point to an existing file or directory.
     *
     * @since 5.0
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     * @privilegeName http://tizen.org/privilege/filesystem.write
     * @param sourcePath Path to file.
     * @param destinationPath A destination directory path to move the file to.
     * @param overwrite Flag indicating whether to overwrite an existing file. If `overwrite` is set to ***true*** and file with the same name in `destinationPath` already exists, the method will overwrite the file.
     * Otherwise, if a file with conflicting name already exists `errorCallback` is called.
     * By default, `overwrite` is equal to ***false***.
     * @param successCallback Callback function to be invoked on success.
     * @param errorCallback Callback function to be invoked when an error occurs.
     * @throw WebAPIException InvalidValuesError, SecurityError, TypeMismatchError
     */
    moveFile: (
        sourcePath: Path,
        destinationPath: Path,
        overwrite?: boolean,
        successCallback?: PathSuccessCallback,
        errorCallback?: ErrorCallback,
    ) => void;

    /**
     * Recursively moves directory pointed by `sourcePath` to `destinationPath`.
     * The method merges content of the directory pointed by `sourcePath` with content of the directory with the same name in `destinationPath`, if exists.
     * Successful directory moving invokes `successCallback` function, if specified. In case of failure `errorCallback` function is invoked, if specified.
     * The `ErrorCallback` is launched with these error types:
     *
     *   - IOError, if a directory with conflicting name already exists and `overwrite` is equal to ***false*** or any of the input/output error occurs.
     *   - NotFoundError, if the `sourcePath` or `destinationPath` does not point to an existing directory.
     *
     * @since 5.0
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     * @privilegeName http://tizen.org/privilege/filesystem.write
     * @param sourcePath A path to directory.
     * @param destinationPath A destination directory path to move the directory to.
     * @param overwrite Flag indicating whether to overwrite existing content. If `overwrite` is equal to ***true***, the file or directory with conflicting name will be overwritten.
     * Otherwise, `errorCallback` will be called with `IOError`.
     * By default, `overwrite` is equal to ***false***.
     * @param successCallback Callback function to be invoked on success.
     * @param errorCallback Callback function to be invoked when an error occurs.
     * @throw WebAPIException InvalidValuesError, SecurityError, TypeMismatchError
     */
    moveDirectory: (
        sourcePath: Path,
        destinationPath: Path,
        overwrite?: boolean,
        successCallback?: PathSuccessCallback,
        errorCallback?: ErrorCallback,
    ) => void;

    /**
     * Renames file or directory located in `path` to name `newName`.
     * Successful renaming invokes `successCallback` function, if specified. In case of failure `errorCallback` function is invoked, if specified.
     * The `ErrorCallback` is launched with these error types:
     *
     *   - IOError, if a file or a directory with conflicting name already exists or any of the input/output error occurs.
     *   - NotFoundError, if the `path` does not point to an existing file or directory.
     *
     * @since 5.0
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.write
     * @param path A path to directory or file.
     * @param newName A new name of directory or file.
     * @param successCallback Callback function to be invoked on success.
     * @param errorCallback Callback function to be invoked when an error occurs.
     * @throw WebAPIException InvalidValuesError, SecurityError, TypeMismatchError
     */
    rename: (path: Path, newName: string, successCallback?: PathSuccessCallback, errorCallback?: ErrorCallback) => void;

    /**
     * Lists directory content located in `path`.
     * Successful listing of directory content invokes `successCallback` function, if specified. In case of failure `errorCallback` function is invoked, if specified.
     * If the filter is passed and contains valid values, only those directories or files in the directory that match the filter criteria specified in the `FileFilter` interface are returned in successCallback method.
     * If the filter is ***null*** or ***undefined*** the implementation must return the full list of files in the directory.
     * If the directory does not contain any files or directories, or the filter criteria do not match with any files or directories, the `successCallback` is invoked with an empty array.
     * The `ErrorCallback` is launched with these error types:
     *
     *   - IOError, if any of the input/output error occurs.
     *   - NotFoundError, if the `path` does not point to an existing directory.
     *
     * @since 5.0
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     * @param path A path to directory.
     * @param successCallback Callback function to be invoked on success.
     * @param errorCallback Callback function to be invoked when an error occurs.
     * @param filter Filter to restrict the listed files.
     * @throw WebAPIException InvalidValuesError, SecurityError, TypeMismatchError
     */
    listDirectory: (
        path: Path,
        successCallback: ListDirectorySuccessCallback,
        errorCallback?: ErrorCallback,
        filter?: FileFilter,
    ) => void;

    /**
     * Converts `path` to file URI.
     * @since 5.0
     * @remark The function does not check if `path` exists in filesystem.
     * @param path A path to a file or a directory.
     * @returns [File URI](https://tools.ietf.org/html/rfc8089) for given path.
     * @throw WebAPIException InvalidValuesError
     */
    toURI: (path: Path) => string;

    /**
     * Checks if given `path` points to a file.
     * @since 5.0
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     * @param path A path to be tested.
     * @returns ***true*** if `path` points to a file, ***false*** otherwise.
     * @throw WebAPIException InvalidValuesError, IOError, NotFoundError, SecurityError
     */
    isFile: (path: Path) => boolean;

    /**
     * Checks if given `path` points to a directory.
     * @since 5.0
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     * @param path A path to be tested.
     * @returns ***true*** if `path` points to a directory, ***false*** otherwise.
     * @throw WebAPIException InvalidValuesError, IOError, NotFoundError, SecurityError
     */
    isDirectory: (path: Path) => boolean;

    /**
     * Checks if given `path` exists.
     * @since 5.0
     * @privilegeLevel public
     * @privilegeName http://tizen.org/privilege/filesystem.read
     * @param path A path to be tested.
     * @returns ***true*** if `path` points to a existing element, ***false*** otherwise.
     * @throw WebAPIException InvalidValuesError, IOError, SecurityError
     */
    pathExists: (path: Path) => boolean;

    /**
     * Returns path to directory for given `path`.
     * Strips trailing '/', then breaks `path` into two components by last `path` separator, returns first component.
     * @since 5.0
     * @remark This function does not check if `path` is valid or exists in filesystem.
     * @param path Path to file or directory.
     * @returns Path to directory for given path.
     */
    getDirName: (path: Path) => string;

    /**
     * Resolves a location to a file handle after validating it.
     *
     * A `location` can contain a virtual path like "***documents/some_file.txt***"
     * or a file URI like "***file:///my_strange_path/some_file.png***".
     * A `location` is not allowed to contain the "." or ".." directory entries inside its value.
     *
     * The list of root locations that must be supported by a compliant implementation are:
     *
     *   - `documents` - The default folder in which text documents (such as pdf, doc...) are stored by default in a device. For example, in some platforms it corresponds to the "My Documents" folder.
     *   - `images` - The default folder in which still images, like pictures (in formats including jpg, gif, png, etc.), are stored in the device by default. For example, in some platforms it corresponds to the "My Images" folder.
     *   - `music` - The default folder in which sound clips (in formats including mp3, aac, etc.) are stored in the device by default. For example, in some platforms it corresponds to the "My Music" folder.
     *   - `videos` - The default folder in which video clips (in formats including avi, mp4, etc.) are stored in the device by default. For example, in some platforms it corresponds to the "My Videos" folder.
     *   - `downloads` - The default folder in which downloaded files (from sources including browser, e-mail client, etc.) are stored by default in the device. For example, in some platforms it corresponds to the "Downloads" folder.
     *   - `ringtones` - The default folder in which ringtones (such as mp3, etc.) are stored in the device.
     *   - `camera` - The default folder in which pictures and videos taken by a device are stored.
     *   - `wgt`-package - The read-only folder to which the content of a widget file is extracted.
     *   - `wgt`-private - The private folder in which a widget stores its information. This folder must be accessible only to the same widget and other widgets or applications must not be able to access the stored information.
     *   - `wgt`-private-tmp - Temporary, the private folder in which a widget can store data that is available during a widget execution cycle. Content of this folder can be removed from this directory when the widget is closed or the Web Runtime is restarted. This folder must be accessible only to the same widget and other widgets or applications must not be able to access it.
     *
     *
     * The `mode` parameter specifies whether the resulting `File` object has read-only access (***r*** access), read and write access (***rw*** access), append access (***a*** access), or write access (***w*** access) to the root location containing directory tree.
     * Permission for the requested access is obtained from the security framework. Once the resulting `File` object has access, access is inherited by any other `File` objects that are derived from this instance without any further reference to the security framework, as noted in descriptions of certain methods of `File`.
     *
     * The ErrorCallback is launched with these error types:
     *   - `InvalidValuesError` - If any of the input parameters contains an invalid value.
     *    For example, the mode is ***w*** for the read-only virtual roots (wgt-package and ringtones).
     *   - `NotFoundError` - If the location input argument does not correspond to a valid location.
     *   - `UnknownError` - If any other error occurs.
     *
     * @note `deprecated` 5.0
     * @privilegeLevel public
     * @privilegeName      http://tizen.org/privilege/filesystem.read
     * @remark ***camera*** location is supported since Tizen 2.3. If a device does not support camera, NotSupportedError will be thrown.
     * @param location  Location to resolve that can be a virtual path or file URI.
     * @param onsuccess Callback method to be invoked when the location has been successfully resolved, passing the newly created `File` object.
     * @param onerror   Callback method to be invoked when an error has occurred.
     * @param mode      Optional value to indicate the file access mode on all files and directories that can be reached from the `File` object passed to onsuccess.
     *                  Default value of this parameter is ***rw*** if absent or ***null***.
     * @throw WebAPIException NotSupportedError, SecurityError, TypeMismatchError
     */
    resolve: (
        location: string,
        onsuccess: FileSuccessCallback,
        onerror?: ErrorCallback,
        mode?: FileMode | 'a' | 'r' | 'rw' | 'rwo' | 'w',
    ) => void;

    /**
     * Gets information about a storage based on its label.
     * For example: "MyThumbDrive", "InternalFlash".
     * The `onsuccess` method receives the data structure as an input argument containing additional information about the drive.
     * The ErrorCallback is launched with these error types:
     *
     *   - `InvalidValuesError` - If any of the input parameters contains an invalid value.
     *   - `NotFoundError` - If no drive was found with the given label.
     *   - `UnknownError` - If any other error occurs.
     *
     * @privilegeLevel public
     * @privilegeName      http://tizen.org/privilege/filesystem.read
     * @param label     Storage label.
     * @param onsuccess Callback method to be invoked when the list of storages is available, passing the storage list to the callback.
     * @param onerror   Callback method to be invoked when an error occurs.
     * @throw WebAPIException TypeMismatchError, SecurityError
     */
    getStorage: (label: string, onsuccess: FileSystemStorageSuccessCallback, onerror?: ErrorCallback) => void;

    /**
     * Lists the available storages (both internal and external) on a device.
     * The onsuccess method receives a list of the data structures as input argument containing additional information about each drive found.
     * It can get storages that would have a label named as "internal0", virtual roots (images, documents, ...), "removable1", "removable2".
     * "removable1" label is used to resolve sdcard and "removable2" label is used to resolve USB host, if supported.
     * The vfat filesystem used to sdcard filesystem widely is not case-sensitive.
     * If you want to handle the file on sdcard, you need to consider case-sensitive filenames are regarded as same name.
     *
     * Labels can differ depending on platform implementation.
     *
     * The ErrorCallback is launched with these error types:
     *
     *   - `InvalidValuesError` - If any of the input parameters contains an invalid value.
     *   - `UnknownError` - If any other error occurs.
     *
     * @privilegeLevel public
     * @privilegeName      http://tizen.org/privilege/filesystem.read
     * @param onsuccess Callback method to be invoked when a list of storage is available and passing the storage list to the callback.
     * @param onerror   Callback method to be invoked when an error occurs.
     * @throw WebAPIException TypeMismatchError, SecurityError
     */
    listStorages: (onsuccess: FileSystemStorageArraySuccessCallback, onerror?: ErrorCallback) => void;

    /**
     * Adds a listener to subscribe to notifications when a change in storage state occurs.
     * The most common usage for this method is to watch for any additions and removals of external storages.
     * When executed, it returns a subscription identifier that identifies the watch operation. After returning the identifier, the watch operation is started asynchronously. The onsuccess method will be invoked every time a storage state changes. If the attempt fails, the onerror if present will be invoked with the relevant error type.
     * The watch operation must continue until the removeStorageStateChangeListener() method is called with the corresponding subscription identifier.
     *
     * @privilegeLevel public
     * @privilegeName      http://tizen.org/privilege/filesystem.write
     * @param onsuccess Callback method to be invoked when any change is made to storage state.
     * @param onerror   Callback method to be invoked when an error occurs during the watch process.
     * @returns Subscription identifier.
     * @throw WebAPIException SecurityError, TypeMismatchError, UnknownError
     */
    addStorageStateChangeListener: (onsuccess: FileSystemStorageSuccessCallback, onerror?: ErrorCallback) => number;

    /**
     * Removes a listener to unsubscribe from a storage watch operation.
     * If the `watchId` argument is valid and corresponds to a subscription already in place, the watch process will be stopped and no further callbacks will be invoked.
     * Otherwise, the method call has no effect.
     * @privilegeLevel public
     * @privilegeName      http://tizen.org/privilege/filesystem.write
     * @param watchId Subscription identifier.
     * @throw WebAPIException SecurityError, UnknownError
     */
    removeStorageStateChangeListener: (watchId: number) => void;
}

/**
 * The FileSystemStorage interface gives additional information about a storage, such as if the device is mounted, if it is a removable drive or not, or the device's name.
 * To retrieve the mount point, the resolve() method should be used using the label as argument.
 */
export interface FileSystemStorage {
    /**
     * The storage name.
     * This attribute is used as an input for methods such as getStorage() and also used as `location` parameter for File.resolve() and FileSystemManager.resolve().
     */
    readonly label: string;
    /**
     * The storage type as internal or external.
     */
    readonly type: FileSystemStorageType | 'INTERNAL' | 'EXTERNAL';
    /**
     * The storage state as mounted or not.
     */
    readonly state: FileSystemStorageState | 'MOUNTED' | 'REMOVED' | 'UNMOUNTABLE';
}

/**
 * Object representing file, used for read/write operations.
 * Each read or write operation moves position in file forwards to the end of read/written data (there is an underlying file position's indicator).
 * @since 5.0
 * @remark Due to multibyte UTF-8 encoding, if current file's pointer does not point to beginning of multibyte sequence (see: UTF-16, emoji), using `seek()` combined with UTF-8
 * `readString()` will result in string starting from valid character. Incomplete byte sequence at the beginning may be omitted.
 * Be aware about using seek and write methods together. It can result in writing in the middle of multibyte sequence, which can lead to file with corrupted content.
 */
export interface FileHandle {
    /**
     * Path, as passed to `openFile`.
     */
    readonly path: Path;

    /**
     * Sets position indicator in file stream to ***offset***.
     * Note, that current position indicator value, can be obtained by calling ***seek(0, "CURRENT")***.
     * @param offset Number of bytes to shift the position relative to ***whence***.
     * @param whence Determines position in file stream to which ***offset*** is added. Default value: "BEGIN".
     * @returns File position indicator.
     * @throw WebAPIException IOError, TypeMismatchError
     */
    seek: (offset: number, whence?: BaseSeekPosition | 'BEGIN' | 'CURRENT' | 'END') => number;

    /**
     * Sets position indicator in file stream to ***offset***.
     * Successful seek operation invokes `onsuccess` function, if specified. In case of failure `onerror` function is invoked, if specified.
     * The `ErrorCallback` is launched with these error types:
     *
     *   - IOError, if any error related to file handle occurs.
     *
     * Note, that current position indicator value, can be obtained in SeekSuccessCallback by calling ***seekNonBlocking(0, "CURRENT")***.
     * seekNonBlocking is executed in background and does not block further instructions.
     * @param offset Number of bytes to shift the position relative to ***whence***.
     * @param onsuccess Callback function to be invoked on success.
     * @param onerror Callback function to be invoked when an error occurs.
     * @param whence Determines position in file stream to which ***offset*** is added. Default value: "BEGIN".
     * @throw WebAPIException TypeMismatchError
     */
    seekNonBlocking: (
        offset: number,
        onsuccess?: SeekSuccessCallback,
        onerror?: ErrorCallback,
        whence?: BaseSeekPosition | 'BEGIN' | 'CURRENT' | 'END',
    ) => void;

    /**
     * Reads file content as string.
     * Sets file handle position indicator at the end of read data.
     * Reads given number of characters.
     * @param count Number of characters to read from file. If none is given, method attempts to read whole file.
     * @param inputEncoding Default value: ***"UTF-8"***. Encoding to use for read operation on the file, at least the following encodings must be supported:
     *                  "[UTF-8](http://www.ietf.org/rfc/rfc2279.txt)" default encoding
     *                  "[ISO-8859-1](http://en.wikipedia.org/wiki/ISO/IEC_8859-1)" Latin-1 encoding
     * @returns String with data read from file.
     * @throw WebAPIException InvalidValuesError IOError, NotSupportedError, TypeMismatchError
     * @remark Resulting string can have `length` larger than `count`, due to possible UTF-16 surrogate pairs in it. String length in JavaScript is counted in UTF-16 encoding, so for example string containing one emoji (surrogate of two UTF-16) character will have `length` of two.
     */
    readString: (count?: number, inputEncoding?: string) => string;

    /**
     * Reads file content as string.
     * Reads given number of characters.
     * Sets file handle position indicator at the end of read data.
     * readStringNonBlocking is executed in background and does not block further instructions.
     * Successful read operation invokes `onsuccess` function, if specified. In case of failure `onerror` function is invoked, if specified.
     * The `ErrorCallback` is launched with these error types:
     *
     *   - IOError, if read fails or any error related to file handle occurs.
     *
     * @param onsuccess Callback function with read data from file to be invoked on success.
     * @param onerror Callback function to be invoked when an error occurs.
     * @param count Number of characters to read from file. If none is given, method attempts to read whole file.
     * @param inputEncoding Default value: ***"UTF-8"***. Encoding to use for read operation on the file, at least the following encodings must be supported:
     *                  "[UTF-8](http://www.ietf.org/rfc/rfc2279.txt)" default encoding
     *                  "[ISO-8859-1](http://en.wikipedia.org/wiki/ISO/IEC_8859-1)" Latin-1 encoding
     * @throw WebAPIException InvalidValuesError, NotSupportedError, TypeMismatchError
     */
    readStringNonBlocking: (
        onsuccess?: ReadStringSuccessCallback,
        onerror?: ErrorCallback,
        count?: number,
        inputEncoding?: string,
    ) => void;

    /**
     * Writes ***inputString*** content to a file.
     * Sets file handle position indicator at the end of written data.
     * @param inputString String value to be written to a file.
     * @param outputEncoding  Default value: UTF-8. Encoding to use for write operation on the file, at least the following encodings must be supported:
     *                  "[UTF-8](http://www.ietf.org/rfc/rfc2279.txt)" default encoding
     *                  "[ISO-8859-1](http://en.wikipedia.org/wiki/ISO/IEC_8859-1)" Latin-1 encoding
     * @returns Number of bytes written (can be more than `inputString` length for multibyte encodings and will never be less)
     * @throw WebAPIException IOError, NotSupportedError
     */
    writeString: (inputString: string, outputEncoding?: string) => number;

    /**
     * Writes ***inputString*** content to a file.
     * Sets file handle position indicator at the end of written data.
     * writeStringNonBlocking is executed in background and does not block further instructions.
     * Successful write operation invokes `successCallback` function, if specified. In case of failure `onerror` function is invoked, if specified.
     * The `ErrorCallback` is launched with these error types:
     *
     *   - IOError, if write fails or any error related to file handle occurs.
     *
     * @param inputString String value to be written to a file.
     * @param onsuccess Callback function with a number of bytes written as parameter to be invoked on success.
     * @param onerror Callback function to be invoked when an error occurs.
     * @param outputEncoding Default value: ***"UTF-8"***. Encoding to use for write operation on the file, at least the following encodings must be supported:
     *                  "[UTF-8](http://www.ietf.org/rfc/rfc2279.txt)" default encoding
     *                  "[ISO-8859-1](http://en.wikipedia.org/wiki/ISO/IEC_8859-1)" Latin-1 encoding
     * @throw WebAPIException NotSupportedError, TypeMismatchError
     */
    writeStringNonBlocking: (
        inputString: string,
        onsuccess?: WriteStringSuccessCallback,
        onerror?: ErrorCallback,
        outputEncoding?: string,
    ) => void;

    /**
     * Reads file content as `Blob`.
     * Sets file handle position indicator at the end of read data.
     * @param size Size in bytes of data to read from file. If none is given, method attempts to read whole file.
     * @returns Blob object with file content.
     * @throw WebAPIException InvalidValuesError IOError
     */
    readBlob: (size: number) => Blob;

    /**
     * Reads file content as `Blob`.
     * Sets file handle position indicator at the end of read data.
     * readBlobNonBlocking is executed in background and does not block further instructions.
     * Successful read operation invokes `onsuccess` function, if specified. In case of failure `onerror` function is invoked, if specified.
     *
     * The `ErrorCallback` is launched with these error types:
     *   - IOError, if read fails or any error related to file handle occurs.
     *
     * @param onsuccess Callback function with `Blob` object to be invoked on success.
     * @param onerror Callback function to be invoked when an error occurs.
     * @param size Size in bytes of data to read from file. If none is given, method attempts to read whole file.
     * @throw WebAPIException InvalidValuesError, TypeMismatchError
     */
    readBlobNonBlocking: (onsuccess?: ReadBlobSuccessCallback, onerror?: ErrorCallback, size?: number) => void;

    /**
     * Writes `Blob` to file.
     * Sets file handle position indicator at the end of written data.
     * @param blob Object of type Blob, which content will be written to a file.
     * @throw WebAPIException IOError, TypeMismatchError
     */
    writeBlob: (blob: Blob) => void;

    /**
     * Writes `Blob` to file.
     * Sets file handle position indicator at the end of written data.
     * writeBlobNonBlocking is executed in background and does not block further instructions.
     * Successful write operation invokes `onsuccess` function, if specified. In case of failure `onerror` function is invoked, if specified.
     * The `ErrorCallback` is launched with these error types:
     *
     *   - IOError, if write fails or any error related to file handle occurs.
     *
     * @param blob Object of type Blob, which content will be written to a file.
     * @param onsuccess Callback function to be invoked on success.
     * @param onerror Callback function to be invoked when an error occurs.
     * @throw WebAPIException TypeMismatchError
     */
    writeBlobNonBlocking: (blob: Blob, onsuccess?: SuccessCallback, onerror?: ErrorCallback) => void;

    /**
     * Reads file content as binary data.
     * Can be used in combination with [atob() or btoa()](https://dev.w3.org/html5/spec-LC/webappapis.html#atob) functions.
     * Sets file handle position indicator at the end of read data.
     * @param size Size in bytes of data to read from file. If none is given, method attempts to read whole file.
     * @returns Read data as Uint8Array.
     * @throw WebAPIException InvalidValuesError, IOError
     */
    readData: (size: number) => Uint8Array;

    /**
     * Reads file content as binary data.
     * Can be used in combination with [atob() or btoa()](https://dev.w3.org/html5/spec-LC/webappapis.html#atob) functions.
     * Sets file handle position indicator at the end of read data.
     * readDataNonBlocking is executed in background and does not block further instructions.
     * Successful read operation invokes `onsuccess` function, if specified. In case of failure `onerror` function is invoked, if specified.
     * The `ErrorCallback` is launched with these error types:
     *
     *   - IOError, if read fails or any error related to file handle occurs.
     *
     * @param onsuccess Callback function with read data from file to be invoked on success.
     * @param onerror Callback function to be invoked when an error occurs.
     * @param size Size in bytes of data to read from file. If none is given, method attempts to read whole file.
     * @throw WebAPIException InvalidValuesError, TypeMismatchError
     */
    readDataNonBlocking: (onsuccess?: ReadDataSuccessCallback, onerror?: ErrorCallback, size?: number) => void;

    /**
     * Writes binary data to file.
     * Can be used in combination with [atob() or btoa()](https://dev.w3.org/html5/spec-LC/webappapis.html#atob) functions.
     * Sets file handle position indicator at the end of written data.
     * @param data An array of type Uint8Array, which content will be written to file as binary data.
     * @throw WebAPIException with error type IOError, TypeMismatchError
     */
    writeData: (data: Uint8Array) => void;

    /**
     * Writes binary data to file.
     * Can be used in combination with [atob() or btoa()](https://dev.w3.org/html5/spec-LC/webappapis.html#atob) functions.
     * Sets file handle position indicator at the end of written data.
     * writeDataNonBlocking is executed in background and does not block further instructions.
     * Successful write operation invokes `onsuccess` function, if specified. In case of failure `onerror` function is invoked, if specified.
     * The `ErrorCallback` is launched with these error types:
     *
     *   - IOError, if write fails or any error related to file handle occurs.
     *
     * @param data An array of type Uint8Array, which content will be written to file as binary data.
     * @param onsuccess Callback function to be invoked on success.
     * @param onerror Callback function to be invoked when an error occurs.
     * @throw WebAPIException TypeMismatchError
     */
    writeDataNonBlocking: (data: Uint8Array, onsuccess?: SuccessCallback, onerror?: ErrorCallback) => void;

    /**
     * Flushes data.
     * For file handles with permission to write, flush writes any changes made to file content to underlying buffer.
     * Flush does not ensure that data is written on storage device, it only synchronizes RAM with file descriptor.
     * To ensure storage synchronization use `sync`, `close` or their asynchronous equivalent methods, which guarantee such synchronization.
     * @throw WebAPIException IOError
     */
    flush: () => void;

    /**
     * Flushes data.
     * For file handles with permission to write, flush writes any changes made to file content to underlying buffer.
     * Flush does not ensure that data is written on storage device, it only synchronizes RAM with file descriptor.
     * To ensure storage synchronization use `sync`, `close` or their asynchronous equivalent methods, which guarantee such synchronization.
     * Successful flushing invokes `onsuccess` function, if specified. In case of failure `onerror` function is invoked, if specified.
     * The `ErrorCallback` is launched with these error types:
     *
     *   - IOError, if flush fails or any error related to file handle occurs.
     *
     * This method is asynchronous. Its execution will occur in background and after all previously commissioned background jobs will finish.
     * @param onsuccess Callback function to be invoked on success.
     * @param onerror Callback function to be invoked when an error occurs.
     * @throw WebAPIException TypeMismatchError
     */
    flushNonBlocking: (onsuccess?: SuccessCallback, onerror?: ErrorCallback) => void;

    /**
     * Synchronizes data to storage device.
     * The sync function is intended to force a physical write of data from the buffer cache and to assure that after a system crash or other failure that all data up to the time of the sync() call is recorded on the disk.
     * @throw WebAPIException IOError
     */
    sync: () => void;

    /**
     * Synchronizes data to storage device.
     * The syncNonBlocking function is intended to force a physical write of data from the buffer cache and to assure that after a system crash or other failure that all data up to the time of the syncNonBlocking() execution is recorded on the disk.
     * Successful syncing invokes `onsuccess` function, if specified. In case of failure `onerror` function is invoked, if specified.
     * The `ErrorCallback` is launched with these error types:
     *
     *   - IOError, if sync fails or any error related to file handle occurs.
     *
     * This method is asynchronous. Its execution will occur in background and after all previously commissioned background jobs will finish.
     * @param onsuccess Callback function to be invoked on success.
     * @param onerror Callback function to be invoked when an error occurs.
     * @throw WebAPIException TypeMismatchError
     */
    syncNonBlocking: (onsuccess?: SuccessCallback, onerror?: ErrorCallback) => void;

    /**
     * Closes file handle.
     * Closes the given file stream. Closing file guarantees writing changes made to `FileHandle` to the storage device. Further operations on this file handle are not allowed.
     * @remark This method is synchronous. If any asynchronous method was called before close, close will block further instructions until all background jobs finish execution.
     * Note, that if file handle functions are put into any callbacks and this callback was not yet called, synchronous close will wait only for already ordered background jobs to finish, preventing successful execution of any further operations on closed file handle.
     * @throw WebAPIException IOError
     */
    close: () => void;

    /**
     * Closes file handle.
     * Closes the given file stream. Closing file guarantees writing changes made to `FileHandle` to the storage device. Further operations on this file handle are not allowed.
     * Successful closing invokes `onsuccess` function, if specified. In case of failure `onerror` function is invoked, if specified.
     * The `ErrorCallback` is launched with these error types:
     *
     *   - IOError, if close fails or any error related to file handle occurs.
     *
     * This method is asynchronous. Its execution will occur in background and after all previously commissioned background jobs will finish.
     * @param onsuccess Callback function to be invoked on success.
     * @param onerror Callback function to be invoked when an error occurs.
     * @throw WebAPIException TypeMismatchError
     */
    closeNonBlocking: (onsuccess?: SuccessCallback, onerror?: ErrorCallback) => void;
}

/**
 * The File interface represents the file abstraction in use.
 * The file object permissions for the file object location and tree rooted
 * at that location depend upon the mode defined in the resolve method.
 * When a File object creates a child File object,
 * the new File object inherits its access rights from
 * the parent object without any reference to the security framework, as
 * noted in certain methods of File.
 * A file handle represents either a file or a directory:
 *
 *   - For a file, the `isFile` attribute is set to ***true***.
 *   - For a directory, the `isDirectory` attribute is set to ***true***.
 *
 * A file can be opened for both read and write operations, using a
 * FileStream handle. A list of files and sub-directories can be obtained from a
 * directory and a resolve method exists to resolve files or sub-directories
 * more conveniently than processing directory listings.
 *
 * A file handle representing a file can be opened for I/O operations,
 * such as reading and writing.
 *
 * A file handle representing a directory can be used for listing all
 * files and directories rooted as the file handle location.
 *
 * @note `deprecated` 5.0
 */
export interface File {
    /**
     * The parent directory handle.
     * This attribute is set to ***null*** if there is no parent directory. This also implies that this directory represents a root location.
     * @note `deprecated` 5.0
     */
    readonly parent?: File;

    /**
     * The file/directory access state in the filesystem.
     * This attribute is set to:
     *
     *   - ***true*** - if object has read-only access at its location.
     *   - ***false*** - if object has write access at its location.
     *
     * This attribute represents the actual state of a file or directory in the filesystem. Its value is not affected by the mode used in FileSystemManager.resolve() that was used to create the `File` object from which this `File` object was obtained.
     * @note `deprecated` 5.0
     */
    readonly readOnly: boolean;

    /**
     * The flag indicating whether it is a file.
     * This attribute can have the following values:
     *
     *   - ***true*** if this handle is a file
     *   - ***false*** if this handle is a directory
     *
     * @note `deprecated` 5.0
     */
    readonly isFile: boolean;

    /**
     * The flag indicating whether it is a directory.
     * This attribute can have the following values:
     *
     *   - ***true*** if this handle is a directory
     *   - ***false*** if this handle is a file
     *
     * @note `deprecated` 5.0
     */
    readonly isDirectory: boolean;

    /**
     * The timestamp when a file is first created in the filesystem.
     * This timestamp is equivalent to the timestamp when a call to createFile() succeeds.
     * If the platform does not support this attribute, it will
     * be ***null***.
     * It is unspecified and platform-dependent if the creation
     * timestamp changes when a file is moved.
     * @note `deprecated` 5.0
     */
    readonly created?: Date;

    /**
     * The timestamp when the most recent modification is made to a file, usually when the last write operation succeeds.
     * Opening a file for reading does not change the modification timestamp.
     * If the platform does not support this attribute, it will be ***null***.
     * It is unspecified and platform-dependent if the modified
     * timestamp changes when a file is moved.
     * @note `deprecated` 5.0
     */
    readonly modified?: Date;

    /**
     * The path of a file after excluding its file name.
     * It begins with the name of the root containing the file, followed by the path, including the directory containing the file, but excluding the file name.
     * Except in some special cases of the File representing the root itself, the last
     * character is always "/".
     * For example, if a file is located at music/ramones/volume1/RockawayBeach.mp3,
     * the path is music/ramones/volume1/.
     * For example, if a directory is located at music/ramones/volume1, the path is
     * music/ramones/.
     * For the virtual roots, the path is same as the name of the virtual root.
     * For example, if the root is music, then the path is music. If the root is documents, then the path is documents.
     * @note `deprecated` 5.0
     */
    readonly path: string;

    /**
     * The file name after excluding the root name and any path components.
     * This is the name of this file, excluding the root name and any other path components.
     * For example, if a file is located at
     * music/ramones/volume1/RockawayBeach.mp3, the `name`  is "RockawayBeach.mp3".
     * For example, if a directory is located at music/ramones/volume1, the
     * `name`  is be "volume1".
     * For the special case of the root itself, the `name`  is an empty string.
     * @note `deprecated` 5.0
     */
    readonly name: string;

    /**
     * The full path of a file.
     * It begins with the name of the root containing the file,
     * and including the name of the file or directory itself.
     * For instance, if the RockawayBeach.mp3 file is located at music/ramones/volume1/, then the `fullPath` is music/ramones/volume1/RockawayBeach.mp3.
     * For a directory, if the volume1 directory is located at music/ramones/, then the `fullPath` is music/ramones/volume1.
     * For the special case of the root itself, if the root is music, then the `fullPath` is music.
     * The `fullPath` is always equal to path + name.
     * @note `deprecated` 5.0
     */
    readonly fullPath: string;

    /**
     * The size of this file, in bytes.
     * If an attempt to read this attribute for a directory is made, ***undefined*** is returned. To retrieve the number of files and directories contained in the directory, use the `length` attribute.
     * @note `deprecated` 5.0
     */
    readonly fileSize: number;

    /**
     * The number of files and directories contained in a file handle.
     * If an attempt to read this attribute for a file is made, ***undefined*** is returned. To retrieve the size of a file, use the `fileSize` attribute.
     * @note `deprecated` 5.0
     */
    readonly length: number;

    /**
     * Returns a URI for a file to identify an entry (such as using it as the src attribute on an HTML img element).
     *        The URI has no specific expiration, it should be valid at least as long as the file exists.
     * If that URI corresponds to any of the public virtual roots (that is
     * images, videos, music, documents and downloads) the URI
     * must be globally unique and could be used by any widget.
     * If that URI corresponds to a file located in any a widget's private areas (such as wgt-package, wgt-private, wgt-private-tmp),
     * the generated URI must be unique for that file and for the widget making the request (such as including some derived from the widget ID in the URI).
     * These URIs must not be accessible to other widgets, apart from the one invoking this method.
     * @note `deprecated` 5.0
     * @privilegeLevel public
     * @privilegeName      http://tizen.org/privilege/filesystem.read
     * @returns URI that identifies the file or ***null*** if an error occurs.
     * @throw WebAPIException with error type SecurityError, if the application does not have the privilege to call this method. For more information, see `Storage privileges`.
     * @throw WebAPIException with error type UnknownError, if any other error occurred.
     */
    toURI: () => string;

    /**
     * Lists all files in a directory.
     * The list of files is passed as a File[] in onsuccess() and contains directories and files. However, the directories "." and ".." must not be returned. Each `File` object that is part of the array must inherit all the access rights (that is, one of the values in FileMode) from the `File` object in which this method is invoked.
     * If the filter is passed and contains valid values, only those directories and files in the directory that match the filter criteria specified in the `FileFilter` interface must be returned in the onsuccess() method. If no filter is passed, the filter is ***null ***or ***undefined***, or the filter contains invalid values, the implementation must return the full list of files in the directory.
     * If the directory does not contain any files or directories, or the filter criteria do not match any files or directories, the onsuccess() is invoked with an empty array.
     * The ErrorCallback is launched with these error types:
     *
     *   - `IOError` - If the operation is launched on a file (not a directory).
     *   - `InvalidValuesError` - If any of the input parameters contain an invalid value.
     *   - `UnknownError` - If any other error occurs.
     *
     * @note `deprecated` 5.0
     * @privilegeLevel public
     * @privilegeName      http://tizen.org/privilege/filesystem.read
     * @param onsuccess Callback method to be invoked when the list operation has been successfully completed.
     * @param onerror   Callback method to be invoked when an error has occurred.
     * @param filter    Criteria to restrict the listed files.
     * @throw WebAPIException TypeMismatchError, SecurityError
     */
    listFiles: (onsuccess: FileArraySuccessCallback, onerror?: ErrorCallback, filter?: FileFilter) => void;

    /**
     * Opens the file in the given mode supporting a specified encoding.
     * This operation is performed asynchronously. If the file is opened successfully, the onsuccess() method is invoked with a `FileStream` that can be used for reading and writing the file, depending on the mode. The returned `FileStream` instance includes a file pointer, which represents the current position in the file. The file pointer, by default, is at the start of the file, except in the case of opening a file in append ("a") mode, in which case the file pointer points to the end of the file.
     * The ErrorCallback is launched with these error types:
     *
     *   - `InvalidValuesError` - If any of the input parameters contains an invalid value.
     *   - `IOError` - The operation is launched on a directory (not a file), the file is not valid or it does not exist.
     *   - `UnknownError` - If any other error occurs.
     *
     * @note `deprecated` 5.0
     * @privilegeLevel public
     * @privilegeName      http://tizen.org/privilege/filesystem.read
     * @param mode      Mode in which the file is opened
     *                  **"r"** for reading
     *                  **"a"** for appending
     *                  **"w"** for [over]writing
     *                  **"rw"** for reading and writing
     * @param onsuccess Callback method to be invoked when a file has been opened.
     * @param onerror   Callback method to be invoked when an error has occurred.
     * @param encoding  Encoding to use for read/write operations on the file, at least the following encodings must be supported:
     *                  "[UTF-8](http://www.ietf.org/rfc/rfc2279.txt)" default encoding
     *                  "[ISO-8859-1](http://en.wikipedia.org/wiki/ISO/IEC_8859-1)" latin1 encoding
     *                  If no encoding is passed by the developer, then the default platform encoding must be used.
     * @throw WebAPIException TypeMismatchError, SecurityError
     */
    openStream: (
        mode: FileMode | 'a' | 'r' | 'rw' | 'rwo' | 'w',
        onsuccess: FileStreamSuccessCallback,
        onerror?: ErrorCallback,
        encoding?: string,
    ) => void;

    /**
     * Reads the content of a file as a DOMString.
     * If the operation is successfully executed, the onsuccess() method is invoked and a DOMString is passed as input parameter that represents the file content in the format determined by the `encoding` parameter.
     * The ErrorCallback is launched with these error types:
     *
     *   - `InvalidValuesError` - If any of the input parameters contains an invalid value.
     *   - `IOError` - If the operation is launched on a directory (not a file), the file is not valid, or the file does not exist.
     *   - `UnknownError` - If any other error occurs.
     *
     * @note `deprecated` 5.0
     * @privilegeLevel public
     * @privilegeName      http://tizen.org/privilege/filesystem.read
     * @param onsuccess Callback method to be invoked when a file has been successfully read.
     * @param onerror   Callback method to be invoked when an error occurs while reading a file.
     * @param encoding  Encoding for read/write operations on a file, at least the following encodings must be supported:
     *                  "[UTF-8](http://www.ietf.org/rfc/rfc2279.txt)" default encoding
     *                  "[ISO-8859-1](http://en.wikipedia.org/wiki/ISO/IEC_8859-1)" latin1 encoding
     *                  If no encoding is passed by the developer, then the default platform encoding must be used.
     * @throw WebAPIException TypeMismatchError, SecurityError
     */
    readAsText: (onsuccess: FileStringSuccessCallback, onerror?: ErrorCallback, encoding?: string) => void;

    /**
     * Copies (and overwrites if possible and specified) a file or a
     *        directory from a specified location to another specified location.
     * The copy of the file or directory identified by the `originFilePath` parameter must be created in the path passed in the `destinationFilePath` parameter.
     * The file or directory to copy must be under the Directory from which the method is invoked, otherwise the operation must not be performed.
     * If the copy is performed successfully, the onsuccess() method is invoked.
     * The ErrorCallback is launched with these error types:
     *
     *   - `InvalidValuesError` - If any of the input parameters contains an invalid value.
     *   - `NotFoundError` - If the `originFilePath` does not correspond to a valid file or `destinationPath` is not a valid path.
     *   - `IOError` - If the file in which the copyTo() method is invoked is a file (and not a directory), `originFilePath` corresponds to a file or directory in use by another process, `overwrite` parameter is ***false*** and `destinationFilePath` corresponds to an existing file or directory.
     *   - `UnknownError` - If any other error occurs.
     *
     * @note `deprecated` 5.0
     * @privilegeLevel public
     * @privilegeName      http://tizen.org/privilege/filesystem.write
     * @param originFilePath      Origin full virtual file or directory path and it must be under the current directory.
     * @param destinationFilePath New full virtual file path or directory path.
     * @param overwrite           Attribute to determine whether overwriting is allowed or not
     *                            If set to ***true***, it enforces overwriting an existing file.
     * @param onsuccess           Callback method to be invoked when the file has been copied.
     * @param onerror             Callback method to be invoked when an error has occurred.
     * @throw WebAPIException TypeMismatchError, SecurityError
     */
    copyTo: (
        originFilePath: string,
        destinationFilePath: string,
        overwrite: boolean,
        onsuccess?: SuccessCallback,
        onerror?: ErrorCallback,
    ) => void;

    /**
     * Moves (and overwrites if possible and specified) a file or a directory from a specified location to another.
     *  This operation is different from instantiating copyTo() and then deleting the original file, as on certain platforms, this operation does not require extra disk space.
     * The file or directory identified by the `originFilePath` parameter is moved to the path passed in the `destinationFilePath` parameter.
     * The file to move must be under the directory from which the method is invoked, else the operation can not be performed.
     * If the file or directory is moved successfully, the onsuccess() method is invoked.
     * The ErrorCallback is launched with these error types:
     *
     *   - `InvalidValuesError` - If any of the input parameters contains an invalid value.
     *   - `NotFoundError` - If `originFilePath` does not correspond to a valid file or `destinationPath` is not a valid path.
     *   - `IOError` - If the `File` in which the moveTo() method is invoked is a file (not a directory), `originFilePath` corresponds to a file or directory in use by another process, overwrite parameter is ***false*** and `destinationFilePath` corresponds to an existing file or directory.
     *   - `UnknownError` - If any other error occurs.
     *
     * @note `deprecated` 5.0
     * @privilegeLevel public
     * @privilegeName      http://tizen.org/privilege/filesystem.write
     * @param originFilePath      Origin full virtual file or directory path and it must be under the current directory.
     * @param destinationFilePath New full virtual file path or directory path.
     * @param overwrite           Flag indicating whether to overwrite an existing file.
     *                            When set to ***true***, the files can be overwritten.
     * @param onsuccess           Callback method to be invoked when the file has been moved.
     * @param onerror             Callback method to be invoked when an error has occurred.
     * @throw WebAPIException TypeMismatchError, SecurityError
     */
    moveTo: (
        originFilePath: string,
        destinationFilePath: string,
        overwrite: boolean,
        onsuccess?: SuccessCallback,
        onerror?: ErrorCallback,
    ) => void;

    /**
     * Creates a new directory.
     * A new directory will be created relative to the current
     * directory that this operation is performed on. The implementation will attempt to
     * create all necessary sub-directories specified in the dirPath, as well. The use of "."
     * or ".." in path components is not supported.
     * This operation can only be performed on file handles that represent directories (that is, `isDirectory` == ***true***).
     * If the directory is successfully created, it will be returned.
     * In case the directory cannot be created, an error must be thrown with the appropriate error type.
     * @note `deprecated` 5.0
     * @privilegeLevel public
     * @privilegeName      http://tizen.org/privilege/filesystem.write
     * @param dirPath Relative directory path and it only contains characters supported by the underlying filesystem.
     * @returns File handle of the new directory.
     *              The new `File` object has "rw" access rights, as it inherits this from the `File` object on which the createDirectory() method is called.
     * @throw WebAPIException with error type IOError, InvalidValuesError, TypeMismatchError, SecurityError, UnknownError
     */
    createDirectory: (dirPath: string) => File;

    /**
     * Creates a empty new file in a specified location that is relative to the directory indicated by current `File` object's `path` attribute.
     * The use of "." or ".." in path components is not supported. This operation can only be performed on file handlers that represent a directory (that is, `isDirectory` == ***true***).
     * If the file is successfully created, a file handle must be returned by this method.
     * In case the file cannot be created, an error must be thrown with the appropriate error type.
     * @note `deprecated` 5.0
     * @privilegeLevel public
     * @privilegeName      http://tizen.org/privilege/filesystem.write
     * @param relativeFilePath New file path and it should only contain characters supported by the underlying filesystem.
     * @returns File handle for the new empty file.
     *              The new `File` object has "rw" access rights, as it inherits this from the `File` object on which the createFile() method is
     *              called.
     * @throw WebAPIException with error type IOError, InvalidValuesError, TypeMismatchError, SecurityError, UnknownError
     */
    createFile: (relativeFilePath: string) => File;

    /**
     * Resolves an existing file or directory relative to the current directory this operation is performed on and returns a file handle for it.
     * The `filePath` is not allowed to contain the "." or ".." directory entries inside its value.
     * The encoding of file paths is [UTF-8](http://www.ietf.org/rfc/rfc2279.txt).
     * @note `deprecated` 5.0
     * @privilegeLevel public
     * @privilegeName      http://tizen.org/privilege/filesystem.read
     * @param filePath Relative file path or file URI to resolve.
     * @returns File handle of the file.
     *              The new `File` object inherits its access rights from the `File` object on which this resolve() method is called.
     * @throw WebAPIException with error type TypeMismatchError, InvalidValuesError, IOError, NotFoundError, SecurityError, UnknownError
     */
    resolve: (filePath: string) => File;

    /**
     * Deletes a specified directory and directory tree if specified.
     * This method attempts to asynchronously delete a directory or directory tree under the current directory.
     * If the `recursive` parameter is set to ***true***, all the directories and files under the specified directory must be deleted. If the `recursive` parameter is set to ***false***, the directory is only deleted if it is empty, otherwise an IOError error type will be passed in onerror().
     * If the deletion is performed successfully, the onsuccess() is invoked.
     * The ErrorCallback is launched with these error types:
     *
     *   - `InvalidValuesError` - If any of the input parameters contains an invalid value.
     *   - `NotFoundError` -If the passed directory does not correspond to a valid directory.
     *   - `IOError` - If the `File` in which the delete method is invoked is a file (and not a directory), the directory is in use by another process or the directory is not empty and `recursive` argument is ***false***.
     *    This code is also used if a recursive deletion partially fails and any data deleted so far cannot be recovered. This may occur due to the lack of filesystem permissions or if any directories or files are already opened by other processes.
     *   - `UnknownError` - If any other error occurs.
     *
     * @note `deprecated` 5.0
     * @privilegeLevel public
     * @privilegeName      http://tizen.org/privilege/filesystem.write
     * @param directoryPath Full virtual path to the directory to delete (must be under the current one).
     * @param recursive     Flag indicating whether the deletion is recursive or not
     *                      When set to ***true*** recursive deletion is allowed. Also, this function deletes
     *                      all data in all subdirectories and so needs to be used with caution.
     * @param onsuccess     Callback method to be invoked when a directory is successfully deleted.
     * @param onerror       Callback method to be invoked when an error has occurred.
     *
     * @throw WebAPIException TypeMismatchError, SecurityError
     */
    deleteDirectory: (
        directoryPath: string,
        recursive: boolean,
        onsuccess?: SuccessCallback,
        onerror?: ErrorCallback,
    ) => void;

    /**
     * Deletes a specified file.
     * This function attempts to asynchronously delete a file under the current directory.
     * If the deletion is performed successfully, the onsuccess() is invoked.
     * The ErrorCallback is launched with these error types:
     *
     *   - `InvalidValuesError` - If any of the input parameters contains an invalid value.
     *   - `NotFoundError` - If the file does not correspond to a valid file.
     *   - `IOError` - If the file in which the delete() method is invoked is a file (not a directory), the file is in use by another process, or there is no permission in the file system.
     *   - `UnknownError` - If any other error occurs.
     *
     * @note `deprecated` 5.0
     * @privilegeLevel public
     * @privilegeName      http://tizen.org/privilege/filesystem.write
     * @param filePath  Full virtual path to the file to delete (must be under the current directory).
     * @param onsuccess Callback method to be invoked when the file is successfully deleted.
     * @param onerror   Callback method to be invoked when an error has occurred.
     * @throw WebAPIException TypeMismatchError, SecurityError
     */
    deleteFile: (filePath: string, onsuccess?: SuccessCallback, onerror?: ErrorCallback) => void;
}

/**
 * The FileStream interface represents a handle to a File opened for read and/or write operations.
 *        Read and write operations are performed relative to a position attribute, which is a pointer that represents the current position in the file.
 * A series of read/write methods are available that permit both binary and text to be processed.
 * Once a file stream is closed, any operation attempt made on this stream results in a standard JavaScript error.
 * The read/write operations in this interface do not throw any security exceptions as the access rights are expected to be granted through the initial resolve() method or through the openStream() method of the `File` interface. Therefore, all actions performed on a successfully resolved File and FileStream are expected to succeed. This avoids successive asynchronous calls and may potentially increase application for a user.
 * @note `deprecated` 5.0
 */
export interface FileStream {
    /**
     * The flag indicating whether the current file pointer is at the end of the file.
     * If set to ***true***, this attribute indicates that the file pointer is at the end of the file.
     * If set to ***false***, this attribute indicates that the file pointer is not at the end of the file and so it is anywhere within the file.
     * @note `deprecated` 5.0
     */
    readonly eof: boolean;

    /**
     * The flag indicating the stream position for reads/writes.
     * The stream position is an offset of bytes from the start of the file stream. When invoking an operation that reads or writes from the stream, the operation will take place from the byte defined by this `position` attribute. If the read or write operation is successful, the position of the stream is advanced by the number of bytes read or written. If the read/write operation is not successful, the position of the stream is unchanged.
     * @note `deprecated` 5.0
     */
    position: number;

    /**
     * The number of bytes that are available for reading from the stream.
     * The number of bytes available for reading is the maximum amount of bytes that can be read in the next read operation.
     * It corresponds to the number of bytes available after the file pointer denoted by the `position` attribute.
     * ***-1 ***if EOF is ***true***.
     * @note `deprecated` 5.0
     */
    readonly bytesAvailable: number;

    /**
     * Closes this FileStream.
     * Flushes any pending buffered writes and closes the File. Always succeeds.
     * Note that pending writes might not succeed.
     * @note `deprecated` 5.0
     * @privilegeLevel public
     * @privilegeName      http://tizen.org/privilege/filesystem.read
     */
    close: () => void;

    /**
     * Reads the specified number of characters from the position of the file pointer in a FileStream and returns the characters as a string.
     *        The resulting string length might be shorter than `charCount` if EOF is ***true***.
     *
     * @note `deprecated` 5.0
     * @privilegeLevel public
     * @privilegeName      http://tizen.org/privilege/filesystem.read
     * @param charCount Number of characters being read.
     * @returns Array of read characters as a string.
     * @throw WebAPIException with error type IOError, TypeMismatchError, InvalidValuesError, SecurityError
     */
    read: (charCount: number) => string;

    /**
     * Reads the specified number of bytes from a FileStream.
     * @note `deprecated` 5.0
     * @privilegeLevel public
     * @privilegeName      http://tizen.org/privilege/filesystem.read
     * @param byteCount Number of bytes to read.
     * @returns Result of read bytes as a byte (or number) array.
     * @throw WebAPIException IOError, TypeMismatchError, InvalidValuesError, SecurityError
     */
    readBytes: (byteCount: number) => Uint8Array;

    /**
     * Reads the specified number of bytes from this FileStream, encoding the result in base64.
     * @note `deprecated` 5.0
     *
     * @privilegeLevel public
     * @privilegeName      http://tizen.org/privilege/filesystem.read
     * @param byteCount Number of bytes to read.
     * @returns Array of read characters as base64 encoding string.
     * @throw WebAPIException with error type IOError, TypeMismatchError, InvalidValuesError, SecurityError
     */
    readBase64: (byteCount: number) => string;

    /**
     * Writes the specified DOMString to a FileStream.
     * @note `deprecated` 5.0
     * @privilegeLevel public
     * @privilegeName      http://tizen.org/privilege/filesystem.write
     * @param stringData Actual string to write.
     * @throw WebAPIException IOError, TypeMismatchError, SecurityError
     */
    write: (stringData: string) => void;

    /**
     * Writes the specified bytes to this FileStream.
     * @note `deprecated` 5.0
     * @privilegeLevel public
     * @privilegeName      http://tizen.org/privilege/filesystem.write
     * @param byteData Byte data array being written.
     * @throw WebAPIException IOError, TypeMismatchError, SecurityError
     */
    writeBytes: (byteData: Uint8Array) => void;

    /**
     * Writes the result to this FileStream after converting the specified base64 DOMString to bytes.
     * @note `deprecated` 5.0
     * @privilegeLevel public
     * @privilegeName      http://tizen.org/privilege/filesystem.write
     * @param base64Data The base64 data to written.
     * @throw WebAPIException with error type IOError, InvalidValuesError, SecurityError
     */
    writeBase64: (base64Data: string) => void;
}

/**
 * The FileSuccessCallback interface defines file system success callback with a `File` object as input argument.
 * It is used in asynchronous operations, such as FileSystemManager.resolve(), copying, moving and deleting files.
 * @note `deprecated` 5.0
 */
export interface FileSuccessCallback {
    /**
     * Called when the asynchronous call completes successfully.
     * @note `deprecated` 5.0
     * @param file File resulting from the asynchronous call.
     */
    (file: File): void;
}

/**
 * The FileSystemStorageArraySuccessCallback callback interface specifies a success callback with an array of FileSystemStorage objects as input argument.
 * It is used in asynchronous operations, such as FileSystemManager.listStorages().
 */
export interface FileSystemStorageArraySuccessCallback {
    /**
     * Called when the asynchronous call completes successfully.
     * @param storages List of available storage devices.
     */
    (storages: FileSystemStorage[]): void;
}

/**
 * The FileSystemStorageSuccessCallback callback interface specifies a success callback with a `FileSystemStorage` object as input argument.
 * It is used in asynchronous operations, such as FileSystemManager.getStorage() and FileSystemManager.addStorageStateChangeListener().
 */
export interface FileSystemStorageSuccessCallback {
    /**
     * Called when the asynchronous call completes successfully.
     * @param storage Storage device structure.
     */
    (storage: FileSystemStorage): void;
}

/**
 * The PathSuccessCallback callback interface specifies a success callback with a `Path` value as input argument.
 * It is used in asynchronous operations of the `FileSystemManager` interface.
 * @since 5.0
 */
export interface PathSuccessCallback {
    /**
     * Called when the asynchronous call completes successfully.
     * @param path Path to created or changed resource on the filesystem. In case of deletion, path to parent of the deleted resource is given.
     */
    (path: Path): void;
}
/**
 * The SeekSuccessCallback callback interface specifies a success callback with a `long long` value as input argument.
 * It is used in asynchronous operation FileHandle.seekNonBlocking().
 * @since 5.0
 */
export interface SeekSuccessCallback {
    /**
     * Called when the asynchronous call completes successfully.
     * @param position File position indicator.
     */
    (position: number): void;
}
/**
 * he ReadStringSuccessCallback callback interface specifies a success callback with a `DOMString` value as input argument.
 * It is used in asynchronous operation FileHandle.readStringNonBlocking().
 * @since 5.0
 */
export interface ReadStringSuccessCallback {
    /**
     * Called when the asynchronous call completes successfully.
     * @param string String with data read from file.
     */
    (string: string): void;
}
/**
 * The WriteStringSuccessCallback callback interface specifies a success callback with a `long long` value as input argument.
 * It is used in asynchronous operation FileHandle.writeStringNonBlocking().
 * @since 5.0
 */
export interface WriteStringSuccessCallback {
    /**
     * Called when the asynchronous call completes successfully.
     * @param bytesCount Number of bytes written (can be more than inputString length for multibyte encodings and will never be less).
     */
    (bytesCount: number): void;
}
/**
 * The ReadBlobSuccessCallback callback interface specifies a success callback with a `Blob` object as input argument.
 * It is used in asynchronous operation FileHandle.readBlobNonBlocking().
 * @since 5.0
 */
export interface ReadBlobSuccessCallback {
    /**
     * Called when the asynchronous call completes successfully.
     * @param blob Blob object with file content.
     */
    (blob: Blob): void;
}
/**
 * The ReadDataSuccessCallback callback interface specifies a success callback with a `Uint8Array` value as input argument.
 * It is used in asynchronous operation FileHandle.readDataNonBlocking().
 * @since 5.0
 */
export interface ReadDataSuccessCallback {
    /**
     * Called when the asynchronous call completes successfully.
     * @param data A TypedArray with file content.
     */
    (data: Uint8Array): void;
}
/**
 * The FileStringSuccessCallback callback interface specifies a success callback with a DOMString object as input argument.
 * It is used in asynchronous operation File.readAsText().
 * @note `deprecated` 5.0
 */
export interface FileStringSuccessCallback {
    /**
     * Called when the asynchronous call completes successfully.
     * @note `deprecated` 5.0
     * @param fileStr File represented as a DOMString resulting from the asynchronous call.
     */
    (fileStr: string): void;
}
/**
 * The FileStreamSuccessCallback interface specifies a success callback with a `FileStream` object as input argument.
 * It is used in asynchronous operation File.openStream().
 * @note `deprecated` 5.0 Since 5.0
 */
export interface FileStreamSuccessCallback {
    /**
     * Called when the File.openStream asynchronous call completes successfully.
     * @note `deprecated` 5.0 Since 5.0
     * @param filestream Filestream to access file content.
     */
    (filestream: FileStream): void;
}
/**
 * The ListDirectorySuccessCallback interface defines success callback for listing methods.
 * This callback interface specifies a success callback with a function taking an array of strings as input argument. It is used in asynchronous operation FileSystemManager.listDirectory().
 * @since 5.0
 */
export interface ListDirectorySuccessCallback {
    /**
     * Called when the asynchronous call completes successfully.
     * @param names File or directory names resulting from the asynchronous call.
     * @param path Path to listed directory.
     */
    (names: string[], path: Path): void;
}
/**
 * The FileArraySuccessCallback interface defines file system specific success callback for listing methods.
 * This callback interface specifies a success callback with a function taking an array of `File` objects as input argument. It is used in asynchronous methods, such as File.listFiles().
 * @note `deprecated` 5.0
 */
export interface FileArraySuccessCallback {
    /**
     * Called when the asynchronous call completes successfully.
     * @note `deprecated` 5.0
     * @param files Files resulting from the asynchronous call.
     */
    (files: File[]): void;
}
