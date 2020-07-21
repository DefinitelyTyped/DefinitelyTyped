import { imgDiff } from 'img-diff-js';

const options = {
    actualFilename: 'a.jpg',
    expectedFilename: 'b.jpg',
};

const result = imgDiff(options); // $ExpectType Promise<ImgDiffResult>
