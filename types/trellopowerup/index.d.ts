export as namespace Trello;

export * from "./lib/base";
export * as Callback from "./lib/callback";
export * as L18N from "./lib/localizer";
export * as PowerUp from "./lib/powerup";
export * as Theming from "./lib/theming";

declare global {
    interface Window {
        TrelloPowerUp: Trello.PowerUp.PowerUp;
        locale: string;
    }
}
