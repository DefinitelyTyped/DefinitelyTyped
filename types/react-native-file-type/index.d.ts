declare module "react-native-file-type" {
    interface FileTypeResult {
      ext: string;
      mime: string;
    }

    function FileType(uri: string): Promise<FileTypeResult | null>;

    export default FileType;
  }
