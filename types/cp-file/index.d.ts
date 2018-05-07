// Type definitions for cp-file 4.2
// Project: https://github.com/sindresorhus/cp-file#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = cpFile;

declare function cpFile(source: string, destination: string, options?: cpFile.Options): Promise<void> & cpFile.ProgressEmitter;

declare namespace cpFile {
    function sync(source: string, destination: string, options?: Options): void;

    interface ProgressEmitter {
        on(event: 'progress', handler: (data: ProgressData) => void): Promise<void>;
    }

    interface Options {
        overwrite?: boolean;
    }

    interface ProgressData {
        src: string;
        dest: string;
        size: number;
        written: number;
        percent: number;
    }
}
