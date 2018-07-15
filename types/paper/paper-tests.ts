import paper = require('paper');

let canvas = document.createElement('canvas')

paper.setup(canvas);

// Circle
let path = new paper.Path.Circle({
	center: [80, 50],
	radius: 35,
	fillColor: 'red'
});

// Dotted Line Tool
let dottedLinePath: paper.Path = new paper.Path;
let dottedLineTool = new paper.Tool();

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
let hitOptionsEmpty = {};
let hitOptionsPartial = {tolerance: 0, extra: true};
let hitOptionsFull = {tolerance: 0, class: 'Path', match: (hit: paper.HitResult)=>{return true;}, fill: true, stroke: false, segments: true, curves: false, handles: true, ends: true, position: false, center: true, bounds: true, guides: false, selected: true};
let hitOptionsInterfaceEmpty:paper.IHitTestOptions = {};
let hitOptionsInterfacePartial:paper.IHitTestOptions = {match: (hit: paper.HitResult)=>{return true;}};
let hitOptionsInterfaceFull:paper.IHitTestOptions = {tolerance: 0, class: 'Path', match: (hit: paper.HitResult)=>{return true;}, fill: true, stroke: false, segments: true, curves: false, handles: true, ends: true, position: false, center: true, bounds: true, guides: false, selected: true};
let compoundPath: paper.CompoundPath = new paper.CompoundPath(dottedLinePath);
let hitTestPoint = dottedLinePath.segments[0].point;
compoundPath.hitTest(hitTestPoint);
compoundPath.hitTest(hitTestPoint, hitOptionsEmpty);
compoundPath.hitTest(hitTestPoint, hitOptionsPartial);
compoundPath.hitTest(hitTestPoint, hitOptionsFull);
compoundPath.hitTest(hitTestPoint, hitOptionsInterfaceEmpty);
compoundPath.hitTest(hitTestPoint, hitOptionsInterfacePartial);
compoundPath.hitTest(hitTestPoint, hitOptionsInterfaceFull);
compoundPath.hitTestAll(hitTestPoint);
compoundPath.hitTestAll(hitTestPoint, hitOptionsEmpty);
compoundPath.hitTestAll(hitTestPoint, hitOptionsPartial);
compoundPath.hitTestAll(hitTestPoint, hitOptionsFull);
compoundPath.hitTestAll(hitTestPoint, hitOptionsInterfaceEmpty);
compoundPath.hitTestAll(hitTestPoint, hitOptionsInterfacePartial);
compoundPath.hitTestAll(hitTestPoint, hitOptionsInterfaceFull);
paper.project.hitTest(hitTestPoint);
paper.project.hitTest(hitTestPoint, hitOptionsEmpty);
paper.project.hitTest(hitTestPoint, hitOptionsPartial);
paper.project.hitTest(hitTestPoint, hitOptionsFull);
paper.project.hitTest(hitTestPoint, hitOptionsInterfaceEmpty);
paper.project.hitTest(hitTestPoint, hitOptionsInterfacePartial);
paper.project.hitTest(hitTestPoint, hitOptionsInterfaceFull);
paper.project.hitTestAll(hitTestPoint);
paper.project.hitTestAll(hitTestPoint, hitOptionsEmpty);
paper.project.hitTestAll(hitTestPoint, hitOptionsPartial);
paper.project.hitTestAll(hitTestPoint, hitOptionsFull);
paper.project.hitTestAll(hitTestPoint, hitOptionsInterfaceEmpty);
paper.project.hitTestAll(hitTestPoint, hitOptionsInterfacePartial);
paper.project.hitTestAll(hitTestPoint, hitOptionsInterfaceFull);


