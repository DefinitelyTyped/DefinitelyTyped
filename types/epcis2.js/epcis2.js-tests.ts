import {
    AssociationEvent,
    BizLocation,
    BizTransactionElement,
    capture,
    cbv,
    DestinationElement,
    EPCISDocument,
    EPCISHeader,
    EPCISMasterData,
    ErrorDeclaration,
    ExtendedEvent,
    Ilmd,
    ObjectEvent,
    PersistentDisposition,
    QuantityElement,
    ReadPoint,
    SensorElement,
    SensorMetadata,
    SensorReportElement,
    setup,
    SourceElement,
    vtype,
} from "epcis2.js";

// you can override the global parameters with the setup function
setup({
    apiUrl: "https://api.evrythng.io/v2/epcis/",
    headers: {
        "content-type": "application/json",
        authorization: "MY_API_KEY",
    },
    eventTimeZoneOffset: "-02:00",
    timeout: "3000",
    EPCISDocumentContext: "https://ref.gs1.org/standards/epcis/2.0.0/epcis-context.jsonld",
    EPCISDocumentSchemaVersion: "2.0",
    documentValidation: true,
    validationMode: "fast", // 'full' otherwise
});

const buildSensorReportElementExample = (): SensorReportElement => {
    // sensor report element
    return new SensorReportElement().setType(cbv.sensorMeasurementTypes.temperature)
        .setDeviceID(`urn:epc:id:giai:4000001.${Math.floor(Math.random() * 999)}`)
        .setRawData("https://example.org/giai/401234599999")
        .setDataProcessingMethod("https://example.com/gdti/4012345000054987")
        .setTime("2019-07-19T13:00:00.000Z")
        .setMicroorganism("https://www.ncbi.nlm.nih.gov/taxonomy/1126011")
        .setChemicalSubstance("https://identifiers.org/inchikey:CZMRCDWAGMRECN-UGDNZRGBSA-N")
        .setValue(26)
        .setComponent(cbv.components.x)
        .setStringValue("SomeString")
        .setBooleanValue(true)
        .setHexBinaryValue("f0f0f0")
        .setUriValue("https://id.gs1.org/giai/4000001111")
        .setMinValue(26)
        .setMaxValue(26.2)
        .setMeanValue(13.2)
        .setPercRank(50)
        .setPercValue(12.7)
        .setUom("CEL")
        .setSDev(0.1)
        .setDeviceMetadata("https://id.gs1.org/giai/4000001111")
        .addExtension("example:someFurtherMetadata", "someText") as SensorReportElement;
};

const buildSensorMetadataExample = (): SensorMetadata => {
    // sensor metadata
    return new SensorMetadata().setTime(new Date().toISOString())
        .setDeviceID("urn:epc:id:giai:4000001.111")
        .setDeviceMetadata("https://id.gs1.org/giai/4000001111")
        .setRawData("https://example.org/giai/401234599999")
        .setStartTime("2019-04-02T12:55:01.000Z")
        .setEndTime("2019-04-02T13:55:00.000Z")
        .setDataProcessingMethod("https://example.com/gdti/4012345000054987")
        .setBizRules("https://example.com/gdti/4012345000054987");
};

const buildErrorDeclarationExample = (): ErrorDeclaration => {
    return new ErrorDeclaration({
        declarationTime: new Date().toISOString(),
        reason: cbv.errorReasonIdentifiers.incorrect_data,
        "example:vendorExtension": "Test1",
        correctiveEventIDs: ["urn:uuid:404d95fc-9457-4a51-bd6a-0bba133845a8"],
    });
};

const buildReadPointExample = (): ReadPoint => {
    return new ReadPoint({
        id: "urn:epc:id:sgln:0012345.11111." + Math.floor(Math.random() * 999),
    });
};

const buildBizLocationExample = (): BizLocation => {
    return new BizLocation().setId("urn:epc:id:sgln:0012345.11111." + Math.floor(Math.random() * 9));
};

const buildBizTransactionExample = (): BizTransactionElement => {
    return new BizTransactionElement().setType(cbv.businessTransactionTypes.po)
        .setBizTransaction("urn:epc:id:gdti:0614141.00001.1618" + Math.floor(Math.random() * 999));
};

const buildQuantityElementExample = () => {
    return new QuantityElement().setEpcClass("urn:epc:class:lgtin:4012345.012345.9911111")
        .setQuantity(Math.floor(Math.random() * 999))
        .setUom("KGM");
};

const buildSourceElementExample = () => {
    return new SourceElement().setType(cbv.sourceDestinationTypes.location)
        .setSource("urn:epc:id:sgln:4012345.00225." + Math.floor(Math.random() * 9));
};

