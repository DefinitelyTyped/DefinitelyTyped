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
    var node = xmlDoc.getNode('//two');
    gs.info(node.getAttribute('att'));
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
    var node = xmlDoc.getNode('//one');
    var iter = node.getChildNodeIterator();
    gs.info(iter.hasNext());
})();
(function() {
    var xmlString =
        '<test>' +
        '<one>' +
        '<two att="xxx">abcd1234</two>' +
        '<three boo="yah" att="yyy">1234abcd</three>' +
        '<two>another</two>' +
        '</one>' +
        '<number>1234</number>' +
        '</test>';
    var xmlDoc = new XMLDocument2();
    xmlDoc.parseXML(xmlString);
    var node = xmlDoc.getNode('//one');
    gs.info(node.getFirstChild());
})();
(function() {
    var xmlString =
        '<test>' +
        '<one>' +
        '<two att="xxx">abcd1234</two>' +
        '<three boo="yah" att="yyy">1234abcd</three>' +
        '<two>another</two>' +
        '</one>' +
        '<number>1234</number>' +
        '</test>';
    var xmlDoc = new XMLDocument2();
    xmlDoc.parseXML(xmlString);
    var node = xmlDoc.getNode('//one');

    gs.info(node.getLastChild());
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
    var node = xmlDoc.getNode('//two');
    gs.info(node.getNodeName());
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
    var node = xmlDoc.getNode('//two');
    gs.info(node.getNodeValue());
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
    var xmldoc = new XMLDocument2();
    xmldoc.parseXML(xmlString);
    var node = xmldoc.getNode('//one/two');
    gs.info(node.getTextContent());
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
    var node = xmlDoc.getNode('//two');
    gs.info(node.hasAttribute('att'));
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
    var node = xmlDoc.getNode('//one');
    gs.info(node.toString());
})();
