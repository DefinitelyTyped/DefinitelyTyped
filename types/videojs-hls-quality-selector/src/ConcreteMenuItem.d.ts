import videojs from "video.js";
import { HlsQualitySelectorPlugin, Item } from "./../";
import ConcreteButton from "./ConcreteButton";

/**
 * Extend vjs menu item class.
 */
export default class ConcreteMenuItem extends videojs.MenuItem {
    /**
     * Menu item constructor.
     *
     * @param player - vjs player
     * @param item - Item object
     * @param qualityButton - The containing button.
     * @param plugin - This plugin instance.
     */
    constructor(player: videojs.Player, item: Item, qualityButton: ConcreteButton, plugin: HlsQualitySelectorPlugin);

    /**
     * Click event for menu item.
     */
    handleClick(): void;
}
