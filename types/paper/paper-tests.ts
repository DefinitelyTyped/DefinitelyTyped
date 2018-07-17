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
            let position = paper.Point.random().multiply(new paper.Point(paper.view.size));
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
        
        let audio: any;
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
                    function(buffer: AudioBuffer) {
                        source.buffer = buffer;
                        source.loop = true;
                        source.start(0);
                        paper.view.play();
                    },
                    
                    function() {
                        alert("Error loading MP3");
                    }
                );
            };
            request.send();
        }
        
        function getEqualizerBands(data:Uint8Array) {
            let bands:number[] = [];
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
    function Chain(){
        // Adapted from the following Processing example:
        // http://processing.org/learning/topics/follow3.html

        // The amount of points in the path:
        let points = 25;

        // The distance between the points:
        let length = 35;

        let path = new paper.Path({
            strokeColor: '#E4141B',
            strokeWidth: 20,
            strokeCap: 'round'
        });

        let start = paper.view.center.divide(new paper.Point([10, 1]));
        for (let i = 0; i < points; i++)
            path.add(start.add(new paper.Point(i * length, 0)));

        function onMouseMove(event: paper.ToolEvent) {
            path.firstSegment.point = event.point;
            for (let i = 0; i < points - 1; i++) {
                let segment = path.segments[i];
                let nextSegment = segment.next;
                let vector = segment.point.subtract(nextSegment.point);
                vector.length = length;
                nextSegment.point = segment.point.subtract(vector);
            }
            path.smooth({ type: 'continuous' });
        }

        function onMouseDown(event: paper.ToolEvent) {
            path.fullySelected = true;
            path.strokeColor = '#e08285';
        }

        function onMouseUp(event: paper.ToolEvent) {
            path.fullySelected = false;
            path.strokeColor = '#e4141b';
        }
    }
    function TadPoles(){
        // Adapted from Flocking Processing example by Daniel Schiffman:
        // http://processing.org/learning/topics/flocking.html

        class Boid {
            acceleration: paper.Point;
            vector: paper.Point;
            position: paper.Point;
            radius: number;
            maxSpeed: number;
            maxForce: number;
            amount: number;
            count: number;
            lastLoc: paper.Point;
            path: paper.Path;
            shortPath: paper.Path;
            head: paper.Shape;

            constructor(position: paper.Point, maxSpeed: number, maxForce: number) {
                let strength = Math.random() * 0.5;
                this.acceleration = new paper.Point({});
                this.vector = paper.Point.random().multiply(2).subtract(1);
                this.position = position.clone();
                this.radius = 30;
                this.maxSpeed = maxSpeed + strength;
                this.maxForce = maxForce + strength;
                this.amount = strength * 10 + 10;
                this.count = 0;
                this.createItems();
            }
            run(boids: Boid[]) {
                this.lastLoc = this.position.clone();
                if (!groupTogether) {
                    this.flock(boids);
                } else {
                    this.align(boids);
                }
                this.borders();
                this.update();
                this.calculateTail();
                this.moveHead();
            }
            calculateTail() {
                let segments = this.path.segments,
                    shortSegments = this.shortPath.segments;
                let speed = this.vector.length;
                let pieceLength = 5 + speed / 3;
                let point = this.position;
                segments[0].point = shortSegments[0].point = point;
                // Chain goes the other way than the movement
                let lastVector = this.vector.multiply(-1);
                for (let i = 1; i < this.amount; i++) {
                    let vector = segments[i].point.subtract(point);
                    this.count += speed * 10;
                    let wave = Math.sin((this.count + i * 3) / 300);
                    let sway = lastVector.rotate(90).normalize(wave);
                    point = point.add(lastVector.normalize(pieceLength).add(sway));
                    segments[i].point = point;
                    if (i < 3)
                        shortSegments[i].point = point;
                    lastVector = vector;
                }
                this.path.smooth();
            }
            createItems() {
                this.head = paper.Shape.Ellipse({
                    center: [0, 0],
                    size: [13, 8],
                    fillColor: 'white'
                });

                this.path = new paper.Path({
                    strokeColor: 'white',
                    strokeWidth: 2,
                    strokeCap: 'round'
                });
                for (let i = 0; i < this.amount; i++)
                    this.path.add(new paper.Point({}));

                this.shortPath = new paper.Path({
                    strokeColor: 'white',
                    strokeWidth: 4,
                    strokeCap: 'round'
                });
                for (let i = 0; i < Math.min(3, this.amount); i++)
                    this.shortPath.add(new paper.Point({}));
            }
            moveHead() {
                this.head.position = this.position;
                this.head.rotation = this.vector.angle;
            }
            // We accumulate a new acceleration each time based on three rules
            flock(boids:Boid[]) {
                let separation = this.separate(boids).multiply(3);
                let alignment = this.align(boids);
                let cohesion = this.cohesion(boids);
                this.acceleration = this.acceleration.add(separation).add(alignment).add(cohesion);
            }
            update() {
                // Update velocity
                this.vector = this.vector.add(this.acceleration);
                // Limit speed (vector#limit?)
                this.vector.length = Math.min(this.maxSpeed, this.vector.length);
                this.position = this.position.add(this.vector);
                // Reset acceleration to 0 each cycle
                this.acceleration = new paper.Point({});
            }
            seek(target:paper.Point) {
                this.acceleration = this.acceleration.add(this.steer(target, false));
            }
            arrive(target:paper.Point) {
                this.acceleration = this.acceleration.add(this.steer(target, true));
            }
            borders() {
                let vector = new paper.Point({});
                let position = this.position;
                let radius = this.radius;
                let size = paper.view.size;
                if (position.x < -radius) vector.x = size.width + radius;
                if (position.y < -radius) vector.y = size.height + radius;
                if (position.x > size.width + radius) vector.x = -size.width -radius;
                if (position.y > size.height + radius) vector.y = -size.height -radius;
                if (!vector.isZero()) {
                    this.position = this.position.add(vector);
                    let segments = this.path.segments;
                    for (let i = 0; i < this.amount; i++) {
                        segments[i].point = segments[i].point.add(vector);
                    }
                }
            }
            // A method that calculates a steering vector towards a target
            // Takes a second argument, if true, it slows down as it approaches
            // the target
            steer(target: paper.Point, slowdown:boolean) {
                let steer:paper.Point;
                let desired = target.subtract(this.position);
                let distance = desired.length;
                // Two options for desired vector magnitude
                // (1 -- based on distance, 2 -- maxSpeed)
                if (slowdown && distance < 100) {
                    // This damping is somewhat arbitrary:
                    desired.length = this.maxSpeed * (distance / 100);
                } else {
                    desired.length = this.maxSpeed;
                }
                steer = desired.subtract(this.vector);
                steer.length = Math.min(this.maxForce, steer.length);
                return steer;
            }
            separate(boids:Boid[]) {
                let desiredSeperation = 60;
                let steer = new paper.Point({});
                let count = 0;
                // For every boid in the system, check if it's too close
                for (let i = 0, l = boids.length; i < l; i++) {
                    let other = boids[i];
                    let vector = this.position.subtract(other.position);
                    let distance = vector.length;
                    if (distance > 0 && distance < desiredSeperation) {
                        // Calculate vector pointing away from neighbor
                        steer= steer.add(vector.normalize(1 / distance));
                        count++;
                    }
                }
                // Average -- divide by how many
                if (count > 0)
                    steer = steer.divide(count);
                if (!steer.isZero()) {
                    // Implement Reynolds: Steering = Desired - Velocity
                    steer.length = this.maxSpeed;
                    steer = steer.subtract(this.vector);
                    steer.length = Math.min(steer.length, this.maxForce);
                }
                return steer;
            }
            // Alignment
            // For every nearby boid in the system, calculate the average velocity
            align(boids: Boid[]) {
                let neighborDist = 25;
                let steer = new paper.Point({});
                let count = 0;
                for (let i = 0, l = boids.length; i < l; i++) {
                    let other = boids[i];
                    let distance = this.position.getDistance(other.position);
                    if (distance > 0 && distance < neighborDist) {
                        steer = steer.add(other.vector);
                        count++;
                    }
                }

                if (count > 0)
                    steer = steer.divide(count);
                if (!steer.isZero()) {
                    // Implement Reynolds: Steering = Desired - Velocity
                    steer.length = this.maxSpeed;
                    steer = steer.subtract(this.vector);
                    steer.length = Math.min(steer.length, this.maxForce);
                }
                return steer;
            }
            // Cohesion
            // For the average location (i.e. center) of all nearby boids,
            // calculate steering vector towards that location
            cohesion(boids:Boid[]) {
                let neighborDist = 100;
                let sum = new paper.Point({});
                let count = 0;
                for (let i = 0, l = boids.length; i < l; i++) {
                    let other = boids[i];
                    let distance = this.position.getDistance(other.position);
                    if (distance > 0 && distance < neighborDist) {
                        sum = sum.add(other.position); // Add location
                        count++;
                    }
                }
                if (count > 0) {
                    sum = sum.divide(count);
                    // Steer towards the location
                    return this.steer(sum, false);
                }
                return sum;
            }
        }

        let heartPath = new paper.Path('M514.69629,624.70313c-7.10205,-27.02441 -17.2373,-52.39453 -30.40576,-76.10059c-13.17383,-23.70703 -38.65137,-60.52246 -76.44434,-110.45801c-27.71631,-36.64355 -44.78174,-59.89355 -51.19189,-69.74414c-10.5376,-16.02979 -18.15527,-30.74951 -22.84717,-44.14893c-4.69727,-13.39893 -7.04297,-26.97021 -7.04297,-40.71289c0,-25.42432 8.47119,-46.72559 25.42383,-63.90381c16.94775,-17.17871 37.90527,-25.76758 62.87354,-25.76758c25.19287,0 47.06885,8.93262 65.62158,26.79834c13.96826,13.28662 25.30615,33.10059 34.01318,59.4375c7.55859,-25.88037 18.20898,-45.57666 31.95215,-59.09424c19.00879,-18.32178 40.99707,-27.48535 65.96484,-27.48535c24.7373,0 45.69531,8.53564 62.87305,25.5957c17.17871,17.06592 25.76855,37.39551 25.76855,60.98389c0,20.61377 -5.04102,42.08691 -15.11719,64.41895c-10.08203,22.33203 -29.54687,51.59521 -58.40723,87.78271c-37.56738,47.41211 -64.93457,86.35352 -82.11328,116.8125c-13.51758,24.0498 -23.82422,49.24902 -30.9209,75.58594z');

        let boids:Boid[] = [];
        let groupTogether = false;

        // Add the boids:
        for (let i = 0; i < 30; i++) {
            let position = paper.Point.random().multiply(new paper.Point(paper.view.size));
            boids.push(new Boid(position, 10, 0.05));
        }


        function onFrame(event: paper.IFrameEvent) {
            for (let i = 0, l = boids.length; i < l; i++) {
                if (groupTogether) {
                    let length = ((i + event.count / 30) % l) / l * heartPath.length;
                    let point = heartPath.getPointAt(length);
                    if (point)
                        boids[i].arrive(point);
                }
                boids[i].run(boids);
            }
        }

        // Reposition the heart path whenever the window is resized:
        function onResize(event:paper.Event) {
            heartPath.fitBounds(paper.view.bounds);
            heartPath.scale(0.8);
        }

        function onMouseDown(event:paper.ToolEvent) {
            groupTogether = !groupTogether;
        }

        function onKeyDown(event:paper.KeyEvent) {
            if (event.key == 'space') {
                let layer = paper.project.activeLayer;
                layer.selected = !layer.selected;
                return false;
            }
        }
    }
    function NyanRainbow(){
        // A tribute to Nyan Cat http://www.youtube.com/watch?v=QH2-TGUlwu4
        let mediaElement: any;
        let playing = false;
        /*MediaElement('nyan', {
            pluginPath: '/assets/mediaelement/',
            success: function(me) {
                mediaElement = me;
                me.play();
                me.addEventListener('timeupdate', function(time: any) {
                    if (me.currentTime > 3.7)
                        playing = true;
                });
            }
        });*/

        let mousePos = paper.view.center .add(new paper.Point([paper.view.bounds.width / 3, 100]));
        let position = paper.view.center;

        function onFrame(event:paper.IFrameEvent) {
            position = position.add((mousePos.subtract(position)).divide(10));
            let vector = (paper.view.center.subtract(position)).divide(10);
            moveStars(vector.multiply(3));
            moveRainbow(vector, event);
        }

        function onMouseMove(event:paper.ToolEvent) {
            mousePos = event.point;
        }

        function onKeyDown(event:paper.KeyEvent) {
            if (event.key == 'space')
                paper.project.activeLayer.selected = !paper.project.activeLayer.selected;
        }

        let moveStars: (vector:paper.Point)=>void = moveStarsFunctionCreator();
        function moveStarsFunctionCreator(): (vector:paper.Point)=>void {
            // The amount of symbol we want to place;
            let count = 50;

            // Create a symbol, which we will use to place instances of later:
            let path = new paper.Path.Circle({
                center: [0, 0],
                radius: 5,
                fillColor: 'white',
                strokeColor: 'black'
            });

            let symbol = new paper.Symbol(path);

            // Place the instances of the symbol:
            for (let i = 0; i < count; i++) {
                // The center position is a random point in the paper.view:
                let center = paper.Point.random().multiply(new paper.Point(paper.view.size));
                let placed = symbol.place(center);
                placed.scale(i / count + 0.01);
                placed.data = {
                    vector: new paper.Point({
                        angle: Math.random() * 360,
                        length : (i / count) * Math.random() / 5
                    })
                };
            }

            let vector = new paper.Point({
                angle: 45,
                length: 0
            });

            function keepInView(item:paper.Item) {
                let position = item.position;
                let viewBounds = paper.view.bounds;
                if (position.isInside(viewBounds))
                    return;
                let itemBounds = item.bounds;
                if (position.x > viewBounds.width + 5) {
                    position.x = -item.bounds.width;
                }

                if (position.x < -itemBounds.width - 5) {
                    position.x = viewBounds.width;
                }

                if (position.y > viewBounds.height + 5) {
                    position.y = -itemBounds.height;
                }

                if (position.y < -itemBounds.height - 5) {
                    position.y = viewBounds.height
                }
            }

            return function(vector:paper.Point) {
                // Run through the active layer's children list and change
                // the position of the placed symbols:
                let layer = paper.project.activeLayer;
                for (let i = 0; i < count; i++) {
                    let item = layer.children[i];
                    let size = item.bounds.size;
                    let length = vector.length / 10 * size.width / 10;
                    item.position += vector.normalize(length) + item.data.vector;
                    keepInView(item);
                }
            };
        };

        let moveRainbow: (vector:paper.Point, event:paper.IFrameEvent)=>void = moveRainbowunctionCreator();
        function moveRainbowunctionCreator(): (vector:paper.Point, event: paper.IFrameEvent)=>void {
            let paths:paper.Path[] = [];
            let colors = ['red', 'orange', 'yellow', 'lime', 'blue', 'purple'];
            for (let i = 0; i < colors.length; i++) {
                let path = new paper.Path({
                    fillColor: colors[i]
                });
                paths.push(path);
            }

            let count = 30;
            let group = new paper.Group(paths);
            let headGroup:paper.Group;
            let eyePosition = new paper.Point({});
            let eyeFollow = (paper.Point.random().subtract(0.5));
            let blinkTime = 200;
            function createHead(vector: paper.Point, count: number) {
                let eyeVector = (eyePosition.subtract(eyeFollow));
                eyePosition = eyePosition.subtract(eyeVector.divide(4));
                if (eyeVector.length < 0.00001)
                    eyeFollow = (paper.Point.random().subtract(0.5));
                if (headGroup)
                    headGroup.remove();
                let top = paths[0].lastSegment.point;
                let bottom = paths[paths.length - 1].firstSegment.point;
                let radius = (bottom.subtract(top)).length / 2;
                let circle = new paper.Path.Circle({
                    center: top.add((bottom.subtract(top)).divide(2)),
                    radius: radius,
                    fillColor: 'black'
                });
                circle.scale(vector.length / 100, 1);
                circle.rotate(vector.angle);

                let innerCircle = circle.clone();
                innerCircle.scale(0.5);
                innerCircle.fillColor = (count % blinkTime < 3)
                    || (count % (blinkTime + 5) < 3) ? 'black' : 'white';
                if (count % (blinkTime + 40) == 0)
                    blinkTime = Math.round(Math.random() * 40) + 200;
                let eye = circle.clone();
                eye.position = eye.position.add(eyePosition.multiply(radius));
                eye.scale(0.15, innerCircle.position);
                eye.fillColor = 'black';
                headGroup = new paper.Group([circle, innerCircle, eye]);
            }

            return function(v:paper.Point, event:paper.IFrameEvent) {
                let vector:paper.Point = (paper.view.center.subtract(position)).divide(10);

                if (vector.length < 5)
                    vector.length = 5;
                count += vector.length / 100;
                group.translate(vector);
                let rotated = vector.rotate(90);
                let middle = paths.length / 2;
                for (let j = 0; j < paths.length; j++) {
                    let path = paths[j];
                    let nyanSwing = playing ? Math.sin(event.count / 2) * vector.length : 1;
                    let unitLength = vector.length * (2 + Math.sin(event.count / 10)) / 2;
                    let length = (j - middle) * unitLength + nyanSwing;
                    let top = paper.view.center.add(rotated.normalize(length));
                    let bottom = paper.view.center.add(rotated.normalize(length + unitLength));
                    path.add(top);
                    path.insert(0, bottom);
                    if (path.segments.length > 200) {
                        let index = Math.round(path.segments.length / 2);
                        path.segments[index].remove();
                        path.segments[index - 1].remove();
                    }
                    path.smooth();
                }
                createHead(vector, event.count);
                if (mediaElement)
                    mediaElement.setVolume(vector.length / 200);
            }
        }
    }
    function RoundedRectangles(){
        let mousePoint = paper.view.center;
        let amount = 25;
        let colors = ['red', 'white', 'blue', 'white'];
        
        for (let i = 0; i < amount; i++) {
            let rect = new paper.Rectangle(new paper.Point([0, 0]), new paper.Point([25, 25]));
            rect.center = mousePoint;
            let path = new paper.Path.Rectangle(rect, 6);
            path.fillColor = colors[i % 4];
            let scale = (1 - i / amount) * 20;
            path.scale(scale);
        }
        
        function onMouseMove(event: paper.ToolEvent) {
            mousePoint = event.point;
        }
        
        let children = paper.project.activeLayer.children;
        function onFrame(event: paper.IFrameEvent) {
            for (let i = 0, l = children.length; i < l; i++) {
                let item = children[i];
                let delta = (mousePoint.subtract(item.position)).divide(i + 5);
                item.rotate(Math.sin((event.count + i) / 10) * 7);
                if (delta.length > 0.1)
                    item.position = item.position.add(delta);
            }
        }
    }
    function RadialRainbows(){
        let point = paper.view.center;

        let colors:paper.Color[] = [];
        let cycles = 4;
        for (let i = 0, l = 60; i < l; i++) {
            let brightness = 1 - (i / l) * 1.5;
            let hue = i / l * cycles * 360;
            let color = new paper.Color({
                hue: hue,
                saturation: 1,
                brightness: brightness
            });
            colors.push(color);
        }

        let radius = Math.max(paper.view.size.width, paper.view.size.height) * 0.75;

        let path = new paper.Path.Rectangle({
            rectangle: paper.view.bounds,
            fillColor: {
                origin: point,
                destination: point.add(new paper.Point([radius, 0])),
                gradient: {
                    stops: colors,
                    radial: true
                }
            }
        });

        let color = path.fillColor as paper.Color;
        let gradient = color.gradient;
        let mouseDown = false;
        let mousePoint = paper.view.center;

        function onMouseDown(event: paper.ToolEvent) {
            mouseDown = true;
            mousePoint = event.point;
        }

        function onMouseDrag(event: paper.ToolEvent) {
            mousePoint = event.point;
        }

        function onMouseUp(event: paper.ToolEvent) {
            vector.length = 10;
            mouseDown = false;
        }

        let grow = false;
        let vector = new paper.Point(150, 0);

        function onFrame() {
            if(gradient){
                for (let i = 0, l = gradient.stops.length; i < l; i++)
                    gradient.stops[i].color.hue -= 20;
                if (grow && vector.length > 300) {
                    grow = false;
                } else if (!grow && vector.length < 75) {
                    grow = true;
                }
                if (mouseDown) {
                    point = point.add((mousePoint.subtract(point)).divide(10));
                } else {
                    vector.length += (grow ? 1 : -1);
                    vector.angle += 5;
                }
                color.highlight = mouseDown ? point : point.add(vector);
            }
        }

        function onResize(event: paper.Event) {
            point = paper.view.center;
            path.bounds = paper.view.bounds;
            let color = path.fillColor as paper.Color;
            color.origin = point;
            let radius = Math.max(paper.view.size.width, paper.view.size.height) * 0.75;
            color.destination = point.add(new paper.Point([radius, 0]));
        }
    }
    function MetaBalls(){
        // Ported from original Metaball script by SATO Hiroyuki
        // http://park12.wakwak.com/~shp/lc/et/en_aics_script.html
        paper.project.currentStyle = {
            fillColor: 'black'
        };

        let ballPositions = [[255, 129], [610, 73], [486, 363],
            [117, 459], [484, 726], [843, 306], [789, 615], [1049, 82],
            [1292, 428], [1117, 733], [1352, 86], [92, 798]];

        let handle_len_rate = 2.4;
        let circlePaths:paper.Path[] = [];
        let radius = 50;
        for (let i = 0, l = ballPositions.length; i < l; i++) {
            let circlePath = new paper.Path.Circle({
                center: ballPositions[i],
                radius: 50
            });
            circlePaths.push(circlePath);
        }

        let largeCircle = new paper.Path.Circle({
            center: [676, 433],
            radius: 100
        });
        circlePaths.push(largeCircle);

        function onMouseMove(event:paper.ToolEvent) {
            largeCircle.position = event.point;
            generateConnections(circlePaths);
        }

        let connections = new paper.Group();
        function generateConnections(paths:paper.Path[]) {
            // Remove the last connection paths:
            connections.children = [];

            for (let i = 0, l = paths.length; i < l; i++) {
                for (let j = i - 1; j >= 0; j--) {
                    let path = metaball(paths[i], paths[j], 0.5, handle_len_rate, 300);
                    if (path) {
                        connections.appendTop(path);
                        path.removeOnMove();
                    }
                }
            }
        }

        generateConnections(circlePaths);

        // ---------------------------------------------
        function metaball(ball1:paper.Path, ball2:paper.Path, v:number, handle_len_rate:number, maxDistance:number) {
            let center1 = ball1.position;
            let center2 = ball2.position;
            let radius1 = ball1.bounds.width / 2;
            let radius2 = ball2.bounds.width / 2;
            let pi2 = Math.PI / 2;
            let d = center1.getDistance(center2);
            let u1:number;
            let u2:number;

            if (radius1 == 0 || radius2 == 0)
                return;

            if (d > maxDistance || d <= Math.abs(radius1 - radius2)) {
                return;
            } else if (d < radius1 + radius2) { // case circles are overlapping
                u1 = Math.acos((radius1 * radius1 + d * d - radius2 * radius2) /
                        (2 * radius1 * d));
                u2 = Math.acos((radius2 * radius2 + d * d - radius1 * radius1) /
                        (2 * radius2 * d));
            } else {
                u1 = 0;
                u2 = 0;
            }

            let angle1 = (center2.subtract(center1)).angleInRadians;
            let angle2 = Math.acos((radius1 - radius2) / d);
            let angle1a = angle1 + u1 + (angle2 - u1) * v;
            let angle1b = angle1 - u1 - (angle2 - u1) * v;
            let angle2a = angle1 + Math.PI - u2 - (Math.PI - u2 - angle2) * v;
            let angle2b = angle1 - Math.PI + u2 + (Math.PI - u2 - angle2) * v;
            let p1a = center1.add(getVector(angle1a, radius1));
            let p1b = center1.add(getVector(angle1b, radius1));
            let p2a = center2.add(getVector(angle2a, radius2));
            let p2b = center2.add(getVector(angle2b, radius2));

            // define handle length by the distance between
            // both ends of the curve to draw
            let totalRadius = (radius1 + radius2);
            let d2 = Math.min(v * handle_len_rate, (p1a.subtract(p2a)).length / totalRadius);

            // case circles are overlapping:
            d2 *= Math.min(1, d * 2 / (radius1 + radius2));

            radius1 *= d2;
            radius2 *= d2;

            let path = new paper.Path({
                segments: [p1a, p2a, p2b, p1b],
                style: ball1.style,
                closed: true
            });
            let segments = path.segments;
            segments[0].handleOut = getVector(angle1a - pi2, radius1);
            segments[1].handleIn = getVector(angle2a + pi2, radius2);
            segments[2].handleOut = getVector(angle2b - pi2, radius2);
            segments[3].handleIn = getVector(angle1b + pi2, radius1);
            return path;
        }

        // ------------------------------------------------
        function getVector(radians:number, length:number) {
            return new paper.Point({
                // Convert radians to degrees:
                angle: radians * 180 / Math.PI,
                length: length
            });
        }
    }
    function Voronoi(){
        let voronoi:any = {};
        let sites = generateBeeHivePoints(paper.view.size.divide(200), true);
        let bbox:any;
        let diagram:any;
        let oldSize = paper.view.size;
        let spotColor = new paper.Color('red');
        let mousePos = paper.view.center;
        let selected = false;

        onResize();

        function onMouseDown(event: paper.ToolEvent) {
            sites.push(event.point);
            renderDiagram();
        }

        function onMouseMove(event: paper.ToolEvent) {
            mousePos = event.point;
            if (event.count == 0)
                sites.push(event.point);
            sites[sites.length - 1] = event.point;
            renderDiagram();
        }

        function renderDiagram() {
            paper.project.activeLayer.children = [];
            let diagram = voronoi.compute(sites, bbox);
            if (diagram) {
                for (let i = 0, l = sites.length; i < l; i++) {
                    let cell = diagram.cells[(sites[i] as any).voronoiId];
                    if (cell) {
                        let halfedges = cell.halfedges,
                            length = halfedges.length;
                        if (length > 2) {
                            let points:paper.Point[] = [];
                            for (let j = 0; j < length; j++) {
                                let v = halfedges[j].getEndpoint();
                                points.push(new paper.Point(v));
                            }
                            createPath(points, sites[i]);
                        }
                    }
                }
            }
        }

        function removeSmallBits(path:paper.Path) {
            let averageLength = path.length / path.segments.length;
            let min = path.length / 50;
            for(let i = path.segments.length - 1; i >= 0; i--) {
                let segment = path.segments[i];
                let cur = segment.point;
                let nextSegment = segment.next;
                let next = nextSegment.point.add(nextSegment.handleIn);
                if (cur.getDistance(next) < min) {
                    segment.remove();
                }
            }
        }

        function generateBeeHivePoints(size:paper.Size, loose: boolean) {
            let points:paper.Point[] = [];
            let col = paper.view.size.divide(size);
            for(let i = -1; i < size.width + 1; i++) {
                for(let j = -1; j < size.height + 1; j++) {
                    let point = new paper.Point(i, j).divide(new paper.Point(size)).multiply(new paper.Point(paper.view.size)).add(new paper.Point(col).divide(2));
                    if(j % 2)
                        point = point.add(new paper.Point(col.width / 2, 0));
                    if(loose)
                        point = point.add(new paper.Point(col).divide(4).multiply(paper.Point.random()).subtract(new paper.Point(col.divide(4))));
                    points.push(point);
                }
            }
            return points;
        }
        function createPath(points: paper.Point[], center: paper.Point) {
            let path = new paper.Path();
            if (!selected) { 
                path.fillColor = spotColor;
            } else {
                path.fullySelected = selected;
            }
            path.closed = true;

            for (let i = 0, l = points.length; i < l; i++) {
                let point = points[i];
                let next = points[(i + 1) == points.length ? 0 : i + 1];
                let vector = (next.subtract(point)).divide(2);
                path.add(new paper.Point({
                    point: point.add(vector),
                    handleIn: vector.multiply(-1),
                    handleOut: vector
                }));
            }
            path.scale(0.95);
            removeSmallBits(path);
            return path;
        }

        function onResize() {
            let margin = 20;
            bbox = {
                xl: margin,
                xr: paper.view.bounds.width - margin,
                yt: margin,
                yb: paper.view.bounds.height - margin
            };
            for (let i = 0, l = sites.length; i < l; i++) {
                sites[i] = sites[i].multiply(new paper.Point(paper.view.size.divide(oldSize)));
            }
            oldSize = paper.view.size;
            renderDiagram();
        }

        function onKeyDown(event: paper.KeyEvent) {
            if (event.key == 'space') {
                selected = !selected;
                renderDiagram();
            }
        }
    }
    function FutureSplash(){
        // Code ported to Paper.js from http://the389.com/9/1/
        // with permission.

        let values = {
            friction: 0.8,
            timeStep: 0.01,
            amount: 15,
            mass: 2,
            count: 0,
            invMass: 1/2
        };
        values.invMass = 1 / values.mass;

        let path: paper.Path;
        let springs: Spring[];
        let size = paper.view.size.multiply(new paper.Size([1.2, 1]));

        class SpringPoint extends paper.Point{
            fixed: boolean;
            px: number;
            py: number;
        }

        class Spring {
            a: SpringPoint;
            b: SpringPoint;
            restLength: number;
            strength: number;
            mamb: number;            

            constructor(a:SpringPoint, b:SpringPoint, strength:number, restLength:number=0){
                this.a = a;
                this.b = b;
                this.restLength = restLength || 80;
                this.strength = strength ? strength : 0.55;
                this.mamb = values.invMass * values.invMass;
            }
            update() {
                let delta = this.b.subtract(this.a);
                let dist = delta.length;
                let normDistStrength = (dist - this.restLength) /
                        (dist * this.mamb) * this.strength;
                delta.y *= normDistStrength * values.invMass * 0.2;
                if (!this.a.fixed)
                    this.a.y += delta.y;
                if (!this.b.fixed)
                    this.b.y -= delta.y;
            }
        };


        function createPath(strength: number) {
            let path = new paper.Path({
                fillColor: 'black'
            });
            springs = [];
            for (let i = 0; i <= values.amount; i++) {
                let segment = path.add(new paper.Point(i / values.amount, 0.5).multiply(new paper.Point(size)));
                let point = segment.point as SpringPoint;
                if (i == 0 || i == values.amount)
                    point.y += size.height;
                point.px = point.x;
                point.py = point.y;
                // The first two and last two points are fixed:
                point.fixed = i < 2 || i > values.amount - 2;
                if (i > 0) {
                    let spring = new Spring(segment.previous.point as SpringPoint, point, strength);
                    springs.push(spring);
                }
            }
            path.position.x -= size.width / 4;
            return path;
        }

        function onResize() {
            if (path)
                path.remove();
            size = paper.view.bounds.size.multiply(new paper.Size([2, 1]));
            path = createPath(0.1);
        }

        function onMouseMove(event: paper.ToolEvent) {
            let location = path.getNearestLocation(event.point);
            let segment = location.segment;
            let point = segment.point as SpringPoint;

            if (!point.fixed && location.distance < size.height / 4) {
                let y = event.point.y;
                point.y += (y - point.y) / 6;
                if (segment.previous && !(segment.previous.point as SpringPoint).fixed) {
                    let previous = segment.previous.point;
                    previous.y += (y - previous.y) / 24;
                }
                if (segment.next && !(segment.next.point as SpringPoint).fixed) {
                    let next = segment.next.point;
                    next.y += (y - next.y) / 24;
                }
            }
        }

        function onFrame(event:paper.IFrameEvent) {
            updateWave(path);
        }

        function updateWave(path:paper.Path) {
            let force = 1 - values.friction * values.timeStep * values.timeStep;
            for (let i = 0, l = path.segments.length; i < l; i++) {
                let point = path.segments[i].point as SpringPoint;
                let dy = (point.y - point.py) * force;
                point.py = point.y;
                point.y = Math.max(point.y + dy, 0);
            }

            for (let j = 0, l = springs.length; j < l; j++) {
                springs[j].update();
            }
            path.smooth({ type: 'continuous' });
        }

        function onKeyDown(event:paper.KeyEvent) {
            if (event.key == 'space') {
                path.fullySelected = !path.fullySelected;
                path.fillColor = path.fullySelected ? new paper.Color('') : 'black';
            }
        }
    }
    function Smoothing(){
        let width: number;
        let height: number;
        let center: paper.Point;
        let points = 10;
        let smooth = true;
        let path = new paper.Path();
        let mousePos = paper.view.center.divide(2);
        let pathHeight = mousePos.y;
        path.fillColor = 'black';
        initializePath();

        function initializePath() {
            center = paper.view.center;
            width = paper.view.size.width;
            height = paper.view.size.height / 2;
            path.segments = [];
            path.add(paper.view.bounds.bottomLeft);
            for (let i = 1; i < points; i++) {
                let point = new paper.Point(width / points * i, center.y);
                path.add(point);
            }
            path.add(paper.view.bounds.bottomRight);
            path.fullySelected = true;
        }

        function onFrame(event:paper.IFrameEvent) {
            pathHeight += (center.y - mousePos.y - pathHeight) / 10;
            for (let i = 1; i < points; i++) {
                let sinSeed = event.count + (i + i % 10) * 100;
                let sinHeight = Math.sin(sinSeed / 200) * pathHeight;
                let yPos = Math.sin(sinSeed / 100) * sinHeight + height;
                path.segments[i].point.y = yPos;
            }
            if (smooth)
                path.smooth({ type: 'continuous' });
        }

        function onMouseMove(event:paper.ToolEvent) {
            mousePos = event.point;
        }

        function onMouseDown(event:paper.ToolEvent) {
            smooth = !smooth;
            if (!smooth) {
                // If smooth has been turned off, we need to reset
                // the handles of the path:
                for (let i = 0, l = path.segments.length; i < l; i++) {
                    let segment = path.segments[i];
                    segment.clearHandles();
                }
            }
        }

        // Reposition the path whenever the window is resized:
        function onResize(event:paper.Event) {
            initializePath();
        }
    }
    function SpiralRaster(){
        // Please note: dragging and dropping images only works for
        // certain browsers when serving this script online:
        let path:paper.Path;
        let position:paper.Point;
        let max:number;
        let count = 0;
        let grow = false;

        // As the web is asynchronous, we need to wait for the raster to
        // load before we can perform any operation on its pixels.
        let raster = new paper.Raster('mona');
        raster.visible = false;
        raster.on('load', resetSpiral);

        let text = new paper.PointText({
            justification: 'right',
            fontSize: 12,
            content: (window as any).FileReader
                ? 'drag & drop an image from your desktop to rasterize it'
                : 'to drag & drop images, please use Webkit, Firefox, Chrome or IE 10'
        });

        function onFrame(event:paper.IFrameEvent) {
            if (grow) {
                if (raster.loaded && (paper.view.center.subtract(position)).length < max) {
                    for (let i = 0, l = count / 36 + 1; i < l; i++) {
                        growSpiral();
                    }
                    path.smooth();
                } else {
                    grow = false;
                }
            }
        }

        function growSpiral() {
                count++;
                let vector = new paper.Point({
                    angle: count * 5,
                    length: count / 100
                });
                let rot = vector.rotate(90);
                let color = raster.getAverageColor(position.add(vector.divide(2)));
                let value = color ? (1 - color.gray) * 3.7 : 0;
                rot.length = Math.max(value, 0.2);
                path.add(position.add(vector).subtract(rot));
                path.insert(0, position.add(vector).add(rot));
                position = position.add(vector);
        }

        function resetSpiral() {
            grow = true;

            // Transform the raster, so it fills the paper.view:
            raster.fitBounds(paper.view.bounds);

            if (path)
                path.remove();

            position = paper.view.center;
            count = 0;
            path = new paper.Path({
                fillColor: 'black',
                closed: true
            });

            position = paper.view.center;
            max = Math.min(raster.bounds.width, raster.bounds.height) * 0.5;
        }

        function onResize() {
            if (raster.loaded)
                resetSpiral();
            text.point = paper.view.bounds.bottomRight.subtract(new paper.Point([30, 30]));
        }

        function onKeyDown(event:paper.KeyEvent) {
            if (event.key == 'space') {
                path.selected = !path.selected;
            }
        }

        function onDocumentDrag(event:Event) {
            event.preventDefault();
        }

        function onDocumentDrop(event:Event) {
            event.preventDefault();

            let file = (event as any).dataTransfer.files[0];
            let reader = new FileReader();

            reader.onload = function (event) {
                let image = document.createElement('img');
                image.onload = function () {
                    raster = new paper.Raster(image);
                    raster.visible = false;
                    resetSpiral();
                };
                if(event.target)
                    image.src = (event.target as any).result;
            };
            reader.readAsDataURL(file);
        }

        document.addEventListener('drop', onDocumentDrop, false);
        document.addEventListener('dragover', onDocumentDrag, false);
        document.addEventListener('dragleave', onDocumentDrag, false);
    }
    function DivisionRaster(){
        // Based on 'JPEG Raster' by Jonathan Puckey:
        // http://www.flickr.com/photos/puckey/3179779686/in/photostream/

        // Create a raster item:
        let raster = new paper.Raster('mona.jpg');
        let loaded = false;

        raster.on('load', function(event: paper.Event) {
            loaded = true;
            paper.view.onResize(event);
        });

        // Make the raster invisible:
        raster.visible = false;

        let lastPos = paper.view.center;
        function moveHandler(this: paper.Path, event:paper.MouseEvent) {
            if (!loaded)
                return;
            if (lastPos.getDistance(event.point) < 10)
                return;
            lastPos = event.point;

            let size: paper.Size = this.bounds.size.clone();
            let isLandscape = size.width > size.height;

            // If the path is in landscape orientation, we're going to
            // split the path horizontally, otherwise vertically:

            size= size.divide(new paper.Size(isLandscape ? [2, 1] : [1, 2]));

            let path = new paper.Path.Rectangle({
                point: this.bounds.topLeft.floor(),
                size: size.ceil(),
                onMouseMove: moveHandler
            });
            path.fillColor = raster.getAverageColor(path);

            let path2 = new paper.Path.Rectangle({
                point: isLandscape
                    ? this.bounds.topCenter.ceil()
                    : this.bounds.leftCenter.ceil(),
                size: size.floor(),
                onMouseMove: moveHandler
            });
            path2.fillColor = raster.getAverageColor(path2);

            this.remove();
        }

        function onResize(event:paper.Event) {
            if (!loaded)
                return;
            paper.project.activeLayer.removeChildren();

            // Transform the raster so that it fills the bounding rectangle
            // of the paper.view:
            raster.fitBounds(paper.view.bounds, true);

            // Create a path that fills the paper.view, and fill it with
            // the average color of the raster:
            new paper.Path.Rectangle({
                rectangle: paper.view.bounds,
                fillColor: raster.getAverageColor(paper.view.bounds),
                onMouseMove: moveHandler
            });
        }
    }
    function Qbertify(){
        // Please note: dragging and dropping images only works for
        // certain browsers when serving this script online:

        let values = {
            amount: 30
        };

        let raster: paper.Raster;
        let group: paper.Group;
        let piece = createPiece();
        let count = 0;

        handleImage('mona');

        let text = new paper.PointText({
            point: paper.view.center,
            justification: 'center',
            fillColor: 'white',
            fontSize: 15,
            content: (window as any).FileReader
                ? 'Drag & drop an image from your desktop'
                : 'To drag & drop images, please use Webkit, Firefox, Chrome or IE 10'
        });

        function createPiece() {
            let group = new paper.Group();
            let hexagon = new paper.Path.RegularPolygon({
                center: paper.view.center,
                sides: 6,
                radius: 50,
                fillColor: 'gray',
                parent: group
            });
            for (let i = 0; i < 2; i++) {
                let path = new paper.Path({
                    closed: true,
                    parent: group,
                    fillColor: i == 0 ? 'white' : 'black'
                });
                for (let j = 0; j < 3; j++) {
                    let index = (i * 2 + j) % hexagon.segments.length;
                    path.add(hexagon.segments[index].clone());
                }
                path.add(hexagon.bounds.center);
            }
            // Remove the group from the document, so it is not drawn:
            group.remove();
            return group;
        }

        function handleImage(image:HTMLImageElement|string) {
            count = 0;
            let size = piece.bounds.size;

            if (group)
                group.remove();

            // As the web is asynchronous, we need to wait for the raster to
            // load before we can perform any operation on its pixels.
            raster = new paper.Raster(image);
            raster.visible = false;
            raster.on('load', function() {
                // Transform the raster, so it fills the paper.view:
                raster.fitBounds(paper.view.bounds, true);
                group = new paper.Group();
                for (let y = 0; y < values.amount; y++) {
                    for (let x = 0; x < values.amount; x++) {
                        let copy = piece.clone();
                        copy.position = copy.position.add(new paper.Point(size.multiply(new paper.Size([x + (y % 2 ? 0.5 : 0), y * 0.75]))));
                        group.addChild(copy);
                    }
                }

                // Transform the group so it covers the paper.view:
                group.fitBounds(paper.view.bounds, true);
                group.scale(1.1);
            })
        }

        function onFrame(event:paper.IFrameEvent) {
            if (!group)
                return;
            // Loop through the uncolored hexagons in the group and fill them
            // with the average color:
            let length = Math.min(count + values.amount, group.children.length);
            for (let i = count; i < length; i++) {
                piece = group.children[i] as paper.Group;
                let hexagon = piece.children[0] as paper.Path;
                let color = raster.getAverageColor(hexagon);
                if (color) {
                    hexagon.fillColor = color;
                    let top = piece.children[1];
                    top.fillColor = color.clone();
                    top.fillColor.brightness *= 1.5;

                    let right = piece.children[2];
                    right.fillColor = color.clone();
                    right.fillColor.brightness *= 0.5;
                }
            }
            count += values.amount;
        }

        function onResize() {
            paper.project.activeLayer.position = paper.view.center;
        }

        function onDocumentDrag(event:Event) {
            event.preventDefault();
        }

        function onDocumentDrop(event:Event) {
            event.preventDefault();

            let file = (event as any).dataTransfer.files[0];
            let reader = new FileReader();

            reader.onload = function(event) {
                let image = document.createElement('img');
                image.onload = function () {
                    handleImage(image);
                    paper.view.draw();
                };
                image.src = (event as any).target.result;
            };
            reader.readAsDataURL(file);
        }

        document.addEventListener('drop', onDocumentDrop, false);
        document.addEventListener('dragover', onDocumentDrag, false);
        document.addEventListener('dragleave', onDocumentDrag, false);
    }
    function PathIntersections(){
        // Imported SVG Groups have their applyMatrix flag turned off by
        // default. This is required for SVG importing to work correctly. Turn
        // it on now, so we don't have to deal with nested coordinate spaces.
        let words = paper.project.importSVG((document.getElementById('svg') as any) as SVGElement);
        words.visible = true; // Turn off the effect of display:none;
        words.fillColor = new paper.Color('');
        words.strokeColor = 'black';
        let yesGroup = words.getItem({name:'yes'}) as paper.Group;

        let noGroup = words.getItem({name:'no'}) as paper.Group;
        // Resize the words to fit snugly inside the paper.view:
        words.fitBounds(paper.view.bounds);
        words.scale(0.8);

        yesGroup.position = paper.view.center;
        noGroup.position = new paper.Point([-900, -900]);

        function onMouseMove(event:paper.MouseEvent) {
            noGroup.position = event.point;
            for (let i = 0; i < yesGroup.children.length; i++) {
                for (let j = 0; j < noGroup.children.length; j++) {
                    showIntersections(noGroup.children[j] as paper.PathItem, yesGroup.children[i] as paper.PathItem)
                }
            }
        }
0
        function showIntersections(path1:paper.PathItem, path2:paper.PathItem) {
            let intersections = path1.getIntersections(path2);
            for (let i = 0; i < intersections.length; i++) {
                new paper.Path.Circle({
                    center: intersections[i].point,
                    radius: 5,
                    fillColor: '#009dec'
                }).removeOnMove();
            }
        }
    }
    function PathSimplification(){
        let path:paper.Path;

        let textItem = new paper.PointText({
            content: 'Click and drag to draw a line.',
            point: new paper.Point(20, 30),
            fillColor: 'black',
        });

        function onMouseDown(event:paper.ToolEvent) {
            // If we produced a path before, deselect it:
            if (path) {
                path.selected = false;
            }

            // Create a new path and set its stroke color to black:
            path = new paper.Path({
                segments: [event.point],
                strokeColor: 'black',
                // Select the path, so we can see its segment points:
                fullySelected: true
            });
        }

        // While the user drags the mouse, points are added to the path
        // at the position of the mouse:
        function onMouseDrag(event:paper.ToolEvent) {
            path.add(event.point);

            // Update the content of the text item to show how many
            // segments it has:
            textItem.content = 'Segment count: ' + path.segments.length;
        }

        // When the mouse is released, we simplify the path:
        function onMouseUp(event:paper.ToolEvent) {
            let segmentCount = path.segments.length;

            // When the mouse is released, simplify it:
            path.simplify(10);

            // Select the path, so we can see its segments:
            path.fullySelected = true;

            let newSegmentCount = path.segments.length;
            let difference = segmentCount - newSegmentCount;
            let percentage = 100 - Math.round(newSegmentCount / segmentCount * 100);
            textItem.content = difference + ' of the ' + segmentCount + ' segments were removed. Saving ' + percentage + '%';
        }
    }
    function HitTesting(){
        let values = {
            paths: 50,
            minPoints: 5,
            maxPoints: 15,
            minRadius: 30,
            maxRadius: 90
        };
        
        let hitOptions = {
            segments: true,
            stroke: true,
            fill: true,
            tolerance: 5
        };
        
        createPaths();
        
        function createPaths() {
            let radiusDelta = values.maxRadius - values.minRadius;
            let pointsDelta = values.maxPoints - values.minPoints;
            for (let i = 0; i < values.paths; i++) {
                let radius = values.minRadius + Math.random() * radiusDelta;
                let points = values.minPoints + Math.floor(Math.random() * pointsDelta);
                let path = createBlob(paper.Point.random().multiply(new paper.Point(paper.view.size)), radius, points);
                let lightness = (Math.random() - 0.5) * 0.4 + 0.4;
                let hue = Math.random() * 360;
                path.fillColor = new paper.Color({ hue: hue, saturation: 1, lightness: lightness });
                path.strokeColor = 'black';
            };
        }
        
        function createBlob(center:paper.Point, maxRadius:number, points:number) {
            let path = new paper.Path();
            path.closed = true;
            for (let i = 0; i < points; i++) {
                let delta = new paper.Point({
                    length: (maxRadius * 0.5) + (Math.random() * maxRadius * 0.5),
                    angle: (360 / points) * i
                });
                path.add(center.add(delta));
            }
            path.smooth();
            return path;
        }
        
        let segment:paper.Segment | null;
        let path:paper.Path | null;
        let movePath = false;
        function onMouseDown(event:paper.ToolEvent) {
            segment = path = null;
            let hitResult = paper.project.hitTest(event.point, hitOptions);
            if (!hitResult)
                return;
        
            if (event.modifiers.shift) {
                if (hitResult.type == 'segment') {
                    hitResult.segment.remove();
                };
                return;
            }
        
            if (hitResult) {
                path = hitResult.item as paper.Path;
                if (hitResult.type == 'segment') {
                    segment = hitResult.segment;
                } else if (hitResult.type == 'stroke') {
                    let location = hitResult.location;
                    segment = path.insert(location.index + 1, event.point);
                    path.smooth();
                }
            }
            movePath = hitResult.type == 'fill';
            if (movePath)
                paper.project.activeLayer.addChild(hitResult.item);
        }
        
        function onMouseMove(event:paper.ToolEvent) {
            paper.project.activeLayer.selected = false;
            if (event.item)
                event.item.selected = true;
        }
        
        function onMouseDrag(event:paper.ToolEvent) {
            if (segment) {
                segment.point= segment.point.add(event.delta);
                if(path)
                    path.smooth();
            } else if (path) {
                path.position = path.position.add(event.delta);
            }
        }
    }
    function BouncingBalls(){
        class Ball{
            point: paper.Point;
            vector:paper.Point;
            dampen:number;
            gravity:number;
            bounce:number;
            radius: number;
            item: paper.Item;

            constructor(point:paper.Point, vector:paper.Point) {
                if (!vector || vector.isZero()) {
                    this.vector = paper.Point.random().multiply(5);
                } else {
                    this.vector = vector.multiply(2);;
                }
                this.point = point;
                this.dampen = 0.4;
                this.gravity = 3;
                this.bounce = -0.6;
            
                let color = new paper.Color({
                    hue: Math.random() * 360,
                    saturation: 1,
                    brightness: 1
                });
                let gradient = new paper.Gradient([new paper.GradientStop(color), new paper.GradientStop(new paper.Color('black'))], true);
            
                let radius = this.radius = 50 * Math.random() + 30;
                // Wrap CompoundPath in a Group, since CompoundPaths directly 
                // applies the transformations to the content, just like Path.
                let ball = new paper.CompoundPath({
                    children: [
                        new paper.Path.Circle({
                            radius: radius
                        }),
                        new paper.Path.Circle({
                            center: radius / 8,
                            radius: radius / 3
                        })
                    ],
                    fillColor: new paper.Color(gradient, new paper.Point([0]), new paper.Point([radius]), new paper.Point([radius / 8])),
                });
            
                this.item = new paper.Group({
                    children: [ball],
                    transformContent: false,
                    position: this.point
                });
            }
            iterate() {
                let size = paper.view.size;
                this.vector.y += this.gravity;
                this.vector.x *= 0.99;
                let pre = this.point.add(this.vector);
                if (pre.x < this.radius || pre.x > size.width - this.radius)
                    this.vector.x *= -this.dampen;
                if (pre.y < this.radius || pre.y > size.height - this.radius) {
                    if (Math.abs(this.vector.x) < 3)
                        this.vector = paper.Point.random().multiply(new paper.Point([150, 100]).add(new paper.Point([-75, 20])));
                    this.vector.y *= this.bounce;
                }
            
                let max = paper.Point.max(new paper.Point([this.radius]), this.point.add(this.vector));
                this.item.position = this.point = paper.Point.min(max, new paper.Point(size).subtract(this.radius));
                this.item.rotate(this.vector.x);
            }
        }        
        
        let balls:Ball[] = [];
        for (let i = 0; i < 10; i++) {
            let position = paper.Point.random().multiply(new paper.Point(paper.view.size));
            let vector = (paper.Point.random().subtract(new paper.Point([0.5, 0])).multiply(new paper.Point([50, 100])));
            let ball = new Ball(position, vector);
            balls.push(ball);
        }
        
        let textItem = new paper.PointText({
            point: [20, 30],
            fillColor: 'black',
            content: 'Click, drag and release to add balls.'
        });
        
        let lastDelta:paper.Point|null;
        function onMouseDrag(event:paper.ToolEvent) {
            lastDelta = event.delta;
        }
        
        function onMouseUp(event:paper.ToolEvent) {
            if(lastDelta){
                let ball = new Ball(event.point, lastDelta);
                balls.push(ball);
            }
            lastDelta = null;
        }
        
        function onFrame() {
            for (let i = 0, l = balls.length; i < l; i++)
                balls[i].iterate();
        }
    }
}

