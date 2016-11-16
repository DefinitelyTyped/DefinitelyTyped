import * as Terminal from 'xterm';

declare var fetch: any;

var term: Terminal,
    protocol: any,
    socketURL: string,
    socket: WebSocket,
    pid: number,
    charWidth: number,
    charHeight: number;

var terminalContainer = document.getElementById('terminal-container'),
    optionElements = {
      cursorBlink: document.querySelector('#option-cursor-blink')
    },
    colsElement = document.getElementById('cols') as any,
    rowsElement = document.getElementById('rows') as any;

function setTerminalSize () {
  var cols = parseInt(colsElement.value),
      rows = parseInt(rowsElement.value),
      width = (cols * charWidth).toString() + 'px',
      height = (rows * charHeight).toString() + 'px';

  terminalContainer.style.width = width;
  terminalContainer.style.height = height;
  term.resize(cols, rows);
}

colsElement.addEventListener('change', setTerminalSize);
rowsElement.addEventListener('change', setTerminalSize);

optionElements.cursorBlink.addEventListener('change', createTerminal);

createTerminal();

function createTerminal() {
  // Clean terminal
  while (terminalContainer.children.length) {
    terminalContainer.removeChild(terminalContainer.children[0]);
  }
  term = new Terminal({
    cursorBlink: (optionElements.cursorBlink as any).checked
  });
  term.on('resize', function (size: any) {
    if (!pid) {
      return;
    }
    var cols = size.cols,
        rows = size.rows,
        url = '/terminals/' + pid + '/size?cols=' + cols + '&rows=' + rows;

    fetch(url, {method: 'POST'});
  });
  protocol = (location.protocol === 'https:') ? 'wss://' : 'ws://';
  socketURL = protocol + location.hostname + ((location.port) ? (':' + location.port) : '') + '/terminals/';

  term.open(terminalContainer);
  // term.fit();

  var cols = 20,
      rows = 30;

  colsElement.value = cols;
  rowsElement.value = rows;

  fetch('/terminals?cols=' + cols + '&rows=' + rows, {method: 'POST'}).then(function (res: any) {

    charWidth = Math.ceil(term.element.offsetWidth / cols);
    charHeight = Math.ceil(term.element.offsetHeight / rows);

    res.text().then(function (pid: number) {
      (window as any).pid = pid;
      socketURL += pid;
      socket = new WebSocket(socketURL);
      socket.onopen = runRealTerminal;
      socket.onclose = runFakeTerminal;
      socket.onerror = runFakeTerminal;
    });
  });
}


function runRealTerminal() {
  //term.attach(socket);
  //term._initialized = true;
}

function runFakeTerminal() {
  // if (term._initialized) {
  //   return;
  // }

  // term._initialized = true;

  var shellprompt = '$ ';

  // term.prompt = function () {
  //   term.write('\r\n' + shellprompt);
  // };

  term.writeln('Welcome to xterm.js');
  term.writeln('This is a local terminal emulation, without a real terminal in the back-end.');
  term.writeln('Type some keys and commands to play around.');
  term.writeln('');
  // term.prompt();

  term.on('key', function (key, ev) {
    var printable = (
      !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey
    );

    if (ev.keyCode == 13) {
      // term.prompt();
    } else if (ev.keyCode == 8) {
     // Do not delete the prompt
      // if (term.x > 2) {
      //   term.write('\b \b');
      // }
    } else if (printable) {
      term.write(key);
    }
  });

  term.on('paste', function (data, ev) {
    term.write(data);
  });
}
