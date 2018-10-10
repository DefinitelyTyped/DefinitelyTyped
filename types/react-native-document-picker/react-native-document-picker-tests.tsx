import { DocumentPicker, DocumentPickerUtil } from "react-native-document-picker";

DocumentPicker.show({
    filetype: [DocumentPickerUtil.allFiles()],
}, (error, res) => {
    // do nothing
});
