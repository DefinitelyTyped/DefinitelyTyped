/// <reference path="webcola.d.ts"/>
module WebColaTests {
  var adaptor = cola.adaptor({
    trigger: function() {
    },
    kick: function() {
    },
    on: function() {
    },
    drag: function() {
    }
  });

  adaptor
    .size([100, 100])
    .avoidOverlaps(true)
    .nodes({})
    .links({})
    .handleDisconnected(true)
    .convergenceThreshold(0.001)
    .constraints({})
    .linkDistance(100)
    .flowLayout('y', 0);

  adaptor.start(1, 2, 3);
  adaptor.dragstart({});
  adaptor.dragend({});
  adaptor.stop();
  adaptor.resume();
}
