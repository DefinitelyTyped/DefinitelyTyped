/// <reference path="ng-table.d.ts" />

interface IPerson {
    age: number;
    name: string;
}

function printPerson(p: IPerson) {
    console.log('age: ' + p.age);
    console.log('name: ' + p.name);
}

// NgTableParams signature tests
namespace NgTableParamsTests {

    let initialParams: NgTable.IParamValues<IPerson> = {
        filter: { name: 'Christian' },
        sorting: { age: 'asc' }
    };
    let settings: NgTable.ISettings<IPerson> = {
        dataset: [{ age: 1, name: 'Christian' }, { age: 2, name: 'Lee' }, { age: 40, name: 'Christian' }],
        filterOptions: {
            filterComparator: true,
            filterDelay: 100
        },
        counts: [10, 20, 50]
    };

    export let tableParams = new NgTableParams(initialParams, settings);

    // modify parameters
    tableParams.filter({ name: 'Lee' });
    tableParams.sorting('age', 'desc');
    tableParams.count(10);
    tableParams.group(item => (item.age * 10).toString());

    // modify settings at runtime
    tableParams.settings({
        dataset: [{ age: 1, name: 'Brandon' }, { age: 2, name: 'Lee' }]
    });

    tableParams.reload<IPerson>().then(rows => {
        rows.forEach(printPerson);
    });
}

// Dynamic table column signature tests
namespace ColumnTests {
    interface ICustomColFields {
        field: string;
    }
    let dynamicCols: (NgTable.Columns.IDynamicTableColDef & ICustomColFields)[];

    dynamicCols.push({
        class: () => 'table',
        field: 'age',
        filter: { age: 'number' },
        sortable: true,
        show: true,
        title: 'Age of Person',
        titleAlt: 'Age'
    });
}

namespace EventsTests {
    declare let events: NgTable.Events.IEventsChannel;

    let unregistrationFuncs: NgTable.Events.IUnregistrationFunc[] = [];
    let x: NgTable.Events.IUnregistrationFunc;

    x = events.onAfterCreated(params => {
        // do stuff
    });
    unregistrationFuncs.push(x);

    x = events.onAfterReloadData((params, newData, oldData) => {
        newData.forEach(row => {
            if (isDataGroup(row)) {
                row.data.forEach(printPerson)
            } else {
                printPerson(row);
            }
        });
    }, NgTableParamsTests.tableParams);
    unregistrationFuncs.push(x);

    x = events.onDatasetChanged((params, newDataset, oldDataset) => {
        if (newDataset != null) {
            newDataset.forEach(printPerson);
        }
    }, NgTableParamsTests.tableParams);
    unregistrationFuncs.push(x);

    x = events.onPagesChanged((params, newButtons, oldButtons) => {
        newButtons.forEach(printPageButton);
    }, NgTableParamsTests.tableParams);
    unregistrationFuncs.push(x);

    unregistrationFuncs.forEach(f => {
        f();
    });


    function printPageButton(btn: NgTable.IPageButton) {
        console.log('type: ' + btn.type);
        console.log('number: ' + btn['number']);
        console.log('current: ' + btn.current);
        console.log('active: ' + btn.active);
    }

    function isDataGroup(row: any): row is NgTable.Data.IDataRowGroup<any> {
        return ('$hideRows' in row);
    }
}