import {
  FileKeyInfo,
  HashAlgorithm,
  SignatureAlgorithm,
  SignedXml,
  TransformationAlgorithm,
  xpath as select,
} from 'xml-crypto';

// Modified from https://github.com/yaronn/xml-crypto#signing-xml-documents
const xml = `
    <library>
        <book>
            <name>Harry Potter</name>
        </book>
    </library>
`;
const sig1 = new SignedXml();
sig1.addReference("//*[local-name(.)='book']");
sig1.signingKey = 'not a real key';
sig1.computeSignature(xml);
const signed: string = sig1.getSignedXml();

// Modified from https://github.com/yaronn/xml-crypto#hashing-algorithms
const doc = new Document();
const signature = select(
  doc,
  "/*/*[local-name(.)='Signature' and namespace-uri(.)='http://www.w3.org/2000/09/xmldsig#']",
)[0] as Node;
const sig2 = new SignedXml();
sig2.keyInfoProvider = new FileKeyInfo('client_public.pem');
sig2.loadSignature(signature);
const res2: boolean = sig2.checkSignature(xml);
const errs: string[] = sig2.validationErrors;

// Modified from https://github.com/yaronn/xml-crypto#caring-for-implicit-transform
const option = {
  implicitTransforms: ['http://www.w3.org/TR/2001/REC-xml-c14n-20010315'],
};
const sig3 = new SignedXml(null, option);
sig3.keyInfoProvider = new FileKeyInfo('client_public.pem');
sig3.loadSignature(signature);
const res3: boolean = sig3.checkSignature(xml);

// Modified from https://github.com/yaronn/xml-crypto#customizing-algorithms
class MyKeyInfo extends FileKeyInfo {
  getKeyInfo(key?: string, prefix?: string) {
    prefix = prefix || '';
    prefix = prefix ? prefix + ':' : prefix;
    return `<${prefix}X509Data></${prefix}X509Data>`;
  }
  getKey(keyInfo?: Node) {
    return Buffer.from('not a real key');
  }
}
class MyDigest extends HashAlgorithm {
  getHash(xml: string) {
    return 'the base64 hash representation of the given xml string';
  }
  getAlgorithmName() {
    return 'http://myDigestAlgorithm';
  }
}
class MySignatureAlgorithm extends SignatureAlgorithm {
  getSignature(signedInfo: Node, signingKey: Buffer) {
    return 'signature of signedInfo as base64...';
  }
  getAlgorithmName() {
    return 'http://mySigningAlgorithm';
  }
}
class MyTransformation extends TransformationAlgorithm {
  process(node: Node) {
    return node.toString();
  }
  getAlgorithmName() {
    return 'http://myTransformation';
  }
}
class MyCanonicalization extends TransformationAlgorithm {
  process(node: Node) {
    return '< x/>';
  }
  getAlgorithmName() {
    return 'http://myCanonicalization';
  }
}
SignedXml.CanonicalizationAlgorithms[
  'http://MyTransformation'
] = MyTransformation;
SignedXml.CanonicalizationAlgorithms[
  'http://MyCanonicalization'
] = MyCanonicalization;
SignedXml.HashAlgorithms['http://myDigestAlgorithm'] = MyDigest;
SignedXml.SignatureAlgorithms[
  'http://mySigningAlgorithm'
] = MySignatureAlgorithm;
const sig4 = new SignedXml();
sig4.signatureAlgorithm = 'http://mySignatureAlgorithm';
sig4.keyInfoProvider = new MyKeyInfo();
sig4.canonicalizationAlgorithm = 'http://MyCanonicalization';
sig4.addReference(
  "//*[local-name(.)='x']",
  ['http://MyTransformation'],
  'http://myDigestAlgorithm',
);
sig4.signingKey = Buffer.from('not a real key');
sig4.addReference("//*[local-name(.)='book']");
sig4.computeSignature(xml);
const res4: string = sig4.getSignedXml();

// Modified from https://github.com/yaronn/xml-crypto#examples
const sig5 = new SignedXml();
sig5.addReference("//*[local-name(.)='book']");
sig5.signingKey = Buffer.from('not a real key');
sig5.computeSignature(xml, {
  prefix: 'ds',
});
const sig6 = new SignedXml();
sig6.addReference("//*[local-name(.)='book']");
sig6.signingKey = Buffer.from('not a real key');
sig6.computeSignature(xml, {
  location: { reference: "//*[local-name(.)='book']", action: 'after' },
});
