import { Plugin } from '@ckeditor/ckeditor5-core';

/**
 * The mention editing feature.
 *
 * It introduces the {@link module:mention/mentioncommand~MentionCommand command} and the `mention`
 * attribute in the {@link module:engine/model/model~Model model} which renders in the {@link module:engine/view/view view}
 * as a `<span class="mention" data-mention="@mention">`.
 */
export default class MentionEditing extends Plugin {
    static readonly pluginName: 'MentionEditing';
    init(): void;
}

declare module '@ckeditor/ckeditor5-core/src/plugincollection' {
    interface Plugins {
        MentionEditing: MentionEditing;
    }
}
