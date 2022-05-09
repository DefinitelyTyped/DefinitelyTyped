// Type definitions for godot html export 3.4
// Project: https://github.com/GaneshSPatil/chai-arrays
// Definitions by: John Teasdale <https://github.com/JPTeasdale>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

declare global {
    class Engine {
        constructor(options: Godot.EngineConfig);
        static load(basePath?: string): Promise<unknown>;
        static unload(): void;
        static isWebGLAvailable(majorVersion?: number): boolean;
        init(basePath?: string): Promise<unknown>;
        preloadFile(file: string | ArrayBuffer, path?: string): Promise<unknown>;
        start(configOverrides?: Godot.EngineConfig): Promise<unknown>;
        startGame(onfigOverrides?: Godot.EngineConfig): Promise<unknown>;
        copyToFs(path: string, buffer: ArrayBuffer): void;
        requestQuit(): void;
    }

    namespace Godot {
        interface EngineConfig {
            unloadAfterInit?: boolean;
            canvas?: HTMLCanvasElement;
            executable?: string;
            mainPack?: string;
            locale?: string;
            canvasResizePolicy?: CanvasResizePolicy;
            args?: string[];
            onExecute?: (path: string, args: ReadonlyArray<string>) => void;
            onExit?: (statusCode: number) => void;
            onProgress?: (current: number, total: number) => void;
            onPrint?: (args: ReadonlyArray<unknown>) => void;
            onPrintError?: (args: ReadonlyArray<unknown>) => void;
        }

        type CanvasResizePolicyNone = 0;
        type CanvasResizePolicyOnStart = 1;
        type CanvasResizePolicyFullWindow = 2;
        type CanvasResizePolicy = CanvasResizePolicyNone | CanvasResizePolicyOnStart | CanvasResizePolicyFullWindow;
    }
}

export { };
