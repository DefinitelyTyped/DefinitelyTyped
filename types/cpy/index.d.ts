// Type definitions for cpy 5.1
// Project: https://github.com/sindresorhus/cpy#readme
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import glob = require('glob');
import cpFile = require('cp-file');

export = cpy;
declare function cpy(files: string | string[], destination: string, opts?: cpy.Options): Promise<void> & cpy.ProgressEmitter;

declare namespace cpy {
    interface ProgressEmitter {
        on(event: 'progress', handler: (progress: ProgressData) => void): Promise<void>;
    }

    type Options = CpyOptions & glob.IOptions & cpFile.Options;

    interface CpyOptions {
        cwd?: string;
        parents?: boolean;
        rename?: string | ((basename: string) => string);
    }

    interface ProgressData {
        completedFiles: number;
        totalFiles: number;
        completedSize: number;
    }
}
