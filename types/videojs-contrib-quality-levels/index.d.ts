import { VideoJsPlayer } from "video.js";
import QualityLevelList from "./src/quality-level-list";

declare module "video.js" {
    interface VideoJsPlayer {
        qualityLevels: {
            VERSION: string;
            (): QualityLevelList;
        };
    }
}

export interface Representation {
    id: string;
    width?: number | undefined;
    height?: number | undefined;
    bandwidth: number;
    enabled: {
        (enable: boolean): void;
        (): boolean;
    };
}

export type { default as QualityLevelList } from "./src/quality-level-list";

export type { default as QualityLevel } from "./src/quality-level";

declare const qualityLevels: {
    VERSION: string;
    (this: VideoJsPlayer, options?: {}): void;
};
export default qualityLevels;
