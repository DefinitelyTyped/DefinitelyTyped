interface TestContext {
    sampleData: NSData;
    sampleImage: UIImage;
    sampleColor: UIColor;
    sampleDarkColor: UIColor;
    sampleFont: UIFont;
    samplePoint: JBPoint;
    sampleSize: JBSize;
    sampleInsets: JBInsets;
}

function createTestContext(): TestContext {
    return {
        sampleData: $data({ string: "Hello, JSBox" }),
        sampleImage: $image("circle"),
        sampleColor: $color("red"),
        sampleDarkColor: $color({ light: "#ffffff", dark: "#000000" }),
        sampleFont: $font("bold", 14),
        samplePoint: $point(10, 20),
        sampleSize: $size(100, 120),
        sampleInsets: $insets(1, 2, 3, 4),
    };
}

async function testAddin(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/addin.d.ts
    const addinList: AddinTypes.AddinItem[] = $addin.list;
    const addinCategories: string[] = $addin.categories;
    const currentAddin: AddinTypes.AddinItem = $addin.current;
    addinList.length.valueOf();
    addinCategories.length.valueOf();
    currentAddin.name.toUpperCase();
    $addin.save({
        name: "Example",
        data: sampleData,
        handler: (success) => {
            success.valueOf();
        },
    });
    $addin.delete("Example");
    $addin.run("Example");
    $addin.run({ name: "Example", query: { page: 1 } });
    $addin.restart();
    $addin.replay();
    const compiledScript: string = $addin.compile("console.log('hello')");
    compiledScript.toUpperCase();
    $addin.eval("console.log('eval')");
}

async function testBasic(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/basic.d.ts
    const rect: JBRect = $rect(0, 0, 100, 200);
    const point: JBPoint = $point(1, 2);
    const size: JBSize = $size(3, 4);
    const insets: JBInsets = $insets(5, 6, 7, 8);
    const range: JBRange = $range(0, 5);
    rect.width.toFixed();
    point.x.toFixed();
    size.height.toFixed();
    insets.left.toFixed();
    range.length.toFixed();
    sampleColor.components.red.toFixed();
    sampleImage.averageColor.hexCode.toLowerCase();
    sampleImage.size.width.toFixed();
    sampleImage.colorAtPixel(samplePoint).components.blue.toFixed();
    sampleImage.resizableImage(sampleInsets).size.height.toFixed();
    sampleImage.resized(sampleSize).size.width.toFixed();
    sampleImage.alwaysOriginal.scale.toFixed();
    sampleImage.alwaysTemplate.scale.toFixed();
    sampleData.info.mimeType.toLowerCase();
    sampleData.byteArray.length.valueOf();
    sampleData.gzipped.byteArray.length.valueOf();
    sampleData.gunzipped.byteArray.length.valueOf();
    sampleData.fileName.toLowerCase();
    sampleData.jsValue();
    const basicIndexPath: NSIndexPath = $indexPath(0, 1);
    basicIndexPath.row.toFixed();
    basicIndexPath.item.toFixed();
}

async function testConstant(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/constant.d.ts
    const envApp: 1 = $env.app;
    const alignCenter: 1 = $align.center;
    const contentModeAspectFit: 1 = $contentMode.scaleAspectFit;
    const buttonTypeSystem: 1 = $btnType.system;
    const alertActionDestructive: 2 = $alertActionType.destructive;
    const zeroRect = $zero.rect;
    const layoutFill: (make: MASConstraintMaker, view: AllUIView) => void = $layout.fill;
    const lineCapRound: 1 = $lineCap.round;
    const lineJoinBevel: 2 = $lineJoin.bevel;
    const mediaTypePng: "public.png" = $mediaType.png;
    const imageQualityHigh: 0 = $imgPicker.quality.high;
    const keyboardTypeSearch: 10 = $kbType.search;
    const assetMediaVideo: 2 = $assetMedia.type.video;
    const pageSizeA4: 10 = $pageSize.A4;
    const touchUpInside: 64 = $UIEvent.touchUpInside;
    const stackAxisHorizontal: 0 = $stackViewAxis.horizontal;
    const stackDistributionFill: 0 = $stackViewDistribution.fill;
    const stackAlignmentCenter: 3 = $stackViewAlignment.center;
    const stackSpacingSystem: number = $stackViewSpacing.useSystem;
    const popoverDirectionAny: 15 = $popoverDirection.any;
    const scrollDirectionHorizontal: 1 = $scrollDirection.horizontal;
    const blurStyleMaterial: 8 = $blurStyle.material;
    const widgetFamilyMedium: 1 = $widgetFamily.medium;
    const nsDictionary: any = NSDictionary;
    const nsMutableDictionary: any = NSMutableDictionary;
    const nsArray: any = NSArray;
    const nsMutableArray: any = NSMutableArray;
    const nsSet: any = NSSet;
    const nsMutableSet: any = NSMutableSet;
    const nsString: any = NSString;
    const nsMutableString: any = NSMutableString;
    const nsMutableData: any = NSMutableData;
    const nsNumber: any = NSNumber;
    const nsUrl: any = NSURL;
    const nsEnumerator: any = NSEnumerator;
    envApp.valueOf();
    alignCenter.valueOf();
    contentModeAspectFit.valueOf();
    buttonTypeSystem.valueOf();
    alertActionDestructive.valueOf();
    zeroRect.width.toFixed();
    lineCapRound.valueOf();
    lineJoinBevel.valueOf();
    mediaTypePng.toLowerCase();
    imageQualityHigh.valueOf();
    keyboardTypeSearch.valueOf();
    assetMediaVideo.valueOf();
    pageSizeA4.valueOf();
    touchUpInside.valueOf();
    stackAxisHorizontal.valueOf();
    stackDistributionFill.valueOf();
    stackAlignmentCenter.valueOf();
    stackSpacingSystem.valueOf();
    popoverDirectionAny.valueOf();
    scrollDirectionHorizontal.valueOf();
    blurStyleMaterial.valueOf();
    widgetFamilyMedium.valueOf();
    layoutFill;
    nsDictionary;
    nsMutableDictionary;
    nsArray;
    nsMutableArray;
    nsSet;
    nsMutableSet;
    nsString;
    nsMutableString;
    nsMutableData;
    nsNumber;
    nsUrl;
    nsEnumerator;
}

async function testContext(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/context.d.ts
    const contextSafari: ContextTypes.SafariItem = $context.safari.items;
    const contextAllItems: ContextTypes.AllItems = $context.allItems;
    $context.query;
    $context.text.toLowerCase();
    $context.textItems.length.valueOf();
    $context.link.toLowerCase();
    $context.linkItems.length.valueOf();
    $context.image.size.width.toFixed();
    $context.imageItems.length.valueOf();
    $context.data.byteArray.length.valueOf();
    $context.dataItems.length.valueOf();
    contextSafari.selection.text.toLowerCase();
    contextAllItems.text;
    $context.clear();
    $context.close();
}

async function testDrive(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/drive.d.ts
    $drive.open({
        types: [$mediaType.image],
        handler: (data) => {
            data.byteArray.length.valueOf();
        },
    });
    $drive.open({
        multi: true,
        types: [$mediaType.image],
        handler: (files: NSData[]) => {
            files[0].byteArray.length.valueOf();
        },
    });
    const driveOpenedFile: NSData = await $drive.open({ types: [$mediaType.image] });
    const driveOpenedFiles: NSData[] = await $drive.open({ multi: true, types: [$mediaType.image] });
    let driveSavedPath = "";
    $drive.save({
        data: sampleData,
        name: "hello.txt",
        handler: (path) => {
            driveSavedPath = path;
            path.toLowerCase();
        },
    });
    const driveReadData: NSData = $drive.read("shared/hello.txt");
    const driveDownloadedData: NSData = await $drive.download("shared/hello.txt");
    const driveWriteResult: boolean = $drive.write({ data: sampleData, path: "shared/hello.txt" });
    const driveDeleteResult: boolean = $drive.delete("shared/hello.txt");
    const driveList: string[] = $drive.list("shared");
    const driveCopyResult: boolean = $drive.copy({ src: "shared/a.txt", dst: "shared/b.txt" });
    const driveMoveResult: boolean = $drive.move({ src: "shared/a.txt", dst: "shared/b.txt" });
    const driveMkdirResult: boolean = $drive.mkdir("shared/demo");
    const driveExistsResult: boolean = $drive.exists("shared/demo");
    const driveIsDirectoryResult: boolean = $drive.isDirectory("shared");
    const driveAbsolutePath: string = $drive.absolutePath("shared/demo");
    driveOpenedFile.byteArray.length.valueOf();
    driveOpenedFiles.length.valueOf();
    driveSavedPath.toLowerCase();
    driveReadData.byteArray.length.valueOf();
    driveDownloadedData.byteArray.length.valueOf();
    driveWriteResult.valueOf();
    driveDeleteResult.valueOf();
    driveList.length.valueOf();
    driveCopyResult.valueOf();
    driveMoveResult.valueOf();
    driveMkdirResult.valueOf();
    driveExistsResult.valueOf();
    driveIsDirectoryResult.valueOf();
    driveAbsolutePath.toLowerCase();
}

