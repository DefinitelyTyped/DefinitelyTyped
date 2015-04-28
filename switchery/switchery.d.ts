// Type definitions for switchery 0.7.0
// Project: https://github.com/abpetkov/switchery
// Definitions by: Bruno Grieder <https://github.com/bgrieder>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Switchery {

    export interface Options {

        /**
         * color of the switch element (HEX or RGB value)
         * @default '#64bd63'
         */
        color? : string;
        /**
         * secondary color for background color and border, when the switch is off
         * @default '#dfdfdf'
         */
        secondaryColor? : string;
        /**
         * color of the jack/handle element
         * @default '#fff'
         */
        jackColor? : string;
        /**
         * class name for the switch element (by default styled in switchery.css)
         * @default 'switchery'
         */
        className? : string;
        /**
         * enable or disable click events and changing the state of the switch (boolean value)
         * @default false
         */
        disabled? : boolean;
        /**
         * opacity of the switch when it's disabled (0 to 1)
         * @default 0.5
         */
        disabledOpacity? : number;
        /**
         * length of time that the transition will take, ex. '0.4s', '1s', '2.2s' (Note: transition speed of the handle is twice shorter)
         * @default '0.4s'
         */
        speed? : string;
        /**
         * size of the switch element (small or large)
         * @default 'default'
         */
        size? : string;
    }


}

declare class Switchery {

    constructor(node: Node, options?: Switchery.Options);

}

declare module "switchery" {

    export = Switchery
}