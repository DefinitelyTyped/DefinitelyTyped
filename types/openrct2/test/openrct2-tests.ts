function main() {
    console.log("Plugin not available on headless mode."); // $ExpectType void
    ui.getWindow(0); // $ExpectType Window
    ui.closeAllWindows(); // $ExpectType void
    park.cash += 10000;
}

// $ExpectType void
registerPlugin({
    name: 'DevTools',
    version: '1.0',
    authors: ['OpenRCT2'],
    type: 'local',
    licence: 'MIT',
    main
});
