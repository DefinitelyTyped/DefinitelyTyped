import { Gauge, Line, LineBuffer, Progress, Sparkline, Spinner } from 'clui';
import * as clc from 'cli-color';

// LineBuffer
const outputBuffer = new LineBuffer({
  x: 0,
  y: 0,
  width: 'console',
  height: 'console'
});

new Line(outputBuffer)
  .column('Title Placehole', 20, [clc.green])
  .fill()
  .store();

new Line(outputBuffer)
  .fill()
  .store();

new Line(outputBuffer)
  .column('Suscipit', 20, [clc.cyan])
  .column('Voluptatem', 20, [clc.cyan])
  .column('Nesciunt', 20, [clc.cyan])
  .column('Laudantium', 11, [clc.cyan])
  .fill()
  .store();

for (let l = 0; l < 20; l++) {
  new Line(outputBuffer)
    .column((Math.random() * 100).toFixed(3), 20)
    .column((Math.random() * 100).toFixed(3), 20)
    .column((Math.random() * 100).toFixed(3), 20)
    .column((Math.random() * 100).toFixed(3), 11)
    .fill()
    .store();
}

outputBuffer.output();

// Line
new Line()
  .padding(2)
  .column('Column One', 20, [clc.cyan])
  .column('Column Two', 20, [clc.cyan])
  .column('Column Three', 20, [clc.cyan])
  .column('Column Four', 20, [clc.cyan])
  .fill()
  .output();

new Line()
  .padding(2)
  .column((Math.random() * 100).toFixed(3), 20)
  .column((Math.random() * 100).toFixed(3), 20)
  .column((Math.random() * 100).toFixed(3), 20)
  .column((Math.random() * 100).toFixed(3), 20)
  .fill()
  .output();

// Gauge
const total = 33660133376;
const free = 17763860480;
const used = total - free;
const human = Math.ceil(used / 1000000) + ' MB';

console.log(Gauge(used, total, 20, total * 0.8, human));

// Sparkline
const reqsPerSec = [10, 12, 3, 7, 12, 9, 23, 10, 9, 19, 16, 18, 12, 12];

console.log(Sparkline(reqsPerSec, 'reqs/sec'));

// Progress
const thisProgressBar = new Progress(20);
console.log(thisProgressBar.update(10, 30));

// or

const thisPercentBar = new Progress(20);
console.log(thisPercentBar.update(0.4));

// Spinner
const countdown = new Spinner('Exiting in 10 seconds...  ', ['⣾', '⣽', '⣻', '⢿', '⡿', '⣟', '⣯', '⣷']);

countdown.start();

let n = 10;
const interval = setInterval(() => {
  n--;
  countdown.message(`Exiting in ${n} seconds...`);
  if (n === 0) {
    console.log('\n');
    countdown.stop();
    clearInterval(interval);
  }
}, 1000);
