import render = require('svg-render');

// test type exports
type Options = render.Options;

render({ buffer: Buffer.from('<svg></svg>') }); // $ExpectType Promise<Buffer>
// @ts-expect-error
render({});
render({ buffer: Buffer.from('<svg></svg>'), width: 42 }); // $ExpectType Promise<Buffer>
render({ buffer: Buffer.from('<svg></svg>'), height: 42 }); // $ExpectType Promise<Buffer>
render({ buffer: Buffer.from('<svg></svg>'), expandUseTags: true }); // $ExpectType Promise<Buffer>
