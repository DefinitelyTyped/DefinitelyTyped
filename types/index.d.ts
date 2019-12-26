// Type definitions for one-color 3.1.0
// Project: one-color
// Definitions by: Azliya <zhangmin093@gmail.com>
// Definitions: https://github.com/DefinitelyTyped/onecolor

export = onecolor;
declare function onecolor(clr:onecolor.ColorDefType):onecolor.Color;
declare namespace onecolor{
  type ColorDefType = string|[number, number, number, number]|[string, number, number, number, number]
  type Color={
    // Serialization methods:
    hex():string // 6-digit hex string: '#bda65b'
    css():string // CSS rgb syntax: 'rgb(10,128,220)'
    cssa():string // CSS rgba syntax: 'rgba(10,128,220,0.8)'
    toString():string // For debugging: '[one.color.RGB: Red=0.3 Green=0.8 Blue=0 Alpha=1]'
    toJSON():string // ["RGB"|"HSV"|"HSL", <number>, <number>, <number>, <number>]
  
    // Getters -- return the value of the channel (converts to other colorspaces as needed):
    red():number
    green():number
    blue():number
    hue():number
    saturation():number
    value():number
    lightness():number
    alpha():number
    cyan():number    // one-color-all.js and node.js only
    magenta():number // one-color-all.js and node.js only
    yellow():number  // one-color-all.js and node.js only
    black():number   // one-color-all.js and node.js only
  
    // Setters -- return new color instances with one channel changed:
    red(val:number):Color
    green(val:number):Color
    blue(val:number):Color
    hue(val:number):Color
    saturation(val:number):Color
    value(val:number):Color
    lightness(val:number):Color
    alpha(val:number):Color
    cyan(val:number):Color    // one-color-all.js and node.js only
    magenta(val:number):Color // one-color-all.js and node.js only
    yellow(val:number):Color  // one-color-all.js and node.js only
    black(val:number):Color   // one-color-all.js and node.js only
  
    // Adjusters -- return new color instances with the channel adjusted by the specified delta (0..1):
    red(val:number, trig:true):Color
    green(val:number, trig:true):Color
    blue(val:number, trig:true):Color
    hue(val:number, trig:true):Color
    saturation(val:number, trig:true):Color
    value(val:number, trig:true):Color
    lightness(val:number, trig:true):Color
    alpha(val:number, trig:true):Color
    cyan(val:number, trig:true):Color    // one-color-all.js and node.js only
    magenta(val:number, trig:true):Color // one-color-all.js and node.js only
    yellow(val:number, trig:true):Color  // one-color-all.js and node.js only
    black(val:number, trig:true):Color   // one-color-all.js and node.js only
  
    // Comparison with other color objects, returns true or false (epsilon defaults to 1e-9):
    equals(otherColor:Color, epsilon?:number):boolean
  }
}
