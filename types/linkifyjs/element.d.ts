import { Options as CommonOptions, LinkEntityType } from './index';

export interface Options extends CommonOptions {
    /**
     * Add event listeners to newly created link elements.
     * Takes a hash where each key is an standard event name and the value is an event handler.
     *
     * Also accepts a function that takes the unformatted href and the link type (e.g., 'url', 'email', etc.) and returns the hash.
     *
     * @default null
     */
    events?: Partial<GlobalEventHandlers> | ((href: string, type: LinkEntityType) => Partial<GlobalEventHandlers>);

    /**
     *  Prevent linkify from trying to parse links in the specified tags.
     *
     *  This is useful when running linkify on arbitrary HTML.
     *
     *  @default []
     */
    ignoreTags?: string[];
}

export default function linkifyElement(element: HTMLElement, options?: Options, doc?: HTMLDocument): HTMLElement;
