import * as stream from "stream";
import * as ssh2 from "ssh2-streams";

declare const SERVER_KEY: string;
declare const HOST_KEYS: { 'ssh-rsa': ssh2.HostKey };
declare const clientBufStream: stream.Transform & { buffer: string; };
declare const serverBufStream: stream.Transform & { buffer: string; };
declare const parsedKey: ssh2.ParsedKey;
declare const prompts: ssh2.Prompt[];
declare const buffer: Buffer;

const algos = ['ssh-dss', 'ssh-rsa', 'ecdsa-sha2-nistp521'];
const client = new ssh2.SSH2Stream({ algorithms: { serverHostKey: algos } });
const server = new ssh2.SSH2Stream({ server: true, hostKeys: HOST_KEYS });

client
    .pipe(server)
    .pipe(client);

client
    .on("error", (err: Error) => {})
    .on("ready", () => {})
    .on("header", (header: ssh2.Header) => {})
    .on("fingerprint", (hostKey: Buffer, callback: (success: boolean) => void) => {})
    .on("USERAUTH_BANNER", (message: string) => {})
    .on("USERAUTH_SUCCESS", () => {})
    .on("USERAUTH_FAILURE", (authsLeft: string[], partial: boolean) => {})
    .on("USERAUTH_PK_OK", () => {})
    .on("USERAUTH_INFO_REQUEST", (name: string, instructions: string, lang: string, prompts: ssh2.Prompt[]) => {})
    .on("CHANNEL_OPEN", (info: ssh2.ChannelOpenInfo) => {})
    .on("SERVICE_ACCEPT", (serviceName: string) => {})
    .on("REQUEST_SUCCESS", (resData?: Buffer) => {})
    .on("REQUEST_FAILURE", () => {})
    .on("GLOBAL_REQUEST", (reqName: string, wantReply: boolean, reqData: ssh2.TcpipForwardGlobalRequest | ssh2.openssh_StreamLocalForwardGlobalRequest) => {});

client.ping();
client.authPassword("username", "password");
client.authPK("username", parsedKey);
client.authHostBased("username", parsedKey, "localHostname", "localUsername");
client.authKeyboard("username");
client.authNone("username");
client.authInfoRes();
client.authInfoRes(["answer"]);
client.service("ssh-userauth");
client.requestFailure();
client.disconnect();
client.tcpipForward("bindAddr", 8080);
client.cancelTcpipForward("bindAddr", 8080);
client.openssh_noMoreSessions();
client.openssh_streamLocalForward("socketPath");
client.openssh_cancelStreamLocalForward("socketPath");
client.session(0, 0, 0);
client.directTcpip(0, 0, 0, { srcIP: "srcIP", srcPort: 0, destIP: "destIP", destPort: 0 });
client.openssh_directStreamLocal(0, 0, 0, { socketPath: "socketPath" });
client.x11Forward(0, { single: true, cookie: "cookie", protocol: "protocol", screen: 0 });
client.pty(0, 0, 0, 0, 0, "term", null);
client.openssh_agentForward(0);
client.shell(0);
client.exec(0, "command");
client.env(0, "key", "value");
client.subsystem(0, "name");
client.channelOpenConfirm(0, 0, 0, 0);
client.channelOpenFail(0, 0, "desc", "lang");

server
    .on("SERVICE_REQUEST", (serviceName: string) => {})
    .on("USERAUTH_REQUEST", (username: string, serviceName: string, authmethod: string, authMethodData: string | ssh2.PublicKeyAuthMethodData | ssh2.HostbasedAuthMethodData) => {})
    .on("USERAUTH_INFO_RESPONSE", (responses: string[]) => {})

server.disconnect(0);
server.authSuccess();
server.authFailure(["authMethods"], false);
server.requestSuccess();
server.requestFailure();
server.rekey();
server.channelSuccess(0);
server.channelFailure(0);
server.channelEOF(0);
server.channelClose(0);
server.channelWindowAdjust(0, 0);
server.channelData(0, "data");
server.channelExtData(0, "data", 0);
server.authInfoReq("name", "instructions", prompts);
server.authPKOK("keyAlgorithm", buffer);
server.forwardedTcpip(0, 0, 0, { bindAddr: "bindAddr", bindPort: 8080, remoteAddr: "remoteAddr", remotePort: 8080 });
server.x11(0, 0, 0, { originAddr: "originAddr", originPort: 0 });
server.openssh_forwardedStreamLocal(0, 0, 0, { socketPath: "socketPath" });

const maybeParsedKey = ssh2.utils.parseKey("keyData");
ssh2.utils.decryptKey(parsedKey, "passphrase");
const publicKey = ssh2.utils.genPublicKey(parsedKey);


declare const attrs: ssh2.Attributes;
const sftp = new ssh2.SFTPStream();
sftp.attrs(0, attrs);
sftp.chmod("path", 0, () => {});
sftp.chown("path", 0, 0, () => {});
sftp.close(buffer, () => {});
sftp.createReadStream("path");
sftp.createWriteStream("path");
sftp.data(0, buffer);
sftp.fastGet("remotePath", "localPath", () => {});
sftp.fastPut("localPath", "remotePath", () => {});