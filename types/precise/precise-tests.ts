
import precise = require("precise");

var timer = precise().start();

setTimeout(function () {
  console.log(timer.stop().diff());
}, 1000);