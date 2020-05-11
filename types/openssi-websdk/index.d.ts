// Type definitions for openssi-websdk 0.0
// Project: https://github.com/IBM-Blockchain-Identity/openssi-websdk#readme
// Definitions by: Arne Rutjes <https://github.com/arner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/**
 * Constructs an Agent instance for a user
 * {string} account_url  The Agent endpoint url
 * {string} agent_name User name for Agent endpoint
 * {string} agent_password Password for Agent endpoint
 * {string} friendly_name The human readable name of the user
 * {string} log_level Logging level for Agent debugging
 */
export class Agent {
    constructor(
        account_url: string,
        agent_name: string,
        agent_password: string,
        friendly_name: string,
        log_level?: string
    );

    /**
     * Set url of Agent
     * {string} url The new URL for the Agency.
     * Returns {void}
     */
    setUrl(url: string): void;

    /**
     * Set user and password for user's Agent
     * {string} user A TI Agent identity.
     * {string} pw The password for the Agency identity.
     * Returns {void}
     */
    setUserPassword(user: string, pw: string): void;

    /**
     * Set human readable user name that is displayed in connection, credential or proof UI
     * {string} name The human readable name of the user
     * Returns {void}
     */
    setUserName(name: string): void;

    /**
     * Enable logging for the agent by setting a logging level.
     * {'trace'|'debug'|'info'|'warn'|'error'|'fatal'} log_level The desired logging level.
     * Returns {void}
     */
    setLoggingLevel(
        log_level:
        | string
        | 'trace'
        | 'debug'
        | 'info'
        | 'warn'
        | 'error'
        | 'fatal'
    ): void;

    /**
     * Get this agent's {AgentInfo}.
     * Returns {Promise<AgentInfo>} A promise that resolves with information about the agent.
     */
    getIdentity(): Promise<AgentInfo>;

    /**
     * Create a {AgentInfo} on the account.  If self_registration is disabled, you have to create an agent with
     * some password, and then change that password as the agent that was created.  This function attempts to handle
     * both self-registration and non-self-registration scenarios.
     * {string} account_admin_agent_name The admin agent on this agent's account. Only needed if create is true.
     * {string} account_admin_agent_password The admin agent's password.
     * Returns {Promise<AgentInfo>} A promise that resolves with information about the agent that was created.
     */
    createIdentity(
        account_admin_agent_name: string,
        account_admin_agent_password: string
    ): Promise<AgentInfo>;

    /**
     * Set this agent's role to TRUST_ANCHOR on the ledger, giving the agent the ability to publish schemas and
     * credential definitions, which are needed to issue credentials.
     * {string} account_admin_agent_name The admin agent on this agent's account. Only needed if create is true.
     * {string} account_admin_agent_password The admin agent's password.
     * {string} [seed] A valid trustee seed.  Allows this agent to generate the NYM transaction as the network's trustee.
     * Returns {Promise<AgentInfo>} A promise that resolves with the updated agent information.
     */
    onboardAsTrustAnchor(
        account_admin_agent_name: string,
        account_admin_agent_password: string,
        seed?: string
    ): Promise<AgentInfo>;

    /**
     * Get all listeners
     * Returns {object[]} Array of listener objects
     */
    getListeners(): any[];

    /**
     * Delete listener
     * {string} id The ID of a listener
     * Returns {object} The delete response from Agency
     */
    deleteListener(id: string): any;

    /**
     * Get all devices
     * Returns {object[]} Array of device objects
     */
    getDevices(): any[];

    /**
     * Delete device
     * {string} id The ID of a device
     * Returns {object} The delete response from Agency
     */
    deleteDevice(id: string): any;

    /**
     * Creates a {CredentialSchema}, meaning the schema is published on the ledger.
     * {string} name The name of the schema.
     * {string} version A tuple representing the schema version (1.0, 1.1.2, etc.)
     * {string[]} attributes The list of attributes credentials based on this schema must have.
     * Returns {Promise<CredentialSchema>} A promise that resolves with the new schema record.
     */
    createCredentialSchema(
        name: string,
        version: string,
        attributes: string[]
    ): Promise<CredentialSchema>;

    /**
     * Get a {CredentialSchema} record.
     * {CredentialSchemaID} id The ID of the schema
     * Returns {Promise<CredentialSchema>} A promise that resolves with the schema object, or null if not found
     */
    getCredentialSchema(id: CredentialSchemaID): Promise<CredentialSchema>;

    /**
     * Get a list of all {CredentialSchema}s published by your agent, if no parameters are specified, or a list of
     * credential schemas matching the search parameters.  You can use the `route` parameter to direct the request to
     * other agents.
     * {CredentialSchemaQueryParams} [opts] An optional filter for the schemas that are returned.
     * {QueryRoute} [route] A list of parameters used to proxy the request to other agents.
     * Returns {Promise<CredentialSchema[]>} A promise that resolves with a list of credential schemas.
     */
    getCredentialSchemas(
        opts?: CredentialSchemaQueryParams | null,
        route?: QueryRoute
    ): Promise<CredentialSchema[]>;

    /**
     * Create a {CredentialDefinition}
     * {CredentialSchemaID} schemaId The ledger ID for the schema.
     * Returns {Promise<CredentialDefinition>} The created credential definition.
     */
    createCredentialDefinition(
        schemaId: CredentialSchemaID
    ): Promise<CredentialDefinition>;

