import { createHash } from "node:crypto";

export const LEGACY_INDEX_HASH = "a325aa77fce6dd7a8126143dc9456140ba530043c1d6f75d4e88e9520c5419f6";
export const LEGACY_TESTS_HASH = "dd5f211e4b13e0bd3cc47772aac74ad32c7b259aee11b142c333d670137e7b1e";
export const MIGRATED_TESTS_HASH = "9dcb3c8c321b634bd1b16ff0c3c3c2341197091426e7371f1e920824040aac07";

const CONTRACTS_START = "// BEGIN GENERATED OIDC-PROVIDER CONTRACTS";
const CONTRACTS_END = "// END GENERATED OIDC-PROVIDER CONTRACTS";
const PROVIDER_MEMBERS_START = "    // BEGIN GENERATED OIDC-PROVIDER MEMBERS";
const PROVIDER_MEMBERS_END = "    // END GENERATED OIDC-PROVIDER MEMBERS";
const RELATED_CONTRACTS_START = "// BEGIN GENERATED OIDC-PROVIDER RELATED CONTRACTS";
const RELATED_CONTRACTS_END = "// END GENERATED OIDC-PROVIDER RELATED CONTRACTS";

function hash(value) {
    return createHash("sha256").update(value).digest("hex");
}

function replaceOnce(source, before, after, label) {
    const index = source.indexOf(before);
    if (index === -1 || source.indexOf(before, index + before.length) !== -1) {
        throw new TypeError(`legacy oidc-provider index has an unexpected ${label}`);
    }
    return `${source.slice(0, index)}${after}${source.slice(index + before.length)}`;
}

function replaceRange(source, start, end, replacement, label, searchFrom = 0) {
    const startIndex = source.indexOf(start, searchFrom);
    if (startIndex === -1 || source.indexOf(start, startIndex + start.length) !== -1) {
        throw new TypeError(`legacy oidc-provider index has an unexpected ${label} start`);
    }
    const endIndex = source.indexOf(end, startIndex + start.length);
    if (endIndex === -1) {
        throw new TypeError(`legacy oidc-provider index has an unexpected ${label} end`);
    }
    return `${source.slice(0, startIndex)}${replacement}${source.slice(endIndex)}`;
}

function assertHash(source, expectedHash, label) {
    const actualHash = hash(source);
    if (actualHash !== expectedHash) {
        throw new TypeError(`${label} is not the supported bootstrap baseline (sha256 ${actualHash})`);
    }
}

export function generatedRegionState(source) {
    const markers = [
        CONTRACTS_START,
        CONTRACTS_END,
        PROVIDER_MEMBERS_START,
        PROVIDER_MEMBERS_END,
        RELATED_CONTRACTS_START,
        RELATED_CONTRACTS_END,
    ];
    const counts = markers.map((marker) => source.split(marker).length - 1);
    if (counts.every((count) => count === 0)) return "legacy";
    if (counts.every((count) => count === 1)) return "generated";
    throw new TypeError("oidc-provider index has a partial or duplicated generated-region layout");
}

