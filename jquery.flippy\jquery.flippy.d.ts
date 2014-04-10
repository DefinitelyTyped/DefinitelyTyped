// Type definitions for FLIPPY jQuery plugin - January 23 2014 - v1.4
// Project: http://guilhemmarty.com/flippy
// Definitions by: enternet <https://github.com/enternet>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

interface JQuery {
  flippy(opts?: FlippyOptions): void;
  flippyReverse(): void;
}

interface FlippyOptions {
  step_ang?: number;
  refresh_rate?: number;
  duration?: number;
  depth?: number;
  color_target?: string;
  light?: number;
  direction?: string;
  noCSS?: boolean;

  content?: any;
  recto?: string;
  verso?: string;

  onStart?: () => void;
  onMidway?: () => void;
  onAnimation?: () => void;
  onFinish?: () => void;
  onReverseStart?: () => void;
  onReverseMidway?: () => void;
  onReverseAnimation?: () => void;
  onReverseFinish?: () => void;
}
