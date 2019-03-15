import Hexo = require('hexo');
import fs = require('fs');
import Bunyan = require('bunyan');
import { ParsedArgs } from 'minimist';
import util = require('hexo-util');
import http = require('http');

const config: Hexo.InstanceOptions = {};
config.debug = false;
config.safe = false;
config.silent = false;
config.config = '_config.yml';

let h: Hexo;
h = hexo;
h = new Hexo();
h = new Hexo('./');
h = new Hexo('./', config);

const logger: Bunyan = h.log;
console.log(h.base_dir);
console.log(h.public_dir);
console.log(h.source_dir);
console.log(h.plugin_dir);
console.log(h.script_dir);
console.log(h.scaffold_dir);
console.log(h.theme_dir);
console.log(h.theme_script_dir);
console.log(h.config_path);
console.log(h.env.args);
console.log(h.env.debug);
console.log(h.env.safe);
console.log(h.env.silent);
console.log(h.env.env);
console.log(h.env.version);
console.log(h.env.init);
console.log(h.config.title);
console.log(h.config.subtitle);
console.log(h.config.description);
console.log(h.config.author);
console.log(h.config.language);
console.log(h.config.timezone);
console.log(h.config.url);
console.log(h.config.root);
console.log(h.config.permalink);
console.log(h.config.permalink_defaults);
console.log(h.config.source_dir);
console.log(h.config.public_dir);
console.log(h.config.tag_dir);
console.log(h.config.archive_dir);
console.log(h.config.category_dir);
console.log(h.config.code_dir);
console.log(h.config.i18n_dir);
console.log(h.config.skip_render);
console.log(h.config.new_post_name);
console.log(h.config.default_layout);
console.log(h.config.titlecase);
console.log(h.config.external_link);
console.log(h.config.filename_case);
console.log(h.config.render_drafts);
console.log(h.config.post_asset_folder);
console.log(h.config.relative_link);
console.log(h.config.future);
console.log(h.config.highlight.enable);
console.log(h.config.highlight.line_number);
console.log(h.config.highlight.auto_detect);
console.log(h.config.highlight.tab_replace);
console.log(h.config.default_category);
console.log(h.config.category_map);
console.log(h.config.tag_map);
console.log(h.config.time_format);
console.log(h.config.per_page);
console.log(h.config.pagination_dir);
console.log(h.config.theme);
console.log(h.config.theme_config);
console.log(h.config.deploy);
console.log(h.config.include);
console.log(h.config.exclude);
console.log(h.config.ignore);

h.init().then(async () => {
    await h.watch();
    h.unwatch();

    await h.theme.watch();
    h.theme.unwatch();

    await h.source.watch();
    h.source.unwatch();

    await h.load();
    h.call('config', {_: ['arg1']}, (err, value) => {});

    await h.exit();
});

