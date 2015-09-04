// Type definitions for File System API
// Project: http://www.w3.org/TR/file-system-api/
// Definitions by: Kon <http://phyzkit.net/> 
// Definitions: https://github.com/borisyankov/DefinitelyTyped 

/// <reference path="../filewriter/filewriter.d.ts" />

interface LocalFileSystem {
    
    /**
     * Used for storage with no guarantee of persistence.
     */
    TEMPORARY:number;

    /**
     * Used for storage that should not be removed by the user agent without application or user permission.
     */
    PERSISTENT:number;

    /**
     * Requests a filesystem in which to store application data.
     * @param type Whether the filesystem requested should be persistent, as defined above. Use one of TEMPORARY or PERSISTENT.
     * @param size This is an indicator of how much storage space, in bytes, the application expects to need.
     * @param successCallback The callback that is called when the user agent provides a filesystem.
     * @param errorCallback A callback that is called when errors happen, or when the request to obtain the filesystem is denied.
     */
    requestFileSystem(type:number, size:number, successCallback:FileSystemCallback, errorCallback?:ErrorCallback):void;
    
    /**
     * Allows the user to look up the Entry for a file or directory referred to by a local URL.
     * @param url A URL referring to a local file in a filesystem accessable via this API.
     * @param successCallback A callback that is called to report the Entry to which the supplied URL refers.
     * @param errorCallback A callback that is called when errors happen, or when the request to obtain the Entry is denied.
     */ 
    resolveLocalFileSystemURL(url:string, successCallback:EntryCallback, errorCallback?:ErrorCallback):void;

    /**
     * see requestFileSystem.
     */
    webkitRequestFileSystem(type:number, size:number, successCallback:FileSystemCallback, errorCallback?:ErrorCallback):void;
}

interface LocalFileSystemSync {
    /**
     * Used for storage with no guarantee of persistence.
     */
    TEMPORARY:number;

    /**
     * Used for storage that should not be removed by the user agent without application or user permission.
     */
    PERSISTENT:number;

    /**
     * Requests a filesystem in which to store application data.
     * @param type Whether the filesystem requested should be persistent, as defined above. Use one of TEMPORARY or PERSISTENT.
     * @param size This is an indicator of how much storage space, in bytes, the application expects to need.
     */
    requestFileSystemSync(type:number, size:number):FileSystemSync;

    /**
     * Allows the user to look up the Entry for a file or directory referred to by a local URL.
     * @param url A URL referring to a local file in a filesystem accessable via this API.
     */
    resolveLocalFileSystemSyncURL(url:string):EntrySync;

    /**
     * see requestFileSystemSync
     */
    webkitRequestFileSystemSync(type:number, size:number):FileSystemSync;
}

interface Metadata {
    /**
     * This is the time at which the file or directory was last modified.
     * @readonly
     */
    modificationTime:Date;

    /**
     * The size of the file, in bytes. This must return 0 for directories.
     * @readonly
     */
    size:number;
}

interface Flags {
    /**
     * Used to indicate that the user wants to create a file or directory if it was not previously there.
     */
    create?:boolean;

    /**
     * By itself, exclusive must have no effect. Used with create, it must cause getFile and getDirectory to fail if the target path already exists.
     */
    exclusive?:boolean;
}

/** 
 * This interface represents a file system.
 */
interface FileSystem{
    /**
     * This is the name of the file system. The specifics of naming filesystems is unspecified, but a name must be unique across the list of exposed file systems.
     * @readonly
     */
    name: string;

    /**
     * The root directory of the file system.
     * @readonly
     */
    root: DirectoryEntry;
}

interface Entry {

    /**
     * Entry is a file.
     */
    isFile:boolean;

    /**
     * Entry is a directory.
     */
    isDirectory:boolean;

    /**
     * Look up metadata about this entry.
     * @param successCallback A callback that is called with the time of the last modification.
     * @param errorCallback ErrorCallback A callback that is called when errors happen.
     */
    getMetadata(successCallback:MetadataCallback, errorCallback?:ErrorCallback):void;
    
