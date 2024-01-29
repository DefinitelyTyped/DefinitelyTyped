const ckEditor = window.CKEDITOR;

function test_ckEditor() {
    window.CKEDITOR_BASEPATH = "test";
    ckEditor.replaceClass = "rich_editor";
    ckEditor.skinName = "moono";
    ckEditor.skinName = "myskin,/customstuff/myskin/";
    let editor: CKEDITOR.editor = new ckEditor.editor();
    const event: CKEDITOR.event = new ckEditor.event();
    if (editor.getSelection(true).getType() === ckEditor.SELECTION_ELEMENT) {
        if (editor.getSelection(false).getType() === ckEditor.SELECTION_NONE) {
            if (editor.getSelection(true).getType() === ckEditor.SELECTION_TEXT) alert(ckEditor.basePath);
        }
    }
    if (ckEditor.currentInstance) alert(ckEditor.currentInstance.name);
    alert(ckEditor.document.getBody().getName());
    alert(ckEditor.instances[0].name);
    ckEditor.loadFullCoreTimeout = 5;
    alert(ckEditor.revision);
    alert(ckEditor.rnd);
    if (ckEditor.status === "loaded") {
        ckEditor.loadFullCore();
    }
    alert(ckEditor.timestamp);
    ckEditor.addCss(".cke_editable h1,.cke_editable h2,.cke_editable h3 { border-bottom: 1px dotted red }");
    ckEditor.appendTo("editorSpace");
    alert(ckEditor.getUrl("skins/default/editor.css"));
    alert(ckEditor.getUrl("/skins/default/editor.css"));
    alert(ckEditor.getUrl("http://www.somesite.com/skins/default/editor.css"));
    ckEditor.inline("content");
    if (ckEditor.loadFullCore) ckEditor.loadFullCore();

    const textarea = document.createElement("textarea");
    ckEditor.replace("myfield");
    ckEditor.replace(textarea);
    ckEditor.replaceAll();
    ckEditor.replaceAll("myClassName");
    ckEditor.replaceAll((textarea, config) => false);

    editor = ckEditor.appendTo("append here", ckEditor.config, "data");
    editor = ckEditor.appendTo(document.createElement("div"));
    ckEditor.error("code");
    ckEditor.error("500", { moreData: true });
    ckEditor.warn("danger");
    ckEditor.warn("303", 12345);
}

function test_ckEditor_events() {
    ckEditor.on("instanceCreated", event => {
        // $ExpectType editor
        event.editor;
    });
}

