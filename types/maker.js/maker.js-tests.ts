

function test() {

	var makerjs: typeof MakerJs;

	var p1: MakerJs.IPoint = [0, 0];
	var p2: MakerJs.IPoint = [1, 1];
	var paths = testPaths();
	var models = testModels();
	var model: MakerJs.IModel = models[0];
	var seed: MakerJs.IPathBezierSeed = { type: makerjs.pathType.BezierSeed, origin: [0,0], end: [1,1], controls: []};
	var chain: MakerJs.IChain = {
		endless: false,
		links: [
			{
				endPoints: [],
				reversed: false,
				pathLength: 0,
				walkedPath: {
					layer: '',
					modelContext: model,
					offset: p1,
					pathContext: paths.line,
					pathId: 'x',
					route: [],
					routeKey: ''
				}
			}
		],
		pathLength: 0		
	};

	function testRoot() {
		makerjs.version;
		makerjs.environment;
		makerjs.environmentTypes.BrowserUI;
		makerjs.cloneObject({});
		makerjs.createRouteKey([]);
		makerjs.extendObject({abc:123}, {xyz:789});
		makerjs.isChain({});
		makerjs.isFunction(function(){});
		makerjs.isNumber(0);
		makerjs.isObject({});
		makerjs.isModel({});
		makerjs.isPath({});
		makerjs.isPathArc(paths.arc);
		makerjs.isPathArcInBezierCurve({});
		makerjs.isPathCircle(paths.circle);
		makerjs.isPathLine(paths.line);
		makerjs.isPoint([]);
		makerjs.pathType.Circle;
		makerjs.round(44.44444, .01);
		makerjs.travel(model, '');
		makerjs.unitType.Millimeter;
		new makerjs.Collector();
	}

	function testAngle() {
		makerjs.angle.mirror(45, true, false);
		makerjs.angle.noRevolutions(90);
		makerjs.angle.ofArcEnd(paths.arc);
		makerjs.angle.ofArcMiddle(paths.arc);
		makerjs.angle.ofArcSpan(paths.arc);
		makerjs.angle.ofLineInDegrees(paths.line);
		makerjs.angle.ofPointInDegrees([0,0], [1,1]);
		makerjs.angle.ofPointInRadians([0,0], [1,1]);
		makerjs.angle.toDegrees(Math.PI);
		makerjs.angle.toRadians(90);
	}

	function testExporter() {
		new makerjs.exporter.Exporter({});
		makerjs.exporter.toDXF(model);
		makerjs.exporter.toOpenJsCad(model);
		makerjs.exporter.toPDF({} as PDFKit.PDFDocument, model);
		makerjs.exporter.toSTL(model);
		makerjs.exporter.toSVG(model,
            {
                annotate: true,
                fontSize: '',
                origin: [],
                scale: 9.9,
                stroke: '',
                strokeWidth: '',
                svgAttrs: {},
                units: '',
                useSvgPathOnly: false,
                viewBox: false
             });
		makerjs.exporter.toSVGPathData(model);
		makerjs.exporter.tryGetModelUnits(model);
	}

	function testImporter() {
		makerjs.importer.fromSVGPathData('');
		makerjs.importer.parseNumericList('');
	}

	function testKit() {
		makerjs.kit.construct(null, null);
		makerjs.kit.getParameterValues(null);
		({} as MakerJs.IMetaParameter).max;
		({} as MakerJs.IKit).metaParameters;
		({} as MakerJs.IKit).notes;
	}

	function testMeasure() {
		makerjs.measure.boundingHexagon(model).radius;
		makerjs.measure.increase(mp, mm);
		makerjs.measure.isPointEqual(p1, p2);
		makerjs.measure.isPathEqual(paths.line, paths.circle, 4);
		makerjs.measure.isAngleEqual(12, 13);
		makerjs.measure.isArcConcaveTowardsPoint(paths.arc, [0,0]);
		makerjs.measure.isArcOverlapping(paths.arc, paths.arc, true);
		makerjs.measure.isBetween(7, 8, 9, false);
		makerjs.measure.isBetweenArcAngles(7, paths.arc, false);
		makerjs.measure.isBetweenPoints([1,1], paths.line, true);
		makerjs.measure.isBezierSeedLinear(seed);
		makerjs.measure.isLineOverlapping(paths.line, paths.line, false);
		makerjs.measure.isMeasurementOverlapping(mm, mp);
		var mm = makerjs.measure.modelExtents(model);
		var mp = makerjs.measure.pathExtents(paths.circle);
		makerjs.measure.pathLength(paths.line);
		makerjs.measure.pointDistance([0,0], [9,9]);
		new makerjs.measure.Atlas(model);
		mm.low[0];
		mm.center;
		mp.high[1];
		var s = makerjs.measure.lineSlope(paths.line);
		makerjs.measure.isPointOnSlope([], s);
		makerjs.measure.isSlopeEqual(s, s);
	}

	function testModel(){
		makerjs.model.breakPathsAtIntersections(model, { paths:{ } });
		makerjs.model.center(model);
		var opts: MakerJs.ICombineOptions = { trimDeadEnds: true, pointMatchingDistance: 2 };
		makerjs.model.combine(model, model, true, false, true, false, opts);
		makerjs.model.combineIntersection(model, model);
		makerjs.model.combineSubtraction(model, model);
		makerjs.model.combineUnion(model, model);
		makerjs.model.convertUnits(model, makerjs.unitType.Centimeter);
		makerjs.model.countChildModels(model);
		makerjs.model.detachLoop(model);
		makerjs.model.expandPaths(model, 7);
		makerjs.model.findChains(model, function (chains: MakerJs.IChain[], loose: MakerJs.IWalkPath[], layer: string) {})
		makerjs.model.findLoops(model);
		makerjs.model.findSingleChain(model);
		makerjs.model.getSimilarModelId(model, 'foo');
		makerjs.model.getSimilarPathId(model, 'foo');
		makerjs.model.isPathInsideModel(paths.line, model);
		makerjs.model.mirror(model, false, true);
		makerjs.model.move(makerjs.model.originate(model, [9,9]), [0,0]);
		makerjs.model.moveRelative(model, [1,1]);
		makerjs.model.originate(model);
		makerjs.model.outline(model, 5);
		makerjs.model.prefixPathIds(model, 'a');
		makerjs.model.removeDeadEnds(model);
		makerjs.model.rotate(makerjs.model.scale(model, 6), 45, [0,0]);
		makerjs.model.scale(model, 7);
		makerjs.model.simplify(model);
		makerjs.model.walk(model, {});
		makerjs.model.walkPaths(model, (modelContext: MakerJs.IModel, pathId: string, pathContext: MakerJs.IPath) => {});
		makerjs.model.zero(model);
        model.exporterOptions = { foo: 'bar' };
	}

	function testModels(): MakerJs.IModel[] {
		makerjs.models.BezierCurve.computeLength(seed);
		makerjs.models.BezierCurve.computePoint(seed, 0);
		makerjs.models.BezierCurve.getBezierSeeds(new makerjs.models.BezierCurve([]));
		return [
			new makerjs.models.BezierCurve([]),
			new makerjs.models.BoltCircle(7, 7, 7, 7),
			new makerjs.models.BoltRectangle(2, 2, 2),
			new makerjs.models.ConnectTheDots(true, [ [0,0], [1,1] ]),
			new makerjs.models.ConnectTheDots([0, 0, 1, 1]),
			new makerjs.models.ConnectTheDots(true, [0, 0, 1, 1]),
			new makerjs.models.ConnectTheDots(true, '0, 0, 1, 1'),
			new makerjs.models.ConnectTheDots('0, 0, 1, 1'),
			new makerjs.models.Dogbone(1,1,1),
			new makerjs.models.Dome(5, 7),
			new makerjs.models.Ellipse(2,2),
			new makerjs.models.EllipticArc(2,2,3,4),
			new makerjs.models.Holes(1,[]),
			new makerjs.models.Oval(7, 7),
			new makerjs.models.OvalArc(6, 4, 2, 12, true),
			new makerjs.models.Polygon(7, 5),
			new makerjs.models.Rectangle(8, 9),
			new makerjs.models.Ring(7, 7),
			new makerjs.models.RoundRectangle(2, 2, 0),
			new makerjs.models.SCurve(5, .9),
			new makerjs.models.Slot([0, 0], [1, 1], 7),
			new makerjs.models.Square(8),
			new makerjs.models.Star(5, 10, 5),
			new makerjs.models.Text({} as opentype.Font, 'z', 12)
		];
	}

	function testPath() {
		makerjs.path.breakAtPoint(paths.arc, [0,0]).type;
		makerjs.path.center(paths.line);
		makerjs.path.clone(paths.line);
		makerjs.path.converge(paths.line, paths.line);
		makerjs.path.distort(paths.arc, 5, 6);
		makerjs.path.dogbone(paths.line, paths.line, 7);
		makerjs.path.expand(paths.line, 5);
		makerjs.path.fillet(paths.arc, paths.line, 4);
		makerjs.path.intersection(paths.circle, paths.arc, { excludeTangents: true }).intersectionPoints;
		makerjs.path.mirror(paths.arc, true, true);
		makerjs.path.move(paths.line, [1,1]);
		makerjs.path.moveRelative(paths.circle, [0,0]);
		makerjs.path.moveTemporary([], [], function(){});
		makerjs.path.rotate(paths.line, 5, [0,0]);
		makerjs.path.scale(paths.arc, 8);
		makerjs.path.straighten(paths.arc);
		makerjs.path.toKeyPoints(paths.arc, 1);
		makerjs.path.toPoints(paths.circle, 1);
	}

	function testPaths() {
		var paths =  {
			arc: new makerjs.paths.Arc([0,0], 7, 0, 180),
			circle: new MakerJs.paths.Circle([0,0], 5),
			line: new makerjs.paths.Line([0,0], [1,1])
		};

		new makerjs.paths.Chord(paths.arc);
		new makerjs.paths.Parallel(paths.line, 4, [1,1]);

		//paths.line.layer = "0";

		var x: MakerJs.IPathLine = {
			type: "line",
			origin: [9,9],
			end: [8,8],
			layer: "4"
		};

		return paths;
	}

	function testPoint() {
		makerjs.point.add(p1, p2);
		makerjs.point.average(p1, p2);
		makerjs.point.clone(p1);
		makerjs.point.closest([0,0], [p1, p2]);
		makerjs.point.distort([1,1], 2, 3);
		makerjs.point.fromAngleOnCircle(22, paths.circle);
		makerjs.point.fromArc(paths.arc);
		makerjs.point.fromPathEnds(paths.line);
		makerjs.point.fromPolar(Math.PI, 7);
		makerjs.point.fromSlopeIntersection(new makerjs.paths.Line([]), new makerjs.paths.Line([]));
		makerjs.point.middle(paths.line);
		makerjs.point.mirror(p1, true, false);
		makerjs.point.rotate(p1, 5, p2);
		makerjs.point.rounded(p1);
		makerjs.point.scale(p2, 8);
		makerjs.point.subtract(p2, p1);
		makerjs.point.zero();
	}

	function testChain() {
		makerjs.chain.cycle(chain, 7);
		makerjs.chain.fillet(chain, 1);
		makerjs.chain.reverse(chain);
		makerjs.chain.startAt(chain, '');
		makerjs.chain.toKeyPoints(chain);
		makerjs.chain.toPoints(chain, 1);
	}

	function testSolvers() {
		makerjs.solvers.solveTriangleASA(4, 4, 4);
		makerjs.solvers.solveTriangleSSS(9, 9, 9);
	}

	function testUnits() {
		makerjs.units.conversionScale(makerjs.unitType.Centimeter, makerjs.unitType.Foot);
	}

}