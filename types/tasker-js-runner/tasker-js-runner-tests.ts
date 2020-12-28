import TaskerJs, { TaskerJsRunner, tk } from 'tasker-js-runner';

// $ExpectType { enter(locals: Local, tasker: TK): void; exit(locals: Local, tasker: TK): void; }
const module1: TaskerJsRunner.Module = {
    // $ExpectType (locals: Local, tasker: TK) => void
    enter(locals: TaskerJsRunner.Local, tasker: typeof tk) {},

    // $ExpectType (locals: Local, tasker: TK) => void
    exit(locals: TaskerJsRunner.Local, tasker: typeof tk) {}
};

// $ExpectError
const module2: TaskerJsRunner.Module = {
    // $ExpectError
    enter(locals: integer, tasker: typeof tk) {},
};

// $ExpectType TaskerJs
const taskerJs = new TaskerJs({
    Profile1: module1,
});

// $ExpectType Router
taskerJs.router;

// $ExpectType Promise<void>
taskerJs.hotReload();
