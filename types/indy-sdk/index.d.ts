// Type definitions for indy-sdk 1.16
// Project: https://github.com/hyperledger/indy-sdk/tree/master/wrappers/nodejs
// Definitions by: Timo Glastra <https://github.com/TimoGlastra>
//                 Jakub Kočí <https://github.com/jakubkoci>
//                 Karim Stekelenburg <https://github.com/karimStekelenburg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Buffer } from 'buffer/';

declare namespace Indy {
    function createWallet(config: WalletConfig, credentials: WalletCredentials): Promise<void>;
    function openWallet(config: WalletConfig, credentials: OpenWalletCredentials): Promise<WalletHandle>;
    function closeWallet(wh: WalletHandle): Promise<void>;
    function deleteWallet(config: WalletConfig, credentials: WalletCredentials): Promise<void>;
    function importWallet(
        config: WalletConfig,
        credentials: WalletCredentials,
        importConfig: WalletExportImportConfig,
    ): Promise<void>;
    function exportWallet(wh: WalletHandle, exportConfig: WalletExportImportConfig): Promise<void>;
    function createAndStoreMyDid(wh: WalletHandle, did: DidConfig): Promise<[Did, Verkey]>;
    function keyForLocalDid(wh: WalletHandle, did: Did): Promise<Verkey>;
    function cryptoAnonCrypt(recipientVk: Verkey, messageRaw: Buffer): Promise<Buffer>;
    function cryptoSign(wh: WalletHandle, signerVk: Verkey, messageRaw: Buffer): Promise<Buffer>;
    function cryptoVerify(signerVk: Verkey, messageRaw: Buffer, signatureRaw: Buffer): Promise<boolean>;
    function createKey(wh: WalletHandle, key: KeyConfig): Promise<Verkey>;
    function packMessage(
        wh: WalletHandle,
        message: Buffer,
        receiverKeys: Verkey[],
        senderVk: Verkey | null,
    ): Promise<Buffer>;
    function unpackMessage(wh: WalletHandle, jwe: Buffer): Promise<Buffer>;
    function addWalletRecord(
        wh: WalletHandle,
        type: string,
        id: string,
        value: string,
        tags: Record<string, string>,
    ): Promise<void>;
    function updateWalletRecordValue(wh: WalletHandle, type: string, id: string, value: string): Promise<void>;
    function updateWalletRecordTags(
        wh: WalletHandle,
        type: string,
        id: string,
        tags: Record<string, string>,
    ): Promise<void>;
    function addWalletRecordTags(
        wh: WalletHandle,
        type: string,
        id: string,
        tags: Record<string, string>,
    ): Promise<void>;
    function deleteWalletRecord(wh: WalletHandle, type: string, id: string): Promise<void>;
    function getWalletRecord(
        wh: WalletHandle,
        type: string,
        id: string,
        options: WalletRecordOptions,
    ): Promise<WalletRecord>;
    function openWalletSearch(
        wh: WalletHandle,
        type: string,
        query: WalletQuery,
        options: WalletSearchOptions,
    ): Promise<SearchHandle>;
    function fetchWalletSearchNextRecords(
        wh: WalletHandle,
        searchHandle: SearchHandle,
        count: number,
    ): Promise<WalletRecordSearch>;
    function closeWalletSearch(sh: SearchHandle): Promise<void>;
    function createPoolLedgerConfig(configName: string, config?: PoolConfig): Promise<void>;
    function openPoolLedger(configName: string, config?: RuntimePoolConfig): Promise<PoolHandle>;
    function setProtocolVersion(version: number): Promise<void>;
    function buildGetNymRequest(submitterDid: Did | null, targetDid: Did): Promise<LedgerRequest>;
    function parseGetNymResponse(response: LedgerResponse): Promise<GetNymResponse>;
    function buildSchemaRequest(submitterDid: Did, schema: Schema): Promise<LedgerRequest>;
    function buildGetSchemaRequest(submitterDid: Did | null, schemaId: SchemaId): Promise<LedgerRequest>;
    function parseGetSchemaResponse(response: LedgerResponse): Promise<[SchemaId, Schema]>;
    function buildCredDefRequest(submitterDid: Did, credDef: CredDef): Promise<LedgerRequest>;
    function buildGetCredDefRequest(submitterDid: Did | null, credDefId: CredDefId): Promise<LedgerRequest>;
    function parseGetCredDefResponse(response: LedgerResponse): Promise<[CredDefId, CredDef]>;

