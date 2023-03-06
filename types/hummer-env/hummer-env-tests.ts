Hummer.env.appName; // $ExpectType string
Hummer.env.appVersion; // $ExpectType string
Hummer.env.platform; // $ExpectType string
Hummer.env.osVersion; // $ExpectType string
Hummer.env.statusBarHeight; // $ExpectType number
Hummer.env.safeAreaBottom; // $ExpectType number
Hummer.env.deviceWidth; // $ExpectType number
Hummer.env.deviceHeight; // $ExpectType number
Hummer.env.availableWidth; // $ExpectType number
Hummer.env.availableHeight; // $ExpectType number
Hummer.env.scale; // $ExpectType number

Hummer.pageInfo.animated; // $ExpectType boolean
Hummer.pageInfo.closeSelf; // $ExpectType boolean
Hummer.pageInfo.sourcePath; // $ExpectType string
Hummer.pageInfo.url; // $ExpectType string

const msg = 'message to print';
console.log(msg); // $ExpectType void
console.debug(msg); // $ExpectType void
console.info(msg); // $ExpectType void
console.warn(msg); // $ExpectType void
console.error(msg); // $ExpectType void

const timer1 = setTimeout(() => {}, 1000); // $ExpectType number
clearTimeout(timer1); // $ExpectType void
const timer2 = setInterval(() => {}, 1000); // $ExpectType number
clearInterval(timer2); // $ExpectType void

const positionAnimation = new BasicAnimation('position');
positionAnimation.value = {
    x: 100,
    y: '100hm',
};
positionAnimation.duration = 1000;
positionAnimation.on('start', () => {
    console.log('the animation is on');
});
positionAnimation.on('end', () => {
    console.log('the animation is off');
});

const dialog = new Dialog();
dialog.cancelable = false;
dialog.lowLayer = true;
dialog.alert('this is a alert dialog', 'OK Button Text', () => {
    console.log('You clicked the OK button');
});
dialog.confirm(
    'Dialog Title',
    'confirm content',
    'Ok Button text',
    'Cancel button text',
    () => {
        console.log('you clicked OK button');
    },
    () => {
        console.log('you clicked cancel button');
    },
);
dialog.loading('this is a loding msg');
dialog.dismiss();
dialog.custom(new View());

const request = new Request();
request.url = 'https://github.com';
request.method = 'GET';
request.timeout = 10000;
request.header = {
    customHeader: 'i am a header',
};
request.param = {
    param1: 'a',
    param2: 'b',
};
request.send(response => {
    console.log(response.data);
});

const ws = new WebSocket('https://websoket.net');
ws.onopen(() => {
    console.log('the websokect has connected');
});
ws.onmessage(ev => {
    console.log(ev.data);
});
ws.onclose(ev => {
    console.log(ev.code);
    console.log(ev.reason);
});
ws.onerror(() => {
    console.log('websocket connection error');
});

Storage.set('key1', 'value1');
Storage.get('key1'); // $ExpectType string
Storage.remove('key1');
Storage.removeAll();
Storage.exist('key1'); // $ExpectType boolean

const location = new Location();
location.getLastLocation(locationInfo => {
    console.log(locationInfo.altitude);
    console.log(locationInfo.longitude);
});
location.startLocation(
    locationInfo => {
        console.log(locationInfo.altitude);
        console.log(locationInfo.longitude);
    },
    1000,
    200,
);
location.stopLocation();
location.onError((errCode, errMsg) => {
    console.log(`get location error with code:${errCode},msd: ${errMsg}`);
});

// conponents
const button = new Button();
const canvas = new CanvasView();
const horizontalScroller = new HorizontalScroller();
const image = new Image();
const input = new Input();
const list = new List();
const scroller = new Scroller();
const _switch = new Switch();
const text = new Text();
const textArea = new Text();
const view = new View();
const viewPager = new ViewPager();

// style
const commonStyle: HummerCommonStyle = {};
const viewStyle: ViewStyle = {};
const textSTyle: TextStyle = {};
const buttonStyle: ButtonStyle = {};
const inputStyle: InputStyle = {};
const imageStyle: ImageStyle = {};
const textAreaStyle: TextAreaStyle = {};
const switchStyle: SwitchStyle = {};
const listStyle: ListStyle = {};
const viewPagerStyle: ViewPagerStyle = {};
