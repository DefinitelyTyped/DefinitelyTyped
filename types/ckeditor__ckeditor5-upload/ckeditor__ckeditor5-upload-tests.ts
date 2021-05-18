import { Editor } from "@ckeditor/ckeditor5-core";
import { ButtonView } from "@ckeditor/ckeditor5-ui";
import {
    Base64UploadAdapter,
    FileDialogButtonView,
    FileRepository,
    SimpleUploadAdapter,
} from "@ckeditor/ckeditor5-upload";
import { FileLoader, UploadAdapter } from "@ckeditor/ckeditor5-upload/src/filerepository";

class MyEditor extends Editor {}

const fileRepository = new FileRepository(new MyEditor());
fileRepository.on("click", () => {});
const uploadAdapter: UploadAdapter = fileRepository.createUploadAdapter();
const fileLoader: FileLoader = fileRepository.loaders.get(0)!;
let num: number = fileRepository.uploaded;
num = fileRepository.uploadTotal!;
num = fileRepository.uploadedPercent;
fileRepository.destroyLoader(Promise.resolve(fileLoader));

const fileDialogButtonView = new FileDialogButtonView();
fileDialogButtonView.allowMultipleFiles = true;
fileDialogButtonView.acceptedType = "foo";
const buttonView: ButtonView = fileDialogButtonView.buttonView;
fileDialogButtonView.focus();

const base64UploadAdapter = new Base64UploadAdapter(new MyEditor());
base64UploadAdapter.init();

const simpleUploadAdapter = new SimpleUploadAdapter(new MyEditor());
simpleUploadAdapter.init();
