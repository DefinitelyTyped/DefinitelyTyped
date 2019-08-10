import { VideoJsPlayer } from 'video.js';

declare module 'video.js' {
    export interface VideoJsPlayer {
        somePluginDefinedInAugmentation(options?: {}): this;
    }
}
