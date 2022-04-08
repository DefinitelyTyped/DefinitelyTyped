let n = 123;
let s = "string";

function testSaveObject(save: TwineSugarCube.SaveObject): boolean {
    n = save.date;
    s = save.id;
    s = save.title;
    n = save.state.history.length;
    n = save.state.index;

    return false;
}

Config.saves.onLoad = testSaveObject;
Config.saves.onSave = testSaveObject;

export {};
