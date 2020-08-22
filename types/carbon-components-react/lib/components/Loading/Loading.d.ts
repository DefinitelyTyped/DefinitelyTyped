import * as React from "react";
import { ReactDivAttr, SizingProps } from "../../../typings/shared";

type ExcludedAttributes = "aria-label" | "aria-live";
interface InheritedProps extends
    Omit<ReactDivAttr, ExcludedAttributes>,
    SizingProps
{ }

export interface LoadingProps extends InheritedProps {
    active?: boolean,
    description?: string,
    withOverlay?: boolean,
}

declare const Loading: React.FC<LoadingProps>;

export default Loading;
