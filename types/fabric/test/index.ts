function sample1() {
  const canvas = new fabric.Canvas('c', {
    hoverCursor: 'pointer',
    selection: false,
    targets: []
  });

  canvas.on('object:moving', (e: fabric.IEvent) => {
    e.target.opacity = 0.5;
  });
  canvas.on('object:modified', (e: fabric.IEvent) => {
    e.target.opacity = 1;
    const obj = e.target.getCoords();
  });

  for (let i = 0; i < 15; i++) {
    fabric.Image.fromURL('../assets/ladybug.png', (img: fabric.Image) => {
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
  let dot: fabric.Circle;
  let i: number;
  let t1: number;
  let t2: number;
  const startTimer = () => {
    t1 = new Date().getTime();
    return t1;
  };
  const stopTimer = () => {
    t2 = new Date().getTime();
    return t2 - t1;
  };
  const getRandomInt = fabric.util.getRandomInt;
  const rainbow = ["#ffcc66", "#ccff66", "#66ccff", "#ff6fcf", "#ff6666"];
  const rainbowEnd = rainbow.length - 1;

  fabric.Object.NUM_FRACTION_DIGITS = 2;

  //
  // Rendering canvas #1
  //
  const canvas1 = new fabric.Canvas('c1', { backgroundColor: "#000" });
  const results1 = document.getElementById('results-c1');

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
  results1.innerHTML = `Regular rendering of 100 elements in ${stopTimer()}ms`;

  //
  // Rendering canvas #2
  //
  const canvas2 = new fabric.Canvas('c2', { backgroundColor: "#000", renderOnAddRemove: false });
  const results2 = document.getElementById('results-c2');

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
  results2.innerHTML = `Rendering 1000 elements using canvas.renderOnAddRemove = false in ${stopTimer()}ms`;
}

function sample3() {
  const $: (id: string) => HTMLElement = (id: string) => document.getElementById(id);

  function applyFilter(index: number, filter: any) {
    const obj: fabric.Image = <fabric.Image> canvas.getActiveObject();
    obj.filters[index] = filter;
    obj.applyFilters(canvas.renderAll.bind(canvas));
  }

  function applyFilterValue(index: number, prop: string, value: any) {
    const obj: fabric.Image = <fabric.Image> canvas.getActiveObject();
    if (obj.filters[index]) {
      obj.applyFilters(canvas.renderAll.bind(canvas));
    }
  }

  const canvas = new fabric.Canvas('c', { backgroundImage: '../lib/bg.png' });
  const f = fabric.Image.filters;

  canvas.on('object:selected', () => {
    fabric.util.toArray(document.getElementsByTagName('input')).forEach(el => { el.disabled = false; });

    const filters = ['grayscale', 'invert', 'remove-white', 'sepia', 'sepia2', 'brightness',
      'noise', 'gradient-transparency', 'pixelate', 'blur', 'sharpen'];

    for (let i = 0; i < filters.length; i++) {
      const checkBox = <HTMLInputElement> $(filters[i]);
      const image = <fabric.Image> canvas.getActiveObject();
      checkBox.checked = !!image.filters[i];
    }
  });

  canvas.on('selection:cleared', () => {
    fabric.util.toArray(document.getElementsByTagName('input')).forEach(el => { el.disabled = true; });
  });

  const image = fabric.Image.fromURL('../assets/printio.png', (img: fabric.Image) => {
    const oImg = img.set({ left: 300, top: 300, angle: -15 }).scale(0.9);
    canvas.add(oImg).renderAll();
    canvas.setActiveObject(oImg);
  });
  image.setSrc('../assets/printio.png');

  $('grayscale').onclick = function(this: HTMLInputElement) {
    applyFilter(0, this.checked && new f.Grayscale());
  };
  $('invert').onclick = function(this: HTMLInputElement) {
    applyFilter(1, this.checked && new f.Invert());
  };
  $('remove-white').onclick = function(this: HTMLInputElement) {
    applyFilter(2, this.checked && new f.RemoveWhite({
      threshold: parseInt((<HTMLInputElement> $('remove-white-threshold')).value, 10),
      distance: parseInt((<HTMLInputElement> $('remove-white-distance')).value, 10)
    }));
  };
  $('remove-white-threshold').onchange = function(this: HTMLInputElement) {
    applyFilterValue(2, 'threshold', this.value);
  };
  $('remove-white-distance').onchange = function(this: HTMLInputElement) {
    applyFilterValue(2, 'distance', this.value);
  };
  $('sepia').onclick = function(this: HTMLInputElement) {
    applyFilter(3, this.checked && new f.Sepia());
  };
  $('sepia2').onclick = function(this: HTMLInputElement) {
    applyFilter(4, this.checked && new f.Sepia2());
  };
  $('brightness').onclick = function(this: HTMLInputElement) {
    applyFilter(5, this.checked && new f.Brightness({
      brightness: parseInt((<HTMLInputElement> $('brightness-value')).value, 10)
    }));
  };
  $('brightness-value').onchange = function(this: HTMLInputElement) {
    applyFilterValue(5, 'brightness', parseInt(this.value, 10));
  };
  $('noise').onclick = function(this: HTMLInputElement) {
    applyFilter(6, this.checked && new f.Noise({
      noise: parseInt((<HTMLInputElement> $('noise-value')).value, 10)
    }));
  };
  $('noise-value').onchange = function(this: HTMLInputElement) {
    applyFilterValue(6, 'noise', parseInt(this.value, 10));
  };
  $('gradient-transparency').onclick = function(this: HTMLInputElement) {
    applyFilter(7, this.checked && new f.GradientTransparency({
      threshold: parseInt((<HTMLInputElement> $('gradient-transparency-value')).value, 10)
    }));
  };
  $('gradient-transparency-value').onchange = function(this: HTMLInputElement) {
    applyFilterValue(7, 'threshold', parseInt(this.value, 10));
  };
  $('pixelate').onclick = function(this: HTMLInputElement) {
    applyFilter(8, this.checked && new f.Pixelate({
      blocksize: parseInt((<HTMLInputElement> $('pixelate-value')).value, 10)
    }));
  };
  $('pixelate-value').onchange = function(this: HTMLInputElement) {
    applyFilterValue(8, 'blocksize', parseInt(this.value, 10));
  };
  $('blur').onclick = function(this: HTMLInputElement) {
    applyFilter(9, this.checked && new f.Convolute({
      matrix: [1 / 9, 1 / 9, 1 / 9,
        1 / 9, 1 / 9, 1 / 9,
        1 / 9, 1 / 9, 1 / 9]
    }));
  };
  $('sharpen').onclick = function(this: HTMLInputElement) {
    applyFilter(10, this.checked && new f.Convolute({
      matrix: [0, -1, 0,
        -1, 5, -1,
        0, -1, 0]
    }));
  };
  $('emboss').onclick = function(this: HTMLInputElement) {
    applyFilter(11, this.checked && new f.Convolute({
      matrix: [1, 1, 1,
        1, 0.7, -1,
        -1, -1, -1]
    }));
  };
}

function sample4() {
  const canvas = new fabric.Canvas('c');
  const $: (id: string) => HTMLElement = id => document.getElementById(id);

  const rect = new fabric.Rect({
    width: 100,
    height: 100,
    top: 150,
    left: 150,
    fill: 'rgba(255,0,0,0.5)'
  });

  canvas.add(rect);

  const angleControl = <HTMLInputElement> $('angle-control');
  angleControl.onchange = function(this: HTMLInputElement) {
    rect.setAngle(+this.value).setCoords();
    canvas.renderAll();
  };

  const scaleControl = <HTMLInputElement> $('scale-control');
  scaleControl.onchange = function(this: HTMLInputElement) {
    rect.scale(+this.value).setCoords();
    canvas.renderAll();
  };

  const topControl = <HTMLInputElement> $('top-control');
  topControl.onchange = function(this: HTMLInputElement) {
    rect.set('top',+this.value).setCoords();
    canvas.renderAll();
  };

  const leftControl = <HTMLInputElement> $('left-control');
  leftControl.onchange = function(this: HTMLInputElement) {
    rect.set('left',+this.value).setCoords();
    canvas.renderAll();
  };

  function updateControls() {
    scaleControl.value = rect.scaleX.toString();
    angleControl.value = rect.angle.toString();
    leftControl.value = rect.left.toString();
    topControl.value = rect.top.toString();
  }

  canvas.on('object:moving', updateControls);
  canvas.on('object:scaling', updateControls);
  canvas.on('object:resizing', updateControls);
}

interface CircleWithLineInfos extends fabric.Circle {
  line1?: fabric.Line | undefined;
  line2?: fabric.Line | undefined;
  line3?: fabric.Line | undefined;
  line4?: fabric.Line | undefined;
}

function sample5() {
  const makeCircle = (left: number, top: number, line1?: fabric.Line, line2?: fabric.Line, line3?: fabric.Line, line4?: fabric.Line): fabric.Circle => {
    const c = <CircleWithLineInfos> new fabric.Circle({
      left,
      top,
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
  };

  function makeLine(coords: number[]) {
    return new fabric.Line(coords, {
      fill: 'red',
      strokeWidth: 5,
      selectable: false
    });
  }

  const canvas = new fabric.Canvas('c', { selection: false });

  const line = makeLine([250, 125, 250, 175]);
  const line2 = makeLine([250, 175, 250, 250]);
  const line3 = makeLine([250, 250, 300, 350]);
  const line4 = makeLine([250, 250, 200, 350]);
  const line5 = makeLine([250, 175, 175, 225]);
  const line6 = makeLine([250, 175, 325, 225]);

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

  canvas.on('object:moving', e => {
    const p = <CircleWithLineInfos> e.target;
    p.line1 && p.line1.set({ x2: p.left, y2: p.top });
    p.line2 && p.line2.set({ x1: p.left, y1: p.top });
    p.line3 && p.line3.set({ x1: p.left, y1: p.top });
    p.line4 && p.line4.set({ x1: p.left, y1: p.top });
    canvas.renderAll();
  });
}

function sample6() {
  const canvas = new fabric.Canvas('c');
  fabric.loadSVGFromURL('../assets/135.svg', objects => {
    const obj = objects[0].scale(0.25);
    canvas.centerObject(obj);
    canvas.add(obj);

    obj.clone((clone: fabric.Object) => canvas.add(clone.set({ left: 100, top: 100, angle: -15 })));
    obj.clone((clone: fabric.Object) => canvas.add(clone.set({ left: 480, top: 100, angle: 15 })));
    obj.clone((clone: fabric.Object) => canvas.add(clone.set({ left: 100, top: 400, angle: -15 })));
    obj.clone((clone: fabric.Object) => canvas.add(clone.set({ left: 480, top: 400, angle: 15 })));

    canvas.on('mouse:move', options => {
      const p = canvas.getPointer(options.e);
      const mouseX = options.e.clientX;

      canvas.forEachObject(obj => {
        const distX = Math.abs(p.x - obj.left);
        const distY = Math.abs(p.y - obj.top);
        const dist = Math.round(Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2)));
        obj.set('opacity', (1 / (dist / 20)));
      });
    });

    canvas.on('mouse:wheel', (options) => {
        const deltaY = options.e.deltaY;
    });
  }, null, {
    crossOrigin:'anonymous'
  });
}

interface ImageWithInfo extends fabric.Image {
  movingLeft: boolean;
}

function sample7() {
  const canvas = new fabric.Canvas('c', { selection: false });

  setInterval(() => {
    fabric.Image.fromURL('../assets/ladybug.png', (obj: fabric.Object) => {
      const img = <ImageWithInfo> obj;
      img.set('left', fabric.util.getRandomInt(200, 600)).set('top', -50);
      img.movingLeft = !!Math.round(Math.random());
      canvas.add(img);
    });
  }, 1000);

  const animate = (function animate() {
    canvas.forEachObject(obj => {
      const img = <ImageWithInfo> obj;
      img.left += (img.movingLeft ? -1 : 1);
      img.top += 1;
      if (img.left > 900 || img.top > 500) {
        canvas.remove(img);
      } else {
        img.setAngle(img.angle + 2);
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
  }

  const getRandomInt = fabric.util.getRandomInt;

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
    (fabric.Object.prototype as any).cornersize = 30;
  }

  const canvas = new fabric.Canvas('canvas');
  // canvas.controlsAboveOverlay = true;

  function updateComplexity() {
    setTimeout(() => {
      const element = <HTMLElement> document.getElementById('complexity').childNodes[1];
      element.innerHTML = ' ' + canvas.complexity();
    }, 100);
  }

  document.getElementById('commands').onclick = (ev: any) => {
    ev = ev || window.event;

    if (ev.preventDefault) {
      ev.preventDefault();
    } else if (ev.returnValue) {
      ev.returnValue = false;
    }

    let element: any = ev.target || ev.srcElement;
    if (element.nodeName.toLowerCase() === 'strong') {
      element = element.parentNode;
    }

    const className = element.className;
    const offset = 50;
    const left = fabric.util.getRandomInt(0 + offset, 700 - offset);
    const top = fabric.util.getRandomInt(0 + offset, 500 - offset);
    const angle = fabric.util.getRandomInt(-20, 40);
    const width = fabric.util.getRandomInt(30, 50);
    const opacity = ((min: number, max: number) => Math.random() * (max - min) + min)(0.5, 1);

    switch (className) {
      case 'rect':
        canvas.add(new fabric.Rect({
          left,
          top,
          fill: '#' + getRandomColor(),
          width: 50,
          height: 50,
          opacity: 0.8
        }));
        break;

      case 'circle':
        canvas.add(new fabric.Circle({
          left,
          top,
          fill: '#' + getRandomColor(),
          radius: 50,
          opacity: 0.8
        }));
        break;

      case 'triangle':
        canvas.add(new fabric.Triangle({
          left,
          top,
          fill: '#' + getRandomColor(),
          width: 50,
          height: 50,
          opacity: 0.8
        }));
        break;

      case 'image1':
        fabric.Image.fromURL('../assets/pug.jpg', (image: fabric.Image) => {
          image.set({
            left,
            top,
            angle,
            padding: 10,
            cornerSize: 10
          });
          image.scale(getRandomNum(0.1, 0.25)).setCoords();
          canvas.add(image);
        });
        break;

      case 'image2':
        fabric.Image.fromURL('../assets/logo.png', (image: fabric.Image) => {
          image.set({
            left,
            top,
            angle,
            padding: 10,
            cornerSize: 10
          });
          image.scale(getRandomNum(0.1, 1)).setCoords();
          canvas.add(image);
          updateComplexity();
        });
        break;

      case 'shape':
        const id: any = element.id;
        const match = /\d+$/.exec(id);
        if (match) {
          fabric.loadSVGFromURL(`../assets/${match[0]}.svg`, (objects, options) => {
            const loadedObject = fabric.util.groupSVGElements(objects, options);

            loadedObject.setCoords();

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

  document.getElementById('execute').onclick = () => {
    const code = (<HTMLInputElement> document.getElementById('canvas-console')).value;
    if (!(/^\s+$/).test(code)) {
      eval(code); // tslint:disable-line:no-eval
    }
  };

  document.getElementById('rasterize').onclick = () => {
    if (!fabric.Canvas.supports('toDataURL')) {
      alert('This browser doesn\'t provide means to serialize canvas to an image');
    } else {
      window.open(canvas.toDataURL({ format: 'png' }));
    }
  };

  const removeSelectedEl = document.getElementById('remove-selected');
  removeSelectedEl.onclick = () => {
    const activeObject = canvas.getActiveObject();
    if (activeObject) {
      canvas.remove(activeObject);
    }
  };

  const supportsInputOfType = (type: string) => {
    return () => {
      const el = document.createElement('input');
      try {
        el.type = type;
      } catch (err) { }
      return el.type === type;
    };
  };

  const supportsSlider = supportsInputOfType('range');
  const supportsColorpicker = supportsInputOfType('color');

  if (supportsSlider()) {
    (() => {
      const controls = document.getElementById('controls');

      const sliderLabel = document.createElement('label');
      sliderLabel.htmlFor = 'opacity';
      sliderLabel.innerHTML = 'Opacity: ';

      const slider = document.createElement('input');

      try { slider.type = 'range'; } catch (err) { }

      slider.id = 'opacity';
      slider.value = "100";

      controls.appendChild(sliderLabel);
      controls.appendChild(slider);

      canvas.calcOffset();

      slider.onchange = function() {
        const activeObject = canvas.getActiveObject();

        if (activeObject) {
          activeObject.set('opacity', (parseInt((<HTMLInputElement> this).value, 10) / 100));
          canvas.renderAll();
        }
      };
    })();
  }

  if (supportsColorpicker()) {
    (() => {
      const controls = document.getElementById('controls');

      const label = document.createElement('label');
      label.htmlFor = 'color';
      label.innerHTML = 'Color: ';
      label.style.marginLeft = '10px';

      const colorpicker = document.createElement('input');
      colorpicker.type = 'color';
      colorpicker.id = 'color';
      colorpicker.style.width = '40px';

      controls.appendChild(label);
      controls.appendChild(colorpicker);

      canvas.calcOffset();

      colorpicker.onchange = function() {
        const activeObject = canvas.getActiveObject();

        if (activeObject) {
          activeObject.set('fill', (<HTMLInputElement> this).value);
          canvas.renderAll();
        }
      };
    })();
  }

  const lockHorizontallyEl = document.getElementById('lock-horizontally');
  lockHorizontallyEl.onclick = () => {
    const activeObject: any = canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockMovementX = !activeObject.lockMovementX;
      lockHorizontallyEl.innerHTML = activeObject.lockMovementX
          ? 'Unlock horizontal movement'
          : 'Lock horizontal movement';
    }
  };

  const lockVerticallyEl = document.getElementById('lock-vertically');
  lockVerticallyEl.onclick = () => {
    const activeObject: any = canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockMovementY = !activeObject.lockMovementY;
      lockVerticallyEl.innerHTML = activeObject.lockMovementY
          ? 'Unlock vertical movement'
          : 'Lock vertical movement';
    }
  };

  const lockScalingXEl = document.getElementById('lock-scaling-x');
  lockScalingXEl.onclick = () => {
    const activeObject: any = canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockScalingX = !activeObject.lockScalingX;
      lockScalingXEl.innerHTML = activeObject.lockScalingX
          ? 'Unlock horizontal scaling'
          : 'Lock horizontal scaling';
    }
  };

  const lockScalingYEl = document.getElementById('lock-scaling-y');
  lockScalingYEl.onclick = () => {
    const activeObject: any = canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockScalingY = !activeObject.lockScalingY;
      lockScalingYEl.innerHTML = activeObject.lockScalingY
          ? 'Unlock vertical scaling'
          : 'Lock vertical scaling';
    }
  };

  const lockRotationEl = document.getElementById('lock-rotation');
  lockRotationEl.onclick = () => {
    const activeObject: any = canvas.getActiveObject();
    if (activeObject) {
      activeObject.lockRotation = !activeObject.lockRotation;
      lockRotationEl.innerHTML = activeObject.lockRotation
          ? 'Unlock rotation'
          : 'Lock rotation';
    }
  };

  const gradientifyBtn = document.getElementById('gradientify');

  const activeObjectButtons = [
    lockHorizontallyEl,
    lockVerticallyEl,
    lockScalingXEl,
    lockScalingYEl,
    lockRotationEl,
    removeSelectedEl,
    gradientifyBtn
  ];

  const opacityEl = document.getElementById('opacity');
  if (opacityEl) {
    activeObjectButtons.push(opacityEl);
  }
  const colorEl = document.getElementById('color');
  if (colorEl) {
    activeObjectButtons.push(colorEl);
  }

  for (let i = activeObjectButtons.length; i--; ) {
    activeObjectButtons[i];
  }

  canvas.on('object:selected', onObjectSelected);
  canvas.on('group:selected', onObjectSelected);

  function onObjectSelected(e: fabric.IEvent) {
    const selectedObject = e.target;

    for (let i = activeObjectButtons.length; i--; ) {
      activeObjectButtons[i];
    }

    lockHorizontallyEl.innerHTML = (selectedObject.lockMovementX ? 'Unlock horizontal movement' : 'Lock horizontal movement');
    lockVerticallyEl.innerHTML = (selectedObject.lockMovementY ? 'Unlock vertical movement' : 'Lock vertical movement');
    lockScalingXEl.innerHTML = (selectedObject.lockScalingX ? 'Unlock horizontal scaling' : 'Lock horizontal scaling');
    lockScalingYEl.innerHTML = (selectedObject.lockScalingY ? 'Unlock vertical scaling' : 'Lock vertical scaling');
    lockRotationEl.innerHTML = (selectedObject.lockRotation ? 'Unlock rotation' : 'Lock rotation');
  }

  canvas.on('selection:cleared', e => {
    for (let i = activeObjectButtons.length; i--; ) {
      activeObjectButtons[i];
    }
  });

  const drawingModeEl = document.getElementById('drawing-mode');
  const drawingOptionsEl = document.getElementById('drawing-mode-options');
  const drawingColorEl = <HTMLInputElement> document.getElementById('drawing-color');
  const drawingLineWidthEl = <HTMLInputElement> document.getElementById('drawing-line-width');

  drawingModeEl.onclick = () => {
    const canvasWithDrawingMode: any = canvas;
    canvasWithDrawingMode.isDrawingMode = !canvasWithDrawingMode.isDrawingMode;
    if (canvasWithDrawingMode.isDrawingMode) {
      drawingModeEl.innerHTML = 'Cancel drawing mode';
      drawingModeEl.className = 'is-drawing';
      drawingOptionsEl.style.display = '';
    } else {
      drawingModeEl.innerHTML = 'Enter drawing mode';
      drawingModeEl.className = '';
      drawingOptionsEl.style.display = 'none';
    }
  };

  canvas.on('path:created', () => {
    updateComplexity();
  });

  const text = `Lorem ipsum dolor sit amet,
consectetur adipisicing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.
Ut enim ad minim veniam,
quis nostrud exercitation ullamco
laboris nisi ut aliquip ex ea commodo consequat.`;

  document.getElementById('add-text').onclick = () => {
    const textSample = new fabric.Text(text.slice(0, getRandomInt(0, text.length)), {
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

  document.onkeydown = e => {
    const obj = canvas.getActiveObject();
    if (obj && e.keyCode === 8) {
      // this is horrible. need to fix, so that unified interface can be used
      if (obj.type === 'group') {
        // const groupObjects = obj.getObjects();
        //         canvas.discardActiveGroup();
        //         groupObjects.forEach(function(obj) {
        //           canvas.remove(obj);
        //         });
      } else {
        // canvas.remove(obj);
      }
      canvas.renderAll();
      // return false;
    }
  };

  setTimeout(() => {
    canvas.calcOffset();
  }, 100);

  const textEl = <HTMLInputElement> document.getElementById('text');
  if (textEl) {
    textEl.onfocus = function() {
      const activeObject = canvas.getActiveObject();

      if (activeObject && activeObject.type === 'text') {
        (<HTMLInputElement> this).value = (<fabric.Text> activeObject).text;
      }
    };
    textEl.onkeyup = function(e) {
      const activeObject = canvas.getActiveObject();
      if (activeObject) {
        if (!(<HTMLInputElement> this).value) {
          canvas.discardActiveObject();
        } else {
          (<fabric.Text> activeObject).text = (<HTMLInputElement> this).value;
        }
        canvas.renderAll();
      }
    };
  }

  const cmdUnderlineBtn = document.getElementById('text-cmd-underline');
  if (cmdUnderlineBtn) {
    activeObjectButtons.push(cmdUnderlineBtn);
    cmdUnderlineBtn.onclick = function() {
      const activeObject = <fabric.Text> canvas.getActiveObject();
      if (activeObject && activeObject.type === 'text') {
        activeObject.underline = !activeObject.underline;
        (this as HTMLElement).className = activeObject.underline ? 'selected' : '';
        canvas.renderAll();
      }
    };
  }

  const cmdLinethroughBtn = document.getElementById('text-cmd-linethrough');
  if (cmdLinethroughBtn) {
    activeObjectButtons.push(cmdLinethroughBtn);
    cmdLinethroughBtn.onclick = function() {
      const activeObject = <fabric.Text> canvas.getActiveObject();
      if (activeObject && activeObject.type === 'text') {
        activeObject.linethrough = !activeObject.linethrough;
        (this as HTMLElement).className = activeObject.linethrough ? 'selected' : '';
        canvas.renderAll();
      }
    };
  }

  const cmdOverlineBtn = document.getElementById('text-cmd-overline');
  if (cmdOverlineBtn) {
    activeObjectButtons.push(cmdOverlineBtn);
    cmdOverlineBtn.onclick = function() {
      const activeObject = <fabric.Text> canvas.getActiveObject();
      if (activeObject && activeObject.type === 'text') {
        activeObject.overline = !activeObject.overline;
        (this as HTMLElement).className = activeObject.overline ? 'selected' : '';
        canvas.renderAll();
      }
    };
  }

  const cmdBoldBtn = document.getElementById('text-cmd-bold');
  if (cmdBoldBtn) {
    activeObjectButtons.push(cmdBoldBtn);
    cmdBoldBtn.onclick = function() {
      const activeObject = <fabric.Text> canvas.getActiveObject();
      if (activeObject && activeObject.type === 'text') {
        activeObject.fontWeight = (activeObject.fontWeight === 'bold' ? '' : 'bold');
        (this as HTMLElement).className = activeObject.fontWeight ? 'selected' : '';
        canvas.renderAll();
      }
    };
  }

  const cmdItalicBtn = document.getElementById('text-cmd-italic');
  if (cmdItalicBtn) {
    activeObjectButtons.push(cmdItalicBtn);
    cmdItalicBtn.onclick = function() {
      const activeObject = <fabric.Text> canvas.getActiveObject();
      if (activeObject && activeObject.type === 'text') {
        activeObject.fontStyle = (activeObject.fontStyle === 'italic' ? '' : 'italic');
        (this as HTMLElement).className = activeObject.fontStyle ? 'selected' : '';
        canvas.renderAll();
      }
    };
  }

  const cmdShadowBtn = document.getElementById('text-cmd-shadow');
  if (cmdShadowBtn) {
    activeObjectButtons.push(cmdShadowBtn);
    cmdShadowBtn.onclick = function() {
      const activeObject = <fabric.Text> canvas.getActiveObject();
      if (activeObject && activeObject.type === 'text') {
        activeObject.shadow = !activeObject.shadow ? 'rgba(0,0,0,0.2) 2px 2px 10px' : '';
        (this as HTMLElement).className = activeObject.shadow ? 'selected' : '';
        canvas.renderAll();
      }
    };
  }

  const textAlignSwitch = document.getElementById('text-align');
  if (textAlignSwitch) {
    activeObjectButtons.push(textAlignSwitch);
    textAlignSwitch.onchange = function(this: HTMLInputElement) {
      const activeObject = <fabric.Text> canvas.getActiveObject();
      if (activeObject && activeObject.type === 'text') {
        activeObject.textAlign = this.value.toLowerCase();
        canvas.renderAll();
      }
    };
  }

  const fontFamilySwitch = document.getElementById('font-family');
  if (fontFamilySwitch) {
    activeObjectButtons.push(fontFamilySwitch);
    fontFamilySwitch.onchange = function(this: HTMLInputElement) {
      const activeObject = <fabric.Text> canvas.getActiveObject();
      if (activeObject && activeObject.type === 'text') {
        activeObject.fontFamily = this.value;
        canvas.renderAll();
      }
    };
  }

  const bgColorField = document.getElementById('text-bg-color');
  if (bgColorField) {
    bgColorField.onchange = function(this: HTMLInputElement) {
      const activeObject = <fabric.Text> canvas.getActiveObject();
      if (activeObject && activeObject.type === 'text') {
        activeObject.backgroundColor = this.value;
        canvas.renderAll();
      }
    };
  }

  const strokeColorField = document.getElementById('text-stroke-color');
  if (strokeColorField) {
    strokeColorField.onchange = function(this: HTMLInputElement) {
      const activeObject = <fabric.Text> canvas.getActiveObject();
      if (activeObject && activeObject.type === 'text') {
        activeObject.stroke = this.value;
        canvas.renderAll();
      }
    };
  }

  if (supportsSlider) {
    (() => {
      const container = document.getElementById('text-controls');
      const slider = document.createElement('input');
      const label = document.createElement('label');
      label.innerHTML = 'Line height: ';
      try { slider.type = 'range'; } catch (err) { }
      slider.min = "0";
      slider.max = "10";
      slider.step = "0.1";
      slider.value = "1.5";
      container.appendChild(label);
      label.appendChild(slider);
      slider.title = "Line height";
      slider.onchange = function() {
        const activeObject = <fabric.Text> canvas.getActiveObject();
        if (activeObject && activeObject.type === 'text') {
          activeObject.lineHeight = +(<HTMLInputElement> this).value;
          canvas.renderAll();
        }
      };

      canvas.on('object:selected', (e: fabric.IEvent) => {
        slider.value = String((<fabric.Text> e.target).lineHeight);
      });
    })();
  }

  document.getElementById('load-svg').onclick = () => {
    const svg = (<HTMLInputElement> document.getElementById('svg-console')).value;
    fabric.loadSVGFromString(svg, (objects, options) => {
      const obj = fabric.util.groupSVGElements(objects, options);
      canvas.add(obj).centerObject(obj).renderAll();
      obj.setCoords();
    });
  };
}

function sample9() {
  const canvas = new fabric.Canvas('c');
  canvas.setBackgroundImage('yolo.jpg', () => { "a"; }, { opacity: 45 });
  canvas.setBackgroundImage('yolo.jpg', () => { "a"; });
}

function sample10() {
  const canvas = new fabric.Canvas('c');
  const objR = new fabric.Rect({
    top: 10,
    left: 10,
    width: 10,
    height: 10,
    fill: "#FF0000",
  });
  const objG = new fabric.Rect({
    top: 15,
    left: 15,
    width: 10,
    height: 10,
    fill: "#00FF00",
  });
  const objB = new fabric.Rect({
    top: 20,
    left: 20,
    width: 10,
    height: 10,
    fill: "#0000FF",
  });
  canvas.add(objR);
  canvas.add(objG);
  canvas.add(objB);
  const objArray = canvas.getActiveObjects();
}

function sample11() {
  const canvas2dFilterBackend = new fabric.Canvas2dFilterBackend();
  const webglFilterBackend = new fabric.WebglFilterBackend();
  fabric.filterBackend = new fabric.Canvas2dFilterBackend();
}

function sample12() {
  const canvas = new fabric.Canvas('c');
  const position = fabric.util.getScrollLeftTop(canvas.getElement());
  const x = position.left;
  const y = position.top;
  canvas.absolutePan({ x, y });
  canvas.absolutePan(new fabric.Point(x, y));
}

function sample13() {
  const rectangle = new fabric.Rect({top: 0, left: 0, width: 10, height: 10});
  const rectangleAsHtmlCanvas: HTMLCanvasElement = rectangle.toCanvasElement();
}

function sample14() {
  fabric.Object.prototype.controls.testControl = new fabric.Control({
    mouseUpHandler(eventData: MouseEvent, transformData: fabric.Transform, x: number, y: number): boolean {
      return false;
    }
  });
}

function sample15() {
  const canvas = new fabric.Canvas('c');
  const textRTL = new fabric.Text('שלום עולם', { left: 100, top: 100, direction: 'rtl', originX: 'right', textAlign: 'right' });
  canvas.add(textRTL);
}
