import { assertType } from './lib/assert';
import Helper, { helper } from '@ember/component/helper';

class Timestamp extends Helper {
    timer?: ReturnType<typeof setInterval>;
    now = new Date();
    init() {
        super.init();
        this.timer = setInterval(() => {
            this.set('now', new Date());
            this.recompute();
        }, 100);
    }
    willDestroy() {
        clearInterval(this.timer);
    }
}

const addHelper = helper(function add([a, b]: number[]) {
    return a + b;
});

const dasherizeHelper = helper(function dasherize([str]: string[], { delim = '-'}) {
    return str.split(/[\s\n\_\.]+/g).join(delim);
});
