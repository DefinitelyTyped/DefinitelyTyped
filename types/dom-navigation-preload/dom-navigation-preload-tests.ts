// This throws a TypeError at runtime, but TypeScript should probably allow it.
new NavigationPreloadManager();

navigator.serviceWorker.ready.then(async registration => {
    await registration.navigationPreload.enable();
    await registration.navigationPreload.disable();

    await registration.navigationPreload.setHeaderValue('test');

    const state = await registration.navigationPreload.getState();
    console.log(state.enabled);
    console.log(state.headerValue);
});
