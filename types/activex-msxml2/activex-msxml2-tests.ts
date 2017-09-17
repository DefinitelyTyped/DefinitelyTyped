// https://msdn.microsoft.com/en-us/library/ms764708(v=vs.85).aspx
(() => {
    let dom = new ActiveXObject('Msxml2.DOMDocument.6.0');
    dom.async = false;
    dom.resolveExternals = false;
    dom.loadXML('<a>A</a>');
    WScript.Echo(`dom: ${dom.xml}`);
})();

// https://msdn.microsoft.com/en-us/library/ms766390(v=vs.85).aspx
(() => {
    let doc = new ActiveXObject('Msxml2.DOMDocument.6.0');
    doc.load('test.xml');
    WScript.Echo(`doc: ${doc.xml}`);
})();

const MakeDOM = () => {
    try {
        let dom = new ActiveXObject('Msxml2.DOMDocument.6.0');
        dom.async = false;
        dom.validateOnParse = false;
        dom.resolveExternals = false;
        return dom;
    } catch (e) {
        WScript.Echo(e.description);
    }
};

const LoadDOM = (file: string) => {
    try {
        let dom = MakeDOM()!;
        dom.load(file);
        return dom;
    } catch (e) {
        WScript.Echo(e.description);
    }
};

// https://msdn.microsoft.com/en-us/library/ms759105(v=vs.85).aspx
(() => {
    let doc = new ActiveXObject('Msxml2.DOMDocument.6.0');
    doc.async = false;
    doc.resolveExternals = false;
    doc.validateOnParse = false;

    let xml = `
<?xml version='1.0'?>
<doc title='test'>
  <page num='1'>
    <para title='Saved at last'>
       This XML data is finally saved.
    </para>
  </page>
  <page num='2'>
    <para>
       This page is intentionally left blank.
    </para>
  </page>
</doc>
`;
    doc.loadXML(xml);
    doc.save('saved.xml');
})();

// https://msdn.microsoft.com/en-us/library/ms764656(v=vs.85).aspx
(() => {
    let doc = LoadDOM('test.xml')!;
    let xsl = (LoadDOM('test.xsl')! as any) as MSXML2.IXMLDOMNode;

    let str = doc.transformNode(xsl);
    WScript.Echo('\ndoc.transformNode:\n' + str);

    let out = MakeDOM()!;
    doc.transformNodeToObject(xsl, out);
    WScript.Echo('\ndoc.transformNodeToObject:\n' + out.xml);
})();

// https://msdn.microsoft.com/en-us/library/ms763685(v=vs.85).aspx
(() => {
    let dom = MakeDOM()!;

    // Create a processing instruction targeted for xml.
    let node = dom.createProcessingInstruction("xml", "version='1.0'") as any;
    dom.appendChild(node);

    // Create a processing instruction targeted for xml-stylesheet.
    node = dom.createProcessingInstruction("xml-stylesheet", "type='text/xml' href='test.xsl'");
    dom.appendChild(node);

    // Create a comment for the document.
    node = dom.createComment("sample xml file created using XML DOM object.");
    dom.appendChild(node);

    // Create the root element.
    let root = dom.createElement("root") as any;

    // Create a "created" attribute for the root element and assign the "using dom" character data as the attribute value.
    let attr = dom.createAttribute("created") as any;
    attr.value = "using dom";
    root.setAttributeNode(attr);

    // Add the root element to the DOM instance.
    dom.appendChild(root);

    // Insert a newline + tab.
    root.appendChild(dom.createTextNode("\n\t"));

    // Create more nodes and add them to the root element just created.

    // Add a text node as <node1>.
    node = dom.createElement("node1");
    node.text = "some character data";
    root.appendChild(node);

    // Add a newline + tab.
    root.appendChild(dom.createTextNode("\n\t"));

    // Add a CDATA section as <node2>.
    node = dom.createElement("node2");
    let cd = dom.createCDATASection("some mark-up text");
    node.appendChild(cd);
    root.appendChild(node);

    // Create an element (<node3>) to hold three empty subelements.
    node = dom.createElement("node3");
    // Create a document fragment to be added to <node3>.
    let frag = dom.createDocumentFragment();

    // Add a newline + tab + tab as a text node and an empty subnode.
    frag.appendChild(dom.createTextNode("\n\t\t") as any);
    frag.appendChild(dom.createElement("subNode1") as any);

    // Add a newline + tab + tab as a text node and an empty subnode.
    frag.appendChild(dom.createTextNode("\n\t\t") as any);
    frag.appendChild(dom.createElement("subNode2") as any);

    // Add a newline + tab + tab as a text node and an empty subnode.
    frag.appendChild(dom.createTextNode("\n\t\t") as any);
    frag.appendChild(dom.createElement("subNode3") as any);

    // Add a newline + tab.
    frag.appendChild(dom.createTextNode("\n\t") as any);
    node.appendChild(frag);
    root.appendChild(node);

    // Add a newline.
    root.appendChild(dom.createTextNode("\n"));

    // Save the XML document to a file.
    dom.save("dynamDom.xml");
})();

// https://msdn.microsoft.com/en-us/library/ms757050(v=vs.85).aspx
(() => {
    let dom = LoadDOM("stocks.xml")!;
    try {
        // Query a single node.
        let oNode = dom.selectSingleNode("//stock[1]/*");
        if (oNode != null) {
            WScript.Echo("Result from selectSingleNode:\n" +
                "Node, <" + oNode.nodeName + ">:\n\t" +
                oNode.xml + "\n\n");
        }

        // Query a node-set.
        WScript.Echo("Results from selectNodes:\n");
        let oNodes = dom.selectNodes("//stock[1]/*");

        for (let i = 0; i < oNodes.length; i++) {
            let nextNode = oNodes.nextNode;
            if (nextNode == null) { continue; }
            WScript.Echo("Node (" + i + "), <" + oNode.nodeName + ">:\n\t" +
                oNode.xml);
        }
    } catch (e) {
        WScript.Echo(e.description);
    }
})();

// https://msdn.microsoft.com/en-us/library/ms757064(v=vs.85).aspx
(() => {
    let xhr = new ActiveXObject("MSXML2.XMLHTTP.6.0");
    xhr.open("GET", "http://localhost/sxh/contact.asp?SearchID=John Doe", false);
    xhr.send();

    let doc = xhr.responseXML;
    WScript.Echo(doc.xml);
})();
