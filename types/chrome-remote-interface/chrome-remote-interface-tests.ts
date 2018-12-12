import CDP from "chrome-remote-interface";

async function main(options: any) {
  await CDP.Activate(options);
  const targetList = await CDP.List(options);
  const targetTitle = targetList[0].title;

  const newTarget = await CDP.New(options);
  const newTargetDescription = newTarget.description;

  const devtoolsProtocol = await CDP.Protocol(options);
  const protocolVersion = devtoolsProtocol.version;

  const version = await CDP.Version(options);
  const webSocketDebuggerUrl = version.webSocketDebuggerUrl;
}

const options = {
  host: "localhost",
  port: 8080,
};

main(options);
