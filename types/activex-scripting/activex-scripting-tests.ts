const collectionToArray = <T>(col: { Item(key: any): T }): T[] => {
    const results: T[] = [];
    const enumerator = new Enumerator<T>(col);
    enumerator.moveFirst();
    while (!enumerator.atEnd()) {
        results.push(enumerator.item());
        enumerator.moveNext();
    }
    return results;
};

const fso = new ActiveXObject('Scripting.FileSystemObject');

// https://msdn.microsoft.com/en-us/library/ebkhfaaz(v=vs.84).aspx
(() => {
    /** Generates a string describing the drive type of a given Drive object. */
    const driveTypeString = (drive: Scripting.Drive) => {
        switch (drive.DriveType) {
            case Scripting.DriveTypeConst.Removable:
                return 'Removeable';
            case Scripting.DriveTypeConst.Fixed:
                return 'Fixecd';
            case Scripting.DriveTypeConst.Remote:
                return 'Network';
            case Scripting.DriveTypeConst.CDRom:
                return 'CD-ROM';
            case Scripting.DriveTypeConst.RamDisk:
                return 'RAM Disk';
            default:
                return 'Unknown';
        }
    };

    /** Generates a string describing the attributes of a file or folder. */
    const attributesString = (f: Scripting.File | Scripting.Folder) => {
        const attr = f.Attributes;
        if (attr === 0) {
            return 'Normal';
        }
        const attributeStrings: string[] = [];
        if (attr & Scripting.FileAttribute.Directory) { attributeStrings.push('Directory'); }
        if (attr & Scripting.FileAttribute.ReadOnly) { attributeStrings.push('Read-only'); }
        if (attr & Scripting.FileAttribute.Hidden) { attributeStrings.push('Hidden'); }
        if (attr & Scripting.FileAttribute.System) { attributeStrings.push('System'); }
        if (attr & Scripting.FileAttribute.Volume) { attributeStrings.push('Volume'); }
        if (attr & Scripting.FileAttribute.Archive) { attributeStrings.push('Archive'); }
        if (attr & Scripting.FileAttribute.Alias) { attributeStrings.push('Alias'); }
        if (attr & Scripting.FileAttribute.Compressed) { attributeStrings.push('Compressed'); }
        return attributeStrings.join(',');
    };

    const drivesInfoReport = () => {
        const driveLine = (d: Scripting.Drive) => {
            let parts: Array<string | number> = [
                d.DriveLetter,
                d.Path,
                driveTypeString(d),
                d.IsReady ? 'true' : 'false'
            ];
            if (d.IsReady) {
                parts = parts.concat([
                    d.DriveType === Scripting.DriveTypeConst.Remote ? d.ShareName : d.VolumeName,
                    d.FileSystem,
                    d.TotalSize,
                    d.FreeSpace,
                    d.AvailableSpace,
                    d.SerialNumber.toString(16)
                ]);
            }
            return parts.join('    ');
        };

        const ret = `
Number of drives:    ${fso.Drives.Count}

        Drive        File    Total   Free    Available    Serial
Letter    Path    Type    Ready?    Name    System    Space    Space     Space    Number
${new Array(106).join('-')}
${collectionToArray(fso.Drives).map(driveLine).join('\n')}`
            .trim().replace('    ', '\t');
    };

    type fiileFolderKey = keyof Scripting.File & keyof Scripting.Folder;
    type keys = fiileFolderKey | 'Attribs' | 'Created' | 'Accessed' | 'Modified';
    const detailBuilder = (f: Scripting.File | Scripting.Folder, x: fiileFolderKey | 'Attribs' | 'Created' | 'Accessed' | 'Modified') => {
        if (x === 'Attribs') { return attributesString(f); }
        const label = x;
        switch (x) {
            case 'Created':
                x = 'DateCreated';
                break;
            case 'Accessed':
                x = 'DateLastAccessed';
                break;
            case 'Modified':
                x = 'DateLastModified';
                break;
        }
        return `${label}\t${f[x]}\n`;
    };

    const fileDetailsString = (f: Scripting.File) => {
        const keys: keys[] = ['Path', 'Name', 'Type', 'Attribs', 'Created', 'Accessed', 'Modified', 'Size'];
        return keys.map(x => detailBuilder(f, x)).join('');
    };

    const folderDetailsString = (f: Scripting.Folder) => {
        const keys: keys[] = ['Path', 'Name', 'Attribs', 'Created', 'Accessed', 'Modified', 'Size'];
        return keys.map(x => detailBuilder(f, x)).join('');
    };

    const folderContentsString = (f: Scripting.Folder): string => {
        const files = collectionToArray(f.Files);
        const subfolders = collectionToArray(f.SubFolders);
        return `
Folder:    ${f.Path}

There ${files.length === 1 ? 'is 1 file' : `are ${files.length} files`}
${files.map(fileDetailsString).join('')}

There ${subfolders.length === 1 ? 'is 1 subfolder' : `are ${subfolders.length} subfolders`}
${subfolders.map(folderDetailsString).join('')}
${subfolders.map(folderContentsString).join('')}`
            .trim().replace('    ', '\t');
    };

    const testDrive = 'C:\\';
    const testPath = 'C:\\test';
    const testfolderInfo = () => {
        if (!fso.DriveExists(testDrive) || !fso.FolderExists(testPath)) { return ''; }
        return folderContentsString(fso.GetFolder(testPath));
    };

    const deleteTestFolder = () => {
        // two ways to delete a file:
        const filepathToDelete = `${testPath}\\LoremIpsum\Paragraph1.txt`;
        fso.DeleteFile(filepathToDelete);
        fso.GetFile(filepathToDelete).Delete();

        // two ways to delete a folder:
        const folderpathToDelete = `${testPath}\\LoremIpsum`;
        fso.DeleteFolder(folderpathToDelete);
        fso.GetFolder(folderpathToDelete).Delete();
    };

    const createLyrics = (folder: Scripting.Folder) => {
        let stream = folder.CreateTextFile('Paragraph1.txt');
        stream.Write('Lorem Ipsum - Paragraph 1');
        stream.WriteBlankLines(1);
        stream.WriteLine('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas sem.');
        stream.WriteLine('Donec ante. Nulla facilisi. Phasellus interdum nulla a nunc. Morbi laoreet nunc.');
        stream.WriteBlankLines(2);
        stream.Close();

        stream = folder.CreateTextFile('Paragraph2.txt');
        stream.WriteLine('Lorem Ipsum - Paragraph 2');
        stream.WriteBlankLines(1);
        stream.WriteLine('Nullam nulla quam, sollicitudin ut, lobortis ornare, tristique a, augue.');
        stream.WriteLine('Vestibulum sem felis, fermentum eu, volutpat eu, vulputate eget, elit. ');
        stream.WriteBlankLines(2);
        stream.Close();
    };

    const getLyrics = () => {
        const folderPath = `${testPath}\\LoremIpsum`;
        let lyrics = '';

        // One way to read from a file
        let stream = fso.OpenTextFile(fso.BuildPath(folderPath, 'Paragraph1.txt'));
        lyrics = stream.ReadAll() + '\n\n';
        stream.Close();

        // Another way to read from a file
        stream = fso.GetFile(fso.BuildPath(folderPath, 'Paragraph2.txt')).OpenAsTextStream();
        while (!stream.AtEndOfStream) {
            lyrics += stream.ReadLine() + '\n';
        }
        stream.Close();

        return lyrics;
    };

    const buildTestFolder = () => {
        // Bail out if the drive doesn't exists ...
        if (!fso.DriveExists(testDrive)) { return false; }
        // or the directory already exists
        if (fso.FolderExists(testPath)) { return false; }

        const testFolder = fso.CreateFolder(testPath);

        const stream = fso.CreateTextFile(fso.BuildPath(testPath, 'readme.txt'));
        stream.WriteLine('My sample text collection');
        stream.Close();

        const subfolder = testFolder.SubFolders.Add('LoremIpsum');
        createLyrics(subfolder);
        return true;
    };

    const echoLines = (linecount = 1) => new Array(linecount).forEach(() => WScript.Echo(''));

    if (!buildTestFolder()) {
        WScript.Echo('Test directory already exists or cannot be created. Cannot continue.');
        return;
    }

    WScript.Echo(drivesInfoReport);
    echoLines(2);
    WScript.Echo(testfolderInfo);
    echoLines(2);
    WScript.Echo(getLyrics());
    echoLines(2);
    deleteTestFolder();
})();

