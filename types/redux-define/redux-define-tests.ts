import reduxDefine = require('redux-define');

const { defineAction } = reduxDefine;

{
    const CREATE_TODO = defineAction('CREATE_TODO', ['ERROR', 'SUCCESS'] as const);
    CREATE_TODO.toString(); // $ExpectType "CREATE_TODO"
    CREATE_TODO.ERROR; // $ExpectType "CREATE_TODO_ERROR"
    CREATE_TODO.SUCCESS; // $ExpectType "CREATE_TODO_SUCCESS"
}

{
    const todos = defineAction('todos', ['LOADING', 'SUCCESS'] as const, 'my-app');
    const CREATE_TODO = defineAction('CREATE_TODO', ['ERROR', 'SUCCESS'] as const, todos);
    CREATE_TODO.toString(); // $ExpectType "my-app/todos/CREATE_TODO"
    CREATE_TODO.ERROR; // $ExpectType "my-app/todos/CREATE_TODO_ERROR"
    CREATE_TODO.SUCCESS; // $ExpectType "my-app/todos/CREATE_TODO_SUCCESS"
}

{
    const CREATE_TODO = defineAction('CREATE_TODO', ['ERROR', 'SUCCESS'] as const);
    CREATE_TODO.toString(); // $ExpectType "CREATE_TODO"
    CREATE_TODO.ACTION; // $ExpectType "CREATE_TODO"
    CREATE_TODO.ERROR; // $ExpectType "CREATE_TODO_ERROR"
    CREATE_TODO.SUCCESS; // $ExpectType "CREATE_TODO_SUCCESS"
}

{
    const myApp = defineAction('my-app');
    const todos = myApp.defineAction('todos', ['LOADING', 'SUCCESS'] as const);
    const CREATE = todos.defineAction('CREATE', ['ERROR', 'SUCCESS'] as const);

    myApp.toString(); // $ExpectType "my-app"

    todos.toString(); // $ExpectType "my-app/todos"
    todos.LOADING; // $ExpectType "my-app/todos_LOADING"
    todos.SUCCESS; // $ExpectType "my-app/todos_SUCCESS"

    CREATE.toString(); // $ExpectType "my-app/todos/CREATE"
    CREATE.ERROR; // $ExpectType "my-app/todos/CREATE_ERROR"
    CREATE.SUCCESS; // $ExpectType "my-app/todos/CREATE_SUCCESS"
}

{
    const todos = defineAction('todos', ['LOADING', 'SUCCESS'] as const, 'my-app');
    const CREATE = todos.defineAction('CREATE', ['ERROR', 'SUCCESS'] as const, todos);

    todos.toString(); // $ExpectType "my-app/todos"
    todos.LOADING; // $ExpectType "my-app/todos_LOADING"
    todos.SUCCESS; // $ExpectType "my-app/todos_SUCCESS"

    CREATE.toString(); // $ExpectType "my-app/todos/CREATE"
    CREATE.ERROR; // $ExpectType "my-app/todos/CREATE_ERROR"
    CREATE.SUCCESS; // $ExpectType "my-app/todos/CREATE_SUCCESS"
}

{
    const todos = defineAction('todos', ['LOADING', 'SUCCESS'] as const, 'my-app');
    const CREATE = todos.defineAction('CREATE', ['ERROR', 'SUCCESS'] as const, 'my-app/todos');

    todos.toString(); // $ExpectType "my-app/todos"
    todos.LOADING; // $ExpectType "my-app/todos_LOADING"
    todos.SUCCESS; // $ExpectType "my-app/todos_SUCCESS"

    CREATE.toString(); // $ExpectType "my-app/todos/CREATE"
    CREATE.ERROR; // $ExpectType "my-app/todos/CREATE_ERROR"
    CREATE.SUCCESS; // $ExpectType "my-app/todos/CREATE_SUCCESS"
}
