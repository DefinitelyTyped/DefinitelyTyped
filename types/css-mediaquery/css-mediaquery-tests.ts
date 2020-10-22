import { match, parse, Expression } from 'css-mediaquery';

// $ExpectError
match('(min-width: 800)');
// $ExpectType
match('(min-width: 800)', {});
match('(min-width: 800)', { width: 300 });
match('(min-width: 800)', { width: '300px' });
match('(min-width: 800)', { width: '300px', height: 100 });
match('', { 'aspect-ratio': '16:10' });
match('', { 'color-index': 2 });
match('', { 'device-aspect-ratio': '4:3' });
match('', { 'device-height': '500cm' });
match('', { 'device-width': '1m' });
match('', { color: 'blue' });
match('', { grid: true });
match('', { height: '300dpi' });
match('', { monochrome: true });
match('', { orientation: 'vertical' });
match('', { resolution: '1440p' });
match('', { scan: false });

const [{ expressions }] = parse('screen and (min-width: 48em)');
// $ExpectType Expression[]
expressions;
