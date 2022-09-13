/**
 * Deferred provides a Promise-like API that exposes methods to resolve and
 * reject the Promise. It is most useful when converting non-Promise code to use
 * Promises.
 *
 * If you want to export the Promise without exposing access to the resolve and
 * reject methods, you should export `getPromise` which returns a Promise with
 * the same semantics excluding those methods.
 */
declare class Deferred<Tvalue, Treason> {
    getPromise(): Promise<any>;
    resolve(value: Tvalue): void;
    reject(reason: Treason): void;
    catch(onReject?: ((error: any) => any) | null): Promise<any>;
    then(onFulfill?: ((value: any) => any) | null, onReject?: ((error: any) => any) | null): Promise<any>;
    done(onFulfill?: ((value: any) => any) | null, onReject?: ((error: any) => any) | null): void;
    isSettled(): boolean;
}

declare namespace Deferred {}

export = Deferred;
