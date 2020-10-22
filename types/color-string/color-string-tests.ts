import * as colorString from 'color-string';

let colorDescriptor: colorString.ColorDescriptor | null;
colorDescriptor = colorString.get('#FFF');
colorDescriptor = colorString.get('#FFFA');
colorDescriptor = colorString.get('#FFFFFFAA');
colorDescriptor = colorString.get('hsl(360, 100%, 50%)');
colorDescriptor = colorString.get('hwb(60, 3%, 60%)');

let color: colorString.Color | null;
color = colorString.get.rgb('#FFF');
color = colorString.get.rgb('blue');
color = colorString.get.rgb('rgba(200, 60, 60, 0.3)');
color = colorString.get.rgb('rgb(200, 200, 200)');

color = colorString.get.hsl('hsl(360, 100%, 50%)');
color = colorString.get.hsl('hsla(360, 60%, 50%, 0.4)');
color = colorString.get.hwb('hwb(60, 3%, 60%)');

color = colorString.get.hwb('hwb(60, 3%, 60%, 0.6)');

color = colorString.get.rgb('invalid color string');

let stringifiedColor: string;
stringifiedColor = colorString.to.hex([255, 255, 255]);
stringifiedColor = colorString.to.hex([0, 0, 255, 0.4]);
stringifiedColor = colorString.to.hex([0, 0, 255], 0.4);
stringifiedColor = colorString.to.rgb([255, 255, 255]);
stringifiedColor = colorString.to.rgb([0, 0, 255, 0.4]);
stringifiedColor = colorString.to.rgb([0, 0, 255], 0.4);
stringifiedColor = colorString.to.rgb.percent([0, 0, 255]);
stringifiedColor = colorString.to.keyword([255, 255, 0]);
stringifiedColor = colorString.to.hsl([360, 100, 100]);
stringifiedColor = colorString.to.hwb([50, 3, 15]);

stringifiedColor = colorString.to.rgb(0, [0, 255], 0.4);
stringifiedColor = colorString.to.rgb([0, 0], [255], 0.4);
stringifiedColor = colorString.to.rgb([0], 0, [255, 0.4]);
