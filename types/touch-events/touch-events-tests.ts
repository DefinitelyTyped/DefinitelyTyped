var touchEvent: TouchEvent;
var list: TouchList;
var touch: Touch;

list = touchEvent.touches;
list = touchEvent.targetTouches;
list = touchEvent.changedTouches;

var flag: boolean;
flag = touchEvent.altKey;
flag = touchEvent.metaKey;
flag = touchEvent.ctrlKey;
flag = touchEvent.shiftKey;

var len: number = list.length;
touch = list.item(0);
touch == list[0];

var x: number;
var y: number;
var id: number;

id = touch.identifier;
x = touch.screenX;
y = touch.screenY;
x = touch.clientX;
y = touch.clientY;
x = touch.pageX;
y = touch.pageY;

var target: EventTarget;
target = touch.target;
