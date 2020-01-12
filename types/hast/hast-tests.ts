import * as Hast from 'hast';

const element: Hast.Element = {
    type: 'element',
    tagName: 'div',
    children: [],
};

const doctype: Hast.Doctype = {
    type: 'doctype',
    name: 'html',
};

const comment: Hast.Comment = {
    type: 'comment',
    value: 'test',
};

const text: Hast.Text = {
    type: 'text',
    value: 'text',
};

const root: Hast.Root = {
    type: 'root',
    children: [element, doctype, comment, text],
};

const templateElement: Hast.Element = {
    type: 'element',
    tagName: 'template',
    content: root,
    children: [],
};
