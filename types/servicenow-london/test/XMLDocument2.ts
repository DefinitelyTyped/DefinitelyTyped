(function() {
    var xmlString =
        '<test>' +
        '  <one>' +
        '    <two att="xxx">abcd1234</two>' +
        '    <three boo="yah" att="yyy">1234abcd</three>' +
        '    <two>another</two>' +
        '  </one>' +
        '  <number>1234</number>' +
        '</test>';
    var xmlDoc = new XMLDocument2();
    xmlDoc.parseXML(xmlString);
    xmlDoc.createElement('new2');

    gs.info(xmlDoc);
})();
(function() {
    var xmlString =
        '<test>' +
        '  <one>' +
        '    <two att="xxx">abcd1234</two>' +
        '    <three boo="yah" att="yyy">1234abcd</three>' +
        '    <two>another</two>' +
        '  </one>' +
        '  <number>1234</number>' +
        '</test>';
    var xmlDoc = new XMLDocument2();
    xmlDoc.parseXML(xmlString);
    xmlDoc.createElementWithTextValue('new', 'test');
    gs.info(xmlDoc);
})();
(function() {
    var xmlString =
        '<test>' +
        '  <one>' +
        '    <two att="xxx">abcd1234</two>' +
        '    <three boo="yah" att="yyy">1234abcd</three>' +
        '    <two>another</two>' +
        '  </one>' +
        '  <number>1234</number>' +
        '</test>';
    var xmlDoc = new XMLDocument2();
    xmlDoc.parseXML(xmlString);
    //returns the root node of the document tree.
    var rootNode = xmlDoc.getDocumentElement();
    gs.info(rootNode.getTextContent());
})();
(function() {
    var xmlString =
        '<test>' +
        '  <one>' +
        '    <two att="xxx">abcd1234</two>' +
        '    <three boo="yah" att="yyy">1234abcd</three>' +
        '    <two>another</two>' +
        '  </one>' +
        '  <number>1234</number>' +
        '</test>';
    var xmlDoc = new XMLDocument2();
    xmlDoc.parseXML(xmlString);
    var foo = xmlDoc.getFirstNode('/test/one/two');
    gs.info(foo.getTextContent());
})();
(function() {
    var xmlString =
        '<test>' +
        '  <one>' +
        '    <two att="xxx">abcd1234</two>' +
        '    <three boo="yah" att="yyy">1234abcd</three>' +
        '    <two>another</two>' +
        '  </one>' +
        '  <number>1234</number>' +
        '</test>';
    var xmlDoc = new XMLDocument2();
    xmlDoc.parseXML(xmlString);
    var foo = xmlDoc.getFirstNode('/test/one/two');
    var foo2 = xmlDoc.getNextNode(foo);
    gs.info(foo.getTextContent());
    gs.info(foo2.getTextContent());
})();
(function() {
    var xmlString =
        '<test>' +
        '  <one>' +
        '    <two att="xxx">abcd1234</two>' +
        '    <three boo="yah" att="yyy">1234abcd</three>' +
        '    <two>another</two>' +
        '  </one>' +
        '  <number>1234</number>' +
        '</test>';
    var xmlDoc = new XMLDocument2();
    xmlDoc.parseXML(xmlString);
    var node = xmlDoc.getNode('/test/one/two');
    gs.info(node);
})();
(function() {
    var xmlString =
        '<test>' +
        '  <one>' +
        '    <two att="xxx">abcd1234</two>' +
        '    <three boo="yah" att="yyy">1234abcd</three>' +
        '    <two>another</two>' +
        '  </one>' +
        '  <number>1234</number>' +
        '</test>';
    var xmlDoc = new XMLDocument2();
    xmlDoc.parseXML(xmlString);
    gs.info(xmlDoc.getNodeText('//two'));
})();
(function() {
    var xmlString =
        '<test>' +
        '  <one>' +
        '    <two att="xxx">abcd1234</two>' +
        '    <three boo="yah" att="yyy">1234abcd</three>' +
        '    <two>another</two>' +
        '  </one>' +
        '  <number>1234</number>' +
        '</test>';
    var xmlDoc = new XMLDocument2();
    xmlDoc.parseXML(xmlString);
    var rootNode = xmlDoc.getDocumentElement();
})();
(function() {
    var xmlString =
        '<test>' +
        '  <one>' +
        '    <two att="xxx">abcd1234</two>' +
        '    <three boo="yah" att="yyy">1234abcd</three>' +
        '    <two>another</two>' +
        '  </one>' +
        '  <number>1234</number>' +
        '</test>';
    var xmlDoc = new XMLDocument2();
    xmlDoc.parseXML(xmlString);
    //returns the root node of the document tree.
    var rootNode = xmlDoc.getDocumentElement(); //returns org.w3c.dom.Element
    // sets the root node as the current element
    xmlDoc.setCurrentElement(rootNode);
})();
(function() {
    var xmlString =
        '<test>' +
        '  <one>' +
        '    <two att="xxx">abcd1234</two>' +
        '    <three boo="yah" att="yyy">1234abcd</three>' +
        '    <two>another</two>' +
        '  </one>' +
        '  <number>1234</number>' +
        '</test>';
    var xmlDoc = new XMLDocument2();
    xmlDoc.parseXML(xmlString);
    gs.info(xmlDoc.toString());
})();
