import * as React from "react";
import { EmbeddedIconProps, ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr, EmbeddedIconProps { }

export interface InlineLoadingProps extends InheritedProps {
    description?: string,
    onSuccess?(): void,
    success?: boolean,
    successDelay?: number,
}

declare const InlineLoading: React.FC<InlineLoadingProps>;

export default InlineLoading;
