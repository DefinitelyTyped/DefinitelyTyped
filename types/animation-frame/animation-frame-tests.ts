var animation = new AnimationFrame();
function frame() {
  animation.request(frame);
}

animation.request(frame);
