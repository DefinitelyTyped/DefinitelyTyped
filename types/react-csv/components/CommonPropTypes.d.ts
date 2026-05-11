import { MouseEventHandler } from "react";
import { Data, Headers } from "../lib/core";

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export type SyncClickHandler = (event: MouseEventHandler<HTMLAnchorElement>) => boolean | void;
export type AsyncClickHandler = (
    event: MouseEventHandler<HTMLAnchorElement>,
    done: (proceed?: boolean) => void,
) => void;

export interface CommonPropTypes {
    data: string | Data | (() => string | Data);
    headers?: Headers | undefined;
    enclosingCharacter?: string | undefined;
    separator?: string | undefined;
    filename?: string | undefined;
    uFEFF?: boolean | undefined;
    onClick?: SyncClickHandler | AsyncClickHandler | undefined;
    asyncOnClick?: boolean | undefined;
}
