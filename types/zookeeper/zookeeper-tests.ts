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
