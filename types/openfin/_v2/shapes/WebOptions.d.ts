import { PreloadScript } from './PreloadScript';
export interface WebOptions {
    preloadScripts?: PreloadScript[] | undefined;
    uuid: string;
    name: string;
    contentRedirect?: any;
    customContext?: any;
    experimental?: any;
}
