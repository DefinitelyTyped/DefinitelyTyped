import imageCompression = require('browser-image-compression');

const file = new File([''], 'image.jpg', { type: 'image/jpeg' });

(async () => {
  const compressedFile = await imageCompression(file, {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: false,
    maxIteration: 10,
    exifOrientation: -2,
    onProgress: (p: number) => {}
  });
})();
