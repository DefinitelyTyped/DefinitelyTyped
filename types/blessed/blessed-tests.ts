import * as blessed from 'blessed'

let screen: blessed.Widgets.Screen = null;

// https://github.com/chjj/blessed/blob/master/test/widget-autopad.js

screen = blessed.screen({
  dump: __dirname + '/logs/autopad.log',
  smartCSR: true,
  autoPadding: true,
  warnings: true
});

var box1 = blessed.box({
  parent: screen,
  top: 'center',
  left: 'center',
  width: 20,
  height: 10,
  border: 'line'
});

var box2 = blessed.box({
  parent: box1,
  top: 0,
  left: 0,
  width: 10,
  height: 5,
  border: 'line'
});

screen.key('q', function() {
  return screen.destroy();
});

screen.render();

// https://github.com/chjj/blessed/blob/master/test/widget-bigtext.js

screen = blessed.screen({
  dump: __dirname + '/logs/bigtext.log',
  smartCSR: true,
  warnings: true
});

var box = blessed.bigtext({
  parent: screen,
  content: 'Hello',
  shrink: true,
  width: '80%',
  // height: '80%',
  height: 'shrink',
  // width: 'shrink',
  border: 'line',
  fch: ' ',
  ch: '\u2592',
  style: {
    fg: 'red',
    bg: 'blue',
    bold: false
  }
});

screen.key('q', function() {
  return screen.destroy();
});

screen.render();

// https://github.com/chjj/blessed/blob/master/test/widget-csr.js

screen = blessed.screen({
  dump: __dirname + '/logs/csr.log',
  smartCSR: true,
  warnings: true
});

var lorem = require('fs').readFileSync(__dirname + '/git.diff', 'utf8');

var cleanSides = screen.cleanSides;
function expectClean(value: any) {
  screen.cleanSides = function(el: blessed.widget.Element) {
    var ret = cleanSides.apply(this, arguments);
    if (ret !== value) {
      throw new Error('Failed. Expected '
        + value + ' from cleanSides. Got '
        + ret + '.');
    }
    return ret;
  };
}
var btext = blessed.box({
  parent: screen,
  left: 'center',
  top: 'center',
  width: '80%',
  height: '80%',
  style: {
    bg: 'green'
  },
  border: 'line',
  content: 'CSR should still work.'
});
let _oscroll = btext.scroll;
btext.scroll = function(offset, always) {
  expectClean(true);
  return _oscroll(offset, always);
};

var text = blessed.scrollabletext({
  parent: screen,
  content: lorem,
  border: 'line',
  left: 'center',
  top: 'center',
  draggable: true,
  width: '50%',
  height: '50%',
  mouse: true,
  keys: true,
  vi: true
});

_oscroll = text.scroll;
text.scroll = function(offset, always) {
  var el = this;
  var value = true;
  if (el.left < 0) value = true;
  if (el.top < 0) value = false;
  if (el.left + el.width > screen.width) value = true;
  if (el.top + el.height > screen.height) value = false;
  expectClean(value);
  return _oscroll(offset, always);
};

text.focus();

screen.key('q', function() {
  return screen.destroy();
});

screen.render();

// https://github.com/chjj/blessed/blob/master/test/widget-dock-noborder.js

screen = blessed.screen({
  dump: __dirname + '/logs/dock.log',
  smartCSR: true,
  dockBorders: true,
  warnings: true
});

blessed.box({
  parent: screen,
  left: -1,
  top: -1,
  width: '50%+1',
  height: '50%+1',
  border: 'line',
  content: 'Foo'
});

blessed.box({
  parent: screen,
  left: '50%-1',
  top: -1,
  width: '50%+3',
  height: '50%+1',
  content: 'Bar',
  border: 'line'
});

blessed.box({
  parent: screen,
  left: -1,
  top: '50%-1',
  width: '50%+1',
  height: '50%+3',
  border: 'line',
  content: 'Foo'
});

blessed.listtable({
  parent: screen,
  left: '50%-1',
  top: '50%-1',
  width: '50%+3',
  height: '50%+3',
  border: 'line',
  align: 'center',
  tags: true,
  keys: true,
  vi: true,
  mouse: true,
  style: {
    header: {
      fg: 'blue',
      bold: true
    },
    cell: {
      fg: 'magenta',
      selected: {
        bg: 'blue'
      }
    }
  },
  data: [
    [ 'Animals',  'Foods',  'Times',   'Numbers' ],
    [ 'Elephant', 'Apple',  '1:00am',  'One'     ],
    [ 'Bird',     'Orange', '2:15pm',  'Two'     ],
    [ 'T-Rex',    'Taco',   '8:45am',  'Three'   ],
    [ 'Mouse',    'Cheese', '9:05am',  'Four'    ]
  ]
}).focus();

screen.key('q', function() {
  return screen.destroy();
});

screen.render();

// https://raw.githubusercontent.com/chjj/blessed/master/example/simple-form.js

var form = blessed.form({
  parent: screen,
  keys: true,
  left: 0,
  top: 0,
  width: 30,
  height: 4,
  bg: 'green',
  content: 'Submit or cancel?'
});

