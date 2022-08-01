import ContrastColor = require('contrast-color');
const { contrastColor } = ContrastColor;

// Use via class instance
const cc = new ContrastColor({
  bgColor: "navy",
  fgDarkColor: "navy",
  fgLightColor: "water",
  customNamedColors: {
    water: "#00D0FF",
  },
});
const defaultFgColor = cc.contrastColor();
const hasAquaBgColor = cc.contrastColor({ bgColor: "aqua" });

// Use via static method
const hasRedBg = contrastColor({ bgColor: '#f00' });
const hasRedBgWithBlackFg = contrastColor({ bgColor: '#f00', threshold: 76 });
const hasYellowBg = contrastColor({ bgColor: 'yellow' });
const hasWhiteBgWithGreenFg = contrastColor({ fgDarkColor: '#008000' });
const hasBlackBgWithLimeFg = contrastColor({ bgColor: '#000000', fgLightColor: 'lime' });
const hasKitchenSink = contrastColor({
  bgColor: '#808080',
  fgDarkColor: 'dirty',
  fgLightColor: 'clean',
  threshold: 129,
  customNamedColors: {
    dirty: '#f90',
    clean: '#ff99ff',
  }
});
