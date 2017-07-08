let xmlString = "<root><child1/><child2/><child3/></root>";
let xmlDoc = new DOMParser().parseFromString(xmlString, "application/xml");
let signedXml = new xadesjs.SignedXml(xmlDoc);

let alg = {
    name: "ECDSA",
    namedCurve: "P-256"
};
xadesjs.Application.crypto.subtle.generateKey(
    alg,
    false,
    ["sign", "verify"]
)
    .then((keys: CryptoKeyPair) => {
        signedXml.SigningKey = keys.privateKey;

        // Add the key to the SignedXml document.
        // Create a reference to be signed.
        let reference = new xadesjs.Reference();
        reference.Uri = "";
        // Add an enveloped transformation to the reference.
        reference.AddTransform(new xadesjs.XmlDsigEnvelopedSignatureTransform());
        // Add the reference to the SignedXml object.
        signedXml.AddReference(reference);
        // Set prefix for Signature namespace
        signedXml.Prefix = "ds";

        // Compute the signature.
        return signedXml.ComputeSignature({ name: "ECDSA", hash: { name: "SHA-256" } } as any);
    })
    .then(function () {
        // Append signature
        let xmlDigitalSignature = signedXml.GetXml();
        xmlDoc.documentElement.appendChild(xmlDigitalSignature);

        // Serialize XML document
        let signedDocument = new XMLSerializer().serializeToString(xmlDoc);
        return Promise.resolve(signedDocument);
    })
    .then((doc: string) => {
        console.log("Signed document:", doc);
    })
    // .catch((e: any) => {
    //     console.error("Error", e);
    // });