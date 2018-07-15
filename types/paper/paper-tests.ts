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
// These objects are to make sure older code which didn't have the IHitTestOptions available still work.
let hitOptionsEmpty = {};
let hitOptionsPartial = {tolerance: 0, extra: true};
let hitOptionsFull = {tolerance: 0, class: 'Path', match: (hit: paper.HitResult)=>{return true;}, fill: true, stroke: false, segments: true, curves: false, handles: true, ends: true, position: false, center: true, bounds: true, guides: false, selected: true};
// These objects are to make sure new code which uses the IHitTestOptions work.
let hitOptionsInterfaceEmpty:paper.IHitTestOptions = {};
let hitOptionsInterfacePartial:paper.IHitTestOptions = {match: (hit: paper.HitResult)=>{return true;}};
let hitOptionsInterfaceFull:paper.IHitTestOptions = {tolerance: 0, class: 'Path', match: (hit: paper.HitResult)=>{return true;}, fill: true, stroke: false, segments: true, curves: false, handles: true, ends: true, position: false, center: true, bounds: true, guides: false, selected: true};
let compoundPath: paper.CompoundPath = new paper.CompoundPath(dottedLinePath);
let hitTestPoint = dottedLinePath.segments[0].point;
let hitTestResult: paper.HitResult;
let hitTestResults: paper.HitResult[];
// These are Item hit tests
hitTestResult = compoundPath.hitTest(hitTestPoint);
hitTestResult = compoundPath.hitTest(hitTestPoint, hitOptionsEmpty);
hitTestResult = compoundPath.hitTest(hitTestPoint, hitOptionsPartial);
hitTestResult = compoundPath.hitTest(hitTestPoint, hitOptionsFull);
hitTestResult = compoundPath.hitTest(hitTestPoint, hitOptionsInterfaceEmpty);
hitTestResult = compoundPath.hitTest(hitTestPoint, hitOptionsInterfacePartial);
hitTestResult = compoundPath.hitTest(hitTestPoint, hitOptionsInterfaceFull);
hitTestResults = compoundPath.hitTestAll(hitTestPoint);
hitTestResults = compoundPath.hitTestAll(hitTestPoint, hitOptionsEmpty);
hitTestResults = compoundPath.hitTestAll(hitTestPoint, hitOptionsPartial);
hitTestResults = compoundPath.hitTestAll(hitTestPoint, hitOptionsFull);
hitTestResults = compoundPath.hitTestAll(hitTestPoint, hitOptionsInterfaceEmpty);
hitTestResults = compoundPath.hitTestAll(hitTestPoint, hitOptionsInterfacePartial);
hitTestResults = compoundPath.hitTestAll(hitTestPoint, hitOptionsInterfaceFull);
// These are project hit tests
hitTestResult = paper.project.hitTest(hitTestPoint);
hitTestResult = paper.project.hitTest(hitTestPoint, hitOptionsEmpty);
hitTestResult = paper.project.hitTest(hitTestPoint, hitOptionsPartial);
hitTestResult = paper.project.hitTest(hitTestPoint, hitOptionsFull);
hitTestResult = paper.project.hitTest(hitTestPoint, hitOptionsInterfaceEmpty);
hitTestResult = paper.project.hitTest(hitTestPoint, hitOptionsInterfacePartial);
hitTestResult = paper.project.hitTest(hitTestPoint, hitOptionsInterfaceFull);
hitTestResults = paper.project.hitTestAll(hitTestPoint);
hitTestResults = paper.project.hitTestAll(hitTestPoint, hitOptionsEmpty);
hitTestResults = paper.project.hitTestAll(hitTestPoint, hitOptionsPartial);
hitTestResults = paper.project.hitTestAll(hitTestPoint, hitOptionsFull);
hitTestResults = paper.project.hitTestAll(hitTestPoint, hitOptionsInterfaceEmpty);
hitTestResults = paper.project.hitTestAll(hitTestPoint, hitOptionsInterfacePartial);
hitTestResults = paper.project.hitTestAll(hitTestPoint, hitOptionsInterfaceFull);

function Examples() {
    function BooleanOperations(){
        let text = new paper.PointText({
            position: paper.view.center.add(new paper.Point([0, 200])),
            fillColor: 'black',
            justification: 'center',
            fontSize: 20
        });
        
        let originals = new paper.Group({ insert: false }); // Don't insert in DOM.
        
        let square = new paper.Path.Rectangle({
            position: paper.view.center,
            size: 300,
            parent: originals,
            fillColor: 'white'
        });
        
        // Make a ring using subtraction of two circles:
        let inner = new paper.Path.Circle({
            center: paper.view.center,
            radius: 100,
            parent: originals,
            fillColor: 'white'
        });
        
        let outer = new paper.Path.Circle({
            center: paper.view.center,
            radius: 140,
            parent: originals,
            fillColor: 'white'
        });
        
        let ring = outer.subtract(inner);
        
        let operations = ['unite', 'intersect', 'subtract', 'exclude', 'divide'];
        let colors = ['red', 'green', 'blue', 'black'];
        let curIndex = -1;
        let operation: string;
        let result: paper.PathItem | null;
        let activeItem: paper.PathItem | null;
        
        // Change the mode every 3 seconds:
        setInterval(setMode, 3000);
        
        // Set the initial mode:
        setMode();
        
        function setMode() {
            curIndex++;
            if (curIndex == operations.length * 2)
                curIndex = 0;
            operation = operations[curIndex % operations.length];
        }
        
        function onMouseDown(event: paper.ToolEvent) {
            let hitResult = originals.hitTest(event.point);
            activeItem = hitResult && hitResult.item as paper.PathItem;
        }
        
        function onMouseDrag(event: paper.ToolEvent) {
            if (activeItem)
                activeItem.position = event.point;
        }
        
        function onMouseUp() {
            activeItem = null;
            square.position = paper.view.center;
        }
        
        function onFrame(event: paper.IFrameEvent) {
            if (activeItem != ring) {
                // Move the ring around:
                let offset = new paper.Point(140, 80).multiply(new paper.Point([Math.sin(event.count / 60), Math.sin(event.count / 40)]));
                ring.position = paper.view.center.add(offset);
            }
        
            // Remove the result of the last path operation:
            if (result)
                result.remove();
        
            function performOperation(operation:string, primaryItem:paper.PathItem, secondaryItem:paper.PathItem){
                switch(operation){
                    case 'unite':
                        return primaryItem.unite(secondaryItem);
                    case 'intersect':
                        return primaryItem.intersect(secondaryItem);
                    case 'subtract':
                        return primaryItem.subtract(secondaryItem);
                    case 'exclude':
                        return primaryItem.exclude(secondaryItem);
                    case 'divide':
                        return primaryItem.divide(secondaryItem);
                    default:
                        return null;
                }
            }
            // Perform the path operation on the ring:
            if (curIndex < operations.length) {
                result = performOperation(operation, square, ring);
                text.content = 'square.' + operation + '(ring)';
            } else {
                result = performOperation(operation, square, ring);
                text.content = 'ring.' + operation + '(square)';
            }
            if(result){
                result.selected = true;
                result.fillColor = colors[curIndex % colors.length];
                result.moveBelow(text);
            }
        
            // If the result is a group, color each of its children differently:
            if (result instanceof paper.Group) {
                for (let i = 0; i < result.children.length; i++) {
                    result.children[i].fillColor = colors[i];
                }
            }
        };
        
        function onResize() {
            text.position = paper.view.center.add(new paper.Point([0, 200]));
            square.position = paper.view.center;
        }
    }
}
