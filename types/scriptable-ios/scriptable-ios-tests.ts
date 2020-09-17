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

{
    const font = new Font("Helvetica", 12);
    // $ExpectType Font
    Font.largeTitle();
    // $ExpectType Font
    Font.title1();
    // $ExpectType Font
    Font.headline();
    // $ExpectType Font
    Font.body();
    // $ExpectType Font
    Font.systemFont(15);
    // $ExpectType Font
    Font.italicSystemFont(15);
    // $ExpectType Font
    Font.regularRoundedSystemFont(15);
}

{
    const listWidget = new ListWidget();

    listWidget.backgroundColor = Color.gray();
    // $ExpectError
    listWidget.backgroundColor = 5;

    listWidget.backgroundImage = Image.fromFile("some/image.png");
    // $ExpectError
    listWidget.backgroundImage = "foo";

    const gradient = new LinearGradient();
    gradient.colors = [Color.white(), Color.gray(), Color.white()];
    // $ExpectError
    gradient.colors = Color.black();

    gradient.locations = [0, 0.5, 1];
    // $ExpectError
    gradient.locations = 1;

    listWidget.backgroundGradient = gradient;
    // $ExpectError
    listWidget.backgroundGradient = "bar";

    listWidget.spacing = 5;
    // $ExpectError
    listWidget.spacing = "5";

    listWidget.url = "https://scriptable.app";
    // $ExpectError
    listWidget.url = /https:\/\/scriptable.app/;

    const widgetText = listWidget.addText("some text");
    // $ExpectError
    listWidget.addText(42);

    const widgetImage = listWidget.addImage(Image.fromData(Data.fromBase64String("foobar")));
    // $ExpectError
    listWidget.addImage("42");

    const widgetSpacer = listWidget.addSpacer(10);
    // $ExpectError
    listWidget.addSpacer("10");

    // $ExpectType void
    listWidget.setPadding(0, 1, 2, 3);
    // $ExpectError
    listWidget.setPadding("0", "1", "2", "3");

    // $ExpectType void
    listWidget.useDefaultPadding();
    // $ExpectError
    listWidget.useDefaultPadding("qux");

    // $ExpectType Promise<void>
    listWidget.presentSmall();
    // $ExpectType Promise<void>
    listWidget.presentMedium();
    // $ExpectType Promise<void>
    listWidget.presentLarge();

    Script.setWidget(listWidget);

    // $ExpectType Image
    widgetImage.image;
    widgetImage.image = Image.fromFile("some/image.png");
    // $ExpectError
    widgetImage.image = "42";

    // $ExpectType number
    widgetImage.imageOpacity;
    widgetImage.imageOpacity = 42;
    // $ExpectError
    widgetImage.imageOpacity = "42";

    // $ExpectType Size
    widgetImage.imageSize;
    widgetImage.imageSize = new Size(84, 42);
    // $ExpectError
    widgetImage.imageSize = [42, 42];

    // $ExpectType number
    widgetImage.cornerRadius;
    widgetImage.cornerRadius = 13;
    // $ExpectError
    widgetImage.cornerRadius = "13";

    // $ExpectType number
    widgetImage.borderWidth;
    widgetImage.borderWidth = 13;
    // $ExpectError
    widgetImage.borderWidth = "13";

    // $ExpectType Color
    widgetImage.borderColor;
    widgetImage.borderColor = Color.white();
    // $ExpectError
    widgetImage.borderColor = "13";

    // $ExpectType boolean
    widgetImage.containerRelativeShape;
    widgetImage.containerRelativeShape = true;
    // $ExpectError
    widgetImage.containerRelativeShape = 1;

    // $ExpectType void
    widgetImage.leftAlignImage();
    // $ExpectType void
    widgetImage.centerAlignImage();
    // $ExpectType void
    widgetImage.rightAlignImage();

    // $ExpectType number
    widgetSpacer.length;
    widgetSpacer.length = 3;
    // $ExpectError
    widgetSpacer.length = "3";

    // $ExpectType string
    widgetText.text;
    widgetText.text = "The quick brwon fox jumps over the lazy dog";
    // $ExpectError
    widgetText.text = 42;

    // $ExpectType Color
    widgetText.textColor;
    widgetText.textColor = Color.black();
    // $ExpectError
    widgetText.textColor = 42;

    // $ExpectType Font
    widgetText.font;
    widgetText.font = Font.thinSystemFont(16);

    // $ExpectType number
    widgetText.textOpacity;
    widgetText.textOpacity = 0.9;
    // $ExpectError
    widgetText.textOpacity = "1";

    // $ExpectType number
    widgetText.lineLimit;
    widgetText.lineLimit = 3;
    // $ExpectError
    widgetText.lineLimit = "3";

    // $ExpectType void
    widgetText.leftAlignText();
    // $ExpectType void
    widgetText.centerAlignText();
    // $ExpectType void
    widgetText.rightAlignText();
}
