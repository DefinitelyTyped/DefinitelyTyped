import { FileUpload } from './';

export { FileUpload };

export default class Upload {
    promise: Promise<FileUpload>;
    file?: FileUpload;
}
