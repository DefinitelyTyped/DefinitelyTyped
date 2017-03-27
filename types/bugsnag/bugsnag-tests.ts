

Bugsnag.apiKey = "API-KEY";

Bugsnag.releaseStage = "beta";
Bugsnag.appVersion = "2.4.56";

Bugsnag.user = <BugsnagUser>{
    name: "Robert K. User",
    email: "robbie@example.com"
};

Bugsnag.metaData = {
    account: {
        name: "Acme Co",
        plan: "hacker"
    }
}

Bugsnag.notifyException(new Error("Something broke"));

Bugsnag.notify("Serious Problem", "We are out of cookies");

Bugsnag.notify("Serious Problem",
               "We are out of cookies",
               { remaining_snacks: ["carrots", "biscuits"] },
               "error");
