// Type definitions for watson-developer-cloud 2.40
// Project: https://github.com/watson-developer-cloud/node-sdk#readme
// Definitions by: Roy Wallace <https://github.com/waldo000000>
//                 Gintautas Miselis <https://github.com/Naktibalda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export class AlchemyDataNewsV1 {
    constructor(options: any);

    getNews(params: any, callback: any): any;

    static URL: string;
}

export class AlchemyLanguageV1 {
    constructor(options: any);

    authors(_params: any, callback: any): any;

    category(_params: any, callback: any): any;

    combined(_params: any, callback: any): any;

    concepts(_params: any, callback: any): any;

    dates(_params: any, callback: any): any;

    emotion(params: any, callback: any): any;

    entities(_params: any, callback: any): any;

    feeds(_params: any, callback: any): any;

    keywords(_params: any, callback: any): any;

    language(_params: any, callback: any): any;

    microformats(_params: any, callback: any): any;

    publicationDate(_params: any, callback: any): any;

    relations(_params: any, callback: any): any;

    sentiment(params: any, callback: any): any;

    taxonomy(_params: any, callback: any): any;

    text(params: any, callback: any): any;

    title(_params: any, callback: any): any;

    typedRelations(_params: any, callback: any): any;

    static URL: string;
}

export class AuthorizationV1 {
    constructor(options: any);

    getToken(params: any, callback: any): any;

    static URL: string;
}

export class ConversationV1 {
    constructor(options: any);

    createCounterExample(params: any, callback: any): any;

    createDialogNode(params: any, callback: any): any;

    createEntity(params: any, callback: any): any;

    createExample(params: any, callback: any): any;

    createIntent(params: any, callback: any): any;

    createSynonym(params: any, callback: any): any;

    createValue(params: any, callback: any): any;

    createWorkspace(params: any, callback: any): any;

    deleteCounterExample(params: any, callback: any): any;

    deleteDialogNode(params: any, callback: any): any;

    deleteEntity(params: any, callback: any): any;

    deleteExample(params: any, callback: any): any;

    deleteIntent(params: any, callback: any): any;

    deleteSynonym(params: any, callback: any): any;

    deleteValue(params: any, callback: any): any;

    deleteWorkspace(params: any, callback: any): any;

    getCounterExample(params: any, callback: any): any;

    getCounterExamples(params: any, callback: any): any;

    getDialogNode(params: any, callback: any): any;

    getDialogNodes(params: any, callback: any): any;

    getEntities(params: any, callback: any): any;

    getEntity(params: any, callback: any): any;

    getExample(params: any, callback: any): any;

    getExamples(params: any, callback: any): any;

    getIntent(params: any, callback: any): any;

    getIntents(params: any, callback: any): any;

    getLogs(params: any, callback: any): any;

    getSynonym(params: any, callback: any): any;

    getSynonyms(params: any, callback: any): any;

    getValue(params: any, callback: any): any;

    getValues(params: any, callback: any): any;

    getWorkspace(params: any, callback: any): any;

    listWorkspaces(params: any, callback: any): any;

    message(params: any, callback: any): any;

    updateCounterExample(params: any, callback: any): any;

    updateDialogNode(params: any, callback: any): any;

    updateEntity(params: any, callback: any): any;

    updateExample(params: any, callback: any): any;

    updateIntent(params: any, callback: any): any;

    updateSynonym(params: any, callback: any): any;

    updateValue(params: any, callback: any): any;

    updateWorkspace(params: any, callback: any): any;

    workspaceStatus(params: any, callback: any): any;

    static URL: string;

    static VERSION_DATE_2016_07_11: string;

    static VERSION_DATE_2016_09_20: string;

    static VERSION_DATE_2017_02_03: string;

    static VERSION_DATE_2017_04_21: string;

    static VERSION_DATE_2017_05_26: string;
}

export class ConversationV1Experimental {
    constructor(options: any);

    message(params: any, callback: any): any;

    static URL: string;
}

export class DialogV1 {
    constructor(options: any);

    conversation(params: any, callback: any): any;

    createDialog(params: any, callback: any): any;

    deleteDialog(params: any, callback: any): any;

    getContent(params: any, callback: any): any;

    getConversation(params: any, callback: any): any;

    getDialogs(params: any, callback: any): any;

    getProfile(params: any, callback: any): any;

    updateContent(params: any, callback: any): any;

    updateDialog(params: any, callback: any): any;

    updateProfile(params: any, callback: any): any;

    static URL: string;
}

export class DiscoveryV1 {
    constructor(options: any);

