import { S3Client } from "@aws-sdk/client-s3";
import { Archiver, ArchiverOptions, EntryData, Format } from "archiver";

declare namespace S3Zip {
    interface ArchiveOptions {
        s3?: S3Client;
        region?: string;
        bucket: string;
        debug?: boolean;
        preserveFolderStructure?: boolean;
    }
}

interface S3Zip {
    archive(
        opts: S3Zip.ArchiveOptions,
        folder: string | undefined,
        filesS3: string[],
        filesZip?: EntryData[],
    ): Archiver;

    setFormat(format: Format): this;

    setArchiverOptions(archiverOpts: ArchiverOptions): this;

    // eslint-disable-next-line @typescript-eslint/ban-types -- Function
    setRegisterFormatOptions(registerFormat: string, formatModule: Function): this;
}

declare const S3Zip: S3Zip;

export = S3Zip;
