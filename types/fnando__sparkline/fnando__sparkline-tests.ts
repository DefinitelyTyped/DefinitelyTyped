// tslint:disable:no-duplicate-imports

import { sparkline } from '@fnando/sparkline';
import * as sparkline2 from '@fnando/sparkline';
import sparkline3 from '@fnando/sparkline';

const svg = document.createElement('svg') as any as SVGSVGElement;

// number entries
sparkline(svg, [1, 2, 3]);

// entries with { value: number } interface
sparkline(svg, [{ value: 1 }, { value: 2 }, { value: 3 }]);

// all other entries (required fetch in options)
sparkline(svg, [{ something: 1 }, { something: 2 }, { something: 3 }], {
    fetch: (entry) => entry.something
});

// all options
sparkline(svg, [1, 2, 3], {
    cursorwidth: 5,
    fetch: (entry) => entry,
    interactive: true,
    onmousemove: (event) => { console.log(event); },
    onmouseout: (event) => { console.log(event); },
    spotRadius: 5
});

sparkline2.default(svg, [1, 2, 3]);
sparkline2.sparkline(svg, [1, 2, 3]);

sparkline3(svg, [1, 2, 3]);
