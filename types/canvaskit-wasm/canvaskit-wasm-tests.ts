import CanvasKitInit from "canvaskit-wasm/bin/canvaskit";
import {
    CanvasKit,
    SkSurface,
    SkColor,
    SkClipOp,
    SkMatrix,
    SkFontManager,
    SkDecoration,
    SkParagraphStyle,
    SkImageInfo,
    SkRect,
    SkTypeface,
    SkCanvas,
    SkBlendMode,
    SkFilterQuality,
    SkStrokeCap,
    SkStrokeJoin,
    SkPoint,
    SkShader,
    SkImageFilter,
    SkColorFilter,
    SkFillType,
    SkPathCommand,
    SkPathEffect,
    SkPath,
    SkImage,
    SkAnimation,
    SkContext,
    SkRRect,
    SkAnimatedImage,
    SkMaskFilter,
    SkFontSlant,
    SkFontWeight,
    SkFontWidth,
    SkTextAlign,
    SkTextDirection,
    SkPointMode,
    SkAlphaType,
    SkColorType,
    SkBlurStyle,
    SkPaintStyle,
    SkTileMode,
    SkPathOp,
    SkTextStyle,
    SkParagraphBuilder,
    SkPictureRecorder,
    SkPicture,
    SkFont,
    SkShapedText,
} from "canvaskit-wasm";