    /**
     * The name of the entry, excluding the path leading to it.
     */
    name:string;

    /**
     * The full absolute path from the root to the entry.
     */
    fullPath:string;

    /**
     * The file system on which the entry resides.
     */
    filesystem:FileSystem;

    /**
     * Move an entry to a different location on the file system. It is an error to try to:
     * 
     * <ui>
     * <li>move a directory inside itself or to any child at any depth;</li>
     * <li>move an entry into its parent if a name different from its current one isn't provided;</li>
     * <li>move a file to a path occupied by a directory;</li>
     * <li>move a directory to a path occupied by a file;</li>
     * <li>move any element to a path occupied by a directory which is not empty.</li>
     * <ul>
     *
     * A move of a file on top of an existing file must attempt to delete and replace that file.
     * A move of a directory on top of an existing empty directory must attempt to delete and replace that directory.
     */
    moveTo(parent:DirectoryEntry, newName?:string, successCallback?:EntryCallback, errorCallback?:ErrorCallback):string;
    
    /**
     * Copy an entry to a different location on the file system. It is an error to try to:
     * 
     * <ul> 
     * <li> copy a directory inside itself or to any child at any depth;</li>
     * <li> copy an entry into its parent if a name different from its current one isn't provided;</li>
     * <li> copy a file to a path occupied by a directory;</li>
     * <li> copy a directory to a path occupied by a file;</li>
     * <li> copy any element to a path occupied by a directory which is not empty.</li>
     * <li> A copy of a file on top of an existing file must attempt to delete and replace that file.</li>
     * <li> A copy of a directory on top of an existing empty directory must attempt to delete and replace that directory.</li>
     * </ul>
     *
     * Directory copies are always recursive--that is, they copy all contents of the directory.
     */
    copyTo(parent:DirectoryEntry, newName?:string, successCallback?:EntryCallback, errorCallback?:ErrorCallback):string;
    
    /**
     * Returns a URL that can be used to identify this entry. Unlike the URN defined in [FILE-API-ED], it has no specific expiration; as it describes a location on disk, it should be valid at least as long as that location exists.
     */
    toURL():string;

    /**
     * Deletes a file or directory. It is an error to attempt to delete a directory that is not empty. It is an error to attempt to delete the root directory of a filesystem.
     * @param successCallback A callback that is called on success.
     * @param errorCallback A callback that is called when errors happen.
     */
    remove(successCallback:VoidCallback, errorCallback?:ErrorCallback):void;
    
    /**
     * Look up the parent DirectoryEntry containing this Entry. If this Entry is the root of its filesystem, its parent is itself.
     * @param successCallback A callback that is called to return the parent Entry.
     * @param errorCallback A callback that is called when errors happen.
     */
    getParent(successCallback:DirectoryEntryCallback, errorCallback?:ErrorCallback):void;
}

/**
 * This interface represents a directory on a file system.
 */
interface DirectoryEntry extends Entry {
    /**
     * Creates a new DirectoryReader to read Entries from this Directory.
     */
    createReader():DirectoryReader;

    /**
     * Creates or looks up a file.
     * @param path Either an absolute path or a relative path from this DirectoryEntry to the file to be looked up or created. It is an error to attempt to create a file whose immediate parent does not yet exist.
     * @param options
     *     <ul> 
     *     <li>If create and exclusive are both true, and the path already exists, getFile must fail.</li>
     *     <li>If create is true, the path doesn't exist, and no other error occurs, getFile must create it as a zero-length file and return a corresponding FileEntry.</li>
     *     <li>If create is not true and the path doesn't exist, getFile must fail.</li>
     *     <li>If create is not true and the path exists, but is a directory, getFile must fail.</li>
     *     <li>Otherwise, if no other error occurs, getFile must return a FileEntry corresponding to path.</li>
     *     </ul>
     * @param successCallback A callback that is called to return the File selected or created.
     * @param errorCallback A callback that is called when errors happen.
     */
    getFile(path:string, options?:Flags, successCallback?:FileEntryCallback, errorCallback?:ErrorCallback):void;
    
