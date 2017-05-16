// Type definitions for angular-pdfjs-viewer 1.0
// Project: https://github.com/legalthings/angular-pdfjs-viewer
// Definitions by: My Self <https://github.com/bastienmoulia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as angular from 'angular';

declare module 'angular' {
    export namespace pdfjsViewer {
        interface ConfigProvider {
            setWorkerSrc(src: string): void;
            setCmapDir(dir: string): void;
            setImageDir(dir: string): void;
            disableWorker(): void;
            setVerbosity(verbosity: "errors" | "warnings" | "infos"): void;
        }
    }
}
