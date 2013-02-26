/// <reference path="sammyjs.d.ts" />

function test_general() {
    var app = Sammy('#main', function () {
        var _this: Sammy.Application;
        _this.use('Mustache');
        _this.get('#/', function () {
            var _this: Sammy.RenderContext;
            _this.load('posts.json')
                .renderEach('post.mustache')
                .swap();
        });
    });

    app.run('#/');

    var _this: Sammy.Application;
    _this.get('#/', function (context) {
        var _this: Sammy.RenderContext;
        _this.load('data/items.json')
            .then(function (items) {
                $.each(items, function (i, item) {
                    context.log(item.title, '-', item.artist);
                });
            });
    });
}

function test_app() {
    var s = new Sammy.Object({ first_name: 'Sammy', last_name: 'Davis Jr.' });
    s.toHTML();

    var app = $.sammy(function () {

        var current_user = false;
        function checkLoggedIn(callback) {
            var _this: Sammy.EventContext;
            if (!current_user) {
                $.getJSON('/session', function (json) {
                    if (json.login) {
                        current_user = json;
                        callback();
                    } else {
                        current_user = false;
                        _this.redirect('#/login');
                    }
                });
            } else {
                callback();
            }
        };
        var _this: Sammy.Application;
        _this.around(checkLoggedIn);
    });

    var app = $.sammy(function () {
        var _this: Sammy.Application;
        _this.before('#/route', function () { });
        _this.before({ except: { path: '#/route' } }, function () {
            _this.log('not before #/route');
        });
        _this.get('#/', function () { });
        _this.get('#/route', function () { });
    });

    var app = $.sammy(),
    context = { verb: 'get', path: '#/mypath' };

    app.contextMatchesOptions(context, '#/mypath');
    app.contextMatchesOptions(context, '#/otherpath');
    app.contextMatchesOptions(context, { only: { path: '#/mypath' } });
    app.contextMatchesOptions(context, { only: { path: '#/otherpath' } });
    app.contextMatchesOptions(context, /path/);
    app.contextMatchesOptions(context, /^path/);
    app.contextMatchesOptions(context, { only: { verb: 'get' } });
    app.contextMatchesOptions(context, { only: { verb: 'post' } });
    app.contextMatchesOptions(context, { except: { verb: 'post' } });
    app.contextMatchesOptions(context, { except: { verb: 'get' } });
    app.contextMatchesOptions(context, { except: { path: '#/otherpath' } });
    app.contextMatchesOptions(context, { except: { path: '#/mypath' } });
    app.contextMatchesOptions(context, { path: ['#/mypath', '#/otherpath'] });
    app.contextMatchesOptions(context, { path: ['#/otherpath', '#/thirdpath'] });
    app.contextMatchesOptions(context, { only: { path: ['#/mypath', '#/otherpath'] } });
    app.contextMatchesOptions(context, { only: { path: ['#/otherpath', '#/thirdpath'] } });
    app.contextMatchesOptions(context, { except: { path: ['#/mypath', '#/otherpath'] } });
    app.contextMatchesOptions(context, { except: { path: ['#/otherpath', '#/thirdpath'] } });

    var app = $.sammy(function (app) {
        var _this: Sammy.Application;
        $.each([1, 2, 3], function (i, num) {
            app.helper('helper' + num, function () {
                _this.log("I'm helper number " + num);
            });
        });
        _this.get('#/', function () {
        });
    });

    var app = $.sammy(function () {
        var _this: Sammy.Application;
        _this.helpers({
            upcase: function (text) {
                return text.toString().toUpperCase();
            }
        });
        _this.get('#/', function () {
            with (_this) {
                $('#main').html(upcase($('#main').text()));
            }
        });
    });

    var app = $.sammy(function () {
        var _this: Sammy.Application;
        _this.mapRoutes([
            ['get', '#/', function () { }],
            ['post', '#/create', 'addUser'],
            [/dowhatever/, function () { }]
        ]);
    });

    var app = $.sammy(function () { });
    $(function () {
        app.run();
    });

    var app = $.sammy(function () {
        var _this: Sammy.Application;
        _this.setLocationProxy(new Sammy.DataLocationProxy(_this));
    });

    var app = $.sammy(function () {
        var _this: Sammy.Application;
        _this.swap = function (content, callback) {
            var context = _this;
            context.$element().fadeOut('slow', function () {
                context.$element().html(content);
                context.$element().fadeIn('slow', function () {
                    if (callback) {
                        callback.apply();
                    }
                });
            });
        };
    });

    var MyPlugin = function (app, prepend) {
        var _this: Sammy.Application;
        _this.helpers({
            myhelper: function (text) {
                alert(prepend + " " + text);
            }
        });
    };
    var app = $.sammy(function () {
        var _this: Sammy.Application;
        _this.use(MyPlugin, '_this is my plugin');
        _this.get('#/', function () {
        });
    });

    $.sammy(function () {
        var _this: Sammy.Application;
        _this.use('Mustache');
        _this.use('Storage');
    });
}

