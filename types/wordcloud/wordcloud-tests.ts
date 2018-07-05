import WordCloud = require("wordcloud");

declare function test(name: string, cb: () => void): void;

declare const element: HTMLElement | HTMLElement[];

if (!WordCloud.isSupported)
  console.log('WordCloud is not supported.');

WordCloud.miniumFontSize = 20;

const list = 'Grumpy wizards make toxic brew for the evil Queen and Jack'.split(' ').map(word => [word, word.length * 5]);

function getTestOptions(): WordCloud.Options {
  return {
    shuffle: false,
    rotateRatio: 0,
    color: '#000',
    fontFamily: 'sans-serif',
    list,
  };
}

test('Test runs without any extra parameters.', () => {
  const options = getTestOptions();
  WordCloud(element, options);
});

test('Empty list results no output.', () => {
  const options = getTestOptions();
  options.list = [];

  WordCloud(element, options);
});

test('gridSize can be set', () => {
  const options = getTestOptions();
  options.gridSize = 15;

  WordCloud(element, options);
});

test('ellipticity can be set', () => {
  const options = getTestOptions();
  options.ellipticity = 1.5;

  WordCloud(element, options);
});

test('origin can be set', () => {
  const options = getTestOptions();
  options.origin = [300, 0];

  WordCloud(element, options);
});

test('minSize can be set', () => {
  const options = getTestOptions();
  options.minSize = 10;

  WordCloud(element, options);
});

test('rotation can be set and locked', () => {
  const options = getTestOptions();
  options.rotateRatio = 1;
  options.minRotation = options.maxRotation = Math.PI / 6;

  WordCloud(element, options);
});

test('drawMask can be set', () => {
  const options = getTestOptions();
  options.drawMask = true;

  WordCloud(element, options);
});

test('maskColor can be set', () => {
  const options = getTestOptions();
  options.drawMask = true;
  options.maskColor = 'rgba(0, 0, 255, 0.8)';

  WordCloud(element, options);
});

test('backgroundColor can be set', () => {
  const options = getTestOptions();
  options.backgroundColor = 'rgb(0, 0, 255)';

  WordCloud(element, options);
});

test('semi-transparent backgroundColor can be set', () => {
  const options = getTestOptions();
  options.backgroundColor = 'rgba(0, 0, 255, 0.3)';

  WordCloud(element, options);
});

test('weightFactor can be set', () => {
  const options = getTestOptions();
  options.weightFactor = 2;

  WordCloud(element, options);
});

test('weightFactor can be set as a function', () => {
  const options = getTestOptions();
  options.weightFactor = w => Math.sqrt(w);

  WordCloud(element, options);
});

test('color can be set as a function', () => {
  const options = getTestOptions();
  options.color = (word, weight, fontSize, radius, theta) => {
    if (theta < 2 * Math.PI / 3) {
      return '#600';
    } else if (theta < 2 * Math.PI * 2 / 3) {
      return '#060';
    } else {
      return '#006';
    }
  };

  WordCloud(element, options);
});

test('shape can be set to circle', () => {
  const options = getTestOptions();
  options.shape = 'circle';

  WordCloud(element, options);
});

test('shape can be set to cardioid', () => {
  const options = getTestOptions();
  options.shape = 'cardioid';

  WordCloud(element, options);
});

test('shape can be set to diamond', () => {
  const options = getTestOptions();
  options.shape = 'diamond';

  WordCloud(element, options);
});

test('shape can be set to triangle', () => {
  const options = getTestOptions();
  options.shape = 'triangle';

  WordCloud(element, options);
});

test('shape can be set to triangle-forward', () => {
  const options = getTestOptions();
  options.shape = 'triangle-forward';

  WordCloud(element, options);
});

test('shape can be set to pentagon', () => {
  const options = getTestOptions();
  options.shape = 'pentagon';

  WordCloud(element, options);
});

test('shape can be set to star', () => {
  const options = getTestOptions();
  options.shape = 'star';

  WordCloud(element, options);
});

test('shape can be set to a given polar equation', () => {
  const options = getTestOptions();
  options.shape = theta => theta / (2 * Math.PI);

  WordCloud(element, options);
});
