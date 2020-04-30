// Examples from: https://developers.pendo.io/docs/?bash#agent-api

pendo.initialize();

pendo.initialize({});

pendo.initialize({
    visitor: {
        id: "PUT_VISITOR_ID_HERE",
        name: "Neo",
        email: "neo@thematrix.io",
        role: "godlike"
    },
    account: {
        id: "PUT_ACCOUNT_ID_HERE",
        name: "CorpSchmorp"
    }
});

pendo.identify(
    "PUT_VISITOR_ID_HERE",
    "PUT_ACCOUNT_ID_HERE"
);

pendo.identify({
    visitor: {
        id: "PUT_VISITOR_ID_HERE",
        name: "Neo",
        email: "neo@thematrix.io",
        role: "godlike"
    },
    account: {
        id: "PUT_ACCOUNT_ID_HERE",
        name: "CorpSchmorp"
    }
});

pendo.updateOptions({
    visitor: {
        id: 'foo'
    },
    account: {
        id: 'bar',
        TypeOfBusiness: 'brokers',
        dollarPerStop: 'true'
    }
});

pendo.debugging.getEventCache();

pendo.events
    .ready(() => {
        // Do something once `pendo.isReady()` would return `true`
    })
    .guidesLoaded(() => {
        // Do something when Guides load
    })
    .guidesFailed(() => {
        // Do something when Guides fail to load
    });

pendo.initialize({
    apiKey: 'YOUR_API_KEY',
    visitor: { id: "" },
    account: { id: "" },
    events: {
        ready() {
            // Do something when pendo is initialized
        }
    }
});

pendo.track("User Registered", {
    userId: "user.id",
    plan: "user.plan",
    accountType: "Facebook"
});

try {
    throw new Error();
} catch (error) {
    pendo.track("JIRA-12345--error-tripped", {
        message: error.message,
        stack: error.stack
    });
}

pendo.dom("").closest('._pendo-guide-next_');

pendo.onGuideAdvanced();
pendo.onGuideAdvanced({ steps: 2 });
pendo.onGuideDismissed();
