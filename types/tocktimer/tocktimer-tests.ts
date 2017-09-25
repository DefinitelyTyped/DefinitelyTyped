
import * as Tock from 'tocktimer';

const timer = new Tock({
  interval: 100,
  countdown: true,
  callback: () => {
    // Tick tock...clock is ticking
  },
  complete: () => {
    // Ding ding...time's up
  }
});

timer.lap()
timer.msToTime(Date.now())
timer.msToTimecode(Date.now())
timer.pause()
timer.reset()
timer.stop()
timer.timeToMS('12:51')
