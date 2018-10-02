function test_CKEDITOR() {
    CKEDITOR.basePath = 'test';
    CKEDITOR.replaceClass = 'rich_editor';
    CKEDITOR.skinName = 'moono';
    CKEDITOR.skinName = 'myskin,/customstuff/myskin/';
    var editor: CKEDITOR.editor = new CKEDITOR.editor();
    if (editor.getSelection(true).getType() === CKEDITOR.SELECTION_ELEMENT)
        if (editor.getSelection(false).getType() === CKEDITOR.SELECTION_NONE)
            if (editor.getSelection(true).getType() === CKEDITOR.SELECTION_TEXT)
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

    var textarea = document.createElement('textarea');
    CKEDITOR.replace('myfield');
    CKEDITOR.replace(textarea);
    CKEDITOR.replaceAll();
    CKEDITOR.replaceAll('myClassName');
    CKEDITOR.replaceAll((textarea, config) => false);

    editor = CKEDITOR.appendTo('append here', CKEDITOR.config, 'data');
    editor = CKEDITOR.appendTo(document.createElement('div'));
    CKEDITOR.error('code');
    CKEDITOR.error('500', { moreData: true });
    CKEDITOR.warn('danger');
    CKEDITOR.warn('303', 12345);
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
    var comment3 = new CKEDITOR.dom.comment('Example', new CKEDITOR.dom.document(document));
    var html: string = comment.getOuterHtml();
}

function test_dom_document() {
    var document = new CKEDITOR.dom.document(window.document);
    var type: number = CKEDITOR.NODE_DOCUMENT;
    CKEDITOR.document.appendStyleSheet('/mystyles.css');
    var element: CKEDITOR.dom.element = CKEDITOR.document.getBody();
    alert(element.getName());
    element = CKEDITOR.document.getById('myElement');
    alert(element.getId());
    element = CKEDITOR.document.getHead();
    alert(element.getName());
    var selection = CKEDITOR.instances[0].document.getSelection();
    alert(selection.getType());
    document.write(
        '<html>' +
        '<head><title>Sample Doc</title></head>' +
        '<body>Document contents created by code</body>' +
        '</html>'
        );
    var styles: CSSStyleSheet = document.appendStyleText('some styles');
    element = document.createElement('div');
    element = document.createElement('div', { styles: { height: '1234' } });
    element = document.createElement('div', { attributes: { id: '1234' } });
    element = document.createElement('div', { attributes: { tabIndex: '1234' }, styles: { width: '1234' } });
}

function test_dom_documentFragment() {
    var type = CKEDITOR.NODE_DOCUMENT_FRAGMENT;
    alert(new CKEDITOR.dom.documentFragment(document.body).type === type);
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

    var domObject = new CKEDITOR.dom.domObject(document.createElement('div'));
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
    var first2 = element.getFirst((node: CKEDITOR.dom.node) => node.equals(document.body));
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

    var dtd: CKEDITOR.dtdDefinition = element.getDtd();
    var last: CKEDITOR.dom.node = element.getLast();
    var last2: CKEDITOR.dom.node = element.getLast((node: CKEDITOR.dom.node) => node.equals(document.body));
    if (element.isBlockBoundary({ div: 1, span: 1 })) {
        element.setState(1, 'hex', false);
    }

    CKEDITOR.dom.element.clearMarkers({}, element, true);
    var element1: CKEDITOR.dom.element = CKEDITOR.dom.element.get('div');
    var element6: CKEDITOR.dom.element = CKEDITOR.dom.element.get(document.createElement('div'));
    var element3: CKEDITOR.dom.element = CKEDITOR.dom.element.get(element2);
    var markedElement: CKEDITOR.dom.element = CKEDITOR.dom.element.setMarker({}, element, 'key', 0);
}

