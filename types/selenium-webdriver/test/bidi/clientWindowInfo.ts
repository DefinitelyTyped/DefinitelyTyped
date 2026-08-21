import { ClientWindowInfo, WindowState } from "selenium-webdriver/bidi/clientWindowInfo";

// $ExpectType "fullscreen"
WindowState.FULLSCREEN;
// $ExpectType "maximized"
WindowState.MAXIMIZED;
// $ExpectType "minimized"
WindowState.MINIMIZED;
// $ExpectType "normal"
WindowState.NORMAL;

// $ExpectType ClientWindowInfo
const windowInfo = new ClientWindowInfo({
    clientWindow: "window1",
    state: WindowState.NORMAL,
    width: 800,
    height: 600,
    x: 100,
    y: 100,
    active: true,
});

// $ExpectType string
windowInfo.clientWindow;
// $ExpectType WindowState
windowInfo.state;
// $ExpectType number
windowInfo.width;
// $ExpectType number
windowInfo.height;
// $ExpectType number
windowInfo.x;
// $ExpectType number
windowInfo.y;
// $ExpectType boolean
windowInfo.active;

// $ExpectType ClientWindowInfo
const fromJson = ClientWindowInfo.fromJson({
    clientWindow: "window1",
    state: "normal",
    width: 800,
    height: 600,
    x: 100,
    y: 100,
    active: true,
});

// @ts-expect-error
new ClientWindowInfo();

// @ts-expect-error
new ClientWindowInfo({});

// @ts-expect-error
ClientWindowInfo.fromJson();
