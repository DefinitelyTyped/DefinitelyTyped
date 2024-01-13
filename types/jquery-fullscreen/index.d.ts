/// <reference types="jquery"/>

interface JQuery {
    /**
     * You can either switch the whole page or a single HTML element to fullscreen mode
     * This only works when the code was triggered by a user interaction (For example a onclick event on a button). Browsers don't allow entering fullscreen mode without user interaction.
     * Fullscreen mode is always exited via the document but this plugin allows it also via any HTML element. The owner document of the selected HTML element is used
     */
    fullScreen(fullScreen: boolean): JQuery | boolean;

    /**
     * The method returns the current fullscreen element (or true if browser doesn't support this) when fullscreen mode is active,
     * false if not active or null when the browser does not support fullscreen mode at all
     */
    fullScreen(): boolean;

    /**
     * The plugin provides another method for simple fullscreen mode toggling
     */
    toggleFullScreen(): JQuery | boolean;
}
