import * as R from 'ramda';

class Rectangle {
    constructor(public width: number, public height: number) {
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

() => {
    const square = new Rectangle(2, 2);
    R.hasIn('width', square); // => true
    R.hasIn('area', square); // => true
};
