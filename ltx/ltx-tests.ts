import * as ltx from './index';

ltx.parse('<document/>');

let p = new ltx.Parser();

p.on('tree', function (ignored) {
});

p.on('error', function (ignored) {
});


let el = new ltx.Element('root').c('children');
el.c('child', {age: 5}).t('Hello').up()
    .c('child', {age: 7}).t('Hello').up()
    .c('child', {age: 99}).t('Hello').up();

el.root().toString();
