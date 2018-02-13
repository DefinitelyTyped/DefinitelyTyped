var x = 0;
var y = 0;
var fontSize = 72;
var ctx: CanvasRenderingContext2D;

opentype.load('fonts/Roboto-Black.ttf', function(err, font) {
    if (err) {
         alert('Font could not be loaded: ' + err);
    } else {
        var path = font.getPath('Hello, World!', 0, 150, 72);
        // If you just want to draw the text you can also use font.draw(ctx, text, x, y, fontSize).
        path.draw(ctx);
    }
});

var myBuffer: ArrayBuffer;
var font = opentype.parse(myBuffer);
font = opentype.loadSync('fonts/Roboto-Black.ttf');

var notdefGlyph = new opentype.Glyph({
    name: '.notdef',
    unicode: 0,
    advanceWidth: 650,
    path: new opentype.Path()
});

var aPath = new opentype.Path();
aPath.moveTo(100, 0);
aPath.lineTo(100, 700);
// more drawing instructions...
var aGlyph = new opentype.Glyph({
    name: 'A',
    unicode: 65,
    advanceWidth: 650,
    path: aPath
});

var glyphs = [notdefGlyph, aGlyph];
var font = new opentype.Font({
    familyName: 'OpenTypeSans',
    styleName: 'Medium',
    unitsPerEm: 1000,
    ascender: 800,
    descender: -200,
    glyphs: glyphs});
font.download();

font.getPath('text', x, y, fontSize);
font.draw(ctx, 'text', x, y, fontSize);
font.drawPoints(ctx, 'text', x, y, fontSize);
font.drawMetrics(ctx, 'text', x, y, fontSize);
font.stringToGlyphs('string');
font.charToGlyph('c');
font.getKerningValue(notdefGlyph, aGlyph);

aGlyph.getPath(x, y, fontSize);
aGlyph.draw(ctx, x, y, fontSize);
aGlyph.drawPoints(ctx, x, y, fontSize);
aGlyph.drawMetrics(ctx, x, y, fontSize);

aPath.draw(ctx);
aPath.toPathData(7);
aPath.toSVG(7);
