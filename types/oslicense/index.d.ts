export interface License {
    id: string;
    identifiers: Identifier[];
    keywords: string[];
    links: Link[];
    name: string;
    other_names: OtherName[];
    superseded_by: null | string;
    text: Text[];
}

export interface Identifier {
    identifier: string;
    scheme: string;
}

export interface Link {
    note: string;
    url: string;
}

export interface OtherName {
    name: string;
    note: string;
}

export interface Text {
    media_type: string;
    title: string;
    url: string;
}

/** @async */
export function getLicenses(): Promise<Record<string, string>>;
/** @async */
export function getLicenseData(id: string): Promise<License>;
/** @async */
export function getLicenseText(id: string): Promise<string>;
export function getNearestLicense(): string;
