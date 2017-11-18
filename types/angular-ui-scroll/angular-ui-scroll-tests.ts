
var myApp = angular.module('application', ['ui.scroll', 'ui.scroll.jqlite']);

namespace application {
    interface IItem {
        id: number;
        content: string;
    }

    class DatasourceTest implements ng.ui.IScrollDatasource<IItem> {
        get(index: number, count: number, success: (results: IItem[]) => void): void {
            var ret = new Array<IItem>();
            for (var i=0; i < count; i++) {
                ret.push({id: i, content: 'item ' + i.toString()});
            }
            success(ret);
        }
    }

    function factory(): any {
        return DatasourceTest;
    }

    myApp.factory('DatasourceTest', factory);

    interface TestScope extends ng.IScope {
        [index: string]: any;
    }

    // demo/examples/adapter
    myApp.controller('mainController', ['$scope', 'DatasourceTest', function($scope: TestScope, datasource: DatasourceTest) {
        var firstListAdapter: ng.ui.IScrollAdapter, secondListAdapter: ng.ui.IScrollAdapter;
        $scope['datasource'] = datasource;

        $scope['updateList1'] = (): void => {
            firstListAdapter.applyUpdates( (item: IItem, scope: ng.IRepeatScope) => {
                return item.content += ' *';
            })
        };

        $scope['removeFromList1'] = (): void => {
            firstListAdapter.applyUpdates( (item: IItem, scope: ng.IRepeatScope) => {
                if (scope.$index % 2 === 0) {
                    return []
                }
            })
        };

        var idList1: number = 1000;
        $scope['addToList1'] = (): void => {
            firstListAdapter.applyUpdates((item: IItem, scope: ng.IRepeatScope) => {
                var newItem: IItem;
                newItem = void 0;
                if (scope.$index === 2) {
                    newItem = {
                        id: idList1,
                        content: 'a new one #' + idList1
                    };
                    idList1++;
                    return [item, newItem];
                }
            });
        };

        $scope['updateList2'] = (): void => {
            secondListAdapter.applyUpdates((item: IItem, scope: ng.IRepeatScope) => {
                return item.content += ' *';
            });
        };

        $scope['removeFromList2'] = (): void => {
            secondListAdapter.applyUpdates((item: IItem, scope: ng.IRepeatScope) => {
                if (scope.$index % 2 !== 0) {
                    return [];
                }
            });
        };

        var idList2: number = 2000;
        $scope['addToList2'] = (): void => {
            secondListAdapter.applyUpdates((item: IItem, scope: ng.IRepeatScope) => {
                var newItem: IItem;
                newItem = void 0;
                if (scope.$index === 4) {
                    newItem = {
                        id: idList2,
                        content: 'a new one #' + idList1
                    };
                    idList2++;
                    return [item, newItem];
                }
            });
        };

    }]);
}

