// From the documentation
function test_doc() {
    const elem = document.createElement('div');
    const animation = elem.animate({
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
    function buildFadeIn(target: HTMLElement) {
        const steps: Keyframe[] = [];
        return new KeyframeEffect(target, steps, {
            duration: 500,
            delay: -1000,
            fill: 'backwards',
            easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        });
    }
    function buildFadeOut(target: HTMLElement) {
        const angle = Math.pow((Math.random() * 16) - 6, 3);
        const offset = (Math.random() * 20) - 10;
        const transform = `translate(${offset}em, 20em) rotate(${angle}deg) scale(0)`;
        const steps: Keyframe[] = [];
        return new KeyframeEffect(target, steps, {
            duration: 1500,
            easing: 'ease-in'
        });
    }
    const effectNode = document.createElement('div');
    effectNode.className = 'circleEffect';
    // tslint:disable-next-line:no-unnecessary-type-assertion
    const bounds = document.documentElement!.getBoundingClientRect();
    effectNode.style.left = `${bounds.left + bounds.width / 2}px`;
    effectNode.style.top = `${bounds.top + bounds.height / 2}px`;
    const header = document.querySelector('header');
    if (header) {
        header.appendChild(effectNode);
    }
    const newColor = `hsl(${Math.round(Math.random() * 255)}, 46%, 42%)`;
    effectNode.style.background = newColor;
    const scaleSteps: Keyframe[] = [];
    const timing: AnimationEffectTiming = { duration: 2500, easing: 'ease-in-out', fill: "backwards" };
    const scaleEffect = new KeyframeEffect(effectNode, scaleSteps, timing);
    const fadeEffect = new SequenceEffect([buildFadeOut(effectNode), buildFadeIn(effectNode)]);
    const allEffects = [scaleEffect, fadeEffect];
    // Play all animations within this group.
    const groupEffect = new GroupEffect(allEffects);
    const anim = document.timeline.play(groupEffect);
}

// https://developer.mozilla.org/en-US/docs/Web/API/Animation/Animation
// http://codepen.io/rachelnabors/pen/eJyWzm/?editors=0010
function test_whiteRabbit() {
    const whiteRabbit = document.getElementById("rabbit");
    if (whiteRabbit) {
        const rabbitDownKeyframes = new KeyframeEffect(
            whiteRabbit,
            [],
            { duration: 3000, fill: 'forwards' }
        );
        const rabbitDownAnimation = new Animation(rabbitDownKeyframes, document.timeline);
        // On tap or click,
        whiteRabbit.addEventListener("mousedown", downHeGoes, false);
        whiteRabbit.addEventListener("touchstart", downHeGoes, false);

        // Trigger a single-fire animation
        function downHeGoes(event: Event) {
            // Remove those event listeners
            whiteRabbit!.removeEventListener("mousedown", downHeGoes, false);
            whiteRabbit!.removeEventListener("touchstart", downHeGoes, false);

            // Play rabbit animation
            rabbitDownAnimation.play();
        }
    }
}
