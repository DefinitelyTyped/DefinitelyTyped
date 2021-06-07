// Type definitions for indy-sdk 1.15
// Project: https://github.com/hyperledger/indy-sdk/tree/master/wrappers/nodejs
// Definitions by: Timo Glastra <https://github.com/TimoGlastra>
//                 Jakub Kočí <https://github.com/jakubkoci>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export function createWallet(config: WalletConfig, credentials: WalletCredentials): Promise<void>;
export function openWallet(config: WalletConfig, credentials: OpenWalletCredentials): Promise<WalletHandle>;
export function closeWallet(wh: WalletHandle): Promise<void>;
export function deleteWallet(config: WalletConfig, credentials: WalletCredentials): Promise<void>;
export function createAndStoreMyDid(wh: WalletHandle, did: DidConfig): Promise<[Did, Verkey]>;
export function keyForLocalDid(wh: WalletHandle, did: Did): Promise<Verkey>;
export function cryptoAnonCrypt(recipientVk: Verkey, messageRaw: Buffer): Promise<Buffer>;
export function cryptoSign(wh: WalletHandle, signerVk: Verkey, messageRaw: Buffer): Promise<Buffer>;
export function cryptoVerify(signerVk: Verkey, messageRaw: Buffer, signatureRaw: Buffer): Promise<boolean>;
export function createKey(wh: WalletHandle, key: KeyConfig): Promise<Verkey>;
export function packMessage(
    wh: WalletHandle,
    message: Buffer,
    receiverKeys: Verkey[],
    senderVk: Verkey | null,
): Promise<Buffer>;
export function unpackMessage(wh: WalletHandle, jwe: Buffer): Promise<Buffer>;
export function addWalletRecord(
    wh: WalletHandle,
    type: string,
    id: string,
    value: string,
    tags: Record<string, string>,
): Promise<void>;
export function updateWalletRecordValue(wh: WalletHandle, type: string, id: string, value: string): Promise<void>;
export function updateWalletRecordTags(
    wh: WalletHandle,
    type: string,
    id: string,
    tags: Record<string, string>,
): Promise<void>;
export function addWalletRecordTags(
    wh: WalletHandle,
    type: string,
    id: string,
    tags: Record<string, string>,
): Promise<void>;
export function deleteWalletRecord(wh: WalletHandle, type: string, id: string): Promise<void>;
export function getWalletRecord(
    wh: WalletHandle,
    type: string,
    id: string,
    options: WalletRecordOptions,
): Promise<WalletRecord>;
export function openWalletSearch(
    wh: WalletHandle,
    type: string,
    query: WalletQuery,
    options: WalletSearchOptions,
): Promise<SearchHandle>;
export function fetchWalletSearchNextRecords(
    wh: WalletHandle,
    searchHandle: SearchHandle,
    count: number,
): Promise<WalletRecordSearch>;
export function closeWalletSearch(sh: SearchHandle): Promise<void>;
export function createPoolLedgerConfig(configName: string, config?: PoolConfig): Promise<void>;
export function openPoolLedger(configName: string, config?: RuntimePoolConfig): Promise<PoolHandle>;
export function setProtocolVersion(version: number): Promise<void>;
export function buildGetNymRequest(submitterDid: Did | null, targetDid: Did): Promise<LedgerRequest>;
export function parseGetNymResponse(response: LedgerResponse): Promise<GetNymResponse>;
export function buildSchemaRequest(submitterDid: Did, schema: Schema): Promise<LedgerRequest>;
export function buildGetSchemaRequest(submitterDid: Did | null, schemaId: SchemaId): Promise<LedgerRequest>;
export function parseGetSchemaResponse(response: LedgerResponse): Promise<[SchemaId, Schema]>;
export function buildCredDefRequest(submitterDid: Did, credDef: CredDef): Promise<LedgerRequest>;
export function buildGetCredDefRequest(submitterDid: Did | null, credDefId: CredDefId): Promise<LedgerRequest>;
export function parseGetCredDefResponse(response: LedgerResponse): Promise<[CredDefId, CredDef]>;
export function signRequest(wh: WalletHandle, submitterDid: Did, request: LedgerRequest): Promise<SignedLedgerRequest>;
export function signAndSubmitRequest(
    poolHandle: PoolHandle,
    walletHandle: WalletHandle,
    submitterDid: Did,
    request: LedgerRequest,
): Promise<LedgerResponse>;
export function submitRequest(poolHandle: PoolHandle, request: LedgerRequest): Promise<LedgerResponse>;

