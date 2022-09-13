import indy from 'indy-sdk';
import { Buffer } from 'buffer/';

indy.setLogger((level, target, message, modulePath, file, line) => {});

indy.openBlobStorageWriter('default', {
    base_dir: 'dir',
    uri_pattern: 'uri_pattern',
});
indy.openBlobStorageReader('default', {
    base_dir: 'dir',
});

const revRegDef: indy.RevocRegDef = {
    id: '10',
    revocDefType: 'CL_ACCUM',
    tag: 'tag',
    credDefId: 'id',
    value: {
        issuanceType: 'ISSUANCE_BY_DEFAULT',
        maxCredNum: 10,
        tailsHash: 'xxxxx',
        tailsLocation: 'xxxxx',
        publicKeys: ['pub1', 'pub2'],
    },
    ver: '2',
};

const indyCredentialInfo: indy.IndyCredentialInfo = {
    referent: 'referent',
    attrs: {
        key: 'value',
    },
    schema_id: 'schema_id',
    cred_def_id: 'cred_def_id',
    rev_reg_id: 12,
    cred_rev_id: '12408120',
};

const walletConfig: indy.WalletConfig = { id: 'wallet' };
const walletCredentials: indy.WalletCredentials = { key: 'key' };
const importExportConfig: indy.WalletExportImportConfig = {
    key: 'export_key',
    path: 'some-path',
};
const rekeyWalletCredentials: indy.OpenWalletCredentials = {
    key: 'old_key',
    rekey: 'new_key',
};
const credDef: indy.CredDef = {
    id: 'id',
    schemaId: 'schemaId',
    tag: 'tag',
    type: 'type',
    value: { primary: {}, revocation: true },
    ver: '1.0',
};
const schema: indy.Schema = {
    attrNames: ['name'],
    name: 'schemaName',
    id: 'id',
    version: '1.0',
    ver: '1.0',
    seqNo: 10,
};
const ledgerRequest: indy.LedgerRequest = { identifier: '', operation: {}, protocolVersion: 1, reqId: 100 };
const credOffer: indy.CredOffer = {} as unknown as indy.CredOffer;
const credRequest: indy.CredReq = {} as unknown as indy.CredReq;
const proofReq: indy.IndyProofRequest = {
    nonce: 'nonce',
    name: 'proof_req_1',
    version: '0.1',
    requested_attributes: {
        attr1_referent: { name: 'name' },
    },
    requested_predicates: {
        predicate1_referent: { name: 'age', p_type: '>=', p_value: 18 },
    },
    non_revoked: { from: 80, to: 100 },
};
const ledgerRejectResponse: indy.LedgerRejectResponse = {
    op: 'REJECT',
    reqId: 1615465027340221000,
    reason: "client request invalid: UnauthorizedClientRequest('The action is forbidden',)",
    identifier: 'TL1EaPFCZ8Si5aUrqScBDt',
};
const ledgerReqnackResponse: indy.LedgerReqnackResponse = {
    op: 'REQNACK',
    reqId: 1615465027340221000,
    reason: "client request invalid: UnauthorizedClientRequest('The action is forbidden',)",
    identifier: 'TL1EaPFCZ8Si5aUrqScBDt',
};
const ledgerWriteReply: indy.LedgerWriteReplyResponse = {
    result: {
        auditPath: [
            '4VahmcUBKBJFnTJzRnepCaTWjNHQf9iA6vRHFHW15aLJ',
            '8YEfjmSDPigomwpY13G28qd78oaimVyrFaRDX5PEgiKw',
            'FCSuYAG7wuTWD4RbtgBKyGuKMmzt5Wonv1yqjdFjkXfJ',
            'BZEGj9cAx4uGVywT88iC7QN8Nu4TiP9Ax7RLqSNXaM5',
        ],
        reqSignature: {
            type: 'ED25519',
            values: [
                {
                    from: 'TL1EaPFCZ8Si5aUrqScBDt',
                    value: '4Rp2dU5C8cBy4prK53tUyEM8shknKuqSE3w4YpZaQGBs3fH5uKhKMAAPhcw274KuNPas2Ss8h5obDicgaSKp69Yo',
                },
            ],
        },
        txnMetadata: {
            txnTime: 1615468668,
            txnId: 'TL1EaPFCZ8Si5aUrqScBDt:2:test-schema-1615468667975:1.0',
            seqNo: 44,
        },
        txn: {
            type: '101',
            metadata: {
                taaAcceptance: {
                    mechanism: 'accept',
                    taaDigest: 'e546ad2a5311b2020fd80efb4d17ec75f823d26ee2424cf741ee345ede9d3ff3',
                    time: 1615420800,
                },
                from: 'TL1EaPFCZ8Si5aUrqScBDt',
                reqId: 1615468667976625000,
                digest: '70337d6d1f539cc5a6f75b18a76f7edb7d5f630da40d4fef7091e7b3f34fd38a',
                payloadDigest: 'd843ba2af9c6ae3beb0c889e1c8802e89174f5c1636f88b8071503473b1926ab',
            },
            protocolVersion: 2,
            data: {
                data: {
                    name: 'test-schema-1615468667975',
                    attr_names: ['age', 'name'],
                    version: '1.0',
                },
            },
        },
        rootHash: '3MGBE7fXbtDHS2aZSiq8NAbn3mFykZCHc4Hibpittgfe',
        ver: '1',
    },
    op: 'REPLY',
};
const ledgerReadReply: indy.LedgerReadReplyResponse = {
    result: {
        type: '107',
        dest: 'TL1EaPFCZ8Si5aUrqScBDt',
        txnTime: 1615468964,
        state_proof: {
            multi_signature: {
                signature:
                    'RFszfgrdWaxPi6UUrwXoip5ctpcxMYbD5kS13bgtdfQNx3RQSpEd5cCYNMbU4AUGJWt5imEJ7kWXzzwNvmWLGzKdcYZxjanbfyftYgnEKxPdhPhcpDyi56C9xdyYssFGZrtadLg6bWRXaCVfhuSmSt66SHXbpsGaEvYaWhetKFi6eb',
                value: {
                    txn_root_hash: '4UpqjtRCbKkUxVRBSpg4x9yyKuRWHwkp5TegWCiGFG1o',
                    state_root_hash: '8h6xGyeaHtM8X1a5TQgjGDLFSUWShsKCzQs3fKpJmyiU',
                    ledger_id: 1,
                    pool_state_root_hash: 'NCGqbfRWDWtLB2bDuL6TC5BhrRdQMc5MyKdXQqXii44',
                    timestamp: 1615468964,
                },
                participants: ['Node1', 'Node2', 'Node3'],
            },
            root_hash: '8h6xGyeaHtM8X1a5TQgjGDLFSUWShsKCzQs3fKpJmyiU',
            proof_nodes: '+QRc+FGAgICAgKAjhAHlsUg90Ze+qFGKL7a3H792uCXMvXQBgJqRnEzrPaB9T3yGi1oxqCdAeo8ZplJs6kjTOqEA/...',
        },
        reqId: 1615468964808503000,
        data: {
            name: 'test-schema-1615468964699',
            attr_names: ['name', 'age'],
            version: '1.0',
        },
        seqNo: 46,
        identifier: 'LibindyDid111111111111',
    },
    op: 'REPLY',
};