    /**
     * Get a {CredentialDefinition}.
     * {CredentialDefinitionID} id The credential definition ID.
     * Returns {Promise<CredentialDefinition>} A promise that resolves with the credential definition.
     */
    getCredentialDefinition(
        id: CredentialDefinitionID
    ): Promise<CredentialDefinition>;

    /**
     * Get a list of {CredentialDefinition}s matching the given parameters, or all of them, if no parameters are
     * given.
     * {CredentialDefinitionQueryParams} [opts] Credential definition search parameters.
     * {QueryRoute} [route] A list of parameters used to proxy the request to other agents.
     * Returns {Promise<CredentialDefinition[]>} A promise that resolves with a list of credential definitions.
     */
    getCredentialDefinitions(
        opts?: CredentialDefinitionQueryParams,
        route?: QueryRoute
    ): Promise<CredentialDefinition[]>;

    /**
     * Create a {ProofSchema}.
     * {string} name The name of the schema.
     * {string} version The version of the schema.
     * {object<ProofSchemaAttribute>} [requestedAttributes] A list of requested attributes.
     * {object<ProofSchemaPredicate>} [requestedPredicates] A list of requested predicates.
     * Returns {Promise<ProofSchema>} A promise that resolves with the created proof schema.
     */
    createProofSchema(
        name: string,
        version: string,
        requestedAttributes?: any,
        requestedPredicates?: any
    ): Promise<ProofSchema>;

    /**
     * Gets a list of {ProofSchema}s matching the query parameters, if any are given, or all proof schemas on the agent.
     * {ProofSchemaQueryParams} [opts] Query parameters.
     * Returns {Promise<ProofSchema[]>} A promise that resolves with a list of proof schemas
     */
    verifierGetProofSchemas(
        opts?: ProofSchemaQueryParams
    ): Promise<ProofSchema[]>;

    /**
     * Get a {ProofSchema}
     * {string} id The proof schema ID.
     * Returns {Promise<ProofSchema>} A promise that resolves with the proof schema object.
     */
    verifierGetProofSchema(id: string): Promise<ProofSchema>;

    /**
     * Gets a {Connection}.
     * {string} id The ID for a connection.
     * Returns {Promise<Connection>} A promise that resolves with the given connection, or rejects if something went wrong.
     */
    getConnection(id: string): Promise<Connection>;

    /**
     * Delete a {Connection}.
     * {string} id The ID of an existing connection.
     * Returns {Promise<void>} A promise that resolves when the connection is deleted.
     */
    deleteConnection(id: string): Promise<void>;

    /**
     * Returns a list of {Connection}s.  If query parameters are provided, only connections matching those parameters will
     * be returned.  If none are specified, all of the agent's connections will be returned.
     * {ConnectionQueryParams} [opts] Connections search parameters.
     * Returns {Promise<Connection[]>} A list of all connections or only those matching the query parameters.
     */
    getConnections(opts?: ConnectionQueryParams): Promise<Connection[]>;

    /**
     * Create a {Connection}.  If recipient information is provided, the agent will attempt to contact the
     * recipient agent and create an inbound connection offer on that agent.  Otherwise, the connection offer is only
     * created on this agent, and the returned object must be passed to the intended recipient agent out-of-band in
     * order to establish the connection.
     * {ConnectionRecipient} [to] The recipient agent.
     * {Properties} [properties] Optional metadata to add to the connection offer.
     * Returns {Promise<Connection>} The connection offer, or the active {Connection} if one is already established.
     */
    createConnection(
        to?: ConnectionRecipient | null,
        properties?: Properties
    ): Promise<Connection>;

    /**
     * Accept a connection offer.  If a connection id is passed, that connection will be updated from state
     * `inbound_offer` to `connected` on this agent.  If a connection offer object from another agent is passed, the
     * connection will be created and set to the `connected` state on this agent.
     * {string|Connection} connection The ID for an existing connection, or an out-of-band connection offer.
     * {Properties} [properties] Optional metadata to add to the connection offer.
     * Returns {Promise<Connection>} The updated connection information.
     */
    acceptConnection(
        connection: string | Connection,
        properties?: Properties
    ): Promise<Connection>;

    /**
     * Waits for a {Connection} to enter the 'connected' or 'rejected'.
     * {string} id The connection ID.
     * {number} [retries] The number of times we should check the status of the connection before giving up.
     * {number} [retry_interval] The number of milliseconds to wait between each connection status check.
     * Returns {Promise<Connection>} The accepted {Connection}.
     */
    waitForConnection(
        id: string,
        retries?: number,
        retry_interval?: number
    ): Promise<Connection>;

    /**
     * Get a {Credential}.
     * {string} id The ID of the credential.
     * Returns {Promise<Credential>} A promise that resolves with the credential information.
     */
    getCredential(id: string): Promise<Credential>;

    /**
     * Gets a list of all the {Credential}s on the agent that match the given search parameters, or all of the credentials
     * on the agent, if no parameters are given.
     * {CredentialQueryParams} [opts] Optional search parameters for the credentials
     * Returns {Promise<Credential[]>} A promise that resolves with a list of credentials
     */
    getCredentials(opts?: CredentialQueryParams): Promise<Credential[]>;

