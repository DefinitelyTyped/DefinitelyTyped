import { createQueue } from '@wordpress/priority-queue';

const { add, flush } = createQueue();

const myContext = {};

// $ExpectType void
add(myContext, () => void 0);

// $ExpectType boolean
flush(myContext);
