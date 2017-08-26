function test_activityDefaults() {
    ko.bindingHandlers.activity.defaultOptions = {
        activityClass: 'fa fa-spinner fa-spin',
        container: 'i',
        inactiveClass: ''
    };

    ko.bindingHandlers.activity.defaultOptions = {
        activityClass: 'some Value'
    };

    ko.bindingHandlers.activity.defaultOptions = {
    };
}
function test_asyncCommand() {
    var saveCmd = ko.asyncCommand({
        execute: function (complete) {
            $.when().always(complete);
        },
        canExecute: function (isExecuting) {
            return !isExecuting;
        }
    });
    this.saveCommand = ko.asyncCommand({
        execute: function (callback) {
            $.ajax({
                complete: callback,
                data: { name: this.name() },
                type: 'POST',
                url: '/save/',

                success: function (result) {
                    alert('Name saved:' + result)
                }
            })
        },
        canExecute: function (isExecuting) {
            return !isExecuting && this.name()
        }
    });
}

function test_asyncCommand_isExecuting() {
    var primaryCommand = ko.asyncCommand({
        execute: (complete) => {
            $.when().always(complete);
        },
        canExecute: (isExecuting) => {
            return !isExecuting;
        }
    });

    var firstRun = true;
    var canCancel = ko.computed(() => {
        return firstRun && !primaryCommand.isExecuting();
    });
}

function test_dirtyFlag() {
    var viewModel: any;
    viewModel.dirtyFlag = new ko.DirtyFlag(viewModel.model);
    viewModel.dirtyFlag().isDirty();
    viewModel.dirtyFlag().reset();

    var self: any;
    this.dirtyFlag = new ko.DirtyFlag(
       self.firstName,
       self.lastName);
    var isDirty = ko.computed(function () {
    });

    var Person = function () {
        var self = this;

        self.id = ko.observable();
        self.firstName = ko.observable().extend({ required: true });
        self.lastName = ko.observable().extend({ required: true });
        self.dirtyFlag = new ko.DirtyFlag([self.firstName, self.lastName]);

        return self;
    };
}

function test_full() {
    (function (ko) {
        ko.command = function (options) {
            var
                self = ko.observable(),
                canExecuteDelegate = options.canExecute,
                executeDelegate = options.execute;
            self.canExecute = ko.computed(function () {
                return canExecuteDelegate ? canExecuteDelegate() : true;
            });
            self.execute = function (arg1, arg2) {
                if (!self.canExecute()) return;
                executeDelegate.apply(this, [arg1, arg2]);
            };
            return self;
        };

        ko.asyncCommand = function (options) {
            var
                self = ko.observable(),
                canExecuteDelegate = options.canExecute,
                executeDelegate = options.execute,
                completeCallback = function () {
                    self.isExecuting(false);
                };
            self.isExecuting = ko.observable();
            self.canExecute = ko.computed(function () {
                return canExecuteDelegate ? canExecuteDelegate(self.isExecuting()) : !self.isExecuting();
            });
            self.execute = function (arg1, arg2) {
                if (!self.canExecute()) return;
                var args = [];
                if (executeDelegate.length >= 2) {
                    args.push(arg1);
                }
                if (executeDelegate.length >= 3) {
                    args.push(arg2);
                }
                args.push(completeCallback);
                self.isExecuting(true);
                executeDelegate.apply(this, args);
            };
            return self;
        };
    })(ko as any);
    (function (ko) {
        ko.utils.wrapAccessor = function (accessor) {
            return function () {
                return accessor;
            };
        };
        ko.bindingHandlers.command = {
            init: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                var
                    value = valueAccessor(),
                    commands = value.execute ? { click: value } : value,
                    isBindingHandler = function (handler) {
                        return ko.bindingHandlers[handler] !== undefined;
                    },
                    initBindingHandlers = function () {
                        for (var command in commands) {
                            if (!isBindingHandler(command)) {
                                continue;
                            };
                            ko.bindingHandlers[command].init(
                                element,
                                ko.utils.wrapAccessor(commands[command].execute),
                                allBindingsAccessor,
                                viewModel
                            );
                        }
                    },
                    initEventHandlers = function () {
                        var events = {};
                        for (var command in commands) {
                            if (!isBindingHandler(command)) {
                                events[command] = commands[command].execute;
                            }
                        }
                        ko.bindingHandlers.event.init(
                            element,
                            ko.utils.wrapAccessor(events),
                            allBindingsAccessor,
                            viewModel);
                    };
                initBindingHandlers();
                initEventHandlers();
            },
            update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                var commands = valueAccessor();
                var canExecute = commands.canExecute;
                if (!canExecute) {
                    for (var command in commands) {
                        if (commands[command].canExecute) {
                            canExecute = commands[command].canExecute;
                            break;
                        }
                    }
                }
                if (!canExecute) {
                    return;
                }
                ko.bindingHandlers.enable.update(element, canExecute, allBindingsAccessor, viewModel);
            }
        };
    })(ko as any);

    var my: any = {};
    my.TwitterService = function () {
        var me = this,
            twitterUrl = 'https://api.twitter.com/1/statuses/user_timeline/{name}.json?callback=?&count={count}'
        me.getTweets = function (options) {
        }
    }
    my.TweetsViewModel = function () {
        var me = this,
            service = new my.TwitterService()
        me.name = ko.observable('hfjallemark');
        me.tweets = ko.observableArray();
        me.showKeyCodeCommand = ko.command({
            execute: function (data, e) {
            }
        });
        me.loadTweetsCommand = ko.asyncCommand({
            execute: function (complete) {
                service.getTweets({
                    always: complete,
                    count: 15,
                    name: me.name(),
                    done: function (result) {
                        me.tweets(result);
                    },
                    fail: function (options, status) {
                    }
                })
            }
        })
    }
    ko.applyBindings(new my.TweetsViewModel());
}