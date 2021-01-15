import imageCompression = require('browser-image-compression');

async function handleImageUpload({ target }: { target: EventTarget & { files: FileList } }) {
    const imageFile: File = target.files[0];
    console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
    console.log(`originalFile size ${imageFile.size / 1024 / 1024} MB`);

    const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
    };
    try {
        const compressedFile = await imageCompression(imageFile, options);
        console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
    } catch (error) {
        console.log(error);
    }
}

async function advancedFunctions(file: File) {
    const base64: string = await imageCompression.getDataUrlFromFile(file);
    const file2 = await imageCompression.getFilefromDataUrl(base64, file.name, file.lastModified);
    const img: HTMLImageElement = await imageCompression.loadImage(base64);
    const canvas = imageCompression.drawImageInCanvas(img);
    const [img2, canvas2] = await imageCompression.drawFileInCanvas(file2);
    const file3 = await imageCompression.canvasToFile(canvas, file.type, file.name, file.lastModified);
    const exifOri: number = await imageCompression.getExifOrientation(file3);
    console.log(img2, canvas2, exifOri);
}
