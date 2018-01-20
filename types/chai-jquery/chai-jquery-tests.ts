

// tests taken from https://github.com/chaijs/chai-jquery

declare var $: ChaiJQueryStatic;
import chai = require('chai');
var expect = chai.expect;

function test_attr() {
    expect($('#foo')).to.have.attr('id');
    expect($('#foo')).to.have.attr('class', 'container');
}

function test_prop() {
    expect($('#foo')).to.have.prop('disabled');
    expect($('#foo')).to.have.prop('disabled', false);
}

function test_css() {
    expect($('#foo')).to.have.css('color');
    expect($('#foo')).to.have.css('font-family', 'serif');
}

function test_data() {
    expect($('#foo')).to.have.data('toggle');
    expect($('#foo')).to.have.css('toggle', 'true');
    expect($('body')).to.have.css('font-family').and.match(/sans-serif/);
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

function test_empty() {
    $('.empty').should.be.empty;
    expect($('body')).not.to.be.empty;
}

function test_exist() {
    $('#exists').should.exist;
    expect($('#nonexistent')).not.to.exist;
}

function test_match_selector() {
    $('input').should.match(/#foo/);
}

function test_contain() {
    $('body').should.contain('text');
    expect($('#content')).to.contain('text');
}

function test_be_selector() {
    expect($('#foo')).to.be(':empty');
}

function test_have_selector() {
    $('body').should.have('h1');
    expect($('#foo')).to.have('div');
}
