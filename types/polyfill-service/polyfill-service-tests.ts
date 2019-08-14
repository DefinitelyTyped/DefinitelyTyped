import * as svc from 'polyfill-service';

const o: svc.GetPolyfillsOptions = {
    uaString: ''
};

o.excludes = ['foo'];
o.features = {
    foo: {},
    bar: {flags: ['gated', 'always']}
};

const o2: svc.GetPolyfillStringOptions = {
    uaString: ''
};

o2.excludes = ['foo'];
o2.features = {
    foo: {},
    bar: {flags: ['gated', 'always']}
};
o2.minify = true;
o2.minify = false;
o2.unknown = 'polyfill';
o2.unknown = 'ignore';

svc.listAllPolyfills().then(v => {
    v[0].toLocaleLowerCase();
});

svc.getPolyfillString(o2).then(s => {
    s.toLocaleUpperCase();
});

svc.getPolyfills(o).then(r => {
    const p = r.Symbol;
    p.flags.clear();

    const a = p.aliasOf;
    if (a) {
        a.clear();
    }
});