// source --https://msdn.microsoft.com/en-us/library/ts2t8ybh(v=vs.84).aspx
const showFreeSpace = (drvPath: string) => {
    const d = fso.GetDrive(fso.GetDriveName(drvPath));
    let s = `Drive ${drvPath} - `;
    s += d.VolumeName + '<br>';
    s += `Free Space: ${d.FreeSpace / 1024} Kbytes`;
    return (s);
};

// source -- https://msdn.microsoft.com/en-us/library/kaf6yaft(v=vs.84).aspx
const getALine = (filespec: string) => {
    const file = fso.OpenTextFile(filespec, Scripting.IOMode.ForReading, false);

    let s = '';
    while (!file.AtEndOfLine) {
        s += file.Read(1);
    }
    file.Close();
    return (s);
};

// https://msdn.microsoft.com/en-us/library/ch28h2s7(v=vs.84).aspx
(() => {
    const showDriveInfo = (path: string) => {
        const bytesPerGB = 1024 * 1024 * 1024;
        const drv = fso.GetDrive(fso.GetDriveName(path));
        const ret =
            drv.IsReady ?
            `${drv.Path} - ${drv.FreeSpace / bytesPerGB} GB free of ${drv.TotalSize / bytesPerGB} GB` :
            'Not ready';
        WScript.Echo(ret);
    };

    const showFolderInfo = () => {
        const fldr = fso.GetFolder("c:\\");
        let ret = `
Folder: ${fldr.Path}
Drive: ${fldr.Drive}
${fldr.IsRootFolder ? 'Is root folder' : `Parent folder: ${fldr.ParentFolder}`}
        `.trim();

        // Create and delete a folder.
        const newFolderName = 'C:\\TempFolder1';
        fso.CreateFolder(newFolderName);
        ret += `Base Name of Added Folder: ${fso.GetBaseName(newFolderName)}`;
        fso.DeleteFolder(newFolderName);

        WScript.Echo(ret);
    };
})();
