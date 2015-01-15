/// <reference path="animationframe.d.ts"/>
module AnimationFrameTests {
  var animation = new AnimationFrame();
  function frame() {
    animation.request(frame);
  }

  animation.request(frame);
}
