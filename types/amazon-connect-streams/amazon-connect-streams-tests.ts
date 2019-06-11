let elem: HTMLElement = new HTMLElement();
connect.core.initCCP(elem, { ccpUrl: "" }); // $ExpectType void

// Types for below tests
let agentCallback: connect.AgentCallback = () => {};
let muteCallback: connect.MuteCallback = () => {};
let agentConfiguration: connect.AgentConfiguration;
let successFailOptions: connect.SuccessFailOptions;
let agentState: connect.AgentState;
let endpoint: connect.Endpoint;
let contactCallback: connect.ContactCallback;
let sendDigitOptions: connect.SendDigitOptions;

connect.Endpoint.byPhoneNumber(""); // $ExpectType: connect.Endpoint

connect.agent(agent => {
    agent.onContactPending(agentCallback); // $ExpectType: void
    agent.onRefresh(agentCallback); // $ExpectType: void
    agent.onRoutable(agentCallback); // $ExpectType: void
    agent.onNotRoutable(agentCallback); // $ExpectType: void
    agent.onOffline(agentCallback); // $ExpectType: void
    agent.onError(agentCallback); // $ExpectType: void
    agent.onAfterCallWork(agentCallback); // $ExpectType: void
    agent.onMuteToggle(muteCallback); // $ExpectType: void
    agent.getState(); // $ExpectType: AgentState
    agent.getStateDuration(); // $ExpectType: number
    agent.getContacts(""); // $ExpectType: connect.Contact[]
    agent.getConfiguration(); // $ExpectType: connect.AgentConfiguration
    agent.getAgentStates(); // $ExpectType: connect.AgentState[]
    agent.getRoutingProfile(); // $ExpectType: connect.AgentRoutingProfile
    agent.getName(); // $ExpectType: string
    agent.getExtension(); // $ExpectType: string
    agent.isSoftphoneEnabled(); // $ExpectType: boolean
    agent.setConfiguration(agentConfiguration, successFailOptions); // $ExpectType: void
    agent.setState(agentState, successFailOptions); // $ExpectType: void
    agent.connect(endpoint, successFailOptions); // $ExpectType: void
    agent.toSnapshot(); // $ExpectType: connect.Agent
    agent.mute(); // $ExpectType: void
    agent.unmute(); // $ExpectType: void
    agent.getAgentStates(); // $ExpectType: connect.AgentState[]
});

connect.contact(contact => {
    contact.onRefresh(contactCallback); // $ExpectType: void
    contact.onIncoming(contactCallback); // $ExpectType: void
    contact.onAccepted(contactCallback); // $ExpectType: void
    contact.onEnded(contactCallback); // $ExpectType: void
    contact.onConnected(contactCallback); // $ExpectType: void
    contact.getContactId(); // $ExpectType: string
    contact.getOriginalContactId(); // $ExpectType: string
    contact.getType(); // $ExpectType: string
    contact.getStatus(); // $ExpectType: connect.ContactState
    contact.getStatusDuration(); // $ExpectType: number
    contact.getQueue(); // $ExpectType: connect.Queue
    contact.getConnections(); // $ExpectType: connect.Connection[]
    contact.getInitialConnection(); // $ExpectType: connect.Connection
    contact.getActiveInitialConnection(); // $ExpectType: connect.Connection
    contact.getThirdPartyConnections(); // $ExpectType: connect.Connection
    contact.getSingleActiveThirdPartyConnection(); // $ExpectType: connect.Connection
    contact.getAgentConnection(); // $ExpectType: Connection
    contact.getAttributes(); // $ExpectType: connect.AttributeDictionary
    contact.isSoftphoneCall(); // $ExpectType: boolean
    contact.isInbound(); // $ExpectType: boolean
    contact.isConnected(); // $ExpectType: boolean
    contact.accept(successFailOptions); // $ExpectType: void
    contact.destroy(successFailOptions); // $ExpectType: void
    contact.notifyIssue(successFailOptions); // $ExpectType: void
    contact.addConnection(endpoint, successFailOptions); // $ExpectType: void
    contact.toggleActiveConnections(successFailOptions); // $ExpectType: void
    contact.conferenceConnections(successFailOptions); // $ExpectType: void

    const connection = contact.getAgentConnection();
    connection.getContactId(); // $ExpectType string
    connection.getConnectionId(); // $ExpectType string
    connection.getEndpoint(); // $ExpectType Endpoint
    connection.getState(); // $ExpectType ConnectionState
    connection.getStateDuration(); // $ExpectType number
    connection.getType(); // $ExpectType "inbound" | "outbound" | "monitoring"
    connection.isInitialConnection(); // $ExpectType boolean
    connection.isActive(); // $ExpectType boolean
    connection.isConnected(); // $ExpectType boolean
    connection.isConnecting(); // $ExpectType boolean
    connection.isOnHold(); // $ExpectType boolean
    connection.destroy(successFailOptions); // $ExpectType void
    connection.sendDigits(sendDigitOptions); // $ExpectType void
    connection.hold(successFailOptions); // $ExpectType: void
    connection.resume(successFailOptions); // $ExpectType: void
});