export function buildGetTxnAuthorAgreementRequest(submitterDid: Did | null): Promise<LedgerRequest>;
export function buildGetAcceptanceMechanismsRequest(submitterDid: Did | null): Promise<LedgerRequest>;
export function appendTxnAuthorAgreementAcceptanceToRequest(
    request: LedgerRequest,
    text: string,
    version: string,
    digest: string,
    accMechType: string,
    timeOfAcceptance: number,
): Promise<LedgerRequest>;
export function abbreviateVerkey(did: Did, fullVerkey: Verkey): Promise<Verkey>;
export function generateNonce(): Promise<string>;

// -------------------------------------------- //
// ----------------- ANONCREDS ---------------- //
// -------------------------------------------- //

// ---- ISSUER ---- //
export function issuerCreateSchema(
    issuerDid: Did,
    name: string,
    version: string,
    attributes: string[],
): Promise<[SchemaId, Schema]>;
export function issuerCreateAndStoreCredentialDef(
    wh: WalletHandle,
    issuerDid: Did,
    schema: Schema,
    tag: string,
    signatureType: string,
    config?: CredDefConfig,
): Promise<[CredDefId, CredDef]>;
// TODO: issuerRotateCredentialDefStart
// TODO: issuerRotateCredentialDefApply
// TODO: issuerCreateAndStoreRevocReg
export function issuerCreateCredentialOffer(wh: WalletHandle, credDefId: CredDefId): Promise<CredOffer>;
export function issuerCreateCredential(
    wh: WalletHandle,
    credOffer: CredOffer,
    credReq: CredReq,
    credValues: CredValues,
    revRegId: RevRegId | null,
    blobStorageReaderHandle: BlobStorageReaderHandle | 0,
): Promise<[Cred, CredRevocId, RevocRegDelta]>;
// TODO: issuerRevokeCredential
// TODO: issuerMergeRevocationRegistryDeltas

// ---- PROVER ---- //
export function proverCreateMasterSecret(wh: WalletHandle, masterSecretId: string): Promise<string>;
export function proverCreateCredentialReq(
    wh: WalletHandle,
    proverDid: Did,
    credOffer: CredOffer,
    credDef: CredDef,
    masterSecretId: string,
): Promise<[CredReq, CredReqMetadata]>;
export function proverStoreCredential(
    wh: WalletHandle,
    credentialId: CredentialId | null,
    credReqMetadata: CredReqMetadata,
    cred: Cred,
    credDef: CredDef,
    revRegDef: RevRegDef | null,
): Promise<CredentialId>;
// TODO: proverGetCredentials
export function proverGetCredential(wh: WalletHandle, credId: string): Promise<IndyCredentialInfo>;
// TODO: proverSearchCredentials
// TODO: proverFetchCredentials
// TODO: proverCloseCredentialsSearch
export function proverGetCredentialsForProofReq(wh: WalletHandle, proofRequest: IndyProofRequest): Promise<ProofCred>;
export function proverSearchCredentialsForProofReq(
    wh: WalletHandle,
    proofRequest: IndyProofRequest,
    extraQuery: ReferentWalletQuery | null,
): Promise<SearchHandle>;
export function proverFetchCredentialsForProofReq(
    sh: SearchHandle,
    itemReferent: string,
    count: number,
): Promise<IndyCredential[]>;
export function proverCloseCredentialsSearchForProofReq(sh: SearchHandle): Promise<void>;
export function proverCreateProof(
    wh: WalletHandle,
    proofRequest: IndyProofRequest,
    requestedCredentials: IndyRequestedCredentials,
    masterSecretName: string,
    schemas: Schemas,
    credentialDefs: CredentialDefs,
    revStates: RevStates,
): Promise<IndyProof>;

// ---- VERIFIER ---- //
export function verifierVerifyProof(
    proofRequest: IndyProofRequest,
    proof: IndyProof,
    schemas: Schemas,
    credentialDefs: CredentialDefs,
    revRegsDefs: RevRegsDefs,
    revRegs: RevStates,
): Promise<boolean>;

