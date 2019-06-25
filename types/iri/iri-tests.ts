import { IRI, fromURI, toIRIString } from 'iri';

const iri = new IRI('iri');
// $ExpectType string
iri.toString();
// $ExpectType IRI
iri.defrag();
// $ExpectType boolean
iri.isAbsolute();
// $ExpectType IRI
iri.toAbsolute();
// $ExpectType string | null
iri.authority();
// $ExpectType string | null
iri.fragment();
// $ExpectType string
iri.hierpart();
// $ExpectType string
iri.host();
// $ExpectType string
iri.path();
// $ExpectType string | null
iri.port();
// $ExpectType string | null
iri.query();
// $ExpectType IRI
iri.resolveReference('ref');
iri.resolveReference(iri);
// $ExpectType string | null
iri.scheme();
// $ExpectType string | null
iri.userinfo();
// $ExpectType string
iri.toURIString();
// $ExpectType string
iri.toIRIString();
// $ExpectType IRI
iri.toIRI();

// $ExpectType IRI
fromURI('u');
// $ExpectType string
toIRIString('u');
