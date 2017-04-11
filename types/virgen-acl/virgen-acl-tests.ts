
import {Acl} from 'virgen-acl'


const acl = new Acl()


acl.addRole("user")
acl.addRole("subuser", "user")

acl.addResource("resource")
acl.addResource("subresource", "resource")


acl.allow("user")
acl.allow("user", "resource", ["do stuff", "more stuff"])

acl.deny("foo")
acl.deny("foo", "resource", ["do stuff", "more stuff"])


acl.query("user", "resource", "do stuff", (err, allowed) => {})


const userProp = {
    role_id: "user"
}

const userGetter = {
    getRoleId() {
        return "user"
    } 
}

const resourceProp = {
    resource_id: "resource"
}

const resourceGetter = {
    getResourceId() {
        return "resource"
    }
}

acl.query(userProp, resourceProp, "do stuff", () => {})
acl.query(userGetter, resourceGetter, "do stuff", () => {})