import fs = require("fs/promises");
import getFolderSize from "get-folder-size";

const myFolder = "/path/to/my/folder";

(async () => {
    // $ExpectType FolderSizeInfo
    await getFolderSize(myFolder);
    // $ExpectType number
    await getFolderSize.loose(myFolder);
    // $ExpectType number
    await getFolderSize.loose(myFolder, { ignore: /ignore-path/, fs });
    // $ExpectType number
    await getFolderSize.strict(myFolder);
    // $ExpectType number
    await getFolderSize.strict(myFolder, {});
    // $ExpectType number
    await getFolderSize.strict(myFolder, { ignore: /ignore-path/, fs });
})();
