import { create, Generator, Options } from 'css-generator';

const options: Options = { indentation: '  ' }; // 2 spaces

const css: Generator = create(options);

css.addRaw('/* add comment */');

css.addRule('.color-white', { color: 'white' });

{
    css.openBlock('media', 'screen and (min-width: 30em)');
    css.addRule(['body', 'html'], { color: 'gray' });
    css.closeBlock();
}

{
    css.openBlock('supports', '(display: grid)');
    css.addRule('.grid', { display: 'grid' });
    {
        css.openBlock('media', 'screen and (max-width: 30em)');
        css.addRule('.grid-sm', { display: 'grid' });
        css.closeBlock();
    }
    css.closeBlock();
}

css.closeBlocks();
css.getOutput();

if (css instanceof Generator) {
    css; // $ExpectType Generator
}
// $ExpectError
new Generator();
