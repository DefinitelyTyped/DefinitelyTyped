export {};

export type CycloneDXBom = CycloneDXBomV1_2 | CycloneDXBomV1_3 | CycloneDXBomV1_4;

interface CycloneDXBase<C> {
    bomFormat: "CycloneDX";
    serialNumber?: string;
    version: Integer;

    externalReferences?: ExternalReference[];
    dependencies?: Array<{
        ref: string;
        dependsOn?: string[];
    }>;
    components?: C[];
}

export type CycloneDXBomV1_2 = CycloneDXBase<ComponentV1_2> & {
    specVersion: "1.2";
    metadata?: MetadataBase<ToolV1_2, ComponentV1_2>;
    services?: ServiceV1_2[];
};

export type CycloneDXBomV1_3 = CycloneDXBase<ComponentV1_3> & {
    specVersion: "1.3";
    metadata?: MetadataBase<ToolV1_3, ComponentV1_3> & {
        licenses?: LicenseOrExpression[];
        properties?: Properties;
    };
    services?: ServiceV1_3[];
    compositions?: CompositionBase[];
};

export type CycloneDXBomV1_4 = CycloneDXBase<ComponentV1_4> & {
    specVersion: "1.4";
    metadata?: MetadataBase<ToolV1_3, ComponentV1_4> & {
        licenses?: LicenseOrExpression[];
        properties?: Properties;
    };
    services?: ServiceV1_4[];
    compositions?: Array<
        CompositionBase & {
            signature?: Signature;
        }
    >;
    vulnerabilities?: Vulnerability[];
    signature?: Signature;
};

export interface ToolV1_2 {
    vendor?: string;
    name?: string;
    version?: string;
    hashes?: Hash[];
}

export type ToolV1_3 = ToolV1_2 & {
    externalReferences?: ExternalReference[];
};

interface MetadataBase<T, C> {
    timestamp?: Timestamp;
    authors?: ContactPerson[];
    manufacture?: Contact;
    supplier?: Contact;
    tools?: T[];
    component?: C;
}

interface CompositionBase {
    aggregate:
        | "complete"
        | "incomplete"
        | "incomplete_first_party_only"
        | "incomplete_third_party_only"
        | "unknown"
        | "not_specified";
    assemblies?: string[];
    dependencies?: string[];
}

export interface Pedigree<C> {
    ancestors?: C[];
    descendants?: C[];
    variants?: C[];
    commits?: Commit[];
    patches?: Patch[];
    notes?: string;
}

interface ComponentBase {
    type: ComponentType;
    "mime-type"?: string;
    "bom-ref"?: string;
    supplier?: Contact;
    licenses?: LicenseOrExpression[];
    author?: string;
    publisher?: string;
    group?: string;
    name: string;
    description?: string;
    scope?: Scope;
    cpe?: string;
    modified?: boolean;
    hashes?: Hash[];
    copyright?: string;
    purl?: string;
    swid?: SWID;
    externalReferences?: ExternalReference[];
}

export type ComponentV1_2 = ComponentBase & {
    version: string;
    pedigree?: Pedigree<ComponentV1_2>;
    components?: ComponentV1_2[];
};

export type ComponentV1_3 = ComponentBase & {
    version: string;
    pedigree?: Pedigree<ComponentV1_3>;
    components?: ComponentV1_3[];
    evidence?: Evidence;
    properties?: Properties;
};

export type ComponentV1_4 = ComponentBase & {
    version?: string;
    pedigree?: Pedigree<ComponentV1_4>;
    components?: ComponentV1_4[];
    evidence?: Evidence;
    releaseNotes?: ReleaseNotes;
    properties?: Properties;
    signature?: Signature;
};

export interface Evidence {
    licenses?: LicenseOrExpression[];
    copyright: Array<{ text: string }>;
}

export interface SWID {
    tagId: string;
    name: string;
    version?: string;
    tagVersion?: Integer;
    patch?: boolean;
    text?: MimeText;
    url?: string;
}

export interface Patch {
    type: "unofficial" | "monkey" | "backport" | "cherry-pick";
    diff?: {
        text?: MimeText;
        url?: URL;
    };
    resolves?: Array<{
        type: "defect" | "enhancement" | "security";
        id?: string;
        name?: string;
        description?: string;
        source?: Source;
        references: string[];
    }>;
}

