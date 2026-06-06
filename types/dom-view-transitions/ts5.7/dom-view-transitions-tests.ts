const updateCallback: () => Promise<void> | void = () => {};
// $ExpectType ViewTransition
const viewTransition = document.startViewTransition(updateCallback);
// $ExpectType Promise<undefined>
const finished = viewTransition.finished;
// $ExpectType Promise<undefined>
const ready = viewTransition.ready;
// $ExpectType Promise<undefined>
const updateCallbackdone: Promise<void> = viewTransition.updateCallbackDone;
// $ExpectType void
viewTransition.skipTransition();
