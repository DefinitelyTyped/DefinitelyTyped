/// <reference path="../chai/chai.d.ts" />
/// <reference path="chai-jquery.d.ts" />

declare var $;
var expect = chai.expect;

function test_attr() {
    expect($('#foo')).to.have.attr('id');
    expect($('#foo')).to.have.attr('class', 'container');
}

function test_css() {
    expect($('#foo')).to.have.css('color');
    expect($('#foo')).to.have.css('font-family', 'serif');
}

function test_data() {
    expect($('#foo')).to.have.data('toggle');
    expect($('#foo')).to.have.css('toggle', 'true');
}

function test_class() {
    expect($('#foo')).to.have.class('container');
}

function test_id() {
    expect($('#foo')).to.have.id('foo');
}

function test_html() {
    expect($('#foo')).to.have.html('<div>bar</div>');
}

function test_text() {
    expect($('#foo')).to.have.text('bar');
}

function test_value() {
    expect($('#foo')).to.have.value('bar');
}

function test_visible() {
    expect($('#foo')).to.be.visible;
}

function test_hidden() {
    expect($('#foo')).to.be.hidden;
}

function test_selected() {
    expect($('#foo')).to.be.selected;
}

function test_checked() {
    expect($('#foo')).to.be.checked;
}

function test_disabled() {
    expect($('#foo')).to.be.disabled;
}

function test_be_selector() {
    expect($('#foo')).to.be(':empty');
}

function test_have_selector() {
    expect($('#foo')).to.have('div');
}