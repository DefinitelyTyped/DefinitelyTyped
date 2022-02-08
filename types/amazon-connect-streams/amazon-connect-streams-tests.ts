const container: HTMLElement = new HTMLElement();

//
// connect.core

connect.core.initCCP(container, { ccpUrl: "" }); // $ExpectType void
// $ExpectType void
connect.core.initCCP(container, {
  ccpUrl: "",                     // REQUIRED
  loginUrl: "",                   // optional custom URL for SAML authentication
  region: "",                     // REQUIRED for `CHAT`, optional otherwise
  loginPopup: true,               // optional, defaults to `true`
  loginPopupAutoClose: true,      // optional, defaults to `true`
  softphone: {                    // optional
    allowFramedSoftphone: true,   // optional
    disableRingtone: false,       // optional
    ringtoneUrl: ""               // optional
  }
});

connect.core.terminate(); // $ExpectType void

connect.core.viewContact(""); // $ExpectType void

const onViewContactCallback: connect.ViewContactCallback = c => {
  c; // $ExpectType ViewContactEvent
  c.contactId; // $ExpectType string
};
connect.core.onViewContact(onViewContactCallback); // $ExpectType void

const authFailCallback: connect.SuccessFailCallback = () => {};
connect.core.onAuthFail(authFailCallback); // $ExpectType void

const accessDeniedCallback: connect.SuccessFailCallback = () => {};
connect.core.onAccessDenied(accessDeniedCallback); // $ExpectType void

//
// connect.Endpoint

const endpoint = connect.Endpoint.byPhoneNumber(""); // $ExpectType Endpoint
endpoint.endpointARN; // $ExpectType string
endpoint.endpointId; // $ExpectType string
endpoint.type; // $ExpectType EndpointType
endpoint.name; // $ExpectType string
endpoint.phoneNumber; // $ExpectType string
endpoint.agentLogin; // $ExpectType string
endpoint.queue; // $ExpectType string

//
// connect.getLog()

const log = connect.getLog(); // $ExpectType Logger
log.debug(""); // $ExpectType LogEntry
log.debug("", "random", 1, "values").withException(new Error()).withObject({}); // $ExpectType LogEntry
log.info(""); // $ExpectType LogEntry
log.info("", "random", 1, "values").withException(new Error()).withObject({}); // $ExpectType LogEntry
log.warn(""); // $ExpectType LogEntry
log.warn("", "random", 1, "values").withException(new Error()).withObject({}); // $ExpectType LogEntry
log.error(""); // $ExpectType LogEntry
log.error("", "random", 1, "values").withException(new Error()).withObject({}); // $ExpectType LogEntry
log.download(); // $ExpectType void

//
// connect.hitch()

connect.hitch({}, (param: string) => 123); // $ExpectType (param: string) => number

//
// connect.agent()

const agentCallback: connect.AgentCallback = a => {
  a; // $ExpectType Agent
};
const stateChangeCallback: connect.AgentStateChangeCallback = state => {
  state; // $ExpectType AgentStateChange
  state.agent; // $ExpectType Agent
  state.newState; // $ExpectType string
  state.oldState; // $ExpectType string
};
const softphoneErrorCallback: connect.SoftphoneErrorCallback = error => {
  error; // $ExpectType SoftphoneError
  error.endPointUrl; // $ExpectType string
  error.errorMessage; // $ExpectType string
  error.errorType; // $ExpectType string
};
const muteToggleCallback: connect.AgentMutedStatusCallback = state => {
  state; // $ExpectType AgentMutedStatus
  state.muted; // $ExpectType boolean
};
const successFailOptions: connect.SuccessFailOptions = {
  success: () => {},
  failure: e => {
    e; // $ExpectType string
  }
};
const getEndpointsCallbacks: connect.GetEndpointsCallbacks = {
  success: r => {
    r; // $ExpectType GetEndpointsResult
    r.addresses; // $ExpectType Endpoint[]
    r.endpoints; // $ExpectType Endpoint[]
  },
  failure: e => {
    e; // $ExpectType string
  }
};

