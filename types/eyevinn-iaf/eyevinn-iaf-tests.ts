import { IafUploadModule,  IafFileWatchModule} from './index';
import { Readable } from 'stream';
import winston from 'winston';


class FileUploader implements IafUploadModule {
    logger: winston.Logger;
    playlistName: string;
    progressDelegate: Function;
    fileUploadedDelegate: Function;

    onFileAdd(filePath: string, readStream: Readable, contentType?: string): void {};
}

class FileWatcher implements IafFileWatchModule {
    fileInput: string;
    logger: winston.Logger;
    onAdd(callback: (filePath: string, readStream: Readable, contentType?: string) => any): void {};

}

const fileWatchModule = new FileWatcher;
const fileUploaderModule = new FileUploader;
