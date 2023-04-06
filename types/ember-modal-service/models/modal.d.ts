import type { defer, resolve, reject, Promise } from 'rsvp';

// using any since complicated interfaces fail the type check with error "is not assignable to type 'never'"
export default class ModalModel<T = Record<string, any>> {
    declare name: string;
    declare fullname: string;
    declare options: T;
    declare isPending: boolean;
	declare isSettled: boolean;
	declare isFulfilled: boolean;
	declare isRejected: boolean;
    declare resolve: typeof resolve;
    declare reject: typeof reject;
    declare promise: Promise<unknown>;
    declare setProperties: (options: Record<string, any>) => void;
    declare _deferred: ReturnType<typeof defer>;
}
