///<reference path="fabricjs.d.ts" />

function sample1() {
    var canvas = new fabric.Canvas('c', {
        hoverCursor: 'pointer',
        selection: false,
    });

    canvas.on({
        'object:moving': function (e) {
            (<any>e.target).opacity = 0.5;
        },
        'object:modified': function (e) {
			(<any>e.target).opacity = 1;
        }
    });

    for (var i = 0, len = 15; i < len; i++) {
        fabric.Image.fromURL('../assets/ladybug.png', function (img) {
            img.set({
                left: fabric.util.getRandomInt(0, 600),
                top: fabric.util.getRandomInt(0, 500),
                angle: fabric.util.getRandomInt(0, 90)
            });

            img.perPixelTargetFind = true;
            // img.targetFindTolerance = 4;
            img.hasControls = img.hasBorders = false;

            img.scale(fabric.util.getRandomInt(50, 100) / 100);

            canvas.add(img);
        });
    }
}

function sample2() {

    var dot, i,
        t1, t2,
        startTimer = function () {
            t1 = new Date().getTime();
            return t1;
        },
        stopTimer = function () {
            t2 = new Date().getTime();
            return t2 - t1;
        },
        getRandomInt = fabric.util.getRandomInt,
        rainbow = ["#ffcc66", "#ccff66", "#66ccff", "#ff6fcf", "#ff6666"],
        rainbowEnd = rainbow.length - 1;

    //
    // Rendering canvas #1
    //
    var canvas1 = new fabric.Canvas('c1', { backgroundColor: "#000" }),
        results1 = document.getElementById('results-c1');

    startTimer();
    for (i = 100; i >= 0; i--) {
        dot = new fabric.Circle({
            left: getRandomInt(0, 400),
            top: getRandomInt(0, 350),
            radius: 3,
            fill: rainbow[getRandomInt(0, rainbowEnd)]
        });
        canvas1.add(dot);
    }
    results1.innerHTML = 'Regular rendering of 100 elements in ' + stopTimer() + 'ms';


    //
    // Rendering canvas #2
    //
    var canvas2 = new fabric.Canvas('c2', { backgroundColor: "#000", renderOnAddition: false }),
        results2 = document.getElementById('results-c2');

    startTimer();
    for (i = 1000; i >= 0; i--) {
        dot = new fabric.Circle({
            left: getRandomInt(0, 400),
            top: getRandomInt(0, 350),
            radius: 3,
            fill: rainbow[getRandomInt(0, rainbowEnd)]
        });
        canvas2.add(dot);
    }
    canvas2.renderAll(); // Note, calling renderAll() is important in this case
    results2.innerHTML = 'Rendering 1000 elements using canvas.renderOnAddition = false in ' + stopTimer() + 'ms';
}

