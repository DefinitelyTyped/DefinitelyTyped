import svg2ttf from 'svg2ttf';

const result = svg2ttf(`
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg">
    <defs>
        <font id="test" horiz-adv-x="200" >
        <font-face font-family="test"
            units-per-em="1000"
            ascent="800"
            descent="-200"
            alphabetic="0"
        />
        <glyph unicode="." glyph-name="fullstop" horiz-adv-x="300" d="M0,0 L10,10 L20,10"/>
        </font>
    </defs>
</svg>`);

const buffer = result.buffer;
