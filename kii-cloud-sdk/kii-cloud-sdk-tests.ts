

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
        .then((user: KiiUser) => {
        });

    user.pushInstallation().getMqttEndpoint("")
        .then((endpoint: KiiCloud.KiiMqttEndpoint) => {
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
        success: (query: KiiQuery,
                  results: KiiObject[],
                  nextQuery: KiiQuery) => {
        },
        failure: (bucket: KiiBucket, message: string) => {
        }
    });

    bucket.executeQuery<KiiObject>(query)
        .then((params: [KiiQuery, KiiObject[], KiiQuery]) => {
            var [query, results, nextQuery] = params;
        });

    var object = bucket.createObject();

    object.set("foo", 1);

    object.save();

    KiiGroup.registerGroupWithID("Group ID", "Group Name", [user], {
        success: (theSavedGroup: KiiGroup) => {
            theSavedGroup.saveWithOwner("user ID");
        },
        failure: (theGroup: KiiGroup,
                  anErrorString: string,
                  addMembersArray: KiiUser[],
                  removeMembersArray: KiiUser[]) => {
        }
    });

    Kii.authenticateAsThing("thing id", "password", {
        success: (thingAuthContext: KiiThingContext) => {
            thingAuthContext.bucketWithName("");
        },
        failure: (error) => {
        }
    })
        .then((thingAuthContext: KiiThingContext) => {
        });

    Kii.authenticateAsThingWithToken("thing id", "token", {
        success: (thingAuthContext: KiiThingContext) => {
            thingAuthContext.bucketWithName("");
        },
        failure: (error) => {
        }
    })
        .then((thingAuthContext: KiiThingContext) => {
        });

    KiiThing.loadWithVendorThingID("thing ID")
        .then((thing) => {
            var isOnline: boolean = thing.isOnline();
            var onlineStatusModifiedAt: Date = thing.getOnlineStatusModifiedAt();
        });

    var error = KiiErrorParser.parse("");

    error.code.toLowerCase();
}
