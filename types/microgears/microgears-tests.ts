import microgears = require("microgears");


function verify_module_file() {
    var tracePlugin = new TracePlugin();
    microgears.addPlugin(tracePlugin);
    var service = new UserService();
    var userService = microgears.addService(service);


}

class TracePlugin implements microgears.Plugin {
    name: 'TracePlugin';
    public beforeChain(args:Array<any>, _meta: microgears.MetaInformation) {
        var serviceName = _meta.serviceName,
            method = _meta.methodName;
        console.log('before call-> ' + serviceName + '.' + method);

        _meta.extra = {
            count: 1
        };

        return args
    }
    public afterChain(result:any, _meta: microgears.MetaInformation) {
        var serviceName = _meta.serviceName,
            method = _meta.methodName;

        console.log('after of-> ' + serviceName + '.' + method);
        if (_meta.extra.count) {
            console.log('this number comes to the beforeChain: ' + _meta.extra.count);
        }

        return result;
    }
}

class User {
    name: string;
    email: string;

    constructor(name: string, email: string) {
        this.email = email;
        this.name = name;
    }
}

class UserService implements microgears.Service {
    name: string = "userService";
    namespace: string = "services.user";

    public findUserById(id: number) {
        return new User('test', 'test@example.com');
    }

}

