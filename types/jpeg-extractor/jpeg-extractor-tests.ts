import * as je from 'jpeg-extractor';

const j: je.jpeg_extractor = new je.jpeg_extractor();

j.on('image', (image: Buffer) => {
    console.log(image.toString('hex'));
});
