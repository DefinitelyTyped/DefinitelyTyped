import * as globule from 'globule';

let filepaths: string[];

filepaths = globule.find('**/*.js');
filepaths = globule.find(['**/*.js']);
filepaths = globule.find('**/*.js', '**/*.less');
filepaths = globule.find('*.js', { matchBase: true });
filepaths = globule.find('**/*.js', '**/*.less', { filter: 'isFile' });
filepaths = globule.find('**/*.js', '**/*.less', { filter: /jQuery/i.test });
filepaths = globule.find({ src: '**/*.js' });

filepaths = globule.match('*.js', '/home/code');
filepaths = globule.match('*.js', '/home/code', { matchBase: true });

let bResult: boolean;
bResult = globule.isMatch('*.js', '/home/code');
bResult = globule.isMatch('*.js', '/home/code', { matchBase: true });

let mappings = globule.mapping(['*.js']);
let len = mappings.length;
let src = mappings[0].src;
let dest = mappings[0].dest;

mappings = globule.mapping(['*.js'], { srcBase: '/home/code' });
mappings = globule.mapping(['*.js', '*.less']);
mappings = globule.mapping(['*.js'], ['*.less']);