h.on('ready', () => {
    h.on('deployBefore', () => {});
    h.on('deployAfter', () => {});
    h.on('exit', err => {
        console.log(err);
    });
    h.on('generateBefore', () => {});
    h.on('generateAfter', () => {});
    h.on('new', param => {
        const path: string = param.path;
        const content: string = param.content;
    });
    h.on('processBefore', (type, path) => {
        const t: Hexo.Box.File['type'] = type;
        const p: string = path;
    });
    h.on('processAfter', (type, path) => {
        const t: Hexo.Box.File['type'] = type;
        const p: string = path;
    });
    h.on('ready', () => {});

    {
        let local: Hexo.Locals.Post[] = [];
        const model = hexo.locals.get('posts');

        local = model.toArray();
        const count: number = model.count();
        model.filter(v => true);
        model.forEach(v => {});
        model.map(v => v.name);
    }

    {
        let local: Hexo.Locals.Page[] = [];
        const model = hexo.locals.get('pages');

        local = model.toArray();
        const count: number = model.count();
        model.filter(v => true);
        model.forEach(v => {});
        model.map(v => v.name);
    }

    {
        let local: Hexo.Locals.Category[] = [];
        const model = hexo.locals.get('categories');

        local = model.toArray();
        const count: number = model.count();
        model.filter(v => true);
        model.forEach(v => {});
        model.map(v => v.name);
    }

    {
        let local: Hexo.Locals.Tag[] = [];
        const model = hexo.locals.get('tags');

        local = model.toArray();
        const count: number = model.count();
        model.filter(v => true);
        model.forEach(v => {});
        model.map(v => v.name);
    }

    {
        h.locals.set('some-data', () =>  'some vlue');
        h.locals.remove('some-data');
        h.locals.toObject();
        h.locals.invalidate();
    }

    {
        const route = h.route.get('index.html');
        if (route) {
            console.log(route.modified);
            console.log(route.read());
        }

        const data: Hexo.Router.Data = {
            data: 'some data',
            modified: true,
        };
        data.data = new Buffer([]);
        data.data = () => 'return';

        let router: Hexo.Router;
        router = h.route;
        router = h.route.set('index.html', 'content');
        router = h.route.set('index.html', new Buffer([]));
        router = h.route.set('index.html', new util.Pattern(() => false));
        router = h.route.set('index.html', { data: 'index', modified: false });

        router = h.route.remove('index.html');

        const list: string[] = h.route.list();
        const format: string = h.route.format('/');
    }

    {
        h.source.process(() => {});
        h.source.addProcessor('path', file => {
            console.log(file.source);
            console.log(file.path);
            console.log(file.type);
            console.log(file.params);

            file.read((err, content) => {
                console.log(err, content.toString());
                console.log(content);
            });

            file.read({encoding: 'utf8', flag: 'r'}, (err, content) => {
                console.log(err, content.toString());
                console.log(content);
            });

            file.readSync({encoding: 'utf8', flag: 'r'});

            file.stat((err, stat) => {
                console.log(err);
                console.log(stat.mtime);
                console.log(stat.ctime);
                console.log(stat.atime);
            });

            file.stat().then(stat => {
                console.log(stat.mtime);
                console.log(stat.ctime);
                console.log(stat.atime);
            });

            const stat: fs.Stats = file.statSync();

            let render = '';
            file.render({}, (err, result) => {
                render = result;
            });
            file.render((err, result) => {
                render = result;
            });
            file.render().then(result => {
                render = result;
            });
            render = file.renderSync();
        });
    }

    {
        let _bool = true;
        _bool = h.render.isRenderable('path');
        _bool = h.render.isRenderableSync('path');

        const option: Hexo.Render.Data = {
            engine: 'ejs',
            text: 'test',
            path: __filename,
        };

        let _string = '';
        h.render.render({text: 'example', engine: 'swig'}).then(result => {
            _string = result;
        });
        h.render.render({path: __filename}).then(result => {
            _string = result;
        });
        h.render.render({text: ''}, {foo: 'foo'}).then(result => {
            _string = result;
        });
        _string = h.render.renderSync({text: 'example'});

        _string = h.render.getOutput('ejs');
    }

    {
        const data: Hexo.Post.Data = {};
        data.title = 'Title';
        data.slug = 'URL';
        data.layout = 'layout_name';
        data.path = 'path';
        data.date = new Date();

        h.post.create(data, false, () => {});
        h.post.create(data, () => {});

        h.post.publish(data, false, () => {});
        h.post.publish(data, () => {});

        const renderData: Hexo.Post.RenderData = {};
        renderData.content = 'content';
        renderData.engine = 'ejs';
        h.post.render(null, renderData, () => {});
    }

    {
        h.scaffold.get('post').then(result => '');
        h.scaffold.set('post', '').then(() => {});
        h.scaffold.remove('post').then(() => {});
    }

    {
        const themeConfig: Hexo['config'] = h.theme.config;
        let v: Hexo.View | undefined;
        h.theme.setView('path-name', {});
        v = h.theme.getView('post');
        if (v) {
            console.log(v.path);
            console.log(v.source);

            v.render().then(result => {});
            v.renderSync();
        }

        h.theme.removeView('path-name');
        h.theme.process(() => {});
    }

    {
        const options: Hexo.extend.Console.Options = {};
        options.usage = '[layout] <title>';
        options.arguments = [
            {name: 'layout', desc: 'Post layout'},
            {name: 'title', desc: 'Post title'},
        ];
        options.options = [
            {name: '-r, --replace', desc: 'Replace existing files'},
        ];
        options.desc = 'desc';

        h.extend.console.register('name', 'description', options, args => {
            const a: ParsedArgs = args;
        });
        h.extend.console.register('name', options, args => {});
        h.extend.console.register('name', 'description', args => {});
        h.extend.console.register('name', args => {});
    }

    {
        h.extend.deployer.register('name', args => {
            console.log(args.type);
            console.log(args.someExtraArg);
        });
    }

    {
        h.extend.filter.register('before_post_render', data => data);
        h.extend.filter.register('before_post_render', data => undefined);
        h.extend.filter.register('before_post_render', data => undefined, 1);

        h.extend.filter.register('after_post_render', data => data);
        h.extend.filter.register('after_post_render', data => undefined);
        h.extend.filter.register('after_post_render', data => undefined, 1);

        h.extend.filter.register('before_exit', () => {});
        h.extend.filter.register('before_exit', () => {}, 1);

        h.extend.filter.register('before_generate', data => data);
        h.extend.filter.register('before_generate', data => undefined);
        h.extend.filter.register('before_generate', data => undefined, 1);

        h.extend.filter.register('after_generate', () => {});
        h.extend.filter.register('after_generate', () => {}, 1);

        h.extend.filter.register('template_locals', locals => locals);
        h.extend.filter.register('template_locals', locals => undefined);
        h.extend.filter.register('template_locals', locals => undefined, 1);

        h.extend.filter.register('after_init', () => {});
        h.extend.filter.register('after_init', () => {}, 1);

        h.extend.filter.register('new_post_path', (data, replace) => undefined);
        h.extend.filter.register('new_post_path', (data, replace) => undefined, 1);

        h.extend.filter.register('post_permalink', permalink => permalink);
        h.extend.filter.register('post_permalink', permalink => permalink, 1);

        h.extend.filter.register('after_render:html', (result, data) => result);
        h.extend.filter.register('after_render:html', (result, data) => result, 1);

        h.extend.filter.register('after_clean', () => {});
        h.extend.filter.register('after_clean', () => {}, 1);

        h.extend.filter.register('server_middleware', app => {
            app.use((req: http.IncomingMessage, res: http.ServerResponse) => {
                res.setHeader('X-Powered-By', 'Hexo');
            });
        });

        const filter = (data: any) => data;
        h.extend.filter.register('custom_filter', filter);
        h.extend.filter.unregister('custom_filter', filter);

        const options: Hexo.extend.Filter.Options = {};
        options.args = ['foo', 'bar'];
        options.context = h;
        h.extend.filter.exec('custom_filter', options);
        h.extend.filter.exec('custom_filter');
        h.extend.filter.execSync('custom_filter', options);
        h.extend.filter.execSync('custom_filter');
    }

    {
        const ret: Hexo.extend.Generator.Return = {
            data: {},
            layout: 'layout-name',
            path: '/',
        };
        h.extend.generator.register('name', local => ret);
        h.extend.generator.register('name', local => [ret]);
        h.extend.generator.register('name', local => {
            console.log(local.data);
            const categories: Hexo.Locals.Category[] = local.categories.toArray();
            const pages: Hexo.Locals.Page[] = local.pages.toArray();
            const posts: Hexo.Locals.Post[] = local.posts.toArray();
            const tags: Hexo.Locals.Tag[] = local.tags.toArray();

            return ret;
        });
    }

    {
        h.extend.helper.register('name', (...args) => {
            return 'ret';
        });
    }

    {
        h.extend.migrator.register('name', args => {
            const a: ParsedArgs = args;
        });
    }

    {
        let f: Hexo.Box.File;
        h.extend.processor.register('pattern', file => f = file);
        h.extend.processor.register(/pattern/, file => f = file);
        h.extend.processor.register((str) => true , file => f = file);
        h.extend.processor.register(file => f = file);
    }

    {
        h.extend.renderer.register('ts', 'js', (data, options) => {
            console.log(data.path);
            console.log(data.text);
            return 'result';
        }, true);

        h.extend.renderer.register('ts', 'js', (data, options) => Promise.resolve('result'), false);
        h.extend.renderer.register('ts', 'js', (data, options) => Promise.resolve('result'));
    }

    {
        const option: Hexo.extend.Tag.Options = {};
        option.async = true;
        option.ends = true;

        h.extend.tag.register('name', (args, content) => {
            if (content) {
                const c: string = content;
            }
            const a: string[] = args;
            return 'content';
        });
    }
});
