// Type definitions for KeyboardJS 0.4.1
// A JavaScript library for binding keyboard combos without the pain of key codes and key combo conflicts.
// Project: https://github.com/RobertWHurst/KeyboardJS
// Definitions by: Vincent Bortone <https://github.com/vbortone/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface KeyboardJSSubBinding {
	clear(): void;
}

interface KeyboardJSBinding {
	clear(): void;
	on(eventName: string, callbacks?: any): KeyboardJSSubBinding;
}

interface KeyboardJSKey {
	name(keyCode: number): string[];
	code(keyName: string): any;
}

interface KeyboardJSCombo {
	active(keyCombo: string): bool;
	parse(keyCombo: any): any[];
	stringify(keyComboArray: any): string;
}

interface KeyboardJSLocale {
	map: any;
	macros: any[];
}

interface KeyboardJSStatic {
	enable(): void;
	disable(): void;
	activeKeys() string[];
	on(keyCombo:string, onDownCallback?: (keyEvent: Event, keysPressed: string[], keyCombo: string) => {}, onUpCallback?: (keyEvent: Event, keysPressed: string[], keyCombo: string) => {}): KeyboardJSBinding;
	clear(keyCombo: string): void;
	clear.key(keyName: string): void;
	locale(localeName: string): KeyboardJSLocale;
	locale.register(localeName: string, localeDefinition: KeyboardJSLocale): void;
	macro(keyCombo:string , keyNames: string[]): void;
	macro.remove(keyCombo: string): void;
	key: KeyboardJSKey;
	combo: KeyboardJSCombo;	
}

declare var KeyboardJS:  KeyboardJSStatic;