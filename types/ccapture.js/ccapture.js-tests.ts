const canvas = document.createElement('canvas');
const capturer = new CCapture({ format: 'webm' });
capturer.start(); // $ExpectType void
capturer.capture(canvas); // $ExpectType void
capturer.stop(); // $ExpectType void
capturer.save(); // $ExpectType void
