import Turbolinks = require("turbolinks");

Turbolinks.start();
Turbolinks.visit("/new/path");
Turbolinks.visit("/new/path", {
  action: "replace",
});
Turbolinks.visit("/new/path", {
  action: "advance",
});
Turbolinks.setProgressBarDelay(100);
Turbolinks.clearCache();
Turbolinks.supported;
