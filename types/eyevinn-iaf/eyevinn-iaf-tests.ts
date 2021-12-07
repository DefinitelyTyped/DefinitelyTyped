import { IafUploadModule, IafFileWatchModule } from 'eyevinn-iaf';
import { Readable } from 'stream';
import { Logger } from 'winston';

class FileUploader implements IafUploadModule {
    logger: Logger;
    playlistName: string;
    progressDelegate: (result: any) => any;
    fileUploadedDelegate: (result: any) => any;

    onFileAdd(filePath: string, readStream: Readable, contentType?: string): void {}
}

class FileWatcher implements IafFileWatchModule {
    fileInput: string;
    logger: Logger;

    onAdd(callback: (filePath: string, readStream: Readable, contentType?: string) => any): void {}
}

const fileWatchModule = new FileWatcher();
const fileUploaderModule = new FileUploader();
