import { DRMAgent, WifiDirectStatus, WifiPeerInfo, WifiStatus, WifiWfdInfo, WiredStatus } from 'webostvjs';

function test_APP_BROWSER() {
    // $ExpectType string
    window.webOSDev.APP.BROWSER;
}

function test_DRM_Error() {
    // $ExpectType number
    window.webOSDev.DRM.Error.API_NOT_SUPPORTED;
    // $ExpectType number
    window.webOSDev.DRM.Error.CLIENT_NOT_LOADED;
    // $ExpectType number
    window.webOSDev.DRM.Error.DRM_TYPE_UNMATCHED;
    // $ExpectType number
    window.webOSDev.DRM.Error.INVALID_KEY_FORMAT;
    // $ExpectType number
    window.webOSDev.DRM.Error.INVALID_PARAMS;
    // $ExpectType number
    window.webOSDev.DRM.Error.INVALID_TIME_INFO;
    // $ExpectType number
    window.webOSDev.DRM.Error.KEY_NOT_FOUND;
    // $ExpectType number
    window.webOSDev.DRM.Error.NOT_ERROR;
    // $ExpectType number
    window.webOSDev.DRM.Error.UNKNOWN_ERROR;
    // $ExpectType number
    window.webOSDev.DRM.Error.UNSUPPORTED_DRM_TYPE;
    // $ExpectType number
    window.webOSDev.DRM.Error.VENDOR_ERROR;
    // $ExpectType number
    window.webOSDev.DRM.Error.WRONG_CLIENT_ID;
}

function test_DRM_Type() {
    // $ExpectType "PLAYREADY"
    window.webOSDev.DRM.Type.PLAYREADY;
    // $ExpectType "WIDEVINE"
    window.webOSDev.DRM.Type.WIDEVINE;
}

function test_LGUDID() {
    // $ExpectType void
    window.webOSDev.LGUDID({
        onSuccess(res) {
            res; // $ExpectType LGUDIDResponse
            res.id; // $ExpectType string
        },
        onFailure(err) {
            err; // $ExpectType FailureResponse
            err.errorCode; // $ExpectType string | number
            err.errorText; // $ExpectType string
        }
    });
    window.webOSDev.LGUDID({
        onSuccess(res) {
            res; // $ExpectType LGUDIDResponse
            res.id; // $ExpectType string
        },
        onFailure(error) {
        }
    });
}

function test_connection_getStatus() {
    // $ExpectType void
    window.webOSDev.connection.getStatus({
        subscribe: true,
        onSuccess(res) {
            res.isInternetConnectionAvailable; // $ExpectType boolean
            test_connection_getStatus_wired(res.wired);
            test_connection_getStatus_wifi(res.wifi);
            test_connection_getStatus_wifiDirect(res.wifiDirect);
        },
        onFailure(err) {
            err; // $ExpectType FailureResponse
            err.errorCode; // $ExpectType string | number
            err.errorText; // $ExpectType string
        }
    });

    window.webOSDev.connection.getStatus({
        subscribe: true,
        onSuccess(res) {
            res.isInternetConnectionAvailable; // $ExpectType boolean
            test_connection_getStatus_wired(res.wired);
            test_connection_getStatus_wifi(res.wifi);
            test_connection_getStatus_wifiDirect(res.wifiDirect);
        },
        onFailure() {},
    });
}

function test_drmAgent() {
    // $ExpectType DRMAgent
    const drmAgent = window.webOSDev.drmAgent(window.webOSDev.DRM.Type.PLAYREADY);
    // $ExpectType string
    drmAgent.getClientId();
    // $ExpectType DrmType
    drmAgent.getDrmType();
    // $ExpectType number
    drmAgent.getErrorCode();
    // $ExpectType string
    drmAgent.getErrorText();
    // $ExpectType void
    drmAgent.getRightsError({
        onSuccess(res) {
            res; // $ExpectType GetRightsErrorSuccessResponse
            res.subscribed; // $ExpectType boolean
        },
        onFailure(err) {
            err; // $ExpectType FailureResponse
            err.errorCode; // $ExpectType string | number
            err.errorText; // $ExpectType string
        }
    });
    // $ExpectType void
    drmAgent.isLoaded({
        onSuccess(res) {
            res; // $ExpectType IsLoadedSuccessResponse
            res.clientId; // $ExpectType string
            res.drmType; // $ExpectType DrmType
            res.loadStatus; // $ExpectType boolean
        },
        onFailure(err) {
            err; // $ExpectType FailureResponse
            err.errorCode; // $ExpectType string | number
            err.errorText; // $ExpectType string
        }
    });
    // $ExpectType void
    drmAgent.load({
        onSuccess(res) {
            res; // $ExpectType LoadSuccessResponse
            res.clientId; // $ExpectType string
        },
        onFailure(err) {
            err; // $ExpectType FailureResponse
            err.errorCode; // $ExpectType string | number
            err.errorText; // $ExpectType string
        }
    });
    // $ExpectType void
    drmAgent.sendDrmMessage();
    // $ExpectType void
    drmAgent.sendDrmMessage({
        msg: 'some message',
        onSuccess(res) {
            res; // $ExpectType SendDrmMessageSuccessResponse
            res.msgId; // $ExpectType string | undefined
            res.resultCode; // $ExpectType number | undefined
            res.resultMsg; // $ExpectType string | undefined
        },
        onFailure(err) {
            err; // $ExpectType FailureResponse
            err.errorCode; // $ExpectType string | number
            err.errorText; // $ExpectType string
        }
    });
    drmAgent.unload({
        onSuccess(res) {
            res; // $ExpectType {}
        },
        onFailure(err) {
            err; // $ExpectType FailureResponse
            err.errorCode; // $ExpectType string | number
            err.errorText; // $ExpectType string
        }
    });
}

