function test_application() {
    let application: fin.OpenFinApplication;
    // constructor
    application = new fin.desktop.Application({
        url: "application.html",
        uuid: "74BED629-2D8E-4141-8582-73E364BDFA74",
        name: "Application Name",
        plugins: false,
        mainWindowOptions: {
            defaultHeight: 600,
            defaultWidth: 800,
            defaultTop: 300,
            defaultLeft: 300,
            autoShow: true
        }
    }, (successObj) => {
        console.log("Application successfully created, HTTP response code:", successObj);
        application.run();
    }, (error) => {
        console.log("Error creating application:", error);
    });
    // getCurrent
    application = fin.desktop.Application.getCurrent();
    // wrap
    application = fin.desktop.Application.wrap("454C7F31-A915-4EA2-83F2-CFA655453C52");
    // getWindow
    application.getWindow();
    // addEventListener
    application.addEventListener("closed", (event) => {
        console.log("The application has closed");
    }, () => {
        console.log("The registration was successful");
    }, reason => {
        console.log("failure: " + reason);
    });
    // close
    application.close();
    // getChildWindows
    application.getChildWindows(children => {
        children.forEach(childWindow => {
            console.log("Showing child: " + childWindow.name);
            childWindow.show();
        });
    });
    // getGroups
    application.getGroups(allGroups => {
        console.log(`There are a total of ${allGroups.length} groups.`);

        let groupCounter = 1;
        allGroups.forEach(windowGroup => {
            console.log(`Group ${groupCounter} contains ${windowGroup.length} windows.`);
            ++groupCounter;
        });
    });
    // getManifest
    application.getManifest(manifest => {
        console.log("Application manifest:");
        console.log(manifest);
    });
    // getParentUuid
    application.getParentUuid(parentUuid => {
        console.log("UUID of parent application:");
        console.log(parentUuid);
    });
    // getShortcuts
    application.getShortcuts(config => {
        console.log("Desktop shortcut is enabled: ", config.desktop);
        console.log("Start Menu shortcut is enabled: ", config.startMenu);
        console.log("System Startup shortcut is enabled: ", config.systemStartup);
    });
    // getInfo
    application.getInfo(info => {
        console.log(`Launch mode: ${info.launchMode}`);
    });
    // isRunning
    application.isRunning(running => {
        console.log("the application is", running ? "running" : "not running");
    });
    // registerCustomData
    application.registerCustomData({
        someData: "this is custom"
    }, () => {
        console.log("You will not read this.");
    }, err => {
        console.log("failure:", err);
    });
    // removeEventListener
    const previousCallback = (event: fin.WindowEvent) => { };
    application.removeEventListener("closed", previousCallback, () => {
        console.log("The unregistration was successful");
    }, err => {
        console.log("failure:", err);
    });
    // removeTrayIcon
    application.removeTrayIcon(() => {
        console.log("Removed the tray icon.");
    }, err => {
        console.log("failure:", err);
    });
    // restart
    application.restart(() => {
        console.log("You will not read this.");
    }, err => {
        console.log("failure:", err);
    });
    // schedule restart
    application.scheduleRestart(() => {
        console.log("You will not read this.");
    }, err => {
        console.log("failure:", err);
    });
    // setShortcuts
    application.setShortcuts({
        desktop: true,
        startMenu: false,
        systemStartup: true
    }, () => {
        console.log("Successfully set new shortcut states");
    }, error => {
        console.log("Failed to set new shortcut states. Error: ", error);
    });
    // setTrayIcon
    application.setTrayIcon("https://developer.openf.in/download/openfin.png", clickInfo => {
        console.log(`The mouse has clicked at (${clickInfo.x}, ${clickInfo.y})`);
    });
    // terminate
    application.terminate();
    // wait
    application.addEventListener("not-responding", () => {
        console.log("waiting for hung application");
        application.wait();
    });
}

