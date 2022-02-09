import nunjucks = require('nunjucks');

nunjucks.configure({ autoescape: false });

let rendered = nunjucks.render('./noexists.html');

nunjucks.render('foo.html', { username: 'James' });
nunjucks.render('async.html', (err: nunjucks.lib.TemplateError | null, res: string | null) => {});

const ctx = { items: ['Hello', 'this', 'is', 'for', 'testing'] };
const src = '{% for item in items %}{{item}}{% endfor %}';

rendered = nunjucks.renderString(src, ctx);
nunjucks.renderString('Hello {{ username }}', { username: 'James' });

const compiled = nunjucks.compile(src);
rendered = compiled.render(ctx);
nunjucks.compile('Hello {{ username }}').render({ username: 'James' });

rendered = nunjucks.precompileString(src, {
    name: 'TestyWesty',
});

const template = new nunjucks.Template(src);
rendered = template.render(ctx);

let env = nunjucks.configure({ autoescape: false });
nunjucks.configure('/views');
nunjucks.configure('views', {
    autoescape: true,
    watch: true,
});
rendered = env.renderString(src, ctx);

env.on('load', (name, source, loader) => {});

let extension: nunjucks.Extension = {
    tags: ['glitter', 'star wars', 'Age of Empires'],
    parse(parser, nodes, lexer) {
        return 'The parser api is complicated';
    },
};
env = env.addExtension('SpawnGlitter', extension);
const hasExtension: boolean = env.hasExtension('SpawnGlitter');
extension = env.getExtension('SpawnGlitter');
env.removeExtension('SpawnGlitter');

env = env.addGlobal('key', 'value');
const value = env.getGlobal('key');

env = env.addFilter('testFilter', arg => arg, false);
const testFilter: (arg: any) => any = env.getFilter('testFilter');

nunjucks.installJinjaCompat();

class MyLoader extends nunjucks.Loader implements nunjucks.ILoader {
    getSource(name: string): nunjucks.LoaderSource {
        return {
            src: 'Amadala',
            path: 'The Right One',
            noCache: false,
        };
    }
}

env = new nunjucks.Environment(new MyLoader());

// $ExpectType typeof FileSystemLoader
const MyOtherLoader = nunjucks.FileSystemLoader.extend({
    getSource(name: string): nunjucks.LoaderSource {
        return {
            src: 'Amadala',
            path: 'The Right One',
            noCache: false,
        };
    },
});

env = new nunjucks.Environment(new MyOtherLoader());

new nunjucks.runtime.SafeString('an unsafe string');