    /**
     * Creates or looks up a directory.
     * @param path Either an absolute path or a relative path from this DirectoryEntry to the directory to be looked up or created. It is an error to attempt to create a directory whose immediate parent does not yet exist.
     * @param options 
     *     <ul>
     *     <li>If create and exclusive are both true and the path already exists, getDirectory must fail.</li>
     *     <li>If create is true, the path doesn't exist, and no other error occurs, getDirectory must create and return a corresponding DirectoryEntry.</li>
     *     <li>If create is not true and the path doesn't exist, getDirectory must fail.</li>
     *     <li>If create is not true and the path exists, but is a file, getDirectory must fail.</li>
     *     <li>Otherwise, if no other error occurs, getDirectory must return a DirectoryEntry corresponding to path.</li>
     *     </ul>
     * @param successCallback   A callback that is called to return the DirectoryEntry selected or created.
     * @param errorCallback A callback that is called when errors happen.
     * 
     */
    getDirectory(path:string, options?:Flags, successCallback?:DirectoryEntryCallback, errorCallback?:ErrorCallback):void;
    
    /**
     * Deletes a directory and all of its contents, if any. In the event of an error [e.g. trying to delete a directory that contains a file that cannot be removed], some of the contents of the directory may be deleted. It is an error to attempt to delete the root directory of a filesystem.
     * @param successCallback A callback that is called on success.
     * @param errorCallback A callback that is called when errors happen.
     */
    removeRecursively(successCallback:VoidCallback, errorCallback?:ErrorCallback):void;
}

/**
 * This interface lets a user list files and directories in a directory. If there are no additions to or deletions from a directory between the first and last call to readEntries, and no errors occur, then:
 * <ul>
 * <li> A series of calls to readEntries must return each entry in the directory exactly once.</li>
 * <li> Once all entries have been returned, the next call to readEntries must produce an empty array.</li>
 * <li> If not all entries have been returned, the array produced by readEntries must not be empty.</li>
 * <li> The entries produced by readEntries must not include the directory itself ["."] or its parent [".."].</li>
 * </ul>
 */
interface DirectoryReader {
    /**
     * Read the next block of entries from this directory.
     * @param successCallback Called once per successful call to readEntries to deliver the next previously-unreported set of Entries in the associated Directory. If all Entries have already been returned from previous invocations of readEntries, successCallback must be called with a zero-length array as an argument.
     * @param errorCallback A callback indicating that there was an error reading from the Directory.
     */
    readEntries(successCallback:EntriesCallback, errorCallback?:ErrorCallback):void;
}

/**
 * This interface represents a file on a file system.
 */
interface FileEntry extends Entry {
    /**
     * Creates a new FileWriter associated with the file that this FileEntry represents.
     * @param successCallback A callback that is called with the new FileWriter.
     * @param errorCallback A callback that is called when errors happen.
     */
    createWriter(successCallback:FileWriterCallback, errorCallback?:ErrorCallback):void;

    /**
     * Returns a File that represents the current state of the file that this FileEntry represents.
     * @param successCallback A callback that is called with the File.
     * @param errorCallback A callback that is called when errors happen.
     */
    file(successCallback:FileCallback, errorCallback?:ErrorCallback):void;
}

/**
 * When requestFileSystem() succeeds, the following callback is made.
 */
interface FileSystemCallback {
    /**
     * @param filesystem The file systems to which the app is granted access.
     */
    (filesystem:FileSystem):void;
}

/**
 * This interface is the callback used to look up Entry objects.
 */
interface EntryCallback {
    /**
     * @param entry
     */
    (entry:Entry):void;
}

