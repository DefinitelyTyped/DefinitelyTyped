import "../../";

declare module "../../" {
    interface EditorConfiguration {
        /**
         * When set to true, will make the editor full-screen (as in, taking up the whole browser window).
         * Depends on fullscreen.css
         * @see {@link https://codemirror.net/doc/manual.html#addon_fullscreen}
         * @default false
         */
        fullScreen?: boolean | undefined;
    }
}
