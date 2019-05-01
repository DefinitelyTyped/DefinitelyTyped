"use strict";
(function() {

function log(code: string, message?: string, success?: boolean) {
    message = message || '';
    if (document && document.body) {
        if (message) {
            message = $.views.converters.html(message);
            message = success === undefined ? "<br/>==== <b><em>" + message + "</em></b> ====<br/>" : message;
        }
        if (!success) {
            message += ": <b>Failure</b>";
        }
        if (code !== undefined) {
            code = $.views.converters.html(code);
            message = arguments.length>1 ? "<code>" + code + "...</code> " + message : "log: " + "<code>" + code + "</code> ";
        }
        $(document.body).append(message + "<br/>");
    } else {
        if (success === undefined) {
            message = "==== " + message + " ====";
        } else {
            if (code) {
                message = code + "... " + message;
            }
            if (!success) {
                message += ": Failure";
            }
        }
        console.log(message);
    }
}

let assert = {
    equal: function(a: string, b: string, code: string, message?: string) {
        log(code, message || '', a === b);
    },
    ok: function(a: boolean, code: string, message?: string) {
        log(code, message || '', a);
    },
    testGroup: function(message: string) {
        log('', message);
    }
};

/*<<<<<<<<<<<<<*/ assert.testGroup("$.templates, and basic render"); /*>>>>>>>>>>>>>*/

    $(document.body).append('<script id="myTmpl" type="text/x-jsrender">{{:name}} </script>');

    let tmpl = $.templates("#myTmpl");

    assert.ok(tmpl.markup === "{{:name}} ", 'tmpl = $.templates("#myTmpl")');

    assert.ok($.views.templates("#myTmpl").markup === "{{:name}} ", 'tmpl = $.views.templates("#myTmpl")');

    assert.ok($.views.templates === $.templates, '$.views.templates === $.templates');

    let data = { name: "Jo" };

    let html = tmpl(data);

    assert.ok(html === "Jo ", 'tmpl(data)', 'Template as render function');

    html = tmpl.render(data);

    assert.ok(html === "Jo ", 'tmpl.render(data)', 'Render function');

    html = $("#myTmpl").render(data);

    assert.ok(html === "Jo ", '$("#myTmpl").render(data)', 'Render function on jQuery instance for script block');

    $.templates("myTmpl", "#myTmpl");

    html = $.render.myTmpl(data);

    assert.ok(html === "Jo ", '$.templates("myTmpl", "#myTmpl"); $.render.myTmpl(data)', 'Named template as expando on $.render');

    html = $.templates.myTmpl(data);

    assert.ok(html === "Jo ", '$.templates("myTmpl", "#myTmpl"); $.templates.myTmpl(data)', 'Named template as expando on $.templates');

    let array = [{ name: "Jo" }, { name: "Amy" }, { name: "Bob" }];

    html = tmpl(array);

    assert.ok(html === "Jo Amy Bob ", 'tmpl(array)', 'Render array');

    let helpers = {
        title: "Mr"
    };

    tmpl = $.templates("tmplFromString", "{{:~title}} {{:name}}. ");

    assert.ok(tmpl.tmplName + tmpl.markup + tmpl.useViews === "tmplFromString{{:~title}} {{:name}}. true", 'tmpl.tmplName + tmpl.markup + tmpl.useViews', 'tmpl properties');

/*<<<<<<<<<<<<<*/ assert.testGroup("render() access helpers and set noIteration"); /*>>>>>>>>>>>>>*/

    html = tmpl(array, helpers);

    assert.ok(html === "Mr Jo. Mr Amy. Mr Bob. ", 'tmpl(array, helpers)', 'Access helpers');

    $(document.body).append('<script id="myTmpl2" type="text/x-jsrender">{{:length}}{{:~title}} {{:name}}. </script>');

    html = $("#myTmpl2").render(array, helpers);

    assert.ok(html === "Mr Jo. Mr Amy. Mr Bob. ", '$("#myTmpl").render(array, helpers)', 'Access helpers');

    tmpl = $.templates("{{:length}} {{for}}{{:~title}} {{:name}} {{/for}}");

    html = tmpl(array, helpers, true);

    assert.ok(html === "3 Mr Jo Mr Amy Mr Bob ", 'tmpl(array, helpers, true)', 'Render array, no iteration');

    html = tmpl.render(array, helpers, true);

    assert.ok(html === "3 Mr Jo Mr Amy Mr Bob ", 'tmpl.render(array, helpers, true)', 'Render array, no iteration');

    $.views.helpers("title", "Sir");

    html = tmpl(array, true);

    assert.ok(html === "3 Sir Jo Sir Amy Sir Bob ", 'tmpl(array, true)', 'Render array, no iteration');

    html = tmpl.render(array, true);

    assert.ok(html === "3 Sir Jo Sir Amy Sir Bob ", 'tmpl.render(array, true)', 'Render array, no iteration');

    html = $("#myTmpl2").render(array, helpers, true);

    assert.ok(html === "3Mr . ", '$("#myTmpl").render(array, helpers, true)', 'Render array, no iteration');

    $.views.helpers("title", null);

    html = tmpl(array, true);

    assert.ok(html === "3  Jo  Amy  Bob ", '$.views.helpers("title", null); ...tmpl(array, true)', 'Unregister named helper, then render array, no iteration');

/*<<<<<<<<<<<<<*/ assert.testGroup("Compile template with private resources"); /*>>>>>>>>>>>>>*/

    tmpl = $.templates({
        markup: "{{:~title}}{{:~title2}}{{:~title3}} {{upper:name}} {{full/}} {{include tmpl='inner2'/}}{{include tmpl='inner'/}}",
        converters: { // private converter
            upper: function(val) {
                return val.toUpperCase();
            }
        },
        tags: { // private tag
            full: "{{upper:~title}} {{:name}}"
        },
        helpers: { // private helper
            title: "Mr"
        },
        templates: { // private template
            inner: "Inner: {{:~title}} {{:name}} {{full/}} {{short/}}"
        }
    });

    $.views.converters({lower: function(val) {return val.toLowerCase();}}, tmpl); // Additional private converter
    $.templates("inner2", "Inner2", tmpl); // Additional private template
    $.views.helpers({title2: "Sir",
        title3: "Ms",
        myob: {amount: 33},
        myfn: function(a: number) {return a + 10;}
    }, tmpl); // Additional private helpers
    $.views.tags("short", "{{lower:name}} ", tmpl); // Additional private tag

    html = tmpl(array);

    assert.ok(html === "MrSirMs JO MR Jo Inner2Inner: Mr Jo MR Jo jo MrSirMs AMY MR Amy Inner2Inner: Mr Amy MR Amy amy MrSirMs BOB MR Bob Inner2Inner: Mr Bob MR Bob bob ",
    'tmpl = $.templates({markup: ..., converters: tags ... etc', 'Compile template with resources');

    assert.equal(
        tmpl.converters.upper("jo") +
        tmpl.converters.lower("JO") +
        tmpl.tags.short.template.markup +
        tmpl.helpers.title +
        tmpl.helpers.title2 +
        tmpl.helpers.title3 +
        tmpl.helpers.myob.amount +
        tmpl.helpers.myfn(5) +
        tmpl.templates.inner.markup +
        tmpl.templates.inner2.markup,
        "JOjo{{lower:name}} MrSirMs3315Inner: {{:~title}} {{:name}} {{full/}} {{short/}}Inner2",
        'tmpl.converters.upper("jo") ... +tmpl.templates.inner2.markup',
        "Accessing tmpl resources");

/*<<<<<<<<<<<<<*/ assert.testGroup("template.useViews"); /*>>>>>>>>>>>>>*/

    assert.ok(!$.templates("{{for/}}").useViews, '$.templates("{{for/}}").useViews' , "useViews defaults to false");

    assert.ok($.templates({
        markup: "{{for/}}",
        useViews: true
    }).useViews, '$.templates({ ... useViews: true, ...})', "useViews forced to true");

    assert.ok($.templates("{{for}}{{:#parent}}{{/for}}").useViews, '$.templates("{{for}}{{:#parent}}{{/for}}").useViews', "useViews defaults to true");

/*<<<<<<<<<<<<<*/ assert.testGroup("$.views.tags()"); /*>>>>>>>>>>>>>*/

    let tag = $.views.tags("add", function(val1, val2) { return val1 + "|" + val2; });

    let test = tag._is;

    tmpl = $.templates("{{add first last foo='FOO'/}} {{privateadd first last /}}");

    tag = $.views.tags("privateadd", function(val1, val2) { return val1 + "!!" + val2; }, tmpl);

    test += tag._is;

    assert.equal(test + tmpl({first: "A", last: "B"}), "tagtagA|B A!!B", '$.views.tags("add", function() { ... })', "create tag from function, public or private");

    $.views
        .tags({add: "{{: ~tagCtx.args[0] + '&' + ~tagCtx.args[1]}}"}) // Create public tag (replaces previous version)
        .tags({privateadd: "{{: ~tagCtx.args[0] + '$$' + ~tagCtx.args[1]}}"}, tmpl); // Create private tag (replaces previous version)

    assert.equal(tmpl({first: "A", last: "B"}), "A&B A$$B", '$.views.tags("add", "...")', "create tag from string, public or private");

    $.views.tags("add", {
      mainElement:".a", // Set mainElem programmatically
        init: function(tagCtx, linkCtx, ctx) {
            this.baseApply(arguments);
            test = this.sortDataMap;
            this.foo = tagCtx.props.foo;
            test = this.render();
            this.template = "some string";
            this.template = {markup: "some content"};
        },
        render: function(val1, val2) {
            this.baseApply(arguments);
            test = this.sortDataMap;
            this.template = "some string";
            this.template = {markup: "some content"};

            return val1 + "==" + val2 + ":" + this.foo + "?" + this.ctx.x;
        },
        template: {markup: "none"},
        baseTag: "for",
        contentCtx: true, // function() { return "aaa"; },
        convert: function(val) { return val.toLowerCase(); },
        argDefault: true,
        bindTo: [0, "foo"],
        bindFrom: [0, "foo"],
        flow: false,
        ctx: { x: 'myctx' }
    });
    $.views.tags({privateadd: {
        template: {markup: "none"},
    }}, tmpl);

    assert.equal(tmpl({first: "A", last: "B"}), "a==B:FOO?myctx none", '$.views.tags("add", {...})', "create tag from tagOptions hash, public or private");

/*<<<<<<<<<<<<<*/ assert.testGroup("$.views.converters()"); /*>>>>>>>>>>>>>*/

    let converter = $.views.converters("add", function(val1, val2) { return val1 + "|" + val2 + ", "; });

    test = converter("a", "b");

    tmpl = $.templates("{{add: first last}} {{privateadd: first last}}");

    converter = $.views.converters({privateadd: function(val1, val2) { return val1 + "!!" + val2 + ", "; }}, tmpl)
        .converters.privateadd; // returns views, then access private converter resource 'privateadd'

    test += converter("c", "d");

    assert.equal(test + "--" + tmpl({first: "A", last: "B"}), "a|b, c!!d, --A|B,  A!!B, ",
    '$.views.converters("add", function() { ... })', "register converter, public or private");

    converter = $.views.converters("add", null);

    assert.ok(converter === null && $.views.converters.add === undefined, '$.views.converters("...", null)', "unregister converter");

/*<<<<<<<<<<<<<*/ assert.testGroup("$.views.helpers()"); /*>>>>>>>>>>>>>*/

    let helper = $.views.helpers("add", function(val1: string, val2: string) { return val1 + "|" + val2 + ", "; });

    test = helper("a", "b");

    tmpl = $.templates("{{:~add(first, last)}} {{:~privateadd(first, last)}}");

    helper = $.views.helpers({privateadd: function(val1: string, val2: string) { return val1 + "!!" + val2 + ", "; }}, tmpl)
        .helpers.privateadd; // returns views, then access private helper resource 'privateadd'

    test += helper("c", "d");

    assert.equal(test + "--" + tmpl({first: "A", last: "B"}), "a|b, c!!d, --A|B,  A!!B, ",
    '$.views.helpers("add", function() { ... })', "register helper, public or private");

    helper = $.views.helpers("add", null);

    assert.ok(helper === null && $.views.helpers.add === undefined, '$.views.helpers("...", null)', "unregister helper");

/*<<<<<<<<<<<<<*/ assert.testGroup("$.views.viewModels()"); /*>>>>>>>>>>>>>*/

    let Book = $.views.viewModels({
        getters: ["title", "price"],
        extend: {nameAndPrice:  function(reverse?: boolean) {
            return reverse ? this._price + " for " + this._title : this._title  + ": " + this._price;
        }}
    });

    let book1 = Book("Hope", "$1.50");

    assert.ok(book1.title() + ": " + book1.price() === "Hope: $1.50"
        && book1.nameAndPrice() === "Hope: $1.50"
        && book1.nameAndPrice(true) === "$1.50 for Hope",
    'VM=$.views.viewModels(vmOptions)', "Create VM, instantiate and access members");

    tmpl = $.templates("Title: {{:title()}}, Price: {{:price()}}, PriceName: {{:nameAndPrice(true)}}");

    html = tmpl.render(book1);

    assert.ok(html === "Title: Hope, Price: $1.50, PriceName: $1.50 for Hope",
    'tmpl.render(book1)', "Render vm instance with template");

    book1.title(book1.title() + "+");
    book1.price(book1.price() + "+");

    html = tmpl.render(book1);

    assert.ok(html === "Title: Hope+, Price: $1.50+, PriceName: $1.50+ for Hope+",
    'book1.title(newValue)', "Modify vm instance, with setters, then render template");

    let MyVMs: JsViews.Hash<JsViews.ViewModel> = {};

    Book = $.views.viewModels("Bk", {
        getters: ["title", "price"],
        extend: {nameAndPrice:  function(reverse: boolean) {
            return reverse ? this._price + " for " + this._title : this._title  + ":" + this._price;
        }}
    });

    assert.ok(Book===$.views.viewModels.Bk, '$.views.viewModels("Bk", vmOptions)', "Register named VM");

    Book = $.views.viewModels("Bk", {
        getters: ["title", "price"],
        extend: {nameAndPrice:  function(reverse: boolean) {
            return reverse ? this._price + " for " + this._title : this._title  + ":" + this._price;
        }}
    }, MyVMs);

    assert.ok(Book===MyVMs.Bk, '$.views.viewModels("Bk", vmOptions, MyVMs)', "Register named VM on local MyVMs collection");

    $.views.viewModels({
        Bk: {
            getters: ["title", "price"],
            extend: {nameAndPrice:  function(reverse: boolean) {
                return reverse ? this._price + " for " + this._title : this._title  + ":" + this._price;
            }}
        }
    });

    $.views.viewModels({
        Bk: {
            getters: ["title", "price"],
            extend: {nameAndPrice:  function(reverse: boolean) {
                return reverse ? this._price + " for " + this._title : this._title  + ":" + this._price;
            }}
        }
    }, MyVMs);

    test = $.views.viewModels.Bk("Hope", "$1.50").title();

    assert.ok(test === "Hope", '$.views.viewModels({Bk: vmOptions})', "Register one or more named VMs");

    test = MyVMs.Bk("Hope", "$1.50").title();

    assert.ok(test === "Hope", '$.views.viewModels({Bk: vmOptions}, MyVMs)', "Register one or more named VMs on local myVms collection");

    let bookData1 = {title: "Faith", price: "$10.50"}; // book (plain object)

    book1 = Book.map(bookData1);                // book (instance of Book View Model)

    assert.ok(book1.title() === "Faith", 'Book.map(...)', "Instantiate vm instance from data, with map()");

    book1.merge({ title: "Hope2", price: "$1.50" });

    assert.ok(book1.title() === "Hope2", 'book.merge(...)', "Modify vm instance from data, with merge()");

    test = book1.unmap();

    assert.ok(test.title === "Hope2" && test.price === "$1.50", 'book.unmap()', "Round-trip data changes back to data, using unmap()");

    let bookDataArray1 = [                      // book array (plain objects)
        {title: "Hope", price: "$1.50"},
        {title: "Courage", price: "$2.50"}
    ];

    let booksArray1 = Book.map(bookDataArray1); // book array (instances of Book View Model)

    booksArray1.merge([
        {title: "Hope2", price: "$1.50"},
        {title: "Courage", price: "$222.50"}
    ]);

    test = booksArray1.unmap();

    assert.ok(test[1].title === "Courage" && test[1].price === "$222.50",
    'bookArray = Book.map(dataArray) bookArray.merge(...) bookArray.unmap()', "Round-trip data array to array of book vm instances");

    tmpl = $.templates("Name: {{:name()}}, Street: {{:address().street()}}, Phones:" +
            "{{for phones()}} {{:number()}} ({{:person.name()}}) {{/for}}");

// The following code is from sample: https://www.jsviews.com/#viewmodelsapi@mergesampleadv plus use of parentRef

    let myVmCollection: JsViews.Hash<JsViews.ViewModel> = {};

    interface Person {
        _name: string;
        _comment: string;
        _address: Address;
        phones: () => Phone[];
    }
    interface Address {
        _street: string;
    }
    interface Phone {
        _number: string;
        id: string;
    }

    $.views.viewModels({
        Person: {
            getters: [
                {getter: "name", defaultVal: "No name"}, // Compiled name() get/set
                {getter: "address", type: "Address", defaultVal: defaultAddress},
                {getter: "phones", type: "Phone", defaultVal: [], parentRef: "person"}
            ],
            extend: {
                name: myNameGetSet,                      // Override name() get/set
                addPhone: addPhone,
                comment: comment                         // Additional get/set property, not initialized by data)
            },
            id: function(vm, plain) {                  // Callback function to determine 'identity'
                return vm.personId === plain.personId;
            }
        },
        Address: {
            getters: ["street"]
        },
        Phone: {
            getters: ["number"],
            id: "phoneId"                              // Treat phoneId as 'primary key', for identity
        }
    }, myVmCollection);                          // Store View Models (typed hierarchy) on myVmCollection

    // Override generated name() get/set
    function myNameGetSet(this: Person, val: string) {
        if (!arguments.length) {                   // This is standard compiled get/set code
            return this._name;                         // If there is no argument, use as a getter
        }
        this._name = val;                          // If there is an argument, use as a setter
    }

    // Method for Person class
    function addPhone(this: Person, phoneNo: string) {                 // Uses myVmCollection.Phone() to construct new instance
        this.phones().push(myVmCollection.Phone(phoneNo, "person", this));
    }

    // get/set for comment (state on View Model instance, not initialized from data)
    function comment(this: Person, val: string) {
        if (!arguments.length) {
            return this._comment;                      // If there is no argument, use as a getter
        }
        this._comment = val;
    }

    function defaultAddress(this: {name: string}) {                  // Function providing default address if undefined in data
        return {street: 'No street for "' + this.name + '"'};
    }

    // First version of data - array of objects (e.g. from JSON request):
    let peopleData = [
        {
        personId: "1",
        address: {
            street: "2nd Ave"
        }
        },
        {
        personId: "2",
        name: "Pete",
        phones: [
            {number: "333 333 3333", phoneId: "2a"}
        ]
        }
    ];

    // Second version of data - JSON string (e.g. new JSON request):
    let peopleData2 = '[{"personId":"2","name":"Peter","address":{"street":"11 1st Ave"},'
    + '"phones":[{"number":"111 111 9999","phoneId":"1a"},{"number":"333 333 9999","phoneId":"2a"}]}]';

    // Instantiate View Model hierarchy using map()
    let people = myVmCollection.Person.map(peopleData);

    // Render template against people (array of Person instances)
    html = tmpl.render(people);

    assert.equal(html, 'Name: No name, Street: 2nd Ave, Phones:Name: Pete, Street: No street for "Pete", Phones: 333 333 3333 (Pete) ',
    'Person.map(peopleData)', "map data to full VM hierarchy");

    people.merge(peopleData2);

    html = tmpl.render(people);

    assert.equal(html, 'Name: Peter, Street: 11 1st Ave, Phones: 111 111 9999 (Peter)  333 333 9999 (Peter) ',
    'people.merge(peopleData2)', "Merge data on full hierarchy");

    people.merge(peopleData);

    html = tmpl.render(people);

    assert.equal(html, 'Name: No name, Street: 2nd Ave, Phones:Name: Pete, Street: No street for "Pete", Phones: 333 333 3333 (Pete) ',
    'people.merge(peopleData)', "Merge back to previous data on full hierarchy");

    people[0].name("newName");

    html = tmpl.render(people);

    assert.equal(html, 'Name: newName, Street: 2nd Ave, Phones:Name: Pete, Street: No street for "Pete", Phones: 333 333 3333 (Pete) ',
    'people[0].name("newName")', "Change a property, deep in hierarchy");

    people[0].addPhone("xxx xxx xxxx");

    html = tmpl.render(people);

    assert.equal(html, 'Name: newName, Street: 2nd Ave, Phones: xxx xxx xxxx (newName) Name: Pete, Street: No street for "Pete", Phones: 333 333 3333 (Pete) ',
    'people[0].addPhone("xxx xxx xxxx")', "Insert instance, deep in hierarchy");

    let updatedPeopleData = people.unmap();

    assert.ok(updatedPeopleData[0].name === "newName" && updatedPeopleData[0].phones[0].number === "xxx xxx xxxx",
    'updatedPeopleData = people.unmap()', "Round-trip back to data");

/*<<<<<<<<<<<<<*/ assert.testGroup("view"); /*>>>>>>>>>>>>>*/

    test = '';

    $.views.helpers("hlp", 555);

    $.views.tags("mytag", {
        init: function(tagCtx, linkCtx, ctx) {
            let view = tagCtx.view;
            test += (view === this.tagCtx.view)
                + view.ctxPrm("foo")
                + "(" + view.getIndex()
                + view.get("array").get(true, "item").index + ")";
        },
        show: function(view) {
            test += (view.parent.views._1 === view && view.parent.parent === this.tagCtx.view)
                + view.parent.content.markup
                + view.type
                + view.parent.type
                + view.root.type
                + view.getRsc("helpers", "hlp");
        } as (this: JsViews.Tag, view: JsViews.View) => void,

        template: "startTag {{include tmpl=#content /}} endTag"
    });

    tmpl = $.templates("{{if true ~foo='FOO'}}{{for start=0 end=1}}{{mytag a 'b' 33}} in tag {{:~tag.show(#view)}} {{/mytag}}{{/for}}{{/if}}");

    html = tmpl();

    assert.equal(test, "trueFOO(00)true in tag {{:~tag.show(#view)}} includemytagdata555",
    'view.get(), view.parent, view.data, view.root etc etc', "View APIs tested");

/*<<<<<<<<<<<<<*/ assert.testGroup("tagCtx"); /*>>>>>>>>>>>>>*/

    $.views.tags("mytag", {
        init: function(tagCtx, linkCtx, ctx) {
            test = '' + linkCtx
                + tagCtx.ctxPrm("foo")
                + tagCtx.view.type
                + tagCtx.args[1]
                + tagCtx.props.bar
                + tagCtx.ctx.foo
                + (tagCtx.ctx === ctx)
                + tagCtx.bndArgs()
                + tagCtx.cvtArgs()
                + tagCtx.index
                + (this.tagCtxs[0] === tagCtx)
                + tagCtx.params.props.bar
                + (tagCtx.params.ctx && tagCtx.params.ctx.foo)
                + tagCtx.render(0, {foo: "FOO2"})
                + (tagCtx.tag === this)
                + tagCtx.tag.tagName
                + (tagCtx.tmpl === null)
                + (tagCtx.tmpl && tagCtx.tmpl.markup)
                + (tagCtx.content && tagCtx.content.markup);
        }
    });

    tmpl = $.templates("{{mytag a 'mode' bar=b ~foo='FOO'}}inner{{:~foo}}{{/mytag}}");
    html = tmpl({a: "A", b: "B"});
    assert.equal(test, "falseFOOdatamodeBFOOtrueA,modeA,mode0trueb'FOO'innerFOO2truemytagfalseinner{{:~foo}}inner{{:~foo}}",
    'tagCtx.ctxPrm(), tagCtx.view, tagCtx.bndArgs(), tagCtx.params etc etc', "TagCtx APIs tested, {{myTag ...}}...{{/myTag}}");

    tmpl = $.templates("{{mytag/}}");
    html = tmpl({a: "A", b: "B"});
    assert.equal(test, "falseundefineddataundefinedundefinedundefinedtrue0trueundefinedundefinedtruemytagfalsefalsefalse",
    'tagCtx.ctxPrm(), tagCtx.view, tagCtx.bndArgs(), tagCtx.params etc etc', "TagCtx APIs tested, {{myTag/}}");

/*<<<<<<<<<<<<<*/ assert.testGroup("settings"); /*>>>>>>>>>>>>>*/

    test = $.views.settings.delimiters();

    $.views.settings.delimiters("<%", "%>", "&");
    $.views.settings.allowCode(true);

    assert.equal("" + $.views.settings.delimiters() + $.views.settings.allowCode(), "<%,%>,&true", "settings.delimiters(), settings.allowCode()", "get/set settings");

    $.views.settings.delimiters(test);
    $.views.settings.allowCode(false);

})();
