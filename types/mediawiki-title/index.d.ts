export interface SiteInfo {
    readonly general: {
        readonly lang: string;
        readonly legaltitlechars: string;
    };
    readonly namespaces: {
        readonly [id: number]: {
            readonly case: string;
            readonly name?: string;
            readonly subpages?: boolean;
            readonly canonical?: string;
            readonly "*"?: string;
        };
    };
    readonly namespacealiases: readonly {
        readonly id: number;
        readonly alias?: string;
        readonly "*"?: string;
    }[];
    readonly specialpagealiases?: readonly {
        readonly aliases: readonly string[];
    }[];
}

export class Namespace {
    constructor(id: number, siteInfo: SiteInfo);
    getId(): number;
    equals(other: Namespace): boolean;
    isMedia(): boolean;
    isSpecial(): boolean;
    isMain(): boolean;
    isTalk(): boolean;
    isUser(): boolean;
    isUserTalk(): boolean;
    isProject(): boolean;
    isProjectTalk(): boolean;
    isFile(): boolean;
    isFileTalk(): boolean;
    isImage(): boolean;
    isImageTalk(): boolean;
    isMediawiki(): boolean;
    isMediawikiTalk(): boolean;
    isTemplate(): boolean;
    isTemplateTalk(): boolean;
    isHelp(): boolean;
    isHelpTalk(): boolean;
    isCategory(): boolean;
    isCategoryTalk(): boolean;
    isATalkNamespace(): boolean;
    getNormalizedText(): string;
    getCanonicalText(): string;
    subpagesAllowed(): boolean;
    static fromText(text: string, siteInfo: SiteInfo): Namespace | undefined;
    static main(siteInfo: SiteInfo): Namespace;
}

export class Title {
    constructor(
        key: string,
        namespace: Namespace | number,
        siteInfo: SiteInfo,
        fragment?: string,
    );
    getKey(): string;
    getPrefixedDBKey(): string;
    getPrefixedText(): string;
    getFragment(): string | undefined;
    getNamespace(): Namespace;
    equals(other: Title): boolean;
    static newFromText(
        title: string,
        siteInfo: SiteInfo,
        defaultNs?: Namespace | number,
    ): Title;
}

export class TitleError extends Error {
    [key: string]: unknown;
    constructor(options: { type: string; [key: string]: unknown });
}