    /**
     * Delete a {Credential}.
     * {string} id The ID of an existing credential or credential offer.
     * Returns {Promise<void>} A promise that resolves when the credential is deleted.
     */
    deleteCredential(id: string): Promise<void>;

    /**
     * Creates a {Credential} and sends the credential request to a remote agent.
     * {RequestRecipient} to The issuer of the desired credential.
     * {SchemaIDObj} source Specifies the schema you'd like the credential to be based on.
     * {Properties} [properties] Optional metadata to add to the credential request.
     * Returns {Promise<Credential>} The created credential request.
     */
    requestCredential(
        to: RequestRecipient,
        source: SchemaIDObj,
        properties?: Properties
    ): Promise<Credential>;

    /**
     * Create a {@Credential} as an offer to the given holder.
     * {RequestRecipient} to The agent being issued a credential.
     * {CredentialDefinitionID|SchemaIDObj} source The schema or cred def the credential is based on.
     * {object} attributes The `<string>: <string>` pairs for all the fields in the credentials. The
     * list of fields comes from the schema the credential is based on.
     * {Properties} [properties] Optional metadata to add to the credential offer.
     * Returns {Promise<Credential>} A promise that resolves with the credential offer.
     */
    offerCredential(
        to: RequestRecipient,
        source: CredentialDefinitionID | SchemaIDObj,
        attributes: any,
        properties?: Properties
    ): any;

    /**
     * Updates a credential.  You'll really only use this method to accept a credential offer as a holder or fulfill a
     * credential request as an issuer.
     * Accepting a credential offer:
     * agent.updateCredential(cred_id, 'accepted')
     * Fulfilling a credential request:
     * agent.updateCredential(cred_id, 'outbound_offer', {
     *     first_name: 'John',
     *     last_name: 'Doe'
     * }
     * {string} id The credential ID on the agent.
     * {CredentialState} state The updated state of the credential.
     * {object} [attributes] The filled out information for the credential.  Only required when changing the state
     * to 'outbound_offer'.
     * Returns {Promise<Credential>} A promise that resolves with the updated credential data.
     */
    updateCredential(
        id: string,
        state: CredentialState,
        attributes?: Promise<Credential>
    ): any;

    /**
     * Waits for a given {Credential} to enter the 'issued' or 'rejected' states.
     * {string} id The ID of a credential.
     * {number} [retries] The number of times we should check the status of the credential before giving up.
     * {number} [retry_interval] The amount of time, in milliseconds, to wait between checks.
     * Returns {Promise<Credential>} A promise that resolves with the finished credential.
     */
    waitForCredential(
        id: string,
        retries?: number,
        retry_interval?: number
    ): Promise<Credential>;

    /**
     * Get the information for a {Verification}.
     * {string} id The ID of the verification.
     * Returns {Promise<Verification>} A promise that resolves with the verification information.
     */
    getVerification(id: string): Promise<Verification>;

    /**
     * Get a list of all the {Verification}s on the agent, or a subset of verifications that match the search
     * parameters.
     * {VerificationQueryParams} [opts] Search parameters.
     * Returns {Promise<Verification[]>} A promise that resolves with a list of matching verifications.
     */
    getVerifications(opts?: VerificationQueryParams): Promise<Verification[]>;

    /**
     * Delete a {Verification}.
     * {string} id The ID of the verification.
     * Returns {Promise<void>} A promise the resolves when the verification is deleted.
     */
    deleteVerification(id: string): Promise<void>;

    /**
     * Creates a {Verification} with another agent.  The initial state must be one of 'outbound_proof_request',
     * 'outbound_verification_request'.
     * {RequestRecipient} to The agent being contacted for verification.
     * {string} proof_schema_id The proof schema the verification is based on.
     * {VerificationState} state The initial state of the verification.
     * {Properties} [properties] Optional metadata to add to the verification.
     * Returns {Promise<Verification>} A promise that resolves with the created verification.
     */
    createVerification(
        to: RequestRecipient,
        proof_schema_id: string,
        state: VerificationState,
        properties?: Properties
    ): Promise<Verification>;

    /**
     * Updates a {Verification}.  A verifier accepts a `inbound_verification_request` by updating the state to
     * `outbound_proof_request`.  The prover generates a proof for a `inbound_proof_request` by updating the state to
     * `proof_generated`.  The prover submits that generated proof request by updating the state to `proof_shared`.
     * Sometimes, you have a selection
     * {string} id The verification ID.
     * {VerificationState} state The updated verification state.
     * {ProofSelection} [choices] The list of credentials you want to use for requested attributes and predicates.
     * {object<string, string>} [self_attested_attributes] The self-attested data to add to the proof.
     * Returns {Promise<Verification>} A Promise that resolves with the updated verification.
     */
    updateVerification(
        id: string,
        state: VerificationState,
        choices?: ProofSelection,
        self_attested_attributes?: any
    ): Promise<Verification>;

    /**
     * Waits for a given {Verification} to enter the `passed` or `failed` state.
     * {string} id The verification ID.
     * {number} [retries] The number of times we should check the status of the verification before giving up.
     * {number} [retry_interval] The amount of time, in milliseconds, to wait between checks.
     * Returns {Promise<Verification>} A promise that resolves with the completed verification.
     */
    waitForVerification(
        id: string,
        retries?: number,
        retry_interval?: number
    ): Promise<Verification>;

