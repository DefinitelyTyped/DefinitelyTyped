import { defaultAttributes, getAttributes, formatAttributes, toString, toSvg } from '@carbon/icon-helpers';

defaultAttributes.focusable; // $Expect 'false'
defaultAttributes.preserveAspectRatio; // $Expect 'xMidYMid meet'
getAttributes({ width: 16, height: 16 }); // $ExpectType IconAttributes
formatAttributes({ width: 16, height: 16 }); // $ExpectType string
toString(); // $Expect string
toString({
    elem: 'svg',
    attrs: { width: 16, height: 16 },
    content: [
        { elem: 'path', attrs: { d: '' } },
        { elem: 'circle', attrs: { cx: '', cy: '', r: '' } },
        { elem: 'rect', attrs: { width: '', height: '', x: '', y: '', rx: '' } },
    ],
}); // $Expect string
toSvg(); // $ExpectType SVGSVGElement
toSvg({
    elem: 'svg',
    attrs: { width: 16, height: 16 },
    content: [
        { elem: 'path', attrs: { d: '' } },
        { elem: 'circle', attrs: { cx: '', cy: '', r: '' } },
        { elem: 'rect', attrs: { width: '', height: '', x: '', y: '', rx: '' } },
    ],
}); // $Expect SVGSVGElement
