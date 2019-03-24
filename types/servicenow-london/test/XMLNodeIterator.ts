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
    while (iter.hasNext()) {
        var n = iter.next();
        gs.info('Node name: ' + n.getNodeName());
        gs.info('Node value: ' + n.getNodeValue());
    }
})();