    // Revocation Ledger methods
    function buildRevocRegDefRequest(submitterDid: Did, data: RevocRegDef): Promise<LedgerRequest>;
    function buildGetRevocRegDefRequest(submitterDid: Did | null, revRegId: RevRegId): Promise<LedgerRequest>;
    function parseGetRevocRegDefResponse(response: LedgerResponse): Promise<[RevRegId, RevocRegDef]>;
    function buildRevocRegEntryRequest(
        submitterDid: Did,
        revRegId: RevRegId,
        revDefType: 'CL_ACCUM',
        value: RevocRegDelta,
    ): Promise<LedgerRequest>;
    function buildGetRevocRegRequest(
        submitterDid: Did | null,
        revRegId: RevRegId,
        timestamp: number,
    ): Promise<LedgerRequest>;
    function parseGetRevocRegResponse(response: LedgerResponse): Promise<[RevRegId, RevocReg, number]>;
    function buildGetRevocRegDeltaRequest(
        submitterDid: Did | null,
        revRegId: RevRegId,
        from: number | null,
        to: number,
    ): Promise<LedgerRequest>;
    function parseGetRevocRegDeltaResponse(response: LedgerResponse): Promise<[RevRegId, RevocRegDelta, number]>;

    function signRequest(wh: WalletHandle, submitterDid: Did, request: LedgerRequest): Promise<SignedLedgerRequest>;
    function signAndSubmitRequest(
        poolHandle: PoolHandle,
        walletHandle: WalletHandle,
        submitterDid: Did,
        request: LedgerRequest,
    ): Promise<LedgerResponse>;
    function submitRequest(poolHandle: PoolHandle, request: LedgerRequest): Promise<LedgerResponse>;

    function buildGetTxnAuthorAgreementRequest(submitterDid: Did | null): Promise<LedgerRequest>;
    function buildGetAcceptanceMechanismsRequest(submitterDid: Did | null): Promise<LedgerRequest>;
    function appendTxnAuthorAgreementAcceptanceToRequest(
        request: LedgerRequest,
        text: string,
        version: string,
        digest: string,
        accMechType: string,
        timeOfAcceptance: number,
    ): Promise<LedgerRequest>;
    function abbreviateVerkey(did: Did, fullVerkey: Verkey): Promise<Verkey>;
    function generateNonce(): Promise<string>;

    // -------------------------------------------- //
    // ----------------- ANONCREDS ---------------- //
    // -------------------------------------------- //

    // ---- ISSUER ---- //
    function issuerCreateSchema(
        issuerDid: Did,
        name: string,
        version: string,
        attributes: string[],
    ): Promise<[SchemaId, Schema]>;
    function issuerCreateAndStoreCredentialDef(
        wh: WalletHandle,
        issuerDid: Did,
        schema: Schema,
        tag: string,
        signatureType: string,
        config?: CredDefConfig,
    ): Promise<[CredDefId, CredDef]>;
    // TODO: issuerRotateCredentialDefStart
    // TODO: issuerRotateCredentialDefApply
    function issuerCreateAndStoreRevocReg(
        wh: WalletHandle,
        issuerDid: Did,
        revocDefType: 'CL_ACCUM' | null,
        tag: string,
        credDefId: CredDefId,
        config: {
            issuance_type?: 'ISSUANCE_BY_DEFAULT' | 'ISSUANCE_ON_DEMAND';
            max_cred_num?: number;
        },
        tailsWriterHandle: BlobWriterHandle,
    ): Promise<[RevRegId, RevocRegDef, RevocRegDelta]>;

    function issuerCreateCredentialOffer(wh: WalletHandle, credDefId: CredDefId): Promise<CredOffer>;
    function issuerCreateCredential(
        wh: WalletHandle,
        credOffer: CredOffer,
        credReq: CredReq,
        credValues: CredValues,
        revRegId: RevRegId | null,
        blobStorageReaderHandle: BlobStorageReaderHandle | 0,
    ): Promise<[Cred, CredRevocId, RevocRegDelta]>;

    function issuerRevokeCredential(
        wh: WalletHandle,
        blobStorageReaderHandle: BlobStorageReaderHandle,
        revRegId: RevRegId,
        credRevocId: CredRevocId,
    ): Promise<RevocRegDelta>;
    function issuerMergeRevocationRegistryDeltas(
        revRegDelta: RevocRegDelta,
        otherRevRegDelta: RevocRegDelta,
    ): Promise<RevocRegDelta>;

