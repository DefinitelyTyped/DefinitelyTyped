
import {push, pull} from './index';

(async () => {

    await push('mongodb://localhost:27017/test', {test: [{ok: 1}, {ok: 2}]});

})();
