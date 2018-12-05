function test_CKEDITOR() {
    CKEDITOR.basePath = 'test';
    CKEDITOR.replaceClass = 'rich_editor';
    CKEDITOR.skinName = 'moono';
    CKEDITOR.skinName = 'myskin,/customstuff/myskin/';
    var editor = new CKEDITOR.editor();
    if (editor.getSelection().getType() === CKEDITOR.SELECTION_ELEMENT)
        if (editor.getSelection().getType() === CKEDITOR.SELECTION_NONE)
            if (editor.getSelection().getType() === CKEDITOR.SELECTION_TEXT)
                alert(CKEDITOR.basePath);
    if (CKEDITOR.currentInstance)
        alert(CKEDITOR.currentInstance.name);
    alert(CKEDITOR.document.getBody().getName());
    alert(CKEDITOR.instances[0].name);
    CKEDITOR.loadFullCoreTimeout = 5;
    alert(CKEDITOR.revision);
    alert(CKEDITOR.rnd);
    if (CKEDITOR.status === 'loaded') {
        CKEDITOR.loadFullCore();
    }
    alert(CKEDITOR.timestamp);
    CKEDITOR.addCss('.cke_editable h1,.cke_editable h2,.cke_editable h3 { border-bottom: 1px dotted red }');
    CKEDITOR.appendTo('editorSpace');
    alert(CKEDITOR.getUrl('skins/default/editor.css'));
    alert(CKEDITOR.getUrl('/skins/default/editor.css'));
    alert(CKEDITOR.getUrl('http://www.somesite.com/skins/default/editor.css'));
    CKEDITOR.inline('content');
    if (CKEDITOR.loadFullCore)
        CKEDITOR.loadFullCore();
    CKEDITOR.replace('myfield');
    var textarea = document.createElement('textarea');
    CKEDITOR.replace(textarea);
    CKEDITOR.replaceAll();
    CKEDITOR.replaceAll('myClassName');
    CKEDITOR.replaceAll((textarea, config) => false);
}

function test_CKEDITOR_events() {
    CKEDITOR.on('instanceCreated', (event) => {
        // $ExpectType editor
        event.editor;
    });
}

