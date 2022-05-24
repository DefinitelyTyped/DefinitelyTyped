import { View } from '@ckeditor/ckeditor5-ui';

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
            | [
                  ...args:
                      | [option: Record<'character', string | null>]
                      | [name: 'character', value: string | null]
                      | [name: 'character']
              ]
            | [...args: [option: Record<'name', string | null>] | [name: 'name', value: string | null] | [name: 'name']]
    ): void;
}
