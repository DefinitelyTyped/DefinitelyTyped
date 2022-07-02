import downscale from 'downscale';

const image = new HTMLImageElement();
const video = new HTMLVideoElement();
const file = new File([], 'abc');
const string = '';

downscale(image, 0, 0);
downscale(video, 0, 0);
downscale(file, 0, 0);
downscale(string, 0, 0);

async function doTheTests() {
    const string_returned: string = await downscale(image, 0, 0);

    const canvas_returned: HTMLCanvasElement = await downscale(image, 0, 0, { returnCanvas: true });

    const blob_returned: Blob = await downscale(image, 0, 0, { returnBlob: true });
}
