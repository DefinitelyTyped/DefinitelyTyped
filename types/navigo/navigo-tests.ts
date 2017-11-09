import Navigo = require("navigo");

const root = null;
const useHash = false;

let router = new Navigo(root, useHash);

router
    .on('/products/list', () => {
        // display all the products
    })
    .resolve();

router
    .on(() => {
        // show home page here
    })
    .resolve();

router
    .on({
        '/products/list': () => {
            // do something
        },
        '/products': () => {
            // do something
        }
    })
    .resolve();

router
    .on({
        'products/:id': () => {
            // do something
        },
        products: () => {
            // do something
        },
        '*': () => {
            // do something
        }
    })
    .resolve();

router
    .on('/user/:id/:action', (params: { id: string; action: string }) => {
        // If we have http://site.com/user/42/save as a url then
        // params.id = 42
        // params.action = save
    })
    .resolve();

router
    .on('/user/:id/:action', (params: { id: string; action: string }, query: string) => {
        // If we have http://site.com/user/42/save?answer=42 as a url then
        // params.id = 42
        // params.action = save
        // query = answer=42
    })
    .resolve();

router.notFound((query: string) => {
    // ...
});

router
    .on(/users\/(\d+)\/(\w+)\/?/, (id: string, action: string) => {
        // If we have http://site.com/user/42/save as a url then
        // id = 42
        // action = save
    })
    .resolve();

router
    .on('/user/*', () => {
        // This function will be called on every
        // URL that starts with /user
    })
    .resolve();

router.notFound(() => {
    // called when there is path specified but
    // there is no route matching
});

router.navigate('/products/list');

router.navigate('http://site.com/products/list', true);

router = new Navigo('http://site.com/', true);
const handler = () => {
    // do something
};
router.on({
    '/trip/:tripId/edit': { as: 'trip.edit', uses: handler },
    '/trip/save': { as: 'trip.save', uses: handler },
    '/trip/:action/:tripId': { as: 'trip.action', uses: handler }
});
let a: string = (router.generate('trip.edit', { tripId: 42 })); // --> /trip/42/edit
a = (router.generate('trip.action', { tripId: 42, action: 'save' })); // --> /trip/save/42
a = (router.generate('trip.save')); // --> /trip/save

router.pause();
router.navigate('/en/products');
router.resume(); // or .pause(false)

router.on(
    '/user/edit',
    () => {
        // show user edit page
    },
    {
        before: (done) => {
            // doing some async operation
            done(false);
            done();
        },
        after: () => {
            // do something
        }
    }
);
