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

function text() {
    return $("#result").text();
}

$(document.body).append('<div style="display: none;" id="result"></div>');

$.views.settings.trigger(false);

/*<<<<<<<<<<<<<*/ assert.testGroup("$.templates, and basic link"); /*>>>>>>>>>>>>>*/

    $(document.body).append('<script id="myTmpl" type="text/x-jsrender">{^{:name}} </script>');

    let tmpl = $.templates("#myTmpl");

    assert.ok(tmpl.markup === "{^{:name}} ", 'tmpl = $.templates("#myTmpl")');

    assert.ok($.views.templates("#myTmpl").markup === "{^{:name}} ", 'tmpl = $.views.templates("#myTmpl")');

    assert.ok($.views.templates === $.templates, '$.views.templates === $.templates');

    let data = { name: "Jo" };

    tmpl.link("#result", data);

    assert.ok(text() === "Jo ", 'tmpl.link(...)', 'Template link');

    $.templates("myTmpl", "#myTmpl");

    data = { name: "Bob" };

    $.templates.myTmpl.link("#result", data);

    assert.ok(text() === "Bob ", '$.templates("myTmpl", "#myTmpl"); $.templates.myTmpl.link(...)', 'Named template as expando on $.templates');

    let array = [{ name: "Jo" }, { name: "Amy" }, { name: "Bob" }];

    tmpl.link("#result", array);

    assert.ok(text() === "Jo Amy Bob ", 'tmpl.link("#result", array)', 'Link array');

    let helpers = {
        title: "Mr"
    };

    tmpl = $.templates("tmplFromString", "{^{:~title}} {^{:name}}. ");

    assert.ok(tmpl.tmplName + tmpl.markup + tmpl.useViews === "tmplFromString{^{:~title}} {^{:name}}. true", 'tmpl.tmplName + tmpl.markup + tmpl.useViews', 'tmpl properties');

/*<<<<<<<<<<<<<*/ assert.testGroup("link() access helpers and set noIteration"); /*>>>>>>>>>>>>>*/

    tmpl.link("#result", array, helpers);

    assert.ok(text() === "Mr Jo. Mr Amy. Mr Bob. ", 'tmpl.link(..., array, helpers)', 'Access helpers');

    $.views.helpers("title", "Sir");

    tmpl.link("#result", array, helpers);

    assert.ok(text() === "Mr Jo. Mr Amy. Mr Bob. ", 'tmpl.link(..., array, helpers)', 'Access helpers');

    tmpl.link("#result", array);

    assert.ok(text() === "Sir Jo. Sir Amy. Sir Bob. ", 'tmpl.link(..., array, helpers)', 'Access helpers');

    tmpl = $.templates("{^{:length}} {^{for}}{^{:~title}} {^{:name}} {{/for}}");

    tmpl.link("#result", array, helpers, true);

    assert.ok(text() === "3 Mr Jo Mr Amy Mr Bob ", 'tmpl.link(..., array, helpers, true)', 'Link array, no iteration');

    tmpl.link("#result", array, true);

    assert.ok(text() === "3 Sir Jo Sir Amy Sir Bob ", 'tmpl.link(..., array, true)', 'Link array, no iteration');

    $("#result").link(tmpl, array, helpers, true);

    assert.ok(text() === "3 Mr Jo Mr Amy Mr Bob ", '$("#result").link(tmpl, array, helpers, true)', 'Link array, no iteration');

    $("#result").link(tmpl, array, true);

    assert.ok(text() === "3 Sir Jo Sir Amy Sir Bob ", '$("#result").link(tmpl, array, true)', 'Link array, no iteration');

    $.observable(array).insert({name: "Jane"});
    $.observable(helpers).setProperty({title: "Chief"});
    $.observable(array[0]).setProperty({name: "Fiona"});

    $("#result").link(tmpl, array, helpers, true);
    assert.ok(text() === "4 Chief Fiona Chief Amy Chief Bob Chief Jane ", '$("#result").link(tmpl, array, helpers, true)', 'Observable changes');

    $.views.helpers("title", null);

    tmpl.link("#result", array, true);

    assert.ok(text() === "4  Fiona  Amy  Bob  Jane ", '$.views.helpers("title", null); ...tmpl.link(..., array, true)', 'Unregister named helper, then link array, no iteration');

