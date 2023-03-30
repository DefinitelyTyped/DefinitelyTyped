import * as gls from 'gulp-live-server';

// $ExpectType GLSStatic
gls(['command']);

// $ExpectType GLSStatic
gls.static('folder', 123);

// $ExpectType GLSStatic
gls.new('script.js');
