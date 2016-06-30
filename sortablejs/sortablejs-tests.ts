// Examples from project repo used for tests.

/// <reference path="sortablejs.d.ts" />

var simpleList = document.getElementById('list');
var list = simpleList;
var el = document.getElementById('el');
var sortable = new Sortable(simpleList, {});
var order = sortable.toArray();
var angular: any;
var Ply: any;

sortable.sort(order.reverse());

Sortable.create(list, {
    delay: 500,
    chosenClass: "chosen"
});

Sortable.create(el, {
    handle: ".my-handle"
});

Sortable.create(list, {
    filter: ".js-remove, .js-edit",
    onFilter: function(event) {
        var item = event.item,
            control = event.target;

        if (Sortable.utils.is(control, ".js-remove")) {
            item.parentNode.removeChild(item);
        }
        else if (Sortable.utils.is(control, ".js-edit")) {
            // ..
        }
    }
});

Sortable.create(el, {
    group: "localStorage-example",
    store: {
        get: function(sortable) {
            var order = localStorage.getItem(sortable.options.group);

            return order ? order.split('|') : [];
        },
        set: function(sortable) {
            var order = sortable.toArray();

            localStorage.setItem(sortable.options.group, order.join('|'));
        }
    }
});

Sortable.create(simpleList, {
    forceFallback: true
});

Sortable.create(simpleList, {
    ghostClass: 'ghost'
});

simpleList.innerHTML = Array.apply(null, new Array(100)).map(function(value: any, iterator: number) {
    return `<div class="list-group-item">item ${iterator + 1}</div>`;
}).join('');

Sortable.create(simpleList, {
    delay: 500,
    chosenClass: 'chosen'
});

simpleList.innerHTML = Array.apply(null, new Array(10)).map(function(value: any, iterator: number) {
    return '<div class="list-group-item">item ' +
        (iterator + 1) +
        '</div>';
}).join('');

Sortable.create(simpleList, {});

simpleList.innerHTML = Array.apply(null, new Array(100)).map(function(value: any, iterator: number) {
    return '<div class="list-group-item">item ' +
        (iterator + 1) +
        '</div>';
}).join('');

