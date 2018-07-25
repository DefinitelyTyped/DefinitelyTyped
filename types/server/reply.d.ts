import express = require("express");

type cookieType = (
    name: string,
    value: string,
    opts?: express.CookieOptions
) => IReply;

type downloadType = (path: string, filename?: string) => any;
type headerType = (field: string, value?: string) => IReply;
type jsonType = (data?: any) => any;
type jsonpType = (data?: any) => any;
type renderType = (view: string, locals?: object) => any;
type sendType = (body?: any) => any;
type statusType = (code: number) => IReply;
type typeType = (type: string) => IReply;

export const cookie: cookieType;
export const download: downloadType;
export const header: headerType;
export const json: jsonType;
export const jsonp: jsonpType;
export const redirect: IRedirect;
export const render: renderType;
export const send: sendType;
export const status: statusType;
export const type: typeType;

interface IRedirect {
    (path: string): IReply;
    (status: number, path: string): IReply;
}

export interface IReply {
    cookie: cookieType;
    download: downloadType;
    header: headerType;
    json: jsonpType;
    jsonp: jsonpType;
    redirect: IRedirect;
    render: renderType;
    send: sendType;
    status: statusType;
    type: typeType;
}
