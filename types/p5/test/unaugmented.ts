import * as p5 from "p5";

function s(sketch: p5) {
  // $ExpectError
  let fft: p5.FFT;
  // $ExpectError
  let noise: p5.Noise;
  // $ExpectError
  let filter: p5.BandPass;

  sketch.setup = function setup() {
    sketch.fill(255, 40, 255);

    // $ExpectError
    filter = new p5.BandPass();

    // $ExpectError
    noise = new p5.Noise('white');
    // disconnect unfiltered noise,
    // and connect to filter
    noise.disconnect();
    noise.connect(filter);
    noise.start();

    // $ExpectError
    fft = new p5.FFT();

    // $ExpectError
    sketch.select('canvas')!.position(100, 100);
  };

  sketch.draw = function draw() {
    sketch.background(30);

    // set the BandPass frequency based on mouseX
    const freq = sketch.map(sketch.mouseX, 0, sketch.width, 20, 10000);
    filter.freq(freq);
    // give the filter a narrow band (lower res = wider bandpass)
    filter.res(50);

    // draw filtered spectrum
    const spectrum = fft.analyze();
    sketch.noStroke();
    for (let i = 0; i < spectrum.length; i++) {
      const x = sketch.map(i, 0, spectrum.length, 0, sketch.width);
      const h = -sketch.height + sketch.map(spectrum[i], 0, 255, sketch.height, 0);
      sketch.rect(x, sketch.height, sketch.width / spectrum.length, h);
    }

    isMouseOverCanvas();
  };

  function isMouseOverCanvas() {
    const mX = sketch.mouseX;
    const mY = sketch.mouseY;
    if (mX > 0 && mX < sketch.width && mY < sketch.height && mY > 0) {
      noise.amp(0.5, 0.2);
    } else {
      noise.amp(0, 0.2);
    }
  }
}

new p5(s);
