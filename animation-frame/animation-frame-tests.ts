/// <reference path="animation-frame.d.ts"/>
namespace AnimationFrameTests {
  var animation = new AnimationFrame();
  function frame() {
    animation.request(frame);
  }

  animation.request(frame);
}
