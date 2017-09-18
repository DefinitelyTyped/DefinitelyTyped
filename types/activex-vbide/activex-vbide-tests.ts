/// <reference types="activex-word" />

const collectionToArray = <T>(col: any) => {
    let results: T[] = [];
    let enumerator = new Enumerator<T>(col);
    enumerator.moveFirst();
    while (!enumerator.atEnd()) {
        results.push(enumerator.item());
    }
    return results;
};

let app = new ActiveXObject('Word.Application');
let projects = collectionToArray<VBIDE.VBProject>(app.VBE.VBProjects);
projects.forEach(project => {
    WScript.Echo(`Name: ${project.Name}`);

    let references = collectionToArray<VBIDE.Reference>(project.References);
    references.forEach(reference => {
        WScript.Echo(`     ${reference.Name} ${reference.Major}.${reference.Minor} -- ${reference.FullPath}`);
    })
})