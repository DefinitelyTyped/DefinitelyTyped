// Type definitions for electron-clipboard-extended 1.x
// Project: https://github.com/arjun-g/electron-clipboard-extended
// Definitions by: Jungwoo An <https://github.com/Jungwoo-An>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import * as Electron from 'electron';

interface ClipboardExtended extends Electron.Clipboard {
    off: (event: string, listener?: () => void) => void;
    startWatching: () => void;
    stopWatching: () => void;
}

declare const clipboard: ClipboardExtended;

export = clipboard;
