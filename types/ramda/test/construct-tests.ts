import * as R from 'ramda';

() => {
    function Circle(this: { r: number; colors: string; area: () => number }, r: number, colors: string) {
        this.r = r;
        this.colors = colors;
        return this;
    }

    Circle.prototype.area = function area() {
        return Math.PI * Math.pow(this.r, 2);
    };

    // ExpectType (r: number, colors: string) => {r: number, colors: string, area: () => number}
    const circleFactory = R.construct(Circle);

    // ExpectType {r: number, colors: string, area: () => number}
    const circleObject = circleFactory(10, 'red');
};

() => {
    class Circle {
        constructor(public r: number, public colors: string) {}

        area() {
            return Math.PI * Math.pow(this.r, 2);
        }
    }

    // ExpectType (r: number, colors: string) => Circle
    const circleFactory = R.construct(Circle);

    // ExpectType Circle
    const circleObject = circleFactory(10, 'red');
};
