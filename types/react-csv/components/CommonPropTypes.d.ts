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
    headers?: Headers;
    enclosingCharacter?: string;
    separator?: string;
    filename?: string;
    uFEFF?: boolean;
    onClick?: SyncClickHandler | AsyncClickHandler;
    asyncOnClick?: boolean;
}
