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

// $ExpectType<([a, b]: number[]) => number>
const addHelper = helper(function add([a, b]: number[]) {
    return a + b;
});

// $ExpectType<([str]: string[], { delim }: { delim: string | undefined }) => string>
const dasherizeHelper = helper(function dasherize([str]: string[], { delim = '-' }) {
    return str.split(/[\s\n\_\.]+/g).join(delim);
});

type Resolved<T> = T extends Promise<infer U> ? U : T;
declare const resolve: <T>([promise]: Array<Promise<T>>) => Resolved<T>;

helper(resolve); // $ExpectType<<T>([promise]: Array<Promise<T>>) => Resolved<T>>