function sample3() {

    var $ = function (id) {return document.getElementById(id) };

    function applyFilter(index, filter) {
        var obj = <fabric.IImage>canvas.getActiveObject();
        obj.filters[index] = filter;
        obj.applyFilters(canvas.renderAll.bind(canvas));
    }

    function applyFilterValue(index, prop, value) {
        var obj = <fabric.IImage>canvas.getActiveObject();
        if (obj.filters[index]) {
            obj.filters[index][prop] = value;
            obj.applyFilters(canvas.renderAll.bind(canvas));
        }
    }

    var canvas = new fabric.Canvas('c', { backgroundImage: '../lib/bg.png' }),
        f = fabric.Image.filters;

    canvas.on({
        'object:selected': function () {
            fabric.util.toArray(document.getElementsByTagName('input')).forEach(function (el) { el.disabled = false; })

    var filters = ['grayscale', 'invert', 'remove-white', 'sepia', 'sepia2', 'brightness',
                'noise', 'gradient-transparency', 'pixelate', 'blur', 'sharpen'];

            for (var i = 0; i < filters.length; i++) {
                var checkBox = <HTMLInputElement>$(filters[i]);
                var image = <fabric.IImage>canvas.getActiveObject();
                checkBox.checked = !!image.filters[i];
            }
        },
        'selection:cleared': function () {
            fabric.util.toArray(document.getElementsByTagName('input')).forEach(function (el) { el.disabled = true; })
  }
    });

    fabric.Image.fromURL('../assets/printio.png', function (img) {
        var oImg = img.set({ left: 300, top: 300, angle: -15 }).scale(0.9);
        canvas.add(oImg).renderAll();
        canvas.setActiveObject(oImg);
    });

    $('grayscale').onclick = function () {
        applyFilter(0, this.checked && new f.Grayscale());
    };
    $('invert').onclick = function () {
        applyFilter(1, this.checked && new f.Invert());
    };
    $('remove-white').onclick = function () {
        applyFilter(2, this.checked && new f.RemoveWhite({
            threshold: (<HTMLInputElement>$('remove-white-threshold')).value,
            distance: (<HTMLInputElement>$('remove-white-distance')).value
        }));
    };
    $('remove-white-threshold').onchange = function () {
        applyFilterValue(2, 'threshold', this.value);
    };
    $('remove-white-distance').onchange = function () {
        applyFilterValue(2, 'distance', this.value);
    };
    $('sepia').onclick = function () {
        applyFilter(3, this.checked && new f.Sepia());
    };
    $('sepia2').onclick = function () {
        applyFilter(4, this.checked && new f.Sepia2());
    };
    $('brightness').onclick = function () {
        applyFilter(5, this.checked && new f.Brightness({
            brightness: parseInt((<HTMLInputElement>$('brightness-value')).value, 10)
        }));
    };
    $('brightness-value').onchange = function () {
        applyFilterValue(5, 'brightness', parseInt(this.value, 10));
    };
    $('noise').onclick = function () {
        applyFilter(6, this.checked && new f.Noise({
            noise: parseInt((<HTMLInputElement>$('noise-value')).value, 10)
        }));
    };
    $('noise-value').onchange = function () {
        applyFilterValue(6, 'noise', parseInt(this.value, 10));
    };
    $('gradient-transparency').onclick = function () {
        applyFilter(7, this.checked && new f.GradientTransparency({
            threshold: parseInt((<HTMLInputElement>$('gradient-transparency-value')).value, 10)
        }));
    };
    $('gradient-transparency-value').onchange = function () {
        applyFilterValue(7, 'threshold', parseInt(this.value, 10));
    };
    $('pixelate').onclick = function () {
        applyFilter(8, this.checked && new f.Pixelate({
            blocksize: parseInt((<HTMLInputElement>$('pixelate-value')).value, 10)
        }));
    };
    $('pixelate-value').onchange = function () {
        applyFilterValue(8, 'blocksize', parseInt(this.value, 10));
    };
    $('blur').onclick = function () {
        applyFilter(9, this.checked && new f.Convolute({
            matrix: [1 / 9, 1 / 9, 1 / 9,
                1 / 9, 1 / 9, 1 / 9,
                1 / 9, 1 / 9, 1 / 9]
        }));
    };
    $('sharpen').onclick = function () {
        applyFilter(10, this.checked && new f.Convolute({
            matrix: [0, -1, 0,
                -1, 5, -1,
                0, -1, 0]
        }));
    };
    $('emboss').onclick = function () {
        applyFilter(11, this.checked && new f.Convolute({
            matrix: [1, 1, 1,
                1, 0.7, -1,
                -1, -1, -1]
        }));
    };
}

function sample4() {

    var canvas = new fabric.Canvas('c');
    var $ = function (id) { return document.getElementById(id); };

    var rect = new fabric.Rect({
        width: 100,
        height: 100,
        top: 150,
        left: 150,
        fill: 'rgba(255,0,0,0.5)'
    });

    canvas.add(rect);

    var angleControl = <HTMLInputElement>$('angle-control');
    angleControl.onchange = function () {
        rect.setAngle(this.value).setCoords();
        canvas.renderAll();
    };

    var scaleControl = <HTMLInputElement>$('scale-control');
    scaleControl.onchange = function () {
        rect.scale(this.value).setCoords();
        canvas.renderAll();
    };

    var topControl = <HTMLInputElement>$('top-control');
    topControl.onchange = function () {
        rect.setTop(this.value).setCoords();
        canvas.renderAll();
    };

    var leftControl = <HTMLInputElement>$('left-control');
    leftControl.onchange = function () {
        rect.setLeft(this.value).setCoords();
        canvas.renderAll();
    };

    function updateControls() {

        scaleControl.value = rect.getScaleX().toString();
        angleControl.value = rect.getAngle().toString();
        leftControl.value = rect.getLeft().toString();
        topControl.value = rect.getTop().toString();
    }
    canvas.on({
        'object:moving': updateControls,
        'object:scaling': updateControls,
        'object:resizing': updateControls
    });
}


