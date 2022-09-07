import { load, loadSync, parse, Glyph, Font, Path, PathCommand } from 'opentype.js';

const x = 0;
const y = 0;
const fontSize = 72;
const canvas: HTMLCanvasElement = document.createElement('canvas');
const ctx = canvas.getContext('2d')!;

load('fonts/Roboto-Black.ttf', (err, font) => {
    if (err) {
        alert('Font could not be loaded: ' + err);
    } else {
        const path = font!.getPath('Hello, World!', 0, 150, 72);
        path.draw(ctx);
    }
});

let font = parse(new ArrayBuffer(0));
font = loadSync('fonts/Roboto-Black.ttf', { lowMemory: true });

const notdefGlyph = new Glyph({
    name: '.notdef',
    unicode: 0,
    advanceWidth: 650,
    path: new Path(),
});

const aPath = new Path();
// more drawing instructions...
const aGlyph = new Glyph({
    name: 'A',
    unicode: 65,
    advanceWidth: 650,
    path: aPath,
});

const glyphs = [notdefGlyph, aGlyph];
const fontGenerated = new Font({
    familyName: 'OpenTypeSans',
    styleName: 'Medium',
    unitsPerEm: 1000,
    ascender: 800,
    descender: -200,

    glyphs,
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
font.defaultRenderOptions.letterSpacing = 0;
font.defaultRenderOptions.tracking = 0;
const forEachWidth: number = font.forEachGlyph(
    'text',
    x,
    y,
    fontSize,
    {
        kerning: true,
    },
    (glyph: opentype.Glyph, x: number, y: number, fontSize: number) => {
        console.log({
            glyph,
            x,
            y,
            fontSize,
        });
    },
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

aGlyph.addUnicode(42);
const glyphBBox: opentype.BoundingBox = aGlyph.getBoundingBox();
const glyphPathBasic: opentype.Path = aGlyph.getPath();
const glyphPathFull: opentype.Path = aGlyph.getPath(x, y, fontSize, { xScale: 1, yScale: 2 }, font);
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
const pathCommands: PathCommand[] = aPath.commands;
const pathFill: string | null = aPath.fill;
const pathStroke: string | null = aPath.stroke;
const pathStrokeWidth: number = aPath.strokeWidth;

async function make() {
    const font = await load('fonts/Roboto-Black.ttf');
    const path = font.getPath('Hello, World!', 0, 150, 72);
    console.log(path);
}

const defaultGlyph = new Glyph({});
// @ts-expect-error
defaultGlyph.name = undefined;
let num: number = defaultGlyph.index + Math.min(...defaultGlyph.unicodes);
// @ts-expect-error
num =
    defaultGlyph.unicode ??
    defaultGlyph.xMin ??
    defaultGlyph.xMax ??
    defaultGlyph.yMin ??
    defaultGlyph.yMax ??
    defaultGlyph.advanceWidth ??
    defaultGlyph.leftSideBearing;
const path: Path = defaultGlyph.path;
// @ts-expect-error
Glyph.bindConstructorValues({});
