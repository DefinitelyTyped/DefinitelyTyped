import * as glob from 'glob';
import * as mkdirp from 'mkdirp';
import * as rimraf from 'rimraf';
import * as fs from 'fs';
 
const rootFolder = 'es';
const indexFile = 'index.d.ts';
const testFile = 'carbon__icons-tests.ts';

const sizes = ['16', '20', '24', '32'];

const template = `
import { Attrs{{size}} } from '{{pathToRoot}}/utils/Attrs';
import { Content } from '{{pathToRoot}}/utils/Content';

export default interface {{name}} {
    readonly elem: 'svg';
    readonly attrs: Attrs{{size}};
    readonly content: Content;
    readonly name: '{{imgName}}';
    readonly size: {{size}};
}`;

const indexHeader = `
// Type definitions for @carbon/icons 10.15.0
// Project: https://github.com/carbon-design-system/carbon/tree/master/packages/icons
// Definitions by: Sébastien Grégoire <https://github.com/sgregoire>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8

// Automatically generated
export as namespace CarbonIcons;
`;

const indexContent = `
import _{{name}} from "{{path}}";
export { _{{name}} as {{finalname}} };
`

function getContent(pathToRoot: string, name: string, size: string) {
    return template
        .split('{{pathToRoot}}').join(pathToRoot)
        .split('{{name}}').join('_' + size)
        .split('{{imgName}}').join(name)
        .split('{{size}}').join(size)
        ;
}

function getIndexContent(path: string, name: string, finalname: string) {
    return indexContent
        .split('{{name}}').join(name)
        .split('{{path}}').join(path)
        .split('{{finalname}}').join(finalname)
        ;
}

function finalName(name) {
    const firstLetter = name.charAt(0);
    if(isNaN(parseInt(firstLetter))) {
        return name;   
    }
    return '_' + name;
}

function inline(name) {
    return name
        .split('-')
        .filter(str => str.length > 0)
        .map(str => str.charAt(0).toUpperCase() + str.slice(1))
        .join('')
}

// Generate all d.ts
const svgFiles = glob.sync("**/*.svg", { cwd: process.argv[process.argv.length - 1] });
rimraf.sync(rootFolder);
svgFiles.forEach(file => {
    if(file.includes('/')) {
        const parts = file.split('/');
        if(parts.length === 2) {
            const name = parts[1].replace('.svg', '');
            const folder = rootFolder + '/' + name;
            mkdirp.sync(folder)

            sizes.forEach(size => {
                fs.writeFileSync(
                    folder + '/' + size + '.d.ts',
                    getContent('../../..', name, size)
                );
            })
        } else if(parts.length === 3) {
            const wrapper = parts[1];
            const name = parts[2].replace('.svg', '');
            
            const folder = rootFolder + '/' + wrapper + '/' + name;
            mkdirp.sync(folder)

            sizes.forEach(size => {
                fs.writeFileSync(
                    folder + '/' + size + '.d.ts',
                    getContent('../../../..', name, size)
                );
            })
        } else {
            console.error('Could not handle this', file)
        }
    } else {
        const name = file.replace('.svg', '');
        const folder = rootFolder + '/' + name;
        mkdirp.sync(folder)
        sizes.forEach(size => {
            fs.writeFileSync(
                folder + '/' + size + '.d.ts',
                getContent('..', name, size)
            );
        })
    }
})

// Generate index.d.ts and the tests
const typingFiles = glob.sync("**/*.d.ts", { cwd: process.cwd() + '/' + rootFolder });
fs.writeFileSync(
    'index.d.ts',
    indexHeader
);

// Erase tests
fs.writeFileSync(
    'carbon__icons-tests.ts',
    '// Automatically generated\n'
);

const names = [];

typingFiles.forEach(file => {
    const parts = file.split('/');
    if(parts.length === 2) {
        const name = parts[0];
        const size = parts[1].replace('.d.ts', '');
        const inlinedName = inline(name) + size;
        
        const final = finalName(inlinedName);
        fs.appendFileSync(
            indexFile,
            getIndexContent(
                './' + rootFolder + '/' + name + '/' + size, 
                inlinedName,
                final,
            )
        );

        fs.appendFileSync(
            testFile,
            'import ' + final + ' from "@carbon/icons/es/' + name + '/' + size + '";\n'
        );
        names.push(final);
    } else if(parts.length === 3) {
        const folder = parts[0];
        const name = parts[1];
        const size = parts[2].replace('.d.ts', '');

        const inlinedName = inline(folder) + inline(name) + size

        fs.appendFileSync(
            'index.d.ts',
            getIndexContent(
                './' + rootFolder + '/' + folder + '/' + name + '/' + size, 
                inlinedName,
                finalName(inlinedName)
            )
        );
    } else {
        console.error('Not handled', file)
    }
});

fs.appendFileSync(
    testFile,
    'let item;\n'
);

names.forEach(name => {
    fs.appendFileSync(
        testFile,
        `
item = ${name};
item.elem;
item.attrs;
item.content;
item.name;
item.size;
        `
    );
})