async function testFile(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/file.d.ts
    const fileReadData: NSData = $file.read("shared/hello.txt");
    const fileDownloadedData: NSData = await $file.download("shared/hello.txt");
    const fileWriteResult: boolean = $file.write({ data: sampleData, path: "shared/hello.txt" });
    const fileDeleteResult: boolean = $file.delete("shared/hello.txt");
    const fileList = $file.list("shared");
    const fileCopyResult: boolean = $file.copy({ src: "shared/a.txt", dst: "shared/b.txt" });
    const fileMoveResult: boolean = $file.move({ src: "shared/a.txt", dst: "shared/b.txt" });
    const fileMkdirResult: boolean = $file.mkdir("shared/demo");
    const fileExistsResult: boolean = $file.exists("shared/demo");
    const fileIsDirectoryResult: boolean = $file.isDirectory("shared");
    const fileAbsolutePath: string = $file.absolutePath("shared/demo");
    const fileRootPath: string = $file.rootPath;
    const fileExtensions: string[] = $file.extensions;
    $file.merge({ files: ["shared/a.txt", "shared/b.txt"], dest: "shared/merged.txt", chunkSize: 1024 });
    $file.split({ file: "shared/merged.txt", chunkSize: 1024 });
    fileReadData.byteArray.length.valueOf();
    fileDownloadedData.byteArray.length.valueOf();
    fileWriteResult.valueOf();
    fileDeleteResult.valueOf();
    if (fileList) {
        fileList.length.valueOf();
    }
    fileCopyResult.valueOf();
    fileMoveResult.valueOf();
    fileMkdirResult.valueOf();
    fileExistsResult.valueOf();
    fileIsDirectoryResult.valueOf();
    fileAbsolutePath.toLowerCase();
    fileRootPath.toLowerCase();
    fileExtensions.length.valueOf();
}

async function testFunction(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/function.d.ts
    const localizedText: string = $l10n("HELLO");
    const delayedTask = $delay(0.1, () => {});
    await $wait(0.1);
    const namedColors: Record<string, UIColor> = $color("namedColors");
    const twoColorValue: UIColor = $color("#ffffff", "#000000");
    const rgbColor: UIColor = $rgb(255, 0, 0);
    const rgbaColor: UIColor = $rgba(255, 0, 0, 0.5);
    const fontBySize: UIFont = $font(14);
    const fontByName: UIFont = $font("Menlo", 14);
    const dataFromPath: NSData = $data({ path: "shared/hello.txt" });
    const dataFromUrl: NSData = $data({ url: "https://example.com/hello.txt" });
    const dataFromBase64: NSData = $data({ base64: "SGVsbG8=" });
    const dataFromBytes: NSData = $data({ byteArray: [72, 101, 108, 108, 111] });
    const imageByDarkMode: UIImage = $image({ light: sampleImage, dark: sampleImage }, 2);
    const imageByVariants: UIImage = $image(sampleImage, sampleImage);
    const iconImage: BBFileIcon = $icon("123", sampleColor, $size(20, 20));
    const accessibilityAction: UIAccessibilityCustomAction = $accessibilityAction("Refresh", () => {});
    const objcClass: any = $objc("UIView");
    const definedClass: any = $define({ type: "JSBoxSampleView", events: {}, classEvents: {} });
    const delegatedObject: any = $delegate({ type: "UITextFieldDelegate", events: {} });
    const blockValue: any = $block("void, void", () => {});
    const cFunctionValue: any = $defc("double", "pow", "double", "double");
    const objcProtocol: any = $get_protocol("NSObject");
    const selectedViewById: AllUIView = $("root");
    localizedText.toLowerCase();
    delayedTask.cancel();
    namedColors.red.hexCode.toLowerCase();
    twoColorValue.hexCode.toLowerCase();
    rgbColor.components.red.toFixed();
    rgbaColor.components.alpha.toFixed();
    fontBySize.jsValue();
    fontByName.jsValue();
    dataFromPath.byteArray.length.valueOf();
    dataFromUrl.byteArray.length.valueOf();
    dataFromBase64.byteArray.length.valueOf();
    dataFromBytes.byteArray.length.valueOf();
    imageByDarkMode.size.width.toFixed();
    imageByVariants.size.height.toFixed();
    iconImage.ocValue();
    accessibilityAction.ocValue();
    $objc_retain(objcClass);
    $objc_release(objcClass);
    $objc_clean();
    $include("helper.js");
    $props(sampleImage).length.valueOf();
    $desc(sampleImage);
    definedClass;
    delegatedObject;
    blockValue;
    cFunctionValue;
    objcProtocol;
    selectedViewById.hidden = false;
    $notify("refresh", { now: Date.now() });
}

async function testInput(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/input.d.ts
    $input.text({
        text: "https://example.com",
        type: $kbType.url,
        placeholder: "Website",
        handler: (text) => {
            text.toLowerCase();
        },
    });
    const inputTextResult: string = await $input.text({
        text: "hello@example.com",
        type: $kbType.email,
        placeholder: "Email",
    });
    $input.speech({
        locale: "en-US",
        autoFinish: true,
        handler: (text) => {
            text.toLowerCase();
        },
    });
    const inputSpeechResult: string = await $input.speech({ locale: "en-US", autoFinish: true });
    inputTextResult.toLowerCase();
    inputSpeechResult.toLowerCase();
}

async function testKeyboard(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/keyboard.d.ts
    const keyboardHasText: boolean = $keyboard.hasText;
    const keyboardSelectedText: string = $keyboard.selectedText;
    const keyboardTextBeforeInput: string = $keyboard.textBeforeInput;
    const keyboardTextAfterInput: string = $keyboard.textAfterInput;
    $keyboard.insert("Hello");
    $keyboard.delete();
    $keyboard.moveCursor(1);
    $keyboard.playInputClick();
    $keyboard.getAllText((text) => {
        text.toLowerCase();
    });
    $keyboard.next();
    $keyboard.send();
    $keyboard.dismiss();
    $keyboard.barHidden = true;
    $keyboard.height = 44;
    keyboardHasText.valueOf();
    keyboardSelectedText.toLowerCase();
    keyboardTextBeforeInput.toLowerCase();
    keyboardTextAfterInput.toLowerCase();
}

async function testNodejs(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/nodejs.d.ts
    $nodejs.run("scripts/example.js");
    $nodejs.run({
        script: "console.log(process.argv)",
        query: { page: 1 },
        argv: ["--watch"],
        listener: {
            id: "node-listener",
            handler: (result) => {
                result;
            },
        },
    });
    $nodejs.run({
        path: "scripts/example.js",
        query: { page: 2 },
        argv: ["--silent"],
    });
    $nodejs.listen("node-listener", (data) => {
        data;
    });
    const nodeVersion: string = $nodejs.version;
    const nodePath: string = $nodejs.path;
    nodeVersion.toLowerCase();
    nodePath.toLowerCase();
}

async function testPicker(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/picker.d.ts
    $picker.date({
        props: {
            date: new Date(),
            min: new Date(),
            max: new Date(),
            mode: 1,
            interval: 5,
        },
        handler: (date: Date) => {
            date.valueOf();
        },
    });
    const pickerDate: Date = await $picker.date({
        props: {
            date: new Date(),
            mode: 2,
            interval: 10,
        },
    });
    $picker.data({
        props: {
            items: [["One", "Two"], ["A", "B"]],
        },
        handler: (data: string[]) => {
            data[0].toLowerCase();
        },
    });
    const pickerData: string[] = await $picker.data({
        props: {
            items: [["One", "Two"], ["A", "B"]],
        },
    });
    $picker.color({
        color: sampleColor,
        handler: (color: UIColor) => {
            color.hexCode.toLowerCase();
        },
    });
    const pickerColor: UIColor = await $picker.color({ color: sampleColor });
    pickerDate.valueOf();
    pickerData[0].toLowerCase();
    pickerColor.hexCode.toLowerCase();
}

async function testSqlite(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/sqlite.d.ts
    const sqliteDb: SqliteTypes.SqliteInstance = $sqlite.open("shared/demo.sqlite");
    const sqliteUpdateResult: SqliteTypes.UpdateResult = sqliteDb.update({
        sql: "CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY, name TEXT)",
        args: [],
    });
    sqliteDb.query(
        {
            sql: "SELECT 1 AS value",
            args: [],
        },
        (rs, err) => {
            rs.columnCount.valueOf();
            rs.next().valueOf();
            rs.get(0);
            rs.values.length.valueOf();
            rs.nameForIndex(0).toLowerCase();
            rs.indexForName("value").valueOf();
            rs.query.toLowerCase();
            rs.isNull(0).valueOf();
            rs.close();
            err.toLowerCase();
        },
    );
    sqliteDb.beginTransaction();
    sqliteDb.commit();
    sqliteDb.rollback();
    const sqliteQueue: SqliteTypes.SqliteQueueInstance = $sqlite.dbQueue("shared/demo.sqlite");
    sqliteQueue.operations((db) => {
        db.update({ sql: "INSERT INTO items(name) VALUES(?)", args: ["JSBox"] });
    });
    sqliteQueue.transaction((db) => {
        db.update({ sql: "DELETE FROM items WHERE id = ?", args: [1] });
    });
    sqliteQueue.close();
    sqliteUpdateResult.result.valueOf();
    sqliteUpdateResult.error.toLowerCase();
    sqliteDb.close();
    $sqlite.close(sqliteDb);
}

