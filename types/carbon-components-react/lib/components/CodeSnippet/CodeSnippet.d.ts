import { ReactDivAttr, FCProps, FCReturn } from "../../../typings/shared";
import { CopyProps } from "../Copy";

interface SharedProps {
    children?: string,
    copyLabel?: string,
    copyButtonDescription?: string,
    disabled?: boolean,
    feedback?: string,
    feedbackTimeout?: number;
    hideCopyButton?: boolean,
    light?: boolean,
    showLessText?: string,
    showMoreText?: string,
    wrapText?: boolean,
}

export interface CodeSnippetDivProps extends SharedProps, Omit<ReactDivAttr, "children"> {
    type?: "single" | null;
}

export interface CodeSnippetMultiProps extends SharedProps, Omit<ReactDivAttr, "children"> {
    maxCollapsedNumberOfRows?: number;
    maxExpandedNumberOfRows?: number;
    minCollapsedNumberOfRows?: number;
    minExpandedNumberOfRows?: number;
    type: "multi";
}

export interface CodeSnippetInlineProps extends SharedProps, Omit<CopyProps, "children" | "type"> {
    type: "inline",
}

export type CodeSnippetType = CodeSnippetDivProps["type"] | CodeSnippetInlineProps["type"] | CodeSnippetMultiProps["type"];

declare function CodeSnippet(props: FCProps<CodeSnippetInlineProps>): FCReturn;
// tslint:disable:unified-signatures
declare function CodeSnippet(props: FCProps<CodeSnippetMultiProps>): FCReturn;
// tslint:disable:unified-signatures
declare function CodeSnippet(props: FCProps<CodeSnippetDivProps>): FCReturn;

export default CodeSnippet;