/*<<<<<<<<<<<<<*/ assert.testGroup("Compile template with private resources"); /*>>>>>>>>>>>>>*/

    tmpl = $.templates({
        markup: "{^{:~title}}{^{:~title2}}{^{:~title3}} {^{upper:name}} {^{full/}} {{include tmpl='inner2'/}}{{include tmpl='inner'/}}",
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

    tmpl.link("#result", array);
    $.observable(array).remove(0);

    assert.ok(text() === "MrSirMs AMY MR Amy Inner2Inner: Mr Amy MR Amy amy MrSirMs BOB MR Bob Inner2Inner: Mr Bob MR Bob bob MrSirMs JANE MR Jane Inner2Inner: Mr Jane MR Jane jane ",
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

    tmpl = $.templates("{^{add first last foo=last/}} {^{privateadd first last /}}");

    tag = $.views.tags("privateadd", function(val1, val2) { return val1 + "!!" + val2; }, tmpl);

    test += tag._is;

    assert.equal(test + tmpl({first: "A", last: "B"}), "tagtagA|B A!!B", '$.views.tags("add", function() { ... })', "create tag from function, public or private");

    $.views
        .tags({add: "{{: ~tagCtx.args[0] + '&' + ~tagCtx.args[1]}}"}) // Create public tag (replaces previous version)
        .tags({privateadd: "{{: ~tagCtx.args[0] + '$$' + ~tagCtx.args[1]}}"}, tmpl); // Create private tag (replaces previous version)

    assert.equal(tmpl({first: "A", last: "B"}), "A&B A$$B", '$.views.tags("add", "...")', "create tag from string, public or private");

    $.views.tags("add", {
        init: function(tagCtx, linkCtx, ctx) {
            this.baseApply(arguments);
            test = this.sortDataMap;
            this.foo = tagCtx.props.foo;
            test = this.render();
            this.template = {markup: "bar"};
        },
        render: function(val1, val2) {
            return val1 + "==" + val2 + ":" + this.foo + "?" + this.ctxPrm("xfoo");
        },
        template: {markup: "none"},
        baseTag: "for",
        contentCtx: true, // function() { return "aaa"; },
        convert: function(val1, val2) {
            return [val1.toLowerCase(), val2.toLowerCase()];
        },
        argDefault: true,
        bindTo: [0, "foo"],
        bindFrom: [0, "foo"],
        flow: false,
        ctx: { x: 'myctx' },
        dataBoundOnly: true,
        boundProps: ["a", "b"],
        depends: function() { return "foo"; },
        mapProps: ["a2", "b2"],
        mapDepends: function() { return "foo"; },
        setSize: true,
        height: 23,
        width: "3em",
        className: "blue",
        linkedElement: [".a", "b"],
        linkedCtxParam: ["w", "xfoo"],
        mainElement: "#d",
        displayElement: "#e",
        trigger: true,
        attr: "html",
        dataMap: null,
        lateRender: false,
        onAfterLink: function(tagCtx, linkCtx, ctx, ev, eventArgs) {},
        onBind: function(tagCtx, linkCtx, ctx, ev, eventArgs) {},
        onUnbind: function(tagCtx, linkCtx, ctx, ev, eventArgs) {},
        onUpdate: false,
        onDispose: function() {},
        convertBack: "upper",
        onBeforeUpdateVal: function(ev, eventArgs) {},
        onBeforeChange: function(ev, eventArgs) {},
        onAfterChange: function(ev, eventArgs) {},
        onArrayChange: function(ev, eventArgs) {},
        setValue: function(value, index, elseBlock) {},
        domChange: function() {},
    });
    $.views.tags({privateadd: {
        template: {markup: "none"},
    }}, tmpl);

    tmpl.link("#result", {first: "Aval", last: "Bval"});

    test = $.views.tags.add.foo;

    assert.equal(text(), "aval==Bval:Bval?bval none", '$.views.tags("add", {...})', "create tag from tagOptions hash, public or private");

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

    tmpl.link("#result", book1);

    assert.ok(text() === "Title: Hope, Price: $1.50, PriceName: $1.50 for Hope",
    'tmpl.link("#result", book1)', "Link vm instance with template");

    book1.title(book1.title() + "+");
    book1.price(book1.price() + "+");

    tmpl.link("#result", book1);

    assert.ok(text() === "Title: Hope+, Price: $1.50+, PriceName: $1.50+ for Hope+",
    'book1.title(newValue)', "Modify vm instance, with setters, then link template");

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

    // Link template against people (array of Person instances)
    tmpl.link("#result", people);

    assert.equal(text(), 'Name: No name, Street: 2nd Ave, Phones:Name: Pete, Street: No street for "Pete", Phones: 333 333 3333 (Pete) ',
    'Person.map(peopleData)', "map data to full VM hierarchy");

    people.merge(peopleData2);

    tmpl.link("#result", people);

    assert.equal(text(), 'Name: Peter, Street: 11 1st Ave, Phones: 111 111 9999 (Peter)  333 333 9999 (Peter) ',
    'people.merge(peopleData2)', "Merge data on full hierarchy");

    people.merge(peopleData);

    tmpl.link("#result", people);

    assert.equal(text(), 'Name: No name, Street: 2nd Ave, Phones:Name: Pete, Street: No street for "Pete", Phones: 333 333 3333 (Pete) ',
    'people.merge(peopleData)', "Merge back to previous data on full hierarchy");

    people[0].name("newName");

    tmpl.link("#result", people);

    assert.equal(text(), 'Name: newName, Street: 2nd Ave, Phones:Name: Pete, Street: No street for "Pete", Phones: 333 333 3333 (Pete) ',
    'people[0].name("newName")', "Change a property, deep in hierarchy");

    people[0].addPhone("xxx xxx xxxx");

    tmpl.link("#result", people);

    assert.equal(text(), 'Name: newName, Street: 2nd Ave, Phones: xxx xxx xxxx (newName) Name: Pete, Street: No street for "Pete", Phones: 333 333 3333 (Pete) ',
    'people[0].addPhone("xxx xxx xxxx")', "Insert instance, deep in hierarchy");

    let updatedPeopleData = people.unmap();

    assert.ok(updatedPeopleData[0].name === "newName" && updatedPeopleData[0].phones[0].number === "xxx xxx xxxx",
    'updatedPeopleData = people.unmap()', "Round-trip back to data");

/*<<<<<<<<<<<<<*/ assert.testGroup("view"); /*>>>>>>>>>>>>>*/

    test = '';

    $.views.helpers("hlp", "Hlp");

    $.views.tags("mytag", {
        init: function(tagCtx, linkCtx, ctx) {
            let view = tagCtx.view;
            test = ""
                + (view === this.tagCtx.view)
                + view.ctxPrm("foo")
                + "(" + view.getIndex() + ")";
        },
        contentCtx: function(arg0) {
            return this.ctx.root;  // The returned value will be the data context inside {{mytag}}
        },
        show: function(this: JsViews.Tag, view: JsViews.View) {
            test += "show";
        },
        do: function(this: JsViews.Tag, tagCtx: JsViews.TagCtx, ev: JsViews.EventObject, eventArgs: JsViews.EvtArgs) {
            data3.a = "A2";
            let view = tagCtx.contentView;
            view.refresh();
            view.ctxPrm("x", "X");

            test += view.ctxPrm("x")
                + (view.parent.views._1 === view && view.parent === this.tagCtx.view)
                + view.content.markup.slice(0, 8)
                + view.type
                + view.parent.type
                + (view.get("mytag").get(true, "mytag") === view)
                + view.get("array").get(true, "item").index
                + view.root.type
                + view.getRsc("helpers", "hlp")
                + " contents: " + view.contents().length + view.contents(true).length + view.contents("em").length + view.contents(true, "em").length
                + " childTags: " + view.parent.childTags().length + view.parent.childTags(true).length + view.parent.childTags("on").length + view.parent.childTags(true, "on").length
                + " nodes: " + view.nodes().length;
        },
        template: "startTag {^{on ~tag.do ~tagCtx id='btn'/}} {{include tmpl=#content /}} endTag"
    });

    tmpl = $.templates("{^{for contentCtx=true start=0 end=1 ~foo ='FOO'}}{^{mytag a 'b' 33}} in tag {^{:~tag.show(#view)}} {^{:a}} <span><em>inspan</em></span> <input data-link='a' id='inp1'/> <input data-link='~hlp' id='inp2'/>{{/mytag}}{{/for}}");

    let data3 = {a: "A"};

    tmpl.link("#result", data3, {ctxHlp: "Ctxhlp"});

    $("#btn").click();

    assert.equal(test,
    "trueFOO(0)showshowshowshowXtrue in tag mytagitemtrue0dataHlp contents: 13501 childTags: 1201 nodes: 13",
    'view.get(), view.parent, view.data, view.contents(), view.childTags(), view.root etc etc', "View APIs tested");

/*<<<<<<<<<<<<<*/ assert.testGroup("tagCtx, linkCtx"); /*>>>>>>>>>>>>>*/

    $.views.tags("mytag", {
        linkedElement: ["input", "#inp"],
        mainElement: "input",
        displayElement: "#inp",
        bindTo: [0, "bar"],
        init: function(tagCtx, linkCtx, ctx) {
            test = '' + linkCtx
                + tagCtx.ctxPrm("foo")
                + tagCtx.view.type
                + tagCtx.args[1]
                + tagCtx.props.bar
                + tagCtx.ctxPrm("foo")
                + (tagCtx.ctx === ctx)
                + tagCtx.bndArgs()
                + tagCtx.cvtArgs()
                + tagCtx.index
                + (this.tagCtxs[0] === tagCtx)
                + tagCtx.params.props.bar
                + (tagCtx.params.ctx && tagCtx.params.ctx.foo)
                + !!tagCtx.render(0, {foo: "FOO2"})
                + (tagCtx.tag === this)
                + tagCtx.tag.tagName
                + (tagCtx.tmpl === null)
                + (tagCtx.tmpl && tagCtx.tmpl.markup)
                + (tagCtx.content && tagCtx.content.markup);
        },
        onBind: function(tagCtx, linkCtx, ctx) {
            test += " tagCtx " + tagCtx.linkedElems[1][0].outerHTML
                + tagCtx.mainElem[0].tagName
                + tagCtx.displayElem[0].tagName
                + tagCtx.contentView.type
                + tagCtx.nodes()[0].textContent
                + tagCtx.contents("#inp")[0].id
                + tagCtx.childTags().length
                + $.isFunction(tagCtx.setValues);
        },
        onAfterLink: function(tagCtx, linkCtx, ctx) {
            test +=  " linkCtx " +linkCtx.data.a
                + linkCtx.elem.tagName
                + linkCtx.elem.tagName
                + (linkCtx.view === tagCtx.view)
                + linkCtx.attr
                + linkCtx.tag.tagName
                + linkCtx.ctx.root.a
                + linkCtx.type;
        }
    });

    tmpl = $.templates("{^{mytag a 'mode' bar=b ~foo='FOO'}}inner{^{:~foo}}<input/><input id='inp'/>{{/mytag}}");
    tmpl.link("#result", {a: "A", b: "B"});
    assert.equal(test, "falseFOOdatamodeBFOOtrueA,modeA,mode0trueb'FOO'truetruemytagfalseinner{^{:~foo}}<input/><input id='inp'/>inner{^{:~foo}}<input/><input id='inp'/>"
    + ' tagCtx <input id="inp">INPUTINPUTmytaginnerinp0true'
    + " linkCtx ASCRIPTSCRIPTtruehtmlmytagAinline",
    'tagCtx.ctxPrm(), linkCtx.attr etc etc', "tagCtx and linkCtx APIs tested, {{myTag ...}}...{{/myTag}}");

/*<<<<<<<<<<<<<*/ assert.testGroup("settings"); /*>>>>>>>>>>>>>*/

    let delims = $.views.settings.delimiters();
    let allowCode = $.views.settings.allowCode();
    let trigger = $.views.settings.trigger();

    $.views.settings.delimiters("<%", "%>", "&");
    $.views.settings.allowCode(true);
    $.views.settings.trigger(true);
    test = "" + $.views.settings.delimiters() + $.views.settings.allowCode() + $.views.settings.trigger();
    $.views.settings.delimiters(delims);
    $.views.settings.allowCode(allowCode);
    $.views.settings.trigger(trigger);

    test += "" + $.views.settings.delimiters() + $.views.settings.allowCode() + $.views.settings.trigger();

    assert.equal(test, "<%,%>,&truetrue{{,}},^falsefalse", "settings.delimiters()/allowCode()/trigger()", "get/set settings");

/*<<<<<<<<<<<<<*/ assert.testGroup("binding"); /*>>>>>>>>>>>>>*/

    tmpl = $.templates('{{include ~person=person}}<input data-link="person.name" id="nmOuter"/>{^{for person}}{^{:name}}<div>{^{:~person.name}}{{if true}} <input data-link="name" id="nm"/> <input data-link="~person.name"/>{{/if}}</div>{{/for}}{{/include}}');
    let data2 = {person: {name: "Jo"} };
    $.link(tmpl, "#result", data2);
    let view = $.view("#nm");
    test = "" + (
        view === $.view("#nm") &&
        view === $.view($("#nm")) &&
        view === $.view($("#nm")[0]) &&
        view === $("#nm").view()
    ); // Different variants of $.view()

    assert.equal(test, "true", "$.view()", "Variants of $.view() and $(...).view()");

    view = $.view("#nm").parent;

    test = "" + (
        view === $.view("#nm", "for") &&
        view === $("#nm").view("for") &&
        view === $.view("#nm").get("for") &&
        view === $("#nm").view().get("for")
    ); // Different variants of $.view(type)

    view = $.view("#nm").root;
    test += "" + (view === $.view("#nm", view.type))
        + "" + (view === $.view("#nm", "root"));

    assert.equal(test, "truetruetrue", "$.view(type)", "Variants of $.view(..., type) and $(...).view(type)");

    view = $.view("#result", true, "for");

    test = "" + (
        view === $.view("#result", true, "for") &&
        view === $("#result").view(true, "for") &&
        view === $("#result").view().get(true, "for") &&
        view === $("#nmOuter").view().get(true, "for")
    ); // Different variants of $.view(true, type)

    test += $("#nmOuter").view(true) === undefined;
    test += $("#nmOuter").view().get(true).type;

    assert.equal(test, "truetruefor", "$.view(type)", "Variants of $.view(..., true, type) and $(...).view(true, type)");

    test = text();
    $("#nmOuter").val("Bob").change();
    test += text();
    test += $.view("#nmOuter").type + $.view("#nm").type;

    $.unlink("#result div");
    $.unlink($("#result div")); // Variant
    $.unlink($("#result div")[0]); // Variant

    $("#nm").val("Jane").change();
    $("#nmOuter").val("Fiona").change();

    test += "| unlink: " + text();
    test += $.view("#nmOuter").type + $.view("#nm").type;

    $.link(tmpl, "#result", data2);
    $("#nm").val("Carlos").change();

    test += "| relink: " + text() + $.view("#nm").type;

    $("#result div").unlink();

    $("#nm").val("Henri").change();

    test += "| unlink2: " + text() + $.view("#nm").type;

    assert.equal(test,  "JoJo  BobBob  includeif| unlink: FionaBob  includefor| relink: CarlosCarlos  if| unlink2: CarlosCarlos  for",
        "$.unlink()", "Data-linking, two-way, and unlink() variants");

    $.link($.templates('{{:length}}{^{:#data[0].person.name}}'), "#result", [data2], {}, true);

    $.observable(data2).setProperty({"person.name": "Maria"});

    test += "| relink array noIteration: " + text();

    assert.equal(test, "JoJo  BobBob  includeif| unlink: FionaBob  includefor| relink: CarlosCarlos  if| unlink2: CarlosCarlos  for| relink array noIteration: 1Maria",
        "$.link(tmpl ...), $.unlink()", "Data-linking, two-way, and link() / unlink() variants");

    data2 = {person: {name: "Jo"} };

    $("#result").html('<div data-link="person.name"></div><div data-link="~hlp"></div><input data-link="person.name"/>');

    $.link(true, "#result", data2);

    test = "link " + text();

    $.observable(data2).setProperty({"person.name": "Fiona"});

    test += text();

    $("#result input").val("Henri").change();

    test += text();

    $.unlink();

    test += " unlink ";

    $("#result input").val("James").change();

    test += text();

    $.observable(data2).setProperty({"person.name": "Fiona"});

    test += text();

    $.link(true, "#result", data2, { hlp: "Helper" });

    test += " link " + text();

    $("#result div").unlink();

    $("#result input").val("Canut").change();

    test += data2.person.name + text();

    $("#result").link(true, data2, { hlp: "Helper" }).link(true, data2, { hlp: "Helper2" });
    test += text();

    $.link(true, "#result", data2, { hlp: "Helper" }).link(true, data2, { hlp: "Helper3" });
    test += text();

    $.observable(data2).setProperty({"person.name": "Reggie"});
    test += text();

    assert.equal(test, "link JoHlpFionaHlpHenriHlp unlink HenriHlpHenriHlp link FionaHelperCanutFionaHelperCanutHelper2CanutHelper3ReggieHelper3",
        "$.link(true ...), $.unlink()", "Data-linking, top-level, declarative");

    $.unlink("#result");

    $("#result").html('<div class="nm"></div><div class="hlp"></div><input class="nm"/>');

    $.link("person.name", "#result .nm", data2, { hlp: "Helper" });
    $.link("~hlp", "#result .hlp", data2, { hlp: "Helper" });

    test = text();

    $("#result input").val("Rick").change();

    test += text();

    $.observable(data2).setProperty({"person.name": "Paul"});

    test += text();

    $.unlink("#result");

    test += " unlink ";

    $("#result input").val("Josephine").change();

    test += text();

    $.observable(data2).setProperty("person.name", "Ray");

    test += text();

    assert.equal(test, "ReggieHelperRickHelperPaulHelper unlink PaulHelperPaulHelper",
        "$.link(expr ...), $.unlink()", "Data-linking, top-level, programmatic");

/*<<<<<<<<<<<<<*/ assert.testGroup("Observable"); /*>>>>>>>>>>>>>*/

    let data4 = {person: {name: "Jo", address: {street: "Main St"}, phones: [1, 2, 3], info: <JsViews.GetSet>null}};

    data4.person.info = function(this: JsViews.Hash<any>) {
        return "info: " + this.name + " " + this.address.street;
    } as JsViews.GetSet;

    data4.person.info.depends = function() {
        return  ["name", "address^street"];
    };

    tmpl = $.templates("{^{:person.name}} {^{:person.address.street}} {^{for person.phones}}{^{:}}{{/for}} {^{:person.info()}} {^{:~personinfo}} {^{:~personstuff()}}");
    tmpl.link("#result", data4, {personinfo: "Joseph", personstuff: function() {
        return "xxx";
    }});

    test = text();

    $.observable(data4).setProperty("person.name", "Ray");
    $.observable(data4).setProperty({"person.address.street": "Broadway"});
    $.observable(data4.person.phones).insert(1, [5, 6]);

    test += text();

    $.observable(data4).setProperty({"person.address": {street: "Narrowway"}});

    test += text();

    $.observable(data4.person.phones).move(1, 2, 2);

    test += text();

    $.observable(data4.person.phones).remove(1);

    test += text();

    $.observable(data4.person.phones).refresh([4, 3, 2, 1]);

    test += text();

    $.view("#result", true, "item").ctxPrm("personinfo", "YYYY");

    test += text();

    assert.equal(test, "Jo Main St 123 info: Jo Main St Joseph xxxRay Broadway 15623"
        + " info: Ray Broadway Joseph xxxRay Broadway 15623"
        + " info: Ray Narrowway Joseph xxxRay Broadway 12563"
        + " info: Ray Narrowway Joseph xxxRay Broadway 1563"
        + " info: Ray Narrowway Joseph xxxRay Broadway 4321"
        + " info: Ray Narrowway Joseph xxxRay Broadway 4321"
        + " info: Ray Narrowway YYYY xxx",
        "$.observable(...)", "Observable APIs");

function keydown(elem: any) {
    if ("oninput" in document) {
        elem.trigger("input");
    } else {
        elem.keydown();
    }
}

    var fullName = function(this: JsViews.Hash<string>, reversed: boolean) {
        return reversed
            ? this.lastName + " " + this.firstName
            : this.firstName + " " + this.lastName;
    } as JsViews.GetSet;

    var person = {
        firstName: "Jeff",
        lastName: "Smith",
        fullName: fullName
    };

    fullName.depends = "*";

    fullName.set = function(val: string) {
        let vals = val.split(" ");
        $.observable(this).setProperty({
            lastName: vals.pop(),
            firstName: vals.join(" ")
        });
    };

    $.templates('{^{:firstName}} {^{:lastName}} {^{:fullName()}} {^{:fullName(true)}} <input id="full" data-link="fullName()"/>')
        .link("#result", person);

    // ................................ Act ..................................
    test = text();

    $.observable(person).setProperty({firstName: "newFirst", lastName: "newLast"});

    test += text();

    $.observable(person).setProperty({fullName: "compFirst compLast"});
    test += text();

    keydown($("#full").val("2wayFirst 2wayLast"));
    test += text();

    assert.equal(test, "Jeff Smith Jeff Smith Smith Jeff newFirst newLast newFirst newLast newLast newFirst compFirst compLast compFirst compLast compLast compFirst compFirst compLast compFirst compLast compLast compFirst ",
        "fullName as JsViews.GetSet; fullName.depends/set etc", "GetSet computed function");
})();
