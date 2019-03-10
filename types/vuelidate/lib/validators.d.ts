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
    $params(): ValidationParams
    $pending(): boolean
}

export type CustomRule = (value: any, parentVm?: any) => boolean

export interface Helpers {
    withParams(params: Params, rule: CustomRule | ValidationRule): ValidationRule
    req(value: any): ValidationRule
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
export function minValue(min: number): ValidationRule
export function maxValue(max: number): ValidationRule
export function between(min: number, max: number): ValidationRule
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
export function or(...validators: Array<ValidationRule | CustomRule>): ValidationRule
export function and(...validators: Array<ValidationRule | CustomRule>): ValidationRule
