import * as asciichart from 'asciichart';

asciichart.plot([1, 2, 3]);
asciichart.plot([1, 2, 3], {});
asciichart.plot([1, 2, 3], { offset: 4 });
asciichart.plot([1, 2, 3], { padding: '  > ' });
asciichart.plot([1, 2, 3], { height: 10 });
asciichart.plot([1, 2, 3], { format: x => x.toFixed(1) });
asciichart.plot([1, 2, 3], { format: (x, i) => (i === 2 ? '  * ' : x.toFixed(2)) });

asciichart.plot([1, 2, 3], {
    offset: 4,
    padding: '   >',
    height: 10,
    format: (x, i) => (i === 2 ? '  * ' : x.toFixed(2)),
});
