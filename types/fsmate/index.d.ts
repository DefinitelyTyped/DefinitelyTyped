// CommonJS ke bajay TypeScript / ES Module syntax use karenge
import * as fs from "fs";
import * as path from "path";

interface FileInfo {
  name: string;
  path: string;
  size: number;
}

/**
 * Get list of files from a directory
 */
function getFiles(dirPath: string): FileInfo[] {
  const files: string[] = fs.readdirSync(dirPath);
  return files.map((file) => {
    const filePath = path.join(dirPath, file);
    const stats = fs.statSync(filePath);
    return {
      name: file,
      path: filePath,
      size: stats.size,
    };
  });
}

const result: FileInfo[] = getFiles("./");
console.log(result);