    addDocument(params: any, callback: any): any;

    addJsonDocument(params: any, callback: any): any;

    createCollection(params: any, callback: any): any;

    createConfiguration(params: any, callback: any): any;

    createEnvironment(params: any, callback: any): any;

    deleteCollection(params: any, callback: any): any;

    deleteDocument(params: any, callback: any): any;

    deleteEnvironment(params: any, callback: any): any;

    getCollection(params: any, callback: any): any;

    getCollectionFields(params: any, callback: any): any;

    getCollections(params: any, callback: any): any;

    getConfiguration(params: any, callback: any): any;

    getConfigurations(params: any, callback: any): any;

    getEnvironment(params: any, callback: any): any;

    getEnvironments(params: any, callback: any): any;

    query(params: any, callback: any): any;

    updateCollection(params: any, callback: any): any;

    updateConfiguration(params: any, callback: any): any;

    updateDocument(params: any, callback: any): any;

    updateJsonDocument(params: any, callback: any): any;

    updateEnvironment(params: any, callback: any): any;

    static URL: string;

    static VERSION_DATE_2016_12_15: string;

    static VERSION_DATE_2017_04_27: string;

    static VERSION_DATE_2017_08_01: string;
}

export class DiscoveryV1Experimental {
    constructor(options: any);

    getCollection(params: any, collectionId: any, callback: any): any;

    getCollections(params: any, callback: any): any;

    getEnvironment(params: any, callback: any): any;

    getEnvironments(params: any, callback: any): any;

    query(params: any, callback: any): any;

    static URL: string;

    static VERSION_DATE_2016_07_11: string;
}

export class DocumentConversionV1 {
    constructor(options: any);

    addDocumentToBatch(): void;

    convert(params: any, callback: any): any;

    createBatch(): void;

    createJob(): void;

    getBatch(): void;

    getBatchDocument(): void;

    getBatchDocuments(): void;

    getBatches(): void;

    getDocument(): void;

    getDocuments(): void;

    getJob(): void;

    getJobLog(): void;

    getJobs(): void;

    getOutput(): void;

    getOutputs(): void;

    index(params: any, callback: any): any;

    updateBatch(): void;

    uploadDocument(): void;

    static URL: string;
}

export class LanguageTranslationV2 {
    constructor(options: any);

    createModel(params: any, callback: any): any;

    deleteModel(params: any, callback: any): any;

    getIdentifiableLanguages(params: any, callback: any): any;

    getModel(params: any, callback: any): any;

    getModels(params: any, callback: any): any;

    identify(params: any, callback: any): any;

    translate(params: any, callback: any): any;

    static URL: string;
}

export class LanguageTranslatorV2 {
    constructor(options: any);

    createModel(params: any, callback: any): any;

    deleteModel(params: any, callback: any): any;

    getIdentifiableLanguages(params: any, callback: any): any;

    getModel(params: any, callback: any): any;

    getModels(params: any, callback: any): any;

    identify(params: any, callback: any): any;

    translate(params: any, callback: any): any;

    static URL: string;
}

export class NaturalLanguageClassifierV1 {
    constructor(options: any);

    classify(params: any, callback: any): any;

    create(params: any, callback: any): any;

    list(params: any, callback: any): any;

    remove(params: any, callback: any): any;

    status(params: any, callback: any): any;

    static URL: string;
}

export class NaturalLanguageUnderstandingV1 {
    constructor(options: any);

    analyze(params: any, callback: any): any;

    deleteModel(params: any, callback: any): any;

    getCredentialsFromBluemix(name: any): any;

    listModels(params: any, callback: any): any;

    static URL: string;

    static VERSION_DATE_2016_01_23: string;

    static VERSION_DATE_2017_02_27: string;
}

export class PersonalityInsightsV2 {
    constructor(options: any);

    profile(params: any, callback: any): any;

    static URL: string;
}

export class PersonalityInsightsV3 {
    constructor(options: any);

    profile(_params: any, callback: any): any;

    static URL: string;
}

export class RetrieveAndRankV1 {
    constructor(options: any);

    createCluster(params: any, callback: any): any;

    createCollection(params: any, callback: any): any;

    createRanker(params: any, callback: any): any;

    createSolrClient(params: any): any;

    deleteCluster(params: any, callback: any): any;

    deleteCollection(params: any, callback: any): any;

    deleteConfig(params: any, callback: any): any;

    deleteRanker(params: any, callback: any): any;

    getClusterStats(params: any, callback: any): any;

    getConfig(params: any, callback: any): any;

    getResizeStatus(params: any, callback: any): any;

