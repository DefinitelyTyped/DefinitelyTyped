declare module "aurelia-flux" {
    export class Dispatcher {
        dispatch(messageName: string, payload?: any): void;
        handle(messageName: string, handler: (action, payload) => any): () => void;
    }

    export function handle(messageName: string): MethodDecorator;
    export function waitFor(... something: any[]): MethodDecorator;
}
