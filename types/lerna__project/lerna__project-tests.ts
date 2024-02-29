import { Package } from "@lerna/package";
import { getPackages, getPackagesSync, Project } from "@lerna/project";

new Project("./path");
let packagesPromise: Promise<Package[]> = getPackages("./path");
let packages: Package[] = getPackagesSync("./path");

new Project();
packagesPromise = getPackages();
packages = getPackagesSync("./path");