const buildDestinationElementExample = (): DestinationElement => {
    return new DestinationElement().setType(cbv.sourceDestinationTypes.location)
        .setDestination("urn:epc:id:sgln:0614141.00777.0");
};

const buildSensorElementExample = (): SensorElement => {
    const sensorReportList = [buildSensorReportElementExample(), buildSensorReportElementExample()];

    return new SensorElement().setSensorMetadata(buildSensorMetadataExample())
        .addSensorReportList(sensorReportList)
        .addSensorReport(buildSensorReportElementExample())
        .addExtension("example:myField", "my_custom_value") as SensorElement;
};

const buildPersistentDispositionExample = (): PersistentDisposition => {
    return new PersistentDisposition().addSet(cbv.dispositions.completeness_verified)
        .addUnset(cbv.dispositions.completeness_inferred);
};

const buildIlmdExample = (): Ilmd => {
    return new Ilmd().addExtension("ext1:boolean", "true")
        .addExtension("ext1:value", "Test");
};

const buildObjectEvent = (): ObjectEvent => {
    const bizTransactionList = [buildBizTransactionExample(), buildBizTransactionExample()];
    const quantityList = [buildQuantityElementExample(), buildQuantityElementExample()];
    const sourceList = [buildSourceElementExample(), buildSourceElementExample()];
    const destinationList = [buildDestinationElementExample(), buildDestinationElementExample()];
    const sensorElementList = [buildSensorElementExample(), buildSensorElementExample()];

    return new ObjectEvent().setEventTime("2005-04-05T02:33:31.116Z")
        .setRecordTime("2005-04-05T02:33:31.116Z")
        .setEventTimeZoneOffset("-06:00")
        .addEPC("urn:epc:id:sgtin:0614141.107346.2019")
        .addEPCList([
            "urn:epc:id:sgtin:0614141.107346.2018",
            "urn:epc:id:sgtin:0614141.107346.2017",
        ])
        .setContext({
            example: "http://ns.example.com/epcis/",
            ext1: "http://example.com/ext1/",
        })
        .setAction(cbv.actionTypes.add)
        .setBizStep(cbv.bizSteps.receiving)
        .setDisposition(cbv.dispositions.in_progress)
        .setErrorDeclaration(buildErrorDeclarationExample())
        .setReadPoint(buildReadPointExample())
        .setBizLocation(buildBizLocationExample())
        .addBizTransactionList(bizTransactionList)
        .addBizTransaction(buildBizTransactionExample())
        .addQuantityList(quantityList)
        .addQuantity(buildQuantityElementExample())
        .addSourceList(sourceList)
        .addSource(buildSourceElementExample())
        .addDestinationList(destinationList)
        .addDestination(buildDestinationElementExample())
        .addSensorElementList(sensorElementList)
        .addSensorElement(buildSensorElementExample())
        .setPersistentDisposition(buildPersistentDispositionExample())
        .setIlmd(buildIlmdExample())
        .setCertificationInfo("https://accreditation-council.example.org/certificate/ABC12345")
        .generateHashID({
            example: "http://ns.example.com/epcis/",
            ext1: "http://example.com/ext1/",
        })
        .addExtension("example:myField", "my_custom_value") as ObjectEvent;
};

