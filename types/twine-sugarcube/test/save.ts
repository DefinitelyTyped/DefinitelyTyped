let n = 123;
let s = "string";

declare function testSaveHandler(save: TwineSugarCube.SaveObject): boolean;

Config.saves.onLoad = testSaveHandler;
Config.saves.onSave = testSaveHandler;

// Save Events API

function saveHandler(save: TwineSugarCube.SaveObject, details: TwineSugarCube.SaveDetails): void {
    n = save.date;
    s = save.id;
    s = save.title;
    n = save.state.history.length;
    n = save.state.index;

    s = details.type;
}

declare function loadHandler(save: TwineSugarCube.SaveObject): void;

let b = false;
Save.onLoad.add(loadHandler);
b = Save.onLoad.delete(loadHandler);
Save.onLoad.clear();
Save.onLoad.size; // $ExpectType number

Save.onSave.add(saveHandler);
b = Save.onSave.delete(saveHandler);
Save.onSave.clear();
Save.onSave.size; // $ExpectType number

export {};
