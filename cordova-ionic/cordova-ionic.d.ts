// Type definitions for Ionic Corodva plugins.
// Project: https://github.com/driftyco
// Definitions by: Hendrik Maus <hendrik@aidentailor.net>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./plugins/keyboard.d.ts" />

interface Cordova {
  plugins:Plugins;
}

interface Plugins {
  Keyboard:Ionic.Keyboard;
}
