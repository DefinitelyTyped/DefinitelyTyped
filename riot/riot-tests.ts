import * as riot from 'riot';

// Version
console.log(riot.version.charAt(0));

// Settings
riot.settings.brackets = '[% %]';

// errorHandler
riot.util.tmpl.errorHandler = function (err: riot.TemplateError) {
    console.error(err.message + ' in ' + err.riotData.tagName);
};

// vdom
console.log(riot.vdom[0].opts);

const mockOpts: any = {
    foo: true,
    bar: 1,
    baz: [1, '2', [3]]
};

const tag = riot.mount('test')[0];

// Mounting
// mount all custom tags with a class name .customer
var tags: riot.Tag[] = riot.mount('.customer');
console.log(tags.length);
// mount <account> tag and pass an object as options
riot.mount('account', mockOpts);
// mounts custom tag "my-tag" to div#main with some options
riot.mount('div#main', 'my-tag', mockOpts);
// mounts "users" tag to #slide node and some options
riot.mount(document.getElementById('slide'), 'users', mockOpts);

// Rendering
console.log(riot.render('test', mockOpts).substr(0, 10));

// Updating
// update tag instance
tag.update();
// update tag instance with context data
tag.update(mockOpts);
// update all mounted tags
riot.update();

// Unmounting
// unmount tag
tag.unmount();
// unmount tag and keep parent tag
tag.unmount(true);

// Nested tags
// tag should have `tags` property
console.log(tag.tags);
// nested tags can be accessed by name
// multiple tags with same name are collected into array
const nestedTag = tag.tags['test'];
if (nestedTag instanceof riot.Tag) {
    nestedTag.unmount();
} else if (nestedTag instanceof Array) {
    nestedTag.push(tag);
}

// Mixins
interface OptsMixin extends riot.TagMixin {
    getOpts(): any;
    setOpts(opts: any, update: boolean): OptsMixin;
}
const optsMixin: OptsMixin = {
    init() {
        this.on('updated', function() { console.log('Updated!') });
    },

    getOpts() {
        return this.opts;
    },

    setOpts(opts, update): OptsMixin {
        this.opts = opts;
        if (!update) this.update();
        return this;
    }
};
// mixin object
tag.mixin(optsMixin);
// register shared mixin
riot.mixin('optsMixin', optsMixin);
// use shared mixin
tag.mixin('optsMixin');
// register global mixin and add it to all tag instances
riot.mixin(optsMixin);
// using mixin in tag instances
abstract class TagWithOptsMixin extends riot.Tag implements OptsMixin {
    getOpts: () => any;
    setOpts: (opts: any, update: boolean) => this;
}
(<TagWithOptsMixin>tag).setOpts(mockOpts, true).getOpts();


// Manual construction
riot.tag('timer',
    '<p>Seconds Elapsed: { time }</p>',
    'timer { display: block; border: 2px }',
    'class="tic-toc"',
    function (opts) {
        var self = this;
        this.time = opts.start || 0;

        this.tick = function () {
            self.update({ time: ++self.time })
        };

        var timer = setInterval(this.tick, 1000);

        this.on('unmount', function () {
            clearInterval(timer)
        });
    });

// Observable
const cb = () => true;
// can create new observable object
riot.observable().on('test', cb);
// can add observable functionality to existing object
riot.observable({}).on('test', cb);
// all observable methods support fluent interface
riot.observable().on('test', cb).one('test', cb).off('test').off('test', cb)
    .trigger('test').trigger('test', 1, 'arg1').on('test', cb);
// tags are observable
tag.on('test', cb).one('test', cb).off('test').off('test', cb)
    .trigger('test').trigger('test', 1, 'arg1').unmount();


// Custom tag
class MyTag extends riot.Tag {
    public msg: string;
    constructor(el: Node) {
        super({ tmpl: MyTag.template() }, { root: el });
        this.msg = 'hello';
    }
    bye() {
        this.msg = 'goodbye';
    }
    static template() {
        return `<p onclick="{ bye }">{ msg }</p>`;
    }
}

new MyTag(document.getElementById('my-div')).bye();

// Router
// URL change callback
riot.route(function(collection, id, action) {
    console.log(collection + id + action);
});
// route with filter
riot.route('/fruit', function(name) {
    console.log('The list of fruits');
});
// query
riot.route('/search..', function() {
    var q = riot.route.query();
    console.log('Search keyword: ' + q['keyword'])
});
// new routing context
var subRoute = riot.route.create();
subRoute('/fruit/apple', function() { /* */ });
subRoute.stop();
// route to URL
riot.route('customers/267393/edit');
riot.route('customers/267393/edit', 'Editing customer page');
riot.route('not-found', 'Not found', true);
// start
riot.route.start();
riot.route.start(true);
// stop
riot.route.stop();
// exec
riot.route.exec();
riot.route.exec(cb);
// base
riot.route.base('/app');
// parser
const firstParser = function first(path: string): string[] {
    const raw = path.slice(2).split('?');
    return raw[0].split('/');
};
riot.route.parser(firstParser);
const secondParser = function second(path: string, filter: string): string[] {
    const re = new RegExp('^' + filter.replace(/\*/g, '([^/?#]+?)').replace(/\.\./, '.*') + '$');
    const args = path.match(re);
    if (args) {
        return args.slice(1);
    }
};
riot.route.parser(firstParser, secondParser);

// Compile
// compiling all tags
riot.compile(function() {
    riot.mount('*')
});
// compiling url
riot.compile('my/tags.tag', function() {
    // the loaded tags are ready to be used
});
// compiling tag definition
let compiled = riot.compile(`<my-tag><p>Hello, World!</p></my-tag>`);
console.log(compiled.charAt(0));
// compiling without execution
compiled = riot.compile(`<my-tag><p>Hello, World!</p></my-tag>`, true);
console.log(compiled.charAt(0));
