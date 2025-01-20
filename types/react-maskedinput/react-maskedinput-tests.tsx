import * as React from "react";
import MaskedInput, { CharsFormatters, FormatCharacter, MaskedInputProps } from "react-maskedinput";

// props.mask is required.
// @ts-expect-error
<MaskedInput />;

// $ExpectType Element
<MaskedInput mask="111" />;

// Can put usual React.InputHTMLAttributes into props
// $ExpectType Element
<MaskedInput
    mask="111"
    name="react-maskedinput-test"
    placeholder="XXX"
    disabled={false}
/>;

// $ExpectType Element
<MaskedInput
    mask="111"
    placeholderChar="X"
/>;

// props.formatCharacters[char].validate() is required.
<MaskedInput
    mask="111"
    // @ts-expect-error
    formatCharacters={{ a: {} }}
/>;

// props.formatCharacters[char].transform() is optional.
// $ExpectType Element
<MaskedInput
    mask="111"
    formatCharacters={{
        a: {
            validate: (char) => {
                // $ExpectType string
                char;
                return char;
            },
        },
    }}
/>;

// $ExpectType Element
<MaskedInput
    mask="111"
    formatCharacters={{
        a: {
            validate: (char) => {
                // $ExpectType string
                char;
                return char;
            },
            transform: (char) => {
                // $ExpectType string
                char;
                return char;
            },
        },
    }}
/>;

// Testing for invalid props in React.InputHTMLAttributes
{
    <MaskedInput
        mask="111"
        // @ts-expect-error
        maxLength={3}
    />;

    <MaskedInput
        mask="111"
        // @ts-expect-error
        onKeyDown={() => {}}
    />;

    <MaskedInput
        mask="111"
        // @ts-expect-error
        onKeyPress={() => {}}
    />;

    <MaskedInput
        mask="111"
        // @ts-expect-error
        onPaste={() => {}}
    />;
}
