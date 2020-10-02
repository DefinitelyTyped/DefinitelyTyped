import { AVPlayManager } from './avplay';
/**
 * This module defines the multimedia player functionalities provided by the Tizen Samsung TV Product API.
 * @since 2.3
 */
export interface AVPlayStoreManager {
    /**
     * Creates a player instance that can be used for parallel pre-buffering. Up to 4 player instances can exist simultaneously.
     * @returns AVPlayManagerObject Created AVPlayManagerObject object
     * @throw WebAPIException QUOTA_EXCEEDED_ERR (Max player count reached)
     * @note You can create player instances using the open method or the getPlayer method. The getPlayer method allows you to create player instances that can pre-buffer simultaneously, so you can switch between player instances smoothly. For example, while playing an advertisement video, you can pre-buffer movie content so that movie playback begins immediately after the advertisement ends. You can call the getPlayer method multiple times to create multiple player instances. The instances can buffer simultaneously, but only 1 can be playing at a time.
     */
    getPlayer: () => AVPlayManager;
}
