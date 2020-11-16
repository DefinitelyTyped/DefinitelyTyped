import { WorkboxEventMap } from "./types/WorkboxEventMap";

import { EventTargetShim } from "./utils/EventTargetShim";

export class Workbox extends EventTargetShim {
    readonly active: Promise<ServiceWorker>;
    readonly controlling: Promise<ServiceWorker>;
    constructor(scriptURL: string, registerOptions?: RegistrationOptions);
    addEventListener<K extends keyof WorkboxEventMap>(type: K, listener: (this: Workbox, ev: WorkboxEventMap[K]) => void): void;
    removeEventListener<K extends keyof WorkboxEventMap>(type: K, listener: (this: Workbox, ev: WorkboxEventMap[K]) => void): void;
    getSW(): Promise<ServiceWorker>;
    messageSW(data: any): Promise<any>;
    register(options?: Workbox.RegisterOptions): Promise<ServiceWorkerRegistration>;
}

export namespace Workbox {
    interface RegisterOptions {
        immediate?: boolean;
    }
}
