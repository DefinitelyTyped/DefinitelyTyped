// https://msdn.microsoft.com/en-us/library/ms764708(v=vs.85).aspx
(() => {
    const dom = new ActiveXObject('Msxml2.DOMDocument.6.0');
    dom.async = false;
    dom.resolveExternals = false;
    dom.loadXML('<a>A</a>');
    WScript.Echo(`dom: ${dom.xml}`);
})();

// https://msdn.microsoft.com/en-us/library/ms766390(v=vs.85).aspx
(() => {
    const doc = new ActiveXObject('Msxml2.DOMDocument.6.0');
    doc.load('test.xml');
    WScript.Echo(`doc: ${doc.xml}`);
})();

const MakeDOM = () => {
    try {
        const dom = new ActiveXObject('Msxml2.DOMDocument.6.0');
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
        const dom = MakeDOM()!;
        dom.load(file);
        return dom;
    } catch (e) {
        WScript.Echo(e.description);
    }
};

// https://msdn.microsoft.com/en-us/library/ms759105(v=vs.85).aspx
(() => {
    const doc = new ActiveXObject('Msxml2.DOMDocument.6.0');
    doc.async = false;
    doc.resolveExternals = false;
    doc.validateOnParse = false;

    const xml = `
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
    const doc = LoadDOM('test.xml')!;
    const xsl = (LoadDOM('test.xsl')! as any) as MSXML2.IXMLDOMNode;

    const str = doc.transformNode(xsl);
    WScript.Echo('\ndoc.transformNode:\n' + str);

    const out = MakeDOM()!;
    doc.transformNodeToObject(xsl, out);
    WScript.Echo('\ndoc.transformNodeToObject:\n' + out.xml);
})();

// https://msdn.microsoft.com/en-us/library/ms763685(v=vs.85).aspx
(() => {
    const dom = MakeDOM()!;

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
    const root = dom.createElement("root") as any;

    // Create a "created" attribute for the root element and assign the "using dom" character data as the attribute value.
    const attr = dom.createAttribute("created") as any;
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
    const cd = dom.createCDATASection("some mark-up text");
    node.appendChild(cd);
    root.appendChild(node);

    // Create an element (<node3>) to hold three empty subelements.
    node = dom.createElement("node3");
    // Create a document fragment to be added to <node3>.
    const frag = dom.createDocumentFragment();

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
    const dom = LoadDOM("stocks.xml")!;
    try {
        // Query a single node.
        const oNode = dom.selectSingleNode("//stock[1]/*");
        if (oNode != null) {
            WScript.Echo(`Result from selectSingleNode:\n\tNode, <${oNode.nodeName}>:\n\t${oNode.xml}\n\n`);
        }

        // Query a node-set.
        WScript.Echo("Results from selectNodes:\n");
        const oNodes = dom.selectNodes("//stock[1]/*");

        for (let i = 0; i < oNodes.length; i++) {
            const nextNode = oNodes.nextNode;
            if (nextNode == null) { continue; }
            WScript.Echo(`Node (${i}), <${oNode.nodeName} + ">:\n\t${oNode.xml}`);
        }
    } catch (e) {
        WScript.Echo(e.description);
    }
})();

// https://msdn.microsoft.com/en-us/library/ms757064(v=vs.85).aspx
(() => {
    const xhr = new ActiveXObject("Msxml2.XMLHTTP.6.0");
    xhr.open("GET", "http://localhost/sxh/contact.asp?SearchID=John Doe", false);
    xhr.send();

    const doc = xhr.responseXML;
    WScript.Echo(doc.xml);
})();

const xmlValidation = (fn: (x: MSXML2.DOMDocument60) => void) => {
    // Create and initialize the DOMDocument object
    const x = new ActiveXObject("Msxml2.DOMDocument.6.0");
    x.async = false;
    x.validateOnParse = true;
    x.resolveExternals = true;

    fn(x);

    let msg: string;
    if (x.parseError.errorCode !== 0) {
        msg = `
Validation failed on ${x.url}
=====================
Reason: ${x.parseError.reason}
Source: ${x.parseError.srcText}
Line: ${x.parseError.line}`;
    } else {
        msg = `
Validation succeeded for ${x.url}
======================
${x.xml}
`;
    }
    return msg;
};

