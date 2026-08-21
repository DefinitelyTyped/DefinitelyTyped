import colorString = require("chartjs-color-string");

colorString.getRgb("blue");
colorString.getRgb("#FFF");
colorString.getRgba("#FFFA");
colorString.getRgba("#FFFFFFAA");

colorString.getRgba("rgba(200, 60, 60, 0.3)");
colorString.getRgba("rgb(200, 200, 200)");

colorString.getHsl("hsl(360, 100%, 50%)");
colorString.getHsla("hsla(360, 60%, 50%, 0.4)");

colorString.getAlpha("rgba(200, 0, 12, 0.6)");

colorString.hexString([255, 255, 255]);
colorString.hexString([0, 0, 255, 0.4]);
colorString.hexString([0, 0, 255], 0.4);
colorString.rgbString([255, 255, 255]);
colorString.rgbString([0, 0, 255, 0.4]);
colorString.rgbString([0, 0, 255], 0.4);
colorString.percentString([0, 0, 255]);
colorString.keyword([255, 255, 0]);
colorString.hslString([360, 100, 100]);
