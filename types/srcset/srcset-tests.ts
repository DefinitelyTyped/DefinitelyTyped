import srcset = require('srcset');

const parsed = srcset.parse('banner-HD.jpg 2x, banner-phone.jpg 100w');
parsed; // $ExpectType SrcSetDefinition[]

parsed.push({ url: 'banner-phone-HD.jpg', width: 100, density: 2 });

srcset.stringify(parsed); // $ExpectType string
