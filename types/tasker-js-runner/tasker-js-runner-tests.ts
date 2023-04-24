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
// @ts-expect-error
let notificationError: TaskerJsModule = {};
// @ts-expect-error
notificationError = {
    enter(locals: { [ name: string ]: string }, tasker: tasker) {}
};
// @ts-expect-error
notificationError = {
    exit(locals: { [ name: string ]: string }, tasker: tasker) {}
};
notificationError = {
    enter(foo) {},

    exit(foo2) {}
};
