/// <reference types="activex-scripting" />

const dict: Scripting.Dictionary<string, number> = new ActiveXObject('Scripting.Dictionary');
dict.Add('one', 1);
dict.Add('two', 2);
dict.Add('three', 3);

const keyEnumerator = new Enumerator(dict);
keyEnumerator.moveFirst();
while (!keyEnumerator.atEnd()) {
    const item = dict(keyEnumerator.item());
    const power = Math.pow(item, 2);
}

const keysArray = new VBArray(dict.Keys()).toArray();
const itemsArray = new VBArray(dict.Items()).toArray();
for (let i = 0; i < keysArray.length; i++) {
    const key = keysArray[i];
    const item = itemsArray[i];
}
