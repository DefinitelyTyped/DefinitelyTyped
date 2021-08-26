import { Plugin } from '@ckeditor/ckeditor5-core';
import Element from '@ckeditor/ckeditor5-engine/src/view/element';
import MentionEditing from './mentionediting';
import MentionUI from './mentionui';

/**
 * The mention plugin.
 *
 * For a detailed overview, check the {@glink features/mentions Mention feature documentation}.
 */
export default class Mention extends Plugin {
    /**
     * Creates a mention attribute value from the provided view element and optional data.
     *
     *        editor.plugins.get( 'Mention' ).toMentionAttribute( viewElement, { userId: '1234' } );
     *
     *        // For a view element: <span data-mention="@joe">@John Doe</span>
     *        // it will return:
     *        // { id: '@joe', userId: '1234', uid: '7a7bc7...', _text: '@John Doe' }
     */
    toMentionAttribute<T extends Record<string, unknown>>(viewElement: Element, data?: T): MentionAttribute<T>;

    static readonly pluginName: 'Mention';
    static readonly requires: [typeof MentionEditing, typeof MentionUI];
}

export type MentionAttribute<T extends Record<string, unknown>> = T & {
    uid: string;
    id: string;
    _text: string;
};

export interface MentionConfig {
    feeds: MentionFeed[];
}

export interface MentionFeed {
    feed: MentionFeedItem[] | ((searchString: string) => string[] | Promise<string[]>);
    itemRenderer?: (item: MentionFeedItem) => HTMLElement | string;
    marker: string;
    minimumCharacters?: number;
}

export interface MentionFeedItem {
    id: string;
    text: string;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Mention: Mention;
    }
}
