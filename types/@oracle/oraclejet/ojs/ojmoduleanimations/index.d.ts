/// <reference types='ojs/ojmodule-element'/>
declare namespace oj {  
  namespace ModuleAnimations {
    var coverStart: oj.ModuleElementAnimation;
    var coverUp: oj.ModuleElementAnimation;
    var fade: oj.ModuleElementAnimation;
    var navChild: oj.ModuleElementAnimation;
    var navParent: oj.ModuleElementAnimation;
    var navSiblingEarlier: oj.ModuleElementAnimation;
    var navSiblingLater: oj.ModuleElementAnimation;
    var pushEnd: oj.ModuleElementAnimation;
    var pushStart: oj.ModuleElementAnimation;
    var revealDown: oj.ModuleElementAnimation;
    var revealEnd: oj.ModuleElementAnimation;
    var zoomIn: oj.ModuleElementAnimation;
    var zoomOut: oj.ModuleElementAnimation;
    function createAnimation(oldViewEffect: {effect: oj.AnimationUtils.AnimationMethods, [key:string]: any}|oj.AnimationUtils.AnimationMethods|null, newViewEffect: {effect: oj.AnimationUtils.AnimationMethods, [key:string]: any}|oj.AnimationUtils.AnimationMethods|null, newViewOnTop: boolean): oj.ModuleElementAnimation;
    function switcher(callback: (param0: oj.ModuleAnimations.SwitcherCallBackParam) => oj.ModuleAnimations.Animations): oj.ModuleElementAnimation;
  }
  namespace ModuleAnimations {
    type Animations = 'coverStart'|'coverUp'|'fade'|'navChild'|'navParent'|'navSiblingEarlier'|'navSiblingLater'|'pushEnd'|'pushStart'|'revealDown'|'revealEnd'|'zoomIn'|'zoomOut'; 
  }
  namespace ModuleAnimations {
    type SwitcherCallBackParam =
    {
      node: Element, valueAccessor: (()=> any), isInitial: boolean, oldViewModel: any, newViewModel: any
    }
  }

}
