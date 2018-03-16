import { default as route } from 'riot-route';
import routeFromTag from 'riot-route/lib/tag';

/* () */
route(function(collection, id, action) {

});

route('/fruit', function(name) {
    console.log('The list of fruits')
});

/* create() */
var subRoute = route.create();
subRoute('/fruit/apple', function() { /* */ });

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
route('/search..', function() {
    var q = route.query()
    console.log('Search keyword: ' + q.keyword)
    console.log('Search limit: ' + q.limit)
});

/* base() */
route.base('/app');
route.base('#!');
route.base(); //reset

/* parser() */
route.parser(function(path) {
    var raw = path.slice(2).split('?'),
        uri = raw[0].split('/') as (string | { [name: string]: string })[],
        qs = raw[1],
        params = {} as { [name: string]: string };

    if (qs) {
        qs.split('&').forEach(function(v) {
            var c = v.split('=');
            params[c[0]] = c[1];
        })
    }
    uri.push(params);
    return uri
});

(function () {
    function first(path: string) {
        return[];
    }

    function second(path: string, filter: string) {
        let args: RegExpMatchArray | null;
        var re = new RegExp('^' + filter.replace(/\*/g, '([^/?#]+?)').replace(/\.\./, '.*') + '$')
        if (args = path.match(re)) return args.slice(1)
    }

    route.parser(first, second)
})();
