export class Component extends MessageDispatcher {
    constructor();
    private mId;
    private mGameObject;
    private mAdded;
    enabled: boolean;
    protected onAdded(gameObject: GameObject): void;
    protected onRemoved(gameObject: GameObject): void;
    protected onUpdate(): void;
    protected onRender(): void;
    removeFromParent(): void;
    get gameObject(): GameObject;
    get parent(): any;
}
import { MessageDispatcher } from '../messages/MessageDispatcher';
import { GameObject } from './GameObject';
