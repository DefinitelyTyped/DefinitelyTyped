import { URL as _URL, URLSearchParams as _URLSearchParams } from 'url';

declare global {
    interface Global {
        URL: typeof _URL;
        URLSearchParams: typeof _URLSearchParams;
    }

    interface URLSearchParams extends _URLSearchParams {}
    interface URL extends _URL {}
}
