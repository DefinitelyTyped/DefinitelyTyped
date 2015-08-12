// Type definitions for enchant.js
// Project: https://github.com/wise9/enchant.js
// Definitions by: Sam Saint-Pettersen <https://github.com/stpettersens>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Internals:

interface Function {
	(arg?: any): any;
}

/*
	From enchant.js core API:
	http://wise9.github.io/enchant.js/doc/core/en/
*/

declare class Action {
	param: Object;
}

declare class ActionEventTarget {}

declare class BinaryInputManager {
	activeEventNameSuffix: string;
	activeInputsNum: number;
	inactiveEventNameSuffix: string;

	constructor(flagStore: any, activeEventNameSuffix: string, inactiveEventNameSuffix: string, source: any);
	bind(inputSource: BinaryInputSource, name: string): void;
	changeState(name: string, bool: boolean): void;
	unbind(inputSource: BinaryInputSource): void;
}

declare class BinaryInputSource {
	constructor(identifier: string);
}

declare class CanvasLayer {
	height: number;
	width: number;
}

declare class Class {
	constructor(superclass?: Function, definition?: any);
	static create(superclass?: Function, definition?: any): void;
	static getInheritanceTree(Constructor: Function): Function[];
}

declare class Core  {
	height: number;
	width: number;
	assets: Object;
	currentScene: Scene;
	fps: number;
	frame: number;
	input: Object;
	static instance: Core;
	loadingScene: Scene;
	ready: boolean;
	rootScene: Scene;
	running: boolean;
	scale: number;
	sfx: boolean; // Non-standard.

	constructor(width: number, height: number);
	debug(): Deferred;
	static findExt(path: string): any;
	getElapsedTime(): number;
	keybind(key: number, button: string): Core;
	keyunbind(key: number): Core;
	load(src: string, alias?: string, callback?: Function, onerror?: Function): Deferred;
	pause(): void;
	popScene(): Scene;
	preload(assets: string|string[]): Core;
	pushScene(scene: Scene): Scene;
	removeScene(scene: Scene): Scene;
	replaceScene(scene: Scene): Scene;
	resume(): void;
	start(deferred?: Deferred): Deferred;
	stop(): void;
	onload: () => void;
}

/* 
Game is an alias for Core;
you should use Core in your code rather than Game.
*/
declare class Game extends Core { }

declare class Deferred {
	call(arg: any): void;
	error(func: Function): void;
	fail(arg: any): void;
	next(func: Function): void;
	static next(func: Function): void;
	static parallel(arg: Object|Deferred): Deferred;
}

declare class DOMScene {}

declare class DOMSound {
	currentTime: number;
	duration: number;
	volume: number;

	clone(): DOMSound;
	load(src: string, type?: string, callback?: Function, onerror?: Function): DOMSound;
	pause(): void;
	play(): void;
	stop(): void;
}

declare class Entity {
	backgroundColor: string;
	buttonMode: string;
	buttonPressed: boolean;
	compositeOperation: string;
	debugColor: string;
	height: number;
	opacity: number;
	originX: number;
	originY: number;
	rotation: number;
	scaleX: number;
	scaleY: number;
	touchEnabled: boolean;
	visible: boolean;
	width: number;

	disableCollection(): void;
	enableCollection(): void;
	intersect(other: any): boolean;
	rotate(deg: number): void;
	scale(x: number, y: number): void;
	within(other: any, distance: number): boolean;
}

declare class Event {
	static A_BUTTON_DOWN: string;
	static A_BUTTON_UP: string;
	static ACTION_ADDED: string;
	static ACTION_END: string;
	static ACTION_REMOVED: string;
	static ACTION_START: string;
	static ACTION_TICK: string;
	static ADDED: string;
	static ADDED_TO_SCENE: string;
	static ADDED_TO_TIMELINE: string;
	static ANIMATION_END: string;
	static B_BUTTON_DOWN: string;
	static B_BUTTON_UP: string;
	static CHILD_ADDED: string;
	static CHILD_REMOVED: string;
	static CORE_RESIZE: string;
	static DOWN_BUTTON_DOWN: string;
	static DOWN_BUTTON_UP: string;
	static ENTER: string;
	static ENTER_FRAME: string;
	static ERROR: string;
	static EXIT: string;
	static INPUT_CHANGE: string;
	static INPUT_END: string;
	static INPUT_START: string;
	static INPUT_STATE_CHANGED: string;
	static LEFT_BUTTON_DOWN: string;
	static LEFT_BUTTON_UP: string;
	static LOAD: string;
	static PROGRESS: string;
	static REMOVED: string;
	static REMOVED_FROM_SCENE: string;
	static REMOVED_FROM_TIMELINE: string;
	static RENDER: string;
	static RIGHT_BUTTON_DOWN: string;
	static RIGHT_BUTTON_UP: string;
	static TOUCH_END: string;
	static TOUCH_MOVE: string;
	static TOUCH_START: string;
	static UP_BUTTON_DOWN: string;
	static UP_BUTTON_UP: string;
	localX: number;
	localY: number;
	target: any;
	type: string;
	x: number;
	y: number;

