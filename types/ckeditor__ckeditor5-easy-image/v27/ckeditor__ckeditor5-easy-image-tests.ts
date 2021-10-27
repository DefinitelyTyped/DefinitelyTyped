import { Editor } from "@ckeditor/ckeditor5-core";
import EI from '@ckeditor/ckeditor5-easy-image';

class MyEditor extends Editor {}

new EI.CloudServicesUploadAdapter(new MyEditor()).init();
new EI.EasyImage(new MyEditor()).init();

const editor = new MyEditor();

// $ExpectType CloudServicesUploadAdapter
editor.plugins.get('CloudServicesUploadAdapter');

// $ExpectType EasyImage
editor.plugins.get('EasyImage');
