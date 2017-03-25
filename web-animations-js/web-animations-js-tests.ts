// From the documentation
function test_doc() {
    var elem = document.createElement('div');
    var animation = elem.animate({
        opacity: [0.5, 1],
        transform: ['scale(0.5)', 'scale(1)']
    }, {
            direction: 'alternate',
            duration: 500,
            iterations: Infinity
        });
}
// From https://io2015codelabs.appspot.com/codelabs/web-animations-transitions-playbackcontrol
// To test KeyframeEffect, SequenceEffect and GroupEffect
function test_AnimationsApiNext() {
    function buildFadeIn(target : HTMLElement) {
        var steps = [
            { opacity: 0, transform: 'translate(0, 20em)' },
            { opacity: 1, transform: 'translate(0)' }
        ];
        return new KeyframeEffect(target, steps, {
            duration: 500,
            delay: -1000,
            fill: 'backwards',
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        });
    }
    function buildFadeOut(target: HTMLElement) {
        var angle = Math.pow((Math.random() * 16) - 6, 3);
        var offset = (Math.random() * 20) - 10;
        var transform = 'translate(' + offset + 'em, 20em) ' +
            'rotate(' + angle + 'deg) ' +
            'scale(0)';
        var steps = [
            { visibility: 'visible', opacity: 1, transform: 'none' },
            { visibility: 'visible', opacity: 0, transform: transform }
        ];
        return new KeyframeEffect(target, steps, {
            duration: 1500,
            easing: 'ease-in'
        });
    }
    var effectNode = document.createElement('div');
    effectNode.className = 'circleEffect';
    var bounds = document.documentElement.getBoundingClientRect();
    effectNode.style.left = bounds.left + bounds.width / 2 + 'px';
    effectNode.style.top = bounds.top + bounds.height / 2 + 'px';
    var header = document.querySelector('header');
    header.appendChild(effectNode);
    var newColor = 'hsl(' + Math.round(Math.random() * 255) + ', 46%, 42%)';
    effectNode.style.background = newColor;
    var scaleSteps = [{ transform: 'scale(0)' }, { transform: 'scale(1)' }];
    var timing = { duration: 2500, easing: 'ease-in-out' };
    var scaleEffect = new KeyframeEffect(effectNode, scaleSteps, timing);
    var fadeEffect = new SequenceEffect([buildFadeOut(effectNode), buildFadeIn(effectNode)]);
    var allEffects = [scaleEffect, fadeEffect];
    // Play all animations within this group.
    var groupEffect = new GroupEffect(allEffects);
    var anim = document.timeline.play(groupEffect);
}
