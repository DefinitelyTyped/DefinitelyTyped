import * as React from "react";
import { ReactDivAttr } from "../../../typings/shared";

export type InlineLoadingStatus = "active" | "error" | "finished" | "inactive";
export interface InlineLoadingProps extends ReactDivAttr {
    description?: React.ReactNode | undefined;
    iconDescription?: string | undefined;
    onSuccess?(): void;
    /**
     * @deprecated
     */
    success?: boolean | undefined;
    successDelay?: number | undefined;
    status?: InlineLoadingStatus | undefined;
}

declare const InlineLoading: React.FC<InlineLoadingProps>;

export default InlineLoading;
