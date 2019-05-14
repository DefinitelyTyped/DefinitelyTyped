import Route = require('route-parser');

const route = new Route('/users/:id');

// $ExpectType false | { [x: string]: string; }
const matched = route.match('/users/42'); // => { id: '42' }
// $ExpectType string | false
const reversed = route.reverse({ id: 42 });
// $ExpectType Route<{ id: number; }>
const route0 = new Route<{id: number}>('/users/:id');
// $ExpectType string | false
route0.reverse({id: 1});
// $ExpectType false | { id: string; }
route0.match('/users/:id');
// $ExpectType Route<{ slug: string; }>
const route1 = new Route<{slug: string}>('/posts/:slug');
// $ExpectType string | false
route1.reverse({slug: "hello"});
