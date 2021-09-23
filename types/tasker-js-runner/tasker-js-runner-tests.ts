import TaskerJs, { TaskerJsModule } from "tasker-js-runner";
import { TK as tasker } from "tasker-types";

// ExpectType tests
const notification: TaskerJsModule = {
    enter(locals: { [ name: string ]: string }, tasker: tasker) {},
    exit(locals: { [ name: string ]: string }, tasker: tasker) {}
};
// $ExpectType TaskerJs
const taskerJs = new TaskerJs({ 'Notification:All': notification });
// $ExpectType { [profileName: string]: TaskerJsModule; }
taskerJs.router;
// $ExpectType Promise<void>
taskerJs.hotReload();

// ExpectError test
// $ExpectError
let notificationError: TaskerJsModule = {};
// $ExpectError
notificationError = {
    enter(locals: { [ name: string ]: string }, tasker: tasker) {}
};
// $ExpectError
notificationError = {
    exit(locals: { [ name: string ]: string }, tasker: tasker) {}
};
notificationError = {
    // $ExpectError
    enter('foo') {},

    // $ExpectError
    exit('foo2') {}
};
