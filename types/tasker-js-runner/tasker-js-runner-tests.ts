import TaskerJs from "tasker-js-runner";
import { TK as tasker } from "tasker-types";

const notification = {
    enter(locals: { [ name: string ]: string }, tasker: tasker) {
        const content = `${locals.anapp} ${locals.antitle}`;

        tasker.setClip(content, false);

        tasker.flash('content');
    },

    exit(locals: { [ name: string ]: string }, tasker: tasker) {}
  };

// $ExpectType TaskerJs
const taskerJs = new TaskerJs({ 'Notification:All': notification });

// $ExpectType { [profileName: string]: object; }
taskerJs.router;

// $ExpectType Promise<void>
taskerJs.hotReload();

// $ExpectError
const taskerJsError = new TaskerJs({ 'Notification:All': 'test' });
