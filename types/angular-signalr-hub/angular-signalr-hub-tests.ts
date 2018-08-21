class EmployeesFactory {
    static $inject = ['$rootScope', 'Hub', '$timeout'];
    private readonly hub: ngSignalr.Hub;
    public all: Array<Employee>;

    constructor($rootScope: ng.IRootScopeService, Hub: ngSignalr.HubFactory, $timeout: ng.ITimeoutService) {
        // declaring the hub connection
        this.hub = new Hub('employee', {
            // client-side methods
            listeners: {
                'lockEmployee': (id: number) => {
                    var employee = this.find(id);
                    employee.Locked = true;
                    $rootScope.$apply();
                },
                'unlockEmployee': (id: number) => {
                    var employee = this.find(id);
                    employee.Locked = false;
                    $rootScope.$apply();
                }
            },

            // server-side methods
            methods: ['lock', 'unlock'],

            // query params sent on initial connection
            queryParams:{
                    'token': 'exampletoken'
            },

            // handle connection error
            errorHandler: (message: string) => {
                console.error(message);
            },

            stateChanged: (state: SignalR.StateChanged) => {
                // your code here
            }
        });
    }

    private find(id: number) {
        for (var i = 0; i < this.all.length; i++) {
            if (this.all[i].Id === id) return this.all[i];
        }

        return null;
    }

    public edit = (employee: Employee) => {
        employee.Edit = true;
        this.hub.invoke('lock', employee.Id);
    };

    public done = (employee: Employee) => {
        employee.Edit = false;
        this.hub.invoke('unlock', employee.Id);
    }
}

interface Employee {
    Id: number;
    Name: string;
    Email: string;
    Salary: number;
    Edit: boolean;
    Locked: boolean;
}

angular
    .module('app', ['SignalR'])
    .factory('Employees', EmployeesFactory);
