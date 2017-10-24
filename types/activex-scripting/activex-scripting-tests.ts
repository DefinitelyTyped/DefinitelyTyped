// source -- https://msdn.microsoft.com/en-us/library/ebkhfaaz.aspx

// Generates a string describing the drive type of a given Drive object.
function showDriveType(drive: Scripting.Drive) {
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
}

// Generates a string describing the attributes of a file or folder.
function showFileAttributes(file: Scripting.File) {
    const attr = file.Attributes;
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
}

// source --https://msdn.microsoft.com/en-us/library/ts2t8ybh(v=vs.84).aspx
function showFreeSpace(drvPath: string) {
    const fso = new ActiveXObject('Scripting.FileSystemObject');
    const d = fso.GetDrive(fso.GetDriveName(drvPath));
    let s = `Drive ${drvPath} - `;
    s += d.VolumeName + '<br>';
    s += `Free Space: ${d.FreeSpace / 1024} Kbytes`;
    return (s);
}

// source -- https://msdn.microsoft.com/en-us/library/kaf6yaft(v=vs.84).aspx
function getALine(filespec: string) {
    const fso = new ActiveXObject('Scripting.FileSystemObject');
    const file = fso.OpenTextFile(filespec, Scripting.IOMode.ForReading, false);

    let s = '';
    while (!file.AtEndOfLine) {
        s += file.Read(1);
    }
    file.Close();
    return (s);
}
