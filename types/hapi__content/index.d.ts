/// <reference types="node" />

export interface ContentType {
    mime: string;
    charset?: string;
    boundary?: string;
}

export function type(header: string | undefined): ContentType;

export interface ContentDisposition {
    name: string;
    filename: string;
}

export function disposition(header: string | undefined): ContentDisposition;
