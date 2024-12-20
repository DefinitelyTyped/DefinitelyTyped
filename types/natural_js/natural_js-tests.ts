N([{}, {}]).each((index, element) => {});
N(".button").remove_(1, 2).instance((instanceName, instance) => {});
N(".button").tpBind("click", function() {});
N(".button").events("click", "grid");
N.locale().charAt(0);
N.locale("en-US");
N(".button").on("click", function(e) {
    N.event.disable(e);
    N.event.isNumberRelatedKeys(e);
});
NC.serialExecute(function(a: any) {
}, function(b: any, c: any) {
});
N.gc.full();
N.gc.ds();
N.gc.minimum();
N.string.trimToZero("");
N.string.rpad("Hello", 10, "World");
N.date.dateList(2024, 12).forEach(function(date) {
    date.forEach(function(date) {
        date.formatDate("Y-m-d");
    });
});
N.element.toOpts(N("div"));
N.browser.scrollbarWidth();
N.browser.cookie("test", "test cookie value", 1, "localhost");

const selector = N("asdf").selector;

N.validator.frn_rrn("");

N.ajax({
    url: "http://localhost:8080",
    type: NA.Objects.Request.HttpMethod.POST,
    dataType: NA.Objects.Request.DataType.JSON,
    enctype: NA.Objects.Request.Enctype.URLENCODED,
});
N.comm(N([]), {
    url: "https://localhost:8080",
}).submit(function() {});
N([]).comm({
    url: "http://localhost:8080",
    type: NA.Objects.Request.HttpMethod.POST,
    dataType: NA.Objects.Request.DataType.JSON,
    enctype: NA.Objects.Request.Enctype.URLENCODED,
}).submit(function(data, request) {});
N.comm(N([]), "https://localhost:8080").request.attr("asd", "").error(
    function(xhr, textStatus, e, request, submitCallback) {
    },
).submit(function(data, request) {
});
N([]).comm({
    url: "http://localhost:8080",
}).request.attr("asd", "").request.attr("asd", "asd").submit(function() {
});

N.context.attr("asdf", 1).attr("asdf");
N.config.filterConfig.successFilters;

const cont = new N.cont(N(".context"), {
    init: function(view, request) {
        view.each(function() {});
        request.attr("param01");
        request.attr("param02", 1);
        request.reload(function(html, request) {
        });
    },
    fn01: function() {
        this.view!.each(function() {});
    },
});
cont.fn01();

N(".context").cont({
    init: function(view, request) {
        view.each(function() {});
    },
    fn01: function() {
        this.view!.each(function() {});
        this.request!.attr("param");
    },
});

N.ds.instance(N().grid(), true)
    .remove()
    .notify(1, "");

new N.formatter(N([{}]), {
    "numeric": [[ND.FormatRules.TRIMTOEMPTY], [ND.FormatRules.NUMERIC, "#,###.##0000"]],
    "generic": [[ND.FormatRules.TRIMTOEMPTY], [ND.FormatRules.GENERIC, "@@ABS"]],
    "limit": [[ND.FormatRules.TRIMTOEMPTY], [ND.FormatRules.LIMIT, "13", "..."]],
    "etc": [[ND.FormatRules.DATE, 12]],
}).format(1);
N([{}]).formatter({
    "numeric": [[ND.FormatRules.TRIMTOEMPTY], [ND.FormatRules.NUMERIC, "#,###.##0000"]],
    "generic": [[ND.FormatRules.TRIMTOEMPTY], [ND.FormatRules.GENERIC, "@@ABS"]],
    "limit": [[ND.FormatRules.TRIMTOEMPTY], [ND.FormatRules.LIMIT, "13", "..."]],
    "etc": [[ND.FormatRules.DATE, 12]],
}).format(1);
N.formatter[ND.FormatRules.RRN]("1234567890123", [7, "*"]);
N.formatter[ND.FormatRules.TRIMTOVAL]("", ["1"]);
new N.validator(N([{}]), {
    "numeric": [[ND.ValidationRules.REQUIRED], [ND.ValidationRules.COMMAS_INTEGER]],
    "generic": [[ND.ValidationRules.REQUIRED], [ND.ValidationRules.KOREAN]],
    "limit": [[ND.ValidationRules.REQUIRED], [ND.ValidationRules.ALPHABET]],
}).validate(1);
N([{}]).validator({
    "numeric": [[ND.ValidationRules.REQUIRED], [ND.ValidationRules.COMMAS_INTEGER]],
    "generic": [[ND.ValidationRules.REQUIRED], [ND.ValidationRules.KOREAN]],
    "limit": [[ND.ValidationRules.REQUIRED], [ND.ValidationRules.ALPHABET]],
}).validate(1);
N.validator[ND.ValidationRules.RRN]("123456-7890123");
N.validator[ND.ValidationRules.MINLENGTH]("123456-7890123", [6]);
N([]).datasort("key", false);
N.data.sort([{}], "key", true);

