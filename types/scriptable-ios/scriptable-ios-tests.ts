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
