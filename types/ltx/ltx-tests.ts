import * as ltx from 'ltx';

ltx.parse('<document/>');

const getChildTextElement = ltx.parse('<test><child>body text</child></test>') as ltx.Element;
if (getChildTextElement.getChildText('child') !== 'body text') {
    throw new Error("body does not match");
}

const p = new ltx.Parser();

p.on('tree', (ignored: any) => {});

p.on('error', (ignored: any) => {});

const el = new ltx.Element('root').c('children');
el.c('child', {age: 5}).t('Hello').up()
    .c('child', {age: 7}).t('Hello').up()
    .c('child', {age: 99}).t('Hello').up();

el.root().toString();
