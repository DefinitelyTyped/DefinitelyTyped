import * as React from "react";
import { EmbeddedIconProps, ReactDivAttr } from "../../../typings/shared";

interface InheritedProps extends ReactDivAttr, EmbeddedIconProps { }

export type InlineLoadingStatus = 'active' | 'error' | 'finished' | 'inactive';
export interface InlineLoadingProps extends InheritedProps {
    description?: string;
    onSuccess?(): void;
    /**
     * @deprecated
     */
    success?: boolean;
    successDelay?: number;
    status?: InlineLoadingStatus;
}

declare const InlineLoading: React.FC<InlineLoadingProps>;

export default InlineLoading;
