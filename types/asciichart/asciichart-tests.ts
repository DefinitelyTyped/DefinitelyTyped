import * as asciichart from 'asciichart';

asciichart.black; // $ExpectType string
asciichart.red; // $ExpectType string
asciichart.green; // $ExpectType string
asciichart.yellow; // $ExpectType string
asciichart.blue; // $ExpectType string
asciichart.magenta; // $ExpectType string
asciichart.cyan; // $ExpectType string
asciichart.lightgray; // $ExpectType string
asciichart.default; // $ExpectType string
asciichart.darkgray; // $ExpectType string
asciichart.lightred; // $ExpectType string
asciichart.lightgreen; // $ExpectType string
asciichart.lightyellow; // $ExpectType string
asciichart.lightblue; // $ExpectType string
asciichart.lightmagenta; // $ExpectType string
asciichart.lightcyan; // $ExpectType string
asciichart.white; // $ExpectType string
asciichart.reset; // $ExpectType string

asciichart.plot([1, 2, 3]);
asciichart.plot([1, 2, 3], {});
asciichart.plot([1, 2, 3], { offset: 4 });
asciichart.plot([1, 2, 3], { padding: '  > ' });
asciichart.plot([1, 2, 3], { height: 10 });
asciichart.plot([1, 2, 3], { min: -5 });
asciichart.plot([1, 2, 3], { max: 15 });
asciichart.plot([1, 2, 3], { symbols: ['┼', '┤', '╶', '╴', '─', '╰', '╭', '╮', '╯', '│'] });
asciichart.plot([1, 2, 3], { format: x => x.toFixed(1) });
asciichart.plot([1, 2, 3], { format: (x, i) => (i === 2 ? '  * ' : x.toFixed(2)) });

asciichart.plot([1, 2, 3], {
    offset: 4,
    padding: '   >',
    height: 10,
    colors: [asciichart.blue, asciichart.green, asciichart.default, undefined],
    min: -5,
    max: 15,
    symbols: ['┼', '┤', '╶', '╴', '─', '╰', '╭', '╮', '╯', '│'],
    format: (x, i) => (i === 2 ? '  * ' : x.toFixed(2)),
});
