let f = fontkit.openSync('fonts/a-font.ttf');
let { glyphs, positions } = f.layout('Hello World!');

let res = [];
for (let i = 0; i < glyphs.length; i++) {
    let glyph = glyphs[i];
    let pos = positions[i];
    let x = `${glyph.id}`;
    if (pos.xOffset || pos.yOffset) {
      x += `@${pos.xOffset},${pos.yOffset}`
    }

    x += `+${pos.xAdvance}`;
    res.push(x);
}

res.join('|');