function test_dom_elementPath() {
    var path: CKEDITOR.dom.elementPath = new CKEDITOR.dom.elementPath(CKEDITOR.dom.element.get('div'));
    var path2: CKEDITOR.dom.elementPath = new CKEDITOR.dom.elementPath(CKEDITOR.dom.element.get('div'), CKEDITOR.dom.element.get(document.body));

    var dir: 'ltr' | 'rtl' = path.direction();
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
    var paragrah1: CKEDITOR.dom.element = iterator.getNextParagraph();
    var paragrah2: CKEDITOR.dom.element = iterator.getNextParagraph('div');
    alert(!iterator.forceBrBreak);
    var itRange: CKEDITOR.dom.range = iterator.range;
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
    var nodes: CKEDITOR.dom.node[] = nodeList.toArray();
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
    alert(range.endContainer.getPrivate());
    range.selectNodeContents(editor.document.getBody());
    alert(range.endOffset);
    range.selectNodeContents(editor.document.getBody());
    alert(range.startContainer.getDocument());
    range.selectNodeContents(editor.document.getBody());
    alert(range.startOffset);
}

function test_dom_selection() {
    var element: CKEDITOR.dom.element = CKEDITOR.dom.element.get('div');
    var selection: CKEDITOR.dom.selection = new CKEDITOR.dom.selection(new CKEDITOR.dom.document(document));
    selection = new CKEDITOR.dom.selection(element);
    selection = new CKEDITOR.dom.selection(selection);

    var marks: CKEDITOR.dom.bookmark[] = selection.createBookmarks('serialized');
    var marks2: CKEDITOR.dom.bookmark2[] = selection.createBookmarks2({ normalized: true });
    selection.fake(element);
    selection.fake(element, true);
    element = selection.getCommonAncestor();
    var domSel: Selection = selection.getNative();
    var ranges: CKEDITOR.dom.range[] = selection.getRanges();
    ranges = selection.getRanges(true);
    element = selection.getSelectedElement();
    var text: string = selection.getSelectedText();
    element = selection.getStartElement();

    var type: number = selection.getType();

    var isSomething: boolean = selection.isCollapsed();
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
    var element: CKEDITOR.dom.element = CKEDITOR.dom.element.get('div');
    var range: CKEDITOR.dom.range = new CKEDITOR.dom.range(element);

    var walker: CKEDITOR.dom.walker = new CKEDITOR.dom.walker(range);

    var isSomething: boolean = walker.checkBackward();
    isSomething = walker.checkForward();
    walker.end();

    var node: CKEDITOR.dom.node = walker.lastBackward();
    node = walker.lastForward();
    node = walker.next();
    node = walker.previous();
    walker.reset();

    isSomething = CKEDITOR.dom.walker.blockBoundary({ div: 1 })(node);
    isSomething = CKEDITOR.dom.walker.bogus()(node);
    isSomething = CKEDITOR.dom.walker.bogus(isSomething)(node);
    isSomething = CKEDITOR.dom.walker.bookmark()(node);
    isSomething = CKEDITOR.dom.walker.bookmark(true)(node);
    isSomething = CKEDITOR.dom.walker.bookmark(true, false)(node);
    isSomething = CKEDITOR.dom.walker.editable()(node);
    isSomething = CKEDITOR.dom.walker.editable(isSomething)(node);
    isSomething = CKEDITOR.dom.walker.empty()(node);
    isSomething = CKEDITOR.dom.walker.empty(true)(node);
    isSomething = CKEDITOR.dom.walker.ignored()(node);
    isSomething = CKEDITOR.dom.walker.ignored(true)(node);
    isSomething = CKEDITOR.dom.walker.listItemBoundary()(node);
    isSomething = CKEDITOR.dom.walker.nodeType(0)(node);
    isSomething = CKEDITOR.dom.walker.nodeType(1, true)(node);
    isSomething = CKEDITOR.dom.walker.temp()(node);
    isSomething = CKEDITOR.dom.walker.temp(isSomething)(node);
    isSomething = CKEDITOR.dom.walker.whitespaces()(node);
    isSomething = CKEDITOR.dom.walker.whitespaces(isSomething)(node);
}

function test_dom_text() {
    var nativeNode = document.createTextNode('Example');
    var text = new CKEDITOR.dom.text(nativeNode);
    var text2 = new CKEDITOR.dom.text('Example');
    text.substring(1, 2);
    text.substring(1);
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

    var frame: CKEDITOR.dom.element = win.getFrame();
    win.focus();
}

