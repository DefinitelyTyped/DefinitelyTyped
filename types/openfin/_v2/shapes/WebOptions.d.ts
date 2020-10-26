import { PreloadScript } from './PreloadScript';
export interface WebOptions {
    preloadScripts?: PreloadScript[];
    uuid: string;
    name: string;
    contentRedirect?: any;
    customContext?: any;
    experimental?: any;
}