indy.createWallet(walletConfig, walletCredentials);
indy.openWallet(walletConfig, walletCredentials);
indy.openWallet(walletConfig, rekeyWalletCredentials);
indy.exportWallet(10, importExportConfig);
indy.importWallet(walletConfig, walletCredentials, importExportConfig);
indy.createKey(1, { seed: 'seed' });
indy.cryptoSign(1, 'verkey', Buffer.from('message'));
indy.cryptoVerify('verkey', Buffer.from('message'), Buffer.from('signature'));
indy.createAndStoreMyDid(10, { seed: '000000000000000000000000Steward1' });
indy.cryptoAnonCrypt('trusteeVerkey', Buffer.from('message'));
indy.packMessage(10, Buffer.from('message'), ['receiverKeys'], 'senderVerkey');
indy.unpackMessage(10, Buffer.from('packed'));
indy.closeWallet(10);
indy.deleteWallet(walletConfig, walletCredentials);
indy.keyForLocalDid(10, '10');
indy.abbreviateVerkey('did', 'verkey');
indy.issuerCreateSchema('myDid', 'schemaName', '1.0', ['name', 'age']);
indy.buildSchemaRequest('myDid', schema);
indy.signRequest(10, 'myDid', ledgerRequest);
indy.signAndSubmitRequest(10, 10, 'myDid', ledgerRequest);
indy.submitRequest(10, ledgerRequest);
indy.parseGetNymResponse(ledgerRejectResponse);
indy.parseGetNymResponse(ledgerReqnackResponse);
indy.buildNymRequest('myDid', 'targetDid', 'verKey', 'alias', 'TRUSTEE');
indy.buildGetSchemaRequest('myDid', 'a');
indy.parseGetSchemaResponse(ledgerWriteReply);
indy.buildGetAcceptanceMechanismsRequest(null);
indy.appendTxnAuthorAgreementAcceptanceToRequest(
    ledgerRequest,
    'indy agreement',
    '1.0.0',
    'null',
    'acceptance mechanism label 1',
    123379200,
);
indy.issuerCreateAndStoreCredentialDef(10, 'myDid', schema, 'TAG', 'CL', { support_revocation: true });
indy.buildCredDefRequest('myDid', credDef);
indy.buildGetCredDefRequest('myDid', 'credDefId');
indy.parseGetCredDefResponse(ledgerReadReply);
indy.buildGetTxnAuthorAgreementRequest(null);
indy.addWalletRecord(10, 'contact', '1', 'john', {
    '~score': 'aaa',
});
indy.updateWalletRecordValue(10, 'contact', '3', 'george');
indy.updateWalletRecordTags(10, 'contact', '3', {
    '~score': 'fff',
});
indy.getWalletRecord(10, 'contact', '1', {});
indy.openWalletSearch(
    10,
    'contact',
    {},
    {
        retrieveRecords: true,
        retrieveTotalCount: true,
        retrieveType: true,
        retrieveValue: true,
        retrieveTags: true,
    },
);
indy.fetchWalletSearchNextRecords(10, 10, 10);
indy.closeWalletSearch(10);
indy.createPoolLedgerConfig('not_a_real_pool', {
    genesis_txn: '/not/a/real/file.txn',
});
indy.deletePoolLedgerConfig('not_a_real_pool');
indy.setProtocolVersion(1);
indy.openPoolLedger('name', { timeout: 1000 });
indy.closePoolLedger(10);
indy.proverCreateMasterSecret(10, 'masterSecretName');
indy.proverCreateCredentialReq(10, 'proverDid', credOffer, credDef, 'master_secret');
indy.issuerCreateCredentialOffer(10, 'credDefId');
indy.issuerCreateCredential(
    10,
    credOffer,
    credRequest,
    {
        name: { raw: 'Alex', encoded: '1139481716457488690172217916278103335' },
        height: { raw: '175', encoded: '175' },
        age: { raw: '28', encoded: '28' },
    },
    '10',
    10,
);
indy.proverStoreCredential(
    10,
    'cred_1_id',
    {},
    {
        cred_def_id: 'cred_def_id',
        rev_reg_id: 'rev_reg_id',
        schema_id: 'schema_id',
        signature: 'signature',
        signature_correctness_proof: 'signature_correctness_proof',
        values: {},
    },
    credDef,
    null,
);
indy.proverGetCredential(10, 'outCredId');
indy.proverGetCredentials(10, {
    cred_def_id: 'cred_def_id',
    issuer_did: 'issuer_did',
    schema_id: 'schema_id',
    schema_issuer_did: 'schema_issuer_did',
    schema_name: 'schema_name',
    schema_version: 'schema_version',
});
indy.proverDeleteCredential(10, 'credId');
indy.generateNonce();
indy.generateWalletKey();
indy.generateWalletKey({ seed: 'seed' });
indy.buildAttribRequest('myDid', 'myDid', null, { endpoint: 'value' }, null);
indy.buildGetAttribRequest(null, 'did', 'endpoint', null, null);
indy.proverGetCredentialsForProofReq(10, proofReq);
indy.proverSearchCredentialsForProofReq(10, proofReq, {});
indy.proverFetchCredentialsForProofReq(10, 'attr1_referent', 100);
indy.proverCloseCredentialsSearchForProofReq(10);
indy.verifierVerifyProof(
    proofReq,
    {
        proof: 'proof',
        identifiers: [{ schema_id: 'schema_id', cred_def_id: 'cred_def_id' }],
        requested_proof: {
            requested_predicates: {},
            revealed_attr_groups: {},
            revealed_attrs: {},
            self_attested_attrs: {},
            unrevealed_attrs: {},
        },
    },
    {},
    {},
    {},
    {},
);
indy.proverCreateProof(
    10,
    proofReq,
    {
        requested_attributes: {},
        requested_predicates: {},
        self_attested_attributes: {},
    },
    'masterSecretName',
    {},
    {},
    {},
);

