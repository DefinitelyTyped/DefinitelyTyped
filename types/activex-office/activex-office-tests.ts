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

let app = new ActiveXObject('Word.Application');
app.Visible = true;
let dlg = app.FileDialog(Office.MsoFileDialogType.msoFileDialogFolderPicker);
dlg.AllowMultiSelect = true;
dlg.Title = 'Select one or more folders';
dlg.Execute();
for (const item of collectionToArray(dlg.SelectedItems)) {
    WScript.Echo(item);
}

for (const item of collectionToArray(app.COMAddIns)) {
    WScript.Echo(`COM Addin: ${item.Description} -- ${item.ProgId}`);
}
