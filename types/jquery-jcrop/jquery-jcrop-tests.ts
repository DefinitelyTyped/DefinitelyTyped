/// <reference types="jquery" />

jQuery(function($) {
  $('#target').Jcrop();
});

function showCoords(c: { x: number, y: number, x2: number; y2: number; w: number; h: number; }) {
  // variables can be accessed here as
  // c.x, c.y, c.x2, c.y2, c.w, c.h
}

jQuery(function($) {
  $('#target').Jcrop({
    onSelect: showCoords,
    onChange: showCoords
  });
});

jQuery(function($) {
  $('#target').Jcrop({
    onSelect: showCoords,
    bgColor: 'black',
    bgOpacity: .4,
    setSelect: [100, 100, 50, 50],
    aspectRatio: 16 / 9
  });
});

let jcrop_api;
$('#target').Jcrop({}, function() {
  jcrop_api = this;
});

jQuery(function($) {
  let jcrop_api: JQuery.Jcrop.IJcropApi;

  $('#target').Jcrop({
    bgColor: 'red'
  }, function() {
    jcrop_api = this;
  });

  $('#animbutton').click(function(e) {
    jcrop_api.animateTo([120, 120, 80, 80]);
    return false;
  });

  $('#delselect').click(function(e) {
    jcrop_api.release();
    return false;
  });
});

(function() {
  $('#cropbox').Jcrop({ boxWidth: 450, boxHeight: 400 });
});
