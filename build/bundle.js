(() => {
  var __create = Object.create;
  var __getProtoOf = Object.getPrototypeOf;
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  function __accessProp(key) {
    return this[key];
  }
  var __toESMCache_node;
  var __toESMCache_esm;
  var __toESM = (mod, isNodeMode, target) => {
    var canCache = mod != null && typeof mod === "object";
    if (canCache) {
      var cache = isNodeMode ? __toESMCache_node ??= new WeakMap : __toESMCache_esm ??= new WeakMap;
      var cached = cache.get(mod);
      if (cached)
        return cached;
    }
    target = mod != null ? __create(__getProtoOf(mod)) : {};
    const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
    for (let key of __getOwnPropNames(mod))
      if (!__hasOwnProp.call(to, key))
        __defProp(to, key, {
          get: __accessProp.bind(mod, key),
          enumerable: true
        });
    if (canCache)
      cache.set(mod, to);
    return to;
  };
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });

  // types/espruino/espruino-tests.ts
  var wifi = __toESM(__require("Wifi"));
  wifi.connect("ssid", { password: "pass", authMode: "wpa_wpa2" }, (err) => {
    if (err)
      throw err;
    console.log("connected");
  });
  wifi.startAP("ssid", { password: "pass", authMode: "wpa_wpa2" }, (err) => {
    if (err)
      throw err;
    console.log("created");
  });
  digitalWrite(D2, false);
  digitalWrite(D2, true);
  I2C1.setup({ scl: D4, sda: D0 });
  Serial2.setup(9600, { rx: D16, tx: D17 });
  NRF.setServices({
    48350: {
      43981: {
        value: "Hello",
        maxLen: 5,
        broadcast: false,
        readable: true,
        writable: true,
        notify: true,
        indicate: true,
        description: "My Characteristic",
        security: {
          read: {
            encrypted: false,
            mitm: false,
            lesc: false,
            signed: false
          },
          write: {
            encrypted: true,
            mitm: false,
            lesc: false,
            signed: false
          }
        },
        onWrite: (evt) => {
          console.log("Got ", evt.data);
        }
      }
    }
  });
  NRF.setServices({
    6157: {
      10807: {
        notify: true,
        value: [6]
      }
    }
  }, { advertise: ["180D"] });
  NRF.setScanResponse([
    7,
    9,
    "S",
    "a",
    "m",
    "p",
    "l",
    "e"
  ]);
  NRF.requestDevice({ filters: [{ name: "Puck.js abcd" }] }).then((device) => {
    console.log("found device");
    return device.gatt.connect({});
  });
  NRF.setAdvertising({
    6159: [95]
  });
  NRF.setAdvertising([
    3,
    3,
    170,
    254,
    19,
    22,
    170,
    254,
    16,
    248,
    3,
    "g",
    "o",
    "o",
    ".",
    "g",
    "l",
    "/",
    "B",
    "3",
    "J",
    "0",
    "O",
    "c"
  ], { interval: 100 });
  NRF.on("connect", (addr) => console.log(addr));
})();
