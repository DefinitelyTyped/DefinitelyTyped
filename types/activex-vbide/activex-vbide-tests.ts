// tslint:disable-next-line no-unnecessary-generics
const collectionToArray = <T>(col: any): T[] => {
    const results: T[] = [];
    const enumerator = new Enumerator<T>(col);
    enumerator.moveFirst();
    while (!enumerator.atEnd()) {
        results.push(enumerator.item());
    }
    return results;
};

const app = new ActiveXObject('Word.Application');
const projects = collectionToArray<VBIDE.VBProject>(app.VBE.VBProjects);
projects.forEach(project => {
    WScript.Echo(`Name: ${project.Name}`);

    collectionToArray<VBIDE.Reference>(project.References)
        .forEach(reference => {
            WScript.Echo(`     ${reference.Name} ${reference.Major}.${reference.Minor} -- ${reference.FullPath}`);
        });
});
