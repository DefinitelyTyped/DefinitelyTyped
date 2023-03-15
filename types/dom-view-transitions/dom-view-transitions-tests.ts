const updateCallback: () => Promise<void> | void = () => {};
const viewTransition = document.startViewTransition(updateCallback);
const finished: Promise<void> = viewTransition.finished;
const ready: Promise<void> = viewTransition.ready;
const updateCallbackdone: Promise<void> = viewTransition.updateCallbackDone;
viewTransition.skipTransition();
