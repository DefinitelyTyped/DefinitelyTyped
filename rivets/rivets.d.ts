// Type definitions for rivets
// Project: http://rivetsjs.com/
// Definitions by: Trevor Baron <https://github.com/TrevorDev>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface FinchStatic {
    configure(options?: {
        /**
         * Attribute prefix in templates
         */
        prefix?: string;
        /**
         * Preload templates with initial data on bind
         */
        preloadData?: boolean;
        /**
         * Root sightglass interface for keypaths
         */
        rootInterface?: string;
        /**
         * Template delimiters for text bindings
         */
        templateDelimiters?: Array<string>
        /**
         * Augment the event handler of the on-* binder
         */
        handler?: Function;
    }):void;
    bind(element:any, template:any):void;
}

declare var Rivets: FinchStatic;
declare module "rivets" {
    export = Rivets;
}