N(".area").alert("Hello").show();
const alertInst = new N.alert(N(".area"), {
    msg: "Hello",
    onHide: function(msgContext, msgContents) {
        console.log(msgContext, msgContents);
    },
}).show();
alertInst.options.msg = "Hello";
alertInst.context("span").each(function(index, element) {});

N(".button").button({
    color: NU.ButtonColor.PRIMARY_CONTAINER,
    size: NU.ButtonSize.BIG,
    type: NU.ButtonType.ELEVATED,
}).disable();
new N.button(N(".button"), {
    color: NU.ButtonColor.PRIMARY_CONTAINER,
    size: NU.ButtonSize.BIG,
    type: NU.ButtonType.ELEVATED,
}).disable();

N(".input").datepicker({
    maxYear: 300,
}).show();
new N.datepicker(N(".input"), {
    minDate: "20190101",
}).show();

let popup = new N.popup(N(".popup"), {
    title: "Title",
    width: 800,
    draggable: true,
});
popup.open().close();
popup = N().popup({
    url: "page.html",
    title: "Title",
    width: 800,
    draggable: true,
});
popup.open();

N(".tab").tab({
    tabOpts: [{
        url: "http://localhost:8080",
    }],
}).cont().view!.find(".tab-pane").remove();
new N.tab(N(".tab"), {
    tabOpts: [{
        url: "http://localhost:8080",
    }],
}).cont(0).view!.find(".tab-pane").remove();
N(".tab").tab({
    tabOpts: [{
        url: "http://localhost:8080",
    }],
}).open().cont.view!.find(".tab-pane").remove();

let select = new N.select(N([{ a: 1 }]), N(".select", cont.view));
select.data(false).each((index, element) => {});
select.data(true).forEach(function(item) {});
select.context("option").get().forEach(function(item) {});

select = N([{ a: 1 }]).select({
    context: N(".select", cont.view),
});
select.data(false).each((index, element) => {});
select.data().forEach(function(item) {});
select.data(true).forEach(function(item) {});
select.context("option").get().forEach(function(item) {});
const idx = select.index();
const sltInst = select.index(1);
const val = select.val();
const sltInst02 = select.val("val");

let form = N([{ a: 1 }]).form({
    context: N(".form", cont.view),
    onBindValue: (ele, val, action) => {
    },
});
form.data(false).each((index, element) => {});
form = N([{ a: 1 }]).form(N(".form", cont.view));
form.data().forEach(function(item) {});
form.data(true).forEach(function(item) {});
form.context("option").get().forEach(function(item) {});
form.val("col01");
form.val("col01", "value");

new N.list([{ age: 18 }, { age: 22 }], N(".list", cont.view)).bind();
N([{ age: 18 }, { age: 22 }]).list({
    context: N(".list", cont.view),
    height: 200,
    rowHandler: function(index, row, data) {
        if (data.age as number >= 28) {
            row.find("#age").css("background-color", "red");
        }
    },
}).bind();

new N.grid([{ age: 18 }, { age: 22 }], N(".grid", cont.view)).bind();
N([{ age: 18 }, { age: 22 }]).grid({
    context: N(".grid", cont.view),
    height: 200,
    rowHandler: function(index, row, data) {
        if (data.age as number >= 28) {
            row.find("#age").css("background-color", "red");
        }
    },
}).bind();

new N.pagination([{ age: 18 }, { age: 22 }], {
    context: N(".pagination", cont.view),
    onChange: function(pageNo, selEle, selData, currPageNavInfo) {
        N.log(selData);
    },
}).pageNo(3).bind();
N([{ age: 18 }, { age: 22 }]).pagination({
    context: N(".pagination", cont.view),
    onChange: function(pageNo, selEle, selData, currPageNavInfo) {
        N.log(selData);
    },
}).pageNo(3).bind();

new N.tree([{ age: 18 }, { age: 22 }], {
    context: ".treeBlock",
    checkbox: true,
}).bind();

N([{ age: 18 }, { age: 22 }]).tree({
    context: ".treeBlock",
    checkbox: true,
}).bind();

N({
    bottom: 50,
    left: 50,
}).notify({
    alwaysOnTop: true,
}).add("asd");
N.notify({
    top: 50,
    right: 50,
}, {
    alwaysOnTop: true,
}).add("asd");
N.notify({
    top: 50,
    right: 50,
}).add("asd");
N.notify.add("asd", "");

const docs1 = N(".context").docs({
    onEntireLoad: function(docId, entireLoadRequestCnt, entireLoadRequestMaxCnt) {
    },
});
docs1.add("ex-0001", "Example page", { url: "ex.html" });

const docs2 = new N.docs(N(".context"), {
    onEntireLoad: function(docId, entireLoadRequestCnt, entireLoadRequestMaxCnt) {
    },
});
docs2.request.attr("a", 1).request.attr("b", 2).add("page", "Example page", { url: "page.html" });

const inspectionResult = N.code.inspection.test("code");
if (Array.isArray(inspectionResult)) {
    N.code.inspection.report.console(inspectionResult, "/test.js");
}
N.code.addSourceURL("code", "/test.js");

N.template.aop.codes({} as NA.Objects.Controller.Object, function() {});