const buildAssociationEvent = (): AssociationEvent => {
    const context = {
        example: "http://ns.example.com/epcis/",
        ext1: "http://example.com/ext1/",
        ext2: "http://example.com/ext2/",
        ext3: "http://example.com/ext3/",
    };

    return new AssociationEvent(
        {
            type: "AssociationEvent",
            "@context": context,
            eventTime: "2019-11-01T13:00:00.000Z",
            recordTime: "2005-04-05T02:33:31.116Z",
            certificationInfo: "https://accreditation-council.example.org/certificate/ABC12345",
            eventID: "ni:///sha-256;36abb3a2c0a726de32ac4beafd6b8bc4ba0b1d2de244490312e5cbec7b5ddece?ver=CBV2.0",
            eventTimeZoneOffset: "+01:00",
            parentID: "urn:epc:id:grai:4012345.55555.987",
            childEPCs: ["urn:epc:id:giai:4000001.12345", "urn:epc:id:giai:4000001.12346"],
            childQuantityList: [
                {
                    epcClass: "urn:epc:idpat:sgtin:4012345.098765.*",
                    quantity: 10,
                },
                {
                    epcClass: "urn:epc:class:lgtin:4012345.012345.998877",
                    quantity: 200.5,
                    uom: "KGM",
                },
            ],
            action: "ADD",
            bizStep: "assembling",
            disposition: "in_progress",
            readPoint: {
                id: "urn:epc:id:sgln:4012345.00001.0",
            },
            bizLocation: {
                id: "urn:epc:id:sgln:0614141.00888.0",
            },
            bizTransactionList: [
                {
                    type: "po",
                    bizTransaction: "urn:epc:id:gdti:0614141.00001.1618034",
                },
                {
                    type: "pedigree",
                    bizTransaction: "urn:epc:id:gsrn:0614141.0000010253",
                },
            ],
            sourceList: [
                {
                    type: "location",
                    source: "urn:epc:id:sgln:4012345.00225.0",
                },
                {
                    type: "possessing_party",
                    source: "urn:epc:id:pgln:4012345.00225",
                },
                {
                    type: "owning_party",
                    source: "urn:epc:id:pgln:4012345.00225",
                },
            ],
            destinationList: [
                {
                    type: "location",
                    destination: "urn:epc:id:sgln:0614141.00777.0",
                },
                {
                    type: "possessing_party",
                    destination: "urn:epc:id:pgln:0614141.00777",
                },
                {
                    type: "owning_party",
                    destination: "urn:epc:id:pgln:0614141.00777",
                },
            ],
            sensorElementList: [
                {
                    sensorMetadata: {
                        time: "2019-04-02T13:05:00.000Z",
                        deviceID: "urn:epc:id:giai:4000001.111",
                        deviceMetadata: "https://id.gs1.org/giai/4000001111",
                        rawData: "https://example.org/giai/401234599999",
                        startTime: "2019-04-02T12:55:01.000Z",
                        endTime: "2019-04-02T13:55:00.000Z",
                        dataProcessingMethod: "https://example.com/gdti/4012345000054987",
                        bizRules: "https://example.com/gdti/4012345000054987",
                        "ext1:someFurtherMetadata": "someText",
                    },
                    sensorReport: [
                        {
                            type: "Temperature",
                            deviceID: "urn:epc:id:giai:4000001.111",
                            rawData: "https://example.org/giai/401234599999",
                            dataProcessingMethod: "https://example.com/gdti/4012345000054987",
                            time: "2019-07-19T13:00:00.000Z",
                            microorganism: "https://www.ncbi.nlm.nih.gov/taxonomy/1126011",
                            chemicalSubstance: "https://identifiers.org/inchikey:CZMRCDWAGMRECN-UGDNZRGBSA-N",
                            value: 26,
                            component: "example:x",
                            stringValue: "SomeString",
                            booleanValue: true,
                            hexBinaryValue: "f0f0f0",
                            uriValue: "https://id.gs1.org/giai/4000001111",
                            minValue: 26,
                            maxValue: 26.2,
                            meanValue: 13.2,
                            percRank: 50,
                            percValue: 12.7,
                            uom: "CEL",
                            sDev: 0.1,
                            "ext1:someFurtherReportData": "someText",
                            deviceMetadata: "https://id.gs1.org/giai/4000001111",
                        },
                    ],
                    "ext1:float": "20",
                    "ext1:time": "2013-06-08T14:58:56.591Z",
                    "ext1:boolean": "true",
                    "ext1:object": {
                        "ext2:array": [
                            "11",
                            "21",
                            "stringInArrayInObject",
                        ],
                        "ext2:object": {
                            "ext2:object": {
                                "ext3:string": "stringInObjectInObject",
                            },
                        },
                        "ext2:string": "stringInObject",
                    },
                    "ext1:default": "stringAsDefaultValue",
                    "ext1:int": "10",
                    "ext1:string": "string",
                },
            ],
            "ext1:float": "20",
            "ext1:time": "2013-06-08T14:58:56.591Z",
            "ext1:array": [
                "12",
                "22",
                "2013-06-08T14:58:56.591Z",
                "true",
                "stringInArray",
                {
                    "ext1:object": {
                        "ext1:object": {
                            "ext2:array": ["14", "23.0", "stringInArrayInObjectInArray"],
                            "ext2:object": {
                                "ext2:object": {
                                    "ext3:string": "stringInObjectInObjectInArray",
                                },
                            },
                            "ext2:int": "13",
                            "ext2:string": "stringInObjectInArray",
                        },
                    },
                },
            ],
            "ext1:boolean": "true",
            "ext1:object": {
                "ext2:array": ["11", "21", "stringInArrayInObject"],
                "ext2:object": {
                    "ext2:object": {
                        "ext3:string": "stringInObjectInObject",
                    },
                },
                "ext2:string": "stringInObject",
            },
            "ext1:default": "stringAsDefaultValue",
            "ext1:int": "10",
            "ext1:string": "string",
            "cbvmda:site": 402,
        },
    ).generateHashID(context) as AssociationEvent;
};