/**
 * This interface is the callback used to look up FileEntry objects.
 */
interface FileEntryCallback {
    /**
     * @param entry
     */
    (entry:FileEntry):void;
}

/**
 * This interface is the callback used to look up DirectoryEntry objects.
 */
interface DirectoryEntryCallback {
    /**
     * @param entry
     */
    (entry:DirectoryEntry):void;
}

/**
 * When readEntries() succeeds, the following callback is made.
 */
interface EntriesCallback {
    (entries:Entry[]):void;
}

/**
 * This interface is the callback used to look up file and directory metadata.
 */
interface MetadataCallback {
    (metadata:Metadata):void;
}

/**
 * This interface is the callback used to create a FileWriter.
 */ 
interface FileWriterCallback {
    (fileWriter:FileWriter):void;
}

/**
 * This interface is the callback used to obtain a File.
 */
interface FileCallback {
    (file:File):void;
}

/** 
 * This interface is the generic callback used to indicate success of an asynchronous method.
 */ 
interface VoidCallback {
    ():void;
}

/**
 * When an error occurs, the following callback is made.
 */
interface ErrorCallback {
    (err:DOMError):void;
}


/** 
 * This interface represents a file system.
 */
interface FileSystemSync {
    /**
     * This is the name of the file system. The specifics of naming filesystems is unspecified, but a name must be unique across the list of exposed file systems.
     */
    name:string;

    /**
     * root The root directory of the file system.
     */
    root:DirectoryEntrySync;
}

/**
 * An abstract interface representing entries in a file system, each of which may be a FileEntrySync or DirectoryEntrySync.
 */
interface EntrySync{
    /**
     * EntrySync is a file.
     * @readonly
     */
    isFile:boolean;

    /**
     * EntrySync is a directory.
     * @readonly
     */
    isDirectory:boolean;

    /**
     * Look up metadata about this entry.
     */
    getMetadata():Metadata;
    
    /**
     * The name of the entry, excluding the path leading to it.
     */
    name:string;

    /**
     * The full absolute path from the root to the entry.
     */
    fullPath:string;

    /**
     * The file system on which the entry resides.
     */
    filesystem:FileSystemSync;

    /**
     * Move an entry to a different location on the file system. It is an error to try to:
     * <ul>
     * <li> move a directory inside itself or to any child at any depth;</li>
     * <li> move an entry into its parent if a name different from its current one isn't provided;</li>
     * <li> move a file to a path occupied by a directory;</li>
     * <li> move a directory to a path occupied by a file;</li>
     * <li> move any element to a path occupied by a directory which is not empty.</li>
     * </ui> 
     * A move of a file on top of an existing file must attempt to delete and replace that file. A move of a directory on top of an existing empty directory must attempt to delete and replace that directory.
     * @param parent The directory to which to move the entry.
     * @param newName The new name of the entry. Defaults to the EntrySync's current name if unspecified.
     */
    moveTo(parent:DirectoryEntrySync, newName?:string):EntrySync;

    /**
     * Copy an entry to a different location on the file system. It is an error to try to:
     * <ul>
     * <li> copy a directory inside itself or to any child at any depth;</li>
     * <li> copy an entry into its parent if a name different from its current one isn't provided;</li>
     * <li> copy a file to a path occupied by a directory;</li>
     * <li> copy a directory to a path occupied by a file;</li>
     * <li> copy any element to a path occupied by a directory which is not empty.</li>
     * </ui> 
     * A copy of a file on top of an existing file must attempt to delete and replace that file.
     * A copy of a directory on top of an existing empty directory must attempt to delete and replace that directory.
     * Directory copies are always recursive--that is, they copy all contents of the directory.
     */
    copyTo(parent:DirectoryEntrySync, newName?:string):EntrySync;

    /**
     * Returns a URL that can be used to identify this entry. Unlike the URN defined in [FILE-API-ED], it has no specific expiration; as it describes a location on disk, it should be valid at least as long as that location exists.
     */
    toURL():string;