function test_ajax() {
    var req: string = CKEDITOR.ajax.load('https://ckeditor.com/ckeditor-4/');
    req = CKEDITOR.ajax.load('https://ckeditor.com/ckeditor-4/', (data: any) => console.log(data));

    var xml: CKEDITOR.xml = CKEDITOR.ajax.loadXml('https://ckeditor.com/ckeditor-4/');
    xml = CKEDITOR.ajax.loadXml('https://ckeditor.com/ckeditor-4/', (data: any) => console.log(data));

    CKEDITOR.ajax.post('https://ckeditor.com/ckeditor-4/', {});
    CKEDITOR.ajax.post('https://ckeditor.com/ckeditor-4/', {}, 'html');
    CKEDITOR.ajax.post('https://ckeditor.com/ckeditor-4/', {}, 'text', (data: any) => console.log(data));
}

function test_dataProcessor() {
    var processor: CKEDITOR.dataProcessor;
    processor.toDataFormat('html', 'fix');
    processor.toHtml('data');
    processor.toHtml('data', 'fix');
}

function test_dialog() {
    var dialog: CKEDITOR.dialog = new CKEDITOR.dialog(CKEDITOR.instances[0], 'dialog');

    var element: CKEDITOR.dom.element = CKEDITOR.dom.element.get('div');
    dialog.addFocusable(element);
    dialog.addFocusable(element, 13);
    dialog.addPage({ some: true, object: false });
    var ret = dialog.click('1234');
    dialog.commitContent();
    dialog.disableButton('some button');
    dialog.enableButton('4321');
    dialog = dialog.foreach(() => console.log('hey'));

    var button: CKEDITOR.ui.dialog.button = dialog.getButton('button1');
    var uiEl: CKEDITOR.ui.dialog.uiElement = dialog.getContentElement('page1', 'element1');
    element = dialog.getElement();
    var str: string = dialog.getName();
    var numb: number = dialog.getPageCount();
    var editor: CKEDITOR.editor = dialog.getParentEditor();
    var obj: { [key: string]: any } = dialog.getPosition();
    element = dialog.getSelectedElement();
    obj = dialog.getSize();
    obj = dialog.getValueOf('page1', 'ele1');
    dialog.hide();
    dialog.hidePage('1234');
    dialog.layout();
    dialog.move(1, 2, true);
    dialog = dialog.reset();
    dialog.resize(numb, numb);
    dialog.selectPage('1');
    dialog.setState(4);
    dialog.setValueOf('page1', 'ele1', false);
    dialog.setupContent();
    dialog.show();
    dialog.showPage('1234');
    dialog.updateStyle();

    CKEDITOR.dialog.add('abbrDialog', 'PATH/dialogs/abbr.js');
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

    CKEDITOR.dialog.addIframe('frame', 'frame', 1234, 4321);
    CKEDITOR.dialog.addIframe('frame', 'frame', 1234, 4321, () => console.log('loaded'));
    CKEDITOR.dialog.addIframe('frame', 'frame', 1234, 4321, () => console.log('loaded'), obj);

    CKEDITOR.dialog.addUIElement('node', () => console.log('build'));
    CKEDITOR.dialog.cancelButton();
    CKEDITOR.dialog.exists('dialog1');
    CKEDITOR.dialog.exists(1234);
    dialog = CKEDITOR.dialog.getCurrent();

    var isEnabled: boolean = CKEDITOR.dialog.isTabEnabled(editor, 'dialog', 'table');

    CKEDITOR.dialog.okButton();
}

function test_editable() {
    var element: CKEDITOR.dom.element;
    var editor: CKEDITOR.editor;

    var editable: CKEDITOR.editable = new CKEDITOR.editable(editor, element);
    editable = new CKEDITOR.editable(editor, document.createElement('div'));

    editable.attachClass('class');
    editable.attachListener(editable, 'event', (evt: CKEDITOR.eventInfo) => console.log('listen')).removeListener();
    editable.attachListener(new CKEDITOR.event(), 'event', (evt: CKEDITOR.eventInfo) => console.log('listen')).removeListener();
    editable.attachListener(new CKEDITOR.event(), 'event', (evt: CKEDITOR.eventInfo) => console.log('listen'), { scope: 'object' }).removeListener();
    editable.attachListener(editable, 'event', (evt: CKEDITOR.eventInfo) => console.log('listen'), { scope: 'object' }, 'data').removeListener();
    editable.attachListener(editable, 'event', (evt: CKEDITOR.eventInfo) => console.log('listen'), { scope: 'object' }, 'data', 1).removeListener();

    editable.changeAttr('attr', 'val');
    editable.detach();

    var range: CKEDITOR.dom.range;
    editable.insertElement(element);
    editable.insertElement(element, range);
    editable.insertHtml('data');
    editable.insertHtml('data', 'mode');
    editable.insertHtml('data', 'mode', range);
    editable.insertText(new CKEDITOR.dom.text('text'));

    var inline: boolean = editable.isInline();
    editable.setReadOnly(inline);
}

