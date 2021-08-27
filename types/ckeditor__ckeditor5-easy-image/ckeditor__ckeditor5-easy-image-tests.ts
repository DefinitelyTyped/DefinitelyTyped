import { Editor } from "@ckeditor/ckeditor5-core";
import { EasyImage, CloudServicesUploadAdapter } from '@ckeditor/ckeditor5-easy-image';

class MyEditor extends Editor {}
const editor = new MyEditor();

new CloudServicesUploadAdapter(editor).init();
new EasyImage(editor).init();

// $ExpectType CloudServicesUploadAdapter
editor.plugins.get('CloudServicesUploadAdapter');

// $ExpectType EasyImage
editor.plugins.get('EasyImage');
