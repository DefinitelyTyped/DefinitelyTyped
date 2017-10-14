import ZooKeeper = require('zookeeper');

const zk = new ZooKeeper({
    connect: "localhost:2181",
    timeout: 2000,
    debug_level: ZooKeeper.ZOO_LOG_LEVEL_WARN,
    host_order_deterministic: false,
    data_as_buffer: true,
});
// test1
zk.connect((e) => {
    if (e) throw e;
    console.log("zk session established, id=%s", zk.client_id);
    zk.a_create("/node.js1", "some value", ZooKeeper.ZOO_SEQUENCE | ZooKeeper.ZOO_EPHEMERAL, (rc, error, path) => {
        if (rc !== 0) {
            console.log("zk node create result: %d, error: '%s', path=%s", rc, error, path);
        } else {
            console.log("created zk node %s", path);
            process.nextTick(() => {
                zk.close();
            });
        }
    });
});
// test 2
const key = "/acl-test";
zk.connect((err, client) => {
    if (err) throw err;
    console.log("zoolocker: Connected to Zookeeper, id=%s", zk.client_id);

    client.add_auth("digest", "username:password", (rc, error) => {
        console.log("ADD_AUTH", rc, error);

        client.a_create(key, "", {
            version: -1
        }, (rc, error, path) => {
            console.log("CREATE", rc, error);

            client.a_set_acl(key, -1, [ZooKeeper.ZOO_CREATOR_ALL_ACL, ZooKeeper.ZOO_OPEN_ACL_UNSAFE, {
                perms: ZooKeeper.ZOO_PERM_WRITE,
                scheme: "world",
                auth: "anyone",
            }], (rc, error) => {
                console.log("SET_ACL", rc, error);
                client.a_get_acl(key, (rc, error, acl, stat) => {
                    console.log("GET_ACL", rc, error, acl);
                });
            });
        });
    });
});
