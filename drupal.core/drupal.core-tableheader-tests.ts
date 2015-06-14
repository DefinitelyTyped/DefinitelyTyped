/// <reference path="drupal.core.d.ts"/>
/// <reference path="drupal.core-tableheader.d.ts"/>

(function (
    $: JQueryStatic,
    Drupal: drupal.IDrupalStatic
) {

    'use strict';

    var myTableHeader: drupal.Core.ITableHeader
        = new Drupal.TableHeader($('.foo').get(0));

    Drupal.TableHeader.tables.push(myTableHeader);

    myTableHeader.$originalTable = $('.header');
    myTableHeader.$originalHeader = myTableHeader.$originalTable;
    myTableHeader.$originalHeaderCells = myTableHeader.$originalTable;
    myTableHeader.$stickyTable = myTableHeader.$originalTable;
    myTableHeader.$stickyHeaderCells = myTableHeader.$originalTable;

    myTableHeader.tableHeight = 42;
    myTableHeader.tableOffset = {
        left: 42,
        top: 42
    };
    myTableHeader.minHeight = 42;
    myTableHeader.stickyVisible = false;
    myTableHeader.createSticky();
    var position: string = myTableHeader.stickyPosition(42, 42);
    var visible: boolean = myTableHeader.checkStickyVisible();

    $('.bar')
        .scroll(myTableHeader.onScroll)
        .scroll(myTableHeader.recalculateSticky);

}(jQuery, Drupal));
