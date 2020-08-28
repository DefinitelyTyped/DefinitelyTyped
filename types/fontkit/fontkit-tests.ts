import fontkit from 'fontkit';

const f = fontkit.openSync('fonts/a-font.ttf');
const { glyphs, positions } = f.layout('Hello World!');

const res = [];
for (let i = 0; i < glyphs.length; i++) {
    const glyph = glyphs[i];
    const pos = positions[i];
    let x = `${glyph.id}`;
    if (pos.xOffset || pos.yOffset) {
      x += `@${pos.xOffset},${pos.yOffset}`;
    }

    x += `+${pos.xAdvance}`;
    res.push(x);
}

res.join('|');