export interface Commit {
    uid?: string;
    url?: URL;
    author?: Committer;
    committer?: Committer;
    message?: string;
}

interface ServiceBase {
    "bom-ref"?: BomRef;
    provider?: Contact;
    group?: string;
    name: string;
    version?: string;
    description?: string;
    endpoints?: URL[];
    authenticated?: boolean;
    "x-trust-boundary"?: boolean;
    data?: Array<{
        flow: "inbound" | "outbound" | "bi-directional" | "unknown";
        classification: string;
    }>;
    licenses?: LicenseOrExpression[];
    externalReferences?: ExternalReference[];
}

export type ServiceV1_2 = ServiceBase & {
    services?: ServiceV1_2[];
};

export type ServiceV1_3 = ServiceBase & {
    services?: ServiceV1_3[];
    properties?: Properties;
};

export type ServiceV1_4 = ServiceBase & {
    services?: ServiceV1_4[];
    releaseNotes?: ReleaseNotes;
    signature?: Signature;
    properties?: Properties;
};

export interface Committer {
    timestamp?: Timestamp;
    name?: string;
    email?: string;
}

export type Signature =
    | {
        signers?: SingleSignature[];
    }
    | {
        chain?: SingleSignature[];
    }
    | SingleSignature;

export interface SingleSignature {
    algorithm: SigAlgorithm;
    keyId?: string;
    publicKey?: PublicKey;
    certificatePath?: string[];
    excludes?: string[];
    value: string;
}

export type PublicKey =
    | {
        kty: "EC";
        crv: "P-256" | "P-384" | "P-521";
        x: string;
        y: string;
    }
    | {
        kty: "OKP";
        crv: "Ed25519" | "Ed448";
        x: string;
    }
    | {
        kty: "RSA";
        n: string;
        e: string;
    };

export interface ReleaseNotes {
    type: "major" | "minor" | "patch" | "pre-release" | "internal";
    title?: string;
    featuredImage?: URL;
    socialImage?: URL;
    description?: string;
    timestamp?: Timestamp;
    aliases?: string[];
    tags?: string[];
    resolves?: Array<{
        type: "defect" | "enhancement" | "security";
        id?: string;
        name?: string;
        description?: string;
        source?: Source;
        references?: URL[];
    }>;
    notes?: Array<{
        locale?: string;
        text: MimeText;
    }>;
    properties?: Properties;
}

export interface Vulnerability {
    "bom-ref"?: BomRef;
    id?: string;
    source?: Source;
    references?: Array<{
        id: string;
        source: Source;
    }>;
    ratings?: Array<{
        source?: Source;
        score?: number;
        severity?: Severity;
        method?: RatingMethod;
        vector?: string;
        justification?: string;
    }>;
    cwes?: Integer[];
    description?: string;
    detail?: string;
    recommendation?: string;
    advisories?: Array<{
        title?: string;
        url: URL;
    }>;
    created?: Timestamp;
    published?: Timestamp;
    updated?: Timestamp;
    credits?: {
        organizations?: Contact[];
        individuals?: ContactPerson[];
    };
    tools?: Tool[];
    analysis?: {
        state?: "resolved" | "resolved_with_pedigree" | "exploitable" | "in_triage" | "false_positive" | "not_affected";
        justification?: Justification;
        response?: Array<"can_not_fix" | "will_not_fix" | "update" | "rollback" | "workaround_available">;
        detail?: string;
    };
    affects?: Array<{
        ref: BomRef;
        versions?: Array<
            VersionRange & {
                status?: "affected" | "unaffected" | "unknown";
            }
        >;
    }>;
    properties?: Properties;
}

export type Justification =
    | "code_not_present"
    | "code_not_reachable"
    | "requires_configuration"
    | "requires_dependency"
    | "requires_environment"
    | "protected_by_compiler"
    | "protected_at_runtime"
    | "protected_at_perimeter"
    | "protected_by_mitigating_control";

export interface Contact {
    name?: string;
    url?: URL[];
    contact?: ContactPerson[];
}

