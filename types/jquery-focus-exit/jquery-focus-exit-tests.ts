$('.test').one('focusin', e => {
  $(e.currentTarget).addClass('focusin');
});

$('.test').focusExit({debug: true}).on('focusExit', (e, data) => {
  console.log(e, data);
  $(e.currentTarget).removeClass('focusin');
});
