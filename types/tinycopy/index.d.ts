declare module "tinycopy" {
    export default class TinyCopy {
        constructor(trigger: Element, target: string | Element | NodeListOf<Element>);
        on(type: "success", action: (data: string) => void): this;
        on(type: "error", action: (err: Error) => void): this;
        on(type: string, action: (e: string | Error) => void): this;
        static exec(value: string, callback: (err?: Error, data?: string) => void): void;
    }
}
