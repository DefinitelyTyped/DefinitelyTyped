import terminalImage = require('terminal-image');

// $ExpectType Promise<string>
terminalImage.file('unicorn.jpg');
// $ExpectType Promise<string>
terminalImage.buffer((null as any) as Buffer);
