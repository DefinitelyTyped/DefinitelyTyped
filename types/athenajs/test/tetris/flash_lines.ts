import { Paint, PaintOptions } from 'athenajs';

interface FlashOptions extends PaintOptions {
    lineHeight: number;
    x: number;
    y: number;
    width: number;
}

export default class FlashLines extends Paint {
    lines: number[];
    lineHeight: number;

    constructor(name: string, options: FlashOptions) {
        super('flashlines', options);

        this.lines = [];
        this.lineHeight = options.lineHeight;
    }

    flash() {
        return this.animate('Fade', {
            startValue: 1,
            endValue: 0,
            duration: 400,
            loop: 2
        });
    }

    render() {
        for (const line of this.lines) {
            this.rect(0, line * this.lineHeight, this.width, this.lineHeight, 'white');
        }
    }
}
