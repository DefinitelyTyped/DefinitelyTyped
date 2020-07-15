import importAll from 'import-all.macro';

const asy = importAll<string>('./files/*.ts').then((modules: { [k: string]: string; }) => {
    modules['./files/a.ts'].includes('foo');
});

const syn1: { [k: string]: unknown } = importAll.sync('./files/*.ts');

const syn2: { [k: string]: Date } = importAll.sync<Date>('./files/*.ts');

const def: { [k: string]: () => Promise<object>; } = importAll.deferred<object>('./files/*.ts');