function test_config() {
    const config1: CKEDITOR.config = {
        toolbar: "basic",
    };
    const config2: CKEDITOR.config = {
        toolbar: [
            ["mode", "document", "doctools"],
            ["clipboard", "undo"],
            "/",
            ["find", "selection", "spellchecker"],
            ["basicstyles", "cleanup"],
            "/",
            ["list", "indent", "blocks", "align", "bidi"],
        ],
    };
    const config3: CKEDITOR.config = {
        toolbarGroups: [
            { name: "clipboard", groups: ["clipboard", "undo"] },
            {
                name: "editing",
                groups: ["find", "selection", "spellchecker", "editing"],
            },
            { name: "links", groups: ["links"] },
            { name: "insert", groups: ["insert"] },
            { name: "tools", groups: ["tools"] },
            { name: "document", groups: ["mode"] },
            { name: "about", groups: ["about"] },
            "/",
            { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
            {
                name: "paragraph",
                groups: ["list", "indent", "blocks", "align", "paragraph"],
            },
            "/",
            { name: "styles", groups: ["styles"] },
            { name: "colors", groups: ["colors"] },
        ],
    };
}

function test_dom_comment() {
    const type = ckEditor.NODE_COMMENT;
    const nativeNode = document.createComment("Example");
    const comment = new ckEditor.dom.comment(nativeNode);
    const comment2 = new ckEditor.dom.comment("Example");
    const comment3 = new ckEditor.dom.comment("Example", new ckEditor.dom.document(document));
    const html: string = comment.getOuterHtml();
}

function test_dom_document() {
    const document = new ckEditor.dom.document(window.document);
    const type: number = ckEditor.NODE_DOCUMENT;
    ckEditor.document.appendStyleSheet("/mystyles.css");
    let element: CKEDITOR.dom.element = ckEditor.document.getBody();
    alert(element.getName());
    element = ckEditor.document.getById("myElement");
    alert(element.getId());
    element = ckEditor.document.getHead();
    alert(element.getName());
    const selection = ckEditor.instances[0].document.getSelection();
    alert(selection.getType());
    document.write(
        "<html>"
            + "<head><title>Sample Doc</title></head>"
            + "<body>Document contents created by code</body>"
            + "</html>",
    );
    const styles: CSSStyleSheet = document.appendStyleText("some styles");
    element = document.createElement("div");
    element = document.createElement("div", { styles: { height: "1234" } });
    element = document.createElement("div", { attributes: { id: "1234" } });
    element = document.createElement("div", {
        attributes: { tabIndex: "1234" },
        styles: { width: "1234" },
    });
}

function test_dom_documentFragment() {
    const type = ckEditor.NODE_DOCUMENT_FRAGMENT;
    alert(new ckEditor.dom.documentFragment(document.body).type === type);
}

function test_dom_domObject() {
    const element = new ckEditor.dom.element("span");
    alert(element.$.nodeType);
    const nativeElement = element.$;
    const doc = new ckEditor.dom.document(document);
    alert(doc.equals(ckEditor.document));
    alert(doc === ckEditor.document);
    const element2 = new ckEditor.dom.element("span");
    alert(element.getCustomData("hasCustomData"));
    alert(element.getCustomData("nonExistingKey"));
    const elementA = new ckEditor.dom.element(nativeElement);
    elementA.getPrivate().value = 1;
    const elementB = new ckEditor.dom.element(nativeElement).getPrivate().value;
    const element3 = new ckEditor.dom.element("span");
    element.setCustomData("hasCustomData", true);

    const domObject = new ckEditor.dom.domObject(document.createElement("div"));
}

function test_dom_element() {
    const element = new ckEditor.dom.element("span");
    alert(element.$.nodeType);
    element.addClass("classA");
    element.addClass("classB");
    element.addClass("classA");
    let p = new ckEditor.dom.element("p");
    const strong = new ckEditor.dom.element("strong");
    p.append(strong);
    const em = p.append("em");
    p = new ckEditor.dom.element("p");
    p.appendText("This is");
    p.appendText(" some text");
    element.breakParent(strong);
    element.data("extra-info", "test");
    alert(element.data("extra-info"));
    element.data("extra-info", false);
    const element5 = ckEditor.document.getById("myTextarea");
    element.focus();
    element.focusNext();
    element.focusPrevious();
    element.forEach(node => {
        console.log(node);
    });
    const element2 = ckEditor.dom.element.createFromHtml("<input type=\"text\" />");
    alert(element.getAttribute("type"));
    alert(element.getComputedStyle("display"));
    element.appendTo(ckEditor.document.getBody());
    alert(element.getEditor().name);
    const first = element.getFirst();
    const first2 = element.getFirst((node: CKEDITOR.dom.node) => node.equals(document.body));
    alert(element.getHtml());
    alert(element.getId());
    alert(element.getName());
    alert(`<b>${element.getNameAtt()}</b>`);
    alert(element.getOuterHtml());
    alert(element.getTabIndex());
    alert(element.getText());
    alert(element.hasAttributes());
    alert(element.hasAttributes());
    element.hide();
    alert(element.is("span"));
    alert(element.is("p", "span"));
    alert(element.is("p"));
    alert(element.is("p", "div"));
    alert(element.is({ p: 1, span: 1 }));
    element.removeAttribute("class");
    element.addClass("classA");
    element.addClass("classB");
    element.removeClass("classA");
    element.removeClass("classB");
    element.removeStyle("display");
    element.setAttribute("class", "myClass");
    element.setAttribute("title", "This is an example");
    element.setAttributes({
        class: "myClass",
        title: "This is an example",
    });
    p.setHtml("<b>Inner</b> HTML");
    element.setOpacity(0.75);
    element.setStyle("background-color", "#ff0000");
    element.setStyle("margin-top", "10px");
    element.setStyle("float", "right");
    element.setStyles({
        position: "absolute",
        float: "right",
    });
    element.setText("A > B & C < D");
    element.show();
    element.unselectable();
    alert(element.getName());
    alert(element === ckEditor.dom.element.get(element));
    const htmlElement = document.getElementById("myElement")!;
    alert(ckEditor.dom.element.get(htmlElement).getName());

    const dtd: CKEDITOR.dtdDefinition = element.getDtd();
    const last: CKEDITOR.dom.node = element.getLast();
    const last2: CKEDITOR.dom.node = element.getLast((node: CKEDITOR.dom.node) => node.equals(document.body));
    if (element.isBlockBoundary({ div: 1, span: 1 })) {
        element.setState(1, "hex", false);
    }

    ckEditor.dom.element.clearMarkers({}, element, true);
    const element1: CKEDITOR.dom.element = ckEditor.dom.element.get("div");
    const element6: CKEDITOR.dom.element = ckEditor.dom.element.get(document.createElement("div"));
    const element3: CKEDITOR.dom.element = ckEditor.dom.element.get(element2);
    const markedElement: CKEDITOR.dom.element = ckEditor.dom.element.setMarker({}, element, "key", 0);
}

function test_dom_elementPath() {
    const path: CKEDITOR.dom.elementPath = new ckEditor.dom.elementPath(ckEditor.dom.element.get("div"));
    const path2: CKEDITOR.dom.elementPath = new ckEditor.dom.elementPath(
        ckEditor.dom.element.get("div"),
        ckEditor.dom.element.get(document.body),
    );

    const dir: "ltr" | "rtl" = path.direction();
}

function test_dom_event() {
    const event = new ckEditor.dom.event(new Event(""));
    alert(event.getKey());
    alert(event.getKeystroke() === 65);
    alert(event.getKeystroke() === ckEditor.CTRL + 65);
    alert(event.getKeystroke() === ckEditor.CTRL + ckEditor.SHIFT + 65);
    const element = new ckEditor.dom.element("div");
    element.on("mousemouse", ev => {
        const pageOffset = (ev.data as CKEDITOR.dom.event).getPageOffset();
        alert(pageOffset.x);
        alert(pageOffset.y);
    });
    element.on("click", ev => {
        const domEvent = ev.data as CKEDITOR.dom.event<Element, CKEDITOR.dom.element>;
        domEvent.getTarget().addClass("clicked");
    });
    element.on("click", ev => {
        const domEvent = ev.data as CKEDITOR.dom.event<EventTarget>;
        (domEvent.getTarget() as CKEDITOR.dom.element).addClass("clicked");
    });
    element.on("click", ev => {
        const domEvent = ev.data as CKEDITOR.dom.event<EventTarget>;
        domEvent.preventDefault();
    });
}

function test_dom_iterator() {
    const range = new ckEditor.dom.range(new ckEditor.dom.element("div"));
    const iterator = range.createIterator();
    const paragrah1: CKEDITOR.dom.element = iterator.getNextParagraph();
    const paragrah2: CKEDITOR.dom.element = iterator.getNextParagraph("div");
    alert(!iterator.forceBrBreak);
    const itRange: CKEDITOR.dom.range = iterator.range;
}

function test_dom_node() {
    const p = new ckEditor.dom.element("p");
    const strong = new ckEditor.dom.element("strong");
    strong.appendTo(p);
    let node = new ckEditor.dom.node(new Node());
    node = node.getAscendant("b");
    node = node.getAscendant("b", true);
    const element = ckEditor.document.getById("example");
    alert(element.getDocument().equals(ckEditor.document));
    element.getIndex();
    element.getIndex(true);
    const last = element.getFirst().getNext();
    const parent = node.getParent();
    alert(parent.getName());
    const parents = node.getParents();
    const em = new ckEditor.dom.element("em");
    strong.insertAfter(em);
    strong.insertBefore(em);
    strong.insertBeforeMe(em);
    element.isReadOnly();
    let prev = node.getPreviousSourceNode();
    prev = node.getPreviousSourceNode(true);
    prev = node.getPreviousSourceNode(true, ckEditor.NODE_TEXT);
    prev = node.getPreviousSourceNode(true, ckEditor.NODE_COMMENT, node);
    prev = node.getPreviousSourceNode(true, ckEditor.NODE_COMMENT, (current) => false);
    let next = node.getNextSourceNode();
    next = node.getNextSourceNode(true);
    next = node.getNextSourceNode(true, ckEditor.NODE_ELEMENT);
    next = node.getNextSourceNode(true, ckEditor.NODE_DOCUMENT, node);
    next = node.getNextSourceNode(true, ckEditor.NODE_DOCUMENT_FRAGMENT, (current) => true);
    console.log(node.type);
}

function test_dom_nodeList() {
    const nodeList = ckEditor.document.getBody().getChildren();
    alert(nodeList.count());
    const nodes: CKEDITOR.dom.node[] = nodeList.toArray();
}

function test_dom_range() {
    const editor = new ckEditor.editor();
    const range = new ckEditor.dom.range(editor.document);
    range.selectNodeContents(editor.document.getBody());
    range.deleteContents();
    range.selectNodeContents(editor.document.getBody());
    alert(range.collapsed);
    range.collapse();
    alert(range.collapsed);
    range.selectNodeContents(range.document.getBody());
    range.selectNodeContents(editor.document.getBody());
    alert(range.endContainer.getPrivate());
    range.selectNodeContents(editor.document.getBody());
    alert(range.endOffset);
    range.selectNodeContents(editor.document.getBody());
    alert(range.startContainer.getDocument());
    range.selectNodeContents(editor.document.getBody());
    alert(range.startOffset);
}

function test_dom_selection() {
    let element: CKEDITOR.dom.element = ckEditor.dom.element.get("div");
    let selection: CKEDITOR.dom.selection = new ckEditor.dom.selection(new ckEditor.dom.document(document));
    selection = new ckEditor.dom.selection(element);
    selection = new ckEditor.dom.selection(selection);

    const marks: CKEDITOR.dom.bookmark[] = selection.createBookmarks("serialized");
    const marks2: CKEDITOR.dom.bookmark2[] = selection.createBookmarks2({
        normalized: true,
    });
    selection.fake(element);
    selection.fake(element, true);
    element = selection.getCommonAncestor();
    const domSel: Selection = selection.getNative();
    let ranges: CKEDITOR.dom.range[] = selection.getRanges();
    ranges = selection.getRanges(true);
    element = selection.getSelectedElement();
    const text: string = selection.getSelectedText();
    element = selection.getStartElement();

    const type: number = selection.getType();

    let isSomething: boolean = selection.isCollapsed();
    isSomething = selection.isHidden();
    isSomething = selection.isInTable();
    isSomething = selection.isInTable(false);

    selection.lock();
    selection.removeAllRanges();
    selection.reset();
    selection.removeAllRanges();
    selection.reset();
    selection.scrollIntoView();
    selection = selection.selectBookmarks(marks);
    selection = selection.selectBookmarks(marks2);
    selection.selectElement(element);
    selection.selectRanges(ranges);
    selection.unlock(false);
}

function test_dom_walker() {
    const element: CKEDITOR.dom.element = ckEditor.dom.element.get("div");
    const range: CKEDITOR.dom.range = new ckEditor.dom.range(element);

    const walker: CKEDITOR.dom.walker = new ckEditor.dom.walker(range);

    let isSomething: boolean = walker.checkBackward();
    isSomething = walker.checkForward();
    walker.end();

    let node: CKEDITOR.dom.node = walker.lastBackward();
    node = walker.lastForward();
    node = walker.next();
    node = walker.previous();
    isSomething = walker.guard(node, true);
    walker.reset();

    isSomething = ckEditor.dom.walker.blockBoundary({ div: 1 })(node);
    isSomething = ckEditor.dom.walker.bogus()(node);
    isSomething = ckEditor.dom.walker.bogus(isSomething)(node);
    isSomething = ckEditor.dom.walker.bookmark()(node);
    isSomething = ckEditor.dom.walker.bookmark(true)(node);
    isSomething = ckEditor.dom.walker.bookmark(true, false)(node);
    isSomething = ckEditor.dom.walker.editable()(node);
    isSomething = ckEditor.dom.walker.editable(isSomething)(node);
    isSomething = ckEditor.dom.walker.empty()(node);
    isSomething = ckEditor.dom.walker.empty(true)(node);
    isSomething = ckEditor.dom.walker.ignored()(node);
    isSomething = ckEditor.dom.walker.ignored(true)(node);
    isSomething = ckEditor.dom.walker.listItemBoundary()(node);
    isSomething = ckEditor.dom.walker.nodeType(0)(node);
    isSomething = ckEditor.dom.walker.nodeType(1, true)(node);
    isSomething = ckEditor.dom.walker.temp()(node);
    isSomething = ckEditor.dom.walker.temp(isSomething)(node);
    isSomething = ckEditor.dom.walker.whitespaces()(node);
    isSomething = ckEditor.dom.walker.whitespaces(isSomething)(node);
}

function test_dom_text() {
    const nativeNode = document.createTextNode("Example");
    const text = new ckEditor.dom.text(nativeNode);
    const text2 = new ckEditor.dom.text("Example");
    text.substring(1, 2);
    text.substring(1);
}

function test_dom_window() {
    const document = new ckEditor.dom.window(window);
    const win = new ckEditor.dom.window(window);
    const pos = win.getScrollPosition();
    alert(pos.x);
    alert(pos.y);
    const size = win.getViewPaneSize();
    alert(size.width);
    alert(size.height);

    const frame: CKEDITOR.dom.element = win.getFrame();
    win.focus();
}

function test_ajax() {
    // Ajax is an optional plugin
    if (ckEditor.ajax) {
        let req: string = ckEditor.ajax.load("https://ckEditor.com/ckEditor-4/");
        req = ckEditor.ajax.load("https://ckEditor.com/ckEditor-4/", (data: any) => console.log(data));

        let xml: CKEDITOR.xml = ckEditor.ajax.loadXml("https://ckEditor.com/ckEditor-4/");
        xml = ckEditor.ajax.loadXml("https://ckEditor.com/ckEditor-4/", (data: any) => console.log(data));

        ckEditor.ajax.post("https://ckEditor.com/ckEditor-4/", {});
        ckEditor.ajax.post("https://ckEditor.com/ckEditor-4/", {}, "html");
        ckEditor.ajax.post("https://ckEditor.com/ckEditor-4/", {}, "text", (data: any) => console.log(data));
    }
}

function test_dataProcessor() {
    const processor: CKEDITOR.dataProcessor = new ckEditor.htmlDataProcessor(new ckEditor.editor());
    processor.toDataFormat("html", "fix");
    processor.toHtml("data");
    processor.toHtml("data", "fix");
}

function test_dialog() {
    if (ckEditor.dialog && ckEditor.ui.dialog) {
        let dialog: CKEDITOR.dialog = new ckEditor.dialog(ckEditor.instances[0], "dialog");

        let element: CKEDITOR.dom.element = ckEditor.dom.element.get("div");
        dialog.addFocusable(element);
        dialog.addFocusable(element, 13);
        dialog.addPage({ some: true, object: false });
        const ret = dialog.click("1234");
        dialog.commitContent();
        dialog.disableButton("some button");
        dialog.enableButton("4321");
        dialog = dialog.foreach(() => console.log("hey"));

        const button: CKEDITOR.ui.dialog.button = dialog.getButton("button1");
        const ui = new ckEditor.ui(new ckEditor.editor());
        const textInput = new ckEditor.ui.dialog.textInput(dialog, {}, {});
        textInput.setLabel("label");
        const uiEl: CKEDITOR.ui.dialog.uiElement = dialog.getContentElement("page1", "element1");
        element = dialog.getElement();
        const str: string = dialog.getName();
        const numb: number = dialog.getPageCount();
        const editor: CKEDITOR.editor = dialog.getParentEditor();
        let obj: { [key: string]: unknown } = {};
        obj = { ...obj, ...dialog.getPosition() };
        element = dialog.getSelectedElement();
        obj = { ...obj, ...dialog.getSize() };
        obj.value = dialog.getValueOf("page1", "ele1");
        dialog.hide();
        dialog.hidePage("1234");
        dialog.layout();
        dialog.move(1, 2, true);
        dialog = dialog.reset();
        dialog.resize(numb, numb);
        dialog.selectPage("1");
        dialog.setState(4);
        dialog.setValueOf("page1", "ele1", false);
        dialog.setupContent();
        dialog.show();
        dialog.showPage("1234");
        dialog.updateStyle();

        // Test Static methods
        ckEditor.dialog.add("abbrDialog", "PATH/dialogs/abbr.js");
        ckEditor.dialog.add("abbrDialog", (editor) => {
            return {
                title: "Abbreviation Properties",
                minWidth: 400,
                minHeight: 200,
                onLoad: () => {},
                onOk: () => {},
                onCancel: () => {},
                onShow: () => {},
                onHide: () => {},
                contents: [
                    {
                        id: "tab-basic",
                        label: "Basic Settings",
                        elements: [] as any[],
                    },
                    {
                        id: "tab-adv",
                        label: "Advanced Settings",
                        elements: [],
                    },
                ],
            };
        });

        ckEditor.dialog.addIframe("frame", "frame", 1234, 4321);
        ckEditor.dialog.addIframe("frame", "frame", 1234, 4321, () => console.log("loaded"));
        ckEditor.dialog.addIframe("frame", "frame", 1234, 4321, () => console.log("loaded"), obj);

        ckEditor.dialog.addUIElement("node", () => console.log("build"));
        ckEditor.dialog.cancelButton();
        ckEditor.dialog.exists("dialog1");
        ckEditor.dialog.exists(1234);
        dialog = ckEditor.dialog.getCurrent();

        const isEnabled: boolean = ckEditor.dialog.isTabEnabled(editor, "dialog", "table");

        ckEditor.dialog.okButton();

        const balloonPanel = new ckEditor.ui.balloonPanel(new ckEditor.editor(), {
            title: "My Panel",
            content: "<p>This is my panel</p>",
        });
        balloonPanel.build();
    }
}

function test_editable() {
    const element: CKEDITOR.dom.element = new ckEditor.dom.element("div");
    const editor: CKEDITOR.editor = new ckEditor.editor();

    let editable: CKEDITOR.editable = new ckEditor.editable(editor, element);
    editable = new ckEditor.editable(editor, document.createElement("div"));

    editable.attachClass("class");
    editable.attachListener(editable, "event", (evt) => console.log("listen")).removeListener();
    editable
        .attachListener(new ckEditor.event(), "event", (evt) => console.log("listen"))
        .removeListener();
    editable
        .attachListener(new ckEditor.event(), "event", (evt) => console.log("listen"), {
            scope: "object",
        })
        .removeListener();
    editable
        .attachListener(
            editable,
            "event",
            (evt) => console.log("listen"),
            { scope: "object" },
            "data",
        )
        .removeListener();
    editable
        .attachListener(
            editable,
            "event",
            (evt) => console.log("listen"),
            { scope: "object" },
            "data",
            1,
        )
        .removeListener();

    editable.changeAttr("attr", "val");
    editable.detach();

    const range: CKEDITOR.dom.range = new ckEditor.dom.range(editor.document);
    editable.insertElement(element);
    editable.insertElement(element, range);
    editable.insertHtml("data");
    editable.insertHtml("data", "mode");
    editable.insertHtml("data", "mode", range);
    editable.insertText(new ckEditor.dom.text("text"));

    const inline: boolean = editable.isInline();
    editable.setReadOnly(inline);
}

function test_fileTools() {
    const editor: CKEDITOR.editor = new ckEditor.editor();
    const blob: Blob = new Blob();
    const loader: CKEDITOR.fileTools.fileLoader = new ckEditor.fileTools.fileLoader(editor, blob);
    const element: CKEDITOR.dom.element = new ckEditor.dom.element("div");

    ckEditor.fileTools.addUploadWidget(editor, "editor", {});
    ckEditor.fileTools.bindNotification(editor, loader);
    let url: string = ckEditor.fileTools.getUploadUrl({ some: "object" });
    url = ckEditor.fileTools.getUploadUrl({ some: "object" }, "type");

    const supported = ckEditor.fileTools.isTypeSupported(blob, /regex/);
    ckEditor.fileTools.markElement(element, "name", 45);
}

function test_fileTools_fileLoader() {
    const editor: CKEDITOR.editor = new ckEditor.editor();
    const blob: Blob = new Blob();
    const element: CKEDITOR.dom.element = new ckEditor.dom.element("div");

    let loader: CKEDITOR.fileTools.fileLoader = new ckEditor.fileTools.fileLoader(editor, "data");
    loader = new ckEditor.fileTools.fileLoader(editor, blob);
    loader = new ckEditor.fileTools.fileLoader(editor, blob, "name");

    loader.abort();
    const finished: boolean = loader.isFinished();
    loader.load();
    loader.loadAndUpload("url");
    loader.loadAndUpload("url", { someHeader: "1234" });

    loader.update();
    loader.upload("url");
    loader.upload("url", { someHeader: "1234" });
}

function test_fileTools_uploadRepository() {
    const editor: CKEDITOR.editor = new ckEditor.editor();
    const blob: Blob = new Blob();
    const repo: CKEDITOR.fileTools.uploadRepository = new ckEditor.fileTools.uploadRepository(editor);

    let loader: CKEDITOR.fileTools.fileLoader = repo.create("data", "name");
    loader = repo.create(blob, "name", "type");

    const fin: boolean = loader.isFinished();
}

function test_filter() {
    const editor: CKEDITOR.editor = new ckEditor.editor();
    const style: CKEDITOR.style = new ckEditor.style({});

    let filter: CKEDITOR.filter = new ckEditor.filter(editor);
    filter = new ckEditor.filter("rule");
    filter = new ckEditor.filter(style);
    filter = new ckEditor.filter([style, "rule", [style, "rule"]]);
    if (ckEditor.filter.instances) {
        filter = ckEditor.filter.instances["1234"];
    }

    filter.addContentForms([{ form: true }]);
    filter.addElementCallback((el: CKEDITOR.htmlParser.element) => 4);
    filter.addFeature({ allowedContent: style });
    filter.addTransformations([
        [
            "transform1",
            {
                right: (element: CKEDITOR.htmlParser.element, tools: string | CKEDITOR.filter.transformationTools) =>
                    true,
            },
        ],
    ]);

    let allowed: boolean = filter.allow(style);
    allowed = filter.allow([style], "name");
    allowed = filter.allow("rule", "name", false);

    let apply: boolean = filter.applyTo(ckEditor.htmlParser.fragment.fromHtml("string"), true, false, 1);
    apply = filter.applyTo(new ckEditor.htmlParser.element("name", null));
    apply = filter.applyTo(new ckEditor.htmlParser.element("name", null), true, false, 1);

    let checked: boolean = filter.check(style);
    checked = filter.check("rule", true);
    checked = filter.check(style, false, true);

    checked = filter.checkFeature({ allowedContent: style });

    filter = filter.clone();
    filter.destroy();
    filter.disable();

    filter.disallow(filter.disallowedContent);
    let mode: number = filter.getAllowedEnterMode(1);
    mode = filter.getAllowedEnterMode(1, false);
}

function test_focusManager() {
    const textarea = document.createElement("textarea");
    const instance = ckEditor.replace(textarea);
    const element = ckEditor.document.getById("myElement");

    instance.focusManager.focus();
    instance.focusManager.focus(element);
    instance.focusManager.lock();
    instance.focusManager.unlock();
    instance.focusManager.blur();
    instance.focusManager.blur(true);
    instance.focusManager.add(element, true);
    instance.focusManager.remove(element);

    const focusManager = new ckEditor.focusManager(ckEditor.instances[0]);
    const object: CKEDITOR.dom.domObject = focusManager.currentActive;
    const bool: boolean = focusManager.hasFocus;
}

function test_htmlParser_basicWriter() {
    const writer = new ckEditor.htmlParser.basicWriter();
    writer.attribute("class", "MyClass");
    writer.closeTag("p");
    writer.comment("hello");
    alert(writer.getHtml(true)); // '<p class="MyClass">Hello</p>'
    writer.openTag("p", {});
    writer.openTagClose("p", false);
    writer.reset();
    writer.text("Hello");
    writer.write("data");
}

function test_htmlParser_cdata() {
    const cdata: CKEDITOR.htmlParser.cdata = new ckEditor.htmlParser.cdata("hey");
    cdata.writeHtml(new ckEditor.htmlParser.basicWriter());
}

function test_htmlParser_comment() {
    const filter: CKEDITOR.htmlParser.filter = new ckEditor.htmlParser.filter();
    const comment: CKEDITOR.htmlParser.comment = new ckEditor.htmlParser.comment("hey");
    const filtered: boolean = comment.filter(filter);
    comment.writeHtml(new ckEditor.htmlParser.basicWriter());
    comment.writeHtml(new ckEditor.htmlParser.basicWriter(), filter);
}

function test_htmlParser_cssStyle() {
    const element: CKEDITOR.htmlParser.element = new ckEditor.htmlParser.element("el");

    let style: CKEDITOR.htmlParser.cssStyle = new ckEditor.htmlParser.cssStyle(element);
    style = new ckEditor.htmlParser.cssStyle("styles");

    style.populate(element);
    style.populate(new ckEditor.dom.element("div"));
    style.populate({ width: 1 });
}

function test_htmlParser_element() {
    let element: CKEDITOR.htmlParser.element = new ckEditor.htmlParser.element("el", { id: "1" });

    let node: CKEDITOR.htmlParser.node = new ckEditor.htmlParser.node();
    element.add(node);
    element.add(node, 5);
    element.addClass("class");
    element = element.clone();

    const filter: CKEDITOR.htmlParser.filter = new ckEditor.htmlParser.filter();
    const filtered: boolean = element.filter(filter);
    element.filterChildren(filter);

    let nodes: CKEDITOR.htmlParser.node[] = element.find("*");
    nodes = element.find((el: CKEDITOR.htmlParser.node) => false, true);

    element.forEach((el: CKEDITOR.htmlParser.node) => console.log("node"));
    element.forEach((el: CKEDITOR.htmlParser.node) => console.log("node"), 1);
    element.forEach((el: CKEDITOR.htmlParser.node) => false, 2, true);

    node = element.getFirst("*");
    node = element.getFirst({ id: "1" });
    node = element.getFirst((el: CKEDITOR.htmlParser.node) => true);

    let html: string = element.getHtml();
    html = element.getOuterHtml();

    const hasClass: boolean = element.hasClass("class");
    element.removeClass("class");
    element.replaceWithChildren();
    element.setHtml("html");
    const el2: CKEDITOR.htmlParser.element = element.split(1);

    element.writeChildrenHtml(new ckEditor.htmlParser.basicWriter());
    element.writeChildrenHtml(new ckEditor.htmlParser.basicWriter(), filter);

    element.writeHtml(new ckEditor.htmlParser.basicWriter());
    element.writeHtml(new ckEditor.htmlParser.basicWriter(), filter);
}

function test_htmlParser_filter() {
    let filter: CKEDITOR.htmlParser.filter = new ckEditor.htmlParser.filter({
        elementNames: ["div"],
    });
    filter = new ckEditor.htmlParser.filter();

    filter.addRules({ text: "text" });
    filter.addRules({ attributes: { id: "1234" } }, 1);
    filter.addRules({ comment: "hey", text: "text" }, { priority: 1 });
    filter.addRules({ root: document.body }, { applyToAll: false });

    const node: CKEDITOR.htmlParser.node = new ckEditor.htmlParser.node();
    filter.applyTo(node);
}

function test_htmlParser_filterRulesGroup() {
    const rules: CKEDITOR.htmlParser.filterRulesGroup = new ckEditor.htmlParser.filterRulesGroup();

    rules.add(["some", "rule"], 1, {
        applyToAll: false,
        excludeNestedEditable: true,
    });

    rules.addMany(
        [(value: CKEDITOR.htmlParser.node | CKEDITOR.htmlParser.fragment | string) => false, ["some", "rule"]],
        1,
        { applyToAll: false },
    );

    let nodeFragOrString: CKEDITOR.htmlParser.node | CKEDITOR.htmlParser.fragment | string = "test";
    nodeFragOrString = rules.exec(nodeFragOrString);

    let str = "test";
    str = rules.execOnName(str);

    const idx: number = rules.findIndex(1);
}

function test_htmlParser_fragment() {
    let frag: CKEDITOR.htmlParser.fragment = new ckEditor.htmlParser.fragment();

    const node: CKEDITOR.htmlParser.node = new ckEditor.htmlParser.node();
    frag.add(node);
    frag.add(node, 1);

    const filter: CKEDITOR.htmlParser.filter = new ckEditor.htmlParser.filter();
    frag.filter(filter);
    frag.filterChildren(filter);
    frag.filterChildren(filter, true);
    frag.forEach((node: CKEDITOR.htmlParser.node) => console.log("node"));
    frag.forEach((node: CKEDITOR.htmlParser.node) => false, 1);
    frag.forEach((node: CKEDITOR.htmlParser.node) => false, 2, true);

    frag.writeChildrenHtml(new ckEditor.htmlParser.basicWriter());
    frag.writeChildrenHtml(new ckEditor.htmlParser.basicWriter(), filter);

    frag.writeHtml(new ckEditor.htmlParser.basicWriter());
    frag.writeHtml(new ckEditor.htmlParser.basicWriter(), filter);

    frag = ckEditor.htmlParser.fragment.fromBBCode("code");

    let fragOrEl: CKEDITOR.htmlParser.fragment | CKEDITOR.htmlParser.element = ckEditor.htmlParser.fragment.fromHtml(
        "html",
    );
    fragOrEl = ckEditor.htmlParser.fragment.fromHtml("html", "parent");
    fragOrEl = ckEditor.htmlParser.fragment.fromHtml("html", "parent", "fix");
    fragOrEl = ckEditor.htmlParser.fragment.fromHtml("html", new ckEditor.htmlParser.element("name", null), true);
}

function test_htmlParser_node() {
    const node: CKEDITOR.htmlParser.node = new ckEditor.htmlParser.node();

    let el: CKEDITOR.htmlParser.element = node.getAscendant("condition");
    el = node.getAscendant({ id: "1234" });
    el = node.getAscendant((node: CKEDITOR.htmlParser.element) => false);

    const idx: number = node.getIndex();
    node.insertAfter(node);
    node.insertBefore(node);
    node.remove();
    node.replaceWith(node);
    el = node.wrapWith(el);
}

function test_htmlParser_text() {
    const text: CKEDITOR.htmlParser.text = new ckEditor.htmlParser.text("text");
    const filtered: boolean = text.filter(new ckEditor.htmlParser.filter());
    text.writeHtml(new ckEditor.htmlParser.basicWriter());
    text.writeHtml(new ckEditor.htmlParser.basicWriter(), new ckEditor.htmlParser.filter());
}

function test_htmlWriter() {
    const writer = new ckEditor.htmlWriter();
    writer.openTag("p", {});
    writer.attribute("class", "MyClass");
    writer.openTagClose("p", false);
    writer.text("Hello");
    writer.closeTag("p");
    alert(writer.getHtml(true)); // '<p class="MyClass">Hello</p>'

    writer.indentationChars = "\t";
    writer.lineBreakChars = "\r\n";
    writer.selfClosingEnd = ">";
    writer.indentation();
    writer.lineBreak();
    writer.setRules("img", { breakBeforeOpen: true, breakAfterOpen: true });
}

function test_htmlParser() {
    const html = "<div><span>text</span></div>";
    const fragment = ckEditor.htmlParser.fragment.fromHtml(html);
    fragment.forEach(
        node => {
            if ((node as CKEDITOR.htmlParser.element).forEach) {
                (node as CKEDITOR.htmlParser.element).forEach(node => {
                    console.log(node);
                });
            }
        },
        ckEditor.NODE_ELEMENT,
        true,
    );
}

function test_keystrokeHandler() {
    const handler: CKEDITOR.keystrokeHandler = new ckEditor.keystrokeHandler(ckEditor.instances[0]);
    handler.attach(new ckEditor.dom.domObject(document.body));
}

function test_lang() {
    let lang: string = ckEditor.lang.detect("en");
    lang = ckEditor.lang.detect("zh", "sw");

    ckEditor.lang.load("tk", "pr", (code: string, entries: any) => console.log("loaded"));
}

function test_loader() {
    ckEditor.loader.load("script");
    ckEditor.loader.load("script", true);

    ckEditor.loader.loadPending();
}

function test_menu() {
    const menu: CKEDITOR.menu = new ckEditor.menu();

    menu.add({ anything: true });
    menu.addListener(
        (startElement: CKEDITOR.dom.element, selection: CKEDITOR.dom.selection, path: CKEDITOR.dom.elementPath) =>
            "return",
    );
    const { item, element } = menu.findItemByCommandName("command");
    menu.hide();
    menu.hide(false);
    menu.removeAll();
    menu.show(new ckEditor.dom.element("div"));
    menu.show(new ckEditor.dom.element("div"), 1);
    menu.show(new ckEditor.dom.element("div"), 1, 2);
    menu.show(new ckEditor.dom.element("div"), 1, 2, 3);
}

// Disabled because this should not be used outside CKEditor Source left as definition for inheritance purposes
// function test_resourceManager() {
//     const manager: CKEDITOR.resourceManager = new ckEditor.resourceManager('path', 'name');
//
//     manager.add('name');
//     manager.add('name', { hidpi: true });
//     manager.addExternal('names', 'path');
//     manager.addExternal('names', 'path', 'name');
//
//     const def: CKEDITOR.pluginDefinition = manager.get('name');
//     let path: string = manager.getFilePath('path');
//     path = manager.getPath('path');
//
//     manager.load('name', (loaded: string[]) => console.log('hey'));
//     manager.load([ 'name' ], (loaded: string[]) => console.log('hey'), manager);
// }

function test_scriptLoader() {
    ckEditor.scriptLoader.load(
        "url",
        (succeededUrls: boolean | string[], failedUrls: string[]) => console.log("loaded"),
    );
    ckEditor.scriptLoader.load(
        ["url"],
        (succeededUrls: boolean | string[], failedUrls: string[]) => console.log("loaded"),
        null,
    );
    ckEditor.scriptLoader.load(
        ["url"],
        (succeededUrls: boolean | string[], failedUrls: string[]) => console.log("loaded"),
        null,
        true,
    );
    ckEditor.scriptLoader.queue("url", (succeeded: boolean) => console.log("loaded"));
}

function test_skin() {
    ckEditor.skin.addIcon("name", "path");
    ckEditor.skin.addIcon("name", "path", 1);
    ckEditor.skin.addIcon("name", "path", 1, "small");

    ckEditor.skin.chameleon("editor", "part");

    let style: any = ckEditor.skin.getIconStyle("name");
    style = ckEditor.skin.getIconStyle("name", true);
    style = ckEditor.skin.getIconStyle("name", true, 1);
    style = ckEditor.skin.getIconStyle("name", true, 1, "large");

    const path: any = ckEditor.skin.getPath("part");

    ckEditor.skin.loadPart("part", () => console.log("load"));

    const path2: string = ckEditor.skin.path();

    ckEditor.skin.ua_dialog = "ie,iequirks,ie8,gecko";
    ckEditor.skin.ua_editor = "ie,gecko";
}

function test_style() {
    const style: CKEDITOR.style = new ckEditor.style({ element: "div" }, { key: "value " });
    style.apply(ckEditor.instances[0]);

    const el: CKEDITOR.dom.element = new ckEditor.dom.element("div");
    style.applyToObject(el, ckEditor.instances[0]);

    const range: CKEDITOR.dom.range = new ckEditor.dom.range(el);
    style.applyToRange(range, ckEditor.instances[0]);

    let str: string = style.buildPreview();
    str = style.buildPreview("label");

    const path: CKEDITOR.dom.elementPath = new ckEditor.dom.elementPath(el);
    let bool: boolean = style.checkActive(path, ckEditor.instances[0]);

    const filter: CKEDITOR.filter = new ckEditor.filter(ckEditor.instances[0]);
    bool = style.checkApplicable(path, ckEditor.instances[0], filter);

    bool = style.checkElementMatch(el, true, ckEditor.instances[0]);
    bool = style.checkElementRemovable(el, false, ckEditor.instances[0]);

    const def: CKEDITOR.style.definition = style.getDefinition();
    style.remove(ckEditor.instances[0]);
    style.removeFromRange(range, ckEditor.instances[0]);

    let rules: CKEDITOR.filter.allowedContentRules;
    rules = style.toAllowedContentRules();
    rules = style.toAllowedContentRules(ckEditor.instances[0]);
}

function test_adding_command_and_buttons() {
    const textarea = document.createElement("textarea");
    const instance = ckEditor.replace(textarea);

    instance.addCommand("aCommand", {
        exec: (editor: CKEDITOR.editor) => {
            // empty logic
            return true;
        },
    });

    instance.ui.addButton("firstButton", {
        icon: "http://www.example.com/assets/images/icons.png",
        iconOffset: -32,
        label: "Label 1",
        command: "aCommand",
        toolbar: "tools",
    });

    instance.ui.addButton("secondButton", {
        label: "Label 2",
        command: "aCommand",
        toolbar: "tools",
    });
}

function test_adding_widget() {
    function wrapper(editor: CKEDITOR.editor) {
        editor.widgets.add("widgetty", {
            button: "Activate widgetty",
            template: "<imaginary-element>",
            dialog: "widgetty",
            init: () => {
                // no logic
            },
        });
    }
}

function test_sharedSpace() {
    ckEditor.inline("content", {
        removePlugins: "maximize,resize",
        sharedSpaces: {
            top: "someElementId",
            bottom: document.getElementById("anotherId"),
        },
    });

    ckEditor.inline("content", {
        sharedSpaces: {},
    });
}

function test_specifying_editor_path() {
    window.CKEDITOR_BASEPATH = "/ckEditor/";
}

function test_editor_instance_event() {
    const textarea = document.createElement("textarea");
    const instance = ckEditor.replace(textarea, {
        on: {
            activeEnterModeChange: () => {},
            activeFilterChange: () => {},
            afterCommandExec: () => {},
            afterInsertHtml: () => {},
            afterPaste: () => {},
            afterPasteFromWord: () => {},
            afterSetData: () => {},
            afterUndoImage: () => {},
            ariaEditorHelpLabel: () => {},
            ariaWidget: () => {},
            autogrow: () => {},
            beforeCommandExec: () => {},
            beforeDestroy: () => {},
            beforeModeUnload: () => {},
            beforeSetMode: () => {},
            beforeUndoImage: () => {},
            blur: () => {},
            change: () => {},
            configLoaded: () => {},
            contentDirChanged: () => {},
            contentDom: () => {},
            contentDomInvalidated: () => {},
            contentDomUnload: () => {},
            customConfigLoaded: () => {},
            dataFiltered: () => {},
            dataReady: () => {},
            destroy: () => {},
            dialogHide: () => {},
            dialogShow: () => {},
            dirChanged: () => {},
            doubleclick: () => {},
            dragend: () => {},
            dragstart: () => {},
            drop: () => {},
            elementsPathUpdate: () => {},
            fileUploadRequest: () => {},
            fileUploadResponse: () => {},
            floatingSpaceLayout: () => {},
            focus: () => {},
            getData: () => {},
            getSnapshot: () => {},
            insertElement: () => {},
            insertHtml: () => {},
            insertText: () => {},
            instanceReady: () => {},
            key: () => {},
            langLoaded: () => {},
            loadSnapshot: () => {},
            loaded: () => {},
            lockSnapshot: () => {},
            maximize: () => {},
            menuShow: () => {},
            mode: () => {},
            notificationHide: () => {},
            notificationShow: () => {},
            notificationUpdate: () => {},
            paste: () => {},
            pasteFromWord: () => {},
            pluginsLoaded: () => {},
            readOnly: () => {},
            removeFormatCleanup: () => {},
            required: () => {},
            resize: () => {},
            save: () => {},
            saveSnapshot: () => {},
            selectionChange: () => {},
            setData: () => {},
            stylesSet: () => {},
            template: () => {},
            toDataFormat: () => {},
            toHtml: () => {},
            unlockSnapshot: () => {},
            updateSnapshot: () => {},
            widgetDefinition: () => {},
        },
    });
}

function test_dtd() {
    const brConsideredEmptyTag = ckEditor.dtd.$empty["br"];
    const spanCanContainText = ckEditor.dtd["span"]["#"];
    const divCanContainSpan = ckEditor.dtd["div"]["span"];
}

function test_getSelectedHtml() {
    const textarea = document.createElement("textarea");
    const editor = ckEditor.replace(textarea);

    // $ExpectType documentFragment<Node>
    const sel1 = editor.getSelectedHtml();
    console.log(sel1);

    // $ExpectType documentFragment<Node>
    const sel2 = editor.getSelectedHtml(false);
    console.log(sel2);

    // $ExpectType string
    const sel3 = editor.getSelectedHtml(true);
    console.log(sel3);

    // $ExpectType string | documentFragment<Node>
    const sel4 = editor.getSelectedHtml(Math.random() > 0.5);
    console.log(sel4);
}

function test_element() {
    const el = ckEditor.document.getById("myElement");
    el.addClass("class");
    console.log(el.hasClass("class"));
    el.removeClass("class");
}

function test_selection() {
    const editor = new ckEditor.editor();
    const testNode = ckEditor.document.getById("myElement");

    const selection = editor.getSelection(true);
    const ranges = selection.getRanges();
    for (let i = 0, c = ranges.length; i < c; i++) {
        const range = ranges[i];
        range.setStartBefore(testNode);
        range.setStartAfter(testNode);
        range.setEndBefore(testNode);
        range.setEndAfter(testNode);
    }
}

function test_tools() {
    let obj: { [key: string]: unknown } = { key: "value" };

    ckEditor.tools.addFunction(console.log);
    ckEditor.tools.addFunction(console.log, obj);
    let bool = ckEditor.tools.arrayCompare([1], [2, 3]);
    ckEditor.tools.clone(obj);
    ckEditor.tools.copy(obj);

    let str = ckEditor.tools.cssStyleToDomStyle("style");
    let prefixes: { [cssClass: string]: string | number } = ckEditor.tools.cssVendorPrefix("prop", "val");
    prefixes = ckEditor.tools.cssVendorPrefix("prop", "val", true);
    const fn: () => void = () => {
        console.log("I was deferred");
    };
    ckEditor.tools.defer(fn);
    ckEditor.tools.enableHtml5Elements(document);
    ckEditor.tools.enableHtml5Elements(document.createDocumentFragment(), true);
    str = ckEditor.tools.escapeCss("css");
    const { input, reset } = ckEditor.tools.eventsBuffer(1, console.log, obj);
    obj = ckEditor.tools.extend(obj, obj, true, obj);
    bool = ckEditor.tools.fixDomain();
    str = ckEditor.tools.genKey(str);
    str = ckEditor.tools.getCookie(str);
    str = ckEditor.tools.getCsrfToken();
    let numb: number = ckEditor.tools.getIndex<string>(["string", "array"], (element: string) => false);
    bool = ckEditor.tools.getMouseButton(new ckEditor.dom.event(document.createEvent("MouseEvent")));
    str = ckEditor.tools.getNextId();
    numb = ckEditor.tools.getNextNumber();
    str = ckEditor.tools.getUniqueId();
    str = ckEditor.tools.htmlDecode(str);
    str = ckEditor.tools.htmlDecodeAttr(str);
    str = ckEditor.tools.htmlEncode(str);
    str = ckEditor.tools.htmlEncodeAttr(str);
    numb = ckEditor.tools.indexOf<string>(["string", "array"], "string");
    numb = ckEditor.tools.indexOf<boolean>([true, false], (val: boolean) => false);
    console.log(ckEditor.tools.isArray([1])); // true
    console.log(ckEditor.tools.isArray(obj)); // false
    console.log(ckEditor.tools.isArray(null)); // false
    console.log(ckEditor.tools.isArray(undefined)); // false
    bool = ckEditor.tools.isEmpty(obj);
    const ret1: { display: string[]; aria: string[] } = ckEditor.tools.keystrokeToArray(obj, 1);
    const ret2: { display: string; aria: string } = ckEditor.tools.keystrokeToString(obj, 1);
    str = ckEditor.tools.ltrim(str);
    str = ckEditor.tools.normalizeCssText(str, bool);
    str = ckEditor.tools.normalizeHex(str);
    bool = ckEditor.tools.objectCompare(obj, obj);
    bool = ckEditor.tools.objectCompare(obj, obj, true);
    const strArr: string[] = ckEditor.tools.objectKeys(obj);
    ckEditor.tools.override(parseInt, _parseInt => {
        return (value: any, radix?: number) => {
            return _parseInt(value, radix);
        };
    });
    obj = ckEditor.tools.parseCssText(str);
    obj = ckEditor.tools.parseCssText(str, bool);
    obj = ckEditor.tools.parseCssText(str, bool, bool);
    obj = ckEditor.tools.prototypedCopy(obj);
    ckEditor.tools.removeFunction(1);
    str = ckEditor.tools.repeat(str, 40);
    str = ckEditor.tools.rtrim(str);
    str = ckEditor.tools.search<string>(strArr, "string");
    str = ckEditor.tools.search<string>(strArr, (el: string) => true);
    ckEditor.tools.setCookie("name", "value");
    numb = ckEditor.tools.setTimeout(console.log);
    numb = ckEditor.tools.setTimeout(console.log, 1000);
    numb = ckEditor.tools.setTimeout(console.log, 1000, obj);
    numb = ckEditor.tools.setTimeout(console.log, 1000, obj, "timeout");
    numb = ckEditor.tools.setTimeout(console.log, 1000, obj, "timeout", window);
    str = ckEditor.tools.transformPlainTextToHtml(str, 1);
    str = ckEditor.tools.trim(str);
    ckEditor.tools.tryThese(console.log, console.warn);
    str = ckEditor.tools.writeCssText(obj);
    str = ckEditor.tools.writeCssText(obj, true);

    let rect: CKEDITOR.dom.rect = {
        bottom: 1,
        height: 1,
        left: 1,
        right: 1,
        top: 1,
        width: 1,
        x: 1,
        y: 1,
    };

    rect = ckEditor.tools.getAbsoluteRectPosition(new ckEditor.dom.window(window), rect);

    let buffer = new ckEditor.tools.buffers.event(1000, fn);
    buffer.input();
    buffer.reset();
    const fn2 = (test: string) => {
        console.log("I was deferred by " + test);
    };
    buffer = new ckEditor.tools.buffers.throttle(1000, fn2);
    (buffer as CKEDITOR.tools.buffers.throttle).input("the throttle test.");
}

function test_plugins() {
    ckEditor.plugins.add("abbr", {
        init: (editor: CKEDITOR.editor) => {
            // empty logic
        },
    });

    console.log(ckEditor.plugins.registered["abbr"]);

    ckEditor.plugins.add("myPlugin", {
        icons: "my-plugin-icon",
    });
}

function test_plugin_codesnippet() {
    if (ckEditor.plugins.codesnippet) {
        const highlighter = new ckEditor.plugins.codesnippet.highlighter();
        ckEditor.plugins.codesnippet.setHighlighter(highlighter);
    }
}

function test_plugin_elementsPath() {
    const editor = new ckEditor.editor();
    if (editor._.elementsPath) {
        const elementspath = editor._.elementsPath;
        const list = elementspath.list;
    }
}
