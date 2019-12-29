import * as ProgressBar from 'progress';

/**
 * Usage example from https://github.com/visionmedia/node-progress
 * (in Typescript)
 */
const usageBar = new ProgressBar(':bar', { total: 10 });
const timer = setInterval(function () {
  usageBar.tick();
  if (usageBar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
  }
}, 100);

/**
 * Custom token example from https://github.com/visionmedia/node-progress
 * (in Typescript)
 */
 const list = [
   'image01.jpg', 'image02.jpg', 'image03.jpg', 'image04.jpg', 'image05.jpg',
   'image06.jpg', 'image07.jpg', 'image08.jpg', 'image09.jpg', 'image10.jpg'
 ];
 const customTokenBar = new ProgressBar(':percent eta: :eta downloading :current/:total :file', {
   total: list.length
 });
 const customInterval = setInterval(function (){
   customTokenBar.tick({
     'file': list[customTokenBar.curr]
   })
   if (customTokenBar.complete) {
     clearInterval(customInterval)
   }
 }, 500)

/**
 * Interrupt example from https://github.com/visionmedia/node-progress
 * (in Typescript)
 */
const interruptBar = new ProgressBar(':bar :current/:total', { total: 10 });
const interruptTimer = setInterval(function () {
  interruptBar.tick();
  if (interruptBar.complete) {
    clearInterval(interruptTimer);
  } else if (interruptBar.curr === 5 || interruptBar.curr === 8) {
    interruptBar.interrupt('interrupt: current progress is ' + interruptBar.curr + '/' + interruptBar.total);
  }
}, 1000);
