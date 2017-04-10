declare var EventSource : ssutils.IEventSourceStatic;

function test_ssutils() {
     $.ss.eventReceivers = { "document": document };

    var source = new EventSource("/event-stream?channels=home,work");
    $(source).handleServerEvents({
        handlers: {
            onConnect: function(connect:ssutils.SSEConnect) {},
            onHeartbeat: function(msg:ssutils.SSEHeartbeat, e:MessageEvent){},
            onJoin: function(msg:ssutils.SSEJoin) {},
            onLeave: function(msg:ssutils.SSELeave) {},
            onUpdate: function(msg:ssutils.SSEUpdate) {}
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

function test_jQuery_functions(){
    $("document").setFieldError("name","message");
    var map = $("form").serializeMap();
    $("form").applyErrors({errorCode:"",message:"",stackTrace:"",errors:[]});
    $("form").clearErrors();
    $("form").bindForm({
        overrideMessages: true,
        messages: {"NotFound": "Not Found"},
        errorFilter: function(errorMsg, errorCode, type){}
    });
    $("form").applyValues({
        "Key": "Value"
    });
    $("form").bindHandlers({
        "test": function() {}
    });
}

function test_ssutils_Static(){
    $.ss.handlers["key"] = () => 0;
    $.ss.onSubmitDisable = "class";
    $.ss.validation.messages["Code"] = "Message";
    $.ss.clearAdjacentError();
    var date:Date = $.ss.todate("2001-01-01");
    var dateFmt:String = $.ss.todfmt("2001-01-01");
    dateFmt = $.ss.dfmt(new Date(2001,1,1));
    dateFmt = $.ss.dfmthm(new Date(2001,1,1));
    dateFmt = $.ss.tfmt12(new Date(2001,1,1));
    var parts:string[] = $.ss.splitOnFirst("A;B;C",";");
    parts = $.ss.splitOnLast("A;B;C", ";");
    var selectedText = $.ss.getSelection();
    var qs:{ [index: string]: string } = $.ss.queryString("http://google.com?a=b&c=d");
    var relativePath = $.ss.createUrl("/path/to/{File}", {File:"file.js"});
    var readableText = $.ss.humanize("TheVariableName");
    $.ss.normalizeKey("aAa");
    $.ss.normalize({"AA":1,"bB":2,"C":{"A":11,"B":22},"D":[1,2],"E":[{"A":111,"B":222}]});
    $.ss.normalize({"AA":1,"bB":2,"C":{"A":11,"B":22},"D":[1,2],"E":[{"A":111,"B":222}]}, true);
    $.ss.parseResponseStatus('{"message":"test"}');
    $.ss.postJSON("/path/to/url", {json:"data"}, function(r:any) {});

    $.ss.listenOn = "click onmousedown";
    $.ss.eventReceivers = { "document": document };
    $.ss.handlers["changeChannel"]("home");
}