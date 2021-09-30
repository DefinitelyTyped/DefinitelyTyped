import * as editJsonFile from 'edit-json-file';

const jsonEditor: editJsonFile.JsonEditor = editJsonFile('1.json'); // $ExpectType JsonEditor
jsonEditor.set('a', 2); // $ExpectType JsonEditor
jsonEditor.set('b', []); // $ExpectType JsonEditor
jsonEditor.append('a', 'b'); // $ExpectType JsonEditor
jsonEditor.pop('a'); // $ExpectType JsonEditor
jsonEditor.unset('b'); // $ExpectType JsonEditor
jsonEditor.get('a'); // $ExpectType any
const options: editJsonFile.Options = { autosave: true };
const jsonEditorWithOptions: editJsonFile.JsonEditor = editJsonFile('2.json', options); // $ExpectType JsonEditor
jsonEditorWithOptions.read(); // $ExpectType object
jsonEditorWithOptions.write(`{"c":7}`); // $ExpectType JsonEditor
jsonEditorWithOptions.empty(); // $ExpectType JsonEditor
jsonEditorWithOptions.save(err => console.log(err)); // $ExpectType JsonEditor
jsonEditorWithOptions.toObject(); // $ExpectType object
