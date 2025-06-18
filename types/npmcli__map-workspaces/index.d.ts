import { PackageLock } from "@npmcli/arborist";
import { PackageJson } from "@npmcli/package-json";
import { IOptions as GlobOptions } from "glob";

export = mapWorkspaces;

declare function mapWorkspaces(opts: mapWorkspaces.Options): Promise<Map<string, string>>;

declare namespace mapWorkspaces {
    interface Options extends GlobOptions {
        pkg: PackageJson;
        cwd?: string;
        ignore?: string[];
    }

    interface VirtualOptions {
        lockfile: PackageLock;
        cwd?: string;
    }

    function virtual(opts: VirtualOptions): Map<string, string>;
}
