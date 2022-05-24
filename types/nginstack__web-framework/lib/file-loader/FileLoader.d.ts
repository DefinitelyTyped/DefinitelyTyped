export = FileLoader;
declare function FileLoader(): void;
declare class FileLoader {
    private lobStorage_;
    private virtualFS_;
    private unionFS_;
    private logger_;
    private basePath_;
    private fileLifetime_;
    private formatManifestFileName_;
    private formatFilesDirName_;
    private formatFilesDirNameTemp_;
    private formatDataFileName_;
    private formatDataFileNameTemp_;
    private formatMetadataFileName_;
    private isAMetadataFile_;
    private tryOpenManifest_;
    private openManifest_;
    private saveManifest_;
    private createUID_;
    authorizeUpload(options: UploadOptions | Record<any, any>): string;
    handleUploadRequest(uploadId: string, request: Request): FileInfoUpload[];
    deleteUploadedFile(uploadId: string, fileId: string): boolean;
    getUploadedFiles(uploadId: string): UploadedFile[];
    private getFileInfoFromVfs_;
    private getFileInfoFromLob_;
    private getFileInfoFromUfs_;
    private getFileInfoFromVfsPath_;
    private getFileInfoFromFilePath_;
    private getFileInfo_;
    authorizeDownload(
        files: string | number | DBKey | Array<string | number | DBKey>,
        options: DownloadOptions | Record<any, any>
    ): string;
    tryGetDownloadFile(downloadId: string): DownloadFile;
    purgeExpiredFiles(): void;
}
declare namespace FileLoader {
    export { Request, FileInfoUpload, FileInfo };
}
import UploadOptions = require('./UploadOptions.js');
type Request = import('@nginstack/engine/lib/http/Request');
interface FileInfoUpload {
    fileId: string;
    name: string;
    size: number;
    lastModified: number;
    contentType: string;
}
import UploadedFile = require('./UploadedFile.js');
import DBKey = require('@nginstack/engine/lib/dbkey/DBKey.js');
import DownloadOptions = require('./DownloadOptions.js');
import DownloadFile = require('./DownloadFile.js');
interface FileInfo {
    name: string;
    filePath: string;
    contentType: string;
}