async function testSsh(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/ssh.d.ts
    $ssh.connect({
        host: "example.com",
        port: 22,
        username: "root",
        password: "secret",
        handler: (session, response) => {
            session.host.toLowerCase();
            session.port.toFixed();
            session.username.toLowerCase();
            session.timeout.toFixed();
            session.fingerprintHash.toLowerCase();
            session.banner.toLowerCase();
            session.remoteBanner.toLowerCase();
            session.connected.valueOf();
            session.authorized.valueOf();
            response.toLowerCase();

            session.channel.bufferSize.toFixed();
            session.channel.type.toFixed();
            session.channel.lastResponse.toLowerCase();
            session.channel.requestPty = true;
            session.channel.ptyTerminalType = 1;
            session.channel.environmentVariables;

            session.channel.execute({
                script: "ls -la",
                timeout: 10,
                handler: (result) => {
                    result.response.toLowerCase();
                    if (result.error) {
                        result.error.localizedDescription.toLowerCase();
                    }
                },
            });
            session.channel.write({
                command: "pwd",
                timeout: 10,
                handler: (result) => {
                    result.success.valueOf();
                    if (result.error) {
                        result.error.localizedDescription.toLowerCase();
                    }
                },
            });
            session.channel.upload({
                path: "shared/hello.txt",
                dest: "/tmp/hello.txt",
                handler: (success) => {
                    success.valueOf();
                },
            });
            session.channel.download({
                path: "/tmp/hello.txt",
                dest: "shared/hello.txt",
                handler: (success) => {
                    success.valueOf();
                },
            });

            const sftpConnectPromise: Promise<void> = session.sftp.connect();
            session.sftp.bufferSize.toFixed();
            session.sftp.connected.valueOf();
            session.sftp.moveItem({ src: "/tmp/a.txt", dest: "/tmp/b.txt" });
            session.sftp.directoryExists({
                path: "/tmp",
                handler: (exists) => {
                    exists.valueOf();
                },
            });
            session.sftp.createDirectory({
                path: "/tmp/jsbox",
                handler: (success) => {
                    success.valueOf();
                },
            });
            session.sftp.removeDirectory({
                path: "/tmp/jsbox",
                handler: (success) => {
                    success.valueOf();
                },
            });
            session.sftp.contentsOfDirectory({
                path: "/tmp",
                handler: (contents) => {
                    contents[0].filename.toLowerCase();
                },
            });
            session.sftp.infoForFile({
                path: "/tmp/hello.txt",
                handler: (file) => {
                    file.filename.toLowerCase();
                    file.isDirectory.valueOf();
                    file.permissions.toLowerCase();
                },
            });
            session.sftp.fileExists({
                path: "/tmp/hello.txt",
                handler: (exists) => {
                    exists.valueOf();
                },
            });
            session.sftp.createSymbolicLink({
                path: "/tmp/hello.txt",
                dest: "/tmp/hello.link",
                handler: (success) => {
                    success.valueOf();
                },
            });
            session.sftp.removeFile({
                path: "/tmp/hello.txt",
                handler: (success) => {
                    success.valueOf();
                },
            });
            session.sftp.contents({
                path: "/tmp/hello.txt",
                handler: (file) => {
                    file.byteArray.length.valueOf();
                },
            });
            session.sftp.write({
                file: sampleData,
                path: "/tmp/hello.txt",
                progress: (sent) => sent > 0,
                handler: (success) => {
                    success.valueOf();
                },
            });
            session.sftp.append({
                file: sampleData,
                path: "/tmp/hello.txt",
                handler: (success) => {
                    success.valueOf();
                },
            });
            session.sftp.copy({
                path: "/tmp/hello.txt",
                dest: "shared/hello.txt",
                progress: (copied, totalBytes) => copied <= totalBytes,
                handler: (success) => {
                    success.valueOf();
                },
            });
            sftpConnectPromise;
        },
    });
    $ssh.disconnect();
}

async function testUi(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/ui.d.ts
    $ui.render({
        props: {
            title: "JSBox",
            theme: "auto",
            navButtons: [
                {
                    title: "Done",
                    handler: () => {},
                },
            ],
        },
        views: [
            {
                type: "label",
                props: {
                    id: "root-label",
                    text: "Hello",
                    textColor: sampleColor,
                    align: $align.center,
                },
            },
        ],
        events: {
            appeared: () => {},
            keyboardHeightChanged: (height) => {
                height.toFixed();
            },
        },
    });
    $ui.push({
        props: {
            title: "Details",
        },
        views: [
            {
                type: "view",
                props: {},
            },
        ],
    });
    $ui.animate({
        duration: 0.25,
        animation: () => {},
        completion: () => {},
    });
    $ui.pop();
    $ui.popToRoot();
    const uiView: UIView = $ui.create({
        type: "view",
        props: {
            id: "box",
            bgcolor: sampleColor,
        },
    });
    const uiLabel: UILabelView = $ui.create({
        type: "label",
        props: {
            text: "Label",
            lines: 2,
            textColor: sampleColor,
        },
    });
    const uiButton: UIButtonView = $ui.create({
        type: "button",
        props: {
            title: "Button",
            type: $btnType.system,
            image: sampleImage,
        },
    });
    const uiInput: UIInputView = $ui.create({
        type: "input",
        props: {
            text: "hello@example.com",
            placeholder: "Email",
            type: $kbType.email,
        },
    });
    const uiSlider: UISliderView = $ui.create({
        type: "slider",
        props: {
            value: 0.5,
            min: 0,
            max: 1,
        },
    });
    const uiSwitch: UISwitchView = $ui.create({
        type: "switch",
        props: {
            on: true,
        },
    });
    const uiSpinner: UISpinnerView = $ui.create({
        type: "spinner",
        props: {
            loading: true,
            color: sampleColor,
        },
    });
    const uiProgress: UIProgressView = $ui.create({
        type: "progress",
        props: {
            value: 0.3,
        },
    });
    const uiGallery: UIGalleryView = $ui.create({
        type: "gallery",
        props: {
            items: [
                {
                    type: "label",
                    props: {
                        text: "Slide 1",
                    },
                },
            ],
        },
    });
    const uiStepper: UIStepperView = $ui.create({
        type: "stepper",
        props: {
            value: 1,
            min: 0,
            max: 10,
        },
    });
    const uiText: UITextView = $ui.create({
        type: "text",
        props: {
            text: "Multiline text",
            font: sampleFont,
        },
    });
    const uiImage: UIImageView = $ui.create({
        type: "image",
        props: {
            image: sampleImage,
        },
    });
    const uiVideo: UIVideoView = $ui.create({
        type: "video",
        props: {
            src: "https://example.com/video.mp4",
        },
    });
    const uiScroll: UIScrollView = $ui.create({
        type: "scroll",
        props: {
            contentSize: sampleSize,
        },
    });
    const uiStack: UIStackView = $ui.create({
        type: "stack",
        props: {
            axis: $stackViewAxis.vertical,
            alignment: $stackViewAlignment.center,
            spacing: 8,
            stack: {
                views: [
                    {
                        type: "label",
                        props: {
                            text: "Stack Item",
                        },
                    },
                ],
            },
        },
    });
    const uiTab: UITabView = $ui.create({
        type: "tab",
        props: {
            items: ["A", "B"],
            index: 0,
        },
    });
    const uiMenuView: UIMenuView = $ui.create({
        type: "menu",
        props: {
            items: ["One", "Two"],
            index: 1,
        },
    });
    const uiMap: UIMapView = $ui.create({
        type: "map",
        props: {
            location: {
                lat: 0,
                lng: 0,
            },
        },
    });
    const uiWeb: UIWebView = $ui.create({
        type: "web",
        props: {
            html: "<strong>Hello</strong>",
            showsProgress: true,
        },
    });
    const uiList: UIListView = $ui.create({
        type: "list",
        props: {
            data: ["One", "Two"],
        },
    });
    const uiMatrix: UIMatrixView = $ui.create({
        type: "matrix",
        props: {
            data: [{ title: "A" }, { title: "B" }],
            itemSize: $size(60, 60),
            columns: 2,
        },
    });
    const uiBlur: UIBlurView = $ui.create({
        type: "blur",
        props: {
            style: $blurStyle.material,
        },
    });
    const uiGradient: UIGradientView = $ui.create({
        type: "gradient",
        props: {
            colors: [sampleColor, sampleDarkColor],
            startPoint: $point(0, 0),
            endPoint: $point(1, 1),
        },
    });
    const uiDatePicker: UIDatePickerView = $ui.create({
        type: "date-picker",
        props: {
            date: new Date(),
            interval: 5,
        },
    });
    const uiPickerView: UIPickerView = $ui.create({
        type: "picker",
        props: {
            items: [["One", "Two"]],
        },
    });
    const uiCanvas: UICanvasView = $ui.create({
        type: "canvas",
        props: {},
        events: {
            draw: (view, ctx) => {
                view.hidden = false;
                ctx.fillColor = sampleColor;
                ctx.addRect($rect(0, 0, 10, 10));
                ctx.fillPath();
                ctx.drawImage($rect(0, 0, 10, 10), sampleImage);
                ctx.drawText($rect(0, 0, 50, 20), "JSBox", { color: sampleColor, font: sampleFont });
            },
        },
    });
    const uiMarkdown: UIMarkdownView = $ui.create({
        type: "markdown",
        props: {
            content: "# Title",
        },
    });
    const uiLottie: UILottieView = $ui.create({
        type: "lottie",
        props: {
            src: "https://example.com/animation.json",
            loop: true,
        },
    });
    const uiChart: UIChartView = $ui.create({
        type: "chart",
        props: {
            options: {
                xAxis: {},
                yAxis: {},
                series: [],
            },
        },
    });
    const uiCode: UICodeView = $ui.create({
        type: "code",
        props: {
            text: "const answer = 42;",
            language: "javascript",
            lineNumbers: true,
        },
    });
    const uiRuntime: AllUIView = $ui.create({
        type: "runtime",
        props: {},
    });
    const uiFoundView: AllUIView = $ui.get("box");
    const uiAlertResult: { title: string; index: number } = await $ui.alert({
        title: "Alert",
        message: "Hello",
        actions: [{ title: "OK" }],
    });
    $ui.alert({
        title: "Alert",
        message: "With callback",
        actions: [{ title: "OK", style: $alertActionType.default, handler: () => {} }],
    });
    const uiActionOptions: UiTypes.UIAlertNoHandlerOptions = {
        title: "Actions",
        actions: [{ title: "Delete", style: $alertActionType.destructive }],
    };
    const uiActionResult: { title: string; index: number } = await $ui.action(uiActionOptions);
    $ui.action({
        title: "Actions",
        actions: [{ title: "Open", handler: () => {} }],
    });
    $ui.menu({
        items: ["One", "Two"],
        handler: (title, index) => {
            title.toLowerCase();
            index.toFixed();
        },
        finished: (cancelled) => {
            cancelled.valueOf();
        },
    });
    const uiMenuResult: { title: string; index: number } = await $ui.menu({
        items: ["One", "Two"],
    });
    const uiPopoverResult: { title: string; index: number } = await $ui.popover({
        sourceView: uiView,
        directions: $popoverDirection.any,
        items: ["Copy", "Delete"],
    });
    const uiPopover = $ui.popover({
        sourceView: uiView,
        directions: $popoverDirection.any,
        views: [
            {
                type: "label",
                props: {
                    text: "Popover",
                },
            },
        ],
    });
    $ui.toast("Saved", 1);
    $ui.clearToast();
    $ui.success("Success");
    $ui.warning("Warning");
    $ui.error("Error");
    $ui.loading("Loading");
    $ui.loading(false);
    $ui.progress(0.5, "Half way");
    $ui.preview({
        title: "Preview",
        html: "<strong>Hello</strong>",
    });
    const uiWindow: UIView = $ui.window;
    const uiController: BBRenderVC = $ui.controller;
    $ui.title = "JSBox";
    const uiSelectedIcon: string = await $ui.selectIcon();
    uiView.hidden = false;
    uiLabel.text.toLowerCase();
    uiButton.title?.toLowerCase();
    uiInput.text.toLowerCase();
    uiSlider.value.toFixed();
    uiSwitch.on.valueOf();
    uiSpinner.loading.valueOf();
    uiProgress.value.toFixed();
    uiGallery.page.toFixed();
    uiStepper.value.toFixed();
    uiText.text.toLowerCase();
    uiImage.image.size.width.toFixed();
    uiVideo.src.toLowerCase();
    uiScroll.contentSize.width.toFixed();
    uiStack.axis.toFixed();
    uiTab.index.toFixed();
    uiMenuView.index.toFixed();
    uiMap.location?.lat.toFixed();
    uiWeb.url.toLowerCase();
    uiList.data;
    uiMatrix.data.length.valueOf();
    uiBlur.hidden = false;
    uiGradient.colors.length.valueOf();
    uiDatePicker.date.valueOf();
    uiPickerView.items;
    uiCanvas.hidden = false;
    uiMarkdown.content.toLowerCase();
    uiLottie.loop.valueOf();
    await uiChart.getOption();
    uiCode.theme.toLowerCase();
    uiRuntime.hidden = false;
    uiFoundView.hidden = false;
    uiAlertResult.index.toFixed();
    uiActionResult.title.toLowerCase();
    uiMenuResult.title.toLowerCase();
    uiPopoverResult.index.toFixed();
    uiPopover.dismiss();
    uiWindow.hidden = false;
    uiController.dismiss();
    uiSelectedIcon.toLowerCase();
}

