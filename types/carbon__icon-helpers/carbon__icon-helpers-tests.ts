import { defaultAttributes, getAttributes, formatAttributes, toString, toSVG } from '@carbon/icon-helpers';

defaultAttributes.focusable; // $Expect string
defaultAttributes.preserveAspectRatio; // $Expect string
getAttributes({
    width: 16,
    height: 16,
}); /* $ExpectType {
    width: number;
    height: number;
    viewBox: string;
    title?: string;
    role?: string;
    focusable: string;
    preserveAspectRatio: string;
} */
formatAttributes({ width: 16, height: 16 }); // $ExpectType string
toString({
    elem: 'svg',
    attrs: { width: 16, height: 16 },
    content: [
        { elem: 'path', attrs: { d: '' } },
        { elem: 'circle', attrs: { cx: '', cy: '', r: '' } },
        { elem: 'rect', attrs: { width: '', height: '', x: '', y: '', rx: '' } },
    ],
}); // $Expect string
toSVG({
    elem: 'svg',
    attrs: { width: 16, height: 16 },
    content: [
        { elem: 'path', attrs: { d: '' } },
        { elem: 'circle', attrs: { cx: '', cy: '', r: '' } },
        { elem: 'rect', attrs: { width: '', height: '', x: '', y: '', rx: '' } },
    ],
}); // $Expect SVGSVGElement
