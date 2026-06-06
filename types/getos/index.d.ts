export = getos;

declare function getos(cb: (error: Error | null, os: getos.Os) => void): string;

declare namespace getos {
    type Os = OtherOs | LinuxOs;

    interface OtherOs {
        os:
            | "aix"
            | "android"
            | "darwin"
            | "freebsd"
            | "openbsd"
            | "sunos"
            | "win32"
            | "cygwin";
    }

    interface LinuxOs {
        os: "linux";
        dist: string;
        release: string;
        codename?: string | undefined;
    }
}
