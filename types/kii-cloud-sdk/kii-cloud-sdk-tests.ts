function main() {
    Kii.initializeWithSite("abc", "def", KiiSite.JP);

    const user = KiiUser.userWithUsername("name", "password");

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
    const locale: string = user.getLocale();

    const anotherUser: KiiUser = KiiUserBuilder
        .builderWithIdentifier("id", "password")
        .setEmailAddress("mail@example.org")
        .build();

    const bucket = Kii.bucketWithName("foo");
    const clause1 = KiiClause.lessThan("x", 1);
    const clause2 = KiiClause.greaterThan("y", 1);
    const clause3 = KiiClause.and(clause1, clause2);
    const query = KiiQuery.queryWithClause(clause3);

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
            const [query, results, nextQuery] = params;
        });

    const object = bucket.createObject();

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
            const isOnline: boolean = thing.isOnline();
            const onlineStatusModifiedAt: Date = thing.getOnlineStatusModifiedAt();
        });

    const error = KiiErrorParser.parse("");

    error.code.toLowerCase();
}
