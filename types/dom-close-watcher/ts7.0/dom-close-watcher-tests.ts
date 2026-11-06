const closeWatcher1 = new CloseWatcher();
closeWatcher1.requestClose();
closeWatcher1.close();
closeWatcher1.destroy();
closeWatcher1.onclose = (ev: Event) => {};
closeWatcher1.oncancel = (ev: Event) => {};
closeWatcher1.onclose = null;
closeWatcher1.oncancel = null;
closeWatcher1.addEventListener("close", () => {});
closeWatcher1.addEventListener("cancel", () => {});
closeWatcher1.removeEventListener("close", () => {});
closeWatcher1.removeEventListener("cancel", () => {});
closeWatcher1.dispatchEvent(new Event("close"));

const closeWatcher2 = new CloseWatcher({});

const abortController = new AbortController();
const closeWatcher3 = new CloseWatcher({ signal: abortController.signal });

// @ts-expect-error
const closeWatcher4 = new CloseWatcher({ unknown: true });
