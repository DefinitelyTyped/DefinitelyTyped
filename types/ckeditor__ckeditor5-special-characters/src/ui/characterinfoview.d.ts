import { View } from '@ckeditor/ckeditor5-ui';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { BindChain } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';

/**
 * The view displaying detailed information about a special character glyph, e.g. upon
 * hovering it with a mouse.
 */
export default class CharacterInfoView extends View {
    /**
     * The character whose information is displayed by the view. For instance,
     * "∑" or "¿".
     */
    character: string | null;

    /**
     * The name of the {@link #character}. For instance,
     * "N-ary summation" or "Inverted question mark".
     */
    name: string | null;

    /**
     * The "Unicode string" of the {@link #character}. For instance,
     * "U+0061".
     */
    get code(): string;
    protected set code(value: string);

    set(
        ...args:
            | [name: 'character' | 'name', value: string | null]
            | [name: 'code', value: string]
            | [name: 'character' | 'name' | 'code']
            | [values: { character?: string | null; name?: string | null; code?: string }]
    ): void;
    bind(...values: Array<'character' | 'name' | 'code'>): BindChain;
    unbind(...values: Array<'character' | 'name' | 'code'>): BindChain;

    on<K extends 'character' | 'name' | 'code'>(
        event: `change:${K}`,
        callback: (info: EventInfo<this, `change:${K}`>, name: K, value: this[K], oldValue: this[K]) => void,
        options?: {
            priority?: number | PriorityString | undefined;
        },
    ): void;
    once<K extends 'character' | 'name' | 'code'>(
        event: `change:${K}`,
        callback: (info: EventInfo<this, `change:${K}`>, name: K, value: this[K], oldValue: this[K]) => void,
        options?: {
            priority?: number | PriorityString | undefined;
        },
    ): void;
    off<K extends 'character' | 'name' | 'code'>(
        event: `change:${K}`,
        callback: (info: EventInfo<this, `change:${K}`>, callback: (info: EventInfo<this, `change:${K}`>, name: K, value: this[K], oldValue: this[K]) => void) => void,
    ): void;
}
