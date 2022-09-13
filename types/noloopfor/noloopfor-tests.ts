import noloopfor = require('noloopfor');

const number = 10;

noloopfor.loop(number, 5, () => { });

noloopfor.loopStep(number, 5, 1, () => { });

noloopfor.decrementLoop(number, 5, () => { });

noloopfor.decrementStep(number, 5, 1, () => { });
