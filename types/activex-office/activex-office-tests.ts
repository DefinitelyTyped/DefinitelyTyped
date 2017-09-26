/// <reference types="activex-word" />

let app = new ActiveXObject('Word.Application');
let dlg = app.FileDialog(Office.MsoFileDialogType.msoFileDialogFolderPicker);
dlg.AllowMultiSelect = true;
dlg.Title = 'Select one or more folders';
dlg.Execute();
let enumerator = new Enumerator(dlg.SelectedItems);
enumerator.moveFirst();
while (!enumerator.atEnd()) {
    WScript.Echo(enumerator.item);
}

let enumerator2 = new Enumerator(app.COMAddIns);
enumerator2.moveFirst();
while (!enumerator2.atEnd()) {
    const item = enumerator2.item();
    WScript.Echo(`COM Addin: ${item.Description} -- ${item.ProgId}`);
}
