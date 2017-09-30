import * as riot from 'riot';

// version
console.log(riot.version.charAt(0));

// settings
riot.settings.brackets = '[% %]';
riot.settings.skipAnonymousTags = false;
riot.settings.autoUpdate = false;
riot.settings.asyncRenderTimeout = 100500;

// util.tmpl
riot.util.tmpl.errorHandler = (err: riot.TemplateError) => {
    console.error(`${err.message} in ${err.riotData.tagName}`);
};

// util.vdom
console.log(riot.util.vdom[0].isMounted);

const mockOpts = {
    foo: true,
    bar: 1,
    baz: [1, '2', [3]]
};

const tag = riot.mount('test')[0];

// Mounting
// mount all custom tags with a class name .customer
const tags: riot.TagInstance[] = riot.mount('.customer');
console.log(tags.length);
// mount <account> tag and pass an object as options
riot.mount('account', mockOpts);
// mounts custom tag "my-tag" to div#main with some options
riot.mount('div#main', 'my-tag', mockOpts);
// mounts "users" tag to #slide node and some options
riot.mount(document.getElementById('slide') as Element, 'users', mockOpts);
// unregister the tag
riot.unregister('test-tag');

// Rendering
console.log(riot.render('test', mockOpts).substr(0, 10));
riot.require('./my-tag.jade', { template: 'jade' }).charAt(10);
riot.renderAsync('my-tag', { message: 'test' }).then(html => html.substr(0, 100));

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
    getOpts(this: riot.TagInterface & OptsMixin): any;

    setOpts(this: riot.TagInterface & OptsMixin, opts: any, update: boolean): this;
}

const optsMixin: OptsMixin = {
    init() {
        this.on('updated', (data: any[]) => console.log(data));
    },

    getOpts() {
        return this.opts;
    },

    setOpts(opts, update) {
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
interface TagWithOptsMixin extends riot.TagInterface, OptsMixin {
}

(tag as TagWithOptsMixin).setOpts(mockOpts, true).getOpts();

interface TimerTag extends riot.TagInterface {
    opts: {
        start: number;
    };
    time: number;
    timer: number;
    tick(): void;
}

// Manual construction
riot.tag<TimerTag>('timer',
    '<p>Seconds Elapsed: { time }</p>',
    'timer { display: block; border: 2px }',
    'class="tic-toc"',
    function() {
        this.time = this.opts.start || 0;

        this.tick = () => {
            this.update({ time: ++this.time });
        };

        const timer = setInterval(this.tick, 1000);

        this.on('unmount', () => clearInterval(timer));
    });

// Template-less tag construction
riot.tag<TimerTag>('timer', false, function() {
    this.time = 0;
});

// Observable
const cb = () => null;
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
    msg: string;

    bye() {
        this.msg = 'goodbye';
    }
}

new MyTag(document.getElementById('my-div') as Element).bye();

// Compile
// compiling all tags
riot.compile(() => riot.mount('*'));
// compiling url
riot.compile('my/tags.tag', () => {
    // the loaded tags are ready to be used
});
// compiling tag definition
let compiled = riot.compile(`<my-tag><p>Hello, World!</p></my-tag>`);
console.log(compiled.charAt(0));
// compiling without execution
compiled = riot.compile(`<my-tag><p>Hello, World!</p></my-tag>`, true);
console.log(compiled.charAt(0));
