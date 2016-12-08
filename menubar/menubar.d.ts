// Type definitions for menubar 5.1.0
// Project: https://github.com/maxogden/menubar
// Definitions by: rhysd <https://rhysd.github.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../electron/github-electron.d.ts" />
/// <reference path="../node/node.d.ts" />

declare namespace Menubar {
	type Position
		= "trayLeft"
		| "trayBottomLeft"
		| "trayRight"
		| "trayBottomRight"
		| "trayCenter"
		| "trayBottomCenter"
		| "topLeft"
		| "topRight"
		| "bottomLeft"
		| "bottomRight"
		| "topCenter"
		| "bottomCenter"
		| "center";
	type TrayBounds
		= "trayLeft"
		| "trayBottomLeft"
		| "trayRight"
		| "trayBottomRight"
		| "trayCenter"
		| "trayBottomCenter";
	interface ElectronPositioner {
		move(pos: Position): void;
		calculate(pos: Position, bounds?: TrayBounds): Electron.Point;
	}
	class MenubarApp extends NodeJS.EventEmitter {
		app: Electron.App;
		window: Electron.BrowserWindow;
		tray: Electron.Tray;
		positioner: ElectronPositioner;

		setOption(opt: string, value: any): void;
		getOption(opt: string): any;
		showWindow(): void;
		hideWindow(): void;
	}
	interface MenubarOptions {
		dir?: string;
		index?: string;
		icon?: Electron.NativeImage | string;
		tooltip?: string;
		tray?: Electron.Tray;
		preloadWindow?: boolean;
		width?: number;
		height?: number;
		x?: number;
		y?: number;
		alwaysOnTop?: boolean;
		showOnAllWorkspaces?: boolean;
		windowPosition?: Position;
		showDockIcon?: boolean;
		showOnRightClick?: boolean;
	}
}

declare module "menubar" {
	const ctor: (opts?: Menubar.MenubarOptions) => Menubar.MenubarApp;
	export = ctor;
}