export type VersionRange =
    | {
        version: string;
        range?: string;
    }
    | {
        version?: string;
        range: string;
    };

export interface Source {
    url?: URL;
    name?: string;
}

export type SigAlgorithm =
    | "RS256"
    | "RS384"
    | "RS512"
    | "PS256"
    | "PS384"
    | "PS512"
    | "ES256"
    | "ES384"
    | "ES512"
    | "Ed25519"
    | "Ed448"
    | "HS256"
    | "HS384"
    | "HS512"
    | string;

export interface Tool {
    vendor?: string;
    name?: string;
    version?: string;
    hashes?: Hash[];
    externalReferences?: ExternalReference[];
}

export type Severity = "critical" | "high" | "medium" | "low" | "info" | "none" | "unknown";
export type RatingMethod = "CVSSv2" | "CVSSv3" | "CVSSv31" | "OWASP" | "other";

export type HashAlgoritm =
    | "MD5"
    | "SHA-1"
    | "SHA-256"
    | "SHA-384"
    | "SHA-512"
    | "SHA3-256"
    | "SHA3-384"
    | "SHA3-512"
    | "BLAKE2b-256"
    | "BLAKE2b-384"
    | "BLAKE2b-512"
    | "BLAKE3";

export interface Hash {
    alg: HashAlgoritm;
    content: string;
}

export type ExternalReferenceType =
    | "vcs"
    | "issue-tracker"
    | "website"
    | "advisories"
    | "bom"
    | "mailing-list"
    | "social"
    | "chat"
    | "documentation"
    | "support"
    | "distribution"
    | "license"
    | "build-meta"
    | "build-system"
    | "release-notes"
    | "other";

export interface ExternalReference {
    url: URL;
    comment?: string;
    type: ExternalReferenceType;
    hashes?: Hash[];
}

export type ComponentType =
    | "application"
    | "framework"
    | "library"
    | "container"
    | "operating-system"
    | "device"
    | "firmware"
    | "file";

export interface ContactPerson {
    name?: string;
    email?: string;
    phone?: string;
}

export type Scope = "required" | "optional" | "excluded";

export type License =
    & (
        | {
            id: LicenseId;
            name?: string;
        }
        | {
            id?: LicenseId;
            name: string;
        }
    )
    & {
        text?: MimeText;
        url?: URL;
    };

export type LicenseOrExpression =
    | {
        license: License;
        expression?: string;
    }
    | {
        license?: License;
        expression: string;
    };

export type URL = string;

export type Timestamp = string;

export type BomRef = string;

export type Integer = number;

export interface MimeText {
    contentType?: string;
    encoding?: "base64";
    content: string;
}

export type Properties = Array<{
    name?: string;
    value?: string;
}>;

