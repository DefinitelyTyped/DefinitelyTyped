import { ModelManager, Factory, Serializer } from 'composer-concerto';

const modelManager = new ModelManager();
modelManager.addModelFile(
    `namespace org.acme.address
/**
 * This is a concept
 */
concept PostalAddress {
    o String streetAddress optional
    o String postalCode optional
    o String postOfficeBoxNumber optional
    o String addressRegion optional
    o String addressLocality optional
    o String addressCountry optional
}`,
    'filename.cto'
);

const factory = new Factory(modelManager);
const postalAddress = factory.newConcept('org.acme.address', 'PostalAddress');
postalAddress.streetAddress = '1 Maine Street';

const serializer = new Serializer(factory, modelManager);
const plainJsObject = serializer.toJSON(postalAddress);

const sPostalAddress = serializer.fromJSON(plainJsObject);
const streetAddress: string = sPostalAddress.streetAddress;
