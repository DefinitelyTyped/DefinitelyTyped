import { html2json, json2html, Node } from 'html2json';
const json = {
    node: 'root',
    child: [
        {
            node: 'element',
            tag: 'div',
            child: [
                {
                    node: 'text',
                    text: 'this is div',
                },
            ],
        },
    ],
} as any as Node;
const html = '<div test="test">this is div</div>';
html2json(html);
json2html(json);
