import * as React from "react";

export type UseBeforeunloadHandler = ((arg: Event) => string | undefined) | ((arg: Event) => void);

export function useBeforeunload(handler?: UseBeforeunloadHandler): void;

export const Beforeunload: React.FC<{
    children?: React.ReactNode | undefined;
    onBeforeunload: UseBeforeunloadHandler;
}>;
