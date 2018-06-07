import * as InboxSDK from "inboxsdk";
import {Compose, InboxSDKInstance} from "inboxsdk";

InboxSDK.load(1, '1234').then((sdk: InboxSDKInstance) => sdk.Compose.registerComposeViewHandler((v: Compose.ComposeView) => {

}));
