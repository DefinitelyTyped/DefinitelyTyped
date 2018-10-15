// init plugin
$('#container').mouseExit({
  delay: 500
});

// handle event
$('#container').on('mouseExit', (e, data) => {
  console.log(data.lostFocus, data.gainedFocus);
});
