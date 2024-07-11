/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import { GameEntity, Telegram } from "yuka";

export class Collectible extends GameEntity {
    spawn() {
        this.position.x = Math.random() * 15 - 7.5;
        this.position.z = Math.random() * 15 - 7.5;

        if (this.position.x < 1 && this.position.x > -1) this.position.x += 1;
        if (this.position.z < 1 && this.position.y > -1) this.position.z += 1;
    }

    handleMessage(telegram: Telegram): boolean {
        const message = telegram.message;
        switch (message) {
            case "PickedUp":
                this.spawn();
                return true;
            default:
                console.warn("Collectible: Unknown message.");
        }

        return false;
    }
}
