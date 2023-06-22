import * as CodeMirror from 'codemirror';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/sql-hint';

const cm = CodeMirror(document.body, { value: 'text' });
cm.showHint({
    hint: CodeMirror.hint.sql,
    tables: {
        user: ['username', 'password_hash'],
        tags: {
            columns: ['title']
        },
    }
});
cm.showHint({
    hint: CodeMirror.hint.sql,
    // @ts-expect-error
    tables: {
        user: [25],
        tags: {
            columns: ['text']
        },
    }
});
cm.showHint({
    hint: CodeMirror.hint.sql,
    tables: ['user', {
        text: 'posts',
        columns: ['title', 'body', 'author']
    }]
});

cm.showHint({
    hint: CodeMirror.hint.sql,
    // @ts-expect-error
    tables: [true]
});

cm.showHint({
    hint: CodeMirror.hint.sql,
    // @ts-expect-error
    tables: [{ text: 25 }]
});
