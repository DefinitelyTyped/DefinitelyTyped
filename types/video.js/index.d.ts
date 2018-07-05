// Type definitions for Video.js 6.2
// Project: https://github.com/videojs/video.js
// Definitions by: Vincent Bortone <https://github.com/vbortone>
//                 Simon Clériot <https://github.com/scleriot>
//                 Sean Bennett <https://github.com/SWBennett06>
//                 Christoph Wagner <https://github.com/IgelCampus>
//                 Gio Freitas <https://github.com/giofreitas>
//                 Grzegorz Błaszczyk <https://github.com/gjanblaszczyk>
//                 Stéphane Roucheray <https://github.com/sroucheray>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// The Video.js API allows you to interact with the video through
// Javascript, whether the browser is playing the video through HTML5
// video, Flash, or any other supported playback technologies.

declare function videojs(id: any, options?: videojs.PlayerOptions, ready?: () => void): videojs.Player;
export = videojs;
export as namespace videojs;

declare namespace videojs {
	const getComponent: typeof Component.getComponent;
	const registerComponent: typeof Component.registerComponent;
	const getPlugin: typeof Plugin.getPlugin;

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
	}

	interface Source {
		type: string;
		src: string;
	}

	interface Dimensions {
		width: number;
		height: number;
	}

	class EventTarget {
		addEventListener(type: string | string[], callback: (eventObject: Event) => void): void;
		dispatchEvent(event: string | Event | { [key: string]: any }): void;
		off(type?: string | string[], callback?: (eventObject: Event) => void): void;
		on(type: string | string[], callback: (eventObject: Event) => void): void;
		one(type: string | string[], callback: (eventObject: Event) => void): void;
		removeEventListener(type?: string | string[], callback?: (eventObject: Event) => void): void;
		trigger(event: string | Event | { [key: string]: any }): void;
	}

	class Component extends EventTarget {
		constructor(player: Player, options: any);

		static getComponent(name: 'Player' | 'player'): Player;
		static getComponent(name: 'Button' | 'button'): Button;
		static getComponent(name: 'Component' | 'component' | string): Component;
		static registerComponent(name: string, ComponentToRegister: Component): Component;

		$(selector: string, context?: string | Element): Element;
		$$(selector: string, context?: string | Element): NodeList;
		addChild(child: string | Component, optionsopt?: any, indexopt?: number): Component;
		addClass(classToAdd: string): void;
		blur(): void;
		cancelAnimationFrame(id: number): number;
		children(): Component[];
		clearInterval(intervalId: number): number;
		clearTimeout(timeoutId: number): number;
		contentEl(): Element;
		createEl(tagNameopt?: string, properties?: any, attributes?: any): Element;
		currentDimension(widthOrHeight: 'width' | 'height'): number;
		currentDimensions(): Dimensions;
		currentHeight(): number;
		currentWidth(): number;
		dimension(widthOrHeight: 'width' | 'height'): number;
		dimension(widthOrHeight: 'width' | 'height', num: string | number, skipListenersopt?: boolean): void;
		dimensions(width: string | number, height: string | number): void;
		dispose(): void;
		el(): Element;
		enableTouchActivity(): void;
		focus(): void;
		getAttribute(attribute: string): string | null;
		getChild(name: string): Component | undefined;
		getChildById(id: string): Component | undefined;
		hasClass(classToCheck: string): boolean;
		height(): number | string;
		height(num: number | string, skipListeners?: boolean): void;
		hide(): void;
		id(): string;
		initChildren(): void;
		localize(key: string, tokens?: string[], defaultValue?: string): string;
		name(): string;
		options(obj: any): any;
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
		toggleClass(classToToggle: string, predicate?: string): void;
		triggerReady(): void;
		width(): string | number;
		width(num: number, skipListeners?: number): void;
	}

	class Button extends Component {
		controlText(textopt?: string, elopt?: Element): string;
		createControlTextEl(elopt: Element): Element;
	}

	class Player extends Component {
		autoplay(value?: boolean): string;
		addRemoteTextTrack(options: {}, manualCleanup?: boolean): HTMLTrackElement;
		buffered(): TimeRanges;
		bufferedPercent(): number;
		cancelFullScreen(): Player;
		controls(bool?: boolean): boolean;
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
		src(newSource: string | Source | Source[]): Player;
		volume(): number;
		volume(percentAsDecimal: number): TimeRanges;
		width(): number;
		width(num: number): void;
	}

	class Plugin {
		static deregisterPlugin(name: string): void;
		static getPlugin(name: string): Plugin;
		static getPlugins(namesopt?: string[]): { [key: string]: Plugin };
		static getPluginVersion(name: string): string;
		static isBasic(plugin: Plugin | (() => void)): boolean;
		static registerPlugin(name: string, plugin: Plugin | (() => void)): void;
		dispose(): void;
		getEventHash(hashopt: any): any;
		version(): string;
	}

	namespace dom {
		function appendContent(element: Element, content: any): Element;
	}
}
