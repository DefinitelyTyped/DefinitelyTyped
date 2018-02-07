function defaultCallback(result: string, components: [{ key: string, value: string }]) {
    console.log(`res: ${result}; components: ${components}`);
}

function test_default_settings() {
    const fingerprint = new Fingerprint2().get(defaultCallback);
}

function test_get_exclude_swfContainerId() {
    const fingerprint = new Fingerprint2({ swfContainerId: 'swfContainerId' }).get(defaultCallback);
}

function test_get_exclude_swfPath() {
    const fingerprint = new Fingerprint2({swfPath: 'pathToSwf'}).get(defaultCallback);
}

function test_get_exclude_userDefinedFonts() {
    const fingerprint = new Fingerprint2({ userDefinedFonts: ['font1', 'font2']}).get(defaultCallback);
}

function test_get_excludeUserAgent() {
    const fingerprint = new Fingerprint2({ excludeUserAgent: true }).get(defaultCallback);
}

function test_get_excludeLanguage() {
    const fingerprint = new Fingerprint2({ excludeLanguage: true }).get(defaultCallback);
}

function test_get_excludeColorDepth() {
    const fingerprint = new Fingerprint2({ excludeColorDepth: true }).get(defaultCallback);
}

function test_get_excludeScreenResolution() {
    const fingerprint = new Fingerprint2({ excludeScreenResolution: true }).get(defaultCallback);
}

function test_get_excludeTimezoneOffset() {
    const fingerprint = new Fingerprint2({ excludeTimezoneOffset: true }).get(defaultCallback);
}

function test_get_excludeSessionStorage() {
    const fingerprint = new Fingerprint2({ excludeSessionStorage: true }).get(defaultCallback);
}

function test_get_excludeIndexedDB() {
    const fingerprint = new Fingerprint2({ excludeIndexedDB: true }).get(defaultCallback);
}

function test_get_excludeAddBehavior() {
    const fingerprint = new Fingerprint2({ excludeAddBehavior: true }).get(defaultCallback);
}

function test_get_excludeOpenDatabase() {
    const fingerprint = new Fingerprint2({ excludeOpenDatabase: true }).get(defaultCallback);
}

function test_get_excludeCpuClass() {
    const fingerprint = new Fingerprint2({ excludeCpuClass: true }).get(defaultCallback);
}

function test_get_excludePlatform() {
    const fingerprint = new Fingerprint2({ excludePlatform: true }).get(defaultCallback);
}

function test_get_excludeDoNotTrack() {
    const fingerprint = new Fingerprint2({ excludeDoNotTrack: true }).get(defaultCallback);
}

function test_get_excludeCanvas() {
    const fingerprint = new Fingerprint2({ excludeCanvas: true }).get(defaultCallback);
}

function test_get_excludeWebGL() {
    const fingerprint = new Fingerprint2({ excludeWebGL: true }).get(defaultCallback);
}

function test_get_excludeAdBlock() {
    const fingerprint = new Fingerprint2({ excludeAdBlock: true }).get(defaultCallback);
}

function test_get_excludeHasLiedLanguages() {
    const fingerprint = new Fingerprint2({ excludeHasLiedLanguages: true }).get(defaultCallback);
}

function test_get_excludeHasLiedResolution() {
    const fingerprint = new Fingerprint2({ excludeHasLiedResolution: true }).get(defaultCallback);
}

function test_get_excludeHasLiedOs() {
    const fingerprint = new Fingerprint2({ excludeHasLiedOs: true }).get(defaultCallback);
}

function test_get_excludeHasLiedBrowser() {
    const fingerprint = new Fingerprint2({ excludeHasLiedBrowser: true }).get(defaultCallback);
}

function test_get_excludeJsFonts() {
    const fingerprint = new Fingerprint2({ excludeJsFonts: true }).get(defaultCallback);
}

function test_get_excludeFlashFonts() {
    const fingerprint = new Fingerprint2({ excludeFlashFonts: true }).get(defaultCallback);
}

function test_get_excludePlugins() {
    const fingerprint = new Fingerprint2({ excludePlugins: true }).get(defaultCallback);
}

function test_get_excludeIEPlugins() {
    const fingerprint = new Fingerprint2({ excludeIEPlugins: true }).get(defaultCallback);
}

function test_get_excludeTouchSupport() {
    const fingerprint = new Fingerprint2({ excludeTouchSupport: true }).get(defaultCallback);
}

function test_get_excludePixelRatio() {
    const fingerprint = new Fingerprint2({ excludePixelRatio: true }).get(defaultCallback);
}

function test_get_excludeHardwareConcurrency() {
    const fingerprint = new Fingerprint2({ excludeHardwareConcurrency: true }).get(defaultCallback);
}
