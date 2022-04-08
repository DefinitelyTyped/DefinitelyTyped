/**
 * On macOS, tries to find a known running editor process and opens the file in
 * it. It can also be explicitly configured by `REACT_EDITOR`, `VISUAL`, or
 * `EDITOR` environment variables. For example, you can put `REACT_EDITOR=atom`
 * in your `.env.local` file, and Create React App will respect that.
 */
declare function launchEditor(fileName: string, lineNumber: number, colNumber?: number): void;
export = launchEditor;
