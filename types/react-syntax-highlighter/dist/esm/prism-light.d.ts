import * as React from "react";
import { SyntaxHighlighterProps } from "../..";

export default class SyntaxHighlighter extends React.Component<SyntaxHighlighterProps> {
    static registerLanguage(name: string, func: any): void;
    static alias(name: string, alias: string | string[]): void;
    static alias(aliases: Record<string, string | string[]>): void;
}
