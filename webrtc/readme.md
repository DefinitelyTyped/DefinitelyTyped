#  WebRTC Definition Notes

## The WebRTC specification 

The WebRTC specification is currently a work in progress, but it has been implemented at a basic level in recent versions of Chrome, Opera and (to a lesser extent) Firefox. 
The latest version of the specification can be found at http://dev.w3.org/2011/webrtc/editor/webrtc.html. 

This particular set of definitions has been annotated with the vendor-specific prefixes for Chrome (e.g., `webitkit`), 
but anyone who wants, feel free to add the Mozilla-specific prefixes.

### Adding the reference to your project

    /// <reference path="MediaStream.d.ts" />
    /// <reference path="RTCPeerConnection.d.ts" />