function test_config() {
    var config1: CKEDITOR.config = {
        toolbar: 'basic',
    };
    var config2: CKEDITOR.config = {
        toolbar: [
            [ 'mode', 'document', 'doctools' ],
            [ 'clipboard', 'undo' ],
            '/',
            [ 'find', 'selection', 'spellchecker' ],
            [ 'basicstyles', 'cleanup' ],
            '/',
            [ 'list', 'indent', 'blocks', 'align', 'bidi' ],
        ],
    };
    var config3: CKEDITOR.config = {
        toolbarGroups: [
            { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
            { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
            { name: 'links', groups: [ 'links' ] },
            { name: 'insert', groups: [ 'insert' ] },
            { name: 'tools', groups: [ 'tools' ] },
            { name: 'document', groups: [ 'mode' ] },
            { name: 'about', groups: [ 'about' ] },
            '/',
            { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
            { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'paragraph' ] },
            '/',
            { name: 'styles', groups: [ 'styles' ] },
            { name: 'colors', groups: [ 'colors' ] },
        ],
    };
}

function test_dom_comment() {
    var type = CKEDITOR.NODE_COMMENT;
    var nativeNode = document.createComment('Example');
    var comment = new CKEDITOR.dom.comment(nativeNode);
    var comment2 = new CKEDITOR.dom.comment('Example');
}

function test_dom_document() {
    var document = new CKEDITOR.dom.document(window.document);
    var type = CKEDITOR.NODE_DOCUMENT;
    CKEDITOR.document.appendStyleSheet('/mystyles.css');
    var element = CKEDITOR.document.getBody();
    alert(element.getName());
    var element2 = CKEDITOR.document.getById('myElement');
    alert(element.getId());
    var element3 = CKEDITOR.document.getHead();
    alert(element.getName());
    var selection = CKEDITOR.instances[0].document.getSelection();
    alert(selection.getType());
    document.write(
        '<html>' +
        '<head><title>Sample Doc</title></head>' +
        '<body>Document contents created by code</body>' +
        '</html>'
        );
}

function test_dom_documentFragment() {
    var type = CKEDITOR.NODE_DOCUMENT_FRAGMENT;
}

function test_dom_domObject() {
    var element = new CKEDITOR.dom.element('span');
    alert(element.$.nodeType);
    var nativeElement = element.$;
    var doc = new CKEDITOR.dom.document(document);
    alert(doc.equals(CKEDITOR.document));
    alert(doc === CKEDITOR.document);
    var element2 = new CKEDITOR.dom.element('span');
    alert(element.getCustomData('hasCustomData'));
    alert(element.getCustomData('nonExistingKey'));
    var elementA = new CKEDITOR.dom.element(nativeElement);
    elementA.getPrivate().value = 1;
    var elementB = new CKEDITOR.dom.element(nativeElement).getPrivate().value;
    var element3 = new CKEDITOR.dom.element('span');
    element.setCustomData('hasCustomData', true);
}

function test_dom_element() {
    var element = new CKEDITOR.dom.element('span');
    alert(element.$.nodeType);
    element.addClass('classA');
    element.addClass('classB');
    element.addClass('classA');
    var p = new CKEDITOR.dom.element('p');
    var strong = new CKEDITOR.dom.element('strong');
    p.append(strong);
    var em = p.append('em');
    p = new CKEDITOR.dom.element('p');
    p.appendText('This is');
    p.appendText(' some text');
    element.breakParent(strong);
    element.data('extra-info', 'test');
    alert(element.data('extra-info'));
    element.data('extra-info', false);
    var element5 = CKEDITOR.document.getById('myTextarea');
    element.focus();
    element.focusNext();
    element.focusPrevious();
    element.forEach(node => {
        console.log(node);
    });
    var element2 = CKEDITOR.dom.element.createFromHtml('<input type="text" />');
    alert(element.getAttribute('type'));
    alert(element.getComputedStyle('display'));
    element.appendTo(CKEDITOR.document.getBody());
    alert(element.getEditor().name);
    var first = element.getFirst();
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
    alert(element.is('span'));
    alert(element.is('p', 'span'));
    alert(element.is('p'));
    alert(element.is('p', 'div'));
    alert(element.is({ p: 1, span: 1 }));
    element.removeAttribute('class');
    element.addClass('classA');
    element.addClass('classB');
    element.removeClass('classA');
    element.removeClass('classB');
    element.removeStyle('display');
    element.setAttribute('class', 'myClass');
    element.setAttribute('title', 'This is an example');
    element.setAttributes({
        class: 'myClass',
        title: 'This is an example'
    });
    p.setHtml('<b>Inner</b> HTML');
    element.setOpacity(0.75);
    element.setStyle('background-color', '#ff0000');
    element.setStyle('margin-top', '10px');
    element.setStyle('float', 'right');
    element.setStyles({
        position: 'absolute',
        float: 'right'
    });
    element.setText('A > B & C < D');
    element.show();
    element.unselectable();
    alert(element.getName());
    alert(element === CKEDITOR.dom.element.get(element));
    var htmlElement = document.getElementById('myElement');
    alert(CKEDITOR.dom.element.get(htmlElement).getName());
}

function test_dom_event() {
    var event = new CKEDITOR.dom.event(new Event(""));
    alert(event.getKey());
    alert(event.getKeystroke() === 65);
    alert(event.getKeystroke() === CKEDITOR.CTRL + 65);
    alert(event.getKeystroke() === CKEDITOR.CTRL + CKEDITOR.SHIFT + 65);
    var element = new CKEDITOR.dom.element('div');
    element.on('mousemouse', ev => {
        var pageOffset = ev.data.getPageOffset();
        alert(pageOffset.x);
        alert(pageOffset.y);
    });
    element.on('click', ev => {
        var domEvent = ev.data;
        domEvent.getTarget().addClass('clicked');
    });
    element.on('click', ev => {
        var domEvent = ev.data as CKEDITOR.dom.event;
        domEvent.preventDefault();
    });
}

function test_dom_iterator() {
    var range = new CKEDITOR.dom.range(new CKEDITOR.dom.element('div'));
    var iterator = range.createIterator();
    iterator.getNextParagraph();
    iterator.getNextParagraph();
}

function test_dom_node() {
    var p = new CKEDITOR.dom.element('p');
    var strong = new CKEDITOR.dom.element('strong');
    strong.appendTo(p);
    var node = new CKEDITOR.dom.node(new Node());
    node = node.getAscendant('b');
    node = node.getAscendant('b', true);
    var element = CKEDITOR.document.getById('example');
    alert(element.getDocument().equals(CKEDITOR.document));
    element.getIndex();
    element.getIndex(true);
    var last = element.getFirst().getNext();
    var parent = node.getParent();
    alert(parent.getName());
    var parents = node.getParents();
    var em = new CKEDITOR.dom.element('em');
    strong.insertAfter(em);
    strong.insertBefore(em);
    strong.insertBeforeMe(em);
    element.isReadOnly();
}

function test_dom_nodeList() {
    var nodeList = CKEDITOR.document.getBody().getChildren();
    alert(nodeList.count());
}

function test_dom_range() {
    var editor = new CKEDITOR.editor();
    var range = new CKEDITOR.dom.range(editor.document);
    range.selectNodeContents(editor.document.getBody());
    range.deleteContents();
    range.selectNodeContents(editor.document.getBody());
    alert(range.collapsed);
    range.collapse();
    alert(range.collapsed);
    range.selectNodeContents(range.document.getBody());
    range.selectNodeContents(editor.document.getBody());
    alert(range.endContainer.getName());
    range.selectNodeContents(editor.document.getBody());
    alert(range.endOffset);
    range.selectNodeContents(editor.document.getBody());
    alert(range.startContainer.getName());
    range.selectNodeContents(editor.document.getBody());
    alert(range.startOffset);
}

function test_dom_text() {
    var nativeNode = document.createTextNode('Example');
    var text = new CKEDITOR.dom.text(nativeNode);
    var text2 = new CKEDITOR.dom.text('Example');
}

function test_dom_window() {
    var document = new CKEDITOR.dom.window(window);
    var win = new CKEDITOR.dom.window(window);
    var pos = win.getScrollPosition();
    alert(pos.x);
    alert(pos.y);
    var size = win.getViewPaneSize();
    alert(size.width);
    alert(size.height);
}

function test_adding_command_and_buttons() {
    var textarea = document.createElement('textarea');
    var instance = CKEDITOR.replace(textarea);

    instance.addCommand('aCommand', {
        exec: (editor: CKEDITOR.editor) => {
            // empty logic
            return true;
        }
    });

    instance.ui.addButton('firstButton', {
        icon: 'http://www.example.com/assets/images/icons.png',
        iconOffset: -32,
        label: 'Label 1',
        command: 'aCommand',
        toolbar: 'tools'
    });

    instance.ui.addButton('secondButton', {
        label: 'Label 2',
        command: 'aCommand',
        toolbar: 'tools'
    });
}

function test_adding_dialog_by_path() {
    CKEDITOR.dialog.add('abbrDialog', 'PATH/dialogs/abbr.js');
}

function test_adding_dialog_by_definition() {
    CKEDITOR.dialog.add('abbrDialog', (editor: CKEDITOR.editor) => {
        return {
            title: 'Abbreviation Properties',
            minWidth: 400,
            minHeight: 200,
            onLoad: () => {},
            onOk: () => {},
            onCancel: () => {},
            onShow: () => {},
            onHide: () => {},
            contents: [
                {
                    id: 'tab-basic',
                    label: 'Basic Settings',
                    elements: <any[]> []
                },
                {
                    id: 'tab-adv',
                    label: 'Advanced Settings',
                    elements: []
                }
            ]
        };
    });
}

function test_plugins() {
    CKEDITOR.plugins.add('abbr', {
        init: (editor: CKEDITOR.editor) => {
            // empty logic
        }
    });

    console.log(CKEDITOR.plugins.registered['abbr']);
}

function test_adding_widget() {
    function wrapper(editor: CKEDITOR.editor) {
            editor.widgets.add("widgetty", {
            button: "Activate widgetty",
            template: "<imaginary-element>",
            dialog: "widgetty",
            init: () => {
                // no logic
            }
        });
    }
}

function test_focusManager() {
    var textarea = document.createElement('textarea');
    var instance = CKEDITOR.replace(textarea);
    var element = CKEDITOR.document.getById('myElement');

    instance.focusManager.focus();
    instance.focusManager.focus(element);
    instance.focusManager.lock();
    instance.focusManager.unlock();
    instance.focusManager.blur();
    instance.focusManager.blur(true);
    instance.focusManager.add(element, true);
    instance.focusManager.remove(element);

    var focusManager = new CKEDITOR.focusManager(instance);
    var object: CKEDITOR.dom.domObject = focusManager.currentActive;
    var bool: boolean = focusManager.hasFocus;
}

function test_basicWriter() {
    var writer = new CKEDITOR.htmlParser.basicWriter();
    writer.openTag('p', {});
    writer.attribute('class', 'MyClass');
    writer.openTagClose('p', false);
    writer.text('Hello');
    writer.closeTag('p');
    alert(writer.getHtml(true)); // '<p class="MyClass">Hello</p>'
}

function test_htmlWriter() {
    var writer = new CKEDITOR.htmlWriter();
    writer.openTag('p', {});
    writer.attribute('class', 'MyClass');
    writer.openTagClose('p', false);
    writer.text('Hello');
    writer.closeTag('p');
    alert(writer.getHtml(true)); // '<p class="MyClass">Hello</p>'

    writer.indentationChars = '\t';
    writer.lineBreakChars = '\r\n';
    writer.selfClosingEnd = '>';
    writer.indentation();
    writer.lineBreak();
    writer.setRules('img', {breakBeforeOpen: true, breakAfterOpen: true});
}

function test_sharedSpace() {
    CKEDITOR.inline('content', {
        removePlugins: 'maximize,resize',
        sharedSpaces: {
            top: 'someElementId',
            bottom: document.getElementById('anotherId')
        }
    });

    CKEDITOR.inline('content', {
        sharedSpaces: { }
    });
}

function test_specifying_editor_path() {
    window.CKEDITOR_BASEPATH = '/ckeditor/';
}

function test_editor_instance_event() {
    var textarea = document.createElement('textarea');
    var instance = CKEDITOR.replace(textarea, {
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
            widgetDefinition: () => {}
        }
    });
}

function test_dtd() {
    var brConsideredEmptyTag = CKEDITOR.dtd.$empty['br'];
    var spanCanContainText = CKEDITOR.dtd['span']['#'];
    var divCanContainSpan = CKEDITOR.dtd['div']['span'];
}

function test_getSelectedHtml() {
    var textarea = document.createElement('textarea');
    var editor = CKEDITOR.replace(textarea);

    // $ExpectType documentFragment
    var sel1 = editor.getSelectedHtml();
    console.log(sel1);

    // $ExpectType documentFragment
    var sel2 = editor.getSelectedHtml(false);
    console.log(sel2);

    // $ExpectType string
    var sel3 = editor.getSelectedHtml(true);
    console.log(sel3);

    // $ExpectType string | documentFragment
    var sel4 = editor.getSelectedHtml(Math.random() > 0.5);
    console.log(sel4);
}

function test_element() {
    var el = CKEDITOR.document.getById('myElement');
    el.addClass('class');
    console.log(el.hasClass('class'));
    el.removeClass('class');
}

function test_selection() {
    var editor = new CKEDITOR.editor();
    var testNode = CKEDITOR.document.getById('myElement');

    var selection = editor.getSelection();
    var ranges = selection.getRanges();
    for (var i = 0, c = ranges.length; i < c; i++) {
        var range = ranges[i];
        range.setStartBefore(testNode);
        range.setStartAfter(testNode);
        range.setEndBefore(testNode);
        range.setEndAfter(testNode);
    }
}

function test_tools() {
    var obj = { key: 'value' };
    CKEDITOR.tools.clone(obj);
    CKEDITOR.tools.copy(obj);
    CKEDITOR.tools.prototypedCopy(obj);

    console.log(CKEDITOR.tools.isArray([1])); // true
    console.log(CKEDITOR.tools.isArray(obj)); // false
    console.log(CKEDITOR.tools.isArray(null)); // false
    console.log(CKEDITOR.tools.isArray(undefined)); // false

    CKEDITOR.tools.override(parseInt, (_parseInt) => {
        return (value: any, radix?: number) => {
            return _parseInt(value, radix);
        };
    });
}

function test_htmlParser() {
    var html = '<div><span>text</span></div>';
    var fragment = CKEDITOR.htmlParser.fragment.fromHtml(html);
    fragment.forEach((node) => {
        if (node instanceof CKEDITOR.htmlParser.element) {
            node.forEach((node) => {
                console.log(node);
            });
        }
    }, CKEDITOR.NODE_ELEMENT, true);
}