function test_fileTools() {
    var editor: CKEDITOR.editor;
    var def: CKEDITOR.fileTools.uploadWidgetDefinition;
    var loader: CKEDITOR.fileTools.fileLoader;
    var blob: Blob;
    var element: CKEDITOR.dom.element;

    CKEDITOR.fileTools.addUploadWidget(editor, 'editor', def);
    CKEDITOR.fileTools.bindNotification(editor, loader);
    var url: string = CKEDITOR.fileTools.getUploadUrl({ some: 'object' });
    url = CKEDITOR.fileTools.getUploadUrl({ some: 'object' }, 'type');

    var supported = CKEDITOR.fileTools.isTypeSupported(blob, /regex/);
    CKEDITOR.fileTools.markElement(element, 'name', 45);
}

function test_fileTools_fileLoader() {
    var editor: CKEDITOR.editor;
    var def: CKEDITOR.fileTools.uploadWidgetDefinition;
    var blob: Blob;
    var element: CKEDITOR.dom.element;

    var loader: CKEDITOR.fileTools.fileLoader = new CKEDITOR.fileTools.fileLoader(editor, 'data');
    loader = new CKEDITOR.fileTools.fileLoader(editor, blob);
    loader = new CKEDITOR.fileTools.fileLoader(editor, blob, 'name');

    loader.abort();
    var finished: boolean = loader.isFinished();
    loader.load();
    loader.loadAndUpload('url');
    loader.loadAndUpload('url', { someHeader: '1234' });

    loader.update();
    loader.upload('url');
    loader.upload('url', { someHeader: '1234' });
}

function test_fileTools_uploadRepository() {
    var editor: CKEDITOR.editor;
    var blob: Blob;
    var repo: CKEDITOR.fileTools.uploadRepository = new CKEDITOR.fileTools.uploadRepository(editor);

    var loader: CKEDITOR.fileTools.fileLoader = repo.create('data', 'name');
    loader = repo.create(blob, 'name', 'type');

    var fin: boolean = loader.isFinished();
}

function test_filter() {
    var editor: CKEDITOR.editor;
    var style: CKEDITOR.style;

    var filter: CKEDITOR.filter = new CKEDITOR.filter(editor);
    filter = new CKEDITOR.filter('rule');
    filter = new CKEDITOR.filter(style);
    filter = new CKEDITOR.filter([ style, 'rule', [ style, 'rule' ] ]);
    filter = CKEDITOR.filter.instances['1234'];

    filter.addContentForms([ { form: true } ]);
    filter.addElementCallback((el: CKEDITOR.htmlParser.element) => 4);
    filter.addFeature({ allowedContent: style });
    filter.addTransformations([ [ 'transform1', { right: (element: CKEDITOR.htmlParser.element, tools: string | CKEDITOR.filter.transformationTools) => true } ] ]);

    var allowed: boolean = filter.allow(style);
    allowed = filter.allow([style], 'name');
    allowed = filter.allow('rule', 'name', false);

    var apply: boolean = filter.applyTo(CKEDITOR.htmlParser.fragment.fromHtml('string'), true, false, 1);
    apply = filter.applyTo(new CKEDITOR.htmlParser.element('name', null), true, false, 1);

    var checked: boolean = filter.check(style);
    checked = filter.check('rule', true);
    checked = filter.check(style, false, true);

    checked = filter.checkFeature({ allowedContent: style });

    filter = filter.clone();
    filter.destroy();
    filter.disable();

    filter.disallow(filter.disallowedContent);
    var mode: number = filter.getAllowedEnterMode(1);
    mode = filter.getAllowedEnterMode(1, false);
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

    var focusManager = new CKEDITOR.focusManager(CKEDITOR.instances[0]);
    var object: CKEDITOR.dom.domObject = focusManager.currentActive;
    var bool: boolean = focusManager.hasFocus;
}

