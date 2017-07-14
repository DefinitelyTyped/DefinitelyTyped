// Type definitions for react-maskedinput 4.0
// Project: https://github.com/insin/react-maskedinput
// Definitions by: Karol Janyst <https://github.com/LKay>,
//     Adam Lavin <https://github.com/lavoaster>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from "react";

interface ReactMaskedInputFormatCharacter {
    validate(char: string): string;
    transform?(char: string): string;
}

interface ReactMaskedInputCharsFormatters {
  [char: string]: ReactMaskedInputFormatCharacter;
}

interface ReactMaskedInputProps extends React.HTMLAttributes<any> {
  mask: string;
  formatCharacter?: ReactMaskedInputCharsFormatters;
  placeholderChar?: string;
}

declare const ReactMaskedInput: React.ClassicComponentClass<ReactMaskedInputProps>;
export default ReactMaskedInput;
