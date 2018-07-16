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

    function CandyCrash(){
        // kynd.info 2014
        class Ball{
            radius: number;
            point: paper.Point;
            vector: paper.Point;
            maxVec: number;
            numSegment: number;
            boundOffset: number[];
            boundOffsetBuff: number[];
            sidePoints: paper.Point[];
            path: paper.Path;

            constructor(r: number, p: paper.Point, v: paper.Point) {
                this.radius = r;
                this.point = p;
                this.vector = v;
                this.maxVec = 15;
                this.numSegment = Math.floor(r / 3 + 2);
                this.boundOffset = [];
                this.boundOffsetBuff = [];
                this.sidePoints = [];
                this.path = new paper.Path({
                    fillColor: {
                        hue: Math.random() * 360,
                        saturation: 1,
                        brightness: 1
                    },
                    blendMode: 'lighter'
                });

                for (let i = 0; i < this.numSegment; i ++) {
                    this.boundOffset.push(this.radius);
                    this.boundOffsetBuff.push(this.radius);
                    this.path.add(new paper.Point({}));
                    this.sidePoints.push(new paper.Point({
                        angle: 360 / this.numSegment * i,
                        length: 1
                    }));
                }
            }
            iterate() {
                this.checkBorders();
                if (this.vector.length > this.maxVec)
                    this.vector.length = this.maxVec;
                this.point = this.point.add(this.vector);
                this.updateShape();
            }
            checkBorders() {
                let size = paper.view.size;
                if (this.point.x < -this.radius)
                    this.point.x = size.width + this.radius;
                if (this.point.x > size.width + this.radius)
                    this.point.x = -this.radius;
                if (this.point.y < -this.radius)
                    this.point.y = size.height + this.radius;
                if (this.point.y > size.height + this.radius)
                    this.point.y = -this.radius;
            }
            updateShape() {
                let segments = this.path.segments;
                for (let i = 0; i < this.numSegment; i ++)
                    segments[i].point = this.getSidePoint(i);

                this.path.smooth();
                for (let i = 0; i < this.numSegment; i ++) {
                    if (this.boundOffset[i] < this.radius / 4)
                        this.boundOffset[i] = this.radius / 4;
                    let next = (i + 1) % this.numSegment;
                    let prev = (i > 0) ? i - 1 : this.numSegment - 1;
                    let offset = this.boundOffset[i];
                    offset += (this.radius - offset) / 15;
                    offset += ((this.boundOffset[next] + this.boundOffset[prev]) / 2 - offset) / 3;
                    this.boundOffsetBuff[i] = this.boundOffset[i] = offset;
                }
            }
            react(b:Ball) {
                let dist = this.point.getDistance(b.point);
                if (dist < this.radius + b.radius && dist != 0) {
                    let overlap = this.radius + b.radius - dist;
                    let direc = (this.point.subtract(b.point)).normalize(overlap * 0.015);
                    this.vector = this.vector.add(direc);
                    b.vector = b.vector.subtract(direc);

                    this.calcBounds(b);
                    b.calcBounds(this);
                    this.updateBounds();
                    b.updateBounds();
                }
            }
            getBoundOffset(p:paper.Point) {
                let diff = this.point.subtract(p);
                let angle = (diff.angle + 180) % 360;
                return this.boundOffset[Math.floor(angle / 360 * this.boundOffset.length)];
            }
            calcBounds(b:Ball) {
                for (let i = 0; i < this.numSegment; i ++) {
                    let tp = this.getSidePoint(i);
                    let bLen = b.getBoundOffset(tp);
                    let td = tp.getDistance(b.point);
                    if (td < bLen) {
                        this.boundOffsetBuff[i] -= (bLen  - td) / 2;
                    }
                }
            }
            getSidePoint(index: number) {
                return this.point.add(this.sidePoints[index].multiply(this.boundOffset[index]));
            }
            updateBounds() {
                for (let i = 0; i < this.numSegment; i ++)
                    this.boundOffset[i] = this.boundOffsetBuff[i];
            }
        }
        //--------------------- main ---------------------
        let balls: Ball[] = [];
        let numBalls = 18;
        for (let i = 0; i < numBalls; i++) {
            let position = paper.Point.random().multiply(new paper.Point(paper.view.size.width, paper.view.size.height));
            let vector = new paper.Point({
                angle: 360 * Math.random(),
                length: Math.random() * 10
            });
            let radius = Math.random() * 60 + 60;
            balls.push(new Ball(radius, position, vector));
        }

        function onFrame() {
            for (let i = 0; i < balls.length - 1; i++) {
                for (let j = i + 1; j < balls.length; j++) {
                    balls[i].react(balls[j]);
                }
            }
            for (let i = 0, l = balls.length; i < l; i++) {
                balls[i].iterate();
            }
        }    
    }
    function SatieLikedToDraw(){
        
        let leftPath = new paper.Path({
            strokeColor: 'red',
            opacity: 0.5
        });
        
        let rightPath = new paper.Path({
            strokeColor: 'green',
            opacity: 0.5
        });
        
        let amount = 8;
        let step = paper.view.size.width / (amount + 1);
        let flip = true;
        
        for (let i = 0; i <= amount; i++) {
            leftPath.add(new paper.Point(i * step, 0));
            rightPath.add(new paper.Point(i * step, 0));
        }
        
        let group = new paper.Group({
            children: [leftPath, rightPath],
            transformContent: false,
            strokeWidth: 30,
            strokeJoin: 'round',
            strokeCap: 'butt',
            pivot: leftPath.position,
            position: paper.view.center
        });
        
        function onMouseDown() {
            flip = !flip;
        }
        
        function onKeyDown(event: paper.KeyEvent) {
            if (event.key === 'space')
                group.fullySelected = !group.fullySelected;
        }
        
        let audio: AudioContextBase;
        let source: AudioBufferSourceNode; 
        let analyserL: AnalyserNode;
        let analyserR: AnalyserNode;
        let freqByteData: Uint8Array;
        
        paper.view.onFrame = function() {
            let step = paper.view.size.width / (amount + 1);
            let scale = paper.view.size.height / 1.75;
            analyserL.getByteFrequencyData(freqByteData);
            let leftBands = getEqualizerBands(freqByteData);
            analyserR.getByteFrequencyData(freqByteData);
            let rightBands = getEqualizerBands(freqByteData);
            for (let i = 1; i <= amount; i++) {
                leftPath.segments[i].point = new paper.Point([i * step, -leftBands[i - 1] * scale]);
                rightPath.segments[i].point = new paper.Point([i * step, -rightBands[i - 1] * scale * (flip ? -1 : 1)]);
            }
            leftPath.smooth();
            rightPath.smooth();
            group.pivot = new paper.Point([leftPath.position.x, 0]);
            group.position = paper.view.center;
        }
        
        // Pause animation until we have data
        paper.view.pause();
        
        let AudioContext = (window as any).AudioContext || (window as any).webkitAudioContext;
        if (AudioContext) {
            audio = new AudioContext();
            source = audio.createBufferSource();
            // Create two separate analyzers for left and right channel.
            analyserL = audio.createAnalyser();
            analyserL.smoothingTimeConstant = 0.25;
            analyserL.fftSize = Math.pow(2, amount) * 2;
            analyserR = audio.createAnalyser();
            analyserR.smoothingTimeConstant = analyserL.smoothingTimeConstant;
            analyserR.fftSize = analyserL.fftSize;
            // Create the buffer to receive the analyzed data.
            freqByteData = new Uint8Array(analyserL.frequencyBinCount);
            // Create a splitter to feed them both
            let splitter = audio.createChannelSplitter();
            // Connect audio processing graph
            source.connect(splitter);
            splitter.connect(analyserL, 0, 0);
            splitter.connect(analyserR, 1, 0);
            // Connect source to output also so we can hear it
            source.connect(audio.destination);
            loadAudioBuffer('http://assets.paperjs.org/audio/gnossienne.mp3');
        } else {
            // TODO: Print error message
            alert('Audio not supported');
        }
        
        function loadAudioBuffer(url: string) {
            // Load asynchronously
            let request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.responseType = "arraybuffer";
        
            request.onload = function() { 
                audio.decodeAudioData(
                    request.response,
                    function(buffer) {
                        source.buffer = buffer;
                        source.loop = true;
                        source.start(0);
                        paper.view.play();
                    },
                    
                    function(buffer) {
                        alert("Error loading MP3");
                    }
                );
            };
            request.send();
        }
        
        function getEqualizerBands(data:Uint8Array) {
            let bands = [];
            let amount = Math.sqrt(data.length) / 2;
            for(let i = 0; i < amount; i++) {
                let start = Math.pow(2, i) - 1;
                let end = start * 2 + 1;
                let sum = 0;
                for (let j = start; j < end; j++) {
                    sum += data[j];
                }
                let avg = sum / (255 * (end - start));
                bands[i] = Math.sqrt(avg / Math.sqrt(2));
            }
            return bands;
        }
    }
}