function test_launch() {
    // $ExpectType void
    window.webOSDev.launch({
        id: 'some id',
        params: {},
        onSuccess() {},
        onFailure(err) {
            err; // $ExpectType FailureResponse
            err.errorCode; // $ExpectType string | number
            err.errorText; // $ExpectType string
        }
    });
}

function test_launchParams() {
    // $ExpectType Record<string, any>
    window.webOSDev.launchParams();
}

function test_connection_getStatus_wired(wiredStatus: WiredStatus) {
    // $ExpectType string | undefined
    wiredStatus.dns1;
    // $ExpectType string | undefined
    wiredStatus.dns2;
    // $ExpectType string | undefined
    wiredStatus.dns3;
    // $ExpectType string | undefined
    wiredStatus.gateway;
    // $ExpectType string | undefined
    wiredStatus.interfaceName;
    // $ExpectType string | undefined
    wiredStatus.ipAddress;
    // $ExpectType "Manual" | "dhcp" | undefined
    wiredStatus.method;
    // $ExpectType string | undefined
    wiredStatus.netmask;
    // $ExpectType "yes" | "no" | undefined
    wiredStatus.onInternet;
    // $ExpectType ConnectionState
    wiredStatus.state;
}

function test_connection_getStatus_wifi(wifiStatus: WifiStatus) {
    // $ExpectType string | undefined
    wifiStatus.dns1;
    // $ExpectType string | undefined
    wifiStatus.dns2;
    // $ExpectType string | undefined
    wifiStatus.dns3;
    // $ExpectType string | undefined
    wifiStatus.gateway;
    // $ExpectType string | undefined
    wifiStatus.interfaceName;
    // $ExpectType string | undefined
    wifiStatus.ipAddress;
    // $ExpectType boolean | undefined
    wifiStatus.isWakeOnWiFiEnabled;
    // $ExpectType "Manual" | "dhcp" | undefined
    wifiStatus.method;
    // $ExpectType string | undefined
    wifiStatus.netmask;
    // $ExpectType "yes" | "no" | undefined
    wifiStatus.onInternet;
    // $ExpectType string | undefined
    wifiStatus.ssid;
    // $ExpectType ConnectionState
    wifiStatus.state;
}

function test_connection_getStatus_wifiDirect(wifiDirectStatus: WifiDirectStatus) {
    wifiDirectStatus.connectedPeers?.forEach(test_connection_getStatus_wifiDirect_WifiPeer);
    // $ExpectType string | undefined
    wifiDirectStatus.localIp;
    // $ExpectType ConnectionState
    wifiDirectStatus.state;
}

function test_connection_getStatus_wifiDirect_WifiPeer(wifiPeerInfo: WifiPeerInfo) {
    // $ExpectType number | undefined
    wifiPeerInfo.configMethod;
    // $ExpectType boolean
    wifiPeerInfo.connected;
    // $ExpectType string | undefined
    wifiPeerInfo.deviceAddress;
    // $ExpectType string
    wifiPeerInfo.deviceName;
    // $ExpectType boolean
    wifiPeerInfo.groupOwner;
    // $ExpectType "true" | "false" | undefined
    wifiPeerInfo.invited;
    // $ExpectType string | undefined
    wifiPeerInfo.peerIp;
    // $ExpectType string | undefined
    wifiPeerInfo.serviceDiscoveryResponse;
    // $ExpectType number | undefined
    wifiPeerInfo.signalLevel;
    // $ExpectType WifiWfdInfo | undefined
    wifiPeerInfo.wfdInfo;
    wifiPeerInfo.wfdInfo && test_connection_getStatus_wifiDirect_WifiPeer_wfdInfo(wifiPeerInfo.wfdInfo);
}

function test_connection_getStatus_wifiDirect_WifiPeer_wfdInfo(wfdInfo: WifiWfdInfo) {
    // $ExpectType boolean
    wfdInfo.wfdCpSupport;
    // $ExpectType WfdDeviceType
    wfdInfo.wfdDeviceType;
    // $ExpectType number
    wfdInfo.wfdRtspPort;
    // $ExpectType boolean
    wfdInfo.wfdSessionAvail;
}

function test_drmAgent_getClientId(drmAgent: DRMAgent) {
    // $ExpectType string
    drmAgent.getClientId();
}
