
import * as globule from 'globule';

let filepaths: string[];
filepaths = globule.find('**/*.js');
filepaths = globule.find(['**/*.js']);
filepaths = globule.find('**/*.js', '**/*.less');
// filepaths = globule.find('*.js', { nonull: true });


