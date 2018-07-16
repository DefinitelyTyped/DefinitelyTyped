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
                let steer,
                    desired = target.subtract(this.position);
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
        function onResize(event:paper.ToolEvent) {
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
                // The center position is a random point in the view:
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

        function onResize(event: paper.ToolEvent) {
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
            let u1, u2;

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
        let bbox:any, diagram;
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
                            let points = [];
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
        function onResize(event:paper.ToolEvent) {
            initializePath();
        }
    }
}
