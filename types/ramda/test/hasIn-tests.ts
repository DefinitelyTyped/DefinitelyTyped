import * as R from 'ramda';

class Rectangle {
    constructor(public width: number, public height: number) {}

    area(): number {
        return this.width * this.height;
    }
}

() => {
    const square = new Rectangle(2, 2);
    // $ExpectType true
    R.hasIn('width', square); // => true
    // $ExpectType true
    R.hasIn('area', square); // => true
    // $ExpectType true
    R.hasIn('area')(square); // => true
};
