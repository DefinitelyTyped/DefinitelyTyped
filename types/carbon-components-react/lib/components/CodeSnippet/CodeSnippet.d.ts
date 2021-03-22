import { ReactDivAttr, FCProps, FCReturn } from "../../../typings/shared";
import { CopyProps } from "../Copy";

interface SharedProps {
    children?: string,
    copyLabel?: string,
    copyButtonDescription?: string,
    disabled?: boolean,
    feedback?: CopyProps["feedback"],
    hideCopyButton?: boolean,
    light?: boolean,
    showLessText?: string,
    showMoreText?: string,
    wrapText?: boolean,
}

export interface CodeSnippetDivProps extends SharedProps, Omit<ReactDivAttr, "children"> {
    type?: 'single' | 'multi' | null;
}

export interface CodeSnippetInlineProps extends SharedProps, Omit<CopyProps, "children" | "type"> {
    type: "inline",
}

export type CodeSnippetType = CodeSnippetDivProps["type"] | CodeSnippetInlineProps["type"];

declare function CodeSnippet(props: FCProps<CodeSnippetInlineProps>): FCReturn;
// tslint:disable:unified-signatures
declare function CodeSnippet(props: FCProps<CodeSnippetDivProps>): FCReturn;

export default CodeSnippet;
