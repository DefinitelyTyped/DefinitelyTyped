import SSH = require("node-ssh");

const client = new SSH();
client.connect({
  host: "127.0.0.1",
  username: "steel",
  password: "password",
})
.then(async (client) => {
  // $ExpectType SSH
  client;

  // $ExpectType string
  await client.exec("pwd", [], { cwd: "/etc" });
  // $ExpectType string
  await client.exec("pwd", [], { stream: "stderr" });
  // $ExpectType ExecResult
  await client.exec("pwd", [], { stream: "both" });
  // $ExpectType ExecResult
  await client.execCommand("node");

  await client.requestShell();
  const sftp = await client.requestSFTP();

  await client.mkdir("/root");
  await client.mkdir("/root", "exec");
  await client.mkdir("/root", "sftp", sftp);
  await client.getFile("1.txt", "1.txt", sftp);
  await client.putFile("1.txt", "1.txt", sftp);
  await client.putFiles([{ local: "1.txt", remote: "1.txt" }], { sftp });
  await client.putDirectory("/root", "/root", { sftp });
});