CanvasKitInit().ready().then((canvasKit: CanvasKit) => {
    const canvasEl = document.querySelector('canvas') as HTMLCanvasElement;

    const color: SkColor = canvasKit.BLACK;
    canvasKit.Color(0, 0, 0, 0); // $ExpectType number

    const clipOp: SkClipOp = canvasKit.ClipOp.Difference;
    const blendMode: SkBlendMode = canvasKit.BlendMode.Src;
    const decoration: SkDecoration = canvasKit.OverlineDecoration;
    const fontSlant: SkFontSlant = canvasKit.FontSlant.Italic;
    const fontWeight: SkFontWeight = canvasKit.FontWeight.Black;
    const fontWidth: SkFontWidth = canvasKit.FontWidth.Condensed;
    const textAlign: SkTextAlign = canvasKit.TextAlign.Left;
    const textDirection: SkTextDirection = canvasKit.TextDirection.LTR;
    const pointMode: SkPointMode = canvasKit.PointMode.Lines;
    const alphaType: SkAlphaType = canvasKit.AlphaType.Opaque;
    const colorType: SkColorType = canvasKit.ColorType.RGB_888x;
    const filterQuality: SkFilterQuality = canvasKit.FilterQuality.High;
    const blurStyle: SkBlurStyle = canvasKit.BlurStyle.Inner;
    const strokeCap: SkStrokeCap = canvasKit.StrokeCap.Square;
    const strokeJoin: SkStrokeJoin = canvasKit.StrokeJoin.Round;
    const paintStyle: SkPaintStyle = canvasKit.PaintStyle.Fill;
    const tileMode: SkTileMode = canvasKit.TileMode.Repeat;
    const pathOp: SkPathOp = canvasKit.PathOp.Difference;
    const fillType: SkFillType = canvasKit.FillType.EvenOdd;

    const imageInfo: SkImageInfo = {
        width: 100,
        height: 100,
        alphaType,
        colorType,
    };

    const surface: SkSurface = canvasKit.MakeCanvasSurface(canvasEl);
    canvasKit.MakeSurface(100, 200); // $ExpectType SkSurface
    surface.captureFrameAsSkPicture((canvas2: SkCanvas) => console.log(canvas2)); // $ExpectType SkPicture
    surface.dispose();
    surface.flush();
    surface.width(); // $ExpectType number
    surface.height(); // $ExpectType number
    surface.makeImageSnapshot(); // $ExpectType SkImage
    surface.makeSurface(imageInfo); // $ExpectType SkSurface

    const canvas: SkCanvas = surface.getCanvas();

    const context: SkContext = canvasKit.currentContext();
    canvasKit.setCurrentContext(context);

    const rect: SkRect = canvasKit.XYWHRect(0, 0, 100, 100);
    console.log(rect.fLeft, rect.fTop, rect.fRight, rect.fBottom);
    canvasKit.LTRBRect(0, 0, 100, 100); // $ExpectType SkRect

    const rrect: SkRRect = canvasKit.RRectXY(rect, 10, 20);
    console.log(rrect.rx1, rrect.rx2, rrect.rx3, rrect.rx4, rrect.ry1, rrect.ry2, rrect.ry3, rrect.ry4);

    const matrix: SkMatrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    const arrayBuffer = new ArrayBuffer(100);
    const point: SkPoint = [0, 0];
    const points = [point, point];

    const animation: SkAnimation = canvasKit.MakeAnimation({});
    animation.render(canvas, rect);
    animation.seek(0);
    animation.seekFrame(0);
    animation.duration(); // $ExpectType number
    animation.fps(); // $ExpectType number
    animation.size(); // $ExpectType SkSize
    animation.version(); // $ExpectType string

    const path: SkPath = new canvasKit.SkPath();
    path.addArc(rect, 0, 100);
    path.addOval(rect, true, 0);
    path.addPath(path);
    path.addPath(path, true);
    path.addPath(path, 1, 0, 0, 0, 1, 0);
    path.addPath(path, 1, 0, 0, 0, 1, 0, false);
    path.addPath(path, 1, 0, 0, 0, 1, 0, 0, 0, 1);
    path.addPath(path, 1, 0, 0, 0, 1, 0, 0, 0, 1, true);
    path.addPoly(points, true);
    path.addRect(rect);
    path.addRect(rect, true);
    path.addRect(0, 0, 100, 100);
    path.addRect(0, 0, 100, 100, true);
    path.addRoundRect(rect, 10, 20, true);
    path.addRoundRect(0, 0, 100, 100, 10, 20, true);
    path.arc(0, 0, 10, 0, 100, true);
    path.arcTo(rect, 0, 0, false);
    path.close();
    path.conicTo(0, 0, 0, 0, 0);
    path.cubicTo(0, 0, 0, 0, 0, 0);
    path.dash(10, 20, 0);
    path.lineTo(0, 0);
    path.moveTo(0, 0);
    path.offset(0, 0);
    path.op(path, pathOp);
    path.quadTo(0, 0, 0, 0);
    path.rArcTo(0, 0, 0, true, false, 0, 0);
    path.rConicTo(0, 0, 0, 0, 0);
    path.rCubicTo(0, 0, 0, 0, 0, 0);
    path.rLineTo(0, 0);
    path.rMoveTo(0, 0);
    path.rQuadTo(0, 0, 0, 0);
    path.reset();
    path.rewind();
    path.setFillType(fillType);
    path.setIsVolatile(true);
    path.simplify();
    path.transform(matrix);
    path.transform(1, 0, 0, 0, 1, 0, 0, 0, 1);
    path.stroke({
        cap: strokeCap,
        join: strokeJoin,
        width: 10,
        miter_limit: 20,
        precision: 1,
    });
    path.stroke({});
    path.equals(path); // $ExpectType boolean
    path.getBounds(); // $ExpectType SkRect
    path.getFillType(); // $ExpectType SkEnumValue
    path.isEmpty(); // $ExpectType boolean
    path.isVolatile(); // $ExpectType boolean
    const cmds: SkPathCommand[] = path.toCmds();
    const svg: string = path.toSVGString();

    canvasKit.MakePathFromCmds(cmds); // $ExpectType SkPath
    canvasKit.MakePathFromSVGString(svg); // $ExpectType SkPath
    canvasKit.MakePathFromOp(path, path, pathOp); // $ExpectType SkPath

    const animatedImage: SkAnimatedImage = canvasKit.MakeAnimatedImageFromEncoded(arrayBuffer);
    animatedImage.decodeNextFrame(); // $ExpectType number
    animatedImage.getFrameCount(); // $ExpectType number
    animatedImage.getRepetitionCount(); // $ExpectType number
    animatedImage.height(); // $ExpectType number
    animatedImage.width(); // $ExpectType number

    const colorFilter: SkColorFilter = canvasKit.SkColorFilter.MakeBlend(color, blendMode);
    canvasKit.SkColorFilter.MakeCompose(colorFilter, colorFilter); // $ExpectType SkColorFilter
    canvasKit.SkColorFilter.MakeLerp(0.5, colorFilter, colorFilter); // $ExpectType SkColorFilter
    canvasKit.SkColorFilter.MakeLinearToSRGBGamma(); // $ExpectType SkColorFilter
    canvasKit.SkColorFilter.MakeSRGBToLinearGamma(); // $ExpectType SkColorFilter
    canvasKit.SkColorFilter.MakeMatrix(matrix); // $ExpectType SkColorFilter

    const imageFilter: SkImageFilter = canvasKit.SkImageFilter.MakeBlur(10, 10, tileMode, null);
    canvasKit.SkImageFilter.MakeBlur(10, 10, tileMode, imageFilter); // $ExpectType SkImageFilter
    canvasKit.SkImageFilter.MakeColorFilter(colorFilter, null); // $ExpectType SkImageFilter
    canvasKit.SkImageFilter.MakeColorFilter(colorFilter, imageFilter); // $ExpectType SkImageFilter
    canvasKit.SkImageFilter.MakeCompose(imageFilter, imageFilter); // $ExpectType SkImageFilter
    canvasKit.SkImageFilter.MakeMatrixTransform(matrix, filterQuality, imageFilter); // $ExpectType SkImageFilter
    canvasKit.SkImageFilter.MakeMatrixTransform(matrix, filterQuality, null); // $ExpectType SkImageFilter

    const maskFilter: SkMaskFilter = canvasKit.SkMaskFilter.MakeBlur(blurStyle, 10, true);

    const shader: SkShader = canvasKit.MakeLinearGradientShader(point, point, [color, color], [0, 1], 0, null, 0);
    canvasKit.MakeLinearGradientShader(point, point, [color, color], [0, 1], 0, matrix, 0); // $ExpectType SkShader
    canvasKit.MakeRadialGradientShader(point, 10, [color, color], [0, 1], 0, null, 0); // $ExpectType SkShader
    canvasKit.MakeRadialGradientShader(point, 10, [color, color], [0, 1], 0, matrix, 0); // $ExpectType SkShader
    canvasKit.MakeTwoPointConicalGradientShader(point, 0, point, 100, [color, color], [0, 1], 0, null, 0); // $ExpectType SkShader
    canvasKit.MakeTwoPointConicalGradientShader(point, 0, point, 100, [color, color], [0, 1], 0, matrix, 0); // $ExpectType SkShader

    const pathEffect: SkPathEffect = canvasKit.MakeSkCornerPathEffect(1);
    canvasKit.MakeSkDashPathEffect([10, 20], 0); // $ExpectType SkPathEffect
    canvasKit.MakeSkDiscretePathEffect(10, 20, 30); // $ExpectType SkPathEffect

    const paint = new canvasKit.SkPaint();
    paint.getBlendMode(); // $ExpectType SkEnumValue
    paint.getColor(); // $ExpectType number
    paint.getFilterQuality(); // $ExpectType SkEnumValue
    paint.getStrokeCap(); // $ExpectType SkEnumValue
    paint.getStrokeJoin(); // $ExpectType SkEnumValue
    paint.getStrokeMiter(); // $ExpectType number
    paint.getStrokeWidth(); // $ExpectType number
    paint.setAntiAlias(true);
    paint.setBlendMode(blendMode);
    paint.setColor(color);
    paint.setColorFilter(colorFilter);
    paint.setColorf(0, 0, 0, 0);
    paint.setFilterQuality(filterQuality);
    paint.setImageFilter(imageFilter);
    paint.setMaskFilter(maskFilter);
    paint.setShader(shader);
    paint.setStrokeCap(strokeCap);
    paint.setStrokeJoin(strokeJoin);
    paint.setStrokeMiter(10);
    paint.setStrokeWidth(10);
    paint.setStyle(paintStyle);
    paint.setPathEffect(pathEffect);

    const image: SkImage = canvasKit.MakeImageFromEncoded(arrayBuffer);
    image.encodeToData(); // $ExpectType SkData
    image.height(); // $ExpectType number
    image.width(); // $ExpectType number
    image.readPixels(imageInfo, 0, 0); // $ExpectType Uint8Array | Float32Array | null

    const fontManager: SkFontManager = canvasKit.SkFontMgr.RefDefault();
    canvasKit.SkFontMgr.FromData(arrayBuffer); // $ExpectType SkFontManager
    canvasKit.SkFontMgr.FromData([arrayBuffer, arrayBuffer]); // $ExpectType SkFontManager

    const textStyle: SkTextStyle = new canvasKit.TextStyle({
        fontFamilies: ['Noto Serif'],
        decoration,
        fontStyle: {
            slant: fontSlant,
            weight: fontWeight,
            width: fontWidth,
        },
        color,
        fontSize: 16,
        backgroundColor: color,
        decorationThickness: 1,
        foregroundColor: color,
    });

    const paragraphStyle: SkParagraphStyle = new canvasKit.ParagraphStyle({
        textStyle,
        disableHinting: true,
        ellipsis: '...',
        maxLines: 10,
        textAlign,
        textDirection,
    });
    new canvasKit.ParagraphStyle({
        textStyle: {
            fontFamilies: ['Noto Serif'],
        }
    });

    const paragraphBuilder: SkParagraphBuilder = canvasKit.ParagraphBuilder.Make(paragraphStyle, fontManager);
    paragraphBuilder.pushStyle(textStyle);
    paragraphBuilder.addText('123');
    paragraphBuilder.pop();

    const paragraph = paragraphBuilder.build();
    paragraph.getHeight(); // $ExpectType number
    paragraph.getGlyphPositionAtCoordinate(0, 0); // $ExpectType SkGlyphPosition
    paragraph.getWordBoundary(0); // $ExpectType SkWordBoundary
    paragraph.layout(100);

    const pictureRecorder: SkPictureRecorder = new canvasKit.SkPictureRecorder();
    pictureRecorder.beginRecording(rect); // $ExpectType SkCanvas
    const picture: SkPicture = pictureRecorder.finishRecordingAsPicture();

    const typeface: SkTypeface = fontManager.MakeTypefaceFromData(arrayBuffer);
    const font: SkFont = new canvasKit.SkFont(typeface, 16);
    font.getScaleX(); // $ExpectType number
    font.getSize(); // $ExpectType number
    font.getSkewX(); // $ExpectType number
    font.getTypeface(); // $ExpectType SkTypeface
    font.getWidths('123'); // $ExpectType number[]
    font.measureText('123'); // $ExpectType number
    font.setScaleX(1);
    font.setSize(16);
    font.setSkewX(1);
    font.setTypeface(typeface);

    const shapedText: SkShapedText = new canvasKit.ShapedText({
        width: 200,
        text: '123',
        leftToRight: true,
        font,
    });
    shapedText.getBounds(); // $ExpectType SkRect

    const textBlob = canvasKit.SkTextBlob.MakeFromText('123', font);

    canvas.clear(color);
    canvas.clipPath(path, clipOp, true);
    canvas.clipRRect(rrect, clipOp, false);
    canvas.clipRect(rect, clipOp, true);
    canvas.concat(matrix);
    canvas.drawAnimatedImage(animatedImage, 0, 0);
    canvas.drawArc(rect, 0, 100, true, paint);
    canvas.drawCircle(0, 0, 100, paint);
    canvas.drawColor(color, blendMode);
    canvas.drawDRRect(rrect, rrect, paint);
    canvas.drawImage(image, 0, 0, paint);
    canvas.drawImageNine(image, rect, rect, paint);
    canvas.drawImageRect(image, rect, rect, paint, true);
    canvas.drawLine(0, 0, 100, 100, paint);
    canvas.drawOval(rect, paint);
    canvas.drawPaint(paint);
    canvas.drawParagraph(paragraph, 0, 0);
    canvas.drawPath(path, paint);
    canvas.drawPicture(picture);
    canvas.drawPoints(pointMode, points, paint);
    canvas.drawRRect(rrect, paint);
    canvas.drawRect(rect, paint);
    canvas.drawRoundRect(rect, 10, 20, paint);
    canvas.drawText('123', 0, 0, paint, font);
    canvas.drawText(shapedText, 0, 0, paint, font);
    canvas.drawTextBlob(textBlob, 0, 0, paint);
    canvas.flush();
    canvas.restore();
    canvas.restoreToCount(10);
    canvas.rotate(10, 0, 0);
    canvas.save();
    canvas.scale(1, 1);
    canvas.skew(1, 1);
    canvas.translate(1, 1);

    canvas.getSaveCount(); // $ExpectType number
    canvas.getTotalMatrix();
    canvas.makeSurface(imageInfo); // $ExpectType SkSurface
    canvas.saveLayer(rect, paint); // $ExpectType number

    const pixels: Uint8Array = canvas.readPixels(0, 0, 100, 100, alphaType, colorType, 4);
    canvas.writePixels(pixels, 100, 100, 0, 0, alphaType, colorType);
});