    listClusters(params: any, callback: any): any;

    listCollections(params: any, callback: any): any;

    listConfigs(params: any, callback: any): any;

    listRankers(params: any, callback: any): any;

    pollCluster(params: any, callback: any): any;

    rank(params: any, callback: any): any;

    rankerStatus(params: any, callback: any): any;

    resizeCluster(params: any, callback: any): any;

    uploadConfig(params: any, callback: any): any;

    static URL: string;
}

export class SpeechToTextV1 {
    constructor(options: any);

    addCorpus(params: any, callback: any): any;

    addWord(params: any, callback: any): any;

    addWords(params: any, callback: any): any;

    createCustomization(params: any, callback: any): any;

    createRecognitionJob(params: any, callback: any): any;

    createRecognizeStream(params: any): any;

    createSession(params: any, callback: any): any;

    deleteCorpus(params: any, callback: any): any;

    deleteCustomization(params: any, callback: any): any;

    deleteRecognitionJob(params: any, callback: any): any;

    deleteSession(params: any, callback: any): any;

    deleteWord(params: any, callback: any): any;

    getCorpora(params: any, callback: any): any;

    getCorpus(params: any, callback: any): any;

    getCustomization(params: any, callback: any): any;

    getCustomizations(params: any, callback: any): any;

    getModel(params: any, callback: any): any;

    getModels(params: any, callback: any): any;

    getRecognitionJob(params: any, callback: any): any;

    getRecognitionJobs(params: any, callback: any): any;

    getRecognizeStatus(params: any, callback: any): any;

    getWord(params: any, callback: any): any;

    getWords(params: any, callback: any): any;

    observeResult(params: any, ...args: any[]): any;

    recognize(params: any, callback: any): any;

    recognizeLive(params: any, ...args: any[]): any;

    registerCallback(params: any, callback: (any)): any;

    resetCustomization(params: any, callback: any): any;

    trainCustomization(params: any, callback: any): any;

    whenCorporaAnalyzed(params: any, callback: any): any;

    whenCustomizationReady(params: any, callback: any): any;

    static ERR_NO_CORPORA: string;

    static ERR_TIMEOUT: string;

    static URL: string;
}

export class TextToSpeechV1 {
    constructor(options: any);

    addWord(params: any, callback: any): any;

    addWords(params: any, callback: any): any;

    createCustomization(params: any, callback: any): any;

    deleteCustomization(params: any, callback: any): any;

    deleteWord(params: any, callback: any): any;

    getCustomization(params: any, callback: any): any;

    getCustomizations(params: any, callback: any): any;

    getWord(params: any, callback: any): any;

    getWords(params: any, callback: any): any;

    pronunciation(params: any, callback: any): any;

    synthesize(params: any, callback: any): any;

    updateCustomization(params: any, callback: any): any;

    voice(params: any, callback: any): any;

    voices(params: any, callback: any): any;

    static URL: string;
}

export class ToneAnalyzerV3 {
    constructor(options: any);

    tone(params: any, callback: any): any;

    tone_chat(params: any, callback: any): any;

    static URL: string;
}

export class TradeoffAnalyticsV1 {
    constructor(options: any);

    dilemmas(params: any, callback: any): any;

    events(params: any, callback: any): any;

    static URL: string;
}

export class VisualRecognitionV3 {
    constructor(options: any);

    addImage(params: any, callback: any): any;

    classify(params: any, callback: any): any;

    createClassifier(params: any, callback: any): any;

    createCollection(params: any, callback: any): any;

    deleteClassifier(params: any, callback: any): any;

    deleteCollection(params: any, callback: any): any;

    deleteImage(params: any, callback: any): any;

    deleteImageMetadata(params: any, callback: any): any;

    detectFaces(params: any, callback: any): any;

    findSimilar(params: any, callback: any): any;

    getClassifier(params: any, callback: any): any;

    getCollection(params: any, callback: any): any;

    getCredentialsFromBluemix(): any;

    getCredentialsFromEnvironment(name: any): any;

    getImage(params: any, callback: any): any;

    getImageMetadata(params: any, callback: any): any;

    initCredentials(options: any): any;

    listClassifiers(params: any, callback: any): any;

    listCollections(params: any, callback: any): any;

    listImages(params: any, callback: any): any;

    recognizeText(params: any, callback: any): any;

    request(parameters: any, cb: any): any;

    retrainClassifier(params: any, callback: any): any;

    setImageMetadata(params: any, callback: any): any;

    static URL: string;

    static VERSION_DATE_2016_05_20: string;
}
