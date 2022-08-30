import type { defer, Promise } from 'rsvp';

// using any since complicated interfaces fail the type check with error "is not assignable to type 'never'"
export default class ModalModel<T = Record<string, any>> {
    declare name: string;
    declare fullname: string;
    declare options: T;
    declare promise: Promise<unknown>;
    declare deferred: ReturnType<typeof defer>;
}
