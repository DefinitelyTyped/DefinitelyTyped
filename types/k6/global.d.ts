import { bytes } from '.';

// Available without importing
declare global {
    // Init context only
    function open(filePath: string): string;
    function open(filePath: string, mode: 'b'): bytes;
}
