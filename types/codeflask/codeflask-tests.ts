import CodeFlask  = require('codeflask');

const flask = new CodeFlask(new HTMLElement(), {
  language: 'js',
  defaultTheme: false
});

flask.onUpdate((code) => { });

flask.updateCode('Test');

const code: string = flask.getCode();
