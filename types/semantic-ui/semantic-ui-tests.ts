function test_Accordion() {
    const selector = '.ui.accordion';
    $(selector).accordion('refresh');
    $(selector).accordion('open', 0);
    $(selector).accordion('close others');
    $(selector).accordion('close', 0);
    $(selector).accordion('toggle', 0);
    $(selector).accordion({
        selector: {
            trigger: '.title .icon'
        }
    });
    $(selector).accordion();
}
test_Accordion();

function test_Checkbox() {
    const selector = '.ui.checkbox';
    $(selector).checkbox({});
    $(selector).checkbox();
}
test_Checkbox();

function test_Dimmer() {
    const selector = '.ui.dimmer';
    $(selector).dimmer({});
    $(selector).dimmer();
}
test_Dimmer();

function test_Dropdown() {
    const selector = '.ui.dropdown';
    $(selector).dropdown({});
    $(selector).dropdown();
}
test_Dropdown();

function test_Embed() {
    const selector = '.ui.embed';
    $(selector).embed({});
    $(selector).embed();
}
test_Embed();

function test_Modal() {
    const selector = '.ui.modal';
    $(selector).modal({});
    $(selector).modal();
}
test_Modal();

function test_Nag() {
    const selector = '.ui.nag';
    $(selector).nag({});
}
test_Nag();

function test_Popup() {
    const selector = '.ui.popup';
    $(selector).popup({});
    $(selector).popup();
}
test_Popup();

function test_Progress() {
    const selector = '.ui.progress';
    $(selector).progress({});
    $(selector).progress();
}
test_Progress();

function test_Rating() {
    const selector = '.ui.rating';
    $(selector).rating({});
    $(selector).rating();
}
test_Rating();

function test_Search() {
    const selector = '.ui.search';
    $(selector).search({});
    $(selector).search();
}
test_Search();

function test_Shape() {
    const selector = '.ui.shape';
    $(selector).shape({});
    $(selector).shape();
}
test_Shape();

function test_Sidebar() {
    const selector = '.ui.sidebar';
    $(selector).sidebar({});
    $(selector).sidebar();
}
test_Sidebar();

function test_Sticky() {
    const selector = '.ui.sticky';
    $(selector).sticky({});
    $(selector).sticky();
}
test_Sticky();

function test_Tab() {
    const selector = '.ui.tab';
    $(selector).tab({});
    $(selector).tab();
}
test_Tab();

function test_Transition() {
    const selector = '.ui.transition';
    $(selector).transition({});
    $(selector).transition();
}
test_Transition();

function test_Api() {
    const selector = '.ui.api';
    $(selector).api({});
    $(selector).api();
}
test_Api();

function test_Form() {
    const selector = '.ui.form';
    $(selector).form({});
    $(selector).form();
}
test_Form();

function test_Visibility() {
    const selector = '.ui.visibility';
    $(selector).visibility({});
    $(selector).visibility();
}
test_Visibility();
