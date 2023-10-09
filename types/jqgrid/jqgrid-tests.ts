var mydata: any[] = [];

$("#jqGrid")
    .jqGrid({
        datatype: "local",
        data: mydata,
        loadonce: true,
        gridview: true,
        height: 400,
        shrinkToFit: true,
        width: null,
        colModel: [
            { label: "Name", name: "id", width: 75, key: true, align: "left" },
            { label: "Description", name: "description", width: 100 },
        ],
        viewrecords: true, // show the current page, data rang and total records on the toolbar
        caption: "Matches",
        onSelectRow(id: any, status: any, e: Event) {},
    });
