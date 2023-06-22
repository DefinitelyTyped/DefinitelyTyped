import rehypePrism = require('@mapbox/rehype-prism');
import { Processor } from 'unified';
import { Root } from 'hast';

declare const rehype: Processor<Root>;

rehype()
    .use(rehypePrism)
    .use(rehypePrism, { ignoreMissing: true })
    .use(rehypePrism, {
        alias: {
            javascript: 'js',
            typescript: ['ts', 'tsx'],
        },
    });