var submit = blessed.button({
  parent: form,
  mouse: true,
  keys: true,
  padding: {
    left: 1,
    right: 1
  },
  left: 10,
  top: 2,
  shrink: true,
  name: 'submit',
  content: 'submit',
  style: {
    bg: 'blue',
    focus: {
      bg: 'red'
    },
    hover: {
      bg: 'red'
    }
  }
});

var cancel = blessed.button({
  parent: form,
  mouse: true,
  keys: true,
  padding: {
    left: 1,
    right: 1
  },
  left: 20,
  top: 2,
  shrink: true,
  name: 'cancel',
  content: 'cancel',
  style: {
    bg: 'blue',
    focus: {
      bg: 'red'
    },
    hover: {
      bg: 'red'
    }
  }
});

// https://github.com/chjj/blessed/blob/master/test/widget-layout.js

screen = blessed.screen({
  dump: __dirname + '/logs/layout.log',
  smartCSR: true,
  autoPadding: true,
  warnings: true
});

var layout = blessed.layout({
  parent: screen,
  top: 'center',
  left: 'center',
  width: '50%',
  height: '50%',
  border: 'line',
  layout: process.argv[2] === 'grid' ? 'grid' : 'inline',
  style: {
    bg: 'red',
    border: {
      fg: 'blue'
    }
  }
});

var box1 = blessed.box({
  parent: layout,
  top: 'center',
  left: 'center',
  width: 20,
  height: 10,
  border: 'line',
  content: '1'
});

var box2 = blessed.box({
  parent: layout,
  top: 0,
  left: 0,
  width: 10,
  height: 5,
  border: 'line',
  content: '2'
});

var box3 = blessed.box({
  parent: layout,
  top: 0,
  left: 0,
  width: 10,
  height: 5,
  border: 'line',
  content: '3'
});

var box4 = blessed.box({
  parent: layout,
  top: 0,
  left: 0,
  width: 10,
  height: 5,
  border: 'line',
  content: '4'
});

var box5 = blessed.box({
  parent: layout,
  top: 0,
  left: 0,
  width: 10,
  height: 5,
  border: 'line',
  content: '5'
});

var box6 = blessed.box({
  parent: layout,
  top: 0,
  left: 0,
  width: 10,
  height: 5,
  border: 'line',
  content: '6'
});

var box7 = blessed.box({
  parent: layout,
  top: 0,
  left: 0,
  width: 10,
  height: 5,
  border: 'line',
  content: '7'
});

var box8 = blessed.box({
  parent: layout,
  top: 'center',
  left: 'center',
  width: 20,
  height: 10,
  border: 'line',
  content: '8'
});

var box9 = blessed.box({
  parent: layout,
  top: 0,
  left: 0,
  width: 10,
  height: 5,
  border: 'line',
  content: '9'
});

var box10 = blessed.box({
  parent: layout,
  top: 'center',
  left: 'center',
  width: 20,
  height: 10,
  border: 'line',
  content: '10'
});

var box11 = blessed.box({
  parent: layout,
  top: 0,
  left: 0,
  width: 10,
  height: 5,
  border: 'line',
  content: '11'
});

var box12 = blessed.box({
  parent: layout,
  top: 'center',
  left: 'center',
  width: 20,
  height: 10,
  border: 'line',
  content: '12'
});

if (process.argv[2] !== 'grid') {
  for (var i = 0; i < 10; i++) {
    blessed.box({
      parent: layout,
      // width: i % 2 === 0 ? 10 : 20,
      // height: i % 2 === 0 ? 5 : 10,
      width: Math.random() > 0.5 ? 10 : 20,
      height: Math.random() > 0.5 ? 5 : 10,
      border: 'line',
      content: (i + 1 + 12) + ''
    });
  }
}

screen.key('q', function() {
  return screen.destroy();
});

screen.render();

// https://github.com/chjj/blessed/blob/master/test/widget-form.js

screen = blessed.screen({
  dump: __dirname + '/logs/form.log',
  warnings: true
});

type FormData = {
    radio1: boolean;
    radio2: boolean;
    text: string;
    check: boolean;
};

var form2 = blessed.form<FormData>({
  parent: screen,
  mouse: true,
  keys: true,
  vi: true,
  left: 0,
  top: 0,
  width: '100%',
  //height: 12,
  style: {
    bg: 'green',
    border: {
       inverse: true
    },
    scrollbar: {
      inverse: true
    }
  },
  content: 'foobar',
  scrollable: true,
  scrollbar: {
    ch: ' '
  }
  //alwaysScroll: true
});

form2.on('submit', (data) => {
  output.setContent(JSON.stringify(data, null, 2));
  screen.render();
});

form2.key('d', function() {
  form2.scroll(1, true);
  screen.render();
});

form2.key('u', function() {
  form2.scroll(-1, true);
  screen.render();
});

var set = blessed.radioset({
  parent: form2,
  left: 1,
  top: 1,
  shrink: true,
  //padding: 1,
  //content: 'f',
  style: {
    bg: 'magenta'
  }
});

