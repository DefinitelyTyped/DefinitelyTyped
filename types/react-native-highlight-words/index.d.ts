import * as React from "react";
import { TextProps } from "react-native";

export interface HighlighterProps extends TextProps {
    autoEscape?: boolean | undefined;
    highlightStyle?: TextProps["style"] | undefined;
    sanitize?: ((text: string) => string) | undefined;
    searchWords: string[];
    style?: TextProps["style"] | undefined;
    textToHighlight: string;
}

export default class Highlighter extends React.Component<HighlighterProps> {}
