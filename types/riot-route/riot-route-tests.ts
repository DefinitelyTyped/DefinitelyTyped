import route = require('riot-route');
import routeFromTag from 'riot-route/lib/tag';

/* () */
route((collection, id, action) => {
});

route('/fruit', (name) => {
    console.log('The list of fruits');
});

/* create() */
const subRoute = route.create();
subRoute('/fruit/apple', () => { /* */ });

/* () */
route('customers/267393/edit');
route('customers/267393/edit', 'Editing customer page');
route('not-found', 'Not found', true);

/* start() */
route.start();
route.start(true);

/* stop() */
route.stop();

/* exec() */
route.exec();

/* query() */
route('/search..', () => {
    const q = route.query();
    console.log('Search keyword: ' + q.keyword);
    console.log('Search limit: ' + q.limit);
});

/* base() */
route.base('/app');
route.base('#!');
route.base(); // reset

/* parser() */
route.parser((path) => {
    const raw = path.slice(2).split('?');
    const uri = raw[0].split('/') as Array<string | { [name: string]: string }>;
    const qs = raw[1];
    const params: { [name: string]: string } = {};

    if (qs) {
        qs.split('&').forEach((v) => {
            const c = v.split('=');
            params[c[0]] = c[1];
        });
    }
    uri.push(params);
    return uri;
});

(() => {
    function first(path: string): any[] {
        return [];
    }

    function second(path: string, filter: string) {
        const re = new RegExp(`^${filter.replace(/\*/g, '([^/?#]+?)').replace(/\.\./, '.*')}$`);
        const args = path.match(re);
        if (args) {
            return args.slice(1);
        }
    }

    route.parser(first, second);
})();