    // ---- PROVER ---- //
    function proverCreateMasterSecret(wh: WalletHandle, masterSecretId: string): Promise<string>;
    function proverCreateCredentialReq(
        wh: WalletHandle,
        proverDid: Did,
        credOffer: CredOffer,
        credDef: CredDef,
        masterSecretId: string,
    ): Promise<[CredReq, CredReqMetadata]>;
    function proverStoreCredential(
        wh: WalletHandle,
        credentialId: CredentialId | null,
        credReqMetadata: CredReqMetadata,
        cred: Cred,
        credDef: CredDef,
        revRegDef: RevRegDef | null,
    ): Promise<CredentialId>;
    // TODO: proverGetCredentials
    function proverGetCredential(wh: WalletHandle, credId: string): Promise<IndyCredentialInfo>;
    // TODO: proverSearchCredentials
    // TODO: proverFetchCredentials
    // TODO: proverCloseCredentialsSearch
    function proverGetCredentialsForProofReq(wh: WalletHandle, proofRequest: IndyProofRequest): Promise<ProofCred>;
    function proverSearchCredentialsForProofReq(
        wh: WalletHandle,
        proofRequest: IndyProofRequest,
        extraQuery: ReferentWalletQuery | null,
    ): Promise<SearchHandle>;
    function proverFetchCredentialsForProofReq(
        sh: SearchHandle,
        itemReferent: string,
        count: number,
    ): Promise<IndyCredential[]>;
    function proverCloseCredentialsSearchForProofReq(sh: SearchHandle): Promise<void>;
    function proverCreateProof(
        wh: WalletHandle,
        proofRequest: IndyProofRequest,
        requestedCredentials: IndyRequestedCredentials,
        masterSecretName: string,
        schemas: Schemas,
        credentialDefs: CredentialDefs,
        revStates: RevStates,
    ): Promise<IndyProof>;

