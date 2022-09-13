import * as CodeMirror from 'codemirror';
import 'codemirror/addon/mode/overlay';

// From the demo at https://codemirror.net/demo/mustache.html

CodeMirror.defineMode("mustache", (config, parserConfig) => {
    const mustacheOverlay: CodeMirror.Mode<any> = {
        token(stream) {
            let ch;
            if (stream.match('{{')) {
                // tslint:disable-next-line:no-conditional-assignment
                while ((ch = stream.next()) != null)
                if (ch === '}' && stream.next() === '}') {
                    stream.eat('}');
                    return 'mustache';
                }
            }
            while (stream.next() != null && !stream.match('{{', false)) {}
            return null;
      }
    };
    return CodeMirror.overlayMode(CodeMirror.getMode(config, parserConfig.backdrop || 'text/html'), mustacheOverlay);
  });
