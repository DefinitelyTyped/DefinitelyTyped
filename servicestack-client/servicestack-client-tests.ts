/// <reference path="../es6-shim/es6-shim.d.ts" />
/// <reference path="../isomorphic-fetch/isomorphic-fetch.d.ts" />
/// <reference path="servicestack-client.d.ts" />

function test_ServerEventsClient(){
    let sse = new ServiceStack.ServerEventsClient(
        "http://example.org",
        ["home","work"], {
            handlers: {
                onConnect(sub:ServiceStack.ISseConnect) {
                    console.log(sub.channels, sub.displayName, sub.id, sub.userId, sub.profileUrl);
                }
            }
        });

    sse.updateChannels(["home","play"]);
}

class RequestDto implements ServiceStack.IReturn<ResponseDto> {
    createResponse(): ResponseDto {
        return new ResponseDto();
    }
}

class ResponseDto {
    result:number;
}

function test_JsonServiceClient(){
    let client:ServiceStack.JsonServiceClient;
    client.get(new RequestDto())
        .then(r => {
            r.result++;
        })
        .catch(e => {
            console.log(e);
        });

    client.userName = "user";
    client.password = "pass";
    client.setCredentials("user","pass");
    var ua:string = client.headers.get("user-agent");

    client.post(new RequestDto());
    client.put(new RequestDto());
    client.patch(new RequestDto());
    client.delete(new RequestDto());
    client.send("POST", new RequestDto());

    ServiceStack.JsonServiceClient.toBase64 = str => str;
}

function test_Utils(){
    ServiceStack.toCamelCase("s");
    ServiceStack.sanitize({a:1});
    ServiceStack.nameOf(new RequestDto());
    ServiceStack.css("body", "width", "100%");
    ServiceStack.splitOnFirst("a,b",",");
    ServiceStack.splitOnLast("a,b",",");
    ServiceStack.humanize("FOO");
    ServiceStack.queryString("?a=b");
    ServiceStack.combinePaths("path","to","join");
    ServiceStack.createPath("path",{a:1});
    ServiceStack.createUrl("path",{a:1});
    ServiceStack.appendQueryString("?a=1",{b:2});
    ServiceStack.bytesToBase64(new Uint8Array(0));
    ServiceStack.toDate("2001-01-01");
    ServiceStack.toDateFmt("2001-01-01");
    ServiceStack.padInt(1);
    ServiceStack.dateFmt(new Date());
    ServiceStack.dateFmtHM(new Date());
    ServiceStack.timeFmt12(new Date());
}