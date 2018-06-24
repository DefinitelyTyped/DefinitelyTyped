import CrowdClient from "atlassian-crowd-client";
import Attributes from "atlassian-crowd-client/lib/models/attributes";
import Group from "atlassian-crowd-client/lib/models/group";
import Session from "atlassian-crowd-client/lib/models/session";
import User from "atlassian-crowd-client/lib/models/user";

// Initialize the Crowd client:
const crowd = new CrowdClient({
    baseUrl: "https://crowd.example.com/",
    application: {
        name: "demo",
        password: "example"
    }
});

// Create a new user:
crowd.user.create(new User("John", "Doe", "John Doe", "johndoe@example.com", "johndoe", "secret"));
// Remove
crowd.user.remove("johndoe");

// Authenticate to Crowd:
crowd.session.create("someusername", "somepassword").then((session: Session) => {
    // Fetch the user profile:
    crowd.session.getUser(session.token).then((user: User) => {
        console.log("Hello, " + user.displayname);
    });
});

// Find all active groups (using Crowd Query Language):
crowd.search.group("active=true").then((groups: string[]) => {
    console.log("Found groups: " + groups.length);
});

const group = new Group("testgroup1", "Test group");

const attributes = new Attributes({
    foo: "Foo",
    bar: ["Bar", "Baz"],
    obj: { a: "A" }
});

crowd.group.attributes.set(group.groupname, attributes).then(() => {
    console.log("Group attribute is set.");
});
