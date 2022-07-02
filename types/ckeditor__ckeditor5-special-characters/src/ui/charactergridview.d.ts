import { ButtonView, View, ViewCollection } from '@ckeditor/ckeditor5-ui';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';

/**
 * A grid of character tiles. It allows browsing special characters and selecting the character to
 * be inserted into the content.
 */
export default class CharacterGridView extends View {
    /**
     * A collection of the child tile views. Each tile represents a particular character.
     */
    readonly tiles: ViewCollection;

    /**
     * Creates a new tile for the grid.
     */
    createTile(character: string, name: string): ButtonView;

    on<T extends 'execute' | 'tileHover'>(
        event: T,
        callback: (this: this, info: EventInfo<this, T>, args: { name: string; character: string }) => void,
        options?: {
            priority?: number | PriorityString | undefined;
        },
    ): void;
    once<T extends 'execute' | 'tileHover'>(
        event: T,
        callback: (this: this, info: EventInfo<this, T>, args: { name: string; character: string }) => void,
        options?: {
            priority?: number | PriorityString | undefined;
        },
    ): void;
    off<T extends 'execute' | 'tileHover'>(
        event: T,
        callback?: (this: this, info: EventInfo<this, T>, args: { name: string; character: string }) => void,
    ): void;
    fire(event: 'execute' | 'tileHover', args: { name: string; character: string }): void;
}
