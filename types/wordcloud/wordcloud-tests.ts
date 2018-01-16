/// <reference types="qunit" />

'use strict';
//declare function test(name: string, test: Function);
var element: HTMLElement | HTMLElement[];

if (!WordCloud.isSupported)
  console.log('WordCloud is not supported.');
  
WordCloud.miniumFontSize = 20;

var list = (function () {
  var string = 'Grumpy wizards make toxic brew for the evil Queen and Jack';

  var list: WordCloud.ListEntry[] = [];
  string.split(' ').forEach(function(word) {
    list.push([word, word.length * 5]);
  });

  return list;
})();

function getTestOptions(): WordCloud.Options {
  return {
    shuffle: false,
    rotateRatio: 0,
    color: '#000',
    fontFamily: 'sans-serif',
    list: list
  };
};

QUnit.test('Test runs without any extra parameters.', function() {
  var options = getTestOptions();
  WordCloud(element, options);
});

QUnit.test('Empty list results no output.', function() {
  var options = getTestOptions();
  options.list = [];

  WordCloud(element, options);
});

QUnit.test('gridSize can be set', function() {
  var options = getTestOptions();
  options.gridSize = 15;

  WordCloud(element, options);
});

QUnit.test('ellipticity can be set', function() {
  var options = getTestOptions();
  options.ellipticity = 1.5;

  WordCloud(element, options);
});

QUnit.test('origin can be set', function() {
  var options = getTestOptions();
  options.origin = [300, 0];

  WordCloud(element, options);
});

QUnit.test('minSize can be set', function() {
  var options = getTestOptions();
  options.minSize = 10;

  WordCloud(element, options);
});

QUnit.test('rotation can be set and locked', function() {
  var options = getTestOptions();
  options.rotateRatio = 1;
  options.minRotation = options.maxRotation = Math.PI / 6;

  WordCloud(element, options);
});

QUnit.test('drawMask can be set', function() {
  var options = getTestOptions();
  options.drawMask = true;

  WordCloud(element, options);
});

QUnit.test('maskColor can be set', function() {
  var options = getTestOptions();
  options.drawMask = true;
  options.maskColor = 'rgba(0, 0, 255, 0.8)';

  WordCloud(element, options);
});

QUnit.test('backgroundColor can be set', function() {
  var options = getTestOptions();
  options.backgroundColor = 'rgb(0, 0, 255)';

  WordCloud(element, options);
});

QUnit.test('semi-transparent backgroundColor can be set', function() {
  var options = getTestOptions();
  options.backgroundColor = 'rgba(0, 0, 255, 0.3)';

  WordCloud(element, options);
});

QUnit.test('weightFactor can be set', function() {
  var options = getTestOptions();
  options.weightFactor = 2;

  WordCloud(element, options);
});

QUnit.test('weightFactor can be set as a function', function() {
  var options = getTestOptions();
  options.weightFactor = function (w) { return Math.sqrt(w); };

  WordCloud(element, options);
});

QUnit.test('color can be set as a function', function() {
  var options = getTestOptions();
  options.color = function (word, weight, fontSize, radius, theta) {
    if (theta < 2*Math.PI/3) {
      return '#600';
    } else if (theta < 2*Math.PI*2/3) {
      return '#060';
    } else {
      return '#006';
    }
  };

  WordCloud(element, options);
});

QUnit.test('shape can be set to circle', function() {
  var options = getTestOptions();
  options.shape = 'circle';

  WordCloud(element, options);
});

QUnit.test('shape can be set to cardioid', function() {
  var options = getTestOptions();
  options.shape = 'cardioid';

  WordCloud(element, options);
});

QUnit.test('shape can be set to diamond', function() {
  var options = getTestOptions();
  options.shape = 'diamond';

  WordCloud(element, options);
});

QUnit.test('shape can be set to triangle', function() {
  var options = getTestOptions();
  options.shape = 'triangle';

  WordCloud(element, options);
});

QUnit.test('shape can be set to triangle-forward', function() {
  var options = getTestOptions();
  options.shape = 'triangle-forward';

  WordCloud(element, options);
});

QUnit.test('shape can be set to pentagon', function() {
  var options = getTestOptions();
  options.shape = 'pentagon';

  WordCloud(element, options);
});

QUnit.test('shape can be set to star', function() {
  var options = getTestOptions();
  options.shape = 'star';

  WordCloud(element, options);
});

QUnit.test('shape can be set to a given polar equation', function() {
  var options = getTestOptions();
  options.shape = function (theta) {
    return theta / (2 * Math.PI);
  };

  WordCloud(element, options);
});
