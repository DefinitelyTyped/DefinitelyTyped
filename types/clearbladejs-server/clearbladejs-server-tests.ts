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

ClearBlade.init({request: {
    isLogging: false,
    params: {
      param1: "1",
      param2: 2
    },
    systemKey: "abcdef",
    systemSecret: "abcdef",
    userEmail: "test@test.com",
    userToken: "abcdef",
    userid: "abcdef",
}});

var about = ClearBlade.about();
ClearBlade.setUser("test@test.com", "authtoken", "userId");
ClearBlade.registerUser("test@test.com", "password", genericCallback);
ClearBlade.isCurrentUserAuthenticated(genericCallback);
ClearBlade.logoutUser(genericCallback);
ClearBlade.loginAnon(genericCallback);
ClearBlade.loginUser("test@test.com", "password", genericCallback);

ClearBlade.getAllCollections(genericCallback);
var edgeID = ClearBlade.edgeId();
var isEdge = ClearBlade.isEdge(genericCallback);
if (ClearBlade.isObjectEmpty({test: "test"})) {
    ClearBlade.logger("Object is empty");
}
var kvPair = ClearBlade.makeKVPair("key", "value");

var coll1 = ClearBlade.Collection("collectionID");
var coll2 = ClearBlade.Collection({ collectionName: "collectionName" });
var coll3 = ClearBlade.Collection({ collectionID: "collectionID" });
var coll4 = ClearBlade.Collection({ collection: "collectionID" });

var query1 = ClearBlade.Query({ collectionID: "collectionID" });
var query2 = ClearBlade.Query({ collectionName: "collectionName" });
var query3 = ClearBlade.Query({ collection: "collectionID" });

var item1 = ClearBlade.Item({}, "collectionID");
var item2 = ClearBlade.Item({}, { collectionID: "collectionID" });

var code = ClearBlade.Code();
var deployment = ClearBlade.Deployment();
var user = ClearBlade.User();

var messaging = ClearBlade.Messaging({}, genericCallback);

var device = ClearBlade.Device();

ClearBlade.addToQuery(query1, "key", "value");
ClearBlade.addSortToQuery(
    query1,
    QuerySortDirections.QUERY_SORT_ASCENDING,
    "column1"
);
ClearBlade.addFilterToQuery(
    query1,
    QueryConditions.QUERY_GREATERTHAN,
    "key",
    "value"
);

ClearBlade.newCollection("collectionName", genericCallback);

var parseOperation = ClearBlade.parseOperationQuery(query1.query);
var parseQuery1 = ClearBlade.parseQuery(query1);
var parseQuery2 = ClearBlade.parseQuery(query1.query);

ClearBlade.createDevice("devicename", {type: "devicetype"}, false, genericCallback);
ClearBlade.deleteDevice("devicename", true, genericCallback);
ClearBlade.updateDevice("devicename", {type: "devicetype"}, true, genericCallback);
ClearBlade.getDeviceByName("devicename", genericCallback);
ClearBlade.getAllDevicesForSystem(genericCallback);
ClearBlade.validateEmailPassword("test@test.com", "password");

///////////////////////////////////////
//Collection API invocations
///////////////////////////////////////
coll1.addColumn({name: "column1"}, genericCallback);
coll1.dropColumn("column1", genericCallback);
coll1.deleteCollection(genericCallback);
coll1.fetch(query1.query, genericCallback);
coll1.create(ClearBlade.Item({}, ""), genericCallback);
coll1.update(query1.query, {}, genericCallback);
coll1.remove(query1.query, genericCallback);
coll1.columns(genericCallback);
coll1.count(query1.query, genericCallback);

///////////////////////////////////////
//Query API invocations
///////////////////////////////////////
query2.ascending("string");
query1.descending("string");
query1.equalTo("string", "string");
query1.greaterThan("string", 2);
query1.greaterThanEqualTo("string", false);
query1.lessThan("string", "string");
query1.lessThanEqualTo("string", "string");
query1.notEqualTo("string", "string");
query1.matches("string", ".*");
query1.or(query2);
query1.setPage(1, 1);
query1.fetch(genericCallback);
query1.update({}, genericCallback);
query1.columns([]);
query1.remove(genericCallback);

///////////////////////////////////////
//Item API invocations
///////////////////////////////////////
item1.save();
item1.refresh();
item1.destroy();

///////////////////////////////////////
//Code API invocations
///////////////////////////////////////
code.execute("codeName", {}, true, genericCallback);
code.getAllServices(genericCallback);

///////////////////////////////////////
//Deployment API invocations
///////////////////////////////////////
deployment.create("deploymentname", "deployment description", {}, genericCallback);
deployment.update("deploymentname", {}, genericCallback);
deployment.delete("deploymentname", genericCallback);
deployment.read("deploymentname", genericCallback);
deployment.readAll(query1, genericCallback);

///////////////////////////////////////
//User API invocations
///////////////////////////////////////
user.getUser(genericCallback);
user.setUser({}, genericCallback);
user.setUsers(query2, {name: "Fred"}, genericCallback);
user.allUsers(query1, genericCallback);
user.count(query1, genericCallback);

///////////////////////////////////////
//Messaging API invocations
///////////////////////////////////////
messaging.getMessageHistoryWithTimeFrame("topic", 5, 10, 15, 20, genericCallback);
messaging.getMessageHistory("topic", 5, 15, genericCallback);
messaging.getAndDeleteMessageHistory("topic", 5, 10, 1, 20, genericCallback);
messaging.getCurrentTopics(genericCallback);
messaging.publish("topic", "payload");

///////////////////////////////////////
//Device API invocations
///////////////////////////////////////
device.fetch(query1.query, genericCallback);
device.update(query1.query, { object: Object }, genericCallback);
device.delete(query1.query, genericCallback);
device.create({ newDevice: Object }, genericCallback);

///////////////////////////////////////
//Triggers API invocations
///////////////////////////////////////
ClearBlade.Trigger.Create(
    "triggername", 
    {
        system_key: "key",
	    name: "triggername",
	    def_module: TriggerModule.DEVICE,
	    def_name: "someName",
	    key_value_pairs: [],
        service_name: "ServiceName"
    },
    genericCallback);
ClearBlade.Trigger.Fetch("triggername", genericCallback);

///////////////////////////////////////
//Timers API invocations
///////////////////////////////////////
ClearBlade.Timer.Create("timername", {}, genericCallback);
ClearBlade.Timer.Fetch("timername", genericCallback);