module fabric {
    export interface CircleWithLineInfos extends ICircle {
        line1?: ILine;
        line2?: ILine;
        line3?: ILine;
        line4?: ILine;
    }
}

function sample5() {
    var makeCircle = function (left: number, top: number, line1?: fabric.ILine, line2?: fabric.ILine, line3?: fabric.ILine, line4?: fabric.ILine): fabric.ICircle {
        var c = <fabric.CircleWithLineInfos>new fabric.Circle({
            left: left,
            top: top,
            strokeWidth: 5,
            radius: 12,
            fill: '#fff',
            stroke: '#666'
        });

        c.line1 = line1;
        c.line2 = line2;
        c.line3 = line3;
        c.line4 = line4;
        c.hasControls = c.hasBorders = false;
        return c;
    }

function makeLine(coords: number[]) {
        return new fabric.Line(coords, {
            fill: 'red',
            strokeWidth: 5,
            selectable: false
        });
    }

    var canvas = new fabric.Canvas('c', { selection: false });

    var line = makeLine([250, 125, 250, 175]),
        line2 = makeLine([250, 175, 250, 250]),
        line3 = makeLine([250, 250, 300, 350]),
        line4 = makeLine([250, 250, 200, 350]),
        line5 = makeLine([250, 175, 175, 225]),
        line6 = makeLine([250, 175, 325, 225]);

    canvas.add(line, line2, line3, line4, line5, line6);

    canvas.add(
        makeCircle(line.x1, line.y1, null, line),
        makeCircle(line.x2, line.y2, line, line2, line5, line6),
        makeCircle(line2.x2, line2.y2, line2, line3, line4),
        makeCircle(line3.x2, line3.y2, line3),
        makeCircle(line4.x2, line4.y2, line4),
        makeCircle(line5.x2, line5.y2, line5),
        makeCircle(line6.x2, line6.y2, line6)
        );

    canvas.on('object:moving', function (e) {
        var p = <fabric.CircleWithLineInfos>e.target;
        p.line1 && p.line1.set({ 'x2': p.left, 'y2': p.top });
        p.line2 && p.line2.set({ 'x1': p.left, 'y1': p.top });
        p.line3 && p.line3.set({ 'x1': p.left, 'y1': p.top });
        p.line4 && p.line4.set({ 'x1': p.left, 'y1': p.top });
        canvas.renderAll();
    });
}

function sample6() {
    var canvas = new fabric.Canvas('c');
    fabric.loadSVGFromURL('../assets/135.svg', function (objects) {
        var obj = objects[0].scale(0.25);
        canvas.centerObject(obj);
        canvas.add(obj);

        canvas.add(obj.clone().set({ left: 100, top: 100, angle: -15 }));
        canvas.add(obj.clone().set({ left: 480, top: 100, angle: 15 }));
        canvas.add(obj.clone().set({ left: 100, top: 400, angle: -15 }));
        canvas.add(obj.clone().set({ left: 480, top: 400, angle: 15 }));

        canvas.on('mouse:move', function (options) {
            var p = canvas.getPointer(options.e);

            canvas.forEachObject(function (obj) {
                var distX = Math.abs(p.x - obj.left),
                    distY = Math.abs(p.y - obj.top),
                    dist = Math.round(Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2)));
                obj.setOpacity(1 / (dist / 20));
            });

        });

    });
}

module fabric {
    export interface ImageWithInfo extends IImage {
        movingLeft: boolean;
    }
}

function sample7() {

    var canvas = new fabric.Canvas('c', { selection: false });

    setInterval(function () {
        fabric.Image.fromURL('../assets/ladybug.png', function (obj) {
            var img = <fabric.ImageWithInfo>obj;
            img.set('left', fabric.util.getRandomInt(200, 600)).set('top', -50);
            img.movingLeft = !!Math.round(Math.random());
            canvas.add(img);
        });
    }, 1000);


    var animate = (function animate() {
        canvas.forEachObject(function (obj) {
            var img = <fabric.ImageWithInfo>obj;
            img.left += (img.movingLeft ? -1 : 1);
            img.top += 1;
            if (img.left > 900 || img.top > 500) {
                canvas.remove(img);
            }
            else {
                img.setAngle(img.getAngle() + 2);
            }
        });
        canvas.renderAll();
        window.requestAnimationFrame(animate);
    });

    animate();
}

