import initSubscriber, { subscribe, Subscribe, Unsubscribe } from 'redux-subscriber';

const subscribe2: Subscribe = initSubscriber({});
const unsubscribe: Unsubscribe = subscribe('', state => {});
const unsubscribe2: Unsubscribe = subscribe2('', state => {});

unsubscribe();
unsubscribe2();
