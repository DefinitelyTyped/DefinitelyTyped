// Type definitions for cordova-plugin-badge 0.8
// Project: https://github.com/katzer/cordova-plugin-badge
// Definitions by: Tim Brust <https://github.com/timbru31>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface CordovaPlugins {
	notification: {
		badge: CordovaPluginBadge;
	};
}

interface CordovaPluginBadgeOptions {
	autoClear: boolean;
}

interface CordovaPluginBadge {
	clear(callback?: (badge: number) => void, scope?: any): void;
	set(badge?: number, callback?: (badge: number) => void, scope?: any): void;
	get(callback?: (badge: number) => void, scope?: any): void;
	increase(count?: number, callback?: (badge: number) => void, scope?: any): void;
	decrease(count?: number, callback?: (badge: number) => void, scope?: any): void;
	hasPermission(callback?: (granted: boolean) => void, scope?: any): void;
	requestPermission(callback?: (granted: boolean) => void, scope?: any): void;
	configure(config: CordovaPluginBadgeOptions): CordovaPluginBadgeOptions;
}
