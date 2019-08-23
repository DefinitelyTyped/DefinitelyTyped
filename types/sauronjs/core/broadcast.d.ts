import { Subscriber } from 'rxjs/Subscriber';

export function next(channels, event, data, id): void;
export function attachSubject<T>(object): Subscriber<T>;
