///<reference path="./tweenjs.d.ts"/>
///<reference path="../easeljs/easeljs.d.ts"/>

var target: createjs.DisplayObject = new createjs.DisplayObject();
var Tween = createjs.Tween; 

// source : http://www.createjs.com/Docs/TweenJS/modules/TweenJS.html
// Chainable modules : 
target.alpha = 1;
Tween.get(target).wait(500, false).to({ alpha: 0, visible: false }, 1000).call(onComplete);
function onComplete() {
    //Tween complete
}