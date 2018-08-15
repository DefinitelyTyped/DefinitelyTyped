import { GraphQLConnector, GraphQLModel } from '@gramps/rest-helpers';

const myConnector = new GraphQLConnector();

myConnector.apiBaseUri = "some uri";
myConnector.headers = {};
myConnector.cacheExpiry = 300;
myConnector.enableCache = true;
myConnector.redis = false;

myConnector.get("someurl");
myConnector.post("someendpoint", {}, {}).then(() => {});
myConnector.put("someendpoint", {}, {}).then(() => {});
myConnector.delete("someendpoint", {}).then(() => {});

const myModel = new GraphQLModel(myConnector);
