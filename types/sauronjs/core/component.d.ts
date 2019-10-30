import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

interface ComponentParameters {
    element: HTMLElement;
    state?: any;
}

declare class Component {
    constructor(params: ComponentParameters);

    static _index: number;

    broadcast(event: string, data: any): void;
    destroy(): void;
    registerSubscription(subscriptions: ReadonlyArray<Subscription>): void;
    subscribe(observables: ReadonlyArray<Observable<any>>): void;
    find(selector: string): HTMLElement;
    findAll(selector: string): HTMLElement[];
    attr(key: string): string;
    attr(key: string, value: string): void;
}

export = Component;
