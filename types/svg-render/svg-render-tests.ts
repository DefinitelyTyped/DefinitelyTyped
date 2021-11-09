import svgRender from 'svg-render';
// $ExpectType Buffer
svgRender({buffer: new Buffer("buffer"), width: 128, height: 128, expandUseTags: true});
