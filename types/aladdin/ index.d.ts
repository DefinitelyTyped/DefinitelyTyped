import { Env, ErrorCode } from './config'

type JsEvent = 'error' | 'call' | 'callback' | 'event'
type NativeEvent = 'networkChanged' | 'appBackground' | 'appForeground' | 'pageDidBack'
type EventName = JsEvent | NativeEvent

declare namespace aladdin {
    const version: string
    const env: Env

    function call(component: string, action?: string, ...args: any[]): void

    function callSync(component: string, action?: string, ...args: any[]): void

    function callback(handlerKey: string, ...ars: any[]): void

    interface CallbackError {
        code: keyof ErrorCode
        message: string
    }

    interface Callback {
        (err: CallbackError): void
    }

    interface SupportCallback {
        (err: CallbackError, support: boolean): void
    }

    function support(component: string, action: string, cb: SupportCallback): void

    function support(component: string, cb: SupportCallback): void

    interface Listener {
        (parmas: any): void
    }

    function on(evtName: EventName, listener: Listener): void

    function once(evtName: EventName, listener: Listener): void

    function off(evtName?: EventName, listener?: Listener): void

    function broadcast(evtName: EventName, evt: any, cb?: Callback): void

    function broadcast(evtName: EventName, evt: any, url?: string | string[], cb?: Callback): void
}