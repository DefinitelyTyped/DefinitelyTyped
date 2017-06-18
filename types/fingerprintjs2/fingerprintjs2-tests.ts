function defaultCallback(result: string, components: [{ key: string, value: string }]) {
    console.log(`res: ${result}; components: ${components}`);
}

function test_default_settings() {
    let fingerprint = new Fingerprint2().get( defaultCallback);
}

function test_get_exclude_swfContainerId() {
    let fingerprint = new Fingerprint2({ swfContainerId: 'swfContainerId' }).get(defaultCallback);
}

function test_get_exclude_swfPath() {
    let fingerprint = new Fingerprint2({swfPath: 'pathToSwf'}).get(defaultCallback);
}

function test_get_exclude_userDefinedFonts() {
    let fingerprint = new Fingerprint2({ userDefinedFonts: ['font1', 'font2']}).get(defaultCallback);
}

function test_get_excludeUserAgent() {
    let fingerprint = new Fingerprint2({ excludeUserAgent: true }).get(defaultCallback);
}

function test_get_excludeLanguage() {
    let fingerprint = new Fingerprint2({ excludeLanguage: true }).get(defaultCallback);
}

function test_get_excludeColorDepth() {
    let fingerprint = new Fingerprint2({ excludeColorDepth: true }).get(defaultCallback);
}

function test_get_excludeScreenResolution() {
    let fingerprint = new Fingerprint2({ excludeScreenResolution: true }).get(defaultCallback);
}

function test_get_excludeTimezoneOffset() {
    let fingerprint = new Fingerprint2({ excludeTimezoneOffset: true }).get(defaultCallback);
}

function test_get_excludeSessionStorage() {
    let fingerprint = new Fingerprint2({ excludeSessionStorage: true }).get(defaultCallback);
}

function test_get_excludeIndexedDB() {
    let fingerprint = new Fingerprint2({ excludeIndexedDB: true }).get(defaultCallback);
}

function test_get_excludeAddBehavior() {
    let fingerprint = new Fingerprint2({ excludeAddBehavior: true }).get(defaultCallback);
}

function test_get_excludeOpenDatabase() {
    let fingerprint = new Fingerprint2({ excludeOpenDatabase: true }).get(defaultCallback);
}

function test_get_excludeCpuClass() {
    let fingerprint = new Fingerprint2({ excludeCpuClass: true }).get(defaultCallback);
}

function test_get_excludePlatform() {
    let fingerprint = new Fingerprint2({ excludePlatform: true }).get(defaultCallback);
}

function test_get_excludeDoNotTrack() {
    let fingerprint = new Fingerprint2({ excludeDoNotTrack: true }).get(defaultCallback);
}

function test_get_excludeCanvas() {
    let fingerprint = new Fingerprint2({ excludeCanvas: true }).get(defaultCallback);
}

function test_get_excludeWebGL() {
    let fingerprint = new Fingerprint2({ excludeWebGL: true }).get(defaultCallback);
}

function test_get_excludeAdBlock() {
    let fingerprint = new Fingerprint2({ excludeAdBlock: true }).get(defaultCallback);
}

function test_get_excludeHasLiedLanguages() {
    let fingerprint = new Fingerprint2({ excludeHasLiedLanguages: true }).get(defaultCallback);
}

function test_get_excludeHasLiedResolution() {
    let fingerprint = new Fingerprint2({ excludeHasLiedResolution: true }).get(defaultCallback);
}

function test_get_excludeHasLiedOs() {
    let fingerprint = new Fingerprint2({ excludeHasLiedOs: true }).get(defaultCallback);
}

function test_get_excludeHasLiedBrowser() {
    let fingerprint = new Fingerprint2({ excludeHasLiedBrowser: true }).get(defaultCallback);
}

function test_get_excludeJsFonts() {
    let fingerprint = new Fingerprint2({ excludeJsFonts: true }).get(defaultCallback);
}

function test_get_excludeFlashFonts() {
    let fingerprint = new Fingerprint2({ excludeFlashFonts: true }).get(defaultCallback);
}

function test_get_excludePlugins() {
    let fingerprint = new Fingerprint2({ excludePlugins: true }).get(defaultCallback);
}

function test_get_excludeIEPlugins() {
    let fingerprint = new Fingerprint2({ excludeIEPlugins: true }).get(defaultCallback);
}

function test_get_excludeTouchSupport() {
    let fingerprint = new Fingerprint2({ excludeTouchSupport: true }).get(defaultCallback);
}

function test_get_excludePixelRatio() {
    let fingerprint = new Fingerprint2({ excludePixelRatio: true }).get(defaultCallback);
}

function test_get_excludeHardwareConcurrency() {
    let fingerprint = new Fingerprint2({ excludeHardwareConcurrency: true }).get(defaultCallback);
}
