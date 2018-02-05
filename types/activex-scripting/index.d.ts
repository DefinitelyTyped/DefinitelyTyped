// Type definitions for Microsoft Scripting Runtime 1.0
// Project: https://msdn.microsoft.com/en-us/library/bstcxhf7(v=vs.84).aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Scripting {
    const enum CompareMethod {
        BinaryCompare = 0,
        DatabaseCompare = 2,
        TextCompare = 1
    }

    const enum DriveTypeConst {
        CDRom = 4,
        Fixed = 2,
        RamDisk = 5,
        Remote = 3,
        Removable = 1,
        UnknownType = 0
    }

    const enum FileAttribute {
        Alias = 1024,
        Archive = 32,
        Compressed = 2048,
        Directory = 16,
        Hidden = 2,
        Normal = 0,
        ReadOnly = 1,
        System = 4,
        Volume = 8
    }

    const enum IOMode {
        ForAppending = 8,
        ForReading = 1,
        ForWriting = 2
    }

    const enum SpecialFolderConst {
        SystemFolder = 1,
        TemporaryFolder = 2,
        WindowsFolder = 0
    }

    const enum StandardStreamTypes {
        StdErr = 2,
        StdIn = 0,
        StdOut = 1
    }

    const enum Tristate {
        TristateFalse = 0,
        TristateMixed = -2,
        TristateTrue = -1,
        TristateUseDefault = -2
    }

    /** Scripting.Dictionary */
    interface Dictionary<TKey = any, TItem = any> {
        /** Add a new key and item to the dictionary. */
        Add(Key: TKey, Item: TItem): void;

        /** Set or get the string comparison method. */
        CompareMode: CompareMethod;

        /** Get the number of items in the dictionary. */
        readonly Count: number;

        /** Determine if a given key is in the dictionary. */
        Exists(Key: TKey): boolean;
        HashVal(Key: TKey): any;

        /** Set or get the item for a given key */
        Item(Key: TKey): TItem;

        /** Get an array containing all items in the dictionary. */
        Items(): SafeArray<TItem>;

        /** Change a key to a different key. */
        Key(Key: TKey): TKey;

        /** Get an array containing all keys in the dictionary. */
        Keys(): SafeArray<TKey>;

        /** Remove a given key from the dictionary. */
        Remove(Key: TKey): void;

        /** Remove all information from the dictionary. */
        RemoveAll(): void;
    }

    /** Drive Object */
    interface Drive {
        /** Get available space */
        readonly AvailableSpace: number;

        /** Drive letter */
        readonly DriveLetter: string;

        /** Drive type */
        readonly DriveType: DriveTypeConst;

        /** Filesystem type */
        readonly FileSystem: string;

        /** Get drive free space */
        readonly FreeSpace: number;

        /** Check if disk is available */
        readonly IsReady: boolean;

        /** Path */
        readonly Path: string;

        /** Root folder */
        readonly RootFolder: Folder;

        /** Serial number */
        readonly SerialNumber: number;

        /** Share name */
        readonly ShareName: string;

        /** Get total drive size */
        readonly TotalSize: number;

        /** Name of volume */
        VolumeName: string;
    }

    /** Collection of drives associated with drive letters */
    interface Drives {
        /** Number of drives */
        readonly Count: number;

        /** Get drive using the drive letter (`C`) or path (`C:\\`) */
        Item(Key: string): Drive;
    }

    /** Script Encoder Object */
    interface Encoder {
        /** Call the Encoder determined by szExt, passing bstrStreamIn and optional arguments */
        EncodeScriptFile(szExt: string, bstrStreamIn: string, cFlags: number, bstrDefaultLang: string): string;
    }

    /** File object */
    interface File {
        /** File attributes */
        Attributes: FileAttribute;

        /**
         * Copy this file
         * @param boolean [OverWriteFiles=true]
         */
        Copy(Destination: string, OverWriteFiles?: boolean): void;

        /** Date file was created */
        readonly DateCreated: VarDate;

        /** Date file was last accessed */
        readonly DateLastAccessed: VarDate;

        /** Date file was last modified */
        readonly DateLastModified: VarDate;

        /**
         * Delete this file
         * @param boolean [Force=false]
         */
        Delete(Force?: boolean): void;

        /** Get drive that contains file */
        readonly Drive: Drive;

        /** Move this file */
        Move(Destination: string): void;

        /** Get name of file */
        Name: string;

        /**
         * Open a file as a TextStream
         * @param Scripting.IOMode [IOMode=1]
         * @param Scripting.Tristate [Format=0]
         */
        OpenAsTextStream(IOMode?: IOMode, Format?: Tristate): TextStream;

        /** Get folder that contains file */
        readonly ParentFolder: Folder;

        /** Path to the file */
        readonly Path: string;

        /** Short name */
        readonly ShortName: string;

        /** Short path */
        readonly ShortPath: string;

        /** File size */
        readonly Size: number;

        /** Type description */
        readonly Type: string;
    }

    /** Collection of files in a folder */
    interface Files {
        /** Number of folders */
        readonly Count: number;

        /** Get file object using the name and extension of the file */
        Item(Key: string): File;
    }

    /** FileSystem Object */
    interface FileSystemObject {
        /** Generate a path from an existing path and a name */
        BuildPath(Path: string, Name: string): string;

        /**
         * Copy a file
         * @param boolean [OverWriteFiles=true]
         */
        CopyFile(Source: string, Destination: string, OverWriteFiles?: boolean): void;

        /**
         * Copy a folder
         * @param boolean [OverWriteFiles=true]
         */
        CopyFolder(Source: string, Destination: string, OverWriteFiles?: boolean): void;

        /** Create a folder */
        CreateFolder(Path: string): Folder;

        /**
         * Create a file as a TextStream
         * @param boolean [Overwrite=true]
         * @param boolean [Unicode=false]
         */
        CreateTextFile(FileName: string, Overwrite?: boolean, Unicode?: boolean): TextStream;

        /**
         * Delete a file
         * @param boolean [Force=false]
         */
        DeleteFile(FileSpec: string, Force?: boolean): void;

        /**
         * Delete a folder
         * @param boolean [Force=false]
         */
        DeleteFolder(FolderSpec: string, Force?: boolean): void;

        /** Check if a drive or a share exists */
        DriveExists(DriveSpec: string): boolean;

        /** Get drives collection */
        readonly Drives: Drives;

        /** Check if a file exists */
        FileExists(FileSpec: string): boolean;

        /** Check if a path exists */
        FolderExists(FolderSpec: string): boolean;

        /** Return the canonical representation of the path */
        GetAbsolutePathName(Path: string): string;

        /** Return base name from a path */
        GetBaseName(Path: string): string;

        /** Get drive or UNC share */
        GetDrive(DriveSpec: string): Drive;

        /** Return drive from a path */
        GetDriveName(Path: string): string;

        /** Return extension from path */
        GetExtensionName(Path: string): string;

        /** Get file */
        GetFile(FilePath: string): File;

        /** Return the file name from a path */
        GetFileName(Path: string): string;

        /** Retrieve the file version of the specified file into a string */
        GetFileVersion(FileName: string): string;

        /** Get folder */
        GetFolder(FolderPath: string): Folder;

        /** Return path to the parent folder */
        GetParentFolderName(Path: string): string;

        /** Get location of various system folders */
        GetSpecialFolder(SpecialFolder: SpecialFolderConst): Folder;

        /**
         * Retrieve the standard input, output or error stream
         * @param boolean [Unicode=false]
         */
        GetStandardStream(StandardStreamType: StandardStreamTypes, Unicode?: boolean): TextStream;

        /** Generate name that can be used to name a temporary file */
        GetTempName(): string;

        /** Move a file */
        MoveFile(Source: string, Destination: string): void;

        /** Move a folder */
        MoveFolder(Source: string, Destination: string): void;

        /**
         * Open a file as a TextStream
         * @param Scripting.IOMode [IOMode=1]
         * @param boolean [Create=false]
         * @param Scripting.Tristate [Format=0]
         */
        OpenTextFile(FileName: string, IOMode?: IOMode, Create?: boolean, Format?: Tristate): TextStream;
    }

    /** Folder object */
    interface Folder {
        /** Folder attributes */
        Attributes: FileAttribute;

        /**
         * Copy this folder
         * @param boolean [OverWriteFiles=true]
         */
        Copy(Destination: string, OverWriteFiles?: boolean): void;

        /**
         * Create a file as a TextStream
         * @param boolean [Overwrite=true]
         * @param boolean [Unicode=false]
         */
        CreateTextFile(FileName: string, Overwrite?: boolean, Unicode?: boolean): TextStream;

        /** Date folder was created */
        readonly DateCreated: VarDate;

        /** Date folder was last accessed */
        readonly DateLastAccessed: VarDate;

        /** Date folder was last modified */
        readonly DateLastModified: VarDate;

        /**
         * Delete this folder
         * @param boolean [Force=false]
         */
        Delete(Force?: boolean): void;

        /** Get drive that contains folder */
        readonly Drive: Drive;

        /** Get files collection */
        readonly Files: Files;

        /** True if folder is root */
        readonly IsRootFolder: boolean;

        /** Move this folder */
        Move(Destination: string): void;

        /** Get name of folder */
        Name: string;

        /** Get parent folder */
        readonly ParentFolder: Folder;

        /** Path to folder */
        readonly Path: string;

        /** Short name */
        readonly ShortName: string;

        /** Short path */
        readonly ShortPath: string;

        /** Sum of files and subfolders */
        readonly Size: number;

        /** Get folders collection */
        readonly SubFolders: Folders;

        /** Type description */
        readonly Type: string;
    }

    /** Collection of subfolders in a folder */
    interface Folders {
        /** Create a new folder */
        Add(Name: string): Folder;

        /** Number of folders */
        readonly Count: number;

        /** Get folder in collection using the folder's name */
        Item(Key: string): Folder;
    }

    /** TextStream object */
    interface TextStream {
        /** Is the current position at the end of a line? */
        readonly AtEndOfLine: boolean;

        /** Is the current position at the end of the stream? */
        readonly AtEndOfStream: boolean;

        /** Close a text stream */
        Close(): void;

        /** Current column number */
        readonly Column: number;

        /** Current line number */
        readonly Line: number;

        /** Read a specific number of characters into a string */
        Read(Characters: number): string;

        /** Read the entire stream into a string */
        ReadAll(): string;

        /** Read an entire line into a string */
        ReadLine(): string;

        /** Skip a specific number of characters */
        Skip(Characters: number): void;

        /** Skip a line */
        SkipLine(): void;

        /** Write a string to the stream */
        Write(Text: string): void;

        /** Write a number of blank lines to the stream */
        WriteBlankLines(Lines: number): void;

        /**
         * Write a string and an end of line to the stream
         * @param string [Text='']
         */
        WriteLine(Text?: string): void;
    }
}

interface ActiveXObject {
    set(obj: Scripting.Dictionary, propertyName: 'Item', parameterTypes: [any], newValue: any): void;
    new(progid: 'Scripting.Dictionary'): Scripting.Dictionary;
    new(progid: 'Scripting.Encoder'): Scripting.Encoder;
    new(progid: 'Scripting.FileSystemObject'): Scripting.FileSystemObject;
}

interface EnumeratorConstructor {
    // tslint:disable-next-line:no-unnecessary-generics
    new<TKey, TItem>(col: Scripting.Dictionary<TKey, TItem>): TItem;
    new(col: Scripting.Drives): Scripting.Drive;
    new(col: Scripting.Files): Scripting.File;
    new(col: Scripting.Folders): Scripting.Folder;
}
