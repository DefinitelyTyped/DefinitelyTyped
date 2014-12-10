declare module "i18n"
{
    export function configure(options:Object);
    export function init(request, response, next);
    export function __(phrase:any, data?:Object);
    export function __n(singular:string, plural:string, count:number);
    export function setLocale(locale_or_request, locale?);
    export function getLocale(request);
    export function getCatalog(locale_or_request, locale);
    export function overrideLocaleFromQuery(req);
}