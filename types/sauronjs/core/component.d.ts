import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

export class Component {
  constructor(params: HTMLElement);

  static _index: number;

  broadcast(event, data): void;
  destroy(): void;
  registerSubscription(subscriptions: Subscription | Subscription[]): void;
  subscribe<T>(observables: Observable<T> | Array<Observable<T>>): void;
  find(selector: string): HTMLElement;
  findAll(selector): HTMLElement[];
  attr(key: string, value?: string): string | void;
}
