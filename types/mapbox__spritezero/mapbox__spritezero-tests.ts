/// <reference types="node" />

import spritezero = require('@mapbox/spritezero');
import fs = require('fs');
import glob = require('glob');
import path = require('path');

spritezero.strongRound(2.3491, 2); // $ExpectType number
spritezero.strongRound(2.3491); // $ExpectType number

const metadata: spritezero.Metadata = {
    content: [2, 5, 18, 11],
    stretchX: [
        [3, 7],
        [14, 18],
    ],
    stretchY: [[5, 11]],
};

const dataLayout: spritezero.DataLayout = {
    'aerialway-12': {
        width: 12,
        height: 12,
        pixelRatio: 1,
        x: 133,
        y: 282,
    },
};

const imgLayout: spritezero.ImgLayout = {
    width: 512,
    height: 512,
    items: [
        {
            height: 12,
            width: 12,
            x: 133,
            y: 282,
            buffer: '...',
        },
        {
            height: 12,
            width: 12,
            x: 133,
            y: 282,
            buffer: '...',
        },
    ],
};

// $ExpectType Error | null
spritezero.validateMetadata(
    {
        width: 512,
        height: 512,
    },
    { content: [2, 2, 22, 16] },
);

spritezero.extractMetadata(
    {
        svg: fs.readFileSync(`${__dirname}/fixture/svg-metadata/cn-nths-expy-2-affinity.svg`, 'utf-8'),
    },
    (err, metadata) => {
        if (err) {
            console.log(err);
        } else {
            metadata; // $ExpectType Metadata
        }
    },
);

[1, 2, 4].forEach(pxRatio => {
    const svgs = glob.sync(path.resolve(path.join(__dirname, 'input/*.svg'))).map(f => {
        return {
            svg: fs.readFileSync(f),
            id: path.basename(f).replace('.svg', ''),
        };
    });
    const pngPath = path.resolve(path.join(__dirname, `output/sprite@${pxRatio}.png`));
    const jsonPath = path.resolve(path.join(__dirname, `output/sprite@${pxRatio}.json`));
    spritezero.generateLayout({ imgs: svgs, pixelRatio: pxRatio, format: true }, (err, dataLayout) => {
        if (err) return;
        fs.writeFileSync(jsonPath, JSON.stringify(dataLayout));
    });
    spritezero.generateLayout({ imgs: svgs, pixelRatio: pxRatio, format: false }, (err, imageLayout) => {
        spritezero.generateImage(imageLayout as spritezero.ImgLayout, (err, image) => {
            if (err) return;
            fs.writeFileSync(pngPath, image);
        });
    });
});
