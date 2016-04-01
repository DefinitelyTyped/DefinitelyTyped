/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="jquery.simplePagination.d.ts"/>

var selector = '#elementId';

$(function () {
    $(selector).pagination({
        items: 100,
        itemsOnPage: 10,
        cssStyle: 'light-theme'
    });
});

$(function () {
    $(selector).pagination({
        onPageClick: (page) => {
        }
    });
});

$(function () {
    $(selector).pagination({
        onPageClick: (page, event) => {
        }
    });
});

$(function () {
    $(selector).pagination('selectPage', 1);
});

$(function () {
    $(selector).pagination('prevPage');
});

$(function () {
    $(selector).pagination('nextPage');
});

$(function () {
    $(selector).pagination('getPagesCount');
});

$(function () {
    $(selector).pagination('getCurrentPage');
});

$(function () {
    $(selector).pagination('disable');
});

$(function () {
    $(selector).pagination('enable');
});

$(function () {
    $(selector).pagination('destroy');
});

$(function () {
    $(selector).pagination('redraw');
});

$(function () {
    $(selector).pagination('updateItems', 100);
});