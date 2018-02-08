import namer = require('color-namer');

const colors1 = namer('#ffffff');

colors1.basic[0].distance;
colors1.basic[0].hex;
colors1.basic[0].name;
colors1.html;
colors1.ntc;
colors1.pantone;
colors1.roygbiv;
colors1.x11;

const colors2 = namer('#ffffff', { pick: ['basic', 'html', 'ntc'] });

colors2.basic;
colors2.html;
colors2.ntc;

const colors3 = namer('#ffffff', { omit: ['basic', 'html', 'ntc'] });

colors3.pantone;
colors3.roygbiv;
colors3.x11;
