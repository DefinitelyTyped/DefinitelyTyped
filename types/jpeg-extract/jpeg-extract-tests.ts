import * as je from 'jpeg-extract';

const j: je.jpeg_extractor = new je.jpeg_extractor();

j.on('image', (image: Buffer) => {
    console.log(image.toString('hex'));
});