function APIReferenceExamples() {
    function Color0() {
    
        // Create a circle shaped path at {x: 80, y: 50}
        // with a radius of 30.
        let circle = new paper.Path.Circle(new paper.Point(80, 50), 30);
        
        // Pass a color name to the fillColor property, which is internally
        // converted to a Color.
        circle.fillColor = 'green';
    
    }
    function Color1() {
        
        // Create a circle shaped path at {x: 80, y: 50}
        // with a radius of 30.
        let circle = new paper.Path.Circle(new paper.Point(80, 50), 30);
        
        // Pass a hex string to the fillColor property, which is internally
        // converted to a Color.
        circle.fillColor = '#ff0000';
    
    }
    function Color2() {
        
        // Create a circle shaped path at {x: 80, y: 50}
        // with a radius of 30:
        let circle = new paper.Path.Circle(new paper.Point(80, 50), 30);
        
        // 100% red, 0% blue, 50% blue:
        circle.fillColor = new paper.Color(1, 0, 0.5);
    
    }
    function Color3() {
        
        // Create a circle shaped path at {x: 80, y: 50}
        // with a radius of 30:
        let circle = new paper.Path.Circle(new paper.Point(80, 50), 30);
        
        // Create a GrayColor with 50% gray:
        circle.fillColor = new paper.Color(0.5);
    
    }
    function Color4() {
        
        // Create a circle shaped path at {x: 80, y: 50}
        // with a radius of 30:
        let circle = new paper.Path.Circle(new paper.Point(80, 50), 30);
        
        // Create an HSB Color with a hue of 90 degrees, a saturation
        // 100% and a brightness of 100%:
        circle.fillColor = new paper.Color({ hue: 90, saturation: 1, brightness: 1 });
    
    }
    function Color5() {
        
        // Create a circle shaped path at {x: 80, y: 50}
        // with a radius of 30:
        let circle = new paper.Path.Circle(new paper.Point(80, 50), 30);
        
        // Create an HSL Color with a hue of 90 degrees, a saturation
        // 100% and a lightness of 50%:
        circle.fillColor = new paper.Color({ hue: 90, saturation: 1, lightness: 0.5 });
    
    }
    function Color6() {
        
        // Define two points which we will be using to construct
        // the path and to position the gradient color:
        let topLeft = paper.view.center.subtract(new paper.Point([80, 80]));
        let bottomRight = paper.view.center.add(new paper.Point([80, 80]));
        
        let path = new paper.Path.Rectangle({
         topLeft: topLeft,
         bottomRight: bottomRight,
         // Fill the path with a gradient of three color stops
         // that runs between the two points we defined earlier:
         fillColor: {
             stops: ['yellow', 'red', 'blue'],
             origin: topLeft,
             destination: bottomRight
         }
        });
    
    }
    function Color7() {
        
        // Define two points which we will be using to construct
        // the path and to position the gradient color:
        let topLeft = paper.view.center.subtract(new paper.Point([80, 80]));
        let bottomRight = paper.view.center.add(new paper.Point([80, 80]));
        
        // Create a rectangle shaped path between
        // the topLeft and bottomRight points:
        let path = new paper.Path.Rectangle(topLeft, bottomRight);
        
        // Create the gradient, passing it an array of colors to be converted
        // to evenly distributed color stops:
        let gradient = new paper.Gradient(['yellow','red','blue']);
        
        // Have the gradient color run between the topLeft and
        // bottomRight points we defined earlier:
        let gradientColor = new paper.Color(gradient, topLeft, bottomRight);
        
        // Set the fill color of the path to the gradient color:
        path.fillColor = gradientColor;
    
    }
    function Color8() {
        
        // Create a circle shaped path at the center of the paper.view
        // with a radius of 80:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 80
        });
        
        // The stops array: yellow mixes with red between 0 and 15%,
        // 15% to 30% is pure red, red mixes with black between 30% to 100%:
        let stops = [
            ['yellow', 0],
            ['red', 0.15],
            ['red', 0.3],
            ['black', 0.9]
        ];
        
        // Create a radial gradient using the color stops array:
        let gradient = new paper.Gradient(stops, true);
        
        // We will use the center point of the circle shaped path as
        // the origin point for our gradient color
        let from = path.position;
        
        // The destination point of the gradient color will be the
        // center point of the path + 80pt in horizontal direction:
        let to = path.position.add(new paper.Point([80, 0]));
        
        // Create the gradient color:
        let gradientColor = new paper.Color(gradient, from, to);
        
        // Set the fill color of the path to the gradient color:
        path.fillColor = gradientColor;
    
    }
    function Color9() {
        
        let circle = new paper.Path.Circle(new paper.Point(80, 50), 30);
        
        // Fill the circle with red and give it a 20pt green stroke:
        circle.style = {
         fillColor: 'red',
         strokeColor: 'green',
         strokeWidth: 20
        };
        
        // Make the stroke half transparent:
        (circle.strokeColor as paper.Color).alpha = 0.5;
    
    }
    function Color10() {
        
        let circle = new paper.Path.Circle(new paper.Point(80, 50), 30);
        circle.fillColor = new paper.Color('blue');
        
        // Blue + red = purple:
        circle.fillColor.red = 1;
    
    }
    function Color11() {
        
        let circle = new paper.Path.Circle(new paper.Point(80, 50), 30);
        
        // First we set the fill color to red:
        circle.fillColor = new paper.Color('red');
        
        // Red + green = yellow:
        circle.fillColor.green = 1;
    
    }
    function Color12() {
        
        let circle = new paper.Path.Circle(new paper.Point(80, 50), 30);
        
        // First we set the fill color to red:
        circle.fillColor = new paper.Color('red');
        
        // Red + blue = purple:
        circle.fillColor.blue = 1;
    
    }
    function Color13() {
        
        let circle = new paper.Path.Circle(new paper.Point(80, 50), 30);
        circle.fillColor = new paper.Color('red');
        circle.fillColor.hue += 30;
    
    }
    function Color14() {
        
        // Create a rectangle shaped path, using the dimensions
        // of the paper.view:
        let path = new paper.Path.Rectangle(paper.view.bounds);
        path.fillColor = new paper.Color('red');
        
        function onFrame(event:paper.IFrameEvent) {
         (path.fillColor as paper.Color).hue += 0.5;
        }
    
    }
    function Color15() {
        
        let path = new paper.Path.Circle({
         center: paper.view.center,
         radius: paper.view.bounds.height * 0.4
        });
        
        path.fillColor = new paper.Color({ 
            gradient: new paper.Gradient({ 
                stops: ['yellow', 'red', 'black'], 
                radial: true }),
            origin: path.position, 
            destination: path.bounds.rightCenter
        });
        
        function onMouseMove(event:paper.ToolEvent) {
         // Set the origin highlight of the path's gradient color
         // to the position of the mouse:
         (path.fillColor as paper.Color).highlight = event.point;
        }
    
    }
    function CompoundPath0() {
        
        let path = new paper.CompoundPath({
            children: [
                new paper.Path.Circle({
                    center: new paper.Point(50, 50),
                    radius: 30
                }),
                new paper.Path.Circle({
                    center: new paper.Point(50, 50),
                    radius: 10
                })
            ],
            fillColor: 'black',
            selected: true
        });
    
    }
    function CompoundPath1() {
        
        let pathData = 'M20,50c0,-16.56854 13.43146,-30 30,-30c16.56854,0 30,13.43146 30,30c0,16.56854 -13.43146,30 -30,30c-16.56854,0 -30,-13.43146 -30,-30z M50,60c5.52285,0 10,-4.47715 10,-10c0,-5.52285 -4.47715,-10 -10,-10c-5.52285,0 -10,4.47715 -10,10c0,5.52285 4.47715,10 10,10z';
        let path = new paper.CompoundPath(pathData);
        path.fillColor = 'black';
    
    }
    function CompoundPath2() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        // Set the name of the path:
        path.name = 'example';
        
        // Create a group and add path to it as a child:
        let group = new paper.Group();
        group.addChild(path);
        
        // The path can be accessed by name:
        group.getItem('example').fillColor = 'red';
    
    }
    function CompoundPath3() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 30
        });
        circle.style = {
            fillColor: 'blue',
            strokeColor: 'red',
            strokeWidth: 5
        };
    
    }
    function CompoundPath4() {
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        let path2 = new paper.Path.Circle({
            center: new paper.Point(180, 50),
            radius: 20
        });
        
        // Copy the path style of path:
        path2.style = path.style;
    
    }
    function CompoundPath5() {
        
        let myStyle = {
            fillColor: 'red',
            strokeColor: 'blue',
            strokeWidth: 4
        };
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 30
        });
        path.style = myStyle;
        
        let path2 = new paper.Path.Circle({
            center: new paper.Point(150, 50),
            radius: 20
        });
        path2.style = myStyle;
    
    }
    function CompoundPath6() {
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Hide the path:
        path.visible = false;
    
    }
    function CompoundPath7() {
        
        // Create a white rectangle in the background
        // with the same dimensions as the paper.view:
        let background = new paper.Path.Rectangle(paper.view.bounds);
        background.fillColor = 'white';
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'red'
        });
        
        let circle2 = new paper.Path.Circle({
            center: new paper.Point(120, 50),
            radius: 35,
            fillColor: 'blue'
        });
        
        // Set the blend mode of circle2:
        circle2.blendMode = 'multiply';
    
    }
    function CompoundPath8() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'red'
        });
        
        let circle2 = new paper.Path.Circle({
            center: new paper.Point(120, 50),
            radius: 35,
            fillColor: 'blue',
            strokeColor: 'green',
            strokeWidth: 10
        });
        
        // Make circle2 50% transparent:
        circle2.opacity = 0.5;
    
    }
    function CompoundPath9() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        path.selected = true; // Select the path
    
    }
    function CompoundPath10() {
        
        // Create a circle at position { x: 10, y: 10 }
        let circle = new paper.Path.Circle({
            center: new paper.Point(10, 10),
            radius: 10,
            fillColor: 'red'
        });
        
        // Move the circle to { x: 20, y: 20 }
        circle.position = new paper.Point(20, 20);
        
        // Move the circle 100 points to the right and 50 points down
        circle.position = circle.position.add(new paper.Point(100, 50));
    
    }
    function CompoundPath11() {
        
        // Create a circle at position { x: 20, y: 20 }
        let circle = new paper.Path.Circle({
            center: new paper.Point(20, 20),
            radius: 10,
            fillColor: 'red'
        });
        
        // Move the circle 100 points to the right
        circle.position.x += 100;
    
    }
    function CompoundPath12() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Create a group and move the path into it:
        let group = new paper.Group();
        group.addChild(path);
        
        // Access the path through the group's children array:
        group.children[0].fillColor = 'red';
    
    }
    function CompoundPath13() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        // Set the name of the path:
        path.name = 'example';
        
        // Create a group and move the path into it:
        let group = new paper.Group();
        group.addChild(path);
        
        // The path can be accessed by name:
        group.getItem('example').fillColor = 'orange';
    
    }
    function CompoundPath14() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        let group = new paper.Group();
        group.children = [path];
        
        // The path is the first child of the group:
        group.firstChild.fillColor = 'green';
    
    }
    function CompoundPath15() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Set its stroke color to RGB red:
        circle.strokeColor = new paper.Color(1, 0, 0);
    
    }
    function CompoundPath16() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            strokeColor: 'red'
        });
        
        // Set its stroke width to 10:
        circle.strokeWidth = 10;
    
    }
    function CompoundPath17() {
        
        let line = new paper.Path({
            segments: [[80, 50], [420, 50]],
            strokeColor: 'black',
            strokeWidth: 20,
            selected: true
        });
        
        // Set the stroke cap of the line to be round:
        line.strokeCap = 'round';
        
        // Copy the path and set its stroke cap to be square:
        let line2 = line.clone();
        line2.position.y += 50;
        line2.strokeCap = 'square';
        
        // Make another copy and set its stroke cap to be butt:
        line2 = line.clone();
        line2.position.y += 100;
        line2.strokeCap = 'butt';
    
    }
    function CompoundPath18() {
        
        let path = new paper.Path({
            segments: [[80, 100], [120, 40], [160, 100]],
            strokeColor: 'black',
            strokeWidth: 20,
            // Select the path, in order to see where the stroke is formed:
            selected: true
        });
        
        let path2 = path.clone();
        path2.position.x += path2.bounds.width * 1.5;
        path2.strokeJoin = 'round';
        
        let path3 = path2.clone();
        path3.position.x += path3.bounds.width * 1.5;
        path3.strokeJoin = 'bevel';
    
    }
    function CompoundPath19() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 40,
            strokeWidth: 2,
            strokeColor: 'black'
        });
        
        // Set the dashed stroke to [10pt dash, 4pt gap]:
        path.dashArray = [10, 4];
    
    }
    function CompoundPath20() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Set the fill color of the circle to RGB red:
        circle.fillColor = new paper.Color(1, 0, 0);
    
    }
    function CompoundPath21() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'white',
            // Set the shadow color of the circle to RGB black:
            shadowColor: new paper.Color(0, 0, 0),
            // Set the shadow blur radius to 12:
            shadowBlur: 12,
            // Offset the shadow by { x: 5, y: 5 }
            shadowOffset: new paper.Point(5, 5)
        });
    
    }
    function CompoundPath22() {
        
        // Create a rectangle shaped path with its top left point at:
        // {x: 50, y: 25} and a size of {width: 50, height: 50}
        let path = new paper.Path.Rectangle(new paper.Point(50, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        path.onFrame = function(this:paper.Path) {
            // Every frame, rotate the path by 3 degrees:
            this.rotate(3);
        }
    
    }
    function CompoundPath23() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is pressed on the item,
        // set its fill color to red:
        path.onMouseDown = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function CompoundPath24() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse is pressed on the item, remove it:
            path.onMouseDown = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function CompoundPath25() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 50,
            fillColor: 'blue'
        });
        
        // Install a drag event handler that moves the path along.
        path.onMouseDrag = function(this:paper.Path, event:paper.MouseEvent) {
            path.position = path.position.add(event.delta);
        }
    
    }
    function CompoundPath26() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is released over the item,
        // set its fill color to red:
        path.onMouseUp = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function CompoundPath27() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is clicked on the item,
        // set its fill color to red:
        path.onClick = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function CompoundPath28() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse clicks on the item, remove it:
            path.onClick = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function CompoundPath29() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is double clicked on the item,
        // set its fill color to red:
        path.onDoubleClick = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function CompoundPath30() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse is double clicked on the item, remove it:
            path.onDoubleClick = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function CompoundPath31() {
        
        // Create a circle shaped path at the center of the paper.view:
            let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
            });
        
        // When the mouse moves on top of the item, set its opacity
        // to a random value between 0 and 1:
        path.onMouseMove = function(this:paper.Path) {
            this.opacity = Math.random();
        }
    
    }
    function CompoundPath32() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse enters the item, set its fill color to red:
        path.onMouseEnter = function(this:paper.Path) {
            this.fillColor = 'red';
        }
        
        // When the mouse leaves the item, set its fill color to black:
        path.onMouseLeave = function(this:paper.Path) {
            this.fillColor = 'black';
        }
    
    }
    function CompoundPath33() {
        
        function enter(this:paper.Path, event:paper.MouseEvent) {
            this.fillColor = 'red';
        }
        
        function leave(this:paper.Path, event:paper.MouseEvent) {
            this.fillColor = 'black';
        }
        
        // When the mouse is pressed:
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the position of the mouse:
            let path = new paper.Path.Circle(event.point, 25);
            path.fillColor = 'black';
        
            // When the mouse enters the item, set its fill color to red:
            path.onMouseEnter = enter;
        
            // When the mouse leaves the item, set its fill color to black:
            path.onMouseLeave = leave;
        }
    
    }
    function CompoundPath34() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse leaves the item, set its fill color to red:
        path.onMouseLeave = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function CompoundPath35() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        circle.set({
            strokeColor: 'red',
            strokeWidth: 10,
            fillColor: 'black',
            selected: true
        });
    
    }
    function CompoundPath36() {
        
        let circle = new paper.Path.Circle({
            center: [50, 50],
            radius: 10,
            fillColor: 'red'
        });
        
        // Make 20 copies of the circle:
        for (let i = 0; i < 20; i++) {
            let copy = circle.clone();
        
            // Distribute the copies horizontally, so we can see them:
            copy.position.x += i * copy.bounds.width;
        }
    
    }
    function CompoundPath37() {
        
        let circle = new paper.Path.Circle({
            center: [50, 50],
            radius: 5,
            fillColor: 'red'
        });
        
        // Create a rasterized version of the path:
        let raster = circle.rasterize();
        
        // Move it 100pt to the right:
        raster.position.x += 100;
        
        // Scale the path and the raster by 300%, so we can compare them:
        circle.scale(5);
        raster.scale(5);
    
    }
    function CompoundPath38() {
        
        let path = new paper.Path.Star({
            center: [50, 50],
            points: 12,
            radius1: 20,
            radius2: 40,
            fillColor: 'black'
        });
        
        // Whenever the user presses the mouse:
        function onMouseDown(event:paper.ToolEvent) {
            // If the position of the mouse is within the path,
            // set its fill color to red, otherwise set it to
            // black:
            if (path.contains(event.point)) {
                path.fillColor = 'red';
            } else {
                path.fillColor = 'black';
            }
        }
    
    }
    function CompoundPath39() {
        
        // Create a rectangle shaped path with its top left
        // point at {x: 80, y: 25} and a size of {width: 50, height: 50}:
        let path = new paper.Path.Rectangle(new paper.Point(80, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        // Rotate the path by 30 degrees:
        path.rotate(30);
    
    }
    function CompoundPath40() {
        
        // Create a rectangle shaped path with its top left
        // point at {x: 175, y: 50} and a size of {width: 100, height: 100}:
        let topLeft = new paper.Point(175, 50);
        let size = new paper.Size(100, 100);
        let path = new paper.Path.Rectangle(topLeft, size);
        path.fillColor = 'black';
        
        // Draw a circle shaped path in the center of the paper.view,
        // to show the rotation point:
        let circle = new paper.Path.Circle({
            center: paper.view.center,
            radius: 5,
            fillColor: 'white'
        });
        
        // Each frame rotate the path 3 degrees around the center point
        // of the paper.view:
        function onFrame(event:paper.IFrameEvent) {
            path.rotate(3, paper.view.center);
        }
    
    }
    function CompoundPath41() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path by 150% from its center point
        circle.scale(1.5);
    
    }
    function CompoundPath42() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path 150% from its bottom left corner
        circle.scale(1.5, circle.bounds.bottomLeft);
    
    }
    function CompoundPath43() {
        
        // Create a circle shaped path at { x: 100, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [100, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path horizontally by 300%
        circle.scale(3, 1);
    
    }
    function CompoundPath44() {
        
        // Create a rectangle shaped path with its top left corner
        // at {x: 80, y: 25} and a size of {width: 75, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [80, 25],
            size: [75, 50],
            fillColor: 'black'
        });
        
        // Create a circle shaped path with its center at {x: 80, y: 50}
        // and a radius of 30.
        let circlePath = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the circlePath to the bounding rectangle of
        // the rectangular path:
        circlePath.fitBounds(path.bounds);
    
    }
    function CompoundPath45() {
        
        // Create a rectangle shaped path with its top left corner
        // at {x: 80, y: 25} and a size of {width: 75, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [80, 25],
            size: [75, 50],
            fillColor: 'black'
        });
        
        // Create a circle shaped path with its center at {x: 80, y: 50}
        // and a radius of 30.
        let circlePath = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the circlePath to the bounding rectangle of
        // the rectangular path:
        circlePath.fitBounds(path.bounds, true);
    
    }
    function CompoundPath46() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the path to the bounding rectangle of the paper.view:
        path.fitBounds(paper.view.bounds);
    
    }
    function CompoundPath47() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse enters the item, set its fill color to red:
        path.on('mouseenter', function(this:paper.Path) {
            this.fillColor = 'red';
        });
        
        // When the mouse leaves the item, set its fill color to black:
        path.on('mouseleave', function(this:paper.Path) {
            this.fillColor = 'black';
        });
    
    }
    function CompoundPath48() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25
        });
        path.fillColor = 'black';
        
        // When the mouse enters the item, set its fill color to red:
        path.on({
            mouseenter: function(this:paper.Item, event:paper.MouseEvent) {
                this.fillColor = 'red';
            },
            mouseleave: function(this:paper.Item, event:paper.MouseEvent) {
                this.fillColor = 'black';
            }
        });
    
    }
    function CompoundPath49() {
        
        let pathHandlers = {
            mouseenter: function(this:paper.Item, event:paper.MouseEvent) {
                this.fillColor = 'red';
            },
            mouseleave: function(this:paper.Item, event:paper.MouseEvent) {
                this.fillColor = 'black';
            }
        }
        
        // When the mouse is pressed:
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the position of the mouse:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 25,
                fillColor: 'black'
            });
        
            // Attach the handers inside the object literal to the path:
            path.on(pathHandlers);
        }
    
    }
    function CompoundPath50() {
        
        function onMouseDrag(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path on the next onMouseDrag or onMouseDown event:
            path.removeOn({
                drag: true,
                down: true
            });
        }
    
    }
    function CompoundPath51() {
        
        function onMouseMove(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // On the next move event, automatically remove the path:
            path.removeOnMove();
        }
    
    }
    function CompoundPath52() {
        
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path, next time the mouse is pressed:
            path.removeOnDown();
        }
    
    }
    function CompoundPath53() {
        
        function onMouseDrag(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // On the next drag event, automatically remove the path:
            path.removeOnDrag();
        }
    
    }
    function CompoundPath54() {
        
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path, when the mouse is released:
            path.removeOnUp();
        }
    
    }
    function CompoundPath55() {
        
        let path = new paper.Path.Rectangle(new paper.Point(30, 25), new paper.Size(50, 50));
        path.strokeColor = 'black';
        
        let secondPath = path.clone();
        let intersectionGroup = new paper.Group();
        
        function onFrame(event:paper.IFrameEvent) {
            secondPath.rotate(1);
        
            let intersections = path.getIntersections(secondPath);
            intersectionGroup.removeChildren();
        
            for (let i = 0; i < intersections.length; i++) {
                let intersectionPath = new paper.Path.Circle({
                    center: intersections[i].point,
                    radius: 4,
                    fillColor: 'red',
                    parent: intersectionGroup
                });
            }
        }
    
    }
    function CompoundPath56() {
        
        let star = new paper.Path.Star({
            center: paper.view.center,
            points: 10,
            radius1: 30,
            radius2: 60,
            strokeColor: 'black'
        });
        
        let circle = new paper.Path.Circle({
            center: paper.view.center,
            radius: 3,
            fillColor: 'red'
        });
        
        function onMouseMove(event:paper.ToolEvent) {
            // Get the nearest point from the mouse position
            // to the star shaped path:
            let nearestPoint = star.getNearestPoint(event.point);
        
            // Move the red circle to the nearest point:
            circle.position = nearestPoint;
        }
    
    }
    function CompoundPath57() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Select the path, so we can inspect its segments:
        path.selected = true;
        
        // Create a copy of the path and move it by 150 points:
        let copy = path.clone();
        copy.position.x += 150;
        
        // Flatten the copied path, with a maximum error of 4 points:
        copy.flatten(4);
    
    }
    function CompoundPath58() {
        
        // Create a rectangular path with its top-left point at
        // {x: 30, y: 25} and a size of {width: 50, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [30, 25],
            size: [50, 50],
            strokeColor: 'black',
        });
        
        // Select the path, so we can see its handles:
        path.fullySelected = true;
        
        // Create a copy of the path and move it 100 to the right:
        let copy = path.clone();
        copy.position.x += 100;
        
        // Smooth the segments of the copy:
        copy.smooth({ type: 'continuous' });
    
    }
    function CompoundPath59() {
        
        let path = new paper.Path();
        path.strokeColor = 'black';
        
        path.add(new paper.Point(30, 50));
        
        let y = 5;
        let x = 3;
        
        for (let i = 0; i < 28; i++) {
            y *= -1.1;
            x *= 1.1;
            path.lineBy(new paper.Point(x, y));
        }
        
        // Create a copy of the path and move it 100 down:
        let copy = path.clone();
        copy.position.y += 120;
        
        // Select the path, so we can see its handles:
        copy.fullySelected = true;
        
        // Smooth the path using centripetal Catmull-Rom splines:
        copy.smooth({ type: 'catmull-rom', factor: 0.5 });
    
    }
    function CompoundPath60() {
        
        // Create 5 rectangles, next to each other:
        let paths:paper.Path[] = [];
        for (let i = 0; i < 5; i++) {
            paths.push(new paper.Path.Rectangle({
                point: [30 + i * 100, 30],
                size: [50, 50],
                fullySelected: true
            }));
        }
        // Smooth a range, using segments:
        paths[1].smooth({
            type: 'continuous',
            from: paths[1].segments[0],
            to: paths[1].segments[2]
        });
        
        // Smooth a range, using curves:
        paths[2].smooth({
            type: 'continuous',
            from: paths[2].curves[0],
            to: paths[2].curves[1]
        });
        
        // Smooth a range, using indices:
        paths[3].smooth({ type: 'continuous', from: 0, to: 2 });
        
        // Smooth a range, using negative indices:
        paths[4].smooth({ type: 'continuous', from: -1, to: 1 });
    
    }
    function CompoundPath61() {
        
        let path: paper.Path | null;
        function onMouseDown(event:paper.ToolEvent) {
            // If we already made a path before, deselect it:
            if (path) {
                path.selected = false;
            }
        
            // Create a new path and add the position of the mouse
            // as its first segment. Select it, so we can see the
            // segment points:
            path = new paper.Path({
                segments: [event.point],
                strokeColor: 'black',
                selected: true
            });
        }
        
        function onMouseDrag(event:paper.ToolEvent) {
            // On every drag event, add a segment to the path
            // at the position of the mouse:
            if(path){
                path.add(event.point);
            }
        }
        
        function onMouseUp(event:paper.ToolEvent) {
            // When the mouse is released, simplify the path:
            if(path){
                path.simplify();
                path.selected = true;
            }
        }
    
    }
    function CompoundPath62() {
        
        let path = new paper.Path();
        path.strokeColor = 'black';
        
        let firstPoint = new paper.Point(30, 75);
        path.add(firstPoint);
        
        // The point through which we will create the arc:
        let throughPoint = new paper.Point(40, 40);
        
        // The point at which the arc will end:
        let toPoint = new paper.Point(130, 75);
        
        // Draw an arc through 'throughPoint' to 'toPoint'
        path.arcTo(throughPoint, toPoint);
        
        // Add a red circle shaped path at the position of 'throughPoint':
        let circle = new paper.Path.Circle(throughPoint, 3);
        circle.fillColor = 'red';
    
    }
    function CompoundPath63() {
        
        let myPath: paper.Path | null;
        function onMouseDrag(event:paper.ToolEvent) {
            // If we created a path before, remove it:
            if (myPath) {
                myPath.remove();
            }
        
            // Create a new path and add a segment point to it
            // at {x: 150, y: 150):
            myPath = new paper.Path();
            myPath.add(new paper.Point(150, 150));
        
            // Draw an arc through the position of the mouse to 'toPoint'
            let toPoint = new paper.Point(350, 150);
            myPath.arcTo(event.point, toPoint);
        
            // Select the path, so we can see its segments:
            myPath.selected = true;
        }
        
        // When the mouse is released, deselect the path
        // and fill it with black.
        function onMouseUp(event:paper.ToolEvent) {
            if(myPath){
                myPath.selected = false;
                myPath.fillColor = 'black';
            }
        }
    
    }
    function CompoundPath64() {
        
        let path = new paper.Path();
        path.strokeColor = 'black';
        
        path.add(new paper.Point(30, 75));
        path.arcTo(new paper.Point(130, 75));
        
        let path2 = new paper.Path();
        path2.strokeColor = 'red';
        path2.add(new paper.Point(180, 25));
        
        // To draw an arc in anticlockwise direction,
        // we pass `false` as the second argument to arcTo:
        path2.arcTo(new paper.Point(280, 25), false);
    
    }
    function CompoundPath65() {
        
        let myPath:paper.Path;
        
        // The mouse has to move at least 20 points before
        // the next mouse drag event is fired:
        paper.tool.minDistance = 20;
        
        // When the user clicks, create a new path and add
        // the current mouse position to it as its first segment:
        function onMouseDown(event:paper.ToolEvent) {
            myPath = new paper.Path();
            myPath.strokeColor = 'black';
            myPath.add(event.point);
        }
        
        // On each mouse drag event, draw an arc to the current
        // position of the mouse:
        function onMouseDrag(event:paper.ToolEvent) {
            myPath.arcTo(event.point);
        }
    
    }
    function CompoundPath66() {
        
        let myPath: paper.Path | null;
        function onMouseMove(event:paper.ToolEvent) {
            // If we created a path before, remove it:
            if (myPath) {
                myPath.remove();
            }
        
            // Create a new path and add a segment point to it
            // at {x: 150, y: 150):
            myPath = new paper.Path();
            myPath.add(new paper.Point(150, 150));
        
            // Draw a curve through the position of the mouse to 'toPoint'
            let toPoint = new paper.Point(350, 150);
            myPath.curveTo(event.point, toPoint);
        
            // Select the path, so we can see its segments:
            myPath.selected = true;
        }
    
    }
    function CompoundPath67() {
        
        let path = new paper.Path();
        path.strokeColor = 'black';
        
        // Add a segment at {x: 50, y: 50}
        path.add(new paper.Point(25, 25));
        
        // Add a segment relative to the last segment of the path.
        // 50 in x direction and 0 in y direction, becomes {x: 75, y: 25}
        path.lineBy(new paper.Point(50, 0));
        
        // 0 in x direction and 50 in y direction, becomes {x: 75, y: 75}
        path.lineBy(new paper.Point(0, 50));
    
    }
    function CompoundPath68() {
        
        let path = new paper.Path();
        path.strokeColor = 'black';
        
        // Add the first segment at {x: 50, y: 50}
        path.add(paper.view.center);
        
        // Loop 500 times:
        for (let i = 0; i < 500; i++) {
            // Create a vector with an ever increasing length
            // and an angle in increments of 45 degrees
            let vector = new paper.Point({
                angle: i * 45,
                length: i / 2
            });
            // Add the vector relatively to the last segment point:
            path.lineBy(vector);
        }
        
        // Smooth the handles of the path:
        path.smooth();
        
        // Uncomment the following line and click on 'run' to see
        // the construction of the path:
        // path.selected = true;
    
    }
    function Gradient0() {
        
        // Define two points which we will be using to construct
        // the path and to position the gradient color:
        let topLeft = paper.view.center.subtract(new paper.Point([80, 80]));
        let bottomRight = paper.view.center.add(new paper.Point([80, 80]));
        
        // Create a rectangle shaped path between
        // the topLeft and bottomRight points:
        let path = new paper.Path.Rectangle({
            topLeft: topLeft,
            bottomRight: bottomRight,
            // Fill the path with a gradient of three color stops
            // that runs between the two points we defined earlier:
            fillColor: {
                gradient: {
                    stops: ['yellow', 'red', 'blue']
                },
                origin: topLeft,
                destination: bottomRight
            }
        });
    
    }
    function Gradient1() {
        
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: paper.view.bounds.height * 0.4
        });
        
        // Fill the path with a radial gradient color with three stops:
        // yellow from 0% to 5%, mix between red from 5% to 20%,
        // mix between red and black from 20% to 100%:
        path.fillColor = new paper.Color({
            gradient: new paper.Gradient({
                stops: [['yellow', 0.05], ['red', 0.2], ['black', 1]],
                radial: true
            }),
            origin: path.position,
            destination: path.bounds.rightCenter
        });
    
    }
    function GradientStop0() {
        
        // Create a circle shaped path at the center of the paper.view,
        // using 40% of the height of the paper.view as its radius
        // and fill it with a radial gradient color:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: paper.view.bounds.height * 0.4
        });
        
        path.fillColor = new paper.Color({
            gradient: new paper.Gradient({
                stops: [['yellow', 0.05], ['red', 0.2], ['black', 1]],
                radial: true
            }),
            origin: path.position,
            destination: path.bounds.rightCenter
        });
        
        let gradient = path.fillColor.gradient;
        
        // This function is called each frame of the animation:
        function onFrame(event:paper.IFrameEvent) {
            if(gradient){
                let blackStop = gradient.stops[2];
                // Animate the offset between 0.7 and 0.9:
                blackStop.offset = Math.sin(event.time * 5) * 0.1 + 0.8;
            
                // Animate the offset between 0.2 and 0.4
                let redStop = gradient.stops[1];
                redStop.offset = Math.sin(event.time * 3) * 0.1 + 0.3;
            }
        }
    
    }
    function GradientStop1() {
        
        // Create a circle shaped path at the center of the paper.view,
        // using 40% of the height of the paper.view as its radius
        // and fill it with a radial gradient color:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: paper.view.bounds.height * 0.4
        });
        
        path.fillColor = new paper.Color({
            gradient: new paper.Gradient({
                stops: [['yellow', 0.05], ['red', 0.2], ['black', 1]],
                radial: true
            }),
            origin: path.position,
            destination: path.bounds.rightCenter
        });
        
        let redStop:paper.GradientStop;
        let blackStop:paper.GradientStop;
        if(path.fillColor.gradient){
            redStop = path.fillColor.gradient.stops[1];
            blackStop = path.fillColor.gradient.stops[2];
        }
        
        // This function is called each frame of the animation:
        function onFrame(event:paper.IFrameEvent) {
            // Animate the offset between 0.7 and 0.9:
            blackStop.offset = Math.sin(event.time * 5) * 0.1 + 0.8;
        
            // Animate the offset between 0.2 and 0.4
            redStop.offset = Math.sin(event.time * 3) * 0.1 + 0.3;
        }
    
    }
    function Group0() {
        
        let path = new paper.Path([new paper.Point([100, 100]), new paper.Point([100, 200])]);
        let path2 = new paper.Path([new paper.Point([50, 150]), new paper.Point([150, 150])]);
        
        // Create a group from the two paths:
        let group = new paper.Group([path, path2]);
        
        // Set the stroke color of all items in the group:
        group.strokeColor = 'black';
        
        // Move the group to the center of the paper.view:
        group.position = paper.view.center;
    
    }
    function Group1() {
        
        let group = new paper.Group();
        
        function onMouseDown(event:paper.ToolEvent) {
            // Create a new circle shaped path at the position
            // of the mouse:
            let path = new paper.Path.Circle(event.point, 5);
            path.fillColor = 'black';
        
            // Add the path to the group's children list:
            group.addChild(path);
        }
        
        function onFrame(event:paper.IFrameEvent) {
            // Rotate the group by 1 degree from
            // the centerpoint of the paper.view:
            group.rotate(1, paper.view.center);
        }
    
    }
    function Group2() {
        
        let path = new paper.Path([new paper.Point([100, 100]), new paper.Point([100, 200])]);
        let path2 = new paper.Path([new paper.Point([50, 150]), new paper.Point([150, 150])]);
        
        // Create a group from the two paths:
        let group = new paper.Group({
            children: [path, path2],
            // Set the stroke color of all items in the group:
            strokeColor: 'black',
            // Move the group to the center of the paper.view:
            position: paper.view.center
        });
    
    }
    function Group3() {
        
        let star = new paper.Path.Star({
            center: paper.view.center,
            points: 6,
            radius1: 20,
            radius2: 40,
            fillColor: 'red'
        });
        
        let circle = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            strokeColor: 'black'
        });
        
        // Create a group of the two items and clip it:
        let group = new paper.Group([circle, star]);
        group.clipped = true;
        
        // Lets animate the circle:
        function onFrame(event:paper.IFrameEvent) {
            let offset = Math.sin(event.count / 30) * 30;
            circle.position.x = paper.view.center.x + offset;
        }
    
    }
    function Group4() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        // Set the name of the path:
        path.name = 'example';
        
        // Create a group and add path to it as a child:
        let group = new paper.Group();
        group.addChild(path);
        
        // The path can be accessed by name:
        group.getItem('example').fillColor = 'red';
    
    }
    function Group5() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 30
        });
        circle.style = {
            fillColor: 'blue',
            strokeColor: 'red',
            strokeWidth: 5
        };
    
    }
    function Group6() {
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        let path2 = new paper.Path.Circle({
            center: new paper.Point(180, 50),
            radius: 20
        });
        
        // Copy the path style of path:
        path2.style = path.style;
    
    }
    function Group7() {
        
        let myStyle = {
            fillColor: 'red',
            strokeColor: 'blue',
            strokeWidth: 4
        };
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 30
        });
        path.style = myStyle;
        
        let path2 = new paper.Path.Circle({
            center: new paper.Point(150, 50),
            radius: 20
        });
        path2.style = myStyle;
    
    }
    function Group8() {
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Hide the path:
        path.visible = false;
    
    }
    function Group9() {
        
        // Create a white rectangle in the background
        // with the same dimensions as the paper.view:
        let background = new paper.Path.Rectangle(paper.view.bounds);
        background.fillColor = 'white';
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'red'
        });
        
        let circle2 = new paper.Path.Circle({
            center: new paper.Point(120, 50),
            radius: 35,
            fillColor: 'blue'
        });
        
        // Set the blend mode of circle2:
        circle2.blendMode = 'multiply';
    
    }
    function Group10() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'red'
        });
        
        let circle2 = new paper.Path.Circle({
            center: new paper.Point(120, 50),
            radius: 35,
            fillColor: 'blue',
            strokeColor: 'green',
            strokeWidth: 10
        });
        
        // Make circle2 50% transparent:
        circle2.opacity = 0.5;
    
    }
    function Group11() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        path.selected = true; // Select the path
    
    }
    function Group12() {
        
        // Create a circle at position { x: 10, y: 10 }
        let circle = new paper.Path.Circle({
            center: new paper.Point(10, 10),
            radius: 10,
            fillColor: 'red'
        });
        
        // Move the circle to { x: 20, y: 20 }
        circle.position = new paper.Point(20, 20);
        
        // Move the circle 100 points to the right and 50 points down
        circle.position = circle.position.add(new paper.Point(100, 50));
    
    }
    function Group13() {
        
        // Create a circle at position { x: 20, y: 20 }
        let circle = new paper.Path.Circle({
            center: new paper.Point(20, 20),
            radius: 10,
            fillColor: 'red'
        });
        
        // Move the circle 100 points to the right
        circle.position.x += 100;
    
    }
    function Group14() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Create a group and move the path into it:
        let group = new paper.Group();
        group.addChild(path);
        
        // Access the path through the group's children array:
        group.children[0].fillColor = 'red';
    
    }
    function Group15() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        // Set the name of the path:
        path.name = 'example';
        
        // Create a group and move the path into it:
        let group = new paper.Group();
        group.addChild(path);
        
        // The path can be accessed by name:
        group.getItem('example').fillColor = 'orange';
    
    }
    function Group16() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        let group = new paper.Group();
        group.children = [path];
        
        // The path is the first child of the group:
        group.firstChild.fillColor = 'green';
    
    }
    function Group17() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Set its stroke color to RGB red:
        circle.strokeColor = new paper.Color(1, 0, 0);
    
    }
    function Group18() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            strokeColor: 'red'
        });
        
        // Set its stroke width to 10:
        circle.strokeWidth = 10;
    
    }
    function Group19() {
        
        let line = new paper.Path({
            segments: [[80, 50], [420, 50]],
            strokeColor: 'black',
            strokeWidth: 20,
            selected: true
        });
        
        // Set the stroke cap of the line to be round:
        line.strokeCap = 'round';
        
        // Copy the path and set its stroke cap to be square:
        let line2 = line.clone();
        line2.position.y += 50;
        line2.strokeCap = 'square';
        
        // Make another copy and set its stroke cap to be butt:
        line2 = line.clone();
        line2.position.y += 100;
        line2.strokeCap = 'butt';
    
    }
    function Group20() {
        
        let path = new paper.Path({
            segments: [[80, 100], [120, 40], [160, 100]],
            strokeColor: 'black',
            strokeWidth: 20,
            // Select the path, in order to see where the stroke is formed:
            selected: true
        });
        
        let path2 = path.clone();
        path2.position.x += path2.bounds.width * 1.5;
        path2.strokeJoin = 'round';
        
        let path3 = path2.clone();
        path3.position.x += path3.bounds.width * 1.5;
        path3.strokeJoin = 'bevel';
    
    }
    function Group21() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 40,
            strokeWidth: 2,
            strokeColor: 'black'
        });
        
        // Set the dashed stroke to [10pt dash, 4pt gap]:
        path.dashArray = [10, 4];
    
    }
    function Group22() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Set the fill color of the circle to RGB red:
        circle.fillColor = new paper.Color(1, 0, 0);
    
    }
    function Group23() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'white',
            // Set the shadow color of the circle to RGB black:
            shadowColor: new paper.Color(0, 0, 0),
            // Set the shadow blur radius to 12:
            shadowBlur: 12,
            // Offset the shadow by { x: 5, y: 5 }
            shadowOffset: new paper.Point(5, 5)
        });
    
    }
    function Group24() {
        
        // Create a rectangle shaped path with its top left point at:
        // {x: 50, y: 25} and a size of {width: 50, height: 50}
        let path = new paper.Path.Rectangle(new paper.Point(50, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        path.onFrame = function(this:paper.Path) {
            // Every frame, rotate the path by 3 degrees:
            this.rotate(3);
        }
    
    }
    function Group25() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is pressed on the item,
        // set its fill color to red:
        path.onMouseDown = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Group26() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse is pressed on the item, remove it:
            path.onMouseDown = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function Group27() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 50,
            fillColor: 'blue'
        });
        
        // Install a drag event handler that moves the path along.
        path.onMouseDrag = function(this:paper.Path, event:paper.MouseEvent) {
            path.position = path.position.add(event.delta);
        }
    
    }
    function Group28() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is released over the item,
        // set its fill color to red:
        path.onMouseUp = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Group29() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is clicked on the item,
        // set its fill color to red:
        path.onClick = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Group30() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse clicks on the item, remove it:
            path.onClick = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function Group31() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is double clicked on the item,
        // set its fill color to red:
        path.onDoubleClick = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Group32() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse is double clicked on the item, remove it:
            path.onDoubleClick = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function Group33() {
        
        // Create a circle shaped path at the center of the paper.view:
            let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
            });
        
        // When the mouse moves on top of the item, set its opacity
        // to a random value between 0 and 1:
        path.onMouseMove = function(this:paper.Path) {
            this.opacity = Math.random();
        }
    
    }
    function Group34() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse enters the item, set its fill color to red:
        path.onMouseEnter = function(this:paper.Path) {
            this.fillColor = 'red';
        }
        
        // When the mouse leaves the item, set its fill color to black:
        path.onMouseLeave = function(this:paper.Path) {
            this.fillColor = 'black';
        }
    
    }
    function Group35() {
        
        function enter(this:paper.Path, event:paper.MouseEvent) {
            this.fillColor = 'red';
        }
        
        function leave(this:paper.Path, event:paper.MouseEvent) {
            this.fillColor = 'black';
        }
        
        // When the mouse is pressed:
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the position of the mouse:
            let path = new paper.Path.Circle(event.point, 25);
            path.fillColor = 'black';
        
            // When the mouse enters the item, set its fill color to red:
            path.onMouseEnter = enter;
        
            // When the mouse leaves the item, set its fill color to black:
            path.onMouseLeave = leave;
        }
    
    }
    function Group36() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse leaves the item, set its fill color to red:
        path.onMouseLeave = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Group37() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        circle.set({
            strokeColor: 'red',
            strokeWidth: 10,
            fillColor: 'black',
            selected: true
        });
    
    }
    function Group38() {
        
        let circle = new paper.Path.Circle({
            center: [50, 50],
            radius: 10,
            fillColor: 'red'
        });
        
        // Make 20 copies of the circle:
        for (let i = 0; i < 20; i++) {
            let copy = circle.clone();
        
            // Distribute the copies horizontally, so we can see them:
            copy.position.x += i * copy.bounds.width;
        }
    
    }
    function Group39() {
        
        let circle = new paper.Path.Circle({
            center: [50, 50],
            radius: 5,
            fillColor: 'red'
        });
        
        // Create a rasterized version of the path:
        let raster = circle.rasterize();
        
        // Move it 100pt to the right:
        raster.position.x += 100;
        
        // Scale the path and the raster by 300%, so we can compare them:
        circle.scale(5);
        raster.scale(5);
    
    }
    function Group40() {
        
        let path = new paper.Path.Star({
            center: [50, 50],
            points: 12,
            radius1: 20,
            radius2: 40,
            fillColor: 'black'
        });
        
        // Whenever the user presses the mouse:
        function onMouseDown(event:paper.ToolEvent) {
            // If the position of the mouse is within the path,
            // set its fill color to red, otherwise set it to
            // black:
            if (path.contains(event.point)) {
                path.fillColor = 'red';
            } else {
                path.fillColor = 'black';
            }
        }
    
    }
    function Group41() {
        
        // Create a rectangle shaped path with its top left
        // point at {x: 80, y: 25} and a size of {width: 50, height: 50}:
        let path = new paper.Path.Rectangle(new paper.Point(80, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        // Rotate the path by 30 degrees:
        path.rotate(30);
    
    }
    function Group42() {
        
        // Create a rectangle shaped path with its top left
        // point at {x: 175, y: 50} and a size of {width: 100, height: 100}:
        let topLeft = new paper.Point(175, 50);
        let size = new paper.Size(100, 100);
        let path = new paper.Path.Rectangle(topLeft, size);
        path.fillColor = 'black';
        
        // Draw a circle shaped path in the center of the paper.view,
        // to show the rotation point:
        let circle = new paper.Path.Circle({
            center: paper.view.center,
            radius: 5,
            fillColor: 'white'
        });
        
        // Each frame rotate the path 3 degrees around the center point
        // of the paper.view:
        function onFrame(event:paper.IFrameEvent) {
            path.rotate(3, paper.view.center);
        }
    
    }
    function Group43() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path by 150% from its center point
        circle.scale(1.5);
    
    }
    function Group44() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path 150% from its bottom left corner
        circle.scale(1.5, circle.bounds.bottomLeft);
    
    }
    function Group45() {
        
        // Create a circle shaped path at { x: 100, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [100, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path horizontally by 300%
        circle.scale(3, 1);
    
    }
    function Group46() {
        
        // Create a rectangle shaped path with its top left corner
        // at {x: 80, y: 25} and a size of {width: 75, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [80, 25],
            size: [75, 50],
            fillColor: 'black'
        });
        
        // Create a circle shaped path with its center at {x: 80, y: 50}
        // and a radius of 30.
        let circlePath = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the circlePath to the bounding rectangle of
        // the rectangular path:
        circlePath.fitBounds(path.bounds);
    
    }
    function Group47() {
        
        // Create a rectangle shaped path with its top left corner
        // at {x: 80, y: 25} and a size of {width: 75, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [80, 25],
            size: [75, 50],
            fillColor: 'black'
        });
        
        // Create a circle shaped path with its center at {x: 80, y: 50}
        // and a radius of 30.
        let circlePath = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the circlePath to the bounding rectangle of
        // the rectangular path:
        circlePath.fitBounds(path.bounds, true);
    
    }
    function Group48() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the path to the bounding rectangle of the paper.view:
        path.fitBounds(paper.view.bounds);
    
    }
    function Group49() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse enters the item, set its fill color to red:
        path.on('mouseenter', function(this:paper.Path) {
            this.fillColor = 'red';
        });
        
        // When the mouse leaves the item, set its fill color to black:
        path.on('mouseleave', function(this:paper.Path) {
            this.fillColor = 'black';
        });
    
    }
    function Group50() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25
        });
        path.fillColor = 'black';
        
        // When the mouse enters the item, set its fill color to red:
        path.on({
            mouseenter: function(this:paper.Path, event:paper.MouseEvent) {
                this.fillColor = 'red';
            },
            mouseleave: function(this:paper.Path, event:paper.MouseEvent) {
                this.fillColor = 'black';
            }
        });
    
    }
    function Group51() {
        
        let pathHandlers = {
            mouseenter: function(this:paper.Path, event:paper.MouseEvent) {
                this.fillColor = 'red';
            },
            mouseleave: function(this:paper.Path, event:paper.MouseEvent) {
                this.fillColor = 'black';
            }
        }
        
        // When the mouse is pressed:
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the position of the mouse:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 25,
                fillColor: 'black'
            });
        
            // Attach the handers inside the object literal to the path:
            path.on(pathHandlers);
        }
    
    }
    function Group52() {
        
        function onMouseDrag(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path on the next onMouseDrag or onMouseDown event:
            path.removeOn({
                drag: true,
                down: true
            });
        }
    
    }
    function Group53() {
        
        function onMouseMove(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // On the next move event, automatically remove the path:
            path.removeOnMove();
        }
    
    }
    function Group54() {
        
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path, next time the mouse is pressed:
            path.removeOnDown();
        }
    
    }
    function Group55() {
        
        function onMouseDrag(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // On the next drag event, automatically remove the path:
            path.removeOnDrag();
        }
    
    }
    function Group56() {
        
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path, when the mouse is released:
            path.removeOnUp();
        }
    
    }
    function Item0() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        // Set the name of the path:
        path.name = 'example';
        
        // Create a group and add path to it as a child:
        let group = new paper.Group();
        group.addChild(path);
        
        // The path can be accessed by name:
        group.getItem('example').fillColor = 'red';
    
    }
    function Item1() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 30
        });
        circle.style = {
            fillColor: 'blue',
            strokeColor: 'red',
            strokeWidth: 5
        };
    
    }
    function Item2() {
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        let path2 = new paper.Path.Circle({
            center: new paper.Point(180, 50),
            radius: 20
        });
        
        // Copy the path style of path:
        path2.style = path.style;
    
    }
    function Item3() {
        
        let myStyle = {
            fillColor: 'red',
            strokeColor: 'blue',
            strokeWidth: 4
        };
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 30
        });
        path.style = myStyle;
        
        let path2 = new paper.Path.Circle({
            center: new paper.Point(150, 50),
            radius: 20
        });
        path2.style = myStyle;
    
    }
    function Item4() {
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Hide the path:
        path.visible = false;
    
    }
    function Item5() {
        
        // Create a white rectangle in the background
        // with the same dimensions as the paper.view:
        let background = new paper.Path.Rectangle(paper.view.bounds);
        background.fillColor = 'white';
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'red'
        });
        
        let circle2 = new paper.Path.Circle({
            center: new paper.Point(120, 50),
            radius: 35,
            fillColor: 'blue'
        });
        
        // Set the blend mode of circle2:
        circle2.blendMode = 'multiply';
    
    }
    function Item6() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'red'
        });
        
        let circle2 = new paper.Path.Circle({
            center: new paper.Point(120, 50),
            radius: 35,
            fillColor: 'blue',
            strokeColor: 'green',
            strokeWidth: 10
        });
        
        // Make circle2 50% transparent:
        circle2.opacity = 0.5;
    
    }
    function Item7() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        path.selected = true; // Select the path
    
    }
    function Item8() {
        
        // Create a circle at position { x: 10, y: 10 }
        let circle = new paper.Path.Circle({
            center: new paper.Point(10, 10),
            radius: 10,
            fillColor: 'red'
        });
        
        // Move the circle to { x: 20, y: 20 }
        circle.position = new paper.Point(20, 20);
        
        // Move the circle 100 points to the right and 50 points down
        circle.position = circle.position.add(new paper.Point(100, 50));
    
    }
    function Item9() {
        
        // Create a circle at position { x: 20, y: 20 }
        let circle = new paper.Path.Circle({
            center: new paper.Point(20, 20),
            radius: 10,
            fillColor: 'red'
        });
        
        // Move the circle 100 points to the right
        circle.position.x += 100;
    
    }
    function Item10() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Create a group and move the path into it:
        let group = new paper.Group();
        group.addChild(path);
        
        // Access the path through the group's children array:
        group.children[0].fillColor = 'red';
    
    }
    function Item11() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        // Set the name of the path:
        path.name = 'example';
        
        // Create a group and move the path into it:
        let group = new paper.Group();
        group.addChild(path);
        
        // The path can be accessed by name:
        group.getItem('example').fillColor = 'orange';
    
    }
    function Item12() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        let group = new paper.Group();
        group.children = [path];
        
        // The path is the first child of the group:
        group.firstChild.fillColor = 'green';
    
    }
    function Item13() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Set its stroke color to RGB red:
        circle.strokeColor = new paper.Color(1, 0, 0);
    
    }
    function Item14() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            strokeColor: 'red'
        });
        
        // Set its stroke width to 10:
        circle.strokeWidth = 10;
    
    }
    function Item15() {
        
        let line = new paper.Path({
            segments: [[80, 50], [420, 50]],
            strokeColor: 'black',
            strokeWidth: 20,
            selected: true
        });
        
        // Set the stroke cap of the line to be round:
        line.strokeCap = 'round';
        
        // Copy the path and set its stroke cap to be square:
        let line2 = line.clone();
        line2.position.y += 50;
        line2.strokeCap = 'square';
        
        // Make another copy and set its stroke cap to be butt:
        line2 = line.clone();
        line2.position.y += 100;
        line2.strokeCap = 'butt';
    
    }
    function Item16() {
        
        let path = new paper.Path({
            segments: [[80, 100], [120, 40], [160, 100]],
            strokeColor: 'black',
            strokeWidth: 20,
            // Select the path, in order to see where the stroke is formed:
            selected: true
        });
        
        let path2 = path.clone();
        path2.position.x += path2.bounds.width * 1.5;
        path2.strokeJoin = 'round';
        
        let path3 = path2.clone();
        path3.position.x += path3.bounds.width * 1.5;
        path3.strokeJoin = 'bevel';
    
    }
    function Item17() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 40,
            strokeWidth: 2,
            strokeColor: 'black'
        });
        
        // Set the dashed stroke to [10pt dash, 4pt gap]:
        path.dashArray = [10, 4];
    
    }
    function Item18() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Set the fill color of the circle to RGB red:
        circle.fillColor = new paper.Color(1, 0, 0);
    
    }
    function Item19() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'white',
            // Set the shadow color of the circle to RGB black:
            shadowColor: new paper.Color(0, 0, 0),
            // Set the shadow blur radius to 12:
            shadowBlur: 12,
            // Offset the shadow by { x: 5, y: 5 }
            shadowOffset: new paper.Point(5, 5)
        });
    
    }
    function Item20() {
        
        // Create a rectangle shaped path with its top left point at:
        // {x: 50, y: 25} and a size of {width: 50, height: 50}
        let path = new paper.Path.Rectangle(new paper.Point(50, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        path.onFrame = function(this:paper.Path) {
            // Every frame, rotate the path by 3 degrees:
            this.rotate(3);
        }
    
    }
    function Item21() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is pressed on the item,
        // set its fill color to red:
        path.onMouseDown = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Item22() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse is pressed on the item, remove it:
            path.onMouseDown = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function Item23() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 50,
            fillColor: 'blue'
        });
        
        // Install a drag event handler that moves the path along.
        path.onMouseDrag = function(this:paper.Path, event:paper.MouseEvent) {
            path.position = path.position.add(event.delta);
        }
    
    }
    function Item24() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is released over the item,
        // set its fill color to red:
        path.onMouseUp = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Item25() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is clicked on the item,
        // set its fill color to red:
        path.onClick = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Item26() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse clicks on the item, remove it:
            path.onClick = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function Item27() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is double clicked on the item,
        // set its fill color to red:
        path.onDoubleClick = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Item28() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse is double clicked on the item, remove it:
            path.onDoubleClick = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function Item29() {
        
        // Create a circle shaped path at the center of the paper.view:
            let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
            });
        
        // When the mouse moves on top of the item, set its opacity
        // to a random value between 0 and 1:
        path.onMouseMove = function(this:paper.Path) {
            this.opacity = Math.random();
        }
    
    }
    function Item30() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse enters the item, set its fill color to red:
        path.onMouseEnter = function(this:paper.Path) {
            this.fillColor = 'red';
        }
        
        // When the mouse leaves the item, set its fill color to black:
        path.onMouseLeave = function(this:paper.Path) {
            this.fillColor = 'black';
        }
    
    }
    function Item31() {
        
        function enter(this:paper.Path, event:paper.MouseEvent) {
            this.fillColor = 'red';
        }
        
        function leave(this:paper.Path, event:paper.MouseEvent) {
            this.fillColor = 'black';
        }
        
        // When the mouse is pressed:
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the position of the mouse:
            let path = new paper.Path.Circle(event.point, 25);
            path.fillColor = 'black';
        
            // When the mouse enters the item, set its fill color to red:
            path.onMouseEnter = enter;
        
            // When the mouse leaves the item, set its fill color to black:
            path.onMouseLeave = leave;
        }
    
    }
    function Item32() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse leaves the item, set its fill color to red:
        path.onMouseLeave = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Item33() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        circle.set({
            strokeColor: 'red',
            strokeWidth: 10,
            fillColor: 'black',
            selected: true
        });
    
    }
    function Item34() {
        
        let circle = new paper.Path.Circle({
            center: [50, 50],
            radius: 10,
            fillColor: 'red'
        });
        
        // Make 20 copies of the circle:
        for (let i = 0; i < 20; i++) {
            let copy = circle.clone();
        
            // Distribute the copies horizontally, so we can see them:
            copy.position.x += i * copy.bounds.width;
        }
    
    }
    function Item35() {
        
        let circle = new paper.Path.Circle({
            center: [50, 50],
            radius: 5,
            fillColor: 'red'
        });
        
        // Create a rasterized version of the path:
        let raster = circle.rasterize();
        
        // Move it 100pt to the right:
        raster.position.x += 100;
        
        // Scale the path and the raster by 300%, so we can compare them:
        circle.scale(5);
        raster.scale(5);
    
    }
    function Item36() {
        
        let path = new paper.Path.Star({
            center: [50, 50],
            points: 12,
            radius1: 20,
            radius2: 40,
            fillColor: 'black'
        });
        
        // Whenever the user presses the mouse:
        function onMouseDown(event:paper.ToolEvent) {
            // If the position of the mouse is within the path,
            // set its fill color to red, otherwise set it to
            // black:
            if (path.contains(event.point)) {
                path.fillColor = 'red';
            } else {
                path.fillColor = 'black';
            }
        }
    
    }
    function Item37() {
        
        // Create a rectangle shaped path with its top left
        // point at {x: 80, y: 25} and a size of {width: 50, height: 50}:
        let path = new paper.Path.Rectangle(new paper.Point(80, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        // Rotate the path by 30 degrees:
        path.rotate(30);
    
    }
    function Item38() {
        
        // Create a rectangle shaped path with its top left
        // point at {x: 175, y: 50} and a size of {width: 100, height: 100}:
        let topLeft = new paper.Point(175, 50);
        let size = new paper.Size(100, 100);
        let path = new paper.Path.Rectangle(topLeft, size);
        path.fillColor = 'black';
        
        // Draw a circle shaped path in the center of the paper.view,
        // to show the rotation point:
        let circle = new paper.Path.Circle({
            center: paper.view.center,
            radius: 5,
            fillColor: 'white'
        });
        
        // Each frame rotate the path 3 degrees around the center point
        // of the paper.view:
        function onFrame(event:paper.IFrameEvent) {
            path.rotate(3, paper.view.center);
        }
    
    }
    function Item39() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path by 150% from its center point
        circle.scale(1.5);
    
    }
    function Item40() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path 150% from its bottom left corner
        circle.scale(1.5, circle.bounds.bottomLeft);
    
    }
    function Item41() {
        
        // Create a circle shaped path at { x: 100, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [100, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path horizontally by 300%
        circle.scale(3, 1);
    
    }
    function Item42() {
        
        // Create a rectangle shaped path with its top left corner
        // at {x: 80, y: 25} and a size of {width: 75, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [80, 25],
            size: [75, 50],
            fillColor: 'black'
        });
        
        // Create a circle shaped path with its center at {x: 80, y: 50}
        // and a radius of 30.
        let circlePath = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the circlePath to the bounding rectangle of
        // the rectangular path:
        circlePath.fitBounds(path.bounds);
    
    }
    function Item43() {
        
        // Create a rectangle shaped path with its top left corner
        // at {x: 80, y: 25} and a size of {width: 75, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [80, 25],
            size: [75, 50],
            fillColor: 'black'
        });
        
        // Create a circle shaped path with its center at {x: 80, y: 50}
        // and a radius of 30.
        let circlePath = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the circlePath to the bounding rectangle of
        // the rectangular path:
        circlePath.fitBounds(path.bounds, true);
    
    }
    function Item44() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the path to the bounding rectangle of the paper.view:
        path.fitBounds(paper.view.bounds);
    
    }
    function Item45() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse enters the item, set its fill color to red:
        path.on('mouseenter', function(this:paper.Path) {
            this.fillColor = 'red';
        });
        
        // When the mouse leaves the item, set its fill color to black:
        path.on('mouseleave', function(this:paper.Path) {
            this.fillColor = 'black';
        });
    
    }
    function Item46() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25
        });
        path.fillColor = 'black';
        
        // When the mouse enters the item, set its fill color to red:
        path.on({
            mouseenter: function(this:paper.Path) {
                this.fillColor = 'red';
            },
            mouseleave: function(this:paper.Path) {
                this.fillColor = 'black';
            }
        });
    
    }
    function Item47() {
        
        let pathHandlers = {
            mouseenter: function(this:paper.Path) {
                this.fillColor = 'red';
            },
            mouseleave: function(this:paper.Path) {
                this.fillColor = 'black';
            }
        }
        
        // When the mouse is pressed:
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the position of the mouse:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 25,
                fillColor: 'black'
            });
        
            // Attach the handers inside the object literal to the path:
            path.on(pathHandlers);
        }
    
    }
    function Item48() {
        
        function onMouseDrag(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path on the next onMouseDrag or onMouseDown event:
            path.removeOn({
                drag: true,
                down: true
            });
        }
    
    }
    function Item49() {
        
        function onMouseMove(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // On the next move event, automatically remove the path:
            path.removeOnMove();
        }
    
    }
    function Item50() {
        
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path, next time the mouse is pressed:
            path.removeOnDown();
        }
    
    }
    function Item51() {
        
        function onMouseDrag(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // On the next drag event, automatically remove the path:
            path.removeOnDrag();
        }
    
    }
    function Item52() {
        
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path, when the mouse is released:
            path.removeOnUp();
        }
    
    }
    function Layer0() {
        
        let path = new paper.Path([[100, 100], [100, 200]]);
        let path2 = new paper.Path([[50, 150], [150, 150]]);
        
        // Create a layer. The properties in the object literal
        // are set on the newly created layer.
        let layer = new paper.Layer({
            children: [path, path2],
            strokeColor: 'black',
            position: paper.view.center
        });
    
    }
    function Layer1() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        // Set the name of the path:
        path.name = 'example';
        
        // Create a group and add path to it as a child:
        let group = new paper.Group();
        group.addChild(path);
        
        // The path can be accessed by name:
        group.getItem('example').fillColor = 'red';
    
    }
    function Layer2() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 30
        });
        circle.style = {
            fillColor: 'blue',
            strokeColor: 'red',
            strokeWidth: 5
        };
    
    }
    function Layer3() {
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        let path2 = new paper.Path.Circle({
            center: new paper.Point(180, 50),
            radius: 20
        });
        
        // Copy the path style of path:
        path2.style = path.style;
    
    }
    function Layer4() {
        
        let myStyle = {
            fillColor: 'red',
            strokeColor: 'blue',
            strokeWidth: 4
        };
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 30
        });
        path.style = myStyle;
        
        let path2 = new paper.Path.Circle({
            center: new paper.Point(150, 50),
            radius: 20
        });
        path2.style = myStyle;
    
    }
    function Layer5() {
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Hide the path:
        path.visible = false;
    
    }
    function Layer6() {
        
        // Create a white rectangle in the background
        // with the same dimensions as the paper.view:
        let background = new paper.Path.Rectangle(paper.view.bounds);
        background.fillColor = 'white';
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'red'
        });
        
        let circle2 = new paper.Path.Circle({
            center: new paper.Point(120, 50),
            radius: 35,
            fillColor: 'blue'
        });
        
        // Set the blend mode of circle2:
        circle2.blendMode = 'multiply';
    
    }
    function Layer7() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'red'
        });
        
        let circle2 = new paper.Path.Circle({
            center: new paper.Point(120, 50),
            radius: 35,
            fillColor: 'blue',
            strokeColor: 'green',
            strokeWidth: 10
        });
        
        // Make circle2 50% transparent:
        circle2.opacity = 0.5;
    
    }
    function Layer8() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        path.selected = true; // Select the path
    
    }
    function Layer9() {
        
        // Create a circle at position { x: 10, y: 10 }
        let circle = new paper.Path.Circle({
            center: new paper.Point(10, 10),
            radius: 10,
            fillColor: 'red'
        });
        
        // Move the circle to { x: 20, y: 20 }
        circle.position = new paper.Point(20, 20);
        
        // Move the circle 100 points to the right and 50 points down
        circle.position = circle.position.add(new paper.Point(100, 50));
    
    }
    function Layer10() {
        
        // Create a circle at position { x: 20, y: 20 }
        let circle = new paper.Path.Circle({
            center: new paper.Point(20, 20),
            radius: 10,
            fillColor: 'red'
        });
        
        // Move the circle 100 points to the right
        circle.position.x += 100;
    
    }
    function Layer11() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Create a group and move the path into it:
        let group = new paper.Group();
        group.addChild(path);
        
        // Access the path through the group's children array:
        group.children[0].fillColor = 'red';
    
    }
    function Layer12() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        // Set the name of the path:
        path.name = 'example';
        
        // Create a group and move the path into it:
        let group = new paper.Group();
        group.addChild(path);
        
        // The path can be accessed by name:
        group.getItem('example').fillColor = 'orange';
    
    }
    function Layer13() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        let group = new paper.Group();
        group.children = [path];
        
        // The path is the first child of the group:
        group.firstChild.fillColor = 'green';
    
    }
    function Layer14() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Set its stroke color to RGB red:
        circle.strokeColor = new paper.Color(1, 0, 0);
    
    }
    function Layer15() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            strokeColor: 'red'
        });
        
        // Set its stroke width to 10:
        circle.strokeWidth = 10;
    
    }
    function Layer16() {
        
        let line = new paper.Path({
            segments: [[80, 50], [420, 50]],
            strokeColor: 'black',
            strokeWidth: 20,
            selected: true
        });
        
        // Set the stroke cap of the line to be round:
        line.strokeCap = 'round';
        
        // Copy the path and set its stroke cap to be square:
        let line2 = line.clone();
        line2.position.y += 50;
        line2.strokeCap = 'square';
        
        // Make another copy and set its stroke cap to be butt:
        line2 = line.clone();
        line2.position.y += 100;
        line2.strokeCap = 'butt';
    
    }
    function Layer17() {
        
        let path = new paper.Path({
            segments: [[80, 100], [120, 40], [160, 100]],
            strokeColor: 'black',
            strokeWidth: 20,
            // Select the path, in order to see where the stroke is formed:
            selected: true
        });
        
        let path2 = path.clone();
        path2.position.x += path2.bounds.width * 1.5;
        path2.strokeJoin = 'round';
        
        let path3 = path2.clone();
        path3.position.x += path3.bounds.width * 1.5;
        path3.strokeJoin = 'bevel';
    
    }
    function Layer18() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 40,
            strokeWidth: 2,
            strokeColor: 'black'
        });
        
        // Set the dashed stroke to [10pt dash, 4pt gap]:
        path.dashArray = [10, 4];
    
    }
    function Layer19() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Set the fill color of the circle to RGB red:
        circle.fillColor = new paper.Color(1, 0, 0);
    
    }
    function Layer20() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'white',
            // Set the shadow color of the circle to RGB black:
            shadowColor: new paper.Color(0, 0, 0),
            // Set the shadow blur radius to 12:
            shadowBlur: 12,
            // Offset the shadow by { x: 5, y: 5 }
            shadowOffset: new paper.Point(5, 5)
        });
    
    }
    function Layer21() {
        
        // Create a rectangle shaped path with its top left point at:
        // {x: 50, y: 25} and a size of {width: 50, height: 50}
        let path = new paper.Path.Rectangle(new paper.Point(50, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        path.onFrame = function(this:paper.Path) {
            // Every frame, rotate the path by 3 degrees:
            this.rotate(3);
        }
    
    }
    function Layer22() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is pressed on the item,
        // set its fill color to red:
        path.onMouseDown = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Layer23() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse is pressed on the item, remove it:
            path.onMouseDown = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function Layer24() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 50,
            fillColor: 'blue'
        });
        
        // Install a drag event handler that moves the path along.
        path.onMouseDrag = function(this:paper.Path, event:paper.MouseEvent) {
            path.position = path.position.add(event.delta);
        }
    
    }
    function Layer25() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is released over the item,
        // set its fill color to red:
        path.onMouseUp = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Layer26() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is clicked on the item,
        // set its fill color to red:
        path.onClick = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Layer27() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse clicks on the item, remove it:
            path.onClick = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function Layer28() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is double clicked on the item,
        // set its fill color to red:
        path.onDoubleClick = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Layer29() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse is double clicked on the item, remove it:
            path.onDoubleClick = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function Layer30() {
        
        // Create a circle shaped path at the center of the paper.view:
            let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
            });
        
        // When the mouse moves on top of the item, set its opacity
        // to a random value between 0 and 1:
        path.onMouseMove = function(this:paper.Path) {
            this.opacity = Math.random();
        }
    
    }
    function Layer31() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse enters the item, set its fill color to red:
        path.onMouseEnter = function(this:paper.Path) {
            this.fillColor = 'red';
        }
        
        // When the mouse leaves the item, set its fill color to black:
        path.onMouseLeave = function(this:paper.Path) {
            this.fillColor = 'black';
        }
    
    }
    function Layer32() {
        
        function enter(this:paper.Path) {
            this.fillColor = 'red';
        }
        
        function leave(this:paper.Path) {
            this.fillColor = 'black';
        }
        
        // When the mouse is pressed:
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the position of the mouse:
            let path = new paper.Path.Circle(event.point, 25);
            path.fillColor = 'black';
        
            // When the mouse enters the item, set its fill color to red:
            path.onMouseEnter = enter;
        
            // When the mouse leaves the item, set its fill color to black:
            path.onMouseLeave = leave;
        }
    
    }
    function Layer33() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse leaves the item, set its fill color to red:
        path.onMouseLeave = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Layer34() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        circle.set({
            strokeColor: 'red',
            strokeWidth: 10,
            fillColor: 'black',
            selected: true
        });
    
    }
    function Layer35() {
        
        let circle = new paper.Path.Circle({
            center: [50, 50],
            radius: 10,
            fillColor: 'red'
        });
        
        // Make 20 copies of the circle:
        for (let i = 0; i < 20; i++) {
            let copy = circle.clone();
        
            // Distribute the copies horizontally, so we can see them:
            copy.position.x += i * copy.bounds.width;
        }
    
    }
    function Layer36() {
        
        let circle = new paper.Path.Circle({
            center: [50, 50],
            radius: 5,
            fillColor: 'red'
        });
        
        // Create a rasterized version of the path:
        let raster = circle.rasterize();
        
        // Move it 100pt to the right:
        raster.position.x += 100;
        
        // Scale the path and the raster by 300%, so we can compare them:
        circle.scale(5);
        raster.scale(5);
    
    }
    function Layer37() {
        
        let path = new paper.Path.Star({
            center: [50, 50],
            points: 12,
            radius1: 20,
            radius2: 40,
            fillColor: 'black'
        });
        
        // Whenever the user presses the mouse:
        function onMouseDown(event:paper.ToolEvent) {
            // If the position of the mouse is within the path,
            // set its fill color to red, otherwise set it to
            // black:
            if (path.contains(event.point)) {
                path.fillColor = 'red';
            } else {
                path.fillColor = 'black';
            }
        }
    
    }
    function Layer38() {
        
        // Create a rectangle shaped path with its top left
        // point at {x: 80, y: 25} and a size of {width: 50, height: 50}:
        let path = new paper.Path.Rectangle(new paper.Point(80, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        // Rotate the path by 30 degrees:
        path.rotate(30);
    
    }
    function Layer39() {
        
        // Create a rectangle shaped path with its top left
        // point at {x: 175, y: 50} and a size of {width: 100, height: 100}:
        let topLeft = new paper.Point(175, 50);
        let size = new paper.Size(100, 100);
        let path = new paper.Path.Rectangle(topLeft, size);
        path.fillColor = 'black';
        
        // Draw a circle shaped path in the center of the paper.view,
        // to show the rotation point:
        let circle = new paper.Path.Circle({
            center: paper.view.center,
            radius: 5,
            fillColor: 'white'
        });
        
        // Each frame rotate the path 3 degrees around the center point
        // of the paper.view:
        function onFrame(event:paper.IFrameEvent) {
            path.rotate(3, paper.view.center);
        }
    
    }
    function Layer40() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path by 150% from its center point
        circle.scale(1.5);
    
    }
    function Layer41() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path 150% from its bottom left corner
        circle.scale(1.5, circle.bounds.bottomLeft);
    
    }
    function Layer42() {
        
        // Create a circle shaped path at { x: 100, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [100, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path horizontally by 300%
        circle.scale(3, 1);
    
    }
    function Layer43() {
        
        // Create a rectangle shaped path with its top left corner
        // at {x: 80, y: 25} and a size of {width: 75, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [80, 25],
            size: [75, 50],
            fillColor: 'black'
        });
        
        // Create a circle shaped path with its center at {x: 80, y: 50}
        // and a radius of 30.
        let circlePath = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the circlePath to the bounding rectangle of
        // the rectangular path:
        circlePath.fitBounds(path.bounds);
    
    }
    function Layer44() {
        
        // Create a rectangle shaped path with its top left corner
        // at {x: 80, y: 25} and a size of {width: 75, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [80, 25],
            size: [75, 50],
            fillColor: 'black'
        });
        
        // Create a circle shaped path with its center at {x: 80, y: 50}
        // and a radius of 30.
        let circlePath = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the circlePath to the bounding rectangle of
        // the rectangular path:
        circlePath.fitBounds(path.bounds, true);
    
    }
    function Layer45() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the path to the bounding rectangle of the paper.view:
        path.fitBounds(paper.view.bounds);
    
    }
    function Layer46() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse enters the item, set its fill color to red:
        path.on('mouseenter', function(this:paper.Path) {
            this.fillColor = 'red';
        });
        
        // When the mouse leaves the item, set its fill color to black:
        path.on('mouseleave', function(this:paper.Path) {
            this.fillColor = 'black';
        });
    
    }
    function Layer47() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25
        });
        path.fillColor = 'black';
        
        // When the mouse enters the item, set its fill color to red:
        path.on({
            mouseenter: function(this:paper.Path, event:paper.MouseEvent) {
                this.fillColor = 'red';
            },
            mouseleave: function(this:paper.Path, event:paper.MouseEvent) {
                this.fillColor = 'black';
            }
        });
    
    }
    function Layer48() {
        
        let pathHandlers = {
            mouseenter: function(this:paper.Path) {
                this.fillColor = 'red';
            },
            mouseleave: function(this:paper.Path) {
                this.fillColor = 'black';
            }
        }
        
        // When the mouse is pressed:
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the position of the mouse:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 25,
                fillColor: 'black'
            });
        
            // Attach the handers inside the object literal to the path:
            path.on(pathHandlers);
        }
    
    }
    function Layer49() {
        
        function onMouseDrag(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path on the next onMouseDrag or onMouseDown event:
            path.removeOn({
                drag: true,
                down: true
            });
        }
    
    }
    function Layer50() {
        
        function onMouseMove(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // On the next move event, automatically remove the path:
            path.removeOnMove();
        }
    
    }
    function Layer51() {
        
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path, next time the mouse is pressed:
            path.removeOnDown();
        }
    
    }
    function Layer52() {
        
        function onMouseDrag(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // On the next drag event, automatically remove the path:
            path.removeOnDrag();
        }
    
    }
    function Layer53() {
        
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path, when the mouse is released:
            path.removeOnUp();
        }
    
    }
    function Layer54() {
        
        let star = new paper.Path.Star({
            center: paper.view.center,
            points: 6,
            radius1: 20,
            radius2: 40,
            fillColor: 'red'
        });
        
        let circle = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            strokeColor: 'black'
        });
        
        // Create a group of the two items and clip it:
        let group = new paper.Group([circle, star]);
        group.clipped = true;
        
        // Lets animate the circle:
        function onFrame(event:paper.IFrameEvent) {
            let offset = Math.sin(event.count / 30) * 30;
            circle.position.x = paper.view.center.x + offset;
        }
    
    }
    function Path0() {
        
        let path = new paper.Path({
            segments: [[20, 20], [80, 80], [140, 20]],
            fillColor: 'black',
            closed: true
        });
    
    }
    function Path1() {
        
        let path = new paper.Path({
            segments: [[20, 20], [80, 80], [140, 20]],
            strokeColor: 'red',
            strokeWidth: 20,
            strokeCap: 'round',
            selected: true
        });
    
    }
    function Path2() {
        
        let pathData = 'M100,50c0,27.614-22.386,50-50,50S0,77.614,0,50S22.386,0,50,0S100,22.386,100,50';
        let path = new paper.Path(pathData);
        path.fillColor = 'red';
    
    }
    function Path3() {
        
        let from = new paper.Point(20, 20);
        let to = new paper.Point(80, 80);
        let path = new paper.Path.Line(from, to);
        path.strokeColor = 'black';
    
    }
    function Path4() {
        
        let path = new paper.Path.Line({
            from: [20, 20],
            to: [80, 80],
            strokeColor: 'black'
        });
    
    }
    function Path5() {
        
        let path = new paper.Path.Circle(new paper.Point(80, 50), 30);
        path.strokeColor = 'black';
    
    }
    function Path6() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            strokeColor: 'black'
        });
    
    }
    function Path7() {
        
        let rectangle = new paper.Rectangle(new paper.Point(20, 20), new paper.Size(60, 60));
        let path = new paper.Path.Rectangle(rectangle);
        path.strokeColor = 'black';
    
    }
    function Path8() {
        
        let rectangle = new paper.Rectangle(new paper.Point(20, 20), new paper.Size(60, 60));
        let cornerSize = new paper.Size(10, 10);
        let path = new paper.Path.Rectangle(rectangle, cornerSize.height);
        path.strokeColor = 'black';
    
    }
    function Path9() {
        
        let point = new paper.Point(20, 20);
        let size = new paper.Size(60, 60);
        let path = new paper.Path.Rectangle(point, size);
        path.strokeColor = 'black';
    
    }
    function Path10() {
        
        let from = new paper.Point(20, 20);
        let to = new paper.Point(80, 80);
        let path = new paper.Path.Rectangle(from, to);
        path.strokeColor = 'black';
    
    }
    function Path11() {
        
        let path = new paper.Path.Rectangle({
            point: [20, 20],
            size: [60, 60],
            strokeColor: 'black'
        });
    
    }
    function Path12() {
        
        let path = new paper.Path.Rectangle({
            from: [20, 20],
            to: [80, 80],
            strokeColor: 'black'
        });
    
    }
    function Path13() {
        
        let path = new paper.Path.Rectangle({
            rectangle: {
                topLeft: [20, 20],
                bottomRight: [80, 80]
            },
            strokeColor: 'black'
        });
    
    }
    function Path14() {
        
        let path = new paper.Path.Rectangle({
         topLeft: [20, 20],
            bottomRight: [80, 80],
            radius: 10,
            strokeColor: 'black'
        });
    
    }
    function Path15() {
        
        let rectangle = new paper.Rectangle(new paper.Point(20, 20), new paper.Size(180, 60));
        let path = new paper.Path.Ellipse(rectangle);
        path.fillColor = 'black';
    
    }
    function Path16() {
        
        let path = new paper.Path.Ellipse({
            point: [20, 20],
            size: [180, 60],
            fillColor: 'black'
        });
    
    }
    function Path17() {
        
        let shape = new paper.Path.Ellipse({
            center: [110, 50],
            radius: [90, 30],
            fillColor: 'black'
        });
    
    }
    function Path18() {
        
        let from = new paper.Point(20, 20);
        let through = new paper.Point(60, 20);
        let to = new paper.Point(80, 80);
        let path = new paper.Path.Arc(from, through, to);
        path.strokeColor = 'black';
    
    }
    function Path19() {
        
        let path = new paper.Path.Arc({
            from: [20, 20],
            through: [60, 20],
            to: [80, 80],
            strokeColor: 'black'
        });
    
    }
    function Path20() {
        
        let center = new paper.Point(50, 50);
        let sides = 3;
        let radius = 40;
        let triangle = new paper.Path.RegularPolygon(center, sides, radius);
        triangle.fillColor = 'black';
    
    }
    function Path21() {
        
        let triangle = new paper.Path.RegularPolygon({
            center: [50, 50],
            sides: 10,
            radius: 40,
            fillColor: 'black'
        });
    
    }
    function Path22() {
        
        let center = new paper.Point(50, 50);
        let points = 12;
        let radius1 = 25;
        let radius2 = 40;
        let path = new paper.Path.Star(center, points, radius1, radius2);
        path.fillColor = 'black';
    
    }
    function Path23() {
        
        let path = new paper.Path.Star({
            center: [50, 50],
            points: 12,
            radius1: 25,
            radius2: 40,
            fillColor: 'black'
        });
    
    }
    function Path24() {
        
        let myPath = new paper.Path();
        myPath.strokeColor = 'black';
        myPath.add(new paper.Point(50, 75));
        myPath.add(new paper.Point(100, 25));
        myPath.add(new paper.Point(150, 75));
        
        // Close the path:
        myPath.closed = true;
    
    }
    function Path25() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        path.fullySelected = true;
        
        let path2 = new paper.Path.Circle({
            center: [180, 50],
            radius: 35
        });
        
        // Deselect the second segment of the second path:
        path2.segments[1].selected = false;
        
        // If the path is fully selected (which it is),
        // set its fill color to red:
        if (path.fullySelected) {
            path.fillColor = 'red';
        }
        
        // If the second path is fully selected (which it isn't, since we just
        // deselected its second segment),
        // set its fill color to red:
        if (path2.fullySelected) {
            path2.fillColor = 'red';
        }
    
    }
    function Path26() {
        
        let path = new paper.Path({
            strokeColor: 'black'
        });
        
        // Add a segment at {x: 30, y: 75}
        path.add(new paper.Point(30, 75));
        
        // Add two segments in one go at {x: 100, y: 20}
        // and {x: 170, y: 75}:
        path.addSegments([new paper.Point(100, 20), new paper.Point(170, 75)]);
    
    }
    function Path27() {
        
        let path = new paper.Path({
            strokeColor: 'black'
        });
        
        // Add a segment at {x: 30, y: 75}
        path.add([30, 75]);
        
        // Add two segments in one go at {x: 100, y: 20}
        // and {x: 170, y: 75}:
        path.addSegments([[100, 20], [170, 75]]);
    
    }
    function Path28() {
        
        let path = new paper.Path({
            strokeColor: 'black'
        });
        
        // Add a segment at {x: 30, y: 75}
        path.add(new paper.Point({x: 30, y: 75}));
        
        // Add two segments in one go at {x: 100, y: 20}
        // and {x: 170, y: 75}:
        path.addSegments([new paper.Point({x: 100, y: 20}), new paper.Point({x: 170, y: 75})]);
    
    }
    function Path29() {
        
        let path = new paper.Path({
            strokeColor: 'black'
        });
        
        path.add(new paper.Point(30, 75));
        
        // Add a segment with handles:
        let point = new paper.Point(100, 20);
        let handleIn = new paper.Point(-50, 0);
        let handleOut = new paper.Point(50, 0);
        let added = path.add(new paper.Segment(point, handleIn, handleOut));
        
        // Select the added segment, so we can see its handles:
        added.selected = true;
        
        path.add(new paper.Point(170, 75));
    
    }
    function Path30() {
        
        let myPath = new paper.Path();
        myPath.strokeColor = 'black';
        myPath.add(new paper.Point(50, 75));
        myPath.add(new paper.Point(150, 75));
        
        // Insert a new segment into myPath at index 1:
        myPath.insert(1, new paper.Point(100, 25));
        
        // Select the segment which we just inserted:
        myPath.segments[1].selected = true;
    
    }
    function Path31() {
        
        let myPath = new paper.Path();
        myPath.strokeColor = 'black';
        myPath.add(new paper.Point(50, 75));
        myPath.add(new paper.Point(150, 75));
        
        // Insert two segments into myPath at index 1:
        myPath.insertSegments(1, [[80, 25], [120, 25]]);
        
        // Select the segments which we just inserted:
        myPath.segments[1].selected = true;
        myPath.segments[2].selected = true;
    
    }
    function Path32() {
        
        let path = new paper.Path({
            strokeColor: 'black'
        });
        let points = [new paper.Point(30, 50), new paper.Point(170, 50)];
        path.addSegments(points);
    
    }
    function Path33() {
        
        let path = new paper.Path({
            strokeColor: 'black'
        });
        let array = [[30, 75], [100, 20], [170, 75]];
        path.addSegments(array);
    
    }
    function Path34() {
        
        let path = new paper.Path({
            strokeColor: 'black'
        });
        path.addSegments([[30, 75], [100, 20], [170, 75]]);
        
        let path2 = new paper.Path();
        path2.strokeColor = 'red';
        
        // Add the second and third segments of path to path2:
        path2.addSegments([path.segments[1], path.segments[2]]);
        
        // Move path2 30pt to the right:
        path2.position.x += 30;
    
    }
    function Path35() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let path = new paper.Path.Circle({
            center: new paper.Point(80, 50),
            radius: 35,
            strokeColor: 'black'
        });
        
        // Remove its second segment:
        path.removeSegment(1);
        
        // Select the path, so we can see its segments:
        path.selected = true;
    
    }
    function Path36() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let path = new paper.Path.Circle({
            center: new paper.Point(80, 50),
            radius: 35,
            strokeColor: 'black'
        });
        
        // Remove the segments from index 1 till index 2:
        path.removeSegments(1, 2);
        
        // Select the path, so we can see its segments:
        path.selected = true;
    
    }
    function Path37() {
        
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 40,
            strokeColor: 'black'
        });
        
        let pointOnCircle = paper.view.center.add(new paper.Point({
            length: 40,
            angle: 30
        }));
        
        let location = path.getNearestLocation(pointOnCircle);
        
        path.split(location);
        path.lastSegment.selected = true;
    
    }
    function Path38() {
        
        let path = new paper.Path([[20, 20], [50, 80], [80, 20]]);
        path.strokeColor = 'black';
        
        // Split the path half-way:
        let path2 = path.split(path.length / 2);
        
        // Give the resulting path a red stroke-color
        // and move it 20px to the right:
        path2.strokeColor = 'red';
        path2.position.x += 20;
    
    }
    function Path39() {
        
        let path = new paper.Path.Rectangle({
            from: [20, 20],
            to: [80, 80],
            strokeColor: 'black'
        });
        
        // Split the path half-way:
        path.split(path.length / 2);
        
        // Move the first segment, to show where the path
        // was split:
        path.firstSegment.point.x += 20;
        
        // Select the first segment:
        path.firstSegment.selected = true;
    
    }
    function Path40() {
        
        let path = new paper.Path({
            segments: [[30, 25], [30, 75]],
            strokeColor: 'black'
        });
        
        let path2 = new paper.Path({
            segments: [[200, 25], [200, 75]],
            strokeColor: 'black'
        });
        
        // Join the paths:
        path.join(path2);
    
    }
    function Path41() {
        
        let path = new paper.Path({
            segments: [[30, 25], [30, 75]],
            strokeColor: 'black'
        });
        
        let path2 = new paper.Path({
            segments: [[30, 25], [80, 25]],
            strokeColor: 'black'
        });
        
        // Join the paths:
        path.join(path2);
        
        // After joining, path with have 3 segments, since it
        // shared its first segment point with the first
        // segment point of path2.
        
        // Select the path to show that they have joined:
        path.selected = true;
    
    }
    function Path42() {
        
        let path = new paper.Path({
            segments: [[30, 25], [80, 25], [80, 75]],
            strokeColor: 'black'
        });
        
        let path2 = new paper.Path({
            segments: [[30, 25], [30, 75], [80, 75]],
            strokeColor: 'black'
        });
        
        // Join the paths:
        path.join(path2);
        
        // Because the paths were joined at two points, the path is closed
        // and has 4 segments.
        
        // Select the path to show that they have joined:
        path.selected = true;
    
    }
    function Path43() {
        
        // Create an arc shaped path:
        let path = new paper.Path({
            strokeColor: 'black'
        });
        
        path.add(new paper.Point(40, 100));
        path.arcTo(new paper.Point(150, 100));
        
        // We're going to be working with a third of the length
        // of the path as the offset:
        let offset = path.length / 3;
        
        // Find the point on the path:
        let point = path.getPointAt(offset);
        
        // Create a small circle shaped path at the point:
        let circle = new paper.Path.Circle({
            center: point,
            radius: 3,
            fillColor: 'red'
        });
    
    }
    function Path44() {
        
        // Create an arc shaped path:
        let path = new paper.Path({
            strokeColor: 'black'
        });
        
        path.add(new paper.Point(40, 100));
        path.arcTo(new paper.Point(150, 100));
        
        let amount = 5;
        let length = path.length;
        for (let i = 0; i < amount + 1; i++) {
            let offset = i / amount * length;
        
            // Find the point on the path at the given offset:
            let point = path.getPointAt(offset);
        
            // Create a small circle shaped path at the point:
            let circle = new paper.Path.Circle({
                center: point,
                radius: 3,
                fillColor: 'red'
            });
        }
    
    }
    function Path45() {
        
        // Create an arc shaped path:
        let path = new paper.Path({
            strokeColor: 'black'
        });
        
        path.add(new paper.Point(40, 100));
        path.arcTo(new paper.Point(150, 100));
        
        // We're going to be working with a third of the length
        // of the path as the offset:
        let offset = path.length / 3;
        
        // Find the point on the path:
        let point = path.getPointAt(offset);
        
        // Find the tangent vector at the given offset
        // and give it a length of 60:
        let tangent = path.getTangentAt(offset).multiply(60);
        
        let line = new paper.Path({
            segments: [point, point.add(tangent)],
            strokeColor: 'red'
        })
    
    }
    function Path46() {
        
        // Create an arc shaped path:
        let path = new paper.Path({
            strokeColor: 'black'
        });
        
        path.add(new paper.Point(40, 100));
        path.arcTo(new paper.Point(150, 100));
        
        let amount = 6;
        let length = path.length;
        for (let i = 0; i < amount + 1; i++) {
            let offset = i / amount * length;
        
            // Find the point on the path at the given offset:
            let point = path.getPointAt(offset);
        
            // Find the tangent vector on the path at the given offset
            // and give it a length of 60:
            let tangent = path.getTangentAt(offset).multiply(60);
        
            let line = new paper.Path({
                segments: [point, point.add(tangent)],
                strokeColor: 'red'
            })
        }
    
    }
    function Path47() {
        
        // Create an arc shaped path:
        let path = new paper.Path({
            strokeColor: 'black'
        });
        
        path.add(new paper.Point(40, 100));
        path.arcTo(new paper.Point(150, 100));
        
        // We're going to be working with a third of the length
        // of the path as the offset:
        let offset = path.length / 3;
        
        // Find the point on the path:
        let point = path.getPointAt(offset);
        
        // Find the normal vector on the path at the given offset
        // and give it a length of 30:
        let normal = path.getNormalAt(offset).multiply(30);
        
        let line = new paper.Path({
            segments: [point, point.add(normal)],
            strokeColor: 'red'
        });
    
    }
    function Path48() {
        
        // Create an arc shaped path:
        let path = new paper.Path({
            strokeColor: 'black'
        });
        
        path.add(new paper.Point(40, 100));
        path.arcTo(new paper.Point(150, 100));
        
        let amount = 10;
        let length = path.length;
        for (let i = 0; i < amount + 1; i++) {
            let offset = i / amount * length;
        
            // Find the point on the path at the given offset:
            let point = path.getPointAt(offset);
        
            // Find the normal vector on the path at the given offset
            // and give it a length of 30:
            let normal = path.getNormalAt(offset).multiply(30);
        
            let line = new paper.Path({
                segments: [point, point.add(normal)],
                strokeColor: 'red'
            });
        }
    
    }
    function Path49() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        // Set the name of the path:
        path.name = 'example';
        
        // Create a group and add path to it as a child:
        let group = new paper.Group();
        group.addChild(path);
        
        // The path can be accessed by name:
        group.getItem('example').fillColor = 'red';
    
    }
    function Path50() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 30
        });
        circle.style = {
            fillColor: 'blue',
            strokeColor: 'red',
            strokeWidth: 5
        };
    
    }
    function Path51() {
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        let path2 = new paper.Path.Circle({
            center: new paper.Point(180, 50),
            radius: 20
        });
        
        // Copy the path style of path:
        path2.style = path.style;
    
    }
    function Path52() {
        
        let myStyle = {
            fillColor: 'red',
            strokeColor: 'blue',
            strokeWidth: 4
        };
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 30
        });
        path.style = myStyle;
        
        let path2 = new paper.Path.Circle({
            center: new paper.Point(150, 50),
            radius: 20
        });
        path2.style = myStyle;
    
    }
    function Path53() {
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Hide the path:
        path.visible = false;
    
    }
    function Path54() {
        
        // Create a white rectangle in the background
        // with the same dimensions as the paper.view:
        let background = new paper.Path.Rectangle(paper.view.bounds);
        background.fillColor = 'white';
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'red'
        });
        
        let circle2 = new paper.Path.Circle({
            center: new paper.Point(120, 50),
            radius: 35,
            fillColor: 'blue'
        });
        
        // Set the blend mode of circle2:
        circle2.blendMode = 'multiply';
    
    }
    function Path55() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'red'
        });
        
        let circle2 = new paper.Path.Circle({
            center: new paper.Point(120, 50),
            radius: 35,
            fillColor: 'blue',
            strokeColor: 'green',
            strokeWidth: 10
        });
        
        // Make circle2 50% transparent:
        circle2.opacity = 0.5;
    
    }
    function Path56() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        path.selected = true; // Select the path
    
    }
    function Path57() {
        
        // Create a circle at position { x: 10, y: 10 }
        let circle = new paper.Path.Circle({
            center: new paper.Point(10, 10),
            radius: 10,
            fillColor: 'red'
        });
        
        // Move the circle to { x: 20, y: 20 }
        circle.position = new paper.Point(20, 20);
        
        // Move the circle 100 points to the right and 50 points down
        circle.position = circle.position.add(new paper.Point(100, 50));
    
    }
    function Path58() {
        
        // Create a circle at position { x: 20, y: 20 }
        let circle = new paper.Path.Circle({
            center: new paper.Point(20, 20),
            radius: 10,
            fillColor: 'red'
        });
        
        // Move the circle 100 points to the right
        circle.position.x += 100;
    
    }
    function Path59() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Create a group and move the path into it:
        let group = new paper.Group();
        group.addChild(path);
        
        // Access the path through the group's children array:
        group.children[0].fillColor = 'red';
    
    }
    function Path60() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        // Set the name of the path:
        path.name = 'example';
        
        // Create a group and move the path into it:
        let group = new paper.Group();
        group.addChild(path);
        
        // The path can be accessed by name:
        group.getItem('example').fillColor = 'orange';
    
    }
    function Path61() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        let group = new paper.Group();
        group.children = [path];
        
        // The path is the first child of the group:
        group.firstChild.fillColor = 'green';
    
    }
    function Path62() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Set its stroke color to RGB red:
        circle.strokeColor = new paper.Color(1, 0, 0);
    
    }
    function Path63() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            strokeColor: 'red'
        });
        
        // Set its stroke width to 10:
        circle.strokeWidth = 10;
    
    }
    function Path64() {
        
        let line = new paper.Path({
            segments: [[80, 50], [420, 50]],
            strokeColor: 'black',
            strokeWidth: 20,
            selected: true
        });
        
        // Set the stroke cap of the line to be round:
        line.strokeCap = 'round';
        
        // Copy the path and set its stroke cap to be square:
        let line2 = line.clone();
        line2.position.y += 50;
        line2.strokeCap = 'square';
        
        // Make another copy and set its stroke cap to be butt:
        line2 = line.clone();
        line2.position.y += 100;
        line2.strokeCap = 'butt';
    
    }
    function Path65() {
        
        let path = new paper.Path({
            segments: [[80, 100], [120, 40], [160, 100]],
            strokeColor: 'black',
            strokeWidth: 20,
            // Select the path, in order to see where the stroke is formed:
            selected: true
        });
        
        let path2 = path.clone();
        path2.position.x += path2.bounds.width * 1.5;
        path2.strokeJoin = 'round';
        
        let path3 = path2.clone();
        path3.position.x += path3.bounds.width * 1.5;
        path3.strokeJoin = 'bevel';
    
    }
    function Path66() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 40,
            strokeWidth: 2,
            strokeColor: 'black'
        });
        
        // Set the dashed stroke to [10pt dash, 4pt gap]:
        path.dashArray = [10, 4];
    
    }
    function Path67() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Set the fill color of the circle to RGB red:
        circle.fillColor = new paper.Color(1, 0, 0);
    
    }
    function Path68() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'white',
            // Set the shadow color of the circle to RGB black:
            shadowColor: new paper.Color(0, 0, 0),
            // Set the shadow blur radius to 12:
            shadowBlur: 12,
            // Offset the shadow by { x: 5, y: 5 }
            shadowOffset: new paper.Point(5, 5)
        });
    
    }
    function Path69() {
        
        // Create a rectangle shaped path with its top left point at:
        // {x: 50, y: 25} and a size of {width: 50, height: 50}
        let path = new paper.Path.Rectangle(new paper.Point(50, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        path.onFrame = function(this:paper.Path) {
            // Every frame, rotate the path by 3 degrees:
            this.rotate(3);
        }
    
    }
    function Path70() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is pressed on the item,
        // set its fill color to red:
        path.onMouseDown = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Path71() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse is pressed on the item, remove it:
            path.onMouseDown = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function Path72() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 50,
            fillColor: 'blue'
        });
        
        // Install a drag event handler that moves the path along.
        path.onMouseDrag = function(this:paper.Path, event:paper.MouseEvent) {
            path.position = path.position.add(event.delta);
        }
    
    }
    function Path73() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is released over the item,
        // set its fill color to red:
        path.onMouseUp = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Path74() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is clicked on the item,
        // set its fill color to red:
        path.onClick = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Path75() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse clicks on the item, remove it:
            path.onClick = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function Path76() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is double clicked on the item,
        // set its fill color to red:
        path.onDoubleClick = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Path77() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse is double clicked on the item, remove it:
            path.onDoubleClick = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function Path78() {
        
        // Create a circle shaped path at the center of the paper.view:
            let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
            });
        
        // When the mouse moves on top of the item, set its opacity
        // to a random value between 0 and 1:
        path.onMouseMove = function(this:paper.Path) {
            this.opacity = Math.random();
        }
    
    }
    function Path79() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse enters the item, set its fill color to red:
        path.onMouseEnter = function(this:paper.Path) {
            this.fillColor = 'red';
        }
        
        // When the mouse leaves the item, set its fill color to black:
        path.onMouseLeave = function(this:paper.Path) {
            this.fillColor = 'black';
        }
    
    }
    function Path80() {
        
        function enter(this:paper.Path) {
            this.fillColor = 'red';
        }
        
        function leave(this:paper.Path) {
            this.fillColor = 'black';
        }
        
        // When the mouse is pressed:
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the position of the mouse:
            let path = new paper.Path.Circle(event.point, 25);
            path.fillColor = 'black';
        
            // When the mouse enters the item, set its fill color to red:
            path.onMouseEnter = enter;
        
            // When the mouse leaves the item, set its fill color to black:
            path.onMouseLeave = leave;
        }
    
    }
    function Path81() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse leaves the item, set its fill color to red:
        path.onMouseLeave = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Path82() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        circle.set({
            strokeColor: 'red',
            strokeWidth: 10,
            fillColor: 'black',
            selected: true
        });
    
    }
    function Path83() {
        
        let circle = new paper.Path.Circle({
            center: [50, 50],
            radius: 10,
            fillColor: 'red'
        });
        
        // Make 20 copies of the circle:
        for (let i = 0; i < 20; i++) {
            let copy = circle.clone();
        
            // Distribute the copies horizontally, so we can see them:
            copy.position.x += i * copy.bounds.width;
        }
    
    }
    function Path84() {
        
        let circle = new paper.Path.Circle({
            center: [50, 50],
            radius: 5,
            fillColor: 'red'
        });
        
        // Create a rasterized version of the path:
        let raster = circle.rasterize();
        
        // Move it 100pt to the right:
        raster.position.x += 100;
        
        // Scale the path and the raster by 300%, so we can compare them:
        circle.scale(5);
        raster.scale(5);
    
    }
    function Path85() {
        
        let path = new paper.Path.Star({
            center: [50, 50],
            points: 12,
            radius1: 20,
            radius2: 40,
            fillColor: 'black'
        });
        
        // Whenever the user presses the mouse:
        function onMouseDown(event:paper.ToolEvent) {
            // If the position of the mouse is within the path,
            // set its fill color to red, otherwise set it to
            // black:
            if (path.contains(event.point)) {
                path.fillColor = 'red';
            } else {
                path.fillColor = 'black';
            }
        }
    
    }
    function Path86() {
        
        // Create a rectangle shaped path with its top left
        // point at {x: 80, y: 25} and a size of {width: 50, height: 50}:
        let path = new paper.Path.Rectangle(new paper.Point(80, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        // Rotate the path by 30 degrees:
        path.rotate(30);
    
    }
    function Path87() {
        
        // Create a rectangle shaped path with its top left
        // point at {x: 175, y: 50} and a size of {width: 100, height: 100}:
        let topLeft = new paper.Point(175, 50);
        let size = new paper.Size(100, 100);
        let path = new paper.Path.Rectangle(topLeft, size);
        path.fillColor = 'black';
        
        // Draw a circle shaped path in the center of the paper.view,
        // to show the rotation point:
        let circle = new paper.Path.Circle({
            center: paper.view.center,
            radius: 5,
            fillColor: 'white'
        });
        
        // Each frame rotate the path 3 degrees around the center point
        // of the paper.view:
        function onFrame(event:paper.IFrameEvent) {
            path.rotate(3, paper.view.center);
        }
    
    }
    function Path88() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path by 150% from its center point
        circle.scale(1.5);
    
    }
    function Path89() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path 150% from its bottom left corner
        circle.scale(1.5, circle.bounds.bottomLeft);
    
    }
    function Path90() {
        
        // Create a circle shaped path at { x: 100, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [100, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path horizontally by 300%
        circle.scale(3, 1);
    
    }
    function Path91() {
        
        // Create a rectangle shaped path with its top left corner
        // at {x: 80, y: 25} and a size of {width: 75, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [80, 25],
            size: [75, 50],
            fillColor: 'black'
        });
        
        // Create a circle shaped path with its center at {x: 80, y: 50}
        // and a radius of 30.
        let circlePath = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the circlePath to the bounding rectangle of
        // the rectangular path:
        circlePath.fitBounds(path.bounds);
    
    }
    function Path92() {
        
        // Create a rectangle shaped path with its top left corner
        // at {x: 80, y: 25} and a size of {width: 75, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [80, 25],
            size: [75, 50],
            fillColor: 'black'
        });
        
        // Create a circle shaped path with its center at {x: 80, y: 50}
        // and a radius of 30.
        let circlePath = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the circlePath to the bounding rectangle of
        // the rectangular path:
        circlePath.fitBounds(path.bounds, true);
    
    }
    function Path93() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the path to the bounding rectangle of the paper.view:
        path.fitBounds(paper.view.bounds);
    
    }
    function Path94() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse enters the item, set its fill color to red:
        path.on('mouseenter', function(this:paper.Path) {
            this.fillColor = 'red';
        });
        
        // When the mouse leaves the item, set its fill color to black:
        path.on('mouseleave', function(this:paper.Path) {
            this.fillColor = 'black';
        });
    
    }
    function Path95() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25
        });
        path.fillColor = 'black';
        
        // When the mouse enters the item, set its fill color to red:
        path.on({
            mouseenter: function(this:paper.Path) {
                this.fillColor = 'red';
            },
            mouseleave: function(this:paper.Path) {
                this.fillColor = 'black';
            }
        });
    
    }
    function Path96() {
        
        let pathHandlers = {
            mouseenter: function(this:paper.Path) {
                this.fillColor = 'red';
            },
            mouseleave: function(this:paper.Path) {
                this.fillColor = 'black';
            }
        }
        
        // When the mouse is pressed:
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the position of the mouse:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 25,
                fillColor: 'black'
            });
        
            // Attach the handers inside the object literal to the path:
            path.on(pathHandlers);
        }
    
    }
    function Path97() {
        
        function onMouseDrag(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path on the next onMouseDrag or onMouseDown event:
            path.removeOn({
                drag: true,
                down: true
            });
        }
    
    }
    function Path98() {
        
        function onMouseMove(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // On the next move event, automatically remove the path:
            path.removeOnMove();
        }
    
    }
    function Path99() {
        
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path, next time the mouse is pressed:
            path.removeOnDown();
        }
    
    }
    function Path100() {
        
        function onMouseDrag(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // On the next drag event, automatically remove the path:
            path.removeOnDrag();
        }
    
    }
    function Path101() {
        
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path, when the mouse is released:
            path.removeOnUp();
        }
    
    }
    function Path102() {
        
        let path = new paper.Path.Rectangle(new paper.Point(30, 25), new paper.Size(50, 50));
        path.strokeColor = 'black';
        
        let secondPath = path.clone();
        let intersectionGroup = new paper.Group();
        
        function onFrame(event:paper.IFrameEvent) {
            secondPath.rotate(1);
        
            let intersections = path.getIntersections(secondPath);
            intersectionGroup.removeChildren();
        
            for (let i = 0; i < intersections.length; i++) {
                let intersectionPath = new paper.Path.Circle({
                    center: intersections[i].point,
                    radius: 4,
                    fillColor: 'red',
                    parent: intersectionGroup
                });
            }
        }
    
    }
    function Path103() {
        
        let star = new paper.Path.Star({
            center: paper.view.center,
            points: 10,
            radius1: 30,
            radius2: 60,
            strokeColor: 'black'
        });
        
        let circle = new paper.Path.Circle({
            center: paper.view.center,
            radius: 3,
            fillColor: 'red'
        });
        
        function onMouseMove(event:paper.ToolEvent) {
            // Get the nearest point from the mouse position
            // to the star shaped path:
            let nearestPoint = star.getNearestPoint(event.point);
        
            // Move the red circle to the nearest point:
            circle.position = nearestPoint;
        }
    
    }
    function Path104() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Select the path, so we can inspect its segments:
        path.selected = true;
        
        // Create a copy of the path and move it by 150 points:
        let copy = path.clone();
        copy.position.x += 150;
        
        // Flatten the copied path, with a maximum error of 4 points:
        copy.flatten(4);
    
    }
    function Path105() {
        
        // Create a rectangular path with its top-left point at
        // {x: 30, y: 25} and a size of {width: 50, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [30, 25],
            size: [50, 50],
            strokeColor: 'black',
        });
        
        // Select the path, so we can see its handles:
        path.fullySelected = true;
        
        // Create a copy of the path and move it 100 to the right:
        let copy = path.clone();
        copy.position.x += 100;
        
        // Smooth the segments of the copy:
        copy.smooth({ type: 'continuous' });
    
    }
    function Path106() {
        
        let path = new paper.Path();
        path.strokeColor = 'black';
        
        path.add(new paper.Point(30, 50));
        
        let y = 5;
        let x = 3;
        
        for (let i = 0; i < 28; i++) {
            y *= -1.1;
            x *= 1.1;
            path.lineBy(new paper.Point(x, y));
        }
        
        // Create a copy of the path and move it 100 down:
        let copy = path.clone();
        copy.position.y += 120;
        
        // Select the path, so we can see its handles:
        copy.fullySelected = true;
        
        // Smooth the path using centripetal Catmull-Rom splines:
        copy.smooth({ type: 'catmull-rom', factor: 0.5 });
    
    }
    function Path107() {
        
        // Create 5 rectangles, next to each other:
        let paths:paper.Path[] = [];
        for (let i = 0; i < 5; i++) {
            paths.push(new paper.Path.Rectangle({
                point: [30 + i * 100, 30],
                size: [50, 50],
                fullySelected: true
            }));
        }
        // Smooth a range, using segments:
        paths[1].smooth({
            type: 'continuous',
            from: paths[1].segments[0],
            to: paths[1].segments[2]
        });
        
        // Smooth a range, using curves:
        paths[2].smooth({
            type: 'continuous',
            from: paths[2].curves[0],
            to: paths[2].curves[1]
        });
        
        // Smooth a range, using indices:
        paths[3].smooth({ type: 'continuous', from: 0, to: 2 });
        
        // Smooth a range, using negative indices:
        paths[4].smooth({ type: 'continuous', from: -1, to: 1 });
    
    }
    function Path108() {
        
        let path: paper.Path | null;
        function onMouseDown(event:paper.ToolEvent) {
            // If we already made a path before, deselect it:
            if (path) {
                path.selected = false;
            }
        
            // Create a new path and add the position of the mouse
            // as its first segment. Select it, so we can see the
            // segment points:
            path = new paper.Path({
                segments: [event.point],
                strokeColor: 'black',
                selected: true
            });
        }
        
        function onMouseDrag(event:paper.ToolEvent) {
            // On every drag event, add a segment to the path
            // at the position of the mouse:
            if(path)
                path.add(event.point);
        }
        
        function onMouseUp(event:paper.ToolEvent) {
            // When the mouse is released, simplify the path:
            if(path){
                path.simplify();
                path.selected = true;
            }
        }
    
    }
    function Path109() {
        
        let path = new paper.Path();
        path.strokeColor = 'black';
        
        let firstPoint = new paper.Point(30, 75);
        path.add(firstPoint);
        
        // The point through which we will create the arc:
        let throughPoint = new paper.Point(40, 40);
        
        // The point at which the arc will end:
        let toPoint = new paper.Point(130, 75);
        
        // Draw an arc through 'throughPoint' to 'toPoint'
        path.arcTo(throughPoint, toPoint);
        
        // Add a red circle shaped path at the position of 'throughPoint':
        let circle = new paper.Path.Circle(throughPoint, 3);
        circle.fillColor = 'red';
    
    }
    function Path110() {
        
        let myPath:paper.Path | null;
        function onMouseDrag(event:paper.ToolEvent) {
            // If we created a path before, remove it:
            if (myPath) {
                myPath.remove();
            }
        
            // Create a new path and add a segment point to it
            // at {x: 150, y: 150):
            myPath = new paper.Path();
            myPath.add(new paper.Point(150, 150));
        
            // Draw an arc through the position of the mouse to 'toPoint'
            let toPoint = new paper.Point(350, 150);
            myPath.arcTo(event.point, toPoint);
        
            // Select the path, so we can see its segments:
            myPath.selected = true;
        }
        
        // When the mouse is released, deselect the path
        // and fill it with black.
        function onMouseUp(event:paper.ToolEvent) {
            if(myPath){
                myPath.selected = false;
                myPath.fillColor = 'black';
            }
        }
    
    }
    function Path111() {
        
        let path = new paper.Path();
        path.strokeColor = 'black';
        
        path.add(new paper.Point(30, 75));
        path.arcTo(new paper.Point(130, 75));
        
        let path2 = new paper.Path();
        path2.strokeColor = 'red';
        path2.add(new paper.Point(180, 25));
        
        // To draw an arc in anticlockwise direction,
        // we pass `false` as the second argument to arcTo:
        path2.arcTo(new paper.Point(280, 25), false);
    
    }
    function Path112() {
        
        let myPath:paper.Path;
        
        // The mouse has to move at least 20 points before
        // the next mouse drag event is fired:
        paper.tool.minDistance = 20;
        
        // When the user clicks, create a new path and add
        // the current mouse position to it as its first segment:
        function onMouseDown(event:paper.ToolEvent) {
            myPath = new paper.Path();
            myPath.strokeColor = 'black';
            myPath.add(event.point);
        }
        
        // On each mouse drag event, draw an arc to the current
        // position of the mouse:
        function onMouseDrag(event:paper.ToolEvent) {
            myPath.arcTo(event.point);
        }
    
    }
    function Path113() {
        
        let myPath: paper.Path | null;
        function onMouseMove(event:paper.ToolEvent) {
            // If we created a path before, remove it:
            if (myPath) {
                myPath.remove();
            }
        
            // Create a new path and add a segment point to it
            // at {x: 150, y: 150):
            myPath = new paper.Path();
            myPath.add(new paper.Point(150, 150));
        
            // Draw a curve through the position of the mouse to 'toPoint'
            let toPoint = new paper.Point(350, 150);
            myPath.curveTo(event.point, toPoint);
        
            // Select the path, so we can see its segments:
            myPath.selected = true;
        }
    
    }
    function Path114() {
        
        let path = new paper.Path();
        path.strokeColor = 'black';
        
        // Add a segment at {x: 50, y: 50}
        path.add(new paper.Point(25, 25));
        
        // Add a segment relative to the last segment of the path.
        // 50 in x direction and 0 in y direction, becomes {x: 75, y: 25}
        path.lineBy(new paper.Point(50, 0));
        
        // 0 in x direction and 50 in y direction, becomes {x: 75, y: 75}
        path.lineBy(new paper.Point(0, 50));
    
    }
    function Path115() {
        
        let path = new paper.Path();
        path.strokeColor = 'black';
        
        // Add the first segment at {x: 50, y: 50}
        path.add(paper.view.center);
        
        // Loop 500 times:
        for (let i = 0; i < 500; i++) {
            // Create a vector with an ever increasing length
            // and an angle in increments of 45 degrees
            let vector = new paper.Point({
                angle: i * 45,
                length: i / 2
            });
            // Add the vector relatively to the last segment point:
            path.lineBy(vector);
        }
        
        // Smooth the handles of the path:
        path.smooth();
        
        // Uncomment the following line and click on 'run' to see
        // the construction of the path:
        // path.selected = true;
    
    }
    function PathItem0() {
        
        let path = new paper.Path.Rectangle(new paper.Point(30, 25), new paper.Size(50, 50));
        path.strokeColor = 'black';
        
        let secondPath = path.clone();
        let intersectionGroup = new paper.Group();
        
        function onFrame(event:paper.IFrameEvent) {
            secondPath.rotate(1);
        
            let intersections = path.getIntersections(secondPath);
            intersectionGroup.removeChildren();
        
            for (let i = 0; i < intersections.length; i++) {
                let intersectionPath = new paper.Path.Circle({
                    center: intersections[i].point,
                    radius: 4,
                    fillColor: 'red',
                    parent: intersectionGroup
                });
            }
        }
    
    }
    function PathItem1() {
        
        let star = new paper.Path.Star({
            center: paper.view.center,
            points: 10,
            radius1: 30,
            radius2: 60,
            strokeColor: 'black'
        });
        
        let circle = new paper.Path.Circle({
            center: paper.view.center,
            radius: 3,
            fillColor: 'red'
        });
        
        function onMouseMove(event:paper.ToolEvent) {
            // Get the nearest point from the mouse position
            // to the star shaped path:
            let nearestPoint = star.getNearestPoint(event.point);
        
            // Move the red circle to the nearest point:
            circle.position = nearestPoint;
        }
    
    }
    function PathItem2() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Select the path, so we can inspect its segments:
        path.selected = true;
        
        // Create a copy of the path and move it by 150 points:
        let copy = path.clone();
        copy.position.x += 150;
        
        // Flatten the copied path, with a maximum error of 4 points:
        copy.flatten(4);
    
    }
    function PathItem3() {
        
        // Create a rectangular path with its top-left point at
        // {x: 30, y: 25} and a size of {width: 50, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [30, 25],
            size: [50, 50],
            strokeColor: 'black',
        });
        
        // Select the path, so we can see its handles:
        path.fullySelected = true;
        
        // Create a copy of the path and move it 100 to the right:
        let copy = path.clone();
        copy.position.x += 100;
        
        // Smooth the segments of the copy:
        copy.smooth({ type: 'continuous' });
    
    }
    function PathItem4() {
        
        let path = new paper.Path();
        path.strokeColor = 'black';
        
        path.add(new paper.Point(30, 50));
        
        let y = 5;
        let x = 3;
        
        for (let i = 0; i < 28; i++) {
            y *= -1.1;
            x *= 1.1;
            path.lineBy(new paper.Point(x, y));
        }
        
        // Create a copy of the path and move it 100 down:
        let copy = path.clone();
        copy.position.y += 120;
        
        // Select the path, so we can see its handles:
        copy.fullySelected = true;
        
        // Smooth the path using centripetal Catmull-Rom splines:
        copy.smooth({ type: 'catmull-rom', factor: 0.5 });
    
    }
    function PathItem5() {
        
        // Create 5 rectangles, next to each other:
        let paths:paper.Path[] = [];
        for (let i = 0; i < 5; i++) {
            paths.push(new paper.Path.Rectangle({
                point: [30 + i * 100, 30],
                size: [50, 50],
                fullySelected: true
            }));
        }
        // Smooth a range, using segments:
        paths[1].smooth({
            type: 'continuous',
            from: paths[1].segments[0],
            to: paths[1].segments[2]
        });
        
        // Smooth a range, using curves:
        paths[2].smooth({
            type: 'continuous',
            from: paths[2].curves[0],
            to: paths[2].curves[1]
        });
        
        // Smooth a range, using indices:
        paths[3].smooth({ type: 'continuous', from: 0, to: 2 });
        
        // Smooth a range, using negative indices:
        paths[4].smooth({ type: 'continuous', from: -1, to: 1 });
    
    }
    function PathItem6() {
        
        let path:paper.Path | null;
        function onMouseDown(event:paper.ToolEvent) {
            // If we already made a path before, deselect it:
            if (path) {
                path.selected = false;
            }
        
            // Create a new path and add the position of the mouse
            // as its first segment. Select it, so we can see the
            // segment points:
            path = new paper.Path({
                segments: [event.point],
                strokeColor: 'black',
                selected: true
            });
        }
        
        function onMouseDrag(event:paper.ToolEvent) {
            // On every drag event, add a segment to the path
            // at the position of the mouse:
            if(path)
                path.add(event.point);
        }
        
        function onMouseUp(event:paper.ToolEvent) {
            // When the mouse is released, simplify the path:
            if(path){
                path.simplify();
                path.selected = true;
            }
        }
    
    }
    function PathItem7() {
        
        let path = new paper.Path();
        path.strokeColor = 'black';
        
        let firstPoint = new paper.Point(30, 75);
        path.add(firstPoint);
        
        // The point through which we will create the arc:
        let throughPoint = new paper.Point(40, 40);
        
        // The point at which the arc will end:
        let toPoint = new paper.Point(130, 75);
        
        // Draw an arc through 'throughPoint' to 'toPoint'
        path.arcTo(throughPoint, toPoint);
        
        // Add a red circle shaped path at the position of 'throughPoint':
        let circle = new paper.Path.Circle(throughPoint, 3);
        circle.fillColor = 'red';
    
    }
    function PathItem8() {
        
        let myPath: paper.Path | null;
        function onMouseDrag(event:paper.ToolEvent) {
            // If we created a path before, remove it:
            if (myPath) {
                myPath.remove();
            }
        
            // Create a new path and add a segment point to it
            // at {x: 150, y: 150):
            myPath = new paper.Path();
            myPath.add(new paper.Point(150, 150));
        
            // Draw an arc through the position of the mouse to 'toPoint'
            let toPoint = new paper.Point(350, 150);
            myPath.arcTo(event.point, toPoint);
        
            // Select the path, so we can see its segments:
            myPath.selected = true;
        }
        
        // When the mouse is released, deselect the path
        // and fill it with black.
        function onMouseUp(event:paper.ToolEvent) {
            if(myPath){
                myPath.selected = false;
                myPath.fillColor = 'black';
            }
        }
    
    }
    function PathItem9() {
        
        let path = new paper.Path();
        path.strokeColor = 'black';
        
        path.add(new paper.Point(30, 75));
        path.arcTo(new paper.Point(130, 75));
        
        let path2 = new paper.Path();
        path2.strokeColor = 'red';
        path2.add(new paper.Point(180, 25));
        
        // To draw an arc in anticlockwise direction,
        // we pass `false` as the second argument to arcTo:
        path2.arcTo(new paper.Point(280, 25), false);
    
    }
    function PathItem10() {
        
        let myPath:paper.Path | null;
        
        // The mouse has to move at least 20 points before
        // the next mouse drag event is fired:
        paper.tool.minDistance = 20;
        
        // When the user clicks, create a new path and add
        // the current mouse position to it as its first segment:
        function onMouseDown(event:paper.ToolEvent) {
            myPath = new paper.Path();
            myPath.strokeColor = 'black';
            myPath.add(event.point);
        }
        
        // On each mouse drag event, draw an arc to the current
        // position of the mouse:
        function onMouseDrag(event:paper.ToolEvent) {
            if(myPath)
                myPath.arcTo(event.point);
        }
    
    }
    function PathItem11() {
        
        let myPath:paper.Path | null;
        function onMouseMove(event:paper.ToolEvent) {
            // If we created a path before, remove it:
            if (myPath) {
                myPath.remove();
            }
        
            // Create a new path and add a segment point to it
            // at {x: 150, y: 150):
            myPath = new paper.Path();
            myPath.add(new paper.Point(150, 150));
        
            // Draw a curve through the position of the mouse to 'toPoint'
            let toPoint = new paper.Point(350, 150);
            myPath.curveTo(event.point, toPoint);
        
            // Select the path, so we can see its segments:
            myPath.selected = true;
        }
    
    }
    function PathItem12() {
        
        let path = new paper.Path();
        path.strokeColor = 'black';
        
        // Add a segment at {x: 50, y: 50}
        path.add(new paper.Point(25, 25));
        
        // Add a segment relative to the last segment of the path.
        // 50 in x direction and 0 in y direction, becomes {x: 75, y: 25}
        path.lineBy(new paper.Point(50, 0));
        
        // 0 in x direction and 50 in y direction, becomes {x: 75, y: 75}
        path.lineBy(new paper.Point(0, 50));
    
    }
    function PathItem13() {
        
        let path = new paper.Path();
        path.strokeColor = 'black';
        
        // Add the first segment at {x: 50, y: 50}
        path.add(paper.view.center);
        
        // Loop 500 times:
        for (let i = 0; i < 500; i++) {
            // Create a vector with an ever increasing length
            // and an angle in increments of 45 degrees
            let vector = new paper.Point({
                angle: i * 45,
                length: i / 2
            });
            // Add the vector relatively to the last segment point:
            path.lineBy(vector);
        }
        
        // Smooth the handles of the path:
        path.smooth();
        
        // Uncomment the following line and click on 'run' to see
        // the construction of the path:
        // path.selected = true;
    
    }
    function PathItem14() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        // Set the name of the path:
        path.name = 'example';
        
        // Create a group and add path to it as a child:
        let group = new paper.Group();
        group.addChild(path);
        
        // The path can be accessed by name:
        group.getItem('example').fillColor = 'red';
    
    }
    function PathItem15() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 30
        });
        circle.style = {
            fillColor: 'blue',
            strokeColor: 'red',
            strokeWidth: 5
        };
    
    }
    function PathItem16() {
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        let path2 = new paper.Path.Circle({
            center: new paper.Point(180, 50),
            radius: 20
        });
        
        // Copy the path style of path:
        path2.style = path.style;
    
    }
    function PathItem17() {
        
        let myStyle = {
            fillColor: 'red',
            strokeColor: 'blue',
            strokeWidth: 4
        };
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 30
        });
        path.style = myStyle;
        
        let path2 = new paper.Path.Circle({
            center: new paper.Point(150, 50),
            radius: 20
        });
        path2.style = myStyle;
    
    }
    function PathItem18() {
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Hide the path:
        path.visible = false;
    
    }
    function PathItem19() {
        
        // Create a white rectangle in the background
        // with the same dimensions as the paper.view:
        let background = new paper.Path.Rectangle(paper.view.bounds);
        background.fillColor = 'white';
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'red'
        });
        
        let circle2 = new paper.Path.Circle({
            center: new paper.Point(120, 50),
            radius: 35,
            fillColor: 'blue'
        });
        
        // Set the blend mode of circle2:
        circle2.blendMode = 'multiply';
    
    }
    function PathItem20() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'red'
        });
        
        let circle2 = new paper.Path.Circle({
            center: new paper.Point(120, 50),
            radius: 35,
            fillColor: 'blue',
            strokeColor: 'green',
            strokeWidth: 10
        });
        
        // Make circle2 50% transparent:
        circle2.opacity = 0.5;
    
    }
    function PathItem21() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        path.selected = true; // Select the path
    
    }
    function PathItem22() {
        
        // Create a circle at position { x: 10, y: 10 }
        let circle = new paper.Path.Circle({
            center: new paper.Point(10, 10),
            radius: 10,
            fillColor: 'red'
        });
        
        // Move the circle to { x: 20, y: 20 }
        circle.position = new paper.Point(20, 20);
        
        // Move the circle 100 points to the right and 50 points down
        circle.position = circle.position.add(new paper.Point(100, 50));
    
    }
    function PathItem23() {
        
        // Create a circle at position { x: 20, y: 20 }
        let circle = new paper.Path.Circle({
            center: new paper.Point(20, 20),
            radius: 10,
            fillColor: 'red'
        });
        
        // Move the circle 100 points to the right
        circle.position.x += 100;
    
    }
    function PathItem24() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Create a group and move the path into it:
        let group = new paper.Group();
        group.addChild(path);
        
        // Access the path through the group's children array:
        group.children[0].fillColor = 'red';
    
    }
    function PathItem25() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        // Set the name of the path:
        path.name = 'example';
        
        // Create a group and move the path into it:
        let group = new paper.Group();
        group.addChild(path);
        
        // The path can be accessed by name:
        group.getItem('example').fillColor = 'orange';
    
    }
    function PathItem26() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        let group = new paper.Group();
        group.children = [path];
        
        // The path is the first child of the group:
        group.firstChild.fillColor = 'green';
    
    }
    function PathItem27() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Set its stroke color to RGB red:
        circle.strokeColor = new paper.Color(1, 0, 0);
    
    }
    function PathItem28() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            strokeColor: 'red'
        });
        
        // Set its stroke width to 10:
        circle.strokeWidth = 10;
    
    }
    function PathItem29() {
        
        let line = new paper.Path({
            segments: [[80, 50], [420, 50]],
            strokeColor: 'black',
            strokeWidth: 20,
            selected: true
        });
        
        // Set the stroke cap of the line to be round:
        line.strokeCap = 'round';
        
        // Copy the path and set its stroke cap to be square:
        let line2 = line.clone();
        line2.position.y += 50;
        line2.strokeCap = 'square';
        
        // Make another copy and set its stroke cap to be butt:
        line2 = line.clone();
        line2.position.y += 100;
        line2.strokeCap = 'butt';
    
    }
    function PathItem30() {
        
        let path = new paper.Path({
            segments: [[80, 100], [120, 40], [160, 100]],
            strokeColor: 'black',
            strokeWidth: 20,
            // Select the path, in order to see where the stroke is formed:
            selected: true
        });
        
        let path2 = path.clone();
        path2.position.x += path2.bounds.width * 1.5;
        path2.strokeJoin = 'round';
        
        let path3 = path2.clone();
        path3.position.x += path3.bounds.width * 1.5;
        path3.strokeJoin = 'bevel';
    
    }
    function PathItem31() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 40,
            strokeWidth: 2,
            strokeColor: 'black'
        });
        
        // Set the dashed stroke to [10pt dash, 4pt gap]:
        path.dashArray = [10, 4];
    
    }
    function PathItem32() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Set the fill color of the circle to RGB red:
        circle.fillColor = new paper.Color(1, 0, 0);
    
    }
    function PathItem33() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'white',
            // Set the shadow color of the circle to RGB black:
            shadowColor: new paper.Color(0, 0, 0),
            // Set the shadow blur radius to 12:
            shadowBlur: 12,
            // Offset the shadow by { x: 5, y: 5 }
            shadowOffset: new paper.Point(5, 5)
        });
    
    }
    function PathItem34() {
        
        // Create a rectangle shaped path with its top left point at:
        // {x: 50, y: 25} and a size of {width: 50, height: 50}
        let path = new paper.Path.Rectangle(new paper.Point(50, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        path.onFrame = function(this:paper.Path) {
            // Every frame, rotate the path by 3 degrees:
            this.rotate(3);
        }
    
    }
    function PathItem35() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is pressed on the item,
        // set its fill color to red:
        path.onMouseDown = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function PathItem36() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse is pressed on the item, remove it:
            path.onMouseDown = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function PathItem37() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 50,
            fillColor: 'blue'
        });
        
        // Install a drag event handler that moves the path along.
        path.onMouseDrag = function(this:paper.Path, event:paper.MouseEvent) {
            path.position = path.position.add(event.delta);
        }
    
    }
    function PathItem38() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is released over the item,
        // set its fill color to red:
        path.onMouseUp = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function PathItem39() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is clicked on the item,
        // set its fill color to red:
        path.onClick = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function PathItem40() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse clicks on the item, remove it:
            path.onClick = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function PathItem41() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is double clicked on the item,
        // set its fill color to red:
        path.onDoubleClick = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function PathItem42() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse is double clicked on the item, remove it:
            path.onDoubleClick = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function PathItem43() {
        
        // Create a circle shaped path at the center of the paper.view:
            let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
            });
        
        // When the mouse moves on top of the item, set its opacity
        // to a random value between 0 and 1:
        path.onMouseMove = function(this:paper.Path) {
            this.opacity = Math.random();
        }
    
    }
    function PathItem44() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse enters the item, set its fill color to red:
        path.onMouseEnter = function(this:paper.Path) {
            this.fillColor = 'red';
        }
        
        // When the mouse leaves the item, set its fill color to black:
        path.onMouseLeave = function(this:paper.Path) {
            this.fillColor = 'black';
        }
    
    }
    function PathItem45() {
        
        function enter(this:paper.Path, event:paper.MouseEvent) {
            this.fillColor = 'red';
        }
        
        function leave(this:paper.Path, event:paper.MouseEvent) {
            this.fillColor = 'black';
        }
        
        // When the mouse is pressed:
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the position of the mouse:
            let path = new paper.Path.Circle(event.point, 25);
            path.fillColor = 'black';
        
            // When the mouse enters the item, set its fill color to red:
            path.onMouseEnter = enter;
        
            // When the mouse leaves the item, set its fill color to black:
            path.onMouseLeave = leave;
        }
    
    }
    function PathItem46() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse leaves the item, set its fill color to red:
        path.onMouseLeave = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function PathItem47() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        circle.set({
            strokeColor: 'red',
            strokeWidth: 10,
            fillColor: 'black',
            selected: true
        });
    
    }
    function PathItem48() {
        
        let circle = new paper.Path.Circle({
            center: [50, 50],
            radius: 10,
            fillColor: 'red'
        });
        
        // Make 20 copies of the circle:
        for (let i = 0; i < 20; i++) {
            let copy = circle.clone();
        
            // Distribute the copies horizontally, so we can see them:
            copy.position.x += i * copy.bounds.width;
        }
    
    }
    function PathItem49() {
        
        let circle = new paper.Path.Circle({
            center: [50, 50],
            radius: 5,
            fillColor: 'red'
        });
        
        // Create a rasterized version of the path:
        let raster = circle.rasterize();
        
        // Move it 100pt to the right:
        raster.position.x += 100;
        
        // Scale the path and the raster by 300%, so we can compare them:
        circle.scale(5);
        raster.scale(5);
    
    }
    function PathItem50() {
        
        let path = new paper.Path.Star({
            center: [50, 50],
            points: 12,
            radius1: 20,
            radius2: 40,
            fillColor: 'black'
        });
        
        // Whenever the user presses the mouse:
        function onMouseDown(event:paper.ToolEvent) {
            // If the position of the mouse is within the path,
            // set its fill color to red, otherwise set it to
            // black:
            if (path.contains(event.point)) {
                path.fillColor = 'red';
            } else {
                path.fillColor = 'black';
            }
        }
    
    }
    function PathItem51() {
        
        // Create a rectangle shaped path with its top left
        // point at {x: 80, y: 25} and a size of {width: 50, height: 50}:
        let path = new paper.Path.Rectangle(new paper.Point(80, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        // Rotate the path by 30 degrees:
        path.rotate(30);
    
    }
    function PathItem52() {
        
        // Create a rectangle shaped path with its top left
        // point at {x: 175, y: 50} and a size of {width: 100, height: 100}:
        let topLeft = new paper.Point(175, 50);
        let size = new paper.Size(100, 100);
        let path = new paper.Path.Rectangle(topLeft, size);
        path.fillColor = 'black';
        
        // Draw a circle shaped path in the center of the paper.view,
        // to show the rotation point:
        let circle = new paper.Path.Circle({
            center: paper.view.center,
            radius: 5,
            fillColor: 'white'
        });
        
        // Each frame rotate the path 3 degrees around the center point
        // of the paper.view:
        function onFrame(event:paper.IFrameEvent) {
            path.rotate(3, paper.view.center);
        }
    
    }
    function PathItem53() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path by 150% from its center point
        circle.scale(1.5);
    
    }
    function PathItem54() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path 150% from its bottom left corner
        circle.scale(1.5, circle.bounds.bottomLeft);
    
    }
    function PathItem55() {
        
        // Create a circle shaped path at { x: 100, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [100, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path horizontally by 300%
        circle.scale(3, 1);
    
    }
    function PathItem56() {
        
        // Create a rectangle shaped path with its top left corner
        // at {x: 80, y: 25} and a size of {width: 75, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [80, 25],
            size: [75, 50],
            fillColor: 'black'
        });
        
        // Create a circle shaped path with its center at {x: 80, y: 50}
        // and a radius of 30.
        let circlePath = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the circlePath to the bounding rectangle of
        // the rectangular path:
        circlePath.fitBounds(path.bounds);
    
    }
    function PathItem57() {
        
        // Create a rectangle shaped path with its top left corner
        // at {x: 80, y: 25} and a size of {width: 75, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [80, 25],
            size: [75, 50],
            fillColor: 'black'
        });
        
        // Create a circle shaped path with its center at {x: 80, y: 50}
        // and a radius of 30.
        let circlePath = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the circlePath to the bounding rectangle of
        // the rectangular path:
        circlePath.fitBounds(path.bounds, true);
    
    }
    function PathItem58() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the path to the bounding rectangle of the paper.view:
        path.fitBounds(paper.view.bounds);
    
    }
    function PathItem59() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse enters the item, set its fill color to red:
        path.on('mouseenter', function(this:paper.Path) {
            this.fillColor = 'red';
        });
        
        // When the mouse leaves the item, set its fill color to black:
        path.on('mouseleave', function(this:paper.Path) {
            this.fillColor = 'black';
        });
    
    }
    function PathItem60() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25
        });
        path.fillColor = 'black';
        
        // When the mouse enters the item, set its fill color to red:
        path.on({
            mouseenter: function(this:paper.Path) {
                this.fillColor = 'red';
            },
            mouseleave: function(this:paper.Path) {
                this.fillColor = 'black';
            }
        });
    
    }
    function PathItem61() {
        
        let pathHandlers = {
            mouseenter: function(this:paper.Path) {
                this.fillColor = 'red';
            },
            mouseleave: function(this:paper.Path) {
                this.fillColor = 'black';
            }
        }
        
        // When the mouse is pressed:
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the position of the mouse:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 25,
                fillColor: 'black'
            });
        
            // Attach the handers inside the object literal to the path:
            path.on(pathHandlers);
        }
    
    }
    function PathItem62() {
        
        function onMouseDrag(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path on the next onMouseDrag or onMouseDown event:
            path.removeOn({
                drag: true,
                down: true
            });
        }
    
    }
    function PathItem63() {
        
        function onMouseMove(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // On the next move event, automatically remove the path:
            path.removeOnMove();
        }
    
    }
    function PathItem64() {
        
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path, next time the mouse is pressed:
            path.removeOnDown();
        }
    
    }
    function PathItem65() {
        
        function onMouseDrag(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // On the next drag event, automatically remove the path:
            path.removeOnDrag();
        }
    
    }
    function PathItem66() {
        
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path, when the mouse is released:
            path.removeOnUp();
        }
    
    }
    function Point0() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 40
        });
        
        // Select the third segment point:
        path.segments[2].point.selected = true;
        
        // Select the item's position, which is the pivot point
        // around which it is transformed:
        path.position.selected = true;
    
    }
    function PointText0() {
        
        let text = new paper.PointText(new paper.Point(200, 50));
        text.justification = 'center';
        text.fillColor = 'black';
        text.content = 'The contents of the point text';
    
    }
    function PointText1() {
        
        let text = new paper.PointText({
            point: [50, 50],
            content: 'The contents of the point text',
            fillColor: 'black',
            fontFamily: 'Courier New',
            fontWeight: 'bold',
            fontSize: 25
        });
    
    }
    function PointText2() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        // Set the name of the path:
        path.name = 'example';
        
        // Create a group and add path to it as a child:
        let group = new paper.Group();
        group.addChild(path);
        
        // The path can be accessed by name:
        group.getItem('example').fillColor = 'red';
    
    }
    function PointText3() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 30
        });
        circle.style = {
            fillColor: 'blue',
            strokeColor: 'red',
            strokeWidth: 5
        };
    
    }
    function PointText4() {
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        let path2 = new paper.Path.Circle({
            center: new paper.Point(180, 50),
            radius: 20
        });
        
        // Copy the path style of path:
        path2.style = path.style;
    
    }
    function PointText5() {
        
        let myStyle = {
            fillColor: 'red',
            strokeColor: 'blue',
            strokeWidth: 4
        };
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 30
        });
        path.style = myStyle;
        
        let path2 = new paper.Path.Circle({
            center: new paper.Point(150, 50),
            radius: 20
        });
        path2.style = myStyle;
    
    }
    function PointText6() {
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Hide the path:
        path.visible = false;
    
    }
    function PointText7() {
        
        // Create a white rectangle in the background
        // with the same dimensions as the paper.view:
        let background = new paper.Path.Rectangle(paper.view.bounds);
        background.fillColor = 'white';
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'red'
        });
        
        let circle2 = new paper.Path.Circle({
            center: new paper.Point(120, 50),
            radius: 35,
            fillColor: 'blue'
        });
        
        // Set the blend mode of circle2:
        circle2.blendMode = 'multiply';
    
    }
    function PointText8() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'red'
        });
        
        let circle2 = new paper.Path.Circle({
            center: new paper.Point(120, 50),
            radius: 35,
            fillColor: 'blue',
            strokeColor: 'green',
            strokeWidth: 10
        });
        
        // Make circle2 50% transparent:
        circle2.opacity = 0.5;
    
    }
    function PointText9() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        path.selected = true; // Select the path
    
    }
    function PointText10() {
        
        // Create a circle at position { x: 10, y: 10 }
        let circle = new paper.Path.Circle({
            center: new paper.Point(10, 10),
            radius: 10,
            fillColor: 'red'
        });
        
        // Move the circle to { x: 20, y: 20 }
        circle.position = new paper.Point(20, 20);
        
        // Move the circle 100 points to the right and 50 points down
        circle.position = circle.position.add(new paper.Point(100, 50));
    
    }
    function PointText11() {
        
        // Create a circle at position { x: 20, y: 20 }
        let circle = new paper.Path.Circle({
            center: new paper.Point(20, 20),
            radius: 10,
            fillColor: 'red'
        });
        
        // Move the circle 100 points to the right
        circle.position.x += 100;
    
    }
    function PointText12() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Create a group and move the path into it:
        let group = new paper.Group();
        group.addChild(path);
        
        // Access the path through the group's children array:
        group.children[0].fillColor = 'red';
    
    }
    function PointText13() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        // Set the name of the path:
        path.name = 'example';
        
        // Create a group and move the path into it:
        let group = new paper.Group();
        group.addChild(path);
        
        // The path can be accessed by name:
        group.getItem('example').fillColor = 'orange';
    
    }
    function PointText14() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        let group = new paper.Group();
        group.children = [path];
        
        // The path is the first child of the group:
        group.firstChild.fillColor = 'green';
    
    }
    function PointText15() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Set its stroke color to RGB red:
        circle.strokeColor = new paper.Color(1, 0, 0);
    
    }
    function PointText16() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            strokeColor: 'red'
        });
        
        // Set its stroke width to 10:
        circle.strokeWidth = 10;
    
    }
    function PointText17() {
        
        let line = new paper.Path({
            segments: [[80, 50], [420, 50]],
            strokeColor: 'black',
            strokeWidth: 20,
            selected: true
        });
        
        // Set the stroke cap of the line to be round:
        line.strokeCap = 'round';
        
        // Copy the path and set its stroke cap to be square:
        let line2 = line.clone();
        line2.position.y += 50;
        line2.strokeCap = 'square';
        
        // Make another copy and set its stroke cap to be butt:
        line2 = line.clone();
        line2.position.y += 100;
        line2.strokeCap = 'butt';
    
    }
    function PointText18() {
        
        let path = new paper.Path({
            segments: [[80, 100], [120, 40], [160, 100]],
            strokeColor: 'black',
            strokeWidth: 20,
            // Select the path, in order to see where the stroke is formed:
            selected: true
        });
        
        let path2 = path.clone();
        path2.position.x += path2.bounds.width * 1.5;
        path2.strokeJoin = 'round';
        
        let path3 = path2.clone();
        path3.position.x += path3.bounds.width * 1.5;
        path3.strokeJoin = 'bevel';
    
    }
    function PointText19() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 40,
            strokeWidth: 2,
            strokeColor: 'black'
        });
        
        // Set the dashed stroke to [10pt dash, 4pt gap]:
        path.dashArray = [10, 4];
    
    }
    function PointText20() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Set the fill color of the circle to RGB red:
        circle.fillColor = new paper.Color(1, 0, 0);
    
    }
    function PointText21() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'white',
            // Set the shadow color of the circle to RGB black:
            shadowColor: new paper.Color(0, 0, 0),
            // Set the shadow blur radius to 12:
            shadowBlur: 12,
            // Offset the shadow by { x: 5, y: 5 }
            shadowOffset: new paper.Point(5, 5)
        });
    
    }
    function PointText22() {
        
        // Create a rectangle shaped path with its top left point at:
        // {x: 50, y: 25} and a size of {width: 50, height: 50}
        let path = new paper.Path.Rectangle(new paper.Point(50, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        path.onFrame = function(this:paper.Path) {
            // Every frame, rotate the path by 3 degrees:
            this.rotate(3);
        }
    
    }
    function PointText23() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is pressed on the item,
        // set its fill color to red:
        path.onMouseDown = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function PointText24() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse is pressed on the item, remove it:
            path.onMouseDown = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function PointText25() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 50,
            fillColor: 'blue'
        });
        
        // Install a drag event handler that moves the path along.
        path.onMouseDrag = function(this:paper.Path, event:paper.MouseEvent) {
            path.position = path.position.add(event.delta);
        }
    
    }
    function PointText26() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is released over the item,
        // set its fill color to red:
        path.onMouseUp = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function PointText27() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is clicked on the item,
        // set its fill color to red:
        path.onClick = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function PointText28() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse clicks on the item, remove it:
            path.onClick = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function PointText29() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is double clicked on the item,
        // set its fill color to red:
        path.onDoubleClick = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function PointText30() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse is double clicked on the item, remove it:
            path.onDoubleClick = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function PointText31() {
        
        // Create a circle shaped path at the center of the paper.view:
            let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
            });
        
        // When the mouse moves on top of the item, set its opacity
        // to a random value between 0 and 1:
        path.onMouseMove = function(this:paper.Path) {
            this.opacity = Math.random();
        }
    
    }
    function PointText32() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse enters the item, set its fill color to red:
        path.onMouseEnter = function(this:paper.Path) {
            this.fillColor = 'red';
        }
        
        // When the mouse leaves the item, set its fill color to black:
        path.onMouseLeave = function(this:paper.Path) {
            this.fillColor = 'black';
        }
    
    }
    function PointText33() {
        
        function enter(this:paper.Path, event:paper.MouseEvent) {
            this.fillColor = 'red';
        }
        
        function leave(this:paper.Path, event:paper.MouseEvent) {
            this.fillColor = 'black';
        }
        
        // When the mouse is pressed:
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the position of the mouse:
            let path = new paper.Path.Circle(event.point, 25);
            path.fillColor = 'black';
        
            // When the mouse enters the item, set its fill color to red:
            path.onMouseEnter = enter;
        
            // When the mouse leaves the item, set its fill color to black:
            path.onMouseLeave = leave;
        }
    
    }
    function PointText34() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse leaves the item, set its fill color to red:
        path.onMouseLeave = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function PointText35() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        circle.set({
            strokeColor: 'red',
            strokeWidth: 10,
            fillColor: 'black',
            selected: true
        });
    
    }
    function PointText36() {
        
        let circle = new paper.Path.Circle({
            center: [50, 50],
            radius: 10,
            fillColor: 'red'
        });
        
        // Make 20 copies of the circle:
        for (let i = 0; i < 20; i++) {
            let copy = circle.clone();
        
            // Distribute the copies horizontally, so we can see them:
            copy.position.x += i * copy.bounds.width;
        }
    
    }
    function PointText37() {
        
        let circle = new paper.Path.Circle({
            center: [50, 50],
            radius: 5,
            fillColor: 'red'
        });
        
        // Create a rasterized version of the path:
        let raster = circle.rasterize();
        
        // Move it 100pt to the right:
        raster.position.x += 100;
        
        // Scale the path and the raster by 300%, so we can compare them:
        circle.scale(5);
        raster.scale(5);
    
    }
    function PointText38() {
        
        let path = new paper.Path.Star({
            center: [50, 50],
            points: 12,
            radius1: 20,
            radius2: 40,
            fillColor: 'black'
        });
        
        // Whenever the user presses the mouse:
        function onMouseDown(event:paper.ToolEvent) {
            // If the position of the mouse is within the path,
            // set its fill color to red, otherwise set it to
            // black:
            if (path.contains(event.point)) {
                path.fillColor = 'red';
            } else {
                path.fillColor = 'black';
            }
        }
    
    }
    function PointText39() {
        
        // Create a rectangle shaped path with its top left
        // point at {x: 80, y: 25} and a size of {width: 50, height: 50}:
        let path = new paper.Path.Rectangle(new paper.Point(80, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        // Rotate the path by 30 degrees:
        path.rotate(30);
    
    }
    function PointText40() {
        
        // Create a rectangle shaped path with its top left
        // point at {x: 175, y: 50} and a size of {width: 100, height: 100}:
        let topLeft = new paper.Point(175, 50);
        let size = new paper.Size(100, 100);
        let path = new paper.Path.Rectangle(topLeft, size);
        path.fillColor = 'black';
        
        // Draw a circle shaped path in the center of the paper.view,
        // to show the rotation point:
        let circle = new paper.Path.Circle({
            center: paper.view.center,
            radius: 5,
            fillColor: 'white'
        });
        
        // Each frame rotate the path 3 degrees around the center point
        // of the paper.view:
        function onFrame(event:paper.IFrameEvent) {
            path.rotate(3, paper.view.center);
        }
    
    }
    function PointText41() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path by 150% from its center point
        circle.scale(1.5);
    
    }
    function PointText42() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path 150% from its bottom left corner
        circle.scale(1.5, circle.bounds.bottomLeft);
    
    }
    function PointText43() {
        
        // Create a circle shaped path at { x: 100, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [100, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path horizontally by 300%
        circle.scale(3, 1);
    
    }
    function PointText44() {
        
        // Create a rectangle shaped path with its top left corner
        // at {x: 80, y: 25} and a size of {width: 75, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [80, 25],
            size: [75, 50],
            fillColor: 'black'
        });
        
        // Create a circle shaped path with its center at {x: 80, y: 50}
        // and a radius of 30.
        let circlePath = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the circlePath to the bounding rectangle of
        // the rectangular path:
        circlePath.fitBounds(path.bounds);
    
    }
    function PointText45() {
        
        // Create a rectangle shaped path with its top left corner
        // at {x: 80, y: 25} and a size of {width: 75, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [80, 25],
            size: [75, 50],
            fillColor: 'black'
        });
        
        // Create a circle shaped path with its center at {x: 80, y: 50}
        // and a radius of 30.
        let circlePath = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the circlePath to the bounding rectangle of
        // the rectangular path:
        circlePath.fitBounds(path.bounds, true);
    
    }
    function PointText46() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the path to the bounding rectangle of the paper.view:
        path.fitBounds(paper.view.bounds);
    
    }
    function PointText47() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse enters the item, set its fill color to red:
        path.on('mouseenter', function(this:paper.Path) {
            this.fillColor = 'red';
        });
        
        // When the mouse leaves the item, set its fill color to black:
        path.on('mouseleave', function(this:paper.Path) {
            this.fillColor = 'black';
        });
    
    }
    function PointText48() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25
        });
        path.fillColor = 'black';
        
        // When the mouse enters the item, set its fill color to red:
        path.on({
            mouseenter: function(this:paper.Path) {
                this.fillColor = 'red';
            },
            mouseleave: function(this:paper.Path) {
                this.fillColor = 'black';
            }
        });
    
    }
    function PointText49() {
        
        let pathHandlers = {
            mouseenter: function(this:paper.Path) {
                this.fillColor = 'red';
            },
            mouseleave: function(this:paper.Path) {
                this.fillColor = 'black';
            }
        }
        
        // When the mouse is pressed:
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the position of the mouse:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 25,
                fillColor: 'black'
            });
        
            // Attach the handers inside the object literal to the path:
            path.on(pathHandlers);
        }
    
    }
    function PointText50() {
        
        function onMouseDrag(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path on the next onMouseDrag or onMouseDown event:
            path.removeOn({
                drag: true,
                down: true
            });
        }
    
    }
    function PointText51() {
        
        function onMouseMove(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // On the next move event, automatically remove the path:
            path.removeOnMove();
        }
    
    }
    function PointText52() {
        
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path, next time the mouse is pressed:
            path.removeOnDown();
        }
    
    }
    function PointText53() {
        
        function onMouseDrag(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // On the next drag event, automatically remove the path:
            path.removeOnDrag();
        }
    
    }
    function PointText54() {
        
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path, when the mouse is released:
            path.removeOnUp();
        }
    
    }
    function PointText55() {
        
        // Create a point-text item at {x: 30, y: 30}:
        let text = new paper.PointText(new paper.Point(30, 30));
        text.fillColor = 'black';
        
        // Set the content of the text item:
        text.content = 'Hello world';
    
    }
    function PointText56() {
        
        // Create a point-text item at {x: 30, y: 30}:
        let text = new paper.PointText(new paper.Point(30, 30));
        text.fillColor = 'black';
        
        text.content = 'Move your mouse over the paper.view, to see its position';
        
        function onMouseMove(event:paper.ToolEvent) {
            // Each time the mouse is moved, set the content of
            // the point text to describe the position of the mouse:
            text.content = 'Your position is: ' + event.point.toString();
        }
    
    }
    function Project0() {
        
        paper.project.currentStyle = {
            fillColor: 'red',
            strokeColor: 'black',
            strokeWidth: 5
        }
        
        // The following paths will take over all style properties of
        // the current style:
        let path = new paper.Path.Circle(new paper.Point(75, 50), 30);
        let path2 = new paper.Path.Circle(new paper.Point(175, 50), 20);
    
    }
    function Project1() {
        
        paper.project.currentStyle.fillColor = 'red';
        
        // The following path will take over the fill color we just set:
        let path = new paper.Path.Circle(new paper.Point(75, 50), 30);
        let path2 = new paper.Path.Circle(new paper.Point(175, 50), 20);
    
    }
    function Project2() {
        
        let path1 = new paper.Path.Circle({
            center: [50, 50],
            radius: 25,
            fillColor: 'black'
        });
        
        let path2 = new paper.Path.Circle({
            center: [150, 50],
            radius: 25,
            fillColor: 'black'
        });
        
        // Select path2:
        path2.selected = true;
        
        // Fetch all selected path items:
        let items = paper.project.getItems({
            selected: true,
            class: paper.Path
        });
        
        // Change the fill color of the selected path to red:
        items[0].fillColor = 'red';
    
    }
    function Project3() {
        
        let path1 = new paper.Path.Circle({
            center: [50, 50],
            radius: 25,
            fillColor: 'black'
        });
        
        let path2 = new paper.Path.Circle({
            center: [150, 50],
            radius: 25,
            fillColor: 'purple'
        });
        
        // Fetch all items with a purple fill color:
        let items = paper.project.getItems({
            fillColor: 'purple'
        });
        
        // Select the fetched item:
        items[0].selected = true;
    
    }
    function Project4() {
        
        let path1 = new paper.Path.Circle({
            center: [50, 50],
            radius: 25,
            fillColor: 'black'
        });
        
        let path2 = new paper.Path.Circle({
            center: [150, 50],
            radius: 25,
            fillColor: 'black'
        });
        
        // Fetch all path items positioned at {x: 150, y: 150}:
        let items = paper.project.getItems({
            position: [150, 50]
        });
        
        // Select the fetched path:
        items[0].selected = true;
    
    }
    function Project5() {
        
        // Create a circle shaped path:
        let path1 = new paper.Path.Circle({
            center: [50, 50],
            radius: 25,
            fillColor: 'black'
        });
        
        // Create a circle shaped path with 50% opacity:
        let path2 = new paper.Path.Circle({
            center: [150, 50],
            radius: 25,
            fillColor: 'black',
            opacity: 0.5
        });
        
        // Fetch all items whose opacity is smaller than 1
        let items = paper.project.getItems({
            opacity: function(value:number) {
                return value < 1;
            }
        });
        
        // Select the fetched item:
        items[0].selected = true;
    
    }
    function Project6() {
        
        // Create a rectangle shaped path (4 segments):
        let path1 = new paper.Path.Rectangle({
            from: [25, 25],
            to: [75, 75],
            strokeColor: 'black',
            strokeWidth: 10
        });
        
        // Create a line shaped path (2 segments):
        let path2 = new paper.Path.Line({
            from: [125, 50],
            to: [175, 50],
            strokeColor: 'black',
            strokeWidth: 10
        });
        
        // Fetch all paths with 2 segments:
        let items = paper.project.getItems({
            class: paper.Path,
         segments: function(segments: paper.Segment[]) {
                return segments.length == 2;
         }
        });
        
        // Select the fetched path:
        items[0].selected = true;
    
    }
    function Project7() {
        
        // Create a black circle shaped path:
        let path1 = new paper.Path.Circle({
            center: [50, 50],
            radius: 25,
            fillColor: 'black',
            data: {
                person: {
                    name: 'john',
                    length: 200,
                    hair: true
                }
            }
        });
        
        // Create a red circle shaped path:
        let path2 = new paper.Path.Circle({
            center: [150, 50],
            radius: 25,
            fillColor: 'red',
            data: {
                person: {
                    name: 'john',
                    length: 180,
                    hair: false
                }
            }
        });
        
        // Fetch all items whose data object contains a person
        // object whose name is john and length is 180:
        let items = paper.project.getItems({
            data: {
                person: {
                    name: 'john',
                    length: 180
                }
            }
        });
        
        // Select the fetched item:
        items[0].selected = true;
    
    }
    function Project8() {
        
        // Create a path named 'aardvark':
        let path1 = new paper.Path.Circle({
            center: [50, 50],
            radius: 25,
            fillColor: 'black',
            name: 'aardvark'
        });
        
        // Create a path named 'apple':
        let path2 = new paper.Path.Circle({
            center: [150, 50],
            radius: 25,
            fillColor: 'black',
            name: 'apple'
        });
        
        // Create a path named 'banana':
        path2 = new paper.Path.Circle({
            center: [250, 50],
            radius: 25,
            fillColor: 'black',
            name: 'banana'
        });
        
        // Fetch all items that have a name starting with 'a':
        let items = paper.project.getItems({
            name: /^a/
        });
        
        // Change the fill color of the matched items:
        for (let i = 0; i < items.length; i++) {
         items[i].fillColor = 'red';
        }
    
    }
    function Raster0() {
        
        let url = 'http://assets.paperjs.org/images/marilyn.jpg';
        let raster = new paper.Raster(url);
        
        // If you create a Raster using a url, you can use the onLoad
        // handler to do something once it is loaded:
        raster.onLoad = function() {
            console.log('The image has loaded.');
        };
    
    }
    function Raster1() {
        
        let raster = new paper.Raster({
            source: 'http://assets.paperjs.org/images/marilyn.jpg',
            position: paper.view.center
        });
        
        raster.scale(0.5);
        raster.rotate(10);
    
    }
    function Raster2() {
        
        let raster = new paper.Raster();
        raster.source = 'http://paperjs.org/about/paper-js.gif';
        raster.position = paper.view.center;
    
    }
    function Raster3() {
        
        let raster = new paper.Raster({
            source: 'http://paperjs.org/about/paper-js.gif',
            position: paper.view.center
        });
    
    }
    function Raster4() {
        
        let raster = new paper.Raster({
            crossOrigin: 'anonymous',
            source: 'http://assets.paperjs.org/images/marilyn.jpg',
            position: paper.view.center
        });
        
        console.log(paper.view.element.toDataURL('image/png').substring(0, 32));
    
    }
    function Raster5() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        // Set the name of the path:
        path.name = 'example';
        
        // Create a group and add path to it as a child:
        let group = new paper.Group();
        group.addChild(path);
        
        // The path can be accessed by name:
        group.getItem('example').fillColor = 'red';
    
    }
    function Raster6() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 30
        });
        circle.style = {
            fillColor: 'blue',
            strokeColor: 'red',
            strokeWidth: 5
        };
    
    }
    function Raster7() {
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        let path2 = new paper.Path.Circle({
            center: new paper.Point(180, 50),
            radius: 20
        });
        
        // Copy the path style of path:
        path2.style = path.style;
    
    }
    function Raster8() {
        
        let myStyle = {
            fillColor: 'red',
            strokeColor: 'blue',
            strokeWidth: 4
        };
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 30
        });
        path.style = myStyle;
        
        let path2 = new paper.Path.Circle({
            center: new paper.Point(150, 50),
            radius: 20
        });
        path2.style = myStyle;
    
    }
    function Raster9() {
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Hide the path:
        path.visible = false;
    
    }
    function Raster10() {
        
        // Create a white rectangle in the background
        // with the same dimensions as the paper.view:
        let background = new paper.Path.Rectangle(paper.view.bounds);
        background.fillColor = 'white';
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'red'
        });
        
        let circle2 = new paper.Path.Circle({
            center: new paper.Point(120, 50),
            radius: 35,
            fillColor: 'blue'
        });
        
        // Set the blend mode of circle2:
        circle2.blendMode = 'multiply';
    
    }
    function Raster11() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'red'
        });
        
        let circle2 = new paper.Path.Circle({
            center: new paper.Point(120, 50),
            radius: 35,
            fillColor: 'blue',
            strokeColor: 'green',
            strokeWidth: 10
        });
        
        // Make circle2 50% transparent:
        circle2.opacity = 0.5;
    
    }
    function Raster12() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        path.selected = true; // Select the path
    
    }
    function Raster13() {
        
        // Create a circle at position { x: 10, y: 10 }
        let circle = new paper.Path.Circle({
            center: new paper.Point(10, 10),
            radius: 10,
            fillColor: 'red'
        });
        
        // Move the circle to { x: 20, y: 20 }
        circle.position = new paper.Point(20, 20);
        
        // Move the circle 100 points to the right and 50 points down
        circle.position = circle.position.add(new paper.Point(100, 50));
    
    }
    function Raster14() {
        
        // Create a circle at position { x: 20, y: 20 }
        let circle = new paper.Path.Circle({
            center: new paper.Point(20, 20),
            radius: 10,
            fillColor: 'red'
        });
        
        // Move the circle 100 points to the right
        circle.position.x += 100;
    
    }
    function Raster15() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Create a group and move the path into it:
        let group = new paper.Group();
        group.addChild(path);
        
        // Access the path through the group's children array:
        group.children[0].fillColor = 'red';
    
    }
    function Raster16() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        // Set the name of the path:
        path.name = 'example';
        
        // Create a group and move the path into it:
        let group = new paper.Group();
        group.addChild(path);
        
        // The path can be accessed by name:
        group.getItem('example').fillColor = 'orange';
    
    }
    function Raster17() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        let group = new paper.Group();
        group.children = [path];
        
        // The path is the first child of the group:
        group.firstChild.fillColor = 'green';
    
    }
    function Raster18() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Set its stroke color to RGB red:
        circle.strokeColor = new paper.Color(1, 0, 0);
    
    }
    function Raster19() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            strokeColor: 'red'
        });
        
        // Set its stroke width to 10:
        circle.strokeWidth = 10;
    
    }
    function Raster20() {
        
        let line = new paper.Path({
            segments: [[80, 50], [420, 50]],
            strokeColor: 'black',
            strokeWidth: 20,
            selected: true
        });
        
        // Set the stroke cap of the line to be round:
        line.strokeCap = 'round';
        
        // Copy the path and set its stroke cap to be square:
        let line2 = line.clone();
        line2.position.y += 50;
        line2.strokeCap = 'square';
        
        // Make another copy and set its stroke cap to be butt:
        line2 = line.clone();
        line2.position.y += 100;
        line2.strokeCap = 'butt';
    
    }
    function Raster21() {
        
        let path = new paper.Path({
            segments: [[80, 100], [120, 40], [160, 100]],
            strokeColor: 'black',
            strokeWidth: 20,
            // Select the path, in order to see where the stroke is formed:
            selected: true
        });
        
        let path2 = path.clone();
        path2.position.x += path2.bounds.width * 1.5;
        path2.strokeJoin = 'round';
        
        let path3 = path2.clone();
        path3.position.x += path3.bounds.width * 1.5;
        path3.strokeJoin = 'bevel';
    
    }
    function Raster22() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 40,
            strokeWidth: 2,
            strokeColor: 'black'
        });
        
        // Set the dashed stroke to [10pt dash, 4pt gap]:
        path.dashArray = [10, 4];
    
    }
    function Raster23() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Set the fill color of the circle to RGB red:
        circle.fillColor = new paper.Color(1, 0, 0);
    
    }
    function Raster24() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'white',
            // Set the shadow color of the circle to RGB black:
            shadowColor: new paper.Color(0, 0, 0),
            // Set the shadow blur radius to 12:
            shadowBlur: 12,
            // Offset the shadow by { x: 5, y: 5 }
            shadowOffset: new paper.Point(5, 5)
        });
    
    }
    function Raster25() {
        
        // Create a rectangle shaped path with its top left point at:
        // {x: 50, y: 25} and a size of {width: 50, height: 50}
        let path = new paper.Path.Rectangle(new paper.Point(50, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        path.onFrame = function(this:paper.Path) {
            // Every frame, rotate the path by 3 degrees:
            this.rotate(3);
        }
    
    }
    function Raster26() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is pressed on the item,
        // set its fill color to red:
        path.onMouseDown = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Raster27() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse is pressed on the item, remove it:
            path.onMouseDown = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function Raster28() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 50,
            fillColor: 'blue'
        });
        
        // Install a drag event handler that moves the path along.
        path.onMouseDrag = function(this:paper.Path, event:paper.MouseEvent) {
            path.position = path.position.add(event.delta);
        }
    
    }
    function Raster29() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is released over the item,
        // set its fill color to red:
        path.onMouseUp = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Raster30() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is clicked on the item,
        // set its fill color to red:
        path.onClick = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Raster31() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse clicks on the item, remove it:
            path.onClick = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function Raster32() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is double clicked on the item,
        // set its fill color to red:
        path.onDoubleClick = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Raster33() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse is double clicked on the item, remove it:
            path.onDoubleClick = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function Raster34() {
        
        // Create a circle shaped path at the center of the paper.view:
            let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
            });
        
        // When the mouse moves on top of the item, set its opacity
        // to a random value between 0 and 1:
        path.onMouseMove = function(this:paper.Path) {
            this.opacity = Math.random();
        }
    
    }
    function Raster35() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse enters the item, set its fill color to red:
        path.onMouseEnter = function(this:paper.Path) {
            this.fillColor = 'red';
        }
        
        // When the mouse leaves the item, set its fill color to black:
        path.onMouseLeave = function(this:paper.Path) {
            this.fillColor = 'black';
        }
    
    }
    function Raster36() {
        
        function enter(this:paper.Path) {
            this.fillColor = 'red';
        }
        
        function leave(this:paper.Path) {
            this.fillColor = 'black';
        }
        
        // When the mouse is pressed:
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the position of the mouse:
            let path = new paper.Path.Circle(event.point, 25);
            path.fillColor = 'black';
        
            // When the mouse enters the item, set its fill color to red:
            path.onMouseEnter = enter;
        
            // When the mouse leaves the item, set its fill color to black:
            path.onMouseLeave = leave;
        }
    
    }
    function Raster37() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse leaves the item, set its fill color to red:
        path.onMouseLeave = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Raster38() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        circle.set({
            strokeColor: 'red',
            strokeWidth: 10,
            fillColor: 'black',
            selected: true
        });
    
    }
    function Raster39() {
        
        let circle = new paper.Path.Circle({
            center: [50, 50],
            radius: 10,
            fillColor: 'red'
        });
        
        // Make 20 copies of the circle:
        for (let i = 0; i < 20; i++) {
            let copy = circle.clone();
        
            // Distribute the copies horizontally, so we can see them:
            copy.position.x += i * copy.bounds.width;
        }
    
    }
    function Raster40() {
        
        let circle = new paper.Path.Circle({
            center: [50, 50],
            radius: 5,
            fillColor: 'red'
        });
        
        // Create a rasterized version of the path:
        let raster = circle.rasterize();
        
        // Move it 100pt to the right:
        raster.position.x += 100;
        
        // Scale the path and the raster by 300%, so we can compare them:
        circle.scale(5);
        raster.scale(5);
    
    }
    function Raster41() {
        
        let path = new paper.Path.Star({
            center: [50, 50],
            points: 12,
            radius1: 20,
            radius2: 40,
            fillColor: 'black'
        });
        
        // Whenever the user presses the mouse:
        function onMouseDown(event:paper.ToolEvent) {
            // If the position of the mouse is within the path,
            // set its fill color to red, otherwise set it to
            // black:
            if (path.contains(event.point)) {
                path.fillColor = 'red';
            } else {
                path.fillColor = 'black';
            }
        }
    
    }
    function Raster42() {
        
        // Create a rectangle shaped path with its top left
        // point at {x: 80, y: 25} and a size of {width: 50, height: 50}:
        let path = new paper.Path.Rectangle(new paper.Point(80, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        // Rotate the path by 30 degrees:
        path.rotate(30);
    
    }
    function Raster43() {
        
        // Create a rectangle shaped path with its top left
        // point at {x: 175, y: 50} and a size of {width: 100, height: 100}:
        let topLeft = new paper.Point(175, 50);
        let size = new paper.Size(100, 100);
        let path = new paper.Path.Rectangle(topLeft, size);
        path.fillColor = 'black';
        
        // Draw a circle shaped path in the center of the paper.view,
        // to show the rotation point:
        let circle = new paper.Path.Circle({
            center: paper.view.center,
            radius: 5,
            fillColor: 'white'
        });
        
        // Each frame rotate the path 3 degrees around the center point
        // of the paper.view:
        function onFrame(event:paper.IFrameEvent) {
            path.rotate(3, paper.view.center);
        }
    
    }
    function Raster44() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path by 150% from its center point
        circle.scale(1.5);
    
    }
    function Raster45() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path 150% from its bottom left corner
        circle.scale(1.5, circle.bounds.bottomLeft);
    
    }
    function Raster46() {
        
        // Create a circle shaped path at { x: 100, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [100, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path horizontally by 300%
        circle.scale(3, 1);
    
    }
    function Raster47() {
        
        // Create a rectangle shaped path with its top left corner
        // at {x: 80, y: 25} and a size of {width: 75, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [80, 25],
            size: [75, 50],
            fillColor: 'black'
        });
        
        // Create a circle shaped path with its center at {x: 80, y: 50}
        // and a radius of 30.
        let circlePath = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the circlePath to the bounding rectangle of
        // the rectangular path:
        circlePath.fitBounds(path.bounds);
    
    }
    function Raster48() {
        
        // Create a rectangle shaped path with its top left corner
        // at {x: 80, y: 25} and a size of {width: 75, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [80, 25],
            size: [75, 50],
            fillColor: 'black'
        });
        
        // Create a circle shaped path with its center at {x: 80, y: 50}
        // and a radius of 30.
        let circlePath = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the circlePath to the bounding rectangle of
        // the rectangular path:
        circlePath.fitBounds(path.bounds, true);
    
    }
    function Raster49() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the path to the bounding rectangle of the paper.view:
        path.fitBounds(paper.view.bounds);
    
    }
    function Raster50() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse enters the item, set its fill color to red:
        path.on('mouseenter', function(this:paper.Path) {
            this.fillColor = 'red';
        });
        
        // When the mouse leaves the item, set its fill color to black:
        path.on('mouseleave', function(this:paper.Path) {
            this.fillColor = 'black';
        });
    
    }
    function Raster51() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25
        });
        path.fillColor = 'black';
        
        // When the mouse enters the item, set its fill color to red:
        path.on({
            mouseenter: function(this:paper.Path) {
                this.fillColor = 'red';
            },
            mouseleave: function(this:paper.Path) {
                this.fillColor = 'black';
            }
        });
    
    }
    function Raster52() {
        
        let pathHandlers = {
            mouseenter: function(this:paper.Path) {
                this.fillColor = 'red';
            },
            mouseleave: function(this:paper.Path) {
                this.fillColor = 'black';
            }
        }
        
        // When the mouse is pressed:
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the position of the mouse:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 25,
                fillColor: 'black'
            });
        
            // Attach the handers inside the object literal to the path:
            path.on(pathHandlers);
        }
    
    }
    function Raster53() {
        
        function onMouseDrag(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path on the next onMouseDrag or onMouseDown event:
            path.removeOn({
                drag: true,
                down: true
            });
        }
    
    }
    function Raster54() {
        
        function onMouseMove(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // On the next move event, automatically remove the path:
            path.removeOnMove();
        }
    
    }
    function Raster55() {
        
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path, next time the mouse is pressed:
            path.removeOnDown();
        }
    
    }
    function Raster56() {
        
        function onMouseDrag(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // On the next drag event, automatically remove the path:
            path.removeOnDrag();
        }
    
    }
    function Raster57() {
        
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path, when the mouse is released:
            path.removeOnUp();
        }
    
    }
    function Rectangle0() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 40,
            selected: true
        });
        
        path.bounds.selected = true;
    
    }
    function Rectangle1() {
        
        // Create a circle shaped path at {x: 80, y: 50}
        // with a radius of 30.
        let circle = new paper.Path.Circle(new paper.Point(80, 50), 30);
        circle.fillColor = 'red';
        
        function onMouseMove(event:paper.ToolEvent) {
            // Check whether the mouse position intersects with the
            // bounding box of the item:
            if (circle.bounds.contains(event.point)) {
                // If it intersects, fill it with green:
                circle.fillColor = 'green';
            } else {
                // If it doesn't intersect, fill it with red:
                circle.fillColor = 'red';
            }
        }
    
    }
    function Rectangle2() {
        
        // All newly created paths will inherit these styles:
        paper.project.currentStyle = {
            fillColor: 'green',
            strokeColor: 'black'
        };
        
        // Create a circle shaped path at {x: 80, y: 50}
        // with a radius of 45.
        let largeCircle = new paper.Path.Circle(new paper.Point(80, 50), 45);
        
        // Create a smaller circle shaped path in the same position
        // with a radius of 30.
        let circle = new paper.Path.Circle(new paper.Point(80, 50), 30);
        
        function onMouseMove(event:paper.ToolEvent) {
            // Move the circle to the position of the mouse:
            circle.position = event.point;
        
            // Check whether the bounding box of the smaller circle
            // is contained within the bounding box of the larger item:
            if (largeCircle.bounds.contains(circle.bounds)) {
                // If it does, fill it with green:
                circle.fillColor = 'green';
                largeCircle.fillColor = 'green';
            } else {
                // If doesn't, fill it with red:
                circle.fillColor = 'red';
                largeCircle.fillColor = 'red';
            }
        }
    
    }
    function Rectangle3() {
        
        // All newly created paths will inherit these styles:
        paper.project.currentStyle = {
            fillColor: 'green',
            strokeColor: 'black'
        };
        
        // Create a circle shaped path at {x: 80, y: 50}
        // with a radius of 45.
        let largeCircle = new paper.Path.Circle(new paper.Point(80, 50), 45);
        
        // Create a smaller circle shaped path in the same position
        // with a radius of 30.
        let circle = new paper.Path.Circle(new paper.Point(80, 50), 30);
        
        function onMouseMove(event:paper.ToolEvent) {
            // Move the circle to the position of the mouse:
            circle.position = event.point;
        
            // Check whether the bounding box of the two circle
            // shaped paths intersect:
            if (largeCircle.bounds.intersects(circle.bounds)) {
                // If it does, fill it with green:
                circle.fillColor = 'green';
                largeCircle.fillColor = 'green';
            } else {
                // If doesn't, fill it with red:
                circle.fillColor = 'red';
                largeCircle.fillColor = 'red';
            }
        }
    
    }
    function Rectangle4() {
        
        // Create two rectangles that overlap each other
        let size = new paper.Size(50, 50);
        let rectangle1 = new paper.Rectangle(new paper.Point(25, 15), size);
        let rectangle2 = new paper.Rectangle(new paper.Point(50, 40), size);
        
        // The rectangle that represents the intersection of the
        // two rectangles:
        let intersected = rectangle1.intersect(rectangle2);
        
        // To visualize the intersecting of the rectangles, we will
        // create rectangle shaped paths using the Path.Rectangle
        // constructor.
        
        // Have all newly created paths inherit a black stroke:
        paper.project.currentStyle.strokeColor = 'black';
        
        // Create two rectangle shaped paths using the abstract rectangles
        // we created before:
        new paper.Path.Rectangle(rectangle1);
        new paper.Path.Rectangle(rectangle2);
        
        // Create a path that represents the intersected rectangle,
        // and fill it with red:
        let intersectionPath = new paper.Path.Rectangle(intersected);
        intersectionPath.fillColor = 'red';
    
    }
    function Segment0() {
        
        let handleIn = new paper.Point(-80, -100);
        let handleOut = new paper.Point(80, 100);
        
        let firstPoint = new paper.Point(100, 50);
        let firstSegment = new paper.Segment(firstPoint, undefined, handleOut);
        
        let secondPoint = new paper.Point(300, 50);
        let secondSegment = new paper.Segment(secondPoint, handleIn, undefined);
        
        let path = new paper.Path([firstSegment, secondSegment]);
        path.strokeColor = 'black';
    
    }
    function Segment1() {
        
        let firstSegment = new paper.Segment({
            point: [100, 50],
            handleOut: [80, 100]
        });
        
        let secondSegment = new paper.Segment({
            point: [300, 50],
            handleIn: [-80, -100]
        });
        
        let path = new paper.Path({
            segments: [firstSegment, secondSegment],
            strokeColor: 'black'
        });
    
    }
    function Segment2() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 40
        });
        
        // Select the third segment point:
        path.segments[2].selected = true;
    
    }
    function Shape0() {
        
        let shape = paper.Shape.Circle(new paper.Point(80, 50), 30);
        shape.strokeColor = 'black';
    
    }
    function Shape1() {
        
        let shape = paper.Shape.Circle({
            center: [80, 50],
            radius: 30,
            strokeColor: 'black'
        });
    
    }
    function Shape2() {
        
        let rectangle = new paper.Rectangle(new paper.Point(20, 20), new paper.Size(60, 60));
        let shape = paper.Shape.Rectangle(rectangle);
        shape.strokeColor = 'black';
    
    }
    function Shape3() {
        
        let rectangle = new paper.Rectangle(new paper.Point(20, 20), new paper.Size(60, 60));
        let cornerSize = new paper.Size(10, 10);
        let shape = paper.Shape.Rectangle([rectangle, cornerSize]);
        shape.strokeColor = 'black';
    
    }
    function Shape4() {
        
        let point = new paper.Point(20, 20);
        let size = new paper.Size(60, 60);
        let shape = paper.Shape.Rectangle(point, size);
        shape.strokeColor = 'black';
    
    }
    function Shape5() {
        
        let from = new paper.Point(20, 20);
        let to = new paper.Point(80, 80);
        let shape = paper.Shape.Rectangle(from, to);
        shape.strokeColor = 'black';
    
    }
    function Shape6() {
        
        let shape = paper.Shape.Rectangle({
            point: [20, 20],
            size: [60, 60],
            strokeColor: 'black'
        });
    
    }
    function Shape7() {
        
        let shape = paper.Shape.Rectangle({
            from: [20, 20],
            to: [80, 80],
            strokeColor: 'black'
        });
    
    }
    function Shape8() {
        
        let shape = paper.Shape.Rectangle({
            rectangle: {
                topLeft: [20, 20],
                bottomRight: [80, 80]
            },
            strokeColor: 'black'
        });
    
    }
    function Shape9() {
        
        let shape = paper.Shape.Rectangle({
         topLeft: [20, 20],
            bottomRight: [80, 80],
            radius: 10,
            strokeColor: 'black'
        });
    
    }
    function Shape10() {
        
        let rectangle = new paper.Rectangle(new paper.Point(20, 20), new paper.Size(180, 60));
        let shape = paper.Shape.Ellipse(rectangle);
        shape.fillColor = 'black';
    
    }
    function Shape11() {
        
        let shape = paper.Shape.Ellipse({
            point: [20, 20],
            size: [180, 60],
            fillColor: 'black'
        });
    
    }
    function Shape12() {
        
        let shape = paper.Shape.Ellipse({
            center: [110, 50],
            radius: [90, 30],
            fillColor: 'black'
        });
    
    }
    function Shape13() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        // Set the name of the path:
        path.name = 'example';
        
        // Create a group and add path to it as a child:
        let group = new paper.Group();
        group.addChild(path);
        
        // The path can be accessed by name:
        group.getItem('example').fillColor = 'red';
    
    }
    function Shape14() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 30
        });
        circle.style = {
            fillColor: 'blue',
            strokeColor: 'red',
            strokeWidth: 5
        };
    
    }
    function Shape15() {
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        let path2 = new paper.Path.Circle({
            center: new paper.Point(180, 50),
            radius: 20
        });
        
        // Copy the path style of path:
        path2.style = path.style;
    
    }
    function Shape16() {
        
        let myStyle = {
            fillColor: 'red',
            strokeColor: 'blue',
            strokeWidth: 4
        };
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 30
        });
        path.style = myStyle;
        
        let path2 = new paper.Path.Circle({
            center: new paper.Point(150, 50),
            radius: 20
        });
        path2.style = myStyle;
    
    }
    function Shape17() {
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Hide the path:
        path.visible = false;
    
    }
    function Shape18() {
        
        // Create a white rectangle in the background
        // with the same dimensions as the paper.view:
        let background = new paper.Path.Rectangle(paper.view.bounds);
        background.fillColor = 'white';
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'red'
        });
        
        let circle2 = new paper.Path.Circle({
            center: new paper.Point(120, 50),
            radius: 35,
            fillColor: 'blue'
        });
        
        // Set the blend mode of circle2:
        circle2.blendMode = 'multiply';
    
    }
    function Shape19() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'red'
        });
        
        let circle2 = new paper.Path.Circle({
            center: new paper.Point(120, 50),
            radius: 35,
            fillColor: 'blue',
            strokeColor: 'green',
            strokeWidth: 10
        });
        
        // Make circle2 50% transparent:
        circle2.opacity = 0.5;
    
    }
    function Shape20() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        path.selected = true; // Select the path
    
    }
    function Shape21() {
        
        // Create a circle at position { x: 10, y: 10 }
        let circle = new paper.Path.Circle({
            center: new paper.Point(10, 10),
            radius: 10,
            fillColor: 'red'
        });
        
        // Move the circle to { x: 20, y: 20 }
        circle.position = new paper.Point(20, 20);
        
        // Move the circle 100 points to the right and 50 points down
        circle.position = circle.position.add(new paper.Point(100, 50));
    
    }
    function Shape22() {
        
        // Create a circle at position { x: 20, y: 20 }
        let circle = new paper.Path.Circle({
            center: new paper.Point(20, 20),
            radius: 10,
            fillColor: 'red'
        });
        
        // Move the circle 100 points to the right
        circle.position.x += 100;
    
    }
    function Shape23() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Create a group and move the path into it:
        let group = new paper.Group();
        group.addChild(path);
        
        // Access the path through the group's children array:
        group.children[0].fillColor = 'red';
    
    }
    function Shape24() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        // Set the name of the path:
        path.name = 'example';
        
        // Create a group and move the path into it:
        let group = new paper.Group();
        group.addChild(path);
        
        // The path can be accessed by name:
        group.getItem('example').fillColor = 'orange';
    
    }
    function Shape25() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        let group = new paper.Group();
        group.children = [path];
        
        // The path is the first child of the group:
        group.firstChild.fillColor = 'green';
    
    }
    function Shape26() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Set its stroke color to RGB red:
        circle.strokeColor = new paper.Color(1, 0, 0);
    
    }
    function Shape27() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            strokeColor: 'red'
        });
        
        // Set its stroke width to 10:
        circle.strokeWidth = 10;
    
    }
    function Shape28() {
        
        let line = new paper.Path({
            segments: [[80, 50], [420, 50]],
            strokeColor: 'black',
            strokeWidth: 20,
            selected: true
        });
        
        // Set the stroke cap of the line to be round:
        line.strokeCap = 'round';
        
        // Copy the path and set its stroke cap to be square:
        let line2 = line.clone();
        line2.position.y += 50;
        line2.strokeCap = 'square';
        
        // Make another copy and set its stroke cap to be butt:
        line2 = line.clone();
        line2.position.y += 100;
        line2.strokeCap = 'butt';
    
    }
    function Shape29() {
        
        let path = new paper.Path({
            segments: [[80, 100], [120, 40], [160, 100]],
            strokeColor: 'black',
            strokeWidth: 20,
            // Select the path, in order to see where the stroke is formed:
            selected: true
        });
        
        let path2 = path.clone();
        path2.position.x += path2.bounds.width * 1.5;
        path2.strokeJoin = 'round';
        
        let path3 = path2.clone();
        path3.position.x += path3.bounds.width * 1.5;
        path3.strokeJoin = 'bevel';
    
    }
    function Shape30() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 40,
            strokeWidth: 2,
            strokeColor: 'black'
        });
        
        // Set the dashed stroke to [10pt dash, 4pt gap]:
        path.dashArray = [10, 4];
    
    }
    function Shape31() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Set the fill color of the circle to RGB red:
        circle.fillColor = new paper.Color(1, 0, 0);
    
    }
    function Shape32() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'white',
            // Set the shadow color of the circle to RGB black:
            shadowColor: new paper.Color(0, 0, 0),
            // Set the shadow blur radius to 12:
            shadowBlur: 12,
            // Offset the shadow by { x: 5, y: 5 }
            shadowOffset: new paper.Point(5, 5)
        });
    
    }
    function Shape33() {
        
        // Create a rectangle shaped path with its top left point at:
        // {x: 50, y: 25} and a size of {width: 50, height: 50}
        let path = new paper.Path.Rectangle(new paper.Point(50, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        path.onFrame = function(this:paper.Path) {
            // Every frame, rotate the path by 3 degrees:
            this.rotate(3);
        }
    
    }
    function Shape34() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is pressed on the item,
        // set its fill color to red:
        path.onMouseDown = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Shape35() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse is pressed on the item, remove it:
            path.onMouseDown = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function Shape36() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 50,
            fillColor: 'blue'
        });
        
        // Install a drag event handler that moves the path along.
        path.onMouseDrag = function(this:paper.Path, event:paper.MouseEvent) {
            path.position = path.position.add(event.delta);
        }
    
    }
    function Shape37() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is released over the item,
        // set its fill color to red:
        path.onMouseUp = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Shape38() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is clicked on the item,
        // set its fill color to red:
        path.onClick = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Shape39() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse clicks on the item, remove it:
            path.onClick = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function Shape40() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is double clicked on the item,
        // set its fill color to red:
        path.onDoubleClick = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Shape41() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse is double clicked on the item, remove it:
            path.onDoubleClick = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function Shape42() {
        
        // Create a circle shaped path at the center of the paper.view:
            let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
            });
        
        // When the mouse moves on top of the item, set its opacity
        // to a random value between 0 and 1:
        path.onMouseMove = function(this:paper.Path) {
            this.opacity = Math.random();
        }
    
    }
    function Shape43() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse enters the item, set its fill color to red:
        path.onMouseEnter = function(this:paper.Path) {
            this.fillColor = 'red';
        }
        
        // When the mouse leaves the item, set its fill color to black:
        path.onMouseLeave = function(this:paper.Path) {
            this.fillColor = 'black';
        }
    
    }
    function Shape44() {
        
        function enter(this:paper.Path) {
            this.fillColor = 'red';
        }
        
        function leave(this:paper.Path) {
            this.fillColor = 'black';
        }
        
        // When the mouse is pressed:
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the position of the mouse:
            let path = new paper.Path.Circle(event.point, 25);
            path.fillColor = 'black';
        
            // When the mouse enters the item, set its fill color to red:
            path.onMouseEnter = enter;
        
            // When the mouse leaves the item, set its fill color to black:
            path.onMouseLeave = leave;
        }
    
    }
    function Shape45() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse leaves the item, set its fill color to red:
        path.onMouseLeave = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function Shape46() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        circle.set({
            strokeColor: 'red',
            strokeWidth: 10,
            fillColor: 'black',
            selected: true
        });
    
    }
    function Shape47() {
        
        let circle = new paper.Path.Circle({
            center: [50, 50],
            radius: 10,
            fillColor: 'red'
        });
        
        // Make 20 copies of the circle:
        for (let i = 0; i < 20; i++) {
            let copy = circle.clone();
        
            // Distribute the copies horizontally, so we can see them:
            copy.position.x += i * copy.bounds.width;
        }
    
    }
    function Shape48() {
        
        let circle = new paper.Path.Circle({
            center: [50, 50],
            radius: 5,
            fillColor: 'red'
        });
        
        // Create a rasterized version of the path:
        let raster = circle.rasterize();
        
        // Move it 100pt to the right:
        raster.position.x += 100;
        
        // Scale the path and the raster by 300%, so we can compare them:
        circle.scale(5);
        raster.scale(5);
    
    }
    function Shape49() {
        
        let path = new paper.Path.Star({
            center: [50, 50],
            points: 12,
            radius1: 20,
            radius2: 40,
            fillColor: 'black'
        });
        
        // Whenever the user presses the mouse:
        function onMouseDown(event:paper.ToolEvent) {
            // If the position of the mouse is within the path,
            // set its fill color to red, otherwise set it to
            // black:
            if (path.contains(event.point)) {
                path.fillColor = 'red';
            } else {
                path.fillColor = 'black';
            }
        }
    
    }
    function Shape50() {
        
        // Create a rectangle shaped path with its top left
        // point at {x: 80, y: 25} and a size of {width: 50, height: 50}:
        let path = new paper.Path.Rectangle(new paper.Point(80, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        // Rotate the path by 30 degrees:
        path.rotate(30);
    
    }
    function Shape51() {
        
        // Create a rectangle shaped path with its top left
        // point at {x: 175, y: 50} and a size of {width: 100, height: 100}:
        let topLeft = new paper.Point(175, 50);
        let size = new paper.Size(100, 100);
        let path = new paper.Path.Rectangle(topLeft, size);
        path.fillColor = 'black';
        
        // Draw a circle shaped path in the center of the paper.view,
        // to show the rotation point:
        let circle = new paper.Path.Circle({
            center: paper.view.center,
            radius: 5,
            fillColor: 'white'
        });
        
        // Each frame rotate the path 3 degrees around the center point
        // of the paper.view:
        function onFrame(event:paper.IFrameEvent) {
            path.rotate(3, paper.view.center);
        }
    
    }
    function Shape52() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path by 150% from its center point
        circle.scale(1.5);
    
    }
    function Shape53() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path 150% from its bottom left corner
        circle.scale(1.5, circle.bounds.bottomLeft);
    
    }
    function Shape54() {
        
        // Create a circle shaped path at { x: 100, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [100, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path horizontally by 300%
        circle.scale(3, 1);
    
    }
    function Shape55() {
        
        // Create a rectangle shaped path with its top left corner
        // at {x: 80, y: 25} and a size of {width: 75, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [80, 25],
            size: [75, 50],
            fillColor: 'black'
        });
        
        // Create a circle shaped path with its center at {x: 80, y: 50}
        // and a radius of 30.
        let circlePath = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the circlePath to the bounding rectangle of
        // the rectangular path:
        circlePath.fitBounds(path.bounds);
    
    }
    function Shape56() {
        
        // Create a rectangle shaped path with its top left corner
        // at {x: 80, y: 25} and a size of {width: 75, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [80, 25],
            size: [75, 50],
            fillColor: 'black'
        });
        
        // Create a circle shaped path with its center at {x: 80, y: 50}
        // and a radius of 30.
        let circlePath = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the circlePath to the bounding rectangle of
        // the rectangular path:
        circlePath.fitBounds(path.bounds, true);
    
    }
    function Shape57() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the path to the bounding rectangle of the paper.view:
        path.fitBounds(paper.view.bounds);
    
    }
    function Shape58() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse enters the item, set its fill color to red:
        path.on('mouseenter', function(this:paper.Path) {
            this.fillColor = 'red';
        });
        
        // When the mouse leaves the item, set its fill color to black:
        path.on('mouseleave', function(this:paper.Path) {
            this.fillColor = 'black';
        });
    
    }
    function Shape59() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25
        });
        path.fillColor = 'black';
        
        // When the mouse enters the item, set its fill color to red:
        path.on({
            mouseenter: function(this:paper.Path) {
                this.fillColor = 'red';
            },
            mouseleave: function(this:paper.Path) {
                this.fillColor = 'black';
            }
        });
    
    }
    function Shape60() {
        
        let pathHandlers = {
            mouseenter: function(this:paper.Path) {
                this.fillColor = 'red';
            },
            mouseleave: function(this:paper.Path) {
                this.fillColor = 'black';
            }
        }
        
        // When the mouse is pressed:
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the position of the mouse:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 25,
                fillColor: 'black'
            });
        
            // Attach the handers inside the object literal to the path:
            path.on(pathHandlers);
        }
    
    }
    function Shape61() {
        
        function onMouseDrag(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path on the next onMouseDrag or onMouseDown event:
            path.removeOn({
                drag: true,
                down: true
            });
        }
    
    }
    function Shape62() {
        
        function onMouseMove(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // On the next move event, automatically remove the path:
            path.removeOnMove();
        }
    
    }
    function Shape63() {
        
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path, next time the mouse is pressed:
            path.removeOnDown();
        }
    
    }
    function Shape64() {
        
        function onMouseDrag(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // On the next drag event, automatically remove the path:
            path.removeOnDrag();
        }
    
    }
    function Shape65() {
        
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path, when the mouse is released:
            path.removeOnUp();
        }
    
    }
    function Style0() {
        
        let path = new paper.Path.Circle(new paper.Point(80, 50), 30);
        path.style = {
            fillColor: new paper.Color(1, 0, 0),
            strokeColor: 'black',
            strokeWidth: 5
        };
    
    }
    function Style1() {
        
        let text = new paper.PointText(paper.view.center);
        text.content = 'Hello world.';
        text.style = {
            fontFamily: 'Courier New',
            fontWeight: 'bold',
            fontSize: 20,
            fillColor: 'red',
            justification: 'center'
        };
    
    }
    function Style2() {
        
        let path1 = new paper.Path.Circle({
            center: [100, 50],
            radius: 30
        });
        
        let path2 = new paper.Path.Rectangle({
            from: [170, 20],
            to: [230, 80]
        });
        
        let group = new paper.Group([path1, path2]);
        
        // All styles set on a group are automatically
        // set on the children of the group:
        group.style = {
            strokeColor: 'black',
            dashArray: [4, 10],
            strokeWidth: 4,
            strokeCap: 'round'
        };
    
    }
    function Style3() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle(new paper.Point(80, 50), 35);
        
        // Set its stroke color to RGB red:
        circle.strokeColor = new paper.Color(1, 0, 0);
    
    }
    function Style4() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle(new paper.Point(80, 50), 35);
        
        // Set its stroke color to black:
        circle.strokeColor = 'black';
        
        // Set its stroke width to 10:
        circle.strokeWidth = 10;
    
    }
    function Style5() {
        
        let line = new paper.Path([new paper.Point(80, 50), new paper.Point(420, 50)]);
        line.strokeColor = 'black';
        line.strokeWidth = 20;
        
        // Select the path, so we can see where the stroke is formed:
        line.selected = true;
        
        // Set the stroke cap of the line to be round:
        line.strokeCap = 'round';
        
        // Copy the path and set its stroke cap to be square:
        let line2 = line.clone();
        line2.position.y += 50;
        line2.strokeCap = 'square';
        
        // Make another copy and set its stroke cap to be butt:
        line2 = line.clone();
        line2.position.y += 100;
        line2.strokeCap = 'butt';
    
    }
    function Style6() {
        
        let path = new paper.Path();
        path.add(new paper.Point(80, 100));
        path.add(new paper.Point(120, 40));
        path.add(new paper.Point(160, 100));
        path.strokeColor = 'black';
        path.strokeWidth = 20;
        
        // Select the path, so we can see where the stroke is formed:
        path.selected = true;
        
        let path2 = path.clone();
        path2.position.x += path2.bounds.width * 1.5;
        path2.strokeJoin = 'round';
        
        let path3 = path2.clone();
        path3.position.x += path3.bounds.width * 1.5;
        path3.strokeJoin = 'bevel';
    
    }
    function Style7() {
        
        let path = new paper.Path.Circle(new paper.Point(80, 50), 40);
        path.strokeWidth = 2;
        path.strokeColor = 'black';
        
        // Set the dashed stroke to [10pt dash, 4pt gap]:
        path.dashArray = [10, 4];
    
    }
    function Style8() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle(new paper.Point(80, 50), 35);
        
        // Set the fill color of the circle to RGB red:
        circle.fillColor = new paper.Color(1, 0, 0);
    
    }
    function Style9() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'white',
            // Set the shadow color of the circle to RGB black:
            shadowColor: new paper.Color(0, 0, 0),
            // Set the shadow blur radius to 12:
            shadowBlur: 12,
            // Offset the shadow by { x: 5, y: 5 }
            shadowOffset: new paper.Point(5, 5)
        });
    
    }
    function SymbolDefinition0() {
        
        let path = new paper.Path.Star(new paper.Point(0, 0), 6, 5, 13);
        path.style = {
            fillColor: 'white',
            strokeColor: 'black'
        };
        
        // Create a symbol definition from the path:
        let definition = new paper.Symbol(path);
        
        // Place 100 instances of the symbol definition:
        for (let i = 0; i < 100; i++) {
            // Place an instance of the symbol definition in the project:
            let instance = definition.place();
        
            // Move the instance to a random position within the paper.view:
            instance.position = paper.Point.random().multiply(new paper.Point(paper.view.size));
        
            // Rotate the instance by a random amount between
            // 0 and 360 degrees:
            instance.rotate(Math.random() * 360);
        
            // Scale the instance between 0.25 and 1:
            instance.scale(0.25 + Math.random() * 0.75);
        }
    
    }
    function SymbolItem0() {
        
        let path = new paper.Path.Star({
            center: new paper.Point(0, 0),
            points: 6,
            radius1: 5,
            radius2: 13,
            fillColor: 'white',
            strokeColor: 'black'
        });
        
        // Create a symbol definition from the path:
        let definition = new paper.Symbol(path);
        
        // Place 100 instances of the symbol:
        for (let i = 0; i < 100; i++) {
            // Place an instance of the symbol in the project:
            let instance = new paper.PlacedSymbol(definition);
        
            // Move the instance to a random position within the paper.view:
            instance.position = paper.Point.random().multiply(new paper.Point(paper.view.size));
        
            // Rotate the instance by a random amount between
            // 0 and 360 degrees:
            instance.rotate(Math.random() * 360);
        
            // Scale the instance between 0.25 and 1:
            instance.scale(0.25 + Math.random() * 0.75);
        }
    
    }
    function SymbolItem1() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        // Set the name of the path:
        path.name = 'example';
        
        // Create a group and add path to it as a child:
        let group = new paper.Group();
        group.addChild(path);
        
        // The path can be accessed by name:
        group.getItem('example').fillColor = 'red';
    
    }
    function SymbolItem2() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 30
        });
        circle.style = {
            fillColor: 'blue',
            strokeColor: 'red',
            strokeWidth: 5
        };
    
    }
    function SymbolItem3() {
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        let path2 = new paper.Path.Circle({
            center: new paper.Point(180, 50),
            radius: 20
        });
        
        // Copy the path style of path:
        path2.style = path.style;
    
    }
    function SymbolItem4() {
        
        let myStyle = {
            fillColor: 'red',
            strokeColor: 'blue',
            strokeWidth: 4
        };
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 30
        });
        path.style = myStyle;
        
        let path2 = new paper.Path.Circle({
            center: new paper.Point(150, 50),
            radius: 20
        });
        path2.style = myStyle;
    
    }
    function SymbolItem5() {
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Hide the path:
        path.visible = false;
    
    }
    function SymbolItem6() {
        
        // Create a white rectangle in the background
        // with the same dimensions as the paper.view:
        let background = new paper.Path.Rectangle(paper.view.bounds);
        background.fillColor = 'white';
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'red'
        });
        
        let circle2 = new paper.Path.Circle({
            center: new paper.Point(120, 50),
            radius: 35,
            fillColor: 'blue'
        });
        
        // Set the blend mode of circle2:
        circle2.blendMode = 'multiply';
    
    }
    function SymbolItem7() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'red'
        });
        
        let circle2 = new paper.Path.Circle({
            center: new paper.Point(120, 50),
            radius: 35,
            fillColor: 'blue',
            strokeColor: 'green',
            strokeWidth: 10
        });
        
        // Make circle2 50% transparent:
        circle2.opacity = 0.5;
    
    }
    function SymbolItem8() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        path.selected = true; // Select the path
    
    }
    function SymbolItem9() {
        
        // Create a circle at position { x: 10, y: 10 }
        let circle = new paper.Path.Circle({
            center: new paper.Point(10, 10),
            radius: 10,
            fillColor: 'red'
        });
        
        // Move the circle to { x: 20, y: 20 }
        circle.position = new paper.Point(20, 20);
        
        // Move the circle 100 points to the right and 50 points down
        circle.position = circle.position.add(new paper.Point(100, 50));
    
    }
    function SymbolItem10() {
        
        // Create a circle at position { x: 20, y: 20 }
        let circle = new paper.Path.Circle({
            center: new paper.Point(20, 20),
            radius: 10,
            fillColor: 'red'
        });
        
        // Move the circle 100 points to the right
        circle.position.x += 100;
    
    }
    function SymbolItem11() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Create a group and move the path into it:
        let group = new paper.Group();
        group.addChild(path);
        
        // Access the path through the group's children array:
        group.children[0].fillColor = 'red';
    
    }
    function SymbolItem12() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        // Set the name of the path:
        path.name = 'example';
        
        // Create a group and move the path into it:
        let group = new paper.Group();
        group.addChild(path);
        
        // The path can be accessed by name:
        group.getItem('example').fillColor = 'orange';
    
    }
    function SymbolItem13() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        let group = new paper.Group();
        group.children = [path];
        
        // The path is the first child of the group:
        group.firstChild.fillColor = 'green';
    
    }
    function SymbolItem14() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Set its stroke color to RGB red:
        circle.strokeColor = new paper.Color(1, 0, 0);
    
    }
    function SymbolItem15() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            strokeColor: 'red'
        });
        
        // Set its stroke width to 10:
        circle.strokeWidth = 10;
    
    }
    function SymbolItem16() {
        
        let line = new paper.Path({
            segments: [[80, 50], [420, 50]],
            strokeColor: 'black',
            strokeWidth: 20,
            selected: true
        });
        
        // Set the stroke cap of the line to be round:
        line.strokeCap = 'round';
        
        // Copy the path and set its stroke cap to be square:
        let line2 = line.clone();
        line2.position.y += 50;
        line2.strokeCap = 'square';
        
        // Make another copy and set its stroke cap to be butt:
        line2 = line.clone();
        line2.position.y += 100;
        line2.strokeCap = 'butt';
    
    }
    function SymbolItem17() {
        
        let path = new paper.Path({
            segments: [[80, 100], [120, 40], [160, 100]],
            strokeColor: 'black',
            strokeWidth: 20,
            // Select the path, in order to see where the stroke is formed:
            selected: true
        });
        
        let path2 = path.clone();
        path2.position.x += path2.bounds.width * 1.5;
        path2.strokeJoin = 'round';
        
        let path3 = path2.clone();
        path3.position.x += path3.bounds.width * 1.5;
        path3.strokeJoin = 'bevel';
    
    }
    function SymbolItem18() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 40,
            strokeWidth: 2,
            strokeColor: 'black'
        });
        
        // Set the dashed stroke to [10pt dash, 4pt gap]:
        path.dashArray = [10, 4];
    
    }
    function SymbolItem19() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Set the fill color of the circle to RGB red:
        circle.fillColor = new paper.Color(1, 0, 0);
    
    }
    function SymbolItem20() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'white',
            // Set the shadow color of the circle to RGB black:
            shadowColor: new paper.Color(0, 0, 0),
            // Set the shadow blur radius to 12:
            shadowBlur: 12,
            // Offset the shadow by { x: 5, y: 5 }
            shadowOffset: new paper.Point(5, 5)
        });
    
    }
    function SymbolItem21() {
        
        // Create a rectangle shaped path with its top left point at:
        // {x: 50, y: 25} and a size of {width: 50, height: 50}
        let path = new paper.Path.Rectangle(new paper.Point(50, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        path.onFrame = function(this:paper.Path) {
            // Every frame, rotate the path by 3 degrees:
            this.rotate(3);
        }
    
    }
    function SymbolItem22() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is pressed on the item,
        // set its fill color to red:
        path.onMouseDown = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function SymbolItem23() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse is pressed on the item, remove it:
            path.onMouseDown = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function SymbolItem24() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 50,
            fillColor: 'blue'
        });
        
        // Install a drag event handler that moves the path along.
        path.onMouseDrag = function(this:paper.Path, event:paper.MouseEvent) {
            path.position = path.position.add(event.delta);
        }
    
    }
    function SymbolItem25() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is released over the item,
        // set its fill color to red:
        path.onMouseUp = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function SymbolItem26() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is clicked on the item,
        // set its fill color to red:
        path.onClick = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function SymbolItem27() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse clicks on the item, remove it:
            path.onClick = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function SymbolItem28() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is double clicked on the item,
        // set its fill color to red:
        path.onDoubleClick = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function SymbolItem29() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse is double clicked on the item, remove it:
            path.onDoubleClick = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function SymbolItem30() {
        
        // Create a circle shaped path at the center of the paper.view:
            let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
            });
        
        // When the mouse moves on top of the item, set its opacity
        // to a random value between 0 and 1:
        path.onMouseMove = function(this:paper.Path) {
            this.opacity = Math.random();
        }
    
    }
    function SymbolItem31() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse enters the item, set its fill color to red:
        path.onMouseEnter = function(this:paper.Path) {
            this.fillColor = 'red';
        }
        
        // When the mouse leaves the item, set its fill color to black:
        path.onMouseLeave = function(this:paper.Path) {
            this.fillColor = 'black';
        }
    
    }
    function SymbolItem32() {
        
        function enter(this:paper.Path) {
            this.fillColor = 'red';
        }
        
        function leave(this:paper.Path) {
            this.fillColor = 'black';
        }
        
        // When the mouse is pressed:
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the position of the mouse:
            let path = new paper.Path.Circle(event.point, 25);
            path.fillColor = 'black';
        
            // When the mouse enters the item, set its fill color to red:
            path.onMouseEnter = enter;
        
            // When the mouse leaves the item, set its fill color to black:
            path.onMouseLeave = leave;
        }
    
    }
    function SymbolItem33() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse leaves the item, set its fill color to red:
        path.onMouseLeave = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function SymbolItem34() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        circle.set({
            strokeColor: 'red',
            strokeWidth: 10,
            fillColor: 'black',
            selected: true
        });
    
    }
    function SymbolItem35() {
        
        let circle = new paper.Path.Circle({
            center: [50, 50],
            radius: 10,
            fillColor: 'red'
        });
        
        // Make 20 copies of the circle:
        for (let i = 0; i < 20; i++) {
            let copy = circle.clone();
        
            // Distribute the copies horizontally, so we can see them:
            copy.position.x += i * copy.bounds.width;
        }
    
    }
    function SymbolItem36() {
        
        let circle = new paper.Path.Circle({
            center: [50, 50],
            radius: 5,
            fillColor: 'red'
        });
        
        // Create a rasterized version of the path:
        let raster = circle.rasterize();
        
        // Move it 100pt to the right:
        raster.position.x += 100;
        
        // Scale the path and the raster by 300%, so we can compare them:
        circle.scale(5);
        raster.scale(5);
    
    }
    function SymbolItem37() {
        
        let path = new paper.Path.Star({
            center: [50, 50],
            points: 12,
            radius1: 20,
            radius2: 40,
            fillColor: 'black'
        });
        
        // Whenever the user presses the mouse:
        function onMouseDown(event:paper.ToolEvent) {
            // If the position of the mouse is within the path,
            // set its fill color to red, otherwise set it to
            // black:
            if (path.contains(event.point)) {
                path.fillColor = 'red';
            } else {
                path.fillColor = 'black';
            }
        }
    
    }
    function SymbolItem38() {
        
        // Create a rectangle shaped path with its top left
        // point at {x: 80, y: 25} and a size of {width: 50, height: 50}:
        let path = new paper.Path.Rectangle(new paper.Point(80, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        // Rotate the path by 30 degrees:
        path.rotate(30);
    
    }
    function SymbolItem39() {
        
        // Create a rectangle shaped path with its top left
        // point at {x: 175, y: 50} and a size of {width: 100, height: 100}:
        let topLeft = new paper.Point(175, 50);
        let size = new paper.Size(100, 100);
        let path = new paper.Path.Rectangle(topLeft, size);
        path.fillColor = 'black';
        
        // Draw a circle shaped path in the center of the paper.view,
        // to show the rotation point:
        let circle = new paper.Path.Circle({
            center: paper.view.center,
            radius: 5,
            fillColor: 'white'
        });
        
        // Each frame rotate the path 3 degrees around the center point
        // of the paper.view:
        function onFrame(event:paper.IFrameEvent) {
            path.rotate(3, paper.view.center);
        }
    
    }
    function SymbolItem40() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path by 150% from its center point
        circle.scale(1.5);
    
    }
    function SymbolItem41() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path 150% from its bottom left corner
        circle.scale(1.5, circle.bounds.bottomLeft);
    
    }
    function SymbolItem42() {
        
        // Create a circle shaped path at { x: 100, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [100, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path horizontally by 300%
        circle.scale(3, 1);
    
    }
    function SymbolItem43() {
        
        // Create a rectangle shaped path with its top left corner
        // at {x: 80, y: 25} and a size of {width: 75, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [80, 25],
            size: [75, 50],
            fillColor: 'black'
        });
        
        // Create a circle shaped path with its center at {x: 80, y: 50}
        // and a radius of 30.
        let circlePath = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the circlePath to the bounding rectangle of
        // the rectangular path:
        circlePath.fitBounds(path.bounds);
    
    }
    function SymbolItem44() {
        
        // Create a rectangle shaped path with its top left corner
        // at {x: 80, y: 25} and a size of {width: 75, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [80, 25],
            size: [75, 50],
            fillColor: 'black'
        });
        
        // Create a circle shaped path with its center at {x: 80, y: 50}
        // and a radius of 30.
        let circlePath = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the circlePath to the bounding rectangle of
        // the rectangular path:
        circlePath.fitBounds(path.bounds, true);
    
    }
    function SymbolItem45() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the path to the bounding rectangle of the paper.view:
        path.fitBounds(paper.view.bounds);
    
    }
    function SymbolItem46() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse enters the item, set its fill color to red:
        path.on('mouseenter', function(this:paper.Path) {
            this.fillColor = 'red';
        });
        
        // When the mouse leaves the item, set its fill color to black:
        path.on('mouseleave', function(this:paper.Path) {
            this.fillColor = 'black';
        });
    
    }
    function SymbolItem47() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25
        });
        path.fillColor = 'black';
        
        // When the mouse enters the item, set its fill color to red:
        path.on({
            mouseenter: function(this:paper.Path) {
                this.fillColor = 'red';
            },
            mouseleave: function(this:paper.Path) {
                this.fillColor = 'black';
            }
        });
    
    }
    function SymbolItem48() {
        
        let pathHandlers = {
            mouseenter: function(this:paper.Path) {
                this.fillColor = 'red';
            },
            mouseleave: function(this:paper.Path) {
                this.fillColor = 'black';
            }
        }
        
        // When the mouse is pressed:
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the position of the mouse:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 25,
                fillColor: 'black'
            });
        
            // Attach the handers inside the object literal to the path:
            path.on(pathHandlers);
        }
    
    }
    function SymbolItem49() {
        
        function onMouseDrag(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path on the next onMouseDrag or onMouseDown event:
            path.removeOn({
                drag: true,
                down: true
            });
        }
    
    }
    function SymbolItem50() {
        
        function onMouseMove(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // On the next move event, automatically remove the path:
            path.removeOnMove();
        }
    
    }
    function SymbolItem51() {
        
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path, next time the mouse is pressed:
            path.removeOnDown();
        }
    
    }
    function SymbolItem52() {
        
        function onMouseDrag(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // On the next drag event, automatically remove the path:
            path.removeOnDrag();
        }
    
    }
    function SymbolItem53() {
        
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path, when the mouse is released:
            path.removeOnUp();
        }
    
    }
    function TextItem0() {
        
        // Create a point-text item at {x: 30, y: 30}:
        let text = new paper.PointText(new paper.Point(30, 30));
        text.fillColor = 'black';
        
        // Set the content of the text item:
        text.content = 'Hello world';
    
    }
    function TextItem1() {
        
        // Create a point-text item at {x: 30, y: 30}:
        let text = new paper.PointText(new paper.Point(30, 30));
        text.fillColor = 'black';
        
        text.content = 'Move your mouse over the paper.view, to see its position';
        
        function onMouseMove(event:paper.ToolEvent) {
            // Each time the mouse is moved, set the content of
            // the point text to describe the position of the mouse:
            text.content = 'Your position is: ' + event.point.toString();
        }
    
    }
    function TextItem2() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        // Set the name of the path:
        path.name = 'example';
        
        // Create a group and add path to it as a child:
        let group = new paper.Group();
        group.addChild(path);
        
        // The path can be accessed by name:
        group.getItem('example').fillColor = 'red';
    
    }
    function TextItem3() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 30
        });
        circle.style = {
            fillColor: 'blue',
            strokeColor: 'red',
            strokeWidth: 5
        };
    
    }
    function TextItem4() {
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        let path2 = new paper.Path.Circle({
            center: new paper.Point(180, 50),
            radius: 20
        });
        
        // Copy the path style of path:
        path2.style = path.style;
    
    }
    function TextItem5() {
        
        let myStyle = {
            fillColor: 'red',
            strokeColor: 'blue',
            strokeWidth: 4
        };
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 30
        });
        path.style = myStyle;
        
        let path2 = new paper.Path.Circle({
            center: new paper.Point(150, 50),
            radius: 20
        });
        path2.style = myStyle;
    
    }
    function TextItem6() {
        
        let path = new paper.Path.Circle({
            center: [50, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Hide the path:
        path.visible = false;
    
    }
    function TextItem7() {
        
        // Create a white rectangle in the background
        // with the same dimensions as the paper.view:
        let background = new paper.Path.Rectangle(paper.view.bounds);
        background.fillColor = 'white';
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'red'
        });
        
        let circle2 = new paper.Path.Circle({
            center: new paper.Point(120, 50),
            radius: 35,
            fillColor: 'blue'
        });
        
        // Set the blend mode of circle2:
        circle2.blendMode = 'multiply';
    
    }
    function TextItem8() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'red'
        });
        
        let circle2 = new paper.Path.Circle({
            center: new paper.Point(120, 50),
            radius: 35,
            fillColor: 'blue',
            strokeColor: 'green',
            strokeWidth: 10
        });
        
        // Make circle2 50% transparent:
        circle2.opacity = 0.5;
    
    }
    function TextItem9() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        path.selected = true; // Select the path
    
    }
    function TextItem10() {
        
        // Create a circle at position { x: 10, y: 10 }
        let circle = new paper.Path.Circle({
            center: new paper.Point(10, 10),
            radius: 10,
            fillColor: 'red'
        });
        
        // Move the circle to { x: 20, y: 20 }
        circle.position = new paper.Point(20, 20);
        
        // Move the circle 100 points to the right and 50 points down
        circle.position = circle.position.add(new paper.Point(100, 50));
    
    }
    function TextItem11() {
        
        // Create a circle at position { x: 20, y: 20 }
        let circle = new paper.Path.Circle({
            center: new paper.Point(20, 20),
            radius: 10,
            fillColor: 'red'
        });
        
        // Move the circle 100 points to the right
        circle.position.x += 100;
    
    }
    function TextItem12() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Create a group and move the path into it:
        let group = new paper.Group();
        group.addChild(path);
        
        // Access the path through the group's children array:
        group.children[0].fillColor = 'red';
    
    }
    function TextItem13() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        // Set the name of the path:
        path.name = 'example';
        
        // Create a group and move the path into it:
        let group = new paper.Group();
        group.addChild(path);
        
        // The path can be accessed by name:
        group.getItem('example').fillColor = 'orange';
    
    }
    function TextItem14() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        let group = new paper.Group();
        group.children = [path];
        
        // The path is the first child of the group:
        group.firstChild.fillColor = 'green';
    
    }
    function TextItem15() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Set its stroke color to RGB red:
        circle.strokeColor = new paper.Color(1, 0, 0);
    
    }
    function TextItem16() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            strokeColor: 'red'
        });
        
        // Set its stroke width to 10:
        circle.strokeWidth = 10;
    
    }
    function TextItem17() {
        
        let line = new paper.Path({
            segments: [[80, 50], [420, 50]],
            strokeColor: 'black',
            strokeWidth: 20,
            selected: true
        });
        
        // Set the stroke cap of the line to be round:
        line.strokeCap = 'round';
        
        // Copy the path and set its stroke cap to be square:
        let line2 = line.clone();
        line2.position.y += 50;
        line2.strokeCap = 'square';
        
        // Make another copy and set its stroke cap to be butt:
        line2 = line.clone();
        line2.position.y += 100;
        line2.strokeCap = 'butt';
    
    }
    function TextItem18() {
        
        let path = new paper.Path({
            segments: [[80, 100], [120, 40], [160, 100]],
            strokeColor: 'black',
            strokeWidth: 20,
            // Select the path, in order to see where the stroke is formed:
            selected: true
        });
        
        let path2 = path.clone();
        path2.position.x += path2.bounds.width * 1.5;
        path2.strokeJoin = 'round';
        
        let path3 = path2.clone();
        path3.position.x += path3.bounds.width * 1.5;
        path3.strokeJoin = 'bevel';
    
    }
    function TextItem19() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 40,
            strokeWidth: 2,
            strokeColor: 'black'
        });
        
        // Set the dashed stroke to [10pt dash, 4pt gap]:
        path.dashArray = [10, 4];
    
    }
    function TextItem20() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 35:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        // Set the fill color of the circle to RGB red:
        circle.fillColor = new paper.Color(1, 0, 0);
    
    }
    function TextItem21() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35,
            fillColor: 'white',
            // Set the shadow color of the circle to RGB black:
            shadowColor: new paper.Color(0, 0, 0),
            // Set the shadow blur radius to 12:
            shadowBlur: 12,
            // Offset the shadow by { x: 5, y: 5 }
            shadowOffset: new paper.Point(5, 5)
        });
    
    }
    function TextItem22() {
        
        // Create a rectangle shaped path with its top left point at:
        // {x: 50, y: 25} and a size of {width: 50, height: 50}
        let path = new paper.Path.Rectangle(new paper.Point(50, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        path.onFrame = function(this:paper.Path) {
            // Every frame, rotate the path by 3 degrees:
            this.rotate(3);
        }
    
    }
    function TextItem23() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is pressed on the item,
        // set its fill color to red:
        path.onMouseDown = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function TextItem24() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse is pressed on the item, remove it:
            path.onMouseDown = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function TextItem25() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 50,
            fillColor: 'blue'
        });
        
        // Install a drag event handler that moves the path along.
        path.onMouseDrag = function(this:paper.Path, event:paper.MouseEvent) {
            path.position = path.position.add(event.delta);
        }
    
    }
    function TextItem26() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is released over the item,
        // set its fill color to red:
        path.onMouseUp = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function TextItem27() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is clicked on the item,
        // set its fill color to red:
        path.onClick = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function TextItem28() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse clicks on the item, remove it:
            path.onClick = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function TextItem29() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse is double clicked on the item,
        // set its fill color to red:
        path.onDoubleClick = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function TextItem30() {
        
        // Loop 30 times:
        for (let i = 0; i < 30; i++) {
            // Create a circle shaped path at a random position
            // in the paper.view:
            let path = new paper.Path.Circle({
                center: paper.Point.random().multiply(new paper.Point(paper.view.size)),
                radius: 25,
                fillColor: 'black',
                strokeColor: 'white'
            });
        
            // When the mouse is double clicked on the item, remove it:
            path.onDoubleClick = function(this:paper.Path) {
                this.remove();
            }
        }
    
    }
    function TextItem31() {
        
        // Create a circle shaped path at the center of the paper.view:
            let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
            });
        
        // When the mouse moves on top of the item, set its opacity
        // to a random value between 0 and 1:
        path.onMouseMove = function(this:paper.Path) {
            this.opacity = Math.random();
        }
    
    }
    function TextItem32() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse enters the item, set its fill color to red:
        path.onMouseEnter = function(this:paper.Path) {
            this.fillColor = 'red';
        }
        
        // When the mouse leaves the item, set its fill color to black:
        path.onMouseLeave = function(this:paper.Path) {
            this.fillColor = 'black';
        }
    
    }
    function TextItem33() {
        
        function enter(this:paper.Path) {
            this.fillColor = 'red';
        }
        
        function leave(this:paper.Path) {
            this.fillColor = 'black';
        }
        
        // When the mouse is pressed:
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the position of the mouse:
            let path = new paper.Path.Circle(event.point, 25);
            path.fillColor = 'black';
        
            // When the mouse enters the item, set its fill color to red:
            path.onMouseEnter = enter;
        
            // When the mouse leaves the item, set its fill color to black:
            path.onMouseLeave = leave;
        }
    
    }
    function TextItem34() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse leaves the item, set its fill color to red:
        path.onMouseLeave = function(this:paper.Path) {
            this.fillColor = 'red';
        }
    
    }
    function TextItem35() {
        
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 35
        });
        
        circle.set({
            strokeColor: 'red',
            strokeWidth: 10,
            fillColor: 'black',
            selected: true
        });
    
    }
    function TextItem36() {
        
        let circle = new paper.Path.Circle({
            center: [50, 50],
            radius: 10,
            fillColor: 'red'
        });
        
        // Make 20 copies of the circle:
        for (let i = 0; i < 20; i++) {
            let copy = circle.clone();
        
            // Distribute the copies horizontally, so we can see them:
            copy.position.x += i * copy.bounds.width;
        }
    
    }
    function TextItem37() {
        
        let circle = new paper.Path.Circle({
            center: [50, 50],
            radius: 5,
            fillColor: 'red'
        });
        
        // Create a rasterized version of the path:
        let raster = circle.rasterize();
        
        // Move it 100pt to the right:
        raster.position.x += 100;
        
        // Scale the path and the raster by 300%, so we can compare them:
        circle.scale(5);
        raster.scale(5);
    
    }
    function TextItem38() {
        
        let path = new paper.Path.Star({
            center: [50, 50],
            points: 12,
            radius1: 20,
            radius2: 40,
            fillColor: 'black'
        });
        
        // Whenever the user presses the mouse:
        function onMouseDown(event:paper.ToolEvent) {
            // If the position of the mouse is within the path,
            // set its fill color to red, otherwise set it to
            // black:
            if (path.contains(event.point)) {
                path.fillColor = 'red';
            } else {
                path.fillColor = 'black';
            }
        }
    
    }
    function TextItem39() {
        
        // Create a rectangle shaped path with its top left
        // point at {x: 80, y: 25} and a size of {width: 50, height: 50}:
        let path = new paper.Path.Rectangle(new paper.Point(80, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        // Rotate the path by 30 degrees:
        path.rotate(30);
    
    }
    function TextItem40() {
        
        // Create a rectangle shaped path with its top left
        // point at {x: 175, y: 50} and a size of {width: 100, height: 100}:
        let topLeft = new paper.Point(175, 50);
        let size = new paper.Size(100, 100);
        let path = new paper.Path.Rectangle(topLeft, size);
        path.fillColor = 'black';
        
        // Draw a circle shaped path in the center of the paper.view,
        // to show the rotation point:
        let circle = new paper.Path.Circle({
            center: paper.view.center,
            radius: 5,
            fillColor: 'white'
        });
        
        // Each frame rotate the path 3 degrees around the center point
        // of the paper.view:
        function onFrame(event:paper.IFrameEvent) {
            path.rotate(3, paper.view.center);
        }
    
    }
    function TextItem41() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path by 150% from its center point
        circle.scale(1.5);
    
    }
    function TextItem42() {
        
        // Create a circle shaped path at { x: 80, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [80, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path 150% from its bottom left corner
        circle.scale(1.5, circle.bounds.bottomLeft);
    
    }
    function TextItem43() {
        
        // Create a circle shaped path at { x: 100, y: 50 }
        // with a radius of 20:
        let circle = new paper.Path.Circle({
            center: [100, 50],
            radius: 20,
            fillColor: 'red'
        });
        
        // Scale the path horizontally by 300%
        circle.scale(3, 1);
    
    }
    function TextItem44() {
        
        // Create a rectangle shaped path with its top left corner
        // at {x: 80, y: 25} and a size of {width: 75, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [80, 25],
            size: [75, 50],
            fillColor: 'black'
        });
        
        // Create a circle shaped path with its center at {x: 80, y: 50}
        // and a radius of 30.
        let circlePath = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the circlePath to the bounding rectangle of
        // the rectangular path:
        circlePath.fitBounds(path.bounds);
    
    }
    function TextItem45() {
        
        // Create a rectangle shaped path with its top left corner
        // at {x: 80, y: 25} and a size of {width: 75, height: 50}:
        let path = new paper.Path.Rectangle({
            point: [80, 25],
            size: [75, 50],
            fillColor: 'black'
        });
        
        // Create a circle shaped path with its center at {x: 80, y: 50}
        // and a radius of 30.
        let circlePath = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the circlePath to the bounding rectangle of
        // the rectangular path:
        circlePath.fitBounds(path.bounds, true);
    
    }
    function TextItem46() {
        
        let path = new paper.Path.Circle({
            center: [80, 50],
            radius: 30,
            fillColor: 'red'
        });
        
        // Fit the path to the bounding rectangle of the paper.view:
        path.fitBounds(paper.view.bounds);
    
    }
    function TextItem47() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25,
            fillColor: 'black'
        });
        
        // When the mouse enters the item, set its fill color to red:
        path.on('mouseenter', function(this:paper.Path) {
            this.fillColor = 'red';
        });
        
        // When the mouse leaves the item, set its fill color to black:
        path.on('mouseleave', function(this:paper.Path) {
            this.fillColor = 'black';
        });
    
    }
    function TextItem48() {
        
        // Create a circle shaped path at the center of the paper.view:
        let path = new paper.Path.Circle({
            center: paper.view.center,
            radius: 25
        });
        path.fillColor = 'black';
        
        // When the mouse enters the item, set its fill color to red:
        path.on({
            mouseenter: function(this:paper.Path, event:paper.MouseEvent) {
                this.fillColor = 'red';
            },
            mouseleave: function(this:paper.Path, event:paper.MouseEvent) {
                this.fillColor = 'black';
            }
        });
    
    }
    function TextItem49() {
        
        let pathHandlers = {
            mouseenter: function(this:paper.Path, event:paper.MouseEvent) {
                this.fillColor = 'red';
            },
            mouseleave: function(this:paper.Path, event:paper.MouseEvent) {
                this.fillColor = 'black';
            }
        }
        
        // When the mouse is pressed:
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the position of the mouse:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 25,
                fillColor: 'black'
            });
        
            // Attach the handers inside the object literal to the path:
            path.on(pathHandlers);
        }
    
    }
    function TextItem50() {
        
        function onMouseDrag(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path on the next onMouseDrag or onMouseDown event:
            path.removeOn({
                drag: true,
                down: true
            });
        }
    
    }
    function TextItem51() {
        
        function onMouseMove(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // On the next move event, automatically remove the path:
            path.removeOnMove();
        }
    
    }
    function TextItem52() {
        
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path, next time the mouse is pressed:
            path.removeOnDown();
        }
    
    }
    function TextItem53() {
        
        function onMouseDrag(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // On the next drag event, automatically remove the path:
            path.removeOnDrag();
        }
    
    }
    function TextItem54() {
        
        function onMouseDown(event:paper.ToolEvent) {
            // Create a circle shaped path at the mouse position,
            // with a radius of 10:
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        
            // Remove the path, when the mouse is released:
            path.removeOnUp();
        }
    
    }
    function Tool0() {
        
        let path:paper.Path;
        
        // Only execute onMouseDrag when the mouse
        // has moved at least 10 points:
        paper.tool.minDistance = 10;
        
        paper.tool.onMouseDown = function(this:paper.Tool, event:paper.ToolEvent) {
            // Create a new path every time the mouse is clicked
            path = new paper.Path();
            path.add(event.point);
            path.strokeColor = 'black';
        }
        
        paper.tool.onMouseDrag = function(this:paper.Tool, event:paper.ToolEvent) {
            // Add a point to the path every time the mouse is dragged
            path.add(event.point);
        }
    
    }
    function Tool1() {
        
        paper.tool.onMouseDown = function(event:paper.ToolEvent) {
            // Create a new circle shaped path with a radius of 10
            // at the position of the mouse (event.point):
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        }
    
    }
    function Tool2() {
        
        // Create an empty path:
        let path = new paper.Path({
            strokeColor: 'black'
        });
        
        paper.tool.onMouseDrag = function(event:paper.ToolEvent) {
            // Add a segment to the path at the position of the mouse:
            path.add(event.point);
        }
    
    }
    function Tool3() {
        
        // Create a circle shaped path with a radius of 10 at {x: 0, y: 0}:
        let path = new paper.Path.Circle({
            center: [0, 0],
            radius: 10,
            fillColor: 'black'
        });
        
        paper.tool.onMouseMove = function(event:paper.ToolEvent) {
            // Whenever the user moves the mouse, move the path
            // to that position:
            path.position = event.point;
        }
    
    }
    function Tool4() {
        
        paper.tool.onMouseUp = function(event:paper.ToolEvent) {
            // Create a new circle shaped path with a radius of 10
            // at the position of the mouse (event.point):
            let path = new paper.Path.Circle({
                center: event.point,
                radius: 10,
                fillColor: 'black'
            });
        }
    
    }
    function Tool5() {
        
        // Create a circle shaped path:
        let path = new paper.Path.Circle({
            center: new paper.Point(50, 50),
            radius: 30,
            fillColor: 'red'
        });
        
        paper.tool.onKeyDown = function(event:paper.KeyEvent) {
            if (event.key == 'space') {
                // Scale the path by 110%:
                path.scale(1.1);
        
                // Prevent the key event from bubbling
                return false;
            }
        }
    
    }
    function View0() {
        
        // Create a rectangle shaped path with its top left point at:
        // {x: 50, y: 25} and a size of {width: 50, height: 50}
        let path = new paper.Path.Rectangle(new paper.Point(50, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        paper.view.onFrame = function(event:paper.IFrameEvent) {
            // Every frame, rotate the path by 3 degrees:
            path.rotate(3);
        }
    
    }
    function View1() {
        
        let path = new paper.Path.Rectangle(new paper.Point(50, 25), new paper.Size(50, 50));
        path.fillColor = 'black';

        let frameHandler = function(event: paper.IFrameEvent){
            // Every frame, rotate the path by 3 degrees:
            path.rotate(3);
        };
        
        paper.view.on('frame', frameHandler);
    
    }
    function View2() {
        
        let path = new paper.Path.Rectangle(new paper.Point(50, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        let frameHandler = function(event:paper.IFrameEvent) {
            // Every frame, rotate the path by 3 degrees:
            path.rotate(3);
        };
        
        paper.view.on({
            frame: frameHandler
        });
    
    }
    function View3() {
        
        let path = new paper.Path.Rectangle(new paper.Point(50, 25), new paper.Size(50, 50));
        path.fillColor = 'black';
        
        let frameHandler = function(event:paper.IFrameEvent) {
            // Every frame, rotate the path by 3 degrees:
            path.rotate(3);
        };
        
        paper.view.on({
            frame: frameHandler
        });
        
        // When the user presses the mouse,
        // detach the frame handler from the paper.view:
        function onMouseDown(event:paper.ToolEvent) {
            paper.view.off('frame');
        }
    
    }
    
}
