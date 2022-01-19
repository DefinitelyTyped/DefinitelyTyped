import { IafUploadModule, IafFileWatchModule, ILogger } from 'eyevinn-iaf';
import { Readable } from 'stream';

class FileUploader implements IafUploadModule {
    logger: ILogger;
    playlistName: string;
    progressDelegate: () => any;
    fileUploadedDelegate: () => any;
  
    onFileAdd(filePath: string, readStream: Readable, contentType?: string): void {}
}

class FileWatcher implements IafFileWatchModule {
    fileInput: string;
    logger: ILogger;

    onAdd(callback: (filePath: string, readStream: Readable, contentType?: string) => any): void {}
}

const fileWatchModule = new FileWatcher();
const fileUploaderModule = new FileUploader();
