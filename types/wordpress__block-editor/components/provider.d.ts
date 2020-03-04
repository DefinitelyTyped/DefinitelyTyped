import { BlockInstance } from '@wordpress/blocks';
import { ComponentType, ReactNode } from '@wordpress/element';

import { EditorSettings, EditorBlockListSettings } from '../';

declare namespace BlockEditorProvider {
    interface Props {
        /**
         * Children elements for which the BlockEditorProvider context should apply.
         */
        children: ReactNode;
        /**
         * A callback invoked when the blocks have been modified in a persistent manner. Contrasted
         * with `onInput`, a "persistent" change is one which is not an extension of a composed
         * input. Any update to a distinct block or block attribute is treated as persistent.
         *
         * @remarks
         * The distinction between these two callbacks is akin to the differences between `input`
         * and `change` events in the DOM API:
         *
         * > The input event is fired every time the value of the element changes. **This is unlike
         * the change event, which only fires when the value is committed**, such as by pressing the
         * enter key, selecting a value from a list of options, and the like.
         *
         * In the context of an editor, an example usage of this distinction is for managing a
         * history of blocks values (an "Undo"/"Redo" mechanism). While value updates should always
         * be reflected immediately (`onInput`), you may only want history entries to reflect change
         * milestones (`onChange`).
         */
        onChange?(blocks: BlockInstance[]): void;
        /**
         * A callback invoked when the blocks have been modified in a non-persistent manner.
         * Contrasted with `onChange`, a "non-persistent" change is one which is part of a composed
         * input. Any sequence of updates to the same block attribute are treated as non-persistent,
         * except for the first.
         */
        onInput?(blocks: BlockInstance[]): void;
        settings?: Partial<EditorSettings & EditorBlockListSettings>;
        useSubRegistry?: boolean;
        /**
         * The current array of blocks.
         */
        value?: BlockInstance[];
    }
}
declare const BlockEditorProvider: ComponentType<BlockEditorProvider.Props>;

export default BlockEditorProvider;
