// build your own rule
import Vue from 'vue'

export interface Params {
    [key: string]: any,
    type: string
}

export interface ValidationParams {
    readonly name: string
    readonly params: Params
    readonly path: string[]
}

// const ValidationRule
export interface ValidationRule {
    (...params: any[]): boolean
    $params(): ValidationParams
    $pending(): boolean
}

export type CustomRule = (value: any, parentVm?: any) => boolean | Promise<boolean>

export type ValidationFunc = () => ValidationRule;

export interface Helpers {
    withParams(params: Params, rule: CustomRule | ValidationRule): ValidationRule
    req(value: any): boolean
    ref(reference: string | ((vm: any, parentVm?: Vue) => any), vm: any, parentVm?: Vue): any
    len(value: any): number
    regex(type: string, expr: RegExp): ValidationRule
}

export const helpers: Helpers

// pre-defined rules
export function required(): ValidationRule
export function requiredIf(field: string | ((vm: any, parentVm?: Vue) => any)): ValidationRule
export function requiredUnless(field: string | ((vm: any, parentVm?: Vue) => any)): ValidationRule
export function minLength(length: number): ValidationRule
export function maxLength(length: number): ValidationRule
export function minValue(min: number | Date): ValidationRule
export function maxValue(max: number | Date): ValidationRule
export function between(min: number | Date, max: number | Date): ValidationRule
export function alpha(): ValidationRule
export function alphaNum(): ValidationRule
export function numeric(): ValidationRule
export function integer(): ValidationRule
export function decimal(): ValidationRule
export function email(): ValidationRule
export function ipAddress(): ValidationRule
export function macAddress(): ValidationRule
export function sameAs(field: string | ((vm: any, parentVm?: Vue) => any)): ValidationRule
export function url(): ValidationRule
export function not(validator: ValidationRule | CustomRule): ValidationRule
export function or(...validators: Array<ValidationFunc | CustomRule>): ValidationRule
export function and(...validators: Array<ValidationFunc | CustomRule>): ValidationRule
