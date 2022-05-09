Engine.isWebGLAvailable();
Engine.isWebGLAvailable(0);
Engine.isWebGLAvailable(1);
Engine.isWebGLAvailable(''); // $ExpectError

Engine.load();
Engine.load('123');

Engine.unload();

const e1 = new Engine(); // $ExpectError
const e2 = new Engine({});

e2.init();
e2.init('basepath');

e2.preloadFile('basepath');
e2.preloadFile(new ArrayBuffer(1));
e2.preloadFile(new ArrayBuffer(1), 'path');

e2.start();
e2.startGame();

e2.copyToFs('path', new ArrayBuffer(1));
e2.copyToFs('path', []); // $ExpectError

e2.requestQuit();
