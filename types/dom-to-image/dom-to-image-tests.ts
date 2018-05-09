import * as domToImage from 'dom-to-image';

const node = new Node();

const options: domToImage.DomToImage.Options = {
    filter,
    bgcolor: '#24292e',
    style: {
        width: '100px'
    },
    width: 100,
    height: 100,
    quality: 0.1,
    imagePlaceholder: 'data:image/gif;base64,R0lGODlhAQABAIAAAP',
    cachebust: true
};

function filter(node: Node): boolean {
    return true;
}

async function toSvg() {
    const svg = await domToImage.toSvg(node, { filter });
}

async function toPng() {
    const png = await domToImage.toPng(node, { bgcolor: '#24292e', style: { width: '100px' } });
}

async function toJpeg() {
    const jpeg = await domToImage.toJpeg(node, { width: 100, height: 100});
}

async function toBlob() {
    const blob = await domToImage.toBlob(node, { quality: 0.1, });
}

async function toPixelData() {
    const pixelData = await domToImage.toPixelData(node, { imagePlaceholder: 'data:image/gif;base64,R0lGODlhAQABAIAAAP', cachebust: true });
}
