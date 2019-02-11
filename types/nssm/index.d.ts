// Type definitions for nssm 0.1
// Project: https://github.com/alykoshin/nssm
// Definitions by: Joram van den Boezem <https://github.com/hongaar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Command =
    | 'install'
    | 'remove'
    | 'start'
    | 'stop'
    | 'restart'
    | 'status'
    | 'pause'
    | 'continue'
    | 'rotate'
    | 'get'
    | 'set'
    | 'reset'

type NssmThen<T> = <TResult1 = T, TResult2 = never>(
    onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    onrejected?: ((reason: Error, stderr: string) => TResult2 | PromiseLike<TResult2>) | null | undefined
) => NssmPromise<TResult1 | TResult2>

type NssmCatch<T> = <TResult = never>(
    onrejected?: ((reason: Error, stderr: string) => TResult | PromiseLike<TResult>) | null | undefined
) => NssmPromise<T | TResult>

interface NssmPromise<T> extends Promise<T> {
    then: NssmThen<T>
    catch: NssmCatch<T>
}

type CallbackFn = (error?: string, result?: string) => void
type ZeroArgCommandFn = (callback: CallbackFn) => void
type OneArgCommandFn = (arg1: string, callback: CallbackFn) => void
type TwoArgCommandFn = (arg1: string, arg2: string, callback: CallbackFn) => void
type PromiseCommandFn = (arg1?: string, arg2?: string) => NssmPromise<string>

type NssmCommandFn =
    & ZeroArgCommandFn
    & OneArgCommandFn
    & TwoArgCommandFn
    & PromiseCommandFn

export type Nssm = {
    [key in Command]: NssmCommandFn
}

export interface NssmOptions {
    nssmExe?: string
}

export default function nssm (serviceName: string, options?: NssmOptions): Nssm
