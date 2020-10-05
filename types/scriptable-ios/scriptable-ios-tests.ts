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

    listWidget.refreshAfterDate = new Date();
    // $ExpectError
    listWidget.refreshAfterDate = "2020-01-01T00:00:00Z";

    const widgetText = listWidget.addText("some text");
    // $ExpectError
    listWidget.addText(42);

    const widgetDate = listWidget.addDate(new Date());
    // $ExpectError
    listWidget.addDate("2020-01-01T00:00:00Z");

    const widgetImage = listWidget.addImage(Image.fromData(Data.fromBase64String("foobar")));
    // $ExpectError
    listWidget.addImage("42");

    const widgetSpacer = listWidget.addSpacer(10);
    // $ExpectError
    listWidget.addSpacer("10");

    const widgetStack = listWidget.addStack();
    // $ExpectError
    listWidget.addStack(42);

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

    // $ExpectType boolean
    widgetImage.resizable;
    widgetImage.resizable = true;
    // $ExpectError
    widgetImage.resizable = 1;

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

    // $ExpectType Color
    widgetImage.tintColor;
    widgetImage.tintColor = Color.black();
    // $ExpectError
    widgetImage.tintColor = "black";

    // $ExpectType string
    widgetImage.url;
    widgetImage.url = "https://localhost:80/";
    // $ExpectError
    widgetImage.url = 42;

    // $ExpectType void
    widgetImage.leftAlignImage();
    // $ExpectType void
    widgetImage.centerAlignImage();
    // $ExpectType void
    widgetImage.rightAlignImage();
    // $ExpectType void
    widgetImage.applyFittingContentMode();
    // $ExpectType void
    widgetImage.applyFillingContentMode();

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

    // $ExpectType number
    widgetText.minimumScaleFactor;
    widgetText.minimumScaleFactor = 3;
    // $ExpectError
    widgetText.minimumScaleFactor = "3";

    // $ExpectType Color
    widgetText.shadowColor;
    widgetText.shadowColor = Color.black();
    // $ExpectError
    widgetText.shadowColor = "black";

    // $ExpectType number
    widgetText.shadowRadius;
    widgetText.shadowRadius = 3;
    // $ExpectError
    widgetText.shadowRadius = "3";

    // $ExpectType Point
    widgetText.shadowOffset;
    widgetText.shadowOffset = new Point(1, 2);
    // $ExpectError
    widgetText.shadowOffset = [1, 2];

    // $ExpectType string
    widgetText.url;
    widgetText.url = "http://localhost/";
    // $ExpectError
    widgetText.url = 0;

    // $ExpectType void
    widgetText.leftAlignText();
    // $ExpectType void
    widgetText.centerAlignText();
    // $ExpectType void
    widgetText.rightAlignText();

    // $ExpectType Date
    widgetDate.date;
    widgetDate.date = new Date();
    // $ExpectError
    widgetDate.date = "2020-01-01T00:00:00Z";

    // $ExpectType Color
    widgetDate.textColor;
    widgetDate.textColor = Color.black();
    // $ExpectError
    widgetDate.textColor = "black";

    // $ExpectType Font
    widgetDate.font;
    widgetDate.font = Font.blackSystemFont(16);

    // $ExpectType number
    widgetDate.textOpacity;
    widgetDate.textOpacity = 0.4;
    // $ExpectError
    widgetDate.textOpacity = "1";

    // $ExpectType number
    widgetDate.lineLimit;
    widgetDate.lineLimit = 42;
    // $ExpectError
    widgetDate.lineLimit = "42";

    // $ExpectType number
    widgetDate.minimumScaleFactor;
    widgetDate.minimumScaleFactor = 0.01;
    // $ExpectError
    widgetDate.minimumScaleFactor = "42";

    // $ExpectType Color
    widgetDate.shadowColor;
    widgetDate.shadowColor = Color.gray();
    // $ExpectError
    widgetDate.shadowColor = "gray";

    // $ExpectType number
    widgetDate.shadowRadius;
    widgetDate.shadowRadius = 42;
    // $ExpectError
    widgetDate.shadowRadius = "42";

    // $ExpectType Point
    widgetDate.shadowOffset;
    widgetDate.shadowOffset = new Point(42, 42);
    // $ExpectError
    widgetDate.shadowOffset = [42, 42];

    // $ExpectType string
    widgetDate.url;
    widgetDate.url = "http://localhost:80/";
    // $ExpectError
    widgetDate.url = 42;

    // $ExpectType void
    widgetDate.leftAlignText();
    // $ExpectType void
    widgetDate.centerAlignText();
    // $ExpectType void
    widgetDate.rightAlignText();
    // $ExpectType void
    widgetDate.applyTimeStyle();
    // $ExpectType void
    widgetDate.applyDateStyle();
    // $ExpectType void
    widgetDate.applyRelativeStyle();
    // $ExpectType void
    widgetDate.applyOffsetStyle();
    // $ExpectType void
    widgetDate.applyTimerStyle();

    // $ExpectType Color
    widgetStack.backgroundColor;
    widgetStack.backgroundColor = Color.black();
    // $ExpectError
    widgetStack.backgroundColor = "black";

    // $ExpectType Image
    widgetStack.backgroundImage;
    widgetStack.backgroundImage = Image.fromFile("some/file.png");
    // $ExpectError
    widgetStack.backgroundImage = "black";

    // $ExpectType LinearGradient
    widgetStack.backgroundGradient;
    widgetStack.backgroundGradient = new LinearGradient();
    // $ExpectError
    widgetStack.backgroundGradient = 42;

    // $ExpectType number
    widgetStack.spacing;
    widgetStack.spacing = 42;
    // $ExpectError
    widgetStack.spacing = "42";

    // $ExpectType Size
    widgetStack.size;
    widgetStack.size = new Size(4, 2);
    // $ExpectError
    widgetStack.size = [4, 2];

    // $ExpectType number
    widgetStack.cornerRadius;
    widgetStack.cornerRadius = 10;
    // $ExpectError
    widgetStack.cornerRadius = "10";

    // $ExpectType number
    widgetStack.borderWidth;
    widgetStack.borderWidth = 3;
    // $ExpectError
    widgetStack.borderWidth = "3";

    // $ExpectType Color
    widgetStack.borderColor;
    widgetStack.borderColor = Color.black();
    // $ExpectError
    widgetStack.borderColor = "black";

    // $ExpectType string
    widgetStack.url;
    widgetStack.url = "http://localhost:80/";
    // $ExpectError
    widgetStack.url = 21;

    // $ExpectType WidgetText
    widgetStack.addText("foo");
    // $ExpectType WidgetDate
    widgetStack.addDate(new Date());
    // $ExpectType WidgetImage
    widgetStack.addImage(Image.fromFile("some/image.png"));
    // $ExpectType WidgetSpacer
    widgetStack.addSpacer(4);
    // $ExpectType WidgetStack
    widgetStack.addStack();
    // $ExpectType void
    widgetStack.setPadding(0, 1, 2, 3);
    // $ExpectType void
    widgetStack.useDefaultPadding();
    // $ExpectType void
    widgetStack.topAlignContent();
    // $ExpectType void
    widgetStack.centerAlignContent();
    // $ExpectType void
    widgetStack.bottomAlignContent();
    // $ExpectType void
    widgetStack.layoutHorizontally();
    // $ExpectType void
    widgetStack.layoutVertically();
}

{
    const sf = SFSymbol.named("car");
    // $ExpectError
    const err = new SFSymbol();

    // $ExpectType void
    sf.applyFont(Font.blackSystemFont(16));
    // $ExpectType void
    sf.applyUltraLightWeight();
    // $ExpectType void
    sf.applyThinWeight();
    // $ExpectType void
    sf.applyLightWeight();
    // $ExpectType void
    sf.applyRegularWeight();
    // $ExpectType void
    sf.applyMediumWeight();
    // $ExpectType void
    sf.applySemiboldWeight();
    // $ExpectType void
    sf.applyBoldWeight();
    // $ExpectType void
    sf.applyHeavyWeight();
    // $ExpectType void
    sf.applyBlackWeight();
}
