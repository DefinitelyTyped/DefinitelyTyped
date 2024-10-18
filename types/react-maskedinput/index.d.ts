import * as React from "react";

declare namespace MaskedInput {
    interface FormatCharacter {
        validate(char: string): string;
        transform?(char: string): string;
    }

    interface CharsFormatters {
        [char: string]: FormatCharacter;
    }

    interface MaskedInputProps extends
        Omit<
            React.InputHTMLAttributes<HTMLInputElement>,
            | "maxLength"
            | "onKeyDown"
            | "onKeyPress"
            | "onPaste"
        >
    {
        /**
         * The masking pattern to be applied to the `<input>`.
         * See the {@link https://github.com/insin/inputmask-core#pattern|inputmask-core} docs for
         * supported formatting characters.
         */
        mask: string;
        /**
         * Customised format character definitions for use in the pattern.
         * See the {@link https://github.com/insin/inputmask-core#formatcharacters|inputmask-core}
         * docs for details of the structure of this object.
         */
        formatCharacters?: CharsFormatters | undefined;
        /**
         * Customised placeholder character used to fill in editable parts of the pattern.
         * See the {@link https://github.com/insin/inputmask-core#placeholderchar--string|inputmask-core}
         * docs for details.
         */
        placeholderChar?: string | undefined;
    }
}

declare class MaskedInput extends React.Component<MaskedInput.MaskedInputProps> {}

export = MaskedInput;
