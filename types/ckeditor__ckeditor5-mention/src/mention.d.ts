import { Editor, Plugin } from '@ckeditor/ckeditor5-core';
import { EditorWithUI } from '@ckeditor/ckeditor5-core/src/editor/editorwithui';
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
    toMentionAttribute<T extends Record<string, unknown> = {}>(viewElement: Element, data?: T): MentionAttribute<T>;

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
    feed: MentionFeedItem[] | ((this: Editor | EditorWithUI, searchString: string) => string[] | Promise<string[]>);
    itemRenderer?: (item: MentionFeedItem) => HTMLElement | string;
    marker?: string;
    minimumCharacters?: number;
    /**
     * The configuration of the custom commit keys supported by the editor.
     *
     *    ClassicEditor
     *      .create( editorElement, {
     *        plugins: [ Mention, ... ],
     *        mention: {
     *          // [ Enter, Space ]
     *           commitKeys: [ 13, 32 ]
     *          feeds: [
     *            { ... }
     *            ...
     *           ]
     *        }
     *      } )
     *      .then( ... )
     *      .catch( ... );
     *
     * Custom commit keys configuration allows you to customize how users will confirm the selection of mentions from the dropdown list.
     * You can add as many mention commit keys as you need. For instance, in the snippet above new mentions will be committed by pressing
     * either <kbd>Enter</kbd> or <kbd>Space</kbd> (13 and 32 key codes respectively).
     */
    commitKeys?: number[];
    /**
     * The configuration of the custom number of visible mentions.
     *
     * Customizing the number of visible mentions allows you to specify how many available elements will the users be able to see
     * in the dropdown list. You can specify any number you see fit. For example, in the snippets below you will find the
     * dropdownLimit set to `20` and `Infinity` (this will result in showing all available mentions).
     *
     *    ClassicEditor
     *      .create( editorElement, {
     *        plugins: [ Mention, ... ],
     *        mention: {
     *           dropdownLimit: 20,
     *          feeds: [
     *            { ... }
     *            ...
     *           ]
     *        }
     *      } )
     *      .then( ... )
     *      .catch( ... );
     *
     *    ClassicEditor
     *      .create( editorElement, {
     *        plugins: [ Mention, ... ],
     *        mention: {
     *           dropdownLimit: Infinity,
     *          feeds: [
     *            { ... }
     *            ...
     *           ]
     *        }
     *      } )
     *      .then( ... )
     *      .catch( ... );
     */
    dropdownLimit?: number;
}

export type MentionFeedItem =
    | {
          id: string;
          text: string;
          [x: string]: string;
      }
    | string[];

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        Mention: Mention;
    }
}
