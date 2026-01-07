const updateCallback: () => Promise<void> | void = () => {};
// $ExpectType ViewTransition
const viewTransition = document.startViewTransition(updateCallback);
// $ExpectType Promise<void>
const finished = viewTransition.finished;
// $ExpectType Promise<void>
const ready = viewTransition.ready;
// $ExpectType Promise<void>
const updateCallbackdone: Promise<void> = viewTransition.updateCallbackDone;
// $ExpectType void
viewTransition.skipTransition();
