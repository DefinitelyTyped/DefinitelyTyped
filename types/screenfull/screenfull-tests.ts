import screenfull = require('screenfull');

function test_fullscreen_page() {
  if (screenfull.enabled) {
    screenfull.request();
  }
}

function test_fullscreen_element() {
  var elem = document.getElementById('target');
  if (screenfull.enabled) {
    screenfull.request(elem);
  }
}

function test_toggle() {
  var elem = document.getElementById('target');
  if (screenfull.enabled) {
    screenfull.toggle(elem);
  }
}

function test_exit() {
  if (screenfull.enabled) {
    screenfull.request();
  }
  document.getElementById('target').addEventListener('click', function () {
    if (screenfull.enabled) {
      screenfull.exit();
    }
  })
}

function test_raw_detect_change() {
  if (screenfull.enabled) {
    document.addEventListener(screenfull.raw.fullscreenchange, function () {
      if (screenfull.isFullscreen) {
        console.log('fullscreen');
      } else {
        console.log('not fullscreen');
      }
    });
  }
}

function test_raw_error() {
  if (screenfull.enabled) {
    document.addEventListener(screenfull.raw.fullscreenerror, function (event) {
      console.error('Failed to enable fullscreen', event);
    });
  }
}

function test_detect_change() {
  if (screenfull.enabled) {
    screenfull.onchange(function () {
      if (screenfull.isFullscreen) {
        console.log('fullscreen');
      } else {
        console.log('not fullscreen');
      }
    });
  }
}

function test_detect_error() {
  if (screenfull.enabled) {
    screenfull.onerror(function (event) {
      console.error('Failed to enable fullscreen', event);
    });
  }
}

function test_listener_on() {
  if (screenfull.enabled) {
    screenfull.on('change', function () {
      if (screenfull.isFullscreen) {
        console.log('fullscreen');
      } else {
        console.log('not fullscreen');
      }
    });
    screenfull.on('error', function (event) {
      console.error('Failed to enable fullscreen', event);
    })
  }
}

function test_listener_off() {
  if (screenfull.enabled) {
    screenfull.off('change', function () {
      if (screenfull.isFullscreen) {
        console.log('fullscreen');
      } else {
        console.log('not fullscreen');
      }
    });
    screenfull.off('error', function (event) {
      console.error('Failed to enable fullscreen', event);
    })
  }
}

function test_access_element() {
  var elem = document.getElementById('target');
  if (screenfull.enabled) {
    screenfull.request(elem);
    if (elem !== screenfull.element) {
      alert('incorrect element property');
    }
  }
}
