/// <reference path="ExtJS.d.ts" />

module MyApp.view {
    export interface CompanyGridPanel extends Ext.grid.IPanel {
    }
}

Ext.define("MyApp.view.CompanyGridPanel", <Ext.grid.IPanel>{
    extend: "Ext.grid.Panel",
    alias: ["widget.myApp-view-companyGridPanel"],

    config: {
        companyStore: null
    },

    initComponent: function () {
        Ext.applyIf(this, {
            itemId: "companyGridPanel",
            title: "Company Listing",
            store: this.companyStore,
            columnLines: true,
            
            columns: [
              <Ext.grid.column.IColumn>{
                  xtype: "gridcolumn",
                  dataIndex: "company",
                  text: "Company",
                  flex: 1
              }, <Ext.grid.column.INumber>{
                  xtype: "numbercolumn",
                  dataIndex: "price",
                  text: "Price",
                  renderer: Ext.util.Format.usMoney
              }, <Ext.grid.column.INumber>{
                  xtype: "numbercolumn",
                  dataIndex: "change",
                  text: "Change",
                  format: "0.00"
              }, <Ext.grid.column.INumber>{
                  xtype: "numbercolumn",
                  dataIndex: "pctChange",
                  text: "% Change",
                  format: "0.00"
              }, <Ext.grid.column.IDate>{
                  xtype: "datecolumn",
                  dataIndex: "lastChange",
                  text: "Last Change"
              }, <Ext.grid.column.IColumn>{
                  xtype: "gridcolumn",
                  dataIndex: "industry",
                  text: "Industry"
              }
            ],

            tbar: [
              <Ext.form.field.ICheckbox>{
                  xtype: "checkbox",
                  itemId: "manufacturingFilter",
                  boxLabel: "Show only Manufacturing companies"
              }
            ]
        });

        return this.callParent(arguments);
    }
});

function test_create() {
    var gridPanel: MyApp.view.CompanyGridPanel = Ext.create("MyApp.view.CompanyGridPanel");
    var isVisible: bool = gridPanel.isVisible();
    gridPanel.setWidth(500);
    var items: Ext.IComponent[] = gridPanel.items;
    var columns: Ext.grid.IColumn[] = gridPanel.columns;
    var isArray: bool = Ext.isArray(columns);
}

function test_events() {
    var gridPanel: MyApp.view.CompanyGridPanel = Ext.create("MyApp.view.CompanyGridPanel");
    gridPanel.on("select", testEventHandler, this);
    gridPanel.fireEvent("select", null, this);
}

function testEventHandler( grid, record, index, eventOptions) {
    return true;
}

// TODO: Add more tests, but the Grid class is one of the most complex components in Ext JS, so using it tests a huge swathe of the underlying definition because it and its parents extend/implement a large number of types.
