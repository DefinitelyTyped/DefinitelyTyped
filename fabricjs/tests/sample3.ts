///<reference path="..\fabricjs.d.ts" />

var $ = function(id){return document.getElementById(id)};

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
  'object:selected': function() {
    fabric.util.toArray(document.getElementsByTagName('input')).forEach(function(el){ el.disabled = false; })

    var filters = ['grayscale', 'invert', 'remove-white', 'sepia', 'sepia2', 'brightness',
                   'noise', 'gradient-transparency', 'pixelate', 'blur', 'sharpen'];

    for (var i = 0; i < filters.length; i++) {
        var checkBox = <HTMLInputElement>$(filters[i]);
        var image = <fabric.Image>canvas.getActiveObject();
        checkBox.checked = !!image.filters[i];
    }
  },
  'selection:cleared': function() {
    fabric.util.toArray(document.getElementsByTagName('input')).forEach(function(el){ el.disabled = true; })
  }
});

fabric.Image.fromURL('../assets/printio.png', function(img) {
  var oImg = img.set({ left: 300, top: 300, angle: -15 }).scale(0.9);
  canvas.add(oImg).renderAll();
  canvas.setActiveObject(oImg);
});

$('grayscale').onclick = function() {
  applyFilter(0, this.checked && new f.Grayscale());
};
$('invert').onclick = function() {
  applyFilter(1, this.checked && new f.Invert());
};
$('remove-white').onclick = function () {
  applyFilter(2, this.checked && new f.RemoveWhite({
    threshold: (<HTMLInputElement>$('remove-white-threshold')).value,
    distance: (<HTMLInputElement>$('remove-white-distance')).value
  }));
};
$('remove-white-threshold').onchange = function() {
  applyFilterValue(2, 'threshold', this.value);
};
$('remove-white-distance').onchange = function() {
  applyFilterValue(2, 'distance', this.value);
};
$('sepia').onclick = function() {
  applyFilter(3, this.checked && new f.Sepia());
};
$('sepia2').onclick = function() {
  applyFilter(4, this.checked && new f.Sepia2());
};
$('brightness').onclick = function () {
  applyFilter(5, this.checked && new f.Brightness({
    brightness: parseInt((<HTMLInputElement>$('brightness-value')).value, 10)
  }));
};
$('brightness-value').onchange = function() {
  applyFilterValue(5, 'brightness', parseInt(this.value, 10));
};
$('noise').onclick = function () {
  applyFilter(6, this.checked && new f.Noise({
        noise: parseInt((<HTMLInputElement>$('noise-value')).value, 10)
  }));
};
$('noise-value').onchange = function() {
  applyFilterValue(6, 'noise', parseInt(this.value, 10));
};
$('gradient-transparency').onclick = function () {
  applyFilter(7, this.checked && new f.GradientTransparency({
    threshold: parseInt((<HTMLInputElement>$('gradient-transparency-value')).value, 10)
  }));
};
$('gradient-transparency-value').onchange = function() {
  applyFilterValue(7, 'threshold', parseInt(this.value, 10));
};
$('pixelate').onclick = function() {
  applyFilter(8, this.checked && new f.Pixelate({
    blocksize: parseInt((<HTMLInputElement>$('pixelate-value')).value, 10)
  }));
};
$('pixelate-value').onchange = function() {
  applyFilterValue(8, 'blocksize', parseInt(this.value, 10));
};
$('blur').onclick = function() {
  applyFilter(9, this.checked && new f.Convolute({
    matrix: [ 1/9, 1/9, 1/9,
              1/9, 1/9, 1/9,
              1/9, 1/9, 1/9 ]
  }));
};
$('sharpen').onclick = function() {
  applyFilter(10, this.checked && new f.Convolute({
    matrix: [  0, -1,  0,
              -1,  5, -1,
               0, -1,  0 ]
  }));
};
$('emboss').onclick = function() {
  applyFilter(11, this.checked && new f.Convolute({
    matrix: [ 1,   1,  1,
              1, 0.7, -1,
             -1,  -1, -1 ]
  }));
};