import font = require("oled-font-5x7");

// $ExpectType boolean
font.monospace;

// $ExpectType number
font.width;

// $ExpectType number
font.height;

// $ExpectType number[]
font.fontData;

// $ExpectType string[]
font.lookup;

// Test that values are accessible
const isMonospace: boolean = font.monospace;
const charWidth: number = font.width;
const charHeight: number = font.height;
const data: number[] = font.fontData;
const chars: string[] = font.lookup;
