function TestPathKitAPI(PathKit: typeof PathKitAPI) {
    const canvasElem = document.getElementById('canvas1') as HTMLCanvasElement;
    const ctx = canvasElem.getContext('2d') as CanvasRenderingContext2D;

    /*=======================================================================*
     *=======================================================================*/

    // Test all verb constants are numbers.
    // $ExpectType number[][]
    const cmds = [
        [PathKit.MOVE_VERB, 0, 10],
        [PathKit.LINE_VERB, 30, 40],
        [PathKit.QUAD_VERB, 20, 50, 45, 60],
        [PathKit.CONIC_VERB, 80, 80, 60, 60, 1],
        [PathKit.CUBIC_VERB, 10, 20, 30, 40, 50, 60],
        [PathKit.CLOSE_VERB],
    ];

    // $ExpectType SkPath | null
    const path1 = PathKit.FromSVGString('M150 0 L75 200 L225 200 Z');

    // $ExpectType SkPath | null
    const path2 = PathKit.FromCmds(cmds);

    // $ExpectType SkPath
    const path3 = PathKit.NewPath();

    // $ExpectType SkPath
    const path4 = PathKit.NewPath(path3);

    // $ExpectType SkPath
    const path5 = PathKit.MakeFromOp(path3, path4, PathKit.PathOp.UNION);

    // $ExpectType number
    PathKit.cubicYFromX(1, 2, 3, 4, 5);

    // $ExpectType number[]
    PathKit.cubicPtFromT(1, 2, 3, 4, 5);

    // $ExpectType SkRect
    PathKit.LTRBRect(0, 0, 100, 100);

    /*=========================================================================
    =========================================================================*/

    // $ExpectType SkOpBuilder
    const opBuilder = new PathKit.SkOpBuilder();

    // $ExpectType void
    opBuilder.add(path3, PathKit.PathOp.UNION);

    // $ExpectType SkPath
    const path6 = opBuilder.make();

    // $ExpectType SkPath
    const path7 = opBuilder.resolve();

    // $ExpectType void
    opBuilder.delete();

    /*=======================================================================*
     *=======================================================================*/

    // $ExpectType SkPath
    const path8 = new PathKit.SkPath();

    // $ExpectType SkPath
    const path9 = path8.copy();

    // Test all chainable operations return an SkPath.
    // $ExpectType SkPath
    path9.addPath(path3)
         .addPath(path4, new SVGMatrix())
         .addPath(path5, 1, 0, 0, 1, 300, 0)
         .addPath(path8, 1, 0, 0, 0, 1, 300, 0, 0 , 1)
         .arc(20, 120, 18, 0, 1.75 * Math.PI)
         .arc(20, 120, 18, 0, 1.75 * Math.PI, false)
         .arcTo(10, 10, 40, 40, 100)
         .conicTo(80, 80, 60, 60, 1)
         .cubicTo(10, 20, 30, 40, 50, 60)
         .bezierCurveTo(70, 80, 90, 100, 110, 120)
         .dash(4, 5, 0)
         .ellipse(0, 0, 20, 120, 0, 0, 1.75 * Math.PI)
         .ellipse(0, 0, 20, 120, 0, 0, 1.75 * Math.PI, true)
         .moveTo(50, 50)
         .lineTo(100, 100)
         .op(path5, PathKit.PathOp.INTERSECT)
         .quadTo(100, 100, 200, 200)
         .quadraticCurveTo(300, 300, 400, 400)
         .rect(0, 0, 50, 50)
         .simplify()
         .stroke({width: 10, join: PathKit.StrokeJoin.ROUND})
         .transform([5, 0, 0, 0, 5, 0, 0, 0, 1])
         .transform(5, 0, 0, 0, 5, 0, 0, 0, 1)
         .trim(0.25, 1.0)
         .trim(0.25, 1.0, true)
         .close()
         .closePath();

    // $ExpectType boolean
    path3.equals(path4);

    // $ExpectType SkRect
    path9.getBounds();

    // $ExpectType FillType
    path9.getFillType();

    // $ExpectType string
    path9.getFillTypeString();

    // $ExpectType void
    path9.toCanvas(ctx);

    // $ExpectType Path2D
    path9.toPath2D();

    // $ExpectType string
    path9.toSVGString();

    // $ExpectType void
    path9.dump();

    // $ExpectType void | undefined
    path1?.delete();

    // $ExpectType void | undefined
    path2?.delete();

    // $ExpectType void
    path3.delete();

    // $ExpectType void
    path4.delete();

    // $ExpectType void
    path5.delete();

    // $ExpectType void
    path6.delete();

    // $ExpectType void
    path7.delete();

    // $ExpectType void
    path8.delete();

    // $ExpectType void
    path9.delete();
}

export default TestPathKitAPI;