function test_misc() {
    var app = $.sammy(function () {
        var _this: Sammy.Application;
        _this.setLocationProxy(new Sammy.DataLocationProxy(_this, 'location', 'rel'));
        _this.get('about', function () {
            var _this: Sammy.EventContext;
            _this.partial('about.html');
        });
    });

    $.sammy(function () {
        var _this: Sammy.Application;
        _this.get('#/:name', function () {
            if (_this.params['name'] == 'sammy') {
                _this.partial('name.html.erb', { name: 'Sammy' });
            } else {
                _this.redirect('#/somewhere-else')
            }
        });
    });

    var _this: Sammy.Application;
    _this.redirect('#/other/route');
    _this.redirect('#', 'other', 'route');
    _this.render('mytemplate.mustache', { name: 'quirkey' })
        .appendTo('ul');
    _this.renderEach('mytemplate.mustache', [{ name: 'quirkey' }, { name: 'endor' }]);

    var item = {
        name: 'My Item',
        price: '$25.50',
        meta: {
            id: '123'
        }
    };
    var form = new Sammy.FormBuilder('item', item);
    form.text('name');

    var options = [
        ['Small', 's'],
        ['Medium', 'm'],
        ['Large', 'l']
    ];
    form.select('size', options);

    $.sammy(function () {
        var _this: Sammy.Application;
        _this.use('GoogleAnalytics')
        _this.get('#/dont/track/me', function () {
            _this.noTrack();
        });
    });

    var app = $.sammy(function () {
        var _this: Sammy.Application;
        _this.use(Sammy.Haml);
        _this.get('#/hello/:name', function () {
            _this.title = 'Hello!'
            _this.name = _this.params.name;
            _this.partial('mytemplate.haml');
        });
    });
    app.run()

    var app = $.sammy(function () {
        var _this: Sammy.Application;
        _this.use('Handlebars', 'hb');
        _this.get('#/hello/:name', function () {
            _this.title = 'Hello!'
            _this.name = _this.params.name;
            _this.partial('mytemplate.hb');
        });
    });

    var app = $.sammy(function () {
        var _this: Sammy.Application;
        _this.use('Handlebars', 'hb');
        _this.get('#/hello/:name/to/:friend', function (context) {
            _this.load('mypartial.hb')
                .then(function (partial) {
                    context.partials = { hello_friend: partial };
                    context.name = context.params.name;
                    context.friend = context.params.friend;
                    context.partial('mytemplate.hb');
                });
        });
    });

    var app = $.sammy(function () {
        var _this: Sammy.Application;
        _this.use('Hogan', 'hg');
        _this.get('#/hello/:name', function () {
            _this.title = 'Hello!'
            _this.name = _this.params.name;
            _this.partial('mytemplate.hg');
        });
    });

    var app = $.sammy(function () {
        var _this: Sammy.Application;
        _this.use('Hogan', 'hg');
        _this.get('#/hello/:name/to/:friend', function (context) {
            _this.load('mypartial.hg')
                .then(function (partial) {
                    context.partials = { hello_friend: partial };
                    context.name = context.params.name;
                    context.friend = context.params.friend;
                    context.partial('mytemplate.hg');
                });
        });
    });

    var app = $.sammy(function () {
        var _this: Sammy.Application;
        _this.use(Sammy.JSON);
        _this.get('#/', function () {
            _this.json({ user_id: 123 });
            _this.json("{\"user_id\":\"123\"}");
            _this.json("{\"user_id\":\"123\"}").user_id;
        });
    })

    var app = $.sammy(function () {
        var _this: Sammy.Application;
        _this.use('Mustache', 'ms');
        _this.get('#/hello/:name', function () {
            _this.title = 'Hello!'
            _this.name = _this.params.name;
            _this.partial('mytemplate.ms');
        });
    });

    var app = $.sammy(function () {
        var _this: Sammy.Application;
        _this.use('Mustache', 'ms');
        _this.get('#/hello/:name/to/:friend', function (context) {
            _this.load('mypartial.ms')
                .then(function (partial) {
                    context.partials = { hello_friend: partial };
                    context.name = context.params.name;
                    context.friend = context.params.friend;
                    context.partial('mytemplate.ms');
                });
        });
    });

    var app = $.sammy(function (app) {
        var _this: Sammy.Application;
        _this.use(Sammy.NestedParams);
        _this.post('#/parse_me', function (context) {
            $.log(_this.params);
        });
    });

    var _this: Sammy.Application;
    _this.use('Storage');
    _this.use('OAuth2');
    _this.oauthorize = "/oauth/authorize";
    _this.requireOAuth();
    _this.requireOAuth("/private");
    _this.before(function (context) { return context.requireOAuth(); })
    _this.get("/private", function (context) {
        _this.requireOAuth(function () { });
    });
    _this.bind("oauth.connected", function () { $("#signin").hide() });
    _this.bind("oauth.disconnected", function () { $("#signin").show() });
    _this.bind("oauth.denied", function (evt, error) {
        _this.partial("admin/views/no_access.tmpl", { error: error.message });
    });
    _this.get("#/signout", function (context) {
        context.loseAccessToken();
        context.redirect("#/");
    });

    _this.get('#/', function () {
        _this.render('mytemplate.template', { name: 'test' });
    });

    _this.send($.getJSON, '/app.json')
        .then(function (json) {
            $('#message').text(json['message']);
        }
    );

    _this.get('#/', function () {
        _this.load('myfile.txt')
            .then(function (content) {
                $('#main').html(content);
            });
    });

    _this.get('#/', function () {
        _this.load('mytext.json')
            .then(function (content) {
              var context = _this,
                  data = JSON.parse(content);
                context.wait();
                $.post(data.url, {}, function (response) {
                    context.next(JSON.parse(response));
                });
            })
            .then(function (data) {
                $('#message').text(data.status);
            });
    });

    var store = new Sammy.Store({ name: 'mystore', element: '#element', type: 'local' });
    store.set('foo', 'bar');
    store.get('foo');
    store.set('json', { obj: '_this is an obj' });
    store.get('json');
    store.keys();
    store.clear('foo');
    store.keys();
    store.clearAll();
    store.keys();

    store.each(function (key, value) {
        Sammy.log('key', key, 'value', value);
    });
    var store = new Sammy.Store;
    store.exists('foo');
    store.fetch('foo', function () {
        return 'bar!';
    });
    store.get('foo');
    store.fetch('foo', function () {
        return 'baz!';
    });

    var store = new Sammy.Store;
    store.set('one', 'two');
    store.set('two', 'three');
    store.set('1', 'two');
    var returned = store.filter(function (key, value) {
        return value === 'two';
    });

    var store = new Sammy.Store;
    store.load('mytemplate', '/mytemplate.tpl', function () {
        s.get('mytemplate')
    });

    var store = new Sammy.Store({ name: 'kvo' });
    $('body').bind('set-kvo-foo', function (e, data) {
        Sammy.log(data.key + ' changed to ' + data.value);
    });
    store.set('foo', 'bar');

    $.sammy(function () {
        _this.use('Template');
        _this.get('#/', function () {
            _this.user = { name: 'Aaron Quint' };
            _this.partial('user.template');
        })
    });

    _this.use(Sammy.Template, 'tpl');
    _this.get('#/', function () {
        _this.partial('myfile.tpl');
    });
    _this.get('#/', function () {
        _this.template('myform.tpl', { form: "<form></form>" }, { escape_html: false });
    });
}

