export class AnimationController extends Component {
    private mAnimations;
    private mCurrentAnim;
    getByName(name: string): AnimationInfo;
    remove(name: string): void;
    add(name: string, textures: Texture[], fps?: number, loop?: boolean): AnimationInfo;
    play(name: string): void;
    stop(): void;
    pause(): void;
    get currentAnimation(): AnimationInfo;
}
import { Texture } from '../textures/Texture';
import { Component } from '../core/Component';
import { AnimationInfo } from './AnimationInfo';
