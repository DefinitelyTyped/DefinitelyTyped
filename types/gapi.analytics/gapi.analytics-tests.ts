// Type definitions for Google Analytics API

function test_namespace() {
    var analytics : boolean = gapi.client.analytics instanceof Object;

    var provisioning : boolean = gapi.client.analytics.provisioning.createAccountTicket instanceof Function;
    analytics = analytics && provisioning;

    var data : boolean = gapi.client.analytics.data.ga.get instanceof Function;
    data = data && gapi.client.analytics.data.mcf.get instanceof Function;
    data = data && gapi.client.analytics.data.realtime.get instanceof Function;
    analytics = analytics && data;

    interface AnalyticsParameter {
        "type"              ?: string;
        "description"       ?: string;
        "default"           ?: string;
        "enum"              ?: string[];
        "enumDescriptions"  ?: string[];
        "location"          ?: string;
    }
    var kBI : AnalyticsParameter = new gapi.client.analytics.kB.parameters.alt();
    var kB = !!kBI;
    kBI = new gapi.client.analytics.kB.parameters.fields();
    kB = kB && !!kBI;
    kBI = new gapi.client.analytics.kB.parameters.key();
    kB = kB && !!kBI;
    kBI = new gapi.client.analytics.kB.parameters.oauth_token();
    kB = kB && !!kBI;
    kBI = new gapi.client.analytics.kB.parameters.prettyPrint();
    kB = kB && !!kBI;
    kBI = new gapi.client.analytics.kB.parameters.quotaUser();
    kB = kB && !!kBI;
    kBI = new gapi.client.analytics.kB.parameters.userIP();
    kB = kB && !!kBI;
    analytics = analytics && kB;

    var management : boolean = gapi.client.analytics.management.accountSummaries.list instanceof Function;
    management = management && gapi.client.analytics.management.accountUserLinks.list instanceof Function;
    management = management && gapi.client.analytics.management.accounts.list instanceof Function;
    management = management && gapi.client.analytics.management.customDataSources.list instanceof Function;
    management = management && gapi.client.analytics.management.customDimensions.list instanceof Function;
    management = management && gapi.client.analytics.management.customMetrics.list instanceof Function;
    management = management && gapi.client.analytics.management.experiments.list instanceof Function;
    management = management && gapi.client.analytics.management.filters.list instanceof Function;
    management = management && gapi.client.analytics.management.goals.list instanceof Function;
    management = management && gapi.client.analytics.management.profileFilterLinks.list instanceof Function;
    management = management && gapi.client.analytics.management.profileUserLinks.list instanceof Function;
    management = management && gapi.client.analytics.management.profiles.list instanceof Function;
    management = management && gapi.client.analytics.management.remarketingAudience.list instanceof Function;
    management = management && gapi.client.analytics.management.segments.list instanceof Function;
    management = management && gapi.client.analytics.management.unsampledReports.list instanceof Function;
    management = management && gapi.client.analytics.management.uploads.list instanceof Function;
    management = management && gapi.client.analytics.management.webPropertyAdWordsLinks.list instanceof Function;
    management = management && gapi.client.analytics.management.webproperties.list instanceof Function;
    management = management && gapi.client.analytics.management.webpropertyUserLinks.list instanceof Function;
    analytics = analytics && management;

    var metadata : boolean = gapi.client.analytics.metadata.column.list instanceof Function;
    analytics = analytics && metadata;

    return analytics;
}
