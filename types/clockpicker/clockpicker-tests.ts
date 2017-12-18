// ClockPicker tests from https://github.com/weareoutman/clockpicker

// Initialize ClockPicker
$('.clockpicker').clockpicker();

// Initialize ClockPicker with options
$('.clockpicker').clockpicker({
  default: 'now',
  placement: 'bottom',
  align: 'left',
  donetext: 'Done',
  autoclose: false,
  twelvehour: true,
  vibrate: true,
  fromnow: 0,
  init: () => {},
  beforeShow: () => {},
  afterShow: () => {},
  beforeHide: () => {},
  afterHide: () => {},
  beforeHourSelect: () => {},
  afterHourSelect: () => {},
  beforeDone: () => {},
  afterDone: () => {},
});

// Invoke ClockPicker operation methods
$('.clockpicker').clockpicker('show');
$('.clockpicker').clockpicker('hide');
$('.clockpicker').clockpicker('remove');
$('.clockpicker').clockpicker('toggleView', 'hours');
$('.clockpicker').clockpicker('toggleView', 'minutes');
