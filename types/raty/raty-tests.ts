var $element: JQuery = $('<div></div>');

$element.raty();

$element.raty({
  cancel: false,
  cancelClass: 'raty-cancel',
  cancelHint: 'Cancel this rating!',
  cancelOff: 'cancel-off.png',
  cancelOn: 'cancel-on.png',
  cancelPlace: 'left',
  click: undefined,
  half: false,
  halfShow: true,
  hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
  iconRange: undefined,
  mouseout: undefined,
  mouseover: undefined,
  noRatedMsg: 'Not rated yet!',
  number: 5,
  numberMax: 20,
  path: undefined,
  precision: false,
  readOnly: false,
  round: { down: .25, full: .6, up: .76 },
  score: undefined,
  scoreName: 'score',
  single: false,
  space: true,
  starHalf: 'star-half.png',
  starOff: 'star-off.png',
  starOn: 'star-on.png',
  target: undefined,
  targetFormat: '{score}',
  targetKeep: false,
  targetScore: undefined,
  targetText: '',
  targetType: 'hint',
  starType: 'img',
});

var score: number = $element.raty('score');
$element.raty('score', 4);
$element.raty('click', 2);
$element.raty('readOnly', true);
$element.raty('cancel', true);
$element.raty('reload');
$element.raty('set', { space: false });
$element.raty('destroy');
$element.raty('move', 3);
