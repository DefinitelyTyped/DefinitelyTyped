declare module 'nssm' {
    interface NssmOptions {
      nssmExe?: string
    }

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
        onrejected?: ((reason: Error, stderr: string) => TResult2 | PromiseLike<TResult2>) | null | undefined)
            => NssmPromise<TResult1 | TResult2>
    type NssmCatch<T> = <TResult = never>
        (onrejected?: ((reason: Error, stderr: string) => TResult | PromiseLike<TResult>) | null | undefined) 
            => NssmPromise<T | TResult>
    interface NssmPromise<T> extends Promise<T>{
      then: NssmThen<T>;
      catch: NssmCatch<T>;
    }

    type NssmCallback = (error?: string, result?: string) => void
    type ZeroArgNssmCallback = (callback: NssmCallback) => void
    type OneArgNssmCallback = (arg1: string, callback: NssmCallback) => void
    type TwoArgNssmCallback = (arg1: string, arg2: string, callback: NssmCallback) => void
    type ZeroArgPromiseFunction = () => NssmPromise<string>
    type OneArgPromiseFunction = (arg1: string) => NssmPromise<string>
    type TwoArgPromiseFunction = (arg1: string, arg2: string) => NssmPromise<string>

    type NssmCommand =
        & ZeroArgNssmCallback
        & OneArgNssmCallback
        & TwoArgNssmCallback
        & ZeroArgPromiseFunction
        & OneArgPromiseFunction
        & TwoArgPromiseFunction

    type Nssm = {
      [key in Command]: NssmCommand
    }

    const Nssm: (serviceName: string, options?: NssmOptions) => Nssm

    export = Nssm
}