async function testWidget(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/widget.d.ts
    $widget.height = 180;
    $widget.mode = 1;
    $widget.modeChanged = (mode) => {
        mode.toFixed();
    };
    $widget.family = $widgetFamily.medium;
    const widgetTimeline: WidgetTypes.WidgetOptions = {
        entries: [
            {
                date: new Date(),
                info: {
                    title: "Now",
                },
            },
        ],
        policy: {
            afterDate: new Date(Date.now() + 60_000),
        },
        render: (ctx) => {
            ctx.family.toFixed();
            ctx.displaySize.width.toFixed();
            ctx.isDarkMode.valueOf();
            ctx.entry.info;
            return {
                type: "vstack",
                props: {
                    alignment: $widget.horizontalAlignment.leading,
                    spacing: 8,
                },
                views: [
                    {
                        type: "text",
                        props: {
                            text: "Widget",
                            font: {
                                name: "AvenirNext-Regular",
                                size: 14,
                                weight: "medium",
                            },
                            bold: true,
                        },
                    },
                    {
                        type: "image",
                        props: {
                            symbol: {
                                glyph: "star.fill",
                                size: 18,
                                weight: "medium",
                            },
                            resizable: true,
                        },
                    },
                    {
                        type: "hstack",
                        props: {
                            alignment: $widget.verticalAlignment.center,
                            spacing: 4,
                        },
                        views: [
                            {
                                type: "color",
                                props: {
                                    light: "#ffffff",
                                    dark: "#000000",
                                },
                            },
                            {
                                type: "gradient",
                                props: {
                                    startPoint: $point(0, 0),
                                    endPoint: $point(1, 1),
                                    colors: [sampleColor, sampleDarkColor],
                                },
                            },
                            {
                                type: "divider",
                                props: {
                                    background: sampleColor,
                                },
                            },
                            {
                                type: "spacer",
                                props: {
                                    minLength: 8,
                                },
                            },
                        ],
                    },
                    {
                        type: "vgrid",
                        props: {
                            alignment: $widget.horizontalAlignment.center,
                            columns: [
                                {
                                    fixed: 44,
                                },
                                {
                                    flexible: {
                                        minimum: 20,
                                        maximum: 60,
                                    },
                                },
                            ],
                        },
                        views: [
                            {
                                type: "text",
                                props: {
                                    date: new Date(),
                                    style: $widget.dateStyle.time,
                                },
                            },
                            {
                                type: "text",
                                props: {
                                    startDate: new Date(),
                                    endDate: new Date(Date.now() + 60_000),
                                },
                            },
                        ],
                    },
                ],
            };
        },
    };
    $widget.setTimeline(widgetTimeline);
    $widget.setTimeline((ctx) => ({
        type: "text",
        props: {
            text: String(ctx.family),
        },
    }));
    $widget.reloadTimeline();
    $widget.inputValue.toLowerCase();
    $widget.displaySize.width.toFixed();
    $widget.isDarkMode.valueOf();
    $widget.alignment.center.valueOf();
    $widget.horizontalAlignment.leading.valueOf();
    $widget.verticalAlignment.bottom.valueOf();
    $widget.dateStyle.relative.valueOf();
}

async function testExtendArchiver(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/extend/archiver.d.ts
    $archiver.zip({
        paths: ["shared/a.txt", "shared/b.txt"],
        dest: "shared/archive.zip",
        handler: (success) => {
            success.valueOf();
        },
    });
    const zippedByDirectory: boolean = await $archiver.zip({
        directory: "shared",
        dest: "shared/archive.zip",
    });
    const unzippedByPath: boolean = await $archiver.unzip({
        path: "shared/archive.zip",
        dest: "shared/archive",
    });
    $archiver.unzip({
        file: sampleData,
        dest: "shared/archive",
        handler: (success) => {
            success.valueOf();
        },
    });
    zippedByDirectory.valueOf();
    unzippedByPath.valueOf();
}

async function testExtendBrowser(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/extend/browser.d.ts
    const browserExecResult: any = await $browser.exec({
        script: "document.title",
        handler: (result) => {
            result;
        },
        customEvent: (message) => {
            message;
        },
    });
    const browserExecStringResult: any = await $browser.exec("document.location.href");
    browserExecResult;
    browserExecStringResult;
}

async function testExtendDetector(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/extend/detector.d.ts
    const detectedDates: string[] = $detector.date("Meet me tomorrow at 8");
    const detectedAddresses: string[] = $detector.address("1 Infinite Loop, Cupertino");
    const detectedLinks: string[] = $detector.link("https://example.com");
    const detectedPhones: string[] = $detector.phoneNumber("Call me at 123456789");
    detectedDates.length.valueOf();
    detectedAddresses.length.valueOf();
    detectedLinks.length.valueOf();
    detectedPhones.length.valueOf();
}

async function testExtendEditor(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/extend/editor.d.ts
    const editorView: UIView = $editor.view;
    const editorRange: JBRange = $editor.selectedRange;
    $editor.text.toLowerCase();
    $editor.selectedText.toLowerCase();
    $editor.hasText.valueOf();
    $editor.isActive.valueOf();
    $editor.canUndo.valueOf();
    $editor.canRedo.valueOf();
    $editor.save();
    $editor.undo();
    $editor.redo();
    $editor.activate();
    $editor.deactivate();
    $editor.insertText("Hello");
    $editor.deleteBackward();
    $editor.textInRange($range(0, 5)).toLowerCase();
    $editor.setTextInRange("Hi", $range(0, 2));
    editorView.hidden = false;
    editorRange.length.toFixed();
}

