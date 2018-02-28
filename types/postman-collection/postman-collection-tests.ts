import * as pmCollection from 'postman-collection';

const certificate = new pmCollection.Certificate({});
certificate.cert; // $ExpectType any
certificate.id; // $ExpectType string
certificate.key; // $ExpectType any
certificate.matches; // $ExpectType any[]
certificate.name; // $ExpectType string
certificate.passphrase; // $ExpectType string
certificate.auth; // $ExpectType RequestAuth
certificate.disabled; // $ExpectType boolean

certificate.canApplyTo("string"); // $ExpectType any
certificate.canApplyTo(new pmCollection.Url({})); // $ExpectType any

certificate.toJSON(); // $ExpectType CertificateDefinition
certificate.update({}); // $ExpectType void

certificate as pmCollection.Property; // $ExpectType Property

pmCollection.Certificate.isCertificate(certificate); // $ExpectType boolean

let collection: pmCollection.Collection;
collection = new pmCollection.Collection();
collection = new pmCollection.Collection({});
collection = new pmCollection.Collection({}, []);
