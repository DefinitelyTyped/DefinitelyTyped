import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

interface ComponentParameters {
    element: HTMLElement;
}

declare class Component {
constructor(params: ComponentParameters);

static _index: number;

 broadcast(event: string, data: any): void;
destroy(): void;
 registerSubscription(subscriptions: Subscription | Subscription[]): void;
subscribe<T>(observables: Observable<T> | Array<Observable<T>>): void;
  find(selector: string): HTMLElement;
findAll(selector: string): HTMLElement[];
  attr(key: string, value?: string): string | void;
}

export { Component };
