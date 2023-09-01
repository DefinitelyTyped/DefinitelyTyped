import { TSSettings } from "./settings";

export type CanBeInvalid = TSSettings extends { throwOnInvalid: true } ? false : true;
export type IfInvalid<T> = CanBeInvalid extends true ? T : never;
