import reduxDefine = require('redux-define');

const { defineAction } = reduxDefine;

{
    const CREATE_TODO = defineAction('CREATE_TODO', ['ERROR', 'SUCCESS']);
    CREATE_TODO.toString(); // $ExpectType "CREATE_TODO"
    CREATE_TODO.ERROR; // $ExpectType "CREATE_TODO_ERROR"
    CREATE_TODO.SUCCESS; // $ExpectType "CREATE_TODO_SUCCESS"
}

{
    const todos = defineAction('todos', ['LOADING', 'SUCCESS'], 'my-app');
    const CREATE_TODO = defineAction('CREATE_TODO', ['ERROR', 'SUCCESS'], todos);
    CREATE_TODO.toString(); // $ExpectType "my-app/todos/CREATE_TODO"
    CREATE_TODO.ERROR; // $ExpectType "my-app/todos/CREATE_TODO_ERROR"
    CREATE_TODO.SUCCESS; // $ExpectType "my-app/todos/CREATE_TODO_SUCCESS"
}

{
    const CREATE_TODO = defineAction('CREATE_TODO', ['ERROR', 'SUCCESS']);
    CREATE_TODO.toString(); // $ExpectType "CREATE_TODO"
    CREATE_TODO.ACTION; // $ExpectType "CREATE_TODO"
    CREATE_TODO.ERROR; // $ExpectType "CREATE_TODO_ERROR"
    CREATE_TODO.SUCCESS; // $ExpectType "CREATE_TODO_SUCCESS"
}

{
    const myApp = defineAction('my-app');
    const todos = myApp.defineAction('todos', ['LOADING', 'SUCCESS']);
    const CREATE = todos.defineAction('CREATE', ['ERROR', 'SUCCESS']);

    myApp.toString(); // $ExpectType "my-app"

    todos.toString(); // $ExpectType "my-app/todos"
    todos.LOADING; // $ExpectType "my-app/todos_LOADING"
    todos.SUCCESS; // $ExpectType "my-app/todos_SUCCESS"

    CREATE.toString(); // $ExpectType "my-app/todos/CREATE"
    CREATE.ERROR; // $ExpectType "my-app/todos/CREATE_ERROR"
    CREATE.SUCCESS; // $ExpectType "my-app/todos/CREATE_SUCCESS"
}

{
    const todos = defineAction('todos', ['LOADING', 'SUCCESS'], 'my-app');
    const CREATE = todos.defineAction('CREATE', ['ERROR', 'SUCCESS'], todos);

    todos.toString(); // $ExpectType "my-app/todos"
    todos.LOADING; // $ExpectType "my-app/todos_LOADING"
    todos.SUCCESS; // $ExpectType "my-app/todos_SUCCESS"

    CREATE.toString(); // $ExpectType "my-app/todos/CREATE"
    CREATE.ERROR; // $ExpectType "my-app/todos/CREATE_ERROR"
    CREATE.SUCCESS; // $ExpectType "my-app/todos/CREATE_SUCCESS"
}

{
    const todos = defineAction('todos', ['LOADING', 'SUCCESS'], 'my-app');
    const CREATE = todos.defineAction('CREATE', ['ERROR', 'SUCCESS'], 'my-app/todos');

    todos.toString(); // $ExpectType "my-app/todos"
    todos.LOADING; // $ExpectType "my-app/todos_LOADING"
    todos.SUCCESS; // $ExpectType "my-app/todos_SUCCESS"

    CREATE.toString(); // $ExpectType "my-app/todos/CREATE"
    CREATE.ERROR; // $ExpectType "my-app/todos/CREATE_ERROR"
    CREATE.SUCCESS; // $ExpectType "my-app/todos/CREATE_SUCCESS"
}

// Tests for usage of Action type

type MyActionWithSubActions = reduxDefine.Action<'TEST', 'A' | 'B'>;
declare const MyActionWithSubActions: MyActionWithSubActions;
MyActionWithSubActions.toString(); // $ExpectType "TEST"
MyActionWithSubActions.A; // $ExpectType "TEST_A"
MyActionWithSubActions.B; // $ExpectType "TEST_B"

type MyActionWithNamespace = reduxDefine.Action<'TEST', undefined, 'FOO'>;
declare const myActionWithNamespace: MyActionWithNamespace;
myActionWithNamespace.toString(); // $ExpectType "FOO/TEST"

type MyActionWithSubActionsAndNamespace = reduxDefine.Action<'TEST', 'A' | 'B', 'FOO'>;
declare const myActionWithSubactionsAndNamespace: MyActionWithSubActionsAndNamespace;
myActionWithSubactionsAndNamespace.toString(); // $ExpectType "FOO/TEST"
myActionWithSubactionsAndNamespace.A; // $ExpectType "FOO/TEST_A"
myActionWithSubactionsAndNamespace.B; // $ExpectType "FOO/TEST_B"
