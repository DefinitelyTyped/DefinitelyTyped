// Testing type definitions for clearbladejs Client SDK v1.0.0
// Project: https://github.com/ClearBlade/JavaScript-API
// Definitions by: Jim Bouquet <https://github.com/ClearBlade/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

var genericCallback = function(error: boolean, response: Resp) {};

///////////////////////////////////////
//ClearBlade object API invocations
///////////////////////////////////////
ClearBlade.init({
    systemKey: "abcdef",
    systemSecret: "abcdefg",
    callback: genericCallback
});

ClearBlade.setUser("test@test.com", "password");
ClearBlade.registerUser("test@test.com", "password", genericCallback);
ClearBlade.isCurrentUserAuthenticated(genericCallback);
ClearBlade.logoutUser(genericCallback);
ClearBlade.loginAnon(genericCallback);
ClearBlade.loginUser("test@test.com", "password", genericCallback);
ClearBlade.loginUserMqtt("test@test.com", "password", genericCallback);
ClearBlade.sendPush(["user1", "user2"], {data: "Test"}, "appId: string", genericCallback);
ClearBlade.getAllCollections(genericCallback);

var coll1 = ClearBlade.Collection("collectionID");
var coll2 = ClearBlade.Collection({ collectionName: "collectionName" });
var coll3 = ClearBlade.Collection({ collectionID: "collectionID" });

var query1 = ClearBlade.Query("collectionID");
var query2 = ClearBlade.Query({ offset: 5, limit: 5, collectionID: "collectionID" });
var query3 = ClearBlade.Query({ collectionName: "collectionName" });

var item1 = ClearBlade.Item({}, "collectionID");
var item2 = ClearBlade.Item({}, { collectionID: "collectionID" });

var code = ClearBlade.Code();
var user = ClearBlade.User();

var messaging = ClearBlade.Messaging({}, genericCallback);
var stats = ClearBlade.MessagingStats();

var edge = ClearBlade.Edge();
var metrics = ClearBlade.Metrics();
var device = ClearBlade.Device();
var analytics = ClearBlade.Analytics();
var portal = ClearBlade.Portal("MyPortal");
var triggers = ClearBlade.Triggers();

ClearBlade.getEdges(query1.query, genericCallback);

///////////////////////////////////////
//Collection API invocations
///////////////////////////////////////
coll1.fetch(query1.query, genericCallback);
coll1.create(ClearBlade.Item({}, ""), genericCallback);
coll1.update(query1.query, {}, genericCallback);
coll1.remove(query1.query, genericCallback);
coll1.columns(genericCallback);
coll1.count(query1.query, genericCallback);

///////////////////////////////////////
//Query API invocations
///////////////////////////////////////
query1.addSortToQuery(
    query1,
    QuerySortDirections.QUERY_SORT_ASCENDING,
    "column1"
);
query1.addFilterToQuery(
    query1,
    QueryConditions.QUERY_GREATERTHAN,
    "key",
    "value"
);
query1.ascending("string");
query1.descending("string");
query1.equalTo("string", "string");
query1.greaterThan("string", 2);
query1.greaterThanEqualTo("string", false);
query1.lessThan("string", "string");
query1.lessThanEqualTo("string", "string");
query1.notEqualTo("string", "string");
query1.matches("string", new RegExp(/.*/));
query1.or(query2);
query1.setPage(1, 1);
query1.fetch(genericCallback);
query1.update({}, genericCallback);
query1.columns([]);
query1.remove(genericCallback);

///////////////////////////////////////
//Item API invocations
///////////////////////////////////////
item1.save(genericCallback);
item1.refresh(genericCallback);
item1.destroy(genericCallback);

///////////////////////////////////////
//Code API invocations
///////////////////////////////////////
code.create("codeName", "body: string", genericCallback);
code.update("codeName", "body: string", genericCallback);
code.delete("codeName", genericCallback);
code.execute("codeName", {}, genericCallback);
code.getCompletedServices(genericCallback);
code.getFailedServices(genericCallback);
code.getAllServices(genericCallback);

///////////////////////////////////////
//User API invocations
///////////////////////////////////////
user.getUser(genericCallback);
user.setUser({}, genericCallback);
user.allUsers(query1.query, genericCallback);
user.setPassword("old_password", "new_password", genericCallback);
user.count(query1.query, genericCallback);

///////////////////////////////////////
//Messaging API invocations
///////////////////////////////////////
messaging.getMessageHistoryWithTimeFrame("topic", 5, 10, 15, 20, genericCallback);
messaging.getMessageHistory("topic", 5, 15, genericCallback);
messaging.getAndDeleteMessageHistory("topic", 5, 10, 1, 20, genericCallback);
messaging.currentTopics(genericCallback);
messaging.publish("topic", {});
messaging.publishREST("topic", { payload: Object }, genericCallback);
var mcb = function(message: string) {};
messaging.subscribe("topic", {}, mcb);
messaging.unsubscribe("topic", {});
messaging.disconnect();

///////////////////////////////////////
//MessagingStats API invocations
///////////////////////////////////////
stats.getAveragePayloadSize("topic: string", 5, 5, genericCallback);
stats.getOpenConnections(genericCallback);
stats.getCurrentSubscribers("topic: string", genericCallback);

///////////////////////////////////////
//Edge API invocations
///////////////////////////////////////
edge.updateEdgeByName("edgename", {changedColumn: "New value"}, genericCallback);
edge.deleteEdgeByName("edgename", genericCallback);
edge.create({newEdge: Object}, "edgename", genericCallback);
edge.columns(genericCallback);
edge.count(query1.query, genericCallback);

///////////////////////////////////////
//Metrics API invocations
///////////////////////////////////////
metrics.setQuery(query1.query);
metrics.getStatistics(genericCallback);
metrics.getStatisticsHistory(genericCallback);
metrics.getDBConnections(genericCallback);
metrics.getLogs(genericCallback);

///////////////////////////////////////
//Device API invocations
///////////////////////////////////////
device.getDeviceByName("devicename", genericCallback);
device.updateDeviceByName("devicename", { object: Object }, true, genericCallback);
device.deleteDeviceByName("devicename", genericCallback);
device.fetch(query1.query, genericCallback);
device.update(query1.query, { object: Object }, false, genericCallback);
device.delete(query1.query, genericCallback);
device.create({ newDevice: Object }, genericCallback);
device.columns(genericCallback);
device.count(query1.query, genericCallback);

///////////////////////////////////////
//Analytics API invocations
///////////////////////////////////////
analytics.getStorage({}, genericCallback);
analytics.getCount({}, genericCallback);
analytics.getEventList({}, genericCallback);
analytics.getEventTotals({}, genericCallback);
analytics.getUserEvents({}, genericCallback);

///////////////////////////////////////
//Portal API invocations
///////////////////////////////////////
portal.fetch(genericCallback);
portal.update({data: Object}, genericCallback);

///////////////////////////////////////
//Triggers API invocations
///////////////////////////////////////
triggers.fetchDefinitions(genericCallback);
triggers.create("triggername", {data: Object}, genericCallback);
triggers.update("triggername", {data: Object}, genericCallback);
triggers.delete("triggername", genericCallback);
