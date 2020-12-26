import * as MarkdownArea from 'mdarea';

const elem = new HTMLTextAreaElement();

new MarkdownArea(elem);
const editor = new MarkdownArea(elem, {
    indent: '',
    keyMap: {
        enter: '',
        indent: [],
        inline: ['*', '`'],
        outdent: '',
    },
});

const elem2 = editor.getElement();
const value = editor.getValue();
const same = elem2.value === value;
editor.setElement(new HTMLTextAreaElement());
editor.setValue('');
editor.destroy();
