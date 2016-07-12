// Type definitions for Microsoft Scripting Runtime
// Project: https://msdn.microsoft.com/en-us/library/bstcxhf7.aspx
// Definitions by: Zev Spitz <https://github.com/zspitz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Scripting {

    //Enums
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

    //Interfaces
    interface Dictionary {
        Add: (Key: any, Item: any) => void;
        CompareMode: CompareMethod;
        Count: number;
        Exists: (Key: any) => boolean;
        HashVal: (Key: any) => any;
        Item: (Key: any) => any;   //Also has setter with parameters
        Items: () => any;
        Key: (Key: any) => any;
        Keys: () => any;
        Remove: (Key: any) => void;
        RemoveAll: () => void;
    }

    interface Drive {
        AvailableSpace: any;
        DriveLetter: string;
        DriveType: DriveTypeConst;
        FileSystem: string;
        FreeSpace: any;
        IsReady: boolean;
        Path: string;
        RootFolder: Folder;
        SerialNumber: number;
        ShareName: string;
        TotalSize: any;
        VolumeName: string;
    }

    interface Drives {
        Count: number;
        Item: (Key: any) => Drive;
    }

    interface Encoder {
        EncodeScriptFile: (szExt: string, bstrStreamIn: string, cFlags: number, bstrDefaultLang: string) => string;
    }

    interface File {
        Attributes: FileAttribute;
        Copy: (Destination: string, OverWriteFiles?: boolean) => void;
        DateCreated: VarDate;
        DateLastAccessed: VarDate;
        DateLastModified: VarDate;
        Delete: (Force?: boolean) => void;
        Drive: Drive;
        Move: (Destination: string) => void;
        Name: string;
        OpenAsTextStream: (IOMode?: IOMode, Format?: Tristate) => TextStream;
        ParentFolder: Folder;
        Path: string;
        ShortName: string;
        ShortPath: string;
        Size: any;
        Type: string;
    }

    interface Files {
        Count: number;
        Item: (Key: any) => File;
    }

    interface FileSystemObject {
        BuildPath: (Path: string, Name: string) => string;
        CopyFile: (Source: string, Destination: string, OverWriteFiles?: boolean) => void;
        CopyFolder: (Source: string, Destination: string, OverWriteFiles?: boolean) => void;
        CreateFolder: (Path: string) => Folder;
        CreateTextFile: (FileName: string, Overwrite?: boolean, Unicode?: boolean) => TextStream;
        DeleteFile: (FileSpec: string, Force?: boolean) => void;
        DeleteFolder: (FolderSpec: string, Force?: boolean) => void;
        DriveExists: (DriveSpec: string) => boolean;
        Drives: Drives;
        FileExists: (FileSpec: string) => boolean;
        FolderExists: (FolderSpec: string) => boolean;
        GetAbsolutePathName: (Path: string) => string;
        GetBaseName: (Path: string) => string;
        GetDrive: (DriveSpec: string) => Drive;
        GetDriveName: (Path: string) => string;
        GetExtensionName: (Path: string) => string;
        GetFile: (FilePath: string) => File;
        GetFileName: (Path: string) => string;
        GetFileVersion: (FileName: string) => string;
        GetFolder: (FolderPath: string) => Folder;
        GetParentFolderName: (Path: string) => string;
        GetSpecialFolder: (SpecialFolder: SpecialFolderConst) => Folder;
        GetStandardStream: (StandardStreamType: StandardStreamTypes, Unicode?: boolean) => TextStream;
        GetTempName: () => string;
        MoveFile: (Source: string, Destination: string) => void;
        MoveFolder: (Source: string, Destination: string) => void;
        OpenTextFile: (FileName: string, IOMode?: IOMode, Create?: boolean, Format?: Tristate) => TextStream;
    }

    interface Folder {
        Attributes: FileAttribute;
        Copy: (Destination: string, OverWriteFiles?: boolean) => void;
        CreateTextFile: (FileName: string, Overwrite?: boolean, Unicode?: boolean) => TextStream;
        DateCreated: VarDate;
        DateLastAccessed: VarDate;
        DateLastModified: VarDate;
        Delete: (Force?: boolean) => void;
        Drive: Drive;
        Files: Files;
        IsRootFolder: boolean;
        Move: (Destination: string) => void;
        Name: string;
        ParentFolder: Folder;
        Path: string;
        ShortName: string;
        ShortPath: string;
        Size: any;
        SubFolders: Folders;
        Type: string;
    }

    interface Folders {
        Add: (Name: string) => Folder;
        Count: number;
        Item: (Key: any) => Folder;
    }

    interface TextStream {
        AtEndOfLine: boolean;
        AtEndOfStream: boolean;
        Close: () => void;
        Column: number;
        Line: number;
        Read: (Characters: number) => string;
        ReadAll: () => string;
        ReadLine: () => string;
        Skip: (Characters: number) => void;
        SkipLine: () => void;
        Write: (Text: string) => void;
        WriteBlankLines: (Lines: number) => void;
        WriteLine: (Text?: string) => void;
    }

}

interface ActiveXObject {
    new (progID: 'Scripting.Dictionary'): Scripting.Dictionary;
    new (progID: 'Scripting.FileSystemObject'): Scripting.FileSystemObject;
    new (progID: 'Scripting.Encoder'): Scripting.Encoder;
}