// https://msdn.microsoft.com/en-us/library/ms766449(v=vs.85).aspx
(() => {
    const validateFile = (filename: string) => xmlValidation(x => x.load(filename));

    let sOutput = validateFile("nn-valid.xml");
    sOutput = sOutput + validateFile("nn-notValid.xml");
    WScript.Echo(sOutput);
})();

// https://msdn.microsoft.com/en-us/library/ms767542(v=vs.85).aspx
(() => {
    const validateFile = (filename: string) => xmlValidation(x => {
        // Configure DOM properties for namespace selection.
        x.setProperty("SelectionLanguage", "XPath");
        const ns = "xmlns:x='urn:book'";
        x.setProperty("SelectionNamespaces", ns);

        // Load and validate the specified file into the DOM.
        x.load(filename);
    });

    let sOutput = validateFile("sl-valid.xml");
    sOutput = sOutput + validateFile("sl-notValid.xml");
    WScript.Echo(sOutput);
})();

// https://msdn.microsoft.com/en-us/library/ms766439(v=vs.85).aspx
(() => {
    const validateFile = (filename: string) => xmlValidation(xd => {
        // Create a schema cache and add books.xsd to it.
        const xs = new ActiveXObject('Msxml2.XMLSchemaCache');
        xs.add("urn:books", "sc.xsd");

        // Assign the schema cache to the DOMDocument's schemas collection.
        xd.schemas = xs;

        xd.load(filename);
    });

    let sOutput = validateFile("sc-valid.xml");
    sOutput = sOutput + validateFile("sc-notValid.xml");
    WScript.Echo(sOutput);
})();

// https://msdn.microsoft.com/en-us/library/ms767636(v=vs.85).aspx
(() => {
    const validateFile = (filename: string) => xmlValidation(x => {
        x.setProperty("UseInlineSchema", true);
        x.load(filename);
    });

    let sOutput = validateFile("valid.xml");
    sOutput = sOutput + validateFile("notValid.xml");
    WScript.Echo(sOutput);
})();

// https://msdn.microsoft.com/en-us/library/ms757833(v=vs.85).aspx
(() => {
    // Load an XML document into a DOM instance.
    const oXMLDoc = LoadDOM("books.xml")!;

    // Load the schema for the xml document.
    const oXSDDoc = LoadDOM("books.xsd")!;

    // Create a schema cache instance.
    const oSCache = new ActiveXObject("Msxml2.XMLSchemaCache.6.0");

    // Add the just-loaded schema definition to the schema collection
    oSCache.add("urn:books", oXSDDoc);

    // Assign the schema to the XML document's schema collection
    oXMLDoc.schemas = oSCache;

    // Validate the entire DOM.
    WScript.Echo("Validating DOM...");
    let oError = oXMLDoc.validate();
    let msg: string;
    if (oError.errorCode !== 0) {
        msg = `\tXMLDoc is not valid because
${oError.reason}`;
    } else {
        msg = `\tXMLDoc is validated:
${oXMLDoc.xml}`;
    }
    WScript.Echo(msg);

    // Validate all //books nodes, node by node.
    WScript.Echo("Validating all book nodes, '//book', one by one ...");
    let oNodes = oXMLDoc.selectNodes("//book");
    for (let i = 0; i < oNodes.length; i++) {
        const oNode = oNodes.item(i);
        oError = oXMLDoc.validateNode(oNode);
        if (oError.errorCode !== 0) {
            msg = `\t<${oNode.nodeName}>(${i}) is not valid because
${oError.reason}`;
        } else {
            msg = `\t<${oNode.nodeName}>(${i}) is a valid node`;
        }
        WScript.Echo(msg);
    }

    // validate all children of all book node, //book/*, node by node
    oNodes = oXMLDoc.selectNodes("//book/*");
    WScript.Echo('Validating all children of all book nodes, "//book/*, one by one...');
    for (let i = 0; i < oNodes.length; i++) {
        const oNode = oNodes.item(i);
        oError = oXMLDoc.validateNode(oNode);
        if (oError.errorCode !== 0) {
            msg = `\t<${oNode.nodeName}>(${i}) is not valud because
${oError.reason}`;
        } else {
            msg = `\t<${oNode.nodeName}>(${i}) is a valid node`;
        }
        WScript.Echo(msg);
    }
})();