var radio1 = blessed.radiobutton({
  parent: set,
  mouse: true,
  keys: true,
  shrink: true,
  style: {
    bg: 'magenta'
  },
  height: 1,
  left: 0,
  top: 0,
  name: 'radio1',
  content: 'radio1'
});

var radio2 = blessed.radiobutton({
  parent: set,
  mouse: true,
  keys: true,
  shrink: true,
  style: {
    bg: 'magenta'
  },
  height: 1,
  left: 15,
  top: 0,
  name: 'radio2',
  content: 'radio2'
});

var text2 = blessed.textbox({
  parent: form2,
  mouse: true,
  keys: true,
  style: {
    bg: 'blue'
  },
  height: 1,
  width: 20,
  left: 1,
  top: 3,
  name: 'text'
});

text2.on('focus', function() {
  text2.readInput();
});

var check = blessed.checkbox({
  parent: form2,
  mouse: true,
  keys: true,
  shrink: true,
  style: {
    bg: 'magenta'
  },
  height: 1,
  left: 28,
  top: 1,
  name: 'check',
  content: 'check'
});

var check2 = blessed.checkbox({
  parent: form2,
  mouse: true,
  keys: true,
  shrink: true,
  style: {
    bg: 'magenta'
  },
  height: 1,
  left: 28,
  top: 14,
  name: 'foooooooo2',
  content: 'foooooooo2'
});

var submit = blessed.button({
  parent: form2,
  mouse: true,
  keys: true,
  shrink: true,
  padding: {
    left: 1,
    right: 1
  },
  left: 29,
  top: 3,
  name: 'submit',
  content: 'submit',
  style: {
    bg: 'blue',
    focus: {
      bg: 'red'
    }
  }
});

submit.on('press', function() {
  form2.submit();
});

var box1 = blessed.box({
  parent: form2,
  left: 1,
  top: 10,
  height: 10,
  width: 10,
  content: 'one',
  style: {
    bg: 'cyan'
  }
});

var box2 = blessed.box({
  parent: box1,
  left: 1,
  top: 2,
  height: 8,
  width: 9,
  content: 'two',
  style: {
    bg: 'magenta'
  }
});

var box3 = blessed.box({
  parent: box2,
  left: 1,
  top: 2,
  height: 6,
  width: 8,
  content: 'three',
  style: {
    bg: 'yellow'
  }
});

var box4 = blessed.box({
  parent: box3,
  left: 1,
  top: 2,
  height: 4,
  width: 7,
  content: 'four',
  style: {
    bg: 'blue'
  }
});

var output = blessed.scrollabletext({
  parent: form2,
  mouse: true,
  keys: true,
  left: 0,
  top: 20,
  height: 5,
  right: 0,
  style: {
    bg: 'red'
  },
  content: 'foobar'
});

var bottom = blessed.line({
  parent: form2,
  type: 'line',
  orientation: 'horizontal',
  left: 0,
  right: 0,
  top: 50,
  style: {
    fg: 'blue'
  }
});

screen.key('q', function() {
  return screen.destroy();
});

form2.focus();

form2.submit();

screen.render();

// https://github.com/chjj/blessed/blob/master/test/widget-table.js

screen = blessed.screen({
  dump: __dirname + '/logs/table.log',
  autoPadding: false,
  fullUnicode: true,
  warnings: true
});

var DU = '杜';
var JUAN = '鹃';

var table = blessed.table({
  //parent: screen,
  top: 'center',
  left: 'center',
  data: null,
  border: 'line',
  align: 'center',
  tags: true,
  //width: '80%',
  width: 'shrink',
  style: {
    border: {
      fg: 'red'
    },
    header: {
      fg: 'blue',
      bold: true
    },
    cell: {
      fg: 'magenta'
    }
  }
});

var data1 = [
  [ 'Animals',  'Foods',  'Times'  ],
  [ 'Elephant', 'Apple',  '1:00am' ],
  [ 'Bird',     'Orange', '2:15pm' ],
  [ 'T-Rex',    'Taco',   '8:45am' ],
  [ 'Mouse',    'Cheese', '9:05am' ]
];

data1[1][0] = '{red-fg}' + data1[1][0] + '{/red-fg}';
data1[2][0] += ' (' + DU + JUAN + ')';

var data2 = [
  [ 'Animals',  'Foods',  'Times',   'Numbers' ],
  [ 'Elephant', 'Apple',  '1:00am',  'One'     ],
  [ 'Bird',     'Orange', '2:15pm',  'Two'     ],
  [ 'T-Rex',    'Taco',   '8:45am',  'Three'   ],
  [ 'Mouse',    'Cheese', '9:05am',  'Four'    ]
];

data2[1][0] = '{red-fg}' + data2[1][0] + '{/red-fg}';
data2[2][0] += ' (' + DU + JUAN + ')';

screen.key('q', function() {
  return screen.destroy();
});

table.setData(data2);
screen.append(table);
screen.render();

setTimeout(function() {
  table.setData(data1);
  screen.render();
}, 3000);
