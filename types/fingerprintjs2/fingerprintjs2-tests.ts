function defaultCallback(result: string, components: [{ key: string, value: string }]) {
    console.log(`res: ${result}; components: ${components}`);
}

function test_default_settings() {
    var fingerprint = new Fingerprint2().get( defaultCallback);
}

function test_get_exclude_swfContainerId() {
    var fingerprint = new Fingerprint2({ swfContainerId: 'swfContainerId' }).get(defaultCallback);
}

function test_get_exclude_swfPath() {
    var fingerprint = new Fingerprint2({swfPath: 'pathToSwf'}).get(defaultCallback);
}

function test_get_exclude_userDefinedFonts() {
    var fingerprint = new Fingerprint2({ userDefinedFonts: ['font1', 'font2']}).get(defaultCallback);
}

function test_get_excludeUserAgent() {
    var fingerprint = new Fingerprint2({ excludeUserAgent: true }).get(defaultCallback);
}

function test_get_excludeLanguage() {
    var fingerprint = new Fingerprint2({ excludeLanguage: true }).get(defaultCallback);
}

function test_get_excludeColorDepth() {
    var fingerprint = new Fingerprint2({ excludeColorDepth: true }).get(defaultCallback);
}

function test_get_excludeScreenResolution() {
    var fingerprint = new Fingerprint2({ excludeScreenResolution: true }).get(defaultCallback);
}

function test_get_excludeTimezoneOffset() {
    var fingerprint = new Fingerprint2({ excludeTimezoneOffset: true }).get(defaultCallback);
}

function test_get_excludeSessionStorage() {
    var fingerprint = new Fingerprint2({ excludeSessionStorage: true }).get(defaultCallback);
}

function test_get_excludeIndexedDB() {
    var fingerprint = new Fingerprint2({ excludeIndexedDB: true }).get(defaultCallback);
}

function test_get_excludeAddBehavior() {
    var fingerprint = new Fingerprint2({ excludeAddBehavior: true }).get(defaultCallback);
}

function test_get_excludeOpenDatabase() {
    var fingerprint = new Fingerprint2({ excludeOpenDatabase: true }).get(defaultCallback);
}

function test_get_excludeCpuClass() {
    var fingerprint = new Fingerprint2({ excludeCpuClass: true }).get(defaultCallback);
}

function test_get_excludePlatform() {
    var fingerprint = new Fingerprint2({ excludePlatform: true }).get(defaultCallback);
}

function test_get_excludeDoNotTrack() {
    var fingerprint = new Fingerprint2({ excludeDoNotTrack: true }).get(defaultCallback);
}

function test_get_excludeCanvas() {
    var fingerprint = new Fingerprint2({ excludeCanvas: true }).get(defaultCallback);
}

function test_get_excludeWebGL() {
    var fingerprint = new Fingerprint2({ excludeWebGL: true }).get(defaultCallback);
}

function test_get_excludeAdBlock() {
    var fingerprint = new Fingerprint2({ excludeAdBlock: true }).get(defaultCallback);
}

function test_get_excludeHasLiedLanguages() {
    var fingerprint = new Fingerprint2({ excludeHasLiedLanguages: true }).get(defaultCallback);
}

function test_get_excludeHasLiedResolution() {
    var fingerprint = new Fingerprint2({ excludeHasLiedResolution: true }).get(defaultCallback);
}

function test_get_excludeHasLiedOs() {
    var fingerprint = new Fingerprint2({ excludeHasLiedOs: true }).get(defaultCallback);
}

function test_get_excludeHasLiedBrowser() {
    var fingerprint = new Fingerprint2({ excludeHasLiedBrowser: true }).get(defaultCallback);
}

function test_get_excludeJsFonts() {
    var fingerprint = new Fingerprint2({ excludeJsFonts: true }).get(defaultCallback);
}

function test_get_excludeFlashFonts() {
    var fingerprint = new Fingerprint2({ excludeFlashFonts: true }).get(defaultCallback);
}

function test_get_excludePlugins() {
    var fingerprint = new Fingerprint2({ excludePlugins: true }).get(defaultCallback);
}

function test_get_excludeIEPlugins() {
    var fingerprint = new Fingerprint2({ excludeIEPlugins: true }).get(defaultCallback);
}

function test_get_excludeTouchSupport() {
    var fingerprint = new Fingerprint2({ excludeTouchSupport: true }).get(defaultCallback);
}

function test_get_excludePixelRatio() {
    var fingerprint = new Fingerprint2({ excludePixelRatio: true }).get(defaultCallback);
}

function test_get_excludeHardwareConcurrency() {
    var fingerprint = new Fingerprint2({ excludeHardwareConcurrency: true }).get(defaultCallback);
}

