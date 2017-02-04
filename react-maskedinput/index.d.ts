// Type definitions for react-maskedinput 3.3
// Project: https://github.com/insin/react-maskedinput
// Definitions by: Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import { ComponentClass, HTMLAttributes } from "react";

export as namespace MaskedInput;

export = MaskedInput;

declare const MaskedInput: MaskedInput;
type MaskedInput = ComponentClass<MaskedInput.MaskedInputProps>;

declare namespace MaskedInput {

    export interface FormatCharacter {
        validate(char: string): string;
        transform?(char: string): string;
    }

    export interface CharsFormatters {
        [char: string]: FormatCharacter;
    }

    export interface MaskedInputProps extends HTMLAttributes<any> {
        mask: string;
        formatCharacter?: CharsFormatters;
        placeholderChar?: string;
    }
}