	constructor(type: string);
}

declare class EventTarget {
	addEventListener(type: string, listener: Function): void;
	clearEventListener(type: string): void;
	dispatchEvent(e: Event): void;
	on(type: string, listener: Function): void;
	removeEventListener(type: string, listener: Function): void;
}

declare class Group {
	childNodes: Node[];
	firstChild: Node;
	lastChild: Node;
	originX: number;
	originY: number;
	rotation: number;
	scaleX: number;
	scaleY: number;

	addChild(node: Node|Label|Sprite): void;
	insertBefore(node: Node|Label|Sprite, reference: Node|Label|Sprite): void;
	removeChild(node: Node|Label|Sprite): void;
}

declare class InputManager {
	broadcastTarget: EventTarget;
	source: Object;
	valueStore: Object;

	constructor(valueStore: any, source?: any);
	addBroadcastTarget(eventTarget: EventTarget): void;
	bind(inputSource: InputSource, name: string): void;
	broadcastEvent(e: Event): void;
	changeState(name: string, data: any): void;
	removeBroadcastTarget(eventTarget: EventTarget): void;
	unbind(inputSource: InputSource): void;
}

declare class InputSource {
	identifier: string;

	constructor(identifier: string);
	notifyStateChange(data: any): void;
}

declare class KeyboardInputManager {
	constructor(dom: HTMLElement, flagStore: any);
	keybind(keyCode: number, name: string): void;
	keyunbind(keyCode: number): void;
}

declare class KeyboardInputSource {
	constructor(keyCode: number);
	static getByKeyCode(keyCode: number): KeyboardInputSource;
}

declare class Label {
	color: string;
	font: string;
	text: string;
	textAlign: string;
	x: number;
	y: number;
	height: number;
	width: number;

	constructor(text?: string);
}

declare class LoadingScene {}

declare class Map {
	collisionData: number[][];
	image: Surface;
	titleHeight: number;
	titleWidth: number;

	constructor(titleWidth: number, titleHeight: number);
	checkTile(x: number, y: number): any;
	hitTest(x: number, y: number): boolean;
	loadData(data: number[][]): void;
}

declare class Node {
	age: number;
	parentNode: Group;
	scene: Scene;
	x: number;
	y: number;

	moveBy(x: number, y: number): void;
	moveTo(x: number, y: number): void;
}

declare class ParallelAction {
	actions: Action[];
	endedActions: Action[];
}

declare class Scene extends Group {
	backgroundColor: string;
}

declare class Sprite {
	frame: number|number[];
	image: Surface;
	x: number;
	y: number;

	constructor(width: number, height: number);	
}

declare class Surface {
	context: any;
	height: number;
	width: number;

	constructor(width: number, height: number);
	clear(): void;
	clone(): void;
	draw(image: Surface): void;
	getPixel(x: number, y: number): number[];
	static load(src: string, callback: Function, onerror?: Function): void;
	setPixel(x: number, y: number, r: number, g: number, b: number, a: number): void;
	toDataURL(): string;
}

declare class Timeline {
	constructor(node: Node);
	action(params: Object): Timeline;
	add(action: Action): Timeline;
	and(): Timeline;
	clear(): Timeline;
	cue(cue: Object): Timeline;
	delay(time: number): Timeline;
	exec(func: Function): Timeline;
	fadeIn(time: number, easing?: Function): Timeline;
	fadeOut(time: number, easing?: Function): Timeline;
	fadeTo(opacity: number, time: number, easing?: Function): Timeline;
	hide(): Timeline;
	loop(): Timeline;
	moveBy(x: number, y: number, time: number, easing?: Function): Timeline;
	moveTo(x: number, y: number, time: number, easing?: Function): Timeline;
	moveX(x: number, time: number, easing?: Function): Timeline;
	moveY(y: number, time: number, easing?: Function): Timeline;
	pause(): Timeline;
	removeFromScene(): Timeline;
	repeat(func: Function, time: number): Timeline;
	resume(): Timeline;
	rotateBy(deg: number, time: number, easing?: Function): Timeline;
	rotateTo(deg: number, time: number, easing?: Function): Timeline;
	scaleBy(scaleX: number, scaleY: number, time: number, easing?: Function): Timeline;
	scaleTo(scaleX: number, scaleY: number, time: number, easing?: Function): Timeline;
	setFrameBased(): void;
	setTimeBased(): void;
	show(): Timeline;
	skip(frames: number): Timeline;
	then(func: Function): Timeline;
	tick(enterFrameEvent: Event): void;
	tween(params: Object): Timeline;
	unloop(): Timeline;
	waitUntil(func: Function): Timeline;
}

declare class Tween {
	constructor(params: Object);
}

declare class WebAudioSound {
	currentTime: number;
	duration: number;
	volume: number;

	clone(): WebAudioSound;
	static load(src: string, type?: string, callback?: Function, onerror?: Function): WebAudioSound;	
	pause(): void;
	play(dup?: boolean): void;
	stop(): void;
}

// This is the enchant() function.
declare var enchant: Function;
