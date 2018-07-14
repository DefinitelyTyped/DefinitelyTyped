import paper = require('paper');

var canvas = document.createElement('canvas')

paper.setup(canvas);

// Circle
var path = new paper.Path.Circle({
	center: [80, 50],
	radius: 35,
	fillColor: 'red'
});

// Dotted Line Tool
var dottedLinePath: paper.Path = new paper.Path;
var dottedLineTool = new paper.Tool();

dottedLineTool.onMouseDown = function(event: any) {
    new paper.Layer().activate();
    dottedLinePath = new paper.Path();
    dottedLinePath.strokeColor = '#00';
    dottedLinePath.strokeWidth = 2;
    dottedLinePath.dashArray = [5, 8];
    dottedLinePath.strokeCap = 'round';
    dottedLinePath.strokeJoin = 'round';
    dottedLinePath.add(event.point);
};

dottedLineTool.onMouseDrag = function(event: any) {
    dottedLinePath.add(event.point);
};

dottedLineTool.onMouseUp = function(event: any) {
    dottedLinePath.smooth();
    dottedLinePath.simplify();
};

// Hit Test stuff
var hitOptionsEmpty = {};
var hitOptionsPartial = {tolerance: 0};
var hitOptionsFull = {tolerance: 0, class: 'Path', match: (hit: paper.HitResult)=>{return true;}, fill: true, stroke: false, segments: true, curves: false, handles: true, ends: true, position: false, center: true, bounds: true, guides: false, selected: true};
var hitOptionsInterfaceEmpty:paper.IHitTestOptions = {};
var hitOptionsInterfacePartial:paper.IHitTestOptions = {match: (hit: paper.HitResult)=>{return true;}};
var hitOptionsInterfaceFull:paper.IHitTestOptions = {tolerance: 0, class: 'Path', match: (hit: paper.HitResult)=>{return true;}, fill: true, stroke: false, segments: true, curves: false, handles: true, ends: true, position: false, center: true, bounds: true, guides: false, selected: true};
var compoundPath: paper.CompoundPath = new paper.CompoundPath(dottedLinePath);
compoundPath.hitTest(dottedLinePath.segments[0].point);
compoundPath.hitTest(dottedLinePath.segments[0].point, hitOptionsEmpty);
compoundPath.hitTest(dottedLinePath.segments[0].point, hitOptionsPartial);
compoundPath.hitTest(dottedLinePath.segments[0].point, hitOptionsFull);
compoundPath.hitTest(dottedLinePath.segments[0].point, hitOptionsInterfaceEmpty);
compoundPath.hitTest(dottedLinePath.segments[0].point, hitOptionsInterfacePartial);
compoundPath.hitTest(dottedLinePath.segments[0].point, hitOptionsInterfaceFull);
compoundPath.hitTestAll(dottedLinePath.segments[0].point);
compoundPath.hitTestAll(dottedLinePath.segments[0].point, hitOptionsEmpty);
compoundPath.hitTestAll(dottedLinePath.segments[0].point, hitOptionsPartial);
compoundPath.hitTestAll(dottedLinePath.segments[0].point, hitOptionsFull);
compoundPath.hitTestAll(dottedLinePath.segments[0].point, hitOptionsInterfaceEmpty);
compoundPath.hitTestAll(dottedLinePath.segments[0].point, hitOptionsInterfacePartial);
compoundPath.hitTestAll(dottedLinePath.segments[0].point, hitOptionsInterfaceFull);