export function migrateLegacyIndex(source, expectedHash = LEGACY_INDEX_HASH) {
    assertHash(source, expectedHash, "oidc-provider index");
    if (generatedRegionState(source) !== "legacy") {
        throw new TypeError("oidc-provider index bootstrap requires a markerless declaration");
    }

    source = replaceOnce(
        source,
        `        deviceInfo: UnknownObject;
        [key: string]: unknown;`,
        `        deviceInfo: UnknownObject;
        rar?: AuthorizationDetail[] | undefined;
        [key: string]: unknown;`,
        "DeviceCode constructor",
    );
    source = replaceOnce(
        source,
        `    grantId: string;
    attestationJkt?: string | undefined;
    consumed: unknown;`,
        `    grantId: string;
    rar?: AuthorizationDetail[] | undefined;
    attestationJkt?: string | undefined;
    consumed: unknown;`,
        "DeviceCode properties",
    );
    source = replaceOnce(
        source,
        `declare class ClientCredentials extends BaseToken {
    constructor(properties: {
        client: Client;
        resourceServer?: ResourceServerInstance | undefined;
        scope: string;
        [key: string]: unknown;
    });
    readonly kind: "ClientCredentials";
    scope?: string | undefined;
    extra?: UnknownObject | undefined;
    aud: string | string[];
    readonly tokenType: string;
    "x5t#S256"?: string | undefined;
    jkt?: string | undefined;
    resourceServer?: ResourceServerInstance | undefined;

    isSenderConstrained(): boolean;
}`,
        `declare class ClientCredentials extends BaseToken {
    constructor(properties: {
        client: Client;
        resourceServer?: ResourceServerInstance | undefined;
        aud?: string | string[] | undefined;
        scope?: string | undefined;
        rar?: AuthorizationDetail[] | undefined;
        [key: string]: unknown;
    });
    readonly kind: "ClientCredentials";
    scope?: string | undefined;
    extra?: UnknownObject | undefined;
    aud?: string | string[] | undefined;
    readonly tokenType: string;
    "x5t#S256"?: string | undefined;
    jkt?: string | undefined;
    resourceServer?: ResourceServerInstance | undefined;
    rar?: AuthorizationDetail[] | undefined;

    setAudience(audience: string | string[]): void;
    setThumbprint(prop: "x5t", input: string | crypto.X509Certificate): void;
    setThumbprint(prop: "jkt", input: string): void;
    isSenderConstrained(): boolean;
}`,
        "ClientCredentials declaration",
    );
    source = replaceOnce(
        source,
        `declare class AccessToken extends BaseToken {
    constructor(properties: {
        client: Client;
        accountId: string;
        resourceServer?: ResourceServerInstance | undefined;
        claims?: ClaimsParameter | undefined;
        aud?: string | string[] | undefined;
        scope: string;
        sid?: string | undefined;
        sessionUid?: string | undefined;
        expiresWithSession?: boolean | undefined;
        "x5t#S256"?: string | undefined;
        jkt?: string | undefined;
        grantId: string;
        gty: string;
        rar?: AuthorizationDetail[] | undefined;
        [key: string]: unknown;
    });
    readonly kind: "AccessToken";
    accountId: string;
    resourceServer?: ResourceServerInstance | undefined;
    aud: string | string[];
    claims?: ClaimsParameter | undefined;
    extra?: UnknownObject | undefined;
    grantId: string;
    scope?: string | undefined;
    gty: string;
    rar?: AuthorizationDetail[] | undefined;
    sid?: string | undefined;
    sessionUid?: string | undefined;
    expiresWithSession?: boolean | undefined;
    readonly tokenType: string;
    "x5t#S256"?: string | undefined;
    jkt?: string | undefined;

    isSenderConstrained(): boolean;

    static revokeByGrantId(grantId: string): Promise<void>;
}`,
        `declare class AccessToken extends BaseToken {
    constructor(properties: {
        client: Client;
        accountId: string;
        resourceServer?: ResourceServerInstance | undefined;
        claims?: ClaimsParameter | undefined;
        aud?: string | string[] | undefined;
        scope?: string | undefined;
        sid?: string | undefined;
        sessionUid?: string | undefined;
        expiresWithSession?: boolean | undefined;
        "x5t#S256"?: string | undefined;
        jkt?: string | undefined;
        grantId: string;
        gty: string;
        rar?: AuthorizationDetail[] | undefined;
        [key: string]: unknown;
    });
    readonly kind: "AccessToken";
    accountId: string;
    resourceServer?: ResourceServerInstance | undefined;
    aud?: string | string[] | undefined;
    claims?: ClaimsParameter | undefined;
    extra?: UnknownObject | undefined;
    grantId: string;
    scope?: string | undefined;
    gty: string;
    rar?: AuthorizationDetail[] | undefined;
    sid?: string | undefined;
    sessionUid?: string | undefined;
    expiresWithSession?: boolean | undefined;
    readonly tokenType: string;
    "x5t#S256"?: string | undefined;
    jkt?: string | undefined;

    setAudience(audience: string | string[]): void;
    setThumbprint(prop: "x5t", input: string | crypto.X509Certificate): void;
    setThumbprint(prop: "jkt", input: string): void;
    isSenderConstrained(): boolean;

    static revokeByGrantId(grantId: string): Promise<void>;
}`,
        "AccessToken declaration",
    );

    source = replaceRange(
        source,
        "export type FindAccount = (",
        "export interface UnknownObject {",
        "\n",
        "initial provider-owned contracts",
    );
    source = replaceRange(
        source,
        "export interface AuthorizationDetail extends UnknownObject {",
        "export interface AllClientMetadata {",
        "",
        "metadata provider-owned contracts",
    );
    source = replaceRange(
        source,
        "export interface ResourceServer {",
        "declare class OIDCContext {",
        "",
        "resource-server provider-owned contracts",
    );
    source = replaceRange(
        source,
        "export type TLSClientAuthProperty =",
        "export interface HttpOptions {",
        `export interface TokenEndpointGrantParameters extends UnknownObject {
    grant_type: string;
    scope?: string | undefined;
    resource?: string | string[] | undefined;
    authorization_details?: string | undefined;
}

/** Context passed to a handler registered with \`Provider.registerGrantType()\`. */
export type TokenEndpointGrantContext<Params extends object = UnknownObject> = KoaContextWithOIDC & {
    oidc: OIDCContext & {
        readonly provider: Provider;
        readonly client: Client;
        readonly params: TokenEndpointGrantParameters & Params;
        readonly resourceServers: { [identifier: string]: ResourceServerInstance };
    };
};

/* eslint-disable @typescript-eslint/no-invalid-void-type */
${CONTRACTS_START}
${CONTRACTS_END}
/* eslint-enable @typescript-eslint/no-invalid-void-type */

`,
        "configuration provider-owned contracts",
    );
    source = replaceRange(
        source,
        "interface ProviderAdditionalEventMap {",
        "export default class Provider extends Koa {",
        "",
        "provider event contracts",
    );

    const providerIndex = source.indexOf("export default class Provider extends Koa {");
    if (providerIndex === -1) {
        throw new TypeError("legacy oidc-provider index has no Provider declaration");
    }
    source = replaceRange(
        source,
        "    urlFor(name: string, options?: UnknownObject): string;",
        "    readonly Grant: typeof Grant;",
        `${PROVIDER_MEMBERS_START}
${PROVIDER_MEMBERS_END}

`,
        "Provider members",
        providerIndex,
    );
    source = replaceRange(
        source,
        "declare class Checks extends Array<interactionPolicy.Check> {",
        "export { Provider };",
        `${RELATED_CONTRACTS_START}
${RELATED_CONTRACTS_END}

`,
        "related provider-owned contracts",
    );

    if (generatedRegionState(source) !== "generated") {
        throw new TypeError("legacy oidc-provider index migration did not create every generated region");
    }
    return source;
}