function test_external_application() {
    let externalApp: fin.OpenFinExternalApplication;
    // wrap
    externalApp = fin.desktop.ExternalApp.wrap('my-uuid');
    // addEventListener
    externalApp.addEventListener('connected', () => {
        console.log('external app connected');
    }, () => {
        console.log('The registration was successful');
    }, (reason, err) => {
        console.log(`Error Message: ${err.message} Error Stack: ${err.stack}`);
    });
    // removeEventListener
    const previousCallback = () => { };
    externalApp.removeEventListener('connected', previousCallback, () => {
        console.log('The unregistration was successful');
    }, (reason, err) => {
        console.log(`Error Message: ${err.message} Error Stack: ${err.stack}`);
    });
}

function test_inter_application_bus() {
    // addSubscribeListener
    fin.desktop.InterApplicationBus.addSubscribeListener((uuid, topic, name) => {
        console.log(`The application ${uuid} has subscribed to ${topic}`);
    });
    // addUnsubscribeListener
    fin.desktop.InterApplicationBus.addUnsubscribeListener((uuid, topic, name) => {
        console.log(`The application ${uuid} has unsubscribed to ${topic}`);
    });
    // removeSubscribeListener
    const aRegisteredListener = (uuid: string, topic: string, name: string) => { };
    fin.desktop.InterApplicationBus.removeSubscribeListener(aRegisteredListener);
    // removeUnsubscribeListener
    fin.desktop.InterApplicationBus.removeUnsubscribeListener(aRegisteredListener);
    // publish
    fin.desktop.InterApplicationBus.publish("a topic", {
        field1: "value1",
        field2: "value2"
    });
    // send
    fin.desktop.InterApplicationBus.send("an application's uuid", "a topic", {
        field1: "value1",
        field2: "value2"
    });
    // subscribe
    fin.desktop.InterApplicationBus.subscribe("*", "a topic", (message, uuid, name) => {
        console.log(`The application ${uuid} sent this message: ${message}`);
    });
    // unsubscribe
    const aRegisteredMessageListener = (message: any, senderUuid: string) => {
        console.log(message, senderUuid);
    };
    fin.desktop.InterApplicationBus.unsubscribe("*", "a topic", aRegisteredMessageListener);
}

function test_notification() {
    let notification: fin.OpenFinNotification;
    // getCurrent
    notification = fin.desktop.Notification.getCurrent();
    // close
    notification.close();
    // sendMessage
    notification = new fin.desktop.Notification({
        duration: 10,
        url: "http://localhost:5000/Account/Register",
        message: "Hello",
        onShow: () => { },
        // onClose: () => { },
        onDismiss: () => { },
        // onClick: () => { },
        onMessage: () => { },
        onError: () => { }
    });
    // sendMessageToApplication
    notification.sendMessageToApplication("some message");
}