    /**
     * Deletes a file or directory. It is an error to attempt to delete a directory that is not empty. It is an error to attempt to delete the root directory of a filesystem.
     */
    remove ():void;

    /**
     * Look up the parent DirectoryEntrySync containing this Entry. If this EntrySync is the root of its filesystem, its parent is itself.
     */
    getParent():DirectoryEntrySync;
}

/**
 * This interface represents a directory on a file system.
 */
interface DirectoryEntrySync extends EntrySync {
    /**
     * Creates a new DirectoryReaderSync to read EntrySyncs from this DirectorySync.
     */
    createReader():DirectoryReaderSync;

    /** 
     * Creates or looks up a directory.
     * @param path Either an absolute path or a relative path from this DirectoryEntrySync to the file to be looked up or created. It is an error to attempt to create a file whose immediate parent does not yet exist.
     * @param options 
     *     <ul>
     *     <li> If create and exclusive are both true and the path already exists, getFile must fail.</li>
     *     <li> If create is true, the path doesn't exist, and no other error occurs, getFile must create it as a zero-length file and return a corresponding FileEntry.</li>
     *     <li> If create is not true and the path doesn't exist, getFile must fail.</li>
     *     <li> If create is not true and the path exists, but is a directory, getFile must fail.</li>
     *     <li> Otherwise, if no other error occurs, getFile must return a FileEntrySync corresponding to path.</li>
     *     </ul>
     */
    getFile(path:string, options?:Flags):FileEntrySync;

    /** 
     * Creates or looks up a directory.
     * @param path Either an absolute path or a relative path from this DirectoryEntrySync to the directory to be looked up or created. It is an error to attempt to create a directory whose immediate parent does not yet exist.
     * @param options 
     *     <ul>
     *     <li> If create and exclusive are both true and the path already exists, getDirectory must fail.</li>
     *     <li> If create is true, the path doesn't exist, and no other error occurs, getDirectory must create and return a corresponding DirectoryEntry.</li>
     *     <li> If create is not true and the path doesn't exist, getDirectory must fail.</li>
     *     <li> If create is not true and the path exists, but is a file, getDirectory must fail.</li>
     *     <li> Otherwise, if no other error occurs, getDirectory must return a DirectoryEntrySync corresponding to path.</li>
     *     </ul>
     */
    getDirectory(path:string, options?:Flags):DirectoryEntrySync;

    /**
     * Deletes a directory and all of its contents, if any. In the event of an error [e.g. trying to delete a directory that contains a file that cannot be removed], some of the contents of the directory may be deleted. It is an error to attempt to delete the root directory of a filesystem.
     */
    removeRecursively():void;
}

/**
 * This interface lets a user list files and directories in a directory. If there are no additions to or deletions from a directory between the first and last call to readEntries, and no errors occur, then:
 * <ul>
 * <li> A series of calls to readEntries must return each entry in the directory exactly once.</li>
 * <li> Once all entries have been returned, the next call to readEntries must produce an empty array.</li>
 * <li> If not all entries have been returned, the array produced by readEntries must not be empty.</li>
 * <li> The entries produced by readEntries must not include the directory itself ["."] or its parent [".."].</li>
 * </ul>
 */
interface DirectoryReaderSync {
    /**
     * Read the next block of entries from this directory.
     */
    readEntries():EntrySync[];
}

/**
 * This interface represents a file on a file system.
 */
interface FileEntrySync extends EntrySync {
    /**
     * Creates a new FileWriterSync associated with the file that this FileEntrySync represents.
     */
    createWriter():FileWriterSync;

    /**
     * Returns a File that represents the current state of the file that this FileEntrySync represents.
     */
    file():File;
}

interface Window extends LocalFileSystem, LocalFileSystemSync{
}

interface WorkerGlobalScope extends LocalFileSystem, LocalFileSystemSync{
}