// $ExpectType void
connect.agent(agent => {
  agent; // $ExpectType Agent

  // events
  agent.onContactPending(agentCallback); // $ExpectType void
  agent.onRefresh(agentCallback); // $ExpectType void
  agent.onStateChange(stateChangeCallback); // $ExpectType void
  agent.onRoutable(agentCallback); // $ExpectType void
  agent.onNotRoutable(agentCallback); // $ExpectType void
  agent.onOffline(agentCallback); // $ExpectType void
  agent.onError(agentCallback); // $ExpectType void
  agent.onAfterCallWork(agentCallback); // $ExpectType void
  agent.onMuteToggle(muteToggleCallback); // $ExpectType void

  // getters
  const state = agent.getState(); // $ExpectType AgentState
  state.agentStateARN; // $ExpectType string | null
  state.name; // $ExpectType string
  state.startTimestamp; // $ExpectType Date
  state.type; // $ExpectType AgentStateType
  agent.getStatus(); // $ExpectType AgentState
  agent.getStateDuration(); // $ExpectType number
  agent.getPermissions(); // $ExpectType string[]
  agent.getContacts(); // $ExpectType Contact[]
  agent.getContacts(connect.ContactType.CHAT); // $ExpectType Contact[]
  const config = agent.getConfiguration(); // $ExpectType AgentConfiguration
  config.agentStates; // $ExpectType AgentStateDefinition[]
  config.dialableCountries; // $ExpectType string[]
  config.extension; // $ExpectType string
  config.extension = "";
  config.name; // $ExpectType string
  config.permissions; // $ExpectType string[]
  config.routingProfile; // $ExpectType AgentRoutingProfile
  config.softphoneAutoAccept; // $ExpectType boolean
  config.softphoneEnabled; // $ExpectType boolean
  config.softphoneEnabled = true;
  config.username; // $ExpectType string
  const states = agent.getAgentStates(); // $ExpectType AgentStateDefinition[]
  states[0].agentStateARN; // $ExpectType string
  states[0].name; // $ExpectType string
  states[0].type; // $ExpectType AgentStateType
  const profile = agent.getRoutingProfile(); // $ExpectType AgentRoutingProfile
  profile.channelConcurrencyMap; // $ExpectType AgentChannelConcurrencyMap
  profile.defaultOutboundQueue; // $ExpectType Queue
  profile.name; // $ExpectType string
  profile.queues; // $ExpectType Queue[]
  profile.routingProfileARN; // $ExpectType string
  profile.routingProfileId; // $ExpectType string
  const concurrency = agent.getChannelConcurrency(); // $ExpectType AgentChannelConcurrencyMap
  concurrency.CHAT; // $ExpectType number
  agent.getChannelConcurrency(connect.ChannelType.CHAT); // $ExpectType number
  agent.getName(); // $ExpectType string
  agent.getExtension(); // $ExpectType string
  agent.getDialableCountries(); // $ExpectType string[]
  agent.isSoftphoneEnabled(); // $ExpectType boolean
  agent.getAllQueueARNs(); // $ExpectType string[]
  agent.getEndpoints("", getEndpointsCallbacks); // $ExpectType void
  agent.getEndpoints(["", ""], getEndpointsCallbacks); // $ExpectType void
  agent.toSnapshot(); // $ExpectType Agent

  // setters
  agent.setConfiguration(config); // $ExpectType void
  agent.setConfiguration(config, successFailOptions); // $ExpectType void
  agent.setState(states[0]); // $ExpectType void
  agent.setState(states[0], successFailOptions); // $ExpectType void

  // actions
  agent.connect(endpoint);
  // $ExpectType void
  agent.connect(endpoint, {
    ...successFailOptions,
    queueARN: ""
  });
  agent.mute(); // $ExpectType void
  agent.unmute(); // $ExpectType void
});

//
// connect.contact()

const contactCallback: connect.ContactCallback = c => {
  c; // $ExpectType Contact
};

