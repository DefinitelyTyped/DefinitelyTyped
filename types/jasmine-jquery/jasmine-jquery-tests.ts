describe("Jasmine jQuery extension", () => {
    it("Adds jQuery matchers", () => {
        expect($('<div id="some-id"></div>')).toBe($('div'));
        expect($('<div id="some-id"></div>')).toBe($('div#some-id'));
        expect($('<input type="checkbox" checked="checked"/>')).toBeChecked();
        expect($('<div id="some-id"></div>')).toBeHidden();
        expect($('<div style="display: none; margin: 10px;"></div>')).toHaveCss({ display: "none", margin: "10px" });
        expect($('<div style="display: none; margin: 10px;"></div>')).toHaveCss({ margin: "10px" });
        expect($('<option selected="selected"></option>')).toBeSelected();
        expect($('<div id="some-id"></div>')).toBeVisible();
        // NOTE: It is now necessary to explicitly add the generic parameter when using `toContain`
        expect<JQuery>($('<div><span class="some-class"></span></div>')).toContain('span.some-class');
        expect($('<span></span>').addClass('js-something')).toBeMatchedBy('.js-something');
        expect($('<span></span>')).toExist();
        expect($('<div id="some-id"></div>')).toHaveAttr('id', 'some-id');
        expect($('<input type="checkbox" checked="checked"/>')).toHaveAttr('type');
        expect($('<div id="some-id"></div>')).toHaveProp('id', 'some-id');
        expect($('<input type="checkbox" checked="checked"/>')).toHaveProp('checked');
        expect($('')).toHaveBeenTriggered();
        expect($('')).toHaveBeenTriggeredOn('#some-id');
        expect($('')).toHaveBeenTriggeredOnAndWith('#some-id', 'eventParam');
        expect($('')).toHaveBeenPrevented();
        expect($('')).toHaveBeenPreventedOn('#some-id');
        expect($('')).toHaveBeenStopped();
        expect($('')).toHaveBeenStoppedOn('#some-id');
        expect($('<div class="some-class"></div>')).toHaveClass("some-class");
        expect($('<div data-item="value"></div>')).toHaveData('item', 'value');
        expect($('<div><span></span></div>')).toHaveHtml('<span></span>');
        expect($('<div><ul></ul><h1>header</h1></div>')).toContainHtml('<ul></ul>');
        expect($('<div><ul></ul><h1>header</h1></div>')).toContainText('header');
        expect($('<div id="some-id"></div>')).toHaveId("some-id");
        expect($('<div>some text</div>')).toHaveText('some text');
        expect($('<input type="text" value="some text"/>')).toHaveValue('some text');
        expect($('ul > li')).toHaveLength(3);
        expect($('<input type="submit" disabled ="disabled"/>')).toBeDisabled();
        expect($('<input type="text" />').focus()).toBeFocused();
        //expect($form).toHandle("submit")
        //expect($form).toHandleWith("submit", yourSubmitCallback)
        expect($('<div></div>')).toBeInDOM();
        expect($('<div><span class="some-class"></span></div>')).toContainElement('span.some-class');
        expect($('<div><ul></ul><h1>header</h1></div>')).toContainHtml('<ul></ul>');
        expect($('<div><ul></ul><h1>header</h1></div>')).toContainText('header')
    });

    it("Handles HTML Fixtures", () => {
        jasmine.getFixtures().fixturesPath = 'my/new/path';
        jasmine.getFixtures().containerId = 'my-new-id';

        jasmine.getFixtures().load('myfixture.html');
        jasmine.getFixtures().appendLoad('myfixture.html', 'myfixture2.html');
        jasmine.getFixtures().read('myfixture.html', 'myfixture2.html');
        jasmine.getFixtures().set('<html></html>');
        jasmine.getFixtures().appendSet('<html></html>');
        jasmine.getFixtures().preload('myfixture.html', 'myfixture2.html');
        jasmine.getFixtures().clearCache();
        jasmine.getFixtures().cleanUp();

        loadFixtures('myfixture.html');
        appendLoadFixtures('myfixture.html');
        readFixtures('myfixture.html');
        setFixtures('<html></html>');
        appendSetFixtures('<html></html>');

        sandbox();
        sandbox({
            id: 'my-id',
            class: 'my-class',
            myattr: 'my-attr'
        });

        setFixtures(sandbox({ class: 'my-class' }));
    });

    it("Handles Style Fixtures", () => {
        jasmine.getStyleFixtures().fixturesPath = 'my/new/path';

        jasmine.getStyleFixtures().load('myfixture.css');
        jasmine.getStyleFixtures().appendLoad('myfixture.css', 'myfixture2.css');
        jasmine.getStyleFixtures().set('.elem { position: absolute }');
        jasmine.getStyleFixtures().appendSet('.elem { position: absolute }');
        jasmine.getStyleFixtures().preload('myfixture.css', 'myfixture2.css');
        jasmine.getStyleFixtures().clearCache();
        jasmine.getStyleFixtures().cleanUp();

        loadStyleFixtures('myfixture.css');
        appendLoadFixtures('myfixture.css');
        setStyleFixtures('.elem { position: absolute }');
        appendSetStyleFixtures('.elem { position: absolute }');
    });

    it("Handles JSON Fixtures", () => {
        jasmine.getJSONFixtures().fixturesPath = 'my/new/path';

        jasmine.getJSONFixtures().load('myfixture.json');
        jasmine.getJSONFixtures().read('myfixture.json');
        jasmine.getJSONFixtures().clearCache();

        var data = getJSONFixture('myjsonfixture.json');
        var fixtures = loadJSONFixtures('myjsonfixture.json');
    });

    describe("Event Spies", () => {
        it("First, spy on the event", () => {
            var spyEvent = spyOnEvent('#some_element', 'click');
            $('#some_element').click();
            expect('click').toHaveBeenTriggeredOn('#some_element');
            expect(spyEvent).toHaveBeenTriggered();
        });

        it("You can reset spy events", () => {
            var spyEvent = spyOnEvent('#some_element', 'click');
            $('#some_element').click();
            expect('click').toHaveBeenTriggeredOn('#some_element');
            expect(spyEvent).toHaveBeenTriggered();
            // reset spy events
            spyEvent.reset();
            expect('click').not.toHaveBeenTriggeredOn('#some_element');
            expect(spyEvent).not.toHaveBeenTriggered();
        });

        it("You can similarly check if triggered event was prevented", () => {
            var spyEvent = spyOnEvent('#some_element', 'click');
            $('#some_element').click(function (event) { event.preventDefault(); });
            $('#some_element').click();
            expect('click').toHaveBeenPreventedOn('#some_element');
            expect(spyEvent).toHaveBeenPrevented();
        });

        it("You can also check if the triggered event was stopped", () => {
            var spyEvent = spyOnEvent('#some_element', 'click');
            $('#some_element').click(function (event) { event.stopPropagation(); });
            $('#some_element').click();
            expect('click').toHaveBeenStoppedOn('#some_element');
            expect(spyEvent).toHaveBeenStopped();
        });
    });
});
