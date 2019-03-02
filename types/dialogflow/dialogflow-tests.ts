import * as dialogflow from "dialogflow";

const agentsClient = new dialogflow.AgentsClient();
const contextsClient = new dialogflow.ContextsClient();
const entityTypesClient = new dialogflow.EntityTypesClient();
const intentsClient = new dialogflow.IntentsClient();
const sessionEntityTypesClient = new dialogflow.SessionEntityTypesClient();
const sessionsClient = new dialogflow.SessionsClient();

// TODO: Add real significant tests
