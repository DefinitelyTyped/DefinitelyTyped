// Type definitions for non-npm package Yandex.Metrika Tag API 2.0
// Project: https://yandex.ru/support/metrica/code/counter-initialize.html
// Definitions by: hikiko4ern <https://github.com/hikiko4ern>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var ym: ym.Event;

declare namespace ym {
    interface Event {
        (counterId: number, eventName: 'init', parameters: InitParameters): void;
        (counterId: number, eventName: 'addFileExtension', extensions: string | string[]): void;
        // tslint:disable-next-line no-unnecessary-generics
        <CTX>(counterId: number, eventName: 'extLink', url: string, options?: ExtLinkOptions<CTX>): void;
        // tslint:disable-next-line no-unnecessary-generics
        <CTX>(counterId: number, eventName: 'file', url: string, options?: FileOptions<CTX>): void;
        (counterId: number, eventName: 'getClientID', cb: (clientID: string) => void): void;
        // tslint:disable-next-line no-unnecessary-generics
        <CTX>(counterId: number, eventName: 'hit', url: string, options?: HitOptions<CTX>): void;
        /** @deprecated */
        (
            counterId: number,
            eventName: 'hit',
            url: string,
            title?: string,
            referer?: string,
            params?: VisitParameters,
        ): void;
        // tslint:disable-next-line no-unnecessary-generics
        <CTX>(counterId: number, eventName: 'notBounce', options?: NotBounceOptions<CTX>): void;
        (counterId: number, eventName: 'params', parameters: VisitParameters | VisitParameters[]): void;
        <CTX>(
            counterId: number,
            eventName: 'reachGoal',
            target: string,
            params?: VisitParameters,
            callback?: (this: CTX) => void,
            ctx?: CTX,
        ): void;
        (counterId: number, eventName: 'replacePhones'): void;
        (counterId: number, eventName: 'setUserID', userID: string): void;
        (counterId: number, eventName: 'userParams', parameters: UserParameters): void;
    }

    interface VisitParameters {
        order_price?: number;
        currency?: string;
        [key: string]: any;
    }

    interface UserParameters {
        UserID?: number;
        [key: string]: any;
    }

    interface InitParameters {
        accurateTrackBounce?: boolean | number;
        childIframe?: boolean;
        clickmap?: boolean;
        defer?: boolean;
        ecommerce?: boolean | string | any[];
        params?: VisitParameters | VisitParameters[];
        userParams?: UserParameters;
        trackHash?: boolean;
        trackLinks?: boolean;
        trustedDomains?: string[];
        type?: number;
        ut?: 'noindex';
        webvisor?: boolean;
        triggerEvent?: boolean;
    }

    interface ExtLinkOptions<CTX> {
        callback?(this: CTX): void;
        ctx?: CTX;
        params?: VisitParameters;
        title?: string;
    }

    interface FileOptions<CTX> {
        callback?(this: CTX): void;
        ctx?: CTX;
        params?: VisitParameters;
        referer?: string;
        title?: string;
    }

    interface HitOptions<CTX> {
        callback?(this: CTX): void;
        ctx?: CTX;
        params?: VisitParameters;
        referer?: string;
        title?: string;
    }

    interface NotBounceOptions<CTX> {
        callback?(this: CTX): void;
        ctx?: CTX;
    }
}