const buildExtendedEvent = (): ExtendedEvent => {
    return new ExtendedEvent().setType("My:custom:event:type")
        .generateHashID({})
        .setEventTime("2005-04-05T02:33:31.116Z")
        .setRecordTime(new Date().toISOString())
        .setContext(
            {
                evt: "https://evrythng.com/context",
                ext1: "https://example.com/context/1",
            },
        )
        .addExtension("ext1:key", "value")
        .addExtension("evt:number", "509") as ExtendedEvent;
};

const buildEPCISMasterDataExample = (): EPCISMasterData => {
    return new EPCISMasterData({
        vocabularyList: [
            {
                type: vtype.BusinessLocationID,
                vocabularyElementList: [
                    {
                        type: vtype.BusinessLocationID,
                        id: "urn:epc:id:sgln:0037000.00729.0",
                        attributes: [
                            { id: "xmda:latitude", attribute: "+18.0000" },
                            { id: "xmda:longitude", attribute: "-70.0000" },
                            {
                                id: "xmda:address",
                                attribute: {
                                    "@context": {
                                        "@vocab": "http://epcis.example.com/ns/",
                                    },
                                    type: "Address",
                                    street: "100 Nowhere Street",
                                    city: "Fancy",
                                    state: "DC",
                                    zip: "99999",
                                },
                            },
                        ],
                        children: [
                            "urn:epc:id:sgln:0037000.00729.8201",
                            "urn:epc:id:sgln:0037000.00729.8202",
                            "urn:epc:id:sgln:0037000.00729.8203",
                        ],
                    },
                    {
                        type: vtype.BusinessLocationID,
                        id: "urn:epc:id:sgln:0037000.00729.8202",
                        attributes: [{ id: "cbvmda:sst", attribute: "202" }],
                        children: ["urn:epc:id:sgln:0037000.00729.8203"],
                    },
                    {
                        type: vtype.BusinessLocationID,
                        id: "urn:epc:id:sgln:0037000.00729.8203",
                        attributes: [
                            { id: "cbvmda:sst", attribute: "202" },
                            { id: "cbvmda:ssa", attribute: "402" },
                        ],
                    },
                ],
            },
            {
                type: vtype.BusinessLocationID,
                vocabularyElementList: [
                    {
                        type: vtype.ReadPointID,
                        id: "urn:epc:id:sgln:0037000.00729.8201",
                        attributes: [
                            { id: "cbvmda:site", attribute: "0037000007296" },
                            { id: "cbvmda:sst", attribute: 201 },
                        ],
                    },
                    {
                        type: vtype.ReadPointID,
                        id: "urn:epc:id:sgln:0037000.00729.8202",
                        attributes: [
                            { id: "cbvmda:site", attribute: "0037000007296" },
                            { id: "cbvmda:sst", attribute: "202" },
                        ],
                    },
                    {
                        type: vtype.ReadPointID,
                        id: "urn:epc:id:sgln:0037000.00729.8203",
                        attributes: [{ id: "cbvmda:sst", attribute: 204 }],
                    },
                ],
            },
        ],
    });
};

const buildEPCISHeaderExample = (): EPCISHeader => {
    return new EPCISHeader().setEPCISMasterData(buildEPCISMasterDataExample());
};

const sendACaptureRequestExample = async () => {
    const epcisDocument: EPCISDocument = new EPCISDocument();
    epcisDocument.setContext(["https://ref.gs1.org/standards/epcis/2.0.0/epcis-context.jsonld", {
        example: "http://ns.example.com/epcis/",
        ext1: "http://example.com/ext1/",
        evt: "https://evrythng.com/context",
    }])
        .setCreationDate("2013-06-04T14:59:02.099+02:00")
        .setSchemaVersion("2.0")
        .setSender("urn:epc:id:sgln:0353579.00001.0")
        .setReceiver("urn:epc:id:sgln:5012345.00001.0")
        .setId("test:documentId" + Math.floor(Math.random() * 9))
        .setInstanceIdentifier("1234567890")
        .setEPCISHeader(buildEPCISHeaderExample())
        .addEvent(buildAssociationEvent())
        .addEvent(buildObjectEvent())
        .addEvent(buildExtendedEvent())
        .addExtension("owl:sameAs", "ADD");

    await capture(epcisDocument);
};

sendACaptureRequestExample();
