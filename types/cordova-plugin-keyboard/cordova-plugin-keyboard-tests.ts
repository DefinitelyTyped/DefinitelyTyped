Keyboard.shrinkView(true);
Keyboard.shrinkView(false);
Keyboard.hideFormAccessoryBar(true);
Keyboard.hideFormAccessoryBar(false);
Keyboard.disableScrollingInShrinkView(true);
Keyboard.disableScrollingInShrinkView(false);
if (Keyboard.isVisible) {
    console.log('Keyboard is visible');
}
Keyboard.automaticScrollToTopOnHiding = true;
Keyboard.onshow = function () {
    console.log('onshow');
};
Keyboard.onhide = function () {
    console.log('onhide');
};
Keyboard.onshowing = function () {
    console.log('onshowing');
};
Keyboard.onhiding= function () {
    console.log('onhiding');
};

