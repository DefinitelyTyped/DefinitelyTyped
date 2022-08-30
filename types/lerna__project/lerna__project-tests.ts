import { Package } from '@lerna/package';
import { Project, getPackages, getPackagesSync } from '@lerna/project';

new Project('./path');
let packagesPromise: Promise<Package[]> = getPackages('./path');
let packages: Package[] = getPackagesSync('./path');

new Project();
packagesPromise = getPackages();
packages = getPackagesSync('./path');
