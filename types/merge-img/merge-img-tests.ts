import mergeImg from 'merge-img';
import { resolve } from 'path';
const fixturePath = resolve(__dirname, 'fixtures');

mergeImg(['image-1.png', 'image-2.jpg']).then(img => {
    // Save image as file
    img.write('out.png', () => console.log('done'));
});

mergeImg([
    {
        src: `${fixturePath}/example.png`,
        offsetX: 5,
    },
    {
        src: `${fixturePath}/example.png`,
        offsetX: 10,
    },
]);

mergeImg([`${fixturePath}/example.png`, `${fixturePath}/example.png`], {
    direction: true,
    color: 0xffffffff,
    align: 'center',
    offset: 10,
});
mergeImg([
    {
        src: `${fixturePath}/example.png`,
        offsetY: 20,
    },
    {
        src: `${fixturePath}/example.png`,
        offsetX: 100,
        offsetY: 150,
    },
]);
mergeImg([`${fixturePath}/example.png`, `${fixturePath}/example.png`], {
    margin: {
        top: 40,
        right: 40,
        bottom: 0,
        left: 10,
    },
});