    /**
     * Call Agent REST APIs and make request
     * {string} path The REST API path
     * {object} [options] Set headers, method=GET, POST, PUT, PATCH, DELETE, UPDATE by passing in object {"headers":{...}, "method":...}
     * Returns {object} The response object
     */
    request(path: string, options?: any): any;
}

/**
 * A URL associated with a cloud agent account.
 */
export type AccountURL = string;

/**
 * The name of an agent.  Generally only useful if you also know the {AccountURL}.  Ex. admin, gov-dmv, thrift, etc.
 */
export type AgentName = string;

/**
 * The URL needed to connect to an agent.  Combines the {AgentName} and {AccountURL}.
 */
export type AgentURL = string;

/**
 * Represents an agent on a given cloud agent account.
 * {AgentName} name The name of the agent.
 * {AgentURL} url The connection url for the agent.
 * {string|null} role The role of the agent.  TRUST_ANCHORs are allowed to publish credential schemas and
 * definitions.
 * {Verkey} verkey The key for the agent.
 * {DID} did The DID for the agent.
 * {string} creation_time A datetime string for when the agent was created.
 * {number} expiration A timestamp, in milliseconds, for when the agent's password expires.
 * {object} metrics Metrics about the agent, such as incoming connections, etc.
 */
export interface AgentInfo {
    name: AgentName;
    url: AgentURL;
    role: string | null;
    verkey: Verkey;
    did: DID;
    creation_time: string;
    expiration: number;
    metrics: any;
}

/**
 * The identifier for a {CredentialSchema} on both the agent and the ledger.  If you're curious, the
 * ID is composed of the schema publisher's {DID}, a transaction type, the schema name, and the schema version.
 * Ex. "R4PbDKCjZTWFh1vBc5Zaxc:2:Thrift Account:1.0"
 */
export type CredentialSchemaID = string;

/**
 * A CredentialSchema represents a list of attributes that a credential based on the schema can contain.
 * {
 *   "attr_names": [
 *     "first_name",
 *     "last_name"
 *   ],
 *   "id": "R4PbDKCjZTWFh1vBc5Zaxc:2:Thrift Account:1.0",
 *   "name": "Thrift Account",
 *   "namever": "Thrift Account:1.0",
 *   "version": "1.0"
 * }
 * {CredentialSchemaID} id The ID of the schema.
 * {string} name The name of the schema.
 * {string} version A tuple representing the schema version (1.0, 1.1.2, etc.).
 * {string} namever The name and version joined with a ':'.
 * {string[]} attr_names The list of attributes that a credential based on the schema can have.
 */
export interface CredentialSchema {
    id: CredentialSchemaID;
    name: string;
    version: string;
    namever: string;
    attr_names: string[];
}

/**
 * An object listing [BSON query parameters]{https://docs.mongodb.com/manual/reference/operator/query/} that
 * correspond to the fields in a {CredentialSchema}.  The fields below are just examples to give you an idea;
 * there are other queries you can make.
 * {
 *     name: 'My Schema',
 *     version: { $ne: '1.0' }
 * }
 * {string} [id] The ID of the schema
 * {string} [name] The name of the schema
 */
export interface CredentialSchemaQueryParams { [key: string]: any; }

/**
 * A set of parameters that cause the agent to collect a set of responses from other agents that it has connections
 * to.  It's a list of {Connection} property names and values. For example,
 * {
 *     property1: true,
 *     property2: 'prop2'
 * }
 * causes this agent to look for connections with property1=true.  It will send propagate the request to each
 * relevant connection.  The agents receiving the request will look for connections with property2=prop2 custom and
 * recursively propagate the request along those connections, etc.
 * {boolean} [trustedVerifier] Propagates the request to connections with trusted verifiers.
 * {boolean} [trustedIssuer] Propagates the request to connections with trusted issuers.
 */
export interface QueryRoute {
    [key: string]: any;
}

/**
 * {DID} did The pairwise DID for the remote agent.
 * {AgentName} name The agent name for the remote agent.
 * {object} results The list of {CredentialSchemas} or {CredentialDefinitions} found by the
 * remote agent.
 * {number} results.count The number of results found by the remote agent.
 * {CredentialSchema[]|CredentialDefinition[]}
 */
export interface AgentResponse {
    did: DID;
    name: AgentName;
    results: CredentialSchema[] | CredentialDefinition[];
}

/**
 * {AgentResponse[]} agents A list of agent responses containing
 */
export interface RouteResponse {
    agents: AgentResponse[];
}

/**
 * Resolves to a published credential definition on the ledger.  Consists of a DID, a transaction type (3 means a
 * credential definition in Hyperledger Indy), CL, a transaction number, and a tag.
 * Ex. 'JeU3p99QCt3p5tjZJyPwUK:3:CL:357:TAG1'
 */
export type CredentialDefinitionID = string;

