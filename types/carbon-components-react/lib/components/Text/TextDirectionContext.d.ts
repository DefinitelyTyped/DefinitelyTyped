import * as React from "react";

export type TextDirection = "auto" | "ltr" | "rtl";

export interface TextDirectionContextData {
    direction?: TextDirection | undefined;
    getTextDirection?: ((...args: any[]) => TextDirection | null | undefined) | undefined;
}

export declare const TextDirectionContext: React.Context<TextDirectionContextData>;
