import beeper = require('beeper');

beeper();
beeper(3);
beeper(3, () => {});
beeper('****-*-*');
beeper('****-*-*', () => {});
