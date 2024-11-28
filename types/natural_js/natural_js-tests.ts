N(".button").remove_(1, 2);
N(".button").tpBind("click", function () {});
N(".button").events("click", "grid");
N.locale("en-US");
N(".button").on("click", function (e) {
    N.event.disable(e);
    N.event.isNumberRelatedKeys(e);
});
NC.serialExecute(function (a: any) {

}, function (b: any, c: any) {

});
N.gc.full();
N.gc.ds();
N.gc.minimum();
N.string.trimToZero("");
N.string.rpad("Hello", 10, "World");
N.element.toOpts(N("div"));
N.browser.scrollbarWidth();
N.browser.cookie("test", "test cookie value", 1, "localhost");
new Date().formatDate("Y-m-d");

const selector = N("asdf").selector;

N("").datasort("asd", false);
N.validator.frn_rrn("");

N.ajax({
    url: "http://localhost:8080",
    type: NA.Objects.Request.HttpMethod.POST,
    dataType: NA.Objects.Request.DataType.JSON,
    enctype: NA.Objects.Request.Enctype.URLENCODED
});
N.comm(N([]), {
    url: "https://localhost:8080"
}).submit(function () {});
N([]).comm({
    url: "http://localhost:8080",
    type: NA.Objects.Request.HttpMethod.POST,
    dataType: NA.Objects.Request.DataType.JSON,
    enctype: NA.Objects.Request.Enctype.URLENCODED
}).submit(function () {});
N.comm(N([]), "https://localhost:8080").request.attr("asd", "").error(function(xhr, textStatus, e, request, submitCallback) {

}).submit(function () {

});
N([]).comm("http://localhost:8080").request.attr("asd", "").request.attr("asd", "asd").submit(function () {

});

N.context.attr("asdf");

const cont = new N.cont(N(".context"), {
    init: function (view, request) {
        view.each(function () {});
        request.attr("param");
    },
    fn01: function () {
        this.view!.each(function () {});
    }
});
cont.fn01();

N(".context").cont({
    init: function (view, request) {
        view.each(function () {});
    },
    fn01: function () {
        this.view!.each(function () {});
        this.request!.attr("param");
    }
});



N.ds.instance(class {}, true)
    .remove()
    .notify(1, "");

new N.formatter(N([{}]), {
    "numeric" : [[ND.FormatRules.TRIMTOEMPTY], [ND.FormatRules.NUMERIC, "#,###.##0000"]],
    "generic" : [[ND.FormatRules.TRIMTOEMPTY], [ND.FormatRules.GENERIC, "@@ABS"]],
    "limit" : [[ND.FormatRules.TRIMTOEMPTY], [ND.FormatRules.LIMIT, "13", "..."]],
    "etc" : [[ND.FormatRules.DATE, 12]]
}).format(1);
N([{}]).formatter({
    "numeric" : [[ND.FormatRules.TRIMTOEMPTY], [ND.FormatRules.NUMERIC, "#,###.##0000"]],
    "generic" : [[ND.FormatRules.TRIMTOEMPTY], [ND.FormatRules.GENERIC, "@@ABS"]],
    "limit" : [[ND.FormatRules.TRIMTOEMPTY], [ND.FormatRules.LIMIT, "13", "..."]],
    "etc" : [[ND.FormatRules.DATE, 12]]
}).format(1);
N.formatter.rpad("asf", []);
new N.validator(N([{}]), {
    "numeric" : [[ND.ValidationRules.REQUIRED], [ND.ValidationRules.COMMAS_INTEGER]],
    "generic" : [[ND.ValidationRules.REQUIRED], [ND.ValidationRules.KOREAN]],
    "limit" : [[ND.ValidationRules.REQUIRED], [ND.ValidationRules.ALPHABET]]
}).validate(1);
N([{}]).validator({
    "numeric" : [[ND.ValidationRules.REQUIRED], [ND.ValidationRules.COMMAS_INTEGER]],
    "generic" : [[ND.ValidationRules.REQUIRED], [ND.ValidationRules.KOREAN]],
    "limit" : [[ND.ValidationRules.REQUIRED], [ND.ValidationRules.ALPHABET]]
}).validate(1);
N.validator.rrn("asf");
N([]).datasort("key", false);

N(".area").alert("Hello").show();
const alertInst = new N.alert(N(".area"), {
    msg: "Hello"
}).show();
alertInst.options.msg = "Hello";
alertInst.context("span").each(function (index, element) {});

N(".button").button({
    color: "primary_container"
}).disable();
new N.button(N(".button"), {
    color: "primary_container"
}).disable();

N(".tab").tab({
    tabOpts: [{
        url: "http://localhost:8080",
    }]
}).cont().view!.find(".tab-pane").remove();
new N.tab(N(".tab"), {
    tabOpts: [{
        url: "http://localhost:8080",
    }]
}).cont(0).view!.find(".tab-pane").remove();
N(".tab").tab({
    tabOpts: [{
        url: "http://localhost:8080",
    }]
}).open().cont.view!.find(".tab-pane").remove();


N([{}, {}]).each((index, element) => {});


let select = new N.select(N([{a:1}]), N(".select", cont.view));
select.data(false).each((index, element) => {});
select.data(true).forEach(function (item) {});
select.context("option").get().forEach(function (item) {});

select = N([{a:1}]).select({
    context: N(".select", cont.view)
});
select.data(false).each((index, element) => {});
select.data().forEach(function (item) {});
select.data(true).forEach(function (item) {});
select.context("option").get().forEach(function (item) {});
const idx = select.index();
const sltInst = select.index(1);

let form = N([{a:1}]).form({
    context: N(".form", cont.view),
    onBindValue: (ele, val, action) => {

    }
});
form.data(false).each((index, element) => {});
form = N([{a:1}]).form(N(".form", cont.view));
form.data().forEach(function (item) {});
form.data(true).forEach(function (item) {});
form.context("option").get().forEach(function (item) {});

N([]).pagination({
    onChange: function (page) {

    }
}).bind();
new N.pagination(N([]), {
    onChange: function (page) {

    }
}).bind();

N({
    top: 50,
    right: 50
}).notify({
    alwaysOnTop: true
}).add("asd");
N.notify({
    top: 50,
    right: 50
}, {
    alwaysOnTop: true
}).add("asd");
N.notify({
    top: 50,
    right: 50
}).add("asd");
N.notify.add("asd", "");

const docs1 = N(".context").docs({
    onEntireLoad: function(docId, entireLoadRequestCnt, entireLoadRequestMaxCnt) {

    }
});
const docs2 = new N.docs(N(".context"), {
    onEntireLoad: function(docId, entireLoadRequestCnt, entireLoadRequestMaxCnt) {

    }
});

const inspectionResult = N.code.inspection.test("code");
if(Array.isArray(inspectionResult)) {
    N.code.inspection.report.console(inspectionResult, "/test.js");
}
N.code.addSourceURL("code", "/test.js");

N.template.aop.codes({} as NA.Objects.Controller.Object, function () {});
