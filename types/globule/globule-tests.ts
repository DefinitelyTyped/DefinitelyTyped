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
const len = mappings.length;
const src = mappings[0].src;
const dest = mappings[0].dest;

mappings = globule.mapping(['*.js'], { srcBase: '/home/code' });
mappings = globule.mapping(['*.js', '*.less']);
mappings = globule.mapping(['*.js'], ['*.less']);
