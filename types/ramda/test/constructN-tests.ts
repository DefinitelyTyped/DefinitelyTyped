import * as R from 'ramda';

() => {
    function Circle(this: { r: number; metaInfo?: string; area: () => number }, r: number, metaInfo?: string) {
        this.r = r;
        this.metaInfo = metaInfo;
        return this;
    }

    Circle.prototype.area = function area() {
        return Math.PI * Math.pow(this.r, 2);
    };

    // $ExpectType Curry<(args_0: number, args_1: string | undefined) => { r: number; metaInfo?: string | undefined; area: () => number; }>
    const circleN = R.constructN(2, Circle);

    // $ExpectType { r: number; metaInfo?: string | undefined; area: () => number; }
    const circleObject0 = circleN(10)('Some additional information');

    // $ExpectType { r: number; metaInfo?: string | undefined; area: () => number; }
    const circleObject1 = circleN(10, 'Some additional information');
};

() => {
    class Circle {
        constructor(private readonly r: number, readonly metaInfo?: string) {}

        area() {
            return Math.PI * Math.pow(this.r, 2);
        }
    }

    // $ExpectType Curry<(args_0: number, args_1: string | undefined) => Circle>
    const circleN = R.constructN(2, Circle);

    // $ExpectType Circle
    const circleObject0 = circleN(10)('Some additional information');

    // $ExpectType Circle
    const circleObject1 = circleN(10, 'Some additional information');
};