function test_htmlParser_basicWriter() {
    var writer = new CKEDITOR.htmlParser.basicWriter();
    writer.attribute('class', 'MyClass');
    writer.closeTag('p');
    writer.comment('hello');
    alert(writer.getHtml(true)); // '<p class="MyClass">Hello</p>'
    writer.openTag('p', {});
    writer.openTagClose('p', false);
    writer.reset();
    writer.text('Hello');
    writer.write('data');
}

function test_htmlParser_cdata() {
    var cdata: CKEDITOR.htmlParser.cdata = new CKEDITOR.htmlParser.cdata('hey');
    cdata.writeHtml(new CKEDITOR.htmlParser.basicWriter());
}

function test_htmlParser_comment() {
    var filter: CKEDITOR.htmlParser.filter;
    var comment: CKEDITOR.htmlParser.comment = new CKEDITOR.htmlParser.comment('hey');
    var filtered: boolean = comment.filter(filter);
    comment.writeHtml(new CKEDITOR.htmlParser.basicWriter());
    comment.writeHtml(new CKEDITOR.htmlParser.basicWriter(), filter);
}

function test_htmlParser_cssStyle() {
    var element: CKEDITOR.htmlParser.element;

    var style: CKEDITOR.htmlParser.cssStyle = new CKEDITOR.htmlParser.cssStyle(element);
    style = new CKEDITOR.htmlParser.cssStyle('styles');

    style.populate(element);
    style.populate(new CKEDITOR.dom.element('div'));
    style.populate({ width: 1 });
}

function test_htmlParser_element() {
    var element: CKEDITOR.htmlParser.element = new CKEDITOR.htmlParser.element('el', { id: '1'});

    var node: CKEDITOR.htmlParser.node;
    element.add(node);
    element.add(node, 5);
    element.addClass('class');
    element = element.clone();

    var filter: CKEDITOR.htmlParser.filter;
    var filtered: boolean = element.filter(filter);
    element.filterChildren(filter);

    var nodes: CKEDITOR.htmlParser.node[] = element.find('*');
    nodes = element.find((el: CKEDITOR.htmlParser.node) => false, true);

    element.forEach((el: CKEDITOR.htmlParser.node) => console.log('node'));
    element.forEach((el: CKEDITOR.htmlParser.node) => console.log('node'), 1);
    element.forEach((el: CKEDITOR.htmlParser.node) => false, 2, true);

    node = element.getFirst('*');
    node = element.getFirst({ id: '1' });
    node = element.getFirst((el: CKEDITOR.htmlParser.node) => true);

    var html: string = element.getHtml();
    html = element.getOuterHtml();

    var hasClass: boolean = element.hasClass('class');
    element.removeClass('class');
    element.replaceWithChildren();
    element.setHtml('html');
    var el2: CKEDITOR.htmlParser.element = element.split(1);

    element.writeChildrenHtml(new CKEDITOR.htmlParser.basicWriter());
    element.writeChildrenHtml(new CKEDITOR.htmlParser.basicWriter(), filter);

    element.writeHtml(new CKEDITOR.htmlParser.basicWriter());
    element.writeHtml(new CKEDITOR.htmlParser.basicWriter(), filter);
}

function test_htmlParser_filter() {
    var filter: CKEDITOR.htmlParser.filter = new CKEDITOR.htmlParser.filter({ elementNames: [ 'div' ] });
    filter = new CKEDITOR.htmlParser.filter();

    filter.addRules({ text: 'text' });
    filter.addRules({ attributes: { id: '1234' }}, 1);
    filter.addRules({ comment: 'hey', text: 'text' }, { priority: 1 });
    filter.addRules({ root: document.body }, { applyToAll: false });

    var node: CKEDITOR.htmlParser.node;
    filter.applyTo(node);
}

