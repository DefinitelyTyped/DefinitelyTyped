import remark = require('remark');
import remarkPrism = require('remark-prism');

remark().use(remarkPrism);

const options: remarkPrism.Options = {
    transformInlineCode: true,
    plugins: [
        'autolinker',
        'command-line',
        'data-uri-highlight',
        'diff-highlight',
        'inline-color',
        'keep-markup',
        'line-numbers',
        'show-invisibles',
        'treeview',
    ],
};
remark().use(remarkPrism, options);

const partialOptions: remarkPrism.Options = {
    plugins: ['show-invisibles', 'autolinker'],
};
remark().use(remarkPrism, partialOptions);
