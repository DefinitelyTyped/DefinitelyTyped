import { Capabilities } from "selenium-webdriver/lib/capabilities";
import { Session } from "selenium-webdriver/lib/session";

function TestSession() {
    let capabilities: Capabilities = new Capabilities();
    let session: Session = new Session("sessionId", capabilities);
    let sessionId: string = session.getId();
    let sessionCapabilities: Capabilities = session.getCapabilities();
    let sessionCapability: any = session.getCapability("capability");
    let sessionToJSON: string = session.toJSON();
}
