import { Paint } from 'athenajs';

interface FlashOptions{
    lineHeight: number,
    x: number,
    y: number,
    width: number
}

export default class FlashLines extends Paint {
    lines: number[];
    lineHeight: number;

    constructor(name:string, options:FlashOptions) {
        super('flashlines', Object.assign({}, {
        }, options));

        this.lines = [];
        this.lineHeight = options.lineHeight;
    }

    flash() {
        debugger;
        return this.animate('Fade', {
            startValue: 1,
            endValue: 0,
            duration: 400,
            loop: 2
        });
    }

    render() {
        for (let i = 0; i < this.lines.length; ++i) {
            const line = this.lines[i];
            this.rect(0, line * this.lineHeight, this.width, this.lineHeight, 'white');
        }
    }
}
