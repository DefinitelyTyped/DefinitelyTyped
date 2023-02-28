import * as materialize from "materializecss__materialize";

const elem = document.querySelector('.whatever')!;

// $ExpectType Tabs
const _tabs = new M.Tabs(elem);
// $ExpectType Tabs
const el = M.Tabs.init(elem);
// $ExpectType Tabs[]
const els = M.Tabs.init(document.querySelectorAll('.whatever'));

// $ExpectType Tabs
new materialize.Tabs(elem);
// $ExpectType Tabs
const tabs = new materialize.Tabs(elem, {
    duration: 200,
    onShow(content) {
        // $ExpectType Tabs
        this;
        // $ExpectType Element
        content;
    }
});
// $ExpectType void
tabs.destroy();
// $ExpectType void
tabs.select("id");
// $ExpectType TabsOptions
tabs.options;
// $ExpectType Element
tabs.el;
// $ExpectType number
tabs.index;

$(".whatever").tabs();
$(".whatever").tabs({ duration: 200 });
$(".whatever").tabs("destroy");
$(".whatever").tabs("select", "id");
