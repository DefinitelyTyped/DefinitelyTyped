import express = require("express");

export type cookieType = (
    name: string,
    value: string,
    opts?: express.CookieOptions
) => Reply;

export type downloadType = (path: string, filename?: string) => any;
export type headerType = (field: string, value?: string) => Reply;
export type jsonType = (data?: any) => any;
export type jsonpType = (data?: any) => any;
export type renderType = (view: string, locals?: object) => any;
export type sendType = (body?: any) => any;
export type statusType = (code: number) => Reply;
export type typeType = (type: string) => Reply;

export const cookie: cookieType;
export const download: downloadType;
export const header: headerType;
export const json: jsonType;
export const jsonp: jsonpType;
export const redirect: Redirect;
export const render: renderType;
export const send: sendType;
export const status: statusType;
export const type: typeType;

export interface Redirect {
    (path: string): Reply;
    (status: number, path: string): Reply;
}

export interface Reply {
    cookie: cookieType;
    download: downloadType;
    header: headerType;
    json: jsonpType;
    jsonp: jsonpType;
    redirect: Redirect;
    render: renderType;
    send: sendType;
    status: statusType;
    type: typeType;
}