/**
 * When an issuer wants to issue credentials based on a certain schema, they have to publish a credential definition
 * on the ledger for that schema.
 * {object} data The cryptographic content of the credential definition. Good at filling up logs.
 * {CredentialDefinitionID} id The ID of the credential definition on both the agent and the ledger.
 * {CredentialSchemaID} schema_id The credential schema this credential definition pertains to.
 * {string} schema_name The name of the credential schema.
 * {string} version The version of the credential schema.
 */
export interface CredentialDefinition {
    data: any;
    id: CredentialDefinitionID;
    schema_id: CredentialSchemaID;
    schema_name: string;
    version: string;
}

/**
 * An object listing [BSON query parameters]{https://docs.mongodb.com/manual/reference/operator/query/} that
 * correspond to the fields in a {CredentialDefinition}.  The fields below are just examples to give you an idea;
 * there are other queries you can make.
 * {
 *     schema_name: 'My Schema',
 *     version: { $ne: '1.0' }
 * }
 * {string} [id] The ID of the credential definition
 * {string} [schema_name] The name of the schema for the credential definition
 */
export interface CredentialDefinitionQueryParams { [key: string]: any; }

/**
 * Criteria which must be true pertaining to an attribute or predicate in a {ProofSchema}.  There is a logical
 * AND between keys inside a Restriction and a logical OR between the Restrictions in a list. For example, consider
 * the following restrictions field:
 * 'restrictions': [{'schema_name': 'myschema', 'schema_version': '1.0'}, {'cred_def_id': 'XXX'}]
 * This can be read as (schema_name == 'myschema' AND schema_version == '1.0') OR cred_def_id == 'XXX'.  The list of
 * possible restrictions:
 * {CredentialSchemaID} [schema_id] The DID of a credential schema.
 * {DID} [schema_issuer_did] The DID of the schema issuer.
 * {string} [schema_name] The name of the schema.
 * {string} [schema_version] The value of the schema.
 * {DID} [issuer_did] The DID of the issuer of the credential.
 * {CredentialDefinitionID} [cred_def_id] The credential definition ID.
 */
export interface Restriction {
    schema_id?: CredentialSchemaID;
    schema_issuer_did?: DID;
    schema_name?: string;
    schema_version?: string;
    issuer_did?: DID;
    cred_def_id?: CredentialDefinitionID;
}

/**
 * A requirement in a {ProofSchema} that asks a prover not to provide a value for something, but to prove
 * something _about_ a value, such as a value being greater than some limit.  You could, for example, ask someone to
 * prove that they're older than 21 with the following predicate:
 * {
 *   name: 'age',
 *   p_type: '>',
 *   p_value: 21,
 *  restrictions: [{'cred_def_id': '<credential_definition_id>'}]
 * }
 * {string} name The name of the attribute.
 * {string} p_type The type of the predicate.  Defines an operation like ">" to check the attribute value.
 * {number} p_value The value of the predicate.  Define the boundary for the operation.
 * {Restriction[]} restrictions A list of {Restriction}s to limit what credentials can supply the
 * attribute for the predicate.
 */
export interface ProofSchemaPredicate {
    name: string;
    p_type: string;
    p_value: number;
    restrictions: Restriction[];
}

/**
 * Describes a request attribute in a proof request.  If you don't specify any restrictions on the attribute, then
 * the attribute is 'self attested', meaning the prover can put whatever they want in for that field.
 * {Restriction[]} [restrictions] A list of {Restriction}s on to limit what credentials can supply
 * the attribute.
 */
export interface ProofSchemaAttribute {
    restrictions?: Restriction[];
}

/**
 * An object describing the contents of a proof request, which is basically a prepared query for a list of verified
 * or self attested attributes and predicates from a prover. An example:
 * {
 *   'name': 'proof-schema1',
 *   'version': '1.0',
 *   'requested_attributes': {
 *     'attr1_referent': {
 *       'name': 'attr1',
 *       'restrictions': [{'schema_name': 'cred_schema1', 'schema_version': '1.0'}]
 *     },
 *     'attr2_referent': {
 *       'name': 'attr2',
 *       'restrictions': [{'cred_def_id': '<credential_definition_id>'}]
 *     },
 *     'self_attested_attr1_referent': {
 *       'name': 'self-attested-attr1'
 *     },
 *   },
 *   'requested_predicates': {
 *     'predicate1_referent': {
 *       'name': 'attr3',
 *       'p_type': '>',
 *       'p_value': 5,
 *       'restrictions': [{'cred_def_id': '<credential_definition_id>'}]
 *     }
 *   }
 * }
 * {string} id The ID of the proof schema.
 * {string} name The name of the proof schema. Ex. "proof_of_employment".
 * {string} version The version of the proof schema. Ex. "1.0", "1.0.0", etc.
 * {object<ProofSchemaAttribute>} requested_attributes A list of attributes to be provided by credentials
 * {object<ProofSchemaPredicate>} requested_predicates A list of predicates to be included in the proof
 */
export interface ProofSchema {
    id: string;
    name: string;
    version: string;
    requested_attributes: any;
    requested_predicates?: any;
}

/**
 * An object listing [BSON query parameters]{https://docs.mongodb.com/manual/reference/operator/query/} that
 * correspond to the fields in a {ProofSchema}.  The fields below are just examples to give you an idea;
 * there are other queries you can make.
 * {
 *     name: 'My Schema',
 *     version: { $ne: '1.0' }
 * }
 * {string} [name] The name of the proof schema
 * {string} [version] The version of the proof schema
 */