// -------------------------------------------- //
// --------------- BLOB STORAGE --------------- //
// -------------------------------------------- //
export function openBlobStorageWriter(type: string, tailsWriterConfig: TailsWriterConfig): Promise<BlobWriterHandle>;
export function openBlobStorageReader(type: string, tailsReaderConfig: TailsReaderConfig): Promise<BlobReaderHandle>;

export type WalletHandle = number;
export type SearchHandle = number;
export type PoolHandle = number;
export type BlobReaderHandle = number;
export type BlobWriterHandle = number;
export type Did = string;
export type Verkey = string;
export type ByteArray = number[];
export type SchemaId = string;
export type CredDefId = string;
export type CredentialId = string;
export type KeyDerivationMethod = "ARGON2I_MOD" | "ARGON2I_INT" | "RAW";

// TODO: Maybe we can make this a bit more specific?
export type WalletQuery = Record<string, unknown>;

export interface ReferentWalletQuery {
    [key: string]: WalletQuery;
}

export interface TailsReaderConfig {
    base_dir: string;
}
export interface TailsWriterConfig {
    base_dir: string;
    uri_pattern: string;
}

export interface WalletRecordOptions {
    retrieveType?: boolean;
    retrieveValue?: boolean;
    retrieveTags?: boolean;
}

export interface WalletSearchOptions extends WalletRecordOptions {
    retrieveRecords?: boolean;
    retrieveTotalCount?: boolean;
}

export interface WalletConfig {
    id: string;
    storage_type?: string;
    storage_config?: WalletStorageConfig;
}

export interface WalletStorageConfig {
    [key: string]: unknown;
    path?: string;
}

export interface WalletCredentials {
    key: string;
    storage_credentials?: {
        [key: string]: unknown;
    };
    key_derivation_method?: KeyDerivationMethod;
}

export interface OpenWalletCredentials extends WalletCredentials {
    rekey_derivation_method?: KeyDerivationMethod;
}

export interface DidConfig {
    did?: string;
    seed?: string;
    crypto_type?: "ed25519";
    cid?: boolean;
    method_name?: string;
}

export interface LedgerRequest {
    reqId: number;
    identifier: string;
    operation: Record<string, unknown>;
    protocolVersion: number;
}

export interface SignedLedgerRequest extends LedgerRequest {
    signature: string;
}

export interface LedgerRejectResponse {
    op: "REJECT";
    reqId: number;
    reason: string;
    identifier: string;
}

export interface LedgerReplyResponse {
    op: "REPLY";
    result: Record<string, unknown>;
}

export interface LedgerReadReplyResponse extends LedgerReplyResponse {
    result: {
        type: string;
        identifier: string;
        dest: string;
        reqId: number;
        seqNo: number;
        txnTime: number;
        state_proof: Record<string, unknown>;
        // contains request specific data
        data: unknown;
    };
}

export interface LedgerWriteReplyResponse extends LedgerReplyResponse {
    result: {
        ver: string;
        txnMetadata: {
            txnTime: number;
            seqNo: number;
            txnId: string;
        };
        auditPath: string[];
        reqSignature: {
            type: string;
            values: Array<{ from: string; value: string }>;
        };
        rootHash: string;
        txn: {
            type: string;
            // ... TODO: add other txn fields ...
            [key: string]: unknown;
        };
    };
}

export type LedgerResponse = LedgerRejectResponse | LedgerReadReplyResponse | LedgerWriteReplyResponse;

export interface Schema {
    id: SchemaId;
    attrNames: string[];
    name: string;
    version: string;
    ver: string;
    seqNo: number;
}

export interface CredDef {
    id: string;
    schemaId: string;
    type: string;
    tag: string;
    value: {
        primary: Record<string, unknown>;
        revocation?: unknown;
    };
    ver: string;
}

export interface CredDefConfig {
    support_revocation?: boolean;
}

export interface CredOffer {
    schema_id: SchemaId;
    cred_def_id: CredDefId;
    nonce: string;
    key_correctness_proof: Record<string, unknown>;
}

