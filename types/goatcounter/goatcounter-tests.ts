import type GoatCounter from './index';

var window = {} as any as {
    goatcounter: Partial<GoatCounter>;
};
var location = {} as any;

// https://www.goatcounter.com/help/path#using-window-goatcounter-42
window.goatcounter = {
    path: location.pathname || '/',
};

window.goatcounter = {
    path: function () {
        return location.pathname + '?page=' + (window.goatcounter.get_query('page') || '/');
    },
};

// https://www.goatcounter.com/help/modify#custom-path-and-referrer-39
window.goatcounter = {
    // The passed value is the default.
    path: function (p) {
        // Don't track the home page.
        if (p === '/') return null;

        // Remove .html from all other page links.
        return p.replace(/\.html$/, '');
    },
};

// https://www.goatcounter.com/help/modify#setting-the-endpoint-in-javascript-40
var code = '';
switch (location.hostname) {
    case 'example.com':
        code = 'a';
        break;
    case 'example.org':
        code = 'b';
        break;
    default:
        code = 'c';
}
window.goatcounter = {
    endpoint: 'https://' + code + '.goatcounter.com/count',
};
// https://www.goatcounter.com/help/domains
window.goatcounter = {
    path: function (p) {
        return location.host + p;
    },
};

// https://www.goatcounter.com/help/spa
window.goatcounter.count({
    path: location.pathname + location.search + location.hash,
});

// https://www.goatcounter.com/help/beacon
if (document.visibilityState !== 'hidden') return;

if (window.goatcounter.filter()) return;
navigator.sendBeacon(
    window.goatcounter.url({
        event: true,
        path: function (p) {
            return 'unload-' + p;
        },
    }),
);
