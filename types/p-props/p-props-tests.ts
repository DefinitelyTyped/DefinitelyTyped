import pProps = require('p-props');
import got = require('got');

const fetch = (url: string): Promise<string> => got(url).then(res => res.body);

const sites = {
    ava: fetch('ava.li'),
    todomvc: fetch('todomvc.com'),
    github: fetch('github.com'),
    foo: 'bar'
};

pProps<string, typeof sites>(sites).then(result => {
    const str: string = result.github;
});

const map = new Map<number, string | Promise<string>>([[1, Promise.resolve('1')], [2, '2']]);

pProps(map).then(result => {
    const str: string | undefined = result.get(1);
});
