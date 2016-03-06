/// <reference path="./svg2png.d.ts" />
"use strict";

import svg2png = require("svg2png");
svg2png("./1.svg", "./tiger.png", err => {
  if (err) {
    console.log("didnt work");
  } else {
    console.log("ok");
  }
});



svg2png("./index.svg", "./dest.png", err => {
  if (err) {
    console.log("didnt work");
  } else {
    console.log("ok");
  }
});

for (var i = 0.1; i < 4; i += 0.2) {

  svg2png("./tiger.svg", "./tigerzoom" + i.toString() + ".png", i, err => {
    if (err) {
      console.log("didnt work");
    } else {
      console.log("ok");
    }
  });

  svg2png("./index.svg", "./index" + i.toString() + ".png", i, err => {
    if (err) {
      console.log("didnt work");
    } else {
      console.log("ok");
    }
  });
}

console.log("done");

