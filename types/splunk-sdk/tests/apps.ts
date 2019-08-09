import * as splunk from "splunk-sdk";

export function test(service: splunk.Service) {
    const apps = service.apps(); // $ExpectType Applications

    apps.fetch({}, (err, fetchedApps) => {
        const apps_ = fetchedApps; // $ExpectType Collection<Application>

        const applications = apps_.list(); // $ExpectType Application[]
        applications.forEach(
            app => { // $ExpectType (app: Application) => void
                app.author(); // $ExpectType string
                app.path(); // $ExpectType string
                app.setupInfo((err, info, search) => { }); // TODO Type this callback
            });
    });
}
