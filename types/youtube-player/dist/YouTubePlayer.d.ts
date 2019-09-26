import { EmitterType, YouTubePlayer } from './types';

export interface EventHandlerMapType {
    [key: string]: (event: object) => void;
}

declare const YouTubePlayerHelpers: {
    proxyEvents(emitter: EmitterType): EventHandlerMapType,
    promisifyPlayer(playerAPIReady: Promise<YouTubePlayer>, strictState?: boolean): YouTubePlayer,
};

export default YouTubePlayerHelpers;
