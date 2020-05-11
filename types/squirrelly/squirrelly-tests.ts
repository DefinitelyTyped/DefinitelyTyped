import * as Sqrl from 'squirrelly';

let myTemplate = 'Hi, my name is {{name}}';
const compiled = Sqrl.Compile(myTemplate);

compiled({ name: 'Johnny Appleseed' }, Sqrl);

myTemplate = `
My favorite template engine is {{fav}}
`;
Sqrl.Render(myTemplate, {
    fav: 'Squirrelly!',
});

myTemplate = `
My favorite template engine is {{fav}}
`;
const compiledTemplate = Sqrl.Compile(myTemplate);
Sqrl.Render(compiledTemplate, {
    fav: 'Squirrelly!',
});

Sqrl.renderFile('../file1', { $name: 'file1' });
Sqrl.load({}, 'str');
Sqrl.load({ $name: 'mytemplate' });

Sqrl.defineFilter('reverse', str => {
    let out = '';
    for (let i = str.length - 1; i >= 0; i--) {
        out += String(str).charAt(i);
    }
    return out || str;
});

Sqrl.setDefaultFilters('clear');
Sqrl.setDefaultFilters({ filtername: true });
Sqrl.setDefaultFilters({ filtername: true, otherfilter: true });
Sqrl.setDefaultFilters({ filtername: false });

Sqrl.autoEscaping(true);
Sqrl.autoEscaping(false);

Sqrl.defineHelper('helperName', (args, content, blocks) => {
    return `Wrapper: ${blocks.date()}Wrapper`;
});

Sqrl.defineNativeHelper('if', {
    helperStart: param => {
        return `if(${param}){`;
    },
    helperEnd: () => {
        return '}';
    },
    blocks: {
        else: () => {
            // called with (id) but neither param is needed
            return '}else{';
        },
    },
});

Sqrl.definePartial('mypartial', `
This is a partial.
It can be called with the data of the template it's in.
`);

Sqrl.defaultTags(['--', '--']);
