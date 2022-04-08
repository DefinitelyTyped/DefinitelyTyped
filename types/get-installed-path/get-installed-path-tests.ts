import { getInstalledPath, getInstalledPathSync } from 'get-installed-path';

getInstalledPath(''); // $ExpectedType Promise<string>
getInstalledPathSync('', { cwd: '', local: true, paths: [] }); // $ExpectedType string
