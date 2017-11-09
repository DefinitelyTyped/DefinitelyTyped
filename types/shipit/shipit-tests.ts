import shipit = require("shipit");

shipit.initConfig({
    default: {
        workspace: "/tmp/github-monitor",
        deployTo: "/tmp/deploy_to",
        repositoryUrl: "https://github.com/user/repo.git",
        ignores: [".git", "node_modules"],
        rsync: ["--del"],
        keepReleases: 2,
        key: "/path/to/key",
        shallowClone: true
    },
    staging: {
        servers: "user@myserver.com"
    }
});

shipit.task("build", () => {
  shipit.emit("built");
});

shipit.on("built", () => {
  shipit.start("start-server");
});

shipit.task("pwd", () => {
  return shipit.remote("pwd");
});

shipit.blTask("pwd", () => {
  return shipit.remote("pwd");
});

shipit.start("task");
shipit.start("task1", "task2");
shipit.start(["task1", "task2"]);

shipit.local("ls -lah", {cwd: "/tmp/deploy/workspace"}).then((res: any) => {
  console.log(res.stdout);
  console.log(res.stderr);
});

shipit.remote("ls -lah").then((res: any) => {
  console.log(res[0].stdout);
  console.log(res[0].stderr);
});

shipit.remoteCopy("/tmp/workspace", "/opt/web/myapp").then(() => {});
shipit.log("hello %s", "world");