function sample8() {

    function pad(str: string, length: number): string {
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    };

    var getRandomInt = fabric.util.getRandomInt;

    function getRandomColor() {
        return (
            pad(getRandomInt(0, 255).toString(16), 2) +
            pad(getRandomInt(0, 255).toString(16), 2) +
            pad(getRandomInt(0, 255).toString(16), 2)
            );
    }

    function getRandomNum(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }

    if (/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
        fabric.Object.prototype.cornersize = 30;
    }

    var canvas = new fabric.Canvas('canvas');
    // canvas.controlsAboveOverlay = true;

    function updateComplexity() {
        setTimeout(function () {
            var element = <HTMLElement>document.getElementById('complexity').childNodes[1];
            element.innerHTML = ' ' + canvas.complexity();
        }, 100);
    }

    document.getElementById('commands').onclick = function (ev: any) {
        var ev: any = ev || window.event;

        if (ev.preventDefault) {
            ev.preventDefault()
    }
        else if (ev.returnValue) {
            ev.returnValue = false;
        }

        var element: any = ev.target || ev.srcElement;
        if (element.nodeName.toLowerCase() === 'strong') {
            element = element.parentNode;
        }

        var className = element.className,
            offset = 50,
            left = fabric.util.getRandomInt(0 + offset, 700 - offset),
            top = fabric.util.getRandomInt(0 + offset, 500 - offset),
            angle = fabric.util.getRandomInt(-20, 40),
            width = fabric.util.getRandomInt(30, 50),
            opacity = (function (min, max) { return Math.random() * (max - min) + min; })(0.5, 1);


        switch (className) {
            case 'rect':
                canvas.add(new fabric.Rect({
                    left: left,
                    top: top,
                    fill: '#' + getRandomColor(),
                    width: 50,
                    height: 50,
                    opacity: 0.8
                }));
                break;

            case 'circle':
                canvas.add(new fabric.Circle({
                    left: left,
                    top: top,
                    fill: '#' + getRandomColor(),
                    radius: 50,
                    opacity: 0.8
                }));
                break;

            case 'triangle':
                canvas.add(new fabric.Triangle({
                    left: left,
                    top: top,
                    fill: '#' + getRandomColor(),
                    width: 50,
                    height: 50,
                    opacity: 0.8
                }));
                break;

            case 'image1':
                fabric.Image.fromURL('../assets/pug.jpg', function (image) {
                    image.set({
                        left: left,
                        top: top,
                        angle: angle,
                        padding: 10,
                        cornersize: 10
                    });
                    image.scale(getRandomNum(0.1, 0.25)).setCoords();
                    canvas.add(image);
                });
                break;

            case 'image2':
                fabric.Image.fromURL('../assets/logo.png', function (image) {
                    image.set({
                        left: left,
                        top: top,
                        angle: angle,
                        padding: 10,
                        cornersize: 10
                    });
                    image.scale(getRandomNum(0.1, 1)).setCoords();
                    canvas.add(image);
                    updateComplexity();
                });
                break;

            case 'shape':
                var id = element.id, match;
                if (match = /\d+$/.exec(id)) {
                    fabric.loadSVGFromURL('../assets/' + match[0] + '.svg', function (objects, options) {
                        var loadedObject = fabric.util.groupSVGElements(objects, options);

                        loadedObject.set({
                            left: left,
                            top: top,
                            angle: angle,
                            padding: 10,
                            cornersize: 10
                        });
                        loadedObject/*.scaleToWidth(300)*/.setCoords();

                        // loadedObject.hasRotatingPoint = true;

                        canvas.add(loadedObject);
                        updateComplexity();
                        canvas.calcOffset();
                    });
                }
                break;

            case 'clear':
                if (confirm('Are you sure?')) {
                    canvas.clear();
                }
        }
        updateComplexity();
    };

    document.getElementById('execute').onclick = function () {
        var code = (<HTMLInputElement>document.getElementById('canvas-console')).value;
        if (!(/^\s+$/).test(code)) {
            eval(code);
        }
    };


    document.getElementById('rasterize').onclick = function () {
        if (!fabric.Canvas.supports('toDataURL')) {
            alert('This browser doesn\'t provide means to serialize canvas to an image');
        }
        else {
            window.open(canvas.toDataURL('png'));
        }
    };

    var removeSelectedEl = document.getElementById('remove-selected');
    removeSelectedEl.onclick = function () {
        var activeObject = canvas.getActiveObject(),
            activeGroup = canvas.getActiveGroup();
        if (activeObject) {
            canvas.remove(activeObject);
        }
        else if (activeGroup) {
            var objectsInGroup = activeGroup.getObjects();
            canvas.discardActiveGroup();
            objectsInGroup.forEach(function (object) {
                canvas.remove(object);
            });
        }
    };

    var supportsInputOfType = function (type) {
        return function () {
            var el = <HTMLInputElement>document.createElement('input');
            try {
                el.type = type;
            }
            catch (err) { }
            return el.type === type;
        };
    };

    var supportsSlider = supportsInputOfType('range'),
        supportsColorpicker = supportsInputOfType('color');

    if (supportsSlider()) {
        (function () {
            var controls = document.getElementById('controls');

            var sliderLabel = <HTMLLabelElement>document.createElement('label');
            sliderLabel.htmlFor = 'opacity';
            sliderLabel.innerHTML = 'Opacity: ';

            var slider = <HTMLInputElement>document.createElement('input');

            try { slider.type = 'range'; } catch (err) { }

            slider.id = 'opacity';
            slider.value = "100";

            controls.appendChild(sliderLabel);
            controls.appendChild(slider);

            canvas.calcOffset();

            slider.onchange = function () {
                var activeObject = canvas.getActiveObject(),
                    activeGroup = canvas.getActiveGroup();

                if (activeObject || activeGroup) {
                    (activeObject || activeGroup).setOpacity(parseInt(this.value, 10) / 100);
                    canvas.renderAll();
                }
            };
        })();
    }

    if (supportsColorpicker()) {
        (function () {
            var controls = document.getElementById('controls');

            var label = <HTMLLabelElement>document.createElement('label');
            label.htmlFor = 'color';
            label.innerHTML = 'Color: ';
            label.style.marginLeft = '10px';

            var colorpicker = <HTMLInputElement>document.createElement('input');
            colorpicker.type = 'color';
            colorpicker.id = 'color';
            colorpicker.style.width = '40px';

            controls.appendChild(label);
            controls.appendChild(colorpicker);

            canvas.calcOffset();

            colorpicker.onchange = function () {
                var activeObject = canvas.getActiveObject(),
                    activeGroup = canvas.getActiveGroup();

                if (activeObject || activeGroup) {
                    (activeObject || activeGroup).setFill(this.value);
                    canvas.renderAll();
                }
            };
        })();
    }

    var lockHorizontallyEl = document.getElementById('lock-horizontally');
    lockHorizontallyEl.onclick = function () {
        var activeObject: any = canvas.getActiveObject();
        if (activeObject) {
            activeObject.lockMovementX = !activeObject.lockMovementX;
            lockHorizontallyEl.innerHTML = activeObject.lockMovementX
            ? 'Unlock horizontal movement'
            : 'Lock horizontal movement';
        }
    };

    var lockVerticallyEl = document.getElementById('lock-vertically');
    lockVerticallyEl.onclick = function () {
        var activeObject: any = canvas.getActiveObject();
        if (activeObject) {
            activeObject.lockMovementY = !activeObject.lockMovementY;
            lockVerticallyEl.innerHTML = activeObject.lockMovementY
            ? 'Unlock vertical movement'
            : 'Lock vertical movement';
        }
    };

    var lockScalingXEl = document.getElementById('lock-scaling-x');
    lockScalingXEl.onclick = function () {
        var activeObject: any = canvas.getActiveObject();
        if (activeObject) {
            activeObject.lockScalingX = !activeObject.lockScalingX;
            lockScalingXEl.innerHTML = activeObject.lockScalingX
            ? 'Unlock horizontal scaling'
            : 'Lock horizontal scaling';
        }
    };

    var lockScalingYEl = document.getElementById('lock-scaling-y');
    lockScalingYEl.onclick = function () {
        var activeObject: any = canvas.getActiveObject();
        if (activeObject) {
            activeObject.lockScalingY = !activeObject.lockScalingY;
            lockScalingYEl.innerHTML = activeObject.lockScalingY
            ? 'Unlock vertical scaling'
            : 'Lock vertical scaling';
        }
    };

    var lockRotationEl = document.getElementById('lock-rotation');
    lockRotationEl.onclick = function () {
        var activeObject: any = canvas.getActiveObject();
        if (activeObject) {
            activeObject.lockRotation = !activeObject.lockRotation;
            lockRotationEl.innerHTML = activeObject.lockRotation
            ? 'Unlock rotation'
            : 'Lock rotation';
        }
    };

    var gradientifyBtn = document.getElementById('gradientify');

    var activeObjectButtons = [
        lockHorizontallyEl,
        lockVerticallyEl,
        lockScalingXEl,
        lockScalingYEl,
        lockRotationEl,
        removeSelectedEl,
        gradientifyBtn
    ];

    var opacityEl = document.getElementById('opacity');
    if (opacityEl) {
        activeObjectButtons.push(opacityEl);
    }
    var colorEl = document.getElementById('color');
    if (colorEl) {
        activeObjectButtons.push(colorEl);
    }

    for (var i = activeObjectButtons.length; i--;) {
        activeObjectButtons[i].disabled = true;
    }

    canvas.on('object:selected', onObjectSelected);
    canvas.on('group:selected', onObjectSelected);

    function onObjectSelected(e) {
        var selectedObject = e.target;

        for (var i = activeObjectButtons.length; i--;) {
            activeObjectButtons[i].disabled = false;
        }

        lockHorizontallyEl.innerHTML = (selectedObject.lockMovementX ? 'Unlock horizontal movement' : 'Lock horizontal movement');
        lockVerticallyEl.innerHTML = (selectedObject.lockMovementY ? 'Unlock vertical movement' : 'Lock vertical movement');
        lockScalingXEl.innerHTML = (selectedObject.lockScalingX ? 'Unlock horizontal scaling' : 'Lock horizontal scaling');
        lockScalingYEl.innerHTML = (selectedObject.lockScalingY ? 'Unlock vertical scaling' : 'Lock vertical scaling');
        lockRotationEl.innerHTML = (selectedObject.lockRotation ? 'Unlock rotation' : 'Lock rotation');
    }

    canvas.on('selection:cleared', function (e) {
        for (var i = activeObjectButtons.length; i--;) {
            activeObjectButtons[i].disabled = true;
        }
    });

    var drawingModeEl = document.getElementById('drawing-mode'),
        drawingOptionsEl = document.getElementById('drawing-mode-options'),
        drawingColorEl = <HTMLInputElement>document.getElementById('drawing-color'),
        drawingLineWidthEl = <HTMLInputElement>document.getElementById('drawing-line-width');

    drawingModeEl.onclick = function () {
        var canvasWithDrawingMode: any = canvas;
        canvasWithDrawingMode.isDrawingMode = !canvasWithDrawingMode.isDrawingMode;
        if (canvasWithDrawingMode.isDrawingMode) {
            drawingModeEl.innerHTML = 'Cancel drawing mode';
            drawingModeEl.className = 'is-drawing';
            drawingOptionsEl.style.display = '';
        }
        else {
            drawingModeEl.innerHTML = 'Enter drawing mode';
            drawingModeEl.className = '';
            drawingOptionsEl.style.display = 'none';
        }
    };

    canvas.on('path:created', function () {
        updateComplexity();
    });

    drawingColorEl.onchange = function () {
        canvas.freeDrawingColor = drawingColorEl.value;
    };
    drawingLineWidthEl.onchange = function () {
        canvas.freeDrawingLineWidth = parseInt(drawingLineWidthEl.value, 10) || 1; // disallow 0, NaN, etc.
    };

    canvas.freeDrawingColor = drawingColorEl.value;
    canvas.freeDrawingLineWidth = parseInt(drawingLineWidthEl.value, 10) || 1;


    var text = 'Lorem ipsum dolor sit amet,\nconsectetur adipisicing elit,\nsed do eiusmod tempor incididunt\nut labore et dolore magna aliqua.\n' +
        'Ut enim ad minim veniam,\nquis nostrud exercitation ullamco\nlaboris nisi ut aliquip ex ea commodo consequat.';

    document.getElementById('add-text').onclick = function () {
        var textSample = new fabric.Text(text.slice(0, getRandomInt(0, text.length)), {
            left: getRandomInt(350, 400),
            top: getRandomInt(350, 400),
            fontFamily: 'helvetica',
            angle: getRandomInt(-10, 10),
            fill: '#' + getRandomColor(),
            scaleX: 0.5,
            scaleY: 0.5,
            fontWeight: ''
        });
        canvas.add(textSample);
        updateComplexity();
    };


    document.onkeydown = function (e) {
        var obj = canvas.getActiveObject() || canvas.getActiveGroup();
        if (obj && e.keyCode === 8) {
            // this is horrible. need to fix, so that unified interface can be used
            if (obj.type === 'group') {
                // var groupObjects = obj.getObjects();
                //         canvas.discardActiveGroup();
                //         groupObjects.forEach(function(obj) {
                //           canvas.remove(obj);
                //         });
            }
            else {
                //canvas.remove(obj);
            }
            canvas.renderAll();
            // return false;
        }
    };

    setTimeout(function () {
        canvas.calcOffset();
    }, 100);

    if (document.location.search.indexOf('guidelines') > -1) {
        //initCenteringGuidelines(canvas);
        //initAligningGuidelines(canvas);
    }

    gradientifyBtn.onclick = function () {
        var obj = canvas.getActiveObject();
        if (obj) {
            obj.setGradientFill({
                x2: (getRandomInt(0, 1) ? 0 : obj.width),
                y2: (getRandomInt(0, 1) ? 0 : obj.height),
                colorStops: {
                    0: '#' + getRandomColor(),
                    1: '#' + getRandomColor()
                }
            });
            canvas.renderAll();
        }
    };

    var textEl = <HTMLInputElement>document.getElementById('text');
    if (textEl) {
        textEl.onfocus = function () {
            var activeObject = canvas.getActiveObject();

            if (activeObject && activeObject.type === 'text') {
                this.value = (<fabric.IText>activeObject).text;
            }
        };
        textEl.onkeyup = function (e) {
            var activeObject = canvas.getActiveObject();
            if (activeObject) {
                if (!this.value) {
                    canvas.discardActiveObject();
                }
                else {
                    (<fabric.IText>activeObject).text = this.value;
                }
                canvas.renderAll();
            }
        };
    }

    var cmdUnderlineBtn = document.getElementById('text-cmd-underline');
    if (cmdUnderlineBtn) {
        activeObjectButtons.push(cmdUnderlineBtn);
        cmdUnderlineBtn.disabled = true;
        cmdUnderlineBtn.onclick = function () {
            var activeObject = <fabric.IText>canvas.getActiveObject();
            if (activeObject && activeObject.type === 'text') {
                activeObject.textDecoration = (activeObject.textDecoration == 'underline' ? '' : 'underline');
                this.className = activeObject.textDecoration ? 'selected' : '';
                canvas.renderAll();
            }
        };
    }

    var cmdLinethroughBtn = document.getElementById('text-cmd-linethrough');
    if (cmdLinethroughBtn) {
        activeObjectButtons.push(cmdLinethroughBtn);
        cmdLinethroughBtn.disabled = true;
        cmdLinethroughBtn.onclick = function () {
            var activeObject = <fabric.IText>canvas.getActiveObject();
            if (activeObject && activeObject.type === 'text') {
                activeObject.textDecoration = (activeObject.textDecoration == 'line-through' ? '' : 'line-through');
                this.className = activeObject.textDecoration ? 'selected' : '';
                canvas.renderAll();
            }
        };
    }

    var cmdOverlineBtn = document.getElementById('text-cmd-overline');
    if (cmdOverlineBtn) {
        activeObjectButtons.push(cmdOverlineBtn);
        cmdOverlineBtn.disabled = true;
        cmdOverlineBtn.onclick = function () {
            var activeObject = <fabric.IText>canvas.getActiveObject();
            if (activeObject && activeObject.type === 'text') {
                activeObject.textDecoration = (activeObject.textDecoration == 'overline' ? '' : 'overline');
                this.className = activeObject.textDecoration ? 'selected' : '';
                canvas.renderAll();
            }
        };
    }

    var cmdBoldBtn = document.getElementById('text-cmd-bold');
    if (cmdBoldBtn) {
        activeObjectButtons.push(cmdBoldBtn);
        cmdBoldBtn.disabled = true;
        cmdBoldBtn.onclick = function () {
            var activeObject = <fabric.IText>canvas.getActiveObject();
            if (activeObject && activeObject.type === 'text') {
                activeObject.fontWeight = (activeObject.fontWeight == 'bold' ? '' : 'bold');
                this.className = activeObject.fontWeight ? 'selected' : '';
                canvas.renderAll();
            }
        };
    }

    var cmdItalicBtn = document.getElementById('text-cmd-italic');
    if (cmdItalicBtn) {
        activeObjectButtons.push(cmdItalicBtn);
        cmdItalicBtn.disabled = true;
        cmdItalicBtn.onclick = function () {
            var activeObject = <fabric.IText>canvas.getActiveObject();
            if (activeObject && activeObject.type === 'text') {
                activeObject.fontStyle = (activeObject.fontStyle == 'italic' ? '' : 'italic');
                this.className = activeObject.fontStyle ? 'selected' : '';
                canvas.renderAll();
            }
        };
    }

    var cmdShadowBtn = document.getElementById('text-cmd-shadow');
    if (cmdShadowBtn) {
        activeObjectButtons.push(cmdShadowBtn);
        cmdShadowBtn.disabled = true;
        cmdShadowBtn.onclick = function () {
            var activeObject = <fabric.IText>canvas.getActiveObject();
            if (activeObject && activeObject.type === 'text') {
                activeObject.textShadow = !activeObject.textShadow ? 'rgba(0,0,0,0.2) 2px 2px 10px' : '';
                this.className = activeObject.textShadow ? 'selected' : '';
                canvas.renderAll();
            }
        };
    }

    var textAlignSwitch = document.getElementById('text-align');
    if (textAlignSwitch) {
        activeObjectButtons.push(textAlignSwitch);
        textAlignSwitch.disabled = true;
        textAlignSwitch.onchange = function () {
            var activeObject = <fabric.IText>canvas.getActiveObject();
            if (activeObject && activeObject.type === 'text') {
                activeObject.textAlign = this.value.toLowerCase();
                canvas.renderAll();
            }
        };
    }

    var fontFamilySwitch = document.getElementById('font-family');
    if (fontFamilySwitch) {
        activeObjectButtons.push(fontFamilySwitch);
        fontFamilySwitch.disabled = true;
        fontFamilySwitch.onchange = function () {
            var activeObject = <fabric.IText>canvas.getActiveObject();
            if (activeObject && activeObject.type === 'text') {
                activeObject.fontFamily = this.value;
                canvas.renderAll();
            }
        };
    }

    var bgColorField = document.getElementById('text-bg-color');
    if (bgColorField) {
        bgColorField.onchange = function () {
            var activeObject = <fabric.IText>canvas.getActiveObject();
            if (activeObject && activeObject.type === 'text') {
                activeObject.backgroundColor = this.value;
                canvas.renderAll();
            }
        };
    }

    var strokeColorField = document.getElementById('text-stroke-color');
    if (strokeColorField) {
        strokeColorField.onchange = function () {
            var activeObject = <fabric.IText>canvas.getActiveObject();
            if (activeObject && activeObject.type === 'text') {
                activeObject.strokeStyle = this.value;
                canvas.renderAll();
            }
        };
    }

    if (supportsSlider) {
        (function () {
            var container = document.getElementById('text-controls');
            var slider = <HTMLInputElement>document.createElement('input');
            var label = <HTMLLabelElement>document.createElement('label');
            label.innerHTML = 'Line height: ';
            try { slider.type = 'range'; } catch (err) { }
            slider.min = "0";
            slider.max = "10";
            slider.step = "0.1";
            slider.value = "1.5";
            container.appendChild(label);
            label.appendChild(slider);
            slider.title = "Line height";
            slider.onchange = function () {
                var activeObject = <fabric.IText>canvas.getActiveObject();
                if (activeObject && activeObject.type === 'text') {
                    activeObject.lineHeight = this.value;
                    canvas.renderAll();
                }
            };

            canvas.on('object:selected', function (e) {
                slider.value = e.target.lineHeight;
            });
        })();
    }

    document.getElementById('load-svg').onclick = function () {
        var svg = (<HTMLInputElement>document.getElementById('svg-console')).value;
        fabric.loadSVGFromString(svg, function (objects, options) {
            var obj = fabric.util.groupSVGElements(objects, options);
            canvas.add(obj).centerObject(obj).renderAll();
            obj.setCoords();
        });
    };
}

function sample9() {
    var canvas = new fabric.Canvas('c');
    canvas.setBackgroundImage('yolo.jpg', () => {"a"}, {opacity: 45});
    canvas.setBackgroundImage('yolo.jpg', () => {"a"});
}
