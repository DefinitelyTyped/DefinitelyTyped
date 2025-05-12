import FileType from "react-native-file-type";

async function getMimeTypeAsync() {
    const result = FileType("example/image.jpg");
    if (result !== null) {
        const { ext: extension, mime: mimeType } = result;
        console.log(extension);
        console.log(mimeType);
    }
}
