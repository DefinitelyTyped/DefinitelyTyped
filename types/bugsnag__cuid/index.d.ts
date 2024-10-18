declare function cuid(): string;

declare namespace cuid {
    function fingerprint(): string;
}

export = cuid;
