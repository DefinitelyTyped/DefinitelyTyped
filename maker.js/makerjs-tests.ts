/// <reference path="./makerjs.d.ts" />

function test() {
	
	var makerjs: typeof MakerJs;

	var p1: MakerJs.IPoint = [0, 0];
	var p2: MakerJs.IPoint = [1, 1];
	var paths = testPaths();
	var models = testModels();
	var model: MakerJs.IModel = models[0];
	
	function testRoot() {
		makerjs.extendObject({abc:123}, {xyz:789});
		makerjs.isModel({});
		makerjs.isPath({});
		makerjs.isPoint([]);
		makerjs.pathType.Circle;
		makerjs.round(44.44444, .01);
		makerjs.unitType.Millimeter;
	}
	
	function testAngle() {
		makerjs.angle.mirror(45, true, false);
		makerjs.angle.noRevolutions(90);
		makerjs.angle.ofArcEnd(paths.arc);
		makerjs.angle.ofPointInRadians([0,0], [1,1]);
		makerjs.angle.toDegrees(Math.PI);
		makerjs.angle.toRadians(90);
	}

	function testExporter() {
		new makerjs.exporter.Exporter({});
		makerjs.exporter.toDXF(model);
		makerjs.exporter.toSVG(model);
		makerjs.exporter.tryGetModelUnits(model);
	}
	
	function testKit() {
		makerjs.kit.construct(null, null);
		makerjs.kit.getParameterValues(null);
		(<MakerJs.kit.IMetaParameter>{}).max;
		(<MakerJs.kit.IKit>{}).metaParameters;
	}
	
	function testMeasure() {
		makerjs.measure.arcAngle(paths.arc);
		makerjs.measure.modelExtents(model).high[0];
		makerjs.measure.pathExtents(paths.circle).low[0];
		makerjs.measure.pathLength(paths.line);
		makerjs.measure.pointDistance([0,0], [9,9]);
	}
	
	function testModel(){
		makerjs.model.convertUnits(model, makerjs.unitType.Centimeter);
		makerjs.model.mirror(model, false, true);
		makerjs.model.move(makerjs.model.originate(model, [9,9]), [0,0]);
		makerjs.model.originate(model);
		makerjs.model.rotate(makerjs.model.scale(model, 6), 45, [0,0]);
	}

	function testModels(): MakerJs.IModel[] {
		return [
			new makerjs.models.BoltCircle(7, 7, 7, 7),
			new makerjs.models.BoltRectangle(2, 2, 2),
			new makerjs.models.ConnectTheDots(true, [ [0,0], [1,1] ]),
			new makerjs.models.Oval(7, 7),
			new makerjs.models.OvalArc(6, 4, 2, 12),
			new makerjs.models.Polygon(7, 5),
			new makerjs.models.Rectangle(8, 9),
			new makerjs.models.Ring(7, 7),
			new makerjs.models.RoundRectangle(2, 2, 0),
			new makerjs.models.SCurve(5, .9),
			new makerjs.models.Square(8)
		];
	}
	
	function testPath() {
		makerjs.path.breakAtPoint(paths.arc, [0,0]).type;	
		makerjs.path.intersection(paths.circle, paths.arc).intersectionPoints;
		makerjs.path.mirror(paths.arc, true, true);
		makerjs.path.moveRelative(paths.circle, [0,0]);
		makerjs.path.rotate(paths.line, 5, [0,0]);
		makerjs.path.scale(paths.arc, 8);
	}
	
	function testPaths() {
		return {	
			arc: new makerjs.paths.Arc([0,0], 7, 0, 180),
			circle: new MakerJs.paths.Circle([0,0], 5),
			line: new makerjs.paths.Line([0,0], [1,1])
		};
	}
	
	function testPoint() {	
		makerjs.point.add(p1, p2);
		makerjs.point.areEqual(p1, p2);
		makerjs.point.clone(p1);
		makerjs.point.fromArc(paths.arc);
		makerjs.point.fromPolar(Math.PI, 7);
		makerjs.point.mirror(p1, true, false);
		makerjs.point.rotate(p1, 5, p2);
		makerjs.point.scale(p2, 8);
		makerjs.point.subtract(p2, p1);
		makerjs.point.zero();
	}
	
	function testSolvers() {	
		makerjs.solvers.solveTriangleASA(4, 4, 4);
		makerjs.solvers.solveTriangleSSS(9, 9, 9);
	}
	
	function testUnits() {	
		makerjs.units.conversionScale(makerjs.unitType.Centimeter, makerjs.unitType.Foot);
	}
		
}