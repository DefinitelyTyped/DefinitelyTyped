import { ReactDivAttr, FCProps, FCReturn } from '../../../typings/shared';
import { CopyProps } from '../Copy';

interface SharedProps {
    children?: React.ReactNode | undefined;
    copyText?: string | undefined;
    copyLabel?: string | undefined;
    copyButtonDescription?: string | undefined;
    disabled?: boolean | undefined;
    feedback?: string | undefined;
    feedbackTimeout?: number | undefined;
    hideCopyButton?: boolean | undefined;
    light?: boolean | undefined;
    showLessText?: string | undefined;
    showMoreText?: string | undefined;
    wrapText?: boolean | undefined;
}

export interface CodeSnippetDivProps extends SharedProps, Omit<ReactDivAttr, 'children'> {
    type?: 'single' | null | undefined;
}

export interface CodeSnippetMultiProps extends SharedProps, Omit<ReactDivAttr, 'children'> {
    maxCollapsedNumberOfRows?: number | undefined;
    maxExpandedNumberOfRows?: number | undefined;
    minCollapsedNumberOfRows?: number | undefined;
    minExpandedNumberOfRows?: number | undefined;
    type: 'multi';
}

export interface CodeSnippetInlineProps extends SharedProps, Omit<CopyProps, 'children' | 'type'> {
    type: 'inline';
}

export type CodeSnippetType =
    | CodeSnippetDivProps['type']
    | CodeSnippetInlineProps['type']
    | CodeSnippetMultiProps['type'];

declare function CodeSnippet(props: FCProps<CodeSnippetInlineProps>): FCReturn;
// tslint:disable:unified-signatures
declare function CodeSnippet(props: FCProps<CodeSnippetMultiProps>): FCReturn;
// tslint:disable:unified-signatures
declare function CodeSnippet(props: FCProps<CodeSnippetDivProps>): FCReturn;

export default CodeSnippet;
