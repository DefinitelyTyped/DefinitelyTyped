/// <reference types="windows-script-host" />
/// <reference types="activex-word" />

const collectionToArray = <T>(col: { Item(key: any): T }): T[] => {
    const results: T[] = [];
    const enumerator = new Enumerator<T>(col);
    enumerator.moveFirst();
    while (!enumerator.atEnd()) {
        results.push(enumerator.item());
        enumerator.moveNext();
    }
    return results;
};

const app = new ActiveXObject('Word.Application');
app.Visible = true;

for (const project of collectionToArray(app.VBE.VBProjects)) {
    WScript.Echo(`Name: ${project.Name}`);

    for (const reference of collectionToArray(project.References)) {
        WScript.Echo(`     ${reference.Name} ${reference.Major}.${reference.Minor} -- ${reference.FullPath}`);
    }
}

app.Quit();
