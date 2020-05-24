import * as editJsonFile from 'edit-json-file';

const jsonEditor: editJsonFile.JsonEditor = editJsonFile('1.json');
const options: editJsonFile.Options = { autosave: true };
const jsonEditorWithOptions: editJsonFile.JsonEditor = editJsonFile('2.json', options);
jsonEditorWithOptions.set('a', 2);
jsonEditorWithOptions.set('b', []);
jsonEditorWithOptions.unset('b');
const a: number = jsonEditorWithOptions.get('a');
jsonEditorWithOptions.write(`{"c":${a}}`);
jsonEditorWithOptions.empty();
jsonEditorWithOptions.save(err => console.log(err));
const data: object = jsonEditorWithOptions.toObject();
