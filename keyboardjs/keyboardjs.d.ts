// Type definitions for KeyboardJS
// Project: https://github.com/RobertWHurst/KeyboardJS
// Definitions by: Vincent Bortone <https://github.com/vbortone/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// A JavaScript library for binding keyboard combos without the pain of key codes and key combo conflicts.

interface KeyboardJSSubBinding {
	clear(): void;
}

interface KeyboardJSBinding {
	clear(): void;
	on(eventName: string, callbacks?: any): KeyboardJSSubBinding;
}

interface KeyboardJSLocale {
	map: any;
	macros: any[];
}

interface KeyboardJSStatic {
	enable(): void;
	disable(): void;
	activeKeys(): string[];
	on(keyCombo:string, onDownCallback?: (keyEvent: Event, keysPressed: string[], keyCombo: string) => void, onUpCallback?: (keyEvent: Event, keysPressed: string[], keyCombo: string) => void): KeyboardJSBinding;
	clear: {
        (keyCombo: string): void; // Call signature
        key(keyName: string): void; // Method
    };
    locale: {
    	(localeName: string): KeyboardJSLocale; // Call signature
    	register(localeName: string, localeDefinition: KeyboardJSLocale): void; // Method
    };
	macro: {
		(keyCombo:string , keyNames: string[]): void; // Call signature
		remove(keyCombo: string): void; // Method
	};
	key: {
		name(keyCode: number): string[];
		code(keyName: string): any;
	};
	combo: {
		active(keyCombo: string): boolean;
		parse(keyCombo: any): any[];
		stringify(keyComboArray: any): string;
	};
}

declare var KeyboardJS:  KeyboardJSStatic;
