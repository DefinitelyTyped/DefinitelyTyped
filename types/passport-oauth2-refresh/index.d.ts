import { oauth2tokenCallback } from "oauth";
import { Strategy } from "passport-oauth2";

export function use(name: string | Strategy, strategy?: Strategy): void;

export function has(name: string): boolean;

export function requestNewAccessToken(name: string, refreshToken: string, done: oauth2tokenCallback): any;
export function requestNewAccessToken(name: string, refreshToken: string, params: any, done: oauth2tokenCallback): any;
