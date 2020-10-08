import { ReactDivAttr, ThemeProps, FCProps, FCReturn } from "../../../typings/shared";
import { CopyProps } from "../Copy";

interface InheritedDivProps extends Omit<ReactDivAttr, "children"> { }
interface InheritedInlineProps extends Omit<CopyProps, "children"> { }

interface SharedProps extends ThemeProps {
    children?: string,
    copyLabel?: string,
    copyButtonDescription?: string,
    feedback?: CopyProps["feedback"],
    hideCopyButton?: boolean,
    showLessText?: string,
    showMoreText?: string,
}

export interface CodeSnippetDivProps extends SharedProps, InheritedDivProps {
    type?: 'single' | 'multi' | null;
}

export interface CodeSnippetInlineProps extends SharedProps, InheritedInlineProps {
    type: "inline",
}

export type CodeSnippetType = CodeSnippetDivProps["type"] | CodeSnippetInlineProps["type"];

declare function CodeSnippet(props: FCProps<CodeSnippetInlineProps>): FCReturn;
declare function CodeSnippet(props: FCProps<CodeSnippetDivProps>): FCReturn;

export default CodeSnippet;
