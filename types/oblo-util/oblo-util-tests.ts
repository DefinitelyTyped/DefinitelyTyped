

util.debug = false;

util.log('Log message');

util.error('Error message');

util.clip(0, 100, -15);

util.square(3);

util.replicate(10, 'x');

util.pad(' ', 10, 'short');

util.padZero(4, 247);

util.addslashes('\\"\'');

util.showJSON({name: 'Clyde', color: 'orange'}, '  ', 7);

util.showTime(new Date());

util.showDate(new Date());

util.readDate('15-10-2004');

util.setAttr($('#someElement'), 'attrName', false);
