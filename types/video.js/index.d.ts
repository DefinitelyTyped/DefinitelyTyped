// Type definitions for Video.js 6.2
// Project: https://github.com/videojs/video.js
// Definitions by: Vincent Bortone <https://github.com/vbortone>
//                 Simon Clériot <https://github.com/scleriot>
//                 Sean Bennett <https://github.com/SWBennett06>
//                 Christoph Wagner <https://github.com/IgelCampus>
//                 Gio Freitas <https://github.com/giofreitas>
//                 Grzegorz Błaszczyk <https://github.com/gjanblaszczyk>
//                 Adam Eisenreich <https://github.com/AkxeOne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// The Video.js API allows you to interact with the video through
// Javascript, whether the browser is playing the video through HTML5
// video, Flash, or any other supported playback technologies.

declare function videojs(id: any, options?: videojs.PlayerOptions, ready?: () => void): videojs.Player;
export default videojs;
export as namespace videojs;

declare namespace videojs {
	const getComponent: typeof Component.getComponent;
	const registerComponent: typeof Component.registerComponent;
	const registerPlugin: (pluginName: string, pluginFn: Function) => void;
	const addLanguage: (lang: string, data: {[key:string]: string }) => void;
	const mergeOptions: <A,B,C,D,E,F>(option: A, option2?: B, option3?: C, option4?: D, option5?: E, option6?: F) => A & B & C & D & E & F;

	interface PlayerOptions {
		techOrder?: string[];
		sourceOrder?: boolean;
		html5?: any;
		width?: number;
		height?: number;
		defaultVolume?: number;
		children?: string[];
		loop?: boolean;
		muted?: boolean;
		controls?: boolean;
		src?: string;
		autoplay?: boolean;
		preload?: string;
		sources?: Source[];
		aspectRatio?: string;
		fluid?: boolean;
		language?: string;
		notSupportedMessage?: string;
		plugins?: any;
		poster?: string;
		controlBar: {
			volumePanel: {
				inline: boolean;
				vertical: boolean;
			}
		}
	}


	interface Source {
		type: string;
		src: string;
	}

	interface Dimensions {
		width: number;
		height: number;
	}

	class Component {
		constructor(player: Player, options: any);

		static getComponent(name: 'Button'): typeof Button;
		static getComponent(name: 'ClickableComponent'): typeof ClickableComponent;
		static getComponent(name: 'ModalDialog'): typeof ModalDialog;
		static getComponent(name: 'Player'): typeof Player;
		static getComponent(name: 'Component' | string): typeof Component;
		static registerComponent(name: string, ComponentToRegister: typeof Component): typeof Component;

		$(selector: string, context?: string|Element): Element;
		$$(selector: string, context?: string|Element): NodeList;
		addChild(component: string): Component;
		addChild<C extends (Component | Element)>(component: C): C;
		addClass(classToAdd: string): void;
		blur(): void;
		buildCSSClass(): string;
		cancelAnimationFrame(id: number): number;
		children(): Component[];
		controlText(key: string): string;
		clearInterval(intervalId: number): number;
		clearTimeout(timeoutId: number): number;
		contentEl(): Element;
		createEl(tagNameopt?: string, properties?: any, attributes?: any): Element;
		currentDimension(widthOrHeight: 'width'|'height'): number;
		currentDimensions(): Dimensions;
		currentHeight(): number;
		currentWidth(): number;
		dimension(widthOrHeight: 'width'|'height'): number;
		dimension(widthOrHeight: 'width'|'height', num: string|number, skipListenersopt?: boolean): void;
		dimensions(width: string|number, height: string|number): void;
		dispose(): void;
		el(): Element;
		enableTouchActivity(): void;
		focus(): void;
		getAttribute(attribute: string): string|null;
		getChild(name: string): Component|undefined;
		getChildById(id: string): Component|undefined;
		hasClass(classToCheck: string): boolean;
		height(): number|string;
		height(num: number|string, skipListeners?: boolean): void;
		hide(): void;
		id(): string;
		initChildren(): void;
		localize(key: string, tokens?: string[], defaultValue?: string): string;
		name(): string;
		off(type: string, listener: Function): void;
		off(target: Component , type: string, listener: Function): void;
		off(targetOrType: Component | string, typeOrListener: string | Function, listener: Function): void;
		on(type: string, listener: Function): void;
		on(target: Component , type: string, listener: Function): void;
		on(targetOrType: Component | string, typeOrListener: string | Function, listener: Function): void;
		one(type: string, listener: Function): void;
		one(target: Component , type: string, listener: Function): void;
		one(targetOrType: Component | string, typeOrListener: string | Function, listener: Function): void;
		options(obj: any): any;
		played(): TimeRanges;
		player(): Player;
		ready(callback: (this: this) => void): this;
		removeAttribute(attribute: string): void;
		removeChild(component: Component): void;
		removeClass(classToRemove: string): void;
		requestAnimationFrame(fn: () => void): number;
		setAttribute(attribute: string, value: string): void;
		setInterval(fn: () => void, interval: number): number;
		setTimeout(fn: () => void, timeout: number): number;
		show(): void;
		toggleClass(classToToggle: string, predicate?: boolean | ((element: Element, classToToggle: string) => boolean)): void;
		trigger(eventName: string, ...arguments: any[]): void
		triggerReady(): void;
		width(): string | number;
		width(num: number, skipListeners?: number): void;
	}

	class ModalDialog extends Component {
		open(): void
		close(): void
		content(): Element;
	}

	class ClickableComponent extends Component {
		handleClick(event: Event): void
	}

	class Button extends ClickableComponent {
		handleClick(event: Event): void
		disable(): boolean
	}

	class Player extends Component {
		bigPlayButton: Button;
		loadingSpinner: Component;
		errorDisplay: ModalDialog

		autoplay(value?: boolean): string;
		addRemoteTextTrack(options: {}, manualCleanup?: boolean): HTMLTrackElement;
		buffered(): TimeRanges;
		bufferedPercent(): number;
		cancelFullScreen(): Player;
		controls(bool?: boolean): boolean;
		currentSrc(): string;
		currentTime(): number;
		currentTime(seconds: number): Player;
		duration(): number;
		exitFullscreen(): Player;
		height(): number;
		height(num: number): void;
		languageSwitch(options: any): void;
		loop(value?: boolean): string;
		muted(muted?: boolean): boolean;
		pause(): Player;
		paused(): boolean;
		play(): Player;
		playbackRate(rate?: number): number;
		poster(val?: string): string | Player;
		preload(value?: boolean): string;
		removeRemoteTextTrack(track: HTMLTrackElement): void;
		requestFullScreen(): Player;
		size(width: number, height: number): Player;
		src(): string;
		src(newSource: string | Source | Source[]): Player;
		volume(percentAsDecimal?: number): number;
		width(): number;
		width(num: number): void;
		usingPlugin(pluginName: string): boolean;
	}

	namespace dom {
		function appendContent(element: Element, content: any): Element;
	}
}
