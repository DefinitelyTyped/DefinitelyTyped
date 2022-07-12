import type { defer, Promise } from 'rsvp';

export default class ModalModel<T = Record<string, never>> {
    declare name: string;
    declare fullname: string;
    declare options: T;
    declare promise: Promise<unknown>;
    declare deferred: ReturnType<typeof defer>;
}
