import * as devTools from "remote-redux-devtools";

// example configuration from: https://github.com/zalmoxisus/remote-redux-devtools
devTools({
  name: 'Android app',
  realtime: true,
  hostname: 'localhost',
  port: 8000,
  maxAge: 30,
  filters: { blacklist: ['EFFECT_RESOLVED'] }
});