async function testExtendPush(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/extend/push.d.ts
    $push.schedule({
        title: "Reminder",
        body: "JSBox test",
        id: "push-1",
        delay: 60,
        query: { page: 1 },
        handler: (result) => {
            result.toLowerCase();
        },
    });
    $push.cancel({
        id: "push-1",
    });
    $push.clear();
}

async function testExtendQrcode(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/extend/qrcode.d.ts
    const encodedQr: UIImage = $qrcode.encode("https://example.com");
    const decodedQr: string = $qrcode.decode(sampleImage);
    $qrcode.scan({
        useFrontCamera: true,
        turnOnFlash: false,
        handler: (result) => {
            result.toLowerCase();
        },
        cancelled: () => {},
    });
    $qrcode.scan((result) => {
        result.toLowerCase();
    });
    encodedQr.size.width.toFixed();
    decodedQr.toLowerCase();
}

async function testExtendShare(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/extend/share.d.ts
    $share.sheet({
        item: "Hello",
        handler: (success) => {
            success.valueOf();
        },
    });
    $share.sheet({
        items: [sampleImage, sampleImage],
        handler: (success) => {
            success.valueOf();
        },
    });
    $share.wechat(sampleImage);
    $share.qq(sampleData);
    $share.universal(sampleImage);
}

async function testExtendText(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/extend/text.d.ts
    $text.tokenize({
        text: "Hello JSBox",
        handler: (results) => {
            results[0].toLowerCase();
        },
    });
    $text.analysis({
        text: "Hello JSBox",
        handler: (results) => {
            results[0].token.toLowerCase();
            results[0].tag.toLowerCase();
        },
    });
    $text.lookup("Hello");
    const availableVoices: TextTypes.Voice[] = $text.ttsVoices();
    const chosenVoice: TextTypes.Voice = availableVoices[0];
    const speechPlayer: TextTypes.Speech = $text.speech({
        text: "Hello JSBox",
        rate: 0.5,
        language: "en-US",
        voice: chosenVoice,
        events: {
            didStart: (sender) => {
                sender.pause();
            },
            didFinish: (sender) => {
                sender.stop();
            },
        },
    });
    const textUuid: string = $text.uuid;
    const textBase64: string = $text.base64Encode("Hello");
    const textDecodedBase64: string = $text.base64Decode(textBase64);
    const encodedUrl: string = $text.URLEncode("a b");
    const decodedUrl: string = $text.URLDecode(encodedUrl);
    const htmlEscaped: string = $text.HTMLEscape("<b>Hello</b>");
    const htmlUnescaped: string = $text.HTMLUnescape(htmlEscaped);
    const textMd5: string = $text.MD5("Hello");
    const textSha1: string = $text.SHA1("Hello");
    const textSha256: string = $text.SHA256("Hello");
    const pinYin: string = $text.convertToPinYin("中文");
    const markdownHtml: string = $text.markdownToHtml("# Hello");
    const markdownText: string = await $text.htmlToMarkdown({ html: "<strong>Hello</strong>" });
    $text.htmlToMarkdown({
        html: "<strong>Hello</strong>",
        handler: (markdown: string) => {
            markdown.toLowerCase();
        },
    });
    const decodedDataText: string = $text.decodeData({ data: sampleData });
    const textSize = $text.sizeThatFits({
        text: "Hello JSBox",
        width: 120,
        font: sampleFont,
        lineSpacing: 4,
    });
    speechPlayer.pause();
    speechPlayer.continue();
    speechPlayer.stop();
    chosenVoice.language.toLowerCase();
    chosenVoice.identifier.toLowerCase();
    chosenVoice.name.toLowerCase();
    chosenVoice.quality.toFixed();
    chosenVoice.gender.toFixed();
    chosenVoice.audioFileSettings;
    textUuid.toLowerCase();
    textDecodedBase64.toLowerCase();
    decodedUrl.toLowerCase();
    htmlUnescaped.toLowerCase();
    textMd5.toLowerCase();
    textSha1.toLowerCase();
    textSha256.toLowerCase();
    pinYin.toLowerCase();
    markdownHtml.toLowerCase();
    markdownText.toLowerCase();
    decodedDataText.toLowerCase();
    textSize.height.toFixed();
}

async function testExtendXml(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/extend/xml.d.ts
    const xmlDocument: XmlTypes.XMLDocument = $xml.parse({
        string: "<book id='1'><title>JSBox</title></book>",
        mode: "xml",
    });
    const xmlRoot: XmlTypes.XMLElement = xmlDocument.rootElement;
    const xmlTitle: XmlTypes.XMLElement = xmlRoot.firstChild({ tag: "title" });
    const xmlChildren: XmlTypes.XMLElement[] = xmlRoot.children();
    xmlDocument.version.toLowerCase();
    xmlDocument.value({ attribute: "id" }).toLowerCase();
    xmlDocument.definePrefix({ prefix: "x", namespace: "https://example.com/ns" });
    xmlDocument.enumerate({
        xPath: "//title",
        handler: (element, idx) => {
            element.tag.toLowerCase();
            idx.toFixed();
        },
    });
    xmlRoot.tag.toLowerCase();
    xmlRoot.attributes.id.toLowerCase();
    xmlRoot.number.valueOf();
    xmlTitle.string.toLowerCase();
    xmlChildren.length.valueOf();
    xmlTitle.value({ attribute: "id" });
    xmlTitle.enumerate({
        selector: "title",
        handler: (element, idx) => {
            element.tag.toLowerCase();
            idx.toFixed();
        },
    });
}

async function testFoundationApp(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/foundation/app.d.ts
    $app.theme = "auto";
    $app.tips("Tip");
    $app.close(0.1);
    $app.openURL("https://example.com");
    $app.openBrowser({
        type: 0,
        url: "https://example.com",
    });
    $app.openExtension("today");
    $app.listen({
        ready: () => {},
        pause: () => {},
        resume: () => {},
        custom: (object) => {
            object;
        },
    });
    $app.notify({
        name: "refresh",
        object: { source: "tests" },
    });
    const appInfo: AppTypes.AppInfo = $app.info;
    const appStrings: AppTypes.Strings = $app.strings;
    $app.idleTimerDisabled = true;
    $app.autoKeyboardEnabled = false;
    $app.keyboardToolbarEnabled = true;
    $app.rotateDisabled = false;
    appInfo.bundleID.toLowerCase();
    appInfo.version.toLowerCase();
    appInfo.build.toLowerCase();
    $app.minSDKVer.toLowerCase();
    $app.minOSVer.toLowerCase();
    $app.isDebugging.valueOf();
    $app.env.valueOf();
    $app.widgetIndex.valueOf();
    appStrings.en = { HELLO: "Hello" };
}

async function testFoundationCache(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/foundation/cache.d.ts
    $cache.set("token", "value");
    $cache.setAsync({
        key: "token",
        value: "value",
        handler: (result) => {
            result;
        },
    });
    const cachedToken: any = $cache.get("token");
    $cache.getAsync({
        key: "token",
        handler: (result) => {
            result;
        },
    });
    $cache.remove("token");
    $cache.removeAsync({
        key: "token",
        handler: () => {},
    });
    $cache.clear();
    $cache.clearAsync({
        handler: () => {},
    });
    cachedToken;
}

async function testFoundationClipboard(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/foundation/clipboard.d.ts
    const clipboardText: string | undefined = $clipboard.text;
    const clipboardImage: NSData | undefined = $clipboard.image;
    const clipboardItems: any[] = $clipboard.items;
    const clipboardPhones: string[] = $clipboard.phoneNumbers;
    const clipboardPhone: string | undefined = $clipboard.phoneNumber;
    const clipboardLinks: string[] = $clipboard.links;
    const clipboardLink: string | undefined = $clipboard.link;
    const clipboardEmails: string[] = $clipboard.emails;
    const clipboardEmail: string | undefined = $clipboard.email;
    const clipboardDates: Date[] = $clipboard.dates;
    const clipboardDate: Date | undefined = $clipboard.date;
    $clipboard.setTextLocalOnly("Local text");
    $clipboard.set({ type: "public.text", value: "Hello" });
    $clipboard.copy({
        text: "Hello",
        ttl: 60,
        locally: true,
    });
    $clipboard.clear();
    clipboardText?.toLowerCase();
    clipboardImage?.byteArray.length.valueOf();
    clipboardItems.length.valueOf();
    clipboardPhones.length.valueOf();
    clipboardPhone?.toLowerCase();
    clipboardLinks.length.valueOf();
    clipboardLink?.toLowerCase();
    clipboardEmails.length.valueOf();
    clipboardEmail?.toLowerCase();
    clipboardDates.length.valueOf();
    clipboardDate?.valueOf();
}

async function testFoundationDevice(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/foundation/device.d.ts
    const deviceInfo: DeviceTypes.DeviceInfo = $device.info;
    const wifiInfo: DeviceTypes.WifiInfo = $device.ssid;
    const spaceInfo: DeviceTypes.SpaceInfo = $device.space;
    $device.taptic(1);
    deviceInfo.model.toLowerCase();
    deviceInfo.language.toLowerCase();
    deviceInfo.version.toLowerCase();
    deviceInfo.name.toLowerCase();
    deviceInfo.screen.width.toFixed();
    deviceInfo.battery.level.toFixed();
    wifiInfo.BSSID.toLowerCase();
    wifiInfo.SSID.toLowerCase();
    spaceInfo.disk.free.bytes.toFixed();
    spaceInfo.memory.total.string.toLowerCase();
    $device.networkType.valueOf();
    $device.wlanAddress.toLowerCase();
    $device.isDarkMode.valueOf();
    $device.isIphoneX.valueOf();
    $device.isIphonePlus.valueOf();
    $device.isIpad.valueOf();
    $device.isIpadPro.valueOf();
    $device.hasTouchID.valueOf();
    $device.hasFaceID.valueOf();
    $device.isJailbroken.valueOf();
    $device.isVoiceOverOn.valueOf();
}

