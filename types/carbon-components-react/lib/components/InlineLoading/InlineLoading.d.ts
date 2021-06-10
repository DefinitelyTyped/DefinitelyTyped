import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export type InlineLoadingStatus = 'active' | 'error' | 'finished' | 'inactive';
export interface InlineLoadingProps extends ReactDivAttr {
    description?: React.ReactNode;
    iconDescription?: string;
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