function test_htmlParser_filterRulesGroup() {
    var rules: CKEDITOR.htmlParser.filterRulesGroup = new CKEDITOR.htmlParser.filterRulesGroup();

    rules.add([ 'some', 'rule' ], 1, { applyToAll: false, excludeNestedEditable: true });

    rules.addMany([ (value: CKEDITOR.htmlParser.node | CKEDITOR.htmlParser.fragment | string) => false, [ 'some', 'rule' ] ], 1, { applyToAll: false });

    var nodeFragOrString: CKEDITOR.htmlParser.node | CKEDITOR.htmlParser.fragment | string;
    nodeFragOrString = rules.exec(nodeFragOrString);

    var str: string;
    str = rules.execOnName(str);

    var idx: number = rules.findIndex(1);
}

function test_htmlParser_fragment() {
    var frag: CKEDITOR.htmlParser.fragment = new CKEDITOR.htmlParser.fragment();

    var node: CKEDITOR.htmlParser.node;
    frag.add(node);
    frag.add(node, 1);

    var filter: CKEDITOR.htmlParser.filter;
    frag.filter(filter);
    frag.filterChildren(filter);
    frag.filterChildren(filter, true);
    frag.forEach((node: CKEDITOR.htmlParser.node) => console.log('node'));
    frag.forEach((node: CKEDITOR.htmlParser.node) => false, 1);
    frag.forEach((node: CKEDITOR.htmlParser.node) => false, 2, true);

    frag.writeChildrenHtml(new CKEDITOR.htmlParser.basicWriter());
    frag.writeChildrenHtml(new CKEDITOR.htmlParser.basicWriter(), filter);

    frag.writeHtml(new CKEDITOR.htmlParser.basicWriter());
    frag.writeHtml(new CKEDITOR.htmlParser.basicWriter(), filter);

    frag = CKEDITOR.htmlParser.fragment.fromBBCode('code');

    var fragOrEl: CKEDITOR.htmlParser.fragment | CKEDITOR.htmlParser.element = CKEDITOR.htmlParser.fragment.fromHtml('html');
    fragOrEl = CKEDITOR.htmlParser.fragment.fromHtml('html', 'parent');
    fragOrEl = CKEDITOR.htmlParser.fragment.fromHtml('html', 'parent', 'fix');
    fragOrEl = CKEDITOR.htmlParser.fragment.fromHtml('html', new CKEDITOR.htmlParser.element('name', null), true);
}

function test_htmlParser_node() {
    var node: CKEDITOR.htmlParser.node = new CKEDITOR.htmlParser.node();

    var el: CKEDITOR.htmlParser.element = node.getAscendant('condition');
    el = node.getAscendant({ id: '1234' });
    el = node.getAscendant((node: CKEDITOR.htmlParser.element) => false);

    var idx: number = node.getIndex();
    node.insertAfter(node);
    node.insertBefore(node);
    node.remove();
    node.replaceWith(node);
    el = node.wrapWith(el);
}