async function testFoundationHttp(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/foundation/http.d.ts
    const httpCancelledCode: HttpTypes.NSURLErrorDomain = HttpTypes.NSURLErrorDomain.NSURLErrorCancelled;
    $http.request({
        url: "https://example.com/api",
        method: "POST",
        header: { Authorization: "Bearer token" },
        body: { query: "jsbox" },
        timeout: 30,
        handler: (response) => {
            response.rawData.byteArray.length.valueOf();
            response.response.statusCode.toFixed();
            response.response.headers["content-type"].toLowerCase();
            if (response.error) {
                response.error.localizedDescription.toLowerCase();
            }
        },
    });
    const httpGetResponse: HttpTypes.HttpResponse = await $http.get("https://example.com");
    const httpPostResponse: HttpTypes.HttpResponse = await $http.post({
        url: "https://example.com/search",
        form: { keyword: "jsbox" },
    });
    const httpDownloadResponse: HttpTypes.DownloadResponse = await $http.download({
        url: "https://example.com/file.png",
        showsProgress: true,
        progress: (bytesWritten, totalBytes) => {
            bytesWritten.toFixed();
            totalBytes.toFixed();
        },
    });
    const httpUploadResponse: HttpTypes.HttpResponse = await $http.upload({
        url: "https://example.com/upload",
        files: [
            {
                data: sampleData,
                name: "file",
                filename: "hello.txt",
                "content-type": "text/plain",
            },
        ],
        showsProgress: true,
        progress: (percentage) => {
            percentage.toFixed();
        },
    });
    $http.startServer({
        port: 8080,
        path: "shared/www",
        handler: (result) => {
            result.success.valueOf();
            result.publicServerURL.toLowerCase();
            result.url.toLowerCase();
            result.port.toFixed();
            if (result.error) {
                result.error.localizedDescription.toLowerCase();
            }
        },
    });
    $http.stopServer();
    $http.shorten({
        url: "https://example.com",
        handler: (url) => {
            url.toLowerCase();
        },
    });
    const httpLengthenedUrl: string = await $http.lengthen({
        url: "https://example.com/short",
    });
    httpCancelledCode.valueOf();
    httpGetResponse.response.url.toLowerCase();
    httpGetResponse.response.MIMEType.toLowerCase();
    httpGetResponse.response.expectedContentLength.toFixed();
    httpGetResponse.response.textEncodingName.toLowerCase();
    httpGetResponse.response.suggestedFilename.toLowerCase();
    if (httpGetResponse.error) {
        const httpErrorCode: HttpTypes.NSURLErrorDomain = httpGetResponse.error.code;
        httpErrorCode.valueOf();
    }
    httpPostResponse.response.statusCode.toFixed();
    httpDownloadResponse.data.byteArray.length.valueOf();
    httpUploadResponse.response.statusCode.toFixed();
    httpLengthenedUrl.toLowerCase();
}

async function testFoundationKeychain(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/foundation/keychain.d.ts
    const keychainSetResult: boolean = $keychain.set("token", "value", "jsbox");
    const keychainValue: string = $keychain.get("token", "jsbox");
    const keychainRemoveResult: boolean = $keychain.remove("token", "jsbox");
    const keychainClearResult: boolean = $keychain.clear("jsbox");
    const keychainKeys: string[] = $keychain.keys("jsbox");
    keychainSetResult.valueOf();
    keychainValue.toLowerCase();
    keychainRemoveResult.valueOf();
    keychainClearResult.valueOf();
    keychainKeys.length.valueOf();
}

async function testFoundationNetwork(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/foundation/network.d.ts
    const networkIfaData = $network.ifa_data;
    const networkInterfaces: NetworkTypes.NetworkInterfaceInfo = $network.interfaces;
    const networkProxySettings: any = $network.proxy_settings;
    $network.startPinging({
        host: "example.com",
        timeout: 2,
        period: 1,
        payloadSize: 64,
        ttl: 64,
        didReceiveReply: (summary) => {
            summary.sequenceNumber.toFixed();
            summary.payloadSize.toFixed();
            summary.ttl.toFixed();
            summary.host.toLowerCase();
            summary.rtt.toFixed();
            summary.status.toFixed();
            summary.sendDate?.valueOf();
            summary.receiveDate?.valueOf();
        },
        didReceiveUnexpectedReply: (summary) => {
            summary.sequenceNumber.toFixed();
        },
        didSendPing: (summary) => {
            summary.sequenceNumber.toFixed();
        },
        didTimeout: (summary) => {
            summary.sequenceNumber.toFixed();
        },
        didFail: (error) => {
            error.localizedDescription.toLowerCase();
        },
        didFailToSendPing: (response) => {
            response;
        },
    });
    $network.stopPinging();
    networkIfaData.en0?.received.toFixed();
    networkInterfaces.en0?.toLowerCase();
    networkProxySettings;
}

async function testFoundationPrefs(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/foundation/prefs.d.ts
    const prefsValue: any = $prefs.get("theme");
    $prefs.set("theme", "dark");
    const allPrefs: { [key: string]: any } = $prefs.all();
    $prefs.open(() => {});
    const prefsConfig: PrefsTypes.PrefsJson = {
        title: "Settings",
        groups: [
            {
                title: "General",
                items: [
                    {
                        title: "Username",
                        type: "string",
                        key: "username",
                    },
                    {
                        title: "Notifications",
                        type: "boolean",
                        key: "notifications",
                    },
                    {
                        title: "Options",
                        type: "child",
                        key: "options",
                        items: [
                            {
                                title: "Theme",
                                type: "list",
                                key: "theme",
                                items: ["light", "dark"],
                            },
                        ],
                    },
                ],
            },
        ],
    };
    const editedPrefs: PrefsTypes.PrefsJson = await $prefs.edit(prefsConfig);
    prefsValue;
    allPrefs.theme;
    editedPrefs.groups[0].items[0].key.toLowerCase();
}

async function testFoundationSystem(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/foundation/system.d.ts
    $system.brightness = 0.5;
    $system.volume = 0.5;
    $system.call("10086");
    $system.sms("10086");
    $system.mailto("hello@example.com");
    $system.facetime("10086");
    $system.makeIcon({
        title: "JSBox",
        url: "https://example.com",
        icon: sampleImage,
    });
    $system.brightness.toFixed();
    $system.volume.toFixed();
}

async function testFoundationThread(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/foundation/thread.d.ts
    $thread.background(() => {});
    $thread.background({
        delay: 0.1,
        handler: () => {},
    });
    $thread.main(() => {});
    $thread.main({
        delay: 0.1,
        handler: () => {},
    });
}

async function testFoundationTimer(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/foundation/timer.d.ts
    const scheduledTimer: TimerTypes.Timer = $timer.schedule({
        interval: 1,
        handler: () => {},
    });
    scheduledTimer.invalidate();
}

async function testMediaAudio(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/media/audio.d.ts
    $audio.play({
        path: "assets/test.mp3",
        events: {
            itemEnded: () => {},
            playbackStalled: () => {},
        },
    });
    $audio.pause();
    $audio.resume();
    $audio.stop();
    $audio.seek(3);
    $audio.status.valueOf();
    $audio.duration.toFixed();
    $audio.offset.toFixed();
}

async function testMediaImagekit(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/media/imagekit.d.ts
    const renderedImage: UIImage = $imagekit.render(
        {
            size: $size(40, 40),
            color: sampleColor,
            scale: 2,
            opaque: false,
        },
        (ctx) => {
            ctx.fillColor = sampleColor;
            ctx.addRect($rect(0, 0, 40, 40));
            ctx.fillPath();
        },
    );
    const imageInfo: ImagekitTypes.ImageInfo = $imagekit.info(sampleImage);
    const grayImage: UIImage = $imagekit.grayscale(sampleImage);
    const invertedImage: UIImage = $imagekit.invert(sampleImage);
    const brighterImage: UIImage = $imagekit.adjustBrightness(sampleImage, 10);
    const croppedImage: UIImage = $imagekit.cropTo(sampleImage, $size(20, 20), ImagekitTypes.CropToMode.Center);
    const scaledImage: UIImage = $imagekit.scaleAspectFit(sampleImage, $size(50, 50));
    const flippedImage: UIImage = $imagekit.flip(sampleImage, ImagekitTypes.OrientationMode.horizontally);
    const roundedImage: UIImage = $imagekit.rounded(sampleImage, 8);
    const circularImage: UIImage = $imagekit.circular(sampleImage);
    const extractedGif: ImagekitTypes.GIFExtractResult = await $imagekit.extractGIF(sampleData);
    const madeGif: NSData = await $imagekit.makeGIF([sampleImage, sampleImage], { duration: 0.2, size: 320 });
    const madeVideo: NSData = await $imagekit.makeVideo([sampleImage, sampleImage], { durations: [0.1, 0.2] });
    renderedImage.size.width.toFixed();
    imageInfo.width.toFixed();
    imageInfo.props.width.toFixed();
    grayImage.size.height.toFixed();
    invertedImage.size.height.toFixed();
    brighterImage.size.height.toFixed();
    croppedImage.size.width.toFixed();
    scaledImage.size.height.toFixed();
    flippedImage.size.width.toFixed();
    roundedImage.size.height.toFixed();
    circularImage.size.width.toFixed();
    extractedGif.images.length.valueOf();
    extractedGif.durations.length.valueOf();
    madeGif.byteArray.length.valueOf();
    madeVideo.byteArray.length.valueOf();
}

