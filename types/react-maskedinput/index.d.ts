// Type definitions for react-maskedinput 4.0
// Project: https://github.com/insin/react-maskedinput
// Definitions by: Karol Janyst <https://github.com/LKay>,
//     Adam Lavin <https://github.com/lavoaster>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

export as namespace MaskedInput;

export default MaskedInput;

declare class MaskedInput extends React.Component<MaskedInput.MaskedInputProps> {}

declare namespace MaskedInput {
    interface FormatCharacter {
        validate(char: string): string;
        transform?(char: string): string;
    }

    interface CharsFormatters {
        [char: string]: FormatCharacter;
    }

    interface MaskedInputProps extends React.HTMLAttributes<any> {
        mask: string;
        formatCharacter?: CharsFormatters;
        placeholderChar?: string;
    }
}
