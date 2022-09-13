import Compress = require('compress.js');

const compress = new Compress();

const uploadInput: HTMLInputElement = document.createElement('input');

uploadInput.type = 'file';

uploadInput.addEventListener(
  'change',
  event => {
    const target = event.target as HTMLInputElement;

    if (!target.files) {
      return;
    }

    compress.compress(Array.from(target.files), {
      size: 4,
      quality: 0.75,
      maxWidth: 1920,
      maxHeight: 1920,
      resize: true,
    });
  },
  false,
);

compress.attach('#upload', {
  size: 4,
  quality: 0.75,
});
