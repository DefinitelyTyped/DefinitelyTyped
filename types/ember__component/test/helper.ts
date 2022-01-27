import Helper, { helper } from '@ember/component/helper';

class Timestamp extends Helper<{
    PositionalArgs: [offset: Date],
    Return: Date,
}> {
    timer?: ReturnType<typeof setInterval> | undefined;
    now = new Date();
    init() {
        super.init();
        this.timer = setInterval(() => {
            this.set('now', new Date());
            this.recompute();
        }, 100);
    }
    compute([offset]: [Date]): Date {
        return new Date(this.now.getTime() + offset.getTime());
    }
    willDestroy() {
        clearInterval(this.timer);
    }
}

const addHelper = helper(function add([a, b]: [number, number]) {
    return a + b;
});

const dasherizeHelper = helper(function dasherize([str]: [string], { delim = '-' }: { delim?: string }) {
    return str.split(/[\s\n\_\.]+/g).join(delim);
});