async function testMediaPdf(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/media/pdf.d.ts
    $pdf.make({
        html: "<h1>Hello</h1>",
        pageSize: $pageSize.A4,
        handler: (resp) => {
            resp.data.byteArray.length.valueOf();
        },
    });
    const pdfDataResponse = await $pdf.make({
        html: "<h1>Hello</h1>",
        pageSize: $pageSize.A4,
    });
    const pdfImages: UIImage[] = $pdf.toImages(pdfDataResponse.data);
    const pdfCover: UIImage = $pdf.toImage(pdfDataResponse.data);
    pdfDataResponse.data.byteArray.length.valueOf();
    pdfImages.length.valueOf();
    pdfCover.size.width.toFixed();
}

async function testMediaPhoto(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/media/photo.d.ts
    $photo.take({
        edit: true,
        handler: (resp) => {
            resp.status.valueOf();
            resp.image.size.width.toFixed();
            resp.filename.toLowerCase();
        },
    });
    const takenPhoto: PhotoTypes.PhotoResponse<"image"> = await $photo.take({ edit: true });
    $photo.pick({
        handler: (resp) => {
            resp.status.valueOf();
            resp.image.size.width.toFixed();
        },
    });
    $photo.pick({
        format: "data",
        multi: true,
        handler: (resp) => {
            resp.results[0].data.byteArray.length.valueOf();
        },
    });
    const pickedPhoto: PhotoTypes.PickResponse<"image", false> = await $photo.pick({ edit: true });
    const pickedPhotoData: PhotoTypes.PickResponse<"data", false> = await $photo.pick({ format: "data" });
    const pickedMultiPhotos: PhotoTypes.PickResponse<"image", true> = await $photo.pick({ multi: true });
    $photo.prompt({
        edit: true,
        handler: (resp) => {
            resp.image.size.height.toFixed();
        },
    });
    $photo.scan({
        handler: (resp) => {
            resp.results[0].size.width.toFixed();
        },
    });
    const scannedPhotos: PhotoTypes.ScanResponse = await $photo.scan();
    $photo.save({
        data: sampleData,
        handler: (success) => {
            success.valueOf();
        },
    });
    $photo.fetch({
        count: 3,
        handler: (images) => {
            images[0].size.width.toFixed();
        },
    });
    const fetchedPhotos: UIImage[] = await $photo.fetch({ count: 3 });
    const fetchedPhotoData: NSData[] = await $photo.fetch({ count: 3, format: "data" });
    $photo.delete({
        count: 3,
        handler: (success) => {
            success.valueOf();
        },
    });
    takenPhoto.image.size.width.toFixed();
    pickedPhoto.image.size.width.toFixed();
    pickedPhotoData.data.byteArray.length.valueOf();
    pickedMultiPhotos.results.length.valueOf();
    scannedPhotos.results.length.valueOf();
    fetchedPhotos.length.valueOf();
    fetchedPhotoData.length.valueOf();
}

async function testMediaQuicklook(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/media/quicklook.d.ts
    $quicklook.open({
        image: sampleImage,
        handler: () => {},
    });
    $quicklook.open({
        html: "<strong>Hello</strong>",
        type: "public.html",
    });
    $quicklook.open({
        list: ["https://example.com"],
    });
}

async function testNetworkServer(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/network/server.d.ts
    const simpleServer: ServerTypes.ServerInstance = $server.start({
        port: 6060,
        path: "shared/www",
        handler: () => {},
    });
    const customServer: ServerTypes.ServerInstance = new $server();
    customServer.listen({
        didStart: (server) => {
            server.stop();
        },
        didConnect: (server) => {
            server.clearHandlers();
        },
        didDisconnect: (server) => {
            server.stop();
        },
    });
    customServer.addHandler({
        filter: (rules) => {
            rules.method.toLowerCase();
            rules.url.toLowerCase();
            rules.path.toLowerCase();
            rules.headers;
            rules.query;
            return "data";
        },
        response: (request) => {
            request.method.toLowerCase();
            request.url.toLowerCase();
            request.headers;
            request.path.toLowerCase();
            request.query;
            request.contentType.toLowerCase();
            request.contentLength.toFixed();
            request.ifModifiedSince.valueOf();
            request.ifNoneMatch.valueOf();
            request.acceptsGzip.valueOf();
            request.localAddressData.byteArray.length.valueOf();
            request.localAddress.toLowerCase();
            request.remoteAddressData.byteArray.length.valueOf();
            request.remoteAddress.toLowerCase();
            request.hasBody.valueOf();
            request.hasByteRange.valueOf();
            return {
                type: "data",
                props: {
                    html: "<h1>Hello</h1>",
                    statusCode: 200,
                    gzipEnabled: true,
                },
            };
        },
        asyncResponse: (request, completion) => {
            request.method.toLowerCase();
            completion({
                type: "file",
                props: {
                    path: "shared/www/index.html",
                    isAttachment: false,
                },
            });
        },
    });
    customServer.start({
        port: 6061,
        bonjourName: "JSBox",
        bonjourType: "_http._tcp",
    });
    customServer.clearHandlers();
    simpleServer.stop();
    customServer.stop();
}

async function testNetworkSocket(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/network/socket.d.ts
    const webSocket: SocketTypes.Socket = $socket.new({
        url: "wss://example.com/socket",
        protocols: ["json"],
        allowsUntrustedSSLCertificates: true,
    });
    webSocket.listen({
        didOpen: (sock) => {
            sock.readyState.toFixed();
        },
        didFail: (sock, error) => {
            sock.readyState.toFixed();
            error.localizedDescription.toLowerCase();
        },
        didClose: (sock, code, reason, wasClean) => {
            sock.readyState.toFixed();
            code.toFixed();
            reason.toLowerCase();
            wasClean.valueOf();
        },
        didReceiveString: (sock, string) => {
            sock.readyState.toFixed();
            string.toLowerCase();
        },
        didReceiveData: (sock, data) => {
            sock.readyState.toFixed();
            data.byteArray.length.valueOf();
        },
        didReceivePing: (sock, data) => {
            sock.readyState.toFixed();
            data.byteArray.length.valueOf();
        },
        didReceivePong: (sock, data) => {
            sock.readyState.toFixed();
            data.byteArray.length.valueOf();
        },
    });
    webSocket.open();
    const socketSendResult = webSocket.send("hello");
    const socketSendDataResult = webSocket.send({ data: sampleData, noCopy: true });
    const socketPingResult = webSocket.ping(sampleData);
    webSocket.close({
        code: 1000,
        reason: "done",
    });
    socketSendResult.result.valueOf();
    socketSendDataResult.result.valueOf();
    socketPingResult.result.valueOf();
}

async function testSdkCalendar(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/sdk/calendar.d.ts
    $calendar.fetch({
        startDate: new Date(),
        hours: 2,
        handler: (response) => {
            response.status.valueOf();
            const event = response.events[0];
            event.title.toLowerCase();
            event.startDate.valueOf();
            $calendar.save({
                event,
                alarmDate: new Date(),
                handler: (saveResponse) => {
                    saveResponse.status.valueOf();
                    saveResponse.error?.localizedDescription.toLowerCase();
                },
            });
            $calendar.delete({
                event,
                handler: (deleteResponse) => {
                    deleteResponse.status.valueOf();
                    deleteResponse.error?.localizedDescription.toLowerCase();
                },
            });
        },
    });
    $calendar.create({
        title: "JSBox Calendar Event",
        startDate: new Date(),
        hours: 1,
        notes: "Created from tests",
        handler: (response) => {
            response.status.valueOf();
            response.error?.localizedDescription.toLowerCase();
        },
    });
}

async function testSdkContact(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/sdk/contact.d.ts
    $contact.pick({
        multi: false,
        handler: (contact) => {
            contact.givenName.toLowerCase();
            contact.phoneNumbers[0].content.toLowerCase();
            $contact.save({
                contact,
                handler: (resp) => {
                    resp.status.valueOf();
                    resp.error?.localizedDescription.toLowerCase();
                },
            });
            $contact.delete({
                contacts: [contact],
                handler: (resp) => {
                    resp.status.valueOf();
                },
            });
            $contact.fetchGroups().then((groups) => {
                const group = groups[0];
                group.name.toLowerCase();
                $contact.addToGroup({ contact, group });
                $contact.removeFromGroup({ contact, group });
            });
        },
    });
    $contact.pick({
        multi: true,
        handler: (contacts) => {
            contacts[0].familyName.toLowerCase();
        },
    });
    $contact.fetch({
        key: "givenName",
        handler: (contacts) => {
            contacts[0].nickname.toLowerCase();
        },
    });
    $contact.create({
        givenName: "JS",
        familyName: "Box",
        phoneNumbers: { mobile: "123456789" },
        emails: { work: "hello@example.com" },
        handler: (resp) => {
            resp.status.valueOf();
            resp.error?.localizedDescription.toLowerCase();
        },
    });
    const createdContactPromise: Promise<void> = $contact.create({
        givenName: "Promise",
        familyName: "Contact",
    });
    const contactGroups: ContactTypes.Group[] = await $contact.fetchGroups();
    $contact.addGroup({
        name: "Friends",
        handler: (group) => {
            group.name.toLowerCase();
            group.identifier.toLowerCase();
            $contact.updateGroup(group);
            $contact.deleteGroup(group);
        },
    });
    const addGroupPromise: Promise<void> = $contact.addGroup({ name: "Team" });
    createdContactPromise;
    contactGroups[0].name.toLowerCase();
    addGroupPromise;
}

