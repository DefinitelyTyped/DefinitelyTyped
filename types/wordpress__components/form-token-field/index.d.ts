import { ComponentType, FocusEventHandler, MouseEventHandler } from 'react';

declare namespace FormTokenField {
    interface Props {
        /**
         * An array of strings or objects to display as tokens in the field. If
         * objects are present in the array, they **must** have a property of
         * `value`. Here is an example object that could be passed in as a value:
         */
        value?: readonly Value[];
        /**
         * Function to call to transform tokens for display.  (In the editor, this
         * is needed to decode HTML entities embedded in tags - otherwise entities
         * like `&` in tag names are double-encoded like `&amp;`, once by the REST
         * API and once by React).
         */
        displayTransform?(token: string): string;
        /**
         * Function to call to transform tokens for saving.  The default is to trim
         * the token value.  This function is also applied when matching
         * suggestions against the current value so that matching works correctly
         * with leading or trailing spaces.  (In the editor, this is needed to
         * remove leading and trailing spaces from tag names, like wp-admin does.
         * Otherwise the REST API won't save them.)
         */
        saveTransform?(token: string): string;
        /**
         * Function to call when the tokens have changed. An array of new tokens is
         * passed to the callback.
         */
        onChange?(value: readonly Value[]): void;
        /**
         * Function to call when the users types in the input field. It can be used
         * to trigger autocomplete requests.
         */
        onInputChange?(token: string): void;
        /**
         * Function to call when the TokenField has been focused on. The event is
         * passed to the callback. Useful for analytics.
         */
        onFocus?: FocusEventHandler;
        /**
         * An array of strings to present to the user as suggested tokens.
         */
        suggestions?: readonly string[];
        /**
         * The maximum number of suggestions to display at a time.
         */
        maxSuggestions?: number;
        /**
         * If true, will add a token when `TokenField` is focused and `space` is
         * pressed.
         */
        tokenizeOnSpace?: boolean;
        /**
         * When true, renders tokens as without a background.
         */
        isBorderless?: boolean;
        /**
         * If passed, `TokenField` will disable ability to add new tokens once
         * number of tokens is greater than or equal to `maxLength`.
         */
        maxLength?: number;
        /**
         * When true, tokens are not able to be added or removed.
         */
        disabled?: boolean;
    }

    type Value =
        | string
        | {
              /**
               * The value of the token.
               */
              value: string;
              /**
               * Applies styles to token.
               */
              status?: 'error' | 'validating' | 'success';
              /**
               * Adds a title to the token.
               */
              title?: string;
              /**
               * Function to call when onMouseEnter event triggered on token.
               */
              onMouseEnter?: MouseEventHandler<HTMLSpanElement>;
              /**
               * Function to call when onMouseLeave is triggered on token.
               */
              onMouseLeave?: MouseEventHandler<HTMLSpanElement>;
          };
}
declare const FormTokenField: ComponentType<FormTokenField.Props>;

export default FormTokenField;