function test_system() {
    // addEventListener
    fin.desktop.System.addEventListener('monitor-info-changed', event => {
        console.log("The monitor information has changed to: ", event);
    }, () => {
        console.log("The registration was successful");
    }, err => {
        console.log("failure: " + err);
    });
    // clearCache
    fin.desktop.System.clearCache({
        cache: true,
        cookies: true,
        localStorage: true,
        appcache: true,
        userData: true
    });
    // deleteCacheOnExit
    fin.desktop.System.deleteCacheOnExit(() => {
        console.log("successful");
    }, err => {
        console.log("failure: " + err);
    });
    // downloadAsset
    const dirAppAsset = {
        src: 'http://local:8000/dir.zip',
        alias: 'dirApp',
        version: '1.23.24',
        target: 'dir.bat',
        args: ''
    };
    fin.desktop.System.downloadAsset(dirAppAsset, progress => {
        const downloadedPercent = Math.floor((progress.downloadedBytes / progress.totalBytes) * 100);
        console.log(`Downloaded ${downloadedPercent}%`);
    }, p => {
        console.log(`Downlod complete, can be found on ${p.path}`);
        // lets launch our application asset.
        // launchDirApp();
    }, (reason, err) => {
        console.log(reason, err);
    });
    // exit
    fin.desktop.System.exit(() => {
        console.log("successful");
    }, err => {
        console.log("failure: " + err);
    });
    // getAllApplications
    fin.desktop.System.getAllApplications(applicationInfoList => {
        applicationInfoList.forEach(applicationInfo => {
            console.log("Showing information for application with uuid: "
                + applicationInfo.uuid);
            console.log("isRunning: ", applicationInfo.isRunning);
        });
    });
    // getAllExternalApplications
    fin.desktop.System.getAllExternalApplications(externalAppsInfoList => {
        externalAppsInfoList.forEach(appInfo => {
            console.log(`External app connected to the runtime with UUID ${appInfo.uuid}`);
        });
    });
    // getAllWindows
    fin.desktop.System.getAllWindows(windowInfoList => {
        windowInfoList.forEach(windowInfo => {
            console.log("Showing information for application with uuid: ", windowInfo.uuid);
            console.log("Main window: ", windowInfo.mainWindow);
            console.log("Child windows: ", windowInfo.childWindows);
        });
    });
    // getCommandLineArguments
    fin.desktop.System.getCommandLineArguments(args => {
        console.log("The command line arguments are " + args);
    });
    // getDeviceId
    fin.desktop.System.getDeviceId(id => {
        console.log("The id of the device is: " + id);
    });
    // getEnvironmentVariable
    fin.desktop.System.getEnvironmentVariable("APPDATA", variable => {
        console.log("this is the APPDATA value", variable);
    });
    // getHostSpecs
    fin.desktop.System.getHostSpecs(info => {
        console.log(info);
    }, error => {
        console.log('There was an error:', error);
    });
    // getLog
    fin.desktop.System.getLog('debug-2015-01-08-22-27-53.log', log => {
        console.log(log);
    });
    // getLogList
    fin.desktop.System.getLogList(logList => {
        logList.forEach(logInfo => {
            console.log(`The filename of the log is ${logInfo.name}, the size is ${logInfo.size}, and the date of creation is ${logInfo.date}`);
        });
    });
    // getMonitorInfo
    fin.desktop.System.getMonitorInfo(monitorInfo => {
        console.log("This object contains information about all monitors: ", monitorInfo);
    });
    // getMousePosition
    fin.desktop.System.getMousePosition(mousePosition => {
        console.log(`The mouse is located at left: ${mousePosition.left}, top: ${mousePosition.top}`);
    });
    // getProcessList
    fin.desktop.System.getProcessList(list => {
        list.forEach(process => {
            console.log(`UUID: ${process.uuid}, Application Name: ${process.name}`);
        });
    });
    // getProxySettings
    fin.desktop.System.getProxySettings(proxy => {
        console.log(proxy);
    });
    // getRvmInfo
    fin.desktop.System.getRvmInfo(rvmInfoObject => {
        console.log("RVM version:", rvmInfoObject.version);
        console.log("RVM has been running since:", rvmInfoObject["start-time"]);
    }, err => {
        console.log("Failed to get rvm info, error message:", err);
    });
    // getVersion
    fin.desktop.System.getVersion(version => {
        console.log("The version is " + version);
    });
    // launchExternalProcess
    fin.desktop.System.launchExternalProcess({
        path: "notepad",
        arguments: "",
        listener(result) {
            console.log('the exit code', result.exitCode);
        }
    }, payload => {
        console.log('Success:', payload.uuid);
    }, error => {
        console.log('Error:', error);
    });
    //
    fin.desktop.System.launchExternalProcess({
        // Additionally note that the executable found in the zip file specified in appAssets
        // will default to the one mentioned by appAssets.target
        // If the the path below refers to a specific path it will override this default
        alias: "myApp",
        listener(result) {
            console.log('the exit code', result.exitCode);
        }
    }, payload => {
        console.log('Success:', payload.uuid);
    }, error => {
        console.log('Error:', error);
    });
    //
    fin.desktop.System.launchExternalProcess({
        alias: "myApp",
        arguments: "e f g",
        listener(result) {
            console.log('the exit code', result.exitCode);
        }
    }, payload => {
        console.log('Success:', payload.uuid);
    }, error => {
        console.log('Error:', error);
    });
    //
    fin.desktop.System.launchExternalProcess({
        path: "C:\Users\ExampleUser\AppData\Local\OpenFin\OpenFinRVM.exe",
        arguments: "--version",
        certificate: {
            trusted: true,
            subject: 'O=OpenFin INC., L=New York, S=NY, C=US',
            thumbprint: '3c a5 28 19 83 05 fe 69 88 e6 8f 4b 3a af c5 c5 1b 07 80 5b'
        },
        listener(result) {
            console.log('the exit code', result.exitCode);
        }
    }, payload => {
        console.log('Success:', payload.uuid);
    }, error => {
        console.log('Error:', error);
    });
    // log
    fin.desktop.System.log("info", "An example log message", () => {
        console.log("message successfully logged");
    }, err => {
        console.log(err);
    });
    // monitorExternalProcess
    fin.desktop.System.monitorExternalProcess({
        pid: 2508,
        listener(result) {
            console.log('the exit code', result.exitCode);
        }
    }, payload => {
        console.log("The process is now being monitored: ", payload.uuid);
    }, error => {
        console.log("Error:", error);
    });
    // openUrlWithBrowser
    fin.desktop.System.openUrlWithBrowser("https://developer.openf.in/", () => {
        console.log("successful");
    }, err => {
        console.log("failure: " + err);
    });
    // registerExternalConnection
    fin.desktop.System.registerExternalConnection("remote-connection-uuid", (...args: any[]) => {
        console.log(args);
    });
    // releaseExternalProcess
    fin.desktop.System.launchExternalProcess({
        path: "notepad",
        arguments: "",
        listener(result) {
            console.log("The exit code", result.exitCode);
        }
    }, result => {
        console.log("Result UUID is " + result.uuid);

        // release it.
        fin.desktop.System.releaseExternalProcess(result.uuid, () => {
            console.log("Process has been unmapped!");
        }, reason => {
            console.log("failure: " + reason);
        });
    });
    // removeEventListener
    const aRegisteredListener = (event: fin.SystemBaseEvent) => { };
    fin.desktop.System.removeEventListener("monitor-info-changed", aRegisteredListener, () => {
        console.log("successful");
    }, err => {
        console.log("failure: " + err);
    });
    // showDeveloperTools
    fin.desktop.System.showDeveloperTools("uuid", "name", () => {
        console.log("successful");
    }, err => {
        console.log("failure: " + err);
    });
    // terminateExternalProcess
    fin.desktop.System.launchExternalProcess({
        // notepad is in the system's PATH
        path: "notepad",
        arguments: "",
        listener(result) {
            console.log("The exit code", result.exitCode);
        }
    }, result => {
        console.log("Result UUID is " + result.uuid);

        // Attempt to close the process. Terminate after 4 seconds if it
        // has not done so.
        fin.desktop.System.terminateExternalProcess(result.uuid, 4000, info => {
            console.log("Termination result " + info.result);
        }, reason => {
            console.log("failure: " + reason);
        });
    });
    // updateProxySettings
    fin.desktop.System.updateProxySettings("type", "proxyAddress", 8080, () => {
        console.log('success');
    }, err => {
        console.log(err);
    });
}

