// Type definitions for Keypress v2.0.3
// Project: https://github.com/dmauro/Keypress/
// Definitions by: Roger Chen <https://github.com/rcchen>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// A keyboard input capturing utility in which any key can be a modifier key.
declare module Keypress {

    interface ListenerDefaults {
        keys: string;
        prevent_default: boolean;
        prevent_repeat: boolean;
        is_unordered: boolean;
        is_counting: boolean;
        is_exclusive: boolean;
        is_solitary: boolean;
        is_sequence: boolean;
    }
    
    interface Combo {
        keys: string;
        on_keydown: () => any;
        on_keyup: () => any;
        on_release: () => any;
        this: Element;
        prevent_default: boolean;
        prevent_repeat: boolean;
        is_unordered: boolean;
        is_counting: boolean;
        is_exclusive: boolean;
        is_sequence: boolean;
        is_solitary: boolean;
    }
    
    interface Listener {
        new(element: Element, defaults: ListenerDefaults): Listener;
        new(element: Element): Listener;
        new(): Listener;
        simple_combo(keys: string, on_keydown_callback: () => any): void;
        counting_combo(keys: string, on_count_callback: () => any): void;
        sequence_combo(keys: string, callback: () => any): void;
        register_combo(combo: Combo): void;
        unregister_combo(combo: Combo): void;
        unregister_combo(keys: string): void;
        register_many(combos: Combo[]): void;
        unregister_many(combos: Combo[]): void;
        unregister_many(keys: string[]): void;
        get_registered_combos(): Combo[];
        reset(): void;
        listen(): void;
        stop_listening(): void;
    }
    
    interface Keypress {
        Listener: Listener;
    }
}

interface Window {
    keypress: Keypress.Keypress;
}
