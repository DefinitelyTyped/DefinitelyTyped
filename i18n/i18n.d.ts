interface i18n
{
    configure(options:Object);
    init(request, response, next);
    __(phrase:any);
    __n(singular:string, plural:string, count:number);
    setLocale(locale_or_request, locale?);
    getLocale(request);
    getCatalog(locale_or_request, locale);
    overrideLocaleFromQuery(req);
}

declare var i18n:i18n;