import Bricks = require('bricks.js');

const bricks = Bricks({
    container: document.body.firstChild!,
    packed: 'packed',
    sizes: [
        { columns: 2, gutter: 10 },
        { mq: '768px', columns: 3, gutter: 25 },
        { mq: '1024px', columns: 4, gutter: 25 },
    ]
});

bricks
    .pack()
    .resize()
    .on('resize', (detail) => {
        const columns: number = detail.columns;
    });
