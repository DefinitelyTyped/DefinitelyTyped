import { ComponentType } from '@wordpress/element';

declare namespace URLInput {
    // TODO: if PostType is ever typed import it and use it here
    type PostType = Record<string, any>;
    interface Props {
        /**
         * By default, the input will gain focus when it is rendered, as typically it is displayed
         * conditionally. For example when clicking on `URLInputButton` or editing a block.
         *
         * If you are not conditionally rendering this component set this property to `false`.
         * @defaultValue true
         */
        autoFocus?: boolean;
        children?: never;
        /**
         * Adds and optional class to the parent `div` that wraps the URLInput field and popover.
         */
        className?: string;
        /**
         * Provides additional control over whether suggestions are disabled.
         *
         * @remarks
         * When hiding the URLInput using CSS (as is sometimes done for accessibility purposes), the
         * suggestions can still be displayed. This is because they're rendered in a popover in a
         * different part of the DOM, so any styles applied to the URLInput's container won't affect
         * the popover.
         *
         * This prop allows the suggestions list to be programmatically not rendered by passing a
         * boolean—it can be `true` to make sure suggestions aren't rendered, or `false`/`undefined`
         * to fall back to the default behaviour of showing suggestions when matching autocompletion
         * items are found.
         */
        disableSuggestions?: boolean;
        hasBorder?: boolean;
        id?: string;
        isFullWidth?: boolean;
        /**
         * Called when the value changes. The second parameter is `null` unless the user selects a
         * post from the suggestions dropdown.
         */
        onChange(url: string, post: PostType | null): void;
        /**
         * This should be set to the attribute (or component state) property used to store the URL.
         */
        value: string;
    }
}
declare const URLInput: ComponentType<URLInput.Props>;

export default URLInput;
