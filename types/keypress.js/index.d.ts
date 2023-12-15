// A keyboard input capturing utility in which any key can be a modifier key.

export as namespace keypress;

export interface ListenerDefaults {
    keys: string;
    prevent_default: boolean;
    prevent_repeat: boolean;
    is_unordered: boolean;
    is_counting: boolean;
    is_exclusive: boolean;
    is_solitary: boolean;
    is_sequence: boolean;
}

export interface Combo {
    keys?: string | undefined;
    on_keydown?(event?: KeyboardEvent, count?: number): any;
    on_keyup?(event?: KeyboardEvent): any;
    on_release?(event?: KeyboardEvent): any;
    this?: Element | undefined;
    prevent_default?: boolean | undefined;
    prevent_repeat?: boolean | undefined;
    is_unordered?: boolean | undefined;
    is_counting?: boolean | undefined;
    is_exclusive?: boolean | undefined;
    is_sequence?: boolean | undefined;
    is_solitary?: boolean | undefined;
}

export class Listener {
    constructor(element?: Element, defaults?: ListenerDefaults);

    simple_combo(keys: string, on_keydown_callback: (event?: KeyboardEvent, count?: number) => any): void;
    counting_combo(keys: string, on_count_callback: (event?: KeyboardEvent, count?: number) => any): void;
    sequence_combo(keys: string, callback: (event?: KeyboardEvent, count?: number) => any): void;
    register_combo(combo: Combo): Combo;
    unregister_combo(combo: Combo | string): void;
    register_many(combos: Combo[]): Combo[];
    unregister_many(combos: Combo[] | string[]): void;
    get_registered_combos(): Combo[];
    destroy(): void;
    reset(): void;
    listen(): void;
    stop_listening(): void;
}