    // ---- VERIFIER ---- //
    function verifierVerifyProof(
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
    function openBlobStorageWriter(type: string, tailsWriterConfig: TailsWriterConfig): Promise<BlobWriterHandle>;
    function openBlobStorageReader(type: string, tailsReaderConfig: TailsReaderConfig): Promise<BlobReaderHandle>;

    type WalletHandle = number;
    type SearchHandle = number;
    type PoolHandle = number;
    type BlobReaderHandle = number;
    type BlobWriterHandle = number;
    type Did = string;
    type Verkey = string;
    type ByteArray = number[];
    type SchemaId = string;
    type CredDefId = string;
    type CredentialId = string;
    type KeyDerivationMethod = 'ARGON2I_MOD' | 'ARGON2I_INT' | 'RAW';

    // TODO: Maybe we can make this a bit more specific?
    type WalletQuery = Record<string, unknown>;

    interface ReferentWalletQuery {
        [key: string]: WalletQuery;
    }

    interface TailsReaderConfig {
        base_dir: string;
    }
    interface TailsWriterConfig {
        base_dir: string;
        uri_pattern: string;
    }

    interface WalletRecordOptions {
        retrieveType?: boolean | undefined;
        retrieveValue?: boolean | undefined;
        retrieveTags?: boolean | undefined;
    }

    interface WalletSearchOptions extends WalletRecordOptions {
        retrieveRecords?: boolean | undefined;
        retrieveTotalCount?: boolean | undefined;
    }

    interface WalletConfig {
        id: string;
        storage_type?: string | undefined;
        storage_config?: WalletStorageConfig | undefined;
    }

    interface WalletStorageConfig {
        [key: string]: unknown;
        path?: string | undefined;
    }

    interface WalletCredentials {
        key: string;
        storage_credentials?:
            | {
                  [key: string]: unknown;
              }
            | undefined;
        key_derivation_method?: KeyDerivationMethod | undefined;
    }

    interface OpenWalletCredentials extends WalletCredentials {
        rekey_derivation_method?: KeyDerivationMethod | undefined;
    }

    interface WalletExportImportConfig {
        key: string;
        path: string;
    }

    interface DidConfig {
        did?: string | undefined;
        seed?: string | undefined;
        crypto_type?: 'ed25519' | undefined;
        cid?: boolean | undefined;
        method_name?: string | undefined;
    }

    interface LedgerRequest {
        reqId: number;
        identifier: string;
        operation: Record<string, unknown>;
        protocolVersion: number;
    }

    interface SignedLedgerRequest extends LedgerRequest {
        signature: string;
    }

    interface LedgerRejectResponse {
        op: 'REJECT';
        reqId: number;
        reason: string;
        identifier: string;
    }

    interface LedgerReplyResponse {
        op: 'REPLY';
        result: Record<string, unknown>;
    }

    interface LedgerReadReplyResponse extends LedgerReplyResponse {
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

    interface LedgerWriteReplyResponse extends LedgerReplyResponse {
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

    type LedgerResponse = LedgerRejectResponse | LedgerReadReplyResponse | LedgerWriteReplyResponse;

    interface Schema {
        id: SchemaId;
        attrNames: string[];
        name: string;
        version: string;
        ver: string;
        seqNo: number;
    }

    interface CredDef {
        id: string;
        schemaId: string;
        type: string;
        tag: string;
        value: {
            primary: Record<string, unknown>;
            revocation?: unknown | undefined;
        };
        ver: string;
    }

    interface CredDefConfig {
        support_revocation?: boolean | undefined;
    }

    interface RevocRegDef {
        id: RevRegId;
        revocDefType: 'CL_ACCUM';
        tag: string;
        credDefId: CredDefId;
        value: {
            issuanceType: 'ISSUANCE_BY_DEFAULT' | 'ISSUANCE_ON_DEMAND';
            maxCredNum: number;
            tailsHash: string;
            tailsLocation: string;
            publicKeys: string[];
        };
        ver: string;
    }

    interface CredOffer {
        schema_id: SchemaId;
        cred_def_id: CredDefId;
        nonce: string;
        key_correctness_proof: Record<string, unknown>;
    }

    interface IndyCredentialInfo {
        referent: string;
        attrs: {
            [key: string]: string;
        };
        schema_id: string;
        cred_def_id: string;
        rev_reg_id?: number | undefined;
        cred_rev_id?: number | undefined;
    }

    interface IndyCredential {
        cred_info: IndyCredentialInfo;
        interval?: NonRevokedInterval | undefined;
    }
    interface ProofCred {
        requested_attrs: {
            [key: string]: IndyCredential[];
        };
        requested_predicates: {
            [key: string]: Array<{
                cred_info: IndyCredentialInfo;
                timestamp?: number | undefined;
            }>;
        };
    }

    interface IndyProof {
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
        identifiers: Array<{
            schema_id: string;
            cred_def_id: string;
            rev_reg_id?: string | undefined;
            timestamp?: number | undefined;
        }>;
    }

    interface Schemas {
        [key: string]: Schema;
    }

    interface CredentialDefs {
        [key: string]: CredDef;
    }

    interface RevRegsDefs {
        [key: string]: unknown;
    }

    interface RevRegDef {
        [key: string]: unknown;
    }

    interface RevStates {
        [key: string]: {
            [key: string]: unknown;
        };
    }

    interface IndyRequestedCredentials {
        self_attested_attributes: {
            [key: string]: string;
        };
        requested_attributes: {
            [key: string]: { cred_id: string; timestamp?: number | undefined; revealed: boolean };
        };
        requested_predicates: {
            [key: string]: { cred_id: string; timestamp?: number | undefined };
        };
    }

    interface NonRevokedInterval {
        from?: number | undefined;
        to?: number | undefined;
    }
    interface IndyProofRequest {
        name: string;
        version: string;
        nonce: string;
        requested_attributes: {
            [key: string]: {
                name?: string | undefined;
                names?: string | undefined;
                restrictions?: WalletQuery[] | undefined;
                non_revoked?: NonRevokedInterval | undefined;
            };
        };
        requested_predicates: {
            [key: string]: {
                name: string;
                p_type: '>=' | '>' | '<=' | '<';
                p_value: number;
                restrictions?: WalletQuery[] | undefined;
                non_revoked?: NonRevokedInterval | undefined;
            };
        };
        non_revoked?: NonRevokedInterval | undefined;
        ver?: '1.0' | '2.0' | undefined;
    }

    interface CredReq {
        prover_did: Did;
        cred_def_id: CredDefId;
        blinded_ms: Record<string, unknown>;
        blinded_ms_correctness_proof: Record<string, unknown>;
        nonce: string;
    }

    type CredReqMetadata = Record<string, unknown>;

    type CredValues = Record<string, CredValue>;

    interface CredValue {
        raw: string;
        encoded: string; // Raw value as number in string
    }

    type RevRegId = string;
    type BlobStorageReaderHandle = number;

    interface Cred {
        schema_id: SchemaId;
        cred_def_id: CredDefId;
        rev_reg_def_id: string;
        values: CredValues;
        signature: unknown;
        signature_correctness_proof: unknown;
    }

    type CredRevocId = string;
    interface RevocRegDelta {
        value: {
            prevAccum: string;
            accum: string;
            issued: number[];
            revoked: number[];
        };
        ver: string;
    }

    interface RevocReg {
        value: {
            accum: string;
        };
        ver: string;
    }

    interface KeyConfig {
        seed?: string | undefined;
    }

    interface PoolConfig {
        genesis_txn: string;
    }

    interface RuntimePoolConfig {
        timeout?: number | undefined;
        extended_timeout?: number | undefined;
        preordered_nodes?: string[] | undefined;
        number_read_nodes?: number | undefined;
    }

    interface WalletRecord {
        id: string;
        type?: string | undefined;
        value?: string | undefined;
        tags?:
            | {
                  [key: string]: string | undefined;
              }
            | undefined;
    }

    interface WalletRecordSearch {
        totalCount: string | null;
        records: WalletRecord[];
    }

    interface GetNymResponse {
        did: Did;
        verkey: Verkey;
        role: NymRole;
    }

    enum NymRole {
        TRUSTEE = 0,
        STEWARD = 2,
        TRUST_ANCHOR = 101,
        ENDORSER = 101,
        NETWORK_MONITOR = 201,
    }
}

export default Indy;
