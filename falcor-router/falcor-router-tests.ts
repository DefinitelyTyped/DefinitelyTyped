

import falcor = require('falcor');
import Router = require('falcor-router');
import falcorJsonGraph = require('falcor-json-graph');

new Router([]);
new Router([], {});
new Router([], {debug: true});
new Router([], {maxPaths: 10});
new Router([], {maxRefFollow: 10});
new Router([{route: "greeting", get: () =>({path:["greeting"], value: "Hello World"})}]);

new falcor.Model({source: new Router([])});

class MyRouter extends Router.createClass([]) {
    constructor() {
        super({debug: true, maxPaths: 10, maxRefFollow: 10});
    }
}
new falcor.Model({source: new MyRouter()});

new Router([{
    route: 'todos.length',
    get() {
        return {path: 'todos.length', value: 10};
    },
}]);

new Router([{
    route: 'todos.length',
    get() {
        return [{path: 'todos.length', value: 10}];
    },
}]);

new Router([{
    route: 'todos.length',
    get() {
        return {json: { todos: {length : 10}}};
    }
}]);

new Router([{
    route: 'todos.length',
    get() {
        return new Promise<falcor.PathValue>(resolve => {
            resolve({path: 'todos.length', value: 10});
        });
    },
}]);

new Router([{
    route: 'todos.length',
    get() {
        return new Promise<falcor.PathValue[]>(resolve => {
            resolve([{path: 'todos.length', value: 10}]);
        });
    },
}]);

new Router([{
    route: 'todos.length',
    get() {
        return new Promise<falcor.JSONEnvelope<any>>(resolve => {
            resolve({json: { todos: {length : 10}}});
        });
    }
}]);

new Router([{
    route: 'todos[{integers:indicies}]',
    get(pathset: Router.RoutePathSet & {indicies: number[]}) {
        return pathset.indicies.map(idx => {
            const id = 'id' + idx;
            return {
                path: `todos[${idx}]`,
                value: {
                    $type: 'ref',
                    value: `todosById.${id}`
                }
            }
        });
    }
}]);

new Router([{
    route: 'todos[{integers:number}]',
    set(jsonGraph) {
        return {json: jsonGraph};
    }
}]);

new Router([{
    route: 'todos.push',
    call(callpath, args) {
        return [
            {path: 'json.todos.length', value: 11},
            {path: 'json.todos[10].name', value: args[0].name}
        ];
    }
}]);

new Router([{
    route: 'todos.new',
    call(callpath, args) {
      return {path: 'json.todosById.1234.name', value: 'Buy cheese'};
    }
}]);

new Router([{
    route: 'todos.new',
    call(callpath, args) {
      return falcorJsonGraph.pathInvalidation('json.todos.length');
    }
}]);

new Router([{
    route: 'todos.new',
    call(callpath, args) {
      return [
        falcorJsonGraph.pathInvalidation('json.todos.length'),
        {path: 'json.todosById.1234.name', value: 'Buy cheese'}
      ]
    }
}]);

new Router([{
    route: 'todos.new',
    call(callpath, args) {
      return new Promise((resolve, reject): void => {
        resolve([
          falcorJsonGraph.pathInvalidation('json.todos.length'),
          {path: 'json.todosById.1234.name', value: 'Buy cheese'}
        ]);
      });
    }
}]);

new Router([{
    route: 'todos.new',
    call(callpath, args) {
      return {
          paths: [['json', 'todosById', '1234', 'name']],
          jsonGraph: {
              json: {
                  todosById: {
                      1234: {
                          name: 'Buy cheese'
                      }
                  }
              }
          }
      };
    }
}]);

new Router([{
    route: 'todos.new',
    call(callpath, args) {
      return new Promise((resolve, reject): void => {
          resolve({
              paths: [['json', 'todosById', '1234', 'name']],
              jsonGraph: {
                  json: {
                      todosById: {
                          1234: {
                              name: 'Buy cheese'
                          }
                      }
                  }
              }
          });
      });
    }
}]);
