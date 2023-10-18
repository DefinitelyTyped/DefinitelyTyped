import Jenkins = require("jenkins");

const jenkins = new Jenkins({ baseUrl: "http://user:pass@localhost:8080", crumbIssuer: true });

(async () => {
    await jenkins
        .info()
        .then(info => {
            console.log(info);
        })
        .catch(err => {
            throw err;
        });

    await jenkins.build
        .get("example", 1)
        .then(data => console.log(data))
        .catch(err => {
            throw err;
        });

    await jenkins.build
        .log("example", 1)
        .then(log => console.log(log))
        .catch(err => {
            throw err;
        });

    await jenkins.build
        .logStream("example", 1)
        .then(logStream => console.log(logStream))
        .catch(err => {
            throw err;
        });

    await jenkins.build.stop("example", 1).catch(err => {
        throw err;
    });

    await jenkins.build.term("example", 1).catch(err => {
        throw err;
    });

    await jenkins.job.build("example").catch(err => {
        if (err) throw err;
    });

    await jenkins.job.build({ name: "example", parameters: { name: "value" } }).catch(err => {
        if (err) throw err;
    });

    await jenkins.job
        .config("example")
        .then(data => console.log("job xml config", data))
        .catch(err => {
            throw err;
        });

    await jenkins.job
        .config("example", "<xml></xml>")
        .then(after => console.log(after))
        .catch(err => {
            throw err;
        });

    await jenkins.job.copy("oldJob", "newJob").catch(err => {
        throw err;
    });

    await jenkins.job.create("example", "<xml></xml>").catch(err => {
        throw err;
    });

    await jenkins.job.destroy("example").catch(err => {
        throw err;
    });

    await jenkins.job.disable("example").catch(err => {
        throw err;
    });

    await jenkins.job.enable("example").catch(err => {
        throw err;
    });

    await jenkins.job
        .exists("example")
        .then(exists => console.log("true or false", exists))
        .catch(err => {
            throw err;
        });

    await jenkins.job
        .get("example")
        .then(data => console.log("job", data))
        .catch(err => {
            throw err;
        });

    await jenkins.job
        .list()
        .then(data => console.log("jobs", data))
        .catch(err => {
            throw err;
        });

    await jenkins.node
        .config("example")
        .then(data => console.log("xml", data))
        .catch(err => {
            throw err;
        });

    await jenkins.node.create("slave").catch(err => {
        throw err;
    });

    await jenkins.node.destroy("slave").catch(err => {
        throw err;
    });

    await jenkins.node.disconnect("slave", "no longer used").catch(err => {
        throw err;
    });

    await jenkins.node.disable("slave", "network failure").catch(err => {
        throw err;
    });

    await jenkins.node.enable("slave").catch(err => {
        throw err;
    });

    await jenkins.node
        .exists("slave")
        .then(exists => console.log("true or false", exists))
        .catch(err => {
            throw err;
        });

    await jenkins.node
        .get("node-name")
        .then(info => console.log("node", info))
        .catch(err => {
            throw err;
        });

    await jenkins.node
        .list()
        .then(data => console.log("nodes", data))
        .catch(err => {
            throw err;
        });

    await jenkins.queue
        .list()
        .then(data => console.log("queues", data))
        .catch(err => {
            throw err;
        });

    await jenkins.queue
        .item(130)
        .then(data => console.log("item", data))
        .catch(err => {
            throw err;
        });

    await jenkins.queue.cancel(23).catch(err => {
        throw err;
    });

    await jenkins.view
        .config("example")
        .then(data => console.log("xml", data))
        .catch(err => {
            throw err;
        });

    await jenkins.view.config("example", "<xml></xml>").catch(err => {
        throw err;
    });

    await jenkins.view.create("example", "list").catch(err => {
        throw err;
    });

    await jenkins.view.destroy("example").catch(err => {
        throw err;
    });

    await jenkins.view
        .exists("example")
        .then(exists => console.log("true or false", exists))
        .catch(err => {
            throw err;
        });

    await jenkins.view
        .get("example")
        .then(data => console.log("view", data))
        .catch(err => {
            throw err;
        });

    await jenkins.view
        .list()
        .then(data => console.log("views", data))
        .catch(err => {
            throw err;
        });

    await jenkins.view.add("example", "jobExample").catch(err => {
        throw err;
    });

    await jenkins.view.remove("example", "jobExample").catch(err => {
        throw err;
    });
})();
