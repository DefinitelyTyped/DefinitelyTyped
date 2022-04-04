import { GameObject } from 'black-engine/core/GameObject';
import { StageScaleMode } from 'black-engine/display/StageScaleMode';
import { CanvasDriver } from 'black-engine/drivers/canvas/CanvasDriver';
import { Engine } from 'black-engine/Engine';
import { Input } from 'black-engine/input/Input';

export class Game extends GameObject {
    constructor() {
        super();
    }
}

const engine = new Engine('container', Game, CanvasDriver, [Input]);
engine.pauseOnBlur = false;
engine.pauseOnHide = false;
engine.start();
engine.stage.setSize(1920, 1080);
engine.stage.scaleMode = StageScaleMode.LETTERBOX;
