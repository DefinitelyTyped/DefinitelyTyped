import { S3Client } from "@aws-sdk/client-s3";
import * as s3Zip from "s3-zip";

const region = "bucket-region";
const bucket = "name-of-s3-bucket";
const folder = "name-of-bucket-folder/";
const file1 = "Image A.png";
const file2 = "Image B.png";
const file3 = "Image C.png";
const file4 = "Image D.png";
const s3Client = new S3Client();

function testArchive(): void {
    s3Zip.archive({ region: region, bucket: bucket }, folder, [file1, file2, file3, file4]);
}

function testArchiveOptions(): void {
    const opts: s3Zip.ArchiveOptions = {
        s3: s3Client,
        region: region,
        bucket: bucket,
        debug: true,
        preserveFolderStructure: true,
    };

    s3Zip.archive(opts, folder, [file1, file2, file3, file4]);
}

function testArchiveWithCustomS3Client(): void {
    s3Zip.archive({ s3: s3Client, bucket: bucket }, folder, [file1, file2, file3, file4]);
}

function testArchiveWithDebug(): void {
    s3Zip.archive({ region: region, bucket: bucket, debug: true }, folder, [file1, file2, file3, file4]);
}

function testArchiveWithPreserveFolderStructure(): void {
    s3Zip.archive({ region: region, bucket: bucket, preserveFolderStructure: true }, folder, [
        file1,
        file2,
        file3,
        file4,
    ]);
}

function testArchiveWithCustomPathsAndPermissions(): void {
    const files = ["flower.jpg", "road.jpg"];
    const archiveFiles = [
        { name: "newFolder/flower.jpg" },

        /* _rw_______ */
        { name: "road.jpg", mode: parseInt("0600", 8) },
    ];
    s3Zip.archive({ region: region, bucket: bucket }, folder, files, archiveFiles);
}

function testSetFormat(): void {
    s3Zip.setFormat("zip");
}

function testSetArchiverOptions(): void {
    s3Zip.setArchiverOptions({ zlib: { level: 9 } });
}

function testSetRegisterFormatOptions(): void {
    s3Zip.setRegisterFormatOptions("zip", require("fs"));
}

function testChaining(): void {
    s3Zip
        .setFormat("zip")
        .setArchiverOptions({ zlib: { level: 9 } })
        .setRegisterFormatOptions("zip", require("fs"))
        .archive({ region: region, bucket: bucket }, folder, [file1, file2, file3, file4]);
}
