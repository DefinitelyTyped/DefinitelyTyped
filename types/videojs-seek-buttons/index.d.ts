// eslint-disable-next-line @definitelytyped/no-import-default-of-export-equals
import videojs from "video.js";

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @param     [options={}]
 *           An object of options left to the plugin author to define.
 */
declare function seekButtons(options?: seekButtons.Options): void;

declare namespace seekButtons {
    const VERSION: typeof videojs.VERSION;
    interface SeekButtonOptions {
        direction: "forward" | "back";
        seconds: number;
    }

    class SeekButton extends videojs.Button {
        /**
         * Constructor for class
         *
         * @param player The player
         * @param options Button options
         */
        constructor(player: videojs.Player, options?: SeekButtonOptions);
        /**
         * Return button class names which include the seek amount.
         *
         * @return css class string
         */
        buildCSSClass(): string;
        /**
         * Seek with the button's configured offset
         */
        handleClick(): void;
    }

    interface Options {
        /**
         * if a number greater than 0, a seek forward button will be added which seeks that number of seconds
         */
        forward?: number | undefined;
        /**
         * if a number greater than 0, a seek back button will be added which seeks that number of seconds
         */
        back?: number | undefined;
        /**
         * the position in the control bar to insert the button.
         * @default 1
         */
        forwardIndex?: number | undefined;
        /**
         * the position in the control bar to insert the button
         * @default 1
         */
        backIndex?: number | undefined;
    }
}

export = seekButtons;

declare module "video.js" {
    interface VideoJsPlayer {
        seekButtons: typeof seekButtons;
    }
    interface VideoJsPlayerPluginOptions {
        seekButtons?: seekButtons.Options;
    }
}
