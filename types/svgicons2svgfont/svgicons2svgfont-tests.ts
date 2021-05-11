import SVGIcons2SVGFont = require('svgicons2svgfont');

let svgIcons2SvgFont = new SVGIcons2SVGFont();
svgIcons2SvgFont = new SVGIcons2SVGFont({});
svgIcons2SvgFont = new SVGIcons2SVGFont({ fontName: 'testfont' });
svgIcons2SvgFont = new SVGIcons2SVGFont({ fontName: 'testfont', fontId: 'testId' });
svgIcons2SvgFont = new SVGIcons2SVGFont({ fontStyle: 'italic' });
svgIcons2SvgFont = new SVGIcons2SVGFont({ fontWeight: 'normal' });
svgIcons2SvgFont = new SVGIcons2SVGFont({ fixedWidth: true });
svgIcons2SvgFont = new SVGIcons2SVGFont({ centerHorizontally: true });
svgIcons2SvgFont = new SVGIcons2SVGFont({ centerVertically: true });
svgIcons2SvgFont = new SVGIcons2SVGFont({ normalize: true });
svgIcons2SvgFont = new SVGIcons2SVGFont({ fontHeight: 100 });
svgIcons2SvgFont = new SVGIcons2SVGFont({ round: 10e13 });
svgIcons2SvgFont = new SVGIcons2SVGFont({ descent: 10 });
svgIcons2SvgFont = new SVGIcons2SVGFont({ ascent: 10 });
svgIcons2SvgFont = new SVGIcons2SVGFont({ metadata: 'test metadata' });
