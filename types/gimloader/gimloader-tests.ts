GL; // $ExpectType typeof Api
api; // $ExpectType Api

new GL(); // $ExpectType Api

api.React; // $ExpectType typeof React
api.UI; // $ExpectType Readonly<ScopedUIApi>
api.hotkeys; // $ExpectType Readonly<ScopedHotkeysApi>
api.libs; // $ExpectType Readonly<LibsApi>
api.net; // $ExpectType Readonly<ScopedNetApi>
api.patcher; // $ExpectType Readonly<ScopedPatcherApi>
api.plugins; // $ExpectType Readonly<PluginsApi>
api.rewriter; // $ExpectType Readonly<ScopedRewriterApi>
api.storage; // $ExpectType Readonly<ScopedStorageApi>

GL.React; // $ExpectType typeof React
GL.UI; // $ExpectType Readonly<UIApi>
GL.hotkeys; // $ExpectType Readonly<HotkeysApi>
GL.libs; // $ExpectType Readonly<LibsApi>
GL.net; // $ExpectType Readonly<NetApi>
GL.patcher; // $ExpectType Readonly<PatcherApi>
GL.plugins; // $ExpectType Readonly<PluginsApi>
GL.rewriter; // $ExpectType Readonly<RewriterApi>
GL.storage; // $ExpectType Readonly<StorageApi>

// @ts-expect-error
GL.onStop;
// @ts-expect-error
GL.openSettingsMenu;
// @ts-expect-error
api.onStop();
// @ts-expect-error
api.openSettingsMenu();

api.UI.showModal(document.createElement("div"), {
    buttons: [
        { text: "Ok", onClick: () => {} },
        { text: "Ok", onClick: () => true },
    ],
});

api.patcher.before({}, "foo", () => {});
api.patcher.before({}, "foo", () => true);
GL.net.gamemode; // $ExpectType string
api.net.gamemode; // $ExpectType string
api.net.onLoad((type, gamemode) => {});
