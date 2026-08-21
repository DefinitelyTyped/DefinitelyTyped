let n = 123;
let s = "string";

// Save Events API

function saveTypeToStr(type: TwineSugarCube.SaveType): string {
    switch (type) {
        case Save.Type.Auto:
            return "auto";
        case Save.Type.Base64:
            return "base64";
        case Save.Type.Disk:
            return "disk";
        case Save.Type.Slot:
            return "slot";
        case Save.Type.Unknown:
            return "unknown";
    }
    throw "Unexpected type";
}

function saveDescriptorHandler(save: TwineSugarCube.SaveDescriptor) {
    n = save.date;
    s = save.desc;
    s = save.id;
    s = saveTypeToStr(save.type);
}

function saveHandler(save: TwineSugarCube.SaveObject): void {
    saveDescriptorHandler(save);
    n = save.state.history.length;
    n = save.state.index;
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

Save.browser.clear();
b = Save.browser.isEnabled();
Save.browser.continue().then(() => {});
Save.browser.size; // $ExpectType number

let sd: TwineSugarCube.SaveDescriptor | null;

Save.browser.auto.clear();
Save.browser.auto.delete(n);
Save.browser.auto.entries().forEach((entry) => {
    n = entry.index;
    saveDescriptorHandler(entry.info);
});
sd = Save.browser.auto.get(n);
b = Save.browser.auto.has(n);
b = Save.browser.auto.isEnabled();
Save.browser.auto.load(n).then(() => {});
Save.browser.auto.save(); // $ExpectType void
Save.browser.auto.save(s); // $ExpectType void
Save.browser.auto.save(s, {}); // $ExpectType void
n = Save.browser.auto.size;

Save.browser.slots.clear();
Save.browser.slots.delete(n);
Save.browser.slots.entries().forEach((entry) => {
    n = entry.index;
    saveDescriptorHandler(entry.info);
});
sd = Save.browser.slots.get(n);
b = Save.browser.slots.has(n);
b = Save.browser.slots.isEnabled();
Save.browser.slots.load(n).then(() => {});
Save.browser.slots.save(n); // $ExpectType void
Save.browser.slots.save(n, s); // $ExpectType void
Save.browser.slots.save(n, s, {}); // $ExpectType void
n = Save.browser.slots.size;

s = Save.base64.export();
Save.base64.import(s).then(() => {});
Save.base64.load(s).then(() => {});
s = Save.base64.save();
s = Save.base64.save({});

declare function getInputEvent(): InputEvent;

Save.disk.export(s);
Save.disk.import(getInputEvent()).then(() => {});
Save.disk.load(getInputEvent()).then(() => {});
Save.disk.save(s);
Save.disk.save(s, {});

export {};
