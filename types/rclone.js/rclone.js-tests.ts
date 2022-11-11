import rclone = require("rclone.js");
import { promises as rclonePromise } from "rclone.js";
import { join } from "path";

const rcloneRemoteName = "atifcppprogrammer-aws-s3";

const rcloneConfigPath = join(
  "/home",
  process.env["USER"] || "atifcppprogrammer",
  ".config/rclone/rclone.conf"
);

const rcloneConfigOptions = {
  env: { RCLONE_CONFIG: rcloneConfigPath },
  shell: "/bin/sh",
  "max-depth": 1
};

async function usingRclonePromiseAPI() {
  try {
    const response = await rclonePromise.ls(rcloneRemoteName, rcloneConfigOptions);
    console.log(response.toString());
  } catch (error) {
    console.log(error.toString());
  }
}

async function usingRcloneDefaultAPI() {
  const ls = rclone.ls(rcloneRemoteName, rcloneConfigOptions);
  ls.stdout?.on("data", (data: Buffer) => {
    console.log(data.toString());
  });

  ls.stderr?.on("data", (data: Buffer) => {
    console.error(data.toString());
  });
}

usingRclonePromiseAPI();
usingRcloneDefaultAPI();
