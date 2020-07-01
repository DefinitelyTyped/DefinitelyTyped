declare function getComponentFiles(filename: string): getComponentFiles.ComponentFiles | null;

declare namespace getComponentFiles {
  interface ComponentFiles {
    styles: string[];
    file: string | null;
    browserFile: string | null;
    package: string | null;
  }
}

export = getComponentFiles;
