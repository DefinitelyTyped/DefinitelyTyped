// Type definitions for notie.js
// Project: https://github.com/jaredreich/notie.js
// Definitions by: Mateus Demboski <https://github.com/mateusdemboski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
 
declare var notie: {
    alert: (type: number, message: string, seconds: number) => void;
    confirm: (title: string, yes_text: string, no_text: string, yes_callback: () => void) => void;
    input: (title: string, submit_text: string, cancel_text: string, type: string, placeholder: string, submit_callback: (value_entered: string) => void, prefilled_value_optional?: string) => void;
};
