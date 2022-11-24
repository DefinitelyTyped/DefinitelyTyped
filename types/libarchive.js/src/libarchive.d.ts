import { CompressedFile } from './compressed-file';

export interface FilesObject { [key: string]: FilesObject | CompressedFile | File; }

export class Archive {
  static init(options?: { workerUrl: string }): { workerUrl: string };

  static open(file: File, options?: { workerUrl: string }): Promise<Archive>;

  constructor(file: File, options: { workerUrl: string });

  open(): Promise<Archive>;

  hasEncryptedData(): Promise<boolean | null>;

  usePassword(archivePassword: string | number): Promise<void>;

  getFilesObject(): Promise<FilesObject>;

  getFilesArray(): Promise<Array<{ file: File | CompressedFile, path: string }>>;

  extractFiles(extractCallback?: (entry: { file: File, path: string }) => void): Promise<FilesObject>;

  extractSingleFile(path: string): Promise<File>;
}