connect.contact(contact => {
  contact; // $ExpectType Contact
  contact.contactId; // $ExpectType string

  // events
  contact.onRefresh(contactCallback); // $ExpectType void
  contact.onIncoming(contactCallback); // $ExpectType void
  contact.onPending(contactCallback); // $ExpectType void
  contact.onConnecting(contactCallback); // $ExpectType void
  contact.onAccepted(contactCallback); // $ExpectType void
  contact.onMissed(contactCallback); // $ExpectType void
  contact.onEnded(contactCallback); // $ExpectType void
  contact.onDestroy(contactCallback); // $ExpectType void
  contact.onACW(contactCallback); // $ExpectType void
  contact.onConnected(contactCallback); // $ExpectType void

  // getters
  contact.getContactId(); // $ExpectType string
  contact.getOriginalContactId(); // $ExpectType string
  contact.getInitialContactId(); // $ExpectType string
  contact.getType(); // $ExpectType ContactType
  const contactStatus = contact.getStatus(); // $ExpectType ContactState
  contactStatus.timestamp; // $ExpectType Date
  contactStatus.type; // $ExpectType ContactStateType
  contact.getStatusDuration(); // $ExpectType number
  const queue = contact.getQueue(); // $ExpectType Queue
  queue.name; // $ExpectType string
  queue.queueARN; // $ExpectType string
  queue.queueId; // $ExpectType string
  contact.getQueueTimestamp(); // $ExpectType Date
  contact.getConnections(); // $ExpectType BaseConnection[]
  contact.getInitialConnection(); // $ExpectType BaseConnection
  contact.getActiveInitialConnection(); // $ExpectType BaseConnection | null
  contact.getThirdPartyConnections(); // $ExpectType BaseConnection[]
  contact.getSingleActiveThirdPartyConnection(); // $ExpectType BaseConnection | null
  contact.getAgentConnection(); // $ExpectType BaseConnection
  const attr = contact.getAttributes(); // $ExpectType AttributeDictionary
  attr.key.name; // $ExpectType string
  attr.key.value; // $ExpectType string
  contact.isSoftphoneCall(); // $ExpectType boolean
  contact.isInbound(); // $ExpectType boolean
  contact.isConnected(); // $ExpectType boolean
  contact.toSnapshot(); // $ExpectType Contact

  // actions
  contact.accept(); // $ExpectType void
  contact.accept(successFailOptions); // $ExpectType void
  contact.destroy(); // $ExpectType void
  contact.destroy(successFailOptions); // $ExpectType void
  contact.complete(); // $ExpectType void
  contact.complete(successFailOptions); // $ExpectType void
  contact.notifyIssue("", ""); // $ExpectType void
  contact.notifyIssue("", "", successFailOptions); // $ExpectType void
  contact.addConnection(endpoint); // $ExpectType void
  contact.addConnection(endpoint, successFailOptions); // $ExpectType void
  contact.toggleActiveConnections(); // $ExpectType void
  contact.toggleActiveConnections(successFailOptions); // $ExpectType void
  contact.conferenceConnections(); // $ExpectType void
  contact.conferenceConnections(successFailOptions); // $ExpectType void
});

//
// connect.BaseConnection

const cnn = new connect.BaseConnection();
cnn.connectionId; // $ExpectType string
cnn.contactId; // $ExpectType string

// getters
cnn.getContactId(); // $ExpectType string
cnn.getConnectionId(); // $ExpectType string
cnn.getEndpoint(); // $ExpectType Endpoint
cnn.getAddress(); // $ExpectType Endpoint
const cnnStatus = cnn.getStatus(); // $ExpectType ConnectionState
cnnStatus.timestamp; // $ExpectType Date
cnnStatus.type; // $ExpectType ConnectionStateType
cnn.getStatusDuration(); // $ExpectType number
cnn.getType(); // $ExpectType ConnectionType
const monitor = cnn.getMonitorInfo(); // $ExpectType MonitorInfo | null
if (monitor) {
  monitor.agentName; // $ExpectType string
  monitor.customerName; // $ExpectType string
  monitor.joinTime; // $ExpectType Date
}
cnn.isInitialConnection(); // $ExpectType boolean
cnn.isActive(); // $ExpectType boolean
cnn.isConnected(); // $ExpectType boolean
cnn.isOnHold(); // $ExpectType boolean

// actions
cnn.destroy(); // $ExpectType void
cnn.destroy(successFailOptions); // $ExpectType void
cnn.sendDigits(""); // $ExpectType void
cnn.sendDigits("", successFailOptions); // $ExpectType void
cnn.hold(); // $ExpectType void
cnn.hold(successFailOptions); // $ExpectType void
cnn.resume(); // $ExpectType void
cnn.resume(successFailOptions); // $ExpectType void

if (cnn instanceof connect.ChatConnection) {
  const info = cnn.getMediaInfo(); // $ExpectType ChatMediaInfo
  info.contactId; // $ExpectType string
  const token = info.getConnectionToken(); // $ExpectType Promise<ConnectionToken>
  token.then(r => {
    r.chatTokenTransport.expiry; // $ExpectType string
    r.chatTokenTransport.participantToken; // $ExpectType string
  });
  cnn.getMediaType(); // $ExpectType MediaType.CHAT
  cnn.getMediaController(); // $ExpectType Promise<any>
}

if (cnn instanceof connect.VoiceConnection) {
  const info = cnn.getMediaInfo(); // $ExpectType VoiceMediaInfo
  info.autoAccept; // $ExpectType boolean
  info.callConfigJson; // $ExpectType string
  info.callContextToken; // $ExpectType string
  info.callType; // $ExpectType SoftphoneCallType
  info.mediaLegContextToken; // $ExpectType string
  cnn.getMediaType(); // $ExpectType MediaType.SOFTPHONE
  cnn.getMediaController(); // $ExpectType Promise<any>
}
