// index.d.ts

declare module "fsmate" {
  export interface FileInfo {
    name: string;
    path: string;
    size: number;
  }

  /**
   * Get list of files from a directory
   */
  export function getFiles(dirPath: string): FileInfo[];
}
