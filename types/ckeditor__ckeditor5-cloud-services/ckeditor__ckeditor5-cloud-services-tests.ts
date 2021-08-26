import { CloudServices, CloudServicesCore } from "@ckeditor/ckeditor5-cloud-services";
import Token from "@ckeditor/ckeditor5-cloud-services/src/token/token";
import { Editor } from "@ckeditor/ckeditor5-core";

class MyEditor extends Editor {}
const editor = new MyEditor();

const instance = new CloudServices(new MyEditor());
instance.uploadUrl = "foo";
let token: Token = instance.token!;
token = instance.getTokenFor("foo");
instance
    .registerTokenUrl(() => "foo")
    .then(t => {
        token = t;
    });
instance.tokenUrl = "foo";
instance.tokenUrl = () => "foo";

const core = new CloudServicesCore(new MyEditor());
token = core.createToken("foo");
token = core.createToken("foo", { autoRefresh: true, initValue: "bar" });
core.createUploadGateway(token, "foo");

// $ExpectType CloudServices
editor.plugins.get('CloudServices');

// $ExpectType CloudServicesCore
editor.plugins.get('CloudServicesCore');
