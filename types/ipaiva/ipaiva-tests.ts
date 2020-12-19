import * as ipaiva from 'ipaiva';

ipaiva.library.onDidPick(({ url }) => {
    ipaiva.window.showInformationMessage(url);
});

ipaiva.textEditor.create(document.createElement('div'));
