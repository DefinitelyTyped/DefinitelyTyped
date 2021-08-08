import { MouseEventHandler } from "react";

export interface LabelKeyObject {
    label: string;
    key: string;
}

export type Data = object[];
export type Headers = LabelKeyObject[] | string[];
export type SyncClickHandler = (event: MouseEventHandler<HTMLAnchorElement>) => boolean | void;
export type AsyncClickHandler = (event: MouseEventHandler<HTMLAnchorElement>, done: (proceed?: boolean) => void) => void;

export interface CommonPropTypes {
    data: string | Data;
    headers?: Headers | undefined;
    enclosingCharacter?: string | undefined;
    separator?: string | undefined;
    filename?: string | undefined;
    uFEFF?: boolean | undefined;
    onClick?: SyncClickHandler | AsyncClickHandler | undefined;
    asyncOnClick?: boolean | undefined;
}
