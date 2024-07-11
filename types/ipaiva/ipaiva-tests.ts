import * as ipaiva from "ipaiva";

ipaiva.library.onDidPick(({ url }) => {
    ipaiva.window.showInformationMessage(url);
});

// $ExpectType string
ipaiva.version;