export interface ProofSchemaQueryParams { [key: string]: any; }

/**
 * A unique identifier use in communication on the Hyperledger Indy ledger.  They represent users, agents, issuers, verifiers, etc.
 */
export type DID = string;

/**
 * A publicly shared key associated with a DID.  The DID owner proves ownership of the DID using the private/signing key associated with this verkey.
 */
export type Verkey = string;

/**
 * A string representing image data.  Generally used to store icons for decorating {Connection}s, {Credential}s,
 * and {Verification}s.
 * Ex. 'data:image/png;base64,iVBOR....'
 */
export type ImageData = string;

/**
 * Information about an agent involved in a {Connection}.
 * {AgentName} name The agent name.
 * {string} role The agent's role on the ledger.  Can be 'TRUST_ANCHOR' or 'NONE'.
 * {AgentURL} url The agent url.
 * {object} pairwise Identifying information dedicated to this specific connection.
 * {DID} pairwise.did The pairwise connection DID.
 * {Verkey} pairwise.verkey The pairwise verkey.
 * {object} Identifying information that has been published to the ledger.
 * {DID} public.did A DID.
 * {Verkey} public.verkey A verkey.
 */
export interface ConnectionAgent {
    name: AgentName;
    role: string;
    url: AgentURL;
    pairwise: {
        did: DID;
        verkey: Verkey;
    };
    public: {
        did: DID;
        verkey: Verkey;
    };
}

/**
 * Represents the state of a {Connection}.
 */
export type ConnectionState =
    | 'inbound_offer'
    | 'outbound_offer'
    | 'connected'
    | 'rejected';

/**
 * Connections represent a channel for communication between two agents.
 * {string} id A unique identifier for this connection.
 * {object} properties Properties of the connection.  Generally used to sort or decorate connections.
 * {ImageData} [properties.icon] An icon to display when someone views the connection.
 * {string} [properties.name] A friendly name to display when someone views the connection.
 * {string} role This agent's role in the connection.  Can be 'offerer' or 'offeree'.
 * {ConnectionState} state The state of the connection.
 * {ConnectionAgent} [local] Information about this agent's role in the connection. Only present if this
 * agent has accepted or initiated the connection.
 * {ConnectionAgent} [remote] Information about the other agent's role in this connection. Only present if
 * that agent accepted or initiated the connection.
 */
export interface Connection {
    id: string;
    properties: Properties;
    role: string;
    state: ConnectionState;
    local?: ConnectionAgent;
    remote?: ConnectionAgent;
}

/**
 * An object listing [BSON query parameters]{https://docs.mongodb.com/manual/reference/operator/query/} that
 * correspond to the fields in a {Connection} object. The keys listed below are simply examples to give you
 * the idea; there are others.
 * {ConnectionState} [state] The connection state we're searching for.
 * {AgentName} [remote.name] The name of the remote agent to match against.
 * {DID} [remote.pairwise.did] The remote pairwise DID to match.
 * {
 *     state: { $ne: 'inbound_offer' },
 *     'remote.pairwise.did': 'A4DXofjbeC97WZAHU5MVGK'
 * }
 */
export interface ConnectionQueryParams { [key: string]: any; }

/**
 * Describes the recipient of a {Connection}.  You must specify either the name of an agent in your agent's
 * same account, or the full {AgentURL} to a remote agent.
 * {AgentURL} [url] The full {AgentURL} for the other agent.
 * {AgentName} [name] The name of an agent in your account.
 */
export interface ConnectionRecipient {
    url?: AgentURL;
    name?: AgentName;
}

/**
 * {Connection}s, {Credential}s, and {Verification}s can all be extended by adding additional
 * properties during their creation.  For example, setting an icon in the properties of a connection could cause
 * that connection to be displayed with an icon when a user views it in their agent UI.  The properties listed below
 * are merely examples to demonstrate what these properties could be used for.
 * {ImageData} [properties.icon] An image to display when someone views the connection.
 * {string} [properties.name] A friendly name to display for the issuer when the connection is viewed.
 * {string} [properties.time] A timestamp used to sort the connection in a list.
 */
export interface Properties {
    [key: string]: string;
}

/**
 * Represents the state of a {Credential} on the agent.  The state of a credential changes depending on whether
 * a holder or an issuer is viewing the credential.  For example, if a holder creates the credential request, they will
 * see the state of the credential as 'outbound_request', while the issuer will see 'inbound_request'.
 */
export type CredentialState =
    | 'outbound_request'
    | 'inbound_request'
    | 'outbound_offer'
    | 'inbound_offer'
    | 'accepted'
    | 'rejected'
    | 'issued'
    | 'stored';

