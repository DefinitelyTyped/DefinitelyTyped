///<reference path="./tweenjs.d.ts"/>
///<reference path="../easeljs/easeljs.d.ts"/>

var target = new createjs.DisplayObject();

// source : http://www.createjs.com/Docs/TweenJS/modules/TweenJS.html
// Chainable modules : 
target.alpha = 1;
createjs.Tween.get(target).wait(500, false).to({ alpha: 0, visible: false }, 1000).call(onComplete);
function onComplete() {
    //Tween complete
}