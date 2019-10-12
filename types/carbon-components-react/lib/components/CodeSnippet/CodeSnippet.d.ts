import * as React from "react";
import { ReactDivAttr, ThemeProps } from "../../../typings/shared";
import { CopyProps } from "../Copy";

interface InheritedDivProps extends Omit<ReactDivAttr, "children"> { }
interface InheritedInlineProps extends Omit<CopyProps, "children"> { }

interface SharedProps extends ThemeProps {
    children?: string,
    copyLabel?: string,
    copyButtonDescription?: string,
    feedback?: CopyProps["feedback"],
    showLessText?: string,
    showMoreText?: string,
}

export interface CodeSnippetDivProps extends SharedProps, InheritedDivProps {
    type?: 'single' | 'multi' | null;
}

export interface CodeSnippetInlineProps extends SharedProps, InheritedInlineProps {
    type: "inline",
}

export type AllCodeSnippetProps = CodeSnippetDivProps | CodeSnippetInlineProps;
declare class CodeSnippet extends React.Component<AllCodeSnippetProps> { }

export default CodeSnippet;
