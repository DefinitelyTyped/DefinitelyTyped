/// <reference path="TweenLite.d.ts" />

var tween = TweenLite
    .to(document.getElementById('some-div'), 1, {
        width: '200px',
        height: '200px'
    })
    .seek(0.5);