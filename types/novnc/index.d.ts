// Type definitions for noVNC
// Project: https://github.com/kanaka/noVNC
// Definitions by: Ken Smith <https://github.com/smithkl42/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface NvPoint {
	x: number;
	y: number;
}

interface NvFeatures {
	xpath: boolean;
	air: boolean;
	query: boolean;
}

interface NvEngine {
	presto: boolean;
	trident: boolean;
	webkit: boolean;
	gecko: boolean;
}

interface NvFlash {
	version: number;
	build: number;
}

interface NvBox {
	x: number;
	y: number;
	w: number;
	h: number;
}
interface NvCleanDirtyBox {
	cleanBox: NvBox;
	dirtyBoxes: NvBox[];
}

interface NvUtilStatic {
	init_logging(level?: string): void;
	get_logging(): string;
	conf_default(cfg, api, defaults, v, mode, type, defval, desc): void;
	conf_defaults(cfg, api, defaults, arr): void;
	get_include_uri(): string;
	load_scripts(files: string[]): void;
	getPosition(obj: HTMLElement): NvPoint;
	getEventPosition(e: Event, obj: HTMLElement, scale: number): NvPoint;
	addEvent(obj: HTMLElement, evType: string, fn: Function): void;
	removeEvent(obj: HTMLElement, evType: string, fn: Function): void;
	stopEvent(e: Event): void;
	Features: NvFeatures;
	Engine: NvEngine;
	Flash(): NvFlash;
}

interface NvRenderAction {
	type: string;
	old_x: number;
	old_y: number;
	x: number;
	y: number;
	width: number;
	height: number;
}

interface NvRFBDefaults {
	target?: HTMLCanvasElement;
	focusContainer?: HTMLElement;
	encrypt?: boolean;
	true_color?: boolean;
	local_cursor?: boolean;
	shared?: boolean;
	view_only?: boolean;
	connectTimeout?: number;
	disconnectTimeout?: number;
	viewportDrag?: boolean;
	check_rate?: number;
	fbu_req_rate?: number;
	repeaterID?: string;
	onUpdateState?: (rfb: RFB, state: any, oldstate: any, statusMsg: string) => void;
	onPasswordRequired?: (rfb: RFB) => void;
	onClipboard?: (rfb: RFB, text: string) => void;
	onBell?: (rfb: RFB) => void;
	onFBUReceive?: (rfb: RFB, fbu: any) => void;
	onFBUComplete?: (rfb: RFB, fbu: any) => void;
	onFBResize?: (rfb: RFB, width: number, height: number) => void;
}

declare class RFB {
	constructor(defaults);
	set_local_cursor(cursor): void;
	get_display(): Display;
	get_keyboard(): Keyboard;
	get_mouse(): Mouse;
	connect(host: string, port: number, password: string, path: string): void;
	disconnect(): void;
	sendPassword(passwd: string): void;
	sendCtrlAltDel(): void;
	sendKey(code: number, down: boolean): void;
	clipboardPasteFrom(text: string): void;
	testMode(override_send: (arr: any[]) => boolean, data_mode: string): void;
}

interface Display {
	get_context(): CanvasRenderingContext2D;
	set_scale(scale: number): void;
	set_width(val: number): void;
	get_width(): number;
	set_height(val: number): void;
	get_height(): number;
	viewportChange(deltaX: number, deltaY: number, width: number, height: number): void;
	getCleanDirtyReset(): NvCleanDirtyBox;
	absX(x: number): number;
	absY(y: number): number;
	resize(width: number, height: number): void;
	clear(): void;
	fillRect(x: number, y: number, width: number, height: number, color: number[]);
	copyImage(old_x: number, old_y: number, new_x: number, new_y: number, w: number, h: number);
	startTile(x: number, y: number, width: number, height: number, color: number[]);
	subTile(x: number, y: number, w: number, h: number, color: number[]);
	finishTile(): void;
	blitImage(x: number, y: number, width: number, height: number, arr: any[], offset: number): void;
	blitRgbImage(x: number, y: number, width: number, height: number, arr: any[], offset: number): void;
	blitStringImage(str: string, x: number, y: number): void;
	drawImage(img: HTMLImageElement, x: number, y: number): void;
	renderQ_push(action: NvRenderAction): void;
}

interface Keyboard {
	grab(): void;
	ungrab(): void;
}

interface Mouse {
	grab(): void;
	ungrab(): void;
}

declare var Util: NvUtilStatic;