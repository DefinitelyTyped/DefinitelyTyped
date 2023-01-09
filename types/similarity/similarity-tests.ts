import * as similarity from 'similarity';

// @ts-expect-error
similarity();
// @ts-expect-error
similarity('left');
similarity('left', 'right'); // $ExpectType number
similarity('left', 'right', { sensitive: true }); // $ExpectType number