async function testSdkLocation(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/sdk/location.d.ts
    const locationAvailable: boolean = $location.available;
    $location.fetch({
        handler: (resp) => {
            resp.lat.toFixed();
            resp.lng.toFixed();
            resp.alt.toFixed();
        },
    });
    $location.startUpdates({
        handler: (resp) => {
            resp.lat.toFixed();
        },
    });
    $location.trackHeading({
        handler: (resp) => {
            resp.magneticHeading.toFixed();
            resp.trueHeading.toFixed();
            resp.headingAccuracy.toFixed();
            resp.x.toFixed();
            resp.y.toFixed();
            resp.z.toFixed();
        },
    });
    $location.stopUpdates();
    $location.select({
        handler: (result) => {
            result.lat.toFixed();
            result.lng.toFixed();
        },
    });
    const currentLocation: LocationTypes.LocationResponse = await $location.get();
    const locationSnapshot: UIImage = await $location.snapshot({
        region: { lat: 0, lng: 0, distance: 1000 },
        size: { width: 200, height: 100 },
        showsPin: true,
        style: 1,
    });
    locationAvailable.valueOf();
    currentLocation.lat.toFixed();
    locationSnapshot.size.width.toFixed();
}

async function testSdkMessage(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/sdk/message.d.ts
    $message.sms({
        recipients: ["10086"],
        body: "Hello",
        subject: "Greeting",
        attachments: [sampleData],
        handler: (result) => {
            const smsResult: 0 | 1 | 2 = result;
            smsResult.valueOf();
        },
    });
    $message.mail({
        subject: "Hello",
        to: ["hello@example.com"],
        cc: ["copy@example.com"],
        bcc: ["blind@example.com"],
        body: "<strong>Hello</strong>",
        isHTML: true,
        attachments: [sampleData],
        handler: (result) => {
            const mailResult: 0 | 1 | 2 | 3 = result;
            mailResult.valueOf();
        },
    });
}

async function testSdkMotion(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/sdk/motion.d.ts
    $motion.startUpdates({
        interval: 0.1,
        handler: (resp) => {
            resp.attitude.yaw.toFixed();
            resp.attitude.pitch.toFixed();
            resp.attitude.roll.toFixed();
            resp.attitude.quaternion.w.toFixed();
            resp.magneticField.accuracy.toFixed();
            resp.rotationRate.x.toFixed();
            resp.acceleration.y.toFixed();
            resp.gravity.z.toFixed();
        },
    });
    $motion.stopUpdates();
}

async function testSdkReminder(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/sdk/reminder.d.ts
    $reminder.fetch({
        startDate: new Date(),
        hours: 2,
        handler: (resp) => {
            resp.status.valueOf();
            const reminder = resp.events[0];
            reminder.title.toLowerCase();
            $reminder.save({
                event: reminder,
                handler: (saveResp) => {
                    saveResp.status.valueOf();
                    saveResp.error?.localizedDescription.toLowerCase();
                },
            });
            $reminder.delete({
                event: reminder,
                handler: (deleteResp) => {
                    deleteResp.status.valueOf();
                    deleteResp.error?.localizedDescription.toLowerCase();
                },
            });
        },
    });
    $reminder.create({
        title: "JSBox Reminder",
        alarmDate: new Date(),
        notes: "Created from tests",
        url: "https://example.com",
        handler: (resp) => {
            resp.status.valueOf();
            resp.error?.localizedDescription.toLowerCase();
        },
    });
}

async function testSdkSafari(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/sdk/safari.d.ts
    $safari.open({
        url: "https://example.com",
        entersReader: true,
        height: 400,
        handler: () => {},
    });
    const safariItems: any = $safari.items;
    $safari.inject("document.body.style.background = 'red'");
    $safari.addReadingItem({
        url: "https://example.com",
        title: "Example",
        preview: "Example preview",
    });
    safariItems;
}

async function testShortcutsIntents(context: TestContext): Promise<void> {
    const { sampleData, sampleImage, sampleColor, sampleDarkColor, sampleFont, samplePoint, sampleSize, sampleInsets } =
        context;

    // src/shortcuts/intents.d.ts
    $intents.height.toFixed();
    $intents.finish({ result: "done" });
}

async function test() {
    const context = createTestContext();
    const tests: Array<{
        title: string;
        handler: () => Promise<void>;
    }> = [
        { title: "addin.d.ts", handler: () => testAddin(context) },
        { title: "basic.d.ts", handler: () => testBasic(context) },
        { title: "constant.d.ts", handler: () => testConstant(context) },
        { title: "context.d.ts", handler: () => testContext(context) },
        { title: "drive.d.ts", handler: () => testDrive(context) },
        { title: "file.d.ts", handler: () => testFile(context) },
        { title: "function.d.ts", handler: () => testFunction(context) },
        { title: "input.d.ts", handler: () => testInput(context) },
        { title: "keyboard.d.ts", handler: () => testKeyboard(context) },
        { title: "nodejs.d.ts", handler: () => testNodejs(context) },
        { title: "picker.d.ts", handler: () => testPicker(context) },
        { title: "sqlite.d.ts", handler: () => testSqlite(context) },
        { title: "ssh.d.ts", handler: () => testSsh(context) },
        { title: "ui.d.ts", handler: () => testUi(context) },
        { title: "widget.d.ts", handler: () => testWidget(context) },
        { title: "extend/archiver.d.ts", handler: () => testExtendArchiver(context) },
        { title: "extend/browser.d.ts", handler: () => testExtendBrowser(context) },
        { title: "extend/detector.d.ts", handler: () => testExtendDetector(context) },
        { title: "extend/editor.d.ts", handler: () => testExtendEditor(context) },
        { title: "extend/push.d.ts", handler: () => testExtendPush(context) },
        { title: "extend/qrcode.d.ts", handler: () => testExtendQrcode(context) },
        { title: "extend/share.d.ts", handler: () => testExtendShare(context) },
        { title: "extend/text.d.ts", handler: () => testExtendText(context) },
        { title: "extend/xml.d.ts", handler: () => testExtendXml(context) },
        { title: "foundation/app.d.ts", handler: () => testFoundationApp(context) },
        { title: "foundation/cache.d.ts", handler: () => testFoundationCache(context) },
        { title: "foundation/clipboard.d.ts", handler: () => testFoundationClipboard(context) },
        { title: "foundation/device.d.ts", handler: () => testFoundationDevice(context) },
        { title: "foundation/http.d.ts", handler: () => testFoundationHttp(context) },
        { title: "foundation/keychain.d.ts", handler: () => testFoundationKeychain(context) },
        { title: "foundation/network.d.ts", handler: () => testFoundationNetwork(context) },
        { title: "foundation/prefs.d.ts", handler: () => testFoundationPrefs(context) },
        { title: "foundation/system.d.ts", handler: () => testFoundationSystem(context) },
        { title: "foundation/thread.d.ts", handler: () => testFoundationThread(context) },
        { title: "foundation/timer.d.ts", handler: () => testFoundationTimer(context) },
        { title: "media/audio.d.ts", handler: () => testMediaAudio(context) },
        { title: "media/imagekit.d.ts", handler: () => testMediaImagekit(context) },
        { title: "media/pdf.d.ts", handler: () => testMediaPdf(context) },
        { title: "media/photo.d.ts", handler: () => testMediaPhoto(context) },
        { title: "media/quicklook.d.ts", handler: () => testMediaQuicklook(context) },
        { title: "network/server.d.ts", handler: () => testNetworkServer(context) },
        { title: "network/socket.d.ts", handler: () => testNetworkSocket(context) },
        { title: "sdk/calendar.d.ts", handler: () => testSdkCalendar(context) },
        { title: "sdk/contact.d.ts", handler: () => testSdkContact(context) },
        { title: "sdk/location.d.ts", handler: () => testSdkLocation(context) },
        { title: "sdk/message.d.ts", handler: () => testSdkMessage(context) },
        { title: "sdk/motion.d.ts", handler: () => testSdkMotion(context) },
        { title: "sdk/reminder.d.ts", handler: () => testSdkReminder(context) },
        { title: "sdk/safari.d.ts", handler: () => testSdkSafari(context) },
        { title: "shortcuts/intents.d.ts", handler: () => testShortcutsIntents(context) },
    ];

    $ui.render({
        props: {
            title: "JSBox Tests",
        },
        views: [
            {
                type: "list",
                props: {
                    data: tests.map((item) => item.title),
                },
                layout: $layout.fill,
                events: {
                    didSelect: async (sender, indexPath, data) => {
                        sender;
                        const selectedTitle: string = data;
                        selectedTitle.toLowerCase();
                        await tests[indexPath.row].handler();
                    },
                },
            },
        ],
    });
}
