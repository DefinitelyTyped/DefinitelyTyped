import * as Route from 'route-parser';

const route = new Route('/users/:id');
const matched = route.match('/users/42'); // => { id: '42' }
const reversed = route.reverse({ id: 42 });
