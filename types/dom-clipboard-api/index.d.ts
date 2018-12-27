// Type definitions for w3c Clipboard API 1.0
// Project: https://w3c.github.io/clipboard-apis/
// Definitions by: James Garbutt <https://github.com/43081j>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Clipboard extends EventTarget {
  read(): Promise<DataTransfer>;
  readText(): Promise<string>;
  write(data: DataTransfer): Promise<void>;
  writeText(data: string): Promise<void>;
}

interface Navigator {
  readonly clipboard: Clipboard;
}
