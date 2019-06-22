import { bytes } from '.';

// Available without importing
// Only available in init context
declare global {
    function open(filePath: string): string;
    function open(filePath: string, mode: 'b'): bytes;
}