function test_system_clipboard() {
    // availableFormats
    fin.desktop.System.Clipboard.availableFormats(null, formats => {
        formats.forEach(format => console.log(`The format ${format} is available to read`));
    }, (reason, err) => {
        console.log(`Error while reading the clipboard Message: ${err.message}, Stack: ${err.stack}`);
    });
    // readHtml
    fin.desktop.System.Clipboard.readHtml(null, html => {
        console.log(`This is the html from the clipboard: ${html}`);
    }, (reason, err) => {
        console.log(`Error while reading the clipboard Message: ${err.message}, Stack: ${err.stack}`);
    });
    // readRtf
    fin.desktop.System.Clipboard.readRtf(null, rtf => {
        console.log(`This is the rtf from the clipboard: ${rtf}`);
    }, (reason, err) => {
        console.log(`Error while reading the clipboard Message: ${err.message}, Stack: ${err.stack}`);
    });
    // readText
    fin.desktop.System.Clipboard.readText(null, text => {
        console.log(`This is the text from the clipboard: ${text}`);
    }, (reason, err) => {
        console.log(`Error while reading the clipboard Message: ${err.message}, Stack: ${err.stack}`);
    });
    // write
    fin.desktop.System.Clipboard.write({
        text: 'Hello Text!',
        html: '<h1>Hello Html</h1>',
        rtf: 'Hello Rtf'
    }, null, () => {
        console.log('Success!!');
    }, (reason, err) => {
        console.log(`Error while reading the clipboard Message: ${err.message}, Stack: ${err.stack}`);
    });
    // writeHtml
    fin.desktop.System.Clipboard.writeHtml('<h1>Hello World</h1>', null, () => {
        console.log('Success!!');
    }, (reason, err) => {
        console.log(`Error while reading the clipboard Message: ${err.message}, Stack: ${err.stack}`);
    });
    // writeRtf
    fin.desktop.System.Clipboard.writeRtf('Hello World!', null, () => {
        console.log('Success!!');
    }, (reason, err) => {
        console.log(`Error while reading the clipboard Message: ${err.message}, Stack: ${err.stack}`);
    });
    // writeText
    fin.desktop.System.Clipboard.writeText('Hello World', null, () => {
        console.log('Success!!');
    }, (reason, err) => {
        console.log(`Error while reading the clipboard Message: ${err.message}, Stack: ${err.stack}`);
    });
}

