import { push, pull } from 'dookie';

(async () => {
    await push('mongodb://localhost:27017/test', {test: [{ok: 1}, {ok: 2}]});
})();