indy.createRevocationState(
    10,
    {
        id: '',
        revocDefType: 'CL_ACCUM',
        tag: '',
        credDefId: '',
        value: {
            issuanceType: 'ISSUANCE_BY_DEFAULT',
            maxCredNum: 0,
            tailsHash: '',
            tailsLocation: '',
            publicKeys: [],
        },
        ver: '',
    },
    {
        value: {
            prevAccum: 'prevAccum',
            accum: 'accum',
            issued: [],
            revoked: [],
        },
        ver: 'ver',
    },
    new Date().getDate(),
    'credRevId',
);

// TODO
// cache + payment
// indy.updateRevocationState(blobReaderHandle, revState, revocRegDef, revDelta, timestamp, revId)
// indy.createRevocationState(blobReaderHandle, revocRegDef, revDelta, timestamp, revId)
// indy.issuerMergeRevocationRegistryDeltas(revDelta, revocedDelta)
// indy.issuerRevokeCredential(wh, blobReaderHandle, revocRegId, revId)
// indy.issuerRotateCredentialDefStart(wh, credDefId, null)
// indy.issuerRotateCredentialDefApply()
// indy.toUnqualified(qualified))
// indy.proverSearchCredentials(wh, { schema_id: schemaId })
// indy.proverFetchCredentials(sh, totalCount)
// indy.proverCloseCredentialsSearch(sh)
// indy.proverGetCredentials(wh, { schema_id: schemaId })
// indy.generateWalletKey({})
// indy.exportWallet(handle, exportConfig)
// indy.importWallet(walletConfig, walletCredentials, exportConfig)
// indy.refreshPoolLedger(-1)
// indy.deletePoolLedgerConfig(pool.name)
// indy.closePoolLedger(poolH)
// indy.setRuntimeConfig({ crypto_thread_pool_size: 4 })
// indy.setDefaultLogger('trace')
// indy.setKeyMetadata(10, 'verkey', 'foobar')
// indy.getKeyMetadata(10, 'verkey')
// indy.cryptoAuthCrypt(10, 'stewardVerkey', 'trusteeVerkey', Buffer.from('message'))
// indy.cryptoAuthDecrypt(10, 'trusteeVerkey', Buffer.from('encrypted'))
// indy.cryptoAnonDecrypt(10, 'trusteeVerkey', Buffer.from('encrypted'))
// indy.listMyDidsWithMeta(10)
// indy.keyForDid(10, 10, 'did')
// indy.replaceKeysStart(10, 'did', {})
// indy.replaceKeysApply(10, 'did')
// indy.storeTheirDid(10, { did: 'VsKV7grR1BUE29mG2Fm2kX', verkey: 'GjZWsBLgZCR18aL468JAT7w9CZRiBnpxUPPgyQxh4voa' })
// indy.setEndpointForDid(10, 'did', 'endpoint', 'verkey')
// indy.getEndpointForDid(10, 10, 'did')
// indy.setDidMetadata(10, 'did', 'metadata')
// indy.getDidMetadata(10, 'did')
// indy.getMyDidWithMeta(10, 'did')
// indy.qualifyDid(10, 'did', 'method')
// indy.buildNymRequest(trusteeDid, myDid, myVerkey, null, 'TRUSTEE')
// indy.getResponseMetadata(res)
// indy.buildAttribRequest(myDid, myDid, null, { endpoint: { ha: '127.0.0.1:5555' } }, null)
// indy.buildGetAttribRequest(myDid, myDid, 'endpoint', null, null)
// indy.buildPoolConfigRequest(myDid, false, false)
// indy.buildPoolRestartRequest(myDid, 'start', '0')
// indy.buildPoolUpgradeRequest(myDid, 'some upgrade action', '2.0.0', 'cancel', 'abc12345', -1, null, null, false, false, null)
// indy.buildGetDdoRequest(myDid, trusteeDid)
// indy.buildGetTxnRequest(myDid, null, data[1].seqNo)
// indy.buildNodeRequest(myDid, myDid, {
//     node_ip: '10.0.0.100',
//     node_port: 9710,
//     client_ip: '10.0.0.100',
//     client_port: 9709,
//     alias: 'Node5',
//     services: ['VALIDATOR'],
//     blskey: 'CnEDk9HrMnmiHXEV1WFgbVCRteYnPqsJwrTdcZaNhFVW'
//   })
// indy.issuerCreateAndStoreRevocReg(wh, myDid, null, 'tag1', credDefId, { max_cred_num: 5 }, writerH)
indy.buildRevocRegDefRequest('myDid', revRegDef);
indy.buildGetRevocRegDefRequest('myDid', 'revRegDefId');
indy.parseGetRevocRegDefResponse(ledgerRejectResponse);
indy.buildRevocRegEntryRequest('myDid', 'revRegDefId', 'CL_ACCUM', {
    value: {
        accum: '10',
        issued: [10, 20],
        prevAccum: '10',
        revoked: [10],
    },
    ver: '1',
});
indy.buildGetRevocRegRequest('myDid', 'revRegDefId', 100);
indy.parseGetRevocRegResponse(ledgerRejectResponse);
indy.buildGetRevocRegDeltaRequest('myDid', 'revRegDefId', 100, 100);
indy.parseGetRevocRegDeltaResponse(ledgerRejectResponse);

// indy.buildGetValidatorInfoRequest(myDid)
// indy.submitAction(pool.handle, req, null, null)
// indy.buildGetAuthRuleRequest(trusteeDid, 'NYM', 'ADD', 'role', null, '101')
// indy.buildAuthRuleRequest(trusteeDid, 'NYM', 'ADD', 'role', null, '101', constraint)
// indy.buildGetAuthRuleRequest(trusteeDid, 'NYM', 'ADD', 'role', null, '101')
// indy.buildAuthRulesRequest(trusteeDid, authRulesData)
// indy.buildTxnAuthorAgreementRequest(trusteeDid, 'indy agreement', '1.0.0', 12345, 54321)
// indy.buildDisableAllTxnAuthorAgreementsRequest(trusteeDid)
// indy.buildAcceptanceMechanismsRequest(trusteeDid, aml, '1.0.0', null)
// indy.appendRequestEndorser(req, trusteeDid)
// indy.getPairwise(wh, theirDid)
// indy.setPairwiseMetadata(wh, theirDid, 'hello new metadata')
// indy.listPairwise(wh)
// indy.isPairwiseExists(wh, theirDid)
// indy.createPairwise(wh, theirDid, myDid, 'wat')
