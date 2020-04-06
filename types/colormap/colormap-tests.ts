import * as colormap from 'colormap';

colormap(); // $ExpectType string[]
colormap({}); // $ExpectType string[]
colormap({ format: 'hex' }); // $ExpectType string[]
colormap({ format: 'rgbaString' }); // $ExpectType string[]
colormap({ format: 'rba' }); // $ExpectType [number, number, number, number]
colormap({ format: 'float' }); // $ExpectType [number, number, number, number]