function test_routes() {
    var _this: Sammy.Application;

    _this.route('get', '#/', function () {
    });
    _this.put('#/post/form', function () {
        return false;
    });
    _thisget('/test/123', function () {
    });

    _thisget('#/by_name/:name', function () {
        alert(_this.params['name']);
    });
    _thisget(/\#\/by_name\/(.*)/, function () {
        alert(_this.params['splat']);
    });
    _thisget('#/by_name/:name', function () {
        _this.redirect('#', _this.params['name']);
    });

    _thisget('#/by_name/:name', function (context) {
        context.redirect('#', _this.params['name']);
    });
}

function test_events() {
    var _this: Sammy.Application;

    _this.bind('db-loaded', function (e, data) {
        var _this: Sammy.EventContext;
        _this.redirect('#/');
    });

    var app = $.sammy(function () {
        var _this: Sammy.Application;
        _this.bind('test', function () {
            var _this: Sammy.EventContext;
            _this.trigger('other-event');
        });
    });
    app.trigger('other-event');

    var app = $.sammy(function () {
        var _this: Sammy.Application;
        _this.bind('test', function (e, data) {
            alert(data['my_data']);
        });
        _this.get('#/', function () {
            _this.trigger('test', { my_data: 'EVENTED!' });
        });
    });
}

function test_plugins() {
    var MyPlugin = function (app) {
        var _this: Sammy.Application;
        _this.helpers({
            alert: function (message) {
                _this.log("ALERT! " + message);
            }
        });
    };
    var app = $.sammy(function () {
        var _this: Sammy.Application;
        _this.use(MyPlugin);
        _this.get('#/', function () {
            var _this: Sammy.EventContext;
            _this.alert("I'm home");
        });
    });
    var MyAdvancedPlugin = function (app, prefix, suffix) {
        var _this: Sammy.Application;
        _this.helpers({
            alert: function (message) {
                _this.log(prefix, message, suffix);
            }
        });
    };

    var app = $.sammy(function () {
        var _this: Sammy.Application;
        _this.use(MyAdvancedPlugin, 'BEFORE!', 'AFTER!');
        _this.get('#/', function () {
            _this.alert("I'm home");
        });
    });

    var dbLoadAndDisplay = function (app) {
        var _this: Sammy.Application;
        _this.get('#/', function () {
            _this.record = _this.app.db[_this.app.element_selector];
            _this.app.swap(_this.record.toHTML());
        });
        _this.bind('run', function () {
        });
    };

    var app1 = Sammy('#div_1', function () {
        _this.use(dbLoadAndDisplay);
    });

    var app2 = Sammy('#div_2', function () {
        _this.use(dbLoadAndDisplay);
    });
}