export function applyUnifiedPatch(source, patch, label = "file") {
    const sourceLines = source.split("\n");
    const patchLines = patch.replace(/\n$/, "").split("\n");
    const output = [];
    let sourceIndex = 0;
    let patchIndex = patchLines.findIndex((line) => line.startsWith("@@ "));
    if (patchIndex === -1) throw new TypeError(`${label} bootstrap patch has no hunks`);

    while (patchIndex < patchLines.length && patchLines[patchIndex].startsWith("@@ ")) {
        const header = /^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/.exec(patchLines[patchIndex]);
        if (!header) throw new TypeError(`${label} bootstrap patch has an invalid hunk header`);
        const oldCount = Number(header[2] ?? 1);
        const oldStart = Number(header[1]) - (oldCount === 0 ? 0 : 1);
        const newCount = Number(header[4] ?? 1);
        if (oldStart < sourceIndex) throw new TypeError(`${label} bootstrap patch has overlapping hunks`);
        output.push(...sourceLines.slice(sourceIndex, oldStart));
        sourceIndex = oldStart;
        patchIndex += 1;
        let removed = 0;
        let added = 0;

        while (patchIndex < patchLines.length && !patchLines[patchIndex].startsWith("@@ ")) {
            const line = patchLines[patchIndex];
            if (line.startsWith("\\ No newline at end of file")) {
                patchIndex += 1;
                continue;
            }
            const operation = line[0];
            const contents = line.slice(1);
            if (operation === " " || operation === "-") {
                if (sourceLines[sourceIndex] !== contents) {
                    throw new TypeError(`${label} bootstrap patch does not match line ${sourceIndex + 1}`);
                }
                sourceIndex += 1;
                removed += 1;
            }
            if (operation === " " || operation === "+") {
                output.push(contents);
                added += 1;
            }
            if (operation !== " " && operation !== "-" && operation !== "+") {
                throw new TypeError(`${label} bootstrap patch has an invalid hunk line`);
            }
            patchIndex += 1;
        }
        if (removed !== oldCount || added !== newCount) {
            throw new TypeError(`${label} bootstrap patch hunk counts do not match its header`);
        }
    }

    output.push(...sourceLines.slice(sourceIndex));
    return output.join("\n");
}

export function migrateLegacyTests(source, patch, expectedHash = LEGACY_TESTS_HASH) {
    assertHash(source, expectedHash, "oidc-provider tests");
    const migrated = applyUnifiedPatch(source, patch, "oidc-provider tests");
    assertHash(migrated, MIGRATED_TESTS_HASH, "migrated oidc-provider tests");
    return migrated;
}
