/**
 * @author Mugen87 / https://github.com/Mugen87
 */

import { GameEntity, Trigger, TriggerRegion } from "yuka";

export class CustomTrigger extends Trigger {
    constructor(triggerRegion: TriggerRegion) {
        super(triggerRegion);
    }

    execute(entity: GameEntity): this {
        super.execute(entity);

        // this is internal property and should not be used... upstream has to decide.
        // entity._renderComponent.material.color.set(0x00ff00);

        return this;
    }
}
