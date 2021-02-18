import indy from 'indy-sdk';

indy.openBlobStorageWriter('default', {
    base_dir: 'dir',
    uri_pattern: 'uri_pattern',
});
indy.openBlobStorageReader('default', {
    base_dir: 'dir',
    uri_pattern: 'uri_pattern',
});

const walletConfig: indy.WalletConfig = { id: 'wallet' };
const walletCredentials: indy.WalletCredentials = { key: 'key' };
const credDef: indy.CredDef = {
    id: 'id',
    schemaId: 'schemaId',
    tag: 'tag',
    type: 'type',
    value: { primary: {}, revocation: true },
    ver: '1.0',
};
const schema: indy.Schema = { attrNames: ['name'], name: 'schemaName', id: 'id', version: '1.0', ver: '1.0' };
const ledgerRequest: indy.LedgerRequest = { identifier: '', operation: {}, protocolVersion: 1, reqId: 100 };
const response: indy.LedgerResponse = { op: '', result: { data: '' } };
const credOffer: indy.CredOffer = ({} as unknown) as indy.CredOffer;
const credRequest: indy.CredReq = ({} as unknown) as indy.CredReq;
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

indy.createWallet(walletConfig, walletCredentials);
indy.openWallet(walletConfig, walletCredentials);
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
indy.submitRequest(10, ledgerRequest);
indy.parseGetNymResponse(response);
indy.buildGetSchemaRequest('myDid', 'a');
indy.parseGetSchemaResponse(response);
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
indy.parseGetCredDefResponse({ op: '', result: { data: '' } });
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
indy.setProtocolVersion(1);
indy.openPoolLedger('name', { timeout: 1000 });
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
        rev_reg_def_id: 'rev_reg_def_id',
        schema_id: 'schema_id',
        signature: 'signature',
        signature_correctness_proof: 'signature_correctness_proof',
        values: {},
    },
    credDef,
    null,
);
indy.proverGetCredential(10, 'outCredId');
indy.generateNonce();
indy.proverGetCredentialsForProofReq(10, proofReq);
indy.proverSearchCredentialsForProofReq(10, proofReq, [{}]);
indy.proverFetchCredentialsForProofReq(10, 'attr1_referent', 100);
indy.proverCloseCredentialsSearchForProofReq(10);
indy.verifierVerifyProof(
    proofReq,
    {
        proof: 'proof',
        identifiers: [{ schema_id: 'shcema_id', cred_def_id: 'cred_Def_id' }],
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

// TODO
// cache + payment
// indy.updateRevocationState(blobReaderHandle, revState, revocRegDef, revDelta, timestamp, revId)
// indy.createRevocationState(blobReaderHandle, revocRegDef, revDelta, timestamp, revId)
// indy.issuerMergeRevocationRegistryDeltas(revDelta, revocedDelta)
// indy.issuerRevokeCredential(wh, blobReaderHandle, revocRegId, revId)
// indy.issuerRotateCredentialDefStart(wh, credDefId, null)
// indy.issuerRotateCredentialDefApply()
// indy.toUnqualified(qualified))
// indy.proverDeleteCredential(wh, outCredId)
// indy.proverSearchCredentials(wh, { schema_id: schemaId })
// indy.proverFetchCredentials(sh, totalCount)
// indy.proverCloseCredentialsSearch(sh)
// indy.proverGetCredentials(wh, { schema_id: schemaId })
// indy.generateWalletKey({})
// indy.exportWallet(handle, exportConfig)
// indy.importWallet(walletConfig, walletCredentials, exportConfig)
// indy.listPools()
// indy.refreshPoolLedger(-1)
// indy.deletePoolLedgerConfig(pool.name)
// indy.closePoolLedger(poolH)
// indy.setLogger(logFn)
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
// indy.signAndSubmitRequest(pool.handle, wh, trusteeDid, req)
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
// indy.buildRevocRegDefRequest(myDid, revRegDef)
// indy.buildGetRevocRegDefRequest(myDid, revRegDefId)
// indy.parseGetRevocRegDefResponse(res)
// indy.buildRevocRegEntryRequest(myDid, revRegDefId, 'CL_ACCUM', revRegEntry)
// indy.buildGetRevocRegRequest(myDid, revRegDefId, nowSeconds + 100)
// indy.parseGetRevocRegResponse(res)
// indy.buildGetRevocRegDeltaRequest(myDid, revRegDefId, nowSeconds, nowSeconds + 100)
// indy.parseGetRevocRegDeltaResponse(res)
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
