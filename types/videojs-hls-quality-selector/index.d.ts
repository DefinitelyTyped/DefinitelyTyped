// eslint-disable-next-line @definitelytyped/no-import-default-of-export-equals
import ConcreteMenuItem from "./src/ConcreteMenuItem";

/**
 * Adds a quality selector menu for HLS sources played in videojs.
 */
declare function hlsQualitySelector(options?: hlsQualitySelector.Options): void;

declare namespace hlsQualitySelector {
    /**
     * VideoJS HLS Quality Selector Plugin class.
     */
    interface HlsQualitySelectorPlugin {
        /**
         * Returns HLS Plugin
         *
         * @return - videojs-hls-contrib plugin.
         */
        getHls(): any;
        /**
         * Binds listener for quality level changes.
         */
        bindPlayerEvents(): void;
        /**
         * Adds the quality menu button to the player control bar.
         */
        createQualityButton(): void;
        /**
         * Set inner button text.
         *
         * @param text - the text to display in the button.
         */
        setButtonInnerText(text: string): void;
        /**
         * Builds individual quality menu items.
         *
         * @param  item - Individual quality menu item.
         * @return - Menu item
         */
        getQualityMenuItem(item: Item): ConcreteMenuItem;
        /**
         * Executed when a quality level is added from HLS playlist.
         */
        onAddQualityLevel(): void;
        /**
         * Return the current set quality or 'auto'
         */
        getCurrentQuality(): string;
    }

    const VERSION: string;

    interface Options {
        placementIndex?: number | undefined;
        displayCurrentQuality?: boolean | undefined;
        vjsIconClass?: string | undefined;
    }
    interface Item {
        label: string;
        selected?: boolean | undefined;
    }
}

export = hlsQualitySelector;

declare module "video.js" {
    interface VideoJsPlayer {
        hlsQualitySelector: typeof hlsQualitySelector;
    }
}
