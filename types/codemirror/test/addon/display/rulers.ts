import * as CodeMirror from 'codemirror';
import 'codemirror/addon/display/rulers';

const cm1 = CodeMirror(document.body, {
    rulers: false,
});

const cm2 = CodeMirror(document.body, {
    rulers: [
        25,
        {
            column: 43,
            className: 'test',
            color: 'green',
            lineStyle: 'dotted',
            width: '3px',
        }
    ],
});

const cm3 = CodeMirror(document.body, {
    rulers: true, // $ExpectError
});

const cm4 = CodeMirror(document.body, {
    rulers: {
        column: 12, // $ExpectError
    },
});

const cm5 = CodeMirror(document.body, {
    rulers: [{ // $ExpectError
        color: 'green',
    }],
});
