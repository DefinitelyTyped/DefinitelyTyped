import * as envEditor from 'env-editor';

// $ExpectType Editor
envEditor.get('sublime');
// $ExpectType Editor
envEditor.default();
// $ExpectType Editor[]
envEditor.all();
