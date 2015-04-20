/// <reference path="../chai/chai.d.ts" />
/// <reference path="chai-jquery.d.ts" />

// tests taken from https://github.com/chaijs/chai-jquery

declare var $;
var expect = chai.expect;

function test_attr() {
    expect($('#header')).to.have.attr('foo');
    expect($('body')).to.have.attr('foo', 'bar');
    expect($('body')).to.have.attr('foo').match(/bar/);
}

function test_prop() {
    expect($('#header')).to.have.prop('disabled');
    expect($('body')).to.have.prop('disabled', false);
    expect($('body')).to.have.prop('value').match(/bar/);
}

function test_css() {
    expect($('#header')).to.have.css('background');
    expect($('body')).to.have.css('background-color', '#ffffff');
    expect($('body')).to.have.css('font-family').match(/sans-serif/);
}

function test_data() {
    expect($('#header')).to.have.data('foo');
    expect($('body')).to.have.data('foo', 'bar');
    expect($('body')).to.have.data('foo').match(/bar/);
}

function test_class() {
    expect($('#header')).to.have.class('foo');
    expect($('body')).to.have.class('foo');
}

function test_id() {
    expect($('#header')).to.have.id('#main');
    expect($('body')).to.have.id('foo');
}

function test_html() {
    expect($('#header')).to.have.html('<em>John Doe</em>');
    expect($('#title')).to.have.html('Chai Tea');
}

function test_text() {
    expect($('#header')).to.have.text('John Doe');
    expect($('#title')).to.have.text('Chai Tea');
}

function test_value() {
    expect($('.name')).to.have.value('John Doe');
    expect($('.year')).to.have.value('2012');
}

function test_visible() {
    expect($('.name')).to.be.visible;
    expect($('.year')).to.be.visible;
}

function test_hidden() {
    expect($('.name')).to.be.hidden;
    expect($('.year')).to.be.hidden;
}

function test_selected() {
    expect($('option')).to.be.selected;
    expect($('option')).not.to.be.selected;
}

function test_checked() {
    expect($('.checked')).to.be.checked;
    expect($('input')).not.to.be.checked;
}

function test_enabled() {
    expect($('.enabled')).to.be.enabled;
    expect($('enabled')).to.be.enabled;
}

function test_disabled() {
    expect($('.disabled')).to.be.disabled;
    expect($('input')).not.to.be.disabled;
}

function test_empty() {
    expect($('.empty')).to.be.empty;
    expect($('body')).not.to.be.empty;
}

function test_exist() {
    expect($('#exists')).to.exist;
    expect($('#nonexistent')).not.to.exist;
}

function test_match() {
    expect($('input')).to.match('#foo');
    expect($('#empty')).to.match(':empty');
}

function test_contain() {
    expect($('body')).to.contain('text');
    expect($('#content')).to.contain('text');
}

function test_have_selector() {
    expect($('body')).to.have.descendants('h1');
    expect($('#content')).to.have.descendants('div');
}