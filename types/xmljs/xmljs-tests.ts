import XmlParser = require("xmljs");

const p = new XmlParser({ strict: true });
const xml = `<?xml version="1.0"?>
<soap:Envelope
xmlns:soap="http://www.w3.org/2001/12/soap-envelope"
soap:encodingStyle="http://www.w3.org/2001/12/soap-encoding">

  <soap:Body xmlns:m="http://www.example.org/stock">
    <m:GetStockPriceResponse>
      <m:Price>34.5</m:Price>
      <m:Price>30.4</m:Price>
    </m:GetStockPriceResponse>
  </soap:Body>

</soap:Envelope>`; // XML in the examples direct
p.parseString(xml, (err, xmlNode) => {
    if (err) {
        // console.error(err);
        return;
    }
    const nodes = xmlNode.path(
        ["Envelope", "Body", "GetstockpriceResponse", "Price"],
        true
    );
    const arr = nodes.map(n => n.text);

    // console.log(arr);
});
