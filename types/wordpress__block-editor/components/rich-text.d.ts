// tslint:disable:no-unnecessary-generics
import { BlockInstance } from '@wordpress/blocks';
import { Autocomplete, ToolbarButton } from '@wordpress/components';
import { ComponentType, HTMLProps, ReactNode } from '@wordpress/element';
import { displayShortcut, rawShortcut } from '@wordpress/keycodes';

declare namespace RichText {
    interface Props<T extends keyof HTMLElementTagNameMap> extends Omit<HTMLProps<T>, 'onChange'> {
        /**
         * A list of autocompleters to use instead of the default.
         */
        autocompleters?: Array<Autocomplete.Completer<any>>;
        children?: never;
        className?: string;
        identifier?: string;
        inlineToolbar?: boolean;
        /**
         * By default, the placeholder will hide as soon as the editable field receives focus. With
         * this setting it can be be kept while the field is focussed and empty.
         */
        keepPlaceholderOnFocus?: boolean;
        multiline?: boolean | keyof HTMLElementTagNameMap;
        /**
         * Called when the value changes.
         */
        onChange(value: string): void;
        /**
         * Called when blocks can be merged. `forward` is `true` when merging with the next block,
         * false when merging with the previous block.
         */
        onMerge?(forward: boolean): void;
        /**
         * Called when the block can be removed. `forward` is `true` when the selection is expected to
         * move to the next block, `false` to the previous block.
         */
        onRemove?(forward: boolean): void;
        /**
         * Called when the `RichText` instance can be replaced with the given blocks.
         */
        onReplace?(blocks: BlockInstance[]): void;
        /**
         * Called when the content can be split, where `value` is a piece of content being split
         * off. Here you should create a new block with that content and return it. Note that you
         * also need to provide `onReplace` in order for this to take any effect.
         */
        onSplit?(value: string): void;
        onTagNameChange?(tagName: keyof HTMLElementTagNameMap): void;
        /**
         * Placeholder text to show when the field is empty, similar to the `input` and `textarea`
         * attribute of the same name.
         * See: {@link https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/HTML5_updates#The_placeholder_attribute }
         */
        placeholder?: string;
        /**
         * The tag name of the editable element.
         * @defaultValue div
         */
        tagName?: T;
        /**
         * HTML string to make editable. The HTML should be valid, and valid inside the `tagName`,
         * if provided.
         */
        value: string;
        wrapperClassName?: string;
    }
    interface ContentProps<T extends keyof HTMLElementTagNameMap> extends HTMLProps<T> {
        children?: never;
        multiline?: boolean | 'p' | 'li';
        tagName?: T;
        value: string;
    }
}
declare const RichText: {
    <T extends keyof HTMLElementTagNameMap = 'div'>(props: RichText.Props<T>): JSX.Element;
    /**
     * Should be used in the `save` function of your block to correctly save rich text content.
     */
    Content<T extends keyof HTMLElementTagNameMap = 'div'>(props: RichText.ContentProps<T>): JSX.Element;
    isEmpty(value: string | string[]): boolean;
};

export namespace RichTextShortcut {
    interface Props {
        character: string;
        type: keyof typeof rawShortcut;
        onUse(): void;
    }
}
export const RichTextShortcut: ComponentType<RichTextShortcut.Props>;

export namespace RichTextToolbarButton {
    interface Props extends ToolbarButton.Props {
        name?: string;
        shortcutType?: keyof typeof displayShortcut;
        shortcutCharacter?: string;
    }
}
export const RichTextToolbarButton: ComponentType<RichTextToolbarButton.Props>;

export default RichText;
