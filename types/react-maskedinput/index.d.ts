import * as React from "react";

export interface FormatCharacter {
    validate(char: string): string;
    transform?(char: string): string;
}

export interface CharsFormatters {
    [char: string]: FormatCharacter;
}

export interface MaskedInputProps extends React.InputHTMLAttributes<any> {
    mask: string;
    formatCharacters?: CharsFormatters | undefined;
    placeholderChar?: string | undefined;
}

declare class MaskedInput extends React.Component<MaskedInputProps> {}
export default MaskedInput;
