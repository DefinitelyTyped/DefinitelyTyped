/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="ss-utils.d.ts" />

declare var EventSource : sse.IEventSourceStatic;

declare module sse {
    interface IEventSourceStatic extends EventTarget {
        new (url: string, eventSourceInitDict?: IEventSourceInit):IEventSourceStatic;
        url: string;
    }

    interface IEventSourceInit {
        withCredentials?: boolean;
    }
}

function test_ssutils() {
     $.ss.eventReceivers = { "document": document };

    var source = new EventSource("/event-stream?channels=home,work");
    $(source).handleServerEvents({
        handlers: {
            onConnect: function(connect:SSUtilsSSEConnect) {},
            onHeartbeat: function(msg:SSUtilsSSEHeartbeat, e:MessageEvent){},
            onJoin: function(msg:SSUtilsSSEJoin) {},
            onLeave: function(msg:SSUtilsSSELeave) {}            
        },
        receivers: {
            tv: {
                watch: function(){}
            }
        }
    });

    $(document).bindHandlers({
        announce: function (msg:string) {}
    })
    .on('customEvent', function (e, msg, msgEvent) { });
    
    $.ss.handlers["changeChannel"]("home");
}