function test_window() {
    let finWindow: fin.OpenFinWindow;
    // constructor
    finWindow = new fin.desktop.Window({
        name: "childWindow",
        url: "child.html",
        defaultWidth: 320,
        defaultHeight: 320,
        defaultTop: 10,
        defaultLeft: 300,
        frame: false,
        resizable: false,
        state: "normal"
    }, () => {
        const _win = finWindow.getNativeWindow();
        _win.addEventListener("DOMContentLoaded", () => { finWindow.show(); });
    }, error => {
        console.log("Error creating window:", error);
    });
    // getCurrent
    finWindow = fin.desktop.Window.getCurrent();
    // getNativeWindow
    let nativeWindow: Window;
    nativeWindow = finWindow.getNativeWindow();
    // getParentApplication
    let parentApp: fin.OpenFinApplication;
    parentApp = finWindow.getParentApplication();
    // getParentWindow
    let parentFinWindow: fin.OpenFinWindow;
    parentFinWindow = finWindow.getParentWindow();
    // wrap
    finWindow = fin.desktop.Window.wrap("uuid", "name");
    // addEventListener
    finWindow.addEventListener("bounds-changed", event => {
        console.log("The window has been moved or resized");
    }, () => {
        console.log("The registration was successful");
    }, reason => {
        console.log("failure:" + reason);
    });
    // animate
    finWindow.animate({
        opacity: {
            opacity: 0.15,
            duration: 1000
        },
        position: {
            left: 10,
            top: 10,
            duration: 3000
        }
    }, {
            interrupt: false
        }, evt => {
            // Callback will only fire after both "opacity" and "position" have finished animating.
        });
    // authenticate
    finWindow.addEventListener('auth-requested', evt => {
        finWindow.authenticate('userName', 'P@assw0rd', () => { }, (reason, err) => {
            console.log("failure:", err);
        });
    });
    // blur
    finWindow.blur();
    // bringToFront
    finWindow.bringToFront();
    // close
    finWindow.close();
    // disableFrame
    finWindow.disableFrame();
    // enableFrame
    finWindow.enableFrame();
    // flash
    finWindow.flash();
    // focus
    finWindow.focus();
    // getBounds
    finWindow.getBounds(bounds => {
        console.log(`top: ${bounds.top} left: ${bounds.left} height: ${bounds.height} width: ${bounds.width}`);
    });
    // getOptions
    finWindow.getOptions(options => {
        console.log(options);
    });
    // getSnapshot
    finWindow.getSnapshot(base64Snapshot => {
        console.log("data:image/png;base64," + base64Snapshot);
    });
    // getState
    finWindow.getState(state => {
        console.log("state: " + state);
    });
    // getZoomLevel
    finWindow.getZoomLevel(level => {
        console.log("zoom level: " + level);
    }, error => {
        console.log('error:', error);
    });
    // hide
    finWindow.hide();
    // isShowing
    finWindow.isShowing(showing => {
        console.log("the window is " + (showing ? "showing" : "hidden"));
    });
    // joinGroup
    let secondWindow = new fin.desktop.Window({
        url: "http://www.openfin.co",
        name: "secondWindow",
        autoShow: true
    }, () => {
        // When mainWindow moves or is moved, secondWindow moves by the same amount
        secondWindow.joinGroup(finWindow);
    });
    // leaveGroup
    secondWindow = new fin.desktop.Window({
        url: "http://www.openfin.co",
        name: "secondWindow",
        autoShow: true
    }, () => {
        // When finWindow moves or is moved, secondWindow moves by the same amount
        secondWindow.joinGroup(finWindow, () => {
            // once we are in the group, lets leave it.
            secondWindow.leaveGroup();
        });
    });
    // maximize
    finWindow.maximize();
    // mergeGroups
    {
        const finWindowOne = new fin.desktop.Window({
            url: "http://www.openfin.co",
            name: "finWindowOne",
            autoShow: true
        });
        const finWindowTwo = new fin.desktop.Window({
            url: "http://www.openfin.co",
            name: "finWindowTwo",
            autoShow: true
        });
        const finWindowThree = new fin.desktop.Window({
            url: "http://www.openfin.co",
            name: "finWindowThree",
            autoShow: true
        });
        const finWindowFour = new fin.desktop.Window({
            url: "http://www.openfin.co",
            name: "finWindowFour",
            autoShow: true
        });
        // When finWindowOne moves or is moved, finWindowTwo moves by the same amount
        finWindowOne.joinGroup(finWindowTwo);
        // When finWindowThree moves or is moved, finWindowFour moves by the same amount
        finWindowThree.joinGroup(finWindowFour);
        // finWindowOne, finWindowTwo, finWindowThree, and finWindowFour now move together in the same group
        finWindowOne.mergeGroups(finWindowThree);
    }
    // minimize
    finWindow.minimize();
    // moveBy
    finWindow.moveBy(10, 10);
    // moveTo
    finWindow.moveTo(100, 200);
    // removeEventListener
    const aRegisteredListener = (event: fin.WindowBaseEvent) => { };
    finWindow.removeEventListener("bounds-changed", aRegisteredListener);
    // resizeBy
    finWindow.resizeBy(10, 10, "top-right");
    // resizeTo
    finWindow.resizeTo(10, 10, "top-right");
    // restore
    finWindow.restore();
    // setAsForeground
    finWindow.setAsForeground();
    // setBounds
    finWindow.setBounds(100, 200, 400, 400);
    // setZoomLevel
    finWindow.setZoomLevel(10);
    // show
    finWindow.show();
    // showAt
    finWindow.showAt(10, 10, false);
    // stopFlashing
    finWindow.stopFlashing();
    // updateOptions
    finWindow.updateOptions({
        frame: false,
        maxWidth: 500
    });
}
