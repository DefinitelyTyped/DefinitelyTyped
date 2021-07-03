import { ButtonView, View } from "@ckeditor/ckeditor5-ui";

export default class FileDialogButtonView extends View {
    acceptedType: string;
    allowMultipleFiles: boolean;
    buttonView: ButtonView;

    focus(): void;
}
