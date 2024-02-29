export default fieldNames;
declare namespace fieldNames {
    export namespace attributeElement {
        const id: string;
        const attribute: string;
    }
    export namespace bizLocation {
        const id_1: string;
        export { id_1 as id };
    }
    export namespace bizTransactionElement {
        const type: string;
        const bizTransaction: string;
    }
    export namespace destinationElement {
        const type_1: string;
        export { type_1 as type };
        export const destination: string;
    }
    export namespace errorDeclaration {
        const declarationTime: string;
        const reason: string;
        const correctiveEventIDs: string;
    }
    export namespace ilmd {
        const type_2: string;
        export { type_2 as type };
        export const format: string;
    }
    export namespace persistentDisposition {
        const set: string;
        const unset: string;
    }
    export namespace quantityElement {
        const epcClass: string;
        const quantity: string;
        const uom: string;
    }
    export namespace readPoint {
        const id_2: string;
        export { id_2 as id };
    }
    export namespace sourceElement {
        const type_3: string;
        export { type_3 as type };
        export const source: string;
    }
    export namespace vocabulary {
        const type_4: string;
        export { type_4 as type };
        export const vocabularyElementList: string;
    }
    export namespace vocabularyElement {
        const id_3: string;
        export { id_3 as id };
        export const attributes: string;
        export const children: string;
    }
    export namespace sensorElement {
        const sensorMetadata: string;
        const sensorReport: string;
    }
    export namespace sensorMetadata_1 {
        const time: string;
        const startTime: string;
        const endTime: string;
        const deviceID: string;
        const deviceMetadata: string;
        const rawData: string;
        const dataProcessingMethod: string;
        const bizRules: string;
    }
    export { sensorMetadata_1 as sensorMetadata };
    export namespace sensorReport_1 {
        const type_5: string;
        export { type_5 as type };
        const deviceID_1: string;
        export { deviceID_1 as deviceID };
        const deviceMetadata_1: string;
        export { deviceMetadata_1 as deviceMetadata };
        const rawData_1: string;
        export { rawData_1 as rawData };
        const dataProcessingMethod_1: string;
        export { dataProcessingMethod_1 as dataProcessingMethod };
        const time_1: string;
        export { time_1 as time };
        export const microorganism: string;
        export const chemicalSubstance: string;
        export const value: string;
        export const component: string;
        export const stringValue: string;
        export const booleanValue: string;
        export const hexBinaryValue: string;
        export const uriValue: string;
        export const minValue: string;
        export const maxValue: string;
        export const meanValue: string;
        export const sDev: string;
        export const percRank: string;
        export const percValue: string;
        const uom_1: string;
        export { uom_1 as uom };
        export const exception: string;
        export const coordinateReferenceSystem: string;
    }
    export { sensorReport_1 as sensorReport };
    export const event: {
        "@context": string;
        type: string;
        eventID: string;
        eventTime: string;
        eventTimeZoneOffset: string;
        recordTime: string;
        errorDeclaration: string;
        epcList: string;
        quantityList: string;
        action: string;
        bizStep: string;
        disposition: string;
        persistentDisposition: string;
        readPoint: string;
        bizLocation: string;
        bizTransactionList: string;
        sourceList: string;
        destinationList: string;
        sensorElementList: string;
        ilmd: string;
        parentID: string;
        childEPCs: string;
        childQuantityList: string;
        inputEPCList: string;
        inputQuantityList: string;
        outputEPCList: string;
        outputQuantityList: string;
        transformationID: string;
        certificationInfo: string;
    };
    export const epcisDocument: {
        type: string;
        "@context": string;
        schemaVersion: string;
        creationDate: string;
        epcisHeader: string;
        epcisBody: string;
        sender: string;
        receiver: string;
        instanceIdentifier: string;
    };
    export namespace epcisHeader {
        const epcisMasterData: string;
    }
    export namespace epcisMasterData_1 {
        const vocabularyList: string;
    }
    export { epcisMasterData_1 as epcisMasterData };
}
