/*! The plugin based on:
 *
 *       bgiframe for IE6
 *       https://github.com/brandonaaron/bgiframe
 *
 *       Copyrights for the jQuery plugin:
 *       Copyright (c) 2013 Brandon Aaron (http://brandonaaron.net)
 */

declare namespace BgiFrame {
    interface ISettings {
        top: string;
        left: string;
        width: string;
        height: string;
        opacity: boolean;
        src: string;
        conditional: boolean;
    }

    interface IBgiframe {
        s: ISettings;
        createIframe(): HTMLElement;
        fire(element: HTMLElement): void;
        getIframe(element: HTMLElement): HTMLElement;
        prop(n: any): string;
    }
}
