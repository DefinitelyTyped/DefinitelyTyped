declare module 'nssm' {
    export interface NssmOptions {
      nssmExe?: string
    }

    export type Command =
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
        onrejected?: ((reason: Error, stderr: string) => TResult2 | PromiseLike<TResult2>) | null | undefined)
            => NssmPromise<TResult1 | TResult2>
    type NssmCatch<T> = <TResult = never>
        (onrejected?: ((reason: Error, stderr: string) => TResult | PromiseLike<TResult>) | null | undefined) 
            => NssmPromise<T | TResult>
    interface NssmPromise<T> extends Promise<T>{
      then: NssmThen<T>;
      catch: NssmCatch<T>;
    }

    export type NssmCallback = (error?: string, result?: string) => void
    export type ZeroArgNssmCallback = (callback: NssmCallback) => void
    export type OneArgNssmCallback = (arg1: string, callback: NssmCallback) => void
    export type TwoArgNssmCallback = (arg1: string, arg2: string, callback: NssmCallback) => void
    export type ZeroArgPromiseFunction = () => Promise<string>
    export type OneArgPromiseFunction = (arg1: string) => Promise<string>
    export type TwoArgPromiseFunction = (arg1: string, arg2: string) => NssmPromise<string>

    export type NssmCommand =
      & ZeroArgNssmCallback
      & OneArgNssmCallback
      & TwoArgNssmCallback
      & ZeroArgPromiseFunction
      & OneArgPromiseFunction
      & TwoArgPromiseFunction

    export type Nssm = {
      [key in Command]: NssmCommand
    }

    export default function (serviceName: string, options?: NssmOptions): Nssm
}
