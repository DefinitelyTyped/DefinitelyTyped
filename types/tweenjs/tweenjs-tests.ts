/// <reference types="easeljs"/>

var target = new createjs.DisplayObject();

// source : http://www.createjs.com/Docs/TweenJS/modules/TweenJS.html
// Chainable modules : 
target.alpha = 1;
createjs.Tween.get(target).wait(500, false).to({ alpha: 0, visible: false }, 1000).call(onComplete);
function onComplete() {
    //Tween complete
}

// $ExpectError
createjs.Tween.get(target).wait(500, false).to({ unknown: 0 }, 1000);
