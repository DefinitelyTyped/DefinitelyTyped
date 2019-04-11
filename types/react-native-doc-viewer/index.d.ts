// Type definitions for react-native-doc-viewer 2.7
// Project: https://github.com/philipphecht/react-native-doc-viewer/blob/master/README.md
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export function openDoc(
    files: Array<{
        url: string;
        fileName?: string,
        fileNameOptional?: string,
        cache?: boolean,
        fileType?: string
    }>,
    callback: (error: string, url: string) => void
): void;

export function openDocb64(
    files: Array<{ base64: string; fileName?: string; fileType?: string }>,
    callback: (error: string, url: string) => void
): void;

export function openDocBinaryinUrl(
    files: Array<{ url: string; fileName?: string; fileType?: string }>,
    callback: (error: string, url: string) => void
): void;

export function playMovie(
    path: string,
    callback: (error: string, url: string) => void
): void;
