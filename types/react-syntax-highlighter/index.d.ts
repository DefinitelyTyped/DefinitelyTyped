type lineNumberStyleFunction = (lineNumber: number) => React.CSSProperties;
type lineTagPropsFunction = (lineNumber: number) => React.HTMLProps<HTMLElement>;
interface rendererNode {
    type: "element" | "text";
    value?: string | number | undefined;
    tagName?: keyof React.JSX.IntrinsicElements | React.ComponentType<any> | undefined;
    properties?: { className: any[]; [key: string]: any };
    children?: rendererNode[];
}
interface rendererProps {
    rows: rendererNode[];
    stylesheet: { [key: string]: React.CSSProperties };
    useInlineStyles: boolean;
}

export interface SyntaxHighlighterProps {
    language?: string | undefined;
    style?: { [key: string]: React.CSSProperties } | undefined;
    children: string | string[];
    customStyle?: React.CSSProperties | undefined;
    codeTagProps?: React.HTMLProps<HTMLElement> | undefined;
    useInlineStyles?: boolean | undefined;
    showLineNumbers?: boolean | undefined;
    showInlineLineNumbers?: boolean | undefined;
    startingLineNumber?: number | undefined;
    lineNumberContainerStyle?: React.CSSProperties | undefined;
    lineNumberStyle?: React.CSSProperties | lineNumberStyleFunction | undefined;
    wrapLines?: boolean | undefined;
    wrapLongLines?: boolean | undefined;
    lineProps?: lineTagPropsFunction | React.HTMLProps<HTMLElement> | undefined;
    renderer?: (props: rendererProps) => React.ReactNode;
    PreTag?: keyof React.JSX.IntrinsicElements | React.ComponentType<any> | undefined;
    CodeTag?: keyof React.JSX.IntrinsicElements | React.ComponentType<any> | undefined;
    [spread: string]: any;
}

export interface createElementProps {
    node: rendererNode;
    stylesheet: { [key: string]: React.CSSProperties };
    style?: React.CSSProperties;
    useInlineStyles: boolean;
    key: React.Key;
}

export { default } from "./dist/esm/default-highlight";
export { default as Light } from "./dist/esm/light";
export { default as LightAsync } from "./dist/esm/light-async";

export { default as Prism } from "./dist/esm/prism";
export { default as PrismAsync } from "./dist/esm/prism-async";
export { default as PrismAsyncLight } from "./dist/esm/prism-async-light";
export { default as PrismLight } from "./dist/esm/prism-light";

export { default as createElement } from "./dist/esm/create-element";
