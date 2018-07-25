

// All tracking tests below are code taken verbatim (or, as close as possible) from the tracking docs: https://trackingjs.com/docs.html

var colors = new tracking.ColorTracker(['magenta', 'cyan', 'yellow']);

colors.on('track', function(event) {
  if (event.data.length === 0) {
    // No colors were detected in this frame.
  } else {
    event.data.forEach(function(rect) {
      console.log(rect.x, rect.y, rect.height, rect.width, rect.color);
    });
  }
});

tracking.track('#myVideo', colors);

var myTracker = new tracking.Tracker('target');

myTracker.on('track', function(event) {
  if (event.data.length === 0) {
    // No targets were detected in this frame.
  } else {
    event.data.forEach(function(data) {
      // Plots the detected targets here.
    });
  }
});

var trackerTask = tracking.track('#myVideo', myTracker);

trackerTask.stop(); // Stops the tracking
trackerTask.run(); // Runs it again anytime

tracking.ColorTracker.registerColor('green', function(r, g, b) {
  if (r < 50 && g > 200 && b < 50) {
    return true;
  }
  return false;
});

var objects = new tracking.ObjectTracker(['face', 'eye', 'mouth']);

objects.on('track', function(event) {
  if (event.data.length === 0) {
    // No objects were detected in this frame.
  } else {
    event.data.forEach(function(rect) {
      // rect.x, rect.y, rect.height, rect.width
    });
  }
});

tracking.track('#myVideo', objects);
