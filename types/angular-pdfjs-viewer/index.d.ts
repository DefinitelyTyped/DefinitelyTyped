// Type definitions for angular-pdfjs-viewer 1.0
// Project: https://github.com/legalthings/angular-pdfjs-viewer
// Definitions by: Bastien Moulia <https://github.com/bastienmoulia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as angular from 'angular';

declare module 'angular' {
    namespace pdfjsViewer {
        interface ConfigProvider extends IServiceProvider {
            setWorkerSrc(src: string): void;
            setCmapDir(dir: string): void;
            setImageDir(dir: string): void;
            disableWorker(): void;
            setVerbosity(verbosity: "errors" | "warnings" | "infos"): void;
        }
    }
}
