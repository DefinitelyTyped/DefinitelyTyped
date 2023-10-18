import { NextHandleFunction } from "connect";
import { FormOptions } from "multiparty";

export interface FormDataOptions extends FormOptions {
    autoClean?: boolean | undefined;
}

export function parse(options?: FormDataOptions): NextHandleFunction;

export function format(): NextHandleFunction;

export function stream(): NextHandleFunction;

export function union(): NextHandleFunction;
