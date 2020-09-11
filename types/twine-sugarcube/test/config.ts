const b = true;
const s = "";

Config.addVisitedLinkClass = true;

Config.audio.pauseOnFadeToZero = true;
Config.audio.preloadMetadata = false;

Config.cleanupWikifierOutput = true;

Config.debug = false;

Config.history.controls = false;
Config.history.maxStates = 1234;

Config.loadDelay = 123;

Config.macros.ifAssignmentError = true;
Config.macros.maxLoopIterations = 123;
Config.macros.typeSkipKey = s;
Config.macros.typeVisitedPassages = b;

Config.navigation.override = (passageName: string) => passageName + "anything";

// @ts-expect-error
Config.passages.descriptions = false;
Config.passages.descriptions = true;
Config.passages.descriptions = null;
Config.passages.descriptions = function() { return this.domId; };
Config.passages.displayTitles = false;
Config.passages.nobr = true;
Config.passages.onProcess = (passage) => passage.text;
Config.passages.start = "StartingPassage";
Config.passages.transitionOut = 123;
Config.passages.transitionOut = "property";

Config.saves.autoload = false;
Config.saves.autoload = "prompt";
// a typo
// @ts-expect-error
Config.saves.autoload = "pront";
Config.saves.autoload = () => true;
Config.saves.autoload = null;
// @ts-expect-error
Config.saves.autoload = () => 1;
// @ts-expect-error
Config.saves.autoload = () => 0;
Config.saves.autosave = "tag";

Config.saves.autosave = ["tag1", "tag2"];
Config.saves.autosave = true;
// @ts-expect-error
Config.saves.autosave = false;
Config.saves.autosave = () => true;
// @ts-expect-error
Config.saves.autosave = () => 1;
// @ts-expect-error
Config.saves.autosave = () => 0;
Config.saves.autosave = null;
// @ts-expect-error
Config.saves.autosave = undefined;

Config.saves.id = "a string id";

Config.saves.isAllowed = null;
Config.saves.isAllowed = () => true;

Config.saves.onLoad = null;
Config.saves.onLoad = (save: TwineSugarCube.SaveObject) => {};

Config.saves.onSave = null;
Config.saves.onSave = (save: TwineSugarCube.SaveObject) => {};
Config.saves.onSave = (save: TwineSugarCube.SaveObject, details: TwineSugarCube.SaveDetails) => {};

Config.saves.slots = 123;

Config.saves.version = 123;
Config.saves.version = "ver-2";

export {};