/**
 * A Credential starts out as either an outbound_request, if created by a holder, or an outbound_offer, if created by
 * an issuer. The state transitions for a credential as implemented by cloud agent are as follows:
 * outbound_request (holder) ->
 * inbound_request (issuer) ->
 * outbound_offer (issuer) ->
 * inbound_offer (holder) ->
 * accepted OR rejected (holder) ->
 * issued (issuer) ->
 * stored (holder)
 * {object} [offer] List the data contained in the credential.  Only present once the credential has reached the offer state.
 * {object} offer.attributes Lists the `<string>: <string>` pairs for all the fields in the credentials. The
 * list of fields comes from the schema the credential is based on.
 * {string} offer.data The full JSON data for the credential encoded as a string.
 * {string} schema_name The schema that the credential is based on. Ex. "drivers_license"
 * {string} schema_version The version of the schema. Ex. "1.0"
 * {CredentialState} state The current state of the credential.  This is the field you must update to turn credential offers
 * into stored credentials.
 * {string} id The identifier for the credential on the agent.
 * {object} properties Extra metadata about the credential.  Used for things like sorting and decorating
 * credentials.
 * {string} [properties.time] We use a `time` property to sort credentials based on when they were offered.
 * {string} [properties.name] An optional friendly name to display when someone looks at the credential offer.
 * {ImageData} [properties.icon] An optional icon to display when someone looks at the credential.
 * {string} role The agent's relationship to the credential.  Either 'holder' or 'issuer'.
 * {CredentialDefinitionID} credential_definition_id The credential definition for this credential.
 * {DID} issuer_did The Issuer's DID.
 * {object} to Describes the recipient of the initial credential request (holder initiated) or offer
 * (issuer initiated).  Has either `url` or `name`.
 * {AgentName} [to.name] The {AgentName} of the holder.
 * {AgentURL} [to.url] The {AgentURL} of the holder.
 */
export interface Credential {
    offer?: {
        attributes: {[key: string]: string};
        data: string;
    };
    schema_name: string;
    schema_version: string;
    state: CredentialState;
    id: string;
    properties: Properties;
    role: string;
    credential_definition_id: CredentialDefinitionID;
    issuer_did: DID;
    to: {
        name?: AgentName;
        url?: AgentURL;
    };
}

/**
 * An object listing [BSON query parameters]{https://docs.mongodb.com/manual/reference/operator/query/} that
 * correspond to the fields in a {Credential} object. The keys listed below are simply examples to give you
 * the idea; there are others.
 * {CredentialState} [state] The connection state we're searching for.
 * {AgentName} ['to.name'] The name of the remote agent .
 * {CredentialDefinitionID} [credential_definition_id] The credential definition.
 * {
 *     state: 'inbound_offer',
 *     credential_definition_id: 'JeU3p99QCt3p5tjZJyPwUK:3:CL:357:TAG1',
 *     'to.name': 'test-holder'
 * }
 */
export interface CredentialQueryParams { [key: string]: any; }

/**
 * Contains fields necessary to lookup a {CredentialSchema}.
 * {string} schema_name The name of the schema. Ex. "drivers_license", "Driver's License", etc.
 * {string} schema_version The version of the schema. Ex. "1.0", "0.0.1", etc.
 */
export interface SchemaIDObj {
    schema_name: string;
    schema_version: string;
}

/**
 * Describes the recipient of a {Verification} or a {Credential}.  It mus specify either `name` or `did` of an agent
 * that you have a {Connection} with.  The {AgentName} can only be used to refer to agents that are in
 * the same account as this agent.
 * {DID} [did] The `remote.pairwise.did` of other agent in your shared {Connection}.
 * {AgentName} [name] The name of an agent in your account.
 */
export interface RequestRecipient {
    did?: DID;
    name?: AgentName;
}

/**
 * Represents the state of a {Verification} on the agent.  The state of a verification changes depending on
 * whether a prover or a verifier is viewing the verification.  For example, if a prover creates a verification request,
 * they will see the state of the verification as 'outbound_verification_request', while the issuer will see
 * 'inbound_verification_request'.
 */
export type VerificationState =
    | 'outbound_verification_request'
    | 'inbound_verification_request'
    | 'outbound_proof_request'
    | 'inbound_proof_request'
    | 'proof_generated'
    | 'proof_shared'
    | 'passed'
    | 'failed';

/**
 * Represents all verification and proof requests between a prover and a verifier.  If created by the prover, the
 * verifications initial state should be "outbound_verification_request".  If created by a verifier, the initial state
 * should be "outbound_proof_request" by the verifier. The state transitions for a verification from initial request
 * to a verified or unverified proof are as follows :
 * outbound_verification_request (prover) ->
 * inbound_verification_request (verifier) ->
 * outbound_proof_request (verifier) ->
 * inbound_proof_request (prover) ->
 * proof_generated (prover) ->
 * proof_shared (prover) ->
 * proof_shared (verifier) ->
 * passed OR failed (verifier) ->
 * passed OR failed (prover)
 * {VerificationState} state The current state of the verification.
 * {boolean} [allow_proof_request_override] If true, the prover can supply their own updated proof_request
 * in the proof_generated phase. Can only be set by the verifier in the outbound_proof_request phase.
 * {Choices} [choices] The list of options for generating a proof from the credentials in an agent's wallet.
 * Only appears in the `outbound_proof_request` phase.
 * {ProofSchema} proof_request The proof schema the verification is based on.
 */
export interface Verification {
    id: string;
    state: VerificationState;
    allow_proof_request_override?: boolean;
    choices?: Choices;
    proof_request: ProofSchema;
}

