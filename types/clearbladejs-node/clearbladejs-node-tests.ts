// Testing type definitions for clearbladejs-node 1.0
// Project: https://github.com/ClearBlade/Node-SDK
// Definitions by: Jim Bouquet <https://github.com/ClearBlade>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { ClearBlade, Resp, QuerySortDirections, QueryConditions } from "clearbladejs-node";

// Sample code for clearbladejs Node SDK v1.0.0 used to test typescript definitions

const genericCallback = (error: boolean, response: Resp) => {};

///////////////////////////////////////
// ClearBlade object API invocations
///////////////////////////////////////
ClearBlade.init({
	email: "a@a.com",
	password: "a",
	systemKey: "testkey",
	systemSecret: "testsecret",
	URI: "https://mycbplatform.com",
	messagingURI: "mycbplatform.com",
	callback: genericCallback
});

ClearBlade.setUser("test@test.com", "password");
ClearBlade.registerUser("test@test.com", "password", genericCallback);
ClearBlade.isCurrentUserAuthenticated(genericCallback);
if (!ClearBlade.isObjectEmpty({prop: "test"})) {
	ClearBlade.logger("Object is not empty");
}

ClearBlade.validateEmailPassword("test@test.com", "password");

ClearBlade.logoutUser(genericCallback);
ClearBlade.loginAnon(genericCallback);
ClearBlade.loginUser("test@test.com", "password", genericCallback);

ClearBlade.sendPush([], {}, "appId: string", genericCallback);

// execute(error: Object, response: Object, callback: ClearBladeCallback): void;
// makeKVPair(key: string, value: string): KeyValuePair;
// request(options: RequestOptions, callback: RequestCallback): void;

const coll1 = ClearBlade.Collection("collectionID");
const coll2 = ClearBlade.Collection({collectionName: "collectionName"});
const coll3 = ClearBlade.Collection({collectionID: "collectionID"});

const query1 = ClearBlade.Query("collectionID");
const query2 = ClearBlade.Query({offset: 5, limit: 5, collectionID: "collectionID"});
const query3 = ClearBlade.Query({collectionName: "collectionName"});
const query4 = ClearBlade.Query({collection: "collectionID"});

ClearBlade.addToQuery(query1, "key", "value");
ClearBlade.addFilterToQuery(query1, QueryConditions.QUERY_GREATERTHAN, "key", "value");
ClearBlade.addSortToQuery(query1, QuerySortDirections.QUERY_SORT_ASCENDING, "column1");

const opQueryStr = ClearBlade.parseOperationQuery(query1.query);
const parse1: string = ClearBlade.parseQuery(query1.query);
const parse2: string = ClearBlade.parseQuery(query1);

const item1 = ClearBlade.Item({}, "hello");
const item2 = ClearBlade.Item({}, {collectionID: "hello"});

const code = ClearBlade.Code();
const user = ClearBlade.User();

const messaging = ClearBlade.Messaging({}, genericCallback);

///////////////////////////////////////
// Collection API invocations
///////////////////////////////////////
coll1.fetch(query1, genericCallback);
coll1.create(ClearBlade.Item({}, ""), genericCallback);
coll1.update(query1.query, {}, genericCallback);
coll1.remove(query1.query, genericCallback);

///////////////////////////////////////
// Query API invocations
///////////////////////////////////////
query1.ascending("string");
query1.descending("string");
query1.equalTo("string", "string");
query1.greaterThan("string", 2);
query1.greaterThanEqualTo("string", false);
query1.lessThan("string", "string");
query1.lessThanEqualTo("string", "string");
query1.notEqualTo("string", "string");
query1.or(query2);
query1.setPage(1, 1);
query1.fetch(genericCallback);
query1.update({}, genericCallback);
query1.remove(genericCallback);

///////////////////////////////////////
// Item API invocations
///////////////////////////////////////
item1.save();
item1.refresh();
item1.destroy();

///////////////////////////////////////
// Code API invocations
///////////////////////////////////////
code.execute("codeName", {}, genericCallback);

///////////////////////////////////////
// User API invocations
///////////////////////////////////////
user.getUser(genericCallback);
user.setUser({}, genericCallback);
user.allUsers(query1.query, genericCallback);

///////////////////////////////////////
// Messaging API invocations
///////////////////////////////////////
messaging.getMessageHistory("topic: string", 5, 15, genericCallback);

messaging.publish("topic: string", {});

messaging.subscribe("my/topic", {}, messageReceivedCb);

function messageReceivedCb(message: string) {
	messaging.unsubscribe("my/topic");
}
