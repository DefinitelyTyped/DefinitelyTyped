import * as Trello from "trellopowerup";

// Test namespace exports
const trello: typeof Trello = Trello;
const callback: typeof Trello.Callback = Trello.Callback;
const l18n: typeof Trello.L18N = Trello.L18N;
const powerUp: typeof Trello.PowerUp = Trello.PowerUp;
const theming: typeof Trello.Theming = Trello.Theming;

// Test global declarations
declare global {
    interface Window {
        TrelloPowerUp: Trello.PowerUp.PowerUp;
        locale: string;
    }
}

// Test window interface
const window: Window = {} as Window;

// $ExpectType PowerUp
window.TrelloPowerUp;

// $ExpectType string
window.locale;

// @ts-expect-error - TrelloPowerUp must be PowerUp type
window.TrelloPowerUp = "invalid";

// @ts-expect-error - locale must be string type
window.locale = 123;

// Test that Trello namespace is available globally
const globalTrello: typeof Trello = globalThis.Trello;
const globalCallback: typeof Trello.Callback = globalThis.Trello.Callback;
const globalL18n: typeof Trello.L18N = globalThis.Trello.L18N;
const globalPowerUp: typeof Trello.PowerUp = globalThis.Trello.PowerUp;
const globalTheming: typeof Trello.Theming = globalThis.Trello.Theming;
