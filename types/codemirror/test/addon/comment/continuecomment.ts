import * as CodeMirror from 'codemirror';
import 'codemirror/addon/comment/continuecomment';

const cm1 = CodeMirror(document.body, {
    continueComments: true,
});

const cm2 = CodeMirror(document.body, {
    continueComments: 'Ctrl-Enter',
});

const cm3 = CodeMirror(document.body, {
    continueComments: {
        key: 'Ctrl-Enter',
    },
});

const cm4 = CodeMirror(document.body, {
    continueComments: {
        key: 'Ctrl-Enter',
        continueLineComment: false,
    },
});

const cm5 = CodeMirror(document.body, {
    // @ts-expect-error
    continueComments: 12,
});

const cm6 = CodeMirror(document.body, {
    continueComments: {
        // @ts-expect-error
        key: 12,
    },
});
