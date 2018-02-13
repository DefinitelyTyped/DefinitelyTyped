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

    glyphs: glyphs
});
font.download();

var hasChar: boolean = font.hasChar('a');
var charIndex: number = font.charToGlyphIndex('a');
var charGlyph: opentype.Glyph = font.charToGlyph('a');
var charGlyphs: opentype.Glyph[] = font.stringToGlyphs('abc');
var nameIndex: number = font.nameToGlyphIndex('a');
var nameGlyph: opentype.Glyph = font.nameToGlyph('a');
var indexName: string = font.glyphIndexToName(1);
var kerning: number = font.getKerningValue(notdefGlyph, aGlyph);
font.defaultRenderOptions.kerning = false;
var forEachWidth: number = font.forEachGlyph(
    'text',
    x,
    y,
    fontSize,
    {
        kerning: true
    },
    (glyph: opentype.Glyph, x: number, y: number, fontSize: number) => {
        console.log({
            glyph,
            x,
            y,
            fontSize
        });
    }
);
var fontPath: opentype.Path = font.getPath('text', x, y, fontSize, {});
var fontPaths: opentype.Path[] = font.getPaths('text', x, y, fontSize, {});
var fontWidth: number = font.getAdvanceWidth('text', fontSize, { yScale: 0.5 });
font.draw(ctx, 'text');
font.drawPoints(ctx, 'text', x, y, fontSize, { yScale: 0.5 });
font.drawMetrics(ctx, 'text', x, y, fontSize, { xScale: 1.1, yScale: 0.5 });
var engName: string = font.getEnglishName('a');
font.validate();
var tables: opentype.Table = font.toTables();
var ab: ArrayBuffer = font.toArrayBuffer();
font.download();
font.download('fileName.ttf');

aGlyph.bindConstructorValues({ advanceWidth: 1 });
aGlyph.addUnicode(42);
var glyphBBox: opentype.BoundingBox = aGlyph.getBoundingBox();
var glyphPathBasic: opentype.Path = aGlyph.getPath();
var glyphPathFull: opentype.Path = aGlyph.getPath(
    x,
    y,
    fontSize,
    { xScale: 1, yScale: 2 },
    font
);
var glyphContours: opentype.Contour = aGlyph.getContours();
var glyphMetrics: opentype.Metrics = aGlyph.getMetrics();
aGlyph.draw(ctx, x, y, fontSize, {});
aGlyph.drawPoints(ctx, x, y, fontSize);
aGlyph.drawMetrics(ctx, x, y, fontSize);

aPath.moveTo(100, 0);
aPath.lineTo(100, 700);
aPath.curveTo(100, 700, 200, 800, 150, 750);
aPath.bezierCurveTo(100, 700, 200, 800, 150, 750);
aPath.quadTo(100, 700, 200, 800);
aPath.quadraticCurveTo(100, 700, 200, 800);
aPath.close();
aPath.closePath();
aPath.extend(aPath);
aPath.extend(aPath.commands);
aPath.extend(aPath.getBoundingBox());
var pathBBox: opentype.BoundingBox = aPath.getBoundingBox();
aPath.draw(ctx);
var pathData: string = aPath.toPathData(7);
var pathSvg: string = aPath.toSVG(7);
var pathDom: SVGPathElement = aPath.toDOMElement(7);