/**
 *  An object listing [BSON query parameters]{https://docs.mongodb.com/manual/reference/operator/query/} that
 * correspond to the fields in a {Verification} object. The keys listed below are simply examples to give you
 * the idea; there are others.
 * {string} ['to.name'] The party that the initial verification was sent to in the outbound_verification_request
 * or outbound_proof_request phase.
 * {VerificationState} [state] The state of the verifications.
 * {
 *     state: 'inbound_offer',
 *     'to.name': { $ne: 'test-holder'}
 * }
 */
export interface VerificationQueryParams { [key: string]: any; }

/**
 * Describes data that could be used to fill out a requested attribute in a proof request.  It's data describes
 * information from a single credential in the agent's wallet.
 * {string} predicate The predicate calculated from the corresponding {Credential}.
 * {CredentialDefinitionID} cred_def_id The credential definition the corresponding credential was issued under.
 * {CredentialSchemaID} schema_id The schema that the credential is based on.
 * {
 * 'predicate': 'average GE 10',
 * 'cred_def_id': 'Up36FJDNu3YGKvhTJAiZQU:3:CL:31:TAG1',
 * 'schema_id': 'EDEuxdBQ3zb6GzWKCNcyW4:2:Transcript:1.0'
 * }
 */
export interface PredicateChoice {
    predicate: string;
    cred_def_id: CredentialDefinitionID;
    schema_id: CredentialSchemaID;
}

/**
 * Describes data that could be used to fill out a requested attribute in a proof request.  It's data describes
 * information from a single credential in the agent's wallet.
 * {string} name The name of the attribute.
 * {string} value The value of the attribute.
 * {CredentialDefinitionID} cred_def_id The credential definition the corresponding credential was issued under.
 * {CredentialSchemaID} schema_id The schema that the credential is based on.
 * {
 * 'name': 'first_name',
 * 'value': 'Alice',
 * 'cred_def_id': 'Up36FJDNu3YGKvhTJAiZQU:3:CL:31:TAG1',
 * 'schema_id': 'EDEuxdBQ_3zb6GzWKCNcyW4:2:Transcript:1.0'
 * }
 */
export interface AttributeChoice {
    name: string;
    value: string;
    cred_def_id: CredentialDefinitionID;
    schema_id: CredentialSchemaID;
}

/**
 * Describes a list of {AttributeChoice}s for filling out the requested attributes and predicates from a
 * {Verification}'s {ProofSchema}.  When generating the proof, the choices can be condensed into a
 * {ProofSelection} and passed to the API to control what credentials are used to generate the proof.
 * {object} attributes A list of requested attributes.  The next field is an example.
 * {object<string,AttributeChoice>} [attr1] A list of {AttributeChoice}s.
 * {object} predicates A list of requested predicates. The next field is an example.
 * {object<string,PredicateChoice>} [pred1] A list of {PredicateChoice}s.
 * {
 * 'choices': {
 * 'attributes': {
 * '<attr1>': {
 * '<attr1_choice1>': {
 * 'name': 'first_name',
 * 'value': 'Alice',
 * 'cred_def_id': 'Up36FJDNu3YGKvhTJAiZQU:3:CL:31:TAG1',
 * 'schema_id': 'EDEuxdBQ_3zb6GzWKCNcyW4:2:Transcript:1.0'
 * },
 * '<attr1_choice2>': {
 * 'name': 'first_name',
 * 'value': 'Alice',
 * 'cred_def_id': 'Up36FJDNu3YGKvhTJAiZQU:3:CL:31:TAG1',
 * 'schema_id': 'EDEuxdBQ3zb6GzWKCNcyW4:2:Transcript:1.0'
 * }
 * }
 * },
 * 'predicates': {
 * '<pred1>': {
 * '<pred1_choice1>': {
 * 'predicate': 'average GE 10',
 * 'cred_def_id': 'Up36FJDNu3YGKvhTJAiZQU:3:CL:31:TAG1',
 * 'schema_id': 'EDEuxdBQ3zb6GzWKCNcyW4:2:Transcript:1.0'
 * }
 * }
 * }
 * }
 * }
 */
export interface Choices {
    attributes: any;
    attr1: any;
    predicates: any;
    pred1: any;
}

/**
 * A list of {AttributeChoice}s and {PredicateChoice}s that should be used in the `generate_proof` phase
 * of a {Verification}.
 * {object<string,AttributeChoice>} attributes A list of requested attributes and their selected credential attributes.
 * {object<string,PredicateChoice>} predicates A list of requested predicates and their selected predicates.
 *  {
 * "attributes": {
 * "<attr1>": "<attr1_choice2>"
 * },
 * "predicates": {
 * "<pred1>": "<pred1_choice1>"
 * }
 * }
 */
export interface ProofSelection {
    attributes: {
        [key: string]: AttributeChoice;
    };
    predicates: {
        [key: string]: PredicateChoice;
    };
}

/**
 * Describes a method for establishing a connection with another agent.  Out-of-band connections require a user to
 * post a connection offer to their agent to establish a connection.  In-band connections only require a user to
 * accept a connection offer that was automatically delivered to their agent.  Invitations are like out-of-band
 * connections in that they require the user to post the invitation to their agent, but invitations can be accepted
 * by multiple users.
 */
export type ConnectionMethod = 'out_of_band' | 'in_band' | 'invitation';
