import videojs from "video.js";
import { Item } from "..";

/**
 * Extend vjs button class for quality button.
 */
export default class ConcreteButton extends videojs.Button {
    /**
     * Button constructor.
     *
     * @param player - videojs player instance
     */
    constructor(player: videojs.Player);
    /**
     * Creates button items.
     *
     * @return  Button items
     */
    createItems(): Item[];

    /**
     * Create the menu and add all items to it.
     *
     * @return
     *         The constructed menu
     */
    createMenu(): videojs.Menu;
}
