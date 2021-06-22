// All tracking tests below are code taken verbatim (or, as close as possible) from the tracking docs: https://trackingjs.com/docs.html

/*
 * ColorTracker tests 
 */

// Constructor accepts string or array
var colorTracker = new tracking.ColorTracker(['magenta', 'cyan', 'yellow']);
colorTracker = new tracking.ColorTracker('magenta');

colorTracker.on('track', function(event) {
  if (event.data.length === 0) {
    // No colors were detected in this frame.
  } else {
    event.data.forEach(function(rect) {
      console.log(rect.x, rect.y, rect.height, rect.width, rect.color);
    });
  }
});

// Tracker task accepts selector or HMTLElement
var videoEl = document.createElement('video');
var colorTrackerTask = tracking.track('#myVideo', colorTracker);
colorTrackerTask = tracking.track(videoEl, colorTracker)

// Also accepts tracking options
colorTrackerTask = tracking.track(videoEl, colorTracker, { camera: true, audio: false })

// Start and stop tracking
colorTrackerTask.stop();
colorTrackerTask.run();

// Register color takes a function that accepts rgb values and returns boolean
tracking.ColorTracker.registerColor('green', function(r, g, b) {
  if (r < 50 && g > 200 && b < 50) {
    return true;
  }
  return false;
});

/*
 * ObjectTacker tests
 */

// Constructor accepts string or array
var objectTracker = new tracking.ObjectTracker(['face', 'eye', 'mouth']);
objectTracker = new tracking.ObjectTracker('face');

objectTracker.on('track', function(event) {
  if (event.data.length === 0) {
    // No objects were detected in this frame.
  } else {
    event.data.forEach(function(rect) {
      console.log(rect.x, rect.y, rect.height, rect.width)
    });
  }
});

var objectTrackerTask = tracking.track('#myVideo', objectTracker);

// Start and stop tracking
objectTrackerTask.stop();
objectTrackerTask.run();

