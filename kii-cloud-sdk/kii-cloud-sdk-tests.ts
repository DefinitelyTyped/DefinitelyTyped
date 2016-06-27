/// <reference path="kii-cloud-sdk.d.ts" />

function main() {
    Kii.initializeWithSite("abc", "def", KiiSite.JP);

    var user = KiiUser.userWithUsername("name", "password");

    user.register({
        success(user: KiiUser) {
        },
        failure(user: KiiUser, message: string) {
        }
    });

    user.register({
        success: (user: KiiUser) => 123,
        failure: (user: KiiUser, message: string) => 456
    });

    user.register()
        .then(function (user: KiiUser) {
        });

    user.pushInstallation().getMqttEndpoint("")
        .then(function (endpoint: KiiCloud.KiiMqttEndpoint) {
            endpoint.installationID;
        });

    user.setLocale("en");
    var locale: string = user.getLocale();

    var anotherUser: KiiUser = KiiUserBuilder
        .builderWithIdentifier("id", "password")
        .setEmailAddress("mail@example.org")
        .build();

    var bucket = Kii.bucketWithName("foo");
    var clause1 = KiiClause.lessThan("x", 1);
    var clause2 = KiiClause.greaterThan("y", 1);
    var clause3 = KiiClause.and(clause1, clause2);
    var query = KiiQuery.queryWithClause(clause3);

    bucket.executeQuery(query, {
        success: function (query: KiiQuery,
                           results: KiiObject[],
                           nextQuery: KiiQuery) {
        },
        failure: function (bucket: KiiBucket, message: string) {
        }
    });

    bucket.executeQuery<KiiObject>(query)
        .then(function (params: [KiiQuery, KiiObject[], KiiQuery]) {
            var [query, results, nextQuery] = params;
        });

    var object = bucket.createObject();

    object.set("foo", 1);

    object.save();

    KiiGroup.registerGroupWithID("Group ID", "Group Name", [user], {
        success: function(theSavedGroup: KiiGroup) {
            theSavedGroup.saveWithOwner("user ID");
        },
        failure: function(theGroup: KiiGroup,
                          anErrorString: String,
                          addMembersArray: KiiUser[],
                          removeMembersArray: KiiUser[]) {
        }
    });

    Kii.authenticateAsThing("thing id", "password", {
        success: function (thingAuthContext: KiiThingContext) {
            thingAuthContext.bucketWithName("");
        },
        failure: function (error) {
        }
    })
        .then(function (thingAuthContext: KiiThingContext) {
        });

    Kii.authenticateAsThingWithToken("thing id", "token", {
        success: function (thingAuthContext: KiiThingContext) {
            thingAuthContext.bucketWithName("");
        },
        failure: function (error) {
        }
    })
        .then(function (thingAuthContext: KiiThingContext) {
        });

    KiiThing.loadWithVendorThingID("thing ID")
        .then(function (thing) {
            var isOnline: boolean = thing.isOnline();
            var onlineStatusModifiedAt: Date = thing.getOnlineStatusModifiedAt();
        });
}
