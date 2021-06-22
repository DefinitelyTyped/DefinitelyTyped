// Type definitions for videojs-contrib-quality-levels 2.0
// Project: https://github.com/videojs/videojs-contrib-quality-levels#readme
// Definitions by: Nathan Hardy <https://github.com/nhardy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

import { VideoJsPlayer } from 'video.js';
import QualityLevelList from './src/quality-level-list';

declare module 'video.js' {
    interface VideoJsPlayer {
        qualityLevels: {
            VERSION: string;
            (): QualityLevelList;
        };
    }
}

export interface Representation {
    id: string;
    width?: number;
    height?: number;
    bandwidth: number;
    enabled: {
        (enable: boolean): void;
        (): boolean;
    };
}

export type { default as QualityLevelList } from './src/quality-level-list';

export type { default as QualityLevel } from './src/quality-level';

declare const qualityLevels: {
    VERSION: string;
    (this: VideoJsPlayer, options?: {}): void;
};
export default qualityLevels;