(function() {
    'use strict';

    var byId = function(id: string) { return document.getElementById(id); },

        loadScripts = function(desc: any, callback: any) {
            var deps: string[] = [];
            var key: string;
            var idx = 0;

            for (key in desc) {
                deps.push(key);
            }

            (function _next() {
                var pid: number,
                    name = deps[idx],
                    script = document.createElement('script');

                script.type = 'text/javascript';
                script.src = desc[deps[idx]];

                document.getElementsByTagName('head')[0].appendChild(script);
            })()
        },

        console = window.console;


    if (!console.log) {
        console.log = function() {
            alert([].join.apply(arguments, ' '));
        };
    }


    Sortable.create(byId('foo'), {
        group: "words",
        animation: 150,
        store: {
            get: function(sortable) {
                var order = localStorage.getItem(sortable.options.group);
                return order ? order.split('|') : [];
            },
            set: function(sortable) {
                var order = sortable.toArray();
                localStorage.setItem(sortable.options.group, order.join('|'));
            }
        },
        onAdd: function(evt) { console.log('onAdd.foo:', [evt.item, evt.from]); },
        onUpdate: function(evt) { console.log('onUpdate.foo:', [evt.item, evt.from]); },
        onRemove: function(evt) { console.log('onRemove.foo:', [evt.item, evt.from]); },
        onStart: function(evt) { console.log('onStart.foo:', [evt.item, evt.from]); },
        onSort: function(evt) { console.log('onStart.foo:', [evt.item, evt.from]); },
        onEnd: function(evt) { console.log('onEnd.foo:', [evt.item, evt.from]); }
    });


    Sortable.create(byId('bar'), {
        group: "words",
        animation: 150,
        onAdd: function(evt) { console.log('onAdd.bar:', evt.item); },
        onUpdate: function(evt) { console.log('onUpdate.bar:', evt.item); },
        onRemove: function(evt) { console.log('onRemove.bar:', evt.item); },
        onStart: function(evt) { console.log('onStart.foo:', evt.item); },
        onEnd: function(evt) { console.log('onEnd.foo:', evt.item); }
    });


    // Multi groups
    Sortable.create(byId('multi'), {
        animation: 150,
        draggable: '.tile',
        handle: '.tile__name'
    });

    [].forEach.call(byId('multi').getElementsByClassName('tile__list'), function(el: any) {
        Sortable.create(el, {
            group: 'photo',
            animation: 150
        });
    });


    // Editable list
    var editableList = Sortable.create(byId('editable'), {
        animation: 150,
        filter: '.js-remove',
        onFilter: function(evt) {
            evt.item.parentNode.removeChild(evt.item);
        }
    });


    byId('addUser').onclick = function() {
        Ply.dialog('prompt', {
            title: 'Add',
            form: { name: 'name' }
        }).done(function(ui: any) {
            var el = document.createElement('li');
            el.innerHTML = ui.data.name + '<i class="js-remove">✖</i>';
            editableList.el.appendChild(el);
        });
    };


    // Advanced groups
    [{
        name: 'advanced',
        pull: true,
        put: true
    },
        {
            name: 'advanced',
            pull: 'clone',
            put: false
        }, {
            name: 'advanced',
            pull: false,
            put: true
        }].forEach(function(groupOpts, i) {
            Sortable.create(byId('advanced-' + (i + 1)), {
                sort: (i != 1),
                group: groupOpts,
                animation: 150
            });
        });


    // 'handle' option
    Sortable.create(byId('handle-1'), {
        handle: '.drag-handle',
        animation: 150
    });


    // Angular example
    angular.module('todoApp', ['ng-sortable'])
        .constant('ngSortableConfig', {
            onEnd: function() {
                console.log('default onEnd()');
            }
        })
        .controller('TodoController', ['$scope', function($scope: any) {
            $scope.todos = [
                { text: 'learn angular', done: true },
                { text: 'build an angular app', done: false }
            ];

            $scope.addTodo = function() {
                $scope.todos.push({ text: $scope.todoText, done: false });
                $scope.todoText = '';
            };

            $scope.remaining = function() {
                var count = 0;
                angular.forEach($scope.todos, function(todo: any) {
                    count += todo.done ? 0 : 1;
                });
                return count;
            };

            $scope.archive = function() {
                var oldTodos = $scope.todos;
                $scope.todos = [];
                angular.forEach(oldTodos, function(todo: any) {
                    if (!todo.done) $scope.todos.push(todo);
                });
            };
        }])
        .controller('TodoControllerNext', ['$scope', function($scope: any) {
            $scope.todos = [
                { text: 'learn Sortable', done: true },
                { text: 'use ng-sortable', done: false },
                { text: 'Enjoy', done: false }
            ];

            $scope.remaining = function() {
                var count = 0;
                angular.forEach($scope.todos, function(todo: any) {
                    count += todo.done ? 0 : 1;
                });
                return count;
            };

            $scope.sortableConfig = { group: 'todo', animation: 150 };
            'Start End Add Update Remove Sort'.split(' ').forEach(function(name: string) {
                $scope.sortableConfig['on' + name] = console.log.bind(console, name);
            });
        }]);
})();

// Background
document.addEventListener("DOMContentLoaded", function() {
    function setNoiseBackground(el: any, width: number, height: number, opacity: number) {
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");

        canvas.width = width;
        canvas.height = height;

        for (var i = 0; i < width; i++) {
            for (var j = 0; j < height; j++) {
                var val = Math.floor(Math.random() * 255);
                context.fillStyle = "rgba(" + val + "," + val + "," + val + "," + opacity + ")";
                context.fillRect(i, j, 1, 1);
            }
        }

        el.style.background = "url(" + canvas.toDataURL("image/png") + ")";
    }

    setNoiseBackground(document.getElementsByTagName('body')[0], 50, 50, 0.02);
}, false);
