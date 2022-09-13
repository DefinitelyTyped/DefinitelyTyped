import { Editor } from '@ckeditor/ckeditor5-core';
import {
    Base64UploadAdapter,
    FileDialogButtonView,
    FileRepository,
    SimpleUploadAdapter,
} from '@ckeditor/ckeditor5-upload';
import { SimpleUploadConfig } from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
import { FileLoader } from '@ckeditor/ckeditor5-upload/src/filerepository';
import FileReader from '@ckeditor/ckeditor5-upload/src/filereader';

class MyEditor extends Editor {}

const editor = new MyEditor();

const config: SimpleUploadConfig = {
    uploadUrl: '',
    withCredentials: true,
    headers: { foo: 'bar' },
};

const fileRepository = new FileRepository(new MyEditor());
fileRepository.on('click', () => {});
fileRepository.createUploadAdapter = loader => loader;
// ExpectType UploadAdapter
fileRepository.createUploadAdapter(null as unknown as FileLoader);
// ExpectType FileLoader | null
const fileLoader = fileRepository.loaders.get(0);
// ExpectType number
fileRepository.uploaded;
// ExpectType number | null
fileRepository.uploadTotal;
// ExpectType number
fileRepository.uploadedPercent;
fileRepository.destroyLoader(Promise.resolve(fileLoader!));

const fileDialogButtonView = new FileDialogButtonView();
fileDialogButtonView.allowMultipleFiles = true;
fileDialogButtonView.acceptedType = 'foo';
// ExpectType ButtonView
fileDialogButtonView.buttonView;
fileDialogButtonView.focus();

const base64UploadAdapter = new Base64UploadAdapter(new MyEditor());
base64UploadAdapter.init();

const simpleUploadAdapter = new SimpleUploadAdapter(new MyEditor());
simpleUploadAdapter.init();

// $ExpectType File | undefined
new FileReader().data;
// $ExpectType Error
new FileReader().error;
// $ExpectType number
new FileReader().loaded;
new FileReader().read({} as unknown as File).then(data => {
    // $ExpectType string
    data;
});
new FileReader().abort();

// $ExpectType Base64UploadAdapter
editor.plugins.get('Base64UploadAdapter');

// $ExpectType FileRepository
editor.plugins.get('FileRepository');

// $ExpectType SimpleUploadAdapter
editor.plugins.get('SimpleUploadAdapter');
