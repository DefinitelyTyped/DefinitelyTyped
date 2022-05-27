export class System extends MessageDispatcher {
    constructor();
    onPause(): void;
    onResume(): void;
    protected onUpdate(): void;
    protected onPostUpdate(): void;
    protected onRender(): void;
    protected onChildrenAdded(gameObject: GameObject): void;
    protected onChildrenRemoved(gameObject: GameObject): void;
    protected onChildrenChanged(gameObject: GameObject): void;
    protected onComponentAdded(child: GameObject, component: Component): void;
    protected onComponentRemoved(child: GameObject, component: Component): void;
    dispose(): void;
}
import { MessageDispatcher } from '../messages/MessageDispatcher';
import { Component } from './Component';
import { GameObject } from './GameObject';