function test_htmlParser_text() {
    var text: CKEDITOR.htmlParser.text = new CKEDITOR.htmlParser.text('text');
    var filtered: boolean = text.filter(new CKEDITOR.htmlParser.filter());
    text.writeHtml(new CKEDITOR.htmlParser.basicWriter());
    text.writeHtml(new CKEDITOR.htmlParser.basicWriter(), new CKEDITOR.htmlParser.filter());
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

function test_keystrokeHandler() {
    var handler: CKEDITOR.keystrokeHandler = new CKEDITOR.keystrokeHandler(CKEDITOR.instances[0]);
    handler.attach(new CKEDITOR.dom.domObject(document.body));
}

function test_lang() {
    var lang: string = CKEDITOR.lang.detect('en');
    lang = CKEDITOR.lang.detect('zh', 'sw');

    CKEDITOR.lang.load('tk', 'pr', (code: string, entries: any) => console.log('loaded'));
}

function test_loader() {
    CKEDITOR.loader.load('script');
    CKEDITOR.loader.load('script', true);

    CKEDITOR.loader.loadPending();
}

function test_menu() {
    var menu: CKEDITOR.menu = new CKEDITOR.menu();

    menu.add({ anything: true });
    menu.addListener((startElement: CKEDITOR.dom.element, selection: CKEDITOR.dom.selection, path: CKEDITOR.dom.elementPath) => 'return');
    var { item, element } = menu.findItemByCommandName('command');
    menu.hide();
    menu.hide(false);
    menu.removeAll();
    menu.show(new CKEDITOR.dom.element('div'));
    menu.show(new CKEDITOR.dom.element('div'), 1);
    menu.show(new CKEDITOR.dom.element('div'), 1, 2);
    menu.show(new CKEDITOR.dom.element('div'), 1, 2, 3);
}

function test_plugins() {
    CKEDITOR.plugins.add('abbr', {
        init: (editor: CKEDITOR.editor) => {
            // empty logic
        }
    });

    console.log(CKEDITOR.plugins.registered['abbr']);
}

function test_resourceManager() {
    var manager: CKEDITOR.resourceManager = new CKEDITOR.resourceManager('path', 'name');

    manager.add('name');
    manager.add('name', { hidpi: true });
    manager.addExternal('names', 'path');
    manager.addExternal('names', 'path', 'name');

    var def: CKEDITOR.pluginDefinition = manager.get('name');
    var path: string = manager.getFilePath('path');
    path = manager.getPath('path');

    manager.load('name', (loaded: string[]) => console.log('hey'));
    manager.load([ 'name' ], (loaded: string[]) => console.log('hey'), manager);
}

function test_scriptLoader() {
    CKEDITOR.scriptLoader.load('url', (succeededUrls: boolean | string[], failedUrls: string[]) => console.log('loaded'));
    CKEDITOR.scriptLoader.load([ 'url' ], (succeededUrls: boolean | string[], failedUrls: string[]) => console.log('loaded'), null);
    CKEDITOR.scriptLoader.load([ 'url' ], (succeededUrls: boolean | string[], failedUrls: string[]) => console.log('loaded'), null, true);
    CKEDITOR.scriptLoader.queue('url', (succeeded: boolean) => console.log('loaded'));
}

function test_skin() {
    CKEDITOR.skin.addIcon('name', 'path');
    CKEDITOR.skin.addIcon('name', 'path', 1);
    CKEDITOR.skin.addIcon('name', 'path', 1, 'small');

    CKEDITOR.skin.chameleon('editor', 'part');

    var style: any = CKEDITOR.skin.getIconStyle('name');
    style = CKEDITOR.skin.getIconStyle('name', true);
    style = CKEDITOR.skin.getIconStyle('name', true, 1);
    style = CKEDITOR.skin.getIconStyle('name', true, 1, 'large');

    var path: any = CKEDITOR.skin.getPath('part');

    CKEDITOR.skin.loadPart('part', () => console.log('load'));

    var path2: string = CKEDITOR.skin.path();
}

function test_style() {
    var style: CKEDITOR.style = new CKEDITOR.style({ element: 'div' }, { key: 'value '});
    style.apply(CKEDITOR.instances[0]);

    var el: CKEDITOR.dom.element;
    style.applyToObject(el, CKEDITOR.instances[0]);

    var range: CKEDITOR.dom.range;
    style.applyToRange(range, CKEDITOR.instances[0]);

    var str: string = style.buildPreview();
    str = style.buildPreview('label');

    var path: CKEDITOR.dom.elementPath;
    var bool: boolean = style.checkActive(path, CKEDITOR.instances[0]);

    var filter: CKEDITOR.filter;
    bool = style.checkApplicable(path, CKEDITOR.instances[0], filter);

    bool = style.checkElementMatch(el, true, CKEDITOR.instances[0]);
    bool = style.checkElementRemovable(el, false, CKEDITOR.instances[0]);

    var def: CKEDITOR.style.definition = style.getDefintion();
    style.remove(CKEDITOR.instances[0]);
    style.removeFromRange(range, CKEDITOR.instances[0]);

    var rules: CKEDITOR.filter.allowedContentRules;
    rules = style.toAllowedContentRules();
    rules = style.toAllowedContentRules(CKEDITOR.instances[0]);
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

    var selection = editor.getSelection(true);
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
    var obj: { [key: string]: any } = { key: 'value' };

    CKEDITOR.tools.addFunction(console.log);
    CKEDITOR.tools.addFunction(console.log, obj);
    var bool = CKEDITOR.tools.arrayCompare([ 1 ], [ 2, 3 ]);
    CKEDITOR.tools.clone(obj);
    CKEDITOR.tools.copy(obj);
    obj = CKEDITOR.tools.createClass(obj);
    var str = CKEDITOR.tools.cssStyleToDomStyle('style');
    var prefixes: { [cssClass: string]: string | number } = CKEDITOR.tools.cssVendorPrefix('prop', 'val');
    prefixes = CKEDITOR.tools.cssVendorPrefix('prop', 'val', true);
    var fn: (param: any) => boolean;
    fn = CKEDITOR.tools.defer<(param: any) => boolean>(fn);
    CKEDITOR.tools.enableHtml5Elements(document);
    CKEDITOR.tools.enableHtml5Elements(document.createDocumentFragment(), true);
    str = CKEDITOR.tools.escapeCss('css');
    var { input, reset } = CKEDITOR.tools.eventsBuffer(1, console.log, obj);
    obj = CKEDITOR.tools.extend(obj, obj, true, obj);
    bool = CKEDITOR.tools.fixDomain();
    str = CKEDITOR.tools.genKey(str);
    str = CKEDITOR.tools.getCookie(str);
    str = CKEDITOR.tools.getCsrfToken();
    var numb: number = CKEDITOR.tools.getIndex<string>(['string', 'array'], (element: string) => false);
    bool = CKEDITOR.tools.getMouseButton(new CKEDITOR.dom.event(document.createEvent(null)));
    str = CKEDITOR.tools.getNextId();
    numb = CKEDITOR.tools.getNextNumber();
    str = CKEDITOR.tools.getUniqueId();
    str = CKEDITOR.tools.htmlDecode(str);
    str = CKEDITOR.tools.htmlDecodeAttr(str);
    str = CKEDITOR.tools.htmlEncode(str);
    str = CKEDITOR.tools.htmlEncodeAttr(str);
    numb = CKEDITOR.tools.indexOf<string>(['string', 'array'], 'string');
    numb = CKEDITOR.tools.indexOf<boolean>([true, false], (val: boolean) => false);
    console.log(CKEDITOR.tools.isArray([1])); // true
    console.log(CKEDITOR.tools.isArray(obj)); // false
    console.log(CKEDITOR.tools.isArray(null)); // false
    console.log(CKEDITOR.tools.isArray(undefined)); // false
    bool = CKEDITOR.tools.isEmpty(obj);
    var ret1: { display: string[], aria: string[] } = CKEDITOR.tools.keystrokeToArray(obj, 1);
    var ret2: { display: string, aria: string }  = CKEDITOR.tools.keystrokeToString(obj, 1);
    str = CKEDITOR.tools.ltrim(str);
    str = CKEDITOR.tools.normalizeCssText(str, bool);
    str = CKEDITOR.tools.normalizeHex(str);
    bool = CKEDITOR.tools.objectCompare(obj, obj);
    bool = CKEDITOR.tools.objectCompare(obj, obj, true);
    var strArr: string[] = CKEDITOR.tools.objectKeys(obj);
    CKEDITOR.tools.override(parseInt, (_parseInt) => {
        return (value: any, radix?: number) => {
            return _parseInt(value, radix);
        };
    });
    obj = CKEDITOR.tools.parseCssText(str);
    obj = CKEDITOR.tools.parseCssText(str, bool);
    obj = CKEDITOR.tools.parseCssText(str, bool, bool);
    obj = CKEDITOR.tools.prototypedCopy(obj);
    CKEDITOR.tools.removeFunction(1);
    str = CKEDITOR.tools.repeat(str, 40);
    str = CKEDITOR.tools.rtrim(str);
    str = CKEDITOR.tools.search<string>(strArr, 'string');
    str = CKEDITOR.tools.search<string>(strArr, (el: string) => true);
    CKEDITOR.tools.setCookie('name', 'value');
    numb = CKEDITOR.tools.setTimeout(console.log);
    numb = CKEDITOR.tools.setTimeout(console.log, 1000);
    numb = CKEDITOR.tools.setTimeout(console.log, 1000, obj);
    numb = CKEDITOR.tools.setTimeout(console.log, 1000, obj, 'timeout');
    numb = CKEDITOR.tools.setTimeout(console.log, 1000, obj, 'timeout', window);
    str = CKEDITOR.tools.transformPlainTextToHtml(str, 1);
    str = CKEDITOR.tools.trim(str);
    CKEDITOR.tools.tryThese([ console.log, console.warn ]);
    str = CKEDITOR.tools.writeCssText(obj);
    str = CKEDITOR.tools.writeCssText(obj, true);
}
