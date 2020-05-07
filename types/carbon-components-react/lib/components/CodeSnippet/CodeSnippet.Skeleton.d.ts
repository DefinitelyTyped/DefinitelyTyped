import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends Omit<ReactDivAttr, "children"> { }

export interface CodeSnippetSkeletonProps extends InheritedProps {
    type?: "multi" | "single",
}

declare const CodeSnippetSkeleton: React.FC<CodeSnippetSkeletonProps>;

export default CodeSnippetSkeleton;
