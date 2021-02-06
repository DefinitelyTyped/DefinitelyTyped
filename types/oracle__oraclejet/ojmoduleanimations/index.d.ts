import { ModuleElementAnimation } from '../ojmodule-element';
import AnimationUtils = require('../ojanimation');
export let coverStart: ModuleElementAnimation;
export let coverUp: ModuleElementAnimation;
export let fade: ModuleElementAnimation;
export let navChild: ModuleElementAnimation;
export let navParent: ModuleElementAnimation;
export let navSiblingEarlier: ModuleElementAnimation;
export let navSiblingLater: ModuleElementAnimation;
export let pushEnd: ModuleElementAnimation;
export let pushStart: ModuleElementAnimation;
export let revealDown: ModuleElementAnimation;
export let revealEnd: ModuleElementAnimation;
export let zoomIn: ModuleElementAnimation;
export let zoomOut: ModuleElementAnimation;
export function createAnimation(oldViewEffect: {
    effect: AnimationUtils.AnimationMethods;
    [key: string]: any;
} | AnimationUtils.AnimationMethods | null, newViewEffect: {
    effect: AnimationUtils.AnimationMethods;
    [key: string]: any;
} | AnimationUtils.AnimationMethods | null, newViewOnTop: boolean): ModuleElementAnimation;
export function switcher(callback: (param0: SwitcherCallBackParam) => Animations): ModuleElementAnimation;
export type Animations = 'coverStart' | 'coverUp' | 'fade' | 'navChild' | 'navParent' | 'navSiblingEarlier' | 'navSiblingLater' | 'pushEnd' | 'pushStart' | 'revealDown' | 'revealEnd' | 'zoomIn' |
   'zoomOut';
// tslint:disable-next-line interface-over-type-literal
export type SwitcherCallBackParam = {
    node: Element;
    valueAccessor: (() => any);
    isInitial: boolean;
    oldViewModel: any;
    newViewModel: any;
};
