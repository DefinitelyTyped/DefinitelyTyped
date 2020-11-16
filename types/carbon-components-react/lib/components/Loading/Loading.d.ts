import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

type ExcludedAttributes = "aria-atomic" | "aria-labelledby" | "aria-live";

export interface LoadingProps extends Omit<ReactDivAttr, ExcludedAttributes> {
    active?: boolean,
    description?: string,
    small?: boolean,
    withOverlay?: boolean,
}

declare const Loading: React.FC<LoadingProps>;

export default Loading;
