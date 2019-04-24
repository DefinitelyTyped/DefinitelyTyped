import { Options, YouTubePlayer } from './types';

declare function PlayerFactory(
    maybeElementId: YouTubePlayer | HTMLElement | string,
    options?: Options,
    strictState?: boolean,
): YouTubePlayer;

export default PlayerFactory;
