// TODO: write more tests

{
    const a = new Alert();
    a.title = 'Some title';
    a.message = 'Some message';
    a.addTextField('user id');
    a.addTextField('username', 'pre filled text');
    a.addSecureTextField('password');
    a.addAction('OK');
    a.addCancelAction('Cancel');
    a.present();
    a.presentAlert();
    a.presentSheet();
    const textFieldValue = a.textFieldValue(0);
}

{
    // $ExpectType Promise<string[]>
    DocumentPicker.open(['public.plain-text']);
    // $ExpectType Promise<string>
    DocumentPicker.openFile();
    // $ExpectType Promise<string>
    DocumentPicker.openFolder();

    // $ExpectType Promise<string[]>
    DocumentPicker.export('some/file.txt');
    // $ExpectType Promise<string[]>
    DocumentPicker.exportString('foo-bar');
    // $ExpectType Promise<string[]>
    DocumentPicker.exportString('foo-bar', 'file.txt');
    // $ExpectType Promise<string[]>
    DocumentPicker.exportImage(Image.fromFile('some/image.png'));
    // $ExpectType Promise<string[]>
    DocumentPicker.exportImage(Image.fromFile('some/image.png'), 'super interesting image.png');
    // $ExpectType Promise<string[]>
    DocumentPicker.exportData(Data.fromFile('test.bin'));
    // $ExpectType Promise<string[]>
    DocumentPicker.exportData(Data.fromFile('test.bin'), 'super interesting data.bin');
}
