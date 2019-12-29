const x = 0;
const y = 0;
const fontSize = 72;
let ctx: CanvasRenderingContext2D;

opentype.load('fonts/Roboto-Black.ttf', (err, font) => {
    if (err) {
        alert('Font could not be loaded: ' + err);
    } else {
        const path = font.getPath('Hello, World!', 0, 150, 72);
        // If you just want to draw the text you can also use font.draw(ctx, text, x, y, fontSize).
        path.draw(ctx);
    }
});

let myBuffer: ArrayBuffer;
let font = opentype.parse(myBuffer);
font = opentype.loadSync('fonts/Roboto-Black.ttf');

const notdefGlyph = new opentype.Glyph({
    name: '.notdef',
    unicode: 0,
    advanceWidth: 650,
    path: new opentype.Path()
});

const aPath = new opentype.Path();
// more drawing instructions...
const aGlyph = new opentype.Glyph({
    name: 'A',
    unicode: 65,
    advanceWidth: 650,
    path: aPath
});

const glyphs = [notdefGlyph, aGlyph];
const fontGenerated = new opentype.Font({
    familyName: 'OpenTypeSans',
    styleName: 'Medium',
    unitsPerEm: 1000,
    ascender: 800,
    descender: -200,

    glyphs
});
font.download();

const hasChar: boolean = font.hasChar('a');
const charIndex: number = font.charToGlyphIndex('a');
const charGlyph: opentype.Glyph = font.charToGlyph('a');
const charGlyphs: opentype.Glyph[] = font.stringToGlyphs('abc');
const nameIndex: number = font.nameToGlyphIndex('a');
const nameGlyph: opentype.Glyph = font.nameToGlyph('a');
const indexName: string = font.glyphIndexToName(1);
const kerning: number = font.getKerningValue(notdefGlyph, aGlyph);
font.defaultRenderOptions.kerning = false;
const forEachWidth: number = font.forEachGlyph(
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
const fontPath: opentype.Path = font.getPath('text', x, y, fontSize, {});
const fontPaths: opentype.Path[] = font.getPaths('text', x, y, fontSize, {});
const fontWidth: number = font.getAdvanceWidth('text', fontSize, { yScale: 0.5 });
font.draw(ctx, 'text');
font.drawPoints(ctx, 'text', x, y, fontSize, { yScale: 0.5 });
font.drawMetrics(ctx, 'text', x, y, fontSize, { xScale: 1.1, yScale: 0.5 });
const engName: string = font.getEnglishName('a');
font.validate();
const tables: opentype.Table = font.toTables();
const ab: ArrayBuffer = font.toArrayBuffer();
font.download();
font.download('fileName.ttf');

aGlyph.bindConstructorValues({ advanceWidth: 1 });
aGlyph.addUnicode(42);
const glyphBBox: opentype.BoundingBox = aGlyph.getBoundingBox();
const glyphPathBasic: opentype.Path = aGlyph.getPath();
const glyphPathFull: opentype.Path = aGlyph.getPath(
    x,
    y,
    fontSize,
    { xScale: 1, yScale: 2 },
    font
);
const glyphContours: opentype.Contour = aGlyph.getContours();
const glyphMetrics: opentype.Metrics = aGlyph.getMetrics();
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
const pathBBox: opentype.BoundingBox = aPath.getBoundingBox();
pathBBox.addQuad(1, 1, 1, 1, 1, 1);
const yDist = pathBBox.y2 - pathBBox.y1;
aPath.draw(ctx);
const pathData: string = aPath.toPathData(7);
const pathSvg: string = aPath.toSVG(7);
const pathDom: SVGPathElement = aPath.toDOMElement(7);