export type LicenseId =
    | "Interbase-1.0"
    | "Mup"
    | "GPL-2.0-with-autoconf-exception"
    | "OLDAP-2.1"
    | "CC-BY-NC-SA-3.0-IGO"
    | "LGPL-2.0+"
    | "xpp"
    | "OFL-1.1"
    | "CNRI-Python"
    | "Linux-man-pages-copyleft"
    | "OLDAP-2.2"
    | "OSL-1.1"
    | "EPL-2.0"
    | "AFL-1.1"
    | "AGPL-1.0-or-later"
    | "GLWTPL"
    | "MIT-Modern-Variant"
    | "BSD-1-Clause"
    | "SGI-B-1.0"
    | "OML"
    | "psfrag"
    | "Artistic-1.0"
    | "CC-PDDC"
    | "eGenix"
    | "EUPL-1.1"
    | "Sendmail"
    | "PSF-2.0"
    | "OGL-UK-1.0"
    | "MTLL"
    | "NAIST-2003"
    | "ANTLR-PD-fallback"
    | "PostgreSQL"
    | "OSL-1.0"
    | "NGPL"
    | "CC-BY-NC-ND-4.0"
    | "CPOL-1.02"
    | "FSFULLR"
    | "GFDL-1.2-no-invariants-only"
    | "Net-SNMP"
    | "ADSL"
    | "Sendmail-8.23"
    | "CNRI-Jython"
    | "RPL-1.5"
    | "BSD-2-Clause-Patent"
    | "OFL-1.1-no-RFN"
    | "APSL-1.2"
    | "OLDAP-2.4"
    | "MPL-2.0-no-copyleft-exception"
    | "ISC"
    | "CC-BY-SA-2.5"
    | "Sleepycat"
    | "CUA-OPL-1.0"
    | "Frameworx-1.0"
    | "CPAL-1.0"
    | "NLOD-2.0"
    | "CC-BY-NC-2.0"
    | "GFDL-1.1-no-invariants-or-later"
    | "CC-BY-2.5"
    | "Newsletr"
    | "Parity-7.0.0"
    | "Leptonica"
    | "MIT-CMU"
    | "APAFML"
    | "CC-BY-NC-2.5"
    | "CAL-1.0-Combined-Work-Exception"
    | "BSD-4-Clause-Shortened"
    | "NPL-1.1"
    | "Qhull"
    | "CECILL-C"
    | "GPL-1.0-only"
    | "CC-BY-NC-ND-3.0-DE"
    | "CC-BY-NC-SA-3.0"
    | "CC-BY-NC-SA-1.0"
    | "MIT-open-group"
    | "Multics"
    | "SWL"
    | "GPL-1.0+"
    | "GPL-3.0-or-later"
    | "DOC"
    | "PHP-3.0"
    | "SISSL-1.2"
    | "CDL-1.0"
    | "LPL-1.0"
    | "RHeCos-1.1"
    | "LAL-1.3"
    | "CC-BY-SA-3.0-DE"
    | "CDLA-Permissive-1.0"
    | "gnuplot"
    | "App-s2p"
    | "iMatix"
    | "MS-PL"
    | "eCos-2.0"
    | "BSD-3-Clause"
    | "CC-BY-NC-ND-3.0-IGO"
    | "ICU"
    | "AGPL-3.0-or-later"
    | "CC-BY-SA-2.1-JP"
    | "CC-BY-NC-SA-4.0"
    | "Unlicense"
    | "CC-BY-NC-3.0-DE"
    | "OLDAP-1.4"
    | "CERN-OHL-W-2.0"
    | "SugarCRM-1.1.3"
    | "IPA"
    | "AFL-2.0"
    | "Unicode-DFS-2016"
    | "CC-BY-NC-ND-3.0"
    | "CERN-OHL-P-2.0"
    | "CC-BY-NC-3.0"
    | "COIL-1.0"
    | "CAL-1.0"
    | "LiLiQ-P-1.1"
    | "OFL-1.1-RFN"
    | "LPL-1.02"
    | "OLDAP-1.3"
    | "OGDL-Taiwan-1.0"
    | "CC-BY-NC-SA-2.0"
    | "Python-2.0"
    | "NTP-0"
    | "FSFAP"
    | "ErlPL-1.1"
    | "Barr"
    | "CC-BY-3.0-US"
    | "BSD-3-Clause-No-Nuclear-License-2014"
    | "NLPL"
    | "BSD-3-Clause-Clear"
    | "SGI-B-1.1"
    | "PDDL-1.0"
    | "CDDL-1.0"
    | "LGPL-2.1-or-later"
    | "BlueOak-1.0.0"
    | "CC-BY-NC-SA-2.0-FR"
    | "FDK-AAC"
    | "StandardML-NJ"
    | "AGPL-1.0-only"
    | "CECILL-1.0"
    | "AAL"
    | "GPL-2.0-with-font-exception"
    | "Info-ZIP"
    | "SSH-OpenSSH"
    | "SSH-short"
    | "GPL-2.0-or-later"
    | "ClArtistic"
    | "SNIA"
    | "GFDL-1.1-invariants-only"
    | "BSD-3-Clause-No-Military-License"
    | "GFDL-1.1"
    | "MPL-1.1"
    | "OLDAP-1.1"
    | "JSON"
    | "GFDL-1.3-no-invariants-only"
    | "OCLC-2.0"
    | "OLDAP-2.0.1"
    | "FreeBSD-DOC"
    | "GPL-1.0-or-later"
    | "YPL-1.1"
    | "CPL-1.0"
    | "Apache-1.0"
    | "OFL-1.0"
    | "CC-BY-4.0"
    | "DSDP"
    | "IBM-pibs"
    | "MIT-0"
    | "DRL-1.0"
    | "Zlib"
    | "APL-1.0"
    | "Watcom-1.0"
    | "GPL-2.0-with-GCC-exception"
    | "EUPL-1.2"
    | "FSFUL"
    | "NASA-1.3"
    | "BSD-2-Clause"
    | "XFree86-1.1"
    | "Eurosym"
    | "OLDAP-2.8"
    | "dvipdfm"
    | "NIST-PD"
    | "Apache-1.1"
    | "Parity-6.0.0"
    | "CC-BY-2.0"
    | "LGPL-3.0+"
    | "BSD-2-Clause-Views"
    | "GPL-2.0-with-classpath-exception"
    | "BSD-3-Clause-No-Nuclear-Warranty"
    | "X11"
    | "CDLA-Permissive-2.0"
    | "HaskellReport"
    | "Artistic-1.0-cl8"
    | "APSL-2.0"
    | "GPL-3.0+"
    | "SHL-0.5"
    | "CNRI-Python-GPL-Compatible"
    | "Condor-1.1"
    | "OLDAP-2.3"
    | "GPL-2.0-only"
    | "BUSL-1.1"
    | "LiLiQ-R-1.1"
    | "AMPAS"
    | "copyleft-next-0.3.1"
    | "GFDL-1.3-invariants-or-later"
    | "OLDAP-2.7"
    | "OSL-2.0"
    | "Unicode-DFS-2015"
    | "CATOSL-1.1"
    | "RSCPL"
    | "libpng-2.0"
    | "LPPL-1.1"
    | "CDLA-Sharing-1.0"
    | "Glulxe"
    | "GFDL-1.3-no-invariants-or-later"
    | "OLDAP-1.2"
    | "CDDL-1.1"
    | "CERN-OHL-1.1"
    | "BSD-Source-Code"
    | "IJG"
    | "Zimbra-1.4"
    | "0BSD"
    | "CC-BY-1.0"
    | "wxWindows"
    | "ZPL-2.1"
    | "NTP"
    | "Artistic-1.0-Perl"
    | "CC-BY-ND-2.0"
    | "CC-BY-ND-4.0"
    | "Adobe-2006"
    | "EPL-1.0"
    | "diffmark"
    | "xinetd"
    | "Plexus"
    | "JPNIC"
    | "Adobe-Glyph"
    | "Cube"
    | "TCP-wrappers"
    | "CC-BY-SA-1.0"
    | "BSD-2-Clause-FreeBSD"
    | "OGL-Canada-2.0"
    | "ANTLR-PD"
    | "LGPL-2.1+"
    | "OSL-2.1"
    | "psutils"
    | "SCEA"
    | "MirOS"
    | "Hippocratic-2.1"
    | "GFDL-1.2-invariants-only"
    | "LGPL-2.1-only"
    | "Entessa"
    | "MS-RL"
    | "libselinux-1.0"
    | "LGPL-2.0"
    | "OLDAP-2.5"
    | "Imlib2"
    | "Libpng"
    | "SchemeReport"
    | "MPL-1.0"
    | "SAX-PD"
    | "NLOD-1.0"
    | "SimPL-2.0"
    | "TU-Berlin-1.0"
    | "GFDL-1.1-no-invariants-only"
    | "CC-BY-ND-3.0-DE"
    | "MakeIndex"
    | "EPICS"
    | "GFDL-1.3-invariants-only"
    | "XSkat"
    | "bzip2-1.0.5"
    | "Community-Spec-1.0"
    | "GL2PS"
    | "HPND"
    | "bzip2-1.0.6"
    | "CC-BY-NC-1.0"
    | "Fair"
    | "CECILL-B"
    | "Glide"
    | "CC-BY-SA-4.0"
    | "CC0-1.0"
    | "MIT-enna"
    | "Wsuipa"
    | "RSA-MD"
    | "VOSTROM"
    | "O-UDA-1.0"
    | "CERN-OHL-S-2.0"
    | "X11-distribute-modifications-variant"
    | "copyleft-next-0.3.0"
    | "Zimbra-1.3"
    | "NIST-PD-fallback"
    | "Nokia"
    | "AFL-2.1"
    | "ZPL-2.0"
    | "ODbL-1.0"
    | "zlib-acknowledgement"
    | "PHP-3.01"
    | "Afmparse"
    | "HPND-sell-variant"
    | "PolyForm-Small-Business-1.0.0"
    | "IPL-1.0"
    | "CECILL-1.1"
    | "MIT-feh"
    | "OFL-1.0-RFN"
    | "TMate"
    | "BSD-3-Clause-No-Nuclear-License"
    | "W3C-19980720"
    | "SPL-1.0"
    | "NetCDF"
    | "Aladdin"
    | "AMDPLPA"
    | "CrystalStacker"
    | "Intel-ACPI"
    | "CERN-OHL-1.2"
    | "CC-BY-NC-SA-3.0-DE"
    | "MIT"
    | "Zed"
    | "OLDAP-2.0"
    | "MulanPSL-1.0"
    | "EFL-2.0"
    | "Latex2e"
    | "Spencer-94"
    | "OPL-1.0"
    | "CC-BY-NC-4.0"
    | "LGPL-3.0-or-later"
    | "UPL-1.0"
    | "NCSA"
    | "SGI-B-2.0"
    | "GPL-3.0-with-GCC-exception"
    | "Zend-2.0"
    | "ImageMagick"
    | "OLDAP-2.6"
    | "Unicode-TOU"
    | "GPL-3.0-only"
    | "Artistic-2.0"
    | "blessing"
    | "etalab-2.0"
    | "GFDL-1.2-only"
    | "LPPL-1.0"
    | "Rdisc"
    | "BSD-3-Clause-Modification"
    | "Xerox"
    | "MPL-2.0"
    | "BitTorrent-1.1"
    | "CC-BY-NC-ND-2.0"
    | "SISSL"
    | "libtiff"
    | "CC-BY-NC-SA-2.0-UK"
    | "D-FSL-1.0"
    | "LPPL-1.2"
    | "TAPR-OHL-1.0"
    | "EUPL-1.0"
    | "SHL-0.51"
    | "FTL"
    | "W3C-20150513"
    | "OSET-PL-2.1"
    | "EUDatagrid"
    | "UCL-1.0"
    | "Borceux"
    | "Elastic-2.0"
    | "BSD-2-Clause-NetBSD"
    | "BSD-3-Clause-Open-MPI"
    | "OSL-3.0"
    | "curl"
    | "Spencer-86"
    | "BSL-1.0"
    | "SMLNJ"
    | "TOSL"
    | "NOSL"
    | "AFL-1.2"
    | "MulanPSL-2.0"
    | "Motosoto"
    | "CC-BY-NC-SA-2.5"
    | "JasPer-2.0"
    | "BSD-4-Clause-UC"
    | "Bahyph"
    | "VSL-1.0"
    | "W3C"
    | "ODC-By-1.0"
    | "BitTorrent-1.0"
    | "OGL-UK-2.0"
    | "LGPL-3.0-only"
    | "Xnet"
    | "Ruby"
    | "GFDL-1.3"
    | "ZPL-1.1"
    | "OCCT-PL"
    | "LPPL-1.3c"
    | "Apache-2.0"
    | "GD"
    | "CC-BY-3.0-NL"
    | "LPPL-1.3a"
    | "CC-BY-2.5-AU"
    | "GFDL-1.1-only"
    | "GFDL-1.1-or-later"
    | "OGL-UK-3.0"
    | "YPL-1.0"
    | "RPL-1.1"
    | "LGPL-2.0-or-later"
    | "OPUBL-1.0"
    | "Noweb"
    | "AFL-3.0"
    | "Nunit"
    | "CC-BY-3.0"
    | "Beerware"
    | "Caldera"
    | "GPL-1.0"
    | "GPL-2.0+"
    | "NCGL-UK-2.0"
    | "CC-BY-ND-2.5"
    | "GPL-2.0"
    | "Intel"
    | "Vim"
    | "CC-BY-SA-2.0"
    | "MITNFA"
    | "APSL-1.1"
    | "GFDL-1.2-or-later"
    | "BSD-3-Clause-Attribution"
    | "OFL-1.0-no-RFN"
    | "Naumen"
    | "CC-BY-NC-ND-2.5"
    | "C-UDA-1.0"
    | "LGPLLR"
    | "mpich2"
    | "APSL-1.0"
    | "Linux-OpenIB"
    | "MIT-advertising"
    | "GFDL-1.2"
    | "OGTSL"
    | "Dotseqn"
    | "DL-DE-BY-2.0"
    | "Saxpath"
    | "AGPL-3.0"
    | "Abstyles"
    | "CC-BY-SA-3.0"
    | "Giftware"
    | "FreeImage"
    | "CECILL-2.1"
    | "RPSL-1.0"
    | "GFDL-1.3-or-later"
    | "GFDL-1.1-invariants-or-later"
    | "ECL-2.0"
    | "LiLiQ-Rplus-1.1"
    | "GPL-3.0-with-autoconf-exception"
    | "Jam"
    | "GFDL-1.2-no-invariants-or-later"
    | "CECILL-2.0"
    | "PolyForm-Noncommercial-1.0.0"
    | "OGC-1.0"
    | "CC-BY-ND-3.0"
    | "QPL-1.0"
    | "LAL-1.2"
    | "CC-BY-3.0-DE"
    | "OpenSSL"
    | "Spencer-99"
    | "CC-BY-SA-3.0-AT"
    | "BSD-Protection"
    | "OLDAP-2.2.2"
    | "NRL"
    | "TORQUE-1.1"
    | "HTMLTIDY"
    | "SSPL-1.0"
    | "NPL-1.0"
    | "LGPL-2.0-only"
    | "AGPL-3.0-only"
    | "GFDL-1.2-invariants-or-later"
    | "GPL-2.0-with-bison-exception"
    | "CC-BY-NC-ND-1.0"
    | "ECL-1.0"
    | "WTFPL"
    | "CC-BY-SA-2.0-UK"
    | "GPL-3.0"
    | "OLDAP-2.2.1"
    | "SMPPL"
    | "CC-BY-3.0-AT"
    | "EFL-1.0"
    | "NBPL-1.0"
    | "BSD-3-Clause-LBNL"
    | "AGPL-1.0"
    | "Crossword"
    | "TCL"
    | "CC-BY-ND-1.0"
    | "AML"
    | "TU-Berlin-2.0"
    | "GFDL-1.3-only"
    | "NPOSL-3.0"
    | "BSD-4-Clause"
    | "gSOAP-1.3b"
    | "LGPL-2.1"
    | "LGPL-3.0"
    | "freertos-exception-2.0"
    | "Swift-exception"
    | "Qt-LGPL-exception-1.1"
    | "gnu-javamail-exception"
    | "CLISP-exception-2.0"
    | "eCos-exception-2.0"
    | "GPL-CC-1.0"
    | "DigiRule-FOSS-exception"
    | "Font-exception-2.0"
    | "Qt-GPL-exception-1.0"
    | "PS-or-PDF-font-exception-20170817"
    | "GPL-3.0-linking-source-exception"
    | "Linux-syscall-note"
    | "GCC-exception-2.0"
    | "LZMA-exception"
    | "Autoconf-exception-3.0"
    | "u-boot-exception-2.0"
    | "LLVM-exception"
    | "OCaml-LGPL-linking-exception"
    | "Autoconf-exception-2.0"
    | "Bootloader-exception"
    | "LGPL-3.0-linking-exception"
    | "openvpn-openssl-exception"
    | "FLTK-exception"
    | "Bison-exception-2.2"
    | "OCCT-exception-1.0"
    | "GCC-exception-3.1"
    | "OpenJDK-assembly-exception-1.0"
    | "WxWindows-exception-3.1"
    | "Fawkes-Runtime-exception"
    | "Nokia-Qt-exception-1.1"
    | "Qwt-exception-1.0"
    | "Universal-FOSS-exception-1.0"
    | "Classpath-exception-2.0"
    | "SHL-2.0"
    | "GPL-3.0-linking-exception"
    | "SHL-2.1"
    | "Libtool-exception"
    | "mif-exception"
    | "389-exception"
    | "i2p-gpl-java-exception";
