import { Options, DomToImage } from 'dom-to-image';

const node = new Node();

const options: Options = {
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

async function testToSvg() {
    const svg = await DomToImage.toSvg(node, { filter });
}

async function testToPng() {
    const png = await DomToImage.toPng(node, { bgcolor: '#24292e', style: { width: '100px' } });
}

async function testToJpeg() {
    const jpeg = await DomToImage.toJpeg(node, { width: 100, height: 100 });
}

async function testToBlob() {
    const blob = await DomToImage.toBlob(node, { quality: 0.1, });
}

async function testToPixelData() {
    const pixelData = await DomToImage.toPixelData(node, { imagePlaceholder: 'data:image/gif;base64,R0lGODlhAQABAIAAAP', cachebust: true });
}
