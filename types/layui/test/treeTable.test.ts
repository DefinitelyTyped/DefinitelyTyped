function treeTableTest() {
    layui.use(() => {
        const treeTable = layui.treeTable;
        var ret = treeTable.render({
            elem: "#test",
            cols: [[]],
            before(options) {
                console.log(options.tree);
            },

            tree: {
                view: {
                    indent: 15,
                    dblClickExpand: true,
                    showIcon: true,
                },
                async: {
                    enable: true,
                    format(trData, options, callback) {
                        console.log(trData, options, callback([{}]));
                    },
                    autoParam: ["id"],
                    contentType: "json",
                    url: "www.123.com",
                },
                callback: {
                    beforeExpand(tableId, trData, expandFlag) {
                        console.log(tableId, trData, expandFlag);
                        return true;
                    },
                    onExpand(tableId, trData, expandFlag) {
                    },
                },
                customName: {
                    children: "child",
                    pid: "parentId",
                },
                data: {
                    isSimpleData: true,
                    cascade: "all",
                    rootPid: null,
                },
            },
        });

        ret.config.tree.view?.icon;
        ret.reload({ tree: {} });
        ret.reloadData({ tree: {} });
        ret.resize();
        ret.setColsWidth();

        treeTable.addNodes("test", {
            index: -1,
            data: {},
            parentIndex: "0",
            focus: true,
        });

        treeTable.checkAllNodes("test", true);
        treeTable.checkStatus("test", true);
        treeTable.getNodesByFilter("test", (node) => true, {
            isSingle: true,
            parentNode: {},
        });
        treeTable.getNodesByFilter("test", (node) => true);
        treeTable.getNodeById("test", "1");
        treeTable.reloadAsyncNode("test", "1");
        treeTable.setRowChecked("test", {
            index: 1,
            checked: true,
            callbackFlag: true,
        });
        treeTable.expandAll("test", true);
        treeTable.expandNode("test", {
            index: 1,
            inherit: true,
        });
        treeTable.getNodeDataByIndex("test", 1);
        treeTable.getData("test", true);
        treeTable.updateNode("test", 2, {});
        treeTable.renderData("id");
        treeTable.reload("id", {
            tree: {},
        });
        treeTable.reloadData("id", {});
        treeTable.on("checkbox(test)", (obj) => {
            console.log(obj.config.tree);
            console.log(obj.setRowChecked({
                index: "1",
                checked: true,
                callbackFlag: true,
            }));
        });
    });
}
