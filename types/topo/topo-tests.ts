import Topo = require('topo');

const morning = new Topo<string, 'breakfast' | 'prep' | 'dinner'>();

morning.add('Nap', { after: ['breakfast', 'prep'] }); // $ExpectType string[]
// @ts-expect-error
morning.add('Nap', { after: 'foo' });
morning.add(['Make toast', 'Pour juice'], { before: 'breakfast', group: 'prep' }); // $ExpectType string[]
morning.add('Eat breakfast', { group: 'breakfast' }); // $ExpectType string[]

morning.nodes; // $ExpectType string[]

const dinner = new Topo<string, 'breakfast' | 'prep' | 'dinner'>();
dinner.add('Eat dinner', { group: 'dinner', after: 'breakfast' }); // $ExpectType string[]

morning.merge(dinner);