export interface IndyCredentialInfo {
    referent: string;
    attrs: {
        [key: string]: string;
    };
    schema_id: string;
    cred_def_id: string;
    rev_reg_id?: number;
    cred_rev_id?: number;
}

export interface IndyCredential {
    cred_info: IndyCredentialInfo;
    interval?: NonRevokedInterval;
}
export interface ProofCred {
    requested_attrs: {
        [key: string]: IndyCredential[];
    };
    requested_predicates: {
        [key: string]: Array<{
            cred_info: IndyCredentialInfo;
            timestamp?: number;
        }>;
    };
}

export interface IndyProof {
    requested_proof: {
        revealed_attrs: {
            [key: string]: {
                sub_proof_index: number;
                raw: string;
                encoded: string;
            };
        };
        revealed_attr_groups: {
            [key: string]: {
                sub_proof_index: number;
                values: {
                    [key: string]: {
                        raw: string;
                        encoded: string;
                    };
                };
            };
        };
        unrevealed_attrs: {
            [key: string]: {
                sub_proof_index: number;
            };
        };
        self_attested_attrs: {
            [key: string]: string;
        };
        requested_predicates: {
            [key: string]: { sub_proof_index: number };
        };
    };
    proof: any;
    identifiers: Array<{ schema_id: string; cred_def_id: string; rev_reg_id?: string; timestamp?: number }>;
}

export interface Schemas {
    [key: string]: Schema;
}

export interface CredentialDefs {
    [key: string]: CredDef;
}

export interface RevRegsDefs {
    [key: string]: unknown;
}

export interface RevRegDef {
    [key: string]: unknown;
}

export interface RevStates {
    [key: string]: {
        [key: string]: unknown;
    };
}

export interface IndyRequestedCredentials {
    self_attested_attributes: {
        [key: string]: string;
    };
    requested_attributes: {
        [key: string]: { cred_id: string; timestamp?: number; revealed: boolean };
    };
    requested_predicates: {
        [key: string]: { cred_id: string; timestamp?: number };
    };
}

export interface NonRevokedInterval {
    from?: number;
    to?: number;
}
export interface IndyProofRequest {
    name: string;
    version: string;
    nonce: string;
    requested_attributes: {
        [key: string]: {
            name?: string;
            names?: string;
            restrictions?: WalletQuery[];
            non_revoked?: NonRevokedInterval;
        };
    };
    requested_predicates: {
        [key: string]: {
            name: string;
            p_type: ">=" | ">" | "<=" | "<";
            p_value: number;
            restrictions?: WalletQuery[];
            non_revoked?: NonRevokedInterval;
        };
    };
    non_revoked?: NonRevokedInterval;
    ver?: "1.0" | "2.0";
}

export interface CredReq {
    prover_did: Did;
    cred_def_id: CredDefId;
    blinded_ms: Record<string, unknown>;
    blinded_ms_correctness_proof: Record<string, unknown>;
    nonce: string;
}

export type CredReqMetadata = Record<string, unknown>;

export type CredValues = Record<string, CredValue>;

export interface CredValue {
    raw: string;
    encoded: string; // Raw value as number in string
}

export type RevRegId = string;
export type BlobStorageReaderHandle = number;

export interface Cred {
    schema_id: SchemaId;
    cred_def_id: CredDefId;
    rev_reg_def_id: string;
    values: CredValues;
    signature: unknown;
    signature_correctness_proof: unknown;
}

export type CredRevocId = string;
export type RevocRegDelta = Record<string, unknown>;

export interface KeyConfig {
    seed?: string;
}

export interface PoolConfig {
    genesis_txn: string;
}

export interface RuntimePoolConfig {
    timeout?: number;
    extended_timeout?: number;
    preordered_nodes?: string[];
    number_read_nodes?: number;
}

export interface WalletRecord {
    id: string;
    type?: string;
    value?: string;
    tags?: {
        [key: string]: string | undefined;
    };
}

export interface WalletRecordSearch {
    totalCount: string | null;
    records: WalletRecord[];
}

export interface GetNymResponse {
    did: Did;
    verkey: Verkey;
    role: NymRole;
}

export enum NymRole {
    TRUSTEE = 0,
    STEWARD = 2,
    TRUST_ANCHOR = 101,
    ENDORSER = 101,
    NETWORK_MONITOR = 201,
}
