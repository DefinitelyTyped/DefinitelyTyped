import * as fz from "fuzzaldrin-plus";

const candidates = [
    'Find And Replace: Select All',
    'Settings View: Uninstall Packages',
    'Settings View: View Installed Themes',
    'Application: Install Update',
    'Install'
]
const objectCandidates = candidates.map(s => ({ foo: s }));

fz.filter(candidates, 'install');
fz.filter(objectCandidates, 'install', { key: 'foo' });

const prepQuery = fz.prepQuery('install');
fz.score('Application: Install Update', 'install');
fz.score('Application: Install Update', 'install', prepQuery);

fz.match('Application: Install Update', 'install');
fz.match('Application: Install Update', 'install', prepQuery);
