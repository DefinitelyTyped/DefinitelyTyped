import * as omggif from 'omggif';

// (c) Dean McNamee <dean@gmail.com>, 2013.
// Node omggif example to write out a few example images.

// Needs to be large enough for the final full file size.  Can be any type of
// buffer that supports [] (an Array, Uint8Array, Node Buffer, etc).
const buf: omggif.GifBinary = [];

function gen_static_global() {
    const gf = new omggif.GifWriter(buf, 2, 2, { palette: [0xff0000, 0x0000ff] });
    gf.addFrame(0, 0, 2, 2, [0, 1, 1, 0]);
    return gf.end();
}

function gen_anim() {
    // The loop parameter is the number of times to loop, or 0 for forever.
    // A value of 1 will play twice (first time, and then one loop time).
    // To play only once do not specify loop or pass null.
    const gf = new omggif.GifWriter(buf, 2, 2, { loop: 1 });
    gf.addFrame(0, 0, 2, 2, [0, 1, 1, 0], { palette: [0xff0000, 0x0000ff] });
    gf.addFrame(0, 0, 2, 2, [1, 0, 0, 1], {
        palette: [0xff0000, 0x0000ff],
        delay: 10,
    }); // Delay in hundredths of a sec (100 = 1s).
    return gf.end();
}

function gen_gray_strip() {
    const gf = new omggif.GifWriter(buf, 256, 1);
    const palette = [];
    const indices = [];
    for (let i = 0; i < 256; ++i) {
        palette.push((i << 16) | (i << 8) | i);
        indices.push(i);
    }
    gf.addFrame(0, 0, 256, 1, indices, { palette });
    return gf.end();
}

// More than 8-bit color (via tiling of several frames).  Browsers seem to
// treat this as an animation though, with an enforced minimum time between
// frames which makes it animated instead of the intended static image.
function gen_color_strip() {
    const gf = new omggif.GifWriter(buf, 256, 256, {
        palette: [0x000000, 0xff0000],
        background: 1,
    });

    const indices = [];
    for (let i = 0; i < 256; ++i) indices.push(i);

    for (let j = 0; j < 256; ++j) {
        const palette = [];
        for (let i = 0; i < 256; ++i) palette.push((j << 16) | (i << 8) | i);
        gf.addFrame(0, j, 256, 1, indices, { palette, disposal: 1 });
    }
    return gf.end();
}

// 1x1 white, generates the same as Google's 35 byte __utm.gif, except for some
// reason that I'm not sure of they set their background index to 255.
function gen_empty_white() {
    const gf = new omggif.GifWriter(buf, 1, 1, { palette: [0xffffff, 0x000000] });
    gf.addFrame(0, 0, 1, 1, [0]);
    return gf.end();
}

// with lzw block of 256.
// see: https://github.com/deanm/omggif/issues/5
function gen_block256() {
    const width = 4840;
    const gf = new omggif.GifWriter(buf, width, 1, {
        palette: [0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000, 0x000000],
    });
    const stream = Array(width);
    for (let i = 0; i < width; ++i) stream[i] = i & 0x7;
    gf.addFrame(0, 0, width, 1, stream, { transparent: 0 });
    const data = Array.from(buf).slice(0, gf.end());
    // Make sure it decodes.
    const gr = new omggif.GifReader(data);
    const frameInfo = gr.frameInfo(0);
    return frameInfo;
}
